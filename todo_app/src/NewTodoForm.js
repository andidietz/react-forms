import React, {useState} from 'react'

const NewTodoForm = ({addTodo}) => {
  // Leaving room to expand form inputs (...priority, due dates, etc)
  const INITIAL_STATE = {
    title: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo({...formData})
    setFormData(INITIAL_STATE)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Todo:</label>
        <input 
          id="title"
          name="title"
          placeholder="title"
          type="text"
          value={formData.title}
          onChange={handleChange}>
        </input>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodoForm