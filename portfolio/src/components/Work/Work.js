import "./Work.css";

import React from "react";
import Project from "../Project/Project";

export default function Work() {
  const projectsArray = [
    {
      name: "test name",
      imgUrl: "img.png",
      about: "This is some text about my project",
      videoUrl: "video.mp4",
      githubUrl: "github.com/project",
    },
    {
      name: "test2",
      imgUrl: "img.png",
      about: "This is some text about my second project",
      videoUrl: "video.mp4",
      githubUrl: "github.com/project2",
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
