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
        // const { classes } = props;
        return (
        <div>
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
                  title="Click to see your actual numbers! This will show how many gallons of water currently used by your closet / your goal"
                >
                  <Button className="learnHowBtn" variant="contained" color="primary" onClick={this.handleTooltipOpen}>learn how</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
            <section className="closetSticky">
                Total Potential Water Usage <br/>
                <LinearProgress variant="determinate" value={this.state.completed} />
                <br />
                Total Potential Waste Contribution <br />
                <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
                <button onClick={this.goToGraph}>Graph</button>
                <button onClick={this.goToAccountSettings}>Account Settings</button>
            </section>
            <section>
                Closet 
                {/* <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
                <ItemCard /> */}
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


