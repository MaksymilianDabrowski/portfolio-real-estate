import Link from "next/link";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../assets/logo/logo.png"

const navigation = [
    { name: 'Strona Główna', href: '/' },
    { name: 'Oferta', href: '/oferta' },
    { name: 'Do wynajęcia', href: '/powierzchnia-do-wynajecia' },
    { name: 'Galeria', href: '/galeria-zdjec' },
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' }
];

export default function Footer() {
    return (
        <Container>
            <footer className="max-w-screen-xl pt-10 mx-auto border-t border-[#1E1E1F]">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-4">
                        <div className="flex items-center space-x-4 text-2xl font-medium text-[#1E1E1F]">
                            <Image src={logo} alt={"Footer Logo"} className="w-14 lg:w-100" />
                            <span>Real Estate Portfolio</span>
                        </div>
                        <div className="max-w-md mt-4 text-lg text-gray-500">
                            {/* Poprawka: Użycie <span> dla lepszej kontroli nad stylami */}
                            <span className="block">al. Przykładowa 123, 30-123 Kraków</span>
                            <span className="block mt-2 text-sm">KRS 0000123456 • NIP 1234567890 • REGON 123456789</span>
                            <span className="block text-sm">Kapitał zakładowy 100.000,00 PLN</span>
                        </div>
                    </div>

                    <div>
                        {/* Poprawka: Usunięto negatywne marginesy, dodano flexbox i odstępy */}
                        <div className="flex flex-col gap-2">
                            {navigation.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-gray-500 transition-colors hover:text-gray-900"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-10 text-sm text-center text-gray-700">
                    Real Estate © {new Date().getFullYear()}.
                    Made by{" "}
                    <Link
                        href="https://github.com/MaksymilianDabrowski"
                        target="_blank"
                        rel="noopener noreferrer" // Dodano noreferrer dla bezpieczeństwa
                        className="font-medium transition-colors hover:text-blue-600"
                    >
                        Maksymilian Dąbrowski.
                    </Link>
                </div>
            </footer>
        </Container>
    );
}