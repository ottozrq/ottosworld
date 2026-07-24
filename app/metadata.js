import { getContent, routeFor, siteUrl } from "./content";

const pageDescriptions = {
  en: {
    home:
      "OTTO Vision creates cinematic wedding films, fashion images, brand stories and event films in Paris and across Europe.",
    work:
      "Selected wedding films, fashion images, brand stories and photography by Paris-based filmmaker OTTO Vision.",
    weddings:
      "Cinematic wedding films, elopements and pre-wedding sessions in Paris, France and across Europe.",
    about:
      "Meet Otto, a Paris-based filmmaker and photographer working across weddings, fashion, brands and events.",
    contact:
      "Contact OTTO Vision for wedding films, fashion, brand and event projects in Paris and across Europe.",
    it: "Software projects and technical background by Otto Zhang."
  },
  fr: {
    home:
      "OTTO Vision crée des films de mariage, des images de mode, des récits de marque et des films d’événement à Paris et partout en Europe.",
    work:
      "Films de mariage, mode, récits de marque et photographie par OTTO Vision, réalisateur basé à Paris.",
    weddings:
      "Films de mariage cinématographiques, élopements et séances avant mariage à Paris, en France et en Europe.",
    about:
      "Découvrez Otto, réalisateur et photographe basé à Paris, entre mariages, mode, marques et événements.",
    contact:
      "Contactez OTTO Vision pour un mariage, un projet de mode, de marque ou d’événement à Paris et en Europe.",
    it: "Projets logiciels et parcours technique d’Otto Zhang."
  }
};

const pageTitles = {
  en: {
    home: "OTTO Vision | Paris Filmmaker",
    work: "Selected Work",
    weddings: "Wedding Films",
    about: "About Otto",
    contact: "Start a Project",
    it: "Developer Archive"
  },
  fr: {
    home: "OTTO Vision | Réalisateur à Paris",
    work: "Projets choisis",
    weddings: "Films de mariage",
    about: "À propos d’Otto",
    contact: "Commencer un projet",
    it: "Archives développeur"
  }
};

export const metadataBase = new URL(siteUrl);

export function createMetadata({ locale = "en", page, path }) {
  const title = pageTitles[locale][page];
  const documentTitle = page === "home" ? { absolute: title } : title;
  const description = pageDescriptions[locale][page];
  const englishPath = path;
  const frenchPath = routeFor("fr", path);
  const canonical = locale === "fr" ? frenchPath : englishPath;

  return {
    metadataBase,
    title: documentTitle,
    description,
    alternates: {
      canonical,
      languages: {
        en: englishPath,
        fr: frenchPath,
        "x-default": englishPath
      }
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      url: canonical,
      siteName: "OTTO Vision",
      images: [
        {
          url: "/static/img/video/wedding2.png",
          width: 1557,
          height: 874,
          alt: getContent(locale).home.heroCopy
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/static/img/video/wedding2.png"]
    }
  };
}

export function createRootMetadata(locale) {
  return {
    metadataBase,
    title: {
      default: pageTitles[locale].home,
      template: `%s | OTTO Vision`
    },
    description: pageDescriptions[locale].home,
    icons: {
      icon: "/static/img/icon.png",
      apple: "/static/img/icon.png"
    }
  };
}
