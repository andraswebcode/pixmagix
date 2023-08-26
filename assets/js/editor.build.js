var pixmagixEditor;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnhancerArray: () => (/* binding */ EnhancerArray),
/* harmony export */   MiddlewareArray: () => (/* binding */ MiddlewareArray),
/* harmony export */   SHOULD_AUTOBATCH: () => (/* binding */ SHOULD_AUTOBATCH),
/* harmony export */   TaskAbortError: () => (/* binding */ TaskAbortError),
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.__DO_NOT_USE__ActionTypes),
/* harmony export */   addListener: () => (/* binding */ addListener),
/* harmony export */   applyMiddleware: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware),
/* harmony export */   autoBatchEnhancer: () => (/* binding */ autoBatchEnhancer),
/* harmony export */   bindActionCreators: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators),
/* harmony export */   clearAllListeners: () => (/* binding */ clearAllListeners),
/* harmony export */   combineReducers: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers),
/* harmony export */   compose: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.compose),
/* harmony export */   configureStore: () => (/* binding */ configureStore),
/* harmony export */   createAction: () => (/* binding */ createAction),
/* harmony export */   createAsyncThunk: () => (/* binding */ createAsyncThunk),
/* harmony export */   createDraftSafeSelector: () => (/* binding */ createDraftSafeSelector),
/* harmony export */   createEntityAdapter: () => (/* binding */ createEntityAdapter),
/* harmony export */   createImmutableStateInvariantMiddleware: () => (/* binding */ createImmutableStateInvariantMiddleware),
/* harmony export */   createListenerMiddleware: () => (/* binding */ createListenerMiddleware),
/* harmony export */   createNextState: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   createReducer: () => (/* binding */ createReducer),
/* harmony export */   createSelector: () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector),
/* harmony export */   createSerializableStateInvariantMiddleware: () => (/* binding */ createSerializableStateInvariantMiddleware),
/* harmony export */   createSlice: () => (/* binding */ createSlice),
/* harmony export */   createStore: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.createStore),
/* harmony export */   current: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.current),
/* harmony export */   findNonSerializableValue: () => (/* binding */ findNonSerializableValue),
/* harmony export */   freeze: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.freeze),
/* harmony export */   getDefaultMiddleware: () => (/* binding */ getDefaultMiddleware),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   isAction: () => (/* binding */ isAction),
/* harmony export */   isAllOf: () => (/* binding */ isAllOf),
/* harmony export */   isAnyOf: () => (/* binding */ isAnyOf),
/* harmony export */   isAsyncThunkAction: () => (/* binding */ isAsyncThunkAction),
/* harmony export */   isDraft: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.isDraft),
/* harmony export */   isFluxStandardAction: () => (/* binding */ isFSA),
/* harmony export */   isFulfilled: () => (/* binding */ isFulfilled),
/* harmony export */   isImmutableDefault: () => (/* binding */ isImmutableDefault),
/* harmony export */   isPending: () => (/* binding */ isPending),
/* harmony export */   isPlain: () => (/* binding */ isPlain),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isRejected: () => (/* binding */ isRejected),
/* harmony export */   isRejectedWithValue: () => (/* binding */ isRejectedWithValue),
/* harmony export */   legacy_createStore: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore),
/* harmony export */   miniSerializeError: () => (/* binding */ miniSerializeError),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   original: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.original),
/* harmony export */   prepareAutoBatched: () => (/* binding */ prepareAutoBatched),
/* harmony export */   removeListener: () => (/* binding */ removeListener),
/* harmony export */   unwrapResult: () => (/* binding */ unwrapResult)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray([(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(value) : value], rest));
    };
    return wrappedSelector;
};
// src/configureStore.ts

// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    return redux__WEBPACK_IMPORTED_MODULE_0__.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop2) {
        return noop2;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
        return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/getDefaultMiddleware.ts

// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function (fn) {
            var started = Date.now();
            try {
                return fn();
            }
            finally {
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function () {
            if (elapsed > maxDelay) {
                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
            }
        }
    };
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
var EnhancerArray = /** @class */ (function (_super) {
    __extends(EnhancerArray, _super);
    function EnhancerArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, EnhancerArray.prototype);
        return _this;
    }
    Object.defineProperty(EnhancerArray, Symbol.species, {
        get: function () {
            return EnhancerArray;
        },
        enumerable: false,
        configurable: true
    });
    EnhancerArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray;
}(Array));
function freezeDraftable(val) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(val) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(val, function () {
    }) : val;
}
// src/immutableStateInvariantMiddleware.ts
var isProduction = "development" === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (path === void 0) { path = ""; }
    var tracked = { value: obj };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for (var key in obj) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    if (sameParentRef === void 0) { sameParentRef = false; }
    if (path === void 0) { path = ""; }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path: path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (var key in obj) {
        keysToDetect[key] = true;
    }
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_1 = function (key) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return { value: result };
        }
    };
    for (var key in keysToDetect) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_c) {
        var getState = _c.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function (next) { return function (action) {
            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            var dispatchedAction = next(action);
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        }; };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
    if (path === void 0) { path = ""; }
    if (isSerializable === void 0) { isSerializable = isPlain; }
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value: value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache == null ? void 0 : cache.has(value))
        return false;
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_2 = function (key, nestedValue) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        if (!isSerializable(nestedValue)) {
            return { value: {
                    keyPath: nestedPath,
                    value: nestedValue
                } };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return { value: foundNestedSerializable };
            }
        }
    };
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
        var state_2 = _loop_2(key, nestedValue);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    if (cache && isNestedFrozen(value))
        cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value))
        return false;
    for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
        var nestedValue = _c[_i];
        if (typeof nestedValue !== "object" || nestedValue === null)
            continue;
        if (!isNestedFrozen(nestedValue))
            return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
    var cache = !disableCache && WeakSet ? new WeakSet() : void 0;
    return function (storeAPI) { return function (next) { return function (action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function () {
                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                if (foundActionNonSerializableValue) {
                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                }
            });
        }
        if (!ignoreState) {
            measureUtils.measureTime(function () {
                var state = storeAPI.getState();
                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                if (foundStateNonSerializableValue) {
                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    }; }; };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
        }
        else {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
        }
    }
    if (true) {
        if (immutableCheck) {
            var immutableOptions = {};
            if (!isBoolean(immutableCheck)) {
                immutableOptions = immutableCheck;
            }
            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
        }
        if (serializableCheck) {
            var serializableOptions = {};
            if (!isBoolean(serializableCheck)) {
                serializableOptions = serializableCheck;
            }
            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "development" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject(reducer)) {
        rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
    var storeEnhancers = defaultEnhancers;
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(defaultEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isAction(action) {
    return isPlainObject(action) && "type" in action;
}
function isFSA(action) {
    return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/createReducer.ts

// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (true) {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    if (true) {
        if (typeof mapOrBuilderCallback === "object") {
            if (!hasWarnedAboutObjectNotation) {
                hasWarnedAboutObjectNotation = true;
                console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
            }
        }
    }
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = function () { return freezeDraftable(initialState()); };
    }
    else {
        var frozenInitialState_1 = freezeDraftable(initialState);
        getInitialState = function () { return frozenInitialState_1; };
    }
    function reducer(state, action) {
        if (state === void 0) { state = getInitialState(); }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function (_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                }
                else if (!(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/createSlice.ts
var hasWarnedAboutObjectNotation2 = false;
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "development" === "development") {
        if (options.initialState === void 0) {
            console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
        }
    }
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        if (true) {
            if (typeof options.extraReducers === "object") {
                if (!hasWarnedAboutObjectNotation2) {
                    hasWarnedAboutObjectNotation2 = true;
                    console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
        }
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, function (builder) {
            for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
            }
            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
            }
            if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
            }
        });
    }
    var _reducer;
    return {
        name: name,
        reducer: function (state, action) {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function () {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
// src/entities/state_adapter.ts

function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(state)) {
            runMutator(state);
            return state;
        }
        else {
            return (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if ( true && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = Object.keys(state.entities);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var appliedUpdates = false;
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            var entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            var newId = selectId(entity);
            if (update.id !== newId) {
                delete state.entities[update.id];
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            resortEntities(state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        resortEntities(state);
    }
    function resortEntities(state) {
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _c = __spreadValues({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
var createAsyncThunk = (function () {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var displayedWarning = false;
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    },
                    reason: void 0,
                    throwIfAborted: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
                if (true) {
                    if (!displayedWarning) {
                        displayedWarning = true;
                        console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
                    }
                }
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                var started = false;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                var promise2 = function () {
                    return __async(this, null, function () {
                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, conditionResult];
                                case 1:
                                    conditionResult = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (conditionResult === false || abortController.signal.aborted) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    started = true;
                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
                                        name: "AbortError",
                                        message: abortReason || "Aborted"
                                    }); }); });
                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                abort: abort,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 3:
                                    finalAction = _c.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _c.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 5];
                                case 5:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise2, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise2.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/listenerMiddleware/utils.ts
var assertFunction = function (func, expected) {
    if (typeof func !== "function") {
        throw new TypeError(expected + " is not a function");
    }
};
var noop = function () {
};
var catchRejection = function (promise2, onError) {
    if (onError === void 0) { onError = noop; }
    promise2.catch(onError);
    return promise2;
};
var addAbortSignalListener = function (abortSignal, callback) {
    abortSignal.addEventListener("abort", callback, { once: true });
    return function () { return abortSignal.removeEventListener("abort", callback); };
};
var abortControllerWithReason = function (abortController, reason) {
    var signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = /** @class */ (function () {
    function TaskAbortError(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError;
}());
// src/listenerMiddleware/task.ts
var validateActive = function (signal) {
    if (signal.aborted) {
        throw new TaskAbortError(signal.reason);
    }
};
function raceWithSignal(signal, promise2) {
    var cleanup = noop;
    return new Promise(function (resolve, reject) {
        var notifyRejection = function () { return reject(new TaskAbortError(signal.reason)); };
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise2.finally(function () { return cleanup(); }).then(resolve, reject);
    }).finally(function () {
        cleanup = noop;
    });
}
var runTask = function (task2, cleanUp) { return __async(void 0, null, function () {
    var value, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, Promise.resolve()];
            case 1:
                _c.sent();
                return [4 /*yield*/, task2()];
            case 2:
                value = _c.sent();
                return [2 /*return*/, {
                        status: "ok",
                        value: value
                    }];
            case 3:
                error_1 = _c.sent();
                return [2 /*return*/, {
                        status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
                        error: error_1
                    }];
            case 4:
                cleanUp == null ? void 0 : cleanUp();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createPause = function (signal) {
    return function (promise2) {
        return catchRejection(raceWithSignal(signal, promise2).then(function (output) {
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = function (signal) {
    var pause = createPause(signal);
    return function (timeoutMs) {
        return pause(new Promise(function (resolve) { return setTimeout(resolve, timeoutMs); }));
    };
};
// src/listenerMiddleware/index.ts
var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function (parentAbortSignal) {
    var linkControllers = function (controller) { return addAbortSignalListener(parentAbortSignal, function () { return abortControllerWithReason(controller, parentAbortSignal.reason); }); };
    return function (taskExecutor) {
        assertFunction(taskExecutor, "taskExecutor");
        var childAbortController = new AbortController();
        linkControllers(childAbortController);
        var result = runTask(function () { return __async(void 0, null, function () {
            var result2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        validateActive(parentAbortSignal);
                        validateActive(childAbortController.signal);
                        return [4 /*yield*/, taskExecutor({
                                pause: createPause(childAbortController.signal),
                                delay: createDelay(childAbortController.signal),
                                signal: childAbortController.signal
                            })];
                    case 1:
                        result2 = _c.sent();
                        validateActive(childAbortController.signal);
                        return [2 /*return*/, result2];
                }
            });
        }); }, function () { return abortControllerWithReason(childAbortController, taskCompleted); });
        return {
            result: createPause(parentAbortSignal)(result),
            cancel: function () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = function (startListening, signal) {
    var take = function (predicate, timeout) { return __async(void 0, null, function () {
        var unsubscribe, tuplePromise, promises, output;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    validateActive(signal);
                    unsubscribe = function () {
                    };
                    tuplePromise = new Promise(function (resolve, reject) {
                        var stopListening = startListening({
                            predicate: predicate,
                            effect: function (action, listenerApi) {
                                listenerApi.unsubscribe();
                                resolve([
                                    action,
                                    listenerApi.getState(),
                                    listenerApi.getOriginalState()
                                ]);
                            }
                        });
                        unsubscribe = function () {
                            stopListening();
                            reject();
                        };
                    });
                    promises = [
                        tuplePromise
                    ];
                    if (timeout != null) {
                        promises.push(new Promise(function (resolve) { return setTimeout(resolve, timeout, null); }));
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, raceWithSignal(signal, Promise.race(promises))];
                case 2:
                    output = _c.sent();
                    validateActive(signal);
                    return [2 /*return*/, output];
                case 3:
                    unsubscribe();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return function (predicate, timeout) { return catchRejection(take(predicate, timeout)); };
};
var getListenerEntryPropsFrom = function (options) {
    var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
    if (type) {
        predicate = createAction(type).match;
    }
    else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    }
    else if (matcher) {
        predicate = matcher;
    }
    else if (predicate) {
    }
    else {
        throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return { predicate: predicate, type: type, effect: effect };
};
var createListenerEntry = function (options) {
    var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
    var id = nanoid();
    var entry = {
        id: id,
        effect: effect,
        type: type,
        predicate: predicate,
        pending: new Set(),
        unsubscribe: function () {
            throw new Error("Unsubscribe not initialized");
        }
    };
    return entry;
};
var cancelActiveListeners = function (entry) {
    entry.pending.forEach(function (controller) {
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = function (listenerMap) {
    return function () {
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = function (errorHandler, errorToNotify, errorInfo) {
    try {
        errorHandler(errorToNotify, errorInfo);
    }
    catch (errorHandlerError) {
        setTimeout(function () {
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArray([alm + "/error"], args));
};
function createListenerMiddleware(middlewareOptions) {
    var _this = this;
    if (middlewareOptions === void 0) { middlewareOptions = {}; }
    var listenerMap = new Map();
    var extra = middlewareOptions.extra, _c = middlewareOptions.onError, onError = _c === void 0 ? defaultErrorHandler : _c;
    assertFunction(onError, "onError");
    var insertEntry = function (entry) {
        entry.unsubscribe = function () { return listenerMap.delete(entry.id); };
        listenerMap.set(entry.id, entry);
        return function (cancelOptions) {
            entry.unsubscribe();
            if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    var findListenerEntry = function (comparator) {
        for (var _i = 0, _c = Array.from(listenerMap.values()); _i < _c.length; _i++) {
            var entry = _c[_i];
            if (comparator(entry)) {
                return entry;
            }
        }
        return void 0;
    };
    var startListening = function (options) {
        var entry = findListenerEntry(function (existingEntry) { return existingEntry.effect === options.effect; });
        if (!entry) {
            entry = createListenerEntry(options);
        }
        return insertEntry(entry);
    };
    var stopListening = function (options) {
        var _c = getListenerEntryPropsFrom(options), type = _c.type, effect = _c.effect, predicate = _c.predicate;
        var entry = findListenerEntry(function (entry2) {
            var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    var notifyListener = function (entry, action, api, getOriginalState) { return __async(_this, null, function () {
        var internalTaskController, take, listenerError_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    internalTaskController = new AbortController();
                    take = createTakePattern(startListening, internalTaskController.signal);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    entry.pending.add(internalTaskController);
                    return [4 /*yield*/, Promise.resolve(entry.effect(action, assign({}, api, {
                            getOriginalState: getOriginalState,
                            condition: function (predicate, timeout) { return take(predicate, timeout).then(Boolean); },
                            take: take,
                            delay: createDelay(internalTaskController.signal),
                            pause: createPause(internalTaskController.signal),
                            extra: extra,
                            signal: internalTaskController.signal,
                            fork: createFork(internalTaskController.signal),
                            unsubscribe: entry.unsubscribe,
                            subscribe: function () {
                                listenerMap.set(entry.id, entry);
                            },
                            cancelActiveListeners: function () {
                                entry.pending.forEach(function (controller, _, set) {
                                    if (controller !== internalTaskController) {
                                        abortControllerWithReason(controller, listenerCancelled);
                                        set.delete(controller);
                                    }
                                });
                            }
                        })))];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 5];
                case 3:
                    listenerError_1 = _c.sent();
                    if (!(listenerError_1 instanceof TaskAbortError)) {
                        safelyNotifyError(onError, listenerError_1, {
                            raisedBy: "effect"
                        });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    abortControllerWithReason(internalTaskController, listenerCompleted);
                    entry.pending.delete(internalTaskController);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    var middleware = function (api) { return function (next) { return function (action) {
        if (!isAction(action)) {
            return next(action);
        }
        if (addListener.match(action)) {
            return startListening(action.payload);
        }
        if (clearAllListeners.match(action)) {
            clearListenerMiddleware();
            return;
        }
        if (removeListener.match(action)) {
            return stopListening(action.payload);
        }
        var originalState = api.getState();
        var getOriginalState = function () {
            if (originalState === INTERNAL_NIL_TOKEN) {
                throw new Error(alm + ": getOriginalState can only be called synchronously");
            }
            return originalState;
        };
        var result;
        try {
            result = next(action);
            if (listenerMap.size > 0) {
                var currentState = api.getState();
                var listenerEntries = Array.from(listenerMap.values());
                for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
                    var entry = listenerEntries_1[_i];
                    var runListener = false;
                    try {
                        runListener = entry.predicate(action, currentState, originalState);
                    }
                    catch (predicateError) {
                        runListener = false;
                        safelyNotifyError(onError, predicateError, {
                            raisedBy: "predicate"
                        });
                    }
                    if (!runListener) {
                        continue;
                    }
                    notifyListener(entry, action, api, getOriginalState);
                }
            }
        }
        finally {
            originalState = INTERNAL_NIL_TOKEN;
        }
        return result;
    }; }; };
    return {
        middleware: middleware,
        startListening: startListening,
        stopListening: stopListening,
        clearListeners: clearListenerMiddleware
    };
}
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function () { return function (payload) {
    var _c;
    return ({
        payload: payload,
        meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    });
}; };
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
var createQueueWithTimer = function (timeout) {
    return function (notify) {
        setTimeout(notify, timeout);
    };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = function (options) {
    if (options === void 0) { options = { type: "raf" }; }
    return function (next) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var store = next.apply(void 0, args);
        var notifying = true;
        var shouldNotifyAtEndOfTick = false;
        var notificationQueued = false;
        var listeners = new Set();
        var queueCallback = options.type === "tick" ? queueMicrotaskShim : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
        var notifyListeners = function () {
            notificationQueued = false;
            if (shouldNotifyAtEndOfTick) {
                shouldNotifyAtEndOfTick = false;
                listeners.forEach(function (l) { return l(); });
            }
        };
        return Object.assign({}, store, {
            subscribe: function (listener2) {
                var wrappedListener = function () { return notifying && listener2(); };
                var unsubscribe = store.subscribe(wrappedListener);
                listeners.add(listener2);
                return function () {
                    unsubscribe();
                    listeners.delete(listener2);
                };
            },
            dispatch: function (action) {
                var _a;
                try {
                    notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
                    shouldNotifyAtEndOfTick = !notifying;
                    if (shouldNotifyAtEndOfTick) {
                        if (!notificationQueued) {
                            notificationQueued = true;
                            queueCallback(notifyListeners);
                        }
                    }
                    return store.dispatch(action);
                }
                finally {
                    notifying = true;
                }
            }
        });
    }; };
};
// src/index.ts
(0,immer__WEBPACK_IMPORTED_MODULE_2__.enableES5)();

//# sourceMappingURL=redux-toolkit.esm.js.map

/***/ }),

/***/ "./src/editor/canvas/class-brush-path.js":
/*!***********************************************!*\
  !*** ./src/editor/canvas/class-brush-path.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");




/**
 * 
 * @since 1.0.0
 * @access private
 */

function _renderNode(ctx, left, top) {
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  fabric__WEBPACK_IMPORTED_MODULE_0__.controlsUtils.renderCircleControl(ctx, left, top, {
    transparentCorners: false,
    cornerSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.CORNER_SIZE / scale,
    cornerColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR,
    cornerStrokeColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR
  }, {});
}

/**
 * 
 * @since 1.0.0
 * @access private
 */

function _renderControlPoint(ctx, left, top) {
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  fabric__WEBPACK_IMPORTED_MODULE_0__.controlsUtils.renderCircleControl(ctx, left, top, {
    transparentCorners: true,
    cornerSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.CORNER_SIZE / scale,
    cornerColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR,
    cornerStrokeColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR
  }, {});
}

/**
 * 
 * @since 1.0.0
 * @access private
 */

function _renderLine(ctx, x1, y1, x2, y2) {
  ctx.save();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.strokeStyle = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_0__.BaseBrush, {
  /**
   * Type of path: 'cubic', 'quadratic', 'polygon', or 'polyline'.
   * @since 1.0.0
   * @var {string}
   */

  type: 'cubic',
  /**
   * 
   * @since 1.0.0
   * @param {object} canvas
   * @param {object} options
   */
  initialize: function initialize(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.canvas = canvas;
    this._path = [];
    this._nextControlPoint = new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(0, 0);
    this.setOptions(options);
  },
  /**
   * 
   * @since 1.0.0
   * @param {object} options
   */
  setOptions: function setOptions(options) {
    for (var key in options) {
      this[key] = options[key];
    }
    this._setBrushStyles(this.canvas.contextTop);
    this._setShadow();
    this._render();
  },
  /**
   *
   * @since 1.0.0
   * @param {object} pointer
   * @param {object} options
   */
  onMouseDown: function onMouseDown(pointer, options) {
    if (!this.canvas._isMainEvent(options.e)) {
      return;
    }
    if (options.e.button === 2) {
      // on right click
      this._removeCommand(pointer);
    } else {
      if (this._isNodeClicked(pointer)) {
        this._setControlPointsDistances();
        this._changeCommand(pointer);
      } else {
        this._addCommand(pointer);
      }
    }
    this._render();
  },
  /**
   *
   * @since 1.0.0
   * @param {object} pointer
   * @param {object} options
   */
  onMouseMove: function onMouseMove(pointer, options) {
    if (!this.canvas._isMainEvent(options.e)) {
      return;
    }
    this._changeCommand(pointer, options.e);
    this._render();
  },
  /**
   *
   * @since 1.0.0
   * @param {object} options
   */
  onMouseUp: function onMouseUp(options) {
    if (!this.canvas._isMainEvent(options.e)) {
      return true;
    }
    this.__activeNode = null;
    this.__controlPointsDistances = null;
  },
  /**
   *
   * @since 1.0.0
   */
  finalizeAndAddPath: function finalizeAndAddPath() {
    var path = this.createPath();
    if (!path) {
      return;
    }
    this._path = [];
    this.canvas.clearContext(this.canvas.contextTop);
    this.canvas.fire('before:path:created', {
      path: path
    });
    this.canvas.add(path);
    this.canvas.requestRenderAll();
    path.setCoords();
    this._resetShadow();
    this.canvas.fire('path:created', {
      path: path
    }).setActiveObject(path);
  },
  /**
   *
   * @since 1.0.0
   * @return {fabric.Path|fabric.Polygon|fabric.Polyline|undefined}
   */
  createPath: function createPath() {
    var _this$_path;
    if (!((_this$_path = this._path) !== null && _this$_path !== void 0 && _this$_path.length)) {
      return;
    }
    var isPath = this._isPath();
    var isPolygon = this.type === 'polygon';
    var path = isPath ? this._path : this._path.map(function (c) {
      if (c[0] === 'M' || c[0] === 'L') {
        return new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(c[1], c[2]);
      }
      return new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(0, 0);
    });
    var options = {
      fill: null,
      stroke: this.color,
      strokeWidth: this.width,
      strokeLineCap: this.strokeLineCap,
      strokeMiterLimit: this.strokeMiterLimit,
      strokeLineJoin: this.strokeLineJoin,
      strokeDashArray: this.strokeDashArray,
      shadow: this.shadow
    };
    return isPath ? new fabric__WEBPACK_IMPORTED_MODULE_0__.Path(path, options) : isPolygon ? new fabric__WEBPACK_IMPORTED_MODULE_0__.Polygon(path, options) : new fabric__WEBPACK_IMPORTED_MODULE_0__.Polyline(path, options);
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @return boolean
   */
  _isPath: function _isPath() {
    return this.type === 'cubic' || this.type === 'quadratic';
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {object} pointer
   * @return boolean
   */
  _isNodeClicked: function _isNodeClicked(pointer) {
    var activeNode = false,
      i,
      c;
    var path = this._path;
    var length = path.length;
    for (i = 0; i <= length; i++) {
      if (activeNode) {
        break;
      }
      c = path[i];
      if (!c) {
        continue;
      }
      switch (c[0]) {
        case 'M':
        case 'L':
          if (pointer.isAround({
            x: c[1],
            y: c[2]
          })) {
            activeNode = {
              type: 'p',
              index: i
            };
          }
          break;
        case 'C':
          if (pointer.isAround({
            x: c[1],
            y: c[2]
          })) {
            activeNode = {
              type: 'c1',
              index: i
            };
          } else if (pointer.isAround({
            x: c[3],
            y: c[4]
          })) {
            activeNode = {
              type: 'c2',
              index: i
            };
          } else if (pointer.isAround({
            x: c[5],
            y: c[6]
          })) {
            activeNode = {
              type: 'p',
              index: i
            };
          }
          break;
        case 'Q':
          if (pointer.isAround({
            x: c[1],
            y: c[2]
          })) {
            activeNode = {
              type: 'c',
              index: i
            };
          } else if (pointer.isAround({
            x: c[3],
            y: c[4]
          })) {
            activeNode = {
              type: 'p',
              index: i
            };
          }
          break;
        default:
          break;
      }
    }
    this.__activeNode = activeNode;
    return !!activeNode;
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {number} index
   * @return array
   */
  _getCommand: function _getCommand(index) {
    return this._path[index] || [];
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {number} index
   * @return array
   */
  _getPrevCommand: function _getPrevCommand(index) {
    var i = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(index) ? this._path.length : index;
    return this._getCommand(i - 1);
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {number} index
   * @return array
   */
  _getNextCommand: function _getNextCommand() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    return this._getCommand(index + 1);
  },
  /**
   *
   * @since 1.0.0
   * @access private
   * @param {object} pointer
   */
  _addCommand: function _addCommand(pointer) {
    var path = this._path;
    var length = path.length;
    var command = ['M', pointer.x, pointer.y];
    if (length) {
      var _this$_nextControlPoi = this._nextControlPoint,
        x = _this$_nextControlPoi.x,
        y = _this$_nextControlPoi.y;
      switch (this.type) {
        case 'cubic':
          command = ['C', x, y, pointer.x, pointer.y, pointer.x, pointer.y];
          break;
        case 'quadratic':
          command = ['Q', x, y, pointer.x, pointer.y];
          break;
        case 'polygon':
        case 'polyline':
          command = ['L', pointer.x, pointer.y];
          break;
        default:
          break;
      }
    }
    if (this._isPath()) {
      this.__activeNode = {
        type: this.type === 'cubic' ? 'c2' : 'c',
        index: length
      };
    }
    path.push(command);
    this._nextControlPoint.setFromPoint(pointer);
  },
  /**
   *
   * @since 1.0.0
   * @access private
   * @param {object} pointer
   * @param {Event} e
   */
  _changeCommand: function _changeCommand(pointer) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _ref = this.__activeNode || {},
      type = _ref.type,
      index = _ref.index;
    var shiftKey = e.shiftKey;
    var isPath = this._isPath();
    var length = this._path.length;
    var i = !this.__activeNode ? length - 1 : index;
    var c = this._getCommand(i);
    var nc = this._getNextCommand(i);
    var pc = this._getPrevCommand(i);
    var dists = this.__controlPointsDistances;
    if (c) {
      switch (c[0]) {
        case 'M':
          if (isPath) {
            if (nc.length) {
              c[1] = pointer.x;
              c[2] = pointer.y;
            } else {
              this._nextControlPoint.setFromPoint(pointer);
            }
          } else {
            c[1] = pointer.x;
            c[2] = pointer.y;
          }
          break;
        case 'L':
          c[1] = pointer.x;
          c[2] = pointer.y;
          break;
        case 'C':
          if (type === 'c1') {
            c[1] = pointer.x;
            c[2] = pointer.y;
            if (!shiftKey && pc.length) {
              var distX = c[1] - pc[5];
              var distY = c[2] - pc[6];
              pc[3] = pc[5] - distX;
              pc[4] = pc[6] - distY;
            }
          } else if (type === 'c2') {
            c[3] = pointer.x;
            c[4] = pointer.y;
            if (!shiftKey && nc.length) {
              var _distX = c[3] - c[5];
              var _distY = c[4] - c[6];
              nc[1] = c[5] - _distX;
              nc[2] = c[6] - _distY;
            }
          } else if (type === 'p') {
            c[5] = pointer.x;
            c[6] = pointer.y;
            if (dists !== null && dists !== void 0 && dists.c1) {
              nc[1] = pointer.x + dists.c1.x;
              nc[2] = pointer.y + dists.c1.y;
            }
            if (dists !== null && dists !== void 0 && dists.c2) {
              c[3] = pointer.x + dists.c2.x;
              c[4] = pointer.y + dists.c2.y;
            }
          }
          if (isPath && !nc.length) {
            this._nextControlPoint.setXY(c[5] - (c[3] - c[5]), c[6] - (c[4] - c[6]));
          }
          break;
        case 'Q':
          if (type === 'c') {
            c[1] = pointer.x;
            c[2] = pointer.y;
          } else if (type === 'p') {
            c[3] = pointer.x;
            c[4] = pointer.y;
          }
          break;
        default:
          break;
      }
    }
  },
  /**
   *
   * @since 1.0.0
   * @access private
   * @param {object} pointer
   */
  _removeCommand: function _removeCommand(pointer) {
    if (!this._isNodeClicked(pointer)) {
      return;
    }
    var _ref2 = this.__activeNode || {},
      type = _ref2.type,
      index = _ref2.index;
    if (type === 'p' && index) {
      this._path.splice(index, 1);
    }
    this.__activeNode = null;
  },
  /**
   *
   * @since 1.0.0
   * @access private
   */
  _setControlPointsDistances: function _setControlPointsDistances() {
    var _ref3 = this.__activeNode || {},
      type = _ref3.type,
      index = _ref3.index;
    var isPath = this._isPath();
    var dists = {};
    var c = this._getCommand(index);
    var nc = this._getNextCommand(index);
    if (type === 'p' && isPath) {
      if (this.type === 'cubic') {
        if (nc.length) {
          dists.c1 = new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(nc[1] - c[5], nc[2] - c[6]);
        }
        dists.c2 = new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(c[3] - c[5], c[4] - c[6]);
      } else if (this.type === 'quadratic') {
        dists.c = new fabric__WEBPACK_IMPORTED_MODULE_0__.Point();
      }
      this.__controlPointsDistances = dists;
    }
  },
  /**
   * Render context top when you are drawing path.
   * @since 1.0.0
   * @access protected
   */
  _render: function _render() {
    var ctx = this.canvas.contextTop;
    this.canvas.clearContext(ctx);
    this._saveAndTransform(ctx);
    ctx.beginPath();
    this._renderPath(ctx);
    this.type === 'polygon' && this._path.length > 1 && ctx.closePath();
    this.width && ctx.stroke();
    this._renderControls(ctx);
    this._renderNextControl(ctx);
    ctx.restore();
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderPath: function _renderPath(ctx) {
    this._path.forEach(function (c) {
      switch (c[0]) {
        case 'M':
          ctx.moveTo(c[1], c[2]);
          break;
        case 'C':
          ctx.bezierCurveTo(c[1], c[2], c[3], c[4], c[5], c[6]);
          break;
        case 'Q':
          ctx.quadraticCurveTo(c[1], c[2], c[3], c[4]);
          break;
        case 'L':
          ctx.lineTo(c[1], c[2]);
          break;
        default:
          break;
      }
    });
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderControls: function _renderControls(ctx) {
    var _this = this;
    var scale = this.canvas.getScale();
    this._path.forEach(function (c, i) {
      var pc = _this._getPrevCommand(i);
      switch (c[0]) {
        case 'M':
        case 'L':
          _renderNode(ctx, c[1], c[2], scale);
          break;
        case 'C':
          _renderLine(ctx, pc[pc.length - 2], pc[pc.length - 1], c[1], c[2]);
          _renderLine(ctx, c[3], c[4], c[5], c[6]);
          _renderControlPoint(ctx, c[1], c[2], scale);
          _renderControlPoint(ctx, c[3], c[4], scale);
          _renderNode(ctx, c[5], c[6], scale);
          break;
        case 'Q':
          _renderLine(ctx, pc[pc.length - 2], pc[pc.length - 1], c[1], c[2]);
          _renderLine(ctx, c[1], c[2], c[3], c[4]);
          _renderControlPoint(ctx, c[1], c[2], scale);
          _renderNode(ctx, c[3], c[4], scale);
          break;
        default:
          break;
      }
    });
  },
  /**
   * 
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderNextControl: function _renderNextControl(ctx) {
    if (!this._isPath()) {
      return;
    }
    var last = this._getPrevCommand();
    var pX = last === null || last === void 0 ? void 0 : last[(last === null || last === void 0 ? void 0 : last.length) - 2];
    var pY = last === null || last === void 0 ? void 0 : last[(last === null || last === void 0 ? void 0 : last.length) - 1];
    var scale = this.canvas.getScale();
    var _this$_nextControlPoi2 = this._nextControlPoint,
      x = _this$_nextControlPoi2.x,
      y = _this$_nextControlPoi2.y;
    if (pX && pY && x && y) {
      _renderLine(ctx, pX, pY, x, y);
      _renderControlPoint(ctx, x, y, scale);
    }
  }
}));

/***/ }),

/***/ "./src/editor/canvas/class-brush-shape.js":
/*!************************************************!*\
  !*** ./src/editor/canvas/class-brush-shape.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_shapes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/shapes.js */ "./src/editor/utils/shapes.js");





/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_0__.BaseBrush, {
  /**
   * Type of svg element: 'square', 'circle', 'path', 'polygon', or 'polyline'.
   * @since 1.0.0
   * @var {string}
   */

  type: 'square',
  /**
   * Path commands, or points.
   * @since 1.0.0
   * @var {string}
   */

  path: '',
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  name: '',
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  fill: '',
  /**
   * Svg viewBox.
   * @since 1.0.0
   * @var {object}
   */

  viewBox: new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(100, 100),
  /**
   * 
   * @since 1.0.0
   * @var {number}
   */

  gridSize: 1,
  /**
   * 
   * @since 1.0.0
   * @param {object} canvas
   * @param {object} options
   */
  initialize: function initialize(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.canvas = canvas;
    for (var key in options) {
      this[key] = options[key];
    }
    var object = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(_utils_shapes_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: options.name
    });
    if (object) {
      this.name = object.label || '';
      this.type = object.type || 'square';
      this.path = object.path || '';
    }
    this._reset();
  },
  /**
   *
   * @since 1.0.0
   * @param {object} pointer
   * @param {object} options
   */
  onMouseDown: function onMouseDown(pointer, options) {
    this._path = this.type === 'path' ? fabric__WEBPACK_IMPORTED_MODULE_0__.util.parsePath(this.path) : this.type === 'polygon' || this.type === 'polyline' ? this.path.split(' ').map(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed) : [];
    if (!this.canvas._isMainEvent(options.e)) {
      return;
    }
    this._reset();
    this._startPosition.setFromPoint(pointer);
  },
  /**
   *
   * @since 1.0.0
   * @param {object} pointer
   * @param {object} options
   */
  onMouseMove: function onMouseMove(pointer, options) {
    if (!this.canvas._isMainEvent(options.e)) {
      return;
    }
    this._ctrlKey = options.e.ctrlKey || options.e.metaKey;
    this._currentPosition.setFromPoint(pointer);
    this.canvas.clearContext(this.canvas.contextTop);
    this._render();
  },
  /**
   *
   * @since 1.0.0
   * @param {object} options
   */
  onMouseUp: function onMouseUp(options) {
    if (!this.canvas._isMainEvent(options.e)) {
      return true;
    }
    this.canvas.clearContext(this.canvas.contextTop);
    if (this._currentPosition.x && this._currentPosition.y) {
      // Check if shape has size, and you didn't click.
      this._finalizeAndAddShape();
    }
    this._ctrlKey = false;
    return false;
  },
  /**
   *
   * @since 1.0.0
   * @access private
   * @return {object}
   */
  _getSizeAndPosition: function _getSizeAndPosition() {
    var startPos = this._startPosition;
    var currPos = this._currentPosition;
    var size = currPos.subtract(startPos);
    var gridSize = this.gridSize;
    if (this._ctrlKey) {
      size.x = Math.max(size.x, size.y);
      size.y = Math.max(size.x, size.y);
    }
    var position = startPos.subtract(new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(size.x < 0 ? Math.abs(size.x) : 0, size.y < 0 ? Math.abs(size.y) : 0));
    if (gridSize) {
      size.x = Math.round(size.x / gridSize) * gridSize;
      size.y = Math.round(size.y / gridSize) * gridSize;
      position.x = Math.round(position.x / gridSize) * gridSize;
      position.y = Math.round(position.y / gridSize) * gridSize;
    }
    return {
      size: size,
      position: position
    };
  },
  /**
   *
   * @since 1.0.0
   * @access private
   */
  _reset: function _reset() {
    if (this.fill) {
      var ctx = this.canvas.contextTop;
      this._setBrushStyles(ctx);
      ctx.fillStyle = this.fill;
    }
    this._setShadow();
    this._startPosition = new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(0, 0);
    this._currentPosition = new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(0, 0);
  },
  /**
   * Render context top when you are drawing shape.
   * @since 1.0.0
   * @access protected
   */
  _render: function _render() {
    var ctx = this.canvas.contextTop;
    this._saveAndTransform(ctx);
    if (this.type === 'path') {
      this._renderPath(ctx);
    } else if (this.type === 'polygon' || this.type === 'polyline') {
      this._renderPolyline(ctx);
    } else if (this.type === 'square') {
      this._renderSquare(ctx);
    } else if (this.type === 'circle') {
      this._renderCircle(ctx);
    }
    ctx.fill();
    this.width && ctx.stroke();
    ctx.restore();
  },
  /**
   * Render context top when this type is square.
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderSquare: function _renderSquare(ctx) {
    var _this$_getSizeAndPosi = this._getSizeAndPosition(),
      size = _this$_getSizeAndPosi.size,
      position = _this$_getSizeAndPosi.position;
    ctx.beginPath();
    ctx.rect(position.x, position.y, Math.abs(size.x), Math.abs(size.y));
  },
  /**
   * Render context top when this type is circle.
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderCircle: function _renderCircle(ctx) {
    var _this$_getSizeAndPosi2 = this._getSizeAndPosition(),
      size = _this$_getSizeAndPosi2.size,
      position = _this$_getSizeAndPosi2.position;
    var pos = position.add(new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(size.x < 0 ? -size.x : size.x, size.y < 0 ? -size.y : size.y).divide(2));
    ctx.beginPath();
    ctx.ellipse(pos.x, pos.y, Math.abs(size.x / 2), Math.abs(size.y / 2), 0, 0, Math.PI * 2);
  },
  /**
   * Render context top when this type is path.
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderPath: function _renderPath(ctx) {
    var _this$_getSizeAndPosi3 = this._getSizeAndPosition(),
      size = _this$_getSizeAndPosi3.size,
      position = _this$_getSizeAndPosi3.position;
    var viewBox = this.viewBox;
    var path = this._path;
    var i, c, cp1x, cp1y, cp2x, cp2y, x, y;
    ctx.beginPath();
    for (i = 0; i < (path === null || path === void 0 ? void 0 : path.length) || 0; i++) {
      c = path[i];
      switch (c[0]) {
        // Command
        case 'M':
          x = size.x < 0 ? position.x - c[1] / viewBox.x * size.x : c[1] / viewBox.x * size.x + position.x;
          y = size.y < 0 ? position.y - c[2] / viewBox.y * size.y : c[2] / viewBox.y * size.y + position.y;
          ctx.moveTo(x, y);
          break;
        case 'L':
          x = size.x < 0 ? position.x - c[1] / viewBox.x * size.x : c[1] / viewBox.x * size.x + position.x;
          y = size.y < 0 ? position.y - c[2] / viewBox.y * size.y : c[2] / viewBox.y * size.y + position.y;
          ctx.lineTo(x, y);
          break;
        case 'Q':
          cp1x = size.x < 0 ? position.x - c[1] / viewBox.x * size.x : c[1] / viewBox.x * size.x + position.x;
          cp1y = size.y < 0 ? position.y - c[2] / viewBox.y * size.y : c[2] / viewBox.y * size.y + position.y;
          x = size.x < 0 ? position.x - c[3] / viewBox.x * size.x : c[3] / viewBox.x * size.x + position.x;
          y = size.y < 0 ? position.y - c[4] / viewBox.y * size.y : c[4] / viewBox.y * size.y + position.y;
          ctx.quadraticCurveTo(cp1x, cp1y, x, y);
          break;
        case 'C':
          cp1x = size.x < 0 ? position.x - c[1] / viewBox.x * size.x : c[1] / viewBox.x * size.x + position.x;
          cp1y = size.y < 0 ? position.y - c[2] / viewBox.y * size.y : c[2] / viewBox.y * size.y + position.y;
          cp2x = size.x < 0 ? position.x - c[3] / viewBox.x * size.x : c[3] / viewBox.x * size.x + position.x;
          cp2y = size.y < 0 ? position.y - c[4] / viewBox.y * size.y : c[4] / viewBox.y * size.y + position.y;
          x = size.x < 0 ? position.x - c[5] / viewBox.x * size.x : c[5] / viewBox.x * size.x + position.x;
          y = size.y < 0 ? position.y - c[6] / viewBox.y * size.y : c[6] / viewBox.y * size.y + position.y;
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          break;
        case 'z':
        case 'Z':
          ctx.closePath();
          break;
        default:
          break;
      }
    }
  },
  /**
   * Render context top when this type is polyline or polygon.
   * @since 1.0.0
   * @access private
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderPolyline: function _renderPolyline(ctx) {
    var _this$_getSizeAndPosi4 = this._getSizeAndPosition(),
      size = _this$_getSizeAndPosi4.size,
      position = _this$_getSizeAndPosi4.position;
    var viewBox = this.viewBox;
    var path = this._path;
    var i, x, y, _x, _y;
    ctx.beginPath();
    for (i = 0; i < (path === null || path === void 0 ? void 0 : path.length) || 0; i += 2) {
      x = path[i];
      y = path[i + 1];
      _x = x / viewBox.x * size.x;
      _y = y / viewBox.y * size.y;
      if (i === 0) {
        ctx.moveTo(size.x < 0 ? position.x - _x : _x + position.x, size.y < 0 ? position.y - _y : _y + position.y);
      } else {
        ctx.lineTo(size.x < 0 ? position.x - _x : _x + position.x, size.y < 0 ? position.y - _y : _y + position.y);
      }
    }
    if (this.type === 'polygon') {
      ctx.closePath();
    }
  },
  /**
   * Create shape object when you have finished drawing.
   * @since 1.0.0
   * @access private
   */
  _finalizeAndAddShape: function _finalizeAndAddShape() {
    var _this$_getSizeAndPosi5 = this._getSizeAndPosition(),
      size = _this$_getSizeAndPosi5.size,
      position = _this$_getSizeAndPosi5.position;
    var pos = position.add(new fabric__WEBPACK_IMPORTED_MODULE_0__.Point(size.x < 0 ? -size.x : size.x, size.y < 0 ? -size.y : size.y).divide(2));
    var viewBox = this.viewBox;
    var path = this._path;
    var shape = {};
    if (this.type === 'path') {
      var commands = [];
      var i, c;
      for (i = 0; i < path.length; i++) {
        c = path[i];
        switch (c[0]) {
          // Command.
          case 'M':
            commands.push(['M', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[1] / viewBox.x) * size.x : c[1] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[2] / viewBox.y) * size.y : c[2] / viewBox.y * size.y)]);
            break;
          case 'L':
            commands.push(['L', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[1] / viewBox.x) * size.x : c[1] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[2] / viewBox.y) * size.y : c[2] / viewBox.y * size.y)]);
            break;
          case 'Q':
            commands.push(['Q', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[1] / viewBox.x) * size.x : c[1] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[2] / viewBox.y) * size.y : c[2] / viewBox.y * size.y), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[3] / viewBox.x) * size.x : c[3] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[4] / viewBox.y) * size.y : c[4] / viewBox.y * size.y)]);
            break;
          case 'C':
            commands.push(['C', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[1] / viewBox.x) * size.x : c[1] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[2] / viewBox.y) * size.y : c[2] / viewBox.y * size.y), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[3] / viewBox.x) * size.x : c[3] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[4] / viewBox.y) * size.y : c[4] / viewBox.y * size.y), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(c[5] / viewBox.x) * size.x : c[5] / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(c[6] / viewBox.y) * size.y : c[6] / viewBox.y * size.y)]);
            break;
          case 'z':
          case 'Z':
            commands.push(['Z']);
            break;
          default:
            break;
        }
      }
      shape = new fabric__WEBPACK_IMPORTED_MODULE_0__.Path(fabric__WEBPACK_IMPORTED_MODULE_0__.util.joinPath(commands), {
        left: pos.x,
        top: pos.y,
        stroke: this.color,
        strokeWidth: this.width,
        fill: this.fill,
        shadow: this.shadow
      });
    } else if (this.type === 'polygon' || this.type === 'polyline') {
      var points = [];
      var _i, x, y;
      for (_i = 0; _i < path.length; _i += 2) {
        x = path[_i];
        y = path[_i + 1];
        points.push(new fabric__WEBPACK_IMPORTED_MODULE_0__.Point((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.x < 0 ? -(x / viewBox.x) * size.x : x / viewBox.x * size.x), (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(size.y < 0 ? -(y / viewBox.y) * size.y : y / viewBox.y * size.y)));
      }
      shape = this.type === 'polygon' ? new fabric__WEBPACK_IMPORTED_MODULE_0__.Polygon(points, {
        left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.x),
        top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.y),
        stroke: this.color,
        strokeWidth: this.width,
        fill: this.fill,
        shadow: this.shadow
      }) : new fabric__WEBPACK_IMPORTED_MODULE_0__.Polyline(points, {
        left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.x),
        top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.y),
        stroke: this.color,
        strokeWidth: this.width,
        fill: this.fill,
        shadow: this.shadow
      });
    } else if (this.type === 'square') {
      shape = new fabric__WEBPACK_IMPORTED_MODULE_0__.Rect({
        left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.x),
        top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.y),
        width: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.abs(size.x)),
        height: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.abs(size.y)),
        stroke: this.color,
        strokeWidth: this.width,
        fill: this.fill,
        shadow: this.shadow
      });
    } else if (this.type === 'circle') {
      shape = size.x === size.y ? new fabric__WEBPACK_IMPORTED_MODULE_0__.Circle({
        left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.x),
        top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.y),
        radius: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.abs(size.x / 2)),
        stroke: this.color,
        strokeWidth: this.width,
        fill: this.fill,
        shadow: this.shadow
      }) : new fabric__WEBPACK_IMPORTED_MODULE_0__.Ellipse({
        left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.x),
        top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(pos.y),
        rx: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.abs(size.x / 2)),
        ry: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.abs(size.y / 2)),
        stroke: this.color,
        strokeWidth: this.width,
        fill: this.fill,
        shadow: this.shadow
      });
    }
    shape.name = this.name;
    this.canvas.add(shape).fire('path:created', {
      path: shape
    });
  }
}));

