"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import { Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { gallery } from "./data";

export default function Gallery() {
    const [index, setIndex] = useState(-1)

    return (
        <>
            <div className="max-w-screen-xl mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => setIndex(idx)}
                        className="cursor-pointer aspect-video relative"
                    >
                        <Image
                            src={img.src}
                            alt={`Zdjęcie z galerii ${idx + 1}`}
                            fill
                            className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                            placeholder="blur"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                plugins={[Fullscreen, Thumbnails]}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={gallery.map(img => ({ src: img.src.src }))}
            />
        </>
    )
}