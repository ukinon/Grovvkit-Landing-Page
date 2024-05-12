import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export const works = [
  {
    title: "Lunatic",
    link: "#",
    thumbnail: "/assets/works/lunatic-1.png",
  },
  {
    title: "Lunatic",
    link: "#",
    thumbnail: "/assets/works/lunatic-2.png",
  },
  {
    title: "Grovvlab Brand Guidelines",
    link: "https://drive.google.com/file/d/14eapUkR8_FEaLPDnLNPjPxTgLYJYxGNv/view",
    thumbnail: "/assets/works/guidelines.jpg",
  },
  {
    title: "Design Concept Mind Control",
    link: "https://drive.google.com/file/d/1_Uwl_JpgRyikerkT1HlzLsAN4bdlr3dB/view",
    thumbnail: "/assets/works/mindcontrol.png",
  },
  {
    title: "Natano Diary",
    link: "https://natanodiary.vercel.app/",
    thumbnail: "/assets/works/natanodiary.jpg",
  },
  {
    title: "Portfolio Website",
    link: "https://ukino.vercel.app/",
    thumbnail: "/assets/works/portfolio.jpg",
  },
  {
    title: "Natano Diary",
    link: "https://natanodiary.vercel.app/",
    thumbnail: "/assets/works/natanodiary.jpg",
  },
  {
    title: "Kongsolana",
    link: "https://www.kongsolana.xyz/",
    thumbnail: "/assets/works/kongsolana.jpg",
  },
  {
    title: "Portfolio Website",
    link: "https://ukino.vercel.app/",
    thumbnail: "/assets/works/portfolio.jpg",
  },
  {
    title: "Lunatic",
    link: "#",
    thumbnail: "/assets/works/lunatic-2.png",
  },
];
export default function WorksSection() {
  return (
    <div
      id="projects"
      className="flex justify-center bg-white min-h-screen snap-start"
    >
      <div className="w-[90%]">
        <HeroParallax products={works} />
      </div>
    </div>
  );
}
