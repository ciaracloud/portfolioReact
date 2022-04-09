import "./Skills.css";

import React from "react";

import ProgrammingSkills from "../ProgramingSkills/ProgrammingSkills";
import CreativeSkills from "../CreativeSkills/CreativeSkills";

export default function Skills() {
  return (
    <div className="skillsBackground">
      <h1 className="skillsHeader">Skills</h1>
      <div className="skillsContainer">
        <ProgrammingSkills />
        <CreativeSkills />
      </div>
    </div>
  );
}
