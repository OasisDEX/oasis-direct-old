import React, {Component} from 'react';

export class QuantitySelector extends Component {
	render() {
		return <div className="Direct-Quantity-Selector">
			<span>{this.props.text}</span> <input type="number" className="Direct-Modifier--no-spin"/> <span className="Direct-Quantity-Unit">{this.props.units}</span>
		</div>
	}
}