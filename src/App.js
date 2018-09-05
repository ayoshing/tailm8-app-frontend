import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import indexRoutes from "./routes/index.js";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/authActions";

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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(connect(mapStateToProps)(App));
