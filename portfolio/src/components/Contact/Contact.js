import "./Contact.css";

import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 id="contact">Contact</h1>
      <input type="text" placeholder="Name*" />
      <input type="text" placeholder="Email address*" />
      <input type="text" placeholder="Subject*" />
      <input type="text" placeholder="Message*" />
      <button>Send message</button>
    </div>
  );
}
