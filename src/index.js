import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import './index.css';
import reducer from './utils/reducers';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
