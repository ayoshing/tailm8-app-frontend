import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../redux/actions/authActions";

const withAuth = WrappedComponent => {
  class AuthComponent extends Component {
    componentDidMount() {
      if (localStorage.jwt && !this.props.auth.isAuthenticated) {
        this.props.getCurrentUser();
      }
    }

    render() {
      if (localStorage.jwt && this.props.auth.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else if (localStorage.jwt && this.props.profile.loading) {
        return <div>LOADING</div>;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }

  return connect(
    mapStateToProps,
    { getCurrentUser }
  )(AuthComponent);
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default withAuth;
