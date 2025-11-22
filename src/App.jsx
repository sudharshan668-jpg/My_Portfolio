import React from "react";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Project";
import Email from './components/Email-me';

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Projects />
      <Email />
    </div>
  );
}
