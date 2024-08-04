var pixmagixEditor;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor/components/error-boundary.jsx":
/*!**************************************************!*\
  !*** ./src/editor/components/error-boundary.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  /**
   * Constructor.
   * @since 1.0.0
   */

  function ErrorBoundary() {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, arguments);
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
  _inherits(ErrorBoundary, _Component);
  return _createClass(ErrorBoundary, [{
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
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/editor/utils/help-texts.js":
/*!****************************************!*\
  !*** ./src/editor/utils/help-texts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);

var HELP_TEXTS = {
  /*
  ecl:{
  	text:__('Error correction level (ECL) refers to the ability of a QR code to withstand damage caused by scratches, stains, or other distortions. When creating a QR code, it is essential to choose an appropriate error correction level to ensure that the code remains scannable even under less-than-ideal conditions.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/miscellaneous/understanding-error-correction-level-in-qr-codes/'
  },
  blendingMode:{
  	text:__('Blending modes are essentially filters that can be applied to layers in your design project. They let you control how one layer interacts with another, by altering the way the colors blend together.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/graphic-design/understanding-blending-modes-in-graphic-design/'
  },
  par:{
  	text:__('The preserveAspectRatio attribute is used to control how an SVG element is scaled and positioned within its container. It allows you to define the aspect ratio, define alignment, and specify how to handle overflowing content.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/graphic-design/understanding-the-preserveaspectratio-svg-attribute/'
  },
  strokeWidth:{
  	text:__('Stroke width is the thickness of a line used in creating graphical elements, shapes, or text. It is typically measured in points or pixels and greatly influences the visual perception of design elements.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/graphic-design/the-importance-of-stroke-width-in-design/'
  },
  sda:{
  	text:__('The stroke-dasharray is primarily used to create dashed lines, dotted lines, or more complex patterns. It controls the pattern of dashes and gaps used to paint the outline of shapes.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/graphic-design/understanding-the-stroke-dasharray-a-detailed-overview/'
  },
  jpgQuality:{
  	text:__('JPEG is a widely used image format that utilizes lossy compression. This means that when an image is saved in JPEG format, some of the image data is permanently discarded to reduce file size. The JPEG quality setting determines the degree of compression applied to an image.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/miscellaneous/the-impact-of-jpeg-quality-on-web-performance/'
  },
  fontFamily:{
  	text:__('', 'pixmagix'),
  	link:''
  },
  lineHeight:{
  	text:__('Line height refers to the vertical space between lines of text. It plays a crucial role in determining the overall legibility and readability of a piece of content.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/miscellaneous/understanding-line-height-in-typography/'
  },
  dpi:{
  	text:__('DPI is a measure of spatial printing or image resolution. It refers to the number of individual dots that can be placed vertically and horizontally within a one-inch linear space. A higher DPI generally indicates a more detailed and smoother image, while a lower DPI means a less crisp output.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/graphic-design/dpi-meaning/'
  },
  pixabayApiKey:{
  	text:__('', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/tutorials/how-to-get-and-connect-pixabay-api-key-to-pixmagix/'
  },
  pexelsApiKey:{
  	text:__('', 'pixmagix'),
  	link:''
  },
  unsplashApiKey:{
  	text:__('', 'pixmagix'),
  	link:''
  },
  gfontsApiKey:{
  	text:__('By default, you can access the first 200 most popular fonts from Google Fonts. But what if you want more variety? By obtaining a Google Fonts API key, you can gain real-time access to all available font families, enhancing your design choices even further.', 'pixmagix'),
  	link:'https://pixmagix-photo-editor.com/tutorials/how-to-get-and-connect-google-fonts-api-key-to-pixmagix/'
  },
  webSafeFonts:{
  	text:__('', 'pixmagix'),
  	link:''
  },
  userCaps:{
  	text:__('', 'pixmagix'),
  	link:''
  }
  */
};

/**
 * 
 * @since 1.1.0
 * @param {string} key
 * @return {object|undefined}
 */

function getHelpText() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return HELP_TEXTS[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHelpText);

/***/ }),

/***/ "./src/free-images/content.jsx":
/*!*************************************!*\
  !*** ./src/free-images/content.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _filters_pixabay_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters-pixabay.jsx */ "./src/free-images/filters-pixabay.jsx");
