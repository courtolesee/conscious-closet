import React, { Component } from 'react';
// material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },  
    linearColorPrimary: {
        backgroundColor: 'white',
    },
    linearBarColorPrimary: {
        backgroundColor: '#3F68A8',
    },
  });

class WaterProgressBar extends Component {

    state = {
        open: false,
        completed: 0,
        goal: 100,
      };

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };
    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.setState({ completed: 0 });
        } else {
            this.setState({ completed: 50 });
        }
    };

    render(){
        const { classes } = this.props;
        return (
            <div>
                <section>Total Potential Water Usage 
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                    <div>
                        <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={this.handleTooltipClose}
                        open={this.state.open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={`${this.state.completed}/${this.state.goal}`}
                        placement="left-end"
                        >
                        <LinearProgress classes={{colorPrimary: classes.linearColorPrimary, barColorPrimary: classes.linearBarColorPrimary}} onClick={this.handleTooltipOpen} color="primary" variant="determinate" value={this.state.completed} style={{height:"20px"}}/>
                        </Tooltip>
                    </div>
                    </ClickAwayListener>
                </section>
            </div>
        )
    }
}

WaterProgressBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(WaterProgressBar);