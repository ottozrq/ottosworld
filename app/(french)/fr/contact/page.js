import { createMetadata } from "../../../metadata";
import { ContactPage } from "../../../site-pages";

export const metadata = createMetadata({
  locale: "fr",
  page: "contact",
  path: "/contact"
});

export default function Page() {
  return <ContactPage locale="fr" />;
}