/***/ }),

/***/ "./src/editor/canvas/class-brushes.js":
/*!********************************************!*\
  !*** ./src/editor/canvas/class-brushes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleBrush: () => (/* binding */ CircleBrush),
/* harmony export */   PencilBrush: () => (/* binding */ PencilBrush),
/* harmony export */   SprayBrush: () => (/* binding */ SprayBrush)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 * @since 1.0.0
 */

var PencilBrush = fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_0__.PencilBrush, {
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  type: 'pencil',
  /**
   * 
   * @since 1.0.0
   * @var {number}
   */

  decimate: 20,
  /**
   * 
   * @since 1.0.0
   * @param {object} canvas
   * @param {object} options
   */
  initialize: function initialize(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.canvas = canvas;
    this._points = [];
    for (var key in options) {
      this[key] = options[key];
    }
  }
});

/**
 * 
 * @since 1.0.0
 */

var CircleBrush = fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_0__.CircleBrush, {
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  type: 'circle',
  /**
   * 
   * @since 1.0.0
   * @param {object} canvas
   * @param {object} options
   */
  initialize: function initialize(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.canvas = canvas;
    this.points = [];
    for (var key in options) {
      this[key] = options[key];
    }
  }
});

/**
 * 
 * @since 1.0.0
 */

var SprayBrush = fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_0__.SprayBrush, {
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  type: 'spray',
  /**
   * 
   * @since 1.0.0
   * @param {object} canvas
   * @param {object} options
   */
  initialize: function initialize(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.canvas = canvas;
    this.sprayChunks = [];
    for (var key in options) {
      this[key] = options[key];
    }
  },
  /**
   * 
   * @since 1.4.0
   */
  onMouseUp: function onMouseUp() {
    var _this = this;
    var rects = [];
    var ilen = this.sprayChunks.length;
    var i, j, sprayChunk, jlen;
    for (i = 0; i < ilen; i++) {
      sprayChunk = this.sprayChunks[i];
      jlen = sprayChunk.length;
      for (j = 0; j < jlen; j++) {
        rects.push(new fabric__WEBPACK_IMPORTED_MODULE_0__.Rect({
          width: sprayChunk[j].width,
          height: sprayChunk[j].width,
          left: sprayChunk[j].x,
          top: sprayChunk[j].y,
          strokeWidth: 0,
          fill: this.color,
          opacity: this.randomOpacity ? sprayChunk[j].opacity : 1
        }));
      }
    }
    var optimizedRects = this._getOptimizedRects(rects);
    var group = new fabric__WEBPACK_IMPORTED_MODULE_0__.Group(optimizedRects);
    var dataURL = group.toDataURL();
    var img = new fabric__WEBPACK_IMPORTED_MODULE_0__.Image(null, {
      src: dataURL,
      width: group.width,
      height: group.height,
      left: group.left,
      top: group.top
    });
    img.setSrc(dataURL, function () {
      _this.canvas.requestRenderAll();
    });
    if (this.shadow) {
      img.set('shadow', new fabric__WEBPACK_IMPORTED_MODULE_0__.Shadow(this.shadow));
    }
    this.canvas.add(img);
    this.canvas.fire('path:created', {
      path: img
    });
    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
  }
});


/***/ }),

/***/ "./src/editor/canvas/class-canvas.js":
/*!*******************************************!*\
  !*** ./src/editor/canvas/class-canvas.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _class_brush_path_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class-brush-path.js */ "./src/editor/canvas/class-brush-path.js");





var onMouseDown = fabric__WEBPACK_IMPORTED_MODULE_0__.Canvas.prototype.__onMouseDown;

/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_0__.Canvas, {
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  selectionColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTION_COLOR,
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  selectionBorderColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.SELECTION_BORDER_COLOR,
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  selectionDashArray: _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.BORDER_DASH_ARRAY,
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  selectionKey: 'ctrlKey',
  /**
   * Disable object stacking on select.
   * @since 1.0.0
   * @var {boolean}
   */

  preserveObjectStacking: true,
  /**
   * Set it to true to also render controls
   * if there are outside the canvas.
   * @since 1.0.0
   * @var {boolean}
   */

  controlsAboveOverlay: true,
  /**
   *
   * @since 1.0.0
   * @var {boolean}
   */

  perPixelTargetFind: true,
  /**
   *
   * @since 1.0.0
   * @var {number}
   */

  targetFindTolerance: _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.TARGET_FIND_TOLERANCE,
  /**
   *
   * @since 1.0.0
   * @var {boolean}
   */

  stopContextMenu: true,
  /**
   *
   * @since 1.0.0
   * @var {boolean}
   */

  fireRightClick: true,
  /**
   *
   * @since 1.0.0
   * @var {string}
   */

  altActionKey: 'ctrlKey',
  /**
   *
   * @since 1.0.0
   * @var {string|null}
   */

  uniScaleKey: null,
  /**
   *
   * @since 1.0.0
   * @param {string} id
   * @return {object|undefined}
   */
  getObjectById: function getObjectById() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(this._objects, function (obj) {
      return obj.id === id;
    });
  },
  /**
   *
   * @since 1.0.0
   * @param {array} ids
   * @return {Canvas}
   */
  setActiveObjectsByIds: function setActiveObjectsByIds() {
    var _this = this;
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    this.discardActiveObject();
    if (!ids.length) {
      return this;
    }
    var objects = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(ids).map(function (id) {
      return _this.getObjectById(id);
    }).filter(function (obj) {
      return !!obj;
    });
    if (objects.length === 1) {
      this.setActiveObject(objects[0]).requestRenderAll();
      return this;
    }
    var activeSelection = new fabric__WEBPACK_IMPORTED_MODULE_0__.ActiveSelection(objects, {
      canvas: this
    });
    this.setActiveObject(activeSelection).requestRenderAll();
    return this;
  },
  /**
   *
   * @since 1.0.0
   * @param {array} ids
   * @return {Canvas}
   */
  sortObjectsByIds: function sortObjectsByIds() {
    var _this2 = this;
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    ids.forEach(function (id, index) {
      var object = _this2.getObjectById(id);
      if (object) {
        object.moveTo(index);
      }
    });
    return this;
  },
  /**
   *
   * @since 1.0.0
   * @return {number}
   */
  getScale: function getScale() {
    var _this$viewportTransfo;
    return ((_this$viewportTransfo = this.viewportTransform) === null || _this$viewportTransfo === void 0 ? void 0 : _this$viewportTransfo[0]) || 1;
  },
  /**
   * Extends Canvas.prototype.toSVG().
   * @since 1.0.0
   * @param {object} options
   * @param {function} reviver
   * @return {string}
   */
  toSVG: function toSVG() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var reviver = arguments.length > 1 ? arguments[1] : undefined;
    var markup = [];
    options.reviver = reviver;
    this._setSVGPreamble(markup, options);
    this._setSVGHeader(markup, options);
    this._setSVGBgOverlayColor(markup, 'background');
    this._setSVGObjects(markup, reviver);
    markup.push('</svg>');
    return markup.join('');
  },
  /**
   * Extends Canvas.prototype._setSVGHeader().
   * @since 1.0.0
   * @param {array} markup
   * @param {object} options
   */
  _setSVGHeader: function _setSVGHeader(markup) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$width = options.width,
      width = _options$width === void 0 ? this.width : _options$width,
      _options$height = options.height,
      height = _options$height === void 0 ? this.height : _options$height;
    var viewBox = "0 0 ".concat(width, " ").concat(height);
    markup.push('<svg ', 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', width, '" ', 'height="', height, '" ', 'viewBox="', viewBox, '" ', 'xml:space="preserve">\n', '<desc>', (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Created With PixMagix', 'pixmagix'), '</desc>', '<defs>\n', '</defs>\n');
  },
  /**
   * Extends Canvas.prototype.__onMouseDown().
   * We need to handle right click in path brush.
   * @since 1.0.0
   * @param {Event} e
   */
  __onMouseDown: function __onMouseDown(e) {
    onMouseDown.call(this, e);
    if (this.freeDrawingBrush instanceof _class_brush_path_js__WEBPACK_IMPORTED_MODULE_4__["default"] && this.isDrawingMode && e.button === 2) {
      this._onMouseDownInDrawingMode(e);
    }
  }
}));

/***/ }),

/***/ "./src/editor/canvas/class-qrcode.js":
/*!*******************************************!*\
  !*** ./src/editor/canvas/class-qrcode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var qrcode_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode-svg */ "./node_modules/qrcode-svg/lib/qrcode.js");
/* harmony import */ var qrcode_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");



var makePathSimpler = fabric__WEBPACK_IMPORTED_MODULE_1__.util.makePathSimpler,
  parsePath = fabric__WEBPACK_IMPORTED_MODULE_1__.util.parsePath,
  joinPath = fabric__WEBPACK_IMPORTED_MODULE_1__.util.joinPath;
var _properties = ['text', 'size', 'qrPadding', 'ecl'];

/**
 * 
 * @since 1.0.0
 */

var QRCode = fabric__WEBPACK_IMPORTED_MODULE_1__.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_1__.Object, {
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  type: 'qrcode',
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  text: '',
  /**
   * 
   * @since 1.0.0
   * @var {array}
   */

  path: [],
  /**
   * 
   * @since 1.0.0
   * @var {number}
   */

  size: 256,
  /**
   * 
   * @since 1.0.0
   * @var {number}
   */

  qrPadding: 4,
  /**
   * Error correction level.
   * @since 1.0.0
   * @var {string}
   */

  ecl: 'M',
  /**
   * 
   * @since 1.0.0
   * @var {number}
   */

  strokeWidth: 0,
  /**
   * 
   * @since 1.0.0
   * @var {array}
   */

  cacheProperties: fabric__WEBPACK_IMPORTED_MODULE_1__.Object.prototype.cacheProperties.concat(_properties),
  /**
   * 
   * @since 1.0.0
   * @var {array}
   */

  stateProperties: fabric__WEBPACK_IMPORTED_MODULE_1__.Object.prototype.stateProperties.concat(_properties),
  /**
   * 
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.callSuper('initialize', options);
    this._createPathData();
  },
  /**
   * 
   * @since 1.0.0
   * @param {array} propertiesToInclude
   * @return {object}
   */
  toObject: function toObject() {
    var propertiesToInclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return this.callSuper('toObject', _properties.concat(propertiesToInclude));
  },
  /**
   * 
   * @since 1.0.0
   * @param {CanvasRenderingContext2D} ctx
   */
  _render: function _render(ctx) {
    this._renderBackground(ctx);
    this._renderQRCode(ctx);
  },
  /**
   * 
   * @since 1.0.0
   * @return {array}
   */
  _toSVG: function _toSVG() {
    var x = -(this.width / 2);
    var y = -(this.height / 2);
    var path = joinPath(this.path);
    return ['<rect style="fill:', this.fill, ';" ', 'x="', x, '" y="', y, '" width="', this.width, '" height="', this.height, '" />\n', '<path style="fill:', this.stroke, ';" ', 'transform="translate(', x, ', ', y, ')" ', 'd="', path, '"', ' />\n'];
  },
  /**
   * 
   * @since 1.0.0
   * @param {string} key
   * @param {mixed} value
   * @return {QRCode}
   */
  _set: function _set(key, value) {
    this.callSuper('_set', key, value);
    switch (key) {
      case 'text':
      case 'qrPadding':
      case 'ecl':
        this._createPathData();
        break;
      case 'size':
        this._createPathData();
        this.set({
          width: value,
          height: value
        });
        break;
      default:
        break;
    }
    return this;
  },
  /**
   * 
   * @since 1.0.0
   * @return {QRCode}
   */
  _createPathData: function _createPathData() {
    var qr = new (qrcode_svg__WEBPACK_IMPORTED_MODULE_0___default())({
      content: this.text || _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.QRCODE_DEFAULT_TEXT,
      padding: this.qrPadding,
      width: this.size,
      height: this.size,
      color: this.stroke,
      background: this.fill,
      ecl: this.ecl,
      join: true
    });
    var svg = qr.svg();
    var match = svg.match(/<path[^>]*?d=(["\'])?((?:.(?!\1|>))*.?)\1?/);
    var path = match ? match[2] : '';
    this.path = makePathSimpler(parsePath(path));
    return this;
  },
  /**
   * 
   * @since 1.0.0
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderQRCode: function _renderQRCode(ctx) {
    var current,
      i,
      x = 0,
      y = 0,
      w2 = this.width / 2,
      h2 = this.height / 2;
    ctx.beginPath();
    for (i = 0; i < this.path.length; i++) {
      current = this.path[i];
      x = current[1];
      y = current[2];
      switch (current[0]) {
        case 'M':
          ctx.moveTo(x - w2, y - h2);
          break;
        case 'L':
          ctx.lineTo(x - w2, y - h2);
          break;
        case 'Z':
          ctx.closePath();
          break;
        default:
          break;
      }
    }
    ctx.save();
    ctx.fillStyle = this.stroke;
    ctx.fill();
    ctx.restore();
  },
  /**
   * 
   * @since 1.0.0
   * @param {CanvasRenderingContext2D} ctx
   */
  _renderBackground: function _renderBackground(ctx) {
    var w = this.width;
    var h = this.height;
    var x = -(w / 2);
    var y = -(h / 2);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.save();
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.restore();
  }
});

/**
 * 
 * @static
 * @since 1.0.0
 * @var {array}
 */

QRCode.ATTRIBUTE_NAMES = [];

/**
 * 
 * @static
 * @since 1.0.0
 */

QRCode.fromElement = function () {};

/**
 * 
 * @static
 * @since 1.0.0
 * @param {object} object
 * @param {function} callback
 */

QRCode.fromObject = function (object, callback) {
  fabric__WEBPACK_IMPORTED_MODULE_1__.Object._fromObject('Qrcode', object, callback);
};
window.fabric && (window.fabric.Qrcode = QRCode);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCode);

/***/ }),

/***/ "./src/editor/canvas/extend-fabric.js":
/*!********************************************!*\
  !*** ./src/editor/canvas/extend-fabric.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 * @since 1.0.0
 */

fabric__WEBPACK_IMPORTED_MODULE_0__.util.object.extend((fabric__WEBPACK_IMPORTED_MODULE_0___default()), {
  /**
   * Extend fabric.filterBackend.
   * @since 1.0.0
   * @var {Canvas2dFilterBackend}
   */

  filterBackend: new fabric__WEBPACK_IMPORTED_MODULE_0__.Canvas2dFilterBackend()
});

/***/ }),

/***/ "./src/editor/canvas/extend-filters.js":
/*!*********************************************!*\
  !*** ./src/editor/canvas/extend-filters.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_duotone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/duotone.js */ "./src/editor/canvas/filters/duotone.js");
/* harmony import */ var _filters_gamma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/gamma.js */ "./src/editor/canvas/filters/gamma.js");
/* harmony import */ var _filters_edge_detect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/edge-detect.js */ "./src/editor/canvas/filters/edge-detect.js");
/* harmony import */ var _filters_emboss_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/emboss.js */ "./src/editor/canvas/filters/emboss.js");
/* harmony import */ var _filters_sharpen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/sharpen.js */ "./src/editor/canvas/filters/sharpen.js");






var newFilters = {
  Duotone: _filters_duotone_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  Gamma: _filters_gamma_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  EdgeDetect: _filters_edge_detect_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  Emboss: _filters_emboss_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  Sharpen: _filters_sharpen_js__WEBPACK_IMPORTED_MODULE_5__["default"]
};
fabric__WEBPACK_IMPORTED_MODULE_0__.util.object.extend(fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters, newFilters);
for (var filter in newFilters) {
  fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters[filter].fromObject = fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters.BaseFilter.fromObject;
}

/***/ }),

/***/ "./src/editor/canvas/extend-group.js":
/*!*******************************************!*\
  !*** ./src/editor/canvas/extend-group.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 * @since 1.0.0
 */

fabric__WEBPACK_IMPORTED_MODULE_0__.util.object.extend(fabric__WEBPACK_IMPORTED_MODULE_0__.Group.prototype, {
  /*
  	initialize(objects = [], options = {}){
  
  		this._objects = objects || [];
  
  		for (let i = this._objects.length; i--;){
  			this._objects[i].group = this;
  		}
  
  		this.setCoords();
  
  	}
  */
});

/***/ }),

/***/ "./src/editor/canvas/extend-image.js":
/*!*******************************************!*\
  !*** ./src/editor/canvas/extend-image.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 * @since 1.0.0
 */

fabric__WEBPACK_IMPORTED_MODULE_0__.util.object.extend(fabric__WEBPACK_IMPORTED_MODULE_0__.Image.prototype, {
  /**
   * Extends fabric.Image.prototype._set()
   * @since 1.0.0
   * @param {string} key
   * @param {mixed} value
   * @return {object}
   */
  _set: function _set(key, value) {
    var _this = this;
    if (key === 'filters') {
      fabric__WEBPACK_IMPORTED_MODULE_0__.util.enlivenObjects(value, function (filters) {
        try {
          _this.applyFilters(filters);
        } catch (error) {
          // console.error(error);
        }
      }, 'fabric.Image.filters');
    } else {
      this.callSuper('_set', key, value);
    }
    return this;
  }
});

/***/ }),

/***/ "./src/editor/canvas/extend-object.js":
/*!********************************************!*\
  !*** ./src/editor/canvas/extend-object.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/lists.js */ "./src/editor/utils/lists.js");




var _toObject = fabric__WEBPACK_IMPORTED_MODULE_0__.Object.prototype.toObject;

/**
 * 
 * @since 1.0.0
 */

fabric__WEBPACK_IMPORTED_MODULE_0__.util.object.extend(fabric__WEBPACK_IMPORTED_MODULE_0__.Object.prototype, {
  /**
   * Name of layer inside editor.
   * @since 1.0.0
   * @var {string}
   */

  name: '',
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  originX: 'center',
  /**
   * 
   * @since 1.0.0
   * @var {string}
   */

  originY: 'center',
  /**
   * 
   * @since 1.0.0
   */

  borderColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.BORDER_COLOR,
  /**
   * 
   * @since 1.0.0
   */

  borderDashArray: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.BORDER_DASH_ARRAY,
  /**
   * 
   * @since 1.0.0
   */

  borderOpacityWhenMoving: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.BORDER_OPACITY_WHEN_MOVING,
  /**
   * 
   * @since 1.0.0
   */

  cornerSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.CORNER_SIZE,
  /**
   * 
   * @since 1.0.0
   */

  cornerStyle: 'circle',
  /**
   * 
   * @since 1.0.0
   */

  transparentCorners: false,
  /**
   * 
   * @since 1.0.0
   */

  cornerColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.BORDER_COLOR,
  /**
   * Constructor.
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize(options) {
    if (options) {
      this.setOptions(options);
    }
    if (!this.id || ('' + this.id).indexOf('pixmagix') !== 0) {
      this.id = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.createUniqueId)();
    }
    if (!this.name) {
      var _shapeTypes$this$type;
      this.name = ((_shapeTypes$this$type = _utils_lists_js__WEBPACK_IMPORTED_MODULE_3__.shapeTypes[this.type]) === null || _shapeTypes$this$type === void 0 ? void 0 : _shapeTypes$this$type.label) || '';
    }
    if (!this.selectable) {
      this.hoverCursor = 'default';
    }
  },
  /**
   *
   * @since 1.0.0
   * @param {array} propertiesToInclude
   * @return {object}
   */
  toObject: function toObject() {
    var propertiesToInclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var object = _toObject.call(this, ['id', 'name', 'selectable'].concat(propertiesToInclude));
    if (!this.clipPath) {
      object.clipPath = null;
    }
    return object;
  }
});

/***/ }),

/***/ "./src/editor/canvas/extend-point.js":
/*!*******************************************!*\
  !*** ./src/editor/canvas/extend-point.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/editor/utils/utils.js");


fabric__WEBPACK_IMPORTED_MODULE_0__.util.object.extend(fabric__WEBPACK_IMPORTED_MODULE_0__.Point.prototype, {
  /**
   * 
   * @since 1.0.0
   * @return {object}
   */
  toObject: function toObject() {
    return {
      x: this.x,
      y: this.y
    };
  },
  /**
   * 
   * @since 1.0.0
   * @param {object} pointer
   * @param {number} distance
   * @return {boolean}
   */
  isAround: function isAround(pointer) {
    var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.isAround)(pointer.x, this.x, distance) && (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.isAround)(pointer.y, this.y, distance);
  }
});

/***/ }),

/***/ "./src/editor/canvas/filters/duotone.js":
/*!**********************************************!*\
  !*** ./src/editor/canvas/filters/duotone.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

var ColorMatrix = fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters.ColorMatrix;

/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(ColorMatrix, {
  /**
   * 
   * @since 1.0.0
   * @var {string} type
   */

  type: 'Duotone',
  /**
   *
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$color = options.color1,
      color1 = _options$color === void 0 ? '#000' : _options$color,
      _options$color2 = options.color2,
      color2 = _options$color2 === void 0 ? '#fff' : _options$color2;
    var c1 = new fabric__WEBPACK_IMPORTED_MODULE_0__.Color(color1).getSource();
    var c2 = new fabric__WEBPACK_IMPORTED_MODULE_0__.Color(color2).getSource();
    var c1r = c1[0] / 255;
    var c1g = c1[1] / 255;
    var c1b = c1[2] / 255;
    var c2r = c2[0] / 255;
    var c2g = c2[1] / 255;
    var c2b = c2[2] / 255;
    this.color1 = color1;
    this.color2 = color2;
    this.matrix = [c2r - c1r, 0, 0, 0, c1r, c2g - c1g, 0, 0, 0, c1g, c2b - c1b, 0, 0, 0, c1b, 0, 0, 0, 1, 0];
  }
}));

/***/ }),

/***/ "./src/editor/canvas/filters/edge-detect.js":
/*!**************************************************!*\
  !*** ./src/editor/canvas/filters/edge-detect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

var Convolute = fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters.Convolute;

/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(Convolute, {
  /**
   * 
   * @since 1.0.0
   * @var {string} type
   */

  type: 'EdgeDetect',
  /**
   *
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setOptions(options);
    this.opaque = true;
    this.matrix = [0, 1, 0, 1, -4, 1, 0, 1, 0];
  }
}));

/***/ }),

/***/ "./src/editor/canvas/filters/emboss.js":
/*!*********************************************!*\
  !*** ./src/editor/canvas/filters/emboss.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

var Convolute = fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters.Convolute;

/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(Convolute, {
  /**
   * 
   * @since 1.0.0
   * @var {string} type
   */

  type: 'Emboss',
  /**
   *
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setOptions(options);
    this.matrix = [1, 1, 1, 1, 0.7, -1, -1, -1, -1];
  }
}));

/***/ }),

/***/ "./src/editor/canvas/filters/gamma.js":
/*!********************************************!*\
  !*** ./src/editor/canvas/filters/gamma.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

var Gamma = fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters.Gamma;
var _initialize = Gamma.prototype.initialize;

/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(Gamma, {
  /**
   * 
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize(options) {
    _initialize.call(this, options);
    if (options.red) {
      this.gamma[0] = options.red;
    }
    if (options.green) {
      this.gamma[1] = options.green;
    }
    if (options.blue) {
      this.gamma[2] = options.blue;
    }
  }
}));

/***/ }),

/***/ "./src/editor/canvas/filters/sharpen.js":
/*!**********************************************!*\
  !*** ./src/editor/canvas/filters/sharpen.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

var Convolute = fabric__WEBPACK_IMPORTED_MODULE_0__.Image.filters.Convolute;

/**
 * 
 * @since 1.0.0
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabric__WEBPACK_IMPORTED_MODULE_0__.util.createClass(Convolute, {
  /**
   * 
   * @since 1.0.0
   * @var {string} type
   */

  type: 'Sharpen',
  /**
   *
   * @since 1.0.0
   * @param {object} options
   */
  initialize: function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setOptions(options);
    this.opaque = true;
    this.matrix = [0, -1, 0, -1, 5, -1, 0, -1, 0];
  }
}));

/***/ }),

/***/ "./src/editor/components/canvas.jsx":
/*!******************************************!*\
  !*** ./src/editor/components/canvas.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvas_ruler_menu_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/ruler-menu.jsx */ "./src/editor/components/canvas/ruler-menu.jsx");
/* harmony import */ var _canvas_ruler_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas/ruler.jsx */ "./src/editor/components/canvas/ruler.jsx");
/* harmony import */ var _canvas_guide_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas/guide.jsx */ "./src/editor/components/canvas/guide.jsx");
/* harmony import */ var _canvas_canvas_background_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/canvas-background.jsx */ "./src/editor/components/canvas/canvas-background.jsx");
/* harmony import */ var _canvas_fabric_canvas_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvas/fabric-canvas.jsx */ "./src/editor/components/canvas/fabric-canvas.jsx");
/* harmony import */ var _canvas_canvas_pan_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvas/canvas-pan.jsx */ "./src/editor/components/canvas/canvas-pan.jsx");
/* harmony import */ var _canvas_canvas_crop_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvas/canvas-crop.jsx */ "./src/editor/components/canvas/canvas-crop.jsx");
/* harmony import */ var _footer_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer.jsx */ "./src/editor/components/footer.jsx");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Canvas = function Canvas(_ref) {
  var canvasMode = _ref.canvasMode,
    activeTool = _ref.activeTool,
    showRulers = _ref.showRulers,
    _ref$guides = _ref.guides,
    guides = _ref$guides === void 0 ? [] : _ref$guides,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasElementWidth = _ref.canvasElementWidth,
    canvasElementHeight = _ref.canvasElementHeight,
    canvasPanX = _ref.canvasPanX,
    canvasPanY = _ref.canvasPanY,
    canvasZoom = _ref.canvasZoom,
    cropScale = _ref.cropScale,
    setEditor = _ref.setEditor,
    createGuide = _ref.createGuide,
    updateGuide = _ref.updateGuide;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    draggedGuideId = _useState2[0],
    setDraggedGuideId = _useState2[1];
  var _getPosition = function _getPosition(e, orientation) {
    if (!(ref !== null && ref !== void 0 && ref.current)) {
      return 0;
    }
    var _ref$current$getBound = ref.current.getBoundingClientRect(),
      left = _ref$current$getBound.left,
      top = _ref$current$getBound.top;
    var isVertical = orientation === 'vertical';
    var point = (isVertical ? e.clientX - left : e.clientY - top) - _utils_constants_js__WEBPACK_IMPORTED_MODULE_12__.RULER_SIZE;
    var pos = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.pixelToAbsolutePosition)(point, {
      x: canvasWidth,
      y: canvasHeight
    }, {
      x: canvasElementWidth,
      y: canvasElementHeight
    }, {
      x: canvasPanX,
      y: canvasPanY
    }, canvasZoom);
    return Math.round(isVertical ? pos.x : pos.y);
  };
  var onMouseDown = function onMouseDown(e) {
    if (!(ref !== null && ref !== void 0 && ref.current)) {
      return;
    }
    var _e$target$dataset = e.target.dataset,
      rulerOrientation = _e$target$dataset.rulerOrientation,
      guideOrientation = _e$target$dataset.guideOrientation,
      guideId = _e$target$dataset.guideId;
    if (rulerOrientation || guideOrientation) {
      e.preventDefault();
    }
    if (rulerOrientation) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        var id = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.createUniqueId)();
        var pos = _getPosition(e, rulerOrientation);
        createGuide(id, rulerOrientation, pos);
        setDraggedGuideId(id);
      });
    } else if (guideOrientation && guideId) {
      setDraggedGuideId(guideId);
    }
  };
  var onMouseMove = function onMouseMove(e) {
    var _find2;
    if (!draggedGuideId) {
      return;
    }
    var guideOrientation = (_find2 = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(guides, {
      id: draggedGuideId
    })) === null || _find2 === void 0 ? void 0 : _find2.orientation;
    var pos = _getPosition(e, guideOrientation);
    updateGuide(draggedGuideId, pos);
  };
  var onMouseUp = function onMouseUp(e) {
    setDraggedGuideId('');
  };
  var onWheel = function onWheel(e) {
    var newZoom = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.clamp)(canvasZoom * Math.pow(0.999, e.deltaY), _utils_constants_js__WEBPACK_IMPORTED_MODULE_12__.CANVAS_MIN_ZOOM / 100, _utils_constants_js__WEBPACK_IMPORTED_MODULE_12__.CANVAS_MAX_ZOOM / 100);
    setEditor('canvasZoom', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.toFixed)(newZoom));
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "pixmagix-canvas",
    style: {
      paddingTop: showRulers ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_12__.RULER_SIZE : 0,
      paddingLeft: showRulers ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_12__.RULER_SIZE : 0
    },
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseUp,
    onWheel: onWheel
  }, /*#__PURE__*/React.createElement(_canvas_ruler_menu_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), showRulers && /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(_canvas_ruler_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    orientation: "horizontal"
  }), /*#__PURE__*/React.createElement(_canvas_ruler_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    orientation: "vertical"
  }), guides.map(function (guide) {
    return /*#__PURE__*/React.createElement(_canvas_guide_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      key: guide.id
    }, guide));
  })), /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-canvas__wrapper"
  }, /*#__PURE__*/React.createElement(_canvas_canvas_background_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement(_canvas_fabric_canvas_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null), activeTool === 'crop' && /*#__PURE__*/React.createElement(_canvas_canvas_crop_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: cropScale
  }), canvasMode === 'hand' && /*#__PURE__*/React.createElement(_canvas_canvas_pan_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/React.createElement(_footer_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    canvasMode: state.editor.canvasMode,
    activeTool: state.editor.activeTool,
    showRulers: state.editor.showRulers,
    guides: state.editor.guides,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY,
    canvasZoom: state.editor.canvasZoom,
    cropScale: state.editor.cropScale
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_13__.setEditor,
  createGuide: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_13__.createGuide,
  updateGuide: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_13__.updateGuide
})(Canvas));

