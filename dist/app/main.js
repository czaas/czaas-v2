'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _routes = require('./routes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = window.reactConfig;

var finalRoutes = (0, _routes.buildRoutes)(config);

console.log(finalRoutes);

_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { routes: finalRoutes, history: _reactRouter.browserHistory }), document.getElementById('app'));