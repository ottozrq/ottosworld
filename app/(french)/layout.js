import "../globals.css";
import { bodyFont, displayFont } from "../fonts";
import { createRootMetadata } from "../metadata";
import { SiteStructuredData } from "../seo";

export const metadata = createRootMetadata("fr");

export default function FrenchRootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <SiteStructuredData locale="fr" />
        {children}
      </body>
    </html>
  );
}
