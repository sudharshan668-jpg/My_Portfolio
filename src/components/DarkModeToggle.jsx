import React from "react";
import useDarkMode from "../useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
  const [theme, setTheme] = useDarkMode();

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Update logo image
    const logoImg = document.querySelector("header img[alt='Brand Logo']");
    if (logoImg) {
      const isDev = window.location.origin.includes("localhost");
      const basePath = isDev ? "./../../dist/assets" : "./assets";
      logoImg.src = `${basePath}/Brand_Logo_${newTheme === "dark" ? "Dark" : "Light"}_new.png`;
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed right-5 IphoneSE:top-[35rem] top-[52rem] p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-700 z-100 transition-all hover:scale-110"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
