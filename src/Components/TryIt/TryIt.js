import React, { Component } from 'react';
import { connect } from 'react-redux';

class TryIt extends Component {

    goToAbout = ()=>{
        this.props.history.push(`/about`);
    }

    goToLogin = ()=>{
        this.props.history.push(`/`);
    }

    goToSignUp = ()=>{
        this.props.history.push(`/signup`);
    }

    render(){
        return (
        <div>
            <h2>Try It!</h2>
            <section>
                <button onClick={this.goToAbout}>About</button>
                <button onClick={this.goToLogin}>Login</button>
                <button onClick={this.goToSignUp}>Sign Up</button>
            </section>
        </div> 
        )
    }
}

export default connect() (TryIt);