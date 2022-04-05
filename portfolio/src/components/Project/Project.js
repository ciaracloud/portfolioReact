import "./Project.css";

import React from "react";
export default function Project({ name, imgUrl, about, videoUrl, githubUrl }) {
  return (
    <div className="projectContainer">
      <div className="projectContent">
        <img className="projectImg" src={imgUrl} alt="" />
        <div className="projectTextConent">
          <h2>{name}</h2>
          <p>{about}</p>
          <div className="buttonsContainer">
            <a className="videoButton button" href={videoUrl} target="_blank">
              Video walk through
            </a>
            <a className="videoButton button" href={githubUrl} target="_blank">
              View on github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
