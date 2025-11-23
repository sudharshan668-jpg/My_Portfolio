import React from "react";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Project";
import Email from "./components/Email-me";
import Footer from "./components/Footer";
import Swiper from "./components/Swiper";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Swiper />
      <Experience />
      <Contact />
      <Projects />
      <Email />
      <Footer />
    </div>
  );
}
