import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Nav} from "./components/Nav";

import {Home} from "./views/Home";
import {About} from "./views/About";
import {NotFound} from "./views/NotFound";

export const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
