import React from 'react'
import { Link } from 'react-router-dom'
import BoardBox from './BoardBox'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true
    }
  }

  render() {
    return(
      <div>
        <BoardBox/>
      </div>
    )
  }
}

export default Board