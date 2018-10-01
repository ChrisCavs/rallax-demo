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

/***/ "../rallax.js/dist/rallax.js":
/*!***********************************!*\
  !*** ../rallax.js/dist/rallax.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var addHeight = function addHeight(img, necessaryHeight) {\n    Object.assign(img.style, {\n      height: necessaryHeight + 'px',\n      top: '0px'\n    });\n  };\n\n  var addWidth = function addWidth(img, targetWidth) {\n    Object.assign(img.style, {\n      width: targetWidth + 'px',\n      height: 'auto',\n      left: '0px'\n    });\n  };\n\n  var centerHeight = function centerHeight(img, imgHeight, necessaryHeight, _ref) {\n    var top = _ref.top,\n        bot = _ref.bot;\n\n    var space = (imgHeight - necessaryHeight) * -1;\n\n    if (top !== undefined || bot !== undefined) {\n      space = top !== undefined ? space + top : bot > space * -1 ? space : bot * -1;\n    } else {\n      space = space / 2;\n    }\n\n    Object.assign(img.style, {\n      height: imgHeight + 'px',\n      top: space + 'px'\n    });\n  };\n\n  var centerWidth = function centerWidth(img, imgWidth, targetWidth, _ref2) {\n    var left = _ref2.left,\n        right = _ref2.right;\n\n    var space = (imgWidth - targetWidth) * -1;\n\n    if (left !== undefined || right !== undefined) {\n      space = left !== undefined ? space + left : right > space * -1 ? space : right * -1;\n    } else {\n      space = space / 2;\n    }\n\n    Object.assign(img.style, {\n      width: imgWidth + 'px',\n      left: space + 'px'\n    });\n  };\n\n  var getRect = function getRect(el) {\n    return el.getBoundingClientRect();\n  };\n\n  var defaultOffsets = function defaultOffsets(targetR, img, necessaryHeight) {\n    Object.assign(img.style, {\n      height: necessaryHeight + 'px',\n      top: '0px'\n    });\n\n    var imgR = getRect(img);\n    var widthCheck = imgR.width >= targetR.width;\n\n    widthCheck ? centerWidth(img, imgR.width, targetR.width, {}) : addWidth(img, targetR.width);\n  };\n\n  var setOffsets = function setOffsets(target, img, _ref3) {\n    var adjust = _ref3.adjust,\n        speed = _ref3.speed;\n\n    var winHeight = window.innerHeight;\n    var targetR = getRect(target);\n    var necessaryHeight = (winHeight - targetR.height) * speed + targetR.height;\n\n    if (!adjust) {\n      defaultOffsets(targetR, img, necessaryHeight);\n      return;\n    }\n\n    var scale = adjust.scale ? adjust.scale : 1;\n\n    var offset = adjust.offset ? adjust.offset : {};\n\n    var imgR = getRect(img);\n    var heightCheck = imgR.height * scale >= necessaryHeight;\n\n    heightCheck ? centerHeight(img, imgR.height * scale, necessaryHeight, offset) : addHeight(img, necessaryHeight);\n\n    imgR = getRect(img);\n    var widthCheck = imgR.width >= targetR.width;\n\n    widthCheck ? centerWidth(img, imgR.width, targetR.width, offset) : addWidth(img, targetR.width);\n  };\n\n  var defineProperty = function (obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n\n    return obj;\n  };\n\n  var toConsumableArray = function (arr) {\n    if (Array.isArray(arr)) {\n      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n      return arr2;\n    } else {\n      return Array.from(arr);\n    }\n  };\n\n  var winHeight = window.innerHeight;\n  var winWidth = window.innerWidth;\n  var listening = false;\n\n  var images = [];\n\n  var defaultOptions = {\n    speed: 0.3,\n    zIndex: -1000\n  };\n\n  var getTarget = function getTarget(selector) {\n    return document.querySelector(selector);\n  };\n\n  var createImg = function createImg(target, source) {\n    var img = document.createElement('img');\n    img.src = source;\n    target.appendChild(img);\n\n    return img;\n  };\n\n  var inView = function inView(targetR) {\n    var top = targetR.top;\n    var bottom = targetR.bottom;\n\n    return top < winHeight && bottom > 0;\n  };\n\n  var getDist = function getDist(targetR) {\n    var upperBound = winHeight + targetR.height;\n    var dist = winHeight - targetR.top;\n\n    if (dist < 0) {\n      dist = 0;\n    }\n\n    if (dist > upperBound) {\n      dist = upperBound;\n    }\n\n    return dist;\n  };\n\n  var setStyles = function setStyles(target, img, options, callOffsets) {\n    var _Object$assign;\n\n    var speed = options.speed,\n        zIndex = options.zIndex,\n        manHeight = options.manHeight,\n        manWidth = options.manWidth;\n\n    var targetR = getRect(target);\n    var dist = getDist(targetR);\n    console.log(dist);\n    console.log(winHeight * speed * -1);\n\n    var startPos = winHeight * speed * -1 + dist * speed;\n\n    Object.assign(img.style, (_Object$assign = {\n      position: 'absolute',\n      transform: 'translateY(' + startPos + 'px)',\n      height: '' + (manHeight ? manHeight + 'px' : '')\n    }, defineProperty(_Object$assign, 'height', '' + (manWidth ? manWidth + 'px' : '')), defineProperty(_Object$assign, 'z-index', '' + zIndex), _Object$assign));\n\n    Object.assign(target.style, {\n      position: 'relative',\n      overflow: 'hidden'\n    });\n\n    if (callOffsets) {\n      setOffsets(target, img, options);\n    }\n  };\n\n  var addTarget = function addTarget(target, source, options) {\n    var img = createImg(target, source);\n\n    setStyles(target, img, options, false);\n\n    img.addEventListener('load', function () {\n      setOffsets(target, img, options);\n    });\n\n    images.push({ target: target, img: img, options: options });\n  };\n\n  var moveImg = function moveImg(dist, img, _ref) {\n    var speed = _ref.speed;\n\n    img.style.transform = 'translateY(' + (winHeight * speed * -1 + dist * speed) + 'px)';\n  };\n\n  var checkWindow = function checkWindow(_ref2) {\n    var maxPixels = _ref2.maxPixels,\n        minPixels = _ref2.minPixels;\n\n    var checkMin = winWidth >= (minPixels || 0);\n    var checkMax = winWidth <= (maxPixels || 10000);\n\n    if (checkMin && checkMax) return true;\n    return false;\n  };\n\n  var controller = function controller(images) {\n    var toMove = [];\n\n    images.forEach(function (obj) {\n      var targetR = getRect(obj.target);\n\n      if (inView(targetR) && checkWindow(obj.options)) {\n        toMove.push([getDist(targetR), obj.img, obj.options]);\n      }\n    });\n\n    toMove.forEach(function (img) {\n      moveImg.apply(undefined, toConsumableArray(img));\n    });\n  };\n\n  var resize = function resize(images) {\n    var oldHeight = winHeight;\n\n    winHeight = window.innerHeight;\n    winWidth = window.innerWidth;\n\n    images.forEach(function (obj) {\n      var target = obj.target,\n          img = obj.img,\n          options = obj.options;\n\n      winHeight !== oldHeight ? setStyles(target, img, options, true) : setOffsets(target, img, options);\n    });\n  };\n\n  var addListener = function addListener() {\n    window.addEventListener('scroll', function (event) {\n      requestAnimationFrame(function () {\n        controller(images);\n      });\n    });\n\n    window.addEventListener('resize', function (event) {\n      requestAnimationFrame(function () {\n        resize(images);\n      });\n    });\n  };\n\n  var rallax = function rallax(sel, source, userOptions) {\n    var target = getTarget(sel);\n    var options = Object.assign({}, defaultOptions, userOptions);\n\n    addTarget(target, source, options);\n\n    if (!listening) {\n      addListener();\n      listening = true;\n    }\n  };\n\n  return rallax;\n\n})));\n\n\n//# sourceURL=webpack:///../rallax.js/dist/rallax.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rallax_js_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rallax.js/dist/rallax.js */ \"../rallax.js/dist/rallax.js\");\n/* harmony import */ var _rallax_js_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rallax_js_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  _rallax_js_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.test1', './test-image3.jpg')\n\n  _rallax_js_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.test3', './test-image3.jpg', {\n    adjust: {\n      scale: 0.1,\n      offset: {\n        top: 0,\n        right: 0\n      }\n    }\n  })\n\n  _rallax_js_dist_rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.test4', './test-image3.jpg', {\n    adjust: {\n      scale: 0.1,\n      offset: {\n        top: 0,\n        left: 0\n      }\n    }\n  })\n})\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });