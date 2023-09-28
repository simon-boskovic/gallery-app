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
        <div
          className={`${heroStyles["c-hero-content"]} ${
            isImageLoaded ? heroStyles["c-hero-content--loaded"] : ""
          }`}
        >
          <h1>Ráda zachycuji Vaše nejkrásnější okamžiky.</h1>
          <p className={`${heroStyles["c-hero-subtitle"]}`}>
            Jsem nadšená fotografka na začátku své kariéry, vášnivě zamilovaná
            do svého řemesla. Bude pro mě velkou ctí zachytit pro Vás
            nezapomenutelné okamžiky.
          </p>
          <Link
            href="#portfolio"
            scroll={true}
            className={`${heroStyles["c-button-wrapper"]}`}
          >
            <div>Ukázka</div>
            <div className={`${heroStyles["c-button-wrapper__icon"]}`}></div>
          </Link>
        </div>
        <div className={heroStyles["c-hero-image-wrapper"]}>
          <img
            src={imagePath}
            alt="Hlavní obrázek"
            ref={imgRef}
            className={`${heroStyles["c-hero-image"]} ${
              isImageLoaded ? heroStyles["c-hero-image--loaded"] : ""
            }`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
}
