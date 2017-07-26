import React, {Component} from 'react';
import {ContentFrame}  from './components/content-frame'
import {Modal}  from './components/modal'
import './App.css';

class App extends Component {
	render() {
		return <Modal>
			<ContentFrame/>
		</Modal>;
	}
}

export default App;
