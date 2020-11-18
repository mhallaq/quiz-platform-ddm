import React from 'react';
// import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  main: {
    fontFamily: 'KorinnaBold',
    alignItems: 'center',
    justifyContent: "center",
    display: "flex",
    flexFlow: "column nowrap",
    width: '100%',
    backgroundColor: "#060CE9",
    color: '#FFFFFF',
    "-webkit-text-stroke": '1px black',
    fontWeight: '900',
  },
  question: {
    height: '70vh',
    width: "80%"
  },
  answerRow: {
    height: "150px",
    alignItems: 'center',
    display: "flex",
  },

}))

export default function QuestionCard(props) {
  const { clue, setView, correctAnswer, wrongAnswer, randomAnswers } = props
  const classes = useStyles();

  // Durstenfeld shuffle, an optimized version of Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const multipleChoice = [
    <Button onClick={correctAnswer} variant="contained">
      {clue.answer}
    </Button>,
    <Button onClick={wrongAnswer} variant="contained">
      {randomAnswers[0]}
    </Button>,
    <Button onClick={wrongAnswer} variant="contained">
      {randomAnswers[1]}
    </Button>
  ]

  return (
    <Box className={classes.main} onClick={() => setView('grid')}>
      <Box className={`${classes.question} ${classes.main}`} >
        <h1>{clue.question}</h1>
      </Box>
      <div style={{ height: '24vh', width: '100%', display: 'flex', flexflow: 'row wrap', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        {shuffleArray(multipleChoice)}
      </div>
    </Box>
  )
}
