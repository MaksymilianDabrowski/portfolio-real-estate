import Image from "next/image";
import React, { ElementType } from "react";
import Container from "./Container";
import BenefitComp from "./BenefitComp";
import offer from "../assets/photos/offer_photo.jpg"

interface BulletPoint {
    title: string;
    desc: string;
    icon: ElementType;
}

interface OfferData {
    title: string;
    desc: string;
    bullets: BulletPoint[];
}

interface OfferProps {
    data: OfferData;
    imgPos?: "left" | "right";
}

export default function Offer({ data, imgPos }: OfferProps) {
    return (
        <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap">
            <div
                className={`flex items-center justify-center w-full lg:w-1/2 ${imgPos === "right" ? "lg:order-1" : ""
                    }`}
            >
                <div>
                    <Image
                        src={offer}
                        alt={`Zdjęcie ilustracyjne dla ${data.title}`}
                        className="object-cover rounded-2xl"
                        placeholder="blur"
                    />
                </div>
            </div>

            <div
                className={`flex flex-wrap items-center w-full lg:w-1/2 ${imgPos === "right" ? "lg:justify-end" : ""
                    }`}
            >
                <div>
                    <div className="flex flex-col w-full mt-2">
                        <h3 className="max-w-2xl mt-2 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                            {data.title}
                        </h3>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                            {data.desc}
                        </p>
                    </div>

                    <div className="w-full mt-5">
                        {data.bullets.map((item, index) => (
                            <BenefitComp
                                key={index}
                                title={item.title}
                                icon={item.icon}
                            >
                                {item.desc}
                            </BenefitComp>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}