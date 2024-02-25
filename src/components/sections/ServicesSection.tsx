import React from "react";
import ServicesBento from "../ServicesBento";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Button } from "../ui/button";

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
  return (
    <section
      id="services"
      className="min-h-screen flex justify-center items-center bg-white snap-start scroll-m-24"
    >
      <div className="w-full mb-24 no-scrollbar flex flex-col gap-12">
        <div className="flex flex-col gap-5 md:hidden">
          <div className="flex flex-col items-center gap-2">
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
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
