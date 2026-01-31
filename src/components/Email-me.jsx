import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Email() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4a76adr",
        "template_yz0rs5s",
        e.target,
        "R2omOFUv1UWJ34xo5",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message.");
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="email-me"
      className="py-20 px-6 max-w-3xl mx-auto text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-6 text-left">Contact Me</h2>

      <form
        onSubmit={sendEmail}
        className="flex flex-col space-y-5 bg-white dark:bg-black p-6 md:p-8 rounded-lg shadow-lg border-2 border-black dark:border-white"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          disabled={loading}
          className="p-3 rounded border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all disabled:opacity-50"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          disabled={loading}
          className="p-3 rounded border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all disabled:opacity-50"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          disabled={loading}
          className="p-3 rounded border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none disabled:opacity-50"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white font-bold py-3 rounded-lg dark:bg-white dark:text-black border-2 border-black dark:border-white hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`text-center mt-2 font-medium ${status.includes("success") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
