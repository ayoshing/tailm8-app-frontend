import React, { Component } from "react";

export default class extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleSubmit = event => event.preventDefault;

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <label htmlFor="password2">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          id="password2"
          onChange={this.handleChange}
          value={this.state.password2}
        />
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}
