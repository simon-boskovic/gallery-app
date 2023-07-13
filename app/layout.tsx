import { Metadata } from "next";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#fb5607" />
      </Head>
      <body
        className={` ${poppins.className}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
