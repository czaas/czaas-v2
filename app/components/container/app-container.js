import React from 'react';
import { Link } from 'react-router';

export class AppContainer extends React.Component {

	constructor(props){
		super(props);

		this.handleMenuToggle = this.handleMenuToggle.bind(this);

		this.state = {
			mobileMenuOpened: false
		}
	}

	handleMenuToggle(command) {
		let menuCommand = !this.state.mobileMenuOpened;

		switch(command){
			case 'close-menu':
				menuCommand = false;
				break;
			case 'open-menu':
				menuCommand = true;
				break;
			default:
				menuCommand: !this.state.mobileMenuOpened;
		}

		this.setState({
			mobileMenuOpened: menuCommand
		});
	}

	render() {
		let currentPath = this.props.location.pathname;
		let menu = this.props.route.childRoutes.map((route, i) => {

			if(route.menuName){
				return (
					<li key={i}>
						<Link 
							className={(currentPath === route.path) ? 'on' : null} 
							to={route.path}
							onClick={this.handleMenuToggle.bind(this, 'close-menu')}>
							{route.menuName}
						</Link>
					</li>);
			}
		});

		return (
			<div className={'body-wrapper ' + ((this.state.mobileMenuOpened) ? 'is-open' : '')}>
				<nav className={'mobile-slideout-menu ' + ((this.state.mobileMenuOpened) ? 'is-open' : '')}>
					<ul>
						{menu}
					</ul>
				</nav>
				<header>
					<div className={'menuBar ' + ((this.state.mobileMenuOpened) ? 'is-open' : '')} onClick={this.handleMenuToggle}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="name">
						Cameron Zaas
					</div>
					<div className="title">
						Web Developer
					</div>
					<nav className='desktop-menu'>
						<ul>
							{menu}
						</ul>
					</nav>
				</header>
				<div className="content-container">
					<div className='content-inner'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
