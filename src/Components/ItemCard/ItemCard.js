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
import TextField from '@material-ui/core/TextField';

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
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
      },
  });


class ItemCard extends Component {
    state = {
       stateToStay: {
            isNameEditable: false,
            isTypeEditable: false,
            type: '',
            open: false 
        },
        stateToSend: {
            typeId: this.props.closet.type_id,
            id: this.props.closet.item_id,
            typeName: this.props.closet.type_name,
            name: this.props.closet.name,
        }
    }

    componentDidMount = () => {  
    }
    

    edit = (name, value, edit) => {
        this.setState({
            [name]: value,
            [edit]: true, 
        })
    }

    handleChange = (event, newState) => {
        this.setState({
          stateToSend:{...this.state.stateToSend, 
            [newState]: event.target.value},
        });
    };

    sendNameChange = () => {
        this.props.dispatch({type: `UPDATE_NAME`, payload: this.state.stateToSend});
        this.setState({isNameEditable: false});    
    }

    sendTypeNameChange = () => {
        this.props.dispatch({type: `UPDATE_TYPE_NAME`, payload: this.state.stateToSend});
        this.setState({isTypeEditable: false});    
    }
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    deleteItem = () => {
        console.log('in closet is', this.props.closet);
        this.props.dispatch({ type: 'DELETE_ITEM', payload: this.props.closet})
    };

    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return ( 
        <Card className={classes.card}>
        <CardContent> 
            {this.state.isNameEditable ?
                <><TextField
                id="filled-name"
                label="Name"
                className={classes.textField}
                value={this.props.closet.name}
                type="text"
                name={this.props.closet.name}
                onChange={(event)=>this.handleChange(event, 'name')}
                margin="normal"
                variant="filled"
                style={{backgroundColor: 'white'}}
                />
                <button onClick={this.sendNameChange}>Save</button>
                </> :
                <><Typography 
                variant="h5" 
                component="h2" 
                onClick={()=>this.edit('name', this.props.closet.name, 'isNameEditable')}
                >
                {this.props.closet.name}
                </Typography>
                </>
            }
                <><Typography component="p" 
                onClick={()=>this.edit('typeName', this.props.closet.type_name, 'isTypeEditable')}>
                    {bull}{this.props.closet.type}
                </Typography></>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.deleteItem}
          color="primary" className={classNames(classes.margin, classes.cssRoot)}>Delete</Button>
        </CardActions>
      </Card>
        )
    }
}

ItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user 
  });

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ItemCard)));
