import { createMetadata } from "../../metadata";
import ItContent from "../../it/ItContent";

export const metadata = createMetadata({
  locale: "en",
  page: "it",
  path: "/it"
});

export default function Page() {
  return <ItContent locale="en" />;
}
