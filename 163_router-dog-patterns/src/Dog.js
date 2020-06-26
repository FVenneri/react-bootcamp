import React, {Component} from 'react';
import "./Dog.css";
import {Link} from "react-router-dom";

class Dog extends Component {
  render() {
    const {name, facts, age, src} = this.props.dog;

    return (
      <div className="Dog row justify-content-center">
        <div className="col-10 col-lg-5">
          <div className="Dog-card card">
            <img src={src} alt={name}/>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h4 className="card-subtitle text-muted">{age} years old</h4>

            </div>
            <ul className="list-group list-group-flush">
              {facts.map(f => <li className="list-group-item" key={f}>{f}</li>)}
            </ul>
            <div className="card-body">
              <Link className="btn btn-info" to="/dogs">Go back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;