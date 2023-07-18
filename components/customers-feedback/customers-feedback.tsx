import styles from "../../styles/Customer-feedback.module.scss";

const reviews = [
  {
    title: "Úžasná šablona",
    content:
      "Čistý a komentovaný kód, krásný design a skutečně není těžké s ním pracovat.",
    author: "Ana Rhodes",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Skvělá šablona",
    content: "Velmi snadno použitelná šablona s moderním vzhledem. Doporučuji!",
    author: "John Smith",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  // Předchozí pevně definované recenze
  // Následující recenze jsou náhodně vygenerované
  {
    title: "Fantastická šablona",
    content: "Úžasná práce, jsem naprosto spokojen!",
    author: "Eva Nováková",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Perfektní provedení",
    content: "Design je skvělý a kód je snadno upravitelný.",
    author: "Martin Novotný",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Vynikající šablona",
    content: "Skvělá volba pro mé webové stránky. Doporučuji!",
    author: "Kateřina Veselá",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Přesně to, co jsem potřeboval",
    content: "Šablona je přehledná a snadno upravitelná. Jsem spokojený.",
    author: "Jan Procházka",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Doporučuji každému",
    content: "Pokud hledáte kvalitní šablonu, neváhejte!",
    author: "Petra Nová",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Skvělá podpora",
    content:
      "Potřeboval jsem drobnou úpravu a dostal jsem rychlou odpověď od týmu.",
    author: "Filip Kovář",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Profesionální výsledek",
    content: "Moje webové stránky vypadají skvěle díky této šabloně.",
    author: "Lucie Pospíšilová",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Nad očekávání",
    content: "Šablona splnila všechna moje očekávání. Děkuji!",
    author: "Tereza Malá",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Skvělý design",
    content: "Moderní a profesionální vzhled. Jsem velmi spokojený.",
    author: "Adam Černý",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Úžasná šablona",
    content: "Tato šablona mi ušetřila spoustu času při vývoji.",
    author: "Jana Novotná",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Velmi pohodlná",
    content: "Šablona je intuitivní a snadno použitelná. Doporučuji!",
    author: "Petr Kovář",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Kvalitní práce",
    content: "Design je precizní a kód je dobře strukturovaný.",
    author: "Eva Malá",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Jednoduché použití",
    content:
      "Nemusel jsem se dlouho učit, abych mohl začít pracovat s touto šablonou.",
    author: "Jakub Veselý",
    photo: "images/customer-feedback/user-placeholder.png",
  },
  {
    title: "Skvělé možnosti",
    content: "Šablona nabízí mnoho funkcí a variant designu. Doporučuji!",
    author: "Kateřina Procházková",
    photo: "images/customer-feedback/user-placeholder.png",
  },
];

const CustomerFeedback = () => {
  return (
    <div className={styles["customer-feedback-container"]}>
      <h2 className={styles["customer-feedback-heading"]}>
        Spokojení zákazníci
      </h2>

      <div className={styles["customer-feedback-list"]}>
        {reviews.map((review, index) => (
          <div key={index} className={styles["customer-feedback-item"]}>
            <h3>{review.title}</h3>
            <p className={styles["customer-feedback-content"]}>
              {review.content}
            </p>
            <div className={styles["customer-feedback-author"]}>
              <img src={review.photo} alt={review.author} />
              <span>{review.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
