import React, {Component} from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      height: "",
      width: "",
      color: ""
    });
  }

  render() {
    return (
      <div className="NewBoxForm">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="height" value={this.state.height} placeholder="height" onChange={this.handleChange}/>
          <input type="text" name="width" value={this.state.width} placeholder="width" onChange={this.handleChange}/>
          <input type="text" name="color" value={this.state.color} placeholder="color" onChange={this.handleChange}/>
          <button>Create box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;