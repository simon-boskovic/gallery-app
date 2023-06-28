"use client";

import navigationStyles from "../styles/Navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className={`${navigationStyles["c-navigation"]}`}>
      <div className={`${navigationStyles["c-nav-container"]}`}>
        <Link
          href={"/"}
          className={`${navigationStyles["c-logo-wrapper"]} ${
            isScrolled ? navigationStyles["c-logo-wrapper--scrolled"] : ""
          }`}
        >
          <img
            src={"/images/hero/compressed/images/hero-image.webp"}
            alt="Image"
            className={`${navigationStyles["c-logo"]}`}
          />
          <div
            className={`${navigationStyles["c-text-logo"]} ${
              isScrolled ? navigationStyles["c-text-logo--scrolled"] : ""
            }`}
          >
            HREF
          </div>
        </Link>
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
            className={`${navigationStyles["c-menu-navigation"]}
        ${isMenuOpen ? "" : navigationStyles["c-menu-navigation--closed"]}
        `}
          >
            <Link
              href="/#portfolio"
              scroll={false}
              onClick={() => setIsMenuOpen(false)}
            >
              <div>Portfolio</div>
            </Link>
            <Link
              href="/#about-me"
              scroll={false}
              onClick={() => setIsMenuOpen(false)}
            >
              <div>O mě</div>
            </Link>
            <Link
              href="/#services"
              scroll={false}
              onClick={() => setIsMenuOpen(false)}
            >
              <div>Služby</div>
            </Link>
            <Link
              href="/#contact"
              scroll={false}
              onClick={() => setIsMenuOpen(false)}
            >
              <div>Kontakt</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
