import Hero from "./components/Hero"
import BreakSection from "./components/BreakSection";
import Benefits from "./components/Benefits";
import { benefitOne, benefitTwo } from "../app/components/data"
import Container from "./components/Container";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <BreakSection
          title="Czym zajmuje się nasza firma?">
          Specjalizujemy się w wynajmie nowoczesnych powierzchni handlowych i biurowych, zlokalizowanych w kluczowych punktach miasta o dużym natężeniu ruchu. Nasza oferta obejmuje elastyczne przestrzenie idealne dla Twojej firmy oraz skuteczne nośniki reklamowe, takie jak telebimy, totemy i innowacyjne folie interaktywne.
        </BreakSection>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <BreakSection
          title="Nasze realizacje w obiektywie" >
        </BreakSection>
        <Video />
      </Container>
    </>
  );
}
