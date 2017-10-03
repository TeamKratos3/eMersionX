import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Overview</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/about">Videos</Link>
    </li>
    <li className={window.location.pathname === "/blog" ? "active" : ""}>
      <Link to="/blog">Images</Link>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/contact">Games</Link>
    </li>
    <li
      className={window.location.pathname === "/contact/learn" ? "active" : ""}
    >
      <Link to="/contact/learn">About</Link>
    </li>
    <li className={window.location.pathname === "/form" ? "active" : ""}>
      <Link to="/form">Sign Up</Link>
    </li>
    <li className={window.location.pathname === "/login" ? "active" : ""}>
      <Link to="/login">Login</Link>
    </li>
  </ul>;

export default Navpills;
