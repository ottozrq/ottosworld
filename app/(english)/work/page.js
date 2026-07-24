import { createMetadata } from "../../metadata";
import { WorkPage } from "../../site-pages";

export const metadata = createMetadata({
  locale: "en",
  page: "work",
  path: "/work"
});

export default function Page() {
  return <WorkPage locale="en" />;
}
