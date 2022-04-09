import "./About.css";

import React from "react";
import headshot from "../../images/headshot2.JPG";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <div className="aboutMeContainer">
      <div className="aboutMeContent">
        <h1 id="about" className="aboutHeader">
          About
        </h1>
        <div className="aboutMe">
          <img className="headshot" src={headshot} />
          <div className="aboutMeText">
            <h3 className="aboutMeHeader">A software engineer</h3>
            <p className="aboutMePara">
              with a passion for building beautiful, efficient, and
              user-friendly websites. Before starting my journey as a web
              developer, I graduated with an art degree from Florida
              International University. Once I discovered that I could combine
              my love for problem solving and creating, I fell in love with
              coding and the tech industury as a whole.
            </p>
            <p className="aboutMePara">
              One of my biggest goals at the moment is to work as a web
              developer at a company that prioritizes growth for it's employees.
              I look forward to using my current skills to contribute to the
              success of any company I end up working with and continuing my
              education on web development.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
