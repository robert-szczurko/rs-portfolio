import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const navScroll = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navScroll);

  let iconImg = <MenuIcon />;

  if (props.icon) {
    iconImg = <CloseIcon />;
  } else {
    iconImg = <MenuIcon />;
  }

  return (
    <nav className={navbar ? "navbar navbar-scrolled" : "navbar"}>
      <div className="navbar-container container">
        <div className="logo">
          <Link
            className="nav-item"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={props.logoclick}>
            <h3>
              Robert <span>S</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-links">
          <Link
            className="nav-item"
            activeClass="nav-active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Home
          </Link>
          <Link
            className="nav-item"
            activeClass="nav-active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            About
          </Link>
          <Link
            className="nav-item"
            activeClass="nav-active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Projects
          </Link>
          <Link
            className="nav-item"
            activeClass="nav-active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={props.hamburgerClick}>
          {iconImg}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
