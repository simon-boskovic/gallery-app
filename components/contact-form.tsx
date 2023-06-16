import styles from "../styles/ContactForm.module.scss";
export default function ContactForm() {
  return (
    <div className={styles["c-form-wrapper"]}>
      <div className={styles["c-form"]}>
        <form action="">
          <div className={styles["c-form-grid"]}>
            <div className={styles["c-grid-item"]}>
              <div className={styles["c-grid-item-label"]}>
                Jméno a příjmení
              </div>
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
        </form>
      </div>
    </div>
  );
}
