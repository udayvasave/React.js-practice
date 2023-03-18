import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Project.css";

const Project = () => {
  return (
    <>
      <Header />{" "}
      <div className="Projects">
        <div className="Heading">
          <h3>Projects</h3>
          <span>This page contains my personal projects.</span>
        </div>
        <div className="Project-container">
          <div className="Project1">
            <h4>Travel Website</h4>{" "}
            <p>
              Designed and created a responsive Travel Web Page using HTML, CSS
              and JavaScript. Website contains information about Goa Tourism. It
              has different pages that contains information about famous tourist
              spots, restaurants, hotels and many more, which helps tourists to
              plan their trip.
            </p>{" "}
            <a href="https://travelridegoa.world">Website</a>{" "}
            <a href="https://github.com/udayvasave/webdevelopment-practise/tree/main/Recreating%20Goa">
              Github Link
            </a>
          </div>
          <div className="Project2">
            <h4>Music Player</h4>{" "}
            <p>
              The music player is a web application based on HTML, CSS, and
              JavaScript, which contains a couple of soundtracks, which have a
              play, pause, seek and repeat functionality.
            </p>{" "}
            <a href="https://github.com/udayvasave/webdevelopment-practise/tree/main/Music%20player">
              {" "}
              Github Link
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
