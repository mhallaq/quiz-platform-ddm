import { useState, useEffect } from "react";
import JeopardyGrid from "./components/jeopardyGrid";
import "./App.css";
import createBoard from "./services/createBoard";
import QuestionCard from "./components/questionCard";
import LandingPage from "./components/landingPage";
import Header from "./components/Header";
import DailyDouble from "./components/dailyDouble";
import { fetchRand } from "./services/apiConfig";
import correctNotification from "./public/audio/rightanswer.mp3";
import wrongNotification from "./public/audio/wrong-answer.mp3";

function App() {
  const [board, setBoard] = useState();
  const [view, setView] = useState("landing");
  const [col, setColumn] = useState();
  const [row, setRow] = useState();
  const [history, setHistory] = useState([
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
  ]);

  const [questionValue, setQuestionValue] = useState();
  const [bank, setBank] = useState(0);
  //const [dailyDouble, setDailyDouble] = useState([Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)])
  const [randomAnswers, setRandomAnswers] = useState();
  const dailyDouble = [
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 5),
  ];

  useEffect(() => {
    createBoard(setBoard);

    async function getWrongAnswers() {
      setRandomAnswers(await fetchRand());
    }
    getWrongAnswers();
  }, []);

  const itemClick = (col, row, value) => {
    setColumn(col);
    setRow(row);
    setQuestionValue(value);

    setHistory((prevHistory) => {
      prevHistory[col][row] = false;
      return [...prevHistory];
    });
    if (col === dailyDouble[0] && row === dailyDouble[1]) {
      setView("dailyDouble");
    } else {
      setView("question");
    }
  };

  //   const nextRound = () => {
  //     setDailyDouble([Math.floor(Math.random() * 6), Math.floor(Math.random() * 5)])
  //   }

  const randIdx = Math.floor(Math.random() * 98);

  const correctAnswer = () => {
    document.getElementById("correct-sound").play();
    setTimeout(() => {
      setBank(bank + questionValue);
    }, 500);
  };

  const wrongAnswer = () => {
    document.getElementById("wrong-sound").play();

    setTimeout(() => {
      setBank(bank - questionValue);
    }, 500);
  };

  const renderMain = () => {
    if (view === "landing") {
      return <LandingPage setView={setView} />;
    }
    if (view === "grid")
      return (
        <JeopardyGrid board={board} itemClick={itemClick} history={history} />
      );
    if (view === "question")
      return (
        <QuestionCard
          clue={board[col].clues[row]}
          setView={setView}
          setQuestionValue={setQuestionValue}
          correctAnswer={correctAnswer}
          wrongAnswer={wrongAnswer}
          randomAnswers={[randomAnswers[randIdx], randomAnswers[randIdx + 1]]}
        />
      );
    if (view === "dailyDouble") return <DailyDouble setView={setView} />;
  };

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
