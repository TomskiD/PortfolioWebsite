import React from "react";
import { Project } from "../components/Project";
import "./styles/projects.css";

export const Projects = () => {
  return (
    <div className="header-projects">
      <h1>
        My <span>projects</span>
      </h1>
      <div className="projects">
        <a href="" className="project project-one">
          <Project title={"Przykladowy tytul"} text={"lorem ipsum"} />
        </a>
        <a href="" className="project project-two">
          <Project title={"Przykladowy tytul"} text={"lorem ipsum"} />
        </a>
        <a href="" className="project project-three">
          <Project title={"Przykladowy tytul"} text={"lorem ipsum"} />
        </a>
        <a href="" className="project project-four">
          <Project title={"Przykladowy tytul"} text={"lorem ipsum"} />
        </a>
      </div>
    </div>
  );
};
