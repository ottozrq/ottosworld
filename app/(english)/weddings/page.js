import { createMetadata } from "../../metadata";
import { WeddingsPage } from "../../site-pages";

export const metadata = createMetadata({
  locale: "en",
  page: "weddings",
  path: "/weddings"
});

export default function Page() {
  return <WeddingsPage locale="en" />;
}
