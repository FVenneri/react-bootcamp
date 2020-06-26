import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/sardines">Sardines</NavLink>
        <NavLink exact to="/chips">Chips</NavLink>
        <NavLink exact to="/soda">Soda</NavLink>
      </div>
    );
  }
}

export default Navbar;