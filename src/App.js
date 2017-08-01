import React, {Component} from 'react';
import {ContentFrame}  from './components/ContentFrame';
import {Modal}  from './components/Modal';
import {Header}  from './components/Header';
import {AssetSelector}  from './components/AssetSelector';
import './App.css';

class App extends Component {
	render() {
		return <Modal>
			<ContentFrame>
        <Header text="Choose Asset" />
				<AssetSelector />
			</ContentFrame>
		</Modal>;
	}
}

export default App;
