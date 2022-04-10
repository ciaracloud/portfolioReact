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
import WeatherProject from "../VacayProject/VacayProject";
import VacayProject from "../VacayProject/VacayProject";

export default function Work() {
  const projectsArray = [
    {
      name: "Brandy",
      imgUrl: brandyMockUp,
      about:
        "A project that helps brands and individuals generate a brand kit depending on the information that they input about their brand. The website includes a mascot named Brandy that cheers the user on as they build their brand kit.",
      builtWith: "Built with: HTML, CSS, JavaScript, and Unsplash Images API",
      videoUrl: "https://youtu.be/mTRFO0Wi55k",
      githubUrl: "https://github.com/ciaracloud/apiProject_Brandy",
      liveUrl: "https://brandykit.netlify.app/userinput",
    },
    {
      name: "Sunny Side Up Weather App",
      imgUrl: sunnyMockUp,
      about:
        "A fun weather app that loads different egg images depending on the daily weather/weekly forecast for a city that the user looks up. The app merges functionality with entertainment for an enjoyable user experience.",
      builtWith: "Built with: HTML, CSS, JavaScript, and Open Weather API",
      videoUrl: "https://youtu.be/3X9yLwFWr_w",
      githubUrl: "https://github.com/ciaracloud/weatherApp_SunnySideUp",
      liveUrl: "https://sunnysideupweather.netlify.app/",
    },
  ];
  return (
    <>
      <h1 id="work" className="projectsHeader">
        Featured Projects
      </h1>

      <div className="workContainer">
        <PortfolioProject imgUrl={portfolioMockUp} />
        <VacayProject imgUrl={vacayMockUp} />
        {projectsArray.map((singleProject) => (
          <Project
            name={singleProject.name}
            imgUrl={singleProject.imgUrl}
            about={singleProject.about}
            builtWith={singleProject.builtWith}
            videoUrl={singleProject.videoUrl}
            githubUrl={singleProject.githubUrl}
            liveUrl={singleProject.liveUrl}
          />
        ))}
        <PythonProject imgUrl={pythonMockUp} />
      </div>
    </>
  );
}
