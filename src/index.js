import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore } from 'redux';
import Reducer from './redux/moviesReducer';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

const Store = legacy_createStore(Reducer, applyMiddleware(thunk)) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);


