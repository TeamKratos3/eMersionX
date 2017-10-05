import React from "react";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Card = props => (
  <div>
        <h2>
          <strong>Recent Game Played:</strong> {props.name}
        </h2>
        <h3>
          <strong>Play Time:</strong> {props.hours} Minutes Played
        </h3>
  </div>
);

export default Card;