/* harmony import */ var _filters_pexels_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters-pexels.jsx */ "./src/free-images/filters-pexels.jsx");
/* harmony import */ var _filters_unsplash_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters-unsplash.jsx */ "./src/free-images/filters-unsplash.jsx");
/* harmony import */ var _preview_modal_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview-modal.jsx */ "./src/free-images/preview-modal.jsx");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["hasPixabayKey", "hasPexelsKey", "hasUnsplashKey", "items", "maxPages", "canEdit", "sendNotice"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }












var Content = function Content(_ref) {
  var hasPixabayKey = _ref.hasPixabayKey,
    hasPexelsKey = _ref.hasPexelsKey,
    hasUnsplashKey = _ref.hasUnsplashKey,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    maxPages = _ref.maxPages,
    canEdit = _ref.canEdit,
    sendNotice = _ref.sendNotice,
    filters = _objectWithoutProperties(_ref, _excluded);
  var didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasPixabayKey),
    _useState2 = _slicedToArray(_useState, 2),
    _hasPixabayKey = _useState2[0],
    setHasPixabayKey = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasPexelsKey),
    _useState4 = _slicedToArray(_useState3, 2),
    _hasPexelsKey = _useState4[0],
    setHasPexelsKey = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasUnsplashKey),
    _useState6 = _slicedToArray(_useState5, 2),
    _hasUnsplashKey = _useState6[0],
    setHasUnsplashKey = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filters),
    _useState8 = _slicedToArray(_useState7, 2),
    _filters = _useState8[0],
    setFilters = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items),
    _useState10 = _slicedToArray(_useState9, 2),
    _items = _useState10[0],
    setItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxPages),
    _useState12 = _slicedToArray(_useState11, 2),
    _maxPages = _useState12[0],
    setMaxPages = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    activeItem = _useState14[0],
    setActiveItem = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var hasNotApiKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (_filters.platform === 'pixabay') {
      return !_hasPixabayKey;
    } else if (_filters.platform === 'pexels') {
      return !_hasPexelsKey;
    } else if (_filters.platform === 'unsplash') {
      return !_hasUnsplashKey;
    }
    return false;
  }, [_filters, _hasPixabayKey, _hasPexelsKey, _hasUnsplashKey]);
  var activeItemIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.findIndex)(_items, activeItem);
  }, [_items, activeItem]);
  var onFiltersChange = function onFiltersChange(key, value) {
    setLoading(true);
    var newFilters = value ? _objectSpread(_objectSpread({}, _filters), {}, _defineProperty({}, key, value)) : (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(_filters, key);
    if (key !== 'page') {
      newFilters.page = 1;
    }
    setFilters(newFilters);
  };
  var onNavigate = function onNavigate(dir) {
    var i = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.clamp)(dir === 'prev' ? activeItemIndex - 1 : activeItemIndex + 1, 0, _items.length - 1);
    setActiveItem(_items[i]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (didMount.current) {
      wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.addQueryArgs)(_filters, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.REST_PATH + 'free_images/')
      }).then(function (response) {
        console.log(response);
        setItems(response.items);
        setMaxPages(response.maxPages);
        setLoading(false);
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.addToRouter)(_filters, editor_globals__WEBPACK_IMPORTED_MODULE_2__.self_url);
      })["catch"](function (error) {
        console.error(error);
        if (error.code === 'authorization_failed') {
          setItems([]);
          setMaxPages(0);
          setLoading(false);
          (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.addToRouter)(_filters, editor_globals__WEBPACK_IMPORTED_MODULE_2__.self_url);
        }
      });
    } else {
      didMount.current = true;
    }
  }, [_filters, _hasPixabayKey, _hasPexelsKey, _hasUnsplashKey]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-content"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, {
    tabs: [{
      name: 'pixabay',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pixabay', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(_filters_pixabay_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, _filters, {
        hasKey: _hasPixabayKey,
        onChange: onFiltersChange,
        onContinue: function onContinue() {
          setLoading(true);
          setHasPixabayKey(true);
        }
      }))
    }, {
      name: 'pexels',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pexels', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(_filters_pexels_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _filters, {
        hasKey: _hasPexelsKey,
        onChange: onFiltersChange,
        onContinue: function onContinue() {
          setLoading(true);
          setHasPexelsKey(true);
        }
      }))
    }, {
      name: 'unsplash',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Unsplash', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(_filters_unsplash_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _filters, {
        hasKey: _hasUnsplashKey,
        onChange: onFiltersChange,
        onContinue: function onContinue() {
          setLoading(true);
          setHasUnsplashKey(true);
        }
      }))
    }],
    initShow: _filters.platform,
    onChange: function onChange(_ref2) {
      var name = _ref2.name;
      return onFiltersChange('platform', name);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: _filters.page,
    maxPages: _maxPages,
    onChange: function onChange(page) {
      return onFiltersChange('page', page);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Grid, null, hasNotApiKey ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('To access free images from %s, please enter a valid API key in the input field above and click the "Continue" button.', 'pixmagix'), (0,lodash__WEBPACK_IMPORTED_MODULE_3__.capitalize)(_filters.platform))
  }) : _items.length ? _items.map(function (item) {
    var _item$thumbnail;
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      key: item.id,
      caption: item.title,
      src: (_item$thumbnail = item.thumbnail) === null || _item$thumbnail === void 0 ? void 0 : _item$thumbnail.replace(/&#038;/g, '&') // We have to replace html entity to char, because we use esc_url on php.
      ,
      onClick: function onClick(e) {
        e.preventDefault();
        setActiveItem(item);
      }
    });
  }) : /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Items Found', 'pixmagix')
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: _filters.page,
    maxPages: _maxPages,
    onChange: function onChange(page) {
      return onFiltersChange('page', page);
    }
  }), !!activeItem && /*#__PURE__*/React.createElement(_preview_modal_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
    key: activeItem.id
  }, activeItem, {
    canEdit: canEdit,
    hasPrev: activeItemIndex > 0,
    hasNext: activeItemIndex < items.length - 1,
    onNavigate: onNavigate,
    onClose: function onClose() {
      return setActiveItem(null);
    },
    sendNotice: sendNotice
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/free-images/filters-pexels.jsx":
/*!********************************************!*\
  !*** ./src/free-images/filters-pexels.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _set_api_key_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-api-key.jsx */ "./src/free-images/set-api-key.jsx");