/***/ }),

/***/ "./src/editor/components/canvas/canvas-background.jsx":
/*!************************************************************!*\
  !*** ./src/editor/components/canvas/canvas-background.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var CanvasBackground = function CanvasBackground(_ref) {
  var canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasElementWidth = _ref.canvasElementWidth,
    canvasElementHeight = _ref.canvasElementHeight,
    canvasZoom = _ref.canvasZoom,
    canvasPanX = _ref.canvasPanX,
    canvasPanY = _ref.canvasPanY;
  var style = {
    width: canvasWidth * canvasZoom,
    height: canvasHeight * canvasZoom,
    left: canvasElementWidth / 2 - canvasWidth / 2 * canvasZoom + canvasPanX,
    top: canvasElementHeight / 2 - canvasHeight / 2 * canvasZoom + canvasPanY,
    backgroundSize: canvasZoom * 20
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-canvas__background",
    style: style
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight,
    canvasZoom: state.editor.canvasZoom,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY
  };
})(CanvasBackground));

/***/ }),

/***/ "./src/editor/components/canvas/canvas-crop.jsx":
/*!******************************************************!*\
  !*** ./src/editor/components/canvas/canvas-crop.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CanvasCrop = function CanvasCrop(_ref) {
  var canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    cropAspectRatio = _ref.cropAspectRatio,
    cropScale = _ref.cropScale,
    cropPanX = _ref.cropPanX,
    cropPanY = _ref.cropPanY,
    canvasElementWidth = _ref.canvasElementWidth,
    canvasElementHeight = _ref.canvasElementHeight,
    canvasZoom = _ref.canvasZoom,
    canvasPanX = _ref.canvasPanX,
    canvasPanY = _ref.canvasPanY,
    setEditor = _ref.setEditor;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    activeControl = _useState2[0],
    setActiveControl = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    start = _useState4[0],
    setStart = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    oSize = _useState6[0],
    setOSize = _useState6[1]; // O means original.
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cSize = _useState8[0],
    setCSize = _useState8[1]; // C means current.
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    oPan = _useState10[0],
    setOPan = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    cPan = _useState12[0],
    setCPan = _useState12[1];
  var size = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(canvasWidth, canvasHeight, cropAspectRatio, cropScale, canvasZoom);
  var position = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.absolutePositionToPixel)({
    x: canvasWidth / 2 + cropPanX,
    y: canvasHeight / 2 + cropPanY
  }, {
    x: canvasWidth,
    y: canvasHeight
  }, {
    x: canvasElementWidth,
    y: canvasElementHeight
  }, {
    x: canvasPanX,
    y: canvasPanY
  }, canvasZoom);
  var clipPath = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropCSSClipPath)(cSize || size, cPan || position, {
    x: canvasElementWidth,
    y: canvasElementHeight
  });
  var controls = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'];
  var onMouseDown = function onMouseDown(e) {
    var _e$target, _e$target$dataset;
    if (!(ref !== null && ref !== void 0 && ref.current) || !((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$dataset = _e$target.dataset) !== null && _e$target$dataset !== void 0 && _e$target$dataset.control)) {
      return;
    }
    var _ref$current$getBound = ref.current.getBoundingClientRect(),
      width = _ref$current$getBound.width,
      height = _ref$current$getBound.height;
    var _getComputedStyle = getComputedStyle(ref.current),
      left = _getComputedStyle.left,
      top = _getComputedStyle.top;
    var control = e.target.dataset.control;
    (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
      setActiveControl(control);
      setStart({
        x: e.clientX,
        y: e.clientY
      });
      if (control === 'pan') {
        setOPan({
          x: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(left),
          y: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(top)
        });
      } else {
        setOSize({
          x: width,
          y: height
        });
      }
    });
  };
  var onMouseMove = function onMouseMove(e) {
    if (start) {
      var dist, distX, distY;
      switch (activeControl) {
        case 'tl':
          distX = e.clientX - start.x;
          distY = e.clientY - start.y;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(oSize.x - distX * 2, oSize.y - distY * 2, cropAspectRatio));
          break;
        case 'tm':
          dist = e.clientY - start.y;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(Infinity, oSize.y - dist * 2, cropAspectRatio));
          break;
        case 'tr':
          distX = e.clientX - start.x;
          distY = e.clientY - start.y;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(oSize.x + distX * 2, oSize.y - distY * 2, cropAspectRatio));
          break;
        case 'ml':
          dist = e.clientX - start.x;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(oSize.x - dist * 2, Infinity, cropAspectRatio));
          break;
        case 'mr':
          dist = e.clientX - start.x;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(oSize.x + dist * 2, Infinity, cropAspectRatio));
          break;
        case 'bl':
          distX = e.clientX - start.x;
          distY = e.clientY - start.y;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(oSize.x - distX * 2, oSize.y + distY * 2, cropAspectRatio));
          break;
        case 'bm':
          dist = e.clientY - start.y;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(Infinity, oSize.y + dist * 2, cropAspectRatio));
          break;
        case 'br':
          distX = e.clientX - start.x;
          distY = e.clientY - start.y;
          setCSize((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.getCropShapeSize)(oSize.x + distX * 2, oSize.y + distY * 2, cropAspectRatio));
          break;
        case 'pan':
          distX = e.clientX - start.x;
          distY = e.clientY - start.y;
          setCPan({
            x: oPan.x + distX,
            y: oPan.y + distY
          });
          break;
        default:
          break;
      }
    }
  };
  var onMouseUp = function onMouseUp() {
    (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
      if (activeControl === 'pan') {
        setEditor({
          cropPanX: cropPanX + (cPan.x - oPan.x) / canvasZoom,
          cropPanY: cropPanY + (cPan.y - oPan.y) / canvasZoom
        });
      } else {
        var scale = (cSize === null || cSize === void 0 ? void 0 : cSize.x) / (oSize === null || oSize === void 0 ? void 0 : oSize.x);
        if (scale) {
          setEditor('cropScale', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.clamp)(scale * cropScale, _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.MIN_CROP_SCALE, _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.MAX_CROP_SCALE));
        }
      }
      setActiveControl('');
      setStart(null);
      setOSize(null);
      setCSize(null);
      setOPan(null);
      setCPan(null);
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-canvas__crop",
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseUp
  }, /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-canvas__crop-background",
    style: {
      clipPath: clipPath
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "pixmagix-canvas__crop-rect",
    "data-control": "pan",
    style: {
      width: cSize ? cSize.x : size.x,
      height: cSize ? cSize.y : size.y,
      left: cPan ? cPan.x : position.x,
      top: cPan ? cPan.y : position.y
    }
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.times)(4, function (i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "pixmagix-canvas__crop-guide pixmagix-canvas__crop-guide-".concat(i)
    });
  }), controls.map(function (name) {
    return /*#__PURE__*/React.createElement("span", {
      key: name,
      className: "pixmagix-canvas__crop-control pixmagix-canvas__crop-control-".concat(name),
      "data-control": name
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    cropAspectRatio: state.editor.cropAspectRatio,
    cropScale: state.editor.cropScale,
    cropPanX: state.editor.cropPanX,
    cropPanY: state.editor.cropPanY,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight,
    canvasZoom: state.editor.canvasZoom,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_3__.setEditor
})(CanvasCrop));

/***/ }),

/***/ "./src/editor/components/canvas/canvas-pan.jsx":
/*!*****************************************************!*\
  !*** ./src/editor/components/canvas/canvas-pan.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CanvasPan = function CanvasPan(_ref) {
  var canvasZoom = _ref.canvasZoom,
    canvasPanX = _ref.canvasPanX,
    canvasPanY = _ref.canvasPanY,
    setEditor = _ref.setEditor;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    startPoint = _useState2[0],
    setStartPoint = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    startPan = _useState4[0],
    setStartPan = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-canvas__pan",
    onMouseDown: function onMouseDown(e) {
      setStartPoint({
        x: e.clientX,
        y: e.clientY
      });
      setStartPan({
        x: canvasPanX,
        y: canvasPanY
      });
    },
    onMouseMove: function onMouseMove(_ref2) {
      var clientX = _ref2.clientX,
        clientY = _ref2.clientY;
      if (!startPoint) {
        return;
      }
      var x = startPoint.x,
        y = startPoint.y;
      setEditor({
        canvasPanX: startPan.x + (clientX - x),
        canvasPanY: startPan.y + (clientY - y)
      });
    },
    onMouseUp: function onMouseUp(e) {
      setStartPoint(null);
      setStartPan(null);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    canvasZoom: state.editor.canvasZoom,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_2__.setEditor
})(CanvasPan));

/***/ }),

/***/ "./src/editor/components/canvas/fabric-canvas.jsx":
/*!********************************************************!*\
  !*** ./src/editor/components/canvas/fabric-canvas.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _canvas_class_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../canvas/class-canvas.js */ "./src/editor/canvas/class-canvas.js");
/* harmony import */ var _canvas_class_brushes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../canvas/class-brushes.js */ "./src/editor/canvas/class-brushes.js");
/* harmony import */ var _canvas_class_brush_shape_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../canvas/class-brush-shape.js */ "./src/editor/canvas/class-brush-shape.js");
/* harmony import */ var _canvas_class_brush_path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../canvas/class-brush-path.js */ "./src/editor/canvas/class-brush-path.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
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












var FabricCanvas = /*#__PURE__*/function (_Component) {
  _inherits(FabricCanvas, _Component);
  var _super = _createSuper(FabricCanvas);
  /**
   * 
   * @since 1.0.0
   */

  function FabricCanvas() {
    var _this;
    _classCallCheck(this, FabricCanvas);
    _this = _super.apply(this, arguments);
    _this._containerRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._updateThumbnail = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(_this._updateThumbnail.bind(_assertThisInitialized(_this)), 800);
    _this._updateCanvasElementSize = _this._updateCanvasElementSize.bind(_assertThisInitialized(_this));
    _this._createImageDataURL = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(_this._createImageDataURL.bind(_assertThisInitialized(_this)), 40);
    _this._createSVGString = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(_this._createSVGString.bind(_assertThisInitialized(_this)), 40);
    _this._pickCursorPosition = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.throttle)(_this._pickCursorPosition.bind(_assertThisInitialized(_this)), 40);
    _this._onPathCreated = _this._onPathCreated.bind(_assertThisInitialized(_this));
    _this._onObjectSelection = _this._onObjectSelection.bind(_assertThisInitialized(_this));
    _this._onObjectModified = _this._onObjectModified.bind(_assertThisInitialized(_this));
    _this._onObjectMoving = _this._onObjectMoving.bind(_assertThisInitialized(_this));
    _this._onTextChanged = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(_this._onTextChanged.bind(_assertThisInitialized(_this)), 400);
    return _this;
  }

  /**
   * 
   * @since 1.0.0
   */
  _createClass(FabricCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _document$getElementB;
      var _this$props = this.props,
        canvasWidth = _this$props.canvasWidth,
        canvasHeight = _this$props.canvasHeight,
        canvasBackground = _this$props.canvasBackground,
        layerIds = _this$props.layerIds,
        layers = _this$props.layers,
        setEditor = _this$props.setEditor;
      var _this$_getCanvasEleme = this._getCanvasElementSize(),
        width = _this$_getCanvasEleme.width,
        height = _this$_getCanvasEleme.height;
      this._fabricCanvas = new _canvas_class_canvas_js__WEBPACK_IMPORTED_MODULE_4__["default"]('pixmagix_canvas');
      window._fabricCanvas = this._fabricCanvas;
      this._fabricCanvas.loadFromJSON({
        backgroundColor: canvasBackground,
        clipPath: new fabric__WEBPACK_IMPORTED_MODULE_2__.Rect({
          top: 0,
          left: 0,
          width: canvasWidth,
          height: canvasHeight,
          originX: 'left',
          originY: 'top'
        }),
        objects: layerIds.map(function (id) {
          return layers[id];
        })
      });
      setEditor({
        canvasElementWidth: width,
        canvasElementHeight: height,
        canvasZoom: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.getFitZoom)(canvasWidth, canvasHeight, width, height)
      });

      // Set up events.
      this._fabricCanvas.on('mouse:move', this._pickCursorPosition);
      this._fabricCanvas.on('path:created', this._onPathCreated);
      this._fabricCanvas.on('selection:created', this._onObjectSelection);
      this._fabricCanvas.on('selection:updated', this._onObjectSelection);
      this._fabricCanvas.on('selection:cleared', this._onObjectSelection);
      this._fabricCanvas.on('object:modified', this._onObjectModified);
      this._fabricCanvas.on('object:moving', this._onObjectMoving);
      this._fabricCanvas.on('text:changed', this._onTextChanged);
      window.addEventListener('resize', this._updateCanvasElementSize);
      (_document$getElementB = document.getElementById('collapse-menu')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('click', this._updateCanvasElementSize);
    }

    /**
     * 
     * @since 1.0.0
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$_fabricCanvas, _document$getElementB2;
      (_this$_fabricCanvas = this._fabricCanvas) === null || _this$_fabricCanvas === void 0 ? void 0 : _this$_fabricCanvas.dispose();
      window.removeEventListener('click', this._updateCanvasElementSize);
      (_document$getElementB2 = document.getElementById('collapse-menu')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.removeEventListener('click', this._updateCanvasElementSize);
    }

    /**
     * 
     * @since 1.0.0
     */
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isSaving = nextProps.isSaving,
        fullScreen = nextProps.fullScreen,
        layerIds = nextProps.layerIds,
        layers = nextProps.layers,
        fileFormat = nextProps.fileFormat,
        canvasElementWidth = nextProps.canvasElementWidth,
        canvasElementHeight = nextProps.canvasElementHeight,
        canvasWidth = nextProps.canvasWidth,
        canvasHeight = nextProps.canvasHeight,
        canvasBackground = nextProps.canvasBackground,
        canvasZoom = nextProps.canvasZoom,
        canvasPanX = nextProps.canvasPanX,
        canvasPanY = nextProps.canvasPanY,
        activeTool = nextProps.activeTool,
        activeLayers = nextProps.activeLayers,
        activeModal = nextProps.activeModal,
        isSidebarLeftOpened = nextProps.isSidebarLeftOpened,
        isSidebarRightOpened = nextProps.isSidebarRightOpened,
        showRulers = nextProps.showRulers,
        snapToGrid = nextProps.snapToGrid,
        gridSize = nextProps.gridSize,
        isDrawingMode = nextProps.isDrawingMode,
        pathType = nextProps.pathType,
        drawnShape = nextProps.drawnShape,
        pencilType = nextProps.pencilType,
        pencilColor = nextProps.pencilColor,
        pencilWidth = nextProps.pencilWidth,
        pencilShadow = nextProps.pencilShadow,
        pencilDecimate = nextProps.pencilDecimate,
        pencilDensity = nextProps.pencilDensity,
        pencilDotWidth = nextProps.pencilDotWidth,
        pencilDotWidthVariance = nextProps.pencilDotWidthVariance,
        pencilRandomOpacity = nextProps.pencilRandomOpacity,
        fillColor = nextProps.fillColor,
        setEditor = nextProps.setEditor;
      console.log(nextProps);
      var canvas = this._fabricCanvas;

      // Update project dimensions.
      if (canvasWidth !== this.props.canvasWidth || canvasHeight !== this.props.canvasHeight) {
        canvas.clipPath.set({
          width: canvasWidth,
          height: canvasHeight
        });
      }

      // Set canvas dimensions.
      if (canvasElementWidth !== this.props.canvasElementWidth) {
        canvas.setWidth(canvasElementWidth);
      }
      if (canvasElementHeight !== this.props.canvasElementHeight) {
        canvas.setHeight(canvasElementHeight);
      }

      // Set background.
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(canvasBackground, this.props.canvasBackground)) {
        canvas.setBackgroundColor(canvasBackground);
      }

      // Set zoom, and pan.
      if (canvasZoom !== this.props.canvasZoom || canvasPanX !== this.props.canvasPanX || canvasPanY !== this.props.canvasPanY || canvasElementWidth !== this.props.canvasElementWidth || canvasElementHeight !== this.props.canvasElementHeight || canvasWidth !== this.props.canvasWidth || canvasHeight !== this.props.canvasHeight) {
        var panX = canvasElementWidth / 2 - canvasWidth / 2 * canvasZoom + canvasPanX;
        var panY = canvasElementHeight / 2 - canvasHeight / 2 * canvasZoom + canvasPanY;
        canvas.setViewportTransform([canvasZoom, 0, 0, canvasZoom, panX, panY]);
      }

      // Set up drawing mode.
      canvas.isDrawingMode = isDrawingMode;
      // this.__freeDrawingPathAdded = !(isDrawingMode && activeTool === 'draw-path');
      if (isDrawingMode) {
        if (activeTool === 'free-hand-draw') {
          canvas.freeDrawingBrush = new (pencilType === 'circle' ? _canvas_class_brushes_js__WEBPACK_IMPORTED_MODULE_5__.CircleBrush : pencilType === 'spray' ? _canvas_class_brushes_js__WEBPACK_IMPORTED_MODULE_5__.SprayBrush : _canvas_class_brushes_js__WEBPACK_IMPORTED_MODULE_5__.PencilBrush)(canvas, {
            color: pencilColor,
            width: pencilWidth,
            shadow: pencilShadow,
            decimate: pencilDecimate,
            density: pencilDensity,
            dotWidth: pencilDotWidth,
            dotWidthVariance: pencilDotWidthVariance,
            randomOpacity: pencilRandomOpacity
          });
        } else if (activeTool === 'draw-shape') {
          canvas.freeDrawingBrush = new _canvas_class_brush_shape_js__WEBPACK_IMPORTED_MODULE_6__["default"](canvas, {
            name: drawnShape,
            color: pencilColor,
            width: pencilWidth,
            shadow: pencilShadow,
            fill: fillColor,
            gridSize: snapToGrid ? gridSize : 1
          });
        } else if (activeTool === 'draw-path') {
          var options = {
            type: pathType,
            color: pencilColor,
            width: pencilWidth,
            shadow: pencilShadow
          };
          if (canvas.freeDrawingBrush instanceof _canvas_class_brush_path_js__WEBPACK_IMPORTED_MODULE_7__["default"] && canvas.freeDrawingBrush.setOptions) {
            canvas.freeDrawingBrush.setOptions(options);
          } else {
            canvas.freeDrawingBrush = new _canvas_class_brush_path_js__WEBPACK_IMPORTED_MODULE_7__["default"](canvas, options);
          }
        }
      }
      if ((isDrawingMode !== this.props.isDrawingMode && !isDrawingMode || pathType !== this.props.pathType) && canvas.freeDrawingBrush instanceof _canvas_class_brush_path_js__WEBPACK_IMPORTED_MODULE_7__["default"] && canvas.freeDrawingBrush.finalizeAndAddPath) {
        canvas.freeDrawingBrush.finalizeAndAddPath();
      }

      // Update active layers.
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(activeLayers, this.props.activeLayers)) {
        canvas.setActiveObjectsByIds(activeLayers);
      }

      // Update layers list.
      if (layerIds.length !== this.props.layerIds.length) {
        // Add layers.
        var addedLayers = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.difference)(layerIds, this.props.layerIds);
        var newLayerId;
        addedLayers.forEach(function (id) {
          if (!layers[id] || canvas.getObjectById(id)) {
            return;
          }
          canvas.add((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.createLayerObject)(layers[id], true));
          newLayerId = id;
        });
        newLayerId && canvas.setActiveObject(canvas.getObjectById(newLayerId));
        // Remove layers.
        var removedLayers = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.difference)(this.props.layerIds, layerIds);
        removedLayers.forEach(function (id) {
          var object = canvas.getObjectById(id);
          if (object) {
            canvas.remove(object);
          }
        });
        // canvas.discardActiveObject();
      } else {
        // Just sort layers.
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(layerIds, this.props.layerIds)) {
          canvas.sortObjectsByIds(layerIds);
        }
      }

      // Update layers' props.
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(layers, this.props.layers)) {
        this._updateFabricObjectProps((0,lodash__WEBPACK_IMPORTED_MODULE_3__.map)(layers));
      }

      // Update thumbnail.
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(layers, this.props.layers) || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(canvasBackground, this.props.canvasBackground)) {
        this._updateThumbnail();
      }
      canvas.requestRenderAll();

      // Create image data url to export.
      if (fileFormat !== this.props.fileFormat || activeModal !== this.props.activeModal && (activeModal === 'export-media' || activeModal === 'replace-media' || activeModal === 'restore-media' || activeModal === 'download-image')) {
        this._createImageDataURL();
      }

      // Create SVG string to export.
      if (activeModal !== this.props.activeModal && activeModal === 'download-svg') {
        this._createSVGString();
      }
      return activeTool !== this.props.activeTool || isSidebarLeftOpened !== this.props.isSidebarLeftOpened || isSidebarRightOpened !== this.props.isSidebarRightOpened || showRulers !== this.props.showRulers || fullScreen !== this.props.fullScreen;
    }

    /**
     *
     * @since 1.0.0
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._updateCanvasElementSize();
    }

    /**
     * Returns the html5 canvas element dimensions.
     * @since 1.0.0
     * @access private
     */
  }, {
    key: "_getCanvasElementSize",
    value: function _getCanvasElementSize() {
      var container = this._containerRef.current;
      var parent = container.parentElement;
      container.style.display = 'none';
      var clientWidth = parent.clientWidth,
        clientHeight = parent.clientHeight;
      container.style.display = 'block';
      return {
        width: clientWidth,
        height: clientHeight
      };
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {array} nextLayers
     */
  }, {
    key: "_updateFabricObjectProps",
    value: function _updateFabricObjectProps() {
      var nextLayers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var layers = this.props.layers;
      var canvas = this._fabricCanvas;
      nextLayers.forEach(function (props) {
        var id = props.id;
        var layer = layers[id];
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(layer, props) || !layer) {
          return;
        }
        var changedProps = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.reduce)(props, function (memo, value, key) {
          if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(value, layer[key])) {
            memo[key] = value;
          }
          return memo;
        }, {});
        var object = canvas.getObjectById(id);
        object && object.set(changedProps);
      });
    }

    /**
     *
     * @since 1.0.0
     * @access private
     */
  }, {
    key: "_updateCanvasElementSize",
    value: function _updateCanvasElementSize() {
      var _this$_getCanvasEleme2 = this._getCanvasElementSize(),
        width = _this$_getCanvasEleme2.width,
        height = _this$_getCanvasEleme2.height;
      this.props.setEditor({
        canvasElementWidth: width,
        canvasElementHeight: height
      });
    }

    /**
     *
     * @since 1.0.0
     * @access private
     */
  }, {
    key: "_updateThumbnail",
    value: function _updateThumbnail() {
      var _this$props2 = this.props,
        canvasWidth = _this$props2.canvasWidth,
        canvasHeight = _this$props2.canvasHeight,
        setEditor = _this$props2.setEditor;
      var canvas = this._fabricCanvas;
      var vpt = canvas.viewportTransform.slice();
      // console.time('updatePreviewURL');
      canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
      var dataURL = canvas.toDataURL({
        format: 'jpeg',
        quality: 1,
        top: 0,
        left: 0,
        width: canvasWidth,
        height: canvasHeight,
        multiplier: _utils_constants_js__WEBPACK_IMPORTED_MODULE_11__.PREVIEW_IMAGE_MAX_WIDTH / canvasWidth
      });
      canvas.setViewportTransform(vpt);
      setEditor('thumbnail', dataURL);
      // console.timeEnd('updatePreviewURL');
    }

    /**
     *
     * @since 1.0.0
     * @access private
     */
  }, {
    key: "_createImageDataURL",
    value: function _createImageDataURL() {
      var _this$props3 = this.props,
        canvasWidth = _this$props3.canvasWidth,
        canvasHeight = _this$props3.canvasHeight,
        fileFormat = _this$props3.fileFormat,
        setEditor = _this$props3.setEditor;
      var canvas = this._fabricCanvas;
      var vpt = canvas.viewportTransform.slice();
      // console.time('createImageDataURL');
      canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
      canvas.clipPath = null;
      var dataURL = canvas.toDataURL({
        format: fileFormat,
        quality: 1,
        top: 0,
        left: 0,
        width: canvasWidth,
        height: canvasHeight,
        multiplier: 1
      });
      canvas.setViewportTransform(vpt);
      setEditor('imageDataURL', dataURL);
      // console.timeEnd('createImageDataURL');
    }

    /**
     *
     * @since 1.0.0
     * @access private
     */
  }, {
    key: "_createSVGString",
    value: function _createSVGString() {
      var _this$_fabricCanvas2;
      var _this$props4 = this.props,
        canvasWidth = _this$props4.canvasWidth,
        canvasHeight = _this$props4.canvasHeight,
        setEditor = _this$props4.setEditor;
      var svgString = (_this$_fabricCanvas2 = this._fabricCanvas) === null || _this$_fabricCanvas2 === void 0 ? void 0 : _this$_fabricCanvas2.toSVG({
        width: canvasWidth,
        height: canvasHeight
      });
      setEditor('svgString', svgString);
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {object} options
     */
  }, {
    key: "_pickCursorPosition",
    value: function _pickCursorPosition(_ref) {
      var absolutePointer = _ref.absolutePointer;
      var _this$props5 = this.props,
        canvasZoom = _this$props5.canvasZoom,
        canvasMode = _this$props5.canvasMode,
        showRulers = _this$props5.showRulers,
        showRulerCursors = _this$props5.showRulerCursors,
        setEditor = _this$props5.setEditor;
      var x = absolutePointer.x,
        y = absolutePointer.y;
      if (showRulers && showRulerCursors && canvasMode === 'select') {
        setEditor('rulerCursorPosition', {
          x: canvasZoom * (x + 100),
          y: canvasZoom * (y + 100)
        });
      }
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {object} options
     */
  }, {
    key: "_onPathCreated",
    value: function _onPathCreated(_ref2) {
      var path = _ref2.path;
      this.props.addLayer(path.toJSON());
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {object} options
     */
  }, {
    key: "_onObjectSelection",
    value: function _onObjectSelection() {
      var setEditor = this.props.setEditor;
      var activeLayers = this._fabricCanvas.getActiveObjects().map(function (obj) {
        return obj.id;
      });
      setEditor('activeLayers', activeLayers);
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {object} options
     */
  }, {
    key: "_onObjectModified",
    value: function _onObjectModified(_ref3) {
      var target = _ref3.target,
        action = _ref3.action;
      var setLayerProps = this.props.setLayerProps;
      if ((target === null || target === void 0 ? void 0 : target.type) === 'activeSelection') {
        var layersProps = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.reduce)(target._objects, function (memo, object) {
          var matrix = object.calcTransformMatrix();
          var _util$qrDecompose = fabric__WEBPACK_IMPORTED_MODULE_2__.util.qrDecompose(matrix),
            angle = _util$qrDecompose.angle,
            scaleX = _util$qrDecompose.scaleX,
            scaleY = _util$qrDecompose.scaleY,
            skewX = _util$qrDecompose.skewX,
            skewY = _util$qrDecompose.skewY,
            translateX = _util$qrDecompose.translateX,
            translateY = _util$qrDecompose.translateY;
          memo[object.id] = {
            left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(translateX),
            top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(translateY),
            scaleX: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(scaleX),
            scaleY: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(scaleY),
            skewX: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(skewX),
            skewY: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(skewY),
            angle: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(angle)
          };
          return memo;
        }, {});
        setLayerProps(layersProps);
        return;
      }
      var left = target.left,
        top = target.top,
        scaleX = target.scaleX,
        scaleY = target.scaleY,
        skewX = target.skewX,
        skewY = target.skewY,
        angle = target.angle;
      var newProps = {
        left: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(left),
        top: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(top),
        scaleX: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(scaleX),
        scaleY: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(scaleY),
        skewX: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(skewX),
        skewY: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(skewY),
        angle: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.toFixed)(angle)
      };
      setLayerProps(target.id, newProps);
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {object} options
     */
  }, {
    key: "_onObjectMoving",
    value: function _onObjectMoving(_ref4) {
      var target = _ref4.target;
      var _this$props6 = this.props,
        _this$props6$guides = _this$props6.guides,
        guides = _this$props6$guides === void 0 ? [] : _this$props6$guides,
        canvasZoom = _this$props6.canvasZoom;
      if (!guides.length) {
        return;
      }
      var distance = _utils_constants_js__WEBPACK_IMPORTED_MODULE_11__.TARGET_FIND_TOLERANCE / canvasZoom;
      var _target$getBoundingRe = target.getBoundingRect(true),
        width = _target$getBoundingRe.width,
        height = _target$getBoundingRe.height;
      var w2 = width / 2;
      var h2 = height / 2;
      var left = target.left,
        top = target.top;
      guides.forEach(function (_ref5) {
        var orientation = _ref5.orientation,
          position = _ref5.position;
        if (orientation === 'vertical') {
          left = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.isAround)(left, position, distance) ? position : (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.isAround)(left - w2, position, distance) ? position + w2 : (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.isAround)(left + w2, position, distance) ? position - w2 : left;
        } else {
          top = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.isAround)(top, position, distance) ? position : (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.isAround)(top - h2, position, distance) ? position + h2 : (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.isAround)(top + h2, position, distance) ? position - h2 : top;
        }
      });
      target.set({
        left: left,
        top: top
      });
    }

    /**
     *
     * @since 1.0.0
     * @access private
     * @param {object} options
     */
  }, {
    key: "_onTextChanged",
    value: function _onTextChanged(_ref6) {
      var target = _ref6.target;
      var setLayerProps = this.props.setLayerProps;
      var text = target.text,
        width = target.width,
        height = target.height;
      setLayerProps(target.id, {
        text: text,
        width: width,
        height: height
      });
    }

    /**
     * 
     * @since 1.0.0
     */
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        ref: this._containerRef,
        className: "pixmagix-canvas__container"
      }, /*#__PURE__*/React.createElement("canvas", {
        id: "pixmagix_canvas"
      }));
    }
  }]);
  return FabricCanvas;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    isSaving: state.editor.isSaving,
    fullScreen: state.editor.fullScreen,
    fileFormat: state.editor.fileFormat,
    layers: state.data.present.layers,
    layerIds: state.data.present.layerIds,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasBackground: state.data.present.canvasBackground,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight,
    canvasZoom: state.editor.canvasZoom,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY,
    canvasMode: state.editor.canvasMode,
    activeTool: state.editor.activeTool,
    activeLayers: state.editor.activeLayers,
    activeModal: state.editor.activeModal,
    isSidebarLeftOpened: state.editor.isSidebarLeftOpened,
    isSidebarRightOpened: state.editor.isSidebarRightOpened,
    showRulers: state.editor.showRulers,
    showRulerCursors: state.editor.showRulerCursors,
    gridSize: state.editor.gridSize,
    snapToGrid: state.editor.snapToGrid,
    snapObjects: state.editor.snapObjects,
    isDrawingMode: state.editor.isDrawingMode,
    pathType: state.editor.pathType,
    drawnShape: state.editor.drawnShape,
    pencilType: state.editor.pencilType,
    pencilColor: state.editor.pencilColor,
    pencilWidth: state.editor.pencilWidth,
    pencilShadow: state.editor.pencilShadow,
    pencilDecimate: state.editor.pencilDecimate,
    pencilDensity: state.editor.pencilDensity,
    pencilDotWidth: state.editor.pencilDotWidth,
    pencilDotWidthVariance: state.editor.pencilDotWidthVariance,
    pencilRandomOpacity: state.editor.pencilRandomOpacity,
    fillColor: state.editor.fillColor,
    guides: state.editor.guides
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_8__.setEditor,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_9__.addLayer,
  setLayerProps: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_9__.setLayerProps
})(FabricCanvas));

/***/ }),

/***/ "./src/editor/components/canvas/guide.jsx":
/*!************************************************!*\
  !*** ./src/editor/components/canvas/guide.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var Guide = function Guide(_ref) {
  var id = _ref.id,
    orientation = _ref.orientation,
    position = _ref.position,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasElementWidth = _ref.canvasElementWidth,
    canvasElementHeight = _ref.canvasElementHeight,
    canvasPanX = _ref.canvasPanX,
    canvasPanY = _ref.canvasPanY,
    canvasZoom = _ref.canvasZoom;
  var style = {};
  var pix = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.absolutePositionToPixel)(position, {
    x: canvasWidth,
    y: canvasHeight
  }, {
    x: canvasElementWidth,
    y: canvasElementHeight
  }, {
    x: canvasPanX,
    y: canvasPanY
  }, canvasZoom);
  if (orientation === 'vertical') {
    style.left = pix.x + _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.RULER_SIZE;
  } else {
    style.top = pix.y + _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.RULER_SIZE;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pixmagix-canvas__guide', _defineProperty({}, "pixmagix-canvas__guide-".concat(orientation), orientation)),
    "data-guide-orientation": orientation,
    "data-guide-id": id,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "pixmagix-canvas__guide-label"
  }, position));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY,
    canvasZoom: state.editor.canvasZoom
  };
})(Guide));

/***/ }),

/***/ "./src/editor/components/canvas/ruler-cursor.jsx":
/*!*******************************************************!*\
  !*** ./src/editor/components/canvas/ruler-cursor.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var RulerCursor = function RulerCursor(_ref) {
  var orientation = _ref.orientation,
    rulerCursorPosition = _ref.rulerCursorPosition;
  var style = orientation === 'horizontal' ? {
    left: rulerCursorPosition.x
  } : {
    top: rulerCursorPosition.y
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "pixmagix-canvas__ruler-cursor",
    style: style
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    rulerCursorPosition: state.editor.rulerCursorPosition
  };
})(RulerCursor));

/***/ }),

/***/ "./src/editor/components/canvas/ruler-menu.jsx":
/*!*****************************************************!*\
  !*** ./src/editor/components/canvas/ruler-menu.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_ruler_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/ruler-menu.js */ "./src/editor/utils/ruler-menu.js");





var RulerMenu = function RulerMenu(props) {
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    trigger: function trigger() {
      return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: "pixmagix-canvas__rulermenu",
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ruler', 'pixmagix'),
        icon: "ruler",
        small: true
      });
    },
    items: (0,_utils_ruler_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])(props)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    showRulers: state.editor.showRulers,
    showRulerCursors: state.editor.showRulerCursors,
    snapObjects: state.editor.snapObjects,
    snapToGrid: state.editor.snapToGrid,
    guides: state.editor.guides
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_3__.setEditor
})(RulerMenu));

/***/ }),

