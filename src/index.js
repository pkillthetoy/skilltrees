import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { gameApp } from './reducers.js'

let store = createStore(gameApp)

document.title = "Skill Tree RPG"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
