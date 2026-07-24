import Image from "next/image";
import Link from "next/link";
import {
  getContent,
  getProjects,
  photography,
  routeFor,
  weddingImages
} from "./content";
import { ArrowLink, SectionHeading, SiteShell } from "./components";
import { VideoLauncher } from "./site-client";
import { VideoStructuredData, WeddingServiceStructuredData } from "./seo";

function ProjectCard({ locale, project, index, compact = false }) {
  const content = getContent(locale);

  return (
    <article
      className={`project-editorial ${compact ? "project-editorial-compact" : ""} ${
        index % 2 ? "project-editorial-reverse" : ""
      }`}
      id={project.id}
      data-reveal
    >
      <div className="project-media">
        <Image
          src={project.poster}
          alt={`${project.title} — ${project.category}`}
          fill
          sizes={compact ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 900px) 100vw, 64vw"}
          priority={index === 0}
        />
        <VideoLauncher
          embedUrl={project.embedUrl}
          videoUrl={project.videoUrl}
          poster={project.poster}
          label={content.work.viewProject}
          title={project.title}
          closeLabel={content.nav.close}
        />
      </div>
      <div className="project-caption">
        <div className="project-number">{project.number}</div>
        <div>
          <p className="project-meta">
            <span>{project.category}</span>
            <span>{project.duration}</span>
          </p>
          <h3>
            <Link href={`${routeFor(locale, "/work")}/${project.id}`}>{project.title}</Link>
          </h3>
          <p>{project.description}</p>
        </div>
      </div>
    </article>
  );
}

