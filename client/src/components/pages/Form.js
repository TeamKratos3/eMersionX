import React, { Component } from "react";
import API from "../../utils/monogoAPI";

class Form extends Component {
  // Setting the component's initial state
  state = {
    FullName: "",
    username: "",
    password: "",
    steamId: "",
    twitchName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.FullName || !this.state.username || !this.state.password || !this.state.steamId) {
      alert("Fill out all fields!");
    }

    else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      )}

    else {
    // } else {
    //   alert(`Hello ${this.state.firstName} ${this.state.lastName}
    //     \nYour Location: ${this.state.city}, ${this.state.state}
    //     \nYour Email: ${this.state.email}
    //     \nYour password: ${this.state.password}
    //     \nYour photo: ${this.state.photo}
    //     \nYour About Me: ${this.state.aboutMe}
    //     \nYour Skill: ${this.state.skill}`);

     API.saveUser({
        fullname: this.state.FullName,
        username: this.state.username,
        password: this.state.password,
        steamid: this.state.steamId,
        twitchname: this.state.twitchName
      })
      .then(res => console.log(res))
        .catch(err => console.log(err));

    window.location.href = "/login";
  }
};

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <div className ="panel">
        <div className="row">
          <div className="col-lg-3"></div>

          <div className="col-lg-6">

               <form className="form">
                <label htmlFor="FullName">Full Name:</label>
                <input
                  className="form-control"
                  value={this.state.FullName}
                  name="FullName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Full Name"
                />
                <label htmlFor="username">Email:</label>
                <input
                  className="form-control"
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Username"
                />
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="steamId">Steam ID:</label>
                <input
                  className="form-control"
                  value={this.state.steamId}
                  name="steamId"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Steam ID"
                />
                <label htmlFor="twitchName">Twitch Username:</label>
                <input
                  className="form-control"
                  value={this.state.twitchName}
                  name="twitchName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Twitch Name"
                />
                <button
                  className="btn btn-primary btn-md"
                  onClick={this.handleFormSubmit}>Submit</button>
              </form>

          <div className="col-lg-3"></div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Form;
