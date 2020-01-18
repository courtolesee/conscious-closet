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
        this.props.dispatch({type: `ADD_ITEM`, payload: this.state})
    }

    goToCloset = () => {
        this.props.history.push(`/`);
    }

    goToClosetSave = () => {
        // will new to DB
        // some alert that it worked
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
            {/* <FormControl >
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.type}
                onChange={this.handleChange('type')}
                style={{backgroundColor: 'white'}}
                >
                <MenuItem value={'tshirt'}>t-shirt</MenuItem>
                <MenuItem value={'jeans'}>jeans</MenuItem>
                <MenuItem value={'shoes'}>shoes</MenuItem>
                <MenuItem value={'sweatshirt/sweater'}>sweatshirt/sweater</MenuItem>
                <MenuItem value={'winter jacket'}>winter jacket</MenuItem>
                </Select>
            </FormControl><br/> */}
            <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
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
