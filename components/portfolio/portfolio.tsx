"use client";

import styles from "../../styles/Portfolio.module.scss";
import PortfolioItem from "./portfolio-item";

export default function Portoflio(props) {
  const { portfolioResult } = props;

  return (
    <div className={`${styles["c-portfolio-wrapper"]}`}>
      <h2>Moje práce</h2>
      <p className={`${styles["c-portfolio-description"]}`}>
        Moje fotografická cesta je oživena radostí z párových a těhotenských
        fotografií, stejně jako z portrétů, které pomáhají lidem zachovat vzácné
        momenty a vytvářet výjimečné vzpomínky. Zde naleznete výběr mých
        nejnovějších děl, které reflektují tuto vášeň.
      </p>

      <div className={`${styles["c-portfolio-item-list"]}`}>
        {portfolioResult.map((portfolioItem, index) => (
          <PortfolioItem key={index} portfolioItem={portfolioItem} />
        ))}
      </div>
    </div>
  );
}
