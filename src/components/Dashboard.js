import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { getCurrentProfileAction } from "../redux/actions/profileActions";
import ProfileForm from "./ProfileForm";
import SpeedDials from "./SpeedDials";

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    const isEmpty = value =>
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0);

    console.log(this.props);
    return (
      <Fragment>
        {/* {isEmpty(this.props.profile.profile) ? <ProfileForm /> : null} */}
        {isEmpty(this.props.profile.profile) ? (
          <h2>You Don't Have a Profile</h2>
        ) : null}

        <SpeedDials />
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
  { getCurrentProfileAction }
)(Dashboard);
