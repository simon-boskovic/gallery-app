import styles from "../styles/Footer.module.scss";
import FooterLink from "./footer-link";

export default function Footer() {
  return (
    <footer className={styles["c-footer"]}>
      <div className={styles["c-footer-container"]}>
        <div>
          <FooterLink
            imgUrl={"/images/footer/links/instagram.svg"}
            redirectUrl={"https://www.instagram.com/malcikovam"}
            description={"Instagram link"}
          />
          <FooterLink
            imgUrl={"/images/footer/links/facebook.svg"}
            redirectUrl={"https://www.facebook.com/malcikovam"}
            description={"Facebook link"}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          Developed by Sajmon
          <FooterLink
            imgUrl={"/images/footer/links/linkedin.svg"}
            redirectUrl={
              "https://www.linkedin.com/in/%C5%A1imon-bo%C5%A1kovi%C4%8D-469599183/"
            }
            description={"Creator linkedin link"}
          />
        </div>
      </div>
    </footer>
  );
}
