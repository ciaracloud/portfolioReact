import React from "react";
import NavbarContainer from "./NavbarContainer";
import "./AppPageContainer.css";

export default function AppPageContainer() {
  return (
    <div className="appPageContainer">
      <NavbarContainer />
      <div>
        <h1>Hi, I'm Ciara!</h1>
        <p>Something about me...</p>
        <a href="">View my work</a>
      </div>
    </div>
  );
}
