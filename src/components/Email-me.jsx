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
        className="flex flex-col space-y-5 bg-white dark:bg-black p-8 rounded-lg shadow-lg border-black dark:border-white border-[2px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="p-3 rounded border border-black border-[2px] dark:border-white bg-gray-50 dark:bg-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="p-3 rounded border border-black border-[2px] dark:border-white bg-gray-50 dark:bg-white"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded border border-black border-[2px] dark:border-white bg-gray-50 dark:bg-white"
        ></textarea>

        <button
          type="submit"
          className="bg-black font-bold hover:bg-black dark:hover:bg-gray-00 text-white font-semibold py-3 rounded-lg dark:bg-black dark:text-white dark:border-white dark:border-white border-[2px]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center mt-2 text-green-400">{status}</p>}
      </form>
    </section>
  );
}
