import React from "react";

function ToDoList(props) {
  const deleteHandler = ({ id }) => {
    props.setTodo(props.todo.filter((item) => item.id !== id));
  };

  return (
    <div>
      {props.todo.map((item) => (
        <li key={item.id}>
          <input
            type="text"
            value={item.title}
            onChange={(event) => event.preventDefault()}
          />
          <button onClick={() => deleteHandler(item)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default ToDoList;
