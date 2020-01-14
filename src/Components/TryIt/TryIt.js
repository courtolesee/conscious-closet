import React, { Component } from 'react';
import { connect } from 'react-redux';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WasteProgressBar from '../WasteProgressBar/WasteProgressBar';
import ItemCard from '../ItemCard/ItemCard';

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
        margin: theme.spacing(),
      },
      input: {
        display: 'none',
    },
    headerbtns: {
        color: 'white',
        backgroundColor: '#d6a05e',
    },
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });

class TryIt extends Component {

    // ROUTES
    goToAbout = ()=>{
        this.props.history.push(`/about`);
    }

    goToLogin = ()=>{
        this.props.history.push(`/`);
    }

    goToSignUp = ()=>{
        this.props.history.push(`/signup`);
    }

    goToGraph = () => {
        this.props.history.push(`/graph`);
    }

    goToAccountSettings = () => {
        this.props.history.push(`/account`)
    }

    goToAddNew = () => {
        this.props.history.push(`/add`)
    }

    // RENDER
    render(){
        const { classes } = this.props;
        return (
            <div>
                <section>
                    <h1>
                    <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.headerbtns)}
                    onClick={this.goToAbout}>About</Button>
                    <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.headerbtns)}
                    onClick={this.goToLogin}>Login</Button>
                    <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.headerbtns)}
                    onClick={this.goToSignUp}>Sign Up</Button><br/>
                    Try It!
                    </h1>
                </section>
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

export default withStyles(styles)(TryIt);


