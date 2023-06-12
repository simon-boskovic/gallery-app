import { useState } from "react";
import styles from "../../styles/Portfolio.module.scss";

export default function PortfolioItemImage(props) {
  const [isHovered, setIsHovered] = useState(false);

  const { smallImage, image, setImageIndex, setToggler, index, toggler } =
    props;

  return (
    <div className={`${styles["c-portfolio-image-wrapper"]}`}>
      <img className={`${styles["c-portfolio-image"]}`} src={image} alt="" />
      <div
        className={`${styles["c-portfolio-image-overlay"]} ${
          isHovered ? styles["c-portfolio-image-overlay--show"] : ""
        } `}
        onMouseEnter={(el) => setIsHovered(true)}
        onMouseLeave={(el) => setIsHovered(false)}
        onClick={(ev) => {
          setImageIndex(index);
          setToggler(toggler);
          setIsHovered(false);
        }}
      >
        <button className={`${styles["c-portfolio-image-view-text"]}`}>
          View
        </button>
      </div>
    </div>
  );
}
