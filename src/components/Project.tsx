import * as React from "react";

interface ProjectProps {
  title: string;
  text: string;
}

export const Project = (prop: ProjectProps) => {
  return (
    <React.Fragment>
      <div className="project-overlay">
        <img className="project-img" alt='img'/>
        <h2 className="project-title">{prop.title}</h2>
        <p className="project-text">{prop.text}</p>
      </div>
    </React.Fragment>
  );
};
