import React from 'react'

const Todo = ({title, id, removeTodo}) => {
  const handleRemove = () => removeTodo(id)
  
  return (
    <>
      <div>
        <p>{title}</p>
        <button onClick={handleRemove}>X</button>
      </div>
    </>
  )
}

export default Todo