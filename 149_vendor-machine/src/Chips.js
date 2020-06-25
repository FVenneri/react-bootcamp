import React, {Component} from 'react';
import "./Chips.css";
import {NavLink, Route} from "react-router-dom";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Home from "./Home";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Chips Component</h1>
        <div>
          <Route exact path="/" render={() => <Home />}/>
        </div>
        <div>
          <NavLink exact to="/">Home</NavLink>
        </div>
      </div>
    );
  }
}

export default Chips;