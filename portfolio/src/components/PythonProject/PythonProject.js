import "./PythonProject.css";

import React from "react";
export default function PythonProject({ imgUrl }) {
  return (
    <div className="projectContainer">
      <div className="projectContent">
        <img className="projectImg" src={imgUrl} alt="" />
        <div className="projectTextConent">
          <h2>Interior Battle</h2>
          <p className="projectAbout">
            A solo project building an RPG (role playing game), built for the
            terminal, that allows users to battle the enemy until a winner is
            chosen. User experience allows for the users to choose which
            character they would like to be during battle. Each character has
            their own starting health level, strength level, and attack options.
          </p>
          <p className="builtWith">Built exclusively with: Python</p>
          <div className="buttonsContainer">
            <a
              className="videoButton button"
              href="https://dev.to/ciaracloud/i-made-my-first-rpg-in-python-2dhj"
              target="_blank"
            >
              Dev.to blog post
            </a>
            <a
              className="videoButton button"
              href="https://github.com/ciaracloud/pythonRPGame_InteriorBattle"
              target="_blank"
            >
              View code on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
