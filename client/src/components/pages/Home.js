
import React, { Component } from "react";
import API from "../../utils/steamAPI";
import Card from "./Profile";
import Games from "./recentGames";
import Nav from "../Navprofile";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]
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

    render() {
      return (
        <div>
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
