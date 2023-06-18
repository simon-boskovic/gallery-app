import { Facebook } from "react-content-loader";
import styles from "../styles/Loading-placeholder.module.scss";

export default function Loading() {
  return (
    <div className={styles["c-loading-bar-wrapper"]}>
      <Facebook />
    </div>
  );
}
