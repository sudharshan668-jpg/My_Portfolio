import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  let themeSrc = "./assets/Brand_Logo_Dark_new.png";
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      if (window.location.origin === '"https://driverinterface.dev"') {
        themeSrc = "./assets/Brand_Logo_Dark_new.png";
      } else if (window.location.origin === "http://localhost:5173/") {
        themeSrc = "./../../dist/assets/Brand_Logo_Dark_new.png";
      } else {
        themeSrc = "./assets/Brand_Logo_Dark_new.png";
      }
    } else {
      document.documentElement.classList.remove("dark");
      if (window.location.origin === '"https://driverinterface.dev"') {
        themeSrc = "./assets/Brand_Logo_Light_new.png";
      } else if (window.location.origin === "http://localhost:5173/") {
        themeSrc = "./../../dist/assets/Brand_Logo_Light_new.png";
      } else {
        themeSrc = "./assets/Brand_Logo_Light_new.png";
      }
    }
    localStorage.theme = theme;
    localStorage.image = themeSrc;
  }, [theme, themeSrc]);

  return [theme, setTheme, themeSrc];
}
