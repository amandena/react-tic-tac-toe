import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import './styles/board.css'
import './styles/board-box.css'
import './styles/buttons.css'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <h1>TIC TAC TOE</h1>
        <Route path='/board' component={Board}/>
        <Route exact path='/' component={Scoreboard}/>
      </BrowserRouter>
    </div>
  )
}

export default App