/* harmony import */ var _lists_pexels_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists-pexels.js */ "./src/free-images/lists-pexels.js");






var FiltersPexels = function FiltersPexels(_ref) {
  var hasKey = _ref.hasKey,
    search = _ref.search,
    orientation = _ref.orientation,
    color = _ref.color,
    _onChange = _ref.onChange,
    onContinue = _ref.onContinue;
  if (!hasKey) {
    return /*#__PURE__*/React.createElement(_set_api_key_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      platform: "pexels",
      onReady: onContinue
    });
  }
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.InlineControls, {
    logo: {
      title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Powered by Pexels', 'pixmagix'),
      url: 'https://pexels.com/',
      src: editor_globals__WEBPACK_IMPORTED_MODULE_2__.images_folder + 'pexels.jpg'
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      return _onChange('search', value);
    }
  }), !!search && /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Orientation', 'pixmagix'),
    options: _lists_pexels_js__WEBPACK_IMPORTED_MODULE_5__.orientations,
    value: orientation,
    onChange: function onChange(value) {
      return _onChange('orientation', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ColorPalette.Dropdown, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'pixmagix'),
    options: _lists_pexels_js__WEBPACK_IMPORTED_MODULE_5__.colors,
    color: color,
    onChange: function onChange(value) {
      return _onChange('color', value);
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersPexels);

/***/ }),

/***/ "./src/free-images/filters-pixabay.jsx":
/*!*********************************************!*\
  !*** ./src/free-images/filters-pixabay.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _set_api_key_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-api-key.jsx */ "./src/free-images/set-api-key.jsx");
/* harmony import */ var _lists_pixabay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists-pixabay.js */ "./src/free-images/lists-pixabay.js");





