import React, {Component} from 'react';
import {ContentFrame}  from './components/content-frame';
import {Modal}  from './components/modal';
import {Header}  from './components/header';
import './App.css';

class App extends Component {
	render() {
		return <Modal>
			<ContentFrame>
        <Header text='Choose Asset'/>
			</ContentFrame>
		</Modal>;
	}
}

export default App;
