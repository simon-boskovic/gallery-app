"use client";
import { useRef, useState } from "react";
import styles from "../styles/ContactForm.module.scss";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current?.value);
  };

  return (
    <div className={styles["c-form-wrapper"]}>
      <div className={styles["c-form"]}>
        <form onSubmit={onSubmit}>
          <div className={styles["c-form-grid"]}>
            <div className={styles["c-grid-item"]}>
              <div className={styles["c-grid-item-label"]}>
                Jméno a příjmení
              </div>
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
              <div className={styles["c-grid-item-label"]}>Email</div>
              <div className={styles["c-grid-item-wrap"]}>
                <input
                  type="text"
                  className={styles["c-grid-item-wrap"]}
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div className={styles["c-grid-item"]}>
              <div className={styles["c-grid-item-label"]}>Telefon</div>
              <div className={styles["c-grid-item-wrap"]}>
                <input
                  type="text"
                  className={styles["c-grid-item-wrap"]}
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div className={styles["c-grid-item"]}>
              <div className={styles["c-grid-item-label"]}>Zpráva</div>
              <div className={styles["c-grid-item-wrap"]}>
                <textarea
                  className={styles["c-grid-item-wrap"]}
                  rows={5}
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles["c-checkbox-wrapper"]}>
            <div className={styles["c-field-name"]}>Mám zájem o službu: </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input type="checkbox" id="parove_foceni" />
              <label htmlFor="parove_foceni">Parové focení</label>
            </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input type="checkbox" id="tehotenske_foceni" />
              <label htmlFor="tehotenske_foceni">Těhotenské focení</label>
            </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input type="checkbox" id="rodine_foceni" />
              <label htmlFor="rodine_foceni">Rodiné focení</label>
            </div>
            <div className={styles["c-field-input-wrapper"]}>
              <input type="checkbox" id="portrety" />
              <label htmlFor="portrety">Portréty</label>
            </div>
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
