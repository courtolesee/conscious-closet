import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemCard extends Component {

    goToEdit = () => {
        this.props.history.push(`/edit`);
    }

    goToDelete = () => {
        this.props.history.push(`/delete`);
    }

    render(){
        return (
        <div>
            <button onClick={this.goToEdit}>Edit</button>
            <button onClick={this.goToDelete}>Delete</button>
        </div> 
        )
    }
}

export default connect() (ItemCard);