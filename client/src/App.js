import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Form from "./components/pages/Form";
// import HelloBootstrap from "./components/HelloBootstrap";
import "./styles/Style.css";

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Login} />
      <Route exact path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/app" component={Home} />
      <Route path="/form" component={Form} />
      {/* <HelloBootstrap /> */}
    </div>
  </Router>;

export default App;
