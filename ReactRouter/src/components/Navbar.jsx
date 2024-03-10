import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <NavLink
        className={(e) => {
          return e.isActive ? "red" : "";
        }}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;
