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
  ecl: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Error correction level (ECL) refers to the ability of a QR code to withstand damage caused by scratches, stains, or other distortions. When creating a QR code, it is essential to choose an appropriate error correction level to ensure that the code remains scannable even under less-than-ideal conditions.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/miscellaneous/understanding-error-correction-level-in-qr-codes/'
  },
  blendingMode: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blending modes are essentially filters that can be applied to layers in your design project. They let you control how one layer interacts with another, by altering the way the colors blend together.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/graphic-design/understanding-blending-modes-in-graphic-design/'
  },
  par: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The preserveAspectRatio attribute is used to control how an SVG element is scaled and positioned within its container. It allows you to define the aspect ratio, define alignment, and specify how to handle overflowing content.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/graphic-design/understanding-the-preserveaspectratio-svg-attribute/'
  },
  strokeWidth: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stroke width is the thickness of a line used in creating graphical elements, shapes, or text. It is typically measured in points or pixels and greatly influences the visual perception of design elements.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/graphic-design/the-importance-of-stroke-width-in-design/'
  },
  sda: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The stroke-dasharray is primarily used to create dashed lines, dotted lines, or more complex patterns. It controls the pattern of dashes and gaps used to paint the outline of shapes.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/graphic-design/understanding-the-stroke-dasharray-a-detailed-overview/'
  },
  jpgQuality: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('JPEG is a widely used image format that utilizes lossy compression. This means that when an image is saved in JPEG format, some of the image data is permanently discarded to reduce file size. The JPEG quality setting determines the degree of compression applied to an image.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/miscellaneous/the-impact-of-jpeg-quality-on-web-performance/'
  },
  fontFamily: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
    link: ''
  },
  lineHeight: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line height refers to the vertical space between lines of text. It plays a crucial role in determining the overall legibility and readability of a piece of content.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/miscellaneous/understanding-line-height-in-typography/'
  },
  pixabayApiKey: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/tutorials/how-to-get-and-connect-pixabay-api-key-to-pixmagix/'
  },
  pexelsApiKey: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
    link: ''
  },
  unsplashApiKey: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
    link: ''
  },
  gfontsApiKey: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('By default, you can access the first 200 most popular fonts from Google Fonts. But what if you want more variety? By obtaining a Google Fonts API key, you can gain real-time access to all available font families, enhancing your design choices even further.', 'pixmagix'),
    link: 'https://pixmagix-photo-editor.com/tutorials/how-to-get-and-connect-google-fonts-api-key-to-pixmagix/'
  },
  webSafeFonts: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
    link: ''
  },
  userCaps: {
    text: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
    link: ''
  }
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

