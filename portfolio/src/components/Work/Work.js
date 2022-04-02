import "./Work.css";

import React from "react";
import Project from "../Project/Project";

export default function Work() {
  const projectsArray = [{ name: "", imgUrl: "", videoUrl: "", githubUrl: "" }];
  return (
    <div>
      <h1 id="work">Work</h1>
      <Project />
    </div>
  );
}
