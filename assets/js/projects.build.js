var pixmagixEditor;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor/utils/constants.js":
/*!***************************************!*\
  !*** ./src/editor/utils/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_COLOR: () => (/* binding */ BORDER_COLOR),
/* harmony export */   BORDER_DASH_ARRAY: () => (/* binding */ BORDER_DASH_ARRAY),
/* harmony export */   BORDER_OPACITY_WHEN_MOVING: () => (/* binding */ BORDER_OPACITY_WHEN_MOVING),
/* harmony export */   CANVAS_MAX_ZOOM: () => (/* binding */ CANVAS_MAX_ZOOM),
/* harmony export */   CANVAS_MIN_ZOOM: () => (/* binding */ CANVAS_MIN_ZOOM),
/* harmony export */   CORNER_SIZE: () => (/* binding */ CORNER_SIZE),
/* harmony export */   DEFAULT_CANVAS_HEIGHT: () => (/* binding */ DEFAULT_CANVAS_HEIGHT),
/* harmony export */   DEFAULT_CANVAS_WIDTH: () => (/* binding */ DEFAULT_CANVAS_WIDTH),
/* harmony export */   EDITOR_COLOR: () => (/* binding */ EDITOR_COLOR),
/* harmony export */   FILL_DEFAULT_COLOR: () => (/* binding */ FILL_DEFAULT_COLOR),
/* harmony export */   IMAGES_REST_PATH: () => (/* binding */ IMAGES_REST_PATH),
/* harmony export */   MAX_CROP_SCALE: () => (/* binding */ MAX_CROP_SCALE),
/* harmony export */   MAX_FONT_SIZE: () => (/* binding */ MAX_FONT_SIZE),
/* harmony export */   MIN_CROP_SCALE: () => (/* binding */ MIN_CROP_SCALE),
/* harmony export */   MIN_FONT_SIZE: () => (/* binding */ MIN_FONT_SIZE),
/* harmony export */   NOTIFICATION_EXPIRATION_TIME: () => (/* binding */ NOTIFICATION_EXPIRATION_TIME),
/* harmony export */   PENCIL_DEFAULT_COLOR: () => (/* binding */ PENCIL_DEFAULT_COLOR),
/* harmony export */   PENCIL_DEFAULT_WIDTH: () => (/* binding */ PENCIL_DEFAULT_WIDTH),
/* harmony export */   PENCIL_MAX_WIDTH: () => (/* binding */ PENCIL_MAX_WIDTH),
/* harmony export */   PENCIL_MIN_WIDTH: () => (/* binding */ PENCIL_MIN_WIDTH),
/* harmony export */   PIXMAGIX_WEBSITE: () => (/* binding */ PIXMAGIX_WEBSITE),
/* harmony export */   PREVIEW_IMAGE_MAX_WIDTH: () => (/* binding */ PREVIEW_IMAGE_MAX_WIDTH),
/* harmony export */   PROJECTS_REST_PATH: () => (/* binding */ PROJECTS_REST_PATH),
/* harmony export */   QRCODE_DEFAULT_ECL: () => (/* binding */ QRCODE_DEFAULT_ECL),
/* harmony export */   QRCODE_DEFAULT_PADDING: () => (/* binding */ QRCODE_DEFAULT_PADDING),
/* harmony export */   QRCODE_DEFAULT_SIZE: () => (/* binding */ QRCODE_DEFAULT_SIZE),
/* harmony export */   QRCODE_DEFAULT_TEXT: () => (/* binding */ QRCODE_DEFAULT_TEXT),
/* harmony export */   QRCODE_MAX_SIZE: () => (/* binding */ QRCODE_MAX_SIZE),
/* harmony export */   QRCODE_MIN_SIZE: () => (/* binding */ QRCODE_MIN_SIZE),
/* harmony export */   REST_PATH: () => (/* binding */ REST_PATH),
/* harmony export */   RULER_SIZE: () => (/* binding */ RULER_SIZE),
/* harmony export */   SELECTION_BORDER_COLOR: () => (/* binding */ SELECTION_BORDER_COLOR),
/* harmony export */   SELECTION_COLOR: () => (/* binding */ SELECTION_COLOR),
/* harmony export */   TARGET_FIND_TOLERANCE: () => (/* binding */ TARGET_FIND_TOLERANCE)
/* harmony export */ });
var PIXMAGIX_WEBSITE = 'https://pixmagix-photo-editor.com/';
var PROJECTS_REST_PATH = 'wp/v2/pixmagix/';
var IMAGES_REST_PATH = 'wp/v2/media/';
var REST_PATH = 'pixmagix/v1/';
var PREVIEW_IMAGE_MAX_WIDTH = 200;
var CANVAS_MIN_ZOOM = 10;
var CANVAS_MAX_ZOOM = 200;
var DEFAULT_CANVAS_WIDTH = 1280;
var DEFAULT_CANVAS_HEIGHT = 720;
var SELECTION_COLOR = 'rgba(16, 187, 229, 0.1)';
var SELECTION_BORDER_COLOR = '#10BBE5';
var RULER_SIZE = 24;
var EDITOR_COLOR = '#FFFFFF';
var PENCIL_DEFAULT_COLOR = '#000000';
var FILL_DEFAULT_COLOR = '#FFFFFF';
var PENCIL_DEFAULT_WIDTH = 2;
var PENCIL_MIN_WIDTH = 0;
var PENCIL_MAX_WIDTH = 200;
var QRCODE_DEFAULT_TEXT = PIXMAGIX_WEBSITE;
var QRCODE_DEFAULT_SIZE = 256;
var QRCODE_MIN_SIZE = 64;
var QRCODE_MAX_SIZE = 1024;
var QRCODE_DEFAULT_PADDING = 4;
var QRCODE_DEFAULT_ECL = 'M';
var MIN_FONT_SIZE = 10;
var MAX_FONT_SIZE = 400;
var BORDER_COLOR = '#80b682';
var BORDER_DASH_ARRAY = [4, 2];
var BORDER_OPACITY_WHEN_MOVING = 1;
var CORNER_SIZE = 8;
var TARGET_FIND_TOLERANCE = 10;
var NOTIFICATION_EXPIRATION_TIME = 4000;
var MIN_CROP_SCALE = 0.1;
var MAX_CROP_SCALE = 1.2;

