import "./PortfolioProject.css";

import React from "react";
export default function PortfolioProject({ imgUrl }) {
  return (
    <div className="projectContainer">
      <div className="projectContent">
        <img className="projectImg" src={imgUrl} alt="" />
        <div className="projectTextConent">
          <h2>Portfolio</h2>
          <p className="projectAbout">
            My personal portfolio application, built with React.js, that allows
            users to learn more about me and my skills. A contact form allows
            the user to contact me via email directly from the webpage.
          </p>
          <p className="builtWith">
            Built with: HTML, CSS, JavaScript, and React.js
          </p>
          <div className="buttonsContainer">
            <a
              className="videoButton button"
              href="https://www.ciaracloud.dev/"
              target="_blank"
            >
              Live Site
            </a>
            <a
              className="videoButton button"
              href="https://github.com/ciaracloud/portfolioReact"
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
