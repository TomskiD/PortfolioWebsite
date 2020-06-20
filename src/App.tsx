import * as React from "react";
import './app.css'
import { Home } from "./views/Home";
import {Navigation} from './components/UI/nav/Navigation'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Router>
      <header id="main-header">
        <div className="container">
          <Navigation/>
          <Home />
        </div>
      </header>
    </Router>
  );
};
