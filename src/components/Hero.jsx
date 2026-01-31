import React from "react";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section
      className="dark:bg-[#050505] flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 pt-32"
      id="hero"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
        Sudharshan Thirunarayanan
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-600 dark:text-gray-300 mb-6">
        Senior Salesforce Commerce Cloud Developer / Release Manager
      </p>
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl leading-relaxed">
        A passionate developer in Retail Technology, specializing in Salesforce
        Commerce Cloud and modern e-commerce solutions. I thrive on turning
        complex challenges like payment integrations, headless architectures,
        and release management into seamless, scalable, and delightful shopping
        experiences. With a focus on innovation and efficiency, I build digital
        platforms that empower businesses and enhance user experiences.
      </p>
      <Button />
    </section>
  );
}
