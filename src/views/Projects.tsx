import React from "react";
// import { Project } from "../components/Project";
import { Modal } from "../components/UI/Modal";
import "./styles/projects.css";

export const Projects = () => {
  return (
    <div className="header-projects">
      <h1>
        My <span>projects</span>
      </h1>
      <div className="projects">
        <Modal projectName='pokedex'/>
        <Modal projectName='pokedex'/>
        <Modal projectName='pokedex'/>
        <Modal projectName='pokedex'/>
      </div>
    </div>
  );
};