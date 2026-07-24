import "../globals.css";
import { bodyFont, displayFont } from "../fonts";
import { createRootMetadata } from "../metadata";

export const metadata = createRootMetadata("en");

export default function EnglishRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
