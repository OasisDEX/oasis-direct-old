import React, {Component} from 'react';

export class Assets extends Component {
	render() {
		return <div className={`Direct-Assets ${this.props.classes}`}>
			<ul className="Direct-Asset-List">
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Ethereum</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Maker</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Augur</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Golem</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>DigixDAO</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Guppy</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Golem</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Gnosis</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Bancor</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>EOS</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>Bancor</span>
				</li>
				<li className="Direct-Asset-List-Item">
					<icon /> <span>EOS</span>
				</li>
			</ul>
		</div>
	}
}