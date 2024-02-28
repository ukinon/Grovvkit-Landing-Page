"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BackgroundGradientAnimation } from "../ui/bg-gradient";
import { Button } from "../ui/button";
import InputText from "../ui/input";

export default function Footer() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const sectionY = useTransform(scrollYProgress, [1, 0], [0, -400]);

  return (
    <footer
      ref={ref}
      id="contact"
      className="min-h-screen flex items-start justify-center bg-transparent w-full snap-center"
    >
      <motion.div
        style={{ y: sectionY }}
        className=" h-full w-full flex justify-center"
      >
        <BackgroundGradientAnimation
          className="flex justify-center w-full -z-50"
          gradientBackgroundStart="#00072d"
          gradientBackgroundEnd="#1926FF"
          secondColor="#FF0074"
          thirdColor="#F9F7BB"
          fifthColor="#F9F871"
        >
          <div className="flex justify-between h-screen items-center w-[85%]">
            <div className="flex flex-col gap-5">
              <h1 className="flex flex-col w-full gap-5 text-5xl md:text-7xl text-secondary font-neueMedium">
                CONTACT
              </h1>
              <h2 className="flex flex-col w-full gap-5 text-5xl md:text-7xl text-secondary font-neueLight">
                Pak Handoko
              </h2>
            </div>

            <div className="flex flex-col w-2/5 gap-12">
              <InputText name="name" placeholder="Bapaknya Handoko" />
              <InputText name="name" placeholder="Anaknya Handoko" />
              <InputText name="name" placeholder="Ibunya Handoko" />
              <Button
                type="submit"
                className="w-full bg-secondary rounded-full p-5 text-lg text-primary font-mocheBold"
              >
                {" "}
                Submit{" "}
              </Button>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </motion.div>
    </footer>
  );
}
