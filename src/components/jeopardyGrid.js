import React from 'react';
// import Container from '@material-ui/core/Container';
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  main: {
    border: '2px solid black',
    flexGrow: 1,
},
  item: {
    border: '2px solid black',
    fontWeight: 'bold',
    height: "150px",
    alignItems: 'center',
    justifyContent: "center",
    display:"flex",
    backgroundColor:"#060CE9",
    color: '#FFFFFF',
     "-webkit-text-stroke": '1px black',
  }

}))

export default function JeopardyGrid(props) {
  const classes = useStyles();
  //const [categories, setCategories] = React.useState()
  //const categories =  ['category 1', 'category 2', 'category 3', 'category 4', 'category 5', 'category 6',]
  //React.useEffect(() => {console.log(props.board); setCategories(props.board)},[props.board])

  return (
    <Grid container direction="row" className={classes.main} >
      {props.board.categories && props.board.categories.map((column,index) => {
        return (
        <Grid key={index} xs={2} container direction="column" item>
          <Box className={classes.item}>
              <h2>{column.title}</h2>
          </Box>
          <Box className={classes.item} onClick={()=> props.itemClick(index,0)}>
              <h2>$200</h2>
          </Box>
            <Box className={classes.item} onClick={() => props.itemClick(index,1)}>
              <h2>$400</h2>
          </Box>
            <Box className={classes.item} onClick={() => props.itemClick(index, 2)}>
              <h2>$600</h2>
          </Box>
            <Box className={classes.item} onClick={() => props.itemClick(index, 3)}>
              <h2>$800</h2>
          </Box>
            <Box className={classes.item} onClick={() => props.itemClick(index, 4)}>
              <h2>$1000</h2>
          </Box>
        </Grid>)
      })}
    </Grid>
  )
}
