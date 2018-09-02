import React from "react";
import { Link } from "react-router-dom";

// default navbar and logged in navbar
const Navbar = props => {
  return (
    <div>
      <button>
        <Link to={"/login"}>Login</Link>
      </button>
      <button>
        <Link to={"/signup"}>Signup</Link>
      </button>
    </div>
  );
};

export default Navbar;
