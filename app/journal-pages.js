import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "./components";
import { getProject, routeFor, siteUrl } from "./content";
import { getGuides, journalCopy } from "./journal-content";
import { JsonLd } from "./seo";

export function journalMetadata(locale, guide) {
  const copy = journalCopy[locale];
  const path = guide ? `/journal/${guide.slug}` : "/journal";
  const title = guide?.title ?? copy.label;
  const description = guide?.description ?? copy.intro;
  const url = `${siteUrl}${routeFor(locale, path)}`;
  const image = guide?.image ?? "/static/img/wedding/wedding-25.jpg";
  return {
    title, description,
    alternates: {
      canonical: url,
      languages: { en: `${siteUrl}${path}`, fr: `${siteUrl}/fr${path}`, "x-default": `${siteUrl}${path}` }
    },
    openGraph: {
      title, description, url, siteName: "OTTO Vision",
      type: guide ? "article" : "website", locale: locale === "fr" ? "fr_FR" : "en_GB",
      images: [{ url: `${siteUrl}${image}`, alt: title }]
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}${image}`] }
  };
}

function GuideCards({ locale, items }) {
  return (
    <div className="journal-grid">
      {items.map((guide) => (
        <article className="journal-card" key={guide.slug}>
          <Link href={routeFor(locale, `/journal/${guide.slug}`)}>
            <div className="journal-card-image">
              <Image src={guide.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <p className="eyebrow eyebrow-gold">{guide.topic}</p>
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
            <span className="arrow-link">{journalCopy[locale].read} ↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function JournalPage({ locale }) {
  const copy = journalCopy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="journal-page content-frame" id="top">
        <header className="journal-heading">
          <p className="eyebrow eyebrow-gold">{copy.label}</p>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </header>
        <GuideCards locale={locale} items={getGuides(locale)} />
      </div>
    </SiteShell>
  );
}

export function GuidePage({ locale, guide }) {
  const copy = journalCopy[locale];
  const project = getProject(locale, guide.project);
  const url = `${siteUrl}${routeFor(locale, `/journal/${guide.slug}`)}`;
  return (
    <SiteShell locale={locale}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BlogPosting",
        "@id": `${url}#article`, mainEntityOfPage: url, url,
        headline: guide.title, description: guide.description,
        image: `${siteUrl}${guide.image}`, inLanguage: locale,
        author: { "@type": "Organization", name: "OTTO Vision", url: `${siteUrl}${routeFor(locale, "/about")}` }
      }} />
      <article className="journal-page content-frame" id="top">
        <nav className="journal-breadcrumb" aria-label={locale === "fr" ? "Fil d’Ariane" : "Breadcrumb"}>
          <Link href={routeFor(locale, "/journal")}>← {copy.label}</Link>
        </nav>
        <header className="journal-heading journal-article-heading">
          <p className="eyebrow eyebrow-gold">{guide.topic}</p>
          <h1>{guide.title}</h1>
          <Link className="journal-author" href={routeFor(locale, "/about")}>{copy.by}</Link>
          <p>{guide.intro}</p>
        </header>
        <div className="journal-cover">
          <Image src={guide.image} alt="" fill sizes="100vw" priority />
        </div>
        <div className="journal-reading-layout">
          <nav className="journal-contents" aria-label={copy.contents}>
            <p className="eyebrow">{copy.contents}</p>
            <ol>{guide.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
          </nav>
          <div className="journal-body">
            {guide.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </section>
            ))}
            <aside className="journal-film">
              <p className="eyebrow eyebrow-gold">{copy.films}</p>
              <h2><Link href={routeFor(locale, `/work/${project.id}`)}>{project.title} ↗</Link></h2>
              <Link href={routeFor(locale, "/weddings")}>{copy.service} →</Link>
            </aside>
          </div>
        </div>
        <section className="journal-cta">
          <h2>{copy.cta}</h2><p>{copy.ctaCopy}</p>
          <Link className="primary-button" href={routeFor(locale, "/contact")}>{copy.contact} ↗</Link>
        </section>
        <section className="journal-related" aria-label={copy.related}>
          <p className="eyebrow eyebrow-gold">{copy.related}</p>
          <GuideCards locale={locale} items={getGuides(locale).filter((item) => item.slug !== guide.slug)} />
        </section>
      </article>
    </SiteShell>
  );
}
