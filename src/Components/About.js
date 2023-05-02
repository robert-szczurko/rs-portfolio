import React from "react";
import "../css/About.css";
import profile from "../assets/profile.png";
import { Link } from "react-scroll";

function About() {
  return (
    <section className=" about-section" id="about">
      <div className="container about-container">
        <h2 className="section-heading">
          About <span className="primary-span">Me</span>
        </h2>
        <p className="sub-heading">Get to know more about me</p>
        <img className="about-img" src={profile} alt="" />
        <p className="about-text body-text">
          Hello! My name is Robert Szczurko I'm a passionate Front-end Web
          Developer specialising in React JS. I enjoy creating fast and
          intuitive web applications that solve problems for different
          companies. <br /> <br /> I would love to hear from you.
        </p>
        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
          <button className="button-primary">Contact Me</button>
        </Link>
      </div>
    </section>
  );
}

export default About;
