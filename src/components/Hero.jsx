import React from "react";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center px-6 GooglePx:pt-[12rem] GooglePx:mb-[10rem] IphoneSE:pt-[14rem] IphoneSE:mb-[10rem] Iphone12:pt-[5rem] Iphone12:mb-[5rem]"
      id="hero"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Sudharshan Thirunarayanan
      </h1>
      <p className="text-xl md:text-2xl max-w-xl text-gray-600 dark:text-gray-300">
        Senior Salesforce Commerce Cloud Developer / Release Manager
      </p>
      <span className="text-m text-black dark:text-gray-300 mt-[34px] max-w-[51rem] text-center text-[18px]">
        A passionate developer in Retail Technology, specializing in Salesforce
        Commerce Cloud and modern e-commerce solutions. I thrive on turning
        complex challenges like payment integrations, headless architectures,
        and release management into seamless, scalable, and delightful shopping
        experiences. With a focus on innovation and efficiency, I build digital
        platforms that empower businesses and enhance user experiences.
      </span>
      <Button />
    </section>
  );
}
