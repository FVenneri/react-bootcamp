import React, {Component} from "react";
import bernese from './bernese.jpg';
import './Dog.css';

class Dog extends Component {
  render() {
    return (
      <div className='Dog'>
        <h1>DOG!</h1>
        <img className="Dog-img" src={bernese}/>
      </div>
    )
  }
}
export default Dog