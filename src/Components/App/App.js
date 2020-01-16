import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// component imports
import Login from '../Login/Login';
import About from '../About/About';
import TryIt from '../TryIt/TryIt';
import SignUp from '../SignUp/SignUp';
import Closet from '../Closet/Closet';
import Graph from '../Graph/Graph';
import AccountSettings from '../AccountSettings/AccountSettings';
import AddNew from '../AddNew/AddNew';
import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';
import ItemCard from '../ItemCard/ItemCard';

class App extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        Conscious Closet
      </header>
        <Router>
          <Route exact path="/" component={ Login } />
          <Route path="/about" component={ About } />
          <Route path="/try" component={ TryIt } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/closet" component={ Closet } />
          <Route path="/item" component={ItemCard} />
          <Route path="/graph" component={ Graph } />
          <Route path="/account" component={ AccountSettings } />
          <Route path="/add" component={ AddNew } />
          <Route path="/delete" component={ Delete } />
          <Route path="/edit" component={ Edit } />
        </Router>
    </div>
    );
  }
}

export default connect()(App);
