import React, { Component } from "react";
import UserAdapter from "../apis/UserAdapter";
import Dashboard from "../components/Dashboard";
import LandingPage from "./LandingPage";

export default class extends Component {
  render() {
    return (
      <div>{UserAdapter.isLoggedIn() ? <Dashboard /> : <LandingPage />}</div>
    );
  }
}
