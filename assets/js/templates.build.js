var pixmagixEditor;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor/components/error-boundary.jsx":
/*!**************************************************!*\
  !*** ./src/editor/components/error-boundary.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);
  var _super = _createSuper(ErrorBoundary);
  /**
   * Constructor.
   * @since 1.0.0
   */

  function ErrorBoundary() {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _super.apply(this, arguments);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  /**
   *
   * @since 1.0.0
   * @static
   */
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value:
    /**
     *
     * @since 1.0.0
     */

    function componentDidCatch() {}

    /**
     * Render component.
     * @since 1.0.0
     */
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React.createElement("div", {
          className: "pixmagix-error-boundary"
        });
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/templates/content.jsx":
/*!***********************************!*\
  !*** ./src/templates/content.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _preview_modal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-modal.jsx */ "./src/templates/preview-modal.jsx");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _lists_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lists.js */ "./src/templates/lists.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["items", "maxPages"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var Content = function Content(_ref) {
  var items = _ref.items,
    maxPages = _ref.maxPages,
    filters = _objectWithoutProperties(_ref, _excluded);
  var didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filters),
    _useState2 = _slicedToArray(_useState, 2),
    _filters = _useState2[0],
    setFilters = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxPages || 1),
    _useState4 = _slicedToArray(_useState3, 2),
    _maxPages = _useState4[0],
    setMaxPages = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items || []),
    _useState6 = _slicedToArray(_useState5, 2),
    _items = _useState6[0],
    setItems = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    activeItem = _useState8[0],
    setActiveItem = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var activeItemIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.findIndex)(_items, activeItem);
  }, [_items, activeItem]);
  var onFilterChange = function onFilterChange(key, value) {
    setLoading(true);
    var newFilters = value ? _objectSpread(_objectSpread({}, _filters), {}, _defineProperty({}, key, value)) : (0,lodash__WEBPACK_IMPORTED_MODULE_5__.omit)(_filters, key);
    if (key !== 'page') {
      newFilters.page = 1;
    }
    setFilters(newFilters);
  };
  var onNavigate = function onNavigate(dir) {
    var i = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.clamp)(dir === 'prev' ? activeItemIndex - 1 : activeItemIndex + 1, 0, _items.length - 1);
    setActiveItem(_items[i]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (didMount.current) {
      wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)(_filters, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.REST_PATH + 'templates/')
      }).then(function (response) {
        console.log(response);
        setItems(response.items);
        setMaxPages(response.maxPages);
        setLoading(false);
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.addToRouter)(_filters, editor_globals__WEBPACK_IMPORTED_MODULE_2__.self_url);
      })["catch"](function (error) {
        console.error(error);
      });
    } else {
      didMount.current = true;
    }
  }, [_filters]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-content"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search', 'pixmagix'),
    value: _filters.search,
    onChange: function onChange(value) {
      return onFilterChange('search', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Category', 'pixmagix'),
    value: _filters.category,
    options: _lists_js__WEBPACK_IMPORTED_MODULE_9__.categories,
    onChange: function onChange(value) {
      return onFilterChange('category', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Aspect Ratio', 'pixmagix'),
    value: _filters.aspect,
    options: _lists_js__WEBPACK_IMPORTED_MODULE_9__.aspects,
    onChange: function onChange(value) {
      return onFilterChange('aspect', value);
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: _filters.page,
    maxPages: _maxPages,
    onChange: function onChange(page) {
      return onFilterChange('page', page);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Grid, null, _items !== null && _items !== void 0 && _items.length ? _items.map(function (item) {
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      key: item.id,
      caption: item.title,
      src: item.thumbnail,
      onClick: function onClick(e) {
        e.preventDefault();
        setActiveItem(item);
      }
    });
  }) : /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No Items Found', 'pixmagix')
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: _filters.page,
    maxPages: _maxPages,
    onChange: function onChange(page) {
      return onFilterChange('page', page);
    }
  }), !!activeItem && /*#__PURE__*/React.createElement(_preview_modal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, activeItem, {
    hasPrev: activeItemIndex > 0,
    hasNext: activeItemIndex < _items.length - 1,
    onNavigate: onNavigate,
    onClose: function onClose() {
      return setActiveItem(null);
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/templates/header.jsx":
/*!**********************************!*\
  !*** ./src/templates/header.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);

var Header = function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header__title"
  }, /*#__PURE__*/React.createElement("h1", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PixMagix - Templates', 'pixmagix'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/templates/lists.js":
/*!********************************!*\
  !*** ./src/templates/lists.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspects: () => (/* binding */ aspects),
/* harmony export */   categories: () => (/* binding */ categories)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * @since 1.1.0
 * @var {array}
 */

var categories = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Categories', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Images', 'pixmagix'),
  value: 'featuredimages'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quotes', 'pixmagix'),
  value: 'quotes'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Motivational', 'pixmagix'),
  value: 'motivational'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Holydays', 'pixmagix'),
  value: 'holydays'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

var aspects = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any Aspect Ratio', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2:1 - Landscape', 'pixmagix'),
  value: '2:1'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3:2 - Landscape', 'pixmagix'),
  value: '3:2'
}];

/***/ }),

