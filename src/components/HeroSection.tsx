"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const texts = ["POTENTIAL", "TITIT", "MAMAK"];

export default function HeroSection() {
  const [text, setText] = useState("POTENTIAL");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * texts.length);
    setText(texts[index]);
  }, []); // Include dependency on array length

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000); // Adjust interval as needed
    return () => clearInterval(intervalID);
  }, [shuffle]); // Include dependency on shuffle function

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-transparent w-full"
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
        <div className="w-2/3">
          <h1 className="flex flex-col gap-5 text-6xl md:text-8xl text-secondary font-neueMedium">
            we help brand grow to its fullest{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={Math.random()}
              transition={{ duration: 1 }}
              className="font-neueLight italic"
              style={{ fontWeight: 1 }}
            >
              {text}
            </motion.span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
