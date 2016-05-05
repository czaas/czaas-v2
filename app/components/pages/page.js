import React, { Component } from 'react';

export class Page extends Component {
	render() {
		return (
			<div>
				{this.children.props}
			</div>
		);
	}
}
