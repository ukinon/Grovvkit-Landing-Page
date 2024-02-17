import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const anderson = localFont({
  src: [
    {
      path: "../../public/fonts/AndersonGrotesk.otf",
      weight: "50",
    },
  ],
  variable: "--font-anderson",
});

const appleGaramond = localFont({
  src: [
    {
      path: "../../public/fonts/AppleGaramond-Bold.ttf",
      weight: "400",
    },
  ],
  variable: "--font-apple",
});

const moche = localFont({
  src: [
    {
      path: "../../public/fonts/Moche-Regular.otf",
      weight: "200",
    },
  ],
  variable: "--font-moche",
});

const mocheBold = localFont({
  src: [
    {
      path: "../../public/fonts/Moche-Bold.otf",
      weight: "400",
    },
  ],
  variable: "--font-moche-bold",
});

const neueMedium = localFont({
  src: [
    {
      path: "../../public/fonts/Neue Regrade Medium.otf",
      weight: "400",
    },
  ],
  variable: "--font-neueMedium",
});

const neueLight = localFont({
  src: [
    {
      path: "../../public/fonts/Neue Regrade Light Italic.otf",
      weight: "400",
    },
  ],
  variable: "--font-neueLight",
});

export const metadata: Metadata = {
  title: "Grovvkit Studio",
  description: "Lorem Ipsum Dolor Sit Amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth bg-zinc-950">
      <body
        className={`${anderson.variable} ${appleGaramond.variable} ${moche.variable} ${mocheBold.variable} ${neueMedium.variable} ${neueLight.variable}`}
      >
        <main className="scroll-smooth">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
