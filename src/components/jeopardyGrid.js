import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    border: '2px solid black',
    flexGrow: 1,
    minHeight: "500px"
  },
  item: {
    fontFamily: 'Swiss911',
    fontSize: '1.5rem',
    border: '2px solid black',
    fontWeight: 'bold',
    height: "150px",
    alignItems: 'center',
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#060CE9",
    color: '#FFFFFF',
    "-webkit-text-stroke": '.5px black',
  }
}))

export default function JeopardyGrid(props) {
  const { board, itemClick } = props || []
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.main} >
      {board && board.map((column, index) => {
        return (
          <Grid key={index} xs={2} container direction="column" item>
            <Box className={classes.item}>
              <h2>{column.title}</h2>
            </Box>
            <Box className={classes.item} onClick={() => itemClick(index, 0, 200)}>
              <h2>$200</h2>
            </Box>
            <Box className={classes.item} onClick={() => itemClick(index, 1, 400)}>
              <h2>$400</h2>
            </Box>
            <Box className={classes.item} onClick={() => itemClick(index, 2, 600)}>
              <h2>$600</h2>
            </Box>
            <Box className={classes.item} onClick={() => itemClick(index, 3, 800)}>
              <h2>$800</h2>
            </Box>
            <Box className={classes.item} onClick={() => itemClick(index, 4, 1000)}>
              <h2>$1000</h2>
            </Box>
          </Grid>)
      })}
    </Grid>
  )
}
