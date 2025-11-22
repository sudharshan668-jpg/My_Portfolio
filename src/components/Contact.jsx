import React from "react";
import { constants } from './Constants';

export default function Contact() {
  const telephoneLink = "tel:" + constants.phone;
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold mb-6">{constants.contactTitle}</h2>
      <p className="text-lg mb-4">{constants.reachOut}</p>
      <p className="text-lg">📧 {constants.emailId}</p>
      <p className="text-lg"><a className="phone-redirect" href={telephoneLink}>📞 {constants.phone}</a></p>
      <p className="text-lg">
        <a href={constants.linkedinLink}>Go to my Linkedin</a>
      </p>
    </section>
  );
}
