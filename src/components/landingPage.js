import { Box, Container, Button, Grid, makeStyles, ButtonGroup, Paper } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import alexTrebek from '../public/images/alex_trebek_clean.png'

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    display: "flex",
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    color: '#FFFFFF',
    // "-webkit-text-stroke": '1px black',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    }
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    overflow: 'hidden'
  },
  alex: {
    objectFit: 'contain',
    maxHeight: "70vh",
  },
  title: {
    marginTop: '5vh',
    fontSize: '4rem'
  },
  bottomRow: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  button: {
    fontFamily: 'Swiss911',
    // border: '1px solid black',
    // backgroundColor: '#FFFFFF',
    fontSize: '1.5rem',
    "-webkit-text-stroke": '0px',
    // width: '30%',
    '&:hover': {
      // backgroundColor: "#060CE9",
      color: '#FFF',
      "-webkit-text-stroke": '1px black',
    },
    buttonBox: {
      display: 'flex',
      flexFlow: 'column wrap',
      background: 'red'
    },
    buttonGroup: {
      // backgroundColor: 'white'
    }

  },


}))

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Box className={`${classes.main}`} >

      
      <Grid container alignItems='space-between' className={classes.bottomRow} >
        {/* <Grid item md={4} sm={12} className={classes.imageContainer}>
          <h3><i>Remembering Alex Trebek.</i></h3>
          <img className={classes.alex} src={alexTrebek} alt='Alex Trebek'></img>
        </Grid> */}
        
        <Grid item md={8} sm={12}>


        </Grid>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          justify="space-between"
          // alignItems="center"
          md={4} sm={12} style={{ height: '100vh', backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <Box  >
            
            <h1 className={`${classes.title} logo`}>Let's play Jeopardy!</h1>
            <i style={{ color: 'black', lineHeight: '10px' }}>In memory of Alex Trebek 1940-2020</i>
        </Box>
          <Box alignItems='center'
            style={{
              padding: '20px',
              // backgroundColor: 'rgba(255,255,255,0.7)',
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}>
            <ButtonGroup className={classes.buttonGroup}
              orientation="vertical"
              color="secondory"
              variant="text"
              aria-label="vertical contained primary button group"
              fullWidth={true}
            >
              <Button
                size="large"
                className={classes.button}
                onClick={() => { props.setView('grid'); props.start(); }}
              >Play
            </Button>
              <Button
                size="large"
                className={classes.button}
                onClick={() => { props.setView('grid'); props.start(); }}
              >Rules
            </Button>
              <Button
                size="large"
                className={classes.button}
                onClick={() => { props.setView('grid'); props.start(); }}
              >Settings
            </Button>
            </ButtonGroup>
          </Box>
          {/* <Container style={{ height: 'auto', textAlign: 'left', color: 'black'  }}> */}
            {/* <h2>Made By:</h2> */}
            <Box display='flex' alignItems="center" justifyContent="flex-end" >
            <p style={{ marginBlockEnd: '0', marginBlockStart: '0', color: 'black'}}>David Diep</p>
              <div style={{marginRight: '.5rem'}}>
                <a href="https://www.linkedin.com/in/david-diep-dev/" target="__blank"
                ><LinkedInIcon fontSize="small" style={{ color: "#0e76a8" }} /></a>
                <a href="https://github.com/david-diep" target="__blank"
                ><GitHubIcon fontSize="small"style={{ color: "#000000" }} /></a>
              </div>
            </Box>
            <Box display='flex' alignItems="center" justifyContent="flex-end">
            <p style={{ marginBlockEnd: '0', marginBlockStart: '0', color: 'black'}}>Dan Dalgatov</p>
              <div style={{marginRight: '.5rem'}}>
                <a href="https://www.linkedin.com/in/dandalgatov/" target="__blank"
                ><LinkedInIcon fontSize="small" style={{ color: "#0e76a8" }} /></a>
                <a href="https://github.com/dandalgatov" target="__blank"
                ><GitHubIcon fontSize="small" style={{ color: "#000000" }} /></a>
              </div>
            </Box>
            <Box display='flex' alignItems="center" justifyContent="flex-end">
            <p style={{ marginBlockEnd: '0', marginBlockStart: '0', color: 'black'}}>Mohammad Al Hallaq</p>
              <div style={{marginRight: '.5rem'}}>
                <a href="https://www.linkedin.com/in/mohallaq/" target="__blank"
                ><LinkedInIcon fontSize="small" style={{ color: "#0e76a8" }} /></a>
                <a href="https://github.com/mhallaq" target="__blank"
                ><GitHubIcon fontSize="small" style={{ color: "#000000" }} /></a>
              </div>
            </Box>
          {/* </Container> */}

        </Grid>

      </Grid>

    </Box>
  )
}
