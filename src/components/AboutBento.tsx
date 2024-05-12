"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function AboutBento() {
  return (
    <div className="h-screen w-full max-w-none">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl font-anderson text-secondary">
        Innovative Fearlessness
      </p>
      <p className="font-normal text-base my-4 max-w-lg font-anderson text-secondary">
        Our agency, fearlessly embraces innovation, breaking away from
        conventional approaches to deliver truly groundbreaking campaigns.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl font-anderson text-secondary">
        Youthful Creativity
      </p>
      <p className="font-normal text-base my-4 max-w-lg font-anderson text-secondary">
        Youthful spirit infuses our agency with energy and dynamism, setting us
        apart from traditional approaches.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl font-anderson text-secondary">
        Data-Driven Excellence
      </p>
      <p className="font-normal text-base my-4 max-w-lg font-anderson text-secondary">
        Analytical mindset ensures that our strategies are not only visionary
        but also backed by data-driven insights, guaranteeing
        measurable success.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl font-anderson text-secondary">
        Sustainable Practices
      </p>
      <p className="font-normal text-base my-4 max-w-lg font-anderson text-secondary">
        {
          "Eco-conscious mindset shapes our agency's commitment to sustainable marketing, attracting clients who value responsible and ethical practices."
        }
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/assets/services/innovative-fearlessness.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/assets/services/youthful.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/assets/services/data-driven.gif",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/assets/services/sustainable.png",
  },
];
