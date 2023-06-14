"use client";
import { useState } from "react";
import PortfolioItemImage from "../portfolio/portfolio-item-image";
import styles from "../../styles/Gallery.module.scss";
import FsLightbox from "fslightbox-react";

export default function GalleryItem(props) {
  const { resolvedImages } = props;

  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const onSetImageIndex = (index) => {
    setImageIndex(index);
  };
  const onSetToggler = (state) => {
    setToggler(!state);
  };

  return (
    <div className={styles["c-gallery-images"]}>
      <div className={styles["c-gallery-heading"]}>
        <h1>Rád zachycuji nejlepší okamžiky</h1>
      </div>
      {resolvedImages.map((res, index) => {
        return (
          <PortfolioItemImage
            imageHeight={240}
            imageWrapperHeight={240}
            image={res.image}
            smallImage={res.smallImage}
            key={index}
            index={index}
            toggler={toggler}
            setImageIndex={onSetImageIndex}
            setToggler={onSetToggler}
          />
        );
      })}
      <FsLightbox
        toggler={toggler}
        sourceIndex={imageIndex}
        sources={resolvedImages.map((res) => res.lightboxImage)}
      />
    </div>
  );
}
