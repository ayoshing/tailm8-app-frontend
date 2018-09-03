import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

// default home and logged in home
const Home = props => {
  return (
    <Fragment>
      <div>Welcome to Tailm8! Where Pets Stay in Touch</div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
