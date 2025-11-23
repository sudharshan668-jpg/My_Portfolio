import { useEffect, useState } from "react";

export default function ThemeLogo() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <img
      src={localStorage.getItem("image")}
      className="bg-white dark:bg-black Desktop:w-[10rem] Desktop:h-[6rem] IphoneSE:w-[9rem] IphoneSE:m-h-[7rem]"
      alt="Brand Logo"
    />
  );
}
