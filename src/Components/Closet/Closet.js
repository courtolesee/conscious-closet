import React, { Component } from 'react';
// import { connect } from 'react-redux';
// connect get redux's: props, dispatch
import ItemCard from '../ItemCard/ItemCard';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WasteProgressBar from '../WasteProgressBar/WasteProgressBar';

// material UI
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    fab: {
      margin: theme.spacing(2),
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
    },
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
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
        const { classes } = this.props;
        return (
            <div>
                <WaterProgressBar />
                <WasteProgressBar />
                <section className="closetSticky">
                    <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToGraph}>
                        Graph
                    </Button>
                    <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToAccountSettings}>
                    Account Settings
                    </Button>
                </section>
                <section className="closet">
                    Closet 
                    <Fab color="primary" aria-label="Add" onClick={this.goToAddNew} style={{backgroundColor:"#03A696", marginLeft:"300px"}} size="small">
                        <AddIcon />
                    </Fab>
                    <ItemCard />
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(Closet);


