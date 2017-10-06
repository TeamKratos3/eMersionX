import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Form from "./components/pages/Form";
import Friends from "./components/pages/FriendPage"
import Twitch from "./components/pages/twitchStream";
// import HelloBootstrap from "./components/HelloBootstrap";
import "./styles/Style.css";

const App = () =>
  <Router>
    <div>
    <Navpills />
      <Route exact path="/" component={Login} />
      <Route exact path="/about" component={About} />
      <Route path="/app" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/friends" component={Friends} />
      <Route path="/twitch" component={Twitch} />
      {/* <HelloBootstrap /> */}
    </div>
  </Router>;

export default App;
