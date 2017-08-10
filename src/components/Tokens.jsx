import React from 'react';

const Tokens = ({tokens, selectToken}) => (
	<div className="Direct-Assets">
		<ul className="Direct-Asset-List">
			{
				tokens.map((token) => {
					return (
						<li key={token.address} onClick={ () => selectToken(token) } className="Direct-Asset-List-Item">
							<icon />
							<span>{token.label}</span>
						</li>
					)
				})
			}
		</ul>
	</div>
);

export default Tokens;

