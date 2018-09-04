import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserAdapter from "../apis/UserAdapter";

export default function withAuth(WrappedComponent) {
  return class extends Component {
    render() {
      if (UserAdapter.isLoggedIn()) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  };
}
