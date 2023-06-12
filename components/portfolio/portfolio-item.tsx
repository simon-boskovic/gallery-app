import { useState } from "react";
import styles from "../../styles/Portfolio.module.scss";
import FsLightbox from "fslightbox-react";
import PortfolioItemImage from "./portfolio-item-image";
import Link from "next/link";

export default function PortfolioItem(props) {
  const { portfolioItem } = props;
  console.log(portfolioItem);
  const [maxImagesCount, setMaxImagesCount] = useState(3);
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const onSetImageIndex = (index) => {
    setImageIndex(index);
  };
  const onSetToggler = (state) => {
    setToggler(!state);
  };

  return (
    <div className={`${styles["c-portfolio-item"]}`}>
      <h3 className={`${styles["c-portfolio-title-wrapper"]}`}>
        {portfolioItem.title}
      </h3>
      <div className={`${styles["c-portfolio-images"]}`}>
        {portfolioItem.images.map((res, index) => {
          return (
            index <= maxImagesCount - 1 && (
              <PortfolioItemImage
                image={res.image}
                smallImage={res.smallImage}
                key={index}
                index={index}
                toggler={toggler}
                setImageIndex={onSetImageIndex}
                setToggler={onSetToggler}
              />
            )
          );
        })}
      </div>

      <div className={`${styles["c-portfolio-button-wrapper"]}`}>
        <Link
          href={"/gallery/" + portfolioItem.imagesPath}
          className={`${styles["c-portfolio-button"]}`}
        >
          Celá Galerie
        </Link>
        <button
          className={`${styles["c-portfolio-button"]}`}
          onClick={() =>
            maxImagesCount === 3 ? setMaxImagesCount(9) : setMaxImagesCount(3)
          }
        >
          {maxImagesCount === 3 ? "Rozbalit" : "Zbalit"}
        </button>
      </div>
      <FsLightbox
        toggler={toggler}
        sourceIndex={imageIndex}
        sources={portfolioItem.images.map((res) => res.image)}
      />
    </div>
  );
}
