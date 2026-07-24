"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getContent, routeFor } from "./content";

function localePath(pathname, nextLocale) {
  if (pathname.startsWith("/it")) {
    return nextLocale === "fr" ? "/fr" : "/it";
  }

  const cleanPath =
    pathname === "/fr" ? "/" : pathname.startsWith("/fr/") ? pathname.slice(3) : pathname;

  return nextLocale === "fr"
    ? cleanPath === "/"
      ? "/fr"
      : `/fr${cleanPath}`
    : cleanPath;
}

export function SiteHeader({ locale = "en", theme = "solid" }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const content = getContent(locale);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const items = [
    [content.nav.work, "/work"],
    [content.nav.weddings, "/weddings"],
    [content.nav.about, "/about"],
    [content.nav.contact, "/contact"]
  ];

  return (
    <header
      className={`site-header site-header-${theme} ${scrolled ? "is-scrolled" : ""} ${
        menuOpen ? "menu-is-open" : ""
      }`}
    >
      <div className="header-inner">
        <Link
          className="brand-lockup"
          href={routeFor(locale, "/")}
          aria-label={locale === "fr" ? "Accueil OTTO Vision" : "OTTO Vision home"}
        >
          <Image
            className="brand-mark"
            src="/static/img/logo.png"
            alt=""
            width={208}
            height={200}
            priority
          />
          <span className="brand-wordmark">OTTO Vision</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map(([label, path]) => (
            <Link href={routeFor(locale, path)} key={path}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <div className="locale-switch" aria-label="Language">
            <Link
              className={locale === "en" ? "is-active" : ""}
              href={localePath(pathname, "en")}
              hrefLang="en"
            >
              EN
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              className={locale === "fr" ? "is-active" : ""}
              href={localePath(pathname, "fr")}
              hrefLang="fr"
            >
              FR
            </Link>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? content.nav.close : content.nav.menu}</span>
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-navigation" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {items.map(([label, path], index) => (
            <Link href={routeFor(locale, path)} key={path} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <div>
            <span>Paris, France</span>
            <a href="mailto:ottozrq@gmail.com" tabIndex={menuOpen ? 0 : -1}>
              ottozrq@gmail.com
            </a>
          </div>
          <div className="mobile-locale-switch" aria-label="Language">
            <Link
              className={locale === "en" ? "is-active" : ""}
              href={localePath(pathname, "en")}
              hrefLang="en"
              tabIndex={menuOpen ? 0 : -1}
            >
              English
            </Link>
            <Link
              className={locale === "fr" ? "is-active" : ""}
              href={localePath(pathname, "fr")}
              hrefLang="fr"
              tabIndex={menuOpen ? 0 : -1}
            >
              Français
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    document.documentElement.classList.add("motion-enabled");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export function VideoLauncher({ closeLabel, embedUrl, label, poster, title, videoUrl }) {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  if (!embedUrl && !videoUrl) {
    return null;
  }

  const closeDialog = () => {
    videoRef.current?.pause();
    dialogRef.current?.close();
  };

  const openDialog = () => {
    dialogRef.current?.showModal();
    videoRef.current?.play().catch(() => undefined);
  };

  return (
    <>
      <button
        className="project-play"
        type="button"
        onClick={openDialog}
        aria-label={`${label}: ${title}`}
      >
        <span aria-hidden="true">▶</span>
        {label}
      </button>
      <dialog
        className="video-dialog"
        ref={dialogRef}
        onClose={() => videoRef.current?.pause()}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeDialog();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
      >
        <div className="video-dialog-inner">
          <button
            className="video-close"
            type="button"
            onClick={closeDialog}
            aria-label={closeLabel}
          >
            ×
          </button>
          <div className="video-frame">
            {videoUrl ? (
              <video
                controls
                playsInline
                poster={poster}
                preload="metadata"
                ref={videoRef}
                src={videoUrl}
              >
                Your browser does not support HTML video.
              </video>
            ) : (
              <iframe
                src={embedUrl}
                title={title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
