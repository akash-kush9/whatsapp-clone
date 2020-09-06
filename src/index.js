import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './store/reducers/auth';
import roomReducer from './store/reducers/room';
import messageReducer from './store/reducers/message';
import { BrowserRouter as Router }  from 'react-router-dom'

const composeEnhancers = compose;
const rootReducer = combineReducers({ auth : authReducer , room:roomReducer , message : messageReducer})
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
const app =(  
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>);

ReactDOM.render(  app,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
