import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const linkClass = (component) => {
    return `cursor-pointer hover:text-blue-600 ${active === component ? "underline underline-offset-4 text-blue-600" : ""}`;
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <p className="text-xl font-bold">
          <a
            href="#hero"
            className={linkClass("hero")}
            onClick={() => setActive("hero")}
          >
            Sudharshan
          </a>
        </p>

        <ul className="flex space-x-6 font-medium">
          <li>
            <a
              href="#about"
              className={linkClass("about")}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={linkClass("skills")}
              onClick={() => setActive("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={linkClass("experience")}
              onClick={() => setActive("experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={linkClass("contact")}
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={linkClass("projects")}
              onClick={() => setActive("project")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#email-me"
              className={linkClass("email-me")}
              onClick={() => setActive("email-me")}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
