import Link from "next/link";
import { getContent, routeFor } from "./content";
import { MotionController, SiteHeader } from "./site-client";

export function SiteShell({ children, locale = "en", headerTheme = "solid" }) {
  return (
    <>
      <SiteHeader locale={locale} theme={headerTheme} />
      <MotionController />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}

export function SiteFooter({ locale = "en" }) {
  const content = getContent(locale);

  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="footer-kicker">OTTO Vision</p>
        <p>{content.footer.line}</p>
      </div>
      <div className="footer-grid">
        <div>
          <span className="footer-label">Studio</span>
          <p>{content.footer.location}</p>
        </div>
        <div>
          <span className="footer-label">Contact</span>
          <a href="mailto:ottozrq@gmail.com">ottozrq@gmail.com</a>
          <a href="https://www.instagram.com/otto_zhang/?hl=en">Instagram</a>
        </div>
        <div>
          <span className="footer-label">Explore</span>
          <Link href={routeFor(locale, "/work")}>{content.nav.work}</Link>
          <Link href={routeFor(locale, "/weddings")}>{content.nav.weddings}</Link>
          <Link href={routeFor(locale, "/about")}>{content.nav.about}</Link>
          <Link href={routeFor(locale, "/contact")}>{content.nav.contact}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {content.footer.rights}</span>
        <Link href="/it">{content.footer.archive}</Link>
        <a href="#top">↑</a>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <header className={`section-heading section-heading-${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  );
}

export function ArrowLink({ children, href, className = "" }) {
  return (
    <Link className={`arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
