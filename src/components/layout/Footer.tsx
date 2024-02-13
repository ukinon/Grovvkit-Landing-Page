"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const sectionY = useTransform(scrollYProgress, [1, 0], ["0%", "-70%"]);

  return (
    <footer
      ref={ref}
      id="contact"
      className="min-h-screen flex items-start justify-center bg-transparent w-full snap-center"
    >
      <video
        className="object-cover h-full w-full fixed -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/background/hero/background.mp4" />
      </video>
      <motion.div
        style={{ y: sectionY }}
        className=" h-full flex flex-row justify-between w-[95%] -z-10"
      >
        <div className="flex h-screen items-center w-2/3">
          <h1 className="flex flex-col gap-5 text-6xl md:text-8xl text-secondary font-neueMedium">
            INI FOOTER NANTI ISI CONTANCT DLL
          </h1>
        </div>
      </motion.div>
    </footer>
  );
}
