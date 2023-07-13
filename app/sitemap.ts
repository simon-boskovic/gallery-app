import fs from "fs/promises";
import path from "path";

const WEB_URL = "https://malcikova-photo.cz";

const generateDynamicRoutes = async (
  fetchURL: string,
  webPath: string,
  propertyName: string
) => {
  const fetchedItems = await fetch(fetchURL).then((res) => res.json());

  return fetchedItems.map((item) => ({
    url: `${WEB_URL}/${webPath}/${item[propertyName]}`,
    lastModified: new Date().toISOString(),
  }));
};

const getPortfolioGalleryRoutes = async () => {
  const portfolioJsonPath = path.join(process.cwd(), "data", "portfolio.json");

  const dataJson = await fs
    .readFile(portfolioJsonPath, "utf-8")
    .then((res) => JSON.parse(res));

  return dataJson.portfolio.map((portfolio) => ({
    url: `${WEB_URL}/${portfolio.imagesPath}`,
    lastModified: new Date().toISOString(),
  }));
};

export default async function sitemap() {
  const cancellationEventsRoutes = await generateDynamicRoutes(
    "https://malcikova-photo.cz/api/events.php",
    "event-cancellation",
    "id"
  );
  const reservationEventsRoutes = await generateDynamicRoutes(
    "https://malcikova-photo.cz/api/events.php",
    "event-reservation",
    "id"
  );

  const portfolioRoutes = await getPortfolioGalleryRoutes();

  const homepageRoute = {
    url: `${WEB_URL}`,
    lastModified: new Date().toISOString(),
  };

  return [
    homepageRoute,
    ...cancellationEventsRoutes,
    ...reservationEventsRoutes,
    ...portfolioRoutes,
  ];
}
