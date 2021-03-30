
import emailjs from "emailjs-com";

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
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input id="info" type="text" name="name" />
      <label>Email</label>
      <input id="info" type="email" name="email" />
      <label>Subject</label>
      <input id="info" type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input id="Button" type="submit" value="Send" />
    </form>
  );
}
