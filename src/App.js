import { useState, useEffect } from 'react'
import JeopardyGrid from './components/jeopardyGrid'
import "./App.css";
import createBoard from './services/createBoard'
import QuestionCard from './components/questionCard'
import LandingPage from './components/landingPage'
import Header from './components/Header'
import DailyDouble from './components/dailyDouble'

function App() {
  const [board, setBoard] = useState()
  const [view, setView] = useState('landing')
  const [col, setColumn] = useState()
  const [row, setRow] = useState()
  const [history, setHistory]= useState([
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
  ])

  const [questionValue, setQuestionValue] = useState()
  const [bank, setBank] = useState(0)
  const [dailyDouble, setDailyDouble] = useState([Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)])

  useEffect(() => createBoard(setBoard), [])

  const itemClick = (col, row, value) => {
    setColumn(col)
    setRow(row)
    setQuestionValue(value)

    setHistory(prevHistory=>{
      prevHistory[col][row]=false;
      return [...prevHistory];
    })
    if (col === dailyDouble[0] && row === dailyDouble[1]){
      setView('dailyDouble')
    }else{
      setView('question')
    }
  }

  const correctAnswer = () => {
    setBank(bank + questionValue)
  }

  const wrongAnswer = () => {
    setBank(bank - questionValue)
  }

  const renderMain = () => {
    if (view === 'landing') {
      return (
        <LandingPage
          setView={setView}
        />)
    }
    if (view === 'grid') return (
      <JeopardyGrid
        board={board}
        itemClick={itemClick}
        history={history}/>
    )
    if (view === 'question') return (
      <QuestionCard
        clue={board[col].clues[row]}
        setView={setView}
        setQuestionValue={setQuestionValue}
        correctAnswer={correctAnswer}
        wrongAnswer={wrongAnswer}
      />
    )
    if (view==='dailyDouble') return (
      <DailyDouble setView={setView}/>
    )
  }

  return (

    <div className="App ">
      <div className="gradient-background">
        <Header bank={bank} setBank={setBank} />
        {renderMain()}
      </div>
    </div>
  );
}

export default App;
