import React, {Component} from 'react';
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
    const dogs = this.props.dogs;

    const dogLinks = dogs.map(d => (
      <li className="nav-item" key={`${d.name}`}>
        <NavLink exact className="nav-link" activeClassName="active"
                 to={`/dogs/${d.name.toLowerCase()}`}>
          {d.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">Dog Finder</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" key="HOME">
              <NavLink exact className="nav-link" activeClassName="active" to="/dogs">Home</NavLink>
            </li>
            {dogLinks}
          </ul>
          {/*<form className="form-inline my-2 my-lg-0">*/}
          {/*  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
          {/*    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
          {/*</form>*/}
        </div>
      </nav>
    );
  }
}

export default Navbar;