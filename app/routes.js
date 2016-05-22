import { AppContainer } from './components/container/app-container.js';
import { NotFound } from './components/pages/not-found.js';
import { Page } from './components/pages/page.js';
import { Feed } from './components/pages/feed.js';

import { apiRoot } from './wp-api/wp-const.js';

export function buildRoutes (wpRoutes, wpContent) {

	/*
		TODO:
			- I need to pass content down with the routes and match them to the correct url before sending to client
	*/
	let contentAndSlug = [];

	let intialRoute = {
			path: '',
			component: AppContainer,
			childRoutes: []
	};

	wpContent.map(getContentAndSlug);

	function getContentAndSlug(wpPage) {
		// getting content and slug objects
		let myContent = {
			content: wpPage.content.rendered,
			slug: wpPage.link.replace(apiRoot, '')
		};

		contentAndSlug.push(myContent);
	}

	function findContent(pageUrl) {
		// when routes are built, assign the content to the route
		let pageContent = '';
		contentAndSlug.forEach((page) => {
			if (page.slug === pageUrl) {
				pageContent = page.content;
			}
		});

		return pageContent;
	}

	function childRoutes(menuItem){
		let pageUrl = menuItem.url.replace(apiRoot, '');

		function capitalizeFirstLetter(string) {
			string.toLowerCase();
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		let componentType = capitalizeFirstLetter(menuItem.attr);
		
		let newRoute = {
			path: pageUrl,
			type: `${componentType}`,
			menuName: menuItem.title,
			children: findContent(pageUrl)
		};
		addComponentToRoute(newRoute);

		intialRoute.childRoutes.push(newRoute);
		return;
	}

	let notFoundRoute = {
		path: '*',
		component: NotFound,
		type: 'NotFound'
	};

	wpRoutes.items.map(childRoutes);

	intialRoute.childRoutes.push(notFoundRoute);

	let routes = Object.assign({}, intialRoute);

	return routes;
}

export function configRoutesForClient (routes) {
	// Configure parent component then configure child route components

	routes.component = AppContainer;
	routes.childRoutes.map(addComponentToRoute);

	return routes;
}

export function addComponentToRoute(childRoute) {
	switch(childRoute.type) {
		case 'NotFound':
			childRoute.component = NotFound;
			break;
		case 'Page':
			childRoute.component = Page;
			break;
		case 'Feed':
			childRoute.component = Feed;
		default:
			return;
	}
	return childRoute;
}