/***/ "./src/fonts/content-gfonts.jsx":
/*!**************************************!*\
  !*** ./src/fonts/content-gfonts.jsx ***!
  \**************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../editor/utils/help-texts.js */ "./src/editor/utils/help-texts.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ContentGFonts = function ContentGFonts(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? [] : _ref$selected,
    hasKey = _ref.hasKey,
    page = _ref.page,
    text = _ref.text,
    size = _ref.size,
    maxPages = _ref.maxPages,
    _onChange = _ref.onChange,
    onSelect = _ref.onSelect,
    onSort = _ref.onSort,
    onContinue = _ref.onContinue,
    setText = _ref.setText,
    setSize = _ref.setSize,
    sendNotice = _ref.sendNotice;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    apiKey = _useState2[0],
    setApiKey = _useState2[1];
  var onSave = function onSave() {
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.REST_PATH + 'settings/',
      method: 'POST',
      data: {
        google_fonts: selected
      }
    }).then(function (_ref2) {
      var settings_success = _ref2.settings_success;
      if (settings_success) {
        sendNotice({
          type: 'success',
          message: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Settings Saved Successfully', 'pixmagix')
        });
      } else {
        sendNotice({
          type: 'warning',
          message: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Changes Detected', 'pixmagix')
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
  var onSetApiKey = function onSetApiKey() {
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.REST_PATH + 'settings/',
      method: 'POST',
      data: {
        gfonts_api_key: apiKey
      }
    }).then(function (response) {
      console.log(response);
      onContinue === null || onContinue === void 0 ? void 0 : onContinue();
    })["catch"](function (error) {
      console.error(error);
    });
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Column, {
    width: 9
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      return _onChange('page', page);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    columns: 3
  }, items.length ? items.map(function (item) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.loadGFont)(item.family);
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      key: item.family,
      className: "pixmagix-fonts-preview",
      title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Add to List', 'pixmagix'),
      caption: item.family,
      selected: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(selected, {
        family: item.family
      }),
      onClick: function onClick(e) {
        e.preventDefault();
        onSelect(item);
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: item.family,
        fontSize: size
      }
    }, text || (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('PixMagix', 'pixmagix')));
  }) : /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Items Found', 'pixmagix')
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      return _onChange('page', page);
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Column, {
    width: 3
  }, !hasKey && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('API Key', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('API Key', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_8__["default"])('gfontsApiKey'),
    value: apiKey,
    onChange: setApiKey
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    active: !!apiKey,
    disabled: !apiKey,
    onClick: onSetApiKey
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Continue', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Preview', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Sample Text', 'pixmagix'),
    placeholder: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('PixMagix', 'pixmagix'),
    value: text,
    onChange: setText
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Range, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'pixmagix'),
    value: size,
    onChange: setSize,
    min: 10,
    max: 100,
    step: 1
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Selected Fonts', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Repeater, {
    className: "pixmagix-fonts-selected-list",
    emptyText: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Fonts Selected', 'pixmagix'),
    items: selected === null || selected === void 0 ? void 0 : selected.map(function (item) {
      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.loadGFont)(item.family);
      var index = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.findIndex)(selected, item);
      return {
        name: item.family,
        label: item.family,
        onMove: function onMove(dir) {
          var newList = (0,array_move__WEBPACK_IMPORTED_MODULE_3__.arrayMoveImmutable)(selected, index, dir === 'up' ? index - 1 : index + 1);
          onSort(newList);
        },
        onRemove: function onRemove() {
          return onSelect(item);
        },
        controls: [{
          name: 'preview',
          type: 'raw',
          content: /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: item.family
            }
          }, text || (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('PixMagix', 'pixmagix'))
        }]
      };
    })
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    active: true,
    onClick: onSave
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save Fonts', 'pixmagix')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentGFonts);

/***/ }),

/***/ "./src/fonts/content-wsfonts.jsx":
/*!***************************************!*\
  !*** ./src/fonts/content-wsfonts.jsx ***!
  \***************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");






var ContentWSFonts = function ContentWSFonts(_ref) {
  var _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? [] : _ref$selected,
    text = _ref.text,
    setText = _ref.setText,
    onSelect = _ref.onSelect,
    onSort = _ref.onSort,
    sendNotice = _ref.sendNotice;
  var onSave = function onSave() {
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.REST_PATH + 'settings/',
      method: 'POST',
      data: {
        web_safe_fonts: selected
      }
    }).then(function (_ref2) {
      var settings_success = _ref2.settings_success;
      if (settings_success) {
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
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Selected Fonts', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Repeater, {
    className: "pixmagix-fonts-selected-list",
    emptyText: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Fonts Selected', 'pixmagix'),
    items: selected.map(function (item) {
      return {
        name: item.family,
        label: item.family,
        onMove: function onMove(dir) {
          var index = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.findIndex)(selected, item);
          var newList = (0,array_move__WEBPACK_IMPORTED_MODULE_4__.arrayMoveImmutable)(selected, index, dir === 'up' ? index - 1 : index + 1);
          onSort(newList);
        },
        onRemove: function onRemove() {
          return onSelect(item);
        },
        controls: [{
          name: 'preview',
          type: 'raw',
          content: /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: item.family
            }
          }, text || (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PixMagix', 'pixmagix'))
        }]
      };
    })
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Button, {
    active: true,
    onClick: onSave
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Fonts', 'pixmagix')))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sample Text', 'pixmagix'),
    placeholder: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PixMagix', 'pixmagix'),
    value: text,
    onChange: setText
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentWSFonts);

/***/ }),

