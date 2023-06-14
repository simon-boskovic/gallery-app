import { exec } from "child_process";
import fs from "fs";
import fsp from "fs/promises";
import Path from "path";

export default async function getFileStructure(absolutePath, relativePath) {
  const compressedDir = `${absolutePath}/compressed`;
  const placeholderFilesDir = compressedDir + "/placeholders";
  const imagesFilesDir = compressedDir + "/images";

  return checkFileExists(compressedDir)
    .then((dirExist) => {
      if (!dirExist) {
        return fsp.mkdir(compressedDir).then(async (created) => {
          return Promise.all([
            checkFileExists(placeholderFilesDir).then(
              (placeholderDirtExist) => {
                if (!placeholderDirtExist) {
                  return fsp.mkdir(placeholderFilesDir);
                }
              }
            ),
            checkFileExists(imagesFilesDir).then((exist) => {
              if (!exist) {
                return fsp.mkdir(imagesFilesDir);
              }
            }),
          ]);
        });
      }
      return true;
    })
    .then(() => fsp.readdir(absolutePath, { withFileTypes: true }))
    .then((files) =>
      files.filter((file) => file.isFile()).map((file) => file.name)
    )
    .then((files) =>
      Promise.all(
        files.map((file) => {
          const pathToFile = `${absolutePath}/${file}`;
          const placeholderFileName = `${
            Path.parse(pathToFile).name
          }-ffmpeg-small.webp`;
          const imageFileName = `${Path.parse(pathToFile).name}.webp`;

          const placeholderFilePath = `${placeholderFilesDir}/${placeholderFileName}`;
          const imageFilePath = `${imagesFilesDir}/${imageFileName}`;
          return checkFileExists(placeholderFilePath).then(
            async (placeholderExists) => {
              if (!placeholderExists) {
                exec(
                  `ffmpeg -i ${pathToFile}  -vf scale=20:-1 ${placeholderFilePath}`
                );
              }
              return checkFileExists(imageFilePath).then((imageExists) => {
                if (!imageExists) {
                  exec(
                    `ffmpeg -i ${pathToFile}  -c:v libwebp -quality 5 ${imageFilePath}`
                  );
                }
                return {
                  image: relativePath + "/compressed/images/" + imageFileName,
                  smallImage:
                    relativePath +
                    "/compressed/placeholders/" +
                    placeholderFileName,
                  lightboxImage: relativePath + "/" + file,
                };
              });
            }
          );
        })
      )
    );
}

function checkFileExists(file) {
  return fsp
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
