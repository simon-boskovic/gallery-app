import getFileStructure from "../../../components/ffmpeg";
import GalleryItem from "../../../components/gallery/gallery-item";
import styles from "../../../styles/Gallery.module.scss";
import fs from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const portfolioJsonPath = path.join(process.cwd(), "data", "portfolio.json");

  const dataJson = await fs
    .readFile(portfolioJsonPath, "utf-8")
    .then((res) => JSON.parse(res));

  return dataJson.portfolio.map((portfolio) => ({
    gallery: portfolio.imagesPath,
  }));
}

export default async function GalleryPage(params) {
  const relativePath = "/images/full-gallery-test";

  let resolvedImages = await getFileStructure(
    process.cwd() + "/public" + relativePath,
    relativePath
  );

  return (
    <div className={styles["c-gallery-wrapper"]}>
      <GalleryItem resolvedImages={resolvedImages}></GalleryItem>
    </div>
  );
}