/***/ "./src/editor/components/canvas/ruler.jsx":
/*!************************************************!*\
  !*** ./src/editor/components/canvas/ruler.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ruler_cursor_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ruler-cursor.jsx */ "./src/editor/components/canvas/ruler-cursor.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var Ruler = function Ruler(_ref) {
  var orientation = _ref.orientation,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasZoom = _ref.canvasZoom,
    canvasPanX = _ref.canvasPanX,
    canvasPanY = _ref.canvasPanY,
    canvasElementWidth = _ref.canvasElementWidth,
    canvasElementHeight = _ref.canvasElementHeight,
    showRulerCursors = _ref.showRulerCursors,
    activeTool = _ref.activeTool,
    canvasMode = _ref.canvasMode;
  var pixels = orientation === 'horizontal' ? canvasWidth : canvasHeight;
  var ratio = 100;
  var time = Math.round(pixels / ratio) + 2;
  var notches = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(time, function (n) {
    return (n - 1) * ratio;
  });
  var style = {};
  var notchStyle = {};
  if (orientation === 'horizontal') {
    style.left = canvasElementWidth / 2 - canvasWidth / 2 * canvasZoom + canvasPanX - canvasZoom * ratio;
    notchStyle.width = canvasZoom * ratio;
  } else {
    style.top = canvasElementHeight / 2 - canvasHeight / 2 * canvasZoom + canvasPanY - canvasZoom * ratio;
    notchStyle.height = canvasZoom * ratio;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('pixmagix-canvas__ruler', _defineProperty({}, "pixmagix-canvas__ruler-".concat(orientation), orientation)),
    "data-ruler-orientation": orientation
  }, /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-canvas__ruler-inner",
    style: style
  }, showRulerCursors && canvasMode === 'select' && activeTool !== 'crop' && /*#__PURE__*/React.createElement(_ruler_cursor_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    orientation: orientation
  }), notches.map(function (number) {
    var t = canvasZoom > 0.5 ? 9 : 1;
    var subNotches = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(t, function (n) {
      return n + 1;
    });
    return /*#__PURE__*/React.createElement("span", {
      key: number,
      className: "pixmagix-canvas__ruler-notch",
      style: notchStyle
    }, /*#__PURE__*/React.createElement("span", {
      className: "pixmagix-canvas__ruler-number"
    }, number), canvasZoom > 0.2 && subNotches.map(function (n) {
      return /*#__PURE__*/React.createElement("span", {
        key: n,
        className: "pixmagix-canvas__ruler-subnotch-".concat(t === 1 ? '50' : '10')
      });
    }));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasZoom: state.editor.canvasZoom,
    canvasPanX: state.editor.canvasPanX,
    canvasPanY: state.editor.canvasPanY,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight,
    showRulerCursors: state.editor.showRulerCursors,
    activeTool: state.editor.activeTool,
    canvasMode: state.editor.canvasMode
  };
})(Ruler));

/***/ }),

/***/ "./src/editor/components/editor.jsx":
/*!******************************************!*\
  !*** ./src/editor/components/editor.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _error_boundary_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-boundary.jsx */ "./src/editor/components/error-boundary.jsx");
/* harmony import */ var _globals_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.jsx */ "./src/editor/components/globals.jsx");
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.jsx */ "./src/editor/components/header.jsx");
/* harmony import */ var _toolbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.jsx */ "./src/editor/components/toolbar.jsx");
/* harmony import */ var _sidebar_left_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar-left.jsx */ "./src/editor/components/sidebar-left.jsx");
/* harmony import */ var _sidebar_right_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-right.jsx */ "./src/editor/components/sidebar-right.jsx");
/* harmony import */ var _canvas_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas.jsx */ "./src/editor/components/canvas.jsx");
/* harmony import */ var _modals_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals.jsx */ "./src/editor/components/modals.jsx");
/* harmony import */ var _notification_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification.jsx */ "./src/editor/components/notification.jsx");









var Editor = function Editor() {
  return /*#__PURE__*/React.createElement(_error_boundary_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, /*#__PURE__*/React.createElement(_globals_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-content"
  }, /*#__PURE__*/React.createElement(_toolbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_sidebar_left_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_canvas_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement(_sidebar_right_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/React.createElement(_modals_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_notification_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

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

/***/ "./src/editor/components/footer.jsx":
/*!******************************************!*\
  !*** ./src/editor/components/footer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_color_indicator_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/color-indicator.jsx */ "./src/editor/components/footer/color-indicator.jsx");
/* harmony import */ var _footer_zoom_pan_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/zoom-pan.jsx */ "./src/editor/components/footer/zoom-pan.jsx");


var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-footer"
  }, /*#__PURE__*/React.createElement(_footer_color_indicator_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_footer_zoom_pan_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/editor/components/footer/color-indicator.jsx":
/*!**********************************************************!*\
  !*** ./src/editor/components/footer/color-indicator.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_1__);


var ColorIndicator = function ColorIndicator(_ref) {
  var pencilColor = _ref.pencilColor,
    fillColor = _ref.fillColor;
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-footer__colorindicator"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pixmagix-footer__colorindicator-pen",
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stroke Color', 'pixmagix')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: pencilColor
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "pixmagix-footer__colorindicator-fill",
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fill Color', 'pixmagix')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: fillColor
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    pencilColor: state.editor.pencilColor,
    fillColor: state.editor.fillColor
  };
})(ColorIndicator));

/***/ }),

/***/ "./src/editor/components/footer/zoom-pan.jsx":
/*!***************************************************!*\
  !*** ./src/editor/components/footer/zoom-pan.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");






var ZoomPan = function ZoomPan(_ref) {
  var canvasMode = _ref.canvasMode,
    canvasZoom = _ref.canvasZoom,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasElementWidth = _ref.canvasElementWidth,
    canvasElementHeight = _ref.canvasElementHeight,
    setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "pixmagix-footer__zoompan"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.RadioButtons, {
    options: [{
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Mode', 'pixmagix'),
      value: 'select',
      icon: 'arrow-pointer'
    }, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hand Mode', 'pixmagix'),
      value: 'hand',
      icon: 'hand'
    }],
    value: canvasMode,
    onChange: function onChange(value) {
      return setEditor('canvasMode', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Range, {
    value: canvasZoom * 100,
    onChange: function onChange(value) {
      return setEditor('canvasZoom', value / 100);
    },
    min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.CANVAS_MIN_ZOOM,
    max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.CANVAS_MAX_ZOOM,
    step: 1,
    debounce: 100
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fit Canvas to Screen', 'pixmagix'),
    icon: "square-plus",
    small: true,
    onClick: function onClick() {
      return setEditor({
        canvasZoom: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getFitZoom)(canvasWidth, canvasHeight, canvasElementWidth, canvasElementHeight),
        canvasPanX: 0,
        canvasPanY: 0
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    canvasMode: state.editor.canvasMode,
    canvasZoom: state.editor.canvasZoom,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasElementWidth: state.editor.canvasElementWidth,
    canvasElementHeight: state.editor.canvasElementHeight
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_3__.setEditor
})(ZoomPan));

/***/ }),

/***/ "./src/editor/components/globals.jsx":
/*!*******************************************!*\
  !*** ./src/editor/components/globals.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/lists.js */ "./src/editor/utils/lists.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _utils_ruler_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../utils/ruler-menu.js */ "./src/editor/utils/ruler-menu.js");
/* harmony import */ var _utils_options_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../utils/options-menu.js */ "./src/editor/utils/options-menu.js");
/* harmony import */ var _utils_layer_actions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../utils/layer-actions.js */ "./src/editor/utils/layer-actions.js");
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











var Globals = /*#__PURE__*/function (_Component) {
  _inherits(Globals, _Component);
  var _super = _createSuper(Globals);
  /**
   * Constructor.
   * @since 1.0.0
   */

  function Globals() {
    var _this;
    _classCallCheck(this, Globals);
    _this = _super.apply(this, arguments);
    _this._onBeforeUnload = _this._onBeforeUnload.bind(_assertThisInitialized(_this));
    _this._onKeyDown = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.throttle)(_this._onKeyDown.bind(_assertThisInitialized(_this)), 200);
    if (_this.props.fullScreen) {
      document.body.classList.add('pixmagix-fullscreen');
    }
    return _this;
  }

  /**
   *
   * @since 1.0.0
   */
  _createClass(Globals, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('beforeunload', this._onBeforeUnload);
      window.addEventListener('keydown', this._onKeyDown);
    }

    /**
     *
     * @since 1.0.0
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('beforeunload', this._onBeforeUnload);
      window.removeEventListener('keydown', this._onKeyDown);
    }

    /**
     * 
     * @since 1.0.0
     * @param {object} nextProps
     */
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _window$history;
      var projectId = nextProps.projectId,
        fullScreen = nextProps.fullScreen;
      if (projectId !== this.props.projectId && (_window$history = window.history) !== null && _window$history !== void 0 && _window$history.pushState) {
        window.history.pushState({}, '', (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)({
          id: projectId
        }, editor_globals__WEBPACK_IMPORTED_MODULE_2__.new_url));
      }
      if (fullScreen !== this.props.fullScreen) {
        var fn = fullScreen ? 'add' : 'remove';
        document.body.classList[fn]('pixmagix-fullscreen');
      }
      return false;
    }

    /**
     *
     * @since 1.0.0
     */
  }, {
    key: "_onBeforeUnload",
    value: function _onBeforeUnload(e) {
      var _this2 = this;
      if (window.localStorage) {
        var editor = {};
        _utils_lists_js__WEBPACK_IMPORTED_MODULE_5__.propsToSaveLocalStorage.forEach(function (prop) {
          editor[prop] = _this2.props[prop];
        });
        window.localStorage.setItem('pixmagixEditor', JSON.stringify(editor));
      }
    }

    /**
     *
     * @since 1.0.0
     */
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      var _document$activeEleme, _document$activeEleme2, _document$activeEleme3, _document$activeEleme4;
      console.log(e.keyCode);
      var _this$props = this.props,
        activeTool = _this$props.activeTool,
        isDrawingMode = _this$props.isDrawingMode,
        setEditor = _this$props.setEditor,
        undo = _this$props.undo,
        redo = _this$props.redo;
      var hasFocusedInput = ((_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : (_document$activeEleme2 = _document$activeEleme.tagName) === null || _document$activeEleme2 === void 0 ? void 0 : _document$activeEleme2.toLowerCase()) === 'input' || ((_document$activeEleme3 = document.activeElement) === null || _document$activeEleme3 === void 0 ? void 0 : (_document$activeEleme4 = _document$activeEleme3.tagName) === null || _document$activeEleme4 === void 0 ? void 0 : _document$activeEleme4.toLowerCase()) === 'textarea';
      var isCtrlPressed = (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
      var isCtrlShiftPressed = (e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey;
      var keyMaps = {
        13: {
          // Enter
          fn: function fn() {
            return (activeTool === null || activeTool === void 0 ? void 0 : activeTool.indexOf('draw')) >= 0 && setEditor('isDrawingMode', !isDrawingMode);
          }
        },
        27: {
          // Escape
          fn: function fn() {
            return setEditor('activeLayers', []);
          }
        },
        37: {// Arrow Left
          //
        },
        38: {
          // Arrow Up
          ctrl: {
            menu: 'layer',
            name: 'move-up'
          }
        },
        39: {// Arrow Right
          //
        },
        40: {
          // Arrow Down
          ctrl: {
            menu: 'layer',
            name: 'move-down'
          }
        },
        46: {
          // Delete
          fn: {
            menu: 'layer',
            name: 'remove'
          }
        },
        67: {
          // C
          fn: {
            activeTool: 'crop'
          },
          ctrlShift: {
            menu: 'ruler',
            name: 'show-cursors'
          }
        },
        68: {
          // D
          fn: {
            activeTool: 'free-hand-draw'
          },
          ctrl: {
            menu: 'layer',
            name: 'duplicate'
          }
        },
        69: {
          // E
          ctrlShift: {
            menu: 'options',
            name: 'export'
          }
        },
        70: {
          // F
          ctrlShift: {
            menu: 'options',
            name: 'fullscreen'
          }
        },
        71: {
          // G
          ctrl: {
            menu: 'layer',
            name: 'group'
          },
          ctrlShift: {
            menu: 'ruler',
            name: 'clear-guides'
          }
        },
        72: {
          // H
          ctrlShift: {
            menu: 'options',
            name: 'help'
          }
        },
        73: {
          // I
          fn: {
            activeTool: 'icon'
          },
          ctrlShift: {
            menu: 'options',
            name: 'download-image'
          }
        },
        75: {
          // K
          ctrlShift: {
            menu: 'options',
            name: 'keyboard-shortcuts'
          }
        },
        76: {
          // L
          ctrl: {
            menu: 'layer',
            name: 'lock'
          }
        },
        77: {
          // M
          fn: {
            activeTool: 'image'
          }
        },
        78: {
          // N
          ctrlShift: function ctrlShift() {
            window.location.replace(editor_globals__WEBPACK_IMPORTED_MODULE_2__.new_url);
          }
        },
        79: {
          // O
          ctrlShift: {
            menu: 'options',
            name: 'open-project'
          }
        },
        80: {
          // P
          fn: {
            activeTool: 'draw-path'
          }
        },
        81: {
          // Q
          fn: {
            activeTool: 'qrcode'
          }
        },
        82: {
          // R
          ctrlShift: {
            menu: 'ruler',
            name: 'show-rulers'
          }
        },
        83: {
          // S
          fn: {
            activeTool: 'draw-shape'
          },
          ctrl: function ctrl() {
            console.log('save');
          },
          ctrlShift: {
            menu: 'options',
            name: 'save-as'
          }
        },
        84: {
          // T
          fn: {
            activeTool: 'text'
          },
          ctrl: {
            menu: 'layer',
            name: 'visible'
          }
        },
        86: {
          // V
          ctrlShift: {
            menu: 'options',
            name: 'download-svg'
          }
        },
        90: {
          // Z
          ctrl: function ctrl() {
            return undo();
          },
          ctrlShift: function ctrlShift() {
            return redo();
          }
        }
      };
      if (keyMaps[e.keyCode] && !hasFocusedInput) {
        e.preventDefault();
        // e.stopPropagation();
        // e.returnValue=false;
        var action = isCtrlPressed ? 'ctrl' : isCtrlShiftPressed ? 'ctrlShift' : 'fn';
        var object = keyMaps[e.keyCode][action];
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isFunction)(object)) {
          object();
        } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isObject)(object)) {
          if (object.activeTool) {
            setEditor({
              activeTool: activeTool === object.activeTool ? '' : object.activeTool,
              isSidebarLeftOpened: true,
              isDrawingMode: false
            });
          } else if (object.menu) {
            var _menuMaps$object$menu, _item$disabled;
            var menuMaps = {
              'ruler': _utils_ruler_menu_js__WEBPACK_IMPORTED_MODULE_8__["default"],
              'options': _utils_options_menu_js__WEBPACK_IMPORTED_MODULE_9__["default"],
              'layer': _utils_layer_actions_js__WEBPACK_IMPORTED_MODULE_10__["default"]
            };
            var menu = (_menuMaps$object$menu = menuMaps[object.menu]) === null || _menuMaps$object$menu === void 0 ? void 0 : _menuMaps$object$menu.call(menuMaps, this.props);
            var item = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(menu, {
              name: object.name
            });
            if (item && !((_item$disabled = item.disabled) !== null && _item$disabled !== void 0 && _item$disabled.call(item))) {
              item.onClick();
            }
          }
        }
      }
    }

    /**
     * 
     * @since 1.0.0
     */
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Globals;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  var output = {
    layers: state.data.present.layers,
    layerIds: state.data.present.layerIds,
    canvasBackground: state.data.present.canvasBackground
  };
  var props = ['projectId', 'activeTool', 'isDrawingMode', 'showRulers', 'showRulerCursors', 'snapObjects', 'snapToGrid', 'guides', 'mediaId', 'revisionURL', 'fullScreen', 'activeLayers'];
  props.forEach(function (prop) {
    output[prop] = state.editor[prop];
  });
  _utils_lists_js__WEBPACK_IMPORTED_MODULE_5__.propsToSaveLocalStorage.forEach(function (prop) {
    output[prop] = state.editor[prop];
  });
  return output;
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__.setEditor,
  undo: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.undo,
  redo: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.redo,
  setData: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.setData,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.addLayer,
  removeLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.removeLayer,
  replaceLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.replaceLayer,
  setLayerProps: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.setLayerProps
})(Globals));

/***/ }),

/***/ "./src/editor/components/header.jsx":
/*!******************************************!*\
  !*** ./src/editor/components/header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_title_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/title.jsx */ "./src/editor/components/header/title.jsx");
/* harmony import */ var _header_undo_redo_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/undo-redo.jsx */ "./src/editor/components/header/undo-redo.jsx");
/* harmony import */ var _header_publish_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/publish.jsx */ "./src/editor/components/header/publish.jsx");



var Header = function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header"
  }, /*#__PURE__*/React.createElement(_header_title_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_header_undo_redo_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_header_publish_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/editor/components/header/publish.jsx":
/*!**************************************************!*\
  !*** ./src/editor/components/header/publish.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_options_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/options-menu.js */ "./src/editor/utils/options-menu.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");








var Publish = function Publish(props) {
  var projectId = props.projectId,
    projectName = props.projectName,
    thumbnail = props.thumbnail,
    mediaId = props.mediaId,
    mediaUrl = props.mediaUrl,
    revisionURL = props.revisionURL,
    canvasWidth = props.canvasWidth,
    canvasHeight = props.canvasHeight,
    canvasBackground = props.canvasBackground,
    layers = props.layers,
    layerIds = props.layerIds,
    setEditor = props.setEditor,
    sendNotice = props.sendNotice;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "pixmagix-header__publish"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('New', 'pixmagix'),
    icon: "plus",
    onClick: function onClick() {
      window.location.replace(editor_globals__WEBPACK_IMPORTED_MODULE_4__.new_url);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save', 'pixmagix'),
    icon: "floppy-disk",
    active: true,
    onClick: function onClick() {
      if (!layerIds.length && !canvasBackground) {
        sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please create something, before you save!', 'pixmagix'), 'warning');
        return;
      }
      wp_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.PROJECTS_REST_PATH + (projectId || ''),
        method: 'POST',
        data: {
          title: projectName || '',
          status: 'publish',
          meta: {
            pixmagix_project: {
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
              canvasBackground: canvasBackground,
              layers: layerIds.map(function (id) {
                return layers[id];
              }),
              thumbnail: thumbnail,
              mediaId: mediaId,
              mediaUrl: mediaUrl,
              revisionURL: revisionURL
            }
          }
        }
      }).then(function (response) {
        (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.batch)(function () {
          setEditor('projectId', response.id);
          sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Project Saved Successfully', 'pixmagix'), 'success');
        });
      })["catch"](function (error) {
        console.log(error);
        sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save Failed', 'pixmagix'), 'error');
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    position: "bottom right",
    trigger: function trigger() {
      return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Options', 'pixmagix'),
        icon: "bars"
      });
    },
    items: (0,_utils_options_menu_js__WEBPACK_IMPORTED_MODULE_5__["default"])(props)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    projectId: state.editor.projectId,
    projectName: state.editor.projectName,
    mediaId: state.editor.mediaId,
    mediaUrl: state.editor.mediaUrl,
    revisionURL: state.editor.revisionURL,
    thumbnail: state.editor.thumbnail,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasBackground: state.data.present.canvasBackground,
    layers: state.data.present.layers,
    layerIds: state.data.present.layerIds,
    fullScreen: state.editor.fullScreen
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__.setEditor,
  sendNotice: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__.sendNotice
})(Publish));

/***/ }),

/***/ "./src/editor/components/header/title.jsx":
/*!************************************************!*\
  !*** ./src/editor/components/header/title.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_3__);




var Title = function Title(_ref) {
  var fullScreen = _ref.fullScreen;
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-header__title"
  }, fullScreen && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Back to Dashboard', 'pixmagix'),
    icon: "right-to-bracket",
    onClick: function onClick() {
      window.location.replace(editor_globals__WEBPACK_IMPORTED_MODULE_3__.projects_url);
    }
  }), /*#__PURE__*/React.createElement("h1", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PixMagix', 'pixmagix')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    fullScreen: state.editor.fullScreen
  };
})(Title));

/***/ }),

/***/ "./src/editor/components/header/undo-redo.jsx":
/*!****************************************************!*\
  !*** ./src/editor/components/header/undo-redo.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");




var UndoRedo = function UndoRedo(_ref) {
  var hasUndo = _ref.hasUndo,
    hasRedo = _ref.hasRedo,
    undo = _ref.undo,
    redo = _ref.redo;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "pixmagix-header__undoredo"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Undo', 'pixmagix'),
    icon: "rotate-left",
    disabled: !hasUndo,
    onClick: function onClick() {
      return undo();
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Redo', 'pixmagix'),
    icon: "rotate-right",
    disabled: !hasRedo,
    onClick: function onClick() {
      return redo();
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  var _state$data$past, _state$data$future;
  return {
    hasUndo: !!((_state$data$past = state.data.past) !== null && _state$data$past !== void 0 && _state$data$past.length),
    hasRedo: !!((_state$data$future = state.data.future) !== null && _state$data$future !== void 0 && _state$data$future.length)
  };
}, {
  undo: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_3__.undo,
  redo: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_3__.redo
})(UndoRedo));

/***/ }),

/***/ "./src/editor/components/modals.jsx":
/*!******************************************!*\
  !*** ./src/editor/components/modals.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/lists.js */ "./src/editor/utils/lists.js");


var Modals = function Modals(_ref) {
  var activeModal = _ref.activeModal;
  var ActiveModal = _utils_lists_js__WEBPACK_IMPORTED_MODULE_1__.modals[activeModal];
  return ActiveModal ? /*#__PURE__*/React.createElement(ActiveModal, null) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    activeModal: state.editor.activeModal
  };
})(Modals));

/***/ }),

/***/ "./src/editor/components/modals/download-image.jsx":
/*!*********************************************************!*\
  !*** ./src/editor/components/modals/download-image.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var DownloadImage = function DownloadImage(_ref) {
  var projectName = _ref.projectName,
    imageDataURL = _ref.imageDataURL,
    fileFormat = _ref.fileFormat,
    setEditor = _ref.setEditor;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    filename = _useState2[0],
    setFilename = _useState2[1];
  var downloadImage = function downloadImage() {
    var _filename = filename || projectName || 'pixmagix';
    var _extension = fileFormat === 'jpeg' ? 'jpg' : 'png';
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getDownloadAnchor)(imageDataURL, _filename, _extension).click();
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Download Image', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: downloadImage
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Download', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: imageDataURL
  }))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('File Name', 'pixmagix'),
    value: filename,
    onChange: setFilename
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.RadioButtons, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('File Type', 'pixmagix'),
    options: [{
      label: 'PNG',
      value: 'png'
    }, {
      label: 'JPEG',
      value: 'jpeg'
    }],
    value: fileFormat,
    onChange: function onChange(value) {
      return setEditor('fileFormat', value);
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    projectName: state.editor.projectName,
    imageDataURL: state.editor.imageDataURL,
    fileFormat: state.editor.fileFormat
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(DownloadImage));

/***/ }),

/***/ "./src/editor/components/modals/download-svg.jsx":
/*!*******************************************************!*\
  !*** ./src/editor/components/modals/download-svg.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var DownloadSVG = function DownloadSVG(_ref) {
  var projectName = _ref.projectName,
    svgString = _ref.svgString,
    setEditor = _ref.setEditor;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    filename = _useState2[0],
    setFilename = _useState2[1];
  var downloadSVG = function downloadSVG() {
    var _filename = filename || projectName || 'pixmagix';
    var base64SVG = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getDownloadAnchor)(base64SVG, _filename, 'svg').click();
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Download SVG', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: downloadSVG
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Download', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement("figure", {
    dangerouslySetInnerHTML: {
      __html: svgString
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('File Name', 'pixmagix'),
    value: filename,
    onChange: setFilename
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    projectName: state.editor.projectName,
    svgString: state.editor.svgString
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(DownloadSVG));

/***/ }),

/***/ "./src/editor/components/modals/export-media.jsx":
/*!*******************************************************!*\
  !*** ./src/editor/components/modals/export-media.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ExportMedia = function ExportMedia(_ref) {
  var imageDataURL = _ref.imageDataURL,
    fileFormat = _ref.fileFormat,
    setEditor = _ref.setEditor,
    sendNotice = _ref.sendNotice;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    filename = _useState2[0],
    setFilename = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    title = _useState4[0],
    setTitle = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    alt = _useState6[0],
    setAlt = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    caption = _useState8[0],
    setCaption = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    description = _useState10[0],
    setDescription = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var exportImage = function exportImage() {
    var data = {
      imageDataURL: imageDataURL,
      filename: filename.replace(/\s/g, '-').toLowerCase(),
      extension: fileFormat === 'jpeg' ? 'jpg' : 'png',
      title: title,
      alt: alt,
      caption: caption,
      description: description
    };
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.REST_PATH + 'export_image',
      method: 'POST',
      data: data
    }).then(function (response) {
      console.log(response);
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setLoading(false);
        sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Exported Successfully', 'pixmagix'), 'success');
      });
    })["catch"](function (error) {
      console.log(error);
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setLoading(false);
        sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'pixmagix'), 'error');
      });
    });
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Export Image to Media Library', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: exportImage
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Export', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: imageDataURL
  }))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('File Name', 'pixmagix'),
    value: filename,
    onChange: setFilename
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.RadioButtons, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('File Type', 'pixmagix'),
    options: [{
      label: 'PNG',
      value: 'png'
    }, {
      label: 'JPEG',
      value: 'jpeg'
    }],
    value: fileFormat,
    onChange: function onChange(value) {
      return setEditor('fileFormat', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'pixmagix'),
    value: title,
    onChange: setTitle
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternative Text', 'pixmagix'),
    value: alt,
    onChange: setAlt
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Caption', 'pixmagix'),
    value: caption,
    onChange: setCaption
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Description', 'pixmagix'),
    value: description,
    onChange: setDescription
  })))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    imageDataURL: state.editor.imageDataURL,
    fileFormat: state.editor.fileFormat
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor,
  sendNotice: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.sendNotice
})(ExportMedia));

/***/ }),

/***/ "./src/editor/components/modals/help.jsx":
/*!***********************************************!*\
  !*** ./src/editor/components/modals/help.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");






var Help = function Help(_ref) {
  var setEditor = _ref.setEditor;
  var onClick = function onClick(slug) {
    return function () {
      var a = document.createElement('a');
      a.href = _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.PIXMAGIX_WEBSITE + slug + '/';
      a.target = '_blank';
      a.click();
    };
  };
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to PixMagix Help Center!', 'pixmagix'),
    middle: true,
    onClose: function onClose() {
      return setEditor('activeModal', '');
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('We\'re here to provide you with the assistance you need to create stunning graphics.', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement("h4", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('How can we help you?', 'pixmagix')), /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('We offer the following resources at your disposal to help you get the most out of PixMagix:', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'documentation',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Documentation', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Our documentation provides comprehensive information on how to use PixMagix. It covers topics from the basic functionality to advanced techniques. Click the button to access the documentation.', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
        active: true,
        onClick: onClick('support/documentation')
      }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('See Docs', 'pixmagix')))
    }, {
      name: 'faq',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('FAQ', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Find quick answers to common questions about using our plugin. From beginners to experts, our FAQ section is a valuable resource to troubleshoot issues and maximize plugin functionality. Explore the comprehensive list of frequently asked questions for a convenient and time-saving solution.', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
        active: true,
        onClick: onClick('support/faq')
      }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Visit FAQ', 'pixmagix')))
    }, {
      name: 'features',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Features', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('See the full range of tools and features available in PixMagix. Browse through the feature list to discover new and exciting ways to create beautiful graphics. Click the button to see the full list.', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
        active: true,
        onClick: onClick('features')
      }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Explore Features', 'pixmagix')))
    }, {
      name: 'blog',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Blog', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stay updated with step-by-step guides, tips, and news in the world of PixMagix on our regularly updated blog. Learn new skills, get inspiration, and stay at the forefront of design trends with our informative and engaging blog posts. Check it out today!', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
        active: true,
        onClick: onClick('blog')
      }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Check Blog', 'pixmagix')))
    }, {
      name: 'contact',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contact', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('If you have any queries or issues, don\'t hesitate to contact our support team. Our team is available to assist you 24/7. Click the button to access the support page.', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
        active: true,
        onClick: onClick('support/contact')
      }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contact us', 'pixmagix')))
    }]
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement("p", null, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('We hope these resources are useful in your creative journey with PixMagix. Happy designing!', 'pixmagix'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {};
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(Help));

/***/ }),

/***/ "./src/editor/components/modals/import-media.jsx":
/*!*******************************************************!*\
  !*** ./src/editor/components/modals/import-media.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ImportMedia = function ImportMedia(_ref) {
  var selectedMedia = _ref.selectedMedia,
    setEditor = _ref.setEditor;
  var isMounting = false;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    maxPages = _useState8[0],
    setMaxPages = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    date = _useState12[0],
    setDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedMedia),
    _useState14 = _slicedToArray(_useState13, 2),
    selected = _useState14[0],
    setSelected = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounting = true;
    var query = {
      page: page,
      per_page: 12,
      media_type: 'image'
    };
    if (search) {
      query.search = search;
    }
    if (date) {
      query.yearmonth = date;
    }
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)(query, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.IMAGES_REST_PATH),
      withTotalPages: true
    }).then(function (response) {
      console.log(response, isMounting);
      if (isMounting) {
        (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
          setItems(response.items);
          setMaxPages(response.totalPages);
          setLoading(false);
        });
      }
    });
    return function () {
      isMounting = false;
    };
  }, [search, date, page]);
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Import Image From Media Library', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: function onClick() {
        return setEditor({
          activeModal: '',
          selectedMedia: selected
        });
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Import', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setSearch(value);
        setPage(1);
        setLoading(true);
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Date', 'pixmagix'),
    value: date,
    options: editor_globals__WEBPACK_IMPORTED_MODULE_3__.media_dates,
    onChange: function onChange(value) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setDate(value);
        setPage(1);
        setLoading(true);
      });
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setPage(page);
        setLoading(true);
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Grid, null, items.length === 0 ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Items Found', 'pixmagix')
  }) : items.map(function (media) {
    var _media_details$sizes, _media_details$sizes$;
    var id = media.id,
      title = media.title,
      media_type = media.media_type,
      media_details = media.media_details,
      source_url = media.source_url;
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      key: id,
      title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Image', 'pixmagix'),
      caption: title === null || title === void 0 ? void 0 : title.rendered,
      src: ((_media_details$sizes = media_details.sizes) === null || _media_details$sizes === void 0 ? void 0 : (_media_details$sizes$ = _media_details$sizes.thumbnail) === null || _media_details$sizes$ === void 0 ? void 0 : _media_details$sizes$.source_url) || source_url,
      selected: (selected === null || selected === void 0 ? void 0 : selected.id) === id,
      onClick: function onClick(e) {
        e.preventDefault();
        setSelected(media);
      }
    });
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setPage(page);
        setLoading(true);
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    selectedMedia: state.editor.selectedMedia
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__.setEditor
})(ImportMedia));

/***/ }),

/***/ "./src/editor/components/modals/keyboard-shortcuts.jsx":
/*!*************************************************************!*\
  !*** ./src/editor/components/modals/keyboard-shortcuts.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_keyboard_shortcuts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/keyboard-shortcuts.js */ "./src/editor/utils/keyboard-shortcuts.js");






var KeyboardShortcuts = function KeyboardShortcuts(_ref) {
  var setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Keyboard Shortcuts', 'pixmagix'),
    middle: true,
    onClose: function onClose() {
      return setEditor('activeModal', '');
    }
  }, _utils_keyboard_shortcuts_js__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (_ref2, i) {
    var title = _ref2.title,
      description = _ref2.description,
      items = _ref2.items;
    return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("h2", {
      className: "pixmagix-kbsc__title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "pixmagix-kbsc__description"
    }, description), /*#__PURE__*/React.createElement("ul", {
      className: "pixmagix-kbsc__list"
    }, items.map(function (_ref3, i) {
      var description = _ref3.description,
        combination = _ref3.combination;
      return /*#__PURE__*/React.createElement("li", {
        className: "pixmagix-kbsc__item"
      }, /*#__PURE__*/React.createElement("span", null, description), /*#__PURE__*/React.createElement("kbd", null, combination));
    })));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {};
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(KeyboardShortcuts));

/***/ }),

/***/ "./src/editor/components/modals/open-project.jsx":
/*!*******************************************************!*\
  !*** ./src/editor/components/modals/open-project.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var OpenProject = function OpenProject(_ref) {
  var setEditor = _ref.setEditor;
  var isMounting = false;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    maxPages = _useState8[0],
    setMaxPages = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    date = _useState12[0],
    setDate = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounting = true;
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
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)(query, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.PROJECTS_REST_PATH),
      withTotalPages: true
    }).then(function (response) {
      var items = response.items,
        totalPages = response.totalPages;
      if (isMounting) {
        (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
          setItems(items.map(function (_ref2) {
            var _meta$pixmagix_projec;
            var id = _ref2.id,
              title = _ref2.title,
              meta = _ref2.meta;
            return {
              id: id,
              title: (title === null || title === void 0 ? void 0 : title.rendered) || '',
              thumbnail: (meta === null || meta === void 0 ? void 0 : (_meta$pixmagix_projec = meta.pixmagix_project) === null || _meta$pixmagix_projec === void 0 ? void 0 : _meta$pixmagix_projec.thumbnail) || ''
            };
          }));
          setMaxPages(totalPages);
          setLoading(false);
        });
      }
    });
    return function () {
      isMounting = false;
    };
  }, [search, date, page]);
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Open Project', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.InlineControls, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search', 'pixmagix'),
    value: search,
    onChange: function onChange(value) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setSearch(value);
        setPage(1);
        setLoading(true);
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Date', 'pixmagix'),
    value: date,
    options: editor_globals__WEBPACK_IMPORTED_MODULE_3__.project_dates,
    onChange: function onChange(value) {
      setDate(value);
      setPage(1);
      setLoading(true);
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setPage(page);
        setLoading(true);
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Grid, null, items.length === 0 ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
    isEmpty: true,
    caption: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Items Found', 'pixmagix')
  }) : items.map(function (_ref3) {
    var id = _ref3.id,
      title = _ref3.title,
      thumbnail = _ref3.thumbnail;
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      key: id,
      caption: title,
      href: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)({
        id: id
      }, editor_globals__WEBPACK_IMPORTED_MODULE_3__.new_url),
      src: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)({
        r: Math.ceil(Math.random() * 1000)
      }, thumbnail)
    });
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
    page: page,
    maxPages: maxPages,
    onChange: function onChange(page) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setPage(page);
        setLoading(true);
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {};
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__.setEditor
})(OpenProject));

/***/ }),

/***/ "./src/editor/components/modals/replace-media.jsx":
/*!********************************************************!*\
  !*** ./src/editor/components/modals/replace-media.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ReplaceMedia = function ReplaceMedia(_ref) {
  var mediaId = _ref.mediaId,
    mediaUrl = _ref.mediaUrl,
    imageDataURL = _ref.imageDataURL,
    setEditor = _ref.setEditor,
    sendNotice = _ref.sendNotice;
  if (!mediaId) {
    return null;
  }
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alt = _useState4[0],
    setAlt = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    caption = _useState6[0],
    setCaption = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    description = _useState8[0],
    setDescription = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var replaceImage = function replaceImage() {
    var data = {
      mediaId: mediaId,
      imageDataURL: imageDataURL,
      title: title,
      alt: alt,
      caption: caption,
      description: description
    };
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.REST_PATH + 'export_image',
      method: 'POST',
      data: data
    }).then(function (response) {
      console.log(response);
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setLoading(false);
        setEditor('revisionURL', response.revision_url);
        sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Media Image Replaced Successfully', 'pixmagix'), 'success');
      });
    })["catch"](function (error) {
      console.log(error);
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setLoading(false);
        sendNotice(error.message, 'error');
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.IMAGES_REST_PATH + mediaId
    }).then(function (_ref2) {
      var title = _ref2.title,
        alt_text = _ref2.alt_text,
        caption = _ref2.caption,
        description = _ref2.description;
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setTitle(title.rendered);
        setAlt(alt_text);
        setCaption(caption.rendered);
        setDescription(description.rendered);
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Media Image', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: replaceImage
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.BeforeAfterSlider, {
    src1: mediaUrl,
    src2: imageDataURL,
    caption1: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Original', 'pixmagix'),
    caption2: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New', 'pixmagix')
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'pixmagix'),
    value: title,
    onChange: setTitle
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternative Text', 'pixmagix'),
    value: alt,
    onChange: setAlt
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Caption', 'pixmagix'),
    value: caption,
    onChange: setCaption
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Description', 'pixmagix'),
    value: description,
    onChange: setDescription
  })))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    mediaId: state.editor.mediaId,
    mediaUrl: state.editor.mediaUrl,
    imageDataURL: state.editor.imageDataURL
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor,
  sendNotice: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.sendNotice
})(ReplaceMedia));

/***/ }),

/***/ "./src/editor/components/modals/restore-media.jsx":
/*!********************************************************!*\
  !*** ./src/editor/components/modals/restore-media.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var RestoreMedia = function RestoreMedia(_ref) {
  var mediaId = _ref.mediaId,
    imageDataURL = _ref.imageDataURL,
    revisionURL = _ref.revisionURL,
    setEditor = _ref.setEditor,
    sendNotice = _ref.sendNotice;
  if (!mediaId || !revisionURL) {
    return null;
  }
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alt = _useState4[0],
    setAlt = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    caption = _useState6[0],
    setCaption = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    description = _useState8[0],
    setDescription = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var restoreImage = function restoreImage() {
    var data = {
      mediaId: mediaId,
      title: title,
      alt: alt,
      caption: caption,
      description: description
    };
    setLoading(true);
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.REST_PATH + 'restore_image',
      method: 'POST',
      data: data
    }).then(function (response) {
      console.log(response);
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setLoading(false);
        setEditor('revisionURL', '');
        sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('The Original Media Image Restored Successfully', 'pixmagix'), 'success');
      });
    })["catch"](function (error) {
      console.log(error);
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setLoading(false);
        sendNotice(error.message, 'error');
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.IMAGES_REST_PATH + mediaId
    }).then(function (_ref2) {
      var title = _ref2.title,
        alt_text = _ref2.alt_text,
        caption = _ref2.caption,
        description = _ref2.description;
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setTitle(title.rendered);
        setAlt(alt_text);
        setCaption(caption.rendered);
        setDescription(description.rendered);
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Restore Original Media Image', 'pixmagix'),
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: restoreImage
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Restore', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.BeforeAfterSlider, {
    src1: imageDataURL,
    src2: revisionURL,
    caption1: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Edited', 'pixmagix'),
    caption2: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Original', 'pixmagix')
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Column, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'pixmagix'),
    value: title,
    onChange: setTitle
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternative Text', 'pixmagix'),
    value: alt,
    onChange: setAlt
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Caption', 'pixmagix'),
    value: caption,
    onChange: setCaption
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Description', 'pixmagix'),
    value: description,
    onChange: setDescription
  })))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    mediaId: state.editor.mediaId,
    imageDataURL: state.editor.imageDataURL,
    revisionURL: state.editor.revisionURL
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor,
  sendNotice: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.sendNotice
})(RestoreMedia));

/***/ }),

