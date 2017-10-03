import React, { Component } from "react";
import API from "../../utils/monogoAPI";

class Form extends Component {
  // Setting the component's initial state
  state = {
    FullName: "",
    username: "",
    password: "",
    steamId: ""
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
    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.city || !this.state.state || !this.state.zipcode) {
      alert("Fill out your first and last name please!");
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

        FullName: this.state.firstName,
        username: this.state.username,
        password: this.state.password,
        steamId: this.state.steamId
      })
      .then(res => console.log(res))
        .catch(err => console.log(err));
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

              <form action="/api/users/create" method="POST" className="form">
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
                  name="email"
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
