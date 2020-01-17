import React, { Component } from 'react';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WasteProgressBar from '../WasteProgressBar/WasteProgressBar';
import ItemCard from '../ItemCard/ItemCard';
import GraphBtn from './ToolTips/GraphBtn';
import AccountSettingsBtn from './ToolTips/AccountSettings';

// material UI
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    lightTooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
      },
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
        backgroundColor: '#f7af57',
    },
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });

class TryIt extends Component {
    state = {
        open: false,
        waterGoal: 30000,
        wasteGoal: 100,
        actualWater: 0,
        actualWaste: 0,
    }

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

    goToAddNew = () => {
        this.props.history.push(`/add`)
    }

    // FUNCTIONS 
    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpenGraph = () => {
        this.setState({ open: true });
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
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
                    <p>Here you can get to know Conscious Closet's functionality without consequence!<br/>
                        Click around to get to know how everything works. <br />
                        Try adding (+) and deleting items to see what happens. </p>
                </section>
                <WaterProgressBar />
                <WasteProgressBar />
                <section className="closetSticky">
                    <GraphBtn />
                    <AccountSettingsBtn />
                </section>
                <section className="closet">
                    Closet 
                    <Fab color="primary" aria-label="Add" onClick={this.goToAddNew} style={{backgroundColor:"#03A696", marginLeft:"300px"}} size="small">
                        <AddIcon />
                    </Fab>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(TryIt);


