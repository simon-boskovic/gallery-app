import styles from "../styles/About-me.module.scss";

export default function AboutMe() {
  return (
    <div className={styles["c-about-section-wrapper"]}>
      <div>
        <h2>Proč jsem se zamiloval do fotografie</h2>
        <p className={styles["c-about-text"]}>
          Záchyt okamžiků: Fotografie mi umožňuje zachytit{" "}
          <strong>okamžiky</strong> a události tak, jak je vidím. Můžu
          zaznamenat{" "}
          <strong>
            vzrušení, radost, emocionální okamžiky a pamětné okamžiky
          </strong>
          , které by jinak mohly být ztraceny v čase. Mít schopnost zachytit a
          sdílet tyto okamžiky je pro mě velmi vzrušující.
        </p>
        <br />
        <p className={styles["c-about-text"]}>
          Komunikace bez slov: Fotografie je univerzálním jazykem, který
          překračuje jazykové bariéry. Můžu vyjádřit{" "}
          <strong>emoce, náladu a myšlenky</strong> pomocí jediného obrázku.
          Tímto způsobem mohu <strong>komunikovat</strong> s lidmi z různých
          kultur a prostředí a sdílet své příběhy bez slov.
        </p>
      </div>
      <div className={styles["c-about-images"]}>
        <div className={styles["c-about-top-image"]}>
          <img src="/images/about-me/about-me1.jpg" alt="" />
        </div>
        <div className={styles["c-about-bottom-image"]}>
          <img src="/images/about-me/about-me2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
