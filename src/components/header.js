import React, {Component} from 'react'

export class Header extends Component {
	render() {
		return <header className="Direct-Header">
			{this.props.content}
		</header>;
	}
}