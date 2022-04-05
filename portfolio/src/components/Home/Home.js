import "./Home.css";

import React from "react";
import { Link } from "react-scroll";
const ReactRotatingText = require("react-rotating-text");

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <p>Hi! My name is</p>
        <h1>Ciara Cloud</h1>
        <h2>
          <ReactRotatingText items={["Coder.", "Creative.", "Cat mom."]} />
        </h2>
        <Link
          className="viewWorkButton"
          to="work"
          smooth={true}
          duration={1000}
        >
          View my work
        </Link>
      </div>
    </div>
  );
}
