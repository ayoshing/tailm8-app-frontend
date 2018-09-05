import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../redux/actions/authActions";
import { getCurrentProfileAction } from "../redux/actions/profileActions";

const withAuth = WrappedComponent => {
  class AuthComponent extends Component {
    componentDidMount() {
      if (localStorage.jwt && !this.props.auth.isAuthenticated) {
        this.props.getCurrentUser();
        this.props.getCurrentProfileAction(this.props.auth.user.id);
      }
    }

    render() {
      if (localStorage.jwt && this.props.auth.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else if (localStorage.jwt && this.props.profile.loading) {
        return <div>LOADING</div>;
      } else {
        return <Redirect to="/" />;
      }
    }
  }

  return connect(
    mapStateToProps,
    { getCurrentUser, getCurrentProfileAction }
  )(AuthComponent);
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default withAuth;
