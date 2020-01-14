import React, { Component } from 'react';
// material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LinearProgress from '@material-ui/core/LinearProgress';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
    lightTooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
      },
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
        backgroundColor: '#d9c6bf',
    },
    linearBarColorPrimary: {
        backgroundColor: '#F25D27',
    },
  });

class WasteProgressBar extends Component {

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
            this.setState({ completed: 30 });
        }
    };

    render(){
        const { classes } = this.props;
        return (
            <div>
                <section>Total Potential Waste Contribution
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                    <div>
                        <Tooltip
                        classes={{ tooltip: classes.lightTooltip }}
                        TransitionComponent={Zoom}
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
                        arrow>
                        <LinearProgress classes={{colorPrimary: classes.linearColorPrimary, barColorPrimary: classes.linearBarColorPrimary}} onClick={this.handleTooltipOpen} color="primary" variant="determinate" value={this.state.completed} style={{height:"20px"}}/>
                        </Tooltip>
                    </div>
                    </ClickAwayListener>
                </section>
            </div>
        )
    }
}

WasteProgressBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(WasteProgressBar);