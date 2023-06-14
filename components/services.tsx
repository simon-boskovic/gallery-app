import styles from "../styles/Services.module.scss";
export default function Services() {
  const arr = [
    { title: "Parové focení", image: "/images/services/parove_foceni.jpg" },
    {
      title: "Těhotenské focení",
      image: "/images/services/tehotenske_foceni.webp",
    },
    { title: "Rodiné focení", image: "/images/services/rodine_foceni.jpg" },
    { title: "Portréty", image: "/images/services/portret.jpg" },
  ];
  return (
    <div className={styles["c-services-section-wrapper"]}>
      <h2 className={styles["c-services-heading"]}>Služby</h2>
      <div className={styles["c-services-wrapper"]}>
        {arr.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <div className={styles["c-card"]}>
              <img src={item.image} alt="" className={styles["c-card-image"]} />
              <div className={styles["c-card-body"]}>
                <h2 className={styles["c-card-title"]}>{item.title}</h2>
                <p className={styles["c-card-subtitle"]}>Popis....</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                eligendi!
                <p className={styles["c-card-info"]}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
