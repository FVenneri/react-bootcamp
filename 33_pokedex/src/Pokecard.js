import React, {Component} from "react";
import './Pokecard.css';

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThee = (number) => number.toString().padStart(3, '0').slice(-3);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${(padToThee(this.props.id))}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokedex-image">
          <img src={imgSrc} alt={this.props.name}/>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;