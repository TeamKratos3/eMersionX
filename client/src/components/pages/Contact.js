import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import Button from 'react-bootstrap/lib/Button';
const Contact = props =>
  <div>
    <h1>Contact Page</h1>
    <div className="jumbotron">
      <h1>Welcome, Garrett!</h1>
      <p>Gaming is Life!</p>
      <p>
      <Button bsStyle="success">Message</Button>
        <Button bsStyle="info">Add</Button>
      </p>
    </div>
    <p>
      My Xbox Gamer Tag is pugluverg!

      Add me as a friend!
    </p>
    <Link to={`${props.match.url}/learn`} className="btn btn-default">
      Add Garrett
    </Link>{" "}
    <Link to="/contact" className="btn btn-default">
      Message Garrett
    </Link>
    <Route exact path={`${props.match.url}/learn`} component={Learn} />
  </div>;

export default Contact;
