import React from "react";
import "../css/Header.css";
import TypeWriter from "react-typewriter";
import { Link } from "react-scroll";
import ProfileImg from "../assets/profile-hex.png";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

function Header() {
  return (
    <div id="home">
      <div className="container header-container">
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
          <div className="socials">
            <a
              href="https://github.com/robert-szczurko"
              target="_blank"
              className="social-icon">
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/robert-szczurko-4ab313232/"
              target="_blank"
              className="social-icon">
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="header-right">
          <img src={ProfileImg} alt="" className="profile-img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
