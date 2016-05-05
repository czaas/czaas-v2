'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = undefined;

var _appContainer = require('./components/container/app-container.js');

var _indexPage = require('./components/pages/index-page.js');

var _aboutPage = require('./components/pages/about-page.js');

var _contactPage = require('./components/pages/contact-page.js');

var _notFound = require('./components/pages/not-found.js');

var _getPages = require('./wp-api/get-pages.js');

var _getPages2 = _interopRequireDefault(_getPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = {
	path: '',
	component: _appContainer.AppContainer,
	childRoutes: [{
		path: '/',
		component: _indexPage.IndexPage,
		menuName: 'Portfolio'
	}, {
		path: '/about',
		component: _aboutPage.AboutPage,
		menuName: 'About Me'
	}, {
		path: '/contact',
		component: _contactPage.ContactPage,
		menuName: 'Contact Me'
	}, {
		path: '*',
		component: _notFound.NotFound
	}]
};