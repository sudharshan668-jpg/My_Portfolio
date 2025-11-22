import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center px-6"
      id="hero"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Sudharshan Thirunarayanan
      </h1>
      <p className="text-xl md:text-2xl max-w-xl text-gray-600 dark:text-gray-300">
        Senior Salesforce Commerce Cloud Developer / Release Manager
      </p>
      <div className="mt-8 px-6 py-3 button-wrapper flex gap-8 ml-12 w-[25rem]">
        <a
          href="#contact"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Contact Me
        </a>
        <a
          href="#email-me"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
