import BreakSection from "../components/BreakSection";
import { offer } from "../components/data";
import Offer from "../components/Offer";
import Motion from "../components/Motion";
import GoogleMaps from "../components/GoogleMaps";
import Container from "../components/Container";

export default function Oferta() {
    const mapData = {
        center: { lat: 50.08949047247683, lng: 19.957895119185736 },
        zoom: 16,
        marker: {
            position: { lat: 50.08949047247683, lng: 19.957895119185736 },
            title: "Portfolio Real Estate",
            address: "al. 29 Listopada",
            mapsUrl: "https://www.google.com/maps/place/al.+29+Listopada,+Krak%C3%B3w/@50.0891807,19.955288,17z/data=!3m1!4b1!4m6!3m5!1s0x47165af3e73340bf:0x7e550d67ce67a452!8m2!3d50.0891773!4d19.9578683!16s%2Fg%2F1219h4cx?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
        }
    };
    return (
        <>
            <Motion>
                <BreakSection
                    pretitle=""
                    title="Poznaj naszą ofertę"
                >
                    Nasze biura to komfortowe i w pełni funkcjonalne miejsca pracy, stworzone z myślą o efektywności i prestiżu Twojej firmy. Zapewniamy wysoki standard wykończenia, nowoczesną infrastrukturę i dostęp do wszystkich niezbędnych udogodnień, tworząc idealne środowisko do rozwoju.
                </BreakSection>
                <Offer data={offer} />
                <Container>
                    <BreakSection
                        pretitle=""
                        title="Znajdziesz nas tutaj"
                    >
                        Zapraszamy do naszej siedziby. Poniższa mapa pomoże Ci łatwo do nas trafić i zaplanować trasę. Jesteśmy dostępni w dogodnej lokalizacji z dobrym dostępem do komunikacji miejskiej i miejsc parkingowych.
                    </BreakSection>
                    <GoogleMaps
                        center={mapData.center}
                        zoom={mapData.zoom}
                        marker={mapData.marker}
                    />
                </Container>
            </Motion>
        </>
    )
}