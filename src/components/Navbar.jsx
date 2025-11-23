import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeLogo from "./BrandLogo";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  const linkClass = (component) =>
    `cursor-pointer hover:underline ${active === component ? "underline underline-offset-4" : ""
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-lg shadow z-50 dark:border-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 dark:bg-[#0A0A0A]">
        {/* Logo */}
        <p className="text-xl font-bold">
          <a
            href="#hero"
            className={linkClass("hero")}
            onClick={() => {
              setActive("hero");
              setOpen(false);
            }}
          >
            <ThemeLogo />
          </a>
        </p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {[
            "about",
            "skills",
            "experience",
            "contact",
            "projects",
            "email-me",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={linkClass(item)}
                onClick={() => setActive(item)}
              >
                {item === "email-me"
                  ? "Get in touch"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Height Animation */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-96" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 py-6 bg-white/90 dark:bg-black w-full text-lg">
          {[
            "about",
            "skills",
            "experience",
            "contact",
            "projects",
            "email-me",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={linkClass(item)}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
              >
                {item === "email-me"
                  ? "Get in touch"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
