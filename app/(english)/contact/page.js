import { createMetadata } from "../../metadata";
import { ContactPage } from "../../site-pages";

export const metadata = createMetadata({
  locale: "en",
  page: "contact",
  path: "/contact"
});

export default function Page() {
  return <ContactPage locale="en" />;
}
