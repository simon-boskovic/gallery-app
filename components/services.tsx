import styles from "../styles/Services.module.scss";
export default function Services(props) {
  const { services } = props;

  return (
    <div className={styles["c-services-section-wrapper"]}>
      <h2 className={styles["c-services-heading"]}>Nabízené fotografické služby a ceník</h2>
      <div className={styles["c-services-wrapper"]}>
        {services.map((service, index) => (
          <div key={index} className={styles["c-service"]}>
            <h3 className={styles["c-service-title"]}>{service.title}</h3>
            <div className={styles["c-card"]}>
              <img
                loading="lazy"
                src={service.imagePath}
                alt={"Popis služby: " + service.title}
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
      <div className={styles["c-service-info-wrapper"]}>
        <h3>Informace k focení</h3>
        <ul>
          <li>Fotografie si vybíráte sami ze zaslaných náhledů</li>
          <li>
            Je zakázáno zveřejňovat zaslané náhledy fotografií s vodotiskem
            ještě před jejich úpravou
          </li>
          <li>Focení trvá většinou 1 - 1,5 hodiny (individuální)</li>
          <li>
            Dodací lhůta: náhledy posílám do dvou dnů, upravené fotografie do 14
            – ti dnů, v případě nemoci nebo dovolené se termín může PRODLOUŽIT
          </li>
          <li>
            Na focení si stačí vzít 1-2 outfity, oblečte se tak, aby to bylo
            příjemné Vám
          </li>
          <li>
            Při focení vypadá dobře jednobarevné oblečení – super jsou pastelové
            barvy
          </li>
        </ul>
      </div>
    </div>
  );
}
