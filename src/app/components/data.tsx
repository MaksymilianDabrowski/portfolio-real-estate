import photo1 from "../assets/photos/bene1.jpg"
import photo2 from "../assets/photos/bene2.jpg"
import gal1 from "../assets/gallery/gal1.jpg"
import gal2 from "../assets/gallery/gal2.jpg"
import gal3 from "../assets/gallery/gal3.jpg"
import gal4 from "../assets/gallery/gal4.jpg"
import { BarChart3, DraftingCompass, Wrench, Clock, FlaskConical, Handshake, Building2, ClipboardCheck, Users } from "lucide-react";

const benefitOne = {
  title: "Kompleksowe usługi dla Twojej nieruchomości",
  desc: "Świadczymy pełen zakres usług związanych z zarządzaniem, rozwojem i optymalizacją nieruchomości komercyjnych. Nasze działania koncentrują się na czterech kluczowych filarach:",
  image: photo1,
  bullets: [
    {
      title: "Audyt i optymalizacja zarządzania",
      desc: "Analizujemy każdy aspekt funkcjonowania nieruchomości, wdrażając rozwiązania, które maksymalizują jej rentowność i minimalizują koszty operacyjne.",
      icon: BarChart3,
    },
    {
      title: "Projektowanie architektoniczne",
      desc: "Tworzymy nowoczesne i funkcjonalne projekty budynków, które odpowiadają na unikalne potrzeby Twojej inwestycji i przyciągają najemców.",
      icon: DraftingCompass,
    },
    {
      title: "Zarządzanie operacyjne nieruchomością",
      desc: "Przejmujemy wszystkie obowiązki związane z codziennym działaniem obiektu – od obsługi najemców po nadzór techniczny, zapewniając jego bezproblemowe funkcjonowanie.",
      icon: Wrench,
    },
  ],
};

const benefitTwo = {
  title: "Nasze Zobowiązanie do Jakości",
  desc: "Jakość to fundament naszej działalności. Zobowiązujemy się do dostarczania najwyższych standardów we wszystkim, co robimy, realizując naszą politykę poprzez:",
  image: photo2,
  bullets: [
    {
      title: "Doświadczenie i Terminowość",
      desc: "Nasza wieloletnia praktyka w branży to gwarancja sprawnej i terminowej realizacji każdej inwestycji, od koncepcji po oddanie do użytku.",
      icon: Clock,
    },
    {
      title: "Innowacja i Technologia",
      desc: "Sięgamy po najnowsze technologie i materiały, aby tworzyć obiekty o najwyższym standardzie, które są nowoczesne, wydajne i gotowe na przyszłość.",
      icon: FlaskConical,
    },
    {
      title: "Etyka i Zaufanie",
      desc: "Działamy w oparciu o najwyższe standardy etyki zawodowej. Przejrzystość i uczciwość to podstawa naszych relacji z każdym klientem.",
      icon: Handshake,
    },
  ],
};

const offer = {
  title: "Wsparcie dla Twojej nieruchomości na każdym etapie",
  desc: "Od strategicznego planowania i budowy, przez tworzenie idealnego środowiska dla najemców.",
  bullets: [
    {
      title: "Rozwój i Modernizacja Nieruchomości",
      desc: "Zajmujemy się strategicznym planowaniem i realizacją inwestycji. Nasze usługi obejmują zarówno rozbudowę istniejących parków handlowych, jak i budowę nowych obiektów od podstaw, zawsze we współpracy z doświadczonymi architektami.",
      icon: Building2,
    },
    {
      title: "Kompleksowe Zarządzanie Obiektem",
      desc: "Zapewniamy pełną obsługę techniczną i administracyjną nieruchomości. Nasz zespół dba o każdy detal, od utrzymania czystości i terenów zielonych, przez odśnieżanie, po regularne przeglądy techniczne, gwarantując bezproblemowe funkcjonowanie obiektu.",
      icon: ClipboardCheck,
    },
    {
      title: "Idealne Środowisko dla Biznesu",
      desc: "Naszym priorytetem jest tworzenie komfortowych i funkcjonalnych warunków dla najemców i ich klientów. Stale inwestujemy w udogodnienia, takie jak modernizacja przestrzeni wspólnych i zapewnienie dużej liczby miejsc parkingowych.",
      icon: Users,
    },
  ],
}

const rental = {
  title: "Nowoczesne Centrum Biurowe \"Prestige Point\"",
  bullets: [
    "W naszym nowoczesnym biurowcu dostępne są lokale handlowo-usługowe o zróżnicowanych powierzchniach, np. 105 m² i 156 m², z elastyczną możliwością ich łączenia w celu stworzenia większej przestrzeni. Wszystkie lokale są w pełni klimatyzowane, wyposażone w zaawansowany system wentylacji oraz ogrzewanie miejskie.",
    "Budynek zapewnia pełen komfort i dostępność dzięki windzie, dwóm klatkom schodowym oraz łazienkom przystosowanym dla osób niepełnosprawnych.",
    "Doskonała lokalizacja gwarantuje łatwy dostęp do głównych arterii komunikacyjnych miasta oraz autostrady. W bezpośrednim sąsiedztwie znajdują się przystanki komunikacji miejskiej, co zapewnia wygodny dojazd dla pracowników i klientów."
  ]
}

/* 
fetch image urls from sanity cms - deprecated

*[_type == "gallery"] {
"imageUrl": images[].asset->url,
}
*/

const gallery = [
  {
    src: gal1,
  },
  {
    src: gal2,
  },
  {
    src: gal3,
  },
  {
    src: gal4,
  },
  {
    src: gal1,
  },
  {
    src: gal2,
  },
  {
    src: gal3,
  },
  {
    src: gal4,
  },
  {
    src: gal1,
  },
  {
    src: gal2,
  },
  {
    src: gal3,
  },
  {
    src: gal4,
  },
]

export { benefitOne, benefitTwo, offer, rental, gallery }