/***/ "./src/editor/components/modals/save-as.jsx":
/*!**************************************************!*\
  !*** ./src/editor/components/modals/save-as.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SaveAs = function SaveAs(_ref) {
  var projectName = _ref.projectName,
    thumbnail = _ref.thumbnail,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasBackground = _ref.canvasBackground,
    layers = _ref.layers,
    layerIds = _ref.layerIds,
    setEditor = _ref.setEditor,
    sendNotice = _ref.sendNotice;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save Project as', 'pixmagix'),
    small: true,
    onClose: function onClose() {
      return setEditor('activeModal', '');
    },
    actions: /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
      active: true,
      onClick: function onClick() {
        if (!layerIds.length && !canvasBackground) {
          sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please create something, before you save!', 'pixmagix'), 'warning');
          return;
        }
        setLoading(true);
        wp_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
          path: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.PROJECTS_REST_PATH,
          method: 'POST',
          data: {
            title: name || projectName || '',
            status: 'publish',
            meta: {
              pixmagix_project: {
                canvasWidth: canvasWidth,
                canvasHeight: canvasHeight,
                canvasBackground: canvasBackground,
                layers: layerIds.map(function (id) {
                  return layers[id];
                }),
                thumbnail: thumbnail
              }
            }
          }
        }).then(function (response) {
          (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
            setEditor('projectId', response.id);
            sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Project Saved Successfully', 'pixmagix'), 'success');
            setLoading(false);
          });
        })["catch"](function (error) {
          console.log(error);
          (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
            sendNotice((0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save Failed', 'pixmagix'), 'error');
            setLoading(false);
          });
        });
      }
    }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save', 'pixmagix'))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Project Name', 'pixmagix'),
    placeholder: projectName,
    value: name,
    onChange: setName
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Loader, {
    show: loading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    projectName: state.editor.projectName,
    thumbnail: state.editor.thumbnail,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasBackground: state.data.present.canvasBackground,
    layers: state.data.present.layers,
    layerIds: state.data.present.layerIds
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor,
  sendNotice: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.sendNotice
})(SaveAs));

/***/ }),

/***/ "./src/editor/components/notification.jsx":
/*!************************************************!*\
  !*** ./src/editor/components/notification.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var Notification = function Notification(_ref) {
  var notification = _ref.notification,
    setEditor = _ref.setEditor;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (notification) {
      setTimeout(function () {
        setEditor('notification', null);
      }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATION_EXPIRATION_TIME);
    }
  }, [notification]);
  if (!notification) {
    return null;
  }
  var type = notification.type,
    message = notification.message;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('pixmagix-notification', _defineProperty({}, "pixmagix-notification__".concat(type), type))
  }, /*#__PURE__*/React.createElement("p", null, message));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    notification: state.editor.notification
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(Notification));

/***/ }),

/***/ "./src/editor/components/sidebar-left.jsx":
/*!************************************************!*\
  !*** ./src/editor/components/sidebar-left.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/lists.js */ "./src/editor/utils/lists.js");






var SidebarLeft = function SidebarLeft(_ref) {
  var _find2;
  var activeTool = _ref.activeTool,
    isSidebarLeftOpened = _ref.isSidebarLeftOpened,
    setEditor = _ref.setEditor;
  var Content = ((_find2 = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)(_utils_lists_js__WEBPACK_IMPORTED_MODULE_5__.toolbarItems, {
    name: activeTool
  })) === null || _find2 === void 0 ? void 0 : _find2.component) || function () {
    return null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-sidebarleft"
  }, !!activeTool && /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSidebarLeftOpened && /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-sidebarleft__inner"
  }, /*#__PURE__*/React.createElement(Content, null)), /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-sidebarleft__toggle",
    onClick: function onClick() {
      return setEditor('isSidebarLeftOpened', !isSidebarLeftOpened);
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: isSidebarLeftOpened ? 'angle-left' : 'angle-right'
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    activeTool: state.editor.activeTool,
    isSidebarLeftOpened: state.editor.isSidebarLeftOpened
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(SidebarLeft));

/***/ }),

/***/ "./src/editor/components/sidebar-left/add-icon.jsx":
/*!*********************************************************!*\
  !*** ./src/editor/components/sidebar-left/add-icon.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AddIcon = function AddIcon(_ref) {
  var pencilWidth = _ref.pencilWidth,
    pencilColor = _ref.pencilColor,
    pencilShadow = _ref.pencilShadow,
    fillColor = _ref.fillColor,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    setEditor = _ref.setEditor,
    addLayer = _ref.addLayer,
    setDatasWithAddLayer = _ref.setDatasWithAddLayer;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    showSettings = _useState2[0],
    setShowSettings = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    svgSource = _useState4[0],
    setSvgSource = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    group = _useState6[0],
    setGroup = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    resize = _useState8[0],
    setResize = _useState8[1];
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'icons',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search For Icons', 'pixmagix'),
      icon: 'magnifying-glass',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.LibrarySelect, {
        itemType: "svg",
        svgAttrs: {
          fill: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.EDITOR_COLOR,
          strokeWidth: 0
        },
        items: editor_globals__WEBPACK_IMPORTED_MODULE_3__.fa_icons,
        onChange: function onChange(_ref2) {
          var path = _ref2.path,
            label = _ref2.label;
          var object = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.createLayerObject)({
            type: 'path',
            name: label,
            path: path,
            left: canvasWidth / 2,
            top: canvasHeight / 2,
            strokeWidth: pencilWidth,
            stroke: pencilColor,
            fill: fillColor,
            shadow: pencilShadow
          });
          addLayer(object);
        }
      }))
    }, {
      name: 'upload',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Custom SVG', 'pixmagix'),
      icon: 'upload',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
        block: true,
        active: true,
        onClick: function onClick() {
          (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.getHiddenFileInput)('image/svg+xml', 'readAsText', setSvgSource).click();
        }
      }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload From Computer', 'pixmagix')))
    }],
    onChange: function onChange(tab) {
      setShowSettings(tab.name === 'icons');
      if (tab.name !== 'upload') {
        setSvgSource('');
      }
    }
  }), !!svgSource && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Selected SVG', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ImageSelect, {
    type: "svg",
    src: svgSource,
    controls: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Import SVG as One Layer', 'pixmagix'),
      checked: group,
      onChange: setGroup
    }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Resize Canvas to SVG Size', 'pixmagix'),
      checked: resize,
      onChange: setResize
    })),
    onReplace: function onReplace() {
      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.getHiddenFileInput)('image/svg+xml', 'readAsText', setSvgSource).click();
    },
    onSelect: function onSelect() {
      return (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.loadSVGFromString)(svgSource, function (objects, options) {
        var layers = group && objects.length > 1 ? (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.createLayerObject)({
          type: 'group',
          objects: objects
        }) : objects.map(function (obj) {
          return (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.createLayerObject)(obj);
        });
        if (resize) {
          setDatasWithAddLayer({
            canvasWidth: options.width,
            canvasHeight: options.height
          }, layers);
        } else {
          addLayer(layers);
        }
        setSvgSource('');
      });
    }
  })), showSettings && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'stroke',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Stroke', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Stroke Width', 'pixmagix'),
        value: pencilWidth,
        onChange: function onChange(value) {
          return setEditor('pencilWidth', value);
        },
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.PENCIL_MIN_WIDTH,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.PENCIL_MAX_WIDTH,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Stroke Color', 'pixmagix'),
        color: pencilColor,
        onChange: function onChange(color) {
          return setEditor('pencilColor', color);
        }
      }))
    }, {
      name: 'fill',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fill', 'pixmagix'),
      icon: 'fill',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fill Color', 'pixmagix'),
        color: fillColor,
        onChange: function onChange(color) {
          return setEditor('fillColor', color);
        }
      }))
    }, {
      name: 'shadow',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Shadow', 'pixmagix'),
      icon: 'circle-half-stroke',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ShadowPicker, {
        value: pencilShadow,
        onChange: function onChange(value) {
          return setEditor('pencilShadow', value);
        }
      }))
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    pencilWidth: state.editor.pencilWidth,
    pencilColor: state.editor.pencilColor,
    pencilShadow: state.editor.pencilShadow,
    fillColor: state.editor.fillColor,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__.setEditor,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.addLayer,
  setDatasWithAddLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_7__.setDatasWithAddLayer
})(AddIcon));

/***/ }),

/***/ "./src/editor/components/sidebar-left/add-image.jsx":
/*!**********************************************************!*\
  !*** ./src/editor/components/sidebar-left/add-image.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/lists.js */ "./src/editor/utils/lists.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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









var AddImage = function AddImage(_ref) {
  var _media_details$sizes, _media_details$sizes$;
  var canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    selectedMedia = _ref.selectedMedia,
    setEditor = _ref.setEditor,
    addLayer = _ref.addLayer,
    setDatasWithAddLayer = _ref.setDatasWithAddLayer;
  var _ref2 = selectedMedia || {},
    comeFrom = _ref2.comeFrom,
    source_url = _ref2.source_url,
    media_details = _ref2.media_details;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    resize = _useState2[0],
    setResize = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    size = _useState4[0],
    setSize = _useState4[1];
  var onUpload = function onUpload() {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.getHiddenFileInput)('image/png, image/jpeg', 'readAsDataURL', function (src) {
      setEditor('selectedMedia', {
        comeFrom: 'upload',
        source_url: src
      });
    }).click();
  };
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Image', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    active: true,
    block: true,
    onClick: function onClick() {
      return setEditor('activeModal', 'import-media');
    }
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Import From Media', 'pixmagix')), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    active: true,
    block: true,
    onClick: onUpload
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload From Computer', 'pixmagix'))), !!selectedMedia && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selected Image', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ImageSelect, {
    src: (media_details === null || media_details === void 0 ? void 0 : (_media_details$sizes = media_details.sizes) === null || _media_details$sizes === void 0 ? void 0 : (_media_details$sizes$ = _media_details$sizes[size]) === null || _media_details$sizes$ === void 0 ? void 0 : _media_details$sizes$.source_url) || source_url,
    controls: comeFrom === 'upload' ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Resize Canvas to Image Size', 'pixmagix'),
      checked: resize,
      onChange: setResize
    }) : /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Resize Canvas to Image Size', 'pixmagix'),
      checked: resize,
      onChange: setResize
    }), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(media_details === null || media_details === void 0 ? void 0 : media_details.sizes) && /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Size', 'pixmagix'),
      value: size,
      options: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.map)(media_details.sizes, function (value, key) {
        return {
          label: _utils_lists_js__WEBPACK_IMPORTED_MODULE_8__.attachmentSizes[key] || key,
          value: key
        };
      }),
      onChange: setSize
    })),
    onReplace: function onReplace() {
      if (comeFrom === 'upload') {
        onUpload();
      } else {
        setEditor('activeModal', 'import-media');
      }
    },
    onSelect: function onSelect() {
      var layer = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.createLayerObject)({
        type: 'image',
        src: size ? media_details.sizes[size].source_url : source_url
      }, false, function (object) {
        (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
          if (resize) {
            setDatasWithAddLayer({
              canvasWidth: object.width,
              canvasHeight: object.height
            }, _objectSpread(_objectSpread({}, layer), {}, {
              width: object.width,
              height: object.height,
              left: object.width / 2,
              top: object.height / 2
            }));
          } else {
            addLayer(_objectSpread(_objectSpread({}, layer), {}, {
              width: object.width,
              height: object.height,
              left: canvasWidth / 2,
              top: canvasHeight / 2
            }));
          }
          setEditor('selectedMedia', null);
        });
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    selectedMedia: state.editor.selectedMedia
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_6__.addLayer,
  setDatasWithAddLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_6__.setDatasWithAddLayer
})(AddImage));

/***/ }),

/***/ "./src/editor/components/sidebar-left/add-qrcode.jsx":
/*!***********************************************************!*\
  !*** ./src/editor/components/sidebar-left/add-qrcode.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");








var AddQRCode = function AddQRCode(_ref) {
  var qrCodeText = _ref.qrCodeText,
    qrCodeSize = _ref.qrCodeSize,
    qrCodePadding = _ref.qrCodePadding,
    qrCodeECL = _ref.qrCodeECL,
    pencilColor = _ref.pencilColor,
    pencilShadow = _ref.pencilShadow,
    fillColor = _ref.fillColor,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    setEditor = _ref.setEditor,
    addLayer = _ref.addLayer;
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add QR Code', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    placeholder: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Write Text Here...', 'pixmagix'),
    value: qrCodeText,
    onChange: function onChange(value) {
      return setEditor('qrCodeText', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    active: true,
    block: true,
    onClick: function onClick() {
      var object = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.createLayerObject)({
        type: 'qrcode',
        text: qrCodeText,
        size: qrCodeSize,
        qrPadding: qrCodePadding,
        ecl: qrCodeECL,
        left: canvasWidth / 2,
        top: canvasHeight / 2,
        stroke: pencilColor,
        fill: fillColor,
        shadow: pencilShadow
      });
      addLayer(object);
    }
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Generate QR Code', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'settings',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'pixmagix'),
      icon: 'gear',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Size', 'pixmagix'),
        value: qrCodeSize,
        onChange: function onChange(value) {
          return setEditor('qrCodeSize', value);
        },
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.QRCODE_MIN_SIZE,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.QRCODE_MAX_SIZE,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'pixmagix'),
        value: qrCodePadding,
        onChange: function onChange(value) {
          return setEditor('qrCodePadding', value);
        },
        min: 0,
        max: 20,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error Correction Level', 'pixmagix'),
        options: [{
          label: 'L',
          value: 'L'
        }, {
          label: 'M',
          value: 'M'
        }, {
          label: 'Q',
          value: 'Q'
        }, {
          label: 'H',
          value: 'H'
        }],
        value: qrCodeECL,
        onChange: function onChange(value) {
          return setEditor('qrCodeECL', value);
        }
      }))
    }, {
      name: 'color',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: "c"
      }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'pixmagix'),
        color: pencilColor,
        onChange: function onChange(color) {
          return setEditor('pencilColor', color);
        }
      }))
    }, {
      name: 'background',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background', 'pixmagix'),
      icon: 'fill',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: "b"
      }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background', 'pixmagix'),
        color: fillColor,
        onChange: function onChange(color) {
          return setEditor('fillColor', color);
        }
      }))
    }, {
      name: 'shadow',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shadow', 'pixmagix'),
      icon: 'circle-half-stroke',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ShadowPicker, {
        value: pencilShadow,
        onChange: function onChange(value) {
          return setEditor('pencilShadow', value);
        }
      }))
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    qrCodeSize: state.editor.qrCodeSize,
    qrCodeText: state.editor.qrCodeText,
    qrCodePadding: state.editor.qrCodePadding,
    qrCodeECL: state.editor.qrCodeECL,
    pencilColor: state.editor.pencilColor,
    pencilShadow: state.editor.pencilShadow,
    fillColor: state.editor.fillColor,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_5__.addLayer
})(AddQRCode));

/***/ }),

/***/ "./src/editor/components/sidebar-left/add-text.jsx":
/*!*********************************************************!*\
  !*** ./src/editor/components/sidebar-left/add-text.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/lists.js */ "./src/editor/utils/lists.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









var AddText = function AddText(_ref) {
  var canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    layer = _ref.layer,
    newText = _ref.newText,
    fontFamily = _ref.fontFamily,
    fontSize = _ref.fontSize,
    fontStyle = _ref.fontStyle,
    fontWeight = _ref.fontWeight,
    textAlign = _ref.textAlign,
    lineHeight = _ref.lineHeight,
    charSpacing = _ref.charSpacing,
    underline = _ref.underline,
    pencilWidth = _ref.pencilWidth,
    pencilColor = _ref.pencilColor,
    pencilShadow = _ref.pencilShadow,
    fillColor = _ref.fillColor,
    setEditor = _ref.setEditor,
    addLayer = _ref.addLayer,
    setLayerProps = _ref.setLayerProps;
  var onChangeWithUpdateSize = function onChangeWithUpdateSize(editorState, property) {
    return function (value) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setEditor(editorState, value);
        if (layer && (layer.type === 'i-text' || layer.type === 'text')) {
          var _setLayerProps;
          var options = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.createLayerObject)(_objectSpread(_objectSpread({}, layer), {}, _defineProperty({}, property, value)));
          setLayerProps(layer.id, (_setLayerProps = {}, _defineProperty(_setLayerProps, property, value), _defineProperty(_setLayerProps, "width", options.width), _defineProperty(_setLayerProps, "height", options.height), _setLayerProps));
        }
      });
    };
  };
  var onChange = function onChange(editorState, property) {
    return function (value) {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        setEditor(editorState, value);
        if (layer && (layer.type === 'i-text' || layer.type === 'text')) {
          setLayerProps(layer.id, property, value);
        }
      });
    };
  };
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Text', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    placeholder: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Write Text Here...', 'pixmagix'),
    value: newText,
    onChange: function onChange(value) {
      return setEditor('newText', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    block: true,
    active: true,
    onClick: function onClick() {
      var name = newText.substring(0, 20).replace(/\n/g, ' ').trim();
      name = name.length < newText.length ? name + '...' : name;
      var object = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.createLayerObject)({
        type: 'i-text',
        name: name,
        text: newText,
        left: canvasWidth / 2,
        top: canvasHeight / 2,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        textAlign: textAlign,
        lineHeight: lineHeight,
        charSpacing: charSpacing,
        underline: underline,
        strokeWidth: pencilWidth,
        stroke: pencilColor,
        fill: fillColor,
        shadow: pencilShadow
      });
      addLayer(object);
    }
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Text', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'font',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font', 'pixmagix'),
      icon: 'font',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Size', 'pixmagix'),
        value: fontSize,
        onChange: onChangeWithUpdateSize('fontSize', 'fontSize'),
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.MIN_FONT_SIZE,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.MAX_FONT_SIZE,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Line Height', 'pixmagix'),
        value: lineHeight,
        onChange: onChangeWithUpdateSize('lineHeight', 'lineHeight'),
        min: 0.01,
        max: 4,
        step: 0.01
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Character Spacing', 'pixmagix'),
        value: charSpacing,
        onChange: onChangeWithUpdateSize('charSpacing', 'charSpacing'),
        min: 0,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.MAX_FONT_SIZE,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Family', 'pixmagix'),
        options: _utils_lists_js__WEBPACK_IMPORTED_MODULE_5__.webSafeFonts,
        value: fontFamily,
        onChange: onChangeWithUpdateSize('fontFamily', 'fontFamily')
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.MulticheckButtons, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Style', 'pixmagix'),
        items: [{
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bold', 'pixmagix'),
          icon: 'bold',
          value: fontWeight === 'bold',
          onChange: function onChange(value) {
            var weight = value ? 'bold' : 'normal';
            onChangeWithUpdateSize('fontWeight', 'fontWeight')(weight);
          }
        }, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Italic', 'pixmagix'),
          icon: 'italic',
          value: fontStyle === 'italic',
          onChange: function onChange(value) {
            var style = value ? 'italic' : 'normal';
            onChangeWithUpdateSize('fontStyle', 'fontStyle')(style);
          }
        }, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Underline', 'pixmagix'),
          icon: 'underline',
          value: underline,
          onChange: onChange('underline', 'underline')
        }]
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.RadioButtons, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Align', 'pixmagix'),
        options: [{
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Left', 'pixmagix'),
          icon: 'align-left',
          value: 'left'
        }, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center', 'pixmagix'),
          icon: 'align-center',
          value: 'center'
        }, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Right', 'pixmagix'),
          icon: 'align-right',
          value: 'right'
        }, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Justify', 'pixmagix'),
          icon: 'align-justify',
          value: 'justify'
        }],
        value: textAlign,
        onChange: onChange('textAlign', 'textAlign')
      }))
    }, {
      name: 'stroke',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Width', 'pixmagix'),
        value: pencilWidth,
        onChange: onChange('pencilWidth', 'strokeWidth'),
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.PENCIL_MIN_WIDTH,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.PENCIL_MAX_WIDTH,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Color', 'pixmagix'),
        color: pencilColor,
        onChange: onChange('pencilColor', 'stroke')
      }))
    }, {
      name: 'fill',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'pixmagix'),
      icon: 'fill',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill Color', 'pixmagix'),
        color: fillColor,
        onChange: onChange('fillColor', 'fill')
      }))
    }, {
      name: 'shadow',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shadow', 'pixmagix'),
      icon: 'circle-half-stroke',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ShadowPicker, {
        value: pencilShadow,
        onChange: onChange('pencilShadow', 'shadow')
      }))
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  var activeLayer = state.editor.activeLayers[0];
  var layer = activeLayer ? state.data.present.layers[activeLayer] : null;
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    layer: layer,
    newText: state.editor.newText,
    fontFamily: state.editor.fontFamily,
    fontSize: state.editor.fontSize,
    fontStyle: state.editor.fontStyle,
    fontWeight: state.editor.fontWeight,
    textAlign: state.editor.textAlign,
    lineHeight: state.editor.lineHeight,
    charSpacing: state.editor.charSpacing,
    underline: state.editor.underline,
    pencilWidth: state.editor.pencilWidth,
    pencilColor: state.editor.pencilColor,
    pencilShadow: state.editor.pencilShadow,
    fillColor: state.editor.fillColor
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__.setEditor,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_8__.addLayer,
  setLayerProps: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_8__.setLayerProps
})(AddText));

/***/ }),

/***/ "./src/editor/components/sidebar-left/crop-canvas.jsx":
/*!************************************************************!*\
  !*** ./src/editor/components/sidebar-left/crop-canvas.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/lists.js */ "./src/editor/utils/lists.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");









var CropCanvas = function CropCanvas(_ref) {
  var cropAspectRatio = _ref.cropAspectRatio,
    cropScale = _ref.cropScale,
    cropPanX = _ref.cropPanX,
    cropPanY = _ref.cropPanY,
    canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    setEditor = _ref.setEditor,
    cropCanvas = _ref.cropCanvas;
  var size = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getCropShapeSize)(canvasWidth, canvasHeight, cropAspectRatio, cropScale);
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Crop Canvas', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Aspect Ratio', 'pixmagix'),
    value: cropAspectRatio,
    options: _utils_lists_js__WEBPACK_IMPORTED_MODULE_4__.cropAspectRatios,
    onChange: function onChange(value) {
      return setEditor('cropAspectRatio', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scale', 'pixmagix'),
    value: cropScale,
    onChange: function onChange(value) {
      return setEditor('cropScale', value);
    },
    min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.MIN_CROP_SCALE,
    max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.MAX_CROP_SCALE,
    step: 0.01
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "number",
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'pixmagix'),
    value: size.x,
    onChange: function onChange(value) {}
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "number",
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Height', 'pixmagix'),
    value: size.y,
    onChange: function onChange(value) {}
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "number",
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pan X', 'pixmagix'),
    value: cropPanX,
    onChange: function onChange(value) {
      return setEditor('cropPanX', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "number",
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pan Y', 'pixmagix'),
    value: cropPanY,
    onChange: function onChange(value) {
      return setEditor('cropPanY', value);
    }
  })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    block: true,
    active: true,
    onClick: function onClick() {
      (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.batch)(function () {
        cropCanvas(size.x, size.y, canvasWidth / 2 + cropPanX, canvasHeight / 2 + cropPanY);
        setEditor({
          cropScale: 1,
          cropPanX: 0,
          cropPanY: 0
        });
      });
    }
  }, (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Crop', 'pixmagix'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    cropAspectRatio: state.editor.cropAspectRatio,
    cropScale: state.editor.cropScale,
    cropPanX: state.editor.cropPanX,
    cropPanY: state.editor.cropPanY,
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_7__.setEditor,
  cropCanvas: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_8__.cropCanvas
})(CropCanvas));

/***/ }),

/***/ "./src/editor/components/sidebar-left/draw-path.jsx":
/*!**********************************************************!*\
  !*** ./src/editor/components/sidebar-left/draw-path.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");






var DrawPath = function DrawPath(_ref) {
  var isDrawingMode = _ref.isDrawingMode,
    pathType = _ref.pathType,
    pencilWidth = _ref.pencilWidth,
    pencilColor = _ref.pencilColor,
    pencilShadow = _ref.pencilShadow,
    setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Draw Path', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Path Type', 'pixmagix'),
    value: pathType,
    options: [{
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cubic Bezier', 'pixmagix'),
      value: 'cubic'
    }, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Quadratic Bezier', 'pixmagix'),
      value: 'quadratic'
    }, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Polyline', 'pixmagix'),
      value: 'polyline'
    }, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Polygon', 'pixmagix'),
      value: 'polygon'
    }],
    onChange: function onChange(value) {
      return setEditor({
        pathType: value,
        isDrawingMode: false
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    block: true,
    active: isDrawingMode,
    onClick: function onClick() {
      return setEditor('isDrawingMode', !isDrawingMode);
    }
  }, isDrawingMode ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stop Drawing', 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Start Drawing', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'stroke',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Width', 'pixmagix'),
        value: pencilWidth,
        onChange: function onChange(value) {
          return setEditor('pencilWidth', value);
        },
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.PENCIL_MIN_WIDTH,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.PENCIL_MAX_WIDTH,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Color', 'pixmagix'),
        color: pencilColor,
        onChange: function onChange(color) {
          return setEditor('pencilColor', color);
        }
      }))
    }, {
      name: 'shadow',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shadow', 'pixmagix'),
      icon: 'circle-half-stroke',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ShadowPicker, {
        value: pencilShadow,
        onChange: function onChange(value) {
          return setEditor('pencilShadow', value);
        }
      }))
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    isDrawingMode: state.editor.isDrawingMode,
    pathType: state.editor.pathType,
    pencilWidth: state.editor.pencilWidth,
    pencilColor: state.editor.pencilColor,
    pencilShadow: state.editor.pencilShadow
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor
})(DrawPath));

/***/ }),

/***/ "./src/editor/components/sidebar-left/draw-shape.jsx":
/*!***********************************************************!*\
  !*** ./src/editor/components/sidebar-left/draw-shape.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_shapes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/shapes.js */ "./src/editor/utils/shapes.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");







var DrawShape = function DrawShape(_ref) {
  var drawnShape = _ref.drawnShape,
    isDrawingMode = _ref.isDrawingMode,
    pencilWidth = _ref.pencilWidth,
    pencilColor = _ref.pencilColor,
    pencilShadow = _ref.pencilShadow,
    fillColor = _ref.fillColor,
    setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Shape', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.LibrarySelect, {
    itemType: "svg",
    svgAttrs: {
      fill: 'none',
      stroke: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.EDITOR_COLOR,
      strokeWidth: 8
    },
    items: _utils_shapes_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: drawnShape,
    onChange: function onChange(_ref2) {
      var name = _ref2.name;
      return setEditor('drawnShape', name);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    block: true,
    active: isDrawingMode,
    onClick: function onClick() {
      return setEditor('isDrawingMode', !isDrawingMode);
    }
  }, isDrawingMode ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stop Drawing', 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Start Drawing', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'stroke',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Width', 'pixmagix'),
        value: pencilWidth,
        onChange: function onChange(value) {
          return setEditor('pencilWidth', value);
        },
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.PENCIL_MIN_WIDTH,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.PENCIL_MAX_WIDTH,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Color', 'pixmagix'),
        color: pencilColor,
        onChange: function onChange(color) {
          return setEditor('pencilColor', color);
        }
      }))
    }, {
      name: 'fill',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill', 'pixmagix'),
      icon: 'fill',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill Color', 'pixmagix'),
        color: fillColor,
        onChange: function onChange(color) {
          return setEditor('fillColor', color);
        }
      }))
    }, {
      name: 'shadow',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shadow', 'pixmagix'),
      icon: 'circle-half-stroke',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ShadowPicker, {
        value: pencilShadow,
        onChange: function onChange(value) {
          return setEditor('pencilShadow', value);
        }
      }))
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    drawnShape: state.editor.drawnShape,
    isDrawingMode: state.editor.isDrawingMode,
    pencilWidth: state.editor.pencilWidth,
    pencilColor: state.editor.pencilColor,
    pencilShadow: state.editor.pencilShadow,
    fillColor: state.editor.fillColor
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_6__.setEditor
})(DrawShape));

/***/ }),

/***/ "./src/editor/components/sidebar-left/free-hand-draw.jsx":
/*!***************************************************************!*\
  !*** ./src/editor/components/sidebar-left/free-hand-draw.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");






var FreeHandDraw = function FreeHandDraw(_ref) {
  var isDrawingMode = _ref.isDrawingMode,
    pencilType = _ref.pencilType,
    pencilWidth = _ref.pencilWidth,
    pencilColor = _ref.pencilColor,
    pencilShadow = _ref.pencilShadow,
    pencilDecimate = _ref.pencilDecimate,
    pencilDensity = _ref.pencilDensity,
    pencilDotWidth = _ref.pencilDotWidth,
    pencilDotWidthVariance = _ref.pencilDotWidthVariance,
    pencilRandomOpacity = _ref.pencilRandomOpacity,
    setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Free Hand Draw', 'pixmagix')
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Select, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pencil Type', 'pixmagix'),
    options: [{
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pencil', 'pixmagix'),
      value: 'pencil'
    }, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Circle', 'pixmagix'),
      value: 'circle'
    }, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Spray', 'pixmagix'),
      value: 'spray'
    }],
    value: pencilType,
    onChange: function onChange(value) {
      return setEditor('pencilType', value);
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Button, {
    block: true,
    active: isDrawingMode,
    onClick: function onClick() {
      return setEditor('isDrawingMode', !isDrawingMode);
    }
  }, isDrawingMode ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stop Drawing', 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Start Drawing', 'pixmagix'))), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'stroke',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Width', 'pixmagix'),
        value: pencilWidth,
        onChange: function onChange(value) {
          return setEditor('pencilWidth', value);
        },
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.PENCIL_MIN_WIDTH,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.PENCIL_MAX_WIDTH,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Color', 'pixmagix'),
        color: pencilColor,
        onChange: function onChange(color) {
          return setEditor('pencilColor', color);
        }
      }))
    }, pencilType !== 'circle' && {
      name: 'settings',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'pixmagix'),
      icon: 'gear',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, pencilType === 'pencil' ? /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Distance of Path Nodes', 'wprembrant'),
        min: 1,
        max: 200,
        step: 1,
        value: pencilDecimate,
        onChange: function onChange(value) {
          return setEditor('pencilDecimate', value);
        }
      }) : pencilType === 'spray' ? /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Density', 'wprembrant'),
        min: 1,
        max: 100,
        step: 1,
        value: pencilDensity,
        onChange: function onChange(value) {
          return setEditor('pencilDensity', value);
        }
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Dot Width', 'wprembrant'),
        min: 1,
        max: 20,
        step: 1,
        value: pencilDotWidth,
        onChange: function onChange(value) {
          return setEditor('pencilDotWidth', value);
        }
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Dot Width Variance', 'wprembrant'),
        min: 1,
        max: 20,
        step: 1,
        value: pencilDotWidthVariance,
        onChange: function onChange(value) {
          return setEditor('pencilDotWidthVariance', value);
        }
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Random Opacity', 'wprembrant'),
        checked: pencilRandomOpacity,
        onChange: function onChange(value) {
          return setEditor('pencilRandomOpacity', value);
        }
      })) : null)
    }, {
      name: 'shadow',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shadow', 'pixmagix'),
      icon: 'circle-half-stroke',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ShadowPicker, {
        value: pencilShadow,
        onChange: function onChange(value) {
          return setEditor('pencilShadow', value);
        }
      }))
    }].filter(function (item) {
      return !!item;
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    isDrawingMode: state.editor.isDrawingMode,
    pencilType: state.editor.pencilType,
    pencilWidth: state.editor.pencilWidth,
    pencilColor: state.editor.pencilColor,
    pencilShadow: state.editor.pencilShadow,
    pencilDecimate: state.editor.pencilDecimate,
    pencilDensity: state.editor.pencilDensity,
    pencilDotWidth: state.editor.pencilDotWidth,
    pencilDotWidthVariance: state.editor.pencilDotWidthVariance,
    pencilRandomOpacity: state.editor.pencilRandomOpacity
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor
})(FreeHandDraw));

/***/ }),

/***/ "./src/editor/components/sidebar-right.jsx":
/*!*************************************************!*\
  !*** ./src/editor/components/sidebar-right.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _sidebar_right_settings_project_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-right/settings-project.jsx */ "./src/editor/components/sidebar-right/settings-project.jsx");
/* harmony import */ var _sidebar_right_layer_list_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar-right/layer-list.jsx */ "./src/editor/components/sidebar-right/layer-list.jsx");
/* harmony import */ var _sidebar_right_settings_layer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-right/settings-layer.jsx */ "./src/editor/components/sidebar-right/settings-layer.jsx");






var SidebarRight = function SidebarRight(_ref) {
  var isSidebarRightOpened = _ref.isSidebarRightOpened,
    setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-sidebarright"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-sidebarright__toggle",
    onClick: function onClick() {
      return setEditor('isSidebarRightOpened', !isSidebarRightOpened);
    }
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: isSidebarRightOpened ? 'angle-right' : 'angle-left'
  })), isSidebarRightOpened && /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-sidebarright__inner"
  }, /*#__PURE__*/React.createElement(_sidebar_right_settings_project_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_sidebar_right_layer_list_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_sidebar_right_settings_layer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    isSidebarRightOpened: state.editor.isSidebarRightOpened
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_2__.setEditor
})(SidebarRight));

/***/ }),

/***/ "./src/editor/components/sidebar-right/layer-actions.jsx":
/*!***************************************************************!*\
  !*** ./src/editor/components/sidebar-right/layer-actions.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _utils_layer_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/layer-actions.js */ "./src/editor/utils/layer-actions.js");




var LayerActions = function LayerActions(props) {
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "pixmagix-sidebarright__layeractions"
  }, (0,_utils_layer_actions_js__WEBPACK_IMPORTED_MODULE_3__["default"])(props).map(function (_ref) {
    var name = _ref.name,
      label = _ref.label,
      icon = _ref.icon,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: name,
      label: label,
      icon: icon,
      small: true,
      disabled: disabled !== null && disabled !== void 0 && disabled() ? true : undefined,
      onClick: onClick
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    layers: state.data.present.layers,
    layerIds: state.data.present.layerIds,
    activeLayers: state.editor.activeLayers
  };
}, {
  setData: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_2__.setData,
  addLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_2__.addLayer,
  removeLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_2__.removeLayer,
  replaceLayer: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_2__.replaceLayer,
  setLayerProps: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_2__.setLayerProps
})(LayerActions));

/***/ }),

/***/ "./src/editor/components/sidebar-right/layer-item.jsx":
/*!************************************************************!*\
  !*** ./src/editor/components/sidebar-right/layer-item.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/lists.js */ "./src/editor/utils/lists.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var LayerItem = function LayerItem(_ref) {
  var id = _ref.id,
    type = _ref.type,
    name = _ref.name,
    activeLayers = _ref.activeLayers,
    setEditor = _ref.setEditor,
    setLayerProps = _ref.setLayerProps;
  var shapeType = _utils_lists_js__WEBPACK_IMPORTED_MODULE_4__.shapeTypes[type] || {};
  return /*#__PURE__*/React.createElement("li", {
    className: "pixmagix-sidebarright__layeritem"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "pixmagix-sidebarright__layeritem-inner"
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Layer', 'pixmagix'),
    icon: shapeType.icon,
    small: true,
    active: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.includes)(activeLayers, id),
    onClick: function onClick(_ref2) {
      var ctrlKey = _ref2.ctrlKey,
        metaKey = _ref2.metaKey;
      var newIds = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.includes)(activeLayers, id) ? [] : [id];
      if (activeLayers.length > 1) {
        newIds = [id];
      }
      if (ctrlKey || metaKey) {
        newIds = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.includes)(activeLayers, id) ? activeLayers.filter(function (_id) {
          return _id !== id;
        }) : (0,lodash__WEBPACK_IMPORTED_MODULE_3__.uniq)(activeLayers.concat([id]));
      }
      setEditor({
        activeLayers: newIds,
        isDrawingMode: false
      });
    }
  }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Input, {
    placeholder: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layer Name...', 'pixmagix'),
    value: name || shapeType.label,
    onChange: function onChange(value) {
      return setLayerProps(id, 'name', value);
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state, _ref3) {
  var id = _ref3.id;
  return _objectSpread(_objectSpread({}, state.data.present.layers[id] || {}), {}, {
    activeLayers: state.editor.activeLayers
  });
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor,
  setLayerProps: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_6__.setLayerProps
})(LayerItem));

/***/ }),

/***/ "./src/editor/components/sidebar-right/layer-list.jsx":
/*!************************************************************!*\
  !*** ./src/editor/components/sidebar-right/layer-list.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layer_item_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layer-item.jsx */ "./src/editor/components/sidebar-right/layer-item.jsx");
/* harmony import */ var _layer_actions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layer-actions.jsx */ "./src/editor/components/sidebar-right/layer-actions.jsx");





var LayerList = function LayerList(_ref) {
  var _ref$layerIds = _ref.layerIds,
    layerIds = _ref$layerIds === void 0 ? [] : _ref$layerIds;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Widget, {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layers', 'pixmagix')
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pixmagix-sidebarright__layerlist"
  }, layerIds.length ? layerIds.map(function (id) {
    return /*#__PURE__*/React.createElement(_layer_item_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      id: id
    });
  }) : null), /*#__PURE__*/React.createElement(_layer_actions_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    layerIds: state.data.present.layerIds
  };
})(LayerList));

/***/ }),

