import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      board: this.createBoard(),
      hasWon : false
    }

    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = Array.from({length: this.props.nrows});
    for (let i=0; i<this.props.nrows; i++) {
      board[i] = Array.from({length: this.props.ncols});
      for (let j=0; j<this.props.ncols; j++) {
        board[i][j] = Math.random() < this.props.chanceLightStartsOn;
      }
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y-1, x);
    flipCell(y+1, x);
    flipCell(y, x-1);
    flipCell(y, x+1);

    // let hasWon = board.flat().indexOf(true)<0;
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    let table = [];
    for (let i=0; i<this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j<this.props.ncols; j++) {
        const coord = `${i}-${j}`;
        row.push(<Cell key={coord} isLit={this.state.board[i][j]}
                       flipCellsAroundMe={() => this.flipCellsAround(coord)} />);
      }
      table.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div>
        { this.state.hasWon
          ? <div className="Board-title Board-winner">
              <span className="neon-orange">YOU</span>
              <span className="neon-blue ">WIN</span>
            </div>
          : <div>
              <div className="Board-title">
                <div className="neon-orange">Lights</div>
                <div className="neon-blue">Out</div>
              </div>
              <table className="Board"><tbody>{table}</tbody></table>
            </div>
        }
      </div>
    )
  }
}

export default Board;
