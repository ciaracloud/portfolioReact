import "./Work.css";

import React from "react";
import Project from "../Project/Project";

export default function Work() {
  const projectsArray = [
    {
      name: "Vacay Buddy",
      imgUrl: "img.png",
      about: "This is some text about Vacay Buddy",
      videoUrl: "https://youtu.be/68aq8eToanc",
      githubUrl: "https://github.com/ciaracloud/fullStackProject_VacayBuddy",
    },
    {
      name: "Brandy",
      imgUrl: "img.png",
      about: "This is some text about Brandy",
      videoUrl: "https://youtu.be/mTRFO0Wi55k",
      githubUrl: "https://github.com/ciaracloud/apiProject_Brandy",
    },
    {
      name: "Sunny Side Up",
      imgUrl: "img.png",
      about: "This is some text about Sunny Side Up",
      videoUrl: "https://youtu.be/3X9yLwFWr_w",
      githubUrl: "https://github.com/ciaracloud/weatherApp_SunnySideUp",
    },
  ];
  return (
    <div>
      <h1 id="work">Work</h1>
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
  );
}
