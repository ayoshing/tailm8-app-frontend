import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import indexRoutes from "./routes/index.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
