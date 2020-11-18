import { useState, useEffect } from 'react'
import JeopardyGrid from './components/jeopardyGrid'
import "./App.css";
import createBoard from './services/createBoard'
import QuestionCard from './components/questionCard'
import LandingPage from './components/landingPage'
import Header from './components/Header'
import AnnouncementPage from './components/announcementPage'
import { fetchRand } from './services/apiConfig'


function App() {
  const [board, setBoard] = useState()
  const [view, setView] = useState('landing')
  const [col, setColumn] = useState()
  const [row, setRow] = useState()
  const [history, setHistory] = useState([
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
  ])
  const [questionValue, setQuestionValue] = useState()
  const [bank, setBank] = useState(0)
  const [dailyDouble, setDailyDouble] = useState([[Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)]])
  const [randomAnswers, setRandomAnswers] = useState()
  const [round, setRound] = useState(1)
  const [roundTimer, setRoundTimer] = useState(-1)




  useEffect( () => {
    createBoard(setBoard)

    async function getWrongAnswers() {
      setRandomAnswers(await fetchRand())
    }
    getWrongAnswers()
  }, [])

  useEffect(()=>{
    const countdown = setInterval(()=>{
      const nextRound = () => {
        if (round === 1) {
          setDailyDouble([[Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)], [Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)]])
          setView("secondRound")
          setRoundTimer(180)//time second round
          setRound(round + 1)
          setHistory([[true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],]);

        } else {
          setView("finalRound")
        }

      }

      setRoundTimer(roundTimer-1)
      if(roundTimer===0){
        nextRound();
      }

    },1000)
    return ()=>clearInterval(countdown);
  })

  const itemClick = (col, row, value) => {
    setColumn(col)
    setRow(row)
    setQuestionValue(value)

    setHistory(prevHistory=>{
      prevHistory[col][row]=false;
      return [...prevHistory];
    })
    if ((round !== 3 && col === dailyDouble[0][0] && row === dailyDouble[0][1]) || (round === 2 && col === dailyDouble[1][0] && row === dailyDouble[1][1])){
      setView('dailyDouble')
    }else{
      setView('question')
    }
  }



  const randIdx = Math.floor(Math.random() * 98)

  const correctAnswer = () => {
    setView('grid')
    setBank(bank + questionValue)
  }

  const wrongAnswer = () => {
    setView('grid')
    setBank(bank - questionValue)
  }

  const renderMain = () => {
    if (view === 'landing') {
      return (
        <LandingPage
          setView={setView}
          start={()=>setRoundTimer(180)}//seconds first round
        />)
    }
    if (view === 'grid') return (
      <JeopardyGrid
        board={round===1? board[0]: board[1]}
        itemClick={itemClick}
        history={history}/>
    )
    if (view === 'question') return (
      <QuestionCard
        round={round}
        clue={board[col].clues[row]}
        setQuestionValue={setQuestionValue}
        correctAnswer={correctAnswer}
        wrongAnswer={wrongAnswer}
        randomAnswers={[randomAnswers[randIdx], randomAnswers[randIdx+1]]}
      />
    )
    if (view==='dailyDouble') return (
      <AnnouncementPage text="Daily Double!" setView={setView} next='wager'/>
    )
    if (view === 'secondRound') return (
      <AnnouncementPage text="Double Jeopardy!" setView={setView} next='grid' />
    )
    if (view === 'finalRound') return (
      <AnnouncementPage text="Final Jeopardy" setView={setView} next='wager' />
    )
  }

  return (

    <div className="App ">
      <div className="gradient-background" style={{display: 'flex', flexFlow: 'column nowrap', alignContent: 'flex-end'}}>
        <Header bank={bank} setBank={setBank} />
        {renderMain()}
      </div>
    </div>
  );
}

export default App;
