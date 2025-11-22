import React from "react";

function Footer() {
  const NAME = "Sudharshan Thirunarayanan";
  const homePageURL =
    window.location.origin === "https://driverinterace.dev"
      ? "https://driverinterace.dev"
      : "/hero";

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white dark:bg-black py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="dark:text-white text-black text-base">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#about" className="text-black transition dark:text-white">
            About
          </a>
          <a href="#contact" className="text-black transition dark:text-white">
            Contact
          </a>
          <a
            href={homePageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition dark:text-white"
          >
            Designed by Driver Interface
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
