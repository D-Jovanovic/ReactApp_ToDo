import React from 'react'

function FilterSearch({filter, setFilter}) {

  const filterChangeHandler = event => {
    setFilter(event.target.value)
  }
  
  return (
    <input 
          type="text"
          placeholder="Search for item"
          value={filter}
          onChange={filterChangeHandler}/>
  )
}

export default FilterSearch;