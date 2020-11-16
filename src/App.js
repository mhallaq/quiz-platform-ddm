import { useState, useEffect } from 'react'
import JeopardyGrid from './components/jeopardyGrid'
import "./App.css";
import createBoard from './services/createBoard'
import QuestionCard from './components/questionCard'
import Header from './components/Header'

function App() {
  const [board, setBoard] = useState()
  const [view, setView] = useState('grid')
  const [col, setColumn]= useState()
  const [row, setRow] = useState()
  const [bank, setBank] = useState(0)

  useEffect(() => createBoard(setBoard), [])

  const itemClick = (col, row) => {
    setColumn(col)
    setRow(row)
    setView('question')
  }

  const renderMain = () => {
    if (view ==='grid') return (
      <JeopardyGrid board={board} itemClick={itemClick} />
    )
    if (view ==='question') return (
      <QuestionCard question = {board[col].clues[row]} setView={setView}/>
    )
  }

  return (
    <div className="App">
      <Header bank={bank} setBank={setBank}/>
      {renderMain()}
    </div>
  );
}

export default App;
