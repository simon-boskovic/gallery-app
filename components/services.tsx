import styles from "../styles/Services.module.scss";
export default function Services(props) {
  const { services } = props;

  return (
    <div className={styles["c-services-section-wrapper"]}>
      <h2 className={styles["c-services-heading"]}>Služby</h2>
      <div className={styles["c-services-wrapper"]}>
        {services.map((service) => (
          <div className={styles["c-service"]}>
            <h3>{service.title}</h3>
            <div className={styles["c-card"]}>
              <img
                src={service.image}
                alt=""
                className={styles["c-card-image"]}
              />
              <div className={styles["c-card-body"]}>
                <h2 className={styles["c-card-title"]}>{service.title}</h2>
                {service.description}
                <p className={styles["c-card-info"]}>
                  <strong>Obvyklá cena: {service.price}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
