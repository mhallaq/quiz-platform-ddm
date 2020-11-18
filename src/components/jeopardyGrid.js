import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    border: "2px solid black",
    flexGrow: 1,
    minHeight: "500px",
  },
  item: {
    fontFamily: "Swiss911",
    fontSize: "1.5rem",
    border: "2px solid black",
    fontWeight: "bold",
    height: "15vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#060CE9",
    "-webkit-text-stroke": ".5px black",
  },
  title: {
    color: "#FFFFFF",
  },
  question: {
    color: "#FFFF00",
  },
}));

export default function JeopardyGrid(props) {
  const { board, itemClick } = props || [];
  const classes = useStyles();
  // console.log("history",history)
  return (
    <Grid container direction="row" className={classes.main}>
      {board &&
        board.map((column, index) => {
          const taken = props.history[index];
          // console.log("taken", taken, "index", index);
          return (
            <Grid key={index} xs={2} container direction="column" item>
              <Box className={`${classes.item} ${classes.title}`}>
                <h2>{column.title}</h2>
              </Box>
              <Box
                className={`${classes.item} ${classes.question}`}
                onClick={() => {
                  if (taken[0]) itemClick(index, 0, 200);
                }}
              >
                {taken[0] && <h2>$200</h2>}
              </Box>
              <Box
                className={`${classes.item} ${classes.question}`}
                onClick={() => {
                  if (taken[1]) itemClick(index, 1, 400);
                }}
              >
                {taken[1] && <h2>$400</h2>}
              </Box>
              <Box
                className={`${classes.item} ${classes.question}`}
                onClick={() => {
                  if (taken[2]) itemClick(index, 2, 600);
                }}
              >
                {taken[2] && <h2>$600</h2>}
              </Box>
              <Box
                className={`${classes.item} ${classes.question}`}
                onClick={() => {
                  if (taken[3]) itemClick(index, 3, 800);
                }}
              >
                {taken[3] && <h2>$800</h2>}
              </Box>
              <Box
                className={`${classes.item} ${classes.question}`}
                onClick={() => {
                  if (taken[4]) itemClick(index, 4, 1000);
                }}
              >
                {taken[4] && <h2>$1000</h2>}
              </Box>
            </Grid>
          );
        })}
    </Grid>
  );
}