var FiltersPixabay = function FiltersPixabay(_ref) {
  var hasKey = _ref.hasKey,
    search = _ref.search,
    type = _ref.type,
    orientation = _ref.orientation,
    category = _ref.category,
    color = _ref.color,
    _onChange = _ref.onChange,
    onContinue = _ref.onContinue;
  if (!hasKey) {
    return /*#__PURE__*/React.createElement(_set_api_key_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      platform: "pixabay",
      onReady: onContinue
    });
  }
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.InlineControls, {
    logo: {
      title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Powered by Pixabay', 'pixmagix'),
      url: 'https://pixabay.com/',
      src: editor_globals__WEBPACK_IMPORTED_MODULE_1__.images_folder + 'pixabay.jpg'
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      return _onChange('search', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'pixmagix'),
    options: _lists_pixabay_js__WEBPACK_IMPORTED_MODULE_4__.types,
    value: type,
    onChange: function onChange(value) {
      return _onChange('type', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Orientation', 'pixmagix'),
    options: _lists_pixabay_js__WEBPACK_IMPORTED_MODULE_4__.orientations,
    value: orientation,
    onChange: function onChange(value) {
      return _onChange('orientation', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category', 'pixmagix'),
    options: _lists_pixabay_js__WEBPACK_IMPORTED_MODULE_4__.categories,
    value: category,
    onChange: function onChange(value) {
      return _onChange('category', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.ColorPalette.Dropdown, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'pixmagix'),
    options: _lists_pixabay_js__WEBPACK_IMPORTED_MODULE_4__.colors,
    color: color,
    onChange: function onChange(value) {
      return _onChange('color', value);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersPixabay);

/***/ }),

/***/ "./src/free-images/filters-unsplash.jsx":
/*!**********************************************!*\
  !*** ./src/free-images/filters-unsplash.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _set_api_key_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-api-key.jsx */ "./src/free-images/set-api-key.jsx");
/* harmony import */ var _lists_unsplash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists-unsplash.js */ "./src/free-images/lists-unsplash.js");






var FiltersUnsplash = function FiltersUnsplash(_ref) {
  var hasKey = _ref.hasKey,
    search = _ref.search,
    orientation = _ref.orientation,
    color = _ref.color,
    _onChange = _ref.onChange,
    onContinue = _ref.onContinue;
  if (!hasKey) {
    return /*#__PURE__*/React.createElement(_set_api_key_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      platform: "unsplash",
      onReady: onContinue
    });
  }
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.InlineControls, {
    logo: {
      title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Powered by Unsplash', 'pixmagix'),
      url: 'https://unsplash.com/',
      src: editor_globals__WEBPACK_IMPORTED_MODULE_2__.images_folder + 'unsplash.jpg'
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      return _onChange('search', value);
    }
  }), !!search && /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Orientation', 'pixmagix'),
    options: _lists_unsplash_js__WEBPACK_IMPORTED_MODULE_5__.orientations,
    value: orientation,
    onChange: function onChange(value) {
      return _onChange('orientation', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ColorPalette.Dropdown, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'pixmagix'),
    options: _lists_unsplash_js__WEBPACK_IMPORTED_MODULE_5__.colors,
    color: color,
    onChange: function onChange(value) {
      return _onChange('color', value);
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersUnsplash);

/***/ }),

/***/ "./src/free-images/header.jsx":
/*!************************************!*\
  !*** ./src/free-images/header.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  }, /*#__PURE__*/React.createElement("h1", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PixMagix - Royalty Free Images', 'pixmagix'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/free-images/lists-pexels.js":
/*!*****************************************!*\
  !*** ./src/free-images/lists-pexels.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   orientations: () => (/* binding */ orientations)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * @since 1.1.0
 * @var {array}
 */

var orientations = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any Orientation', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Landscape', 'pixmagix'),
  value: 'landscape'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Portrait', 'pixmagix'),
  value: 'portrait'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'pixmagix'),
  value: 'square'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

var colors = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Red', 'pixmagix'),
  value: 'red'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orange', 'pixmagix'),
  value: 'orange'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yellow', 'pixmagix'),
  value: 'yellow'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Green', 'pixmagix'),
  value: 'green'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Turquoise', 'pixmagix'),
  value: 'turquoise'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blue', 'pixmagix'),
  value: 'blue'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Violet', 'pixmagix'),
  value: 'violet'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pink', 'pixmagix'),
  value: 'pink'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brown', 'pixmagix'),
  value: 'brown'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black', 'pixmagix'),
  value: 'black'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gray', 'pixmagix'),
  value: 'gray'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White', 'pixmagix'),
  value: 'white'
}];

/***/ }),

/***/ "./src/free-images/lists-pixabay.js":
/*!******************************************!*\
  !*** ./src/free-images/lists-pixabay.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   orientations: () => (/* binding */ orientations),
