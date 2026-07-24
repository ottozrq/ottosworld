import { createMetadata } from "../../metadata";
import { HomePage } from "../../site-pages";

export const metadata = createMetadata({
  locale: "fr",
  page: "home",
  path: "/"
});

export default function Page() {
  return <HomePage locale="fr" />;
}
