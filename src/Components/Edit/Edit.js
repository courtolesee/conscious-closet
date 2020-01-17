import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';

// MUI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

class Edit extends Component {







    // routes
    goToDelete = () => {
        this.props.history.push(`/delete`);
    }

    goToClosetSave = () => {
        // will trigger math and edit DB
        this.props.history.push(`/`);
    }

    goToCloset = () => {
        this.props.history.push(`/`);
    }

    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
        <div>
            <h1>Edit</h1>
       
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.props.closet.name}
                    </Typography>
                    <Typography component="p">
                        {bull}{this.props.closet.type_id}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.goToCloset}
                    color="primary" className={classNames(classes.margin, classes.cssRoot)}>Cancel</Button>
                    <Button size="small" onClick={this.goToDelete}
                    color="primary" className={classNames(classes.margin, classes.cssRoot)}>Delete</Button>
                    <Button size="small" onClick={this.goToClosetSave}
                    color="primary" className={classNames(classes.margin, classes.cssRoot)}>Submit</Button>
                </CardActions>
      </Card>
        </div> 
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    closet: state.closet,
  });

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Edit)));