/***/ }),

/***/ "./src/editor/utils/middlewares.js":
/*!*****************************************!*\
  !*** ./src/editor/utils/middlewares.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPaginatingMiddleware: () => (/* binding */ createPaginatingMiddleware)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var parseResponse = function parseResponse(response) {
  return response.json ? response.json() : Promise.reject(response);
};
var paginatingMiddlewareResponse = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
    var _response$headers;
    var items;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (response.json) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", response);
        case 2:
          _context.next = 4;
          return parseResponse(response);
        case 4:
          items = _context.sent;
          return _context.abrupt("return", {
            items: items,
            totalPages: parseInt((response === null || response === void 0 ? void 0 : (_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers.get('X-WP-TotalPages')) || 1)
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function paginatingMiddlewareResponse(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createPaginatingMiddleware = function createPaginatingMiddleware(options, next) {
  return options.withTotalPages && (options.method === 'GET' || !options.method) ? next(_objectSpread(_objectSpread({}, options), {}, {
    parse: false
  })).then(paginatingMiddlewareResponse) : next(options);
};

/***/ }),

/***/ "./src/projects/content.jsx":
/*!**********************************!*\
  !*** ./src/projects/content.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./src/projects/utils.js");
/* harmony import */ var _editor_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../editor/utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Content = function Content(props) {
  var didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.search || ''),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.date || ''),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.page || 1),
    _useState6 = _slicedToArray(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.maxPages || 1),
    _useState8 = _slicedToArray(_useState7, 2),
    maxPages = _useState8[0],
    setMaxPages = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.items || []),
    _useState10 = _slicedToArray(_useState9, 2),
    items = _useState10[0],
    setItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var isPageOverflowed = items.length === 1 && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(items[0]);
  var onDuplicate = function onDuplicate(id) {
    if (!id) {
      return;
    }
    var _ref = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(items, {
        id: id
      }) || {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      project = _ref.project;
    if (!project) {
      return;
    }
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _editor_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.PROJECTS_REST_PATH,
      method: 'POST',
      data: {
        title: title,
        status: 'publish',
        meta: {
          pixmagix_project: project
        }
      }
    }).then(function (_ref2) {
      var id = _ref2.id,
        title = _ref2.title,
        meta = _ref2.meta;
      setItems([{
        id: id,
        title: (title === null || title === void 0 ? void 0 : title.rendered) || '',
        project: (meta === null || meta === void 0 ? void 0 : meta.pixmagix_project) || {}
      }].concat(items.slice(0, 11)));
      setLoading(false);
    });
  };
  var onDelete = function onDelete(id) {
    if (!id) {
      return;
    }
    var ok = confirm((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Do you really want to permanently delete this item?', 'pixmagix'));
    if (!ok) {
      return;
    }
    var query = {
      force: true,
      page: page
    };
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)(query, _editor_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.PROJECTS_REST_PATH + id),
      method: 'DELETE'
    }).then(function (response) {
      setLoading(false);
      setItems(response.items.map(function (_ref3) {
        var id = _ref3.id,
          title = _ref3.title,
          meta = _ref3.meta;
        return {
          id: id,
          title: (title === null || title === void 0 ? void 0 : title.rendered) || '',
          project: (meta === null || meta === void 0 ? void 0 : meta.pixmagix_project) || {}
        };
      }));
      setMaxPages(response.max_pages);
      setPage(response.page);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (didMount.current) {
      var query = {
        page: page,
        per_page: 12
      };
      if (search) {
        query.search = search;
      }
      if (date) {
        query.yearmonth = date;
      }
      wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)(query, _editor_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.PROJECTS_REST_PATH),
        withTotalPages: true
      }).then(function (response) {
        var _window$history, _window$history$pushS;
        var items = response.items,
          totalPages = response.totalPages;
        setItems(items.map(function (_ref4) {
          var id = _ref4.id,
            title = _ref4.title,
            meta = _ref4.meta;
          return {
            id: id,
            title: (title === null || title === void 0 ? void 0 : title.rendered) || '',
            project: (meta === null || meta === void 0 ? void 0 : meta.pixmagix_project) || {}
          };
        }));
        setMaxPages(totalPages);
        setLoading(false);
        var args = {
          p: page
        };
        if (search) {
          args.s = search;
        }
        if (date) {
          args.d = date;
        }
        (_window$history = window.history) === null || _window$history === void 0 ? void 0 : (_window$history$pushS = _window$history.pushState) === null || _window$history$pushS === void 0 ? void 0 : _window$history$pushS.call(_window$history, {}, '', (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)(args, editor_globals__WEBPACK_IMPORTED_MODULE_5__.projects_url));
      });
    } else {
      didMount.current = true;
    }
  }, [page, search, date]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-content"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      setSearch(value);
      setPage(1);
      setLoading(true);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Date', 'pixmagix'),
    value: date,
    options: editor_globals__WEBPACK_IMPORTED_MODULE_5__.project_dates,
    onChange: function onChange(value) {
      setDate(value);
      setPage(1);
      setLoading(true);
    }
  })), !isPageOverflowed && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      setPage(page);
      setLoading(true);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Grid, null, items.length === 0 ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No Items Found', 'pixmagix')
  }) : isPageOverflowed ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    isEmpty: true,
    caption: items[0]
  }) : items.map(function (_ref5) {
    var id = _ref5.id,
      title = _ref5.title,
      project = _ref5.project;
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      key: id,
      caption: title,
      href: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)({
        id: id
      }, editor_globals__WEBPACK_IMPORTED_MODULE_5__.new_url),
      src: (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)({
        r: Math.ceil(Math.random() * 1000)
      }, project.thumbnail || ''),
      actions: [{
        name: 'duplicate',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Duplicate', 'pixmagix'),
        icon: 'copy',
        onClick: function onClick() {
          return onDuplicate(id);
        }
      }, {
        name: 'delete',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Delete', 'pixmagix'),
        icon: 'trash-can',
        onClick: function onClick() {
          return onDelete(id);
        }
      }]
    });
  })), !isPageOverflowed && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      setPage(page);
      setLoading(true);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/projects/header.jsx":
