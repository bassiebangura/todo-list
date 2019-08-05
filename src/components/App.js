import React, {Component} from "react";
import "./TodoListItem";
import TodoListItem from "./TodoListItem";
import todosData from "../todosData";
console.log(todosData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: todosData.map(item => (
        <TodoListItem key={item.id} text={item.text} />
      ))
    };
  }
  render() {
    return (
      <div className="todoList">
        {this.state.tasks} {/*using es6 spread*/}
      </div>
    );
  }
}

export default App;
