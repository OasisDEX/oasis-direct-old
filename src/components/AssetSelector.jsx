import React, {Component} from 'react';
import {Assets} from './Assets';

export class AssetSelector extends Component {
	render() {
		return <div className="Direct-Asset-Selector">
        <Assets classes="Direct-Modifier--left"/>
			   <icon className="Direct-Icon-Transfer" />
			  <Assets classes="Direct-Modifier--right"/>
		</div>
	}
}