import React, { useState } from "react";
import "./styles/style-modal.css";

interface ModalProps {
  name: string;
  img: string;
  describe: string;
  technologies: [];
}

export const Modal = (prop: ModalProps) => {
  const [modalState, setModalState] = useState(false);

  const manageState = (e: any) => {
    e.preventDefault();
    setModalState(!modalState);
  };

  return (
    <React.Fragment>
      <div className={`modal-background modal-showing-${modalState}`}>
        <div className="modal-inner">
          <div className="modal-image">
            <img src={prop.img} alt="none" />
          </div>
          <div className="modal-info">
            <div className="modal-technology">
              <h2>Technologies</h2>
              <ul className="modal-list-technology">
              {prop.technologies.map((tech,index) => (<li key={index}>  {tech}  </li>))}
              </ul>
            </div>
            <div className="modal-text">
              <h2>Describe</h2>
              <p>{prop.describe}</p>
            </div>
            <div className="modal-buttons">
              <button className="button-demo">Demo</button>
              <button className="button-code">View code </button>
            </div>
            <button className="button-exit" onClick={manageState}>
              exit
            </button>
          </div>
        </div>
      </div>
      <button className="button-demo" onClick={manageState}>
        {prop.name}
      </button>
    </React.Fragment>
  );
};
