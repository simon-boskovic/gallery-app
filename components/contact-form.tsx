"use client";
import { useRef, useState } from "react";
import styles from "../styles/ContactForm.module.scss";

type Service =
  | "Parové focení"
  | "Těhotenské focení"
  | "Rodiné focení"
  | "Portréty";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [services, setServices] = useState<Service[]>([]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleServiceChange = (event) => {
    const service = event.target.value as Service;
    if (event.target.checked) {
      setServices([...services, service]);
    } else {
      setServices(services.filter((s) => s !== service));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !phoneRef.current?.value ||
      !messageRef.current?.value
    ) {
      alert("Nebyly vyplněny všechny údaje");
      return;
    }

    if (!emailRegex.test(emailRef.current.value)) {
      alert("Zadejte platnou e-mailovou adresu");
      return;
    }

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      services: services,
    };

    try {
      const response = await fetch(
        "https://malcikova-photo.cz/api/services.php?contactForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Formulář byl úspěšně odeslán");
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        messageRef.current.value = "";
        setServices([]); // Vynulování služeb po odeslání
      } else {
        alert("Při odesílání formuláře došlo k chybě");
      }
    } catch (error) {
      console.error("Chyba při odesílání formuláře:", error);
    }
  };

  return (
    <div className={styles["c-form-wrapper"]}>
      <div className={styles["c-form"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["c-form-grid"]}>
            <div className={styles["c-grid-item"]}>
              <label htmlFor="name" className={styles["c-grid-item-label"]}>
                Jméno a příjmení
              </label>
              <div className={styles["c-grid-item-wrap"]}>
                <input
                  ref={nameRef}
                  type="text"
                  className={styles["c-grid-item-wrap"]}
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div className={styles["c-grid-item"]}>
              <label htmlFor="email" className={styles["c-grid-item-label"]}>
                Email
              </label>
              <div className={styles["c-grid-item-wrap"]}>
                <input
                  ref={emailRef}
                  type="text"
                  className={styles["c-grid-item-wrap"]}
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className={styles["c-grid-item"]}>
              <label htmlFor="phone" className={styles["c-grid-item-label"]}>
                Telefon
              </label>
              <div className={styles["c-grid-item-wrap"]}>
                <input
                  ref={phoneRef}
                  type="text"
                  className={styles["c-grid-item-wrap"]}
                  name="phone"
                  id="phone"
                  required
                />
              </div>
            </div>
            <div className={styles["c-grid-item"]}>
              <label htmlFor="message" className={styles["c-grid-item-label"]}>
                Zpráva
              </label>
              <div className={styles["c-grid-item-wrap"]}>
                <textarea
                  ref={messageRef}
                  className={styles["c-grid-item-wrap"]}
                  rows={5}
                  name="message"
                  id="message"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles["c-checkbox-wrapper"]}>
            <div className={styles["c-field-name"]}>Mám zájem o službu:</div>
            <div className={styles["c-field-input-wrapper"]}>
              <input
                type="checkbox"
                id="parove_foceni"
                value="Parové focení"
                checked={services.includes("Parové focení")}
                onChange={handleServiceChange}
              />
              <label htmlFor="parove_foceni">Párové focení</label>
            </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input
                type="checkbox"
                id="tehotenske_foceni"
                value="Těhotenské focení"
                checked={services.includes("Těhotenské focení")}
                onChange={handleServiceChange}
              />
              <label htmlFor="tehotenske_foceni">Těhotenské focení</label>
            </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input
                type="checkbox"
                id="rodine_foceni"
                value="Rodiné focení"
                checked={services.includes("Rodiné focení")}
                onChange={handleServiceChange}
              />
              <label htmlFor="rodine_foceni">Rodinné focení</label>
            </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input
                type="checkbox"
                id="portrety"
                value="Portréty"
                checked={services.includes("Portréty")}
                onChange={handleServiceChange}
              />
              <label htmlFor="portrety">Portréty</label>
            </div>
          </div>
          <div className={styles["c-field-gdpr"]}>
            *Vaše osobní data používáme jen pro odpovědi a neuchováváme je.
          </div>
          <div className={styles["c-submit-wrapper"]}>
            <button className={styles["c-submit-btn"]} type="submit">
              Odeslat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
