import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Dog from "./Dog";
import "./Routes.css";
import DogList from "./DogList";

class Routes extends Component {
  render() {
    const dogs = this.props.dogs;

    const getDog = props => {
      const name = props.match.params.name;
      let currentDog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <Dog key={`DOG-${currentDog.name}`} dog={currentDog} {...props}/>
    }

    return (
      <Switch>
        <Route exact path="/dogs/:name" render={getDog} />
        <Route exact path='/dogs' render={() => <DogList dogs={dogs}/>} />
        <Redirect to="/dogs"/>
      </Switch>
    );
  }
}

export default Routes;