import * as React from "react";
import "./app.css";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { Contact } from "./views/Contact";
import { Navigation } from "./components/UI/nav/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StickyNav } from "./components/UI/leftbar/StickyNav";

export const App: React.FC = () => {
  return (
    <Router>
      <header id="main-header">
        <div className="container">
          <Navigation />
          <StickyNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </header>
    </Router>
  );
};
