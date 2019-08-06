import React from "react";


function TodoListItem({id, text, completed, handleChange}) {
  return (
    <div className="todoList__item">
      <input type="checkbox" checked={completed} onChange={() => handleChange(id)}/>
      <p>{text}</p>
    </div>
  );
}


export default TodoListItem;
