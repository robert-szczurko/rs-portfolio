import React from "react";
import "../css/About.css";
import profile from "../profile.png";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <h1 className="about-heading">ABOUT ME</h1>
        <h3>Personal Info</h3>
        <p>Get to know more about me</p>
      </div>
      <div className="about-bottom">
        <div className="about-img">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <p className="about-text">
            Hello! My name is Robert Szczurko I'm a passionate Front-end Web
            Developer specialising in React JS. I enjoy creating fast and
            intuitive web applications that solve problems for different
            companies. <br /> <br /> I would love to hear from you.
          </p>
          <div className="about-skills">
            <h3>Skills</h3>
            <div className="skills">
              <p className="skill">REACT</p>
              <p className="skill">JAVASCRIPT</p>
              <p className="skill">HTML</p>
              <p className="skill">BOOTSTRAP</p>
              <p className="skill">CSS</p>
              <p className="skill">GIT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
