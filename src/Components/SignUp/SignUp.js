import React, { Component } from 'react';
import { connect } from 'react-redux';
import WaterGoalSlider from '../WaterGoalSlider/WaterGoalSlider';

class SignUp extends Component {

    goToClosetSave = () => {
        // will send new user info to db
        this.props.history.push(`/closet`);
    }

    goToAbout = ()=>{
        this.props.history.push(`/about`);
    }

    goToLogin = ()=>{
        this.props.history.push(`/`);
    }


    render(){
        return (
        <div>
            <section> Sign Up
                <div>
                    <input placeholder="username"/><br/>
                    <input placeholder="password"/><br/>
                </div>
                <div>
                    New Items Per Year:<input placeholder="example: 6, 12, 24"/><br/>
                    Water Usage Goal <br/>
                    <WaterGoalSlider />
                    Waste Contribution Goal <br/>
                </div>
            </section>
            <section>
                <button onClick={this.goToClosetSave}>Get Started</button>
                <button onClick={this.goToAbout}>About</button>
                <button onClick={this.goToLogin}>Back</button>
            </section>
        </div> 
        )
    }
}

export default connect() (SignUp);