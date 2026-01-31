import React from "react";

export default function Experience() {
  const jobs = [
    {
      role: "Senior Engineer",
      company: "Ashley Furniture India Pvt Ltd",
      period: "May 2025 — Present",
      points: [
        "Leading migration to Headless cart & checkout",
        "Overseeing release management",
        "Managing dev & QA teams",
        "Handling incident management",
      ],
    },
    {
      role: "Engineer",
      company: "Ashley Furniture India Pvt Ltd",
      period: "Jun 2024 — May 2025",
      points: [
        "Implemented multi-tender payments",
        "Version upgrade 19.10 → 22.7",
        "Enhanced checkout & fulfillment",
        "Ensured PCI DSS compliance",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{job.period}</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
