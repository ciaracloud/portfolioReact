import "./About.css";

import React from "react";
import headshot from "../../images/headshot2.JPG";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <div className="aboutMeContainer">
      <h1 id="about">About</h1>
      <div className="aboutMe">
        <img className="headshot" src={headshot} />
        <p>This is some text about me! I love web development!!</p>
      </div>
      <Skills />
    </div>
  );
}
