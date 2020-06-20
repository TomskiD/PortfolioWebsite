import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <div className="header-content">
      <div className="wrapper">
        <h1>
          Hey! It's Tom <span className="surname">Dmowski</span>
        </h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem
          placeat adipisci maxime velit aliquid magnam molestias ipsam tenetur
          corrupti? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptate esse, fugiat deleniti molestiae nihil tenetur culpa harum
          laborum, atque, itaque repellendus. Numquam, porro quis incidunt
          facere eaque optio sint esse!
        </p>
        <Link to="/projects">
          <Button text="See projects" />
        </Link>
      </div>
    </div>
  );
};

