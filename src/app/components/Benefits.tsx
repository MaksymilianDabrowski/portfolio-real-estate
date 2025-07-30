import Image, { StaticImageData } from "next/image";
import React, { ElementType } from "react";
import Container from "./Container";
import BenefitComp from "./BenefitComp";

interface BulletPoint {
    title: string;
    desc: string;
    icon: ElementType;
}

interface BenefitsData {
    title: string;
    desc: string;
    image: StaticImageData;
    bullets: BulletPoint[];
}

interface BenefitsProps {
    data: BenefitsData;
    imgPos?: "left" | "right";
}

export default function Benefits({ data, imgPos }: BenefitsProps) {
    return (
        <Container className="flex flex-wrap items-center mb-20 lg:gap-10 lg:flex-nowrap mt-16">
            <div
                className={`flex items-center justify-center w-full lg:w-1/2 ${imgPos === "right" ? "lg:order-1" : ""
                    }`}
            >
                <div className="relative aspect-[16/9]">
                    <Image
                        src={data.image}
                        alt={`Zdjęcie ilustracyjne dla ${data.title}`}
                        className={"object-cover rounded-2xl"}
                        placeholder="blur"
                    />
                </div>
            </div>

            <div
                className={`flex items-center justify-center w-full lg:w-1/2 ${imgPos === "right" ? "lg:justify-end" : ""
                    }`}
            >
                <div>
                    <div className="flex flex-col w-full mt-2">
                        <h3 className="max-w-2xl mt-8 lg:mt-2 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
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