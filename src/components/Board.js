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

  handleBoardRestart = () => {
    this.setState({
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true
    })
  }

  render() {
    const winner = utils.findWinner(this.state.boxes)
    const isFilled = utils.allBoxesClicked(this.state.boxes)

    let status 
    if(winner) {
      status = `The winner is ${winner}!`
      this.storage.update([`${winner} won`])
    } else if(!winner && isFilled) {
      status = 'Game Tied!'
      this.storage.update(['Game Tied!'])
    } else {
      status = `It is ${this.state.xIsNext ? 'x' : 'o'}'s turn.`
    }

    return(
      <div className='board-wrapper'>
        <Link to='/' className='board-link'>Go Back to Scoreboard</Link>
        <div className='board'>
          <h2 className='board-heading'>{status}</h2>

          <div className='board-row'>
            <BoardBox 
              value={this.state.boxes[0]}
              handleBoxClick={() => this.handleBoxClick(0)}
            />
            <BoardBox 
              value={this.state.boxes[1]}
              handleBoxClick={() => this.handleBoxClick(1)}
            />
            <BoardBox 
              value={this.state.boxes[2]}
              handleBoxClick={() => this.handleBoxClick(2)}
            />
          </div>

          <div className='board-row'>
            <BoardBox 
              value={this.state.boxes[3]}
              handleBoxClick={() => this.handleBoxClick(3)}
            />
            <BoardBox 
              value={this.state.boxes[4]}
              handleBoxClick={() => this.handleBoxClick(4)}
            />
            <BoardBox 
              value={this.state.boxes[5]}
              handleBoxClick={() => this.handleBoxClick(5)}
            />
          </div>

          <div className='board-row'>
            <BoardBox 
              value={this.state.boxes[6]}
              handleBoxClick={() => this.handleBoxClick(6)}
            />
            <BoardBox 
              value={this.state.boxes[7]}
              handleBoxClick={() => this.handleBoxClick(7)}
            />
            <BoardBox 
              value={this.state.boxes[8]}
              handleBoxClick={() => this.handleBoxClick(8)}
            />
          </div>
        </div>
      
        <div className='board-history'>
          <h2 className='board-heading'>Moves History:</h2>  
          <ul className='board-history-list'>
            {this.state.history.length === 0 && <span>No moves to show.</span>}

            {this.state.history.length !== 0 && this.state.history.map((move, index) => {
              return <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
            })}
          </ul>
        </div>
        {winner && <div className='board-footer'>
          <button className='btn' onClick={this.handleBoardRestart}>Start New Game</button>
        </div>}
      </div>
    )
  }
}

export default Board