"use client";

import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorksSection from "@/components/sections/WorksSection";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const scrollButtons = document.querySelectorAll("[data-target]");

    // For each element, listen to a "click" event
    scrollButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        // get the DOM element by the ID (data-target value)
        const target = (button as HTMLButtonElement).dataset.target || "";

        const el = document.getElementById(target.replace("#", ""));

        if (!el) return;

        lenis.scrollTo(el, {
          offset: 0,
          immediate: false,
          duration: 1,
          easing: (x) =>
            x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
        });
      });
    });
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
    </>
  );
}
