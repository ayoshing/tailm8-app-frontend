import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={"/login"} component={LoginForm} />
        <Route exact path={"/signup"} component={SignUpForm} />
        <Route exact path={"/"} component={Home} />
      </div>
    );
  }
}

export default App;
