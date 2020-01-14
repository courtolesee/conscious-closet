import React, { Component } from 'react';
import WaterGoalSlider from '../WaterGoalSlider/WaterGoalSlider';
import WasteGoalSlider from '../WasteGoalSlider/WasteGoalSlider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
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


class SignUp extends Component {

    state = {
        open: false,
    }

    goToClosetSave = () => {
        // will send new user info to db
        this.props.history.push(`/closet`);
    }

    goToAbout = ()=>{
        this.props.history.push(`/about`);
    }

    goToLogin = ()=>{
        this.props.history.push(`/`);
    }

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
            <section> Sign Up
                <div>
                    <input placeholder="username"/><br/>
                    <input placeholder="password"/><br/>
                </div>
                <div>
                    New Items Per Year:<input placeholder="example: 6, 12, 24"/><br/>
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
                            title='Middle (130,000 gallons) is average'
                            placement="left-end"
                            arrow>
                            <p onClick={this.handleTooltipOpen}>Goal: Gallons of Water Usage Per Year</p>
                        </Tooltip>
                    </div>
                    </ClickAwayListener>
                    <WaterGoalSlider />
                    Pounds of Waste Contribution Goal <br/>
                    <WasteGoalSlider />
                </div>
            </section>
            <section>
                <button onClick={this.goToClosetSave}>Get Started</button>
                <button onClick={this.goToAbout}>About</button>
                <button onClick={this.goToLogin}>Back</button>
            </section>
        </div> 
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SignUp);