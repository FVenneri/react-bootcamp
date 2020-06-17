import React, {Component} from 'react';
import "./ColorBox.css";
import {choice} from "./helpers.js";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors)
    }
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    const newColor = choice(this.props.colors);
    if (newColor!==this.state.color) {
      this.setState(curr => ({
        color: newColor
      }))
    }
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    return (
      <div className="ColorBox" onClick={this.handleClick} style={{"backgroundColor": choice(this.props.colors)}} />
    );
  }
}

export default ColorBox;