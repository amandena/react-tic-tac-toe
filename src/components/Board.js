import React from 'react'
import { Link } from 'react-router-dom'
import BoardBox from './BoardBox'
import * as utils from '../utils/helperFunctions'


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
      <div className='board-wrapper'>
        <div className='board'>
          <div className='board-row'>
            <BoardBox value={this.state.boxes[0]}/>
            <BoardBox value={this.state.boxes[1]}/>
            <BoardBox value={this.state.boxes[2]}/>
          </div>

          <div className='board-row'>
            <BoardBox value={this.state.boxes[3]}/>
            <BoardBox value={this.state.boxes[4]}/>
            <BoardBox value={this.state.boxes[5]}/>
          </div>

          <div className='board-row'>
            <BoardBox value={this.state.boxes[6]}/>
            <BoardBox value={this.state.boxes[7]}/>
            <BoardBox value={this.state.boxes[8]}/>
          </div>
        </div>
      
        
      </div>
    )
  }
}

export default Board