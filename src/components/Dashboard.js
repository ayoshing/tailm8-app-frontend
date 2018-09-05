import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { getProfileAction } from "../redux/actions/profileActions";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        {/* if user does not have a profile, render ProfileForm otherwise render Postsfeed */}
        {/* Speeddial component to create new Post */}
        <Navigation />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProfileAction }
)(Dashboard);
