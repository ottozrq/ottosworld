import { siteUrl } from "./content";

export default function sitemap() {
  const routes = [
    "",
    "/work",
    "/weddings",
    "/about",
    "/contact",
    "/fr",
    "/fr/work",
    "/fr/weddings",
    "/fr/about",
    "/fr/contact"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("contact") ? "yearly" : "monthly",
    priority: route === "" || route === "/fr" ? 1 : 0.8
  }));
}
