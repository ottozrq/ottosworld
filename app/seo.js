import { routeFor, siteUrl } from "./content";

function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export function SiteStructuredData({ locale = "en" }) {
  const isFrench = locale === "fr";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "OTTO Vision",
            inLanguage: ["en", "fr"]
          },
          {
            "@type": "Person",
            "@id": `${siteUrl}/#otto`,
            name: "Otto Zhang",
            alternateName: "Ruoqiu Zhang",
            url: `${siteUrl}${routeFor(locale, "/about")}`,
            image: `${siteUrl}/static/img/about/otto-portrait.jpg`,
            jobTitle: isFrench ? "Réalisateur et photographe" : "Filmmaker and photographer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressCountry: "FR"
            },
            sameAs: ["https://www.instagram.com/otto_zhang/"]
          },
          {
            "@type": "ProfessionalService",
            "@id": `${siteUrl}/#studio`,
            name: "OTTO Vision",
            url: siteUrl,
            image: `${siteUrl}/static/img/video/wedding2.png`,
            email: "ottozrq@gmail.com",
            founder: { "@id": `${siteUrl}/#otto` },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressCountry: "FR"
            },
            areaServed: ["Paris", "France", "Europe"],
            sameAs: ["https://www.instagram.com/otto_zhang/"]
          }
        ]
      }}
    />
  );
}

export function WeddingServiceStructuredData({ locale = "en" }) {
  const isFrench = locale === "fr";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteUrl}${routeFor(locale, "/weddings")}#service`,
        name: isFrench ? "Films de mariage cinématographiques" : "Cinematic wedding films",
        description: isFrench
          ? "Films de mariage, élopements et séances avant mariage réalisés à Paris, en France et partout en Europe."
          : "Wedding films, elopements and pre-wedding sessions created in Paris, France and across Europe.",
        url: `${siteUrl}${routeFor(locale, "/weddings")}`,
        provider: { "@id": `${siteUrl}/#studio` },
        areaServed: ["Paris", "France", "Europe"],
        serviceType: isFrench ? "Réalisation de films de mariage" : "Wedding filmmaking"
      }}
    />
  );
}

function durationToIso(duration) {
  const [minutes, seconds] = duration.split(":").map(Number);
  return `PT${minutes ? `${minutes}M` : ""}${seconds}S`;
}

export function VideoStructuredData({ locale = "en", project }) {
  const pagePath = routeFor(locale, `/work/${project.id}`);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": `${siteUrl}${pagePath}#video`,
        name: project.title,
        description: project.description,
        thumbnailUrl: [`${siteUrl}${project.poster}`],
        uploadDate: project.uploadDate,
        duration: durationToIso(project.duration),
        contentUrl: `${siteUrl}${project.videoUrl}`,
        url: `${siteUrl}${pagePath}`,
        inLanguage: locale,
        creator: { "@id": `${siteUrl}/#otto` }
      }}
    />
  );
}
