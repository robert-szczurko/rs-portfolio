import React from "react";
import "../css/Project.css";
import DoneIcon from "@material-ui/icons/Done";

function Project(props) {
  const link = () => {
    window.open(props.url, "_blank");
  };

  return (
    <div className="card">
      <img className="project-image" src={props.image} alt={props.alt} />
      <h3 className="project-heading">{props.heading}</h3>
      <div className="project-skills">
        {props.skills.map((skill) => (
          <div className="project-skill">
            <DoneIcon />
            <p>{skill}</p>
          </div>
        ))}
      </div>
      <div className="project-description">{props.description}</div>
      <button className="project-btn" onClick={link}>
        SEE LIVE
      </button>
    </div>
  );
}

export default Project;
