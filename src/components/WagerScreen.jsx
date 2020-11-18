import React from 'react';
import { Box, Button, InputAdornment, FormControl, OutlinedInput, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WagerBar from './WagerBar'



const useStyles = makeStyles(theme => ({
    main: {
        fontFamily: 'KorinnaBold',
        alignItems: 'center',
        justifyContent: "center",
        display: "flex",
        flexFlow: "column nowrap",
        width: '100%',
        // backgroundColor: "#060CE9",
        color: '#FFFFFF',
        // "-webkit-text-stroke": '1px black',
        fontWeight: '900',
    },


}))

export default function WagerScreen(props) {
    const { bank, setBank, maxBet, setQuestionValue, setView } = props
    const classes = useStyles();
    const [percentage, setPercentage] = React.useState(20)
    const [betValue, setBetValue] = React.useState(Math.ceil((maxBet / 100) * 20));

    const handleChange = () => (e) => {
        console.log(e.target.value)
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        setBetValue(onlyNums);
    };

    const handleSubmit = () => {
        setQuestionValue(betValue)
        setView('question')

    }





    return (
        <Box className={classes.main} >
            <div style={{ height: '94vh', width: '100%', display: 'grid', placeItems: 'center' }}>
                <Container maxWidth="sm" style={{ backgroundColor: 'white', height: 'auto', borderRadius: '5px', textAlign: "left", color: 'black', maxWidth: '500px' }}>
                    <h1>Enter your wager</h1>
                    <div>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            {/* <InputLabel htmlFor="outlined-adornment-amount">TYPE YOUR WAGER</InputLabel> */}
                            <OutlinedInput
                                // color='secondary'
                                error={betValue > maxBet ? true : false}
                                helperText="Wager must not exceed total bank value. Only numbers allowed."
                                // id="outlined-adornment-amount"
                                value={betValue}
                                onChange={handleChange()}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            // labelWidth={180}

                            />
                        </FormControl>
                    </div>


                    {/* <div style={{display: 'flex'}}> */}
                    <WagerBar
                        betValue={betValue}
                        setBetValue={setBetValue}
                        bank={bank}
                        setBank={setBank}
                        percentage={percentage}
                        setPercentage={setPercentage}
                        maxBet={maxBet}
                    />
                    {/* <div style={{display: 'flex'}}> */}
                    <Button
                        fullWidth={true}
                        style={{ backgroundColor: '#FFFF00', color: 'black', fontFamily: 'swiss911' }} onClick={() => setBetValue(maxBet)} variant="contained" >
                        Max Bet ${maxBet}
                    </Button>

                    {/* </div> */}
                    <div style={{height: '1rem'}} />




                    <Button fullWidth={true} style={{ color: 'yellow', backgroundColor: '#060CE9' }} onClick={(e) => handleSubmit(e)} variant="contained">
                        Submit
                    </Button>
                    <h2>Jeopardy Wager Rules:</h2>
                    <p>1. In the FIRST ROUND, if you have less than $1000, you can only bet up to $1000. In the SECOND ROUND, if you have less than $2000, you can only bet up to $2000.</p>
                    <p>2. All other times you can bet as much as you want as long as it does not exceed your total score.</p>
                    <p>3. If you have less than $1 after SECOND ROUND, you can not participate in FINAL JEOPARDY, and automatically lose the game. </p>
                    <p>4. All bets must be full-dollar ammount. </p>


                </Container>
            </div>

        </Box>
    )
}
