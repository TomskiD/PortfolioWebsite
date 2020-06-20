import * as React from "react";
import {Button} from '../components/Button'

interface ProjectProps {
  title: string;
  text: string;
}

export const Project = (prop: ProjectProps) => {
  return (
    <React.Fragment>
      <div className="project-overlay">
        <h2 className="project-title">{prop.title}</h2>
        <p className="project-text">{prop.text}</p>
        <Button text='View'/>
      </div>
    </React.Fragment>
  );
};
