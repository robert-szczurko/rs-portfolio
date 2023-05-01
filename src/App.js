import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SideDrawer from "./Components/SideDrawer";

function App() {
  const [toggleState, setToggleState] = useState(false);
  const sidebarToggleHandler = () => {
    toggleState ? setToggleState(false) : setToggleState(true);
  };
  const logoCloseHandler = () => {
    setToggleState(false);
  };

  return (
    <div className="App">
      <Navbar
        icon={toggleState}
        hamburgerClick={sidebarToggleHandler}
        logoclick={logoCloseHandler}
      />
      <SideDrawer drawerToggle={toggleState} linkClick={sidebarToggleHandler} />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
