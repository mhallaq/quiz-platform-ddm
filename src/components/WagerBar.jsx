import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';



ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

function ValueLabelComponent(props) {

    return (
        // <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        //     {children}
        // </Tooltip>
        <div></div>
    );
}

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
    const { betValue, setBetValue, percentage, setPercentage, maxBet } = props

    const sliderUpdate = (value) => {
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
                value={Math.ceil((betValue / maxBet) * 100)}
                onChangeCommitted={(e, value) => sliderUpdate(value)}
                style={{ width: '500px' }}
            />
            {/* <div className={classes.margin} /> */}

        </div>
    );
}
