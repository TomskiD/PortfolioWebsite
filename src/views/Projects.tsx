import React, { useState, useEffect } from "react";
import { Modal } from "../components/UI/Modal";
import firebase from "../firebase";
import './styles/projects.css'

export const Projects = () => {
  const [project, setProject] = useState<any>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Projects")
      .onSnapshot((snapshot) => {
        const newProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProject(newProjects);
      });
  }, []);

  return (
    <div className="header-projects">
      <h1>
        My <span>projects</span>
      </h1>
      <div className="projects">
        {project.map((el:any) => (
          <Modal
            name={el.Name}
            img={el.IMG_src}
            describe={el.Describe}
            technologies={el.Technologies}
            key={el.id}
          />
        ))}
      </div>
    </div>
  );
};
