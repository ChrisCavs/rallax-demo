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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rallax.js */ \"./node_modules/rallax.js/dist/rallax.js\");\n/* harmony import */ var rallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rallax_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  window.onbeforeunload = () => {\n    window.scrollTo(0, 0)\n  }\n\n  const dead = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.dead')\n  const simple = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.simple')\n  const parallax = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.parallax')\n  const scrolling = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.scrolling')\n\n  const objects = [dead, simple, parallax, scrolling]\n\n  dead.when(\n    () => dead.scrollY() > 320,\n    () => dead.changeSpeed(1.1)\n  ).when(\n    () => dead.scrollY() <= 320,\n    () => dead.changeSpeed(0.5)\n  )\n\n  simple.when(\n    () => simple.scrollY() > 320,\n    () => simple.changeSpeed(0.95)\n  ).when(\n    () => simple.scrollY() <= 320,\n    () => simple.changeSpeed(0.6)\n  )\n\n  parallax.when(\n    () => parallax.scrollY() > 320,\n    () => parallax.changeSpeed(0.8)\n  ).when(\n    () => parallax.scrollY() <= 320,\n    () => parallax.changeSpeed(0.7)\n  )\n\n  scrolling.when(\n    () => scrolling.scrollY() > 320,\n    () => scrolling.changeSpeed(0.64)\n  ).when(\n    () => scrolling.scrollY() <= 320,\n    () => scrolling.changeSpeed(0.8)\n  )\n\n  objects.forEach(obj => {\n      obj.when(\n        () => obj.scrollY() > 750,\n        () => obj.stop()\n      )\n      obj.when(\n        () => obj.scrollY() <= 750,\n        () => obj.start()\n      )\n    })\n  \n  const image = document.querySelector('.parallax-image')\n  const imageContainer = document.querySelector('.container')\n  const imageContainerRect = imageContainer.getBoundingClientRect()\n  const winHeight = window.innerHeight\n\n  const imageTop = -(window.innerHeight * 0.3) * 2\n  const imageHeight = imageContainerRect.height + (winHeight * 0.3)\n  const imageWidth = imageContainerRect.width + 200\n  const imageLeft = -100\n\n  Object.assign(image.style, {\n    position: 'relative',\n    top: `${imageTop}px`,\n    left: `${imageLeft}px`,\n    height: `${imageHeight}px`,\n    width: `${imageWidth}px`,\n  })\n\n  const imageParallax = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()(image)\n})\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./node_modules/rallax.js/dist/rallax.js":
/*!***********************************************!*\
  !*** ./node_modules/rallax.js/dist/rallax.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var classCallCheck = function (instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  };\n\n  var createClass = function () {\n    function defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n      if (protoProps) defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) defineProperties(Constructor, staticProps);\n      return Constructor;\n    };\n  }();\n\n  var listening = false;\n  var targets = [];\n\n  var defaultOptions = {\n    speed: 0.3,\n    mobilePx: false\n  };\n\n  var RallaxObj = function () {\n    function RallaxObj(target, _ref) {\n      var speed = _ref.speed,\n          mobilePx = _ref.mobilePx;\n      classCallCheck(this, RallaxObj);\n\n      this.speed = speed || defaultOptions.speed;\n      this.mobilePx = mobilePx || defaultOptions.mobilePx;\n      this.mobileDisable = false;\n      this.conditions = [];\n      this.active = true;\n      this.target = target;\n\n      if (typeof target === 'string') {\n        this.target = document.querySelector('' + target);\n      }\n\n      this.winHeight = window.innerHeight;\n      this.accumulated = 0;\n      this.getRect();\n\n      this.startScroll = this.targetR.top - this.winHeight > 0 ? this.targetR.top - this.winHeight : 0;\n    }\n\n    // API\n\n\n    createClass(RallaxObj, [{\n      key: 'stop',\n      value: function stop() {\n        this.active = false;\n      }\n    }, {\n      key: 'start',\n      value: function start() {\n        this.active = true;\n      }\n    }, {\n      key: 'getSpeed',\n      value: function getSpeed() {\n        return this.speed;\n      }\n    }, {\n      key: 'changeSpeed',\n      value: function changeSpeed(newSpeed) {\n        if (this.inWindow() && newSpeed !== this.speed) {\n          this.accumulated = this.getTranslation();\n          this.startScroll = this.scrollY();\n        }\n        this.speed = newSpeed;\n      }\n    }, {\n      key: 'when',\n      value: function when(condition, action) {\n        this.conditions.push({ condition: condition, action: action });\n        return this;\n      }\n\n      // HELPERS\n\n    }, {\n      key: 'scrollY',\n      value: function scrollY() {\n        return window.scrollY || window.pageYOffset;\n      }\n    }, {\n      key: 'getTranslation',\n      value: function getTranslation() {\n        var dist = this.scrollY() - this.startScroll;\n        var translation = dist * this.speed + this.accumulated;\n        return translation >= 0 ? translation : 0;\n      }\n    }, {\n      key: 'getRect',\n      value: function getRect() {\n        this.targetR = this.target.getBoundingClientRect();\n        return this.targetR;\n      }\n    }, {\n      key: 'inWindow',\n      value: function inWindow() {\n        this.getRect();\n        var top = this.targetR.top;\n        var bottom = this.targetR.bottom;\n\n        return top < this.winHeight && bottom > 0;\n      }\n    }, {\n      key: 'move',\n      value: function move() {\n        this.target.style.transform = 'translateY(' + this.getTranslation() + 'px)';\n      }\n    }]);\n    return RallaxObj;\n  }();\n\n  var addListener = function addListener() {\n    window.addEventListener('scroll', function (event) {\n      controller(targets);\n    });\n\n    window.addEventListener('resize', function (event) {\n      resize();\n    });\n  };\n\n  var controller = function controller(targets) {\n    requestAnimationFrame(function () {\n      targets.forEach(function (obj) {\n        if (obj.mobileDisable) return;\n\n        obj.conditions.forEach(function (_ref2) {\n          var condition = _ref2.condition,\n              action = _ref2.action;\n\n          if (condition()) action();\n        });\n\n        if (obj.active) {\n          obj.move();\n        }\n      });\n    });\n  };\n\n  var resize = function resize() {\n    var newSize = window.innerWidth;\n\n    targets.forEach(function (obj) {\n      if (obj.mobilePx >= newSize) {\n        obj.mobileDisable = true;\n      }\n    });\n  };\n\n  var rallax = (function (target) {\n    var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    var rallax = new RallaxObj(target, userOptions);\n    targets.push(rallax);\n\n    if (!listening) {\n      addListener();\n      listening = true;\n    }\n\n    return rallax;\n  });\n\n  return rallax;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/rallax.js/dist/rallax.js?");

/***/ })

/******/ });