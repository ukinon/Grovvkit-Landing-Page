export default function Footer() {
  return (
    <div className="bottom-0 w-full">
      <footer className="bg-primary text-secondary rounded-none">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
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
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-secondary sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-secondary-foreground sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Grovvkit
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
