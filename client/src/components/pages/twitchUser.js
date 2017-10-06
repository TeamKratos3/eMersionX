import React from "react";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";

//let login_name = this.state.twitchName;



const Card = props => (
  <div>
  <Thumbnail src={props.image} alt="User Photo" />
  <h1>
    <strong>Title:</strong> {props.title}
  </h1>
  <h3>
    <strong>Videos Url:</strong> {props.videos}
  </h3>
  </div>
);

export default Card;
