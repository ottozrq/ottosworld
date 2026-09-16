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
  const faq = isFrench
    ? [
        ["Où filmez-vous les mariages ?", "Je suis basé à Paris et filme des mariages en Île-de-France, partout en France et ailleurs en Europe."],
        ["Pouvons-nous échanger en anglais ?", "Oui. Je travaille en français, en anglais et en chinois."],
        ["Comment vérifier une disponibilité ?", "Envoyez votre date, votre lieu ou votre ville et le type de célébration prévu."]
      ]
    : [
        ["Where do you film weddings?", "I am based in Paris and film weddings across Île-de-France, throughout France and elsewhere in Europe."],
        ["Can we work together in English?", "Yes. I work in English, French and Chinese."],
        ["How do we check availability?", "Send your date, venue or city, and the kind of celebration you are planning."]
      ];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${siteUrl}${routeFor(locale, "/weddings")}#service`,
            name: isFrench ? "Vidéaste mariage à Paris" : "Paris wedding videographer",
            description: isFrench
              ? "Films de mariage documentaires et cinématographiques réalisés à Paris, en France et partout en Europe."
              : "Documentary-led cinematic wedding films created in Paris, France and across Europe.",
            url: `${siteUrl}${routeFor(locale, "/weddings")}`,
            provider: { "@id": `${siteUrl}/#studio` },
            areaServed: ["Paris", "Île-de-France", "France", "Europe"],
            serviceType: isFrench ? "Vidéaste de mariage" : "Wedding videography"
          },
          {
            "@type": "FAQPage",
            "@id": `${siteUrl}${routeFor(locale, "/weddings")}#faq`,
            mainEntity: faq.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer }
            }))
          }
        ]
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
