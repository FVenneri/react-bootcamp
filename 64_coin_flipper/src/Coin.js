import React, {Component} from 'react';
import './Coin.css'

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.coin.imageSrc} alt={this.props.coin.side}/>
      </div>
    );
  }
}

export default Coin;