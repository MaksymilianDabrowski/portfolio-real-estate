import Image from "next/image"
import Container from "./Container";
import rent from "../assets/photos/for_rent_photo.jpg"
import { rental } from "./data"

// imgPos if someone would like to add addicional sections from different perspective
interface ForRentProps {
    imgPos: "left" | "right",
}

export default function ForRent({ imgPos }: ForRentProps) {
    return (
        <>
            <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
                <div
                    className={`flex items-center justify-center w-full lg:w-1/2 ${imgPos === "right" ? "lg:order-1" : ""
                        }`}>
                    <div>
                        <Image
                            width={768}
                            src={rent}
                            alt="Benefits"
                            className={"object-cover rounded-2xl"}
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h3 className="max-w-2xl text-3xl py-2 font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                            {rental.title}
                        </h3>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl space-y-6">
                            {rental.bullets.map((paragraph, idx) => (
                                <p key={idx}>
                                    {paragraph}
                                </p>
                            ))}
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}