import { Poppins } from "next/font/google";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import "../styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <Head>
        <meta name="msapplication-TileColor" content="#9d0208" />
        <meta name="theme-color" content="#9d0208" />
        <meta
          property="og:image"
          content="https://malcikova-photo.cz/opengraph-image.png"
        />
      </Head>
      <body className={` ${poppins.className}`}>
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
        </div>
        <div className="content">
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
