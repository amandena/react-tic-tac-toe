import React from 'react'

const BoardBox = (props) => {
  return(
  <button className='board-box' onClick={props.handleBoxClick}>
    {props.value}
  </button>
  )
}

export default BoardBox