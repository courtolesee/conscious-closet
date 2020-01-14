import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNew extends Component {

    goToCloset = () => {
        this.props.history.push(`/closet`);
    }

    goToClosetSave = () => {
        // will new to DB
        // some alert that it worked
        this.props.history.push(`/closet`);
    }

    render(){
        return (
        <div>
            <h1>Add New</h1>
            <button onClick={this.goToClosetSave}>Save</button>
            <button onClick={this.goToCloset}>Cancel</button>
        </div> 
        )
    }
}

export default connect() (AddNew);