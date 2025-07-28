"use client"

import NextVideo from "next-video"
import Container from "./Container"
import RealEstate from "../videos/RealEstate.mp4"

export default function Video() {
    return (
        <Container>
            <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl ">
                <div className="aspect-video">
                    <NextVideo src={RealEstate} />
                </div>
            </div>
        </Container>
    );
}