import React from 'react';
import { Box, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
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
        backgroundColor: "#060CE9",
        color: '#FFFFFF',
        "-webkit-text-stroke": '1px black',
        fontWeight: '900',
    },


}))

export default function WagerScreen(props) {
    const { bank, setBank } = props
    const classes = useStyles();
    const [betValue, setBetValue] = React.useState(Math.ceil((bank / 100) * 20));

    const handleChange = () => (e) => {
        console.log(e.target.value)
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        setBetValue( onlyNums);
    };

    return (
        <Box className={classes.main} >
            <div style={{ height: '94vh', width: '100%', display: 'flex', flexFlow: 'column nowrap', alignContent: 'space-around'}}>
                <div>{bank}</div>
                <div>

                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">AMOUNT TO WAGER</InputLabel>
                        <OutlinedInput
                            // color='secondary'
                            error={betValue > bank  ? true : false}
                            helperText="Wager must not exceed total bank value. Only numbers allowed."
                            // id="outlined-adornment-amount"
                            value={betValue}
                            onChange={handleChange()}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={180}

                        />
                    </FormControl>
                </div>
                <WagerBar betValue={betValue} setBetValue={setBetValue} bank={bank} setBank={setBank}/>
            </div>

        </Box>
    )
}
