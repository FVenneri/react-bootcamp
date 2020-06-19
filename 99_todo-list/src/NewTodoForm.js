import React, {Component} from 'react';
import './NewTodoForm.css';
import './fontawesome-free-5.13.0-web/css/all.min.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({text: ""});
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <h2>New Todo</h2>
          <input type="text" value={this.state.text} placeholder="Write your todo here" name="text"
                 onChange={this.handleChange}/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;