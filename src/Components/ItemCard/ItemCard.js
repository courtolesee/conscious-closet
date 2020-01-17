import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});


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
            <p></p>
        </div> 
        )
    }
}

const mapStateToProps = state => ({
    closet: state.closet,
});

export default connect(mapStateToProps)(withStyles(styles)(ItemCard));