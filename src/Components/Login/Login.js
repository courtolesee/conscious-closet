import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    login = (event) => {
        event.preventDefault();
    
        if (this.state.username && this.state.password) {
          this.props.dispatch({
            type: 'LOGIN',
            payload: {
              username: this.state.username,
              password: this.state.password,
            },
          });
        } else {
          this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
        // this.history.push(`/closet`)
    } // end login
    
    handleInputChangeFor = propertyName => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    });
    }

    goToAbout = ()=>{
        this.props.history.push(`/about`);
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
            {this.props.errors.loginMessage && (
              <h2
                className="alert"
                role="alert"
              >
                {this.props.errors.loginMessage}
              </h2>
            )}
            <form onSubmit={this.login}>
              <h1>Login</h1>
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
              <div>
                {/* <input
                  className="log-in"
                  type="submit"
                  name="submit"
                  value="Log In"
                /> */}
                <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} 
                type="submit">
                  Login
                </Button>
              </div>
            </form>
            <center>
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} 
            onClick={() => {
              this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})
              this.props.history.push(`/signup`)}}>
              Sign Up
            </Button>
            </center>
          </div>
        );
            {/* <div>
                <h1>Login</h1>
                <input placeholder="username"/><br/>
                <input placeholder="password"/>
                
                <button onClick={this.goToCloset}>Sign In</button>
            </div> 
            <div>
                What's Conscious Closet? <br/> Learn More. <br/>
                <button onClick={this.goToTryIt}>Try It!</button><button onClick={this.goToAbout}>About</button>
            </div>
            <div>
                New User? Sign Up.
                <br/><button onClick={this.goToSignUp}>Sign Up</button>
            </div>
        </>
        ) */}
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
  });

export default connect(mapStateToProps)(withStyles(styles)(Login));