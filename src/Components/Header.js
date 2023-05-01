import React from "react";
import "../css/Header.css";
import TypeWriter from "react-typewriter";
import { Link } from "react-scroll";
import ProfileImg from "../assets/profile-hex.png";

function Header() {
  return (
    <div id="home">
      <div className="container">
        <div className="header-left">
          <h3 className="sub-heading">Hello, </h3>
          <h3 className="heading">
            <span className="heading-white">I'm </span>
            <TypeWriter typing={1}>Robert Szczurko</TypeWriter>
          </h3>

          <h3 className="sub-heading">Front-end Developer</h3>
          <p className="body-text">
            I am a React front-end developer based in Melbourne, Australia
          </p>
          <div className="header-btns">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}>
              <button className="button-primary">See my Work</button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}>
              <button className="button-secondary btn-spacer">
                Let's Connect
              </button>
            </Link>
          </div>
          <div className="socials"></div>
        </div>
        <div className="header-right">
          <img src={ProfileImg} alt="" className="profile-img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
