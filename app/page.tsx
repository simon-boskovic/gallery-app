import fs from "fs/promises";
import { Metadata, Viewport } from "next";
import Head from "next/head";
import path from "path";
import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import getFileStructure from "../components/ffmpeg";
import Hero from "../components/hero";
import Portoflio from "../components/portfolio/portfolio";
import Services from "../components/services";

async function getHeroData() {
  const relativeHeroImagePath = "/images/hero";
  return await getFileStructure(
    process.cwd() + "/public" + relativeHeroImagePath,
    relativeHeroImagePath,
    "20:-1",
    "1200:-1",
    80
  ).then((res) => res[0]);
}

async function getPortfolioData() {
  const portfolioJsonPath = path.join(process.cwd(), "data", "portfolio.json");
  const dataJson = await fs
    .readFile(portfolioJsonPath, "utf-8")
    .then((res) => JSON.parse(res));

  const portfolioResult: any[] = [];

  for (const portfolioItem of dataJson.portfolio) {
    const relativePath = "/images/portfolio/" + portfolioItem.imagesPath;

    const resolvedImages = await getFileStructure(
      process.cwd() + "/public" + relativePath,
      relativePath,
      "20:-1",
      "1200:-1",
      80
    );
    portfolioResult.push({
      imagesPath: portfolioItem.imagesPath,
      title: portfolioItem.title,
      images: resolvedImages.map((image) => {
        return {
          ...image,
          displayViewButton: false,
          viewFullGallery: false,
        };
      }),
    });
  }
  return portfolioResult;
}

async function getServicesData() {
  const servicesJsonpath = path.join(process.cwd(), "data", "services.json");
  const relativeServicesImagesPath = "/images/services";
  await getFileStructure(
    process.cwd() + "/public" + relativeServicesImagesPath,
    relativeServicesImagesPath,
    "20:-1",
    "1200:-1",
    80
  );

  const servicesJson = await fs
    .readFile(servicesJsonpath, "utf-8")
    .then((res) => JSON.parse(res));

  return servicesJson;
}

async function getAboutMeData() {
  const aboutMeImagesRelativePath = "/images/about-me";
  return await getFileStructure(
    process.cwd() + "/public" + aboutMeImagesRelativePath,
    aboutMeImagesRelativePath,
    "20:-1",
    "1200:-1",
    80
  );
}

export const viewport: Viewport = {
  themeColor: "#b20105",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://malcikova-photo.cz"),
  alternates: {
    canonical: "/",
  },
  title: "Profesionální Fotografka Zlín | Michaela Malčíková | Rodinné & Těhotenské Focení",
  description: `Hledáte fotografku ve Zlíně pro přirozené rodinné, těhotenské či párové focení? Jmenuji se Michaela Malčíková a s citem zachytím vaše jedinečné okamžiky. Prohlédněte si mé portfolio.`,
  keywords: [
    "fotografka Zlín",
    "fotograf Zlín",
    "focení Zlín",
    "foto Zlín",
    "Zlínský kraj",
    "fotografie",
    "vánoční focení",
    "vánoční focení zlín",
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

export default async function HomePage() {
  const heroSectionData = await getHeroData();
  const portfolioSectionData = await getPortfolioData();
  const servicesSectionData = await getServicesData();
  const aboutMeSectionData = await getAboutMeData();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Hero imagePath={heroSectionData.image}></Hero>
      </section>
      {/* <section>
        <CustomerFeedback></CustomerFeedback>
      </section> */}
      <section id="portfolio">
        <Portoflio portfolioResult={portfolioSectionData}></Portoflio>
      </section>
      <section id="about-me">
        <AboutMe imagePaths={aboutMeSectionData}></AboutMe>
      </section>
      <section id="services">
        <Services services={servicesSectionData.services}></Services>
      </section>

      {/* <section id="event-list">
        <EventList></EventList>
      </section> */}
      <section id="contact">
        <Contact></Contact>
      </section>
    </>
  );
}
