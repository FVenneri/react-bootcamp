import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map(() => 1),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      ruleDescriptions: {
        ones: "Score 1 for every 1",
        twos: "Score 2 for every 2",
        threes: "Score 3 for every 3",
        fours: "Score 4 for every 4",
        fives: "Score 5 for every 5",
        sixes: "Score 6 for every 6",
        threeOfKind: "If 3+ of one value, score sum of all dice (otherwise, score 0)",
        fourOfKind: "If 4+ of one value, score sum of all dice (else 0)",
        fullHouse: "If 3 of one value and 2 of another, score 25 (else 0)",
        smallStraight: "If 4+ values in a row, score 30 (else 0)",
        largeStraight: "If 5 values in a row, score 40 (else 0)",
        yahtzee: "If all values match, score 50 (else 0)",
        chance: "Score sum of all dice"
      }
    };
    this.animateRoll = this.animateRoll.bind(this);
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.displayRollInfo = this.displayRollInfo.bind(this);
  }

  componentDidMount() {
    this.animateRoll();
  }

  animateRoll() {
    this.setState({rolling: true},
      () => { setTimeout(this.roll, 1000); }
    );
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft===0 || this.state.rolling)
      return;

    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.animateRoll();
  }

  displayRollInfo() {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round",
    ];
    return messages[this.state.rollsLeft];
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              disabled={this.state.rollsLeft===0}
              rolling={this.state.rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x) || this.state.rolling}
                onClick={this.animateRoll}
              >
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} descriptions={this.state.ruleDescriptions}/>
      </div>
    );
  }
}

export default Game;
