import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm';
import Box from './Box'
import './BoxList.css'

const BoxList = () => {
  const INITIAL_STATE = [
    {id: uuid(), width:"", height:"", color:""}
  ]

  const [boxes, setBoxes] = useState(INITIAL_STATE)

  const addBox = (width, height, color) => {
    setBoxes(boxes => ([
      ...boxes,
      { width, height, color, id: uuid()}
    ]))
  }

  return (
    <>
      <h2>Create Colorful Boxes</h2>
      <NewBoxForm addBox={addBox} />
      <div className="container">
        {boxes.map(box => <Box key={box.id} width={box.width} height={box.height} color={box.color} />)}
      </div>
    </>
    
  )
}

export default BoxList;