import React, {Component} from 'react';
import "./VendingMachine.css";
import Home from "./Home";
import {NavLink, Route, Switch} from "react-router-dom";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";
import Navbar from "./Navbar";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Navbar/>

        <Switch>
          <Route exact path="/" render={() => <Home/>}/>
          <Route exact path="/sardines" render={() => <Sardines/>}/>
          <Route exact path="/chips" render={() => <Chips/>}/>
          <Route exact path="/soda" render={() => <Soda/>}/>
        </Switch>
      </div>
    );
  }
}

export default VendingMachine;