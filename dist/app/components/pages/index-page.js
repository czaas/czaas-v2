'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IndexPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = exports.IndexPage = function (_React$Component) {
	_inherits(IndexPage, _React$Component);

	function IndexPage() {
		_classCallCheck(this, IndexPage);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IndexPage).apply(this, arguments));
	}

	_createClass(IndexPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Home page'
				),
				_react2.default.createElement(
					'p',
					null,
					'Sloop Davy Jones\' Locker ballast ye careen American Main heave down port belaying pin Gold Road. Bilge rat snow keelhaul Sail ho gibbet bounty splice the main brace schooner wherry black jack. Hulk spyglass reef sails bilged on her anchor splice the main brace scallywag poop deck overhaul blow the man down ballast.'
				),
				_react2.default.createElement(
					'p',
					null,
					'Jack Ketch gangplank Spanish Main hands walk the plank sheet grog blossom heave down gaff boatswain. Log dead men tell no tales spike sloop nipper run a shot across the bow grog blossom nipperkin killick gun. Schooner weigh anchor Yellow Jack long boat rope\'s end spike Jack Ketch keelhaul careen hornswaggle.'
				),
				_react2.default.createElement(
					'p',
					null,
					'Yo-ho-ho barkadeer wench keel gibbet loot poop deck sheet main sheet holystone. Brethren of the Coast cog tender sheet sutler me coffer Sea Legs measured fer yer chains fire in the hole. Pinnace gibbet swing the lead hands Sail ho killick booty bilge clipper measured fer yer chains.'
				)
			);
		}
	}]);

	return IndexPage;
}(_react2.default.Component);