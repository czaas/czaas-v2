import { AppContainer } from './components/container/app-container.js';
import { IndexPage } from './components/pages/index-page.js';
import { AboutPage } from './components/pages/about-page.js';
import { ContactPage } from './components/pages/contact-page.js';
import { NotFound } from './components/pages/not-found.js';

import { Page } from './components/pages/page.js';

import getPages from './wp-api/get-pages.js';

import { apiRoot } from './wp-api/wp-const.js';

let intialRoute = {
		path: '',
		component: AppContainer,
		childRoutes: []
};

export function buildRoutes (wpRoutes) {

	function childRoutes(menuItem){
		
		intialRoute.childRoutes.push({
			path: menuItem.url.replace(apiRoot, ''),
			component: Page,
			menuName: menuItem.title,
			children: '<p>Text test</p>'
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