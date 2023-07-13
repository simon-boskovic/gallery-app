import styles from "../styles/Contact.module.scss";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className={styles["c-contact-section-wrapper"]}>
      {/* <div className={styles["c-contact-left"]}>
        <div className={styles["c-contact-image"]}>
          <img src="/images/hero/compressed/images/hero-image.webp" alt="" />
        </div>
        <h2>Feel inspired?</h2>
        <div>
          <p className={styles["c-contact-text"]}>
            Lets connect! Id love hear about your story and how I might be able
            to help through photography.
          </p>
        </div>
        <button className={styles["c-contact-button"]}>
          <span>Email me</span>
        </button>
      </div> */}
      <div className={styles["c-contact-right"]}>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
