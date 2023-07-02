"use client";
import { useEffect, useRef, useState } from "react";
import heroStyles from "../styles/Hero.module.scss";
import styles from "../styles/HomePage.module.scss";
import Link from "next/link";

export default function Hero(props) {
  const { imagePath } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsImageLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={`${styles["c-background-gradient"]}`}>
      <div className={`${heroStyles["c-hero-container"]}`}>
        <div className={`${heroStyles["c-hero-content"]}`}>
          <h1>Ráda zachycuji nejlepší okamžiky</h1>
          <p className={`${heroStyles["c-hero-subtitle"]}`}>
            Jsem specializovaný na konceptuální fotografii a působím v
            Amsterdamu. Rád fotím s kreativitou a vášní.
          </p>
          <Link
            href="#portfolio"
            scroll={false}
            className={`${heroStyles["c-button-wrapper"]}`}
          >
            <div>Ukázka</div>
            <div className={`${heroStyles["c-button-wrapper__icon"]}`}></div>
          </Link>
        </div>
        <img
          src={imagePath}
          alt="Image"
          ref={imgRef}
          className={`${heroStyles["c-hero-image"]} ${
            isImageLoaded ? heroStyles["c-hero-image--loaded"] : ""
          }`}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}
