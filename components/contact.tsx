import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles["c-contact-section-wrapper"]}>
      <div className={styles["c-contact-image"]}>
        <img src="/images/hero/hero-image.png" alt="" />
      </div>
      <h2>Feel inspired?</h2>
      <div>
        <p className={styles["c-contact-text"]}>
          Lets connect! Id love hear about your story and how I might be able to
          help through photography.
        </p>
      </div>
      <button className={styles["c-contact-button"]}>
        <span>Email me</span>
      </button>
    </div>
  );
}