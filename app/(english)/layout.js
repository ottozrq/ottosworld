import "../globals.css";
import { bodyFont, displayFont } from "../fonts";
import { createRootMetadata } from "../metadata";
import { SiteStructuredData } from "../seo";

export const metadata = createRootMetadata("en");

export default function EnglishRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <SiteStructuredData locale="en" />
        {children}
      </body>
    </html>
  );
}
