import React, {Component} from 'react';

export class QuantitySelector extends Component {
	render() {
		return <div className="Direct-Quantity-Selector">
			<span>I want to use </span>
			<span key="provide" className="Direct-Quantity-Unit">{this.props.supply} </span>
			<span>to buy </span>
			<input type="number" className="Direct-Modifier--no-spin"/>
			<span key="demand" className="Direct-Quantity-Unit"> {this.props.demand} </span>
		</div>
	}
}