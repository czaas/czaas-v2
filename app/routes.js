import { AppContainer } from './components/container/app-container.js';
import { IndexPage } from './components/pages/index-page.js';
import { AboutPage } from './components/pages/about-page.js';
import { ContactPage } from './components/pages/contact-page.js';
import { NotFound } from './components/pages/not-found.js';

export const routes = {
	path: '',
	component: AppContainer,
	childRoutes: [
		{
			path: '/',
			component: IndexPage,
			menuName: 'Home'
		},{
			path: '/about',
			component: AboutPage,
			menuName: 'About Me'
		},{
			path: '/contact',
			component: ContactPage,
			menuName: 'Contact Me'
		},{
			path: '*',
			component: NotFound
		}
	]
};