import path from 'path';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddlware from 'webpack-hot-middleware';
import devConfig from './webpack.config.dev.js';
import prodConfig from './webpack.config.prod.js';

import async from 'async';

// Importing constants
import { apiRoot } from './app/wp-api/wp-const.js';

// importing api requests
import { getMenus } from './app/wp-api/get-menu.js';
import { getAllPages } from './app/wp-api/get-pages.js';

// helper tools to build
import { buildRoutes } from './app/routes.js';

const isProduction = process.env.NODE_ENV === 'production';

const config = (isProduction) ? prodConfig : devConfig;

const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddlware(compiler));

app.get('*', (req, res, next) => {

	// initialize variables
	let allPages; 
	let routes;
	
	// array of functions that need to be called one after the other
	const seriesArray = [
		(callback) => {	// callback argument is the next function in the array

			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
			//  A Promise returns a gaurentee that it will run a function with the passed in argument

			// In my case, 
			// I want everything from the API that this function is calling
			// I then want to call this function and handle the data as the argument
			getAllPages(req.originalUrl).then((body) => {
				allPages = '';
				allPages = JSON.parse(body);	// # JSON parsing
												// If you don't parse the response JSON object
				callback();
			});
		},

		(cb) => {

			getMenus().then((body) => {

				routes = Object.assign({}, buildRoutes(JSON.parse(body)));

				cb();
			});
		},

		() => {
			// res.send(JSON.stringify(menus));	 // then stringify it and send it to the client
												 // a JSON quote gets thrown out of whack!

			match({ routes, location: req.url }, (err, redirectLocation, props) => {
				if (err) {
					res.status(500).send(err.message);
				} else if (redirectLocation) {
					res.redirect(302, redirectLocation.pathname + redirectLocation.search);
				} else if (props) {
					const markup = renderToString(<RouterContext {...props} />);
					res.render('index', { markup, routes: JSON.stringify(routes), apiRoot: JSON.stringify(apiRoot) });
				} else {
					res.sendStatus(404);
				}
			});
		},

	];

	// Need to get all pages before sending to client
	async.series(seriesArray);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
	
	if (isProduction) {
		console.log('We\'re in production!');
	} else {
		console.log('DEV MODE');
	}
});