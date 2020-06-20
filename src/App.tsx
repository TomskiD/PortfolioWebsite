import * as React from "react";
import { Home } from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
};
