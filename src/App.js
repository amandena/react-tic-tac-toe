import React from 'react'
import './App.css'
import './styles/board.css'
import './styles/board-box.css'
import './styles/buttons.css'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'

function App() {
  return (
    <div className='App'>
      <h1>TIC TAC TOE</h1>
      <Board/>
      <Scoreboard/>
    </div>
  )
}

export default App
