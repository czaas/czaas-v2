'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppContainer = exports.AppContainer = function (_React$Component) {
	_inherits(AppContainer, _React$Component);

	function AppContainer(props) {
		_classCallCheck(this, AppContainer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppContainer).call(this, props));

		_this.handleMenuToggle = _this.handleMenuToggle.bind(_this);

		_this.state = {
			mobileMenuOpened: false,
			isWindowLoaded: false
		};
		return _this;
	}

	_createClass(AppContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				isWindowLoaded: true
			});
		}
	}, {
		key: 'handleMenuToggle',
		value: function handleMenuToggle(command) {
			var menuCommand = !this.state.mobileMenuOpened;

			switch (command) {
				case 'close-menu':
					menuCommand = false;
					break;
				case 'open-menu':
					menuCommand = true;
					break;
				default:
					menuCommand: !this.state.mobileMenuOpened;
			}

			this.setState({
				mobileMenuOpened: menuCommand
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var currentPath = this.props.location.pathname;
			var menu = this.props.route.childRoutes.map(function (route, i) {

				if (route.menuName) {
					return _react2.default.createElement(
						'li',
						{ key: i },
						_react2.default.createElement(
							_reactRouter.Link,
							{
								className: currentPath === route.path ? 'on' : null,
								to: route.path,
								onClick: _this2.handleMenuToggle.bind(_this2, 'close-menu') },
							route.menuName
						)
					);
				}
			});

			var test = {
				visible: this.state.isWindowLoaded ? 'visible' : 'hidden'
			};

			return _react2.default.createElement(
				'div',
				{ className: 'body-wrapper ' + (this.state.mobileMenuOpened ? 'is-open' : ''), style: test },
				_react2.default.createElement(
					'nav',
					{ className: 'mobile-slideout-menu ' + (this.state.mobileMenuOpened ? 'is-open' : '') },
					_react2.default.createElement(
						'ul',
						null,
						menu
					)
				),
				_react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'menuBar ' + (this.state.mobileMenuOpened ? 'is-open' : ''), onClick: this.handleMenuToggle },
						_react2.default.createElement('span', null),
						_react2.default.createElement('span', null),
						_react2.default.createElement('span', null)
					),
					_react2.default.createElement(
						'div',
						{ className: 'name' },
						'Cameron Zaas'
					),
					_react2.default.createElement(
						'div',
						{ className: 'title' },
						'Web Developer'
					),
					_react2.default.createElement(
						'nav',
						{ className: 'desktop-menu' },
						_react2.default.createElement(
							'ul',
							null,
							menu
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'content-container' },
					_react2.default.createElement(
						'div',
						{ className: 'content-inner' },
						this.props.children
					)
				)
			);
		}
	}]);

	return AppContainer;
}(_react2.default.Component);