import React from 'react'

function FilterSearch({filter, setFilter}) {

  const filterChangeHandler = event => {
    setFilter(event.target.value)
  }

  console.log("nesto", filter);
  
  return (
    <input 
          type="text"
          placeholder="Search for item"
          value={filter}
          onChange={filterChangeHandler}/>
  )
}

export default FilterSearch;