import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SnackBar from "./SnackBar";
import PostDialog from "./PostDialog";
import Navigation from "./Navigation";
import TestPage from "../views/TestPage";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const isEmpty = value =>
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0);

    return (
      <Fragment>
        <SnackBar />
        <PostDialog />
        <Navigation />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors,
  post: state.post
});

export default connect(mapStateToProps)(Dashboard);
