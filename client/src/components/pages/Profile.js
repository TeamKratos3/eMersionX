import React from "react";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Card = props => (
  <div>
      <Thumbnail src={props.photo} alt="User Photo" />
        <h1>
          <strong>Name:</strong> {props.name}
        </h1>
        <h3>
          <strong>Location:</strong> {props.country}, {props.state}
        </h3>
  </div>
);

export default Card;
