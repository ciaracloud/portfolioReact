import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <a className="link" href={props.link.link}>
        {props.link.name}
      </a>
    </div>
  );
}
