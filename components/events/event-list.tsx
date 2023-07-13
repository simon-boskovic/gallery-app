"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/Events.module.scss";
import EventItem from "./event-item";
import Loading from "../../app/loading";

interface Event {
  id: number;
  date: string;
  day: string;
  place: string;
  email: string;
  hasReservation: boolean;
  name?: string;
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>();
  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await fetch(
        "https://malcikova-photo.cz/api/events.php",
        { cache: "no-cache" }
      ).then((res) => res.json());

      setEvents(fetchedEvents);
    };
    getEvents();
  }, []);

  if (!events) {
    return <Loading />;
  }

  return (
    <div className={styles["c-section-wrapper"]}>
      <h2>Rezervace termínů</h2>
      <div className={styles["c-events-wrapper"]}>
        {events.map((event, index) => (
          <EventItem key={index} event={event}></EventItem>
        ))}
      </div>
    </div>
  );
}
