import React from 'react';
import { Box, Container, Button, Grid,  makeStyles } from '@material-ui/core';
import alexTrebek from '../public/images/alex_trebek_clean.png'
//import jeopardyBackground from '../public/images/jeopardy_background.jpg'

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    // justifyContent: "center",
    display: "flex",
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    // backgroundImage: `url(${jeopardyBackground})`,
    color: '#FFFFFF',
    "-webkit-text-stroke": '1px black',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      height:'100%'
    }
  },
  jeopardyBackground:{
    background: 'linear-gradient(154deg, #8a2be2, #9400d3, #daa520, #ff00bd)',
    backgroundSize: '800% 800%',
    animation: `$BackgroundGradient 10s ${theme.transitions.easing.easeInOut} infinite`,
  },
  '@keyframes BackgroundGradient': {
    '0%' :{ backgroundPosition: '76% 0%'},
    '50%' :{ backgroundPosition: '25% 100%'},
    '100%' :{ backgroundPosition: '76% 0%'},
},
  imageContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
    overflow:'hidden'
  },
  alex:{
    objectFit:'contain',
    height:'auto',
    width:'100%'
  },
  title: {
    marginTop: '5vh',
    fontSize:'2rem'
  },
  bottomRow: {
    height: "100%",
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column-reverse'
    }
  },
  button: {
    border:'1px solid black',
    backgroundColor: '#FFFFFF',
    width:'30%',
    '&:hover':{
      backgroundColor: "#060CE9",
      color:'#FFFFFF'
}
  },


}))

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Box className={`${classes.main} ${classes.jeopardyBackground}`} >

        <Box className={`${classes.title} `} >
          <h1>Jeopardy!</h1>
        </Box>
      <Grid container className={classes.bottomRow} >
        <Grid item sm={6} xs={12} className={classes.imageContainer}>
          <h3><i>Remembering Alex Trebek.</i></h3>
          <img className={classes.alex} src={alexTrebek} alt='Alex Trebek'></img>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Button size="large" className={classes.button}
            onClick={() => props.setView('grid')}
            >
              <h1>Play</h1>
          </Button>
          <Container>
            <h2><u>Rules</u></h2>
            <h2>1.</h2>
          </Container>
        </Grid>

      </Grid>

    </Box>
  )
}
