import React, { useState } from "react";
import {Button} from '../Button'
import "./styles/style-modal.css";

interface ModalProps {
  projectName:string,
}

export const Modal = (prop:ModalProps) => {
  const [modalState, setModalState] = useState(false);

  const manageState = (e:any) => {
    e.preventDefault();
    setModalState(!modalState);
  };

  return (
    <React.Fragment>
      <div className={`modal-background modal-showing-${modalState}`}>
        <div className="modal-inner">
          <div className="modal-image">
            <img
              src="https://images.unsplash.com/photo-1592488238515-6fe7e4469d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
          </div>
          <div className="modal-info">
            <div className="modal-technology">
              <h2>Technologies</h2>
              <ul className="modal-list-technology">
                <li>typescript</li>
                <li>javascript</li>
              </ul>
            </div>
            <div className="modal-text">
              <h2>Describe</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              rerum eaque dicta asperiores aut quasi, inventore vero tenetur
              amet vel?
            </div>
            <div className="modal-buttons">
              <button className="button-demo">Demo</button>
              <button className="button-code">View code </button>
            </div>
            <button className='button-exit' onClick={manageState}>exit</button>

          </div>
        </div>
      </div>
      <button className='button-demo' onClick={manageState}>{prop.projectName}</button>
    </React.Fragment>
  );
};
