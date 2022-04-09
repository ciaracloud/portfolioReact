import "./Navbar.css";

import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="aboutLink" to="about" smooth={true} duration={1000}>
          About
        </Link>
        <Link className="projectsLink" to="work" smooth={true} duration={1000}>
          Projects
        </Link>
        <Link
          className="contactLink"
          to="contact"
          smooth={true}
          duration={1000}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
