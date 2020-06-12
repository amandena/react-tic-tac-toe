import React from 'react'
import { Link } from 'react-router-dom'
import { Storage } from '../storage/storage'

class Scoreboard extends React.Component {
  state = {
    scoreboard: []
  }

  render() {
    return(
      <div className='game'>
        <h1>Recent Games:</h1>

      </div>
    )
  }
}

export default Scoreboard