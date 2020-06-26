import React, {Component} from 'react';

class StateClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
    this.random = this.random.bind(this);
  }

  random(e) {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({num: rand});
  }

  render() {
    let msg = (this.state.num!==7)
      ? <button onClick={this.random}>Generate random</button>
      : <p>You win!</p>
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {msg}
      </div>
    );
  }
}

export default StateClicker;