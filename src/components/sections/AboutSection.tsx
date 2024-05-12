import Image from "next/image";
import { Button } from "../ui/button";
import { AboutBento } from "../AboutBento";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex justify-center bg-white py-20"
    >
      <div className="w-[90%] flex flex-col items-start">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-accent font-moche text-2xl md:text-3xl font-light">
              We are
            </h3>
            <h1 className="text-primary font-neueMedium font-bold text-4xl md:text-6xl">
              Grovvlab
            </h1>
          </div>

          <p className="text-primary font-anderson text-sm md:text-base 2xl:text-lg">
            {
              "We're not just another studio. We're a brand development lab on a mission to unearth the untapped potential within every brand. In a digital world crowded with head-nodding vendors, we stand out as the go-to solution for startup owners and entrepreneurs among the ocean of studios. Just like a growing tree reaching for the sky, we're here to craft the perfect formula to help brands flourish."
            }
          </p>

          <AboutBento />
        </div>
      </div>
    </section>
  );
}
