import React from 'react';
import {connect} from 'react-redux';

const Tokens = ({tokens}) => (
	<div className="Direct-Assets">
		<ul className="Direct-Asset-List">
			{
				tokens.map((token) => {
					return (
						<li key={token.address} className="Direct-Asset-List-Item">
							<icon />
							<span>{token.label}</span>
						</li>
					)
				})
			}
		</ul>
	</div>
);

const mapStateToProps = state => {
	return {
		tokens: state.tokens
	}
};

export default connect(mapStateToProps)(Tokens);

