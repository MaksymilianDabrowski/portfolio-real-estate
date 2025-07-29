import type { Metadata } from "next";
import { Cabin } from "next/font/google"; // Inter was prev used
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cabin = Cabin({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "RealeEstate - Tam gdzie nasi klienci",
  description: "Rozwijaj swój biznes w prestiżowej lokalizacji. Wynajmij nowoczesne biuro lub lokal handlowy w Krakowie i zyskaj doskonałą widoczność. Zapraszamy do kontaktu!",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.className}`}> {/* bg-[#ede4d4] */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
