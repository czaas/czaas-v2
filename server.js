import path from 'path';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddlware from 'webpack-hot-middleware';
import config from './webpack.config.js';

import { routes } from './app/routes.js';

const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddlware(compiler));

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirectLocation, props) => {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (props) {
			const markup = renderToString(<RouterContext {...props} />);

			res.render('index', { markup });
		} else {
			res.sendStatus(404);
		}
	});
});

app.listen(3000);