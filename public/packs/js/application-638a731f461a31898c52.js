/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/application */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application__WEBPACK_IMPORTED_MODULE_5__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.




_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();



/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.6.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.6.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.6.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (_typeof(config) === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.6.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.6.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
      $__default['default'](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default['default'](this._element).off(Util.TRANSITION_END);
      $__default['default'](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.6.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4);
        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.6.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.6.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.6.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.6.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important; }\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none; }\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\ndt {\n  font-weight: 700; }\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\nblockquote {\n  margin: 0 0 1rem; }\nb,\nstrong {\n  font-weight: bolder; }\nsmall {\n  font-size: 80%; }\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\nsub {\n  bottom: -.25em; }\nsup {\n  top: -.5em; }\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent; }\na:hover {\n    color: #0056b3;\n    text-decoration: underline; }\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none; }\na:not([href]):not([class]):hover {\n    color: inherit;\n    text-decoration: none; }\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\nfigure {\n  margin: 0 0 1rem; }\nimg {\n  vertical-align: middle;\n  border-style: none; }\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\ntable {\n  border-collapse: collapse; }\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent; }\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\nbutton {\n  border-radius: 0; }\nbutton:focus:not(:focus-visible) {\n  outline: 0; }\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\nbutton,\ninput {\n  overflow: visible; }\nbutton,\nselect {\n  text-transform: none; }\n[role=\"button\"] {\n  cursor: pointer; }\nselect {\n  word-wrap: normal; }\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\nbutton:not(:disabled),\n[type=\"button\"]:not(:disabled),\n[type=\"reset\"]:not(:disabled),\n[type=\"submit\"]:not(:disabled) {\n  cursor: pointer; }\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\ntextarea {\n  overflow: auto;\n  resize: vertical; }\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\nprogress {\n  vertical-align: baseline; }\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\noutput {\n  display: inline-block; }\nsummary {\n  display: list-item;\n  cursor: pointer; }\ntemplate {\n  display: none; }\n[hidden] {\n  display: none !important; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\nh1, .h1 {\n  font-size: 2.5rem; }\nh2, .h2 {\n  font-size: 2rem; }\nh3, .h3 {\n  font-size: 1.75rem; }\nh4, .h4 {\n  font-size: 1.5rem; }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014\\00A0\"; }\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n.figure {\n  display: inline-block; }\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word; }\na > code {\n    color: inherit; }\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\npre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px; } }\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px; } }\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px; } }\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px; } }\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%; }\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%; }\n.row-cols-3 > * {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%; }\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%; }\n.row-cols-6 > * {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; }\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  order: -1; }\n.order-last {\n  order: 13; }\n.order-0 {\n  order: 0; }\n.order-1 {\n  order: 1; }\n.order-2 {\n  order: 2; }\n.order-3 {\n  order: 3; }\n.order-4 {\n  order: 4; }\n.order-5 {\n  order: 5; }\n.order-6 {\n  order: 6; }\n.order-7 {\n  order: 7; }\n.order-8 {\n  order: 8; }\n.order-9 {\n  order: 9; }\n.order-10 {\n  order: 10; }\n.order-11 {\n  order: 11; }\n.order-12 {\n  order: 12; }\n.offset-1 {\n  margin-left: 8.33333%; }\n.offset-2 {\n  margin-left: 16.66667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333%; }\n.offset-5 {\n  margin-left: 41.66667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333%; }\n.offset-8 {\n  margin-left: 66.66667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333%; }\n.offset-11 {\n  margin-left: 91.66667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-md-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-md-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7abaff; }\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb; }\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e; }\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda; }\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e; }\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e; }\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #343a40; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #454d55; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n.form-control:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #495057; }\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.form-control::-moz-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\ninput[type=\"date\"].form-control,\ninput[type=\"time\"].form-control,\ninput[type=\"datetime-local\"].form-control,\ninput[type=\"month\"].form-control {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\ntextarea.form-control {\n  height: auto; }\n.form-group {\n  margin-bottom: 1rem; }\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n.form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n.form-check-input[disabled] ~ .form-check-label,\n  .form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n.form-check-label {\n  margin-bottom: 0; }\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n.form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem; }\n.form-row > .col > .valid-tooltip,\n  .form-row > [class*=\"col-\"] > .valid-tooltip {\n    left: 5px; }\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat; }\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    border-color: #28a745; }\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57; }\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745; }\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n.form-row > .col > .invalid-tooltip,\n  .form-row > [class*=\"col-\"] > .invalid-tooltip {\n    left: 5px; }\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat; }\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    border-color: #dc3545; }\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d; }\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545; }\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n.form-inline .form-check {\n    width: 100%; }\n@media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group,\n    .form-inline .custom-select {\n      width: auto; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      flex-shrink: 0;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      align-items: center;\n      justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n.btn:hover {\n    color: #212529;\n    text-decoration: none; }\n.btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n.btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n.btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); }\n.btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf; }\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); }\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62; }\n.btn-secondary:focus, .btn-secondary.focus {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62;\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n.btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b; }\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n.btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5); }\n.btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5); }\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n.btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n.btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b;\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5); }\n.btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f; }\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5); }\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n.btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n.btn-warning:focus, .btn-warning.focus {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00;\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5); }\n.btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5); }\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n.btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130;\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5); }\n.btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5); }\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n.btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n.btn-light:focus, .btn-light.focus {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5;\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n.btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df; }\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n.btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n.btn-dark:focus, .btn-dark.focus {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124;\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n.btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d; }\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n.btn-outline-primary {\n  color: #007bff;\n  border-color: #007bff; }\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d; }\n.btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745; }\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8; }\n.btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107; }\n.btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545; }\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa; }\n.btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40; }\n.btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none; }\n.btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n.btn-link:focus, .btn-link.focus {\n    text-decoration: underline; }\n.btn-link:disabled, .btn-link.disabled {\n    color: #6c757d;\n    pointer-events: none; }\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n.btn-block {\n  display: block;\n  width: 100%; }\n.btn-block + .btn-block {\n    margin-top: 0.5rem; }\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n.fade {\n  transition: opacity 0.15s linear; }\n@media (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n.fade:not(.show) {\n    opacity: 0; }\n.collapse:not(.show) {\n  display: none; }\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n.dropdown-toggle {\n  white-space: nowrap; }\n.dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent; }\n.dropdown-toggle:empty::after {\n    margin-left: 0; }\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto; } }\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto; } }\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto; } }\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto; } }\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n.dropleft .dropdown-toggle::after {\n  display: none; }\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto; }\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n.dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #e9ecef; }\n.dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n.dropdown-item.disabled, .dropdown-item:disabled {\n    color: #adb5bd;\n    pointer-events: none;\n    background-color: transparent; }\n.dropdown-menu.show {\n  display: block; }\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n.btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 1 1 auto; }\n.btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n.btn-toolbar .input-group {\n    width: auto; }\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n.dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropright .dropdown-toggle-split::after {\n    margin-left: 0; }\n.dropleft .dropdown-toggle-split::before {\n    margin-right: 0; }\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n.btn-group-vertical > .btn,\n  .btn-group-vertical > .btn-group {\n    width: 100%; }\n.btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) {\n    margin-top: -1px; }\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n.btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n.input-group > .form-control,\n  .input-group > .form-control-plaintext,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0;\n    margin-bottom: 0; }\n.input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .form-control-plaintext + .form-control,\n    .input-group > .form-control-plaintext + .custom-select,\n    .input-group > .form-control-plaintext + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n.input-group > .form-control:focus,\n  .input-group > .custom-select:focus,\n  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3; }\n.input-group > .custom-file .custom-file-input:focus {\n    z-index: 4; }\n.input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n.input-group > .custom-file {\n    display: flex;\n    align-items: center; }\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:first-child) .custom-file-label {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n.input-group:not(.has-validation) > .form-control:not(:last-child),\n  .input-group:not(.has-validation) > .custom-select:not(:last-child),\n  .input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label::after {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n.input-group.has-validation > .form-control:nth-last-child(n + 3),\n  .input-group.has-validation > .custom-select:nth-last-child(n + 3),\n  .input-group.has-validation > .custom-file:nth-last-child(n + 3) .custom-file-label::after {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n.input-group-prepend,\n.input-group-append {\n  display: flex; }\n.input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n.input-group-prepend .btn:focus,\n    .input-group-append .btn:focus {\n      z-index: 3; }\n.input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n.input-group-prepend {\n  margin-right: -1px; }\n.input-group-append {\n  margin-left: -1px; }\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px); }\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px); }\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem; }\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact; }\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem; }\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.25rem;\n  opacity: 0; }\n.custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: #007bff;\n    background-color: #007bff; }\n.custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: #80bdff; }\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff;\n    border-color: #b3d7ff; }\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top; }\n.custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    background-color: #fff;\n    border: #adb5bd solid 1px; }\n.custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background: 50% / 50% 50% no-repeat; }\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\"); }\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff; }\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\"); }\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\"); }\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-switch {\n  padding-left: 2.25rem; }\n.custom-switch .custom-control-label::before {\n    left: -2.25rem;\n    width: 1.75rem;\n    pointer-events: all;\n    border-radius: 0.5rem; }\n.custom-switch .custom-control-label::after {\n    top: calc(0.25rem + 2px);\n    left: calc(-2.25rem + 2px);\n    width: calc(1rem - 4px);\n    height: calc(1rem - 4px);\n    background-color: #adb5bd;\n    border-radius: 0.5rem;\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n      .custom-switch .custom-control-label::after {\n        transition: none; } }\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n    background-color: #fff;\n    transform: translateX(0.75rem); }\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n    background-color: rgba(0, 123, 255, 0.5); }\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n.custom-select:focus {\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n.custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n.custom-select::-ms-expand {\n    display: none; }\n.custom-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #495057; }\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem; }\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem; }\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0; }\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  overflow: hidden;\n  opacity: 0; }\n.custom-file-input:focus ~ .custom-file-label {\n    border-color: #80bdff;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-file-input[disabled] ~ .custom-file-label,\n  .custom-file-input:disabled ~ .custom-file-label {\n    background-color: #e9ecef; }\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse); }\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  overflow: hidden;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: calc(1.5em + 0.75rem);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: inherit;\n    border-radius: 0 0.25rem 0.25rem 0; }\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n.custom-range:focus {\n    outline: 0; }\n.custom-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-range:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-range::-moz-focus-outer {\n    border: 0; }\n.custom-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -webkit-appearance: none;\n            appearance: none; }\n@media (prefers-reduced-motion: reduce) {\n      .custom-range::-webkit-slider-thumb {\n        -webkit-transition: none;\n        transition: none; } }\n.custom-range::-webkit-slider-thumb:active {\n      background-color: #b3d7ff; }\n.custom-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n.custom-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -moz-appearance: none;\n         appearance: none; }\n@media (prefers-reduced-motion: reduce) {\n      .custom-range::-moz-range-thumb {\n        -moz-transition: none;\n        transition: none; } }\n.custom-range::-moz-range-thumb:active {\n      background-color: #b3d7ff; }\n.custom-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n.custom-range::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n@media (prefers-reduced-motion: reduce) {\n      .custom-range::-ms-thumb {\n        -ms-transition: none;\n        transition: none; } }\n.custom-range::-ms-thumb:active {\n      background-color: #b3d7ff; }\n.custom-range::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem; }\n.custom-range::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n.custom-range::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n.custom-range:disabled::-webkit-slider-thumb {\n    background-color: #adb5bd; }\n.custom-range:disabled::-webkit-slider-runnable-track {\n    cursor: default; }\n.custom-range:disabled::-moz-range-thumb {\n    background-color: #adb5bd; }\n.custom-range:disabled::-moz-range-track {\n    cursor: default; }\n.custom-range:disabled::-ms-thumb {\n    background-color: #adb5bd; }\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .custom-control-label::before,\n    .custom-file-label,\n    .custom-select {\n      transition: none; } }\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n.nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n.nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default; }\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n.nav-tabs .nav-link {\n    margin-bottom: -1px;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n.nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n.nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n.tab-content > .tab-pane {\n  display: none; }\n.tab-content > .active {\n  display: block; }\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n.navbar .container,\n  .navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n.navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: 50% / 100% 100% no-repeat; }\n.navbar-nav-scroll {\n  max-height: 75vh;\n  overflow-y: auto; }\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-expand .navbar-nav {\n    flex-direction: row; }\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n    flex-wrap: nowrap; }\n.navbar-expand .navbar-nav-scroll {\n    overflow: visible; }\n.navbar-expand .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n.navbar-expand .navbar-toggler {\n    display: none; }\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n.navbar-dark .navbar-brand {\n  color: #fff; }\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-text a {\n    color: #fff; }\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n.card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n.card > .list-group {\n    border-top: inherit;\n    border-bottom: inherit; }\n.card > .list-group:first-child {\n      border-top-width: 0;\n      border-top-left-radius: calc(0.25rem - 1px);\n      border-top-right-radius: calc(0.25rem - 1px); }\n.card > .list-group:last-child {\n      border-bottom-width: 0;\n      border-bottom-right-radius: calc(0.25rem - 1px);\n      border-bottom-left-radius: calc(0.25rem - 1px); }\n.card > .card-header + .list-group,\n  .card > .list-group + .card-footer {\n    border-top: 0; }\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem; }\n.card-title {\n  margin-bottom: 0.75rem; }\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n.card-text:last-child {\n  margin-bottom: 0; }\n.card-link:hover {\n  text-decoration: none; }\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n.card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n.card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: calc(0.25rem - 1px); }\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0;\n  width: 100%; }\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n.card-deck .card {\n  margin-bottom: 15px; }\n@media (min-width: 576px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px; }\n    .card-deck .card {\n      flex: 1 0;\n      margin-right: 15px;\n      margin-bottom: 0;\n      margin-left: 15px; } }\n.card-group > .card {\n  margin-bottom: 15px; }\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap; }\n    .card-group > .card {\n      flex: 1 0;\n      margin-bottom: 0; }\n      .card-group > .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group > .card:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-top,\n        .card-group > .card:not(:last-child) .card-header {\n          border-top-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-bottom,\n        .card-group > .card:not(:last-child) .card-footer {\n          border-bottom-right-radius: 0; }\n      .card-group > .card:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-top,\n        .card-group > .card:not(:first-child) .card-header {\n          border-top-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-bottom,\n        .card-group > .card:not(:first-child) .card-footer {\n          border-bottom-left-radius: 0; } }\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n@media (min-width: 576px) {\n  .card-columns {\n    -moz-column-count: 3;\n         column-count: 3;\n    grid-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n.accordion {\n  overflow-anchor: none; }\n.accordion > .card {\n    overflow: hidden; }\n.accordion > .card:not(:last-of-type) {\n      border-bottom: 0;\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0; }\n.accordion > .card:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n.accordion > .card > .card-header {\n      border-radius: 0;\n      margin-bottom: -1px; }\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n.breadcrumb-item + .breadcrumb-item::before {\n    float: left;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\"; }\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n.breadcrumb-item.active {\n  color: #6c757d; }\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n.page-link:hover {\n    z-index: 2;\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n.page-link:focus {\n    z-index: 3;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .badge {\n      transition: none; } }\na.badge:hover, a.badge:focus {\n    text-decoration: none; }\n.badge:empty {\n    display: none; }\n.btn .badge {\n  position: relative;\n  top: -1px; }\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\na.badge-primary:hover, a.badge-primary:focus {\n    color: #fff;\n    background-color: #0062cc; }\na.badge-primary:focus, a.badge-primary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\na.badge-secondary:hover, a.badge-secondary:focus {\n    color: #fff;\n    background-color: #545b62; }\na.badge-secondary:focus, a.badge-secondary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\na.badge-success:hover, a.badge-success:focus {\n    color: #fff;\n    background-color: #1e7e34; }\na.badge-success:focus, a.badge-success.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\na.badge-info:hover, a.badge-info:focus {\n    color: #fff;\n    background-color: #117a8b; }\na.badge-info:focus, a.badge-info.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\na.badge-warning:hover, a.badge-warning:focus {\n    color: #212529;\n    background-color: #d39e00; }\na.badge-warning:focus, a.badge-warning.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\na.badge-danger:hover, a.badge-danger:focus {\n    color: #fff;\n    background-color: #bd2130; }\na.badge-danger:focus, a.badge-danger.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\na.badge-light:hover, a.badge-light:focus {\n    color: #212529;\n    background-color: #dae0e5; }\na.badge-light:focus, a.badge-light.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\na.badge-dark:hover, a.badge-dark:focus {\n    color: #fff;\n    background-color: #1d2124; }\na.badge-dark:focus, a.badge-dark.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n@media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.alert-heading {\n  color: inherit; }\n.alert-link {\n  font-weight: 700; }\n.alert-dismissible {\n  padding-right: 4rem; }\n.alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n.alert-primary hr {\n    border-top-color: #9fcdff; }\n.alert-primary .alert-link {\n    color: #002752; }\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db; }\n.alert-secondary hr {\n    border-top-color: #c8cbcf; }\n.alert-secondary .alert-link {\n    color: #202326; }\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n.alert-success hr {\n    border-top-color: #b1dfbb; }\n.alert-success .alert-link {\n    color: #0b2e13; }\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n.alert-info hr {\n    border-top-color: #abdde5; }\n.alert-info .alert-link {\n    color: #062c33; }\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n.alert-warning hr {\n    border-top-color: #ffe8a1; }\n.alert-warning .alert-link {\n    color: #533f03; }\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n.alert-danger hr {\n    border-top-color: #f1b0b7; }\n.alert-danger .alert-link {\n    color: #491217; }\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n.alert-light hr {\n    border-top-color: #ececf6; }\n.alert-light .alert-link {\n    color: #686868; }\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n.alert-dark hr {\n    border-top-color: #b9bbbe; }\n.alert-dark .alert-link {\n    color: #040505; }\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n          animation: 1s linear infinite progress-bar-stripes; }\n@media (prefers-reduced-motion: reduce) {\n    .progress-bar-animated {\n      -webkit-animation: none;\n              animation: none; } }\n.media {\n  display: flex;\n  align-items: flex-start; }\n.media-body {\n  flex: 1 1; }\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem; }\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n.list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 1;\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n.list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n.list-group-item:first-child {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit; }\n.list-group-item:last-child {\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit; }\n.list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: #fff; }\n.list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.list-group-item + .list-group-item {\n    border-top-width: 0; }\n.list-group-item + .list-group-item.active {\n      margin-top: -1px;\n      border-top-width: 1px; }\n.list-group-horizontal {\n  flex-direction: row; }\n.list-group-horizontal > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n.list-group-horizontal > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; }\n.list-group-horizontal > .list-group-item.active {\n    margin-top: 0; }\n.list-group-horizontal > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0; }\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n      margin-left: -1px;\n      border-left-width: 1px; }\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row; }\n    .list-group-horizontal-sm > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row; }\n    .list-group-horizontal-md > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-md > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-md > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row; }\n    .list-group-horizontal-lg > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row; }\n    .list-group-horizontal-xl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n.list-group-flush {\n  border-radius: 0; }\n.list-group-flush > .list-group-item {\n    border-width: 0 0 1px; }\n.list-group-flush > .list-group-item:last-child {\n      border-bottom-width: 0; }\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #004085;\n    background-color: #9fcdff; }\n.list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #383d41;\n    background-color: #c8cbcf; }\n.list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #383d41;\n    border-color: #383d41; }\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #155724;\n    background-color: #b1dfbb; }\n.list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #0c5460;\n    background-color: #abdde5; }\n.list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #856404;\n    background-color: #ffe8a1; }\n.list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #721c24;\n    background-color: #f1b0b7; }\n.list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #818182;\n    background-color: #ececf6; }\n.list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n.list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n.close:hover {\n    color: #000;\n    text-decoration: none; }\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n    opacity: .75; }\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0; }\na.close.disabled {\n  pointer-events: none; }\n.toast {\n  flex-basis: 350px;\n  max-width: 350px;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 0.25rem; }\n.toast:not(:last-child) {\n    margin-bottom: 0.75rem; }\n.toast.showing {\n    opacity: 1; }\n.toast.show {\n    display: block;\n    opacity: 1; }\n.toast.hide {\n    display: none; }\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n.toast-body {\n  padding: 0.75rem; }\n.modal-open {\n  overflow: hidden; }\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n.modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -50px); }\n@media (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n.modal.show .modal-dialog {\n    transform: none; }\n.modal.modal-static .modal-dialog {\n    transform: scale(1.02); }\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem); }\n.modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 1rem);\n    overflow: hidden; }\n.modal-dialog-scrollable .modal-header,\n  .modal-dialog-scrollable .modal-footer {\n    flex-shrink: 0; }\n.modal-dialog-scrollable .modal-body {\n    overflow-y: auto; }\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem); }\n.modal-dialog-centered::before {\n    display: block;\n    height: calc(100vh - 1rem);\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    content: \"\"; }\n.modal-dialog-centered.modal-dialog-scrollable {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%; }\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n      max-height: none; }\n.modal-dialog-centered.modal-dialog-scrollable::before {\n      content: none; }\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000; }\n.modal-backdrop.fade {\n    opacity: 0; }\n.modal-backdrop.show {\n    opacity: 0.5; }\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n.modal-header .close {\n    padding: 1rem 1rem;\n    margin: -1rem -1rem -1rem auto; }\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px); }\n.modal-footer > * {\n    margin: 0.25rem; }\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem); }\n    .modal-dialog-scrollable .modal-content {\n      max-height: calc(100vh - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n    .modal-dialog-centered::before {\n      height: calc(100vh - 3.5rem);\n      height: -webkit-min-content;\n      height: -moz-min-content;\n      height: min-content; }\n  .modal-sm {\n    max-width: 300px; } }\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px; } }\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n.tooltip.show {\n    opacity: 0.9; }\n.tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n.tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n.popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n.popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\n    bottom: calc(-0.5rem - 1px); }\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\n      bottom: 0;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\n      bottom: 1px;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #fff; }\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\n    left: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\n      left: 0;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\n      left: 1px;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #fff; }\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\n    top: calc(-0.5rem - 1px); }\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\n      top: 0;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\n      top: 1px;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #fff; }\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\n    right: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\n      right: 0;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\n      right: 1px;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #fff; }\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n.popover-header:empty {\n    display: none; }\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n.carousel {\n  position: relative; }\n.carousel.pointer-event {\n  touch-action: pan-y; }\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n.carousel-inner::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .carousel-item {\n      transition: none; } }\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%); }\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none; }\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1; }\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s; }\n@media (prefers-reduced-motion: reduce) {\n    .carousel-fade .active.carousel-item-left,\n    .carousel-fade .active.carousel-item-right {\n      transition: none; } }\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .carousel-control-prev,\n    .carousel-control-next {\n      transition: none; } }\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: 0.9; }\n.carousel-control-prev {\n  left: 0; }\n.carousel-control-next {\n  right: 0; }\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: 50% / 100% 100% no-repeat; }\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\"); }\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\"); }\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n.carousel-indicators li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: .5;\n    transition: opacity 0.6s ease; }\n@media (prefers-reduced-motion: reduce) {\n      .carousel-indicators li {\n        transition: none; } }\n.carousel-indicators .active {\n    opacity: 1; }\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: .75s linear infinite spinner-border;\n          animation: .75s linear infinite spinner-border; }\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em; }\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1;\n    transform: none; } }\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1;\n    transform: none; } }\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: .75s linear infinite spinner-grow;\n          animation: .75s linear infinite spinner-grow; }\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem; }\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n  .spinner-grow {\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s; } }\n.align-baseline {\n  vertical-align: baseline !important; }\n.align-top {\n  vertical-align: top !important; }\n.align-middle {\n  vertical-align: middle !important; }\n.align-bottom {\n  vertical-align: bottom !important; }\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n.align-text-top {\n  vertical-align: text-top !important; }\n.bg-primary {\n  background-color: #007bff !important; }\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important; }\n.bg-secondary {\n  background-color: #6c757d !important; }\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n.bg-success {\n  background-color: #28a745 !important; }\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important; }\n.bg-info {\n  background-color: #17a2b8 !important; }\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important; }\n.bg-warning {\n  background-color: #ffc107 !important; }\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important; }\n.bg-danger {\n  background-color: #dc3545 !important; }\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important; }\n.bg-light {\n  background-color: #f8f9fa !important; }\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n.bg-dark {\n  background-color: #343a40 !important; }\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n.bg-white {\n  background-color: #fff !important; }\n.bg-transparent {\n  background-color: transparent !important; }\n.border {\n  border: 1px solid #dee2e6 !important; }\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n.border-0 {\n  border: 0 !important; }\n.border-top-0 {\n  border-top: 0 !important; }\n.border-right-0 {\n  border-right: 0 !important; }\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n.border-left-0 {\n  border-left: 0 !important; }\n.border-primary {\n  border-color: #007bff !important; }\n.border-secondary {\n  border-color: #6c757d !important; }\n.border-success {\n  border-color: #28a745 !important; }\n.border-info {\n  border-color: #17a2b8 !important; }\n.border-warning {\n  border-color: #ffc107 !important; }\n.border-danger {\n  border-color: #dc3545 !important; }\n.border-light {\n  border-color: #f8f9fa !important; }\n.border-dark {\n  border-color: #343a40 !important; }\n.border-white {\n  border-color: #fff !important; }\n.rounded-sm {\n  border-radius: 0.2rem !important; }\n.rounded {\n  border-radius: 0.25rem !important; }\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-lg {\n  border-radius: 0.3rem !important; }\n.rounded-circle {\n  border-radius: 50% !important; }\n.rounded-pill {\n  border-radius: 50rem !important; }\n.rounded-0 {\n  border-radius: 0 !important; }\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: flex !important; }\n.d-inline-flex {\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n.embed-responsive::before {\n    display: block;\n    content: \"\"; }\n.embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n.flex-row {\n  flex-direction: row !important; }\n.flex-column {\n  flex-direction: column !important; }\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n.flex-wrap {\n  flex-wrap: wrap !important; }\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  flex: 1 1 auto !important; }\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n.justify-content-start {\n  justify-content: flex-start !important; }\n.justify-content-end {\n  justify-content: flex-end !important; }\n.justify-content-center {\n  justify-content: center !important; }\n.justify-content-between {\n  justify-content: space-between !important; }\n.justify-content-around {\n  justify-content: space-around !important; }\n.align-items-start {\n  align-items: flex-start !important; }\n.align-items-end {\n  align-items: flex-end !important; }\n.align-items-center {\n  align-items: center !important; }\n.align-items-baseline {\n  align-items: baseline !important; }\n.align-items-stretch {\n  align-items: stretch !important; }\n.align-content-start {\n  align-content: flex-start !important; }\n.align-content-end {\n  align-content: flex-end !important; }\n.align-content-center {\n  align-content: center !important; }\n.align-content-between {\n  align-content: space-between !important; }\n.align-content-around {\n  align-content: space-around !important; }\n.align-content-stretch {\n  align-content: stretch !important; }\n.align-self-auto {\n  align-self: auto !important; }\n.align-self-start {\n  align-self: flex-start !important; }\n.align-self-end {\n  align-self: flex-end !important; }\n.align-self-center {\n  align-self: center !important; }\n.align-self-baseline {\n  align-self: baseline !important; }\n.align-self-stretch {\n  align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n.float-left {\n  float: left !important; }\n.float-right {\n  float: right !important; }\n.float-none {\n  float: none !important; }\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n      -ms-user-select: all !important;\n          user-select: all !important; }\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n      -ms-user-select: auto !important;\n          user-select: auto !important; }\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n.overflow-auto {\n  overflow: auto !important; }\n.overflow-hidden {\n  overflow: hidden !important; }\n.position-static {\n  position: static !important; }\n.position-relative {\n  position: relative !important; }\n.position-absolute {\n  position: absolute !important; }\n.position-fixed {\n  position: fixed !important; }\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n.shadow-none {\n  box-shadow: none !important; }\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.w-auto {\n  width: auto !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.h-auto {\n  height: auto !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.min-vw-100 {\n  min-width: 100vw !important; }\n.min-vh-100 {\n  min-height: 100vh !important; }\n.vw-100 {\n  width: 100vw !important; }\n.vh-100 {\n  height: 100vh !important; }\n.m-0 {\n  margin: 0 !important; }\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n.m-1 {\n  margin: 0.25rem !important; }\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n.m-2 {\n  margin: 0.5rem !important; }\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n.m-3 {\n  margin: 1rem !important; }\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n.m-4 {\n  margin: 1.5rem !important; }\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n.m-5 {\n  margin: 3rem !important; }\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n.p-0 {\n  padding: 0 !important; }\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n.p-1 {\n  padding: 0.25rem !important; }\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n.p-2 {\n  padding: 0.5rem !important; }\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n.p-3 {\n  padding: 1rem !important; }\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n.p-4 {\n  padding: 1.5rem !important; }\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n.p-5 {\n  padding: 3rem !important; }\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n.m-n1 {\n  margin: -0.25rem !important; }\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important; }\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important; }\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important; }\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important; }\n.m-n2 {\n  margin: -0.5rem !important; }\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important; }\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important; }\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important; }\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important; }\n.m-n3 {\n  margin: -1rem !important; }\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important; }\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important; }\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important; }\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important; }\n.m-n4 {\n  margin: -1.5rem !important; }\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important; }\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important; }\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important; }\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important; }\n.m-n5 {\n  margin: -3rem !important; }\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important; }\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important; }\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important; }\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important; }\n.m-auto {\n  margin: auto !important; }\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-n1 {\n    margin: -0.25rem !important; }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n2 {\n    margin: -0.5rem !important; }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important; }\n  .m-sm-n3 {\n    margin: -1rem !important; }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important; }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important; }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important; }\n  .m-sm-n4 {\n    margin: -1.5rem !important; }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important; }\n  .m-sm-n5 {\n    margin: -3rem !important; }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important; }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important; }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-n1 {\n    margin: -0.25rem !important; }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important; }\n  .m-md-n2 {\n    margin: -0.5rem !important; }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important; }\n  .m-md-n3 {\n    margin: -1rem !important; }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important; }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important; }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important; }\n  .m-md-n4 {\n    margin: -1.5rem !important; }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important; }\n  .m-md-n5 {\n    margin: -3rem !important; }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important; }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important; }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-n1 {\n    margin: -0.25rem !important; }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n2 {\n    margin: -0.5rem !important; }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important; }\n  .m-lg-n3 {\n    margin: -1rem !important; }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important; }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important; }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important; }\n  .m-lg-n4 {\n    margin: -1.5rem !important; }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important; }\n  .m-lg-n5 {\n    margin: -3rem !important; }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important; }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important; }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-n1 {\n    margin: -0.25rem !important; }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n2 {\n    margin: -0.5rem !important; }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important; }\n  .m-xl-n3 {\n    margin: -1rem !important; }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important; }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important; }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important; }\n  .m-xl-n4 {\n    margin: -1.5rem !important; }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important; }\n  .m-xl-n5 {\n    margin: -3rem !important; }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important; }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important; }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0); }\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important; }\n.text-justify {\n  text-align: justify !important; }\n.text-wrap {\n  white-space: normal !important; }\n.text-nowrap {\n  white-space: nowrap !important; }\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.text-left {\n  text-align: left !important; }\n.text-right {\n  text-align: right !important; }\n.text-center {\n  text-align: center !important; }\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n.text-lowercase {\n  text-transform: lowercase !important; }\n.text-uppercase {\n  text-transform: uppercase !important; }\n.text-capitalize {\n  text-transform: capitalize !important; }\n.font-weight-light {\n  font-weight: 300 !important; }\n.font-weight-lighter {\n  font-weight: lighter !important; }\n.font-weight-normal {\n  font-weight: 400 !important; }\n.font-weight-bold {\n  font-weight: 700 !important; }\n.font-weight-bolder {\n  font-weight: bolder !important; }\n.font-italic {\n  font-style: italic !important; }\n.text-white {\n  color: #fff !important; }\n.text-primary {\n  color: #007bff !important; }\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important; }\n.text-secondary {\n  color: #6c757d !important; }\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important; }\n.text-success {\n  color: #28a745 !important; }\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important; }\n.text-info {\n  color: #17a2b8 !important; }\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important; }\n.text-warning {\n  color: #ffc107 !important; }\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important; }\n.text-danger {\n  color: #dc3545 !important; }\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important; }\n.text-light {\n  color: #f8f9fa !important; }\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important; }\n.text-dark {\n  color: #343a40 !important; }\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important; }\n.text-body {\n  color: #212529 !important; }\n.text-muted {\n  color: #6c757d !important; }\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.text-decoration-none {\n  text-decoration: none !important; }\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important; }\n.text-reset {\n  color: inherit !important; }\n.visible {\n  visibility: visible !important; }\n.invisible {\n  visibility: hidden !important; }\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark {\n    color: inherit; }\n    .table-dark th,\n    .table-dark td,\n    .table-dark thead th,\n    .table-dark tbody + tbody {\n      border-color: #dee2e6; }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6; } }\n", "",{"version":3,"sources":["/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/bootstrap.scss","application.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_root.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_reboot.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_variables.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/vendor/_rfs.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_hover.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_type.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_lists.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_images.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_image.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_border-radius.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_code.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_grid.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_grid.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_grid-framework.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_tables.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_table-row.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_functions.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_forms.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_transition.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_forms.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_gradients.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_buttons.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_buttons.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_transitions.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_dropdown.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_caret.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_nav-divider.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_button-group.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_input-group.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_custom-forms.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_nav.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_navbar.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_card.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_breadcrumb.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_pagination.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_pagination.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_badge.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_badge.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_jumbotron.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_alert.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_alert.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_progress.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_media.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_list-group.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_list-group.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_close.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_toasts.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_modal.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_tooltip.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_reset-text.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_popover.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_carousel.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_clearfix.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_spinners.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_align.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_background-variant.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_background.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_borders.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_display.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_embed.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_flex.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_float.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_interactions.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_overflow.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_position.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_screenreaders.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_screen-reader.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_shadows.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_sizing.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_spacing.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_stretched-link.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_text.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_text-truncate.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_text-emphasis.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/mixins/_text-hide.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/utilities/_visibility.scss","/home/kolan4ick/github/EventsCatalogue/node_modules/bootstrap/scss/_print.scss"],"names":[],"mappings":"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zLf;EE+LE,wBAAwB,EAAA;AI5d1B;;EAEE,qBHqSuC;EGnSvC,gBHqS+B;EGpS/B,gBHqS+B,EAAA;AGjSjC;EFgHM,iBAtCY,EAAA;AEzElB;EF+GM,eAtCY,EAAA;AExElB;EF8GM,kBAtCY,EAAA;AEvElB;EF6GM,iBAtCY,EAAA;AEtElB;EF4GM,kBAtCY,EAAA;AErElB;EF2GM,eAtCY,EAAA;AEnElB;EFyGM,kBAtCY;EEjEhB,gBHuS+B,EAAA;AGnSjC;EFmGM,eAtCY;EE3DhB,gBH0R+B;EGzR/B,gBHiR+B,EAAA;AG/QjC;EF8FM,iBAtCY;EEtDhB,gBHsR+B;EGrR/B,gBH4Q+B,EAAA;AG1QjC;EFyFM,iBAtCY;EEjDhB,gBHkR+B;EGjR/B,gBHuQ+B,EAAA;AGrQjC;EFoFM,iBAtCY;EE5ChB,gBH8Q+B;EG7Q/B,gBHkQ+B,EAAA;ADrOjC;EIpBE,gBHgFW;EG/EX,mBH+EW;EG9EX,SAAS;EACT,wCHzCa,EAAA;AGiDf;;EFMI,cAAW;EEHb,gBH0N+B,EAAA;AGvNjC;;EAEE,cHkQgC;EGjQhC,yBH0QmC,EAAA;AGlQrC;EC/EE,eAAe;EACf,gBAAgB,EAAA;ADmFlB;ECpFE,eAAe;EACf,gBAAgB,EAAA;ADsFlB;EACE,qBAAqB,EAAA;AADvB;IAII,oBHoP+B,EAAA;AG1OnC;EFjCI,cAAW;EEmCb,yBAAyB,EAAA;AAI3B;EACE,mBHuBW;ECRP,kBAtCY,EAAA;AE2BlB;EACE,cAAc;EF7CZ,cAAW;EE+Cb,cH1GgB,EAAA;AGuGlB;IAMI,qBAAqB,EAAA;AEnHzB;ECIE,eAAe;EAGf,YAAY,EAAA;ADDd;EACE,gBLmgCwC;EKlgCxC,sBLRa;EKSb,yBLNgB;EOQd,sBP6NgC;EMpOlC,eAAe;EAGf,YAAY,EAAA;ADcd;EAEE,qBAAqB,EAAA;AAGvB;EACE,qBAA0B;EAC1B,cAAc,EAAA;AAGhB;EJkCI,cAAW;EIhCb,cL3BgB,EAAA;AQZlB;EPuEI,gBAAW;EOrEb,cRmCe;EQlCf,qBAAqB,EAAA;AAGrB;IACE,cAAc,EAAA;AAKlB;EACE,sBRulCuC;EC7hCrC,gBAAW;EOxDb,WRT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,EAAA;ADQvF;EC3DA,WrBCa;EmBDX,yBnBSc;EqBPhB,qBrBOgB,EAAA;AEHhB;ImBAE,WrBLW;ImBDX,yBEDoF;IASpF,qBATyH,EAAA;AAY3H;IAEE,WrBZW;ImBDX,yBEDoF;IAgBpF,qBAhByH;IAqBvH,8CAAiF,EAAA;AAKrF;IAEE,WrB1BW;IqB2BX,yBrBnBc;IqBoBd,qBrBpBc,EAAA;AqB2BhB;;IAGE,WrBtCW;IqBuCX,yBAzCuK;IA6CvK,qBA7C+M,EAAA;AA+C/M;;MAKI,8CAAiF,EAAA;ADcvF;ECPA,crB7Be;EqB8Bf,qBrB9Be,EAAA;AEvBf;ImBwDE,WrB7DW;IqB8DX,yBrBlCa;IqBmCb,qBrBnCa,EAAA;AqBsCf;IAEE,+CrBxCa,EAAA;AqB2Cf;IAEE,crB7Ca;IqB8Cb,6BAA6B,EAAA;AAG/B;;IAGE,WrBhFW;IqBiFX,yBrBrDa;IqBsDb,qBrBtDa,EAAA;AqBwDb;;MAKI,+CrB7DS,EAAA;AoBoCf;ECPA,crBnDgB;EqBoDhB,qBrBpDgB,EAAA;AEDhB;ImBwDE,WrB7DW;IqB8DX,yBrBxDc;IqByDd,qBrBzDc,EAAA;AqB4DhB;IAEE,iDrB9Dc,EAAA;AqBiEhB;IAEE,crBnEc;IqBoEd,6BAA6B,EAAA;AAG/B;;IAGE,WrBhFW;IqBiFX,yBrB3Ec;IqB4Ed,qBrB5Ec,EAAA;AqB8Ed;;MAKI,iDrBnFU,EAAA;AoB0DhB;ECPA,crBtBe;EqBuBf,qBrBvBe,EAAA;AE9Bf;ImBwDE,WrB7DW;IqB8DX,yBrB3Ba;IqB4Bb,qBrB5Ba,EAAA;AqB+Bf;IAEE,+CrBjCa,EAAA;AqBoCf;IAEE,crBtCa;IqBuCb,6BAA6B,EAAA;AAG/B;;IAGE,WrBhFW;IqBiFX,yBrB9Ca;IqB+Cb,qBrB/Ca,EAAA;AqBiDb;;MAKI,+CrBtDS,EAAA;AoB6Bf;ECPA,crBpBe;EqBqBf,qBrBrBe,EAAA;AEhCf;ImBwDE,WrB7DW;IqB8DX,yBrBzBa;IqB0Bb,qBrB1Ba,EAAA;AqB6Bf;IAEE,gDrB/Ba,EAAA;AqBkCf;IAEE,crBpCa;IqBqCb,6BAA6B,EAAA;AAG/B;;IAGE,WrBhFW;IqBiFX,yBrB5Ca;IqB6Cb,qBrB7Ca,EAAA;AqB+Cb;;MAKI,gDrBpDS,EAAA;AoB2Bf;ECPA,crBvBe;EqBwBf,qBrBxBe,EAAA;AE7Bf;ImBwDE,crBpDc;IqBqDd,yBrB5Ba;IqB6Bb,qBrB7Ba,EAAA;AqBgCf;IAEE,+CrBlCa,EAAA;AqBqCf;IAEE,crBvCa;IqBwCb,6BAA6B,EAAA;AAG/B;;IAGE,crBvEc;IqBwEd,yBrB/Ca;IqBgDb,qBrBhDa,EAAA;AqBkDb;;MAKI,+CrBvDS,EAAA;AoB8Bf;ECPA,crBzBe;EqB0Bf,qBrB1Be,EAAA;AE3Bf;ImBwDE,WrB7DW;IqB8DX,yBrB9Ba;IqB+Bb,qBrB/Ba,EAAA;AqBkCf;IAEE,+CrBpCa,EAAA;AqBuCf;IAEE,crBzCa;IqB0Cb,6BAA6B,EAAA;AAG/B;;IAGE,WrBhFW;IqBiFX,yBrBjDa;IqBkDb,qBrBlDa,EAAA;AqBoDb;;MAKI,+CrBzDS,EAAA;AoBgCf;ECPA,crBxDgB;EqByDhB,qBrBzDgB,EAAA;AEIhB;ImBwDE,crBpDc;IqBqDd,yBrB7Dc;IqB8Dd,qBrB9Dc,EAAA;AqBiEhB;IAEE,iDrBnEc,EAAA;AqBsEhB;IAEE,crBxEc;IqByEd,6BAA6B,EAAA;AAG/B;;IAGE,crBvEc;IqBwEd,yBrBhFc;IqBiFd,qBrBjFc,EAAA;AqBmFd;;MAKI,iDrBxFU,EAAA;AoB+DhB;ECPA,crBjDgB;EqBkDhB,qBrBlDgB,EAAA;AEHhB;ImBwDE,WrB7DW;IqB8DX,yBrBtDc;IqBuDd,qBrBvDc,EAAA;AqB0DhB;IAEE,8CrB5Dc,EAAA;AqB+DhB;IAEE,crBjEc;IqBkEd,6BAA6B,EAAA;AAG/B;;IAGE,WrBhFW;IqBiFX,yBrBzEc;IqB0Ed,qBrB1Ec,EAAA;AqB4Ed;;MAKI,8CrBjFU,EAAA;AoBmElB;EACE,gBpB4M+B;EoB3M/B,cpBjDe;EoBkDf,qBpB2F4C,EAAA;AEpK5C;IkB4EE,cpByF8D;IoBxF9D,0BpByF+C,EAAA;AoBhGnD;IAYI,0BpBoF+C,EAAA;AoBhGnD;IAiBI,cpBtFc;IoBuFd,oBAAoB,EAAA;AAWxB;ECPE,oBrB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b,EAAA;A4B6VjB;MAc8B,gE5B3Wb,EAAA;A4B6VjB;IAkBI,SAAS,EAAA;AAlBb;IAsBI,W5BmN6C;I4BlN7C,Y5BkN6C;I4BjN7C,oBAAyE;ITlZzE,yBnB6Ba;I4BuXb,S5BkN0C;IO1lB1C,mBP2lB6C;IiB7lB3C,oHjByf+H;IiBzf/H,4GjByf+H;I4B3GjI,wBAAgB;YAAhB,gBAAgB,EAAA;AX1Yd;MW4WN;QX3WQ,wBAAgB;QAAhB,gBAAgB,EAAA,EW8YrB;AAnCH;MT1XI,yBnB2mB2E,EAAA;A4BjP/E;IAsCI,W5B4LoC;I4B3LpC,c5B4LqC;I4B3LrC,kBAAkB;IAClB,e5B2LuC;I4B1LvC,yB5Bhac;I4Biad,yBAAyB;IrBzZzB,mBPolBoC,EAAA;A4BtOxC;IAiDI,W5BwL6C;I4BvL7C,Y5BuL6C;ImBnmB7C,yBnB6Ba;I4BiZb,S5BwL0C;IO1lB1C,mBP2lB6C;IiB7lB3C,iHjByf+H;IiBzf/H,4GjByf+H;I4BjFjI,qBAAgB;SAAhB,gBAAgB,EAAA;AXpad;MW4WN;QX3WQ,qBAAgB;QAAhB,gBAAgB,EAAA,EWwarB;AA7DH;MT1XI,yBnB2mB2E,EAAA;A4BjP/E;IAgEI,W5BkKoC;I4BjKpC,c5BkKqC;I4BjKrC,kBAAkB;IAClB,e5BiKuC;I4BhKvC,yB5B1bc;I4B2bd,yBAAyB;IrBnbzB,mBPolBoC,EAAA;A4BtOxC;IA2EI,W5B8J6C;I4B7J7C,Y5B6J6C;I4B5J7C,aAAa;IACb,oB5BtE+B;I4BuE/B,mB5BvE+B;ImBlY/B,yBnB6Ba;I4B8ab,S5B2J0C;IO1lB1C,mBP2lB6C;IiB7lB3C,gHjByf+H;IiBzf/H,4GjByf+H;I4BpDjI,gBAAgB,EAAA;AXjcd;MW4WN;QX3WQ,oBAAgB;QAAhB,gBAAgB,EAAA,EWqcrB;AA1FH;MT1XI,yBnB2mB2E,EAAA;A4BjP/E;IA6FI,W5BqIoC;I4BpIpC,c5BqIqC;I4BpIrC,kBAAkB;IAClB,e5BoIuC;I4BnIvC,6BAA6B;IAC7B,yBAAyB;IACzB,oBAA4C,EAAA;AAnGhD;IAwGI,yB5B9dc;IOQd,mBPolBoC,EAAA;A4BtOxC;IA6GI,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Aa;E7BGb,eAAe;EACf,gBAAgB;EGad,sBP6NgC,EAAA;AiCzOpC;EACE,kBAAkB;EAClB,cAAc;EACd,uBjCgxBwC;EiC/wBxC,iBjCkO+B;EiCjO/B,iBjCmxBsC;EiClxBtC,cjCuBe;EiCrBf,sBjCPa;EiCQb,yBjCLgB,EAAA;AiCJlB;IAYI,UAAU;IACV,cjC8J8D;IiC7J9D,qBAAqB;IACrB,yBjCZc;IiCad,qBjCZc,EAAA;AiCJlB;IAoBI,UAAU;IACV,UjC2wBiC;IiC1wBjC,gDjCOa,EAAA;AiCHjB;EAGM,cAAc;E1BahB,+BP+LgC;EO9LhC,kCP8LgC,EAAA;AiC/MpC;E1BEI,gCP6MgC;EO5MhC,mCP4MgC,EAAA;AiC/MpC;EAcI,UAAU;EACV,WjCxCW;EiCyCX,yBjCba;EiCcb,qBjCda,EAAA;AiCHjB;EAqBI,cjCxCc;EiCyCd,oBAAoB;EAEpB,YAAY;EACZ,sBjClDW;EiCmDX,qBjChDc,EAAA;AkCPhB;EACE,uBlCyxBsC;EC9pBpC,kBAtCY;EiCnFd,gBlCmO6B,EAAA;AkC9N3B;E3BqCF,8BPgM+B;EO/L/B,iCP+L+B,EAAA;AkChO7B;E3BkBF,+BP8M+B;EO7M/B,kCP6M+B,EAAA;AkC7OjC;EACE,uBlCuxBqC;EC5pBnC,mBAtCY;EiCnFd,gBlCoO6B,EAAA;AkC/N3B;E3BqCF,8BPiM+B;EOhM/B,iCPgM+B,EAAA;AkCjO7B;E3BkBF,+BP+M+B;EO9M/B,kCP8M+B,EAAA;AmC5OnC;EACE,qBAAqB;EACrB,qBnC05BsC;ECz1BpC,cAAW;EkC/Db,gBnCuR+B;EmCtR/B,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;E5BKtB,sBP6NgC;EiB/N9B,qIjBgb6I,EAAA;AiB5a7I;IkBfN;MlBgBQ,gBAAgB,EAAA,EkBMvB;AjCXC;IiCGI,qBAAqB,EAAA;AAd3B;IAoBI,aAAa,EAAA;AAKjB;EACE,kBAAkB;EAClB,SAAS,EAAA;AAOX;EACE,oBnC+3BsC;EmC93BtC,mBnC83BsC;EOr5BpC,oBPw5BqC,EAAA;AmCx3BvC;ECjDA,WpCMa;EoCLb,yBpCiCe,EAAA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MApB1B;QAuBQ,iB1CsHqB;Q0CrHrB,sB1CqHqB,EAAA,E0CpHtB;A/B5DP;E+BmCA;IACE,mBAAmB,EAAA;IADrB;MnCtBA,kCPsKgC;MOlLhC,0BmCwCwC,EAAA;IANxC;MnClCA,gCPkLgC;MOtKhC,4BmCiC0C,EAAA;IAX1C;MAeM,aAAa,EAAA;IAfnB;MAmBM,qB1C0HuB;M0CzHvB,oBAAoB,EAAA;MApB1B;QAuBQ,iB1CsHqB;Q0CrHrB,sB1CqHqB,EAAA,E0CpHtB;A/B5DP;E+BmCA;IACE,mBAAmB,EAAA;IADrB;MnCtBA,kCPsKgC;MOlLhC,0BmCwCwC,EAAA;IANxC;MnClCA,gCPkLgC;MOtKhC,4BmCiC0C,EAAA;IAX1C;MAeM,aAAa,EAAA;IAfnB;MAmBM,qB1C0HuB;M0CzHvB,oBAAoB,EAAA;MApB1B;QAuBQ,iB1CsHqB;Q0CrHrB,sB1CqHqB,EAAA,E0CpHtB;A/B5DP;E+BmCA;IACE,mBAAmB,EAAA;IADrB;MnCtBA,kCPsKgC;MOlLhC,0BmCwCwC,EAAA;IANxC;MnClCA,gCPkLgC;MOtKhC,4BmCiC0C,EAAA;IAX1C;MAeM,aAAa,EAAA;IAfnB;MAmBM,qB1C0HuB;M0CzHvB,oBAAoB,EAAA;MApB1B;QAuBQ,iB1CsHqB;Q0CrHrB,sB1CqHqB,EAAA,E0CpHtB;AAaX;EnCnHI,gBmCoHsB,EAAA;AAD1B;IAII,qB1CmG6B,EAAA;A0CvGjC;MAOM,sBAAsB,EAAA;ACzI1B;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A4BtGhE;EACE,c5BqG8D;E4BpG9D,yB5BoG8D,EAAA;AbzFhE;IyCPM,c5BgG0D;I4B/F1D,yBAAyC,EAAA;AAP/C;IAWM,W3CPO;I2CQP,yB5B0F0D;I4BzF1D,qB5ByF0D,EAAA;A6BzGlE;EACE,YAAY;E3C8HR,iBAtCY;E2CtFhB,gB5C6R+B;E4C5R/B,cAAc;EACd,W5CYa;E4CXb,yB5CCa;E4CAb,WAAW,EAAA;A1CKX;I0CDE,W5CMW;I4CLX,qBAAqB,EAAA;A1CIvB;I0CCI,YAAY,EAAA;AAWlB;EACE,UAAU;EACV,6BAA6B;EAC7B,SAAS,EAAA;AAMX;EACE,oBAAoB,EAAA;ACtCtB;EAGE,iB7Cy4BuC;E6Cx4BvC,gB7Cw4BuC;EC7wBnC,mBAtCY;E4ClFhB,2C7CAa;E6CCb,4BAA4B;EAC5B,oC7C04BmD;E6Cz4BnD,gD7COa;E6CNb,UAAU;EtCOR,sBPk4BsC,EAAA;A6Cp5B1C;IAeI,sB7C83BsC,EAAA;A6C74B1C;IAmBI,UAAU,EAAA;AAnBd;IAuBI,cAAc;IACd,UAAU,EAAA;AAxBd;IA4BI,aAAa,EAAA;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","file":"application.scss","sourcesContent":["/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n@import \"functions\";\n@import \"variables\";\n@import \"mixins\";\n@import \"root\";\n@import \"reboot\";\n@import \"type\";\n@import \"images\";\n@import \"code\";\n@import \"grid\";\n@import \"tables\";\n@import \"forms\";\n@import \"buttons\";\n@import \"transitions\";\n@import \"dropdown\";\n@import \"button-group\";\n@import \"input-group\";\n@import \"custom-forms\";\n@import \"nav\";\n@import \"navbar\";\n@import \"card\";\n@import \"breadcrumb\";\n@import \"pagination\";\n@import \"badge\";\n@import \"jumbotron\";\n@import \"alert\";\n@import \"progress\";\n@import \"media\";\n@import \"list-group\";\n@import \"close\";\n@import \"toasts\";\n@import \"modal\";\n@import \"tooltip\";\n@import \"popover\";\n@import \"carousel\";\n@import \"spinners\";\n@import \"utilities\";\n@import \"print\";\n","/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  text-decoration-skip-ink: none; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([class]):hover {\n    color: inherit;\n    text-decoration: none; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus:not(:focus-visible) {\n  outline: 0; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nselect {\n  word-wrap: normal; }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton:not(:disabled),\n[type=\"button\"]:not(:disabled),\n[type=\"reset\"]:not(:disabled),\n[type=\"submit\"]:not(:disabled) {\n  cursor: pointer; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n  .blockquote-footer::before {\n    content: \"\\2014\\00A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word; }\n  a > code {\n    color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n  pre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px; } }\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px; } }\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px; } }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.row-cols-3 > * {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%; }\n\n.row-cols-6 > * {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-last {\n  order: 13; }\n\n.order-0 {\n  order: 0; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-md-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-md-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n  .table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #dee2e6; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7abaff; }\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb; }\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #454d55; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #495057; }\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\ninput[type=\"date\"].form-control,\ninput[type=\"time\"].form-control,\ninput[type=\"datetime-local\"].form-control,\ninput[type=\"month\"].form-control {\n  appearance: none; }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\n\ntextarea.form-control {\n  height: auto; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n  .form-check-input[disabled] ~ .form-check-label,\n  .form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem; }\n  .form-row > .col > .valid-tooltip,\n  .form-row > [class*=\"col-\"] > .valid-tooltip {\n    left: 5px; }\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat; }\n  .was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    border-color: #28a745; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n  .form-row > .col > .invalid-tooltip,\n  .form-row > [class*=\"col-\"] > .invalid-tooltip {\n    left: 5px; }\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat; }\n  .was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    border-color: #dc3545; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group,\n    .form-inline .custom-select {\n      width: auto; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      flex-shrink: 0;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      align-items: center;\n      justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n  .btn:hover {\n    color: #212529;\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n  .btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf; }\n    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62;\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b; }\n    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b;\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f; }\n    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5); }\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n  .btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00;\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130;\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5); }\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n  .btn-light:focus, .btn-light.focus {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5;\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df; }\n    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n  .btn-dark:focus, .btn-dark.focus {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124;\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d; }\n    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n\n.btn-outline-primary {\n  color: #007bff;\n  border-color: #007bff; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107; }\n  .btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none; }\n  .btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n  .btn-link:focus, .btn-link.focus {\n    text-decoration: underline; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #6c757d;\n    pointer-events: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n  .btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n  @media (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n  .fade:not(.show) {\n    opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n\n.dropdown-toggle {\n  white-space: nowrap; }\n  .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent; }\n  .dropdown-toggle:empty::after {\n    margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto; } }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #e9ecef; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #adb5bd;\n    pointer-events: none;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 1 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropright .dropdown-toggle-split::after {\n    margin-left: 0; }\n  .dropleft .dropdown-toggle-split::before {\n    margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical > .btn,\n  .btn-group-vertical > .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) {\n    margin-top: -1px; }\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n  .btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n  .input-group > .form-control,\n  .input-group > .form-control-plaintext,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0;\n    margin-bottom: 0; }\n    .input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .form-control-plaintext + .form-control,\n    .input-group > .form-control-plaintext + .custom-select,\n    .input-group > .form-control-plaintext + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n  .input-group > .form-control:focus,\n  .input-group > .custom-select:focus,\n  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3; }\n  .input-group > .custom-file .custom-file-input:focus {\n    z-index: 4; }\n  .input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .input-group > .custom-file {\n    display: flex;\n    align-items: center; }\n    .input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:first-child) .custom-file-label {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n  .input-group:not(.has-validation) > .form-control:not(:last-child),\n  .input-group:not(.has-validation) > .custom-select:not(:last-child),\n  .input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label::after {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .input-group.has-validation > .form-control:nth-last-child(n + 3),\n  .input-group.has-validation > .custom-select:nth-last-child(n + 3),\n  .input-group.has-validation > .custom-file:nth-last-child(n + 3) .custom-file-label::after {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.input-group-prepend,\n.input-group-append {\n  display: flex; }\n  .input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n    .input-group-prepend .btn:focus,\n    .input-group-append .btn:focus {\n      z-index: 3; }\n  .input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n\n.input-group-prepend {\n  margin-right: -1px; }\n\n.input-group-append {\n  margin-left: -1px; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px); }\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px); }\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem; }\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  color-adjust: exact; }\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.25rem;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: #007bff;\n    background-color: #007bff; }\n  .custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: #80bdff; }\n  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff;\n    border-color: #b3d7ff; }\n  .custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n    .custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top; }\n  .custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    background-color: #fff;\n    border: #adb5bd solid 1px; }\n  .custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background: 50% / 50% 50% no-repeat; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\"); }\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\"); }\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-switch {\n  padding-left: 2.25rem; }\n  .custom-switch .custom-control-label::before {\n    left: -2.25rem;\n    width: 1.75rem;\n    pointer-events: all;\n    border-radius: 0.5rem; }\n  .custom-switch .custom-control-label::after {\n    top: calc(0.25rem + 2px);\n    left: calc(-2.25rem + 2px);\n    width: calc(1rem - 4px);\n    height: calc(1rem - 4px);\n    background-color: #adb5bd;\n    border-radius: 0.5rem;\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-switch .custom-control-label::after {\n        transition: none; } }\n  .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n    background-color: #fff;\n    transform: translateX(0.75rem); }\n  .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n    background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none; }\n  .custom-select:focus {\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n    .custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    display: none; }\n  .custom-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #495057; }\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem; }\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  overflow: hidden;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-label {\n    border-color: #80bdff;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .custom-file-input[disabled] ~ .custom-file-label,\n  .custom-file-input:disabled ~ .custom-file-label {\n    background-color: #e9ecef; }\n  .custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n  .custom-file-input ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse); }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  overflow: hidden;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: calc(1.5em + 0.75rem);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: inherit;\n    border-radius: 0 0.25rem 0.25rem 0; }\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  appearance: none; }\n  .custom-range:focus {\n    outline: 0; }\n    .custom-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n    .custom-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n    .custom-range:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .custom-range::-moz-focus-outer {\n    border: 0; }\n  .custom-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-webkit-slider-thumb {\n        transition: none; } }\n    .custom-range::-webkit-slider-thumb:active {\n      background-color: #b3d7ff; }\n  .custom-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-moz-range-thumb {\n        transition: none; } }\n    .custom-range::-moz-range-thumb:active {\n      background-color: #b3d7ff; }\n  .custom-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-ms-thumb {\n        transition: none; } }\n    .custom-range::-ms-thumb:active {\n      background-color: #b3d7ff; }\n  .custom-range::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem; }\n  .custom-range::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range:disabled::-webkit-slider-thumb {\n    background-color: #adb5bd; }\n  .custom-range:disabled::-webkit-slider-runnable-track {\n    cursor: default; }\n  .custom-range:disabled::-moz-range-thumb {\n    background-color: #adb5bd; }\n  .custom-range:disabled::-moz-range-track {\n    cursor: default; }\n  .custom-range:disabled::-ms-thumb {\n    background-color: #adb5bd; }\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .custom-control-label::before,\n    .custom-file-label,\n    .custom-select {\n      transition: none; } }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs .nav-link {\n    margin-bottom: -1px;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar .container,\n  .navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: 50% / 100% 100% no-repeat; }\n\n.navbar-nav-scroll {\n  max-height: 75vh;\n  overflow-y: auto; }\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-nav-scroll {\n      overflow: visible; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n    flex-wrap: nowrap; }\n  .navbar-expand .navbar-nav-scroll {\n    overflow: visible; }\n  .navbar-expand .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-text a {\n    color: #fff; }\n    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group {\n    border-top: inherit;\n    border-bottom: inherit; }\n    .card > .list-group:first-child {\n      border-top-width: 0;\n      border-top-left-radius: calc(0.25rem - 1px);\n      border-top-right-radius: calc(0.25rem - 1px); }\n    .card > .list-group:last-child {\n      border-bottom-width: 0;\n      border-bottom-right-radius: calc(0.25rem - 1px);\n      border-bottom-left-radius: calc(0.25rem - 1px); }\n  .card > .card-header + .list-group,\n  .card > .list-group + .card-footer {\n    border-top: 0; }\n\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0;\n  width: 100%; }\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-deck .card {\n  margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px; }\n    .card-deck .card {\n      flex: 1 0 0%;\n      margin-right: 15px;\n      margin-bottom: 0;\n      margin-left: 15px; } }\n\n.card-group > .card {\n  margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap; }\n    .card-group > .card {\n      flex: 1 0 0%;\n      margin-bottom: 0; }\n      .card-group > .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group > .card:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-top,\n        .card-group > .card:not(:last-child) .card-header {\n          border-top-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-bottom,\n        .card-group > .card:not(:last-child) .card-footer {\n          border-bottom-right-radius: 0; }\n      .card-group > .card:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-top,\n        .card-group > .card:not(:first-child) .card-header {\n          border-top-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-bottom,\n        .card-group > .card:not(:first-child) .card-footer {\n          border-bottom-left-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.accordion {\n  overflow-anchor: none; }\n  .accordion > .card {\n    overflow: hidden; }\n    .accordion > .card:not(:last-of-type) {\n      border-bottom: 0;\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0; }\n    .accordion > .card:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n    .accordion > .card > .card-header {\n      border-radius: 0;\n      margin-bottom: -1px; }\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    float: left;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #6c757d; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n  .page-link:hover {\n    z-index: 2;\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n  .page-link:focus {\n    z-index: 3;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .badge {\n      transition: none; } }\n  a.badge:hover, a.badge:focus {\n    text-decoration: none; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n  a.badge-primary:hover, a.badge-primary:focus {\n    color: #fff;\n    background-color: #0062cc; }\n  a.badge-primary:focus, a.badge-primary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\n  a.badge-secondary:hover, a.badge-secondary:focus {\n    color: #fff;\n    background-color: #545b62; }\n  a.badge-secondary:focus, a.badge-secondary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n  a.badge-success:hover, a.badge-success:focus {\n    color: #fff;\n    background-color: #1e7e34; }\n  a.badge-success:focus, a.badge-success.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n  a.badge-info:hover, a.badge-info:focus {\n    color: #fff;\n    background-color: #117a8b; }\n  a.badge-info:focus, a.badge-info.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\n  a.badge-warning:hover, a.badge-warning:focus {\n    color: #212529;\n    background-color: #d39e00; }\n  a.badge-warning:focus, a.badge-warning.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n  a.badge-danger:hover, a.badge-danger:focus {\n    color: #fff;\n    background-color: #bd2130; }\n  a.badge-danger:focus, a.badge-danger.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n  a.badge-light:hover, a.badge-light:focus {\n    color: #212529;\n    background-color: #dae0e5; }\n  a.badge-light:focus, a.badge-light.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n  a.badge-dark:hover, a.badge-dark:focus {\n    color: #fff;\n    background-color: #1d2124; }\n  a.badge-dark:focus, a.badge-dark.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 4rem; }\n  .alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n  .alert-primary hr {\n    border-top-color: #9fcdff; }\n  .alert-primary .alert-link {\n    color: #002752; }\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db; }\n  .alert-secondary hr {\n    border-top-color: #c8cbcf; }\n  .alert-secondary .alert-link {\n    color: #202326; }\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n  .alert-success hr {\n    border-top-color: #b1dfbb; }\n  .alert-success .alert-link {\n    color: #0b2e13; }\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n  .alert-info hr {\n    border-top-color: #abdde5; }\n  .alert-info .alert-link {\n    color: #062c33; }\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n  .alert-warning hr {\n    border-top-color: #ffe8a1; }\n  .alert-warning .alert-link {\n    color: #533f03; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n  .alert-danger hr {\n    border-top-color: #f1b0b7; }\n  .alert-danger .alert-link {\n    color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n  .alert-light hr {\n    border-top-color: #ececf6; }\n  .alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n  .alert-dark hr {\n    border-top-color: #b9bbbe; }\n  .alert-dark .alert-link {\n    color: #040505; }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar-animated {\n      animation: none; } }\n\n.media {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body {\n  flex: 1; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 1;\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit; }\n  .list-group-item:last-child {\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .list-group-item + .list-group-item {\n    border-top-width: 0; }\n    .list-group-item + .list-group-item.active {\n      margin-top: -1px;\n      border-top-width: 1px; }\n\n.list-group-horizontal {\n  flex-direction: row; }\n  .list-group-horizontal > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; }\n  .list-group-horizontal > .list-group-item.active {\n    margin-top: 0; }\n  .list-group-horizontal > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0; }\n    .list-group-horizontal > .list-group-item + .list-group-item.active {\n      margin-left: -1px;\n      border-left-width: 1px; }\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row; }\n    .list-group-horizontal-sm > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row; }\n    .list-group-horizontal-md > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-md > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-md > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row; }\n    .list-group-horizontal-lg > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row; }\n    .list-group-horizontal-xl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n.list-group-flush {\n  border-radius: 0; }\n  .list-group-flush > .list-group-item {\n    border-width: 0 0 1px; }\n    .list-group-flush > .list-group-item:last-child {\n      border-bottom-width: 0; }\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #004085;\n    background-color: #9fcdff; }\n  .list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #383d41;\n    background-color: #c8cbcf; }\n  .list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #383d41;\n    border-color: #383d41; }\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #155724;\n    background-color: #b1dfbb; }\n  .list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #0c5460;\n    background-color: #abdde5; }\n  .list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #856404;\n    background-color: #ffe8a1; }\n  .list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #721c24;\n    background-color: #f1b0b7; }\n  .list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #818182;\n    background-color: #ececf6; }\n  .list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  .list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:hover {\n    color: #000;\n    text-decoration: none; }\n  .close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n    opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0; }\n\na.close.disabled {\n  pointer-events: none; }\n\n.toast {\n  flex-basis: 350px;\n  max-width: 350px;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 0.25rem; }\n  .toast:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .toast.showing {\n    opacity: 1; }\n  .toast.show {\n    display: block;\n    opacity: 1; }\n  .toast.hide {\n    display: none; }\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.toast-body {\n  padding: 0.75rem; }\n\n.modal-open {\n  overflow: hidden; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -50px); }\n    @media (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n  .modal.show .modal-dialog {\n    transform: none; }\n  .modal.modal-static .modal-dialog {\n    transform: scale(1.02); }\n\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem); }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 1rem);\n    overflow: hidden; }\n  .modal-dialog-scrollable .modal-header,\n  .modal-dialog-scrollable .modal-footer {\n    flex-shrink: 0; }\n  .modal-dialog-scrollable .modal-body {\n    overflow-y: auto; }\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem); }\n  .modal-dialog-centered::before {\n    display: block;\n    height: calc(100vh - 1rem);\n    height: min-content;\n    content: \"\"; }\n  .modal-dialog-centered.modal-dialog-scrollable {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%; }\n    .modal-dialog-centered.modal-dialog-scrollable .modal-content {\n      max-height: none; }\n    .modal-dialog-centered.modal-dialog-scrollable::before {\n      content: none; }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .modal-header .close {\n    padding: 1rem 1rem;\n    margin: -1rem -1rem -1rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px); }\n  .modal-footer > * {\n    margin: 0.25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem); }\n    .modal-dialog-scrollable .modal-content {\n      max-height: calc(100vh - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n    .modal-dialog-centered::before {\n      height: calc(100vh - 3.5rem);\n      height: min-content; }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n    .popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n  .bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\n    bottom: calc(-0.5rem - 1px); }\n    .bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\n      bottom: 0;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\n      bottom: 1px;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n  .bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\n    left: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n    .bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\n      left: 0;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\n      left: 1px;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n  .bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\n    top: calc(-0.5rem - 1px); }\n    .bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\n      top: 0;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\n      top: 1px;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #fff; }\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n  .bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\n    right: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n    .bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\n      right: 0;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\n      right: 1px;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel.pointer-event {\n  touch-action: pan-y; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-item {\n      transition: none; } }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%); }\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-fade .active.carousel-item-left,\n    .carousel-fade .active.carousel-item-right {\n      transition: none; } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-control-prev,\n    .carousel-control-next {\n      transition: none; } }\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: 0.9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: 50% / 100% 100% no-repeat; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: .5;\n    transition: opacity 0.6s ease; }\n    @media (prefers-reduced-motion: reduce) {\n      .carousel-indicators li {\n        transition: none; } }\n  .carousel-indicators .active {\n    opacity: 1; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: .75s linear infinite spinner-border; }\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em; }\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1;\n    transform: none; } }\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  animation: .75s linear infinite spinner-grow; }\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem; }\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n  .spinner-grow {\n    animation-duration: 1.5s; } }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #007bff !important; }\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important; }\n\n.bg-secondary {\n  background-color: #6c757d !important; }\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #dee2e6 !important; }\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #007bff !important; }\n\n.border-secondary {\n  border-color: #6c757d !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded-sm {\n  border-radius: 0.2rem !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-lg {\n  border-radius: 0.3rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-pill {\n  border-radius: 50rem !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.user-select-all {\n  user-select: all !important; }\n\n.user-select-auto {\n  user-select: auto !important; }\n\n.user-select-none {\n  user-select: none !important; }\n\n.overflow-auto {\n  overflow: auto !important; }\n\n.overflow-hidden {\n  overflow: hidden !important; }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.min-vw-100 {\n  min-width: 100vw !important; }\n\n.min-vh-100 {\n  min-height: 100vh !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-n1 {\n  margin: -0.25rem !important; }\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important; }\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important; }\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important; }\n\n.m-n2 {\n  margin: -0.5rem !important; }\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important; }\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important; }\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important; }\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important; }\n\n.m-n3 {\n  margin: -1rem !important; }\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important; }\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important; }\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important; }\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important; }\n\n.m-n4 {\n  margin: -1.5rem !important; }\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important; }\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important; }\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important; }\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important; }\n\n.m-n5 {\n  margin: -3rem !important; }\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important; }\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important; }\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important; }\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-n1 {\n    margin: -0.25rem !important; }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n2 {\n    margin: -0.5rem !important; }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important; }\n  .m-sm-n3 {\n    margin: -1rem !important; }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important; }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important; }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important; }\n  .m-sm-n4 {\n    margin: -1.5rem !important; }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important; }\n  .m-sm-n5 {\n    margin: -3rem !important; }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important; }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important; }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-n1 {\n    margin: -0.25rem !important; }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important; }\n  .m-md-n2 {\n    margin: -0.5rem !important; }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important; }\n  .m-md-n3 {\n    margin: -1rem !important; }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important; }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important; }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important; }\n  .m-md-n4 {\n    margin: -1.5rem !important; }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important; }\n  .m-md-n5 {\n    margin: -3rem !important; }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important; }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important; }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-n1 {\n    margin: -0.25rem !important; }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n2 {\n    margin: -0.5rem !important; }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important; }\n  .m-lg-n3 {\n    margin: -1rem !important; }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important; }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important; }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important; }\n  .m-lg-n4 {\n    margin: -1.5rem !important; }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important; }\n  .m-lg-n5 {\n    margin: -3rem !important; }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important; }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important; }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-n1 {\n    margin: -0.25rem !important; }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n2 {\n    margin: -0.5rem !important; }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important; }\n  .m-xl-n3 {\n    margin: -1rem !important; }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important; }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important; }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important; }\n  .m-xl-n4 {\n    margin: -1.5rem !important; }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important; }\n  .m-xl-n5 {\n    margin: -3rem !important; }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important; }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important; }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0); }\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-wrap {\n  white-space: normal !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-lighter {\n  font-weight: lighter !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-weight-bolder {\n  font-weight: bolder !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #007bff !important; }\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important; }\n\n.text-secondary {\n  color: #6c757d !important; }\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important; }\n\n.text-body {\n  color: #212529 !important; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-decoration-none {\n  text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important; }\n\n.text-reset {\n  color: inherit !important; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark {\n    color: inherit; }\n    .table-dark th,\n    .table-dark td,\n    .table-dark thead th,\n    .table-dark tbody + tbody {\n      border-color: #dee2e6; }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6; } }\n",":root {\n  // Custom variable values only support SassScript inside `#{}`.\n  @each $color, $value in $colors {\n    --#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$color}: #{$value};\n  }\n\n  @each $bp, $value in $grid-breakpoints {\n    --breakpoint-#{$bp}: #{$value};\n  }\n\n  // Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --font-family-sans-serif: #{inspect($font-family-sans-serif)};\n  --font-family-monospace: #{inspect($font-family-monospace)};\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n// 2. Change the default font family in all browsers.\n// 3. Correct the line height in all browsers.\n// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n// 5. Change the default tap highlight to be completely transparent in iOS.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; // 1\n}\n\nhtml {\n  font-family: sans-serif; // 2\n  line-height: 1.15; // 3\n  -webkit-text-size-adjust: 100%; // 4\n  -webkit-tap-highlight-color: rgba($black, 0); // 5\n}\n\n// Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\n// TODO: remove in v5\n// stylelint-disable-next-line selector-list-comma-newline-after\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Set an explicit initial text-align value so that we can later use\n//    the `inherit` value on things like `<th>` elements.\n\nbody {\n  margin: 0; // 1\n  font-family: $font-family-base;\n  @include font-size($font-size-base);\n  font-weight: $font-weight-base;\n  line-height: $line-height-base;\n  color: $body-color;\n  text-align: left; // 3\n  background-color: $body-bg; // 2\n}\n\n// Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n// on elements that programmatically receive focus but wouldn't normally show a visible\n// focus outline. In general, this would mean that the outline is only applied if the\n// interaction that led to the element receiving programmatic focus was a keyboard interaction,\n// or the browser has somehow determined that the user is primarily a keyboard user and/or\n// wants focus outlines to always be presented.\n//\n// See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n// and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n\n// Content grouping\n//\n// 1. Add the correct box sizing in Firefox.\n// 2. Show the overflow in Edge and IE.\n\nhr {\n  box-sizing: content-box; // 1\n  height: 0; // 1\n  overflow: visible; // 2\n}\n\n\n//\n// Typography\n//\n\n// Remove top margins from headings\n//\n// By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n// margin for easier control within type scales as it avoids margin collapsing.\n// stylelint-disable-next-line selector-list-comma-newline-after\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: $headings-margin-bottom;\n}\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n// Abbreviations\n//\n// 1. Duplicate behavior to the data-* attribute for our tooltip plugin\n// 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n// 3. Add explicit cursor to indicate changed behavior.\n// 4. Remove the bottom border in Firefox 39-.\n// 5. Prevent the text-decoration to be skipped.\n\nabbr[title],\nabbr[data-original-title] { // 1\n  text-decoration: underline; // 2\n  text-decoration: underline dotted; // 2\n  cursor: help; // 3\n  border-bottom: 0; // 4\n  text-decoration-skip-ink: none; // 5\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // Undo browser default\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: $font-weight-bolder; // Add the correct font weight in Chrome, Edge, and Safari\n}\n\nsmall {\n  @include font-size(80%); // Add the correct font size in all browsers\n}\n\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n//\n\nsub,\nsup {\n  position: relative;\n  @include font-size(75%);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n//\n// Links\n//\n\na {\n  color: $link-color;\n  text-decoration: $link-decoration;\n  background-color: transparent; // Remove the gray background on active links in IE 10.\n\n  @include hover() {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n\n  @include hover() {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n//\n// Code\n//\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-monospace;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n}\n\npre {\n  // Remove browser default top margin\n  margin-top: 0;\n  // Reset browser default of `1em` to use `rem`s\n  margin-bottom: 1rem;\n  // Don't allow content to break outside\n  overflow: auto;\n  // Disable auto-hiding scrollbar in IE & legacy Edge to avoid overlap,\n  // making it impossible to interact with the content\n  -ms-overflow-style: scrollbar;\n}\n\n\n//\n// Figures\n//\n\nfigure {\n  // Apply a consistent margin strategy (matches our type styles).\n  margin: 0 0 1rem;\n}\n\n\n//\n// Images and content\n//\n\nimg {\n  vertical-align: middle;\n  border-style: none; // Remove the border on images inside links in IE 10-.\n}\n\nsvg {\n  // Workaround for the SVG overflow bug in IE10/11 is still required.\n  // See https://github.com/twbs/bootstrap/issues/26878\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n\n//\n// Tables\n//\n\ntable {\n  border-collapse: collapse; // Prevent double borders\n}\n\ncaption {\n  padding-top: $table-cell-padding;\n  padding-bottom: $table-cell-padding;\n  color: $table-caption-color;\n  text-align: left;\n  caption-side: bottom;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\n\n//\n// Forms\n//\n\nlabel {\n  // Allow labels to use `margin` for spacing.\n  display: inline-block;\n  margin-bottom: $label-margin-bottom;\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n//\n// Details at https://github.com/twbs/bootstrap/issues/24093\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Explicitly remove focus outline in Chromium when it shouldn't be\n// visible (e.g. as result of mouse click or touch tap). It already\n// should be doing this automatically, but seems to currently be\n// confused and applies its very visible two-tone outline anyway.\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // Remove the margin in Firefox and Safari\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible; // Show the overflow in Edge\n}\n\nbutton,\nselect {\n  text-transform: none; // Remove the inheritance of text transform in Firefox\n}\n\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n// Remove the inheritance of word-wrap in Safari.\n//\n// Details at https://github.com/twbs/bootstrap/issues/24990\nselect {\n  word-wrap: normal;\n}\n\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n}\n\n// Opinionated: add \"hand\" cursor to non-disabled button elements.\n@if $enable-pointer-cursor-for-buttons {\n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    &:not(:disabled) {\n      cursor: pointer;\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box; // 1. Add the correct box sizing in IE 10-\n  padding: 0; // 2. Remove the padding in IE 10-\n}\n\n\ntextarea {\n  overflow: auto; // Remove the default vertical scrollbar in IE.\n  // Textareas should really only resize vertically so they don't break their (horizontal) containers.\n  resize: vertical;\n}\n\nfieldset {\n  // Browsers set a default `min-width: min-content;` on fieldsets,\n  // unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n  // So we reset that to ensure fieldsets behave more like a standard block element.\n  // See https://github.com/twbs/bootstrap/issues/12359\n  // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n  min-width: 0;\n  // Reset the default outline behavior of fieldsets so they don't affect page layout.\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n// 1. Correct the text wrapping in Edge and IE.\n// 2. Correct the color inheritance from `fieldset` elements in IE.\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%; // 1\n  padding: 0;\n  margin-bottom: .5rem;\n  @include font-size(1.5rem);\n  line-height: inherit;\n  color: inherit; // 2\n  white-space: normal; // 1\n}\n\nprogress {\n  vertical-align: baseline; // Add the correct vertical alignment in Chrome, Firefox, and Opera.\n}\n\n// Correct the cursor style of increment and decrement buttons in Chrome.\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  // This overrides the extra rounded corners on search inputs in iOS so that our\n  // `.form-control` class can properly style them. Note that this cannot simply\n  // be added to `.form-control` as it's not specific enough. For details, see\n  // https://github.com/twbs/bootstrap/issues/11586.\n  outline-offset: -2px; // 2. Correct the outline style in Safari.\n  -webkit-appearance: none;\n}\n\n//\n// Remove the inner padding in Chrome and Safari on macOS.\n//\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n//\n// 1. Correct the inability to style clickable types in iOS and Safari.\n// 2. Change font properties to `inherit` in Safari.\n//\n\n::-webkit-file-upload-button {\n  font: inherit; // 2\n  -webkit-appearance: button; // 1\n}\n\n//\n// Correct element displays\n//\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item; // Add the correct display in all browsers\n  cursor: pointer;\n}\n\ntemplate {\n  display: none; // Add the correct display in IE\n}\n\n// Always hide an element with the `hidden` HTML attribute (from PureCSS).\n// Needed for proper display in IE 10-.\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n$grays: map-merge(\n  (\n    \"100\": $gray-100,\n    \"200\": $gray-200,\n    \"300\": $gray-300,\n    \"400\": $gray-400,\n    \"500\": $gray-500,\n    \"600\": $gray-600,\n    \"700\": $gray-700,\n    \"800\": $gray-800,\n    \"900\": $gray-900\n  ),\n  $grays\n);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$colors: () !default;\n$colors: map-merge(\n  (\n    \"blue\":       $blue,\n    \"indigo\":     $indigo,\n    \"purple\":     $purple,\n    \"pink\":       $pink,\n    \"red\":        $red,\n    \"orange\":     $orange,\n    \"yellow\":     $yellow,\n    \"green\":      $green,\n    \"teal\":       $teal,\n    \"cyan\":       $cyan,\n    \"white\":      $white,\n    \"gray\":       $gray-600,\n    \"gray-dark\":  $gray-800\n  ),\n  $colors\n);\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n$theme-colors: map-merge(\n  (\n    \"primary\":    $primary,\n    \"secondary\":  $secondary,\n    \"success\":    $success,\n    \"info\":       $info,\n    \"warning\":    $warning,\n    \"danger\":     $danger,\n    \"light\":      $light,\n    \"dark\":       $dark\n  ),\n  $theme-colors\n);\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n// The yiq lightness value that determines when the lightness of color changes from \"dark\" to \"light\". Acceptable values are between 0 and 255.\n$yiq-contrasted-threshold:  150 !default;\n\n// Customize the light and dark text colors for use in our YIQ color contrast function.\n$yiq-text-dark:             $gray-900 !default;\n$yiq-text-light:            $white !default;\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                                true !default;\n$enable-rounded:                              true !default;\n$enable-shadows:                              false !default;\n$enable-gradients:                            false !default;\n$enable-transitions:                          true !default;\n$enable-prefers-reduced-motion-media-query:   true !default;\n$enable-hover-media-query:                    false !default; // Deprecated, no longer affects any compiled CSS\n$enable-grid-classes:                         true !default;\n$enable-pointer-cursor-for-buttons:           true !default;\n$enable-print-styles:                         true !default;\n$enable-responsive-font-sizes:                false !default;\n$enable-validation-icons:                     true !default;\n$enable-deprecation-messages:                 true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: () !default;\n$spacers: map-merge(\n  (\n    0: 0,\n    1: ($spacer * .25),\n    2: ($spacer * .5),\n    3: $spacer,\n    4: ($spacer * 1.5),\n    5: ($spacer * 3)\n  ),\n  $spacers\n);\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: () !default;\n$sizes: map-merge(\n  (\n    25: 25%,\n    50: 50%,\n    75: 75%,\n    100: 100%,\n    auto: auto\n  ),\n  $sizes\n);\n\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              theme-color(\"primary\") !default;\n$link-decoration:                         none !default;\n$link-hover-color:                        darken($link-color, 15%) !default;\n$link-hover-decoration:                   underline !default;\n// Darken percentage for links with `.text-*` class (e.g. `.text-success`)\n$emphasized-link-hover-darken-percentage: 15% !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           30px !default;\n$grid-row-columns:            6 !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:              1.5 !default;\n$line-height-sm:              1.5 !default;\n\n$border-width:                1px !default;\n$border-color:                $gray-300 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-sm:            .2rem !default;\n\n$rounded-pill:                50rem !default;\n\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         theme-color(\"primary\") !default;\n\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n$embed-responsive-aspect-ratios: () !default;\n$embed-responsive-aspect-ratios: join(\n  (\n    (21 9),\n    (16 9),\n    (4 3),\n    (1 1),\n  ),\n  $embed-responsive-aspect-ratios\n);\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:            $font-family-sans-serif !default;\n// stylelint-enable value-keyword-case\n\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:                $font-size-base * 1.25 !default;\n$font-size-sm:                $font-size-base * .875 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n$line-height-base:            1.5 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n$headings-margin-bottom:      $spacer / 2 !default;\n$headings-font-family:        null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n\n$display1-size:               6rem !default;\n$display2-size:               5.5rem !default;\n$display3-size:               4.5rem !default;\n$display4-size:               3.5rem !default;\n\n$display1-weight:             300 !default;\n$display2-weight:             300 !default;\n$display3-weight:             300 !default;\n$display4-weight:             300 !default;\n$display-line-height:         $headings-line-height !default;\n\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             80% !default;\n\n$text-muted:                  $gray-600 !default;\n\n$blockquote-small-color:      $gray-600 !default;\n$blockquote-small-font-size:  $small-font-size !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n\n$hr-border-color:             rgba($black, .1) !default;\n$hr-border-width:             $border-width !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n\n$hr-margin-y:                 $spacer !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:          .75rem !default;\n$table-cell-padding-sm:       .3rem !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    null !default;\n$table-accent-bg:             rgba($black, .05) !default;\n$table-hover-color:           $table-color !default;\n$table-hover-bg:              rgba($black, .075) !default;\n$table-active-bg:             $table-hover-bg !default;\n\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-head-bg:               $gray-200 !default;\n$table-head-color:            $gray-700 !default;\n$table-th-font-weight:        null !default;\n\n$table-dark-color:            $white !default;\n$table-dark-bg:               $gray-800 !default;\n$table-dark-accent-bg:        rgba($white, .05) !default;\n$table-dark-hover-color:      $table-dark-color !default;\n$table-dark-hover-bg:         rgba($white, .075) !default;\n$table-dark-border-color:     lighten($table-dark-bg, 7.5%) !default;\n\n$table-striped-order:         odd !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-level:              -9 !default;\n$table-border-level:          -6 !default;\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:       .2rem !default;\n$input-btn-focus-color:       rgba($component-active-bg, .25) !default;\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n$input-btn-line-height-sm:    $line-height-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n$input-btn-line-height-lg:    $line-height-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n$btn-line-height-sm:          $input-btn-line-height-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n$btn-line-height-lg:          $input-btn-line-height-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-disabled-color:     $gray-600 !default;\n\n$btn-block-spacing-y:         .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$label-margin-bottom:                   .5rem !default;\n\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n$input-line-height-sm:                  $input-btn-line-height-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n$input-line-height-lg:                  $input-btn-line-height-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n\n$input-color:                           $gray-700 !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              lighten($component-active-bg, 25%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height-sm * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height-lg * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-text-margin-top:                  .25rem !default;\n\n$form-check-input-gutter:               1.25rem !default;\n$form-check-input-margin-y:             .3rem !default;\n$form-check-input-margin-x:             .25rem !default;\n\n$form-check-inline-margin-x:            .75rem !default;\n$form-check-inline-input-margin-x:      .3125rem !default;\n\n$form-grid-gutter-width:                10px !default;\n$form-group-margin-bottom:              1rem !default;\n\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$custom-forms-transition:               background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$custom-control-gutter:                 .5rem !default;\n$custom-control-spacer-x:               1rem !default;\n$custom-control-cursor:                 null !default;\n\n$custom-control-indicator-size:         1rem !default;\n$custom-control-indicator-bg:           $input-bg !default;\n\n$custom-control-indicator-bg-size:      50% 50% !default;\n$custom-control-indicator-box-shadow:   $input-box-shadow !default;\n$custom-control-indicator-border-color: $gray-500 !default;\n$custom-control-indicator-border-width: $input-border-width !default;\n\n$custom-control-label-color:            null !default;\n\n$custom-control-indicator-disabled-bg:          $input-disabled-bg !default;\n$custom-control-label-disabled-color:           $gray-600 !default;\n\n$custom-control-indicator-checked-color:        $component-active-color !default;\n$custom-control-indicator-checked-bg:           $component-active-bg !default;\n$custom-control-indicator-checked-disabled-bg:  rgba(theme-color(\"primary\"), .5) !default;\n$custom-control-indicator-checked-box-shadow:   null !default;\n$custom-control-indicator-checked-border-color: $custom-control-indicator-checked-bg !default;\n\n$custom-control-indicator-focus-box-shadow:     $input-focus-box-shadow !default;\n$custom-control-indicator-focus-border-color:   $input-focus-border-color !default;\n\n$custom-control-indicator-active-color:         $component-active-color !default;\n$custom-control-indicator-active-bg:            lighten($component-active-bg, 35%) !default;\n$custom-control-indicator-active-box-shadow:    null !default;\n$custom-control-indicator-active-border-color:  $custom-control-indicator-active-bg !default;\n\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\n$custom-checkbox-indicator-icon-checked:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/></svg>\") !default;\n\n$custom-checkbox-indicator-indeterminate-bg:           $component-active-bg !default;\n$custom-checkbox-indicator-indeterminate-color:        $custom-control-indicator-checked-color !default;\n$custom-checkbox-indicator-icon-indeterminate:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'><path stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/></svg>\") !default;\n$custom-checkbox-indicator-indeterminate-box-shadow:   null !default;\n$custom-checkbox-indicator-indeterminate-border-color: $custom-checkbox-indicator-indeterminate-bg !default;\n\n$custom-radio-indicator-border-radius:          50% !default;\n$custom-radio-indicator-icon-checked:           url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'><circle r='3' fill='#{$custom-control-indicator-checked-color}'/></svg>\") !default;\n\n$custom-switch-width:                           $custom-control-indicator-size * 1.75 !default;\n$custom-switch-indicator-border-radius:         $custom-control-indicator-size / 2 !default;\n$custom-switch-indicator-size:                  subtract($custom-control-indicator-size, $custom-control-indicator-border-width * 4) !default;\n\n$custom-select-padding-y:           $input-padding-y !default;\n$custom-select-padding-x:           $input-padding-x !default;\n$custom-select-font-family:         $input-font-family !default;\n$custom-select-font-size:           $input-font-size !default;\n$custom-select-height:              $input-height !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-font-weight:         $input-font-weight !default;\n$custom-select-line-height:         $input-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-600 !default;\n$custom-select-bg:                  $input-bg !default;\n$custom-select-disabled-bg:         $gray-200 !default;\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color:     $gray-800 !default;\n$custom-select-indicator:           url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'><path fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>\") !default;\n$custom-select-background:          escape-svg($custom-select-indicator) right $custom-select-padding-x center / $custom-select-bg-size no-repeat !default; // Used so we can have multiple background elements (e.g., arrow and feedback icon)\n\n$custom-select-feedback-icon-padding-right: add(1em * .75, (2 * $custom-select-padding-y * .75) + $custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-position:      center right ($custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-size:          $input-height-inner-half $input-height-inner-half !default;\n\n$custom-select-border-width:        $input-border-width !default;\n$custom-select-border-color:        $input-border-color !default;\n$custom-select-border-radius:       $border-radius !default;\n$custom-select-box-shadow:          inset 0 1px 2px rgba($black, .075) !default;\n\n$custom-select-focus-border-color:  $input-focus-border-color !default;\n$custom-select-focus-width:         $input-focus-width !default;\n$custom-select-focus-box-shadow:    0 0 0 $custom-select-focus-width $input-btn-focus-color !default;\n\n$custom-select-padding-y-sm:        $input-padding-y-sm !default;\n$custom-select-padding-x-sm:        $input-padding-x-sm !default;\n$custom-select-font-size-sm:        $input-font-size-sm !default;\n$custom-select-height-sm:           $input-height-sm !default;\n\n$custom-select-padding-y-lg:        $input-padding-y-lg !default;\n$custom-select-padding-x-lg:        $input-padding-x-lg !default;\n$custom-select-font-size-lg:        $input-font-size-lg !default;\n$custom-select-height-lg:           $input-height-lg !default;\n\n$custom-range-track-width:          100% !default;\n$custom-range-track-height:         .5rem !default;\n$custom-range-track-cursor:         pointer !default;\n$custom-range-track-bg:             $gray-300 !default;\n$custom-range-track-border-radius:  1rem !default;\n$custom-range-track-box-shadow:     inset 0 .25rem .25rem rgba($black, .1) !default;\n\n$custom-range-thumb-width:                   1rem !default;\n$custom-range-thumb-height:                  $custom-range-thumb-width !default;\n$custom-range-thumb-bg:                      $component-active-bg !default;\n$custom-range-thumb-border:                  0 !default;\n$custom-range-thumb-border-radius:           1rem !default;\n$custom-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$custom-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$custom-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in IE/Edge\n$custom-range-thumb-active-bg:               lighten($component-active-bg, 35%) !default;\n$custom-range-thumb-disabled-bg:             $gray-500 !default;\n\n$custom-file-height:                $input-height !default;\n$custom-file-height-inner:          $input-height-inner !default;\n$custom-file-focus-border-color:    $input-focus-border-color !default;\n$custom-file-focus-box-shadow:      $input-focus-box-shadow !default;\n$custom-file-disabled-bg:           $input-disabled-bg !default;\n\n$custom-file-padding-y:             $input-padding-y !default;\n$custom-file-padding-x:             $input-padding-x !default;\n$custom-file-line-height:           $input-line-height !default;\n$custom-file-font-family:           $input-font-family !default;\n$custom-file-font-weight:           $input-font-weight !default;\n$custom-file-color:                 $input-color !default;\n$custom-file-bg:                    $input-bg !default;\n$custom-file-border-width:          $input-border-width !default;\n$custom-file-border-color:          $input-border-color !default;\n$custom-file-border-radius:         $input-border-radius !default;\n$custom-file-box-shadow:            $input-box-shadow !default;\n$custom-file-button-color:          $custom-file-color !default;\n$custom-file-button-bg:             $input-group-addon-bg !default;\n$custom-file-text: (\n  en: \"Browse\"\n) !default;\n\n\n// Form validation\n\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $small-font-size !default;\n$form-feedback-valid-color:         theme-color(\"success\") !default;\n$form-feedback-invalid-color:       theme-color(\"danger\") !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n\n$form-validation-states: () !default;\n$form-validation-states: map-merge(\n  (\n    \"valid\": (\n      \"color\": $form-feedback-valid-color,\n      \"icon\": $form-feedback-icon-valid\n    ),\n    \"invalid\": (\n      \"color\": $form-feedback-invalid-color,\n      \"icon\": $form-feedback-icon-invalid\n    ),\n  ),\n  $form-validation-states\n);\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-divider-color:                 $gray-200 !default;\n$nav-divider-margin-y:              $spacer / 2 !default;\n\n\n// Navbar\n\n$navbar-padding-y:                  $spacer / 2 !default;\n$navbar-padding-x:                  $spacer !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n\n$navbar-nav-scroll-max-height:      75vh !default;\n\n$navbar-dark-color:                 rgba($white, .5) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .5) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\n$dropdown-divider-bg:               $gray-200 !default;\n$dropdown-divider-margin-y:         $nav-divider-margin-y !default;\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black, .175) !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\n$dropdown-link-hover-bg:            $gray-200 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-500 !default;\n\n$dropdown-item-padding-y:           .25rem !default;\n$dropdown-item-padding-x:           1.5rem !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding:           $dropdown-padding-y $dropdown-item-padding-x !default;\n\n\n// Pagination\n\n$pagination-padding-y:              .5rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n$pagination-line-height:            1.25 !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n$pagination-border-radius-sm:       $border-radius-sm !default;\n$pagination-border-radius-lg:       $border-radius-lg !default;\n\n// Jumbotron\n\n$jumbotron-padding:                 2rem !default;\n$jumbotron-color:                   null !default;\n$jumbotron-bg:                      $gray-200 !default;\n\n\n// Cards\n\n$card-spacer-y:                     .75rem !default;\n$card-spacer-x:                     1.25rem !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          1.25rem !default;\n\n$card-group-margin:                 $grid-gutter-width / 2 !default;\n$card-deck-margin:                  $card-group-margin !default;\n\n$card-columns-count:                3 !default;\n$card-columns-gap:                  1.25rem !default;\n$card-columns-margin:               $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 .25rem !default;\n$tooltip-padding-x:                 .5rem !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n// Form tooltips must come after regular tooltips\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   $line-height-base !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n\n\n// Popovers\n\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\n$popover-box-shadow:                0 .25rem .5rem rgba($black, .2) !default;\n\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          .75rem !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $popover-header-padding-y !default;\n$popover-body-padding-x:            $popover-header-padding-x !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Toasts\n\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .25rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               .25rem !default;\n$toast-box-shadow:                  0 .25rem .75rem rgba($black, .1) !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   75% !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-padding-y:                   .25em !default;\n$badge-padding-x:                   .4em !default;\n$badge-border-radius:               $border-radius !default;\n\n$badge-transition:                  $btn-transition !default;\n$badge-focus-width:                 $input-btn-focus-width !default;\n\n$badge-pill-padding-x:              .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:          10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               1rem !default;\n\n// Margin between elements in footer, must be lower than or equal to 2 * $modal-inner-padding\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5) !default;\n$modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            1rem !default;\n$modal-header-padding-x:            1rem !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-xl:                          1140px !default;\n$modal-lg:                          800px !default;\n$modal-md:                          500px !default;\n$modal-sm:                          300px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   .75rem !default;\n$alert-padding-x:                   1.25rem !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n$alert-bg-level:                    -10 !default;\n$alert-border-level:                -9 !default;\n$alert-color-level:                 6 !default;\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black, .1) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   theme-color(\"primary\") !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n\n// List group\n\n$list-group-color:                  null !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         .75rem !default;\n$list-group-item-padding-x:         1.25rem !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              0 1px 2px rgba($black, .075) !default;\n\n\n// Figures\n\n$figure-caption-font-size:          90% !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-font-size:              null !default;\n\n$breadcrumb-padding-y:              .75rem !default;\n$breadcrumb-padding-x:              1rem !default;\n$breadcrumb-item-padding:           .5rem !default;\n\n$breadcrumb-margin-bottom:          1rem !default;\n\n$breadcrumb-bg:                     $gray-200 !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n\n$breadcrumb-border-radius:          $border-radius !default;\n\n\n// Carousel\n\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n\n$carousel-control-icon-width:        20px !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' width='8' height='8' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' width='8' height='8' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n\n// Spinners\n\n$spinner-width:         2rem !default;\n$spinner-height:        $spinner-width !default;\n$spinner-border-width:  .25em !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n\n\n// Close\n\n$close-font-size:                   $font-size-base * 1.5 !default;\n$close-font-weight:                 $font-weight-bold !default;\n$close-color:                       $black !default;\n$close-text-shadow:                 0 1px 0 $white !default;\n\n\n// Code\n\n$code-font-size:                    87.5% !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         $gray-900 !default;\n$pre-scrollable-max-height:         340px !default;\n\n\n// Utilities\n\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex, inline-flex !default;\n$overflows: auto, hidden !default;\n$positions: static, relative, absolute, fixed, sticky !default;\n$user-selects: all, auto, none !default;\n\n\n// Printing\n\n$print-page-size:                   a3 !default;\n$print-body-min-width:              map-get($grid-breakpoints, \"lg\") !default;\n","// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated font-resizing\n//\n// See https://github.com/twbs/rfs\n\n// Configuration\n\n// Base font size\n$rfs-base-font-size: 1.25rem !default;\n$rfs-font-size-unit: rem !default;\n\n// Breakpoint at where font-size starts decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n// Resize font-size based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != \"number\" or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-responsive-font-sizes to false\n$enable-responsive-font-sizes: true !default;\n\n// Cache $rfs-base-font-size unit\n$rfs-base-font-size-unit: unit($rfs-base-font-size);\n\n// Remove px-unit from $rfs-base-font-size for calculations\n@if $rfs-base-font-size-unit == \"px\" {\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1);\n}\n@else if $rfs-base-font-size-unit == \"rem\" {\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1 / $rfs-rem-value);\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == \"px\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == \"rem\" or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1 / $rfs-rem-value);\n}\n\n// Responsive font-size mixin\n@mixin rfs($fs, $important: false) {\n  // Cache $fs unit\n  $fs-unit: if(type-of($fs) == \"number\", unit($fs), false);\n\n  // Add !important suffix if needed\n  $rfs-suffix: if($important, \" !important\", \"\");\n\n  // If $fs isn't a number (like inherit) or $fs has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n  @if not $fs-unit or $fs-unit != \"\" and $fs-unit != \"px\" and $fs-unit != \"rem\" or $fs == 0 {\n    font-size: #{$fs}#{$rfs-suffix};\n  }\n  @else {\n    // Variables for storing static and fluid rescaling\n    $rfs-static: null;\n    $rfs-fluid: null;\n\n    // Remove px-unit from $fs for calculations\n    @if $fs-unit == \"px\" {\n      $fs: $fs / ($fs * 0 + 1);\n    }\n    @else if $fs-unit == \"rem\" {\n      $fs: $fs / ($fs * 0 + 1 / $rfs-rem-value);\n    }\n\n    // Set default font-size\n    @if $rfs-font-size-unit == rem {\n      $rfs-static: #{$fs / $rfs-rem-value}rem#{$rfs-suffix};\n    }\n    @else if $rfs-font-size-unit == px {\n      $rfs-static: #{$fs}px#{$rfs-suffix};\n    }\n    @else {\n      @error \"`#{$rfs-font-size-unit}` is not a valid unit for $rfs-font-size-unit. Use `px` or `rem`.\";\n    }\n\n    // Only add media query if font-size is bigger as the minimum font-size\n    // If $rfs-factor == 1, no rescaling will take place\n    @if $fs > $rfs-base-font-size and $enable-responsive-font-sizes {\n      $min-width: null;\n      $variable-unit: null;\n\n      // Calculate minimum font-size for given font-size\n      $fs-min: $rfs-base-font-size + ($fs - $rfs-base-font-size) / $rfs-factor;\n\n      // Calculate difference between given font-size and minimum font-size for given font-size\n      $fs-diff: $fs - $fs-min;\n\n      // Base font-size formatting\n      // No need to check if the unit is valid, because we did that before\n      $min-width: if($rfs-font-size-unit == rem, #{$fs-min / $rfs-rem-value}rem, #{$fs-min}px);\n\n      // If two-dimensional, use smallest of screen width and height\n      $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n      // Calculate the variable width between 0 and $rfs-breakpoint\n      $variable-width: #{$fs-diff * 100 / $rfs-breakpoint}#{$variable-unit};\n\n      // Set the calculated font-size.\n      $rfs-fluid: calc(#{$min-width} + #{$variable-width}) #{$rfs-suffix};\n    }\n\n    // Rendering\n    @if $rfs-fluid == null {\n      // Only render static font-size if no fluid font-size is available\n      font-size: $rfs-static;\n    }\n    @else {\n      $mq-value: null;\n\n      // RFS breakpoint formatting\n      @if $rfs-breakpoint-unit == em or $rfs-breakpoint-unit == rem {\n        $mq-value: #{$rfs-breakpoint / $rfs-rem-value}#{$rfs-breakpoint-unit};\n      }\n      @else if $rfs-breakpoint-unit == px {\n        $mq-value: #{$rfs-breakpoint}px;\n      }\n      @else {\n        @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n      }\n\n      @if $rfs-class == \"disable\" {\n        // Adding an extra class increases specificity,\n        // which prevents the media query to override the font size\n        &,\n        .disable-responsive-font-size &,\n        &.disable-responsive-font-size {\n          font-size: $rfs-static;\n        }\n      }\n      @else {\n        font-size: $rfs-static;\n      }\n\n      @if $rfs-two-dimensional {\n        @media (max-width: #{$mq-value}), (max-height: #{$mq-value}) {\n          @if $rfs-class == \"enable\" {\n            .enable-responsive-font-size &,\n            &.enable-responsive-font-size {\n              font-size: $rfs-fluid;\n            }\n          }\n          @else {\n            font-size: $rfs-fluid;\n          }\n\n          @if $rfs-safari-iframe-resize-bug-fix {\n            // stylelint-disable-next-line length-zero-no-unit\n            min-width: 0vw;\n          }\n        }\n      }\n      @else {\n        @media (max-width: #{$mq-value}) {\n          @if $rfs-class == \"enable\" {\n            .enable-responsive-font-size &,\n            &.enable-responsive-font-size {\n              font-size: $rfs-fluid;\n            }\n          }\n          @else {\n            font-size: $rfs-fluid;\n          }\n\n          @if $rfs-safari-iframe-resize-bug-fix {\n            // stylelint-disable-next-line length-zero-no-unit\n            min-width: 0vw;\n          }\n        }\n      }\n    }\n  }\n}\n\n// The font-size & responsive-font-size mixin uses RFS to rescale font sizes\n@mixin font-size($fs, $important: false) {\n  @include rfs($fs, $important);\n}\n\n@mixin responsive-font-size($fs, $important: false) {\n  @include rfs($fs, $important);\n}\n","// Hover mixin and `$enable-hover-media-query` are deprecated.\n//\n// Originally added during our alphas and maintained during betas, this mixin was\n// designed to prevent `:hover` stickiness on iOS-an issue where hover styles\n// would persist after initial touch.\n//\n// For backward compatibility, we've kept these mixins and updated them to\n// always return their regular pseudo-classes instead of a shimmed media query.\n//\n// Issue: https://github.com/twbs/bootstrap/issues/25195\n\n@mixin hover() {\n  &:hover { @content; }\n}\n\n@mixin hover-focus() {\n  &:hover,\n  &:focus {\n    @content;\n  }\n}\n\n@mixin plain-hover-focus() {\n  &,\n  &:hover,\n  &:focus {\n    @content;\n  }\n}\n\n@mixin hover-focus-active() {\n  &:hover,\n  &:focus,\n  &:active {\n    @content;\n  }\n}\n","// stylelint-disable selector-list-comma-newline-after\n\n//\n// Headings\n//\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n}\n\nh1, .h1 { @include font-size($h1-font-size); }\nh2, .h2 { @include font-size($h2-font-size); }\nh3, .h3 { @include font-size($h3-font-size); }\nh4, .h4 { @include font-size($h4-font-size); }\nh5, .h5 { @include font-size($h5-font-size); }\nh6, .h6 { @include font-size($h6-font-size); }\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n.display-1 {\n  @include font-size($display1-size);\n  font-weight: $display1-weight;\n  line-height: $display-line-height;\n}\n.display-2 {\n  @include font-size($display2-size);\n  font-weight: $display2-weight;\n  line-height: $display-line-height;\n}\n.display-3 {\n  @include font-size($display3-size);\n  font-weight: $display3-weight;\n  line-height: $display-line-height;\n}\n.display-4 {\n  @include font-size($display4-size);\n  font-weight: $display4-weight;\n  line-height: $display-line-height;\n}\n\n\n//\n// Horizontal rules\n//\n\nhr {\n  margin-top: $hr-margin-y;\n  margin-bottom: $hr-margin-y;\n  border: 0;\n  border-top: $hr-border-width solid $hr-border-color;\n}\n\n\n//\n// Emphasis\n//\n\nsmall,\n.small {\n  @include font-size($small-font-size);\n  font-weight: $font-weight-normal;\n}\n\nmark,\n.mark {\n  padding: $mark-padding;\n  background-color: $mark-bg;\n}\n\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size(90%);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $spacer;\n  @include font-size($blockquote-font-size);\n}\n\n.blockquote-footer {\n  display: block;\n  @include font-size($blockquote-small-font-size);\n  color: $blockquote-small-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled() {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer / 2;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid() {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n\n\n// Retina image\n//\n// Short retina mixin for setting background-image and -size.\n\n@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {\n  background-image: url($file-1x);\n\n  // Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio,\n  // but doesn't convert dppx=>dpi.\n  // There's no such thing as unprefixed min-device-pixel-ratio since it's nonstandard.\n  // Compatibility info: https://caniuse.com/css-media-resolution\n  @media only screen and (min-resolution: 192dpi), // IE9-11 don't support dppx\n    only screen and (min-resolution: 2dppx) { // Standardized\n    background-image: url($file-2x);\n    background-size: $width-1x $height-1x;\n  }\n  @include deprecate(\"`img-retina()`\", \"v4.3.0\", \"v5\");\n}\n","// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-right-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-left-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n","// Inline code\ncode {\n  @include font-size($code-font-size);\n  color: $code-color;\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\n// User input typically entered via keyboard\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n  @include box-shadow($kbd-box-shadow);\n\n  kbd {\n    padding: 0;\n    @include font-size(100%);\n    font-weight: $nested-kbd-font-weight;\n    @include box-shadow(none);\n  }\n}\n\n// Blocks of code\npre {\n  display: block;\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\n// Enable scrollable blocks of code\n.pre-scrollable {\n  max-height: $pre-scrollable-max-height;\n  overflow-y: scroll;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Row\n//\n// Rows contain your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n  }\n\n  // Remove the negative margin from default .row, then the horizontal padding\n  // from all immediate children columns (to prevent runaway style inheritance).\n  .no-gutters {\n    margin-right: 0;\n    margin-left: 0;\n\n    > .col,\n    > [class*=\"col-\"] {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n}\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-container($gutter: $grid-gutter-width) {\n  width: 100%;\n  padding-right: $gutter / 2;\n  padding-left: $gutter / 2;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -$gutter / 2;\n  margin-left: -$gutter / 2;\n}\n\n// For each breakpoint, define the maximum width of the container in a media query\n@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint, $container-max-width in $max-widths {\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      max-width: $container-max-width;\n    }\n  }\n  @include deprecate(\"The `make-container-max-widths` mixin\", \"v4.5.2\", \"v5\");\n}\n\n@mixin make-col-ready($gutter: $grid-gutter-width) {\n  position: relative;\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we use `flex` values\n  // later on to override this initial width.\n  width: 100%;\n  padding-right: $gutter / 2;\n  padding-left: $gutter / 2;\n}\n\n@mixin make-col($size, $columns: $grid-columns) {\n  flex: 0 0 percentage($size / $columns);\n  // Add a `max-width` to ensure content within each column does not blow out\n  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari\n  // do not appear to require this.\n  max-width: percentage($size / $columns);\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; // Reset earlier grid tiers\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: $size / $columns;\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 100% / $count;\n    max-width: 100% / $count;\n  }\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.02px\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  // Common properties for all breakpoints\n  %grid-column {\n    position: relative;\n    width: 100%;\n    padding-right: $gutter / 2;\n    padding-left: $gutter / 2;\n  }\n\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @if $columns > 0 {\n      // Allow columns to stretch full width below their breakpoints\n      @for $i from 1 through $columns {\n        .col#{$infix}-#{$i} {\n          @extend %grid-column;\n        }\n      }\n    }\n\n    .col#{$infix},\n    .col#{$infix}-auto {\n      @extend %grid-column;\n    }\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n      }\n\n      .order#{$infix}-first { order: -1; }\n\n      .order#{$infix}-last { order: $columns + 1; }\n\n      @for $i from 0 through $columns {\n        .order#{$infix}-#{$i} { order: $i; }\n      }\n\n      @if $columns > 0 {\n        // `$columns - 1` because offsetting by the width of an entire row isn't possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  width: 100%;\n  margin-bottom: $spacer;\n  color: $table-color;\n  background-color: $table-bg; // Reset for nesting within parents with `background-color`.\n\n  th,\n  td {\n    padding: $table-cell-padding;\n    vertical-align: top;\n    border-top: $table-border-width solid $table-border-color;\n  }\n\n  thead th {\n    vertical-align: bottom;\n    border-bottom: (2 * $table-border-width) solid $table-border-color;\n  }\n\n  tbody + tbody {\n    border-top: (2 * $table-border-width) solid $table-border-color;\n  }\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  th,\n  td {\n    padding: $table-cell-padding-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n\n.table-bordered {\n  border: $table-border-width solid $table-border-color;\n\n  th,\n  td {\n    border: $table-border-width solid $table-border-color;\n  }\n\n  thead {\n    th,\n    td {\n      border-bottom-width: 2 * $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  th,\n  td,\n  thead th,\n  tbody + tbody {\n    border: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  tbody tr:nth-of-type(#{$table-striped-order}) {\n    background-color: $table-accent-bg;\n  }\n}\n\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  tbody tr {\n    @include hover() {\n      color: $table-hover-color;\n      background-color: $table-hover-bg;\n    }\n  }\n}\n\n\n// Table backgrounds\n//\n// Exact selectors below required to override `.table-striped` and prevent\n// inheritance to nested tables.\n\n@each $color, $value in $theme-colors {\n  @include table-row-variant($color, theme-color-level($color, $table-bg-level), theme-color-level($color, $table-border-level));\n}\n\n@include table-row-variant(active, $table-active-bg);\n\n\n// Dark styles\n//\n// Same table markup, but inverted color scheme: dark background and light text.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.table {\n  .thead-dark {\n    th {\n      color: $table-dark-color;\n      background-color: $table-dark-bg;\n      border-color: $table-dark-border-color;\n    }\n  }\n\n  .thead-light {\n    th {\n      color: $table-head-color;\n      background-color: $table-head-bg;\n      border-color: $table-border-color;\n    }\n  }\n}\n\n.table-dark {\n  color: $table-dark-color;\n  background-color: $table-dark-bg;\n\n  th,\n  td,\n  thead th {\n    border-color: $table-dark-border-color;\n  }\n\n  &.table-bordered {\n    border: 0;\n  }\n\n  &.table-striped {\n    tbody tr:nth-of-type(#{$table-striped-order}) {\n      background-color: $table-dark-accent-bg;\n    }\n  }\n\n  &.table-hover {\n    tbody tr {\n      @include hover() {\n        color: $table-dark-hover-color;\n        background-color: $table-dark-hover-bg;\n      }\n    }\n  }\n}\n\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n.table-responsive {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        display: block;\n        width: 100%;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n\n        // Prevent double border on horizontal scroll due to use of `display: block;`\n        > .table-bordered {\n          border: 0;\n        }\n      }\n    }\n  }\n}\n","// Tables\n\n@mixin table-row-variant($state, $background, $border: null) {\n  // Exact selectors below required to override `.table-striped` and prevent\n  // inheritance to nested tables.\n  .table-#{$state} {\n    &,\n    > th,\n    > td {\n      background-color: $background;\n    }\n\n    @if $border != null {\n      th,\n      td,\n      thead th,\n      tbody + tbody {\n        border-color: $border;\n      }\n    }\n  }\n\n  // Hover states for `.table-hover`\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\n  .table-hover {\n    $hover-background: darken($background, 5%);\n\n    .table-#{$state} {\n      @include hover() {\n        background-color: $hover-background;\n\n        > td,\n        > th {\n          background-color: $hover-background;\n        }\n      }\n    }\n  }\n}\n","// Bootstrap functions\n//\n// Utility mixins and functions for evaluating source code across our variables, maps, and mixins.\n\n// Ascending\n// Used to evaluate Sass maps like our grid breakpoints.\n@mixin _assert-ascending($map, $map-name) {\n  $prev-key: null;\n  $prev-num: null;\n  @each $key, $num in $map {\n    @if $prev-num == null or unit($num) == \"%\" or unit($prev-num) == \"%\" {\n      // Do nothing\n    } @else if not comparable($prev-num, $num) {\n      @warn \"Potentially invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    } @else if $prev-num >= $num {\n      @warn \"Invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} which isn't greater than #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    }\n    $prev-key: $key;\n    $prev-num: $num;\n  }\n}\n\n// Starts at zero\n// Used to ensure the min-width of the lowest breakpoint starts at 0.\n@mixin _assert-starts-at-zero($map, $map-name: \"$grid-breakpoints\") {\n  @if length($map) > 0 {\n    $values: map-values($map);\n    $first-value: nth($values, 1);\n    @if $first-value != 0 {\n      @warn \"First breakpoint in #{$map-name} must start at 0, but starts at #{$first-value}.\";\n    }\n  }\n}\n\n// Replace `$search` with `$replace` in `$string`\n// Used on our SVG icon backgrounds for custom forms.\n//\n// @author Hugo Giraudel\n// @param {String} $string - Initial string\n// @param {String} $search - Substring to replace\n// @param {String} $replace ('') - New value\n// @return {String} - Updated string\n@function str-replace($string, $search, $replace: \"\") {\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n}\n\n// See https://codepen.io/kevinweber/pen/dXWoRw\n//\n// Requires the use of quotes around data URIs.\n\n@function escape-svg($string) {\n  @if str-index($string, \"data:image/svg+xml\") {\n    @each $char, $encoded in $escaped-characters {\n      // Do not escape the url brackets\n      @if str-index($string, \"url(\") == 1 {\n        $string: url(\"#{str-replace(str-slice($string, 6, -3), $char, $encoded)}\");\n      } @else {\n        $string: str-replace($string, $char, $encoded);\n      }\n    }\n  }\n\n  @return $string;\n}\n\n// Color contrast\n@function color-yiq($color, $dark: $yiq-text-dark, $light: $yiq-text-light) {\n  $r: red($color);\n  $g: green($color);\n  $b: blue($color);\n\n  $yiq: (($r * 299) + ($g * 587) + ($b * 114)) / 1000;\n\n  @if ($yiq >= $yiq-contrasted-threshold) {\n    @return $dark;\n  } @else {\n    @return $light;\n  }\n}\n\n// Retrieve color Sass maps\n@function color($key: \"blue\") {\n  @return map-get($colors, $key);\n}\n\n@function theme-color($key: \"primary\") {\n  @return map-get($theme-colors, $key);\n}\n\n@function gray($key: \"100\") {\n  @return map-get($grays, $key);\n}\n\n// Request a theme color level\n@function theme-color-level($color-name: \"primary\", $level: 0) {\n  $color: theme-color($color-name);\n  $color-base: if($level > 0, $black, $white);\n  $level: abs($level);\n\n  @return mix($color-base, $color, $level * $theme-color-interval);\n}\n\n// Return valid calc\n@function add($value1, $value2, $return-calc: true) {\n  @if $value1 == null {\n    @return $value2;\n  }\n\n  @if $value2 == null {\n    @return $value1;\n  }\n\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\n    @return $value1 + $value2;\n  }\n\n  @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(\" + \") + $value2);\n}\n\n@function subtract($value1, $value2, $return-calc: true) {\n  @if $value1 == null and $value2 == null {\n    @return null;\n  }\n\n  @if $value1 == null {\n    @return -$value2;\n  }\n\n  @if $value2 == null {\n    @return $value1;\n  }\n\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\n    @return $value1 - $value2;\n  }\n\n  @return if($return-calc == true, calc(#{$value1} - #{$value2}), $value1 + unquote(\" - \") + $value2);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Textual form controls\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: $input-height;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  // Unstyle the caret on `<select>`s in IE10+.\n  &::-ms-expand {\n    background-color: transparent;\n    border: 0;\n  }\n\n  // Remove select outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $input-color;\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  @include form-control-focus($ignore-warning: true);\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled,\n  &[readonly] {\n    background-color: $input-disabled-bg;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n}\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  &.form-control {\n    appearance: none; // Fix appearance for date inputs in Safari\n  }\n}\n\nselect.form-control {\n  &:focus::-ms-value {\n    // Suppress the nested default white text on blue background highlight given to\n    // the selected option text when the (still closed) <select> receives focus\n    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n    // match the appearance of the native widget.\n    // See https://github.com/twbs/bootstrap/issues/19398.\n    color: $input-color;\n    background-color: $input-bg;\n  }\n}\n\n// Make file inputs better match text inputs by forcing them to new lines.\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n\n//\n// Labels\n//\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<label>/<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  line-height: $input-line-height;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n}\n\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  @include font-size($input-font-size);\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n.form-control-lg {\n  height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n// stylelint-disable-next-line no-duplicate-selectors\nselect.form-control {\n  &[size],\n  &[multiple] {\n    height: auto;\n  }\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n// Form groups\n//\n// Designed to help with the organization and spacing of vertical forms. For\n// horizontal forms, use the predefined grid classes.\n\n.form-group {\n  margin-bottom: $form-group-margin-bottom;\n}\n\n.form-text {\n  display: block;\n  margin-top: $form-text-margin-top;\n}\n\n\n// Form grid\n//\n// Special replacement for our grid system's `.row` for tighter form layouts.\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -$form-grid-gutter-width / 2;\n  margin-left: -$form-grid-gutter-width / 2;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-right: $form-grid-gutter-width / 2;\n    padding-left: $form-grid-gutter-width / 2;\n  }\n}\n\n\n// Checkboxes and radios\n//\n// Indent the labels to position radios/checkboxes as hanging controls.\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: $form-check-input-gutter;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: $form-check-input-margin-y;\n  margin-left: -$form-check-input-gutter;\n\n  // Use [disabled] and :disabled for workaround https://github.com/twbs/bootstrap/issues/28247\n  &[disabled] ~ .form-check-label,\n  &:disabled ~ .form-check-label {\n    color: $text-muted;\n  }\n}\n\n.form-check-label {\n  margin-bottom: 0; // Override default `<label>` bottom margin\n}\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0; // Override base .form-check\n  margin-right: $form-check-inline-margin-x;\n\n  // Undo .form-check-input defaults and add some `margin-right`.\n  .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: $form-check-inline-input-margin-x;\n    margin-left: 0;\n  }\n}\n\n\n// Form validation\n//\n// Provide feedback to users when form field values are valid or invalid. Works\n// primarily for client-side validation via scoped `:invalid` and `:valid`\n// pseudo-classes but also includes `.is-invalid` and `.is-valid` classes for\n// server side validation.\n\n@each $state, $data in $form-validation-states {\n  @include form-validation-state($state, map-get($data, color), map-get($data, icon));\n}\n\n// Inline forms\n//\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\n// forms begin stacked on extra small (mobile) devices and then go inline when\n// viewports reach <768px.\n//\n// Requires wrapping inputs and labels with `.form-group` for proper display of\n// default HTML form controls and our custom form controls (e.g., input groups).\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; // Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height)\n\n  // Because we use flex, the initial sizing of checkboxes is collapsed and\n  // doesn't occupy the full-width (which is what we want for xs grid tier),\n  // so we force that here.\n  .form-check {\n    width: 100%;\n  }\n\n  // Kick in the inline\n  @include media-breakpoint-up(sm) {\n    label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0;\n    }\n\n    // Inline-block all the things for \"inline\"\n    .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0;\n    }\n\n    // Allow folks to *not* use `.form-group`\n    .form-control {\n      display: inline-block;\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\n      vertical-align: middle;\n    }\n\n    // Make static controls behave like regular ones\n    .form-control-plaintext {\n      display: inline-block;\n    }\n\n    .input-group,\n    .custom-select {\n      width: auto;\n    }\n\n    // Remove default margin on radios/checkboxes that were used for stacking, and\n    // then undo the floating of radios and checkboxes to match.\n    .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0;\n    }\n    .form-check-input {\n      position: relative;\n      flex-shrink: 0;\n      margin-top: 0;\n      margin-right: $form-check-input-margin-x;\n      margin-left: 0;\n    }\n\n    .custom-control {\n      align-items: center;\n      justify-content: center;\n    }\n    .custom-control-label {\n      margin-bottom: 0;\n    }\n  }\n}\n","// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-prefers-reduced-motion-media-query and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n","// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `$input-focus-border-color` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n@mixin form-control-focus($ignore-warning: false) {\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n  @include deprecate(\"The `form-control-focus()` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n\n// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state($state, $color, $icon) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: color-yiq($color);\n    background-color: rgba($color, $form-feedback-tooltip-opacity);\n    @include border-radius($form-feedback-tooltip-border-radius);\n\n    // See https://github.com/twbs/bootstrap/pull/31557\n    // Align tooltip to form elements\n    .form-row > .col > &,\n    .form-row > [class*=\"col-\"] > & {\n      left: $form-grid-gutter-width / 2;\n    }\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .custom-select {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $custom-select-feedback-icon-padding-right;\n        background: $custom-select-background, $custom-select-bg escape-svg($icon) $custom-select-feedback-icon-position / $custom-select-feedback-icon-size no-repeat;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      ~ .form-check-label {\n        color: $color;\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n  .custom-control-input {\n    @include form-validation-state-selector($state) {\n      ~ .custom-control-label {\n        color: $color;\n\n        &::before {\n          border-color: $color;\n        }\n      }\n\n      &:checked {\n        ~ .custom-control-label::before {\n          border-color: lighten($color, 10%);\n          @include gradient-bg(lighten($color, 10%));\n        }\n      }\n\n      &:focus {\n        ~ .custom-control-label::before {\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n\n        &:not(:checked) ~ .custom-control-label::before {\n          border-color: $color;\n        }\n      }\n    }\n  }\n\n  // custom file\n  .custom-file-input {\n    @include form-validation-state-selector($state) {\n      ~ .custom-file-label {\n        border-color: $color;\n      }\n\n      &:focus {\n        ~ .custom-file-label {\n          border-color: $color;\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n      }\n    }\n  }\n}\n","// Gradients\n\n@mixin gradient-bg($color) {\n  @if $enable-gradients {\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x;\n  } @else {\n    background-color: $color;\n  }\n}\n\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n  background-repeat: repeat-x;\n}\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Base styles\n//\n\n.btn {\n  display: inline-block;\n  font-family: $btn-font-family;\n  font-weight: $btn-font-weight;\n  color: $body-color;\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: $btn-border-width solid transparent;\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);\n  @include transition($btn-transition);\n\n  @include hover() {\n    color: $body-color;\n    text-decoration: none;\n  }\n\n  &:focus,\n  &.focus {\n    outline: 0;\n    box-shadow: $btn-focus-box-shadow;\n  }\n\n  // Disabled comes first so active can properly restyle\n  &.disabled,\n  &:disabled {\n    opacity: $btn-disabled-opacity;\n    @include box-shadow(none);\n  }\n\n  &:not(:disabled):not(.disabled) {\n    cursor: if($enable-pointer-cursor-for-buttons, pointer, null);\n\n    &:active,\n    &.active {\n      @include box-shadow($btn-active-box-shadow);\n\n      &:focus {\n        @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\n      }\n    }\n  }\n}\n\n// Future-proof disabling of clicks on `<a>` elements\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n\n//\n// Alternate buttons\n//\n\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @include button-variant($value, $value);\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  font-weight: $font-weight-normal;\n  color: $link-color;\n  text-decoration: $link-decoration;\n\n  @include hover() {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus,\n  &.focus {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $btn-link-disabled-color;\n    pointer-events: none;\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);\n}\n\n\n//\n// Block button\n//\n\n.btn-block {\n  display: block;\n  width: 100%;\n\n  // Vertically space out multiple block buttons\n  + .btn-block {\n    margin-top: $btn-block-spacing-y;\n  }\n}\n\n// Specificity overrides\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  &.btn-block {\n    width: 100%;\n  }\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n@mixin button-variant($background, $border, $hover-background: darken($background, 7.5%), $hover-border: darken($border, 10%), $active-background: darken($background, 10%), $active-border: darken($border, 12.5%)) {\n  color: color-yiq($background);\n  @include gradient-bg($background);\n  border-color: $border;\n  @include box-shadow($btn-box-shadow);\n\n  @include hover() {\n    color: color-yiq($hover-background);\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n  }\n\n  &:focus,\n  &.focus {\n    color: color-yiq($hover-background);\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n    @if $enable-shadows {\n      @include box-shadow($btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5));\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n    }\n  }\n\n  // Disabled comes first so active can properly restyle\n  &.disabled,\n  &:disabled {\n    color: color-yiq($background);\n    background-color: $background;\n    border-color: $border;\n    // Remove CSS gradients if they're enabled\n    @if $enable-gradients {\n      background-image: none;\n    }\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active,\n  .show > &.dropdown-toggle {\n    color: color-yiq($active-background);\n    background-color: $active-background;\n    @if $enable-gradients {\n      background-image: none; // Remove the gradient for the pressed/active state\n    }\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows and $btn-active-box-shadow != none {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n      }\n    }\n  }\n}\n\n@mixin button-outline-variant($color, $color-hover: color-yiq($color), $active-background: $color, $active-border: $color) {\n  color: $color;\n  border-color: $color;\n\n  @include hover() {\n    color: $color-hover;\n    background-color: $active-background;\n    border-color: $active-border;\n  }\n\n  &:focus,\n  &.focus {\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $color;\n    background-color: transparent;\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active,\n  .show > &.dropdown-toggle {\n    color: color-yiq($active-background);\n    background-color: $active-background;\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows and $btn-active-box-shadow != none {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n      }\n    }\n  }\n}\n\n// Button sizes\n@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\n  padding: $padding-y $padding-x;\n  @include font-size($font-size);\n  line-height: $line-height;\n  // Manually declare to provide an override to the browser default\n  @include border-radius($border-radius, 0);\n}\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n}\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  float: left;\n  min-width: $dropdown-min-width;\n  padding: $dropdown-padding-y $dropdown-padding-x;\n  margin: $dropdown-spacer 0 0; // override default ul\n  @include font-size($dropdown-font-size);\n  color: $dropdown-color;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: $dropdown-bg;\n  background-clip: padding-box;\n  border: $dropdown-border-width solid $dropdown-border-color;\n  @include border-radius($dropdown-border-radius);\n  @include box-shadow($dropdown-box-shadow);\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-left {\n      right: auto;\n      left: 0;\n    }\n\n    .dropdown-menu#{$infix}-right {\n      right: 0;\n      left: auto;\n    }\n  }\n}\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropright {\n  .dropdown-menu {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(right);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropleft {\n  .dropdown-menu {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(left);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n// When Popper is enabled, reset the basic dropdown position\n// stylelint-disable-next-line no-duplicate-selectors\n.dropdown-menu {\n  &[x-placement^=\"top\"],\n  &[x-placement^=\"right\"],\n  &[x-placement^=\"bottom\"],\n  &[x-placement^=\"left\"] {\n    right: auto;\n    bottom: auto;\n  }\n}\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  @include nav-divider($dropdown-divider-bg, $dropdown-divider-margin-y, true);\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: $dropdown-link-color;\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n\n  // Prevent dropdown overflow if there's no padding\n  // See https://github.com/twbs/bootstrap/pull/27703\n  @if $dropdown-padding-y == 0 {\n    &:first-child {\n      @include border-top-radius($dropdown-inner-border-radius);\n    }\n\n    &:last-child {\n      @include border-bottom-radius($dropdown-inner-border-radius);\n    }\n  }\n\n  @include hover-focus() {\n    color: $dropdown-link-hover-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-hover-bg);\n  }\n\n  &.active,\n  &:active {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-active-bg);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $dropdown-link-disabled-color;\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    @if $enable-gradients {\n      background-image: none;\n    }\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: $dropdown-header-padding;\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  color: $dropdown-link-color;\n}\n","@mixin caret-down() {\n  border-top: $caret-width solid;\n  border-right: $caret-width solid transparent;\n  border-bottom: 0;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-up() {\n  border-top: 0;\n  border-right: $caret-width solid transparent;\n  border-bottom: $caret-width solid;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-right() {\n  border-top: $caret-width solid transparent;\n  border-right: 0;\n  border-bottom: $caret-width solid transparent;\n  border-left: $caret-width solid;\n}\n\n@mixin caret-left() {\n  border-top: $caret-width solid transparent;\n  border-right: $caret-width solid;\n  border-bottom: $caret-width solid transparent;\n}\n\n@mixin caret($direction: down) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $caret-spacing;\n      vertical-align: $caret-vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down();\n      } @else if $direction == up {\n        @include caret-up();\n      } @else if $direction == right {\n        @include caret-right();\n      }\n    }\n\n    @if $direction == left {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $caret-spacing;\n        vertical-align: $caret-vertical-align;\n        content: \"\";\n        @include caret-left();\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n","// Horizontal dividers\n//\n// Dividers (basically an hr) within dropdowns and nav lists\n\n@mixin nav-divider($color: $nav-divider-color, $margin-y: $nav-divider-margin-y, $ignore-warning: false) {\n  height: 0;\n  margin: $margin-y 0;\n  overflow: hidden;\n  border-top: 1px solid $color;\n  @include deprecate(\"The `nav-divider()` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n\n    // Bring the hover, focused, and \"active\" buttons to the front to overlay\n    // the borders properly\n    @include hover() {\n      z-index: 1;\n    }\n    &:focus,\n    &:active,\n    &.active {\n      z-index: 1;\n    }\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  // Prevent double borders when buttons are next to each other\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-left: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-right-radius(0);\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) > .btn {\n    @include border-left-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropright &::after {\n    margin-left: 0;\n  }\n\n  .dropleft &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n\n\n// Checkbox and radio options\n//\n// In order to support the browser's form validation feedback, powered by the\n// `required` attribute, we have to \"hide\" the inputs via `clip`. We cannot use\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\n// certain cases which is prevented by using `clip` and `pointer-events`.\n// This way, we ensure a DOM element is visible to position the popover from.\n//\n// See https://github.com/twbs/bootstrap/pull/12794 and\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\n\n.btn-group-toggle {\n  > .btn,\n  > .btn-group > .btn {\n    margin-bottom: 0; // Override default `<label>` value\n\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      position: absolute;\n      clip: rect(0, 0, 0, 0);\n      pointer-events: none;\n    }\n  }\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-control-plaintext,\n  > .custom-select,\n  > .custom-file {\n    position: relative; // For focus state's z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n    margin-bottom: 0;\n\n    + .form-control,\n    + .custom-select,\n    + .custom-file {\n      margin-left: -$input-border-width;\n    }\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .custom-select:focus,\n  > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3;\n  }\n\n  // Bring the custom file input above the label\n  > .custom-file .custom-file-input:focus {\n    z-index: 4;\n  }\n\n  > .form-control,\n  > .custom-select {\n    &:not(:first-child) { @include border-left-radius(0); }\n  }\n\n  // Custom file inputs have more complex markup, thus requiring different\n  // border-radius overrides.\n  > .custom-file {\n    display: flex;\n    align-items: center;\n\n    &:not(:last-child) .custom-file-label,\n    &:not(:first-child) .custom-file-label { @include border-left-radius(0); }\n  }\n\n  &:not(.has-validation) {\n    > .form-control:not(:last-child),\n    > .custom-select:not(:last-child),\n    > .custom-file:not(:last-child) .custom-file-label::after {\n      @include border-right-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > .form-control:nth-last-child(n + 3),\n    > .custom-select:nth-last-child(n + 3),\n    > .custom-file:nth-last-child(n + 3) .custom-file-label::after {\n      @include border-right-radius(0);\n    }\n  }\n}\n\n\n// Prepend and append\n//\n// While it requires one extra layer of HTML for each, dedicated prepend and\n// append elements allow us to 1) be less clever, 2) simplify our selectors, and\n// 3) support HTML5 form validation.\n\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n\n  .btn + .btn,\n  .btn + .input-group-text,\n  .input-group-text + .input-group-text,\n  .input-group-text + .btn {\n    margin-left: -$input-border-width;\n  }\n}\n\n.input-group-prepend { margin-right: -$input-border-width; }\n.input-group-append { margin-left: -$input-border-width; }\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-padding-y $input-padding-x;\n  margin-bottom: 0; // Allow use of <label> elements by overriding our default margin-bottom\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $font-weight-normal;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n\n  // Nuke default margins from checkboxes and radios to vertically center within.\n  input[type=\"radio\"],\n  input[type=\"checkbox\"] {\n    margin-top: 0;\n  }\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: $input-height-lg;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: $input-height-sm;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: $custom-select-padding-x + $custom-select-indicator-padding;\n}\n\n\n// Prepend and append rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  @include border-right-radius(0);\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  @include border-left-radius(0);\n}\n","// Embedded icons from Open Iconic.\n// Released under MIT and copyright 2014 Waybury.\n// https://useiconic.com/open\n\n\n// Checkboxes and radios\n//\n// Base class takes care of all the key behavioral aspects.\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: $font-size-base * $line-height-base;\n  padding-left: $custom-control-gutter + $custom-control-indicator-size;\n  color-adjust: exact; // Keep themed appearance for print\n}\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: $custom-control-spacer-x;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1; // Put the input behind the label so it doesn't overlay text\n  width: $custom-control-indicator-size;\n  height: ($font-size-base * $line-height-base + $custom-control-indicator-size) / 2;\n  opacity: 0;\n\n  &:checked ~ .custom-control-label::before {\n    color: $custom-control-indicator-checked-color;\n    border-color: $custom-control-indicator-checked-border-color;\n    @include gradient-bg($custom-control-indicator-checked-bg);\n    @include box-shadow($custom-control-indicator-checked-box-shadow);\n  }\n\n  &:focus ~ .custom-control-label::before {\n    // the mixin is not used here to make sure there is feedback\n    @if $enable-shadows {\n      box-shadow: $input-box-shadow, $custom-control-indicator-focus-box-shadow;\n    } @else {\n      box-shadow: $custom-control-indicator-focus-box-shadow;\n    }\n  }\n\n  &:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: $custom-control-indicator-focus-border-color;\n  }\n\n  &:not(:disabled):active ~ .custom-control-label::before {\n    color: $custom-control-indicator-active-color;\n    background-color: $custom-control-indicator-active-bg;\n    border-color: $custom-control-indicator-active-border-color;\n    @include box-shadow($custom-control-indicator-active-box-shadow);\n  }\n\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .custom-control-label {\n      color: $custom-control-label-disabled-color;\n\n      &::before {\n        background-color: $custom-control-indicator-disabled-bg;\n      }\n    }\n  }\n}\n\n// Custom control indicators\n//\n// Build the custom controls out of pseudo-elements.\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  color: $custom-control-label-color;\n  vertical-align: top;\n  cursor: $custom-control-cursor;\n\n  // Background-color and (when enabled) gradient\n  &::before {\n    position: absolute;\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\n    left: -($custom-control-gutter + $custom-control-indicator-size);\n    display: block;\n    width: $custom-control-indicator-size;\n    height: $custom-control-indicator-size;\n    pointer-events: none;\n    content: \"\";\n    background-color: $custom-control-indicator-bg;\n    border: $custom-control-indicator-border-color solid $custom-control-indicator-border-width;\n    @include box-shadow($custom-control-indicator-box-shadow);\n  }\n\n  // Foreground (icon)\n  &::after {\n    position: absolute;\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\n    left: -($custom-control-gutter + $custom-control-indicator-size);\n    display: block;\n    width: $custom-control-indicator-size;\n    height: $custom-control-indicator-size;\n    content: \"\";\n    background: 50% / #{$custom-control-indicator-bg-size} no-repeat;\n  }\n}\n\n\n// Checkboxes\n//\n// Tweak just a few things for checkboxes.\n\n.custom-checkbox {\n  .custom-control-label::before {\n    @include border-radius($custom-checkbox-indicator-border-radius);\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-image: escape-svg($custom-checkbox-indicator-icon-checked);\n    }\n  }\n\n  .custom-control-input:indeterminate ~ .custom-control-label {\n    &::before {\n      border-color: $custom-checkbox-indicator-indeterminate-border-color;\n      @include gradient-bg($custom-checkbox-indicator-indeterminate-bg);\n      @include box-shadow($custom-checkbox-indicator-indeterminate-box-shadow);\n    }\n    &::after {\n      background-image: escape-svg($custom-checkbox-indicator-icon-indeterminate);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n    &:indeterminate ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n  }\n}\n\n// Radios\n//\n// Tweak just a few things for radios.\n\n.custom-radio {\n  .custom-control-label::before {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $custom-radio-indicator-border-radius;\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-image: escape-svg($custom-radio-indicator-icon-checked);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n  }\n}\n\n\n// switches\n//\n// Tweak a few things for switches\n\n.custom-switch {\n  padding-left: $custom-switch-width + $custom-control-gutter;\n\n  .custom-control-label {\n    &::before {\n      left: -($custom-switch-width + $custom-control-gutter);\n      width: $custom-switch-width;\n      pointer-events: all;\n      // stylelint-disable-next-line property-disallowed-list\n      border-radius: $custom-switch-indicator-border-radius;\n    }\n\n    &::after {\n      top: add(($font-size-base * $line-height-base - $custom-control-indicator-size) / 2, $custom-control-indicator-border-width * 2);\n      left: add(-($custom-switch-width + $custom-control-gutter), $custom-control-indicator-border-width * 2);\n      width: $custom-switch-indicator-size;\n      height: $custom-switch-indicator-size;\n      background-color: $custom-control-indicator-border-color;\n      // stylelint-disable-next-line property-disallowed-list\n      border-radius: $custom-switch-indicator-border-radius;\n      @include transition(transform .15s ease-in-out, $custom-forms-transition);\n    }\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-color: $custom-control-indicator-bg;\n      transform: translateX($custom-switch-width - $custom-control-indicator-size);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n  }\n}\n\n\n// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n//\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: $custom-select-height;\n  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) $custom-select-padding-y $custom-select-padding-x;\n  font-family: $custom-select-font-family;\n  @include font-size($custom-select-font-size);\n  font-weight: $custom-select-font-weight;\n  line-height: $custom-select-line-height;\n  color: $custom-select-color;\n  vertical-align: middle;\n  background: $custom-select-bg $custom-select-background;\n  border: $custom-select-border-width solid $custom-select-border-color;\n  @include border-radius($custom-select-border-radius, 0);\n  @include box-shadow($custom-select-box-shadow);\n  appearance: none;\n\n  &:focus {\n    border-color: $custom-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($custom-select-box-shadow, $custom-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $custom-select-focus-box-shadow;\n    }\n\n    &::-ms-value {\n      // For visual consistency with other platforms/browsers,\n      // suppress the default white text on blue background highlight given to\n      // the selected option text when the (still closed) <select> receives focus\n      // in IE and (under certain conditions) Edge.\n      // See https://github.com/twbs/bootstrap/issues/19398.\n      color: $input-color;\n      background-color: $input-bg;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: $custom-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $custom-select-disabled-color;\n    background-color: $custom-select-disabled-bg;\n  }\n\n  // Hides the default caret in IE11\n  &::-ms-expand {\n    display: none;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $custom-select-color;\n  }\n}\n\n.custom-select-sm {\n  height: $custom-select-height-sm;\n  padding-top: $custom-select-padding-y-sm;\n  padding-bottom: $custom-select-padding-y-sm;\n  padding-left: $custom-select-padding-x-sm;\n  @include font-size($custom-select-font-size-sm);\n}\n\n.custom-select-lg {\n  height: $custom-select-height-lg;\n  padding-top: $custom-select-padding-y-lg;\n  padding-bottom: $custom-select-padding-y-lg;\n  padding-left: $custom-select-padding-x-lg;\n  @include font-size($custom-select-font-size-lg);\n}\n\n\n// File\n//\n// Custom file input.\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: $custom-file-height;\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: $custom-file-height;\n  margin: 0;\n  overflow: hidden;\n  opacity: 0;\n\n  &:focus ~ .custom-file-label {\n    border-color: $custom-file-focus-border-color;\n    box-shadow: $custom-file-focus-box-shadow;\n  }\n\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\n  &[disabled] ~ .custom-file-label,\n  &:disabled ~ .custom-file-label {\n    background-color: $custom-file-disabled-bg;\n  }\n\n  @each $lang, $value in $custom-file-text {\n    &:lang(#{$lang}) ~ .custom-file-label::after {\n      content: $value;\n    }\n  }\n\n  ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse);\n  }\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: $custom-file-height;\n  padding: $custom-file-padding-y $custom-file-padding-x;\n  overflow: hidden;\n  font-family: $custom-file-font-family;\n  font-weight: $custom-file-font-weight;\n  line-height: $custom-file-line-height;\n  color: $custom-file-color;\n  background-color: $custom-file-bg;\n  border: $custom-file-border-width solid $custom-file-border-color;\n  @include border-radius($custom-file-border-radius);\n  @include box-shadow($custom-file-box-shadow);\n\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: $custom-file-height-inner;\n    padding: $custom-file-padding-y $custom-file-padding-x;\n    line-height: $custom-file-line-height;\n    color: $custom-file-button-color;\n    content: \"Browse\";\n    @include gradient-bg($custom-file-button-bg);\n    border-left: inherit;\n    @include border-radius(0 $custom-file-border-radius $custom-file-border-radius 0);\n  }\n}\n\n// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.custom-range {\n  width: 100%;\n  height: add($custom-range-thumb-height, $custom-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  background-color: transparent;\n  appearance: none;\n\n  &:focus {\n    outline: 0;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $custom-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $custom-range-thumb-focus-box-shadow; }\n    &::-ms-thumb            { box-shadow: $custom-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    margin-top: ($custom-range-track-height - $custom-range-thumb-height) / 2; // Webkit specific\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent; // Why?\n    cursor: $custom-range-track-cursor;\n    background-color: $custom-range-track-bg;\n    border-color: transparent;\n    @include border-radius($custom-range-track-border-radius);\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent;\n    cursor: $custom-range-track-cursor;\n    background-color: $custom-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($custom-range-track-border-radius);\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-ms-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    margin-top: 0; // Edge specific\n    margin-right: $custom-range-thumb-focus-box-shadow-width; // Workaround that overflowed box-shadow is hidden.\n    margin-left: $custom-range-thumb-focus-box-shadow-width;  // Workaround that overflowed box-shadow is hidden.\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-ms-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent;\n    cursor: $custom-range-track-cursor;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: $custom-range-thumb-height / 2;\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-ms-fill-lower {\n    background-color: $custom-range-track-bg;\n    @include border-radius($custom-range-track-border-radius);\n  }\n\n  &::-ms-fill-upper {\n    margin-right: 15px; // arbitrary?\n    background-color: $custom-range-track-bg;\n    @include border-radius($custom-range-track-border-radius);\n  }\n\n  &:disabled {\n    &::-webkit-slider-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n\n    &::-webkit-slider-runnable-track {\n      cursor: default;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-track {\n      cursor: default;\n    }\n\n    &::-ms-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n  }\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  @include transition($custom-forms-transition);\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n  text-decoration: if($link-decoration == none, null, none);\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-link {\n    margin-bottom: -$nav-tabs-border-width;\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    @include hover-focus() {\n      border-color: $nav-tabs-link-hover-border-color;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    background-color: $nav-pills-link-active-bg;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Navbar divider\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding: $navbar-padding-y $navbar-padding-x;\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .container,\n  .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-padding-x;\n  @include font-size($navbar-brand-font-size);\n  line-height: inherit;\n  white-space: nowrap;\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n    float: none;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  display: inline-block;\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  @include font-size($navbar-toggler-font-size);\n  line-height: 1;\n  background-color: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: 50% / 100% 100% no-repeat;\n}\n\n.navbar-nav-scroll {\n  max-height: $navbar-nav-scroll-max-height;\n  overflow-y: auto;\n}\n\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        %container-navbar-expand-#{$breakpoint} {\n          padding-right: 0;\n          padding-left: 0;\n        }\n\n        > .container,\n        > .container-fluid {\n          @extend %container-navbar-expand-#{$breakpoint};\n        }\n\n        @each $size, $container-max-width in $container-max-widths {\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\n            @extend %container-navbar-expand-#{$breakpoint};\n          }\n        }\n      }\n\n      @include media-breakpoint-up($next) {\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: $navbar-nav-link-padding-x;\n            padding-left: $navbar-nav-link-padding-x;\n          }\n        }\n\n        // For nesting containers, have to redeclare for alignment purposes\n        %container-nesting-#{$breakpoint} {\n          flex-wrap: nowrap;\n        }\n\n        > .container,\n        > .container-fluid {\n          @extend %container-nesting-#{$breakpoint};\n        }\n\n        @each $size, $container-max-width in $container-max-widths {\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\n            @extend %container-nesting-#{$breakpoint};\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n\n          // Changes flex-bases to auto because of an IE10 bug\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-brand-color;\n\n    @include hover-focus() {\n      color: $navbar-light-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      @include hover-focus() {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n    a {\n      color: $navbar-light-active-color;\n\n      @include hover-focus() {\n        color: $navbar-light-active-color;\n      }\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-brand-color;\n\n    @include hover-focus() {\n      color: $navbar-dark-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      @include hover-focus() {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a {\n      color: $navbar-dark-active-color;\n\n      @include hover-focus() {\n        color: $navbar-dark-active-color;\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: $card-height;\n  word-wrap: break-word;\n  background-color: $card-bg;\n  background-clip: border-box;\n  border: $card-border-width solid $card-border-color;\n  @include border-radius($card-border-radius);\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius($card-inner-border-radius);\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius($card-inner-border-radius);\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  // Workaround for the image size bug in IE\n  // See: https://github.com/twbs/bootstrap/pull/28855\n  min-height: 1px;\n  padding: $card-spacer-x;\n  color: $card-color;\n}\n\n.card-title {\n  margin-bottom: $card-spacer-y;\n}\n\n.card-subtitle {\n  margin-top: -$card-spacer-y / 2;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  @include hover() {\n    text-decoration: none;\n  }\n\n  + .card-link {\n    margin-left: $card-spacer-x;\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: $card-spacer-y $card-spacer-x;\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-bottom: $card-border-width solid $card-border-color;\n\n  &:first-child {\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\n  }\n}\n\n.card-footer {\n  padding: $card-spacer-y $card-spacer-x;\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-top: $card-border-width solid $card-border-color;\n\n  &:last-child {\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: -$card-spacer-x / 2;\n  margin-bottom: -$card-spacer-y;\n  margin-left: -$card-spacer-x / 2;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -$card-spacer-x / 2;\n  margin-left: -$card-spacer-x / 2;\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: $card-img-overlay-padding;\n  @include border-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0; // For IE: https://github.com/twbs/bootstrap/issues/29396\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius($card-inner-border-radius);\n}\n\n\n// Card deck\n\n.card-deck {\n  .card {\n    margin-bottom: $card-deck-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -$card-deck-margin;\n    margin-left: -$card-deck-margin;\n\n    .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-right: $card-deck-margin;\n      margin-bottom: 0; // Override the default\n      margin-left: $card-deck-margin;\n    }\n  }\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: $card-group-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-right-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-left-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n//\n// Columns\n//\n\n.card-columns {\n  .card {\n    margin-bottom: $card-columns-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    column-count: $card-columns-count;\n    column-gap: $card-columns-gap;\n    orphans: 1;\n    widows: 1;\n\n    .card {\n      display: inline-block; // Don't let them vertically span multiple columns\n      width: 100%; // Don't let their width change\n    }\n  }\n}\n\n\n//\n// Accordion\n//\n\n.accordion {\n  overflow-anchor: none;\n\n  > .card {\n    overflow: hidden;\n\n    &:not(:last-of-type) {\n      border-bottom: 0;\n      @include border-bottom-radius(0);\n    }\n\n    &:not(:first-of-type) {\n      @include border-top-radius(0);\n    }\n\n    > .card-header {\n      @include border-radius(0);\n      margin-bottom: -$card-border-width;\n    }\n  }\n}\n",".breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\n  margin-bottom: $breadcrumb-margin-bottom;\n  @include font-size($breadcrumb-font-size);\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  @include border-radius($breadcrumb-border-radius);\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: $breadcrumb-item-padding;\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: $breadcrumb-item-padding;\n      color: $breadcrumb-divider-color;\n      content: escape-svg($breadcrumb-divider);\n    }\n  }\n\n  // IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n  // without `<ul>`s. The `::before` pseudo-element generates an element\n  // *within* the .breadcrumb-item and thereby inherits the `text-decoration`.\n  //\n  // To trick IE into suppressing the underline, we give the pseudo-element an\n  // underline and then immediately remove it.\n  + .breadcrumb-item:hover::before {\n    text-decoration: underline;\n  }\n  // stylelint-disable-next-line no-duplicate-selectors\n  + .breadcrumb-item:hover::before {\n    text-decoration: none;\n  }\n\n  &.active {\n    color: $breadcrumb-active-color;\n  }\n}\n",".pagination {\n  display: flex;\n  @include list-unstyled();\n  @include border-radius();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: $pagination-padding-y $pagination-padding-x;\n  margin-left: -$pagination-border-width;\n  line-height: $pagination-line-height;\n  color: $pagination-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $pagination-bg;\n  border: $pagination-border-width solid $pagination-border-color;\n\n  &:hover {\n    z-index: 2;\n    color: $pagination-hover-color;\n    text-decoration: none;\n    background-color: $pagination-hover-bg;\n    border-color: $pagination-hover-border-color;\n  }\n\n  &:focus {\n    z-index: 3;\n    outline: $pagination-focus-outline;\n    box-shadow: $pagination-focus-box-shadow;\n  }\n}\n\n.page-item {\n  &:first-child {\n    .page-link {\n      margin-left: 0;\n      @include border-left-radius($border-radius);\n    }\n  }\n  &:last-child {\n    .page-link {\n      @include border-right-radius($border-radius);\n    }\n  }\n\n  &.active .page-link {\n    z-index: 3;\n    color: $pagination-active-color;\n    background-color: $pagination-active-bg;\n    border-color: $pagination-active-border-color;\n  }\n\n  &.disabled .page-link {\n    color: $pagination-disabled-color;\n    pointer-events: none;\n    // Opinionated: remove the \"hand\" cursor set previously for .page-link\n    cursor: auto;\n    background-color: $pagination-disabled-bg;\n    border-color: $pagination-disabled-border-color;\n  }\n}\n\n\n//\n// Sizing\n//\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $line-height-lg, $pagination-border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $line-height-sm, $pagination-border-radius-sm);\n}\n","// Pagination\n\n@mixin pagination-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\n  .page-link {\n    padding: $padding-y $padding-x;\n    @include font-size($font-size);\n    line-height: $line-height;\n  }\n\n  .page-item {\n    &:first-child {\n      .page-link {\n        @include border-left-radius($border-radius);\n      }\n    }\n    &:last-child {\n      .page-link {\n        @include border-right-radius($border-radius);\n      }\n    }\n  }\n}\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  display: inline-block;\n  padding: $badge-padding-y $badge-padding-x;\n  @include font-size($badge-font-size);\n  font-weight: $badge-font-weight;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius($badge-border-radius);\n  @include transition($badge-transition);\n\n  @at-root a#{&} {\n    @include hover-focus() {\n      text-decoration: none;\n    }\n  }\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n// Pill badges\n//\n// Make them extra rounded with a modifier to replace v3's badges.\n\n.badge-pill {\n  padding-right: $badge-pill-padding-x;\n  padding-left: $badge-pill-padding-x;\n  @include border-radius($badge-pill-border-radius);\n}\n\n// Colors\n//\n// Contextual variations (linked badges get darker on :hover).\n\n@each $color, $value in $theme-colors {\n  .badge-#{$color} {\n    @include badge-variant($value);\n  }\n}\n","@mixin badge-variant($bg) {\n  color: color-yiq($bg);\n  background-color: $bg;\n\n  @at-root a#{&} {\n    @include hover-focus() {\n      color: color-yiq($bg);\n      background-color: darken($bg, 10%);\n    }\n\n    &:focus,\n    &.focus {\n      outline: 0;\n      box-shadow: 0 0 0 $badge-focus-width rgba($bg, .5);\n    }\n  }\n}\n",".jumbotron {\n  padding: $jumbotron-padding ($jumbotron-padding / 2);\n  margin-bottom: $jumbotron-padding;\n  color: $jumbotron-color;\n  background-color: $jumbotron-bg;\n  @include border-radius($border-radius-lg);\n\n  @include media-breakpoint-up(sm) {\n    padding: ($jumbotron-padding * 2) $jumbotron-padding;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  @include border-radius(0);\n}\n","//\n// Base styles\n//\n\n.alert {\n  position: relative;\n  padding: $alert-padding-y $alert-padding-x;\n  margin-bottom: $alert-margin-bottom;\n  border: $alert-border-width solid transparent;\n  @include border-radius($alert-border-radius);\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $close-font-size + $alert-padding-x * 2;\n\n  // Adjust close link position\n  .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: $alert-padding-y $alert-padding-x;\n    color: inherit;\n  }\n}\n\n\n// Alternate styles\n//\n// Generate contextual modifier classes for colorizing the alert.\n\n@each $color, $value in $theme-colors {\n  .alert-#{$color} {\n    @include alert-variant(theme-color-level($color, $alert-bg-level), theme-color-level($color, $alert-border-level), theme-color-level($color, $alert-color-level));\n  }\n}\n","@mixin alert-variant($background, $border, $color) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n\n  hr {\n    border-top-color: darken($border, 5%);\n  }\n\n  .alert-link {\n    color: darken($color, 10%);\n  }\n}\n","// Disable animation if transitions are disabled\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    from { background-position: $progress-height 0; }\n    to { background-position: 0 0; }\n  }\n}\n\n.progress {\n  display: flex;\n  height: $progress-height;\n  overflow: hidden; // force rounded corners by cropping it\n  line-height: 0;\n  @include font-size($progress-font-size);\n  background-color: $progress-bg;\n  @include border-radius($progress-border-radius);\n  @include box-shadow($progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: $progress-bar-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $progress-bar-bg;\n  @include transition($progress-bar-transition);\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: $progress-height $progress-height;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-prefers-reduced-motion-media-query {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n",".media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body {\n  flex: 1;\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius($list-group-border-radius);\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: $list-group-action-color;\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  @include hover-focus() {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: $list-group-action-hover-color;\n    text-decoration: none;\n    background-color: $list-group-hover-bg;\n  }\n\n  &:active {\n    color: $list-group-action-active-color;\n    background-color: $list-group-action-active-bg;\n  }\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\n  color: $list-group-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $list-group-bg;\n  border: $list-group-border-width solid $list-group-border-color;\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $list-group-disabled-color;\n    pointer-events: none;\n    background-color: $list-group-disabled-bg;\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border-color;\n  }\n\n  & + & {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: -$list-group-border-width;\n      border-top-width: $list-group-border-width;\n    }\n  }\n}\n\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child {\n          @include border-bottom-left-radius($list-group-border-radius);\n          @include border-top-right-radius(0);\n        }\n\n        &:last-child {\n          @include border-top-right-radius($list-group-border-radius);\n          @include border-bottom-left-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: $list-group-border-width;\n          border-left-width: 0;\n\n          &.active {\n            margin-left: -$list-group-border-width;\n            border-left-width: $list-group-border-width;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 $list-group-border-width;\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// Contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $color, $value in $theme-colors {\n  @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));\n}\n","// List Groups\n\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      @include hover-focus() {\n        color: $color;\n        background-color: darken($background, 5%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}\n",".close {\n  float: right;\n  @include font-size($close-font-size);\n  font-weight: $close-font-weight;\n  line-height: 1;\n  color: $close-color;\n  text-shadow: $close-text-shadow;\n  opacity: .5;\n\n  // Override <a>'s hover style\n  @include hover() {\n    color: $close-color;\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(.disabled) {\n    @include hover-focus() {\n      opacity: .75;\n    }\n  }\n}\n\n// Additional properties for button version\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n// stylelint-disable-next-line selector-no-qualifying-type\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n}\n\n// Future-proof disabling of clicks on `<a>` elements\n\n// stylelint-disable-next-line selector-no-qualifying-type\na.close.disabled {\n  pointer-events: none;\n}\n",".toast {\n  // Prevents from shrinking in IE11, when in a flex container\n  // See https://github.com/twbs/bootstrap/issues/28341\n  flex-basis: $toast-max-width;\n  max-width: $toast-max-width;\n  @include font-size($toast-font-size);\n  color: $toast-color;\n  background-color: $toast-background-color;\n  background-clip: padding-box;\n  border: $toast-border-width solid $toast-border-color;\n  box-shadow: $toast-box-shadow;\n  opacity: 0;\n  @include border-radius($toast-border-radius);\n\n  &:not(:last-child) {\n    margin-bottom: $toast-padding-x;\n  }\n\n  &.showing {\n    opacity: 1;\n  }\n\n  &.show {\n    display: block;\n    opacity: 1;\n  }\n\n  &.hide {\n    display: none;\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: $toast-padding-y $toast-padding-x;\n  color: $toast-header-color;\n  background-color: $toast-header-background-color;\n  background-clip: padding-box;\n  border-bottom: $toast-border-width solid $toast-header-border-color;\n  @include border-top-radius(subtract($toast-border-radius, $toast-border-width));\n}\n\n.toast-body {\n  padding: $toast-padding-x; // apply to both vertical and horizontal\n}\n","// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n.modal-open {\n  // Kill the scroll on the body\n  overflow: hidden;\n\n  .modal {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n\n// Container that the modal scrolls within\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: $modal-dialog-margin;\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  display: flex; // IE10/11\n  max-height: subtract(100%, $modal-dialog-margin * 2);\n\n  .modal-content {\n    max-height: subtract(100vh, $modal-dialog-margin * 2); // IE10/11\n    overflow: hidden;\n  }\n\n  .modal-header,\n  .modal-footer {\n    flex-shrink: 0;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: subtract(100%, $modal-dialog-margin * 2);\n\n  // Ensure `modal-dialog-centered` extends the full height of the view (IE10/11)\n  &::before {\n    display: block; // IE10\n    height: subtract(100vh, $modal-dialog-margin * 2);\n    height: min-content; // Reset height to 0 except on IE\n    content: \"\";\n  }\n\n  // Ensure `.modal-body` shows scrollbar (IE10/11)\n  &.modal-dialog-scrollable {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n\n    .modal-content {\n      max-height: none;\n    }\n\n    &::before {\n      content: none;\n    }\n  }\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: $modal-content-color;\n  pointer-events: auto;\n  background-color: $modal-content-bg;\n  background-clip: padding-box;\n  border: $modal-content-border-width solid $modal-content-border-color;\n  @include border-radius($modal-content-border-radius);\n  @include box-shadow($modal-content-box-shadow-xs);\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal-backdrop;\n  width: 100vw;\n  height: 100vh;\n  background-color: $modal-backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $modal-backdrop-opacity; }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  align-items: flex-start; // so the close btn always stays on the upper right corner\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: $modal-header-padding;\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\n  @include border-top-radius($modal-content-inner-border-radius);\n\n  .close {\n    padding: $modal-header-padding;\n    // auto on the left force icon to the right even when there is no .modal-title\n    margin: (-$modal-header-padding-y) (-$modal-header-padding-x) (-$modal-header-padding-y) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: $modal-inner-padding - $modal-footer-margin-between / 2;\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\n  @include border-bottom-radius($modal-content-inner-border-radius);\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: $modal-footer-margin-between / 2;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: $modal-md;\n    margin: $modal-dialog-margin-y-sm-up auto;\n  }\n\n  .modal-dialog-scrollable {\n    max-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n\n    .modal-content {\n      max-height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\n    }\n  }\n\n  .modal-dialog-centered {\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n\n    &::before {\n      height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\n      height: min-content;\n    }\n  }\n\n  .modal-content {\n    @include box-shadow($modal-content-box-shadow-sm-up);\n  }\n\n  .modal-sm { max-width: $modal-sm; }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    max-width: $modal-lg;\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl { max-width: $modal-xl; }\n}\n","// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  margin: $tooltip-margin;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($tooltip-font-size);\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: $tooltip-opacity; }\n\n  .arrow {\n    position: absolute;\n    display: block;\n    width: $tooltip-arrow-width;\n    height: $tooltip-arrow-height;\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top {\n  padding: $tooltip-arrow-height 0;\n\n  .arrow {\n    bottom: 0;\n\n    &::before {\n      top: 0;\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-top-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-right {\n  padding: 0 $tooltip-arrow-height;\n\n  .arrow {\n    left: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      right: 0;\n      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-right-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-bottom {\n  padding: $tooltip-arrow-height 0;\n\n  .arrow {\n    top: 0;\n\n    &::before {\n      bottom: 0;\n      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-bottom-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-left {\n  padding: 0 $tooltip-arrow-height;\n\n  .arrow {\n    right: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      left: 0;\n      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-left-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-auto {\n  &[x-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[x-placement^=\"right\"] {\n    @extend .bs-tooltip-right;\n  }\n  &[x-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[x-placement^=\"left\"] {\n    @extend .bs-tooltip-left;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: $tooltip-padding-y $tooltip-padding-x;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  @include border-radius($tooltip-border-radius);\n}\n","@mixin reset-text() {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n}\n",".popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: $zindex-popover;\n  display: block;\n  max-width: $popover-max-width;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($popover-font-size);\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: $popover-border-width solid $popover-border-color;\n  @include border-radius($popover-border-radius);\n  @include box-shadow($popover-box-shadow);\n\n  .arrow {\n    position: absolute;\n    display: block;\n    width: $popover-arrow-width;\n    height: $popover-arrow-height;\n    margin: 0 $popover-border-radius;\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-popover-top {\n  margin-bottom: $popover-arrow-height;\n\n  > .arrow {\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      bottom: 0;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      bottom: $popover-border-width;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-right {\n  margin-left: $popover-arrow-height;\n\n  > .arrow {\n    left: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      left: 0;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      left: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-bottom {\n  margin-top: $popover-arrow-height;\n\n  > .arrow {\n    top: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      top: 0;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      top: $popover-border-width;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: $popover-arrow-width;\n    margin-left: -$popover-arrow-width / 2;\n    content: \"\";\n    border-bottom: $popover-border-width solid $popover-header-bg;\n  }\n}\n\n.bs-popover-left {\n  margin-right: $popover-arrow-height;\n\n  > .arrow {\n    right: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      right: 0;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      right: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-auto {\n  &[x-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[x-placement^=\"right\"] {\n    @extend .bs-popover-right;\n  }\n  &[x-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[x-placement^=\"left\"] {\n    @extend .bs-popover-left;\n  }\n}\n\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: $popover-header-padding-y $popover-header-padding-x;\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size($font-size-base);\n  color: $popover-header-color;\n  background-color: $popover-header-bg;\n  border-bottom: $popover-border-width solid darken($popover-header-bg, 5%);\n  @include border-top-radius($popover-inner-border-radius);\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: $popover-body-padding-y $popover-body-padding-x;\n  color: $popover-body-color;\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-left and .carousel-item-right is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-left and .active.carousel-item-right is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-left and .carousel-item-prev.carousel-item-right\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-left,\n  .active.carousel-item-right {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  color: $carousel-control-color;\n  text-align: center;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  @include hover-focus() {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  @if $enable-gradients {\n    background-image: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));\n  }\n}\n.carousel-control-next {\n  right: 0;\n  @if $enable-gradients {\n    background-image: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));\n  }\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background: 50% / 100% 100% no-repeat;\n}\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n\n// Optional indicator pips\n//\n// Add an ordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0; // override <ol> default\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-left: $carousel-control-width;\n  list-style: none;\n\n  li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: .5;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: 1;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) / 2;\n  bottom: 20px;\n  left: (100% - $carousel-caption-width) / 2;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n","@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n","//\n// Rotating border\n//\n\n@keyframes spinner-border {\n  to { transform: rotate(360deg); }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  border: $spinner-border-width solid currentColor;\n  border-right-color: transparent;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: .75s linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n  border-width: $spinner-border-width-sm;\n}\n\n//\n// Growing circle\n//\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  opacity: 0;\n  animation: .75s linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n}\n\n@if $enable-prefers-reduced-motion-media-query {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      animation-duration: 1.5s;\n    }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n.align-baseline    { vertical-align: baseline !important; } // Browser default\n.align-top         { vertical-align: top !important; }\n.align-middle      { vertical-align: middle !important; }\n.align-bottom      { vertical-align: bottom !important; }\n.align-text-bottom { vertical-align: text-bottom !important; }\n.align-text-top    { vertical-align: text-top !important; }\n","// stylelint-disable declaration-no-important\n\n// Contextual backgrounds\n\n@mixin bg-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    background-color: $color !important;\n  }\n  a#{$parent},\n  button#{$parent} {\n    @include hover-focus() {\n      background-color: darken($color, 10%) !important;\n    }\n  }\n  @include deprecate(\"The `bg-variant` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n\n@mixin bg-gradient-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x !important;\n  }\n  @include deprecate(\"The `bg-gradient-variant` mixin\", \"v4.5.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable declaration-no-important\n\n@each $color, $value in $theme-colors {\n  @include bg-variant(\".bg-#{$color}\", $value, true);\n}\n\n@if $enable-gradients {\n  @each $color, $value in $theme-colors {\n    @include bg-gradient-variant(\".bg-gradient-#{$color}\", $value, true);\n  }\n}\n\n.bg-white {\n  background-color: $white !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n","// stylelint-disable property-disallowed-list, declaration-no-important\n\n//\n// Border\n//\n\n.border         { border: $border-width solid $border-color !important; }\n.border-top     { border-top: $border-width solid $border-color !important; }\n.border-right   { border-right: $border-width solid $border-color !important; }\n.border-bottom  { border-bottom: $border-width solid $border-color !important; }\n.border-left    { border-left: $border-width solid $border-color !important; }\n\n.border-0        { border: 0 !important; }\n.border-top-0    { border-top: 0 !important; }\n.border-right-0  { border-right: 0 !important; }\n.border-bottom-0 { border-bottom: 0 !important; }\n.border-left-0   { border-left: 0 !important; }\n\n@each $color, $value in $theme-colors {\n  .border-#{$color} {\n    border-color: $value !important;\n  }\n}\n\n.border-white {\n  border-color: $white !important;\n}\n\n//\n// Border-radius\n//\n\n.rounded-sm {\n  border-radius: $border-radius-sm !important;\n}\n\n.rounded {\n  border-radius: $border-radius !important;\n}\n\n.rounded-top {\n  border-top-left-radius: $border-radius !important;\n  border-top-right-radius: $border-radius !important;\n}\n\n.rounded-right {\n  border-top-right-radius: $border-radius !important;\n  border-bottom-right-radius: $border-radius !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: $border-radius !important;\n  border-bottom-left-radius: $border-radius !important;\n}\n\n.rounded-left {\n  border-top-left-radius: $border-radius !important;\n  border-bottom-left-radius: $border-radius !important;\n}\n\n.rounded-lg {\n  border-radius: $border-radius-lg !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: $rounded-pill !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Utilities for common `display` values\n//\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @each $value in $displays {\n      .d#{$infix}-#{$value} { display: $value !important; }\n    }\n  }\n}\n\n\n//\n// Utilities for toggling `display` in print\n//\n\n@media print {\n  @each $value in $displays {\n    .d-print-#{$value} { display: $value !important; }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n\n  &::before {\n    display: block;\n    content: \"\";\n  }\n\n  .embed-responsive-item,\n  iframe,\n  embed,\n  object,\n  video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n}\n\n@each $embed-responsive-aspect-ratio in $embed-responsive-aspect-ratios {\n  $embed-responsive-aspect-ratio-x: nth($embed-responsive-aspect-ratio, 1);\n  $embed-responsive-aspect-ratio-y: nth($embed-responsive-aspect-ratio, 2);\n\n  .embed-responsive-#{$embed-responsive-aspect-ratio-x}by#{$embed-responsive-aspect-ratio-y} {\n    &::before {\n      padding-top: percentage($embed-responsive-aspect-ratio-y / $embed-responsive-aspect-ratio-x);\n    }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n// Flex variation\n//\n// Custom styles for additional flex alignment options.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .flex#{$infix}-row            { flex-direction: row !important; }\n    .flex#{$infix}-column         { flex-direction: column !important; }\n    .flex#{$infix}-row-reverse    { flex-direction: row-reverse !important; }\n    .flex#{$infix}-column-reverse { flex-direction: column-reverse !important; }\n\n    .flex#{$infix}-wrap         { flex-wrap: wrap !important; }\n    .flex#{$infix}-nowrap       { flex-wrap: nowrap !important; }\n    .flex#{$infix}-wrap-reverse { flex-wrap: wrap-reverse !important; }\n    .flex#{$infix}-fill         { flex: 1 1 auto !important; }\n    .flex#{$infix}-grow-0       { flex-grow: 0 !important; }\n    .flex#{$infix}-grow-1       { flex-grow: 1 !important; }\n    .flex#{$infix}-shrink-0     { flex-shrink: 0 !important; }\n    .flex#{$infix}-shrink-1     { flex-shrink: 1 !important; }\n\n    .justify-content#{$infix}-start   { justify-content: flex-start !important; }\n    .justify-content#{$infix}-end     { justify-content: flex-end !important; }\n    .justify-content#{$infix}-center  { justify-content: center !important; }\n    .justify-content#{$infix}-between { justify-content: space-between !important; }\n    .justify-content#{$infix}-around  { justify-content: space-around !important; }\n\n    .align-items#{$infix}-start    { align-items: flex-start !important; }\n    .align-items#{$infix}-end      { align-items: flex-end !important; }\n    .align-items#{$infix}-center   { align-items: center !important; }\n    .align-items#{$infix}-baseline { align-items: baseline !important; }\n    .align-items#{$infix}-stretch  { align-items: stretch !important; }\n\n    .align-content#{$infix}-start   { align-content: flex-start !important; }\n    .align-content#{$infix}-end     { align-content: flex-end !important; }\n    .align-content#{$infix}-center  { align-content: center !important; }\n    .align-content#{$infix}-between { align-content: space-between !important; }\n    .align-content#{$infix}-around  { align-content: space-around !important; }\n    .align-content#{$infix}-stretch { align-content: stretch !important; }\n\n    .align-self#{$infix}-auto     { align-self: auto !important; }\n    .align-self#{$infix}-start    { align-self: flex-start !important; }\n    .align-self#{$infix}-end      { align-self: flex-end !important; }\n    .align-self#{$infix}-center   { align-self: center !important; }\n    .align-self#{$infix}-baseline { align-self: baseline !important; }\n    .align-self#{$infix}-stretch  { align-self: stretch !important; }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .float#{$infix}-left  { float: left !important; }\n    .float#{$infix}-right { float: right !important; }\n    .float#{$infix}-none  { float: none !important; }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $value in $user-selects {\n  .user-select-#{$value} { user-select: $value !important; }\n}\n","// stylelint-disable declaration-no-important\n\n@each $value in $overflows {\n  .overflow-#{$value} { overflow: $value !important; }\n}\n","// stylelint-disable declaration-no-important\n\n// Common values\n@each $position in $positions {\n  .position-#{$position} { position: $position !important; }\n}\n\n// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.sticky-top {\n  @supports (position: sticky) {\n    position: sticky;\n    top: 0;\n    z-index: $zindex-sticky;\n  }\n}\n","//\n// Screenreaders\n//\n\n.sr-only {\n  @include sr-only();\n}\n\n.sr-only-focusable {\n  @include sr-only-focusable();\n}\n","// Only display content to screen readers\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin sr-only() {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n//\n// Credit: HTML5 Boilerplate\n\n@mixin sr-only-focusable() {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n  }\n}\n","// stylelint-disable declaration-no-important\n\n.shadow-sm { box-shadow: $box-shadow-sm !important; }\n.shadow { box-shadow: $box-shadow !important; }\n.shadow-lg { box-shadow: $box-shadow-lg !important; }\n.shadow-none { box-shadow: none !important; }\n","// stylelint-disable declaration-no-important\n\n// Width and height\n\n@each $prop, $abbrev in (width: w, height: h) {\n  @each $size, $length in $sizes {\n    .#{$abbrev}-#{$size} { #{$prop}: $length !important; }\n  }\n}\n\n.mw-100 { max-width: 100% !important; }\n.mh-100 { max-height: 100% !important; }\n\n// Viewport additional helpers\n\n.min-vw-100 { min-width: 100vw !important; }\n.min-vh-100 { min-height: 100vh !important; }\n\n.vw-100 { width: 100vw !important; }\n.vh-100 { height: 100vh !important; }\n","// stylelint-disable declaration-no-important\n\n// Margin and Padding\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @each $prop, $abbrev in (margin: m, padding: p) {\n      @each $size, $length in $spacers {\n        .#{$abbrev}#{$infix}-#{$size} { #{$prop}: $length !important; }\n        .#{$abbrev}t#{$infix}-#{$size},\n        .#{$abbrev}y#{$infix}-#{$size} {\n          #{$prop}-top: $length !important;\n        }\n        .#{$abbrev}r#{$infix}-#{$size},\n        .#{$abbrev}x#{$infix}-#{$size} {\n          #{$prop}-right: $length !important;\n        }\n        .#{$abbrev}b#{$infix}-#{$size},\n        .#{$abbrev}y#{$infix}-#{$size} {\n          #{$prop}-bottom: $length !important;\n        }\n        .#{$abbrev}l#{$infix}-#{$size},\n        .#{$abbrev}x#{$infix}-#{$size} {\n          #{$prop}-left: $length !important;\n        }\n      }\n    }\n\n    // Negative margins (e.g., where `.mb-n1` is negative version of `.mb-1`)\n    @each $size, $length in $spacers {\n      @if $size != 0 {\n        .m#{$infix}-n#{$size} { margin: -$length !important; }\n        .mt#{$infix}-n#{$size},\n        .my#{$infix}-n#{$size} {\n          margin-top: -$length !important;\n        }\n        .mr#{$infix}-n#{$size},\n        .mx#{$infix}-n#{$size} {\n          margin-right: -$length !important;\n        }\n        .mb#{$infix}-n#{$size},\n        .my#{$infix}-n#{$size} {\n          margin-bottom: -$length !important;\n        }\n        .ml#{$infix}-n#{$size},\n        .mx#{$infix}-n#{$size} {\n          margin-left: -$length !important;\n        }\n      }\n    }\n\n    // Some special margin utils\n    .m#{$infix}-auto { margin: auto !important; }\n    .mt#{$infix}-auto,\n    .my#{$infix}-auto {\n      margin-top: auto !important;\n    }\n    .mr#{$infix}-auto,\n    .mx#{$infix}-auto {\n      margin-right: auto !important;\n    }\n    .mb#{$infix}-auto,\n    .my#{$infix}-auto {\n      margin-bottom: auto !important;\n    }\n    .ml#{$infix}-auto,\n    .mx#{$infix}-auto {\n      margin-left: auto !important;\n    }\n  }\n}\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    // Just in case `pointer-events: none` is set on a parent\n    pointer-events: auto;\n    content: \"\";\n    // IE10 bugfix, see https://stackoverflow.com/questions/16947967/ie10-hover-pseudo-class-doesnt-work-without-background-color\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Text\n//\n\n.text-monospace { font-family: $font-family-monospace !important; }\n\n// Alignment\n\n.text-justify  { text-align: justify !important; }\n.text-wrap     { white-space: normal !important; }\n.text-nowrap   { white-space: nowrap !important; }\n.text-truncate { @include text-truncate(); }\n\n// Responsive alignment\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .text#{$infix}-left   { text-align: left !important; }\n    .text#{$infix}-right  { text-align: right !important; }\n    .text#{$infix}-center { text-align: center !important; }\n  }\n}\n\n// Transformation\n\n.text-lowercase  { text-transform: lowercase !important; }\n.text-uppercase  { text-transform: uppercase !important; }\n.text-capitalize { text-transform: capitalize !important; }\n\n// Weight and italics\n\n.font-weight-light   { font-weight: $font-weight-light !important; }\n.font-weight-lighter { font-weight: $font-weight-lighter !important; }\n.font-weight-normal  { font-weight: $font-weight-normal !important; }\n.font-weight-bold    { font-weight: $font-weight-bold !important; }\n.font-weight-bolder  { font-weight: $font-weight-bolder !important; }\n.font-italic         { font-style: italic !important; }\n\n// Contextual colors\n\n.text-white { color: $white !important; }\n\n@each $color, $value in $theme-colors {\n  @include text-emphasis-variant(\".text-#{$color}\", $value, true);\n}\n\n.text-body { color: $body-color !important; }\n.text-muted { color: $text-muted !important; }\n\n.text-black-50 { color: rgba($black, .5) !important; }\n.text-white-50 { color: rgba($white, .5) !important; }\n\n// Misc\n\n.text-hide {\n  @include text-hide($ignore-warning: true);\n}\n\n.text-decoration-none { text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important; // Deprecated, but avoids issues with flex containers\n  word-wrap: break-word !important; // Used instead of `overflow-wrap` for IE & Edge Legacy\n}\n\n// Reset\n\n.text-reset { color: inherit !important; }\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","// stylelint-disable declaration-no-important\n\n// Typography\n\n@mixin text-emphasis-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    color: $color !important;\n  }\n  @if $emphasized-link-hover-darken-percentage != 0 {\n    a#{$parent} {\n      @include hover-focus() {\n        color: darken($color, $emphasized-link-hover-darken-percentage) !important;\n      }\n    }\n  }\n  @include deprecate(\"`text-emphasis-variant()`\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n","// CSS image replacement\n@mixin text-hide($ignore-warning: false) {\n  // stylelint-disable-next-line font-family-no-missing-generic-family-keyword\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n\n  @include deprecate(\"`text-hide()`\", \"v4.1.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Visibility utilities\n//\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type\n\n// Source: https://github.com/h5bp/main.css/blob/master/src/_print.css\n\n// ==========================================================================\n// Print styles.\n// Inlined to avoid the additional HTTP request:\n// https://www.phpied.com/delay-loading-your-print-css/\n// ==========================================================================\n\n@if $enable-print-styles {\n  @media print {\n    *,\n    *::before,\n    *::after {\n      // Bootstrap specific; comment out `color` and `background`\n      //color: $black !important; // Black prints faster\n      text-shadow: none !important;\n      //background: transparent !important;\n      box-shadow: none !important;\n    }\n\n    a {\n      &:not(.btn) {\n        text-decoration: underline;\n      }\n    }\n\n    // Bootstrap specific; comment the following selector out\n    //a[href]::after {\n    //  content: \" (\" attr(href) \")\";\n    //}\n\n    abbr[title]::after {\n      content: \" (\" attr(title) \")\";\n    }\n\n    // Bootstrap specific; comment the following selector out\n    //\n    // Don't show links that are fragment identifiers,\n    // or use the `javascript:` pseudo protocol\n    //\n\n    //a[href^=\"#\"]::after,\n    //a[href^=\"javascript:\"]::after {\n    // content: \"\";\n    //}\n\n    pre {\n      white-space: pre-wrap !important;\n    }\n    pre,\n    blockquote {\n      border: $border-width solid $gray-500; // Bootstrap custom code; using `$border-width` instead of 1px\n      page-break-inside: avoid;\n    }\n\n    //\n    // Printing Tables:\n    // https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables\n    //\n\n    thead {\n      display: table-header-group;\n    }\n\n    tr,\n    img {\n      page-break-inside: avoid;\n    }\n\n    p,\n    h2,\n    h3 {\n      orphans: 3;\n      widows: 3;\n    }\n\n    h2,\n    h3 {\n      page-break-after: avoid;\n    }\n\n    // Bootstrap specific changes start\n\n    // Specify a size and min-width to make printing closer across browsers.\n    // We don't set margin here because it breaks `size` in Chrome. We also\n    // don't use `!important` on `size` as it breaks in Chrome.\n    @page {\n      size: $print-page-size;\n    }\n    body {\n      min-width: $print-body-min-width !important;\n    }\n    .container {\n      min-width: $print-body-min-width !important;\n    }\n\n    // Bootstrap components\n    .navbar {\n      display: none;\n    }\n    .badge {\n      border: $border-width solid $black;\n    }\n\n    .table {\n      border-collapse: collapse !important;\n\n      td,\n      th {\n        background-color: $white !important;\n      }\n    }\n\n    .table-bordered {\n      th,\n      td {\n        border: 1px solid $gray-300 !important;\n      }\n    }\n\n    .table-dark {\n      color: inherit;\n\n      th,\n      td,\n      thead th,\n      tbody + tbody {\n        border-color: $table-border-color;\n      }\n    }\n\n    .table .thead-dark th {\n      color: inherit;\n      border-color: $table-border-color;\n    }\n\n    // Bootstrap specific changes end\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-638a731f461a31898c52.js.map