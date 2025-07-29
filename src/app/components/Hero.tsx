import Image from "next/image"
import hero from "../assets/photos/hero_prop.jpg"
import hero2 from "../assets/photos/hero_prop_resized.jpg"
import Container from "./Container"
import google from "../assets/providers/google.png"
import amazon from "../assets/providers/amazon.png"
import netflix from "../assets/providers/netflix.png"
import Link from "next/link"
import Motion from "./Motion"

export default function Hero() {
    return (
        <>
            <Motion>
                <Container className="flex flex-wrap">
                    <div className="flex flex-col items-center w-full lg:flex-row">
                        <div className="flex items-center justify-center w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="max-w-2xl mb-8">
                                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                                    Lokalizacja, która napędza Twój sukces.
                                </h1>
                                <p className="py-6 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Znajdź idealną przestrzeń dla swojego biznesu w lokalizacjach, które gwarantują sukces.
                                </p>
                                <div className="flex flex-col items-start space-y-2 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                                    <Link
                                        href="/oferta"
                                        rel="noopener"
                                        className="px-6 py-4 text-lg text-center text-white bg-[#1E1E1F] rounded-xl hover:bg-white hover:text-[#1E1E1F] border-2 hover:border-[#1E1E1F]">
                                        Sprawdź naszą ofertę
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full lg:w-1/2 order-1 lg:order-2 mb-10">
                            <div className="relative w-full" style={{ aspectRatio: '1200 / 800' }}>
                                <Image
                                    src={hero2}
                                    alt="Nowoczesny budynek biurowy o zmierzchu"
                                    fill
                                    priority={true}
                                    className="object-cover rounded-2xl"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col justify-center">
                        <div className="text-xl text-center text-gray-700 mt-12 mb-2">
                            <span className="text-[#1E1E1F]">100+</span> firm rozwija swój biznes w naszych przestrzeniach
                        </div>

                        {/* https://www.flaticon.com/free-icons/brands-and-logotypes */}
                        <div className="md:flex flex-wrap justify-center mt-8 md:justify-around grid">
                            <div className="pt-2 text-gray-400 dark:text-gray-400">
                                <Image src={google} alt="Google icon - Flaticon" width={120} />
                            </div>
                            <div className="text-gray-400 dark:text-gray-400">
                                <Image src={amazon} alt=" icon - Flaticon" width={120} />
                            </div>
                            <div className="text-gray-400 dark:text-gray-400">
                                <Image src={netflix} alt="Netflix icon - Flaticon" width={120} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Motion>
        </>
    )
}