import React from 'react';


const Tokens = ({tokens, selected, selectToken}) => (
	<div className="Direct-Assets">
		<ul className="Direct-Asset-List">
			{
				tokens.map((token) => {
					return (
						<li key={token.address} onClick={ () => selectToken(token) }
								className={`Direct-Asset-List-Item  ${token.label === selected.label ? 'Direct-Modifier--selected' : '' } `}>
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

