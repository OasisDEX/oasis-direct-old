import React from 'react';
import {connect} from 'react-redux';
import Tokens from './Tokens';
import {selectBase, selectQuote} from '../utils/actions';

const baseTokensProps = state => {
	return {
		tokens: state.tokens,
		selected: state.selected.base,
	}
};

const quoteTokensProps = state => {
	return {
		tokens: state.tokens,
		selected: state.selected.quote,
	}
};

const onBaseSelect = dispatch => {
	return {
		selectToken: (token) => {
			dispatch(selectBase(token));
		},
	}
};

const onQuoteSelect = dispatch => {
	return {
		selectToken: (token) => {
			dispatch(selectQuote(token));
		},
	}
};

const BaseTokens = connect(baseTokensProps, onBaseSelect)(Tokens);
const QuoteTokens = connect(quoteTokensProps, onQuoteSelect)(Tokens);

const TokensSelector = () => (
	<div className="Direct-Asset-Selector">
		<BaseTokens />
		<icon style={{margin: 'calc(var(--baseline) * 5)'}} className="Direct-Icon-Transfer"/>
		<QuoteTokens />
	</div>
);

export default TokensSelector;