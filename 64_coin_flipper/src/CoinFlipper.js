import React, {Component} from 'react';
import Coin from "./Coin";
import {choice} from "./helpers";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {side: "heads", imageSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: "tails", imageSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      headsCounter: 0,
      tailsCounter: 0,
      coin: null
    }
    this.flip = this.flip.bind(this);
  }

  flip() {
    const randCoin = choice(this.props.coins);

    this.setState(curr => {
      return {
        headsCounter: curr.headsCounter + ((randCoin.side === "heads") ? 1 : 0),
        tailsCounter: curr.tailsCounter + ((randCoin.side === "tails") ? 1 : 0),
        coin: randCoin
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>
        <div>
          {this.state.coin && <Coin coin={this.state.coin} />}
        </div>
        <button onClick={this.flip}>Flip here</button>
        <p>Out of {this.state.headsCounter + this.state.tailsCounter} flips, there have
          been {this.state.headsCounter} heads and {this.state.tailsCounter} tails</p>
      </div>
    );
  }
}

export default CoinFlipper;