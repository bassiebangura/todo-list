import React from "react";
import "./TodoListItem";
import TodoListItem from "./TodoListItem";
import todosData from "../todosData";
console.log(todosData)

let tasks = todosData.map(item => <TodoListItem key={item.id} text={item.text}/>)
function App() {

  return (
    <div className='todoList'>
      {tasks}
    </div>
  );
}

export default App;
