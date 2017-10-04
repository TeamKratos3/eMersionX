import React from "react";
import Button from 'react-bootstrap/lib/Button';
import API from "../../utils/twitchAPI";
const About = () =>
  <div>
    <div className="jumbotron">
      <h1>Welcome, Garrett!</h1>
      <p>Gaming is Life!</p>
      <p>
      <Button bsStyle="success">Message</Button>
        <Button bsStyle="info">Add</Button>
      </p>
    </div>

    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
      gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
      Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
      fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
      euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
  </div>;

export default About;
