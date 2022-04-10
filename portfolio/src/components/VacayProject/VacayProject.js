import "./VacayProject.css";

import React from "react";
export default function VacayProject({ imgUrl }) {
  return (
    <div className="projectContainer">
      <div className="projectContent">
        <img className="projectImg" src={imgUrl} alt="" />
        <div className="projectTextConent">
          <h2>Vacay Buddy</h2>
          <p className="projectAbout">
            A website that helps users plan their vacation by providing all
            relevant information for multiple hotels, restaurants, and
            excursions in the city that they plan on visiting. Once the user
            inputs their information, they can simply click the add button next
            to what they are interested in and it will be stored in the database
            with a reservation ID for that specific vacation. All of the user's
            choices and vacation details are stored in a database so they can
            look up their vacation with the reservation ID to read and/or make
            changes to the trip anytime they need to.
          </p>
          <p className="builtWith">
            Built with: HTML, CSS, JavaScript, ES6 Template Engine, Node.js,
            Express, PostgreSQL, Sequelize, and Yelp Fusion API
          </p>
          <div className="buttonsContainer">
            <a
              className="videoButton button"
              href="https://youtu.be/68aq8eToanc"
              target="_blank"
            >
              Video walkthrough
            </a>
            <a
              className="videoButton button"
              href="https://github.com/ciaracloud/fullStackProject_VacayBuddy"
              target="_blank"
            >
              View code on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
