import React, { Component } from 'react';
import { connect } from 'react-redux';

// MUI imports
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
      margin: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(),
      },
      input: {
        display: 'none',
    },
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });

class About extends Component {

    goToLogin = ()=>{
        this.props.history.push(`/`);
    }

    goToTryIt = ()=>{
        this.props.history.push(`/try`);
    }

    goToSignUp = ()=>{
        this.props.history.push(`/signup`);
    }

    render(){
        const { classes } = this.props;
        return (
        <div>
            <h2>About</h2>
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToLogin}>
                Login
            </Button>
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToTryIt}>
                Try It!
            </Button>
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToSignUp}>
                Sign Up
            </Button>
        </div> 
        )
    }
}

export default connect()(withStyles(styles)(About));