/***/ "./src/fonts/content.jsx":
/*!*******************************!*\
  !*** ./src/fonts/content.jsx ***!
  \*******************************/
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
/* harmony import */ var _filters_wsfonts_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters-wsfonts.jsx */ "./src/fonts/filters-wsfonts.jsx");
/* harmony import */ var _filters_gfonts_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters-gfonts.jsx */ "./src/fonts/filters-gfonts.jsx");
/* harmony import */ var _content_wsfonts_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-wsfonts.jsx */ "./src/fonts/content-wsfonts.jsx");
/* harmony import */ var _content_gfonts_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-gfonts.jsx */ "./src/fonts/content-gfonts.jsx");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../utils/hooks.js */ "./src/utils/hooks.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["items", "gFonts", "wsFonts", "maxPages", "hasGFontsKey", "sendNotice"];
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













var Content = function Content(props) {
  var items = props.items,
    gFonts = props.gFonts,
    wsFonts = props.wsFonts,
    maxPages = props.maxPages,
    hasGFontsKey = props.hasGFontsKey,
    sendNotice = props.sendNotice,
    filters = _objectWithoutProperties(props, _excluded);
  var didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filters),
    _useState2 = _slicedToArray(_useState, 2),
    _filters = _useState2[0],
    setFilters = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items),
    _useState4 = _slicedToArray(_useState3, 2),
    _items = _useState4[0],
    setItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(gFonts),
    _useState6 = _slicedToArray(_useState5, 2),
    _gFonts = _useState6[0],
    setGFonts = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wsFonts),
    _useState8 = _slicedToArray(_useState7, 2),
    _wsFonts = _useState8[0],
    setWSFonts = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxPages),
    _useState10 = _slicedToArray(_useState9, 2),
    _maxPages = _useState10[0],
    setMaxPages = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasGFontsKey),
    _useState12 = _slicedToArray(_useState11, 2),
    _hasGFontsKey = _useState12[0],
    setHasGFontsKey = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    text = _useState14[0],
    setText = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(40),
    _useState16 = _slicedToArray(_useState15, 2),
    size = _useState16[0],
    setSize = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var onFilterChange = function onFilterChange(key, value) {
    setLoading(true);
    var newFilters = value ? _objectSpread(_objectSpread({}, _filters), {}, _defineProperty({}, key, value)) : (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(_filters, key);
    if (key !== 'page') {
      newFilters.page = 1;
    }
    setFilters(newFilters);
  };
  var onSelectWSFont = function onSelectWSFont(item) {
    var newItems = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(_wsFonts, {
      family: item.family
    }) ? _wsFonts.filter(function (i) {
      return item.family !== i.family;
    }) : _wsFonts.concat([item]);
    setWSFonts(newItems.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        collection: 'websafe'
      });
    }));
  };
  var onSelectGFont = function onSelectGFont(item) {
    var newItems = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(_gFonts, {
      family: item.family
    }) ? _gFonts.filter(function (i) {
      return item.family !== i.family;
    }) : _gFonts.concat([item]);
    setGFonts(newItems.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        collection: 'gfonts'
      });
    }));
  };
  var tabs = (0,_utils_hooks_js__WEBPACK_IMPORTED_MODULE_12__.applyFilters)('fonts.tabs', [{
    name: 'websafe',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Web Safe Fonts', 'pixmagix'),
    content: /*#__PURE__*/React.createElement(_filters_wsfonts_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selected: _wsFonts,
      onAdd: onSelectWSFont
    })
  }, {
    name: 'gfonts',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Google Fonts', 'pixmagix'),
    content: /*#__PURE__*/React.createElement(_filters_gfonts_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _filters, {
      onChange: onFilterChange
    }))
  }], props);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (didMount.current) {
      wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.addQueryArgs)(_filters, _utils_constants_js__WEBPACK_IMPORTED_MODULE_10__.REST_PATH + 'fonts')
      }).then(function (response) {
        console.log(response);
        setItems(response.items);
        setMaxPages(response.maxPages);
        setLoading(false);
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.addToRouter)(_filters, editor_globals__WEBPACK_IMPORTED_MODULE_2__.self_url);
      })["catch"](function (error) {
        console.error(error);
        setLoading(false);
      });
    } else {
      didMount.current = true;
    }
  }, [_filters, _hasGFontsKey]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-content"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, {
    tabs: tabs,
    initShow: _filters.collection,
    onChange: function onChange(_ref) {
      var name = _ref.name;
      return onFilterChange('collection', name);
    }
  }), _filters.collection === 'gfonts' ? /*#__PURE__*/React.createElement(_content_gfonts_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
    items: _items,
    selected: _gFonts,
    hasKey: _hasGFontsKey,
    maxPages: _maxPages,
    text: text,
    size: size,
    setText: setText,
    setSize: setSize,
    onChange: onFilterChange,
    onSelect: onSelectGFont,
    onSort: setGFonts,
    onContinue: function onContinue() {
      return setHasGFontsKey(true);
    },
    sendNotice: sendNotice
  }, _filters)) : _filters.collection === 'websafe' ? /*#__PURE__*/React.createElement(_content_wsfonts_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selected: _wsFonts,
    text: text,
    setText: setText,
    onSelect: onSelectWSFont,
    onSort: setWSFonts,
    sendNotice: sendNotice
  }) : null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/fonts/filters-gfonts.jsx":
