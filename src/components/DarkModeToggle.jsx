import React from "react";
import useDarkMode from "../useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
  const [theme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-5 top-4 p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-700 z-100"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
