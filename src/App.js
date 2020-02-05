import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dash from "./pages/Dash";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/dash">
          <Dash />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
