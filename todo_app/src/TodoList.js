import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = newTodo => {
    setTodos(todos => [...todos, {...newTodo, id: uuid()}])
  }

  const removeTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const todoComponents =  todos.map(({title, id}) => 
    <Todo 
      key={id} 
      title={title} 
      id={id} 
      removeTodo={removeTodo}
    />)

  return (
    <>
      <h1>Your Todo Station</h1>
      <NewTodoForm addTodo={addTodo}/>
      {todoComponents}
    </>
  )
}

export default TodoList