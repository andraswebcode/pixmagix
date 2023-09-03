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

/***/ "./src/editor/utils/middlewares.js":
/*!*****************************************!*\
  !*** ./src/editor/utils/middlewares.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/utils/constants.js");
var _excluded = ["sendNotice"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Content = function Content(_ref) {
  var sendNotice = _ref.sendNotice,
    props = _objectWithoutProperties(_ref, _excluded);
  var didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.search || ''),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.date || ''),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.author || 0),
    _useState6 = _slicedToArray(_useState5, 2),
    author = _useState6[0],
    setAuthor = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.page || 1),
    _useState8 = _slicedToArray(_useState7, 2),
    page = _useState8[0],
    setPage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.maxPages || 1),
    _useState10 = _slicedToArray(_useState9, 2),
    maxPages = _useState10[0],
    setMaxPages = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.items || []),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    setItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var isPageOverflowed = items.length === 1 && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(items[0]);
  var onDuplicate = function onDuplicate(id) {
    if (!id) {
      return;
    }
    var _ref2 = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(items, {
        id: id
      }) || {},
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? '' : _ref2$title,
      project = _ref2.project;
    if (!project) {
      return;
    }
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.PROJECTS_REST_PATH,
      method: 'POST',
      data: {
        title: title,
        status: 'publish',
        meta: {
          pixmagix_project: project
        }
      }
    }).then(function (_ref3) {
      var id = _ref3.id,
        title = _ref3.title,
        meta = _ref3.meta;
      setItems([{
        id: id,
        title: (title === null || title === void 0 ? void 0 : title.rendered) || '',
        project: (meta === null || meta === void 0 ? void 0 : meta.pixmagix_project) || {}
      }].concat(items.slice(0, 11)));
      setLoading(false);
    })["catch"](function (_ref4) {
      var message = _ref4.message;
      setLoading(false);
      sendNotice({
        type: 'error',
        message: message
      });
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
      path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)(query, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.PROJECTS_REST_PATH + id),
      method: 'DELETE'
    }).then(function (response) {
      setLoading(false);
      setItems(response.items.map(function (_ref5) {
        var id = _ref5.id,
          title = _ref5.title,
          meta = _ref5.meta;
        return {
          id: id,
          title: (title === null || title === void 0 ? void 0 : title.rendered) || '',
          project: (meta === null || meta === void 0 ? void 0 : meta.pixmagix_project) || {}
        };
      }));
      setMaxPages(response.max_pages);
      setPage(response.page);
    })["catch"](function (_ref6) {
      var message = _ref6.message;
      setLoading(false);
      sendNotice({
        type: 'error',
        message: message
      });
    });
    ;
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
      if (author) {
        query.author = author;
      }
      wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)(query, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.PROJECTS_REST_PATH),
        withTotalPages: true
      }).then(function (response) {
        var items = response.items,
          totalPages = response.totalPages;
        setItems(items.map(function (_ref7) {
          var id = _ref7.id,
            caption = _ref7.caption,
            meta = _ref7.meta;
          return {
            id: id,
            caption: caption,
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
        if (author) {
          args.a = author;
        }
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addToRouter)(args, editor_globals__WEBPACK_IMPORTED_MODULE_5__.projects_url);
      })["catch"](function (_ref8) {
        var message = _ref8.message;
        setLoading(false);
        sendNotice({
          type: 'error',
          message: message
        });
      });
    } else {
      didMount.current = true;
    }
  }, [page, search, date, author]);
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
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Author', 'pixmagix'),
    value: author,
    options: editor_globals__WEBPACK_IMPORTED_MODULE_5__.users,
    onChange: function onChange(value) {
      setAuthor(value);
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
  }) : items.map(function (_ref9) {
    var id = _ref9.id,
      caption = _ref9.caption,
      project = _ref9.project;
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      key: id,
      caption: caption,
      href: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)({
        id: id
      }, editor_globals__WEBPACK_IMPORTED_MODULE_5__.new_url),
      src: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)({
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

"use strict";
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

/***/ "./src/projects/wrapper.jsx":
/*!**********************************!*\
  !*** ./src/projects/wrapper.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.jsx */ "./src/projects/header.jsx");
/* harmony import */ var _content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.jsx */ "./src/projects/content.jsx");
/* harmony import */ var _editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../editor/components/error-boundary.jsx */ "./src/editor/components/error-boundary.jsx");
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
  return /*#__PURE__*/React.createElement(_editor_components_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_content_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
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
/* harmony export */   IMAGES_REST_PATH: () => (/* binding */ IMAGES_REST_PATH),
/* harmony export */   NOTIFICATION_EXPIRATION_TIME: () => (/* binding */ NOTIFICATION_EXPIRATION_TIME),
/* harmony export */   PIXMAGIX_WEBSITE: () => (/* binding */ PIXMAGIX_WEBSITE),
/* harmony export */   PROJECTS_REST_PATH: () => (/* binding */ PROJECTS_REST_PATH),
/* harmony export */   REST_PATH: () => (/* binding */ REST_PATH)
/* harmony export */ });
var PIXMAGIX_WEBSITE = 'https://pixmagix-photo-editor.com/';
var PROJECTS_REST_PATH = 'wp/v2/pixmagix/';
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

/***/ "wp-i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
 * @param {object} params
 */

var initialize = function initialize(params) {
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(ProjectsList, params));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;