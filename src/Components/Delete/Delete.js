import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';

class Delete extends Component {

    goToClosetSave = () => {
        // will trigger math and delete from DB
        this.props.history.push(`/closet`);
    }

    goToEdit = () => {
        this.props.history.push(`/edit`);
    }

    goToCloset = () => {
        this.props.history.push(`/closet`);
    }

    render(){
        return (
        <div>
            <h1>Delete</h1>
            <ItemCard />
            <button onClick={this.goToClosetSave}>Delete</button>
            <button onClick={this.goToEdit}>Edit</button>
            <button onClick={this.goToCloset}>Cancel</button>
        </div> 
        )
    }
}

export default connect() (Delete);