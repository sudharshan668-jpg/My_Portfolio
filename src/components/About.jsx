import { constants } from "./Constants";

export default function About() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="about">
      <h2 className="text-3xl font-bold mb-8">{constants.aboutMe.title}</h2>
      <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {constants.aboutMe.context}
      </p>
    </section>
  );
}
