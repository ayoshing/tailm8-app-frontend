import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoginForm from "../components/LoginForm";
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
