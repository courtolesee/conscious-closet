import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';

class Edit extends Component {
// conditional rendering for edit

    goToDelete = () => {
        this.props.history.push(`/delete`);
    }

    goToClosetSave = () => {
        // will trigger math and edit DB
        this.props.history.push(`/`);
    }

    goToCloset = () => {
        this.props.history.push(`/`);
    }

    render(){
        return (
        <div>
            <h1>Edit</h1>
            <button onClick={this.goToDelete}>Delete</button>
            <button onClick={this.goToClosetSave}>Submit</button>
            <button onClick={this.goToCloset}>Cancel</button>
        </div> 
        )
    }
}

export default connect() (Edit);