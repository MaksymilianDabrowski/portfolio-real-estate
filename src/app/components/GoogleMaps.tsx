"use client"

import React, { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

interface MapProps {
    center: google.maps.LatLngLiteral;
    zoom: number;
    marker: {
        position: google.maps.LatLngLiteral;
        title: string;
        address: string;
        mapsUrl: string;
    };
}

export default function GoogleMaps({ center, zoom, marker }: MapProps) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;

        const initializeMap = async () => {
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

            if (!apiKey) {
                console.error("Google Maps API key is missing.");
                return;
            }

            try {
                const loader = new Loader({
                    apiKey: apiKey,
                    version: 'weekly',
                    libraries: ["marker"], 
                });

                const google = await loader.load();

                if (!isMounted || !mapRef.current) {
                    return;
                }

                const { Map } = google.maps;
                const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

                const map = new Map(mapRef.current, {
                    center: center,
                    zoom: zoom,
                    mapId: 'DEMO_MAP_ID', 
                    disableDefaultUI: true, 
                });

                const infoWindowContent = `
                    <div style="color: #1E1E1F;">
                        <h1 style="font-size: 1.1rem; font-weight: bold;">${marker.title}</h1>
                        <p>${marker.address}</p>
                        <a href="${marker.mapsUrl}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: none; font-weight: 500;">Zobacz w Google Maps</a>
                    </div>
                `;

                const infoWindow = new google.maps.InfoWindow({
                    content: infoWindowContent,
                });

                const mapMarker = new AdvancedMarkerElement({
                    map,
                    position: marker.position,
                    title: marker.title,
                });

                infoWindow.open(map, mapMarker);


            } catch (error) {
                console.error("Failed to load Google Maps:", error);
            }
        };

        initializeMap();

        return () => {
            isMounted = false;
        };
    }, [center, zoom, marker]);

    return (
        <div className="m-6 mx-auto size-[600px] w-full rounded-xl" ref={mapRef} />
    )
}