/*!**************************************!*\
  !*** ./src/fonts/filters-gfonts.jsx ***!
  \**************************************/
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
/* harmony import */ var _lists_gfonts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists-gfonts.js */ "./src/fonts/lists-gfonts.js");



var FiltersGFonts = function FiltersGFonts(_ref) {
  var search = _ref.search,
    category = _ref.category,
    language = _ref.language,
    variant = _ref.variant,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      return _onChange('search', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Category', 'pixmagix'),
    options: _lists_gfonts_js__WEBPACK_IMPORTED_MODULE_2__.categories,
    value: category,
    onChange: function onChange(value) {
      return _onChange('category', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Language', 'pixmagix'),
    options: _lists_gfonts_js__WEBPACK_IMPORTED_MODULE_2__.languages,
    value: language,
    onChange: function onChange(value) {
      return _onChange('language', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variant', 'pixmagix'),
    options: _lists_gfonts_js__WEBPACK_IMPORTED_MODULE_2__.variants,
    value: variant,
    onChange: function onChange(value) {
      return _onChange('variant', value);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersGFonts);

/***/ }),

/***/ "./src/fonts/filters-wsfonts.jsx":
/*!***************************************!*\
  !*** ./src/fonts/filters-wsfonts.jsx ***!
  \***************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../editor/utils/help-texts.js */ "./src/editor/utils/help-texts.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FiltersWSFonts = function FiltersWSFonts(_ref) {
  var selected = _ref.selected,
    onAdd = _ref.onAdd;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var family = (name || '').replace(/[^A-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Family Name', 'pixmagix'),
    help: (0,_editor_utils_help_texts_js__WEBPACK_IMPORTED_MODULE_4__["default"])('webSafeFonts'),
    value: name,
    onChange: setName
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    active: !!family,
    disabled: !family,
    small: true,
    onClick: function onClick() {
      var item = {
        family: family
      };
      if (family && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(selected, item)) {
        onAdd(item);
      }
      setName('');
    }
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Font Family', 'pixmagix')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersWSFonts);

/***/ }),

/***/ "./src/fonts/header.jsx":
/*!******************************!*\
  !*** ./src/fonts/header.jsx ***!
  \******************************/
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
  }, /*#__PURE__*/React.createElement("h1", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PixMagix - Fonts', 'pixmagix'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/fonts/lists-gfonts.js":
/*!***********************************!*\
  !*** ./src/fonts/lists-gfonts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   languages: () => (/* binding */ languages),
/* harmony export */   variants: () => (/* binding */ variants)
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
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Serif', 'pixmagix'),
  value: 'serif'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sans Serif', 'pixmagix'),
  value: 'sans-serif'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display', 'pixmagix'),
  value: 'display'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Handwriting', 'pixmagix'),
  value: 'handwriting'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Monospace', 'pixmagix'),
  value: 'monospace'
}];

/**
 * 
 * @since 1.1.0
 * @var {array}
 */

var languages = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Languages', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arabic', 'pixmagix'),
  value: 'arabic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bengali', 'pixmagix'),
  value: 'bengali'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Chinese (Hong Kong)', 'pixmagix'),
  value: 'chinese-hongkong'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Chinese (Simplified)', 'pixmagix'),
  value: 'chinese-simplified'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Chinese (Traditional)', 'pixmagix'),
  value: 'chinese-traditional'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cyrillic', 'pixmagix'),
  value: 'cyrillic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cyrillic Extended', 'pixmagix'),
  value: 'cyrillic-ext'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Devanagari', 'pixmagix'),
  value: 'devanagari'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Greek', 'pixmagix'),
  value: 'greek'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Greek Extended', 'pixmagix'),
  value: 'greek-ext'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gujarati', 'pixmagix'),
  value: 'gujarati'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gurmukhi', 'pixmagix'),
  value: 'gurmukhi'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hebrew', 'pixmagix'),
  value: 'hebrew'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Japanese', 'pixmagix'),
  value: 'japanese'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Khmer', 'pixmagix'),
  value: 'khmer'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Korean', 'pixmagix'),
  value: 'korean'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Latin', 'pixmagix'),
  value: 'latin'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Latin Extended', 'pixmagix'),
  value: 'latin-ext'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Malayalam', 'pixmagix'),
  value: 'malayalam'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Myanmar', 'pixmagix'),
  value: 'myanmar'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Oriya', 'pixmagix'),
  value: 'oriya'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sinhala', 'pixmagix'),
  value: 'sinhala'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tamil', 'pixmagix'),
  value: 'tamil'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Telugu', 'pixmagix'),
  value: 'telugu'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thai', 'pixmagix'),
  value: 'thai'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tibetian', 'pixmagix'),
  value: 'tibetian'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vietnamese', 'pixmagix'),
  value: 'vietnamese'
}];

