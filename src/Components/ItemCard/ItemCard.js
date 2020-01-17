import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

// MUI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const styles = theme => ({
    card: {
      minWidth: 275,
      backgroundColor: '#2b3636',
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
    state = {
        nameNotEditable: false,
        isTypeEditable: false,
        type: '',
        open: false,
    }

    editName = () => {
        this.setState({
            nameNotEditable: true, 
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    goToDelete = () => {
        this.props.history.push(`/delete`);
    }

    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2" onClick={this.editName}>
                {this.props.closet.name}
            </Typography>
            {this.state.nameNotEditable ?
                    <form variant="h5" component="h2" autoComplete="off">
                    <Button className={classes.button} onClick={this.handleOpen}>
                    </Button>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">Type</InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'type',
                            id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>t-shirt</MenuItem>
                            <MenuItem value={2}>jeans</MenuItem>
                            <MenuItem value={3}>shoes</MenuItem>
                            <MenuItem value={4}>sweatshirt/sweater</MenuItem>
                            <MenuItem value={5}>winter jacket</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                :<>
                <Typography component="p" onClick={this.handleClose}>
                    {bull}{this.props.closet.type_name}
                </Typography>
           </>}            
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.goToDelete}
          color="primary" className={classNames(classes.margin, classes.cssRoot)}>Delete</Button>
        </CardActions>
      </Card>
        )
    }
}

ItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(ItemCard)));
