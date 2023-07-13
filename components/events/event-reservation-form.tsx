"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/Event-reservation-form.module.scss";
import { useRouter } from "next/navigation";
import Loading from "../../app/loading";

interface Event {
  id: number;
  date: string;
  day: string;
  place: string;
  email: string;
  hasReservation: boolean;
  name?: string;
  error?: string;
}

export default function EventConfirmationForm({ eventID, isCancellation }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [calcelationMessage, setCalcelationMessage] = useState("");
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    const getEvent = async () => {
      const fetchedEvent = await fetch(
        "https://malcikova-photo.cz/api/events.php?id=" + eventID,
        { cache: "no-cache" }
      ).then((res) => res.json());

      setEvent(fetchedEvent);
    };
    getEvent();
  }, []);

  if (!event) {
    return <Loading />;
  }

  if (event.error) {
    return <div>{event.error}</div>;
  }
  if (isCancellation && !event.hasReservation) {
    return <div>Událost nemá rezervaci</div>;
  }

  if (!isCancellation && event.hasReservation) {
    return <div>Událost již má rezervaci</div>;
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleCalcelationMessageChange = (e) => {
    setCalcelationMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationData = {
      id: event.id,
      name,
      email,
      password,
      message,
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(reservationData.email);

    const nameMinLength = 4;
    const isNameValid = reservationData.name.trim().length >= nameMinLength;
    const isPasswordValid =
      reservationData.password.trim().length >= nameMinLength;

    if (!isEmailValid) {
      alert("Neplatný e-mail.");
      return;
    }

    if (!isNameValid) {
      alert("Jméno musí mít alespoň 4 znaky.");
    }

    if (!isPasswordValid) {
      alert("Heslo musí mít alespoň 4 znaky.");
    }

    if (!isEmailValid || !isNameValid || !isPasswordValid) {
      return;
    }
    await fetch("https://malcikova-photo.cz/api/events.php", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(reservationData),
    });

    router.push("/#services");
  };

  const formattedDate = new Date(event?.date).toLocaleString("cs-CZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const handleCancellation = async (e) => {
    e.preventDefault();

    await fetch(
      `https://raiderrock.cz/test/index.php?id=${eventID}&name=${
        event.name
      }&password=${password}&message=${encodeURIComponent(calcelationMessage)}`,
      {
        method: "DELETE",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
          return;
        }
        router.push("/#services");
      });
  };

  if (isCancellation) {
    return (
      <div className={styles["c-event-confirmation-form"]}>
        <h3 className={styles["c-event-confirmation-form-date"]}>
          Datum: {formattedDate}
        </h3>

        <form onSubmit={handleCancellation}>
          <div>
            <label htmlFor="name">Heslo ke zrušení</label>
            <input
              type="password"
              id="name"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <label htmlFor="textarea">Zpráva</label>
            <textarea
              id="textarea"
              value={calcelationMessage}
              onChange={handleCalcelationMessageChange}
              rows={5}
              cols={30}
            />
          </div>
          <button type="submit">Zrušit rezervaci</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles["c-event-confirmation-form"]}>
      <h3 className={styles["c-event-confirmation-form-date"]}>
        Datum: {formattedDate}
      </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Jméno a příjmení:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">
            Heslo ke zrušení registrace k události:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={4}
          />
        </div>
        <div>
          <label htmlFor="textarea">Zpráva</label>
          <textarea
            id="textarea"
            value={message}
            onChange={handleMessageChange}
            rows={5}
            cols={25}
          />
        </div>
        <button type="submit">Rezervovat</button>
      </form>
    </div>
  );
}
