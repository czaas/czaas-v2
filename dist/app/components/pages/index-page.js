"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IndexPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

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
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					"Portfolio"
				),
				_react2.default.createElement(
					"h2",
					null,
					"My Portfolio"
				),
				_react2.default.createElement(
					"p",
					null,
					"You can find my most recent work on my ",
					_react2.default.createElement(
						"a",
						{ href: "https://github.com/czaas", target: "_blank" },
						"github profile"
					),
					". Please contact me with any queries you have and I will get back to you shortly."
				),
				_react2.default.createElement(
					"h2",
					null,
					"Simple To-do list"
				),
				_react2.default.createElement(
					"a",
					{ href: "simpletodo.php" },
					_react2.default.createElement("img", { src: "img/simpletodo/banner-simpletodo.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"A simple to-do list using ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"AngularJS"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					" to create this ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"application"
					),
					"."
				),
				_react2.default.createElement(
					"a",
					{ href: "simpletodo.php" },
					"View my source code."
				),
				_react2.default.createElement(
					"h2",
					null,
					"M",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"ann"
					),
					" P",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"ool"
					),
					"s"
				),
				_react2.default.createElement(
					"a",
					{ href: "mannpools.php" },
					_react2.default.createElement("img", { src: "img/mannpools/banner-mannpools.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"I designed the layout where the content is easily readable and comprehensible. I used the latest practices of ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Javascript"
					),
					", and some ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"PHP"
					),
					" to create this ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"responsive"
					),
					" website."
				),
				_react2.default.createElement(
					"a",
					{ href: "mannpools.php" },
					"View the layouts for this site."
				),
				_react2.default.createElement(
					"h2",
					null,
					"P",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"ierros"
					),
					" ",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"Cuisine"
					)
				),
				_react2.default.createElement(
					"a",
					{ href: "pierros.php" },
					_react2.default.createElement("img", { src: "img/pierros/banner-pierros.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"For a restaurant, the mobile websites must be well laid out. Most people that navigate to a restaurant want to know a few things off the bat; hours, menu, reservations, and a form of contact. I used ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					", and ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Javascript"
					),
					" to give this restaurant a ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"responsive"
					),
					" website that the users want."
				),
				_react2.default.createElement(
					"a",
					{ href: "pierros.php" },
					"View the layouts for this site."
				),
				_react2.default.createElement(
					"h2",
					null,
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"the"
					),
					" DSP G",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"roup"
					)
				),
				_react2.default.createElement(
					"a",
					{ href: "dsp.php" },
					_react2.default.createElement("img", { src: "img/dsp/dsp-banner.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"I used ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					", and ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"JQuery"
					),
					" to bring this site from a desktop site to ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"responsive"
					),
					" site."
				),
				_react2.default.createElement(
					"a",
					{ href: "dsp.php" },
					"View the layouts for this site."
				),
				_react2.default.createElement(
					"h2",
					null,
					"S",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"wim"
					),
					" CCS"
				),
				_react2.default.createElement(
					"a",
					{ href: "swimccs.php" },
					_react2.default.createElement("img", { src: "img/swim/swim-banner.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"I used ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					", and ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"JQuery"
					),
					" to make this existing site ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"responsive"
					),
					"."
				),
				_react2.default.createElement(
					"a",
					{ href: "swimccs.php" },
					"View the layouts for this site."
				),
				_react2.default.createElement(
					"h2",
					null,
					"B",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"omar"
					),
					" S",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"ecurity"
					),
					" W",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"eb"
					),
					" A",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"pp"
					)
				),
				_react2.default.createElement(
					"a",
					{ href: "bomar.php" },
					_react2.default.createElement("img", { src: "img/bomar/bomar-banner.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"I focused heavily on the ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"UX"
					),
					" when I created this so the guards can spend less time looking at the screen of the device they were using and more on securing the area they were in. I made this with ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					", and ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Javascript"
					),
					". "
				),
				_react2.default.createElement(
					"a",
					{ href: "bomar.php" },
					"View the layouts for this site."
				),
				_react2.default.createElement(
					"h2",
					null,
					"E",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"dgewater"
					),
					" I",
					_react2.default.createElement(
						"span",
						{ className: "sm-caps" },
						"nn"
					)
				),
				_react2.default.createElement(
					"a",
					{ href: "edgewater.php" },
					_react2.default.createElement("img", { src: "img/edgewater/edgewater-banner.png" })
				),
				_react2.default.createElement(
					"p",
					null,
					"With ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"UX"
					),
					" in mind, I laid out the content in a easily digestible way so that when a guest gets to the website they can do what they want to do. I created this ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"responsive"
					),
					" website with ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"HTML"
					),
					", ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"Sass/CSS"
					),
					", and ",
					_react2.default.createElement(
						"span",
						{ className: "imp" },
						"JQuery"
					),
					"."
				),
				_react2.default.createElement(
					"a",
					{ href: "edgewater.php" },
					"View the layouts for this site."
				)
			);
		}
	}]);

	return IndexPage;
}(_react2.default.Component);