import React from 'react'
import { Link } from 'react-router-dom'
import BoardBox from './BoardBox'
import { Storage } from '../storage/storage'
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

  storage = new Storage()

  handleBoxClick = index => {
    // current state of boxes
    const boxes = this.state.boxes.slice()

    // current state of history
    let history = this.state.history 
    
    // stop if the game is won
    if(utils.findWinner(boxes) || boxes[index]) {
      return
    }

    // stop if all boxes filled
    if(utils.allBoxesClicked(boxes) === true) {
      return 
    }

    // mark the clicked box with either 'x' or 'o'
    boxes[index] = this.state.xIsNext ? 'x' : 'o'

    // add move to game history
    history.push(boxes[index])

    // update state
    this.setState({
      boxes: boxes,
      history: history,
      xIsNext: !this.state.xIsNext
    })
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