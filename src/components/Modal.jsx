import React, {Component} from 'react';

export class Modal extends Component {
	render() {
		return <div className="Direct-Modal">
			{this.props.children}
		</div>
	}
}