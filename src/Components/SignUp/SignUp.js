import React, { Component } from 'react';
import {connect} from 'react-redux';

// MUI
import WaterGoalSlider from '../WaterGoalSlider/WaterGoalSlider';
import WasteGoalSlider from '../WasteGoalSlider/WasteGoalSlider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

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
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });


class SignUp extends Component {

    state = {
        open: false,
        username: '',
        password: '',
        newItems: '',
        waterGoal: 135000,
        wasteGoal: 80,
    }

    // routes
    goToClosetSave = () => {
        // will send new user info to db
        this.props.history.push(`/`);
    }

    goToAbout = ()=>{
        this.props.history.push(`/about`);
    }

    goToLogin = ()=>{
        this.props.history.push(`/login`);
    }

    // tool tip funcitons
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

    // data functions
    registerUser = (event) => {
        event.preventDefault();
        if (this.state.username && this.state.password 
            && this.state.newItems && this.state.waterGoal && this.state.wasteGoal){
            this.props.dispatch({
                type: 'REGISTER',
                payload: {
                    username: this.state.username,
                    password: this.state.password, 
                    newItems: Number(this.state.newItems),
                    waterGoal: Number(this.state.waterGoal),
                    wasteGoal: Number(this.state.wasteGoal),
                },
            });
            this.props.history.push(`/`)
        } else {
            this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
        }
    }

    handleInputChangeFor = propertyName => (event) => {
        console.log('changing', event.target.value);
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleWaterSliderChange = (event, newWaterValue) => {
        this.setState({waterGoal: newWaterValue});
        console.log('water:', newWaterValue);
    };

    handleWaterInputChange = event => {
    this.setState({waterGoal: event.target.value === '' ? '' : Number(event.target.value)});
    };

    handleWasteSliderChange = (event, newWasteValue) => {
        this.setState({wasteGoal: newWasteValue});
        console.log('waste:', newWasteValue);
      };

    handleWasteInputChange = event => {
    this.setState({wasteGoal: event.target.value === '' ? '' : Number(event.target.value)});
    };


    render(){
        const { classes } = this.props;
        return (
        <>
        <form onSubmit={this.registerUser}><h1>Sign Up</h1>

                <div>
                    <label htmlFor="username">
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor('password')}
                    />
                    </label>
                </div>
                {/* <div>
                    New Items Per Year:<input type="number" value={this.state.newItems} onChange={this.handleInputChangeFor('newItems')} placeholder="example: 6, 12, 24"/><br/>
                </div> */}
                <div>
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
                            <p onClick={this.handleTooltipOpen}>Gallons of Water Usage Per Year</p>
                        </Tooltip>
                    </div>
                </ClickAwayListener>

                    <WaterGoalSlider value={this.state.waterGoal} handleWaterSliderChange={this.handleWaterSliderChange} handleWaterInputChange={this.handleWaterInputChange}/>
                    Pounds of Waste Contribution Goal
                    <WasteGoalSlider value={this.state.wasteGoal} handleWasteSliderChange={this.handleWasteSliderChange} handleWasteInputChange={this.handleWasteInputChange}/>
                </div>
            <Button type="submit" size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.submitNewUser}>
                    Submit
            </Button>

        </form>

            <div>
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToLogin}>
                Back
            </Button>
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToAbout}>
                About
            </Button>
            </div>
        </>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(SignUp));