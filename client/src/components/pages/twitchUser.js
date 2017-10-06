import React from "react";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";

//let login_name = this.state.twitchName;



const Card = props => (
  <div>
  <h1>
    <strong>Title:</strong> {props.title}
  </h1>
      <iframe
    	src= {props.videos}
    	height="300"
    	width="400"
    	frameborder="0"
    	allowfullscreen="true">
	   </iframe>
  </div>
);

export default Card;
