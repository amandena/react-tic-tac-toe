import React from 'react'
import { Link } from 'react-router-dom'
import { Storage } from '../storage/storage'

class Scoreboard extends React.Component {
  state = {
    scoreboard: []
  }

  // load data from local storage and update component state once component mounts
  async componentDidMount() {
    let storage = await new Storage().getData()
     this.setState({
       scoreboard: storage
     })
  }

  render() {
    return(
      <div className='game'>
        <h2>Recent Games:</h2>

        {this.state.scoreboard}

        <br/>

        <Link to='/board'>
          <button className='btn'>Start New Game</button>
        </Link>
      </div>
    )
  }
}

export default Scoreboard