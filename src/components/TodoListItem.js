import React from "react";


function TodoListItem({id, text, completed, handleChange}) {
    let completedStyle = {
        fontStyle: 'italic',
        textDecoration: 'line-through'
        
    }
  return (
    <div className="todoList__item">
      <input type="checkbox" checked={completed} onChange={() => handleChange(id)}/>
      <p  style={completed ? completedStyle : null}>{text}</p>
    </div>
  );
}


export default TodoListItem;
