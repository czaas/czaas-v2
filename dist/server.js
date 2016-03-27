'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('./webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _routes = require('./app/routes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpackConfig2.default);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(_express2.default.static(__dirname + '/dist'));
app.use((0, _webpackDevMiddleware2.default)(compiler));
app.use((0, _webpackHotMiddleware2.default)(compiler));

app.get('*', function (req, res) {
	(0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (err, redirectLocation, props) {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (props) {
			var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));

			res.render('index', { markup: markup });
		} else {
			res.sendStatus(404);
		}
	});
});

app.listen(3000);