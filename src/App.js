import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MenuDrawer from "./components/MenuDrawer";
import indexRoutes from "./routes/index.js";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <MenuDrawer />

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
