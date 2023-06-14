import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["c-footer"]}>
      <div className={styles["c-footer-container"]}>
        <div>
          <img src={"/images/footer/links/facebook.svg"} alt="" />
          <img src={"/images/footer/links/instagram.svg"} alt="" />
        </div>
        <a
          href="https://www.linkedin.com/in/%C5%A1imon-bo%C5%A1kovi%C4%8D-469599183/"
          target="_blank"
        >
          Developed by Sajmon
        </a>
      </div>
    </footer>
  );
}
