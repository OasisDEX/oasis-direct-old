import React from 'react';
import Tokens from './Tokens';

const TokensSelector = () => (
	<div className="Direct-Asset-Selector">
		<Tokens/>
		<icon style={{margin: 'calc(var(--baseline) * 5)'}} className="Direct-Icon-Transfer" />
		<Tokens />
	</div>
);

export default TokensSelector;