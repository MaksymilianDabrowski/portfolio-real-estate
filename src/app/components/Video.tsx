"use client"

import NextVideo from "next-video"
import Container from "./Container"
import video from "../videos/RealEstateVideo.mp4"

export default function Video() {
    return (
        <Container>
            <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl ">
                <div className="aspect-video">
                    <NextVideo src={video} />
                </div>
            </div>
        </Container>
    );
}