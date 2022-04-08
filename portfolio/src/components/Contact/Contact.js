import "./Contact.css";

import React from "react";
import Socials from "../Socials/Socials";

export default function Contact() {
  return (
    <div className="contact">
      <h1 id="contact">Let's work together!</h1>
      <form
        className="form"
        action="https://formsubmit.co/ciarafcloud@gmail.com"
        method="POST"
      >
        <input
          className="inputField"
          type="text"
          placeholder="Name*"
          required
        />
        <input
          className="inputField"
          type="email"
          placeholder="Email address*"
          name="email"
          required
        />
        <input
          className="inputField"
          name="_subject"
          type="hidden"
          value="New message from portfolio!"
        />
        <textarea
          className="messageInput inputField"
          type="text"
          placeholder="Message*"
          name="message"
          rows="7"
          required
        />
        <button type="submit" className="messageButton">
          Send message
        </button>
      </form>
      <Socials />
    </div>
  );
}
