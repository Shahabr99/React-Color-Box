import React from 'react';
import './Box';

const Box = ({width, height, color}) => {

  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color}`
  }

  return (
      <div className="box" style={boxStyle} >{color}</div>
  )
}

export default Box;