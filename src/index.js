import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import configureStore from "./store"

// Configure the store
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
