import getFileStructure from "../../../components/ffmpeg";
import GalleryItem from "../../../components/gallery/gallery-item";
import styles from "../../../styles/Gallery.module.scss";

export function generateStaticParams() {
  return ["interior_photography", "real_estate", "corporate_photography"].map(
    (gallery) => ({ gallery: gallery })
  );
}

export default async function GalleryPage({ params: { gallery } }) {
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
