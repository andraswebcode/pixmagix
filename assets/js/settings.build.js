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

/***/ "./src/settings/content-api-keys.jsx":
/*!*******************************************!*\
  !*** ./src/settings/content-api-keys.jsx ***!
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
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../editor/utils/help-texts.js */ "./src/editor/utils/help-texts.js");




var ContentApiKeys = function ContentApiKeys(props) {
  var pixabay_api_key = props.pixabay_api_key,
    pexels_api_key = props.pexels_api_key,
    unsplash_api_key = props.unsplash_api_key,
    gfonts_api_key = props.gfonts_api_key,
    openai_api_key = props.openai_api_key,
    stabilityai_api_key = props.stabilityai_api_key,
    clipdrop_api_key = props.clipdrop_api_key,
    onSettingChange = props.onSettingChange;
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pixabay API Key', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_3__["default"])('pixabayApiKey'),
    value: pixabay_api_key,
    onChange: function onChange(value) {
      return onSettingChange('pixabay_api_key', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pexels API Key', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_3__["default"])('pexelsApiKey'),
    value: pexels_api_key,
    onChange: function onChange(value) {
      return onSettingChange('pexels_api_key', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unsplash API Key', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_3__["default"])('unsplashApiKey'),
    value: unsplash_api_key,
    onChange: function onChange(value) {
      return onSettingChange('unsplash_api_key', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Google Fonts API Key', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_3__["default"])('gfontsApiKey'),
    value: gfonts_api_key,
    onChange: function onChange(value) {
      return onSettingChange('gfonts_api_key', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('OpenAI API Key', 'pixmagix'),
    value: openai_api_key,
    onChange: function onChange(value) {
      return onSettingChange('openai_api_key', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stability AI API Key', 'pixmagix'),
    value: stabilityai_api_key,
    onChange: function onChange(value) {
      return onSettingChange('stabilityai_api_key', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clipdrop API Key', 'pixmagix'),
    value: clipdrop_api_key,
    onChange: function onChange(value) {
      return onSettingChange('clipdrop_api_key', value);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentApiKeys);

/***/ }),

/***/ "./src/settings/content-general.jsx":
/*!******************************************!*\
  !*** ./src/settings/content-general.jsx ***!
  \******************************************/
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



var ContentGeneral = function ContentGeneral(_ref) {
  var thumbnail_width = _ref.thumbnail_width,
    preview_width = _ref.preview_width,
    onSettingChange = _ref.onSettingChange;
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "number",
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnails Width', 'pixmagix'),
    value: thumbnail_width,
    onChange: function onChange(value) {
      return onSettingChange('thumbnail_width', value);
    },
    min: 100,
    max: 800,
    step: 1
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "number",
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previews Width', 'pixmagix'),
    value: preview_width,
    onChange: function onChange(value) {
      return onSettingChange('preview_width', value);
    },
    min: 360,
    max: 1920,
    step: 1
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentGeneral);

/***/ }),

/***/ "./src/settings/content-users.jsx":
/*!****************************************!*\
  !*** ./src/settings/content-users.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../editor/utils/help-texts.js */ "./src/editor/utils/help-texts.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var ContentUsers = function ContentUsers(_ref) {
  var _ref$roles = _ref.roles,
    roles = _ref$roles === void 0 ? [] : _ref$roles,
    onSettingChange = _ref.onSettingChange;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Repeater, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage User Capabilities', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_2__["default"])('userCaps'),
    items: roles.map(function (_ref2, index) {
      var name = _ref2.name,
        label = _ref2.label,
        can_edit = _ref2.can_edit,
        can_edit_others = _ref2.can_edit_others,
        can_read_others = _ref2.can_read_others,
        can_upload = _ref2.can_upload;
      return {
        name: name,
        label: label,
        disabled: name === 'administrator',
        controls: [{
          name: 'can_edit',
          type: 'checkbox',
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Users to Access Editor, And Create Projects.', 'pixmagix'),
          value: can_edit,
          onChange: function onChange(value) {
            var newList = roles.slice();
            newList[index] = _objectSpread(_objectSpread({}, newList[index]), {}, {
              can_edit: value
            });
            onSettingChange('roles', newList);
          }
        }, {
          name: 'can_read_others',
          type: 'checkbox',
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show All Users\' Projects to These Users.', 'pixmagix'),
          value: can_read_others,
          show: can_edit,
          onChange: function onChange(value) {
            var newList = roles.slice();
            newList[index] = _objectSpread(_objectSpread({}, newList[index]), {}, {
              can_read_others: value
            });
            onSettingChange('roles', newList);
          }
        }, {
          name: 'can_edit_others',
          type: 'checkbox',
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Users to Edit Others\' Projects.', 'pixmagix'),
          value: can_edit_others,
          show: can_edit && can_read_others,
          onChange: function onChange(value) {
            var newList = roles.slice();
            newList[index] = _objectSpread(_objectSpread({}, newList[index]), {}, {
              can_edit_others: value
            });
            onSettingChange('roles', newList);
          }
        }, {
          name: 'can_upload',
          type: 'checkbox',
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Users to Upload Files.', 'pixmagix'),
          value: can_upload,
          onChange: function onChange(value) {
            var newList = roles.slice();
            newList[index] = _objectSpread(_objectSpread({}, newList[index]), {}, {
              can_upload: value
            });
            onSettingChange('roles', newList);
          }
        }, {
          name: 'upload_notice',
          type: 'notice',
          msgType: 'warning',
          message: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heads up: In case you choose to deactivate file uploading for these users, it will affect the accessibility of some features and users won\'t be able to save their projects. Enable file upload or disable project creation for users.', 'pixmagix'),
          show: can_edit && !can_upload
        }]
      };
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentUsers);

/***/ }),

/***/ "./src/settings/content.jsx":
/*!**********************************!*\
  !*** ./src/settings/content.jsx ***!
  \**********************************/
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
/* harmony import */ var _content_general_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-general.jsx */ "./src/settings/content-general.jsx");
/* harmony import */ var _content_api_keys_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-api-keys.jsx */ "./src/settings/content-api-keys.jsx");
/* harmony import */ var _content_users_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-users.jsx */ "./src/settings/content-users.jsx");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");







var Content = function Content(props) {
  var tabs = [{
    name: 'general',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'pixmagix'),
    content: /*#__PURE__*/React.createElement(_content_general_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], props)
  }, {
    name: 'apikeys',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('API Keys', 'pixmagix'),
    content: /*#__PURE__*/React.createElement(_content_api_keys_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], props)
  }, {
    name: 'users',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Users', 'pixmagix'),
    content: /*#__PURE__*/React.createElement(_content_users_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props)
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-content"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Widget, {
    tabs: tabs,
    initShow: props.tab,
    onChange: function onChange(_ref) {
      var name = _ref.name;
      return (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addToRouter)({
        tab: name
      }, editor_globals__WEBPACK_IMPORTED_MODULE_1__.self_url);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/settings/header.jsx":
/*!*********************************!*\
  !*** ./src/settings/header.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");




var Header = function Header(_ref) {
  var settings = _ref.settings,
    sendNotice = _ref.sendNotice;
  var onSave = function onSave() {
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.REST_PATH + 'settings/',
      method: 'POST',
      data: settings
    }).then(function (_ref2) {
      var settings_success = _ref2.settings_success,
        roles_success = _ref2.roles_success;
      if (settings_success || roles_success) {
        sendNotice({
          type: 'success',
          message: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings Saved Successfully', 'pixmagix')
        });
      } else {
        sendNotice({
          type: 'warning',
          message: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Changes Detected', 'pixmagix')
        });
      }
    })["catch"](function (_ref3) {
      var message = _ref3.message;
      sendNotice({
        type: 'error',
        message: message
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header__title"
  }, /*#__PURE__*/React.createElement("h1", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PixMagix - Settings', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Button, {
    active: true,
    onClick: onSave
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Settings', 'pixmagix')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/settings/wrapper.jsx":
/*!**********************************!*\
  !*** ./src/settings/wrapper.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../editor/components/error-boundary.jsx */ "./src/editor/components/error-boundary.jsx");
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.jsx */ "./src/settings/header.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.jsx */ "./src/settings/content.jsx");
/* harmony import */ var _utils_notification_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/notification.jsx */ "./src/utils/notification.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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





var Wrapper = function Wrapper(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
    _useState2 = _slicedToArray(_useState, 2),
    settings = _useState2[0],
    setSettings = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    notice = _useState4[0],
    setNotice = _useState4[1];
  var onSettingChange = function onSettingChange(key, value) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
  };
  return /*#__PURE__*/React.createElement(_editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    settings: settings,
    sendNotice: setNotice
  }), /*#__PURE__*/React.createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, settings, {
    onSettingChange: onSettingChange,
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

/***/ "./src/utils/hooks.js":
/*!****************************!*\
  !*** ./src/utils/hooks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOKS: () => (/* binding */ HOOKS),
/* harmony export */   addAction: () => (/* binding */ addAction),
/* harmony export */   addComponent: () => (/* binding */ addComponent),
/* harmony export */   addFilter: () => (/* binding */ addFilter),
/* harmony export */   applyFilters: () => (/* binding */ applyFilters),
/* harmony export */   doAction: () => (/* binding */ doAction),
/* harmony export */   doComponents: () => (/* binding */ doComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-hooks */ "wp-hooks");
/* harmony import */ var wp_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_hooks__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 
 * @since 1.2.0
 * @const {object}
 */

var HOOKS = (0,wp_hooks__WEBPACK_IMPORTED_MODULE_1__.createHooks)();

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

function applyFilters(hookName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return HOOKS.applyFilters.apply(HOOKS, [hookName].concat(args));
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

function addFilter(hookName, namespace, callback, priority) {
  return HOOKS.addFilter(hookName, namespace, callback, priority);
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

function doAction(hookName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return HOOKS.doAction.apply(HOOKS, [hookName].concat(args));
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

function addAction(hookName, namespace, callback, priority) {
  return HOOKS.addAction(hookName, namespace, callback, priority);
}

/**
 *
 * @param {string} hookName
 * @param {object} props
 * @since 1.2.0
 */

function doComponents(hookName, props) {
  return applyFilters(hookName, null, props);
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

function addComponent(hookName, namespace, component, priority) {
  return addFilter(hookName, namespace, function (_defEl, props) {
    return component ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props) : null;
  }, priority);
}

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

/***/ "wp-hooks":
/*!***************************!*\
  !*** external "wp.hooks" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = wp.hooks;

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
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings),
/* harmony export */   hooks: () => (/* reexport module object */ _utils_hooks_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _settings_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/wrapper.jsx */ "./src/settings/wrapper.jsx");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/hooks.js */ "./src/utils/hooks.js");




/**
 *
 * @since 1.1.0
 */

var Settings = function Settings(props) {
  return /*#__PURE__*/React.createElement(_settings_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/**
 * 
 * @since 1.1.0
 * @param {object} params
 */

var initialize = function initialize(params) {
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(Settings, params));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;