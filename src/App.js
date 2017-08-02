import React, {Component} from 'react';
import {createStore} from 'redux';
import {ContentFrame}  from './components/ContentFrame';
import {Modal}  from './components/Modal';
import {Header}  from './components/Header';
import {AssetSelector}  from './components/AssetSelector';
import {QuantitySelector}  from './components/QuantitySelector';
import './App.css';

class App extends Component {
	render() {
		return <Modal>
			<ContentFrame>
        <Header text="Choose Asset" />
				<AssetSelector />
				{/*TODO : ETH and REP should be replaced with the names of the selected Assets*/}
				<QuantitySelector supply="Ether" demand="REP"/>
			</ContentFrame>
		</Modal>;
	}
}

export default App;