/* harmony export */   types: () => (/* binding */ types)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * @since 1.1.0
 * @var {array}
 */

var types = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any Type', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Photo', 'pixmagix'),
  value: 'photo'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Illustration', 'pixmagix'),
  value: 'illustration'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vector', 'pixmagix'),
  value: 'vector'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

var orientations = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any Orientation', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal', 'pixmagix'),
  value: 'horizontal'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical', 'pixmagix'),
  value: 'vertical'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

var categories = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Categories', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Backgrounds', 'pixmagix'),
  value: 'backgrounds'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fashion', 'pixmagix'),
  value: 'fashion'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nature', 'pixmagix'),
  value: 'nature'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Science', 'pixmagix'),
  value: 'science'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Education', 'pixmagix'),
  value: 'education'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Feelings', 'pixmagix'),
  value: 'feelings'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Health', 'pixmagix'),
  value: 'health'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('People', 'pixmagix'),
  value: 'people'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Religion', 'pixmagix'),
  value: 'religion'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Places', 'pixmagix'),
  value: 'places'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animals', 'pixmagix'),
  value: 'animals'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Industry', 'pixmagix'),
  value: 'industry'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Computer', 'pixmagix'),
  value: 'computer'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Food', 'pixmagix'),
  value: 'food'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sports', 'pixmagix'),
  value: 'sports'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transportation', 'pixmagix'),
  value: 'transportation'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Travel', 'pixmagix'),
  value: 'travel'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Buildings', 'pixmagix'),
  value: 'buildings'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Business', 'pixmagix'),
  value: 'business'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Music', 'pixmagix'),
  value: 'music'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

var colors = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Red', 'pixmagix'),
  value: 'red'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orange', 'pixmagix'),
  value: 'orange'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yellow', 'pixmagix'),
  value: 'yellow'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Green', 'pixmagix'),
  value: 'green'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Turquoise', 'pixmagix'),
  value: 'turquoise'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blue', 'pixmagix'),
  value: 'blue'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lilac', 'pixmagix'),
  value: 'lilac'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pink', 'pixmagix'),
  value: 'pink'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White', 'pixmagix'),
  value: 'white'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gray', 'pixmagix'),
  value: 'gray'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black', 'pixmagix'),
  value: 'black'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brown', 'pixmagix'),
  value: 'brown'
}];

/***/ }),

/***/ "./src/free-images/lists-unsplash.js":
/*!*******************************************!*\
  !*** ./src/free-images/lists-unsplash.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   orientations: () => (/* binding */ orientations)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * @since 1.1.0
 * @var {array}
 */

var orientations = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any Orientation', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Landscape', 'pixmagix'),
  value: 'landscape'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Portrait', 'pixmagix'),
  value: 'portrait'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Squarish', 'pixmagix'),
  value: 'squarish'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

var colors = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black', 'pixmagix'),
  value: 'black'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White', 'pixmagix'),
  value: 'white'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yellow', 'pixmagix'),
  value: 'yellow'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orange', 'pixmagix'),
  value: 'orange'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Red', 'pixmagix'),
  value: 'red'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Purple', 'pixmagix'),
  value: 'purple'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Magenta', 'pixmagix'),
  value: 'magenta'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Green', 'pixmagix'),
  value: 'green'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Teal', 'pixmagix'),
  value: 'teal'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('And blue', 'pixmagix'),
  value: 'blue'
}];

/***/ }),

