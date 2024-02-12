"use client";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { motion, AnimatePresence, Variant } from "framer-motion";

interface Items {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<Items> = [
  {
    label: "About",
    page: "#about",
  },
  {
    label: "Services",
    page: "#services",
  },
  {
    label: "Works",
    page: "#projects",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  const menuVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <header
      className={`${
        isScrolled ? "bg-primary" : "bg-transparent"
      } transition-all ease-linear text-white w-full md:flex justify-between items-center fixed top-0 z-50  p-5  md:px-12 font-moche`}
    >
      <div className="flex flex-row justify-between md:items-center">
        <svg
          width=""
          height=""
          className="w-[20vw] md:w-[8dvw]"
          viewBox="0 0 304 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.5 27.82C50.11 16.44 45.99 6.74 35.94 6.74C24.48 6.74 16.75 19.49 16.75 39.52C16.75 60.49 25.25 74.4 38.78 74.4C42.13 74.4 45.35 72.93 47.8 70.4V57.23C47.8 53.12 45.35 50.91 38.4 50.91C36.73 50.91 34.66 51.02 32.35 51.33V47.43L70.22 38.89V42.79C66.87 44.05 64.68 47.11 64.68 50.27V63.44C58.63 75.45 45.1 81.15 33.76 81.15C13.4 81.15 0 65.03 0 40.89C0 16.33 13.78 0 35.42 0C54.1 0 64.92 11.91 64.15 26.56L46.5 30.35V27.82Z"
            fill="#F9F871"
          />
          <path
            d="M87.54 24.24H92.56V33.51L92.17 36.88L92.56 37.2C95.78 29.08 101.58 24.24 109.44 24.24C119.74 24.24 125.8 32.46 121.68 46.79L106.09 49.21V46.68C109.18 38.04 107.89 32.24 102.74 32.24C96.56 32.24 92.56 40.57 92.56 53.21V67.12C92.56 70.7 94.36 73.13 97.33 73.13V79.03H72.73V73.13C75.56 73.13 77.5 70.71 77.5 67.12V43C77.5 39.42 75.57 36.99 72.73 36.99V31.09C78.65 31.09 84.58 28.46 87.54 24.24Z"
            fill="#F9F871"
          />
          <path
            d="M152.73 24.24C169.09 24.24 179.91 35.62 179.91 52.7C179.91 69.77 169.09 81.16 152.73 81.16C136.37 81.16 125.42 69.78 125.42 52.7C125.42 35.62 136.37 24.24 152.73 24.24ZM155.05 75.04C162.39 75.04 166.51 66.08 164.71 51.85C163.16 39.2 157.63 30.24 150.28 30.24C143.07 30.24 138.82 39.2 140.75 53.53C142.17 66.08 147.71 75.04 155.05 75.04Z"
            fill="#F9F871"
          />
          <path
            d="M204.97 32.25C201.62 32.25 200.33 34.36 201.62 37.63L212.95 64.19L224.03 37.95C225.58 34.47 224.29 32.26 220.94 32.26V26.36H236.14V32.26C233.95 32.26 231.37 33.84 229.44 37.95L209.35 81.16H206.39L186.3 37.94C184.5 34.46 181.66 32.25 179.47 32.25V26.35H204.97V32.25Z"
            fill="#F9F871"
          />
          <path
            d="M263.23 32.25C259.88 32.25 258.59 34.36 259.88 37.63L271.21 64.19L282.29 37.95C283.84 34.47 282.55 32.26 279.2 32.26V26.36H294.4V32.26C292.21 32.26 289.63 33.84 287.7 37.95L267.61 81.16H264.65L244.56 37.95C242.76 34.47 239.92 32.26 237.73 32.26V26.36H263.23V32.25Z"
            fill="#F9F871"
          />
          <path
            d="M296.05 63.24C300.56 63.24 303.78 66.82 303.78 72.2C303.78 77.58 300.56 81.16 296.05 81.16C291.54 81.16 288.45 77.58 288.45 72.2C288.45 66.82 291.54 63.24 296.05 63.24Z"
            fill="#F9F871"
          />
        </svg>

        <div className="md:hidden flex gap-5 items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-end"
          >
            {isOpen ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}{" "}
          </button>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-end gap-5 w-full">
        <div className="flex justify-center w-full">
          <AnimatePresence>
            <div
              className={`md:flex flex-col md:flex-row justify-end gap-5 text-sm md:text-base items-center w-full ${
                isOpen ? "flex mt-5" : "hidden"
              }`}
            >
              {NAV_ITEMS.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.page}
                    className="cursor-pointer text-secondary-foreground hover:text-secondary font-moche"
                  >
                    {item.label}
                  </Link>
                );
              })}

              <p className=" text-secondary-foreground hover:text-secondary underline font-mocheBold">
                <Link href="#contact">Contact</Link>
              </p>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
