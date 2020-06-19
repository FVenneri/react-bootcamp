import React, {Component} from 'react';
import './TodoList.css';
import './fontawesome-free-5.13.0-web/css/all.min.css';
import Todo from "./Todo";
import uuid from 'uuid/v4';
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  removeTodo(item) {
    this.setState(curr => ({
      todos: curr.todos.filter(function(e, index, arr){ return e.id != item})
    }));
  }

  addTodo(item) {
    const uuid1 = uuid();
    let newItem = {...item, id: uuid1, key:uuid1}
    this.setState(curr => ({
      todos: [...curr.todos, newItem]
    }));
  }

  editTodo(id, text) {
    let todos = this.state.todos;
    todos.map(t => {
      if (t.id === id) {
        t.text = text;
      }
    });

    this.setState(curr => ({
      todos: todos
    }));
  }

  toggleCompleted(id) {
    console.log(id)

    let todos = this.state.todos;
    todos.map(t => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
    });
    this.setState(curr => ({
      todos: todos
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>My TODO list<span>A simple React Todo List</span></h1>
        <ul>
          { this.state.todos.map(t =>
              <Todo key={t.key} id={t.id} text={t.text} completed={t.completed}
                    removeTodo={this.removeTodo} editTodo={this.editTodo} toggleCompleted={this.toggleCompleted}/>
            )
          }
        </ul>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default TodoList;