/***/ "./src/templates/preview-modal.jsx":
/*!*****************************************!*\
  !*** ./src/templates/preview-modal.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PreviewModal = function PreviewModal(_ref) {
  var id = _ref.id,
    title = _ref.title,
    preview = _ref.preview,
    hasPrev = _ref.hasPrev,
    hasNext = _ref.hasNext,
    onNavigate = _ref.onNavigate,
    onClose = _ref.onClose;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var onSave = function onSave(edit) {
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.REST_PATH + 'templates/',
      method: 'POST',
      data: {
        id: id,
        projectName: name
      }
    }).then(function (response) {
      console.log(response);
      if (edit) {
        window.location.replace((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)({
          id: response.id
        }, editor_globals__WEBPACK_IMPORTED_MODULE_2__.new_url));
      } else {
        setLoading(false);
      }
    })["catch"](function (error) {
      console.error(error);
    });
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: title,
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
      active: true,
      onClick: function onClick() {
        return onSave(true);
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save And Edit', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: function onClick() {
        return onSave();
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Just Save', 'pixmagix'))),
    navigation: {
      prev: {
        disabled: !hasPrev,
        onClick: function onClick() {
          return onNavigate('prev');
        }
      },
      next: {
        disabled: !hasNext,
        onClick: function onClick() {
          return onNavigate('next');
        }
      }
    },
    onClose: onClose
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Column, null, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: preview
  }))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Project Name', 'pixmagix'),
    placeholder: title,
    value: name,
    onChange: setName
  })))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewModal);

/***/ }),

/***/ "./src/templates/wrapper.jsx":
/*!***********************************!*\
  !*** ./src/templates/wrapper.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../editor/components/error-boundary.jsx */ "./src/editor/components/error-boundary.jsx");
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.jsx */ "./src/templates/header.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.jsx */ "./src/templates/content.jsx");



var Wrapper = function Wrapper(props) {
  return /*#__PURE__*/React.createElement(_editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, /*#__PURE__*/React.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORIES_REST_PATH: () => (/* binding */ CATEGORIES_REST_PATH),
/* harmony export */   IMAGES_REST_PATH: () => (/* binding */ IMAGES_REST_PATH),
/* harmony export */   NOTIFICATION_EXPIRATION_TIME: () => (/* binding */ NOTIFICATION_EXPIRATION_TIME),
/* harmony export */   PIXMAGIX_WEBSITE: () => (/* binding */ PIXMAGIX_WEBSITE),
/* harmony export */   PROJECTS_REST_PATH: () => (/* binding */ PROJECTS_REST_PATH),
/* harmony export */   REST_PATH: () => (/* binding */ REST_PATH)
/* harmony export */ });
var PIXMAGIX_WEBSITE = 'https://pixmagix-photo-editor.com/';
var PROJECTS_REST_PATH = 'wp/v2/pixmagix/';
var CATEGORIES_REST_PATH = 'wp/v2/pixmagix_category/';
var IMAGES_REST_PATH = 'wp/v2/media/';
var REST_PATH = 'pixmagix/v1/';
var NOTIFICATION_EXPIRATION_TIME = 4000;

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQueryArgs: () => (/* binding */ addQueryArgs),
/* harmony export */   addToRouter: () => (/* binding */ addToRouter),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   createUniqueId: () => (/* binding */ createUniqueId),
/* harmony export */   loadGFont: () => (/* binding */ loadGFont),
/* harmony export */   toFixed: () => (/* binding */ toFixed)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * @param {float|int} value
 * @param {float|int} min
 * @param {float|int} max
 * @return {float|int}
 * @since 1.0.0
 */