/*!*********************************!*\
  !*** ./src/projects/header.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_2__);



var Header = function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header__title"
  }, /*#__PURE__*/React.createElement("h1", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PixMagix - Projects', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_0__.Button, {
    active: true,
    onClick: function onClick() {
      window.location.replace(editor_globals__WEBPACK_IMPORTED_MODULE_2__.new_url);
    }
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add New', 'pixmagix')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/projects/utils.js":
/*!*******************************!*\
  !*** ./src/projects/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQueryArgs: () => (/* binding */ addQueryArgs)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


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

/***/ }),

/***/ "./src/projects/wrapper.jsx":
/*!**********************************!*\
  !*** ./src/projects/wrapper.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.jsx */ "./src/projects/header.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.jsx */ "./src/projects/content.jsx");



var Wrapper = function Wrapper(props) {
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

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
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsList: () => (/* binding */ ProjectsList),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projects_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/wrapper.jsx */ "./src/projects/wrapper.jsx");
/* harmony import */ var _editor_utils_middlewares_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/utils/middlewares.js */ "./src/editor/utils/middlewares.js");




wp_api_fetch__WEBPACK_IMPORTED_MODULE_1___default().use(_editor_utils_middlewares_js__WEBPACK_IMPORTED_MODULE_3__.createPaginatingMiddleware);

/**
 *
 * @since 1.0.0
 */

var ProjectsList = function ProjectsList(props) {
  return /*#__PURE__*/React.createElement(_projects_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], props);
};

/**
 * 
 * @since 1.0.0
 * @param {number} page
 * @param {number} maxPages
 * @param {string} search
 * @param {array} items
 */

var initialize = function initialize() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var maxPages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var items = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(ProjectsList, {
    page: page,
    maxPages: maxPages,
    search: search,
    items: items
  }));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;