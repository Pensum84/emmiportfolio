import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxdnhma",
        "template_juprg2o",
        e.target,
        "user_92Ixuhpd9Nb0JTk54vpgM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
