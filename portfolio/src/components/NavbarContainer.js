import React from "react";
import "./NavbarContainer.css";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  const links = [
    { name: "Home", link: "http://localhost:3000/" },
    { name: "About", link: "http://localhost:3000/about" },
    { name: "Resume", link: "http://localhost:3000/resume" },
  ];
  return (
    <div className="navbarContainer">
      {links.map((link) => {
        <Navbar link={link} />;
      })}
    </div>
  );
}
