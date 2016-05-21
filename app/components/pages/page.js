import React, { Component } from 'react';

export class Page extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.route.children}}></div>
		);
	}
}
