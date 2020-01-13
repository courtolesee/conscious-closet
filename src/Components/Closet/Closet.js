import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';

// material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
    linearColorPrimaryWater: {
        backgroundColor: 'white',
    },
    linearBarColorPrimaryWater: {
        backgroundColor: '#3F68A8',
    },
    linearColorPrimaryWaste: {
        backgroundColor: 'white',
    },
    linearBarColorPrimaryWaste: {
        backgroundColor: '#BD692D',
    },
  });

class Closet extends Component {

    // routes
    goToGraph = () => {
        this.props.history.push(`/graph`);
    }

    goToAccountSettings = () => {
        this.props.history.push(`/account`)
    }

    goToAddNew = () => {
        this.props.history.push(`/add`)
    }

    // state
    state = {
        open: false,
        completed: 0,
        goal: 100,
      };
    
    // functions
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
                <section>Total Potential Waste Contribution
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
                        <LinearProgress classes={{colorPrimary: classes.linearColorPrimaryWaste, barColorPrimary: classes.linearBarColorPrimaryWaste}} onClick={this.handleTooltipOpen} color="primary" variant="determinate" value={this.state.completed} style={{height:"20px"}} />
                        </Tooltip>
                    </div>
                    </ClickAwayListener>
                </section>


                <section className="closetSticky">
                    <button onClick={this.goToGraph}>Graph</button>
                    <button onClick={this.goToAccountSettings}>Account Settings</button>
                </section>
                <section className="closet">
                    Closet 
                    <Fab color="primary" aria-label="Add" onClick={this.goToAddNew} style={{backgroundColor:"green", marginLeft:"300px"}} size="small">
                        <AddIcon />
                    </Fab>
                    <ItemCard />
                </section>
                    <div>

                </div>
               
            </div>
        )
    }
}

Closet.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Closet);


