"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Video from "../ui/video";
import { register } from "swiper/element/bundle";

const texts = ["POTENTIAL", "HANDOKO", "NGELAS", "HAYOOO"];

export default function HeroSection() {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      speed: 500,
    };

    Object.assign(swiperRef.current, params); // Assign it to swiper element

    // initialize swiper
    swiperRef.current?.initialize();
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-start justify-center bg-transparent w-full snap-center"
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-screen h-screen bg-gradient-to-tr from-primary to-secondary transition-all ease-in-out z-50"
          >
            <div className="w-full h-full flex justify-center items-center font-moche text-secondary text-3xl md:text-5xl">
              Welcome To Grovvkit.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Video />
      <motion.div
        style={{ y: sectionY }}
        className=" h-full flex flex-row justify-between w-[95%] -z-10"
      >
        <div className="flex h-screen items-center w-2/3">
          <div className="flex flex-col gap-7 text-6xl md:text-8xl text-secondary font-neueMedium w-full md:w-11/12">
            <h1>we help brand grow to its fullest </h1>
            <div className="w-screen md:w-full font-neueLight italic overflow-hidden">
              <swiper-container
                init="false"
                autoPlay
                loop
                ref={swiperRef}
                space-between={50}
              >
                {texts.map((text, index) => (
                  <swiper-slide key={index}>
                    <p className="">{text}</p>
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
