"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import navigationStyles from "../styles/Navigation.module.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let contentElement: Element;
  const handleScroll = () => {
    setIsScrolled(contentElement!.scrollTop > 0);
  };

  useEffect(() => {
    contentElement = document.querySelector(".content")!;
    contentElement.addEventListener("scroll", handleScroll);
    return () => contentElement.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (isScrolled) {
      navbar!.style.top = "0";
    } else {
      navbar!.style.top = "40px";
    }
  }, [isScrolled]);

  return (
    <div
      id="navbar"
      className={`${navigationStyles["c-navigation"]} ${
        isScrolled ? navigationStyles["c-navigation--scrolled"] : ""
      }`}
    >
      <div className={`${navigationStyles["c-nav-container"]}`}>
        {/* <Link href="/" passHref>
          <div className={`${navigationStyles["c-logo-wrapper"]}`}>
            <img
              src="/images/hero/compressed/images/hero-image.webp"
              alt="Image"
              className={`${navigationStyles["c-logo"]}`}
            />
            <div className={`${navigationStyles["c-text-logo"]}`}>HREF</div>
          </div>
        </Link> */}
        <div className={`${navigationStyles["c-menu-button-container"]}`}>
          <div
            className={`${navigationStyles["c-menu-button-wrapper"]}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`${navigationStyles["c-menu-text"]}`}>Menu</div>
            <div
              className={`${navigationStyles["c-menu-toggle-wrap"]} ${
                isMenuOpen
                  ? navigationStyles["c-menu-toggle-wrap--is-open"]
                  : ""
              }`}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div
            className={`${navigationStyles["c-menu-navigation"]} ${
              isMenuOpen ? "" : navigationStyles["c-menu-navigation--closed"]
            }`}
          >
            <Link href="/#portfolio" scroll={false} passHref>
              <div onClick={() => setIsMenuOpen(false)}>Portfolio</div>
            </Link>
            <Link href="/#about-me" scroll={false} passHref>
              <div onClick={() => setIsMenuOpen(false)}>O mě</div>
            </Link>
            <Link href="/#services" scroll={false} passHref>
              <div onClick={() => setIsMenuOpen(false)}>Služby</div>
            </Link>
            <Link href="/#contact" scroll={false} passHref>
              <div onClick={() => setIsMenuOpen(false)}>Kontakt</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
