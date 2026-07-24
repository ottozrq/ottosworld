import "../globals.css";
import { bodyFont, displayFont } from "../fonts";
import { createRootMetadata } from "../metadata";

export const metadata = createRootMetadata("fr");

export default function FrenchRootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
