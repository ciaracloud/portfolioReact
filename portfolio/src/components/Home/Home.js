import "./Home.css";

import React from "react";
import { Link } from "react-scroll";
const ReactRotatingText = require("react-rotating-text");

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>Hi, Ciara Cloud</h1>
      <div className="homeSentence">
        <h2>I am a</h2>
        <h2 className="rotateText">
          <ReactRotatingText items={["coder", "creative", "cat mom"]} />
        </h2>
      </div>
      <Link className="viewWorkButton" to="work" smooth={true} duration={1000}>
        View my work
      </Link>
    </div>
  );
}
