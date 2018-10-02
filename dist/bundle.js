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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rallax.js */ \"./node_modules/rallax.js/dist/rallax.js\");\n/* harmony import */ var rallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rallax_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.test1', './test-image3.jpg')\n\n  rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.test3', './test-image3.jpg', {\n    adjust: {\n      scale: 0.1,\n      offset: {\n        top: 0,\n        right: 0\n      }\n    }\n  })\n\n  rallax_js__WEBPACK_IMPORTED_MODULE_0___default()('.test4', './test-image3.jpg', {\n    adjust: {\n      scale: 0.1,\n      offset: {\n        top: 0,\n        left: 0\n      }\n    }\n  })\n})\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./node_modules/rallax.js/dist/rallax.js":
/*!***********************************************!*\
  !*** ./node_modules/rallax.js/dist/rallax.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(a,b){ true?module.exports=b():undefined})(this,function(){\"use strict\";var a=function(a,b){Object.assign(a.style,{height:b+\"px\",top:\"0px\"})},b=function(a,b){Object.assign(a.style,{width:b+\"px\",height:\"auto\",left:\"0px\"})},c=function(a,b,c,d){var e=d.top,f=d.bot,g=-1*(b-c);e!==void 0||f!==void 0?g=e===void 0?f>-1*g?g:-1*f:g+e:g/=2,Object.assign(a.style,{height:b+\"px\",top:g+\"px\"})},d=function(a,b,c,d){var e=d.left,f=d.right,g=-1*(b-c);e!==void 0||f!==void 0?g=e===void 0?f>-1*g?g:-1*f:g+e:g/=2,Object.assign(a.style,{width:b+\"px\",left:g+\"px\"})},e=function(a){return a.getBoundingClientRect()},f=function(a,c,f){Object.assign(c.style,{height:f+\"px\",top:\"0px\"});var g=e(c),h=g.width>=a.width;h?d(c,g.width,a.width,{}):b(c,a.width)},g=function(g,h,i){var j=i.adjust,k=i.speed,l=window.innerHeight,m=e(g),n=(l-m.height)*k+m.height;if(!j)return void f(m,h,n);var o=j.scale?j.scale:1,p=j.offset?j.offset:{},q=e(h),r=q.height*o;r>=n?c(h,r,n,p):a(h,n),q=e(h);var s=q.width>=m.width;s?d(h,q.width,m.width,p):b(h,m.width)},h=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},i=window.innerHeight,j=window.innerWidth,k=!1,l=[],m={speed:.3,zIndex:-1e3,minPixels:1024},n=function(a){return document.querySelector(a)},o=function(a,b){var c=document.createElement(\"img\");return c.src=b,a.appendChild(c),c},p=function(a){var b=a.top,c=a.bottom;return b<i&&0<c},q=function(a){var b=i+a.height,c=i-a.top;return 0>c&&(c=0),c>b&&(c=b),c},r=function(a){var b=a.maxPixels,c=a.minPixels,d=j>=(c||0),e=j<=(b||1e4);return!!(d&&e)},s=function(a,b,c){var d=c.speed,f=c.zIndex,h=e(a);if(Object.assign(b.style,{position:\"absolute\",\"z-index\":\"\"+f}),Object.assign(a.style,{position:\"relative\",overflow:\"hidden\"}),g(a,b,c),r(c)){var i=q(h);u(i,b,c)}},t=function(a,b,c){var d=o(a,b);d.addEventListener(\"load\",function(){s(a,d,c)}),r(c)&&l.push({target:a,img:d,options:c})},u=function(a,b,c){var d=c.speed;b.style.transform=\"translateY(\"+(-1*(i*d)+a*d)+\"px)\"},v=function(a){if(0!==a.length){var b=[];a.forEach(function(a){var c=e(a.target);p(c)&&b.push([q(c),a.img,a.options])}),b.forEach(function(a){u.apply(void 0,h(a))})}},w=function(a){var b=i;i=window.innerHeight,j=window.innerWidth,a.forEach(function(a){var c=a.target,d=a.img,e=a.options;i===b?g(c,d,e):s(c,d,e)})},x=function(){window.addEventListener(\"scroll\",function(){requestAnimationFrame(function(){v(l)})}),window.addEventListener(\"resize\",function(){requestAnimationFrame(function(){w(l)})})},y=function(a,b,c){var d=n(a),e=Object.assign({},m,c);t(d,b,e),k||(x(),k=!0)};return y});\n\n\n//# sourceURL=webpack:///./node_modules/rallax.js/dist/rallax.js?");

/***/ })

/******/ });