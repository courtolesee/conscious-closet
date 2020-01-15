import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 380,
    marginLeft: 40,
    marginRight: 40,
  },
  markLabel: {
    marginRight: 100,
  },
  input: {
    width: 60,
    marginRight: 30,
    color: 'white',
  },

});
  
export default function WasteGoalSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(120);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    console.log('waste:', newValue);
    
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 160) {
      setValue(160);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={160}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 200,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}