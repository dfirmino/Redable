import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducers/index'
import './index.css';
import App from './App';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
        <App store={store}/>
    ,document.getElementById('root'));
