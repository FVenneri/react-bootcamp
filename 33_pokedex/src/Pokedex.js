import React, {Component} from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let pokecards = this.props.pokemon.map((p) => (
      <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
    ));

    let title = this.props.isWinner
      ? <h1 className='Pokedex-winner Pokedex-title'>Winning Hand</h1>
      : <h1 className='Pokedex-loser Pokedex-title'>Losing Hand</h1>;

    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {pokecards}
        </div>
      </div>
    )
  }
}

export default Pokedex;