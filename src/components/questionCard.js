import React from 'react';
// import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  question:{
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
  const classes = useStyles();

  return (
    <Box className={classes.main} onClick={()=>props.setView('grid')}>
      <Box className={`${classes.question} ${classes.main}`} >
        <h1>{props.question.question}</h1>
      </Box>
      <div style={{width: '100%', display: 'flex', flexflow: 'row wrap', justifyContent: 'space-around'}}>
        <div>Right Answer</div>
        <div>Wrong Answer</div> 
      </div>
    </Box>
  )
}
