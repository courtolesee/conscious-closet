import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

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
        return (
        <div>
        <h2>About</h2>
        <button onClick={this.goToLogin}>Back</button>
        <button onClick={this.goToLogin}>Try It!</button>
        <button onClick={this.goToSignUp}>Sign Up!</button>
        </div> 
        )
    }
}

export default connect() (Login);