import React, {Component} from 'react';
import {Assets} from './Assets';

export class AssetSelector extends Component {
	render() {
		return <div className="Direct-Asset-Selector">
        <Assets/>
			   <icon style={{margin: 'calc(var(--baseline) * 5)'}} className="Direct-Icon-Transfer" />
			  <Assets />
		</div>
	}
}