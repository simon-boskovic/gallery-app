import EventConfirmationForm from "../../../components/events/event-reservation-form";
import styles from "../../../styles/Event-reservation.module.scss";

export async function generateStaticParams() {
  const events = await fetch("https://raiderrock.cz/test/index.php").then(
    (res) => res.json()
  );

  return events.map((event) => ({
    eventID: event.id.toString(),
  }));
}

export default function EventReservationPage({ params }) {
  return (
    <div className={styles["c-event-reservation"]}>
      <h1>Rezervace termínu</h1>
      <EventConfirmationForm
        eventID={params.eventID}
        isCancellation={false}
      ></EventConfirmationForm>
    </div>
  );
}
