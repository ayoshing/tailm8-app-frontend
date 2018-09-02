import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

// default home and logged in home
const Home = props => {
  return (
    <Fragment>
      <div>Welcome to Tailm8!</div>
      <div>
        <button>
          <Link to={"/login"}>Login</Link>
        </button>
        <button>
          <Link to={"/signup"}>Signup</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Home;
