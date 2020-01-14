import React, { Component } from 'react';
// import { connect } from 'react-redux';
// connect get redux's: props, dispatch
import ItemCard from '../ItemCard/ItemCard';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WasteProgressBar from '../WasteProgressBar/WasteProgressBar';

// material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
      margin: theme.spacing(2),
    },
  });

class Closet extends Component {

    // routes
    goToGraph = () => {
        this.props.history.push(`/graph`);
    }

    goToAccountSettings = () => {
        this.props.history.push(`/account`)
    }

    goToAddNew = () => {
        this.props.history.push(`/add`)
    }

    render(){
        return (
            <div>
                <WaterProgressBar />
                <WasteProgressBar />
                <section className="closetSticky">
                    <button onClick={this.goToGraph}>Graph</button>
                    <button onClick={this.goToAccountSettings}>Account Settings</button>
                </section>
                <section className="closet">
                    Closet 
                    <Fab color="primary" aria-label="Add" onClick={this.goToAddNew} style={{backgroundColor:"green", marginLeft:"300px"}} size="small">
                        <AddIcon />
                    </Fab>
                    <ItemCard />
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(Closet);


