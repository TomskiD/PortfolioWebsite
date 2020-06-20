import React from "react";
import "../styles/stickynav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const StickyNav = () => {
  return (
    <div className="sticky-icons">
      <ul className="list-icons">
        <li className="icons github">
          <a href="https://github.com/TomskiD" target="_blank">
            Github <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
        <li className="icons linkedin">
          <a href="https://www.linkedin.com/in/tomskid/" target="_blank">
            Linked In <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </li>
      </ul>
    </div>
  );
};
