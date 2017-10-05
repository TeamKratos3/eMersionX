
import React, { Component } from "react";
import API from "../../utils/steamAPI";
import Card from "./Profile";
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
    this.loadResults();
  }

  loadResults = () => {

    API.profile(queryInput)
    .then(res => this.setState({ skills: res.data }))
    .catch(err => console.log(err));
  };

    render() {
      return (
        <div>
        <Nav />
        <Grid>
          <Row>
              {this.state.skills.length ? (
                <div>
                {this.state.skills.map(result => (
                  <Col xs={12} md={10} lg={8}>

                  <Card
                    photo={result.avatarfull}
                    name={result.personaname}
                    country={result.loccountrycode}
                    state={result.locstatecode}
                  /></Col>
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
