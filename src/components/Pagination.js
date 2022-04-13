import React from "react";
import { v4 } from "uuid";

import "./Pagination.css"

function Pagination({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage,
  todo,
  setToDo,
}) {
  const pages = [];
  for (let i = 1; i < Math.ceil(todo.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenItems = todo.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currenItems);
  

  const pageNumbers = pages.map((num) => {
    return <li key={num}>{num}</li>;
  });

  return (
    <>
      <ul className="pageNumbers">{pageNumbers}</ul>
      
    </>
  );
}

export default Pagination;
