import Image from "next/image";
import { Button } from "../ui/button";
import { ServicesBento } from "../ServicesBento";

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
              About
            </h3>
            <h1 className="text-primary font-neueMedium font-bold text-4xl md:text-6xl">
              About Handoko
            </h1>
          </div>

          <p className="text-primary font-anderson text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis
          </p>
          <p className="text-primary font-anderson font-bold text-sm md:text-base">
            Ngelas ngelus handoko jiajijaijaiaj
          </p>
          <ServicesBento />
        </div>
      </div>
    </section>
  );
}
