import React from "react";
import { Link } from "react-router-dom";

const Navprofile = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/app" ? "active" : ""}>
      <Link to="/app">Home</Link>
    </li>
    <li className={window.location.pathname === "/friends" ? "active" : ""}>
      <Link to="/friends">Home</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Logout</Link>
    </li>
  </ul>;

export default Navprofile;
