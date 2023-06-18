"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/Events.module.scss";
import EventItem from "./event-item";

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
        "https://raiderrock.cz/test/index.php"
      ).then((res) => res.json());

      setEvents(fetchedEvents);
    };
    getEvents();
  }, []);

  if (!events) {
    return <div>Loading....</div>;
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
