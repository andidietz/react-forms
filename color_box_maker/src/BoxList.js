import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
  const INITIAL_STATE = []
  const [boxes, setBoxes] = useState(INITIAL_STATE)
  const addBox = newBox => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
  }

  const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }

  const boxComponents = boxes.map( box => {
    const {color, width, height, id} = box
    return (
      <Box 
        key={id}
        id={id}
        color={color} 
        width={width} 
        height={height} 
        removeBox={removeBox}
      />
    )
  })

	return (
		<>
			<NewBoxForm addBox={addBox}/>
      {boxComponents}
		</>
	)
}

export default BoxList