import { AppContainer } from './components/container/app-container.js';
import { IndexPage } from './components/pages/index-page.js';
import { AboutPage } from './components/pages/about-page.js';
import { ContactPage } from './components/pages/contact-page.js';
import { NotFound } from './components/pages/not-found.js';

import { Page } from './components/pages/page.js';

import getPages from './wp-api/get-pages.js';

let intialRoute = {
		path: '',
		component: AppContainer,
		childRoutes: []
};

export function buildRoutes (wpRoutes) {
	let routes = {};

	function childRoutes(menuItem){
		var rootUrl = wpRoutes.apiRoot;
		
		intialRoute.childRoutes.push({
			path: menuItem.url.replace(rootUrl, ''),
			component: Page,
			menuName: menuItem.title,
			children: '<p>Text test</p>'
		});
	}

	let notFoundRoute = {
		path: '*',
		component: NotFound
	};

	wpRoutes.items.forEach(childRoutes);

	intialRoute.childRoutes.push(notFoundRoute);

	routes.assign({}, intialRoute);

	return routes;
}