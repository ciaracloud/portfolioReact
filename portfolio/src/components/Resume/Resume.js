import "./Resume.css";

import React from "react";
import resumePNG from "../../images/resume.png";
import resume from "../../images/CiaraCloudResume2022.pdf";

export default function Resume() {
  return (
    <div className="resumeContainer">
      <h1 className="contactHeader">Contact</h1>
      <div className="resumeContent">
        <img className="resumeImg" src={resumePNG} />
        <a
          className="resumeButton"
          href={resume}
          download="CiaraCloudResume2022.pdf"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
