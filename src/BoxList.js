import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm';
import Box from './Box'

const BoxList = () => {
  const INITIAL_STATE = [
    {id: uuid(), width:"", height:"", color:""}
  ]

  const [boxes, setBoxes] = useState(INITIAL_STATE)

  const addBox = (width, height, color) => {
    setBoxes(data => ([
      ...data,
      { width, height, color, id: uuid()}
    ]))
  }

  return (
    <>
      <NewBoxForm addBox={addBox} />
      <div className="container">
        {boxes.map(box => <Box key={box.id} width={box.width} height={box.height} color={box.color} />)}
      </div>
    </>
    
  )
}

export default BoxList;