import { useEffect, useState } from "react";

export default function ThemeLogo() {
  const [logoSrc, setLogoSrc] = useState(() => {
    const isDark = document.documentElement.classList.contains("dark");
    return `/assets/Brand_Logo_${isDark ? "Dark" : "Light"}_new.png`;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setLogoSrc(`/assets/Brand_Logo_${isDark ? "Dark" : "Light"}_new.png`);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={logoSrc}
      className="bg-white dark:bg-black Desktop:w-[10rem] Desktop:h-[6rem] IphoneSE:w-[9rem] IphoneSE:max-h-[7rem] object-contain"
      alt="Brand Logo"
    />
  );
}
