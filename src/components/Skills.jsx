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
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
