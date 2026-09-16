import { JournalPage, journalMetadata } from "../../journal-pages";

export const metadata = journalMetadata("en");
export default function Page() { return <JournalPage locale="en" />; }
