import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-container">
          <h1>Home Component</h1>

          <div>
            <Switch>
              <Route exact path="/sardines" component={Sardines}/>
              <Route exact path="/chips" component={Chips}/>
              <Route exact path="/soda" component={Soda}/>
            </Switch>
          </div>
          <div className="Home-snacks">
            <NavLink exact to="/sardines">Sardines</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;