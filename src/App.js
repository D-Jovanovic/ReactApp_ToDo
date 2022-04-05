import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputValue, setInputValue] =
    useState(""); /*pratis vrednost unesenu u input*/
  const [todo, setTodo] = useState([]); /*pratis todo iteme*/

  return (
    <div className="holder">
      <div className="toDo">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={inputValue}
            setInput={setInputValue}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
        <div>
          <ToDoList todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
