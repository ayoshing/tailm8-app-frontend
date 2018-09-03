import React, { Component } from "react";

export default class extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <form>
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
      </form>
    );
  }
}
