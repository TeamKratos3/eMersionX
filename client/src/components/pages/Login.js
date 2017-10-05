import React, { Component } from "react";
import API from "../../utils/monogoAPI";
import Navpills from "../Navpills";

class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {

    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    API.signIn(this.state.username)
      .then(res => {
        console.log(res.data)
        if(this.state.username===res.data[0].username && this.state.password===res.data[0].password)
          {
            window.location.href = "/app#" + res.data[0].steamid
          }
        else if (this.state.username!==res.data[0].username || this.state.password!==res.data[0].password)
          {
            alert("Your email or password is invalid")
          }
        })

    if (!this.state.username || !this.state.password) {
      alert("Please fill out all fields");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password`
      );
    } else {

      this.setState({
        username: this.state.username,
        password: this.state.password
      });
    }

  };



  render() {

    return (
      <div className="container">
        <div className ="panel">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h1>
              Log-In!
            </h1>
            <form className="form">
              <label htmlFor="username">Username:</label>
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
              <button className="btn btn-primary btn-md" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
