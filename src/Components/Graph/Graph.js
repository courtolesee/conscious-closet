import React, { Component } from 'react';
import { connect } from 'react-redux';

class Graph extends Component {

    goToCloset = () => {
        this.props.history.push(`/closet`);
    }

    render(){
        return (
        <div>
            <h1>Graph</h1>
                <button onClick={this.goToCloset}>Back</button>
        </div> 
        )
    }
}

export default connect() (Graph);