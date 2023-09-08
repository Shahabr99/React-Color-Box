import React from 'react';

const Box = ({width, height, color}) => {

  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color}`
  }

  return (
    <>
      <div className="box" style={boxStyle} ></div>
    </>
  )
}

export default Box;