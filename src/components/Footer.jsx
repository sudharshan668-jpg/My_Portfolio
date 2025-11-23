import React from "react";
import { FaCoffee } from "react-icons/fa";
import { constants } from "./Constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

function Footer() {
  const NAME = "Sudharshan Thirunarayanan";
  const gitHubProfiles = constants.gitHubProfiles;

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white dark:bg-black py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="dark:text-white text-black text-base !text-14px IphoneSE:!text-10px">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 xl:ml-[35rem] flex space-x-6">
          <a
            href="#about"
            className="text-black transition dark:text-white text-14px IphoneSE:text-10px"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-black transition dark:text-white text-14px IphoneSE:text-10px"
          >
            Contact
          </a>
          <a
            href={constants.homePageURL}
            rel="noopener noreferrer"
            className="text-black transition dark:text-white inline-flex items-center gap-1 text-14px IphoneSE:text-10px"
          >
            Built by Sudharshan with React, Tailwind and
            <FaCoffee
              className="color-brown dark:color-white"
              size={20}
              color="brown"
            />
          </a>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a
            href={gitHubProfiles.gitHubOne.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition dark:text-white inline-flex items-center gap-1 text-14px IphoneSE:text-10px"
            title="My Github Profile"
          >
            {gitHubProfiles.gitHubOne.title}
            <ArrowUpRightIcon
              className="w-4 h-16 text-black dark:text-white"
              textAnchor="end"
            />
          </a>
          <a
            href={gitHubProfiles.gitHubTwo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition dark:text-white inline-flex items-center gap-1 text-14px IphoneSE:text-10px"
            title="My Github Profile"
          >
            {gitHubProfiles.gitHubTwo.title}
            <ArrowUpRightIcon
              className="w-4 h-16 text-black dark:text-white"
              textAnchor="end"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
