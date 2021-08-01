import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Fox from "./component/Fox/Fox";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/fox" component={Fox} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
