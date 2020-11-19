import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    // marginTop: '8vh',
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
    height: '100vh',
    width: "80%",
    fontSize: "2.1rem"
  },


}))

export default function AnnouncementPage(props) {

  const {setView, text, next, time} = props
  const [timer, setTimer] = React.useState(time)
  const classes = useStyles();



  React.useEffect(() => {
    const counter = setInterval(() => countdown(), 1000);
    return () => clearInterval(counter);
  });

  const countdown = () =>{
    if (timer === 0) {
      setView(next)
    }
    setTimer(timer - 1)
  }

  React.useEffect(() => {
    setTimer(time)
  }, [time]);

  return (
    <Box className={classes.main} >

      <Box className={`${classes.question} ${classes.main}`} >
        <h1>{text}</h1>
      </Box>


    </Box>
  )
}
