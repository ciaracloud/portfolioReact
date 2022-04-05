import "./Contact.css";

import React from "react";
import Socials from "../Socials/Socials";

export default function Contact() {
  return (
    <div className="contact">
      <h1 id="contact">Let's work together!</h1>
      <div className="contactAndSkillsContainer">
        <div className="contactContent">
          <input className="inputField" type="text" placeholder="Name*" />
          <input
            className="inputField"
            type="text"
            placeholder="Email address*"
          />
          <input className="inputField" type="text" placeholder="Subject*" />
          <input
            className="messageInput inputField"
            type="text"
            placeholder="Message*"
          />
          <button className="messageButton">Send message</button>
        </div>
        <Socials />
      </div>
    </div>
  );
}
