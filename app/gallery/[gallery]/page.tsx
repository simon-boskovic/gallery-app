import getFileStructure from "../../../components/ffmpeg";
import GalleryGrid from "../../../components/gallery/gallery-grid";
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
    relativePath,
    "20:-1",
    "1320:-1",
    80
  );

  return (
    <div className={styles["c-gallery-wrapper"]}>
      <GalleryGrid resolvedImages={resolvedImages}></GalleryGrid>
    </div>
  );
}
