import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4zlh6v4",
      "template_fy7ij6j",
      form.current,
      "user_yESYTXvq2eaUzMYTx9oxz"
    );
    e.target.reset();
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <section id="kontakt">
      <h5>Skontaktuj się</h5>
      <h2>Kontakt</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>puaro@vp.pl</h5>
            <a href="mailto:puaro@vp.pl">Wyślij</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>ag</h5>
            <a href="https://m.me/adam.gierczak.334">Wyślij</a>
          </article>
          {/* <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="">Wyślij</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Imię" required />
          <input type="email" name="email" placeholder="Mail" required />
          <textarea name="message" rows="7" placeholder="Wiadomość"></textarea>
          <button type="submit" className="btn btn-primary">
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
