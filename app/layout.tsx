import { Poppins } from "next/font/google";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import "../styles/globals.css";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/layout/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/layout/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/layout/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/layout/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/layout/meta/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body
        className={` ${poppins.className}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          justifyContent: "space-between",
        }}
      >
        <div className="content">
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
