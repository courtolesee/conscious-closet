import React, { Component } from 'react';
import { connect } from 'react-redux';

// MUI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
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
  };


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
            {bull}{this.props.closet.name}
          </Typography>
          <Typography component="p">
            {bull}{this.props.closet.type_id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.goToEdit}>Edit</Button>
          <Button size="small" onClick={this.goToDelete}>Delete</Button>
        </CardActions>
      </Card>
        )
    }
}


export default connect()(withStyles(styles)(ItemCard));