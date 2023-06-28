import { Metadata } from "next";
import EventConfirmationForm from "../../../components/events/event-reservation-form";
import styles from "../../../styles/Event-reservation.module.scss";

export async function generateStaticParams() {
  const events = await fetch("https://raiderrock.cz/test/index.php", {
    cache: "no-cache",
  }).then((res) => res.json());

  return events.map((event) => ({
    eventID: event.id.toString(),
    date: event.date,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  "use client";
  console.log(params);

  return {};
}

export default async function EventCancellationPage({ params }) {
  console.log(params);

  return (
    <div className={styles["c-event-reservation"]}>
      <h1>Zrušení rezervace termínu</h1>
      <EventConfirmationForm
        eventID={params.eventID}
        isCancellation={true}
      ></EventConfirmationForm>
    </div>
  );
}
