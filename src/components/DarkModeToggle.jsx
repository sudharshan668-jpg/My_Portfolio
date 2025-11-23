import React from "react";
import useDarkMode from "../useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
  const [theme, setTheme] = useDarkMode();
  const setImageSrc = (theme) => {
    const /** @type {HTMLImageElement} */ imageSrc = document.querySelector(
        "#root > div > header > nav > p > a > img",
      );
    if (imageSrc) {
      if (theme === "light") {
        imageSrc.removeAttribute("src");
        imageSrc.src =
          window.location.origin === "https://driverinterface.dev"
            ? "./assets/Brand_Logo_Dark_new.png"
            : "./../../dist/assets/Brand_Logo_Dark_new.png";
      } else {
        imageSrc.removeAttribute("src");
        imageSrc.src =
          window.location.origin === "https://driverinterface.dev"
            ? "./assets/Brand_Logo_Light_new.png"
            : "./../../dist/assets/Brand_Logo_Light_new.png";
      }
    }
  };

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        setImageSrc(theme);
      }}
      className="fixed right-5 IphoneSE:top-[35rem] top-[52rem] p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-700 z-100"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