function PrimaryButton({ children, href, light = false }) {
  return (
    <Link className={`primary-button ${light ? "primary-button-light" : ""}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function HomePage({ locale = "en" }) {
  const content = getContent(locale);
  const home = content.home;
  const localizedProjects = getProjects(locale).filter((project) => project.featured);

  return (
    <SiteShell locale={locale} headerTheme="overlay">
      <section className="home-hero" id="top">
        <Image
          className="hero-image"
          src="/static/img/video/wedding2.png"
          alt={home.heroCopy}
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-shade" />
        <div className="home-hero-content">
          <p className="eyebrow hero-eyebrow">{home.eyebrow}</p>
          <h1>{home.title}</h1>
          <p className="hero-copy">{home.heroCopy}</p>
          <div className="hero-actions">
            <PrimaryButton href={routeFor(locale, "/work")} light>
              {home.primaryCta}
            </PrimaryButton>
            <ArrowLink href={routeFor(locale, "/contact")} className="arrow-link-light">
              {home.secondaryCta}
            </ArrowLink>
          </div>
        </div>
        <div className="hero-location">{home.location}</div>
        <div className="hero-index" aria-hidden="true">
          01
        </div>
      </section>

      <section className="editorial-intro section-pad">
        <div className="content-frame editorial-intro-grid">
          <p className="eyebrow" data-reveal>{home.introKicker}</p>
          <div data-reveal>
            <h2>{home.introTitle}</h2>
            <p>{home.introCopy}</p>
          </div>
        </div>
      </section>

      <section className="selected-work section-pad section-pad-top-small">
        <div className="content-frame">
          <SectionHeading
            eyebrow={home.selectedKicker}
            title={home.selectedTitle}
          />
          <div className="home-projects">
            {localizedProjects.map((project, index) => (
              <Link
                className={`home-project home-project-${index + 1}`}
                href={`${routeFor(locale, "/work")}/${project.id}`}
                key={project.id}
                data-reveal
              >
                <div className="home-project-image">
                  <Image
                    src={project.homePoster ?? project.poster}
                    alt={project.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                <div className="home-project-caption">
                  <span>{project.number}</span>
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="content-frame">
          <SectionHeading
            eyebrow={home.servicesKicker}
            title={home.servicesTitle}
          />
          <div className="service-rows">
            {home.services.map((service) => (
              <article key={service.number} data-reveal>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-image" data-reveal>
          <Image
            src="/static/img/photo/cover_2.jpg"
            alt={
              locale === "fr"
                ? "Image de mode photographiée par OTTO Vision"
                : "Fashion image photographed by OTTO Vision"
            }
            fill
            sizes="(max-width: 850px) 100vw, 48vw"
          />
        </div>
        <div className="manifesto-copy" data-reveal>
          <p className="eyebrow eyebrow-gold">{home.manifestoKicker}</p>
          <h2>{home.manifestoTitle}</h2>
          <p>{home.manifestoCopy}</p>
          <ArrowLink href={routeFor(locale, "/about")} className="arrow-link-light">
            {content.nav.about}
          </ArrowLink>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="content-frame">
          <SectionHeading eyebrow={home.processKicker} title={home.processTitle} />
          <div className="process-grid">
            {home.process.map(([number, title, copy]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="content-frame closing-cta-grid" data-reveal>
          <p className="eyebrow">{home.ctaKicker}</p>
          <div>
            <h2>{home.ctaTitle}</h2>
            <p>{home.ctaCopy}</p>
            <PrimaryButton href={routeFor(locale, "/contact")}>
              {home.ctaButton}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function WorkPage({ locale = "en" }) {
  const content = getContent(locale);
  const work = content.work;
  const localizedProjects = getProjects(locale);

  return (
    <SiteShell locale={locale}>
      <section className="page-hero page-hero-dark" id="top">
        <div className="content-frame page-hero-grid">
          <p className="eyebrow eyebrow-gold">{work.eyebrow}</p>
          <div>
            <h1>{work.title}</h1>
            <p>{work.intro}</p>
          </div>
        </div>
        <span className="page-hero-number" aria-hidden="true">02</span>
      </section>

      <section className="work-list section-pad" id="fashion">
        <div className="content-frame">
          <SectionHeading
            eyebrow={work.projectsKicker}
            title={work.projectsTitle}
          />
          <div className="project-list">
            {localizedProjects.map((project, index) => (
              <ProjectCard
                locale={locale}
                project={project}
                index={index}
                key={project.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="photography-section section-pad" id="photography">
        <div className="content-frame">
          <SectionHeading
            eyebrow={work.photographyKicker}
            title={work.photographyTitle}
            copy={work.photographyCopy}
          />
          <div className="photo-edit">
            {photography.map((photo, index) => (
              <figure
                className={`photo-frame photo-frame-${index + 1} ${photo.className}`}
                key={photo.src}
                data-reveal
              >
                <Image
                  src={photo.src}
                  alt={photo.alt[locale]}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta closing-cta-dark section-pad">
        <div className="content-frame closing-cta-grid" data-reveal>
          <p className="eyebrow eyebrow-gold">OTTO Vision</p>
          <div>
            <h2>{work.ctaTitle}</h2>
            <PrimaryButton href={routeFor(locale, "/contact")} light>
              {work.ctaButton}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function WeddingsPage({ locale = "en" }) {
  const content = getContent(locale);
  const weddings = content.weddings;

  return (
    <SiteShell locale={locale} headerTheme="overlay">
      <WeddingServiceStructuredData locale={locale} />
      <section className="wedding-hero" id="top">
        <Image
          src="/static/img/video/wedding1.png"
          alt={weddings.intro}
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-shade hero-shade-wedding" />
        <div className="wedding-hero-content">
          <p className="eyebrow hero-eyebrow">{weddings.eyebrow}</p>
          <h1>{weddings.title}</h1>
          <p>{weddings.intro}</p>
          <div className="hero-actions">
            <PrimaryButton href={routeFor(locale, "/contact")} light>
              {weddings.primaryCta}
            </PrimaryButton>
            <ArrowLink href={routeFor(locale, "/work")} className="arrow-link-light">
              {weddings.secondaryCta}
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="wedding-services section-pad">
        <div className="content-frame">
          <SectionHeading
            eyebrow={weddings.servicesKicker}
            title={weddings.servicesTitle}
          />
          <div className="wedding-service-grid">
            {weddings.services.map((service, index) => (
              <article key={service.title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-philosophy">
        <div className="wedding-philosophy-copy" data-reveal>
          <p className="eyebrow eyebrow-gold">{weddings.philosophyKicker}</p>
          <h2>{weddings.philosophyTitle}</h2>
          <p>{weddings.philosophyCopy}</p>
        </div>
        <div className="wedding-philosophy-image" data-reveal>
          <Image
            src="/static/img/wedding/wedding-25.jpg"
            alt={
              locale === "fr"
                ? "Un moment calme pendant un mariage en France"
                : "A quiet moment during a wedding in France"
            }
            width={1200}
            height={800}
            sizes="(max-width: 850px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="wedding-gallery section-pad">
        <div className="content-frame">
          <SectionHeading
            eyebrow={weddings.galleryKicker}
            title={weddings.galleryTitle}
          />
          <div className="wedding-masonry">
            {weddingImages.map((image, index) => (
              <figure
                className={`wedding-frame wedding-frame-${index + 1}`}
                key={image.id}
                data-reveal
              >
                <Image
                  src={`/static/img/wedding/wedding-${image.id}.jpg`}
                  alt={image.alt[locale]}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 34vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section wedding-process section-pad">
        <div className="content-frame">
          <SectionHeading
            eyebrow={weddings.processKicker}
            title={weddings.processTitle}
          />
          <div className="process-grid">
            {weddings.process.map(([number, title, copy]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="content-frame closing-cta-grid" data-reveal>
          <p className="eyebrow">{weddings.eyebrow}</p>
          <div>
            <h2>{weddings.ctaTitle}</h2>
            <p>{weddings.ctaCopy}</p>
            <PrimaryButton href={routeFor(locale, "/contact")}>
              {weddings.ctaButton}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function ProjectPage({ locale = "en", project, nextProject }) {
  const isFrench = locale === "fr";
  const workPath = routeFor(locale, "/work");

  return (
    <>
      <VideoStructuredData locale={locale} project={project} />
      <SiteShell locale={locale}>
        <article className="film-detail" id="top">
          <header className="film-detail-header content-frame">
            <Link className="film-detail-back" href={workPath}>
              ← {isFrench ? "Tous les projets" : "All work"}
            </Link>
            <p className="eyebrow eyebrow-gold">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="film-detail-intro">{project.description}</p>
          </header>

          <div className="film-detail-player content-frame">
            <video controls playsInline poster={project.poster} preload="metadata">
              <source src={project.videoUrl} type="video/mp4" />
              {isFrench
                ? "Votre navigateur ne prend pas en charge la vidéo HTML."
                : "Your browser does not support HTML video."}
            </video>
          </div>

          <div className="film-detail-meta content-frame">
            <div>
              <span>{isFrench ? "Format" : "Format"}</span>
              <p>{project.category}</p>
            </div>
            <div>
              <span>{isFrench ? "Durée" : "Duration"}</span>
              <p>{project.duration}</p>
            </div>
            <div>
              <span>{isFrench ? "Réalisation" : "Created by"}</span>
              <p>Otto Zhang · OTTO Vision</p>
            </div>
          </div>

          <footer className="film-detail-next content-frame">
            <p className="eyebrow">{isFrench ? "Projet suivant" : "Next project"}</p>
            <Link href={`${workPath}/${nextProject.id}`}>
              <span>{nextProject.title}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </footer>
        </article>
      </SiteShell>
    </>
  );
}

export function AboutPage({ locale = "en" }) {
  const content = getContent(locale);
  const about = content.about;

  return (
    <SiteShell locale={locale}>
      <section className="about-hero" id="top">
        <div className="about-hero-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>{about.title}</h1>
          <p>{about.intro}</p>
        </div>
        <div className="about-hero-image">
          <Image
            src="/static/img/about/otto-portrait.jpg"
            alt={
              locale === "fr"
                ? "Portrait d’Otto Zhang en mer"
                : "Portrait of Otto Zhang at sea"
            }
            fill
            sizes="(max-width: 850px) 100vw, 48vw"
            priority
          />
        </div>
      </section>

      <section className="about-story section-pad">
        <div className="content-frame about-story-grid">
          <p className="eyebrow" data-reveal>{about.storyKicker}</p>
          <div data-reveal>
            <h2>{about.storyTitle}</h2>
            <div className="about-story-copy">
              <p>{about.storyCopyOne}</p>
              <p>{about.storyCopyTwo}</p>
            </div>
          </div>
        </div>
        <div className="content-frame fact-grid">
          {about.facts.map(([label, value]) => (
            <div key={label} data-reveal>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values section-pad">
        <div className="content-frame">
          <SectionHeading
            eyebrow={about.valuesKicker}
            title={about.valuesTitle}
          />
          <div className="value-grid">
            {about.values.map(([title, copy], index) => (
              <article key={title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta closing-cta-dark section-pad">
        <div className="content-frame closing-cta-grid" data-reveal>
          <p className="eyebrow eyebrow-gold">Paris · Europe</p>
          <div>
            <h2>{about.ctaTitle}</h2>
            <PrimaryButton href={routeFor(locale, "/contact")} light>
              {about.ctaButton}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function ContactPage({ locale = "en" }) {
  const content = getContent(locale);
  const contact = content.contact;

  return (
    <SiteShell locale={locale}>
      <section className="contact-layout" id="top">
        <div className="contact-intro">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>{contact.title}</h1>
          <p>{contact.intro}</p>
          <div className="contact-actions">
            <PrimaryButton href="mailto:ottozrq@gmail.com?subject=OTTO%20Vision%20project">
              {contact.emailButton}
            </PrimaryButton>
            <ArrowLink href="https://www.instagram.com/otto_zhang/?hl=en">
              {contact.socialButton}
            </ArrowLink>
          </div>
        </div>

        <aside className="contact-panel" data-reveal>
          <div className="contact-row">
            <span>{contact.emailLabel}</span>
            <a href="mailto:ottozrq@gmail.com">ottozrq@gmail.com</a>
          </div>
          <div className="contact-row">
            <span>{contact.basedLabel}</span>
            <p>{contact.basedValue}</p>
          </div>
          <div className="contact-row">
            <span>{contact.availableLabel}</span>
            <p>{contact.availableValue}</p>
          </div>
          <div className="contact-row">
            <span>{contact.languagesLabel}</span>
            <p>{contact.languagesValue}</p>
          </div>
        </aside>
      </section>

      <section className="contact-details section-pad">
        <div className="content-frame">
          <SectionHeading
            eyebrow={contact.detailsKicker}
            title={contact.detailsTitle}
          />
          <div className="detail-grid">
            {contact.details.map(([title, copy], index) => (
              <article key={title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="contact-closing" data-reveal>{contact.closing}</p>
        </div>
      </section>
    </SiteShell>
  );
}
