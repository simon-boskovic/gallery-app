import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["c-footer"]}>
      <div className={styles["c-footer-container"]}>
        <div>
          <img src={"/images/footer/links/facebook.svg"} alt="" />
          <img src={"/images/footer/links/instagram.svg"} alt="" />
        </div>
        <div>Developed by Sajmon</div>
      </div>
    </footer>
  );
}
