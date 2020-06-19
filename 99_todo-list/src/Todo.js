import React, {Component} from 'react';
import './Todo.css';
import './fontawesome-free-5.13.0-web/css/all.min.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      edit: false
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOnText = this.handleClickOnText.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleDeleteClick() {
    this.props.removeTodo(this.props.id);
  }

  handleEditClick() {
    this.toggleForm()
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTodo(this.state.id, this.state.text);
    this.toggleForm();
  }

  toggleForm() {
    this.setState({edit: !this.state.edit});
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({text: evt.target.value})
  }

  handleClickOnText(evt) {
    this.props.toggleCompleted(this.props.id);
  }

  render() {
    if  (!this.state.edit) {
      return (
        <div className="Todo">
          <li key={this.props.key} className={this.props.completed ? 'Todo-item Todo-completed' : 'Todo-item'}
              onClick={this.handleClickOnText} >
            {this.props.text}
          </li>
          <div>
            <button onClick={this.handleEditClick}>Edit</button>
            <button onClick={this.handleDeleteClick}>Delete</button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="Todo">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
            <button>Confirm</button>
          </form>
        </div>
      );
    }
  }
}

export default Todo;