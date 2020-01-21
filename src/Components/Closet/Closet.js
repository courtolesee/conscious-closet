import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WasteProgressBar from '../WasteProgressBar/WasteProgressBar';
import LogOutButton from '../LogOutButton/LogOutButton';

// material UI
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
        dialogOpen: false
        },
        stateToSend: {
            id: this.props.closet.item_id,
            typeId: this.props.closet.type_id,
            typeName: this.props.closet.type_name,
            name: this.props.closet.name,
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

    componentDidMount(){        
        this.props.dispatch({type: 'FETCH_CLOSET'});
    }

    addNew = () => {
        this.props.dispatch({type: `ADD_ITEM`, payload: this.state.stateToSend});
        this.setState({dialogOpen: false});    
    }

    render(){
        const { classes } = this.props;
        return (
            <div> 
                <h3>Hello, {this.props.user.username}</h3><LogOutButton className="log-in" />
                <WaterProgressBar />
                <WasteProgressBar />
                <section className="closetSticky">
                    {/* <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToGraph}>
                        Graph
                    </Button>
                    <Button size="small" variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)} onClick={this.goToAccountSettings}>
                    Account Settings
                    </Button> */}
                </section>
                <section className="closet">
                    Closet 
                    <Fab color="primary" aria-label="Add" onClick={this.handleDialogOpen} style={{backgroundColor:"#03A696", marginLeft:"300px"}} size="small">
                        <AddIcon />
                    </Fab>
                    <Dialog
                        open={this.state.dialogOpen}
                        onClose={this.handleDialogClose}
                        aria-labelledby="form-dialog-title"
                        >
                        <DialogTitle id="form-dialog-title">Add New Item</DialogTitle>
                        <DialogContent>
                            <TextField
                                onChange={(event)=>this.handleChange(event, 'name')}
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
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Item Type"
                                value={this.state.stateToSend.typeName}
                                onChange={(event)=>this.handleChange(event, 'typeName')}
                                inputProps={{
                                    name: 'nameType',
                                    id: 'typeId'
                                }}
                                style={{backgroundColor: 'white'}}
                            >
                                <MenuItem value={1}>t-shirt</MenuItem>
                                <MenuItem value={2}>jeans</MenuItem>
                                <MenuItem value={3}>shoes</MenuItem>
                                <MenuItem value={4}>sweatshirt/sweater</MenuItem>
                                <MenuItem value={5}>winter jacket</MenuItem>
                            </Select>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
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
