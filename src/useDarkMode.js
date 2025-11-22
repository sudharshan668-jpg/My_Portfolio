import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  return [theme, setTheme];
}
