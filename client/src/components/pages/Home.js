
import React, { Component } from "react";
import API from "../../utils/steamAPI";
import Card from "./Profile";
import Games from "./recentGames";
import Nav from "../Navprofile";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1];
console.log(queryInput);

class Results extends Component {

  state = {
    skills: [],
    games: []
  };

  componentDidMount() {
    this.loadResults();
    this.loadGames();
  }

  componentDidUpdate() {
    if(!this.state.skills){
        this.loadResults();
        this.loadGames();
    }
    }

  loadGames = () => {
    API.recent(queryInput)
      .then(res => {
        this.setState({games: res.data.response.games})
        console.log(this.state.games);
      })
      .catch(err => console.log(err));
  };

  loadResults = () => {
    API.profile(queryInput)
    .then(res => {
      this.setState({skills: res.data.response.players[0]})
      console.log(this.state.skills);
    })
    .catch(err => console.log(err));
  };

  windowLocationHome = () => {
    window.location.href = "/app#" + queryInput;
  };

  windowLocationFriends = () => {
    window.location.href = "/friends#" + queryInput;
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
              <a className="nav-link" href="/">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
        <Grid>
          <Row>
              {this.state.skills.avatar ? (
                <div>
                  <Col xs={12} md={12} lg={12}>

                  <Card
                    photo={this.state.skills.avatarfull}
                    name={this.state.skills.personaname}
                    country={this.state.skills.loccountrycode}
                    state={this.state.skills.locstatecode}
                  />
                </Col>
                </div>
            ) : (
              <h3>No information Available!</h3>
            )}
          </Row>
          <Row>
          {this.state.games.map(result => (
          <Col xs={12} md={12} lg={12}>
          <Games
            name={result.name}
            hours={result.playtime_forever}
          />
          </Col>
          ))}
        </Row>
        </Grid>
        </div>
    );
  }
}


export default Results;
