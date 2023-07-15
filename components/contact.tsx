import styles from "../styles/Contact.module.scss";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div>
      <div className={styles["c-contact-section-wrapper"]}>
        <h2>Kontakt</h2>
        <div className={styles["c-contact-section-text"]}>
          <span>
            Ráda se spojím s Vámi a dozvím se více o vašich představách a
            očekáváních. Nezáleží na tom, zda plánujete focení pro sebe, svou
            rodinu, nebo potřebujete portréty, budu ráda, pokud mi pošlete
            zprávu. Využijte níže uvedený formulář pro zaslání svého jména,
            e-mailu, telefonního čísla a zprávy. Ozvu se Vám co nejdříve!
          </span>
        </div>

        <div className={styles["c-contact-form"]}>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}
