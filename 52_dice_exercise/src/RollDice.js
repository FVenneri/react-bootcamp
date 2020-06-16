import React, {Component} from 'react';
import Die from "./Die";
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    faces : ["one", "two", "three", "four", "five", "six"]
  }

  constructor(props) {
    super(props);
    this.state = {
      face1: this.props.faces[0],
      face2: this.props.faces[0],
      isRolling: false
    }
    this.roll = this.roll.bind(this);
  }

  getRandomFace() {
    return this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
  }

  roll() {
    this.setState({isRolling: true})
    setTimeout(() => {
      this.setState({
        face1: this.getRandomFace(),
        face2: this.getRandomFace()
      });
      this.setState({isRolling: false});
    },1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.face1} rolling={this.state.isRolling} />
          <Die face={this.state.face2} rolling={this.state.isRolling} />
        </div>
        <div>
          <button onClick={this.roll} disabled={this.state.isRolling}>
            {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;