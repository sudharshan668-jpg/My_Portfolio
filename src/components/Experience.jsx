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
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {jobs.map((job, idx) => (
        <div key={idx} className="mb-10">
          <h3 className="text-xl font-bold">{job.role}</h3>
          <p className="text-gray-500 dark:text-gray-400">{job.company}</p>
          <p className="text-sm mb-3">{job.period}</p>
          <ul className="list-disc ml-6 space-y-1">
            {job.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
