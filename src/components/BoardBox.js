import React from 'react'

const BoardBox = (props) => {
  return(
  <button className='board-box'>
    {props.value}
  </button>
  )
}

export default BoardBox