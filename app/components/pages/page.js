import React, { Component } from 'react';

export class Page extends Component {
	constructor(props) {
		super(props);
		// console.log(props);
	}
	render() {
		return (
			<div>
				{this.props.route.children}
			</div>
		);
	}
}
