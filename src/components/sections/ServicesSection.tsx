import React, { useRef } from "react";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];
export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section
      id="services"
      className="min-h-screen flex justify-center items-center bg-white"
    >
      <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-0 justify-between w-[90%] pb-24">
        <div className="flex w-full md:w-1/2 flex-col gap-12">
          {content.map((item, index) => (
            <div key={item.title + index} className="flex flex-col">
              <motion.h2 className="text-xl md:text-2xl font-bold text-black">
                {item.title}
              </motion.h2>
              <motion.p className="text-base md:text-lg text-black max-w-sm mt-10">
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="w-full md:w-1/2 rounded-none bg-white sticky top-12 md:top-16  p-3 h-fit"
        >
          <div className="flex flex-col  gap-5">
            <div className="flex flex-col items-center md:items-end gap-2">
              <h3 className="text-accent font-moche text-2xl md:text-3xl font-light">
                Services
              </h3>
              <h1 className="text-primary font-neueMedium text-end font-bold text-4xl md:text-6xl">
                Our Services
              </h1>
              <Button className="w-1/3 rounded-full text-white font-anderson">
                Start a project{" "}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