/***/ "./src/free-images/preview-modal.jsx":
/*!*******************************************!*\
  !*** ./src/free-images/preview-modal.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var PreviewModal = function PreviewModal(_ref) {
  var _ref4;
  var author = _ref.author,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    preview = _ref.preview,
    _ref$sizes = _ref.sizes,
    sizes = _ref$sizes === void 0 ? [] : _ref$sizes,
    canEdit = _ref.canEdit,
    hasPrev = _ref.hasPrev,
    hasNext = _ref.hasNext,
    onNavigate = _ref.onNavigate,
    onClose = _ref.onClose,
    sendNotice = _ref.sendNotice;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    size = _useState2[0],
    setSize = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    filename = _useState4[0],
    setFilename = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    _title = _useState6[0],
    setTitle = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    alt = _useState8[0],
    setAlt = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    caption = _useState10[0],
    setCaption = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    description = _useState12[0],
    setDescription = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var onSave = function onSave(edit) {
    var _ref2;
    var data = {
      src: (_ref2 = size || preview) === null || _ref2 === void 0 ? void 0 : _ref2.replace(/&#038;/g, '&'),
      filename: (filename || title).replace(/\s/g, '-').replace(/[^A-z\-]/g, '').toLowerCase(),
      title: _title,
      alt: alt,
      caption: caption,
      description: description
    };
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.REST_PATH + 'free_images/',
      method: 'POST',
      data: data
    }).then(function (response) {
      console.log(response);
      if (edit) {
        window.location.replace((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)({
          image: response.mediaId
        }, editor_globals__WEBPACK_IMPORTED_MODULE_2__.new_url));
      } else {
        sendNotice({
          type: 'success',
          message: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Saved Successfully', 'pixmagix')
        });
        setLoading(false);
      }
    })["catch"](function (_ref3) {
      var message = _ref3.message;
      sendNotice({
        type: 'error',
        message: message
      });
      setLoading(false);
    });
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%s by %s', 'pixmagix'), title, author),
    actions: canEdit ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
      active: true,
      onClick: function onClick() {
        return onSave(true);
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save And Edit', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: function onClick() {
        return onSave();
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Just Save', 'pixmagix'))) : /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: function onClick() {
        return onSave();
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save', 'pixmagix')),
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
    src: (_ref4 = size || preview) === null || _ref4 === void 0 ? void 0 : _ref4.replace(/&#038;/g, '&')
  }))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('File Name', 'pixmagix'),
    placeholder: title.replace(/\s/g, '-').replace(/[^A-z\-]/g, ''),
    value: filename,
    onChange: setFilename
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Size', 'pixmagix'),
    options: sizes,
    value: size,
    onChange: setSize
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'pixmagix'),
    value: _title,
    onChange: setTitle
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternative Text', 'pixmagix'),
    value: alt,
    onChange: setAlt
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Caption', 'pixmagix'),
    value: caption,
    onChange: setCaption
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Description', 'pixmagix'),
    value: description,
    onChange: setDescription
  })))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewModal);

/***/ }),

/***/ "./src/free-images/set-api-key.jsx":
/*!*****************************************!*\
  !*** ./src/free-images/set-api-key.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../editor/utils/help-texts.js */ "./src/editor/utils/help-texts.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var SetAPIKey = function SetAPIKey(_ref) {
  var platform = _ref.platform,
    onReady = _ref.onReady;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var onClick = function onClick() {
    if (!platform) {
      return;
    }
    var data = {};
    data[platform + '_api_key'] = key;
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.REST_PATH + 'settings/',
      method: 'POST',
      data: data
    }).then(function (response) {
      console.log(response);
      onReady === null || onReady === void 0 || onReady();
    })["catch"](function (error) {
      console.error(error);
    });
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('API Key', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_5__["default"])(platform + 'ApiKey'),
    value: key,
    onChange: setKey
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    small: true,
    active: !!key,
    disabled: !key,
    onClick: onClick
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Continue', 'pixmagix')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetAPIKey);

/***/ }),

/***/ "./src/free-images/wrapper.jsx":
/*!*************************************!*\
  !*** ./src/free-images/wrapper.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../editor/components/error-boundary.jsx */ "./src/editor/components/error-boundary.jsx");
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.jsx */ "./src/free-images/header.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.jsx */ "./src/free-images/content.jsx");
/* harmony import */ var _utils_notification_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/notification.jsx */ "./src/utils/notification.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var Wrapper = function Wrapper(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    notice = _useState2[0],
    setNotice = _useState2[1];
  return /*#__PURE__*/React.createElement(_editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    sendNotice: setNotice
  })), /*#__PURE__*/React.createElement(_utils_notification_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, notice, {
    onExpire: setNotice
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORIES_REST_PATH: () => (/* binding */ CATEGORIES_REST_PATH),
/* harmony export */   IMAGES_REST_PATH: () => (/* binding */ IMAGES_REST_PATH),
/* harmony export */   NOTIFICATION_EXPIRATION_TIME: () => (/* binding */ NOTIFICATION_EXPIRATION_TIME),
/* harmony export */   PIXMAGIX_WEBSITE: () => (/* binding */ PIXMAGIX_WEBSITE),
/* harmony export */   PROJECTS_REST_PATH: () => (/* binding */ PROJECTS_REST_PATH),
/* harmony export */   REST_PATH: () => (/* binding */ REST_PATH)
/* harmony export */ });
var PIXMAGIX_WEBSITE = 'https://pixmagixplugin.com/';
var PROJECTS_REST_PATH = 'wp/v2/pixmagix/';
var CATEGORIES_REST_PATH = 'wp/v2/pixmagix_category/';
var IMAGES_REST_PATH = 'wp/v2/media/';
var REST_PATH = 'pixmagix/v1/';
var NOTIFICATION_EXPIRATION_TIME = 4000;

