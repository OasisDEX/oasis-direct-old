import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const QuantitySelector = ({supply, demand}) => {
	if (supply && demand) {
		return <div className="Direct-Quantity-Selector">
			<span>I want to use </span>
			<span key="provide" className="Direct-Quantity-Unit">{supply} </span>
			<span>to buy </span>
			<input type="number" className="Direct-Modifier--no-spin"/>
			<span key="demand" className="Direct-Quantity-Unit"> {demand} </span>
		</div>
	}

	return <div className="Direct-Quantity-Selector"> Please select desired assets! </div>;
};

QuantitySelector.propTypes = {
	supply: PropTypes.string.isRequired,
	demand: PropTypes.string.isRequired,
};

const selected = state => {
	return {
		supply: state.selected.base.label || "",
		demand: state.selected.quote.label || "",
	}
};

const QuantitySelectorComponent = connect(selected)(QuantitySelector);

export default QuantitySelectorComponent;
