import { Metadata, Viewport } from "next";
import styles from "../styles/Not-found.module.scss";

export const viewport: Viewport = {
  themeColor: "#b20105",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://malcikova-photo.cz"),
  alternates: {
    canonical: "/",
  },
  title: "Michaela Malčíková - Fotografka | Focení Zlín | Zlín ",
  description: `Fotografka ze Zlína. Nabízí těhotenské, párové, rodinné a portrétové focení.
   Prohlédněte si nádherná umělecká díla Michaely Malčíkové v její online galerii. 
   Obrazy plné emocí, barev a jedinečného vyjádření. Focení Zlín`,
  keywords: [
    "fotografka Zlín",
    "fotograf Zlín",
    "focení Zlín",
    "foto Zlín",
    "Zlínský kraj",
    "fotografie",
    "fotograf",
    "fotografka",
    "těhotenské focení",
    "párové focení",
    "rodinné focení",
    "portréty",
    "Zlín",
  ],
  authors: {
    name: "Michaela Malčíková, umělecká fotografka ze Zlínského kraje",
  },
  creator: "Šimon Boškovič",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};
export default function NotFoundPage() {
  return (
    <div className={styles["not-found"]}>
      <h1> Požadovaná stránka nebyla nalezena</h1>
    </div>
  );
}
