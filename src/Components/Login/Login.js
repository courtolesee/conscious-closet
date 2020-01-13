import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    goToCloset = ()=>{
        this.props.history.push(`/closet`);
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
        return (
        <>
            <div>
                <h1>Conscious Closet</h1>
                <input placeholder="username"/><br/>
                <input placeholder="password"/><button onClick={this.goToCloset}>Sign In</button>
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
        )
    }
}

export default connect() (Login);