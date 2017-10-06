
import React, { Component } from "react";
import API from "../../utils/steamAPI";
import Card from "./Friends";
import Nav from "../Navprofile";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]
console.log(queryInput);

class Results extends Component {

  state = {
    skills: []
  };

  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate() {
    if(!this.state.skills){
        this.loadResults();
    }
    }

  loadResults = () => {
    API.friends(queryInput)
    .then(res => {
      for(let i = 0; i < res.data.friendslist.friends.length; i++){
        API.profile(res.data.friendslist.friends[i].steamid)
        .then(res => {
          let joined = this.state.skills.concat(res.data.response.players);
          this.setState({skills: joined})
          console.log(this.state.skills);
        })
        .catch(err => console.log(err));
      }
    })
  };

  windowLocationHome = () => {
    window.location.href = "/app#" + queryInput;
  };

  windowLocationFriends = () => {
    window.location.href = "/friends#" + queryInput;
  };

  windowLocationTwitch = () => {
    window.location.href = "/twitch#" + queryInput;
  };

    render() {
      return (
        <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Ghostly</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={this.windowLocationHome}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.windowLocationFriends}>Friends</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.windowLocationTwitch}>Twitch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
        <Grid>
          <Row>
              {this.state.skills ? (
                <div>
                {this.state.skills.map(result => (
                  <Col xs={12} md={12} lg={12}>

                  <Card
                    photo={result.avatarfull}
                    name={result.personaname}
                    country={result.loccountrycode}
                    state={result.locstatecode}
                    url = {result.profileurl}
                  />
                </Col>
                  ))}
                </div>
            ) : (
              <h3>No information Available!</h3>
            )}
          </Row>
        </Grid>
        </div>
    );
  }
}


export default Results;
