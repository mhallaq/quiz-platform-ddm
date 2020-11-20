import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Counter from "./Counter";

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
    outline: "black solid 1px",
  },
  question: {
    height: "60vh",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexFlow: "column nowrap",
  },
  answerRow: {
    height: "150px",
    alignItems: "center",
    display: "flex",
  },
  countdown: {
    width: '100vw',
    margin: "auto",
    display: 'flex',
  },
}));


const QuestionCard = (props) => {
  const { clue, correctAnswer, wrongAnswer, randomAnswers, shuffleArray, setView, round } = props;
  const classes = useStyles();


  // eslint-disable-next-line
  const [answers, setAnswers] = React.useState(shuffleArray([
    <Button key={1} onClick={correctAnswer} variant="contained">
      <h3 dangerouslySetInnerHTML={{ __html: clue.answer }} />
    </Button>,
    <Button key={2} onClick={wrongAnswer} variant="contained">
      <h3 dangerouslySetInnerHTML={{ __html: randomAnswers && randomAnswers[0] }} />
    </Button>,
    <Button key={3} onClick={wrongAnswer} variant="contained">
      <h3 dangerouslySetInnerHTML={{ __html: randomAnswers[1] }} />
    </Button>,
  ])
  )

  return (
    <Box className={classes.main}>
      <Box className={classes.countdown}>
        <Counter wrongAnswer={wrongAnswer} setView={setView} round={round} />
      </Box>
      <Box className={`${classes.question}`}>
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
        {answers}
      </div>
    </Box>
  );
};

export default QuestionCard;