function clamp() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var _value = parseFloat(value) || 0;
  return Math.min(Math.max(_value, min), max);
}

/**
 *
 * @param {float|int} value
 * @param {int} fractionDigits
 * @return {float|int}
 * @since 1.0.0
 */

function toFixed(value) {
  var fractionDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var _value = parseFloat(value) || 0;
  return Math.round(_value * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits) || 0;
}

/**
 * Create unique id for fabric objects.
 * @param {string} prefix
 * @return {string}
 * @since 1.0.0
 */

function createUniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pixmagix';
  var id = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(20, function () {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.random)(36).toString(35);
  }).join('');
  return prefix + '-' + id;
}

/**
 *
 * @param {object} args
 * @param {string} url
 * @return {string}
 * @since 1.0.0
 */

function addQueryArgs() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (url.indexOf('data:') === 0) {
    return url;
  }
  var join = (url === null || url === void 0 ? void 0 : url.indexOf('?')) === -1 ? '?' : '&';
  var query = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(args, function (memo, value, key) {
    memo.push('' + key + '=' + value);
    return memo;
  }, []).join('&');
  return url + join + query;
}

/**
 *
 * @param {object} args
 * @param {string} url
 * @since 1.1.0
 */

function addToRouter(args, url) {
  var _window$history, _window$history$pushS;
  var _args = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(args, function (v, k) {
    return !v || k === 'page';
  });
  // We need to replace 'page' param to 'p', because the 'page' name is reserved by wp admin.
  if (args.page) {
    _args.p = args.page;
  }
  (_window$history = window.history) === null || _window$history === void 0 ? void 0 : (_window$history$pushS = _window$history.pushState) === null || _window$history$pushS === void 0 ? void 0 : _window$history$pushS.call(_window$history, {}, '', addQueryArgs(_args, url));
}

/**
 *
 * @param {string} family
 * @since 1.1.0
 */

function loadGFont(family) {
  if (!family) {
    return;
  }
  var linkId = 'pixmagix_gfont_' + family.replace(/\s+/g, '_').toLowerCase();
  var linkElement = document.getElementById(linkId);
  if (!linkElement) {
    linkElement = document.createElement('link');
    linkElement.id = linkId;
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=' + family.replace(/\s+/g, '+');
    document.head.appendChild(linkElement);
  }
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = lodash;

/***/ }),

/***/ "elements":
/*!***********************************!*\
  !*** external "pixmagixElements" ***!
  \***********************************/
/***/ ((module) => {

module.exports = pixmagixElements;

/***/ }),

/***/ "editor-globals":
/*!**********************************!*\
  !*** external "pixmagixGlobals" ***!
  \**********************************/
/***/ ((module) => {

module.exports = pixmagixGlobals;

/***/ }),

/***/ "wp-api-fetch":
/*!******************************!*\
  !*** external "wp.apiFetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = wp.apiFetch;

/***/ }),

/***/ "wp-i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

module.exports = wp.i18n;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Templates: () => (/* binding */ Templates),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _templates_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/wrapper.jsx */ "./src/templates/wrapper.jsx");



/**
 *
 * @since 1.1.0
 */

var Templates = function Templates(props) {
  return /*#__PURE__*/React.createElement(_templates_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/**
 * 
 * @since 1.1.0
 * @param {object} params
 */

var initialize = function initialize(params) {
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(Templates, params));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;