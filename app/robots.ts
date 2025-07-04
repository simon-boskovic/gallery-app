import { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://malcikova-photo.cz/sitemap.xml",
  };
}
