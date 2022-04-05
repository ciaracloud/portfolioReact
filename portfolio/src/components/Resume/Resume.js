import "./Resume.css";

import React from "react";
import resumePNG from "../../images/resume.png";

export default function Resume() {
  return (
    <div className="resumeContainer">
      <h1>Contact</h1>
      <div className="resumeContent">
        <img className="resumeImg" src={resumePNG} />
        <a className="resumeButton" href="">
          Download Resume
        </a>
      </div>
    </div>
  );
}