/***/ "./src/editor/components/sidebar-right/settings-layer.jsx":
/*!****************************************************************!*\
  !*** ./src/editor/components/sidebar-right/settings-layer.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/utils.js */ "./src/editor/utils/utils.js");
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../utils/lists.js */ "./src/editor/utils/lists.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











var _imageFilters = _utils_lists_js__WEBPACK_IMPORTED_MODULE_8__.imageFilters.map(function (item) {
  return {
    name: item.name,
    label: item.label,
    src: (editor_globals__WEBPACK_IMPORTED_MODULE_5__.images_folder || '') + 'filter-' + item.name.toLowerCase() + '.jpg'
  };
});
var SettingsLayer = function SettingsLayer(_ref) {
  var _ref$layer = _ref.layer,
    layer = _ref$layer === void 0 ? {} : _ref$layer,
    activeLayers = _ref.activeLayers,
    setLayerProps = _ref.setLayerProps;
  if (!(activeLayers !== null && activeLayers !== void 0 && activeLayers.length)) {
    return null;
  }
  var id = layer.id,
    type = layer.type,
    left = layer.left,
    top = layer.top,
    scaleX = layer.scaleX,
    scaleY = layer.scaleY,
    skewX = layer.skewX,
    skewY = layer.skewY,
    angle = layer.angle,
    width = layer.width,
    height = layer.height,
    radius = layer.radius,
    rx = layer.rx,
    stroke = layer.stroke,
    strokeWidth = layer.strokeWidth,
    fill = layer.fill,
    shadow = layer.shadow,
    opacity = layer.opacity,
    globalCompositeOperation = layer.globalCompositeOperation,
    filters = layer.filters,
    text = layer.text,
    fontSize = layer.fontSize,
    fontFamily = layer.fontFamily,
    fontStyle = layer.fontStyle,
    fontWeight = layer.fontWeight,
    textAlign = layer.textAlign,
    lineHeight = layer.lineHeight,
    charSpacing = layer.charSpacing,
    underline = layer.underline,
    size = layer.size,
    qrPadding = layer.qrPadding,
    ecl = layer.ecl;
  var onTransform = function onTransform(property) {
    return function (value) {
      if (activeLayers.length === 1) {
        setLayerProps(id, property, value);
      } else {
        // multiselection
      }
    };
  };
  var tabs = [{
    name: 'transform',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Transform', 'pixmagix'),
    icon: 'sliders',
    content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Translate X', 'pixmagix'),
      value: left,
      onChange: onTransform('left'),
      min: -4000,
      max: 4000
    }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Translate Y', 'pixmagix'),
      value: top,
      onChange: onTransform('top'),
      min: -4000,
      max: 4000
    })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Scale X', 'pixmagix'),
      value: scaleX,
      onChange: onTransform('scaleX'),
      min: 0.1,
      max: 10,
      step: 0.1
    }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Scale Y', 'pixmagix'),
      value: scaleY,
      onChange: onTransform('scaleY'),
      min: 0.1,
      max: 10,
      step: 0.1
    })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Skew X', 'pixmagix'),
      value: skewX,
      onChange: onTransform('skewX'),
      min: -100,
      max: 100
    }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Skew Y', 'pixmagix'),
      value: skewY,
      onChange: onTransform('skewY'),
      min: -100,
      max: 100
    })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
      type: "number",
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Angle', 'pixmagix'),
      value: angle,
      onChange: onTransform('angle'),
      min: -360,
      max: 360
    }))
  }];
  if (activeLayers.length > 1) {
    return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Widget, {
      tabs: tabs
    });
  }
  switch (type) {
    case 'rect':
      tabs.push({
        name: 'dimensions',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Dimensions', 'pixmagix'),
        icon: 'square',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "number",
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Width', 'pixmagix'),
          value: width,
          onChange: function onChange(value) {
            return setLayerProps(id, 'width', value);
          }
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "number",
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Height', 'pixmagix'),
          value: height,
          onChange: function onChange(value) {
            return setLayerProps(id, 'height', value);
          }
        })), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "number",
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Corner Radius', 'pixmagix'),
          value: rx,
          onChange: function onChange(value) {
            return setLayerProps(id, {
              rx: value,
              ry: value
            });
          }
        }))
      });
      break;
    case 'circle':
      tabs.push({
        name: 'dimensions',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Dimensions', 'pixmagix'),
        icon: 'circle',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "number",
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Radius', 'pixmagix'),
          value: radius,
          onChange: function onChange(value) {
            return setLayerProps(id, 'radius', value);
          }
        }))
      });
      break;
    case 'ellipse':
      tabs.push({
        name: 'dimensions',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Dimensions', 'pixmagix'),
        icon: 'circle',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "number",
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Width', 'pixmagix'),
          value: width,
          onChange: function onChange(value) {
            return setLayerProps(id, {
              width: value,
              rx: value / 2
            });
          }
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "number",
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Height', 'pixmagix'),
          value: height,
          onChange: function onChange(value) {
            return setLayerProps(id, {
              height: value,
              ry: value / 2
            });
          }
        })))
      });
      break;
    case 'path':
      break;
    case 'polygon':
      break;
    case 'polyline':
      break;
    case 'text':
    case 'i-text':
      tabs.push({
        name: 'font',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Font', 'pixmagix'),
        icon: 'font',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Textarea, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Text', 'pixmagix'),
          value: text,
          onChange: function onChange(value) {
            return setLayerProps(id, 'text', value);
          }
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Font Size', 'pixmagix'),
          value: fontSize,
          onChange: function onChange(value) {
            return setLayerProps(id, 'fontSize', value);
          },
          min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.MIN_FONT_SIZE,
          max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.MAX_FONT_SIZE,
          step: 1
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Line Height', 'pixmagix'),
          value: lineHeight,
          onChange: function onChange(value) {
            return setLayerProps(id, 'lineHeight', value);
          },
          min: 0.01,
          max: 4,
          step: 0.01
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Character Spacing', 'pixmagix'),
          value: charSpacing,
          onChange: function onChange(value) {
            return setLayerProps(id, 'charSpacing', value);
          },
          min: 0,
          max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.MAX_FONT_SIZE,
          step: 1
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Select, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Font Family', 'pixmagix'),
          options: _utils_lists_js__WEBPACK_IMPORTED_MODULE_8__.webSafeFonts,
          value: fontFamily,
          onChange: function onChange(value) {
            return setLayerProps(id, 'fontFamily', value);
          }
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.MulticheckButtons, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Text Style', 'pixmagix'),
          items: [{
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Bold', 'pixmagix'),
            icon: 'bold',
            value: fontWeight === 'bold',
            onChange: function onChange(value) {
              var weight = value ? 'bold' : 'normal';
              setLayerProps(id, 'fontWeight', weight);
            }
          }, {
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Italic', 'pixmagix'),
            icon: 'italic',
            value: fontStyle === 'italic',
            onChange: function onChange(value) {
              var style = value ? 'italic' : 'normal';
              setLayerProps(id, 'fontStyle', style);
            }
          }, {
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Underline', 'pixmagix'),
            icon: 'underline',
            value: underline,
            onChange: function onChange(value) {
              return setLayerProps(id, 'underline', value);
            }
          }]
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.RadioButtons, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Text Align', 'pixmagix'),
          options: [{
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Left', 'pixmagix'),
            icon: 'align-left',
            value: 'left'
          }, {
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Center', 'pixmagix'),
            icon: 'align-center',
            value: 'center'
          }, {
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Right', 'pixmagix'),
            icon: 'align-right',
            value: 'right'
          }, {
            label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Justify', 'pixmagix'),
            icon: 'align-justify',
            value: 'justify'
          }],
          value: textAlign,
          onChange: function onChange(value) {
            return setLayerProps(id, 'textAlign', value);
          }
        }))
      });
      break;
    case 'qrcode':
      tabs.push({
        name: 'settings',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('QR Code Settings', 'pixmagix'),
        icon: 'qrcode',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Input, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Text', 'pixmagix'),
          placeholder: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Write Text Here...', 'pixmagix'),
          value: text,
          onChange: function onChange(value) {
            return setLayerProps(id, 'text', value);
          }
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Size', 'pixmagix'),
          value: size,
          onChange: function onChange(value) {
            return setLayerProps(id, 'size', value);
          },
          min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.QRCODE_MIN_SIZE,
          max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.QRCODE_MAX_SIZE,
          step: 1
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Padding', 'pixmagix'),
          value: qrPadding,
          onChange: function onChange(value) {
            return setLayerProps(id, 'qrPadding', value);
          },
          min: 0,
          max: 20,
          step: 1
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Select, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Error Correction Level', 'pixmagix'),
          options: [{
            label: 'L',
            value: 'L'
          }, {
            label: 'M',
            value: 'M'
          }, {
            label: 'Q',
            value: 'Q'
          }, {
            label: 'H',
            value: 'H'
          }],
          value: ecl,
          onChange: function onChange(value) {
            return setLayerProps(id, 'ecl', value);
          }
        }))
      }, {
        name: 'color',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Color', 'pixmagix'),
        icon: 'paintbrush',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: "c"
        }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Color', 'pixmagix'),
          color: stroke,
          onChange: function onChange(color) {
            return setLayerProps(id, 'stroke', color);
          }
        }))
      }, {
        name: 'background',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Background', 'pixmagix'),
        icon: 'fill',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: "b"
        }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Background', 'pixmagix'),
          color: fill,
          onChange: function onChange(color) {
            return setLayerProps(id, 'fill', color);
          }
        }))
      });
      break;
    case 'image':
      tabs.push({
        name: 'filters',
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Filters', 'pixmagix'),
        icon: 'wand-magic-sparkles',
        content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.LibrarySelect, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add Filters', 'pixmagix'),
          itemType: "image",
          items: _imageFilters,
          multiple: true,
          value: filters.map(function (filter) {
            return filter.type;
          }),
          onChange: function onChange(value) {
            var filters = value.map(function (name) {
              var _options$controls;
              var options = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_utils_lists_js__WEBPACK_IMPORTED_MODULE_8__.imageFilters, {
                name: name
              });
              if (!options) {
                return;
              }
              var output = {
                type: options.name
              };
              (_options$controls = options.controls) === null || _options$controls === void 0 ? void 0 : _options$controls.forEach(function (control) {
                output[control.name] = control["default"];
              });
              return output;
            }).filter(function (item) {
              return !!item;
            });
            setLayerProps(id, 'filters', filters);
          }
        }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Repeater, {
          label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Filters', 'pixmagix'),
          items: filters.map(function (filter) {
            var options = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_utils_lists_js__WEBPACK_IMPORTED_MODULE_8__.imageFilters, {
              name: filter.type
            });
            var index = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.findIndex)(filters, {
              type: filter.type
            });
            var controls = (options.controls || []).map(function (control) {
              return _objectSpread(_objectSpread({}, control), {}, {
                value: filter[control.name],
                defValue: control["default"],
                onChange: function onChange(value) {
                  var newList = filters.slice();
                  if (index >= 0) {
                    newList[index] = _objectSpread(_objectSpread({}, newList[index]), {}, _defineProperty({}, control.name, value));
                  }
                  setLayerProps(id, 'filters', newList);
                  console.log(newList);
                }
              });
            });
            return _objectSpread(_objectSpread({}, options), {}, {
              onMove: function onMove(dir) {
                var newList = (0,array_move__WEBPACK_IMPORTED_MODULE_3__.arrayMoveImmutable)(filters, index, dir === 'up' ? index - 1 : index + 1);
                setLayerProps(id, 'filters', newList);
              },
              onRemove: function onRemove() {
                var newList = filters.filter(function (_ref2) {
                  var type = _ref2.type;
                  return type !== filter.type;
                });
                setLayerProps(id, 'filters', newList);
              },
              controls: controls
            });
          })
        }))
      });
      break;
    default:
      break;
  }
  if ((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.isSVGElement)(type)) {
    tabs.push({
      name: 'stroke',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Stroke', 'pixmagix'),
      icon: 'paintbrush',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Stroke Width', 'pixmagix'),
        value: strokeWidth,
        onChange: function onChange(value) {
          return setLayerProps(id, 'strokeWidth', value);
        },
        min: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.PENCIL_MIN_WIDTH,
        max: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.PENCIL_MAX_WIDTH,
        step: 1
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Stroke Color', 'pixmagix'),
        color: stroke,
        onChange: function onChange(color) {
          return setLayerProps(id, 'stroke', color);
        }
      }))
    }, {
      name: 'fill',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Fill', 'pixmagix'),
      icon: 'fill',
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Fill Color', 'pixmagix'),
        color: fill,
        onChange: function onChange(color) {
          return setLayerProps(id, 'fill', color);
        }
      }))
    });
  }
  tabs.push({
    name: 'shadow',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Shadow', 'pixmagix'),
    icon: 'circle-half-stroke',
    content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.ShadowPicker, {
      value: shadow,
      onChange: function onChange(value) {
        return setLayerProps(id, 'shadow', value);
      }
    }))
  }, {
    name: 'blending',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Blending', 'pixmagix'),
    icon: 'blender',
    content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Range, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Opacity', 'pixmagix'),
      value: opacity,
      onChange: function onChange(value) {
        return setLayerProps(id, 'opacity', value);
      },
      min: 0,
      max: 1,
      step: 0.01
    }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Select, {
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Blending Mode', 'pixmagix'),
      options: _utils_lists_js__WEBPACK_IMPORTED_MODULE_8__.blendingModes,
      value: globalCompositeOperation,
      onChange: function onChange(value) {
        return setLayerProps(id, 'globalCompositeOperation', value);
      }
    }))
  });
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_4__.Widget, {
    tabs: tabs
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    layer: state.data.present.layers[state.editor.activeLayers[0]],
    activeLayers: state.editor.activeLayers
  };
}, {
  setLayerProps: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_10__.setLayerProps
})(SettingsLayer));

/***/ }),

/***/ "./src/editor/components/sidebar-right/settings-project.jsx":
/*!******************************************************************!*\
  !*** ./src/editor/components/sidebar-right/settings-project.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-data.js */ "./src/editor/redux/actions-data.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");






var SettingsProject = function SettingsProject(_ref) {
  var canvasWidth = _ref.canvasWidth,
    canvasHeight = _ref.canvasHeight,
    canvasBackground = _ref.canvasBackground,
    projectName = _ref.projectName,
    setData = _ref.setData,
    setEditor = _ref.setEditor;
  return /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Widget, {
    tabs: [{
      name: 'settings',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'pixmagix'),
        value: projectName,
        onChange: function onChange(value) {
          return setEditor('projectName', value);
        }
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.InputGroup, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
        type: "number",
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'pixmagix'),
        value: canvasWidth,
        onChange: function onChange(value) {
          return setData('canvasWidth', value);
        },
        min: 100,
        max: 4000
      }), /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.Input, {
        type: "number",
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Height', 'pixmagix'),
        value: canvasHeight,
        onChange: function onChange(value) {
          return setData('canvasHeight', value);
        },
        min: 100,
        max: 4000
      })))
    }, {
      name: 'background',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background', 'pixmagix'),
      content: /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background', 'pixmagix'),
        color: canvasBackground,
        onChange: function onChange(color) {
          return setData('canvasBackground', color);
        }
      }))
    }]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    canvasWidth: state.data.present.canvasWidth,
    canvasHeight: state.data.present.canvasHeight,
    canvasBackground: state.data.present.canvasBackground,
    projectName: state.editor.projectName
  };
}, {
  setData: _redux_actions_data_js__WEBPACK_IMPORTED_MODULE_4__.setData,
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_5__.setEditor
})(SettingsProject));

/***/ }),

/***/ "./src/editor/components/toolbar.jsx":
/*!*******************************************!*\
  !*** ./src/editor/components/toolbar.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toolbar_tools_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar/tools.jsx */ "./src/editor/components/toolbar/tools.jsx");

var Toolbar = function Toolbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pixmagix-toolbar"
  }, /*#__PURE__*/React.createElement(_toolbar_tools_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toolbar);

/***/ }),

/***/ "./src/editor/components/toolbar/tools.jsx":
/*!*************************************************!*\
  !*** ./src/editor/components/toolbar/tools.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements */ "elements");
/* harmony import */ var elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/lists.js */ "./src/editor/utils/lists.js");
/* harmony import */ var _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../redux/actions-editor.js */ "./src/editor/redux/actions-editor.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var Item = function Item(_ref) {
  var name = _ref.name,
    label = _ref.label,
    icon = _ref.icon,
    active = _ref.active,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('pixmagix-toolbar__item', _defineProperty({}, "pixmagix-toolbar__item-".concat(name), name))
  }, /*#__PURE__*/React.createElement(elements__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: label,
    icon: {
      icon: icon,
      fixedWidth: true,
      size: 'lg'
    },
    active: active,
    onClick: onClick
  }));
};
var Tools = function Tools(_ref2) {
  var activeTool = _ref2.activeTool,
    setEditor = _ref2.setEditor;
  return /*#__PURE__*/React.createElement("ul", {
    className: "pixmagix-toolbar__list"
  }, _utils_lists_js__WEBPACK_IMPORTED_MODULE_3__.toolbarItems.map(function (item) {
    return /*#__PURE__*/React.createElement(Item, _extends({
      key: item.name,
      active: item.name === activeTool,
      onClick: function onClick() {
        return setEditor({
          activeTool: item.name === activeTool ? '' : item.name,
          isSidebarLeftOpened: true,
          isDrawingMode: false
        });
      }
    }, item));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    activeTool: state.editor.activeTool
  };
}, {
  setEditor: _redux_actions_editor_js__WEBPACK_IMPORTED_MODULE_4__.setEditor
})(Tools));

/***/ }),

/***/ "./src/editor/redux/actions-data.js":
/*!******************************************!*\
  !*** ./src/editor/redux/actions-data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLayer: () => (/* binding */ addLayer),
/* harmony export */   clearHistory: () => (/* binding */ clearHistory),
/* harmony export */   cropCanvas: () => (/* binding */ cropCanvas),
/* harmony export */   redo: () => (/* binding */ redo),
/* harmony export */   removeLayer: () => (/* binding */ removeLayer),
/* harmony export */   replaceLayer: () => (/* binding */ replaceLayer),
/* harmony export */   setData: () => (/* binding */ setData),
/* harmony export */   setDatasWithAddLayer: () => (/* binding */ setDatasWithAddLayer),
/* harmony export */   setLayerProps: () => (/* binding */ setLayerProps),
/* harmony export */   undo: () => (/* binding */ undo)
/* harmony export */ });
/* harmony import */ var redux_undo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js");


/**
 * Set any data.
 * @since 1.0.0
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

var setData = function setData(key, value) {
  return {
    type: 'SET_DATA',
    payload: {
      key: key,
      value: value
    }
  };
};

/**
 * Add new layer, and set other datas at the same time.
 * This special action is nedded when we add new image,
 * and resize canvas at the same time,
 * for undo/redo to don't put two object to stack.
 * @since 1.0.0
 * @param {object} data Datas to add with forEach.
 * @param {object|array} layer New layer, or an array of new layers to add.
 * @return {object}
 */

var setDatasWithAddLayer = function setDatasWithAddLayer(data, layer) {
  return {
    type: 'SET_DATAS_WITH_ADD_LAYER',
    payload: {
      data: data,
      layer: layer
    }
  };
};

/**
 * Resize canvas, and move all layers to its new position.
 * This special action is also needed for undo/redo.
 * @since 1.0.0
 * @param {number} width
 * @param {number} height
 * @param {number} left
 * @param {number} top
 * @return {object}
 */

var cropCanvas = function cropCanvas(width, height, left, top) {
  return {
    type: 'CROP_CANVAS',
    payload: {
      width: width,
      height: height,
      left: left,
      top: top
    }
  };
};

/**
 * Update one, or more properties of an existing layer, or layers.
 * @since 1.0.0
 * @param {string|object} id
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

var setLayerProps = function setLayerProps(id, key, value) {
  return {
    type: 'SET_LAYER_PROPS',
    payload: {
      id: id,
      key: key,
      value: value
    }
  };
};

/**
 * Add new layer.
 * @since 1.0.0
 * @param {object|array} layer
 * @return {object}
 */

var addLayer = function addLayer(layer) {
  return {
    type: 'ADD_LAYER',
    payload: layer
  };
};

/**
 * Remove existing layer.
 * @since 1.0.0
 * @param {string|array} id
 * @return {object}
 */

var removeLayer = function removeLayer(id) {
  return {
    type: 'REMOVE_LAYER',
    payload: {
      id: id
    }
  };
};

/**
 * Replace layers.
 * @since 1.0.0
 * @param {object|array} newLayer
 * @param {string|array} oldLayerId
 * @return {object}
 */

var replaceLayer = function replaceLayer(newLayer, oldLayerId) {
  return {
    type: 'REPLACE_LAYER',
    payload: {
      newLayer: newLayer,
      oldLayerId: oldLayerId
    }
  };
};

/**
 *
 * @since 1.0.0
 * @return {object}
 */

var undo = function undo() {
  return redux_undo__WEBPACK_IMPORTED_MODULE_0__.ActionCreators.undo();
};

/**
 *
 * @since 1.0.0
 * @return {object}
 */

var redo = function redo() {
  return redux_undo__WEBPACK_IMPORTED_MODULE_0__.ActionCreators.redo();
};

/**
 *
 * @since 1.0.0
 * @return {object}
 */

var clearHistory = function clearHistory() {
  return redux_undo__WEBPACK_IMPORTED_MODULE_0__.ActionCreators.clearHistory();
};

/***/ }),

/***/ "./src/editor/redux/actions-editor.js":
/*!********************************************!*\
  !*** ./src/editor/redux/actions-editor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGuide: () => (/* binding */ createGuide),
/* harmony export */   sendNotice: () => (/* binding */ sendNotice),
/* harmony export */   setEditor: () => (/* binding */ setEditor),
/* harmony export */   updateGuide: () => (/* binding */ updateGuide)
/* harmony export */ });
/**
 *
 * @since 1.0.0
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

var setEditor = function setEditor(key, value) {
  return {
    type: 'SET_EDITOR',
    payload: {
      key: key,
      value: value
    }
  };
};

/**
 *
 * @since 1.0.0
 * @param {string} message
 * @param {string} type
 * @return {object}
 */

var sendNotice = function sendNotice(message, type) {
  return {
    type: 'SEND_NOTICE',
    payload: {
      message: message,
      type: type
    }
  };
};

/**
 *
 * @since 1.0.0
 * @param {string} id
 * @param {string} orientation
 * @param {number} position
 * @return {object}
 */

var createGuide = function createGuide(id, orientation, position) {
  return {
    type: 'CREATE_GUIDE',
    payload: {
      id: id,
      orientation: orientation,
      position: position
    }
  };
};

/**
 *
 * @since 1.0.0
 * @param {string} id
 * @param {number} position
 * @return {object}
 */

var updateGuide = function updateGuide(id, position) {
  return {
    type: 'UPDATE_GUIDE',
    payload: {
      id: id,
      position: position
    }
  };
};

/***/ }),

/***/ "./src/editor/redux/initial-state-data.js":
/*!************************************************!*\
  !*** ./src/editor/redux/initial-state-data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./src/editor/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * 
 * @since 1.0.0
 * @param {object} project
 * @param {string} mediaUrl
 * @param {number} mediaWidth
 * @param {number} mediaHeight
 * @return {object}
 */

var getInitialStateData = function getInitialStateData(_ref, mediaUrl, mediaWidth, mediaHeight) {
  var _ref$canvasWidth = _ref.canvasWidth,
    canvasWidth = _ref$canvasWidth === void 0 ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANVAS_WIDTH : _ref$canvasWidth,
    _ref$canvasHeight = _ref.canvasHeight,
    canvasHeight = _ref$canvasHeight === void 0 ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANVAS_HEIGHT : _ref$canvasHeight,
    canvasBackground = _ref.canvasBackground,
    _ref$layers = _ref.layers,
    layers = _ref$layers === void 0 ? [] : _ref$layers;
  if (mediaUrl) {
    var object = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.createLayerObject)({
      type: 'image',
      src: mediaUrl,
      left: mediaWidth / 2,
      top: mediaHeight / 2
    });
    return {
      canvasWidth: mediaWidth || _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANVAS_WIDTH,
      canvasHeight: mediaHeight || _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANVAS_HEIGHT,
      layers: _defineProperty({}, object.id, object),
      layerIds: [object.id]
    };
  }
  var layerIds = layers.map(function (layer) {
    return layer.id;
  });
  var layersById = layers.reduce(function (memo, layer) {
    memo[layer.id] = layer;
    return memo;
  }, {});
  return {
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,
    canvasBackground: canvasBackground,
    layers: layersById,
    layerIds: layerIds
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInitialStateData);

/***/ }),

/***/ "./src/editor/redux/initial-state-editor.js":
/*!**************************************************!*\
  !*** ./src/editor/redux/initial-state-editor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor-globals */ "editor-globals");
/* harmony import */ var editor_globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(editor_globals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/constants.js */ "./src/editor/utils/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {string} title
 * @param {number} mediaId
 * @param {string} mediaUrl
 * @param {string} revisionUrl
 * @return {object}
 */

var getInitialStateEditor = function getInitialStateEditor(id, title, mediaId, mediaUrl, revisionUrl) {
  var data = window.localStorage.getItem('pixmagixEditor');
  var stateFromLocalStorage = {};
  try {
    stateFromLocalStorage = JSON.parse(data);
  } catch (e) {
    // Doing nothing...
  }
  return _objectSpread({
    // Project
    projectId: id,
    projectName: title,
    mediaId: mediaId,
    mediaUrl: mediaUrl,
    thumbnail: editor_globals__WEBPACK_IMPORTED_MODULE_1__.thumbnails_folder + 'project-' + id + '.jpg',
    revisionURL: revisionUrl || '',
    imageDataURL: '',
    svgString: '',
    fileFormat: 'jpeg',
    // 'jpeg', or 'png'
    isSaving: false,
    selectedMedia: null,
    fullScreen: false,
    // Actives
    activeTool: '',
    activeModal: '',
    activeLayers: [],
    // Canvas
    canvasMode: 'select',
    // 'select', or 'panning'
    canvasElementWidth: 0,
    canvasElementHeight: 0,
    canvasZoom: 1,
    canvasPanX: 0,
    canvasPanY: 0,
    // Sidebars
    isSidebarLeftOpened: true,
    isSidebarRightOpened: true,
    // Rulers
    showRulers: true,
    showRulerCursors: false,
    rulerCursorPosition: {
      x: 0,
      y: 0
    },
    guides: [],
    snapObjects: false,
    snapToGrid: false,
    gridSize: 10,
    // Pencil
    isDrawingMode: false,
    pencilType: 'pencil',
    pencilColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.PENCIL_DEFAULT_COLOR,
    pencilWidth: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.PENCIL_DEFAULT_WIDTH,
    pencilShadow: null,
    pencilDecimate: 20,
    pencilDensity: 20,
    pencilDotWidth: 2,
    pencilDotWidthVariance: 1,
    pencilRandomOpacity: false,
    fillColor: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.FILL_DEFAULT_COLOR,
    drawnShape: 'square',
    pathType: 'cubic',
    // Text
    newText: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'pixmagix'),
    fontFamily: 'Arial',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 1.16,
    charSpacing: 0,
    underline: false,
    // QR Code
    qrCodeText: '',
    qrCodeSize: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.QRCODE_DEFAULT_SIZE,
    qrCodePadding: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.QRCODE_DEFAULT_PADDING,
    qrCodeECL: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.QRCODE_DEFAULT_ECL,
    // Crop
    cropAspectRatio: '?:?',
    cropScale: 1,
    cropPanX: 0,
    cropPanY: 0
  }, stateFromLocalStorage);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInitialStateEditor);

/***/ }),

/***/ "./src/editor/redux/reducer-data.js":
/*!******************************************!*\
  !*** ./src/editor/redux/reducer-data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initial_state_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-state-data.js */ "./src/editor/redux/initial-state-data.js");




/**
 * 
 * @since 1.0.0
 * @param {object} project
 * @param {string} mediaUrl
 * @param {number} mediaWidth
 * @param {number} mediaHeight
 */

var getReducerData = function getReducerData(project, mediaUrl, mediaWidth, mediaHeight) {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createReducer)((0,_initial_state_data_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project, mediaUrl, mediaWidth, mediaHeight), function (builder) {
    builder.addCase('SET_DATA', function (state, _ref) {
      var payload = _ref.payload;
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(payload.key)) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(payload.key, function (v, k) {
          state[k] = v;
        });
      } else {
        state[payload.key] = payload.value;
      }
    });
    builder.addCase('SET_DATAS_WITH_ADD_LAYER', function (state, _ref2) {
      var payload = _ref2.payload;
      var data = payload.data,
        layer = payload.layer;
      // Set data.
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(data, function (v, k) {
        state[k] = v;
      });
      // Add layer.
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(layer)) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(layer, function (item) {
          if (item.id && !state.layers[item.id]) {
            state.layers[item.id] = item;
            state.layerIds.push(item.id);
          }
        });
      } else {
        if (layer.id && !state.layers[layer.id]) {
          state.layers[layer.id] = layer;
          state.layerIds.push(layer.id);
        }
      }
    });
    builder.addCase('CROP_CANVAS', function (state, _ref3) {
      var payload = _ref3.payload;
      var width = payload.width,
        height = payload.height,
        left = payload.left,
        top = payload.top;
      state.canvasWidth = width;
      state.canvasHeight = height;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(state.layerIds, function (id) {
        if (!state.layers[id]) {
          return;
        }
        state.layers[id].left = state.layers[id].left - left + width / 2;
        state.layers[id].top = state.layers[id].top - top + height / 2;
      });
    });
    builder.addCase('SET_LAYER_PROPS', function (state, _ref4) {
      var payload = _ref4.payload;
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(payload.id)) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(payload.id, function (props, id) {
          if (state.layers[id]) {
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(props, function (v, k) {
              state.layers[id][k] = v;
            });
          }
        });
      } else {
        if (state.layers[payload.id]) {
          if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(payload.key)) {
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(payload.key, function (v, k) {
              state.layers[payload.id][k] = v;
            });
          } else {
            state.layers[payload.id][payload.key] = payload.value;
          }
        }
      }
    });
    builder.addCase('ADD_LAYER', function (state, _ref5) {
      var payload = _ref5.payload;
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(payload)) {
        payload.forEach(function (layer) {
          if (layer !== null && layer !== void 0 && layer.id && !state.layers[layer.id]) {
            state.layers[layer.id] = layer;
            state.layerIds.push(layer.id);
          }
        });
      } else {
        if (payload !== null && payload !== void 0 && payload.id && !state.layers[payload.id]) {
          state.layers[payload.id] = payload;
          state.layerIds.push(payload.id);
        }
      }
    });
    builder.addCase('REMOVE_LAYER', function (state, _ref6) {
      var payload = _ref6.payload;
      var ids = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(payload.id) ? payload.id : [payload.id];
      state.layers = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(state.layers, ids);
      state.layerIds = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(state.layerIds, function (id) {
        return !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(ids, id);
      });
    });
    builder.addCase('REPLACE_LAYER', function (state, _ref7) {
      var payload = _ref7.payload;
      // remove old layers
      var oldIds = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(payload.oldLayerId) ? payload.oldLayerId : [payload.oldLayerId];
      state.layers = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(state.layers, oldIds);
      state.layerIds = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(state.layerIds, function (id) {
        return !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(oldIds, id);
      });
      // add new layers
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(payload.newLayer)) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(payload.newLayer, function (layer) {
          var newId = layer === null || layer === void 0 ? void 0 : layer.id;
          if (!state.layers[newId]) {
            state.layers[newId] = layer;
            state.layerIds.push(newId);
          }
        });
      } else {
        var _payload$newLayer;
        var newId = (_payload$newLayer = payload.newLayer) === null || _payload$newLayer === void 0 ? void 0 : _payload$newLayer.id;
        if (!state.layers[newId]) {
          state.layers[newId] = payload.newLayer;
          state.layerIds.push(newId);
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getReducerData);

/***/ }),

/***/ "./src/editor/redux/reducer-editor.js":
/*!********************************************!*\
  !*** ./src/editor/redux/reducer-editor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initial_state_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-state-editor.js */ "./src/editor/redux/initial-state-editor.js");




/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {string} title
 * @param {number} mediaId
 * @param {string} mediaUrl
 * @param {string} revisionUrl
 */

var getReducerEditor = function getReducerEditor(id, title, mediaId, mediaUrl, revisionUrl) {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createReducer)((0,_initial_state_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id, title, mediaId, mediaUrl, revisionUrl), function (builder) {
    builder.addCase('SET_EDITOR', function (state, _ref) {
      var payload = _ref.payload;
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(payload.key)) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(payload.key, function (v, k) {
          state[k] = v;
        });
      } else {
        state[payload.key] = payload.value;
      }
    });
    builder.addCase('SEND_NOTICE', function (state, _ref2) {
      var payload = _ref2.payload;
      state.notification = payload;
    });
    builder.addCase('CREATE_GUIDE', function (state, _ref3) {
      var payload = _ref3.payload;
      if (!state.guides) {
        state.guides = [];
      }
      if (payload.id) {
        state.guides.push({
          id: payload.id,
          orientation: payload.orientation,
          position: payload.position || 0
        });
      }
    });
    builder.addCase('UPDATE_GUIDE', function (state, _ref4) {
      var payload = _ref4.payload;
      var guides = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.current)(state.guides));
      var guide = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(guides, {
        id: payload.id
      });
      if (guide) {
        guide.position = payload.position;
      }
      state.guides = guides;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getReducerEditor);

/***/ }),

/***/ "./src/editor/redux/reducer.js":
/*!*************************************!*\
  !*** ./src/editor/redux/reducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_undo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js");
/* harmony import */ var _reducer_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer-data.js */ "./src/editor/redux/reducer-data.js");
/* harmony import */ var _reducer_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer-editor.js */ "./src/editor/redux/reducer-editor.js");





/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {string} title
 * @param {object} project
 * @param {object} media
 */

var getReducer = function getReducer(id, title, project, media) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
    data: (0,redux_undo__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_reducer_data_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project, media.url, media.width, media.height)),
    editor: (0,_reducer_editor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id, title, media.id || project.mediaId, media.url || project.mediaUrl, project.revisionURL || media.revision)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getReducer);

/***/ }),

/***/ "./src/editor/utils/constants.js":
/*!***************************************!*\
  !*** ./src/editor/utils/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/editor/utils/keyboard-shortcuts.js":
/*!************************************************!*\
  !*** ./src/editor/utils/keyboard-shortcuts.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Globals', 'pixmagix'),
  description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
  items: [{
    combination: 'Ctrl + Alt + N',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open New Project', 'pixmagix')
  }, {
    combination: 'Ctrl + S',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Save Project', 'pixmagix')
  }, {
    combination: 'Ctrl + Z',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Undo', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + Z',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Redo', 'pixmagix')
  }]
}, {
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toolbar', 'pixmagix'),
  description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'pixmagix'),
  items: [{
    combination: 'M',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Image', 'pixmagix')
  }, {
    combination: 'T',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Text', 'pixmagix')
  }, {
    combination: 'I',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Icon', 'pixmagix')
  }, {
    combination: 'Q',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add QR Code', 'pixmagix')
  }, {
    combination: 'S',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Draw Shape', 'pixmagix')
  }, {
    combination: 'D',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free-Hand Draw', 'pixmagix')
  }, {
    combination: 'P',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Draw Path', 'pixmagix')
  }, {
    combination: 'C',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Crop Canvas', 'pixmagix')
  }]
}, {
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ruler Menu', 'pixmagix'),
  items: [{
    combination: 'Ctrl + Shift + R',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle Rulers', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + C',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle Cursors', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + G',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear Guides', 'pixmagix')
  }]
}, {
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options Menu', 'pixmagix'),
  items: [{
    combination: 'Ctrl + Shift + O',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open Project', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + S',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Save Project as', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + E',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Export Image to Media', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + I',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Download as Image', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + V',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Download as SVG', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + F',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle Fullscreen Mode', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + K',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open This Modal', 'pixmagix')
  }, {
    combination: 'Ctrl + Shift + H',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open Help Modal', 'pixmagix')
  }]
}, {
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layer Actions', 'pixmagix'),
  items: [{
    combination: 'Ctrl + ↑',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Layer up in Stack', 'pixmagix')
  }, {
    combination: 'Ctrl + ↓',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Layer Down in Stack', 'pixmagix')
  }, {
    combination: 'Ctrl + L',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lock/Unlock Layer', 'pixmagix')
  }, {
    combination: 'Ctrl + T',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle Layer is Visible', 'pixmagix')
  }, {
    combination: 'Ctrl + D',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duplicate Layer', 'pixmagix')
  }, {
    combination: 'Ctrl + G',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group/Ungroup Layers', 'pixmagix')
  }, {
    combination: 'Delete',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Layer', 'pixmagix')
  }]
}, {
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Selection', 'pixmagix'),
  items: [{
    combination: 'Ctrl',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Multiselection', 'pixmagix')
  }, {
    combination: 'Escape',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear Selection', 'pixmagix')
  }]
}, {
  title: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Drawing', 'pixmagix'),
  items: [{
    combination: 'Enter',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start/Stop Drawing', 'pixmagix')
  }, {
    combination: 'Shift',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Draw a Straight Line (Only When Using Pencil Brush)', 'pixmagix')
  }, {
    combination: 'Ctrl',
    description: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Kepp Aspect Ratio While Drawing Shape', 'pixmagix')
  }]
}]);

/***/ }),

