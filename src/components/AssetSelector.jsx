import React from 'react';
import {Assets} from './Assets';

const AssetSelector = () => (
	<div className="Direct-Asset-Selector">
		<Assets/>
		<icon style={{margin: 'calc(var(--baseline) * 5)'}} className="Direct-Icon-Transfer" />
		<Assets />
	</div>
);

export default AssetSelector;