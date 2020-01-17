import React, { Component } from 'react';
import { connect } from 'react-redux';

class Delete extends Component {

    goToClosetSave = () => {
        // will trigger math and delete from DB
        this.props.history.push(`/`);
    }

    goToCloset = () => {
        this.props.history.push(`/`);
    }

    render(){
        return (
        <div>
            <h1>Delete</h1>
            <button onClick={this.goToClosetSave}>Delete</button>
            <button onClick={this.goToCloset}>Cancel</button>
        </div> 
        )
    }
}

export default connect() (Delete);