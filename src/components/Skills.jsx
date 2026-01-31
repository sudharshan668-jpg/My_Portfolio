import React from "react";

export default function Skills() {
  const skills = [
    "ISML",
    "Svelte",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "CSS",
    "Headless",
    "Shopify",
    "Release Management",
    "React",
    "SvelteKit",
    "On-Demand Sandbox setup from scratch",
    "Omnichannel Retail",
    "Tailwind CSS",
    "Vercel",
    "Github",
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm md:text-base font-medium hover:scale-105 transition-transform duration-200 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
