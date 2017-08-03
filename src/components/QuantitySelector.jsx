import React from 'react';

export const QuantitySelector = ({supply, demand}) => (
	<div className="Direct-Quantity-Selector">
		<span>I want to use </span>
		<span key="provide" className="Direct-Quantity-Unit">{supply} </span>
		<span>to buy </span>
		<input type="number" className="Direct-Modifier--no-spin"/>
		<span key="demand" className="Direct-Quantity-Unit"> {demand} </span>
	</div>
);