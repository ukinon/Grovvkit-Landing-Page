import React, { useRef } from "react";
import { Button } from "../ui/button";
import { motion, useScroll } from "framer-motion";

const content = [
  {
    title: "Website Development:",
    description:
      "Dive into a website that does more than just function, it captivates. With responsive designs and cutting-edge features, we create spaces where your audience loves to linger.",
  },
  {
    title: "Brand Identity:",
    description:
      "From logos that pop to color schemes that speak volumes, we tailor every element to echo your unique vibe. Let's make your brand not only seen but felt.",
  },
  {
    title: "Data-Driven Brand Strategies:",
    description:
      "Steer your brand with precision. Our analytics dig deep into market trends and consumer behavior to tailor brand strategies that not only meet the market but lead it.",
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
            <div
              key={item.title + index}
              className="flex flex-col w-full p-5 rounded-xl"
            >
              <motion.h2 className="text-2xl md:text-3xl font-bold text-primary font-anderson ">
                {item.title}
              </motion.h2>
              <motion.p className="text-base md:text-lg text-primary  mt-5 font-anderson">
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="w-full md:w-2/5 rounded-none bg-white sticky top-12 md:top-24 2xl:top-20  p-3 h-fit"
        >
          <div className="flex flex-col  gap-5">
            <div className="flex flex-col items-center md:items-end gap-5">
              <h3 className="text-accent font-moche text-2xl md:text-3xl font-light">
                {"What's Your Next "}
              </h3>
              <h1 className="text-primary font-neueMedium text-end text-4xl md:text-6xl">
                Big Idea?
              </h1>
              <p className="text-center md:text-end text-primary font-anderson">
                {
                  "Our top-notch team pairs with fresh, robust methods to help you to grovv brands that people adore. Expect creations that not only attract but also delight your audience, blending advanced technology with user-centric design for unforgettable digital experiences."
                }
              </p>
              <Button className="w-1/3 rounded-full text-white font-anderson p-5  ">
                Grovv With Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
