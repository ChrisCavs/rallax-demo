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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rallax.js */ \"./node_modules/rallax.js/dist/rallax.js\");\n/* harmony import */ var rallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rallax_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  window.onbeforeunload = () => {\n    window.scrollTo(0, 0)\n  }\n\n  const dead = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.dead', {speed: 0.55})\n  const simple = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.simple', {speed: 0.7})\n  const parallax = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.parallax', {speed: 0.6})\n  const scrolling = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.scrolling', {speed: 0.75})\n\n  const objects = [dead, simple, parallax, scrolling]\n\n  objects.forEach(obj => {\n      obj.when(\n        () => obj.scrollY() > 750,\n        () => obj.stop()\n      )\n      obj.when(\n        () => obj.scrollY() <= 750,\n        () => obj.start()\n      )\n    })\n\n  const image = document.querySelector('.parallax-image')\n  const imageContainer = document.querySelector('.container')\n  const imageContainerRect = imageContainer.getBoundingClientRect()\n  const winHeight = window.innerHeight\n\n  const imageTop = -(window.innerHeight * 0.3) * 2\n  const imageHeight = imageContainerRect.height + (winHeight * 0.3)\n  const imageWidth = imageContainerRect.width + 200\n  const imageLeft = -100\n\n  Object.assign(image.style, {\n    position: 'relative',\n    top: `${imageTop}px`,\n    left: `${imageLeft}px`,\n    height: `${imageHeight}px`,\n    width: `${imageWidth}px`,\n  })\n\n  const imageParallax = rallax_js__WEBPACK_IMPORTED_MODULE_0___default()(image)\n})\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./node_modules/rallax.js/dist/rallax.js":
/*!***********************************************!*\
  !*** ./node_modules/rallax.js/dist/rallax.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,e){ true?module.exports=e():undefined}(this,function(){\"use strict\";var t=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),n=!1,o=[],r=.3,s=!1,a=function(){function o(t,e){var i=e.speed,n=e.mobilePx;!function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}(this,o),this.speed=i||r,this.mobilePx=n||s,this.mobileDisable=!1,this.conditions=[],this.active=!0,\"string\"==typeof(this.target=t)&&(this.target=document.querySelector(\"\"+t)),this.winHeight=window.innerHeight,this.accumulated=0,this.getRect(),this.startScroll=0<this.targetR.top-this.winHeight?this.targetR.top-this.winHeight:0}return t(o,[{key:\"stop\",value:function(){this.active=!1}},{key:\"start\",value:function(){this.active=!0}},{key:\"getSpeed\",value:function(){return this.speed}},{key:\"changeSpeed\",value:function(t){this.inWindow()&&t!==this.speed&&(this.accumulated=this.getTranslation(),this.startScroll=this.scrollY()),this.speed=t}},{key:\"when\",value:function(t,e){return this.conditions.push({condition:t,action:e}),this}},{key:\"scrollY\",value:function(){return window.scrollY||window.pageYOffset}},{key:\"getTranslation\",value:function(){var t=(this.scrollY()-this.startScroll)*this.speed+this.accumulated;return 0<=t?t:0}},{key:\"getRect\",value:function(){return this.targetR=this.target.getBoundingClientRect(),this.targetR}},{key:\"inWindow\",value:function(){this.getRect();var t=this.targetR.top,e=this.targetR.bottom;return t<this.winHeight&&0<e}},{key:\"move\",value:function(){this.target.style.transform=\"translateY(\"+this.getTranslation()+\"px)\"}}]),o}(),c=function(t){requestAnimationFrame(function(){t.forEach(function(t){t.mobileDisable||(t.conditions.forEach(function(t){var e=t.condition,i=t.action;e()&&i()}),t.active&&t.move())})})},u=function(){var e=window.innerWidth;o.forEach(function(t){t.mobilePx>=e&&(t.mobileDisable=!0)})};return function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=new a(t,e);return o.push(i),n||(window.addEventListener(\"scroll\",function(t){c(o)}),window.addEventListener(\"resize\",function(t){u()}),n=!0),i}});\n\n\n//# sourceURL=webpack:///./node_modules/rallax.js/dist/rallax.js?");

/***/ })

/******/ });