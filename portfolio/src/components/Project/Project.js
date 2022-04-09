import "./Project.css";

import React from "react";
export default function Project({
  name,
  imgUrl,
  about,
  builtWith,
  videoUrl,
  githubUrl,
}) {
  return (
    <div className="projectContainer">
      <div className="projectContent">
        <img className="projectImg" src={imgUrl} alt="" />
        <div className="projectTextConent">
          <h2>{name}</h2>
          <p className="projectAbout">{about}</p>
          <p className="builtWith">{builtWith}</p>
          <div className="buttonsContainer">
            <a className="videoButton button" href={videoUrl} target="_blank">
              Video walkthrough
            </a>
            <a className="videoButton button" href={githubUrl} target="_blank">
              View code on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
