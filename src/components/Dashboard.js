import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Dashboard);
