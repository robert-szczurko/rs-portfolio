import React from "react";
import { Link } from "react-scroll";
import "../css/SideDrawer.css";

function SideDrawer(props) {
  return (
    <div
      className={
        props.drawerToggle
          ? "side-drawer side-drawer-open"
          : "side-drawer side-drawer-close"
      }>
      <Link
        className="mobile-nav-item"
        activeClass="nav-active"
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={props.linkClick}>
        Home
      </Link>
      <Link
        className="mobile-nav-item"
        activeClass="nav-active"
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={props.linkClick}>
        About
      </Link>
      <Link
        className="mobile-nav-item"
        activeClass="nav-active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={props.linkClick}>
        Projects
      </Link>
      <Link
        className="mobile-nav-item"
        activeClass="nav-active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={props.linkClick}>
        Contact
      </Link>
    </div>
  );
}

export default SideDrawer;
