import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reducers } from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root')
)