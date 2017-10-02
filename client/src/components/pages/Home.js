import React from "react";
import Button from 'react-bootstrap/lib/Button';


const Home = () => (
  <div className="main-container">
    <h1 className="coolHeader">eMersionX</h1>
    <div className="jumbotron">
      <h1>Welcome, Garrett!</h1>
      <p>Gaming is Life!</p>
      <p>
        <Button bsStyle="success">Message</Button>
        <Button bsStyle="info">Add</Button>
      </p>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Player Summary</h3>
      </div>
      <div className="panel-body">
      I am a computer programmer who loves to play video games. You will find me mostly playing PUBG and League on steam,
      but I also love to play Nintendo Games on the Nintendo Switch. PS. The Legend of Zelda Ocarina of Time is the GOAT.
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">Panel content</div>
    </div>
  </div>
);

export default Home;
