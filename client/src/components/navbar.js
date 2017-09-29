import React from "react";

const Nav = props =>
<nav className="navbar navbar-inverse navbar-fixed-top">
<div className="container-fluid navbar-custom">
  <div className="row">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <div className="col-xs-12 phone-nav">
        <a className="navbar-brand" href="#" id="logo">eMersionX</a>
      </div>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="navbar-nav navbar-right navbar-right-custom">
    <li><a href="/"data-toggle="modal" data-target="#signInModal">Logout</a></li>
    </ul>
    </div>
    </div>
    </div>
  </nav>
