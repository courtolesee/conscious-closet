import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';

class Closet extends Component {

    goToToolTips = () => {
        this.props.history.push(`/about`);
    }

    goToGraph = () => {
        this.props.history.push(`/graph`);
    }

    goToAccountSettings = () => {
        this.props.history.push(`/accout`)
    }

    render(){
        return (
        <div>
            <h2>Closet</h2><button onClick={this.goToToolTips}>learn how</button>
            <section>
                Total Potential Water Usage <br/>
                Total Potential Waste Contribution
                <button onClick={this.goToGraph}>Graph</button>
                <button onClick={this.goToAccountSettings}>Account Settings</button>
            </section>
            <section>
                Closet
                <ItemCard />
            </section>
        </div> 
        )
    }
}

export default connect() (Closet);
