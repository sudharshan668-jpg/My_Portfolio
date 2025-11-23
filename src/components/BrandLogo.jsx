import { useEffect, useState } from "react";

export default function ThemeLogo() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const imageURL = () => {
    if (localStorage.getItem("image")) {
      return localStorage.getItem("image");
    } else {
      if (document.documentElement.classList.contains("dark")) {
        return "./assets/Brand_Logo_Dark_new.png";
      } else {
        return "./assets/Brand_Logo_Light_new.png";
      }
    }
  };

  return (
    <img
      src={imageURL()}
      className="bg-white dark:bg-black Desktop:w-[10rem] Desktop:h-[6rem] IphoneSE:w-[9rem] IphoneSE:m-h-[7rem]"
      alt="Brand Logo"
    />
  );
}
