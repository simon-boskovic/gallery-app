import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export const metadata = {
  title: "Michaela Malčíková - Umělecká Galerie",
  description:
    "Prohlédněte si nádherná umělecká díla Michaely Malčíkové v její online galerii. Obrazy plné emocí, barev a jedinečného vyjádření.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>
        <div>
          <section>
            <NavBar></NavBar>
          </section>
          {children}
          <section>
            <Footer></Footer>
          </section>
        </div>
      </body>
    </html>
  );
}
