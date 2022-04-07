import "./About.css";

import React from "react";
import headshot from "../../images/headshot2.JPG";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <div className="aboutMeContainer">
      <div className="aboutMeContent">
        <h1 id="about">About</h1>
        <div className="aboutMe">
          <img className="headshot" src={headshot} />
          <div className="aboutMeText">
            <h3>A software engineer</h3>
            <p>
              A student at DigitalCrafts, currently learning the basics of CSS.
              Before becoming a student at DigitalCrafts, I graduated with a
              degree in art from Florida International University. Along the way
              of pursuing my passion for art, I discovered that I am passionate
              about learning how to build beautiful, efficient and user friendly
              websites.
            </p>
            <p>
              I was born and raised in the sunshine state and currently reside
              in Tampa, FL. One of my biggest goals at the moment is to work as
              a software engineer at a company that prioritizes growth for its
              employees. I look forward to continuing my education on web
              development.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
