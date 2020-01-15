import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';


let userGoals = (state = [], action) => {
    if(action.type === 'USER_SETTINGS') {
        return state;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        userGoals
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

