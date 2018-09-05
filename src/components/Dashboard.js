import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { getCurrentProfileAction } from "../redux/actions/profileActions";
import ProfileForm from "./ProfileForm";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfileAction(this.props.auth.user.id);
  }

  render() {
    const isEmpty = value =>
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0);

    console.log(this.props);
    return (
      <Fragment>
        {isEmpty(this.props.profile.profile) ? <ProfileForm /> : null}
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
  { getCurrentProfileAction }
)(Dashboard);
