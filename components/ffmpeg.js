import fs from "fs/promises";
import Path from "path";
import { exec } from "child_process";

export default async function getFileStructure(absolutePath, relativePath) {
  const compressedDir = `${absolutePath}/compressed`;
  const placeholderFilesDir = compressedDir + "/placeholders";
  const imagesFilesDir = compressedDir + "/images";

  return checkFileExists(compressedDir)
    .then((dirExist) => {
      if (!dirExist) {
        return fs.mkdir(compressedDir).then(async (created) => {
          return Promise.all([
            checkFileExists(placeholderFilesDir).then(
              (placeholderDirtExist) => {
                if (!placeholderDirtExist) {
                  return fs.mkdir(placeholderFilesDir);
                }
              }
            ),
            checkFileExists(imagesFilesDir).then((exist) => {
              if (!exist) {
                return fs.mkdir(imagesFilesDir);
              }
            }),
          ]);
        });
      }
      return true;
    })
    .then(() => fs.readdir(absolutePath, { withFileTypes: true }))
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
                    `ffmpeg -i ${pathToFile}  -c:v libwebp ${imageFilePath}`
                  );
                }
                return {
                  image: relativePath + "/compressed/images/" + imageFileName,
                  smallImage:
                    relativePath +
                    "/compressed/placeholders/" +
                    placeholderFileName,
                };
              });
            }
          );
        })
      )
    );
}

function checkFileExists(file) {
  return fs
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
