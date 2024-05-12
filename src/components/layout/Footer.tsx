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

  const sectionY = useTransform(scrollYProgress, [1, 0], [0, -450]);

  return (
    <footer
      ref={ref}
      id="contact"
      className="min-h-screen flex items-start justify-center bg-transparent w-full snap-center"
    >
      <div className=" h-full w-full flex justify-center">
        <BackgroundGradientAnimation
          className="flex justify-center w-full -z-50"
          gradientBackgroundStart="#00072d"
          gradientBackgroundEnd="#1926FF"
          secondColor="#FF0074"
          thirdColor="#F9F7BB"
          fifthColor="#F9F871"
        >
          <motion.div
            style={{ y: sectionY }}
            className="flex flex-col justify-center gap-12 pt-12  h-screen items-center w-[85%] md:pt-0 md:flex-row md:gap-0 md:justify-between"
          >
            <div className="flex flex-col gap-5 w-1/2">
              <h1 className="flex flex-col w-full gap-5 text-3xl md:text-5xl text-secondary font-neueMedium">
                Ready to Grovv your brand?
              </h1>
              <h2 className="flex flex-col w-full gap-5 text-3xl md:text-5xl text-secondary font-neueLight">
                Connect with Grovvlab and let your growth journey begin.
              </h2>
            </div>

            <div className="flex flex-col w-full md:w-2/5 gap-12">
              <InputText name="name" placeholder="Name" />
              <InputText name="email" placeholder="Email" />
              <InputText name="business_name" placeholder="Business Name" />
              <InputText name="project_details" placeholder="Project Details" />
              <Button
                type="submit"
                className="w-full bg-secondary rounded-full p-5 text-lg text-primary font-mocheBold hover:opacity-50 cursor-pointer"
              >
                {"I'm ready to Grovv!"}
              </Button>
            </div>
          </motion.div>
        </BackgroundGradientAnimation>
      </div>
    </footer>
  );
}
