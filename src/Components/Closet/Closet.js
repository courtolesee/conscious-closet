import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WasteProgressBar from '../WasteProgressBar/WasteProgressBar';
import LogOutButton from '../LogOutButton/LogOutButton';

// MUI imports
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DialogContentText from '@material-ui/core/DialogContentText';
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
    cssRoot: {
        color: 'white',
        backgroundColor: '#F28705',
    },
  });

class Closet extends Component {

    state = {
        stateToStay: {
            dialogOpen: false,
        },
        stateToSend: {
            id: this.props.closet.item_id,
            typeId: '',
            typeName: '',
            name: '',
        }
    }

    handleDialogOpen = () => {
        this.setState({ dialogOpen: true });
    };
    
    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleChange = (event, newState) => {        
        this.setState({
          stateToSend:{...this.state.stateToSend, 
            [newState]: event.target.value},
        });
    };

    componentWillMount(){    
        this.props.dispatch({type: 'FETCH_CLOSET'});
    }

    addNew = () => {
        this.props.dispatch({type: `ADD_NEW`, payload: this.state.stateToSend});
        this.setState({dialogOpen: false}); 
        this.props.dispatch({type: 'FETCH_CLOSET'}); 
        this.setState({
            stateToSend: {name: ''} 
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div> 
                <section>
                <h2>Hello, {this.props.user.username}</h2>
                <LogOutButton className="log-in" />
                <Button size="small" variant="contained" color="primary" style={{backgroundColor:"#74bad1"}} 
                className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToAccountSettings}>
                    Account Settings
                </Button>
                <WaterProgressBar />
                <WasteProgressBar />
                <h2>Closet
                <Fab color="primary" aria-label="Add" onClick={this.handleDialogOpen} style={{backgroundColor:"#74bad1", marginLeft:"300px"}} size="small">
                        <AddIcon />
                </Fab></h2>
                </section>
                <section className="closet"> 

                    <Dialog
                        open={this.state.dialogOpen}
                        onClose={this.handleDialogClose}
                        aria-labelledby="form-dialog-title"
                        >
                        <DialogTitle id="form-dialog-title">Add New Item</DialogTitle>
                        <DialogContent>
                            <TextField
                                value={this.state.stateToSend.name}
                                onChange={(event)=>this.handleChange(event, 'name')}
                                inputProps={{
                                    name: 'name',
                                    id: 'typeId'
                                }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Item Name"
                                type="text"
                                fullWidth
                            />
                            <DialogContentText>
                                Item Type
                            </DialogContentText>
                            <Select
                                labelId="demo-controlled-open-select"
                                label="Item Type"
                                value={this.state.stateToSend.typeId}
                                onChange={(event)=>this.handleChange(event, 'typeId', 'typeName')}
                                inputProps={{
                                    name: 'name',
                                    id: 'typeId'
                                }}
                                style={{backgroundColor: 'white'}}
                            >
                                <MenuItem value={1}>t-shirt</MenuItem>
                                <MenuItem value={2} >jeans</MenuItem>
                                <MenuItem value={3} >shoes</MenuItem>
                                <MenuItem value={4} >sweatshirt/sweater</MenuItem>
                                <MenuItem value={5}>winter jacket</MenuItem>
                            </Select>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Cancel
                            </Button>
                            <Button onClick={this.addNew} color="primary">
                            Add
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {this.props.closet.map((closet, i)=>{
                        return <ItemCard key={i} closet={closet}/>
                    })}
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    closet: state.closet,
  });

export default connect(mapStateToProps)(withStyles(styles)(Closet));
