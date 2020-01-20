import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    button: {
        margin: theme.spacing(),
      },
      cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });

class AddNew extends Component {
    state ={
        name: '',
        type: ''
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value 
        });
        console.log('changing', this.state.name);
    };

    handleSubmit = () => {
        this.props.dispatch({type: `ADD_ITEM`, payload: this.state});
        this.props.history.push(`/`);

    }

    goToCloset = () => {
        this.props.history.push(`/`);
    }

    render(){
        const { classes } = this.props;

        return (
        <div>
            <h1>Add New</h1>
            <TextField
                id="filled-name"
                label="Name"
                margin="normal"
                variant="filled"
                type="text"
                style={{backgroundColor: 'white'}}
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
            /><br/>
            {/* <form variant="h5" component="h2" autoComplete="off">
                <Button className={classes.button} onClick={this.handleOpen}>
                </Button>
                <InputLabel htmlFor="demo-simple-select-label" style={{color: 'white'}}
                    >{this.state.typeName}</InputLabel>
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.stateToSend.typeName}
                        onChange={(event)=>this.handleChange(event, 'typeName')}
                        style={{backgroundColor: 'white'}}
                    >
                        <MenuItem value={1}>t-shirt</MenuItem>
                        <MenuItem value={2}>jeans</MenuItem>
                        <MenuItem value={3}>shoes</MenuItem>
                        <MenuItem value={4}>sweatshirt/sweater</MenuItem>
                        <MenuItem value={5}>winter jacket</MenuItem>
                    </Select>
                </FormControl>
            </form>  */}
            <Button size="small" variant="contained" color="primary" 
            className={classNames(classes.margin, classes.cssRoot)}
            onClick={this.handleSubmit}>
                Add
            </Button>
        </div> 
        )
    }
}

AddNew.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(AddNew));
