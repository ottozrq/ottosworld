import { createMetadata } from "../../../metadata";
import ItContent from "../../../it/ItContent";

export const metadata = createMetadata({
  locale: "fr",
  page: "it",
  path: "/it"
});

export default function Page() {
  return <ItContent locale="fr" />;
}
