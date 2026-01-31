import React from "react";
import { FaCoffee } from "react-icons/fa";
import { constants } from "./Constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

function Footer() {
  const NAME = "Sudharshan Thirunarayanan";
  const gitHubProfiles = constants.gitHubProfiles;

  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-black dark:text-white text-sm md:text-base text-center lg:text-left">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm md:text-base">
          <a
            href="#about"
            className="text-black dark:text-white hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-black dark:text-white hover:underline transition-colors"
          >
            Contact
          </a>
          <a
            href={constants.homePageURL}
            rel="noopener noreferrer"
            className="text-black dark:text-white inline-flex items-center gap-2 hover:underline transition-colors"
          >
            <span className="hidden sm:inline">Built by Sudharshan with React, Tailwind and</span>
            <span className="sm:hidden">Built with ❤️ and</span>
            <FaCoffee
              className="text-brown-600 dark:text-brown-400"
              size={18}
              aria-label="Coffee"
            />
          </a>
        </div>

        <div className="flex gap-6 text-sm md:text-base">
          <a
            href={gitHubProfiles.gitHubOne.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:underline inline-flex items-center gap-1 transition-colors"
            title="My Github Profile"
          >
            {gitHubProfiles.gitHubOne.title}
            <ArrowUpRightIcon
              className="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
            />
          </a>
          <a
            href={gitHubProfiles.gitHubTwo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:underline inline-flex items-center gap-1 transition-colors"
            title="My Github Profile (Old)"
          >
            {gitHubProfiles.gitHubTwo.title}
            <ArrowUpRightIcon
              className="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
