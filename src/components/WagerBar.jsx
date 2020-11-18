import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};






const PrettoSlider = withStyles({
    root: {
        color: 'black',
        height: 8,
        width: '100%'
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: 'black',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);





export default function CustomizedSlider(props) {
    const classes = useStyles();

    const { betValue, setBetValue, bank, setBank, percentage, setPercentage, maxBet } = props

    // const [value, setValue] = useState(bank/per)

    console.log(bank / percentage)

    const sliderUpdate = (value) => {
        console.log(value)
        setPercentage(value)
        console.log(Math.ceil((maxBet / 100) * value))
        setBetValue(Math.ceil((maxBet / 100) * value))

    }
    return (
        <div >


            <PrettoSlider
                valueLabelDisplay="off"
                aria-label="pretto slider"
                defaultValue={percentage}
                value={betValue}
                value={Math.ceil((betValue / maxBet) * 100)}
                onChangeCommitted={(e, value) => sliderUpdate(value)}
                style={{ width: '500px' }}
            />
            {/* <div className={classes.margin} /> */}

        </div>
    );
}