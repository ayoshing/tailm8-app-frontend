import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import indexRoutes from './routes/index.js';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    );
  }
}

export default App;
