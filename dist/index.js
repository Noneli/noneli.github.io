webpackJsonp([0],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(261);

__webpack_require__(48);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = __webpack_require__(16);

var _Article = __webpack_require__(49);

var _Article2 = _interopRequireDefault(_Article);

var _ShowState = __webpack_require__(54);

var _ShowState2 = _interopRequireDefault(_ShowState);

var _main = __webpack_require__(55);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stores = {
	article: new _Article2.default(),
	showState: new _ShowState2.default()
};

var App = function App() {
	return _react2.default.createElement(
		_mobxReact.Provider,
		stores,
		_react2.default.createElement(_main2.default, null)
	);
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(10);

var _fetchkit = __webpack_require__(50);

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Article = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, (_class = function () {
	function Article() {
		_classCallCheck(this, Article);

		_initDefineProp(this, "name", _descriptor, this);

		_initDefineProp(this, "content", _descriptor2, this);

		this.initContent();
	}

	_createClass(Article, [{
		key: "initContent",
		value: function initContent() {
			var _this = this;

			var url = '/docs/myPoems.md';
			(0, _fetchkit.doGetText)(url, function (text) {
				_this.content = text;
			});
		}
	}, {
		key: "loadContentByName",
		value: function loadContentByName(name) {
			var _this2 = this;

			this.name = name;
			var url = "/docs/" + name + ".md";
			(0, _fetchkit.doGetText)(url, function (text) {
				_this2.content = text;
			});
		}
	}]);

	return Article;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 'myPoems';
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "content", [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return '';
	}
}), _applyDecoratedDescriptor(_class.prototype, "initContent", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "initContent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadContentByName", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "loadContentByName"), _class.prototype)), _class));
exports.default = Article;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.doGetText = undefined;

var _regenerator = __webpack_require__(51);

var _regenerator2 = _interopRequireDefault(_regenerator);

var doGetText = exports.doGetText = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, success, fail) {
		var res, text;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return fetch(url);

					case 3:
						res = _context.sent;
						_context.next = 6;
						return res.text();

					case 6:
						text = _context.sent;

						success(text);
						_context.next = 13;
						break;

					case 10:
						_context.prev = 10;
						_context.t0 = _context["catch"](0);

						fail && fail(_context.t0);

					case 13:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 10]]);
	}));

	return function doGetText(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(10);

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ShowState = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, (_class = function () {
	function ShowState() {
		_classCallCheck(this, ShowState);

		_initDefineProp(this, 'showId', _descriptor, this);

		_initDefineProp(this, 'renderedIds', _descriptor2, this);
	}

	_createClass(ShowState, [{
		key: 'selectShowId',
		value: function selectShowId(id) {
			this.showId = id;
		}
	}, {
		key: 'recordRenderedIds',
		value: function recordRenderedIds(id) {
			if (!this.renderedIds.includes(id)) {
				this.renderedIds.push(id);
			}
		}
	}]);

	return ShowState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'showId', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 'home';
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'renderedIds', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return ['home'];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'selectShowId', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'selectShowId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'recordRenderedIds', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'recordRenderedIds'), _class.prototype)), _class));
exports.default = ShowState;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(16);

var _home = __webpack_require__(56);

var _home2 = _interopRequireDefault(_home);

var _article = __webpack_require__(57);

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_dec = (0, _mobxReact.inject)('article', 'showState'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(_default, _React$Component);

	function _default() {
		_classCallCheck(this, _default);

		return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
	}

	_createClass(_default, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "getDisplayStyle",
		value: function getDisplayStyle(id) {
			var showState = this.props.showState;
			var showId = showState.showId;

			if (id === showId) {
				return { display: 'block' };
			}
			return { display: 'none' };
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    article = _props.article,
			    showState = _props.showState;

			console.log(article);
			var renderedIds = showState.renderedIds;

			return _react2.default.createElement(
				"div",
				null,
				renderedIds.includes('home') && _react2.default.createElement(_home2.default, { style: this.getDisplayStyle('home') }),
				renderedIds.includes('article') && _react2.default.createElement(_article2.default, { style: this.getDisplayStyle('article') })
			);
		}
	}]);

	return _default;
}(_react2.default.Component)) || _class) || _class);

exports.default = _default;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {observer,Provider,inject} from 'mobx-react';
//import ReactMarkdown from 'react-markdown';

var _default = function (_React$Component) {
	_inherits(_default, _React$Component);

	function _default() {
		_classCallCheck(this, _default);

		return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
	}

	_createClass(_default, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h2",
					null,
					"\u51B3\u5B9A\u4F60\u6210\u4E3A\u4EC0\u4E48\u6837\u7684\u4EBA\u7684\uFF0C\u4E0D\u662F\u4F60\u7684\u80FD\u529B\uFF0C\u800C\u662F\u4F60\u7684\u9009\u62E9"
				),
				_react2.default.createElement(
					"section",
					null,
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								null,
								"\u81F4\u656C\u6211\u4EEC\u4F1F\u5927\u7684\u53E4\u4EE3\u8BD7\u4EBA"
							)
						)
					)
				)
			);
		}
	}]);

	return _default;
}(_react2.default.Component);

exports.default = _default;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(16);

var _reactMarkdown = __webpack_require__(58);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_dec = (0, _mobxReact.inject)('article'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(_default, _React$Component);

	function _default() {
		_classCallCheck(this, _default);

		return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
	}

	_createClass(_default, [{
		key: 'render',
		value: function render() {
			var article = this.props.article;

			return _react2.default.createElement(_reactMarkdown2.default, { source: article.content });
		}
	}]);

	return _default;
}(_react2.default.Component)) || _class) || _class);

exports.default = _default;

/***/ })

},[47]);
//# sourceMappingURL=index.js.map