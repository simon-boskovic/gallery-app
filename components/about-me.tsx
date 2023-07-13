import styles from "../styles/About-me.module.scss";

export default function AboutMe(props) {
  const { imagePaths } = props;
  return (
    <div className={styles["c-about-section-wrapper"]}>
      <div>
        <h2>Proč jsem se zamiloval do fotografie</h2>
        <h3 className={styles["c-about-subtitle"]}>
          Ahoj, jmenuji se Michaela
        </h3>
        <p className={styles["c-about-text"]}>
          Zjistila jsem, že fotografování je krásná práce, při které mohu
          zachycovat krásné a nezapomenutelné pocity. Díky focení mám možnost
          poznávat i úžasné lidi. Mám ráda fotografie plné emocí. Nenutím
          klienty do strojených pózí, chci zachytit jedinečnost okamžiku.
          Největší odměna pro mě je, když si focení užijete a odcházíte s
          pocitem, že jste strávili příjemný čas se svými nejbližšími
        </p>
      </div>
      <div className={styles["c-about-images"]}>
        <div className={styles["c-about-top-image"]}>
          <img src={imagePaths[0].image} alt="" />
        </div>
        <div className={styles["c-about-bottom-image"]}>
          <img src={imagePaths[1].image} alt="" />
        </div>
      </div>
    </div>
  );
}
