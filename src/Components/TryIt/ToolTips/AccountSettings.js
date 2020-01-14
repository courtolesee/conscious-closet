import React, { Component } from 'react';

// material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
    lightTooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
      },
    fab: {
      margin: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(),
      },
      input: {
        display: 'none',
    },
    headerbtns: {
        color: 'white',
        backgroundColor: '#f7af57',
    },
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });

class AccountSettingsBtn extends Component {
    state = {
        open: false,
    }

    // FUNCTIONS 
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

    // RENDER
    render(){
        const { classes } = this.props;
        return (
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
                    title='Account Settings allows you to edit your goals, and how many new items you can add per year.'
                    placement="top"
                    arrow>
                    <Button onClick={this.handleTooltipOpen} value={this.state.completed} size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                        Account Settings
                    </Button>
                </Tooltip>
            </div>
        </ClickAwayListener>
        )
    }
}

export default withStyles(styles)(AccountSettingsBtn);
