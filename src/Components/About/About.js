import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return (
        <div>
            <h2>About</h2>
            <button onClick={this.goToLogin}>Back</button>
            <button onClick={this.goToTryIt}>Try It!</button>
            <button onClick={this.goToSignUp}>Sign Up!</button>
        </div> 
        )
    }
}

export default connect() (About);