/***/ "./src/editor/utils/layer-actions.js":
/*!*******************************************!*\
  !*** ./src/editor/utils/layer-actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/editor/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * 
 * @since 1.0.0
 * @return {array}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var layers = _ref.layers,
    layerIds = _ref.layerIds,
    activeLayers = _ref.activeLayers,
    setData = _ref.setData,
    addLayer = _ref.addLayer,
    removeLayer = _ref.removeLayer,
    replaceLayer = _ref.replaceLayer,
    setLayerProps = _ref.setLayerProps;
  var firstLayer = layers[activeLayers[0]];
  var isOneGroupSelected = activeLayers.length === 1 && (firstLayer === null || firstLayer === void 0 ? void 0 : firstLayer.type) === 'group';
  var is1stVisible = !!(firstLayer !== null && firstLayer !== void 0 && firstLayer.visible);
  var is1stLocked = !(firstLayer !== null && firstLayer !== void 0 && firstLayer.selectable);
  return [{
    name: 'move-up',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Move Layer up', 'pixmagix'),
    icon: 'angle-up',
    disabled: function disabled() {
      return (activeLayers === null || activeLayers === void 0 ? void 0 : activeLayers.length) !== 1 || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex)(layerIds, function (id) {
        return id === (firstLayer === null || firstLayer === void 0 ? void 0 : firstLayer.id);
      }) === 0;
    },
    onClick: function onClick() {
      var index = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex)(layerIds, function (id) {
        return id === (firstLayer === null || firstLayer === void 0 ? void 0 : firstLayer.id);
      });
      var newList = (0,array_move__WEBPACK_IMPORTED_MODULE_2__.arrayMoveImmutable)(layerIds, index, index - 1);
      setData('layerIds', newList);
    }
  }, {
    name: 'move-down',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Move Layer Down', 'pixmagix'),
    icon: 'angle-down',
    disabled: function disabled() {
      return (activeLayers === null || activeLayers === void 0 ? void 0 : activeLayers.length) !== 1 || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex)(layerIds, function (id) {
        return id === (firstLayer === null || firstLayer === void 0 ? void 0 : firstLayer.id);
      }) === layerIds.length - 1;
    },
    onClick: function onClick() {
      var index = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex)(layerIds, function (id) {
        return id === (firstLayer === null || firstLayer === void 0 ? void 0 : firstLayer.id);
      });
      var newList = (0,array_move__WEBPACK_IMPORTED_MODULE_2__.arrayMoveImmutable)(layerIds, index, index + 1);
      setData('layerIds', newList);
    }
  }, {
    name: 'lock',
    label: is1stLocked ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Unlock Layer', 'Unlock Layers', activeLayers.length, 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Lock Layer', 'Lock Layers', activeLayers.length, 'pixmagix'),
    icon: !is1stLocked || !(activeLayers !== null && activeLayers !== void 0 && activeLayers.length) ? 'lock' : 'lock-open',
    disabled: function disabled() {
      return !(activeLayers !== null && activeLayers !== void 0 && activeLayers.length);
    },
    onClick: function onClick() {
      return setLayerProps((0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(activeLayers, function (memo, id) {
        memo[id] = {
          selectable: is1stLocked
        };
        return memo;
      }, {}));
    }
  }, {
    name: 'visible',
    label: is1stVisible ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Set Layer to Hidden', 'Set Layers to Hidden', activeLayers.length, 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Set Layer to Visible', 'Set Layers to Visible', activeLayers.length, 'pixmagix'),
    icon: is1stVisible ? 'eye-slash' : 'eye',
    disabled: function disabled() {
      return !(activeLayers !== null && activeLayers !== void 0 && activeLayers.length);
    },
    onClick: function onClick() {
      return setLayerProps((0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(activeLayers, function (memo, id) {
        memo[id] = {
          visible: !is1stVisible
        };
        return memo;
      }, {}));
    }
  }, {
    name: 'duplicate',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Dubplicate Layer', 'Dubplicate Layers', activeLayers.length, 'pixmagix'),
    icon: 'copy',
    disabled: function disabled() {
      return !(activeLayers !== null && activeLayers !== void 0 && activeLayers.length);
    },
    onClick: function onClick() {
      var newLayers = activeLayers.map(function (id) {
        return _objectSpread(_objectSpread({}, layers[id]), {}, {
          id: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.createUniqueId)()
        });
      });
      addLayer(newLayers);
    }
  }, {
    name: 'group',
    label: isOneGroupSelected ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ungroup Layers', 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Group Layers', 'pixmagix'),
    icon: isOneGroupSelected ? 'object-ungroup' : 'object-group',
    disabled: function disabled() {
      var _layers$activeLayers$;
      return (activeLayers === null || activeLayers === void 0 ? void 0 : activeLayers.length) <= 1 && ((_layers$activeLayers$ = layers[activeLayers[0]]) === null || _layers$activeLayers$ === void 0 ? void 0 : _layers$activeLayers$.type) !== 'group';
    },
    onClick: function onClick() {
      if (isOneGroupSelected) {
        var group = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.createLayerObject)(firstLayer, true);
        var newLayers = group._objects.map(function (obj) {
          var _util$qrDecompose = fabric__WEBPACK_IMPORTED_MODULE_0__.util.qrDecompose(obj.calcTransformMatrix()),
            translateX = _util$qrDecompose.translateX,
            translateY = _util$qrDecompose.translateY,
            scaleX = _util$qrDecompose.scaleX,
            scaleY = _util$qrDecompose.scaleY,
            skewX = _util$qrDecompose.skewX,
            skewY = _util$qrDecompose.skewY,
            angle = _util$qrDecompose.angle;
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.createLayerObject)(_objectSpread(_objectSpread({}, obj.toObject()), {}, {
            left: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(translateX),
            top: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(translateY),
            scaleX: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(scaleX),
            scaleY: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(scaleY),
            skewX: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(skewX),
            skewY: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(skewY),
            angle: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toFixed)(angle)
          }));
        });
        replaceLayer(newLayers, firstLayer.id);
      } else {
        var _group = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.createLayerObject)({
          type: 'group',
          objects: activeLayers.map(function (id) {
            return layers[id];
          })
        });
        replaceLayer(_group, activeLayers);
      }
    }
  }, {
    name: 'remove',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Remove Layer', 'Remove Layers', activeLayers.length, 'pixmagix'),
    icon: 'xmark',
    disabled: function disabled() {
      return !(activeLayers !== null && activeLayers !== void 0 && activeLayers.length);
    },
    onClick: function onClick() {
      return removeLayer(activeLayers);
    }
  }];
});

/***/ }),

/***/ "./src/editor/utils/lists.js":
/*!***********************************!*\
  !*** ./src/editor/utils/lists.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachmentSizes: () => (/* binding */ attachmentSizes),
/* harmony export */   blendingModes: () => (/* binding */ blendingModes),
/* harmony export */   cropAspectRatios: () => (/* binding */ cropAspectRatios),
/* harmony export */   imageFilters: () => (/* binding */ imageFilters),
/* harmony export */   modals: () => (/* binding */ modals),
/* harmony export */   propsToSaveLocalStorage: () => (/* binding */ propsToSaveLocalStorage),
/* harmony export */   shapeTypes: () => (/* binding */ shapeTypes),
/* harmony export */   toolbarItems: () => (/* binding */ toolbarItems),
/* harmony export */   webSafeFonts: () => (/* binding */ webSafeFonts)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sidebar_left_add_image_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/sidebar-left/add-image.jsx */ "./src/editor/components/sidebar-left/add-image.jsx");
/* harmony import */ var _components_sidebar_left_add_text_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/sidebar-left/add-text.jsx */ "./src/editor/components/sidebar-left/add-text.jsx");
/* harmony import */ var _components_sidebar_left_add_icon_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/sidebar-left/add-icon.jsx */ "./src/editor/components/sidebar-left/add-icon.jsx");
/* harmony import */ var _components_sidebar_left_add_qrcode_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/sidebar-left/add-qrcode.jsx */ "./src/editor/components/sidebar-left/add-qrcode.jsx");
/* harmony import */ var _components_sidebar_left_draw_shape_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/sidebar-left/draw-shape.jsx */ "./src/editor/components/sidebar-left/draw-shape.jsx");
/* harmony import */ var _components_sidebar_left_free_hand_draw_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/sidebar-left/free-hand-draw.jsx */ "./src/editor/components/sidebar-left/free-hand-draw.jsx");
/* harmony import */ var _components_sidebar_left_draw_path_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/sidebar-left/draw-path.jsx */ "./src/editor/components/sidebar-left/draw-path.jsx");
/* harmony import */ var _components_sidebar_left_crop_canvas_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/sidebar-left/crop-canvas.jsx */ "./src/editor/components/sidebar-left/crop-canvas.jsx");
/* harmony import */ var _components_modals_import_media_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/modals/import-media.jsx */ "./src/editor/components/modals/import-media.jsx");
/* harmony import */ var _components_modals_open_project_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/modals/open-project.jsx */ "./src/editor/components/modals/open-project.jsx");
/* harmony import */ var _components_modals_save_as_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/modals/save-as.jsx */ "./src/editor/components/modals/save-as.jsx");
/* harmony import */ var _components_modals_export_media_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/modals/export-media.jsx */ "./src/editor/components/modals/export-media.jsx");
/* harmony import */ var _components_modals_replace_media_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/modals/replace-media.jsx */ "./src/editor/components/modals/replace-media.jsx");
/* harmony import */ var _components_modals_restore_media_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/modals/restore-media.jsx */ "./src/editor/components/modals/restore-media.jsx");
/* harmony import */ var _components_modals_download_image_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../components/modals/download-image.jsx */ "./src/editor/components/modals/download-image.jsx");
/* harmony import */ var _components_modals_download_svg_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../components/modals/download-svg.jsx */ "./src/editor/components/modals/download-svg.jsx");
/* harmony import */ var _components_modals_keyboard_shortcuts_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../components/modals/keyboard-shortcuts.jsx */ "./src/editor/components/modals/keyboard-shortcuts.jsx");
/* harmony import */ var _components_modals_help_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../components/modals/help.jsx */ "./src/editor/components/modals/help.jsx");


// Toolbar components.










// Modals.












/**
 * 
 * @since 1.0.0
 * @var {array}
 */

var toolbarItems = [{
  name: 'image',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Image', 'pixmagix'),
  icon: 'image',
  component: _components_sidebar_left_add_image_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: 'text',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Text', 'pixmagix'),
  icon: 'font',
  component: _components_sidebar_left_add_text_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: 'icon',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Icon', 'pixmagix'),
  icon: 'icons',
  component: _components_sidebar_left_add_icon_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'qrcode',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add QR Code', 'pixmagix'),
  icon: 'qrcode',
  component: _components_sidebar_left_add_qrcode_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: 'draw-shape',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Draw Shape', 'pixmagix'),
  icon: 'shapes',
  component: _components_sidebar_left_draw_shape_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: 'free-hand-draw',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free Hand Draw', 'pixmagix'),
  icon: 'pen',
  component: _components_sidebar_left_free_hand_draw_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: 'draw-path',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Draw Path', 'pixmagix'),
  icon: 'pen-nib',
  component: _components_sidebar_left_draw_path_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  name: 'crop',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Crop Canvas', 'pixmagix'),
  icon: 'crop',
  component: _components_sidebar_left_crop_canvas_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]
}];

/**
 *
 * @since 1.0.0
 * @var {object}
 */

var shapeTypes = {
  'rect': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rectangle', 'pixmagix'),
    icon: 'square'
  },
  'circle': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circle', 'pixmagix'),
    icon: 'circle'
  },
  'ellipse': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ellipse', 'pixmagix'),
    icon: 'circle'
  },
  'line': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line', 'pixmagix'),
    icon: 'star'
  },
  'path': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Path', 'pixmagix'),
    icon: 'star'
  },
  'polyline': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polyline', 'pixmagix'),
    icon: 'star'
  },
  'polygon': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polygon', 'pixmagix'),
    icon: 'star'
  },
  'i-text': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'pixmagix'),
    icon: 'font'
  },
  'image': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'pixmagix'),
    icon: 'image'
  },
  'qrcode': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('QR Code', 'pixmagix'),
    icon: 'qrcode'
  },
  'group': {
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group', 'pixmagix'),
    icon: 'layer-group'
  }
};

/**
 *
 * @since 1.0.0
 * @var {array}
 */

var webSafeFonts = [{
  label: 'Arial',
  value: 'Arial'
}, {
  label: 'Arial Black',
  value: 'Arial Black'
}, {
  label: 'Times New Roman',
  value: 'Times New Roman'
}, {
  label: 'Courier',
  value: 'Courier'
}, {
  label: 'Verdana',
  value: 'Verdana'
}, {
  label: 'Georgia',
  value: 'Georgia'
}, {
  label: 'Impact',
  value: 'Impact'
}, {
  label: 'Comic Sans MS',
  value: 'Comic Sans MS'
}];

/**
 *
 * @since 1.0.0
 * @var {array}
 */

var blendingModes = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'pixmagix'),
  value: 'source-over'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Source In', 'pixmagix'),
  value: 'source-in'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Source Out', 'pixmagix'),
  value: 'source-out'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Source Atop', 'pixmagix'),
  value: 'source-atop'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Destination Over', 'pixmagix'),
  value: 'destination-over'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Destination In', 'pixmagix'),
  value: 'destination-in'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Destination Out', 'pixmagix'),
  value: 'destination-out'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Destination Atop', 'pixmagix'),
  value: 'destination-atop'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lighter', 'pixmagix'),
  value: 'lighter'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy', 'pixmagix'),
  value: 'copy'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('XOR', 'pixmagix'),
  value: 'xor'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Multiply', 'pixmagix'),
  value: 'multiply'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Screen', 'pixmagix'),
  value: 'screen'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay', 'pixmagix'),
  value: 'overlay'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Darken', 'pixmagix'),
  value: 'darken'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lighten', 'pixmagix'),
  value: 'lighten'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Dodge', 'pixmagix'),
  value: 'color-dodge'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Burn', 'pixmagix'),
  value: 'color-burn'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hard Light', 'pixmagix'),
  value: 'hard-light'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Soft Light', 'pixmagix'),
  value: 'soft-light'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Difference', 'pixmagix'),
  value: 'difference'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Exclusion', 'pixmagix'),
  value: 'exclusion'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hue', 'pixmagix'),
  value: 'hue'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Saturation', 'pixmagix'),
  value: 'saturation'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'pixmagix'),
  value: 'color'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Luminosity', 'pixmagix'),
  value: 'luminosity'
}];

/**
 *
 * @since 1.0.0
 * @var {array}
 */

var cropAspectRatios = [{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Original', 'pixmagix'),
  value: '?:?'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'pixmagix'),
  value: '1:1'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('16:10 - Landscape', 'pixmagix'),
  value: '16:10'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('16:9 - Landscape', 'pixmagix'),
  value: '16:9'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4:3 - Landscape', 'pixmagix'),
  value: '4:3'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3:2 - Landscape', 'pixmagix'),
  value: '3:2'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10:16 - Portrait', 'pixmagix'),
  value: '10:16'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9:16 - Portrait', 'pixmagix'),
  value: '9:16'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3:4 - Portrait', 'pixmagix'),
  value: '3:4'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2:3 - Portrait', 'pixmagix'),
  value: '2:3'
}];

/**
 *
 * @since 1.0.0
 * @var {array}
 */

var imageFilters = [{
  name: 'Grayscale',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grayscale', 'pixmagix'),
  controls: [{
    type: 'select',
    name: 'mode',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mode', 'pixmagix'),
    "default": 'average',
    options: [{
      value: 'average',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Average', 'pixmagix')
    }, {
      value: 'lightness',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lightness', 'pixmagix')
    }, {
      value: 'luminosity',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Luminosity', 'pixmagix')
    }]
  }]
}, {
  name: 'Invert',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Invert', 'pixmagix'),
  controls: []
}, {
  name: 'Sepia',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sepia', 'pixmagix'),
  controls: []
}, {
  name: 'BlackWhite',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black/White', 'pixmagix'),
  controls: []
}, {
  name: 'Brownie',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brownie', 'pixmagix'),
  controls: []
}, {
  name: 'Vintage',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vintage', 'pixmagix'),
  controls: []
}, {
  name: 'Kodachrome',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Kodachrome', 'pixmagix'),
  controls: []
}, {
  name: 'Technicolor',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Technicolor', 'pixmagix'),
  controls: []
}, {
  name: 'Polaroid',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Polaroid', 'pixmagix'),
  controls: []
}, {
  name: 'RemoveColor',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Color', 'pixmagix'),
  controls: [{
    type: 'color',
    name: 'color',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'pixmagix'),
    disableAlpha: true,
    "default": '#FFFFFF'
  }, {
    type: 'range',
    name: 'distance',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Distance', 'pixmagix'),
    "default": 0.5,
    min: 0,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'Brightness',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brightness', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'brightness',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brightness', 'pixmagix'),
    "default": 0.4,
    min: -1,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'Gamma',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gamma', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'red',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Red', 'pixmagix'),
    "default": 2,
    min: 0.2,
    max: 4.2,
    step: 0.01
  }, {
    type: 'range',
    name: 'green',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Green', 'pixmagix'),
    "default": 2,
    min: 0.2,
    max: 4.2,
    step: 0.01
  }, {
    type: 'range',
    name: 'blue',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blue', 'pixmagix'),
    "default": 2,
    min: 0.2,
    max: 4.2,
    step: 0.01
  }]
}, {
  name: 'Contrast',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contrast', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'contrast',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contrast', 'pixmagix'),
    "default": 0.5,
    min: -1,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'Saturation',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Saturation', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'saturation',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Saturation', 'pixmagix'),
    "default": 0.5,
    min: -1,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'Vibrance',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vibrance', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'vibrance',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vibrance', 'pixmagix'),
    "default": 0.5,
    min: -1,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'HueRotation',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hue Rotation', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'rotation',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rotation', 'pixmagix'),
    "default": 1.5,
    min: -2,
    max: 2,
    step: 0.01
  }]
}, {
  name: 'Noise',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Noise', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'noise',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Noise', 'pixmagix'),
    "default": 40,
    min: 0,
    max: 1000,
    step: 1
  }]
}, {
  name: 'Pixelate',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pixelate', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'blocksize',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Size', 'pixmagix'),
    "default": 5,
    min: 2,
    max: 20,
    step: 1
  }]
}, {
  name: 'Blur',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur', 'pixmagix'),
  controls: [{
    type: 'range',
    name: 'blur',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur', 'pixmagix'),
    "default": 0.2,
    min: 0,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'Sharpen',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sharpen', 'pixmagix'),
  controls: []
}, {
  name: 'Emboss',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Emboss', 'pixmagix'),
  controls: [{
    type: 'checkbox',
    name: 'opaque',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opaque', 'pixmagix'),
    "default": true
  }]
}, {
  name: 'BlendColor',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blend Color', 'pixmagix'),
  controls: [{
    type: 'select',
    name: 'mode',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mode', 'pixmagix'),
    "default": 'add',
    options: [{
      value: 'add',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add', 'pixmagix')
    }, {
      value: 'diff',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Diff', 'pixmagix')
    }, {
      value: 'subtract',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtract', 'pixmagix')
    }, {
      value: 'multiply',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Multiply', 'pixmagix')
    }, {
      value: 'screen',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Screen', 'pixmagix')
    }, {
      value: 'lighten',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lighten', 'pixmagix')
    }, {
      value: 'darken',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Darken', 'pixmagix')
    }, {
      value: 'overlay',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay', 'pixmagix')
    }, {
      value: 'exclusion',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Exclusion', 'pixmagix')
    }, {
      value: 'tint',
      label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tint', 'pixmagix')
    }]
  }, {
    type: 'color',
    name: 'color',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'pixmagix'),
    disableAlpha: true,
    "default": '#008800'
  }, {
    type: 'range',
    name: 'alpha',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alpha', 'pixmagix'),
    "default": 1,
    min: 0,
    max: 1,
    step: 0.01
  }]
}, {
  name: 'Duotone',
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duotone', 'pixmagix'),
  controls: [{
    type: 'color',
    name: 'color1',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Dark', 'pixmagix'),
    disableAlpha: true,
    "default": '#000044'
  }, {
    type: 'color',
    name: 'color2',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Light', 'pixmagix'),
    disableAlpha: true,
    "default": '#FF8A8A'
  }]
}];

/**
 *
 * @since 1.0.0
 * @var {object}
 */

var modals = {
  'import-media': _components_modals_import_media_jsx__WEBPACK_IMPORTED_MODULE_9__["default"],
  'open-project': _components_modals_open_project_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],
  'save-as': _components_modals_save_as_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],
  'export-media': _components_modals_export_media_jsx__WEBPACK_IMPORTED_MODULE_12__["default"],
  'replace-media': _components_modals_replace_media_jsx__WEBPACK_IMPORTED_MODULE_13__["default"],
  'restore-media': _components_modals_restore_media_jsx__WEBPACK_IMPORTED_MODULE_14__["default"],
  'download-image': _components_modals_download_image_jsx__WEBPACK_IMPORTED_MODULE_15__["default"],
  'download-svg': _components_modals_download_svg_jsx__WEBPACK_IMPORTED_MODULE_16__["default"],
  'keyboard-shortcuts': _components_modals_keyboard_shortcuts_jsx__WEBPACK_IMPORTED_MODULE_17__["default"],
  'help': _components_modals_help_jsx__WEBPACK_IMPORTED_MODULE_18__["default"]
};

/**
 *
 * @since 1.0.0
 * @var {object}
 */

var attachmentSizes = {
  'thumbnail': (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail', 'pixmagix'),
  'medium': (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'pixmagix'),
  'medium_large': (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium Large', 'pixmagix'),
  'full': (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full', 'pixmagix')
};

/**
 *
 * @since 1.0.0
 * @var {array}
 */

var propsToSaveLocalStorage = ['fullScreen', 'fileFormat', 'snapToGrid', 'snapObjects', 'gridSize', 'showRulers', 'showRulerCursors', 'cropAspectRatio', 'pencilType', 'pencilWidth', 'pencilDecimate', 'pencilDensity', 'pencilDotWidth', 'pencilDotWidthVariance', 'pencilRandomOpacity', 'pencilColor', 'pencilShadow', 'fillColor', 'drawnShape', 'pathType', 'newText', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'textAlign', 'lineHeight', 'charSpacing', 'underline', 'qrCodeText', 'qrCodeSize', 'qrCodePadding', 'qrCodeECL'];

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

/***/ "./src/editor/utils/options-menu.js":
/*!******************************************!*\
  !*** ./src/editor/utils/options-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 * @since 1.0.0
 * @return {array}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var layerIds = _ref.layerIds,
    canvasBackground = _ref.canvasBackground,
    mediaId = _ref.mediaId,
    revisionURL = _ref.revisionURL,
    fullScreen = _ref.fullScreen,
    setEditor = _ref.setEditor;
  return [{
    name: 'open-project',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'open-project');
    }
  }, {
    name: 'save-as',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Save as', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'save-as');
    },
    disabled: function disabled() {
      return !(layerIds !== null && layerIds !== void 0 && layerIds.length) && !canvasBackground;
    }
  }, {
    name: 'divider'
  }, {
    name: 'export',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Export to Media', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'export-media');
    },
    disabled: function disabled() {
      return !(layerIds !== null && layerIds !== void 0 && layerIds.length) && !canvasBackground;
    }
  }, {
    name: 'replace',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace Media', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'replace-media');
    },
    disabled: function disabled() {
      return !mediaId;
    }
  }, {
    name: 'restore',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Restore Media', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'restore-media');
    },
    disabled: function disabled() {
      return !revisionURL;
    }
  }, {
    name: 'divider'
  }, {
    name: 'download-image',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Download as Image', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'download-image');
    },
    disabled: function disabled() {
      return !(layerIds !== null && layerIds !== void 0 && layerIds.length) && !canvasBackground;
    }
  }, {
    name: 'download-svg',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Download as SVG', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'download-svg');
    },
    disabled: function disabled() {
      return !(layerIds !== null && layerIds !== void 0 && layerIds.length) && !canvasBackground;
    }
  }, {
    name: 'divider'
  }, {
    name: 'fullscreen',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fullscreen Mode', 'pixmagix'),
    onClick: function onClick() {
      setEditor('fullScreen', !fullScreen);
    }
  }, {
    name: 'divider'
  }, {
    name: 'keyboard-shortcuts',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Keyboard Shortcuts', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'keyboard-shortcuts');
    }
  }, {
    name: 'help',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Help', 'pixmagix'),
    onClick: function onClick() {
      setEditor('activeModal', 'help');
    }
  }];
});

/***/ }),

/***/ "./src/editor/utils/ruler-menu.js":
/*!****************************************!*\
  !*** ./src/editor/utils/ruler-menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 * @since 1.0.0
 * @return {array}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var showRulers = _ref.showRulers,
    showRulerCursors = _ref.showRulerCursors,
    snapObjects = _ref.snapObjects,
    snapToGrid = _ref.snapToGrid,
    guides = _ref.guides,
    setEditor = _ref.setEditor;
  return [{
    name: 'show-rulers',
    label: showRulers ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide Rulers', 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Rulers', 'pixmagix'),
    onClick: function onClick() {
      return setEditor('showRulers', !showRulers);
    }
  }, {
    name: 'show-cursors',
    label: showRulerCursors ? (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide Cursors', 'pixmagix') : (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Cursors', 'pixmagix'),
    onClick: function onClick() {
      return setEditor('showRulerCursors', !showRulerCursors);
    },
    disabled: function disabled() {
      return !showRulers;
    }
  }, {
    name: 'clear-guides',
    label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear Guides', 'pixmagix'),
    onClick: function onClick() {
      return setEditor('guides', []);
    },
    disabled: function disabled() {
      return !(guides !== null && guides !== void 0 && guides.length);
    }
  } /*,{
    name:'snap-objects',
    label:snapObjects ? __('Turn Off Objects Snapping', 'pixmagix') : __('Snap Objects', 'pixmagix'),
    onClick:() => setEditor('snapObjects', !snapObjects)
    },{
    name:'snap-grid',
    label:snapToGrid ? __('Turn Off Snap to Grid', 'pixmagix') : __('Snap to Grid', 'pixmagix'),
    onClick:() => setEditor('snapToGrid', !snapToGrid)
    }*/];
});

/***/ }),

/***/ "./src/editor/utils/shapes.js":
/*!************************************!*\
  !*** ./src/editor/utils/shapes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wp-i18n */ "wp-i18n");
/* harmony import */ var wp_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wp_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * A collection of shapes.
 * @since 1.0.0
 * @var {array}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'pixmagix'),
  name: 'square',
  type: 'square'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circle', 'pixmagix'),
  name: 'circle',
  type: 'circle'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Triangle', 'pixmagix'),
  name: 'triangle',
  type: 'polygon',
  path: '50 0 100 100 0 100'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Diamond', 'pixmagix'),
  name: 'diamond',
  type: 'polygon',
  path: '50 0 100 50 50 100 0 50'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pentagon', 'pixmagix'),
  name: 'pentagon',
  type: 'polygon',
  path: '50 0 100 38 82 100 18 100 0 38'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hexagon', 'pixmagix'),
  name: 'hexagon',
  type: 'polygon',
  path: '50 0 93.3 25 93.3 75 50 100 6.7 75 6.7 25'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Point', 'pixmagix'),
  name: 'left-point',
  type: 'polygon',
  path: '25 0 100 0 100 100 25 100 0 50'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Point', 'pixmagix'),
  name: 'right-point',
  type: 'polygon',
  path: '0 0 75 0 100 50 75 100 0 100'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Chevron', 'pixmagix'),
  name: 'left-chevron',
  type: 'polygon',
  path: '100 0 75 50 100 100 25 100 0 50 25 0'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Chevron', 'pixmagix'),
  name: 'right-chevron',
  type: 'polygon',
  path: '75 0 100 50 75 100 0 100 25 50 0 0'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Trapezoid', 'pixmagix'),
  name: 'trapezoid',
  type: 'polygon',
  path: '20 0 80 0 100 100 0 100'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Parallelogram', 'pixmagix'),
  name: 'parallelogram',
  type: 'polygon',
  path: '25 0 100 0 75 100 0 100'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rabbet', 'pixmagix'),
  name: 'rabbet',
  type: 'polygon',
  path: '0 15 15 15 15 0 85 0 85 15 100 15 100 85 85 85 85 100 15 100 15 85 0 85'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star', 'pixmagix'),
  name: 'star',
  type: 'polygon',
  path: '100 38.44 63.91 35.63 50 0 36.09 35.63 0 38.44 27.66 62.81 18.91 100 50 79.84 81.09 100 72.34 62.81'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heart', 'pixmagix'),
  name: 'heart',
  type: 'path',
  path: 'M 100 31.72 C 100 17.66 88.44 6.25 74.06 6.25 C 63.13 6.25 53.75 12.97 50 22.34 C 46.25 12.97 36.88 6.25 25.94 6.25 C 11.56 6.25 0 17.66 0 31.72 C 0 31.87 0 33.13 0 33.59 C 0 59.84 51.88 93.75 51.88 93.75 C 51.88 93.75 100 59.84 100 33.59 C 100 33.13 100 32.03 100 31.72 Z'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blob', 'pixmagix'),
  name: 'blob',
  type: 'path',
  path: 'M 82.66 8.31 C 74.58 1.37 60.59 -4.12 53.24 4.17 C 47.09 11.11 51.28 21.26 45.46 28.43 C 36.7 39.23 22.19 22.32 10.87 31.39 C 0.56 39.61 -3.54 66.46 3.54 82.92 C 14.39 108.23 47.44 98.48 54.11 96.52 C 57.83 95.41 98.32 82.74 99.95 48.54 C 100.74 31.74 91.82 16.2 82.66 8.31 Z'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flower', 'pixmagix'),
  name: 'flower',
  type: 'path',
  path: 'M 85.54 49.97 L 92.65 42.86 C 102.46 33.05 102.46 17.15 92.65 7.35 C 82.84 -2.45 66.94 -2.45 57.13 7.36 L 50.04 14.46 L 42.88 7.36 C 36.54 0.99 27.28 -1.5 18.6 0.81 C 9.92 3.13 3.14 9.91 0.82 18.59 C -1.5 27.27 0.99 36.53 7.36 42.87 L 14.46 49.97 L 7.36 57.13 C -2.42 66.95 -2.4 82.82 7.39 92.61 C 17.19 102.41 33.06 102.42 42.88 92.65 L 49.98 85.55 L 57.13 92.58 C 66.94 102.36 82.82 102.35 92.62 92.55 C 102.41 82.76 102.43 66.88 92.65 57.07 Z'
}, {
  label: (0,wp_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sketch', 'pixmagix'),
  name: 'sketch',
  type: 'path',
  path: 'M 90.3 42.16 L 92.07 40.35 C 93.12 39.29 85.07 33.69 84.33 33.19 C 82.3 31.78 80.18 30.54 77.98 29.45 C 77.71 29.32 77.32 29.11 76.89 28.91 Q 78.85 26.78 80.84 24.68 C 81.88 23.58 73.84 18.02 73.09 17.52 C 71.07 16.11 68.96 14.86 66.76 13.78 L 66.44 13.61 L 67.97 11.88 C 69 10.7 61.01 5.25 60.22 4.72 C 58.21 3.31 56.09 2.05 53.89 0.97 C 53.3 0.69 51.35 -0.45 50.77 0.2 Q 35.98 17.04 19.91 32.66 C 11.29 41.03 1.7 50.16 0.01 62.85 C -0.12 63.78 1.46 65.07 1.92 65.45 C 3.74 67.13 5.7 68.65 7.76 70.01 C 9.78 71.42 11.89 72.67 14.09 73.76 C 14.8 74.09 16.48 75.11 17.22 74.53 L 19.5 72.78 C 21.09 74.87 26.06 78.08 26.83 78.6 L 28.47 79.67 C 26.81 81.76 25.19 83.86 23.59 85.99 C 22.59 87.32 30.48 92.57 31.34 93.14 C 33.35 94.55 35.47 95.8 37.67 96.89 C 38.33 97.2 40.12 98.27 40.8 97.67 L 50.97 88.57 C 51.88 91.45 66.98 101.64 68.19 99.77 L 100.07 50.97 C 100.76 49.9 95.3 45.31 90.3 42.16 Z'
}]);

/***/ }),

/***/ "./src/editor/utils/utils.js":
/*!***********************************!*\
  !*** ./src/editor/utils/utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   absolutePositionToPixel: () => (/* binding */ absolutePositionToPixel),
/* harmony export */   addQueryArgs: () => (/* binding */ addQueryArgs),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   createLayerObject: () => (/* binding */ createLayerObject),
/* harmony export */   createUniqueId: () => (/* binding */ createUniqueId),
/* harmony export */   getCropCSSClipPath: () => (/* binding */ getCropCSSClipPath),
/* harmony export */   getCropShapeSize: () => (/* binding */ getCropShapeSize),
/* harmony export */   getDownloadAnchor: () => (/* binding */ getDownloadAnchor),
/* harmony export */   getFitZoom: () => (/* binding */ getFitZoom),
/* harmony export */   getHiddenFileInput: () => (/* binding */ getHiddenFileInput),
/* harmony export */   isAround: () => (/* binding */ isAround),
/* harmony export */   isBetween: () => (/* binding */ isBetween),
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement),
/* harmony export */   loadSVGFromString: () => (/* binding */ loadSVGFromString),
/* harmony export */   pixelToAbsolutePosition: () => (/* binding */ pixelToAbsolutePosition),
/* harmony export */   toFixed: () => (/* binding */ toFixed)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "fabric");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _canvas_class_qrcode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../canvas/class-qrcode.js */ "./src/editor/canvas/class-qrcode.js");



var findScaleToFit = fabric__WEBPACK_IMPORTED_MODULE_1__.util.findScaleToFit,
  transformPoint = fabric__WEBPACK_IMPORTED_MODULE_1__.util.transformPoint,
  invertTransform = fabric__WEBPACK_IMPORTED_MODULE_1__.util.invertTransform,
  joinPath = fabric__WEBPACK_IMPORTED_MODULE_1__.util.joinPath;

/**
 * Useful for fitting canvas to screen.
 * @param {number} width
 * @param {number} height
 * @param {number} elWidth
 * @param {number} elHeight
 * @return {number}
 * @since 1.0.0
 */

function getFitZoom(width, height, elWidth, elHeight) {
  var zoom = findScaleToFit({
    width: width,
    height: height
  }, {
    width: elWidth - 20,
    height: elHeight - 20 // Let it be a little bit smaller to get a border.
  });

  return toFixed(zoom);
}

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
 * @since 1.0.0
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */

function isBetween(value, min, max) {
  return value >= min && value <= max;
}

/**
 *
 * @since 1.0.0
 * @param {number} v1
 * @param {number} v2
 * @param {number} distance
 * @return {boolean}
 */

function isAround(v1, v2, distance) {
  return isBetween(v1, v2 - distance, v2 + distance);
}

/**
 *
 * @since 1.0.0
 * @param {object} point
 * @param {object} canvasSize
 * @param {object} elementSize
 * @param {object} pan
 * @param {object} zoom
 * @return {object}
 */

