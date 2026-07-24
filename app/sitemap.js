import { projects, routeFor, siteUrl } from "./content";

export const dynamic = "force-static";

export default function sitemap() {
  const pairedPaths = [
    "/",
    "/work",
    "/weddings",
    "/about",
    "/contact",
    "/it",
    ...projects.map((project) => `/work/${project.id}`)
  ];

  return pairedPaths.flatMap((path) => {
    const englishPath = path === "/" ? "" : path;
    const frenchPath = routeFor("fr", path);
    const englishUrl = `${siteUrl}${englishPath}`;
    const frenchUrl = `${siteUrl}${frenchPath}`;
    const languages = {
      en: englishUrl,
      fr: frenchUrl,
      "x-default": englishUrl
    };

    return [
      { url: englishUrl, alternates: { languages } },
      { url: frenchUrl, alternates: { languages } }
    ];
  });
}
