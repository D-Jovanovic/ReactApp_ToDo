import React from "react";
import { v4 } from "uuid";

const Form = (props) => {

  const inputChangeHandler = (event) => {
      props.setInput(event.target.value);
  };

  const formSubmit = (event) => {
      event.preventDefault();
      props.setTodo([...props.todo, {id: v4(), title: props.input}]);
      props.setInput("");
  }

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Add..."
        className="#"
        value={props.input}
        required
        onChange={inputChangeHandler}
      />
      <button className="#" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
