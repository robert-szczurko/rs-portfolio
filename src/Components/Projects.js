import React from "react";
import Project from "./Project";
import "../css/Projects.css";
import netflixImg from "../netflix-project-min.png";
import tableTennisImg from "../table-tennis-project.png";
import networthImg from "../networth-project.png";
import slackImg from "../slack-project.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-top">
        <h1 className="projects-heading">MY WORK</h1>
        <h3>Latest Projects</h3>
        <p>Here you can find some of my latest applications</p>
      </div>
      <div className="projects">
        <Project
          image={netflixImg}
          alt="Netflix Clone"
          skills={["React JS", "External API", "Axios", "Video Player"]}
          heading="Netflix Clone"
          url="https://netflix-clone-aeb93.web.app"
          description="Netflix clone is a recreation of the Netflix web application. The project is built using an external API providing live updates of current popular Netflix shows. Trailers can also be displayed by clicking on a title "
        />
        <Project
          image={networthImg}
          skills={[
            "React JS",
            "Google Authentication",
            "User Dashboard",
            "CRUD",
          ]}
          alt="Networth Calculator Beta"
          heading="Networth Calculator Beta"
          url="https://networth-calculator-3cb78.web.app"
          description="Networth Calculator helps users manage their Income, Investments and Debts. The app uses algorithms to predict when they will reach their financial goals. Currently a Beta version, the plan is to implement external API's to retrieve the users current financial data to reduce the need for manual inputs"
        />
      </div>
      <div className="projects">
        <Project
          image={slackImg}
          skills={[
            "React JS",
            "Styled Components",
            "Redux",
            "Google Authentication",
          ]}
          alt="Slack Clone"
          heading="Slack Clone"
          url="https://slack-clone-1d566.web.app/"
          description="Slack Clone is a live chatting app that allows multiple users to chat in real time. Includes functionality to add new chat rooms "
        />
        <Project
          image={tableTennisImg}
          skills={[
            "React JS",
            "Firebase DB",
            "Mobile Design",
            "Realtime Updates",
          ]}
          alt="Table Tennis"
          heading="Table Tennis Tracker"
          url="https://table-tennis-a716e.web.app/"
          description="A fun personal project made to track table tennis games between my housemates and I. The app is designed for mobile only and includes match history as well as player stats"
        />
      </div>
    </section>
  );
}

export default Projects;
