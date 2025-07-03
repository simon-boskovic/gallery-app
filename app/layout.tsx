import { Poppins } from "next/font/google";
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
      <body className={` ${poppins.className}`}>
        {/* <div className="snowflakes" aria-hidden="true">
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
        </div> */}
        <div className="content">
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
