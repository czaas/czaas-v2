import React, { Component } from 'react';

import { getPosts } from './../../wp-api/get-posts.js';

export class Feed extends Component {

	constructor (props) {

		super(props);

		let currentRoute = this.props.location.pathname.replace(/\//g, '');

		this.state = {
			wpContent: [],
			currentRoute: currentRoute
		};
	}

	componentDidMount() {
		getPosts(this.state.currentRoute).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				wpContent: [...json]
			});
		});
	}

	render() {
		let content = this.state.wpContent.map((post, i) => {
			return (
				<div>
					<div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>

					{(this.state.wpContent.length + 1 <= i) ? <hr /> : null}
				</div>
			);
		});

		return (
			<div>
				<h1>{this.props.route.menuName}</h1>
				{content}
			</div>
		);
	}
}
