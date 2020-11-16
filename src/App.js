import { useState, useEffect } from 'react'
import JeopardyGrid from './components/jeopardyGrid'
import "./App.css";
import createBoard from './services/createBoard'
import QuestionCard from './components/questionCard'
import LandingPage from './components/landingPage'
import Header from './components/Header'

function App() {
  const [board, setBoard] = useState()
  const [view, setView] = useState('landing')
  const [column, setColumn]= useState()
  const [row, setRow] = useState()

  useEffect(() => createBoard(setBoard), [])

  const itemClick = (col, row) => {
    setColumn(col)
    setRow(row)
    setView('question')
  }

  const renderMain = () => {
    if (view ==='landing'){
      return(
        <LandingPage
          setView={setView}
        />
    }
    if (view ==='grid') return (
      <JeopardyGrid board={board} itemClick={itemClick} />
    )
    if (view ==='question') return (
      <QuestionCard question = {board[col].clues[row]} setView={setView}/>
    )
  }

  return (
    <div className="App">
      <Header />
      <h1>Quiz Platform</h1>
      {renderMain()}
    </div>
  );
}

export default App;
