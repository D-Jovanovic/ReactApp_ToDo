import React from 'react'

function ToDoList(props) {
  return (
    <div>
        {props.todo.map((item) => (
            <li key={item.id}>
                
                <input type="text" value={item.title} onChange={(event) => event.preventDefault()} />
                

            </li>
        ))}
    </div>
  )
}

export default ToDoList;
