"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Portfolio.module.scss";

export default function AboutMeImage(props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function onLoad() {
    imgRef.current?.classList.add(styles["c-portfolio-image--loaded"]);
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.style.width = "auto";
    }
  }

  useEffect(() => {
    imgRef.current?.addEventListener("load", () => {
      onLoad();
    });

    if (imgRef.current?.complete) {
      onLoad();
    }
  }, []);

  const { smallImage, image, imageWrapperHeight, imageHeight } = props;

  return (
    <div
      ref={wrapperRef}
      className={`${styles["c-portfolio-image-wrapper"]}`}
      style={{
        height: imageWrapperHeight + "px",
        backgroundImage: `url(${smallImage})`,
        width: imageWrapperHeight + "px",
      }}
    >
      <img
        loading="lazy"
        ref={imgRef}
        src={image}
        className={`${styles["c-portfolio-image"]}`}
        style={{ height: imageHeight + "px" }}
        alt="Obrázek z galerie"
      />
    </div>
  );
}