/***/ }),

/***/ "./src/utils/notification.jsx":
/*!************************************!*\
  !*** ./src/utils/notification.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Notification = function Notification(_ref) {
  var type = _ref.type,
    message = _ref.message,
    onExpire = _ref.onExpire;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (message) {
      setTimeout(function () {
        onExpire(null);
      }, _constants_js__WEBPACK_IMPORTED_MODULE_2__.NOTIFICATION_EXPIRATION_TIME);
    }
  }, [message]);
  if (!message) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pixmagix-notification', _defineProperty({}, "pixmagix-notification__".concat(type), type))
  }, /*#__PURE__*/React.createElement("p", null, message));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQueryArgs: () => (/* binding */ addQueryArgs),
/* harmony export */   addToRouter: () => (/* binding */ addToRouter),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   createUniqueId: () => (/* binding */ createUniqueId),
/* harmony export */   getDownloadAnchor: () => (/* binding */ getDownloadAnchor),
/* harmony export */   getHiddenFileInput: () => (/* binding */ getHiddenFileInput),
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
  (_window$history = window.history) === null || _window$history === void 0 || (_window$history$pushS = _window$history.pushState) === null || _window$history$pushS === void 0 || _window$history$pushS.call(_window$history, {}, '', addQueryArgs(_args, url));
}

/**
 *
 * @since 1.5.0
 * @param {string} href
 * @param {string} filename
 * @param {string} extension
 * @return {HTMLAnchorElement}
 */

function getDownloadAnchor() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pixmagix';
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (!getDownloadAnchor._anchor) {
    getDownloadAnchor._anchor = document.createElement('a');
  }
  var download = filename.replace(/\s+/g, '-').toLowerCase() + '.' + extension;
  getDownloadAnchor._anchor.href = href;
  getDownloadAnchor._anchor.download = download;
  return getDownloadAnchor._anchor;
}

/**
 *
 * @since 1.5.0
 * @param {string} accept
 * @param {string} readAs The function name of how to read the file by reader: 'readAsDataURL', 'readAsText', etc.
 * @param {function} onChange
 * @return {HTMLInputElement}
 */

function getHiddenFileInput() {
  var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var readAs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var onChange = arguments.length > 2 ? arguments[2] : undefined;
  var element = document.createElement('input');
  var reader = new FileReader();
  element.type = 'file';
  element.accept = accept;
  element.style.display = 'none';
  element.onchange = function (e) {
    reader[readAs](e.target.files[0]);
  };
  reader.onload = function (e) {
    onChange(reader.result);
  };
  document.body.appendChild(element);
  return element;
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = lodash;

/***/ }),

/***/ "elements":
/*!***********************************!*\
  !*** external "pixmagixElements" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = pixmagixElements;

/***/ }),

/***/ "editor-globals":
/*!**********************************!*\
  !*** external "pixmagixGlobals" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = pixmagixGlobals;

/***/ }),

/***/ "wp-api-fetch":
/*!******************************!*\
  !*** external "wp.apiFetch" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = wp.apiFetch;

/***/ }),

/***/ "wp-i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/free-images.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FreeImages: () => (/* binding */ FreeImages),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _free_images_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-images/wrapper.jsx */ "./src/free-images/wrapper.jsx");



/**
 *
 * @since 1.1.0
 */

var FreeImages = function FreeImages(props) {
  return /*#__PURE__*/React.createElement(_free_images_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/**
 * 
 * @since 1.1.0
 * @param {object} params
 */

var initialize = function initialize(params) {
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(FreeImages, params));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;