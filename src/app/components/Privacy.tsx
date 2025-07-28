"use client";

import BreakSection from "../components/BreakSection";
import Motion from "../components/Motion";
import Container from "./Container";

export default function Privacy() {
    return (
        <Motion>
            <Container>
                <BreakSection title="Polityka prywatności">
                    <div className="pt-12 max-w-3xl mx-auto text-left space-y-8 text-gray-600">
                        <p>
                            Dziękujemy za odwiedzenie naszej strony internetowej. W trosce o ochronę Twojej prywatności przygotowaliśmy poniższą politykę prywatności, abyś mógł/a zrozumieć, jakie informacje gromadzimy, jak je używamy i chronimy.
                        </p>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                1. Zbierane informacje
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    <strong>1.1. Dane osobowe:</strong> Mogliśmy poprosić o podanie niektórych informacji osobowych, takich jak imię, nazwisko, adres e-mail, numer telefonu, w celu świadczenia usług lub odpowiedzi na zapytania.
                                </p>
                                <p>
                                    <strong>1.2. Dane automatycznie gromadzone:</strong> Podczas korzystania z naszej strony internetowej automatycznie możemy zbierać pewne informacje, takie jak adres IP, typ przeglądarki, język przeglądarki i inne podobne informacje.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                2. Cel gromadzenia danych
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Gromadzimy dane w celu świadczenia usług, odpowiedzi na zapytania, dostarczania informacji o naszych produktach i usługach oraz w celach marketingowych.
                                </p>
                                <p>
                                    Wykorzystujemy dane zbierane automatycznie do analizy trendów, zarządzania stroną, śledzenia ruchu na stronie oraz zbierania informacji demograficznych.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                3. Udostępnianie informacji
                            </h2>
                            <p>
                                Nie sprzedajemy, nie handlujemy ani nie udostępniamy Twoich danych osobowych osobom trzecim bez Twojej zgody, z wyjątkiem sytuacji opisanych w niniejszej Polityce Prywatności.
                            </p>
                        </section>

                        {/* ... Możesz w ten sposób dodać resztę sekcji (Ochrona danych, Cookies itd.) ... */}

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Kontakt
                            </h2>
                            <p>
                                W przypadku pytań dotyczących polityki prywatności, prosimy o kontakt na adres: <a href="mailto:kontakt@przykladowa-domena.pl" className="text-blue-600 hover:underline">kontakt@przykladowa-domena.pl</a>
                            </p>
                        </section>

                        <p className="pt-4">
                            Dziękujemy za zaufanie i zapewniamy, że Twoje dane są u nas bezpieczne.
                        </p>
                    </div>
                </BreakSection>
            </Container>
        </Motion>
    );
}