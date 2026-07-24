import "../globals.css";
import Script from "next/script";
import { bodyFont, displayFont } from "../fonts";
import { createRootMetadata } from "../metadata";
import { SiteStructuredData } from "../seo";

export const metadata = createRootMetadata("fr");

export default function FrenchRootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Script
          src="/umami/tracker"
          data-website-id="e3b15a66-b5a7-4fc0-bde0-a2b2064cce45"
          data-domains="ottozhang.com,www.ottozhang.com"
          strategy="afterInteractive"
        />
        <SiteStructuredData locale="fr" />
        {children}
      </body>
    </html>
  );
}
