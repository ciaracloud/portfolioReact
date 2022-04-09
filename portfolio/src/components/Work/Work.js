import "./Work.css";

import React from "react";
import Project from "../Project/Project";

import vacayMockUp from "../../images/vacayMockUp.PNG";
import brandyMockUp from "../../images/brandyMockUp.PNG";
import sunnyMockUp from "../../images/sunnyMockUp.PNG";
import portfolioMockUp from "../../images/portfolioMockUp.png";
import pythonMockUp from "../../images/pythonMockUp.png";

import PortfolioProject from "../PortfolioProject/PortfolioProject";
import PythonProject from "../PythonProject/PythonProject";

export default function Work() {
  const projectsArray = [
    {
      name: "Vacay Buddy",
      imgUrl: vacayMockUp,
      about:
        "A website that helps users plan their vacation by providing all relevant information for multiple hotels, restaurants, and excursions in the city that they plan on visiting. Once the user inputs their information, they can simply click the add button next to what they are interested in and it will be stored in the database with a reservation ID for that specific vacation. All of the user's choices and vacation details are stored in a database so they can look up their vacation with the reservation ID to read and/or make changes to the trip anytime they need to.",
      builtWith:
        "Built with: HTML, CSS, JavaScript, ES6 Template Engine, Node.js, Express, PostgreSQL, Sequelize, and Yelp Fusion API",
      videoUrl: "https://youtu.be/68aq8eToanc",
      githubUrl: "https://github.com/ciaracloud/fullStackProject_VacayBuddy",
    },
    {
      name: "Brandy",
      imgUrl: brandyMockUp,
      about:
        "A project that helps brands and individuals generate a brand kit depending on the information that they input about their brand. The website includes a mascot named Brandy that cheers the user on as they build their brand kit.",
      builtWith: "Built with: HTML, CSS, JavaScript, and Unsplash Images API",
      videoUrl: "https://youtu.be/mTRFO0Wi55k",
      githubUrl: "https://github.com/ciaracloud/apiProject_Brandy",
    },
    {
      name: "Sunny Side Up",
      imgUrl: sunnyMockUp,
      about:
        "A fun weather app that loads different egg images depending on the daily weather/weekly forecast for a city that the user looks up. The app merges functionality with entertainment for an enjoyable user experience.",
      builtWith: "Built with: HTML, CSS, JavaScript, and Open Weather API",
      videoUrl: "https://youtu.be/3X9yLwFWr_w",
      githubUrl: "https://github.com/ciaracloud/weatherApp_SunnySideUp",
    },
  ];
  return (
    <>
      <h1 id="work" className="projectsHeader">
        Featured Projects
      </h1>

      <div className="workContainer">
        <PortfolioProject imgUrl={portfolioMockUp} />
        {projectsArray.map((singleProject) => (
          <Project
            name={singleProject.name}
            imgUrl={singleProject.imgUrl}
            about={singleProject.about}
            builtWith={singleProject.builtWith}
            videoUrl={singleProject.videoUrl}
            githubUrl={singleProject.githubUrl}
          />
        ))}
        <PythonProject imgUrl={pythonMockUp} />
      </div>
    </>
  );
}
