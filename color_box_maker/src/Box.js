import React from 'react'

const Box = ({id, color, width, height, removeBox}) => {
  const handleRemove = () => removeBox(id)

  return (
    <>
      <div style={{
        backgroundColor: `${color}`, 
        height:`${height}em`, 
        width:`${width}em`
        }}
      >  
      </div>
      <button onClick={handleRemove}>X</button>
    </>
  )
}

export default Box