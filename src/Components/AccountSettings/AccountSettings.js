import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountSettings extends Component {

    goToCloset = () => {
        this.props.history.push(`/closet`);
    }

    goToClosetSave = () => {
        // will send updates to DB
        this.props.history.push(`/closet`);
    }


    render(){
        return (
        <div>
            <section>
                New Items Per Year:<input placeholder="example: 6, 12, 24"/><br/>
                Water Usage Goal <button>learn more</button>
                Waste Contribution Goal <button>learn more</button>
            </section>
            <section>
                <button onClick={this.goToClosetSave}>Save</button>
                <button onClick={this.goToCloset}>Cancel</button>
            </section>
        </div> 
        )
    }
}

export default connect() (AccountSettings);