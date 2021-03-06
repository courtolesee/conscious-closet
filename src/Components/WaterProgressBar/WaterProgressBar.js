import React, { Component } from 'react';
import { connect } from 'react-redux';

// MUI
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
        backgroundColor: '#d3dee0',
    },
    linearBarColorPrimary: {
        backgroundColor: '#276c7b',
    },
  });

class WaterProgressBar extends Component {


    formatNum = (num) => {
        return num.toLocaleString();
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
        this.props.dispatch({ type: 'FETCH_USER' })
    }

    componentDidUpdate(prevProps){
        if(this.props.actualWater !== prevProps.actualWater){
          this.setState({completed: this.props.actualWater});
        }
      }

    render(props){
        const { classes } = this.props;
        
        let MIN = 0;
        let MAX = this.state.goal;
        const bar = this.state.completed;
        const normalise = value => {
            let normalizedNum = (Number(bar) - MIN) * 100 / (Number(MAX) - MIN)
            if (normalizedNum > 100){
              normalizedNum = 100;
            }
            return normalizedNum;
        };

        return (
            <div> 
                <section>Total Gallons of Potential Water Usage 
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
                        title=
                        {`${Number(this.props.actualWater).toLocaleString()} / ${Number(this.props.waterGoal).toLocaleString()}`}
                        placement="left-end"
                        arrow>
                        <LinearProgress value={normalise(this.state.completed)} classes={{colorPrimary: classes.linearColorPrimary, barColorPrimary: classes.linearBarColorPrimary}} 
                        onClick={this.handleTooltipOpen} color="primary" variant="determinate" style={{height:"20px"}}/>
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
    actualWater: state.user.actual_water,
});

export default connect(mapStateToProps)(withStyles(styles)(WaterProgressBar));
