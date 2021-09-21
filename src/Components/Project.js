import React from "react";
import "../css/Project.css";
import DoneIcon from "@material-ui/icons/Done";

function Project(props) {
  const link = () => {
    window.open(props.url, "_blank");
  };

  const codeLink = () => {
    window.open(props.codeurl, "_blank");
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
      <div className="project-btns">
        <button className="project-btn" onClick={link}>
          SEE LIVE
        </button>
        <button className="project-btn" onClick={codeLink}>
          VIEW CODE
        </button>
      </div>
    </div>
  );
}

export default Project;
