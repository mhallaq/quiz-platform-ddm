import { useState, useEffect } from "react";
import JeopardyGrid from "./components/jeopardyGrid";
import "./App.css";
import createBoard from './services/createBoard'
import QuestionCard from './components/questionCard'
import LandingPage from './components/landingPage'
import Header from './components/Header'
import AnnouncementPage from './components/announcementPage'
import { fetchRand } from './services/apiConfig'
import WagerScreen from './components/WagerScreen'
import maxBetService from './services/maxBet'
import correctNotification from "./public/audio/rightanswer.mp3";
import wrongNotification from "./public/audio/wrong-answer.mp3";


function App() {
  const [board, setBoard] = useState()
  const [view, setView] = useState('landing')
  const [round, setRound] = useState(1)
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
  const [roundTimer, setRoundTimer] = useState(-1)
  const [maxBet, setMaxBet] = useState(0);
  const [shuffledOrder, setShuffledOrder] = useState([0,1,2])
  console.log('round timer: '+ roundTimer)
  console.log('round: '+ round)
  console.log('view :' + view)
  
  useEffect(() => {
    createBoard(setBoard);
    async function getWrongAnswers() {
      setRandomAnswers(await fetchRand());
    }
    getWrongAnswers();
  }, []);

  useEffect(()=>{
    const countdown = setInterval(()=>{
      const nextRound = () => {
        if (round === 1) {
          setDailyDouble([[Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)], [Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)]])
          setView("secondRound")
          setRoundTimer(18)//time second round
          setRound(round + 1)
          setHistory([
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
          ]);

        } else {
          setView("finalRound")
          setRound(3)
        }

      }

      setRoundTimer(roundTimer-1)
      if(roundTimer===0){
        nextRound();
      }

    },1000)
    return ()=>clearInterval(countdown);
  }, [round, setDailyDouble, setView, setRound, setHistory, roundTimer, setRoundTimer, shuffledOrder, setShuffledOrder])
  

  const itemClick = (col, row, value) => {
    setColumn(col)
    setRow(row)
    setQuestionValue(value)
    setMaxBet(maxBetService(round, bank))

    setHistory((prevHistory) => {
      prevHistory[col][row] = false;
      return [...prevHistory];
    })
    if ((round !== 3 && col === dailyDouble[0][0] && row === dailyDouble[0][1]) || (round === 2 && col === dailyDouble[1][0] && row === dailyDouble[1][1])){
      setView('dailyDouble')
    }else{
      setView('question')
      setShuffledOrder(shuffleArray([0,1,2]))
    }
  }



  const randIdx = Math.floor(Math.random() * 98);

  const correctAnswer = () => {
    document.getElementById("correct-sound").play();
    setView('grid')
    setTimeout(() => {
      setBank(bank + questionValue);
    }, 500);
  };

  const wrongAnswer = () => {
    document.getElementById("wrong-sound").play();
    setView('grid')
    setTimeout(() => {
      setBank(bank - questionValue);
    }, 500);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };



  const renderMain = () => {
    if (view === "landing") {
      return <LandingPage setView={setView} start={() => setRoundTimer(18)}/>;
    }

    if (view === 'grid') return (
      <JeopardyGrid
        board={board}
        itemClick={itemClick}
        history={history}
        round={round}/>
    )

    if (view === 'question') return (
      <QuestionCard
        round={round}
        setView={setView}
        clue={board[round-1][col].clues[row]}
        setQuestionValue={setQuestionValue}
        correctAnswer={correctAnswer}
        wrongAnswer={wrongAnswer}
        randomAnswers={[randomAnswers[randIdx], randomAnswers[randIdx + 1]]}
        shuffledOrder={shuffledOrder}
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
  if (view === 'wager') return (
    <>
      <WagerScreen bank={bank} setBank={setBank} round={round} maxBet={maxBet && maxBet} setQuestionValue={setQuestionValue} setView={setView} />
    </>
  )
  }



  return (
    <div className="App ">
      <div
        className="gradient-background"
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          alignContent: "flex-end",
        }}
      >
        <>
          <audio id="correct-sound" src={correctNotification}></audio>
          <audio id="wrong-sound" src={wrongNotification}></audio>
        </>
        <Header bank={bank} setBank={setBank} />
        {renderMain()}
      </div>
    </div>
  );
}

export default App;