/**
 * 
 * @since 1.1.0
 * @var {array}
 */

var variants = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Variants', 'pixmagix'),
  value: ''
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thin 100', 'pixmagix'),
  value: '100'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thin 100 Italic', 'pixmagix'),
  value: '100italic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light 300', 'pixmagix'),
  value: '300'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light 300 Italic', 'pixmagix'),
  value: '300italic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Regular 400', 'pixmagix'),
  value: 'regular'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Regular 400 Italic', 'pixmagix'),
  value: 'italic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium 500', 'pixmagix'),
  value: '500'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium 500 Italic', 'pixmagix'),
  value: '500italic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bold 700', 'pixmagix'),
  value: '700'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bold 700 Italic', 'pixmagix'),
  value: '700italic'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black 900', 'pixmagix'),
  value: '900'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black 900 Italic', 'pixmagix'),
  value: '900italic'
}];

/***/ }),

/***/ "./src/fonts/wrapper.jsx":
/*!*******************************!*\
  !*** ./src/fonts/wrapper.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../editor/components/error-boundary.jsx */ "./src/editor/components/error-boundary.jsx");
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.jsx */ "./src/fonts/header.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.jsx */ "./src/fonts/content.jsx");
/* harmony import */ var _utils_notification_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/notification.jsx */ "./src/utils/notification.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





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
var PIXMAGIX_WEBSITE = 'https://pixmagix-photo-editor.com/';
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

function doAction() {}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

function addAction() {}

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



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
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
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

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayMoveImmutable: () => (/* binding */ arrayMoveImmutable),
/* harmony export */   arrayMoveMutable: () => (/* binding */ arrayMoveMutable)
/* harmony export */ });
function arrayMoveMutable(array, fromIndex, toIndex) {
	const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

		const [item] = array.splice(fromIndex, 1);
		array.splice(endIndex, 0, item);
	}
}

function arrayMoveImmutable(array, fromIndex, toIndex) {
	array = [...array];
	arrayMoveMutable(array, fromIndex, toIndex);
	return array;
}


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
/*!**********************!*\
  !*** ./src/fonts.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fonts: () => (/* binding */ Fonts),
/* harmony export */   hooks: () => (/* reexport module object */ _utils_hooks_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _fonts_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/wrapper.jsx */ "./src/fonts/wrapper.jsx");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/hooks.js */ "./src/utils/hooks.js");




/**
 *
 * @since 1.1.0
 */

var Fonts = function Fonts(props) {
  return /*#__PURE__*/React.createElement(_fonts_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/**
 * 
 * @since 1.1.0
 * @param {object} params
 */

var initialize = function initialize(params) {
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(Fonts, params));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;