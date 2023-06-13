"use client";

import styles from "../../styles/Portfolio.module.scss";
import PortfolioItem from "./portfolio-item";

export default function Portoflio(props) {
  const { portfolioResult } = props;

  return (
    <div className={`${styles["c-portfolio-wrapper"]}`}>
      <h2>Moje práce</h2>
      <p className={`${styles["c-portfolio-description"]}`}>
        Pomáhání podnikům prostřednictvím fotografie je to, co dělá můj job
        smysluplným. Níže najdete některé z mých nedávných prací.
      </p>

      <div className={`${styles["c-portfolio-item-list"]}`}>
        {portfolioResult.map((portfolioItem, index) => (
          <PortfolioItem key={index} portfolioItem={portfolioItem} />
        ))}
      </div>
    </div>
  );
}
