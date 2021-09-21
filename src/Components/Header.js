import React from "react";
import "../css/Header.css";
import TypeWriter from "react-typewriter";
import { Link } from "react-scroll";

function Header() {
  return (
    <div id="home">
      <div className="header-container">
        <div className="header-left">
          <h3 className="header-greeting">HELLO THERE</h3>
          <div className="heading-intro">
            <span className="header-heading">I</span>
            <TypeWriter typing={1} className="header-heading">
              'm Robert Szczurko
            </TypeWriter>
          </div>
          <p className="header-text">
            I am a React front-end developer based in Melbourne, Australia
          </p>
        </div>
        <div className="header-right">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            <button className="header-btn">LATEST PROJECTS</button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <button className="header-btn">MORE ABOUT ME</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
