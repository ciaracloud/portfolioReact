import "./About.css";

import React from "react";
import Navbar from "../Navbar/Navbar";
import headshot from "../../images/headshot.jpg";

export default function About() {
  return (
    <div>
      <h1 id="about">About</h1>
      <div className="aboutMe">
        <img className="headshot" src={headshot} />
        <p>This is some text about me! I love web development!!</p>
      </div>
    </div>
  );
}
