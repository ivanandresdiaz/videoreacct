import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './assets/styles/App.scss';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
const Container= document.getElementById('app');
ReactDOM.render(
    <Provider>
        <App/>
    </Provider>
,Container);