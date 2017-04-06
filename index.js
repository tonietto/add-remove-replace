/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
    replaceall (v0.1.6) 23-04-2015
    (c) Lee Crossley <leee@hotmail.co.uk> (http://ilee.co.uk/)
*/
var replaceall = function replaceall(a, b, c) {
    return b = b.replace(/\$/g, "$$$$"), c.replace(new RegExp(a.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g, "\\$&"), "g"), b);
};"undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = replaceall), exports.replaceall = replaceall);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var output = function output(content, target, atBeginning) {
  switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
    case 'string':
      switch (atBeginning) {
        case true:
          return '' + content + target;
        default:
          return '' + target + content;
      }
    case 'number':
      if (typeof content === 'number') {
        switch (atBeginning) {
          case true:
            return Number('' + content + target);
          default:
            return Number('' + target + content);
        }
      }
      break;
    default:
      break;
  }
  return target;
};

var add = function add(content, target) {
  var atBeginning = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (Object.prototype.toString.call(target) === '[object Array]') {
    var list = target || [];
    var result = [];
    for (var i = 0; i <= list.length - 1; i++) {
      var item = output(content, list[i], atBeginning);
      result.push(item);
    }
    return result;
  }
  return output(content, target, atBeginning);
};

exports.default = add;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _replaceall = __webpack_require__(0);

var _replaceall2 = _interopRequireDefault(_replaceall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var output = function output(content, target) {
  switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
    case 'string':
      return (0, _replaceall2.default)(content, '', target);
    case 'number':
      if (typeof content === 'number') {
        return Number((0, _replaceall2.default)(String(content), '', String(target)));
      }
      break;
    default:
      break;
  }
  return target;
};

var remove = function remove(content, target) {
  if (Object.prototype.toString.call(target) === '[object Array]') {
    var list = target || [];
    var result = [];
    for (var i = 0; i <= list.length - 1; i++) {
      var item = output(content, list[i]);
      result.push(item);
    }
    return result;
  }
  return output(content, target);
};

exports.default = remove;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _replaceall = __webpack_require__(0);

var _replaceall2 = _interopRequireDefault(_replaceall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var output = function output(content, newContent, target) {
  switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
    case 'string':
      return (0, _replaceall2.default)(content, newContent, target);
    case 'number':
      if (typeof content === 'number') {
        return Number((0, _replaceall2.default)(String(content), String(newContent), String(target)));
      }
      break;
    default:
      break;
  }
  return target;
};

var replace = function replace(content, newContent, target) {
  if (Object.prototype.toString.call(target) === '[object Array]') {
    var list = target || [];
    var result = [];
    for (var i = 0; i <= list.length - 1; i++) {
      var item = output(content, newContent, list[i]);
      result.push(item);
    }
    return result;
  }
  return output(content, newContent, target);
};

exports.default = replace;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace = exports.remove = exports.add = undefined;

var _add = __webpack_require__(1);

var _add2 = _interopRequireDefault(_add);

var _remove = __webpack_require__(2);

var _remove2 = _interopRequireDefault(_remove);

var _replace = __webpack_require__(3);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addRemoveReplace = { add: _add2.default, remove: _remove2.default, replace: _replace2.default };
exports.add = _add2.default;
exports.remove = _remove2.default;
exports.replace = _replace2.default;
exports.default = addRemoveReplace;

/***/ })
/******/ ]);