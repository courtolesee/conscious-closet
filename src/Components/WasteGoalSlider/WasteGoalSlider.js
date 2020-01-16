import React, { useState } from 'react';
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
  
export default function WasteGoalSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(80);

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
            value={typeof props.value === 'number' ? props.value : 0}
            onChange={props.handleWasteSliderChange}
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
            onChange={props.handleWasteInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 160,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}