import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import LandingPage from "./LandingPage";
import FriendContainer from "../components/FriendContainer";

const AuthedFriendContainer = withAuth(FriendContainer);

class TestPage extends Component {
  render() {
    return (
      <Fragment>
        {localStorage.jwt ? <AuthedFriendContainer /> : <LandingPage />}
      </Fragment>
    );
  }
}

export default withRouter(TestPage);
