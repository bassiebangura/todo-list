import React from "react";


function TodoListItem({text}) {
  return (
    <div className="todoList__item">
      <input type="checkbox" />
      <p>{text}</p>
    </div>
  );
}


export default TodoListItem;
