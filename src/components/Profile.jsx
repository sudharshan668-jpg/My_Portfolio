// BlackWhitePortfolio.jsx
// Single-file React component for a minimal, eye-catching black & white portfolio.
// Requirements: TailwindCSS configured in your project, framer-motion, lucide-react
// Install: npm install framer-motion lucide-react

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

// ---- Replace these with your real content ----
const NAME = "Sudharshan T.";
const ROLE = "Salesforce Commerce Cloud Developer & Release Manager";
const SUMMARY = `Passionate developer in retail technology — building resilient e‑commerce systems, payments integrations, and scalable features.`;
const PROJECTS = [
  {
    title: "Headless PWA Proof-of-Concept",
    desc: "React PWA Kit implementation for a retail storefront",
    link: "#",
  },
  {
    title: "Multi‑tender Payments",
    desc: "Enterprise payment orchestration and PCI‑compliant flows",
    link: "#",
  },
  {
    title: "Release Automation",
    desc: "CI/CD and on‑demand sandboxes for safer releases",
    link: "#",
  },
];
const SKILLS = [
  "SFCC (SiteGenesis & SFRA)",
  "JavaScript / TypeScript",
  "ISML",
  "Azure DevOps",
  "CI/CD",
  "React / PWA",
];

export default function BlackWhitePortfolio() {
  return (
    <div className="min-h-screen bg-white text-black antialiased" id="profile">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-lg font-semibold">
              ST
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{NAME}</h1>
              <p className="text-sm opacity-80">{ROLE}</p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a
              href="#projects"
              className="text-sm font-medium uppercase tracking-wider"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium uppercase tracking-wider"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium uppercase tracking-wider"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              {NAME}
              <span className="block mt-2 text-lg font-medium opacity-80">
                {SUMMARY}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#projects"
                className="inline-block border-2 border-black px-4 py-2 font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block px-4 py-2 font-medium underline underline-offset-4"
              >
                Get in touch
              </a>
            </motion.div>

            <div className="mt-8 text-sm opacity-80">
              <strong>Location:</strong> Chennai, India ·{" "}
              <strong>Available for:</strong> Remote & Onsite roles
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                aria-label="GitHub"
                href="#"
                className="flex items-center gap-2 text-sm"
              >
                <Github size={18} /> <span className="sr-only">GitHub</span>
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="flex items-center gap-2 text-sm"
              >
                <Linkedin size={18} /> <span className="sr-only">LinkedIn</span>
              </a>
              <a
                aria-label="Email"
                href="mailto:you@example.com"
                className="flex items-center gap-2 text-sm"
              >
                <Mail size={18} /> <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Right column: stylized stats / card */}
          <aside className="order-first lg:order-last">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="border-2 border-black p-6 rounded-2xl"
            >
              <div className="text-sm uppercase tracking-wider font-medium">
                Quick facts
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs opacity-80">Years in SFCC</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">8m+</div>
                  <div className="text-xs opacity-80">Release mgmt hrs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs opacity-80">Projects shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-xs opacity-80">POC: React PWA Kit</div>
                </div>
              </div>
            </motion.div>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border-t-2 border-black pt-4"
              >
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm opacity-80">{p.desc}</p>
                <a
                  href={p.link}
                  className="mt-3 inline-block text-sm underline"
                >
                  Case study →
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="px-3 py-1 border border-black text-sm rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 pb-16">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <form className="border-2 border-black p-6 rounded-lg">
              <label className="block text-sm font-medium">Name</label>
              <input className="mt-2 w-full border-b border-black bg-transparent py-2 outline-none" />

              <label className="block text-sm font-medium mt-4">Email</label>
              <input className="mt-2 w-full border-b border-black bg-transparent py-2 outline-none" />

              <label className="block text-sm font-medium mt-4">Message</label>
              <textarea
                className="mt-2 w-full border-b border-black bg-transparent py-2 outline-none"
                rows={4}
              />

              <button
                type="submit"
                className="mt-6 inline-block border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all"
              >
                Send
              </button>
            </form>

            <div>
              <div className="text-sm opacity-80">
                Prefer email?{" "}
                <a href="mailto:you@example.com" className="underline">
                  you@example.com
                </a>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">Resume</h4>
                <p className="text-sm opacity-80 mt-2">
                  PDF available on request. Replace link below with your resume
                  file.
                </p>
                <a href="#" className="inline-block mt-3 underline">
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-black pt-6 text-sm flex items-center justify-between">
          <div>
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </div>
          <div className="opacity-80">Designed in Black & White</div>
        </footer>
      </div>
    </div>
  );
}
