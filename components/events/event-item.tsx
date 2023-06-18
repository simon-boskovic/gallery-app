import Link from "next/link";
import styles from "../../styles/Event-item.module.scss";
interface Event {
  id: number;
  date: string;
  day: string;
  place: string;
  email: string;
  hasReservation: boolean;
  name?: string;
}
export default function EventItem(props) {
  const item: Event = props.event;
  const itemDate = new Date(item.date);

  return (
    <div className={styles["c-event-item"]}>
      <div className={styles["c-event-item-body"]}>
        <span className={styles["c-event-item-month"]}>
          {" "}
          {itemDate.toLocaleDateString("default", { month: "long" })}
        </span>
        <span className={styles["c-event-item-day"]}>
          {itemDate.toLocaleDateString("default", { weekday: "long" })}
        </span>
        <span className={styles["c-event-item-date"]}>
          {itemDate.getDate()}
        </span>
        <span>
          {itemDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span className={styles["c-event-item-year"]}>
          {itemDate.getFullYear()}
        </span>
        <span className={styles["c-event-item-place"]}>{item.place}</span>
        <div>
          <Link
            href={
              item.hasReservation
                ? `event-cancellation/${item.id}`
                : `event-reservation/${item.id}`
            }
          >
            <button
              className={`${styles["c-event-item-cta"]} ${
                item.hasReservation && styles["c-event-item-cta--reserved"]
              }`}
            >
              {item.hasReservation ? "Zrušení rezervace" : "Rezervace"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
