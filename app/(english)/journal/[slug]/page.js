import { notFound } from "next/navigation";
import { getGuide, guides } from "../../../journal-content";
import { GuidePage, journalMetadata } from "../../../journal-pages";

export const dynamicParams = false;
export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const guide = getGuide("en", (await params).slug);
  if (!guide) notFound();
  return journalMetadata("en", guide);
}
export default async function Page({ params }) {
  const guide = getGuide("en", (await params).slug);
  if (!guide) notFound();
  return <GuidePage locale="en" guide={guide} />;
}
