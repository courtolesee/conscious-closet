import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// component imports
import About from '../About/About';
import TryIt from '../TryIt/TryIt';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import Closet from '../Closet/Closet';
import Graph from '../Graph/Graph';
import AccountSettings from '../AccountSettings/AccountSettings';
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
      <div className="App-body">
        <Router>
          <Route path="/about" component={ About } />
          <Route path="/try" component={ TryIt } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/login" component={ Login } />
          <ProtectedRoute exact path="/" component={ Closet } />
          <ProtectedRoute path="/item" component={ItemCard} />
          <ProtectedRoute path="/graph" component={ Graph } />
          <ProtectedRoute path="/account" component={ AccountSettings } />
        </Router>
      </div>
    </div>
    );
  }
}

export default connect()(App);