function absolutePositionToPixel() {
  var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var canvasSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elementSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var pan = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var zoom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var translateX = elementSize.x / 2 - canvasSize.x / 2 * zoom + pan.x;
  var translateY = elementSize.y / 2 - canvasSize.y / 2 * zoom + pan.y;
  var matrix = [zoom, 0, 0, zoom, translateX, translateY];
  var transformed = transformPoint((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(point) ? {
    x: point,
    y: point
  } : point, matrix);
  return {
    x: toFixed(transformed.x),
    y: toFixed(transformed.y)
  };
}

/**
 *
 * @since 1.0.0
 * @param {object} point
 * @param {object} canvasSize
 * @param {object} elementSize
 * @param {object} pan
 * @param {object} zoom
 * @return {object}
 */

function pixelToAbsolutePosition() {
  var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var canvasSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elementSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var pan = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var zoom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var translateX = elementSize.x / 2 - canvasSize.x / 2 * zoom + pan.x;
  var translateY = elementSize.y / 2 - canvasSize.y / 2 * zoom + pan.y;
  var matrix = [zoom, 0, 0, zoom, translateX, translateY];
  var transformed = transformPoint((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(point) ? {
    x: point,
    y: point
  } : point, invertTransform(matrix));
  return {
    x: toFixed(transformed.x),
    y: toFixed(transformed.y)
  };
}

/**
 *
 * @since 1.0.0
 * @param {string} type
 * @return {boolean}
 */

function isSVGElement(type) {
  var svgElements = ['rect', 'circle', 'ellipse', 'path', 'polygon', 'polyline', 'text', 'i-text'];
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(svgElements, type);
}

/**
 * Extends the incomplete options with all defaults
 * by creating and fabric object, and returns its json data,
 * or creating a new fabric object synchronously, and returns it.
 * @param {object} options
 * @param {boolean} fabricObject If true it returns a fabric object, if false it returns a plain object for redux state.
 * @param {function} callback Optional callback function for image objects.
 * @return {object}
 * @since 1.0.0
 */

function createLayerObject() {
  var _options$objects, _options$filters;
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fabricObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var object;
  switch (options.type) {
    case 'image':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Image(null, options);
      // Get src from xlink:href if we load image from SVG.
      object.setSrc(options.src || options['xlink:href'], function () {
        callback && callback(object);
      });
      break;
    case 'text':
    case 'i-text':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.IText(options.text, options);
      break;
    case 'rect':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Rect(options);
      break;
    case 'circle':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Circle(options);
      break;
    case 'ellipse':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Ellipse(options);
      break;
    case 'path':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Path((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(options.path) ? joinPath(options.path) : options.path, options);
      break;
    case 'polygon':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Polygon(options.points, options);
      break;
    case 'polyline':
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Polyline(options.points, options);
      break;
    case 'qrcode':
      object = new _canvas_class_qrcode_js__WEBPACK_IMPORTED_MODULE_2__["default"](options);
      break;
    case 'group':
      var _objects = ((_options$objects = options.objects) === null || _options$objects === void 0 ? void 0 : _options$objects.map(function (obj) {
        return createLayerObject(obj, true);
      }).filter(function (obj) {
        return !!obj;
      })) || [];
      object = new fabric__WEBPACK_IMPORTED_MODULE_1__.Group(_objects, options);
      break;
    default:
      break;
  }
  if (fabricObject && options.clipPath) {
    object.clipPath = createLayerObject(options.clipPath, true);
  }
  if (fabricObject && (_options$filters = options.filters) !== null && _options$filters !== void 0 && _options$filters.length) {
    object.filters = options.filters.map(function (filter) {
      return fabric__WEBPACK_IMPORTED_MODULE_1__.Image.filters.BaseFilter.fromObject(filter);
    });
  }
  return fabricObject ? object : object.toObject();
}

/**
 *
 * @since 1.0.0
 * @param {string} accept
 * @param {string} readAs The function name of how to read the file by reader: 'readAsDataURL', 'readAsText', etc.
 * @param {function} onChange
 * @return {HTMLInputElement}
 */

function getHiddenFileInput() {
  var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var readAs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var onChange = arguments.length > 2 ? arguments[2] : undefined;
  if (!getHiddenFileInput._element) {
    getHiddenFileInput._element = document.createElement('input');
    getHiddenFileInput._element.type = 'file';
    getHiddenFileInput._element.style.display = 'none';
    document.body.appendChild(getHiddenFileInput._element);
  }
  if (!getHiddenFileInput._reader) {
    getHiddenFileInput._reader = new FileReader();
    getHiddenFileInput._element.onchange = function (e) {
      getHiddenFileInput._reader[readAs](e.target.files[0]);
    };
  }
  getHiddenFileInput._element.accept = accept;
  getHiddenFileInput._reader.onload = function (e) {
    onChange(getHiddenFileInput._reader.result);
  };
  return getHiddenFileInput._element;
}

/**
 *
 * @since 1.0.0
 * @param {string} href
 * @param {string} filename
 * @param {string} extension
 * @return {HTMLAnchorElement}
 */

function getDownloadAnchor() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
 * @since 1.0.0
 * @param {string} source
 * @param {function} onSuccess
 * @param {function} onError
 */

function loadSVGFromString() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var onSuccess = arguments.length > 1 ? arguments[1] : undefined;
  var onError = arguments.length > 2 ? arguments[2] : undefined;
  try {
    (0,fabric__WEBPACK_IMPORTED_MODULE_1__.loadSVGFromString)(source, onSuccess);
  } catch (error) {
    onError(error);
  }
}

/**
 *
 * @since 1.0.0
 * @param {object} size
 * @param {object} position
 * @param {object} elementSize
 * @return {string}
 */

function getCropCSSClipPath() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elementSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var x = elementSize.x,
    y = elementSize.y;
  var sX2 = size.x / 2;
  var sY2 = size.y / 2;
  var pX = position.x;
  var pY = position.y;
  var tlX = pX - sX2;
  var tlY = pY - sY2;
  var trX = pX + sX2;
  var trY = pY - sY2;
  var blX = pX - sX2;
  var blY = pY + sY2;
  var brX = pX + sX2;
  var brY = pY + sY2;
  var path = [[0, 0], [0, y], [blX, y], [tlX, tlY], [trX, trY], [brX, brY], [blX, blY], [blX, y], [x, y], [x, 0]];
  var p = path.map(function (p) {
    return p.join('px ');
  }).join('px, ');
  return 'polygon(' + p + ')';
}

/**
 *
 * @since 1.0.0
 * @access private
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @param {string} cropAspectRatio
 * @param {number} scale
 * @param {number} canvasZoom This param only needs if we want to get size in pixel, in case of absolute postition, we can ignore it.
 * @return {object}
 */

function getCropShapeSize(canvasWidth, canvasHeight, cropAspectRatio) {
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var canvasZoom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var aspect = cropAspectRatio.split(':');
  var aspX = parseInt(aspect[0]) || 0;
  var aspY = parseInt(aspect[1]) || 0;
  var zoom = findScaleToFit({
    width: aspX,
    height: aspY
  }, {
    width: canvasWidth,
    height: canvasHeight
  });
  var width = !cropAspectRatio || cropAspectRatio === '?:?' ? canvasWidth : zoom * aspX;
  var height = !cropAspectRatio || cropAspectRatio === '?:?' ? canvasHeight : zoom * aspY;
  return {
    x: width * canvasZoom * scale,
    y: height * canvasZoom * scale
  };
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

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/qrcode-svg/lib/qrcode.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode-svg/lib/qrcode.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * @fileoverview
 * - modified davidshimjs/qrcodejs library for use in node.js
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @version 0.9.1 (2016-02-12)
 * @author davidshimjs, papnkukn
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 * @see <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">https://github.com/davidshimjs/qrcodejs</a>
 */

//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
  this.parsedData = [];

  // Added to support UTF-8 Characters
  for (var i = 0, l = this.data.length; i < l; i++) {
    var byteArray = [];
    var code = this.data.charCodeAt(i);

    if (code > 0x10000) {
      byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
      byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
      byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
      byteArray[3] = 0x80 | (code & 0x3F);
    } else if (code > 0x800) {
      byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
      byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
      byteArray[2] = 0x80 | (code & 0x3F);
    } else if (code > 0x80) {
      byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
      byteArray[1] = 0x80 | (code & 0x3F);
    } else {
      byteArray[0] = code;
    }

    this.parsedData.push(byteArray);
  }

  this.parsedData = Array.prototype.concat.apply([], this.parsedData);

  if (this.parsedData.length != this.data.length) {
    this.parsedData.unshift(191);
    this.parsedData.unshift(187);
    this.parsedData.unshift(239);
  }
}

QR8bitByte.prototype = {
  getLength: function (buffer) {
    return this.parsedData.length;
  },
  write: function (buffer) {
    for (var i = 0, l = this.parsedData.length; i < l; i++) {
      buffer.put(this.parsedData[i], 8);
    }
  }
};

function QRCodeModel(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}

QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
this.modules[r][6]=(r%2==0);}
for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
+buffer.getLengthInBits()
+">"
+totalDataCount*8
+")");}
if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
buffer.put(QRCodeModel.PAD1,8);}
return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
if(r==0&&c==0){continue;}
if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
while(n>=256){n-=255;}
return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];


/** Constructor */
function QRCode(options) {
  var instance = this;
  
  //Default options
  this.options = {
    padding: 4,
    width: 256, 
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M"
  };
  
  //In case the options is string
  if (typeof options === 'string') {
    options = {
      content: options
    };
  }
  
  //Merge options
  if (options) {
    for (var i in options) {
      this.options[i] = options[i];
    }
  }
  
  if (typeof this.options.content !== 'string') {
    throw new Error("Expected 'content' as string!");
  }
  
  if (this.options.content.length === 0 /* || this.options.content.length > 7089 */) {
    throw new Error("Expected 'content' to be non-empty!");
  }
  
  if (!(this.options.padding >= 0)) {
    throw new Error("Expected 'padding' value to be non-negative!");
  }
  
  if (!(this.options.width > 0) || !(this.options.height > 0)) {
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  }
  
  //Gets the error correction level
  function _getErrorCorrectLevel(ecl) {
    switch (ecl) {
        case "L":
          return QRErrorCorrectLevel.L;
          
        case "M":
          return QRErrorCorrectLevel.M;
          
        case "Q":
          return QRErrorCorrectLevel.Q;
          
        case "H":
          return QRErrorCorrectLevel.H;
          
        default:
          throw new Error("Unknwon error correction level: " + ecl);
      }
  }
  
  //Get type number
  function _getTypeNumber(content, ecl) {      
    var length = _getUTF8Length(content);
    
    var type = 1;
    var limit = 0;
    for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
      var table = QRCodeLimitLength[i];
      if (!table) {
        throw new Error("Content too long: expected " + limit + " but got " + length);
      }
      
      switch (ecl) {
        case "L":
          limit = table[0];
          break;
          
        case "M":
          limit = table[1];
          break;
          
        case "Q":
          limit = table[2];
          break;
          
        case "H":
          limit = table[3];
          break;
          
        default:
          throw new Error("Unknwon error correction level: " + ecl);
      }
      
      if (length <= limit) {
        break;
      }
      
      type++;
    }
    
    if (type > QRCodeLimitLength.length) {
      throw new Error("Content too long");
    }
    
    return type;
  }

  //Gets text length
  function _getUTF8Length(content) {
    var result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
    return result.length + (result.length != content ? 3 : 0);
  }
  
  //Generate QR Code matrix
  var content = this.options.content;
  var type = _getTypeNumber(content, this.options.ecl);
  var ecl = _getErrorCorrectLevel(this.options.ecl);
  this.qrcode = new QRCodeModel(type, ecl);
  this.qrcode.addData(content);
  this.qrcode.make();
}

/** Generates QR Code as SVG image */
QRCode.prototype.svg = function(opt) {
  var options = this.options || { };
  var modules = this.qrcode.modules;
  
  if (typeof opt == "undefined") {
    opt = { container: options.container || "svg" };
  }
  
  //Apply new lines and indents in SVG?
  var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
  
  var indent = pretty ? '  ' : '';
  var EOL = pretty ? '\r\n' : '';
  var width = options.width;
  var height = options.height;
  var length = modules.length;
  var xsize = width / (length + 2 * options.padding);
  var ysize = height / (length + 2 * options.padding);
  
  //Join (union, merge) rectangles into one shape?
  var join = typeof options.join != "undefined" ? !!options.join : false;
  
  //Swap the X and Y modules, pull request #2
  var swap = typeof options.swap != "undefined" ? !!options.swap : false;
  
  //Apply <?xml...?> declaration in SVG?
  var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
  
  //Populate with predefined shape instead of "rect" elements, thanks to @kkocdko
  var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
  var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + ' v' + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : '';
  
  //Background rectangle
  var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
  
  //Rectangles representing modules
  var modrect = '';
  var pathdata = '';

  for (var y = 0; y < length; y++) {
    for (var x = 0; x < length; x++) {
      var module = modules[x][y];
      if (module) {
        
        var px = (x * xsize + options.padding * xsize);
        var py = (y * ysize + options.padding * ysize);
        
        //Some users have had issues with the QR Code, thanks to @danioso for the solution
        if (swap) {
          var t = px;
          px = py;
          py = t;
        }
        
        if (join) {
          //Module as a part of svg path data, thanks to @danioso
          var w = xsize + px
          var h = ysize + py

          px = (Number.isInteger(px))? Number(px): px.toFixed(2);
          py = (Number.isInteger(py))? Number(py): py.toFixed(2);
          w = (Number.isInteger(w))? Number(w): w.toFixed(2);
          h = (Number.isInteger(h))? Number(h): h.toFixed(2);

          pathdata += ('M' + px + ',' + py + ' V' + h + ' H' + w + ' V' + py + ' H' + px + ' Z ');
        }
        else if (predefined) {
          //Module as a predefined shape, thanks to @kkocdko
          modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
        }
        else {
          //Module as rectangle element
          modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
        }
      }
    }
  }
  
  if (join) {
    modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
  }

  var svg = "";
  switch (opt.container) {
    //Wrapped in SVG document
    case "svg":
      if (xmlDeclaration) {
        svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
      }
      svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
      svg += defs + bgrect + modrect;
      svg += '</svg>';
      break;
      
    //Viewbox for responsive use in a browser, thanks to @danioso
    case "svg-viewbox":
      if (xmlDeclaration) {
        svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
      }
      svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + ' ' + height + '">' + EOL;
      svg += defs + bgrect + modrect;
      svg += '</svg>';
      break;
      
    
    //Wrapped in group element    
    case "g":
      svg += '<g width="' + width + '" height="' + height + '">' + EOL;
      svg += defs + bgrect + modrect;
      svg += '</g>';
      break;
      
    //Without a container
    default:
      svg += (defs + bgrect + modrect).replace(/^\s+/, ""); //Clear indents on each line
      break;
  }
  
  return svg;
};

/** Writes QR Code image to a file */
/*
QRCode.prototype.save = function(file, callback) {
  var data = this.svg();
  if (typeof callback != "function") {
    callback = function(error, result) { };
  }
  try {
    //Package 'fs' is available in node.js but not in a web browser
    var fs = require('fs');
    fs.writeFile(file, data, callback);
  }
  catch (e) {
    //Sorry, 'fs' is not available
    callback(e);
  }
};
*/
if (true) {
  module.exports = QRCode;
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

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}
function isSuspenseList(object) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.SuspenseList = SuspenseList;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isSuspenseList = isSuspenseList;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ContextKey = Symbol.for(`react-redux-context-${react__WEBPACK_IMPORTED_MODULE_0__.version}`);
const gT = globalThis;

function getContext() {
  let realContext = gT[ContextKey];

  if (!realContext) {
    realContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

    if (true) {
      realContext.displayName = 'ReactRedux';
    }

    gT[ContextKey] = realContext;
  }

  return realContext;
}

const ReactReduxContext = /*#__PURE__*/new Proxy({}, /*#__PURE__*/new Proxy({}, {
  get(_, handler) {
    const target = getContext(); // @ts-ignore

    return (_target, ...args) => Reflect[handler](target, ...args);
  }

}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");





function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = 'once',
  noopCheck = 'once'
}) {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => store.getState(), [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connect.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/connect.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initializeConnect: () => (/* binding */ initializeConnect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connect/selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");
/* harmony import */ var _connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connect/mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connect/mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connect/mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");


const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__.notInitialized;
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areStatePropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areMergedPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = _Context__WEBPACK_IMPORTED_MODULE_13__.ReactReduxContext
} = {}) {
  if (true) {
    if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_12__["default"])('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
    }
  }

  const Context = context;
  const initMapStateToProps = (0,_connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__.mapStateToPropsFactory)(mapStateToProps);
  const initMapDispatchToProps = (0,_connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__.mapDispatchToPropsFactory)(mapDispatchToProps);
  const initMergeProps = (0,_connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__.mergePropsFactory)(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
      } // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return (0,_connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__["default"])(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_9__.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      const lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      const childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      const renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      const isProcessingDispatch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      const latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/invalidArgFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/invalidArgFactory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidArgFactory: () => (/* binding */ createInvalidArgFactory)
/* harmony export */ });
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapDispatchToPropsFactory: () => (/* binding */ mapDispatchToPropsFactory)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapStateToPropsFactory: () => (/* binding */ mapStateToPropsFactory)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");


function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMergeProps: () => (/* binding */ defaultMergeProps),
/* harmony export */   mergePropsFactory: () => (/* binding */ mergePropsFactory),
/* harmony export */   wrapMergePropsFunc: () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   pureFinalPropsSelectorFactory: () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps);
  }

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, 'mapStateToProps');
  verify(mapDispatchToProps, 'mapDispatchToProps');
  verify(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDependsOnOwnProps: () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   wrapMapToPropsConstant: () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   wrapMapToPropsFunc: () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   connect: () => (/* reexport safe */ _components_connect__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   useDispatch: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/react-redux/es/types.js");










/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReduxContextHook: () => (/* binding */ createReduxContextHook),
/* harmony export */   useReduxContext: () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");



/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);

    if ( true && !contextValue) {
      throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
    }

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

const useReduxContext = /*#__PURE__*/createReduxContextHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   initializeUseSelector: () => (/* binding */ initializeUseSelector),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");




let useSyncExternalStoreWithSelector = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__.notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext) {
  const useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : (0,_useReduxContext__WEBPACK_IMPORTED_MODULE_1__.createReduxContextHook)(context);
  return function useSelector(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined
    } = typeof equalityFnOrOptions === 'function' ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;

    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }

      if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }

      if (typeof equalityFn !== 'function') {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext();
    const firstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    const wrappedSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)({
      [selector.name](state) {
        const selected = selector(state);

        if (true) {
          const finalStabilityCheck = typeof stabilityCheck === 'undefined' ? globalStabilityCheck : stabilityCheck;

          if (finalStabilityCheck === 'always' || finalStabilityCheck === 'once' && firstRun.current) {
            const toCompare = selector(state);

            if (!equalityFn(selected, toCompare)) {
              console.warn('Selector ' + (selector.name || 'unknown') + ' returned a different result when called with the same parameters. This can lead to unnecessary rerenders.' + '\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization', {
                state,
                selected,
                selected2: toCompare
              });
            }
          }

          const finalNoopCheck = typeof noopCheck === 'undefined' ? globalNoopCheck : noopCheck;

          if (finalNoopCheck === 'always' || finalNoopCheck === 'once' && firstRun.current) {
            // @ts-ignore
            if (selected === state) {
              console.warn('Selector ' + (selector.name || 'unknown') + ' returned the root state when called. This can lead to unnecessary rerenders.' + '\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.');
            }
          }

          if (firstRun.current) firstRun.current = false;
        }

        return selected;
      }

    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");


/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : // @ts-ignore
  (0,_useReduxContext__WEBPACK_IMPORTED_MODULE_1__.createReduxContextHook)(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.Provider),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.ReactReduxContext),
/* harmony export */   batch: () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates),
/* harmony export */   connect: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.connect),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.shallowEqual),
/* harmony export */   useDispatch: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");
/* harmony import */ var use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector */ "./node_modules/use-sync-external-store/shim/with-selector.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exports */ "./node_modules/react-redux/es/exports.js");
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






(0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.initializeUseSelector)(use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
(0,_components_connect__WEBPACK_IMPORTED_MODULE_5__.initializeConnect)(use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_3__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates);



/***/ }),

/***/ "./node_modules/react-redux/es/types.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/types.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSubscription: () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBatch: () => (/* binding */ getBatch),
/* harmony export */   setBatch: () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useSyncExternalStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useSyncExternalStore.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notInitialized: () => (/* binding */ notInitialized)
/* harmony export */ });
const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ "./node_modules/redux-undo/lib/actions.js":
/*!************************************************!*\
  !*** ./node_modules/redux-undo/lib/actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ActionCreators = exports.ActionTypes = void 0;
var ActionTypes = {
  UNDO: '@@redux-undo/UNDO',
  REDO: '@@redux-undo/REDO',
  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST',
  JUMP: '@@redux-undo/JUMP',
  CLEAR_HISTORY: '@@redux-undo/CLEAR_HISTORY'
};
exports.ActionTypes = ActionTypes;
var ActionCreators = {
  undo: function undo() {
    return {
      type: ActionTypes.UNDO
    };
  },
  redo: function redo() {
    return {
      type: ActionTypes.REDO
    };
  },
  jumpToFuture: function jumpToFuture(index) {
    return {
      type: ActionTypes.JUMP_TO_FUTURE,
      index: index
    };
  },
  jumpToPast: function jumpToPast(index) {
    return {
      type: ActionTypes.JUMP_TO_PAST,
      index: index
    };
  },
  jump: function jump(index) {
    return {
      type: ActionTypes.JUMP,
      index: index
    };
  },
  clearHistory: function clearHistory() {
    return {
      type: ActionTypes.CLEAR_HISTORY
    };
  }
};
exports.ActionCreators = ActionCreators;

/***/ }),

/***/ "./node_modules/redux-undo/lib/debug.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-undo/lib/debug.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.set = set;
exports.start = start;
exports.end = end;
exports.log = log;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __DEBUG__;

var displayBuffer;
var colors = {
  prevState: '#9E9E9E',
  action: '#03A9F4',
  nextState: '#4CAF50'
};
/* istanbul ignore next: debug messaging is not tested */

function initBuffer() {
  displayBuffer = {
    header: [],
    prev: [],
    action: [],
    next: [],
    msgs: []
  };
}
/* istanbul ignore next: debug messaging is not tested */


function printBuffer() {
  var _displayBuffer = displayBuffer,
      header = _displayBuffer.header,
      prev = _displayBuffer.prev,
      next = _displayBuffer.next,
      action = _displayBuffer.action,
      msgs = _displayBuffer.msgs;

  if (console.group) {
    var _console, _console2, _console3, _console4, _console5;

    (_console = console).groupCollapsed.apply(_console, _toConsumableArray(header));

    (_console2 = console).log.apply(_console2, _toConsumableArray(prev));

    (_console3 = console).log.apply(_console3, _toConsumableArray(action));

    (_console4 = console).log.apply(_console4, _toConsumableArray(next));

    (_console5 = console).log.apply(_console5, _toConsumableArray(msgs));

    console.groupEnd();
  } else {
    var _console6, _console7, _console8, _console9, _console10;

    (_console6 = console).log.apply(_console6, _toConsumableArray(header));

    (_console7 = console).log.apply(_console7, _toConsumableArray(prev));

    (_console8 = console).log.apply(_console8, _toConsumableArray(action));

    (_console9 = console).log.apply(_console9, _toConsumableArray(next));

    (_console10 = console).log.apply(_console10, _toConsumableArray(msgs));
  }
}
/* istanbul ignore next: debug messaging is not tested */


function colorFormat(text, color, obj) {
  return ["%c".concat(text), "color: ".concat(color, "; font-weight: bold"), obj];
}
/* istanbul ignore next: debug messaging is not tested */


function start(action, state) {
  initBuffer();

  if (__DEBUG__) {
    if (console.group) {
      displayBuffer.header = ['%credux-undo', 'font-style: italic', 'action', action.type];
      displayBuffer.action = colorFormat('action', colors.action, action);
      displayBuffer.prev = colorFormat('prev history', colors.prevState, state);
    } else {
      displayBuffer.header = ['redux-undo action', action.type];
      displayBuffer.action = ['action', action];
      displayBuffer.prev = ['prev history', state];
    }
  }
}
/* istanbul ignore next: debug messaging is not tested */


function end(nextState) {
  if (__DEBUG__) {
    if (console.group) {
      displayBuffer.next = colorFormat('next history', colors.nextState, nextState);
    } else {
      displayBuffer.next = ['next history', nextState];
    }

    printBuffer();
  }
}
/* istanbul ignore next: debug messaging is not tested */


function log() {
  if (__DEBUG__) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    displayBuffer.msgs = displayBuffer.msgs.concat([].concat(args, ['\n']));
  }
}
/* istanbul ignore next: debug messaging is not tested */


function set(debug) {
  __DEBUG__ = debug;
}

/***/ }),

/***/ "./node_modules/redux-undo/lib/helpers.js":
/*!************************************************!*\
  !*** ./node_modules/redux-undo/lib/helpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseActions = parseActions;
exports.isHistory = isHistory;
exports.includeAction = includeAction;
exports.excludeAction = excludeAction;
exports.combineFilters = combineFilters;
exports.groupByActionTypes = groupByActionTypes;
exports.newHistory = newHistory;

// parseActions helper: takes a string (or array)
//                      and makes it an array if it isn't yet
function parseActions(rawActions) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(rawActions)) {
    return rawActions;
  } else if (typeof rawActions === 'string') {
    return [rawActions];
  }

  return defaultValue;
} // isHistory helper: check for a valid history object


function isHistory(history) {
  return typeof history.present !== 'undefined' && typeof history.future !== 'undefined' && typeof history.past !== 'undefined' && Array.isArray(history.future) && Array.isArray(history.past);
} // includeAction helper: whitelist actions to be added to the history


function includeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0;
  };
} // excludeAction helper: blacklist actions from being added to the history


function excludeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) < 0;
  };
} // combineFilters helper: combine multiple filters to one


function combineFilters() {
  for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
    filters[_key] = arguments[_key];
  }

  return filters.reduce(function (prev, curr) {
    return function (action, currentState, previousHistory) {
      return prev(action, currentState, previousHistory) && curr(action, currentState, previousHistory);
    };
  }, function () {
    return true;
  });
}

function groupByActionTypes(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0 ? action.type : null;
  };
}

function newHistory(past, present, future) {
  var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return {
    past: past,
    present: present,
    future: future,
    group: group,
    _latestUnfiltered: present,
    index: past.length,
    limit: past.length + future.length + 1
  };
}

/***/ }),

/***/ "./node_modules/redux-undo/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-undo/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ActionTypes", ({
  enumerable: true,
  get: function get() {
    return _actions.ActionTypes;
  }
}));
Object.defineProperty(exports, "ActionCreators", ({
  enumerable: true,
  get: function get() {
    return _actions.ActionCreators;
  }
}));
Object.defineProperty(exports, "parseActions", ({
  enumerable: true,
  get: function get() {
    return _helpers.parseActions;
  }
}));
Object.defineProperty(exports, "isHistory", ({
  enumerable: true,
  get: function get() {
    return _helpers.isHistory;
  }
}));
Object.defineProperty(exports, "includeAction", ({
  enumerable: true,
  get: function get() {
    return _helpers.includeAction;
  }
}));
Object.defineProperty(exports, "excludeAction", ({
  enumerable: true,
  get: function get() {
    return _helpers.excludeAction;
  }
}));
Object.defineProperty(exports, "combineFilters", ({
  enumerable: true,
  get: function get() {
    return _helpers.combineFilters;
  }
}));
Object.defineProperty(exports, "groupByActionTypes", ({
  enumerable: true,
  get: function get() {
    return _helpers.groupByActionTypes;
  }
}));
Object.defineProperty(exports, "newHistory", ({
  enumerable: true,
  get: function get() {
    return _helpers.newHistory;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _reducer["default"];
  }
}));

var _actions = __webpack_require__(/*! ./actions */ "./node_modules/redux-undo/lib/actions.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/redux-undo/lib/helpers.js");

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/redux-undo/lib/reducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/redux-undo/lib/reducer.js":
/*!************************************************!*\
  !*** ./node_modules/redux-undo/lib/reducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = undoable;

var debug = _interopRequireWildcard(__webpack_require__(/*! ./debug */ "./node_modules/redux-undo/lib/debug.js"));

var _actions = __webpack_require__(/*! ./actions */ "./node_modules/redux-undo/lib/actions.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/redux-undo/lib/helpers.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function createHistory(state, ignoreInitialState) {
  // ignoreInitialState essentially prevents the user from undoing to the
  // beginning, in the case that the undoable reducer handles initialization
  // in a way that can't be redone simply
  var history = (0, _helpers.newHistory)([], state, []);

  if (ignoreInitialState) {
    history._latestUnfiltered = null;
  }

  return history;
} // insert: insert `state` into history, which means adding the current state
//         into `past`, setting the new `state` as `present` and erasing
//         the `future`.


function insert(history, state, limit, group) {
  var lengthWithoutFuture = history.past.length + 1;
  debug.log('inserting', state);
  debug.log('new free: ', limit - lengthWithoutFuture);
  var past = history.past,
      _latestUnfiltered = history._latestUnfiltered;
  var isHistoryOverflow = limit && limit <= lengthWithoutFuture;
  var pastSliced = past.slice(isHistoryOverflow ? 1 : 0);
  var newPast = _latestUnfiltered != null ? [].concat(_toConsumableArray(pastSliced), [_latestUnfiltered]) : pastSliced;
  return (0, _helpers.newHistory)(newPast, state, [], group);
} // jumpToFuture: jump to requested index in future history


function jumpToFuture(history, index) {
  if (index < 0 || index >= history.future.length) return history;
  var past = history.past,
      future = history.future,
      _latestUnfiltered = history._latestUnfiltered;
  var newPast = [].concat(_toConsumableArray(past), [_latestUnfiltered], _toConsumableArray(future.slice(0, index)));
  var newPresent = future[index];
  var newFuture = future.slice(index + 1);
  return (0, _helpers.newHistory)(newPast, newPresent, newFuture);
} // jumpToPast: jump to requested index in past history


function jumpToPast(history, index) {
  if (index < 0 || index >= history.past.length) return history;
  var past = history.past,
      future = history.future,
      _latestUnfiltered = history._latestUnfiltered;
  var newPast = past.slice(0, index);
  var newFuture = [].concat(_toConsumableArray(past.slice(index + 1)), [_latestUnfiltered], _toConsumableArray(future));
  var newPresent = past[index];
  return (0, _helpers.newHistory)(newPast, newPresent, newFuture);
} // jump: jump n steps in the past or forward


function jump(history, n) {
  if (n > 0) return jumpToFuture(history, n - 1);
  if (n < 0) return jumpToPast(history, history.past.length + n);
  return history;
} // helper to dynamically match in the reducer's switch-case


function actionTypeAmongClearHistoryType(actionType, clearHistoryType) {
  return clearHistoryType.indexOf(actionType) > -1 ? actionType : !actionType;
} // redux-undo higher order reducer


function undoable(reducer) {
  var rawConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  debug.set(rawConfig.debug);

  var config = _objectSpread({
    limit: undefined,
    filter: function filter() {
      return true;
    },
    groupBy: function groupBy() {
      return null;
    },
    undoType: _actions.ActionTypes.UNDO,
    redoType: _actions.ActionTypes.REDO,
    jumpToPastType: _actions.ActionTypes.JUMP_TO_PAST,
    jumpToFutureType: _actions.ActionTypes.JUMP_TO_FUTURE,
    jumpType: _actions.ActionTypes.JUMP,
    neverSkipReducer: false,
    ignoreInitialState: false,
    syncFilter: false
  }, rawConfig, {
    initTypes: (0, _helpers.parseActions)(rawConfig.initTypes, ['@@redux-undo/INIT']),
    clearHistoryType: (0, _helpers.parseActions)(rawConfig.clearHistoryType, [_actions.ActionTypes.CLEAR_HISTORY])
  }); // Allows the user to call the reducer with redux-undo specific actions


  var skipReducer = config.neverSkipReducer ? function (res, action) {
    for (var _len = arguments.length, slices = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      slices[_key - 2] = arguments[_key];
    }

    return _objectSpread({}, res, {
      present: reducer.apply(void 0, [res.present, action].concat(slices))
    });
  } : function (res) {
    return res;
  };
  var initialState;
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    debug.start(action, state);
    var history = state;

    for (var _len2 = arguments.length, slices = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      slices[_key2 - 2] = arguments[_key2];
    }

    if (!initialState) {
      debug.log('history is uninitialized');

      if (state === undefined) {
        var createHistoryAction = {
          type: '@@redux-undo/CREATE_HISTORY'
        };
        var start = reducer.apply(void 0, [state, createHistoryAction].concat(slices));
        history = createHistory(start, config.ignoreInitialState);
        debug.log('do not set initialState on probe actions');
        debug.end(history);
        return history;
      } else if ((0, _helpers.isHistory)(state)) {
        history = initialState = config.ignoreInitialState ? state : (0, _helpers.newHistory)(state.past, state.present, state.future);
        debug.log('initialHistory initialized: initialState is a history', initialState);
      } else {
        history = initialState = createHistory(state, config.ignoreInitialState);
        debug.log('initialHistory initialized: initialState is not a history', initialState);
      }
    }

    var res;

    switch (action.type) {
      case undefined:
        return history;

      case config.undoType:
        res = jump(history, -1);
        debug.log('perform undo');
        debug.end(res);
        return skipReducer.apply(void 0, [res, action].concat(slices));

      case config.redoType:
        res = jump(history, 1);
        debug.log('perform redo');
        debug.end(res);
        return skipReducer.apply(void 0, [res, action].concat(slices));

      case config.jumpToPastType:
        res = jumpToPast(history, action.index);
        debug.log("perform jumpToPast to ".concat(action.index));
        debug.end(res);
        return skipReducer.apply(void 0, [res, action].concat(slices));

      case config.jumpToFutureType:
        res = jumpToFuture(history, action.index);
        debug.log("perform jumpToFuture to ".concat(action.index));
        debug.end(res);
        return skipReducer.apply(void 0, [res, action].concat(slices));

      case config.jumpType:
        res = jump(history, action.index);
        debug.log("perform jump to ".concat(action.index));
        debug.end(res);
        return skipReducer.apply(void 0, [res, action].concat(slices));

      case actionTypeAmongClearHistoryType(action.type, config.clearHistoryType):
        res = createHistory(history.present, config.ignoreInitialState);
        debug.log('perform clearHistory');
        debug.end(res);
        return skipReducer.apply(void 0, [res, action].concat(slices));

      default:
        res = reducer.apply(void 0, [history.present, action].concat(slices));

        if (config.initTypes.some(function (actionType) {
          return actionType === action.type;
        })) {
          debug.log('reset history due to init action');
          debug.end(initialState);
          return initialState;
        }

        if (history._latestUnfiltered === res) {
          // Don't handle this action. Do not call debug.end here,
          // because this action should not produce side effects to the console
          return history;
        }
        /* eslint-disable-next-line no-case-declarations */


        var filtered = typeof config.filter === 'function' && !config.filter(action, res, history);

        if (filtered) {
          // if filtering an action, merely update the present
          var filteredState = (0, _helpers.newHistory)(history.past, res, history.future, history.group);

          if (!config.syncFilter) {
            filteredState._latestUnfiltered = history._latestUnfiltered;
          }

          debug.log('filter ignored action, not storing it in past');
          debug.end(filteredState);
          return filteredState;
        }
        /* eslint-disable-next-line no-case-declarations */


        var group = config.groupBy(action, res, history);

        if (group != null && group === history.group) {
          // if grouping with the previous action, only update the present
          var groupedState = (0, _helpers.newHistory)(history.past, res, history.future, history.group);
          debug.log('groupBy grouped the action with the previous action');
          debug.end(groupedState);
          return groupedState;
        } // If the action wasn't filtered or grouped, insert normally


        history = insert(history, res, config.limit, group);
        debug.log('inserted new state into history');
        debug.end(history);
        return history;
    }
  };
}

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ ActionTypes),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/reselect/es/defaultMemoize.js":
/*!****************************************************!*\
  !*** ./node_modules/reselect/es/defaultMemoize.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKeyComparator: () => (/* binding */ createCacheKeyComparator),
/* harmony export */   defaultEqualityCheck: () => (/* binding */ defaultEqualityCheck),
/* harmony export */   defaultMemoize: () => (/* binding */ defaultMemoize)
/* harmony export */ });
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelector: () => (/* binding */ createSelector),
/* harmony export */   createSelectorCreator: () => (/* binding */ createSelectorCreator),
/* harmony export */   createStructuredSelector: () => (/* binding */ createStructuredSelector),
/* harmony export */   defaultEqualityCheck: () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultEqualityCheck),
/* harmony export */   defaultMemoize: () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize)
/* harmony export */ });
/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultMemoize */ "./node_modules/reselect/es/defaultMemoize.js");



function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");
var shim = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js");
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

/***/ "fabric":
/*!*************************!*\
  !*** external "fabric" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = fabric;

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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.mjs":
/*!***********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ un),
/* harmony export */   applyPatches: () => (/* binding */ pn),
/* harmony export */   castDraft: () => (/* binding */ K),
/* harmony export */   castImmutable: () => (/* binding */ $),
/* harmony export */   createDraft: () => (/* binding */ ln),
/* harmony export */   current: () => (/* binding */ R),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enableAllPlugins: () => (/* binding */ J),
/* harmony export */   enableES5: () => (/* binding */ F),
/* harmony export */   enableMapSet: () => (/* binding */ C),
/* harmony export */   enablePatches: () => (/* binding */ T),
/* harmony export */   finishDraft: () => (/* binding */ dn),
/* harmony export */   freeze: () => (/* binding */ d),
/* harmony export */   immerable: () => (/* binding */ L),
/* harmony export */   isDraft: () => (/* binding */ r),
/* harmony export */   isDraftable: () => (/* binding */ t),
/* harmony export */   nothing: () => (/* binding */ H),
/* harmony export */   original: () => (/* binding */ e),
/* harmony export */   produce: () => (/* binding */ fn),
/* harmony export */   produceWithPatches: () => (/* binding */ cn),
/* harmony export */   setAutoFreeze: () => (/* binding */ sn),
/* harmony export */   setUseProxies: () => (/* binding */ vn)
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s,v){if( true&&c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];"string"!=typeof p&&"number"!=typeof p&&(p=""+p),0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp-api-fetch */ "wp-api-fetch");
/* harmony import */ var wp_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_components_editor_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/components/editor.jsx */ "./src/editor/components/editor.jsx");
/* harmony import */ var _editor_redux_reducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/redux/reducer.js */ "./src/editor/redux/reducer.js");
/* harmony import */ var _editor_utils_middlewares_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor/utils/middlewares.js */ "./src/editor/utils/middlewares.js");
/* harmony import */ var _editor_canvas_extend_fabric_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/canvas/extend-fabric.js */ "./src/editor/canvas/extend-fabric.js");
/* harmony import */ var _editor_canvas_extend_point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/canvas/extend-point.js */ "./src/editor/canvas/extend-point.js");
/* harmony import */ var _editor_canvas_extend_filters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor/canvas/extend-filters.js */ "./src/editor/canvas/extend-filters.js");
/* harmony import */ var _editor_canvas_extend_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor/canvas/extend-object.js */ "./src/editor/canvas/extend-object.js");
/* harmony import */ var _editor_canvas_extend_image_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor/canvas/extend-image.js */ "./src/editor/canvas/extend-image.js");
/* harmony import */ var _editor_canvas_extend_group_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor/canvas/extend-group.js */ "./src/editor/canvas/extend-group.js");













wp_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_editor_utils_middlewares_js__WEBPACK_IMPORTED_MODULE_5__.createPaginatingMiddleware);

/**
 *
 * @since 1.0.0
 */

var Editor = function Editor(_ref) {
  var id = _ref.id,
    title = _ref.title,
    project = _ref.project,
    media = _ref.media;
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_12__.createStore)((0,_editor_redux_reducer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, title, project, media));
  return /*#__PURE__*/React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(_editor_components_editor_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/**
 * Initialize editor.
 * @since 1.0.0
 * @param {number} id
 * @param {string} title
 * @param {object} project
 * @param {object} media
 */

var initialize = function initialize() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var project = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var media = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var container = document.getElementById('pixmagix');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  root.render( /*#__PURE__*/React.createElement(Editor, {
    id: id,
    title: title,
    project: project,
    media: media
  }));
};

})();

pixmagixEditor = __webpack_exports__;
/******/ })()
;