import { createMetadata } from "../../metadata";
import { AboutPage } from "../../site-pages";

export const metadata = createMetadata({
  locale: "en",
  page: "about",
  path: "/about"
});

export default function Page() {
  return <AboutPage locale="en" />;
}
