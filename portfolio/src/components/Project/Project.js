import "./Project.css";

import React from "react";

export default function Project({ name, imgUrl, about, videoUrl, githubUrl }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src="" />
      <p>{about}</p>
      <a href="">Video walk through</a>
      <a href="">View on github</a>
    </div>
  );
}
