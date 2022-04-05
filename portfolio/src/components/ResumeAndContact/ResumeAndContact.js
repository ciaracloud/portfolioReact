import "./ResumeAndContact.css";

import React from "react";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

export default function ResumeAndContact() {
  return (
    <div className="rAndC">
      <Resume />
      <Contact />
    </div>
  );
}
