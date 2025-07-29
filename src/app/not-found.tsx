// w pliku np. app/not-found.tsx

import Link from "next/link";
import Container from "./components/Container"; // Zakładam, że masz taki komponent

export default function NotFound() {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center text-center py-20 lg:py-40">
                <h1 className="text-8xl lg:text-9xl font-bold text-[#1E1E1F]">
                    404
                </h1>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 lg:text-4xl">
                    Strona nie została znaleziona
                </h2>
                <p className="max-w-xl mt-4 text-lg leading-normal text-gray-500">
                    Przepraszamy, ale strona, której szukasz, nie istnieje, została przeniesiona lub jest tymczasowo niedostępna.
                </p>
                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 text-lg text-center text-white bg-[#1E1E1F] rounded-xl transition-transform hover:scale-105"
                    >
                        Wróć na Stronę Główną
                    </Link>
                </div>
            </div>
        </Container>
    );
}