import React from "react";
import "./Contact.css";
import contact_left from "../../assets/contact-left.png";
import send from "../../assets/send.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <img src={contact_left} alt="contact man" />
      </div>
      <div className="contact-right">
        <h3>Have Questions?</h3>
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="tel"
            name="phone-number"
            placeholder="Phone number"
            required
          />
          <textarea
            name="message"
            placeholder="Enter message"
            rows={10}
            required
          />
        </form>
        <button className="btn">
          Send Message <img src={send} alt="send icon" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
