import "./Navbar.css";

import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div class="navbar">
      <Link to="about" smooth={true} duration={1000}>
        About
      </Link>
      <Link to="work" smooth={true} duration={1000}>
        Work
      </Link>
      <Link to="contact" smooth={true} duration={1000}>
        Contact
      </Link>
    </div>
  );
}
