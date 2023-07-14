import { Metadata } from "next";
import getFileStructure from "../../../components/ffmpeg";
import GalleryGrid from "../../../components/gallery/gallery-grid";
import styles from "../../../styles/Gallery.module.scss";
import fsp from "fs/promises";
import path from "path";

const portfolioJsonPath = path.join(process.cwd(), "data", "portfolio.json");

async function getPortofilioJson() {
  return fsp
    .readFile(portfolioJsonPath, "utf-8")
    .then((res) => JSON.parse(res));
}

async function getSingleItem(imagesPath: string) {
  const dataJson = await getPortofilioJson();

  return (
    dataJson.portfolio.find((item) => item.imagesPath === imagesPath) || null
  );
}

export async function generateStaticParams() {
  const dataJson = await getPortofilioJson();

  const res = dataJson.portfolio.map((portfolio) => ({
    gallery: portfolio.imagesPath,
  }));
  return res;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const item = await getSingleItem(params.gallery);
  return {
    title: item.pageTitle,
  };
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
