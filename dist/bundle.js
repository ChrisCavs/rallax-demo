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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../rallax/dist/rallax.js":
/*!********************************!*\
  !*** ../rallax/dist/rallax.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var classCallCheck = function (instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  };\n\n  var createClass = function () {\n    function defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n      if (protoProps) defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) defineProperties(Constructor, staticProps);\n      return Constructor;\n    };\n  }();\n\n  var listening = false;\n  var targets = [];\n\n  var defaultOptions = {\n    speed: 0.3,\n    disable: function disable() {\n      return window.innerWidth < 400;\n    },\n    onDisable: function onDisable() {},\n    enable: function enable() {},\n    onEnable: function onEnable() {}\n  };\n\n  var addListener = function addListener() {\n    window.addEventListener('scroll', function (event) {\n      controller(targets);\n    });\n  };\n\n  var controller = function controller(targets) {\n    requestAnimationFrame(function () {\n      targets.forEach(function (obj) {\n        if (obj.disable() && obj.active) {\n          return obj.stop();\n        }\n\n        if (!obj.active && obj.enable()) {\n          obj.start();\n        }\n\n        if (obj.active) {\n          obj.move();\n        }\n      });\n    });\n  };\n\n  var RallaxObj = function () {\n    function RallaxObj(target, _ref) {\n      var speed = _ref.speed,\n          disable = _ref.disable,\n          onDisable = _ref.onDisable,\n          enable = _ref.enable,\n          onEnable = _ref.onEnable;\n      classCallCheck(this, RallaxObj);\n\n      this.speed = speed || defaultOptions.speed;\n      this.disable = disable || defaultOptions.disable;\n      this.onDisable = onDisable || defaultOptions.onDisable;\n      this.enable = enable || defaultOptions.enable;\n      this.onEnable = onEnable || defaultOptions.onEnable;\n\n      this.active = true;\n      this.target = target;\n\n      if (typeof target === 'string') {\n        this.target = document.querySelector('' + target);\n      }\n\n      this.winHeight = window.innerHeight;\n      this.getRect();\n\n      this.startScroll = this.targetR.top - this.winHeight > 0 ? this.targetR.top - this.winHeight : 0;\n    }\n\n    createClass(RallaxObj, [{\n      key: 'stop',\n      value: function stop() {\n        this.active = false;\n        this.onDisable();\n      }\n    }, {\n      key: 'start',\n      value: function start() {\n        this.active = true;\n        this.onEnable();\n      }\n    }, {\n      key: 'getTranslation',\n      value: function getTranslation() {\n        var dist = window.scrollY - this.startScroll;\n        return dist * this.speed;\n      }\n    }, {\n      key: 'getRect',\n      value: function getRect() {\n        this.targetR = this.target.getBoundingClientRect();\n        return this.targetR;\n      }\n    }, {\n      key: 'move',\n      value: function move() {\n        this.target.style.transform = 'translateY(' + this.getTranslation() + 'px)';\n      }\n    }]);\n    return RallaxObj;\n  }();\n\n  var rallax = (function (target) {\n    var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    var rallax = new RallaxObj(target, userOptions);\n    targets.push(rallax);\n\n    if (!listening) {\n      addListener();\n      listening = true;\n    }\n\n    return rallax;\n  });\n\n  return rallax;\n\n})));\n\n\n//# sourceURL=webpack:///../rallax/dist/rallax.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rallax/dist/rallax.js */ \"../rallax/dist/rallax.js\");\n/* harmony import */ var _Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const secondBlock = document.querySelectorAll('.description')[1]\n  \n  const stopTop = () => {\n    return secondBlock.getBoundingClientRect().top < 200\n  }\n\n  const startTop = () => {\n    return secondBlock.getBoundingClientRect().top >= 200\n  }\n\n  const dead = _Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.dead', {disable: stopTop, enable: startTop})\n  const simple = _Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.simple', { speed: 0.6, disable: stopTop, enable: startTop})\n  const parallax = _Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.parallax', { speed: 0.4, disable: stopTop, enable: startTop})\n  const scrolling = _Users_Chris_Documents_libraries_rallax_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.scrolling', { speed: 0.5, disable: stopTop, enable: startTop})\n\n\n})\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });