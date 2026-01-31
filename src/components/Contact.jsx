import React from "react";
import { constants } from "./Constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const telephoneLink = "tel:" + constants.phone;

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold mb-8">{constants.contactTitle}</h2>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{constants.reachOut}</p>
      <div className="space-y-4">
        <p className="text-base md:text-lg flex items-center gap-2">
          <span>📧</span>
          <a
            href={`mailto:${constants.emailId}`}
            className="hover:underline text-gray-700 dark:text-gray-300"
          >
            {constants.emailId}
          </a>
        </p>
        <p className="text-base md:text-lg flex items-center gap-2">
          <span>📞</span>
          <a
            className="phone-redirect hover:underline text-gray-700 dark:text-gray-300"
            href={telephoneLink}
          >
            {constants.phone}
          </a>
        </p>
        <p className="text-base md:text-lg">
          <a
            className="cursor-pointer hover:underline underline text-black dark:text-white inline-flex items-center gap-1 transition-colors"
            href={constants.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to my LinkedIn
            <ArrowUpRightIcon
              className="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
            />
          </a>
        </p>
      </div>
    </section>
  );
}
