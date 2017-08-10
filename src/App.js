import React from 'react';
import ContentFrame  from './components/ContentFrame';
import Modal  from './components/Modal';
import Header  from './components/Header';
import TokensSelector from './components/TokensSelector';
import QuantitySelector  from './components/QuantitySelector';
import './App.css';

const App = () => (
	<Modal>
		<ContentFrame>
			<Header text="Choose Asset"/>
			<TokensSelector />
			{/*TODO : ETH and REP should be replaced with the names of the selected Assets*/}
			<QuantitySelector supply="Ether" demand="REP"/>
		</ContentFrame>
	</Modal>
);

export default App;
