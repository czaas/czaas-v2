'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AboutPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPage = exports.AboutPage = function (_React$Component) {
	_inherits(AboutPage, _React$Component);

	function AboutPage() {
		_classCallCheck(this, AboutPage);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutPage).apply(this, arguments));
	}

	_createClass(AboutPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'About Me'
				),
				_react2.default.createElement(
					'p',
					null,
					'I have been living in Central Coast California since 2008. I am a family man, I enjoy being outdoors, playing board games and video games, and have always been interested in technology.'
				),
				_react2.default.createElement(
					'h2',
					null,
					'Coding'
				),
				_react2.default.createElement(
					'p',
					null,
					'I\'m proficient in JavaScript, CSS, and HTML. I work with various frameworks such as React JS, Angular JS, WordPress. I\'m comfortable diving into other frameworks, learning and working with their API\'s. I\'ve worked with various back end technologies such as Node JS, PHP, Cold Fusion, and ASP.NET. I have found web development to be a challenging and rewarding endeavor.'
				),
				_react2.default.createElement(
					'p',
					null,
					'If you would like to get in touch or work on a project together, message me and let\'s talk. You can find samples of my code on my github.'
				)
			);
		}
	}]);

	return AboutPage;
}(_react2.default.Component);