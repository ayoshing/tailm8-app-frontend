import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import SignUpPage from "./views/SignUpPage";
import MainPage from "./views/MainPage";
import ProfileForm from "./components/ProfileForm";
import TestPage from "./views/TestPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/profile/edit" component={ProfileForm} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
