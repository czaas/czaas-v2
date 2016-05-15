import { AppContainer } from './components/container/app-container.js';
import { IndexPage } from './components/pages/index-page.js';
import { AboutPage } from './components/pages/about-page.js';
import { ContactPage } from './components/pages/contact-page.js';
import { NotFound } from './components/pages/not-found.js';

import { Page } from './components/pages/page.js';

import { apiRoot } from './wp-api/wp-const.js';

export function buildRoutes (wpRoutes) {

	/*
		TODO:
			- I need to pass content down with the routes and match them to the correct url before sending to client
	*/


	let intialRoute = {
			path: '',
			component: AppContainer,
			childRoutes: []
	};

	function childRoutes(menuItem){
		
		intialRoute.childRoutes.push({
			path: menuItem.url.replace(apiRoot, ''),
			component: Page,
			menuName: menuItem.title,
			children: menuItem.title
		});
		return;
	}

	let notFoundRoute = {
		path: '*',
		component: NotFound
	};

	wpRoutes.items.map(childRoutes);

	intialRoute.childRoutes.push(notFoundRoute);

	let routes = Object.assign({}, intialRoute);

	return routes;
}

export function configRoutesForClient (routes) {
	// Configure parent component then configure child route components

	routes.component = AppContainer;
	routes.childRoutes.map(addPageComponent);

	function addPageComponent(childRoute) {
		childRoute.component = Page;
	}

	return routes;
}