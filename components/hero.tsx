"use client";
import Image from "next/image";
import heroStyles from "../styles/Hero.module.scss";
import styles from "../styles/HomePage.module.scss";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      imgRef.current.classList.add(heroStyles["c-hero-image--loaded"]);
    }
  }, []);

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
          src={"/images/hero/hero-image.png"}
          alt="Image"
          ref={imgRef}
          className={`${heroStyles["c-hero-image"]}`}
        />
      </div>
    </div>
  );
}
