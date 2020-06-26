import React, {Component} from 'react';
import "./Sardines.css";
import {NavLink, Route} from "react-router-dom";
import Home from "./Home";

class Sardines extends Component {
  render() {
    return (
      <div className="Sardines">
        <h1>Sardines Component</h1>
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

export default Sardines;