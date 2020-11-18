import React, { useState }  from 'react';
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
    color: 'yellow',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'yellow',
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

  const {betValue, setBetValue, bank, setBank} = props
    const [percentage, setPercentage] = useState(20)
    // const [value, setValue] = useState(bank/per)
   
    console.log(bank / percentage)
    
    const sliderUpdate = (value) => {
        console.log(value)
        setPercentage(value)
        setBetValue(Math.ceil((bank / 100) * value))
       
    }
  return (
    <div className={classes.root}>
 
          
          <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={percentage}
              value={Math.ceil((betValue/bank)*100)}
              onChangeCommitted={(e, value)=> sliderUpdate(value)}
          />
          <div className={classes.margin} />
   
    </div>
  );
}