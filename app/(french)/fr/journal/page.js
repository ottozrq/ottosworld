import { JournalPage, journalMetadata } from "../../../journal-pages";

export const metadata = journalMetadata("fr");
export default function Page() { return <JournalPage locale="fr" />; }
