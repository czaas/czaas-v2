import React from 'react';
import { Link } from 'react-router';

export class AppContainer extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		let currentPath = this.props.location.pathname;
		let menu = this.props.route.childRoutes.map((route, i) => {

			if(route.menuName){
				return (
					<li key={i}>
						<Link 
							className={(currentPath === route.path) ? 'on' : null} 
							to={route.path}>
							{route.menuName}
						</Link>
					</li>);
			}
		});

		return (
			<div>
				<header>
					<div className="name">
						Cameron Zaas
					</div>
					<div className="title">
						Web Developer
					</div>
					<nav>
						<ul>
							{menu}
						</ul>
					</nav>
				</header>
				<div className="content-container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
