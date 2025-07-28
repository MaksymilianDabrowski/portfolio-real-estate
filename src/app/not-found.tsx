import Link from "next/link";
import BreakSection from "./components/BreakSection";

export default function NotFound() {
    return (
        <BreakSection
            title="Przepraszamy">
            Taka strona nie istnieje <br /> <br />
            <Link href="/" className="p-2 bg-blue-800 rounded-md text-white">
                Strona Główna
            </Link>
        </BreakSection>
    )
}