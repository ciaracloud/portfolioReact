import "./Contact.css";

import React from "react";
import Socials from "../Socials/Socials";

export default function Contact() {
  return (
    <div className="contact">
      <h1 id="contact">Contact</h1>
      <div className="contactContent">
        <div className="nameAndEmail">
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Email address*" />
        </div>
        <input type="text" placeholder="Subject*" />
        <input className="messageInput" type="text" placeholder="Message*" />
        <button>Send message</button>
        <Socials />
      </div>
    </div>
  );
}
