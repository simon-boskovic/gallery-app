"use client";
import styles from "../styles/Error-page.module.scss";
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);
  return (
    <div className={styles["c-error-page"]}>
      <h1 className={`${styles["c-error-page__title"]} error-page__title`}>
        Oops, nastala chyba!
      </h1>
      <p className={`${styles["c-error-page__message"]} error-page__message`}>
        Nastala následující chyba: {error.message}
      </p>
      <button
        className={`${styles["c-error-page__button"]} error-page__button`}
        onClick={reset}
      >
        ZNOVU
      </button>
    </div>
  );
}
