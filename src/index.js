import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// TODO: Extract this in a separate file for reducers.
const reducer = (state, action) => {
};


const store = createStore(reducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
