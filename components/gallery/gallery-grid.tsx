"use client";
import { useState } from "react";
import styles from "../../styles/Gallery-grid.module.scss";
import PortfolioItemImage from "../portfolio/portfolio-item-image";
import FsLightbox from "fslightbox-react";

export default function GalleryGrid(props) {
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
    <div className={styles["c-gallery-product-grid-list"]}>
      {resolvedImages.map((res, index) => {
        return (
          <div key={index} className={styles["c-gallery-product-grid-item"]}>
            <PortfolioItemImage
              image={res.image}
              smallImage={res.smallImage}
              key={index}
              index={index}
              toggler={toggler}
              setImageIndex={onSetImageIndex}
              setToggler={onSetToggler}
            ></PortfolioItemImage>
          </div>
        );
      })}
      <FsLightbox
        toggler={toggler}
        sourceIndex={imageIndex}
        sources={resolvedImages.map((res) => res.image)}
      />
    </div>
  );
}
