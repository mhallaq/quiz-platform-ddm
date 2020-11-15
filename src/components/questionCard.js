import React from 'react';
// import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: "center",
    display: "flex",
    width: '100%',
    backgroundColor: "#060CE9",
    color: '#FFFFFF',
    "-webkit-text-stroke": '1px black',
    fontWeight: 'bold',
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
  //console.log('question:',props.question)
  return (
    <Box className={classes.main} onClick={()=>props.setView('grid')}>
      <Box className={`${classes.question} ${classes.main}`} >
        <h1>{props.question.question}</h1>
      </Box>
    </Box>
  )
}
