import React, {Component} from 'react';
import "./Soda.css";
import {NavLink, Route} from "react-router-dom";
import Home from "./Home";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <h1>Soda Component</h1>
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

export default Soda;