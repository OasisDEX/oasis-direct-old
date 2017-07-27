import React, {Component} from 'react'

export class Header extends Component {
	render() {
		return <header className='Direct-Header Direct-Modifier--no-border'>
			<h4 className='Direct-Modifier--uppercase'>{this.props.text}</h4>
		</header>;
	}
}