import React from "react";
// import Container from '@material-ui/core/Container';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Counter from "./Counter";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: "KorinnaBold",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
    backgroundColor: "#060CE9",
    color: "#FFFFFF",
    "-webkit-text-stroke": "1px black",
    fontWeight: "900",
  },
  question: {
    height: "60vh",
    width: "80%",
  },
  answerRow: {
    height: "150px",
    alignItems: "center",
    display: "flex",
  },
  countdown: {
    height: "2rem",
    // width: "80vw",
    margin: "auto",
    // paddingTop: "5vh",
    paddingBottom: "5vh"

  },
}));

//Styling Counter bar

const CounterBarContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

const QuestionCard = (props) => {
  const { clue, setView, correctAnswer, wrongAnswer, randomAnswers, shuffledOrder } = props;

  console.log(shuffledOrder)

  const classes = useStyles();

  // Durstenfeld shuffle, an optimized version of Fisher-Yates algorithm
  // const shuffleArray = useCallback((array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }, []);



  const multipleChoice = [
    <Button onClick={correctAnswer} variant="contained">
      <p dangerouslySetInnerHTML={{ __html: clue.answer }} />
    </Button>,
    <Button onClick={wrongAnswer} variant="contained">
      <p dangerouslySetInnerHTML={{ __html: randomAnswers[0] }} />
    </Button>,
    <Button onClick={wrongAnswer} variant="contained">
      <p dangerouslySetInnerHTML={{ __html: randomAnswers[1] }} />
    </Button>,
  ];

  return (
    <Box className={classes.main} onClick={() => setView("grid")}>
      <Box className={classes.countdown}>
        <CounterBarContainer>
          <Counter setView={setView} wrongAnswer={wrongAnswer} />
        </CounterBarContainer>
      </Box>
      <Box className={`${classes.question} ${classes.main}`}>
        <h1>{clue.question}</h1>
      </Box>
      <div
        style={{
          height: "24vh",
          width: "100%",
          display: "flex",
          flexflow: "row wrap",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >

        {[
          multipleChoice[shuffledOrder[0]],
          multipleChoice[shuffledOrder[1]],
          multipleChoice[shuffledOrder[2]],
        ]}
      </div>
    </Box>
  );
};

export default QuestionCard;
