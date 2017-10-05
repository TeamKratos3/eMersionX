import React from "react";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Form} from "Form";

//let login_name = this.state.twitchName;



const Card = props => (
  <div>
      <iframe
    	src= {"http://player.twitch.tv/?channel=" + this.state.twitchName}
    	height="300"
    	width="400"
    	frameborder="0"
    	scrolling="no"
    	allowfullscreen="false">
	   </iframe>
  </div>
);

export default Card;

