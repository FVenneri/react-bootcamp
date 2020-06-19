import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeBox(this.props);
  }

  render() {
    const style = {
      backgroundColor: this.props.color,
      height: `${this.props.height}em`,
      width: `${this.props.width}em`
    }
    return (
      <div>
        <div key={this.props.key} style={style} />
        <button onClick={this.handleClick}>Remove me!</button>
      </div>
    );
  }
}

export default Box;