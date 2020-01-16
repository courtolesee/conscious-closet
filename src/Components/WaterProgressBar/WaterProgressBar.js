import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        backgroundColor: '#acbebf',
    },
    linearBarColorPrimary: {
        backgroundColor: '#025159',
    },
  });


class WaterProgressBar extends Component {

    componentDidMount = () => {
        console.log('user object:', this.props.userInfo);  
        console.log('user is:', this.props.username);  
        console.log('water goal is', this.props.waterGoal);
        console.log('actual goal is', this.props.actualWater);
    }

    state = {
        open: false,
        completed: this.props.actualWater,
        goal: this.props.waterGoal,
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
            this.setState({ completed: 55 });
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

WaterProgressBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    userInfo: state.user,
    username: state.user.username,
    waterGoal: state.user.water_goal,
    wasteGoal: state.user.waste_goal,
    actualWater: state.user.actual_water,
    actualWaste: state.user.actual_waste
});

export default connect(mapStateToProps)(withStyles(styles)(WaterProgressBar));
