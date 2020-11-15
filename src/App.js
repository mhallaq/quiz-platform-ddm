import { useState, useEffect } from 'react'
import JeopardyGrid from './components/jeopardyGrid'
import "./App.css";
import createBoard from './services/createBoard'
import QuestionCard from './components/questionCard'

function App() {
  const [board, setBoard] = useState([])
  const [view, setView] = useState('grid')
  const [column, setColumn]= useState()
  const [row, setRow] = useState()

  useEffect(() => createBoard(setBoard), [])

  const itemClick = (column, row) => {
    setColumn(column)
    setRow(row)
    setView('question')
  }

  const renderMain = () => {
    if (view ==='grid'){
      return(
        <>
          <JeopardyGrid
            board={board}
            itemClick={itemClick} />
        </>
      )
    } else if (view ==='question'){
      return (
        <>
          <QuestionCard
            question = {board[column].clues[row]}
            setView={setView}
            />
        </>
      )
    }
  }

  return (
    <div className="App">
      <h1>Quiz Platform</h1>
      {renderMain()}
    </div>
  );
}

export default App;
