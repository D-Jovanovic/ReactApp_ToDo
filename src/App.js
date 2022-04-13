import React, { useState } from "react";
import { v4 } from "uuid";

import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import FilterSearch from "./components/FilterSearch";
import Pagination from "./components/Pagination";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([
    { id: v4(), title: "jabuka" },
    { id: v4(), title: "kruska" },
    { id: v4(), title: "banana" },
    { id: v4(), title: "sljiva" },
    { id: v4(), title: "pomorandza" },
    { id: v4(), title: "breskva" },
    { id: v4(), title: "kajsija" },
    { id: v4(), title: "orah" },
    { id: v4(), title: "badem" },
    { id: v4(), title: "avokado" },
    { id: v4(), title: "mandarina" },
  ]);

  const [filter, setFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

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
        <FilterSearch
          filter={filter}
          setFilter={setFilter}
          todo={todo}
          setTodo={setTodo}
        />
        <div>
          <ToDoList todo={todo} setTodo={setTodo} filter={filter} />
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
