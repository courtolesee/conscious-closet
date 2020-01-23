import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
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


const LogOutButton = props => (
  
  <Button size="small" variant="contained" color="primary" style={{backgroundColor:"#c44d1a"}}
  // className={classNames(classes.margin, classes.cssRoot)}
  className={props.className}
  onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >Log Out</Button>
  // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withStyles(styles)(LogOutButton));