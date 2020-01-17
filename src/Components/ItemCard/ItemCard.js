import React, { Component } from 'react';
import { connect } from 'react-redux';

// MUI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = theme => ({
    card: {
      minWidth: 275,
      backgroundColor: 'black',
      color: 'white',
      marginBottom: '6px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },    
    button: {
        margin: theme.spacing(),
      },
      input: {
        display: 'none',
    },
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });


class ItemCard extends Component {

    goToEdit = () => {
        this.props.history.push(`/edit`);
    }

    goToDelete = () => {
        this.props.history.push(`/delete`);
    }

    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
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
          <Button size="small" onClick={this.goToEdit}
          color="primary" className={classNames(classes.margin, classes.cssRoot)}>Edit</Button>
          <Button size="small" onClick={this.goToDelete}
          color="primary" className={classNames(classes.margin, classes.cssRoot)}>Delete</Button>
        </CardActions>
      </Card>
        )
    }
}

export default connect()(withStyles(styles)(ItemCard));