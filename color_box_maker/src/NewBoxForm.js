import React, {useState} from 'react'

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
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
    addBox({...formData})
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        name="color"
        placeholder="color"
        type="text"
        value={formData.color}
        onChange={handleChange}>
      </input>

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        placeholder="width"
        type="text"
        value={formData.width}
        onChange={handleChange}>
      </input>
      
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        placeholder="height"
        type="text"
        value={formData.height}
        onChange={handleChange}>
      </input>
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm