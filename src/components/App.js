import React, { Component } from "react";
import "./TodoListItem";
import TodoListItem from "./TodoListItem";
import todosData from "../todosData";
console.log(todosData);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      todos: todosData
    };
  }
  handleChange(id) {
    this.setState(prevState => {
      //modify the array in the todos property of the this.state object
      //console.log(prevState.todos)
      let updatedTodosData = prevState.todos.map(item => {
        console.log(item);
        if (item.id === id) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      });
      return { todos: updatedTodosData };
    });
  }
  render() {
    let todosItem = this.state.todos.map(item => (
      <TodoListItem
        key={item.id}
        id={item.id}
        text={item.text}
        completed={item.completed}
        handleChange={this.handleChange}
      />
    ));
    return (
      <div className="todoList">
        {todosItem} {/*using es6 spread*/}
      </div>
    );
  }
}

export default App;
