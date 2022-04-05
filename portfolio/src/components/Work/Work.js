import "./Work.css";

import React from "react";
import Project from "../Project/Project";

import vacayMockUp from "../../images/vacayMockUp.PNG";
import brandyMockUp from "../../images/brandyMockUp.PNG";
import sunnyMockUp from "../../images/sunnyMockUp.PNG";

export default function Work() {
  const projectsArray = [
    {
      name: "Vacay Buddy",
      imgUrl: vacayMockUp,
      about: "This is some text about Vacay Buddy",
      videoUrl: "https://youtu.be/68aq8eToanc",
      githubUrl: "https://github.com/ciaracloud/fullStackProject_VacayBuddy",
    },
    {
      name: "Brandy",
      imgUrl: brandyMockUp,
      about: "This is some text about Brandy",
      videoUrl: "https://youtu.be/mTRFO0Wi55k",
      githubUrl: "https://github.com/ciaracloud/apiProject_Brandy",
    },
    {
      name: "Sunny Side Up",
      imgUrl: sunnyMockUp,
      about: "This is some text about Sunny Side Up",
      videoUrl: "https://youtu.be/3X9yLwFWr_w",
      githubUrl: "https://github.com/ciaracloud/weatherApp_SunnySideUp",
    },
  ];
  return (
    <>
      <h1 id="work">Featured Projects</h1>
      <div className="workContainer">
        {projectsArray.map((singleProject) => (
          <Project
            name={singleProject.name}
            imgUrl={singleProject.imgUrl}
            about={singleProject.about}
            videoUrl={singleProject.videoUrl}
            githubUrl={singleProject.githubUrl}
          />
        ))}
      </div>
    </>
  );
}
