import { useState, useEffect } from "react";
import JeopardyGrid from "./components/jeopardyGrid";
import "./App.css";
import createBoard from "./services/createBoard";
import QuestionCard from "./components/questionCard";
import LandingPage from "./components/landingPage";
import Header from "./components/Header";
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

  useEffect(() => createBoard(setBoard), []);

  const itemClick = (col, row, value) => {
    setColumn(col);
    setRow(row);
    setQuestionValue(value);
    setView("question");
    setHistory((prevHistory) => {
      prevHistory[col][row] = false;
      return [...prevHistory];
    });
  };

  const correctAnswer = () => {
    document.getElementById("correct-sound").play();
    setTimeout(() => {
      setBank(bank + questionValue);
    }, 9000);
  };

  const wrongAnswer = () => {
    document.getElementById("wrong-sound").play();

    setTimeout(() => {
      setBank(bank - questionValue);
    }, 9000);
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
        />
      );
  };
  // counter

  return (
    <div className="App ">
      <div className="gradient-background">
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
