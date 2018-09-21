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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! t-writer.js */ \"./node_modules/t-writer.js/dist/t-writer.js\");\n/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  // ABOUT SECTION\n\n  const about1 = document.querySelector('.about1')\n  const about2 = document.querySelector('.about2')\n  const about3 = document.querySelector('.about3')\n  const about4 = document.querySelector('.about4')\n\n  const aboutTw1 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(about1, { animateCursor: 'hide', typeSpeed: 60 })\n  const aboutTw2 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(about2, { animateCursor: 'hide', typeSpeed: 60 })\n  const aboutTw3 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(about3, { animateCursor: 'hide', typeSpeed: 60 })\n  const aboutTw4 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(about4, { animateCursor: 'hide', typeSpeed: 60 })\n\n  const clearAll = () => {\n    aboutTw1.clearText()\n    aboutTw2.clearText()\n    aboutTw3.clearText()\n    aboutTw4.clearText()\n\n    aboutTw1.start()\n  }\n\n  aboutTw1\n    .type('Fast')\n    .removeCursor()\n    .rest(300)\n    .then(aboutTw2.start.bind(aboutTw2))\n    .start()\n\n  aboutTw2\n    .type('Easy to use')\n    .removeCursor()\n    .rest(300)\n    .then(aboutTw3.start.bind(aboutTw3))\n\n  aboutTw3\n    .type('Fully-featured')\n    .removeCursor()\n    .rest(300)\n    .then(aboutTw4.start.bind(aboutTw4))\n\n  aboutTw4\n    .type('Dependency-free')\n    .removeCursor()\n    .rest(2000)\n    .then(clearAll)\n\n  // DEMO 4\n\n  const test5 = document.querySelector('.test5')\n\n  const testTw5 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(test5, {\n    loop: true,\n    typeColor: 'blue'\n  })\n\n  testTw5\n    .type('A simple syntax makes it easy.')\n    .rest(500)\n    .start()\n\n  // DEMO 1\n\n  const test1 = document.querySelector('.test1')\n\n  const testTw1 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(test1, {\n    loop: true,\n    typeSpeed: 80,\n    deleteSpeed: 80,\n    typeColor: 'red'\n  })\n\n  testTw1\n    .type('You can type')\n    .rest(500)\n    .changeOps({ deleteSpeed: 80 })\n    .remove(4)\n    .type('edit')\n    .rest(500)\n    .remove(4)\n    .type('synchronize callbacks')\n    .rest(500)\n    .changeOps({ deleteSpeed: 20 })\n    .remove(21)\n    .type('change options on the go')\n    .rest(500)\n    .clear()\n    .start()\n\n  // DEMO 2\n\n  const test2 = document.querySelector('.test2')\n\n  const testTw2 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(test2, { \n    loop: true, \n    typeColor: 'red' \n  })\n\n  testTw2\n    .strings(\n      400,\n      \"Set many strings\",\n      \"In just one call\", \n      \"Using the 'strings' method\"\n    )\n    .start()\n  \n  // DEMO 3\n\n  const test3 = document.querySelector('.test3')\n  const test4 = document.querySelector('.test4')\n\n  const testTw3 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(test3, { typeSpeed: 60, deleteSpeed: 30 })\n  const testTw4 = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(test4, { typeSpeed: 60, deleteSpeed: 30 })\n\n  testTw3\n    .type('Combo typewriters to')\n    .removeCursor()\n    .then(testTw4.start.bind(testTw4))\n    .start()\n\n  testTw4\n    .type(\"create complex effects\")\n    .rest(500)\n    .clear()\n    .changeTypeColor('red')\n    .type(\"defy user expectations\")\n    .rest(500)\n    .clear()\n    .changeTypeColor('blue')\n    .type(\"generate a custom loop\")\n    .rest(700)\n    .clear()\n    .removeCursor()\n    .changeTypeColor('black')\n    .then(testTw3.start.bind(testTw3))\n})\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./node_modules/t-writer.js/dist/t-writer.js":
/*!***************************************************!*\
  !*** ./node_modules/t-writer.js/dist/t-writer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var classCallCheck = function (instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  };\n\n  var createClass = function () {\n    function defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n      if (protoProps) defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) defineProperties(Constructor, staticProps);\n      return Constructor;\n    };\n  }();\n\n  var defaultOptions = {\n    loop: false,\n    animateCursor: true,\n\n    blinkSpeed: 400,\n\n    typeSpeed: 90,\n    deleteSpeed: 40,\n\n    typeSpeedMin: 65,\n    typeSpeedMax: 115,\n\n    deleteSpeedMin: 40,\n    deleteSpeedMax: 90,\n\n    typeClass: 'type-span',\n    cursorClass: 'cursor-span',\n\n    typeColor: 'black',\n    cursorColor: 'black'\n  };\n\n  var Cursor = function () {\n    function Cursor(el, speed) {\n      classCallCheck(this, Cursor);\n\n      this.el = el;\n      this.speed = speed;\n\n      this.faded = false;\n\n      this.initialAssignment();\n      this.el.addEventListener('transitionend', this.logic.bind(this));\n\n      this.fade = this.fade.bind(this);\n      this.fadeIn = this.fadeIn.bind(this);\n    }\n\n    createClass(Cursor, [{\n      key: 'initialAssignment',\n      value: function initialAssignment() {\n        Object.assign(this.el.style, {\n          opacity: '1',\n          'transition-duration': '0.1s'\n        });\n      }\n    }, {\n      key: 'fade',\n      value: function fade() {\n        this.el.style.opacity = '0';\n\n        this.faded = true;\n      }\n    }, {\n      key: 'fadeIn',\n      value: function fadeIn() {\n        this.el.style.opacity = '1';\n\n        this.faded = false;\n      }\n    }, {\n      key: 'logic',\n      value: function logic() {\n        this.faded ? setTimeout(this.fadeIn, this.speed) : setTimeout(this.fade, this.speed);\n      }\n    }, {\n      key: 'start',\n      value: function start() {\n        setTimeout(this.fade.bind(this), 0);\n      }\n    }]);\n    return Cursor;\n  }();\n\n  var Typewriter = function () {\n    function Typewriter(el, options) {\n      classCallCheck(this, Typewriter);\n\n      this.el = el;\n      this.text = '';\n      this.queue = [];\n      this.options = Object.assign({}, defaultOptions, options);\n\n      this.createTextEl();\n    }\n\n    // USER API\n\n    createClass(Typewriter, [{\n      key: 'type',\n      value: function type(str) {\n        this.queue.push({\n          type: 'type',\n          content: str\n        });\n\n        return this;\n      }\n    }, {\n      key: 'strings',\n      value: function strings(interval) {\n        var _this = this;\n\n        for (var _len = arguments.length, arr = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          arr[_key - 1] = arguments[_key];\n        }\n\n        arr.forEach(function (str, i) {\n          _this.queue.push({\n            type: 'type',\n            content: str\n          });\n\n          if (interval) {\n            _this.queue.push({\n              type: 'pause',\n              time: interval\n            });\n          }\n\n          if (i === arr.length - 1) return;\n\n          _this.queue.push({\n            type: 'deleteChars',\n            count: str.length\n          });\n        });\n\n        return this;\n      }\n    }, {\n      key: 'remove',\n      value: function remove(num) {\n        this.queue.push({\n          type: 'deleteChars',\n          count: num\n        });\n\n        return this;\n      }\n    }, {\n      key: 'clear',\n      value: function clear() {\n        this.queue.push({\n          type: 'clear'\n        });\n\n        return this;\n      }\n    }, {\n      key: 'clearText',\n      value: function clearText() {\n        this.text = '';\n        this.render();\n\n        return this;\n      }\n    }, {\n      key: 'queueClearText',\n      value: function queueClearText() {\n        this.queue.push({\n          type: 'clearText'\n        });\n\n        return this;\n      }\n    }, {\n      key: 'clearQueue',\n      value: function clearQueue() {\n        this.queue = [];\n        this.text = '';\n        render();\n\n        return this;\n      }\n    }, {\n      key: 'rest',\n      value: function rest(time) {\n        this.queue.push({\n          type: 'pause',\n          time: time\n        });\n\n        return this;\n      }\n    }, {\n      key: 'changeOps',\n      value: function changeOps(options) {\n\n        this.queue.push({\n          type: 'changeOps',\n          options: options\n        });\n\n        return this;\n      }\n    }, {\n      key: 'then',\n      value: function then(cb) {\n        this.queue.push({\n          type: 'callback',\n          cb: cb\n        });\n\n        return this;\n      }\n    }, {\n      key: 'removeCursor',\n      value: function removeCursor() {\n        this.queue.push({\n          type: 'deleteCursor'\n        });\n\n        return this;\n      }\n    }, {\n      key: 'addCursor',\n      value: function addCursor() {\n        this.queue.push({\n          type: 'createCursor'\n        });\n\n        return this;\n      }\n    }, {\n      key: 'changeTypeColor',\n      value: function changeTypeColor(color) {\n        this.queue.push({\n          type: 'typeColor',\n          color: color\n        });\n\n        return this;\n      }\n    }, {\n      key: 'changeCursorColor',\n      value: function changeCursorColor(color) {\n        this.queue.push({\n          type: 'cursorColor',\n          color: color\n        });\n\n        return this;\n      }\n    }, {\n      key: 'changeTypeClass',\n      value: function changeTypeClass(className) {\n        this.queue.push({\n          type: 'typeClass',\n          className: className\n        });\n\n        return this;\n      }\n    }, {\n      key: 'changeCursorClass',\n      value: function changeCursorClass(className) {\n        this.queue.push({\n          type: 'cursorClass',\n          className: className\n        });\n\n        return this;\n      }\n    }, {\n      key: 'start',\n      value: function start() {\n        var _this2 = this;\n\n        if (this.running) return;\n\n        if (!this.cursorEl) {\n          this.createCursorEl();\n        }\n\n        this.running = true;\n        this.deleteAll().then(function (_) {\n          return _this2.loop(0);\n        });\n      }\n\n      // ACTIONS (promises)\n\n    }, {\n      key: 'add',\n      value: function add(content) {\n        var _this3 = this;\n\n        var count = 0;\n        this.timestamp = Date.now();\n\n        return new Promise(function (resolve, _) {\n\n          var _step = function _step() {\n            if (count === content.length) return resolve();\n\n            var newStamp = Date.now();\n            var change = newStamp - _this3.timestamp;\n\n            if (change >= _this3.getTypeSpeed()) {\n              _this3.addChar(content[count]);\n              _this3.timestamp = newStamp;\n              count++;\n            }\n            requestAnimationFrame(_step);\n          };\n\n          requestAnimationFrame(_step);\n        });\n      }\n    }, {\n      key: 'delete',\n      value: function _delete(count) {\n        var _this4 = this;\n\n        this.timestamp = Date.now();\n\n        return new Promise(function (resolve, _) {\n\n          var _step = function _step() {\n            if (count === 0) return resolve();\n\n            var newStamp = Date.now();\n            var change = newStamp - _this4.timestamp;\n\n            if (change >= _this4.getDeleteSpeed()) {\n              _this4.deleteChar();\n              _this4.timestamp = newStamp;\n              count--;\n            }\n            requestAnimationFrame(_step);\n          };\n\n          requestAnimationFrame(_step);\n        });\n      }\n    }, {\n      key: 'deleteAll',\n      value: function deleteAll() {\n        return this.delete(this.text.length);\n      }\n    }, {\n      key: 'pause',\n      value: function pause(time) {\n        return new Promise(function (resolve, _) {\n          setTimeout(resolve, time);\n        });\n      }\n    }, {\n      key: 'callback',\n      value: function callback(cb) {\n        return new Promise(function (resolve, _) {\n          cb();\n          resolve();\n        });\n      }\n    }, {\n      key: 'deleteCursor',\n      value: function deleteCursor() {\n        var _this5 = this;\n\n        return new Promise(function (resolve, _) {\n          _this5.removeCursorEl();\n          resolve();\n        });\n      }\n    }, {\n      key: 'createCursor',\n      value: function createCursor() {\n        var _this6 = this;\n\n        return new Promise(function (resolve, _) {\n          _this6.createCursorEl();\n          resolve();\n        });\n      }\n    }, {\n      key: 'clearTextAction',\n      value: function clearTextAction() {\n        var _this7 = this;\n\n        return new Promise(function (resolve, _) {\n          _this7.clearText();\n          resolve();\n        });\n      }\n    }, {\n      key: 'changeOpsAction',\n      value: function changeOpsAction(options) {\n        var _this8 = this;\n\n        return new Promise(function (resolve, _) {\n          _this8.options = Object.assign(_this8.options, options);\n          resolve();\n        });\n      }\n    }, {\n      key: 'typeColor',\n      value: function typeColor(color) {\n        var _this9 = this;\n\n        return new Promise(function (resolve, _) {\n          _this9.textEl.style.color = color;\n          resolve();\n        });\n      }\n    }, {\n      key: 'cursorColor',\n      value: function cursorColor(color) {\n        var _this10 = this;\n\n        return new Promise(function (resolve, _) {\n          _this10.cursorEl.style.color = color;\n          resolve();\n        });\n      }\n    }, {\n      key: 'typeClass',\n      value: function typeClass(className) {\n        var _this11 = this;\n\n        return new Promise(function (resolve, _) {\n          _this11.textEl.className = className;\n          resolve();\n        });\n      }\n    }, {\n      key: 'cursorClass',\n      value: function cursorClass(className) {\n        var _this12 = this;\n\n        return new Promise(function (resolve, _) {\n          _this12.cursorEl.className = className;\n          resolve();\n        });\n      }\n\n      // HELPERS\n\n    }, {\n      key: 'deleteChar',\n      value: function deleteChar() {\n        this.text = this.text.slice(0, -1);\n        this.render();\n      }\n    }, {\n      key: 'addChar',\n      value: function addChar(char) {\n        this.text += char;\n        this.render();\n      }\n    }, {\n      key: 'getTypeSpeed',\n      value: function getTypeSpeed() {\n        var speed = this.options.typeSpeed;\n\n        if (typeof speed === 'number') {\n          return speed;\n        }\n\n        var max = this.options.typeSpeedMax;\n        var min = this.options.typeSpeedMin;\n\n        var random = Math.floor(Math.random() * (max - min));\n        return random + min;\n      }\n    }, {\n      key: 'getDeleteSpeed',\n      value: function getDeleteSpeed() {\n        var speed = this.options.deleteSpeed;\n\n        if (typeof speed === 'number') {\n          return speed;\n        }\n\n        var max = this.options.deleteSpeedMax;\n        var min = this.options.deleteSpeedMin;\n\n        var random = Math.floor(Math.random() * (max - min));\n        return random + min;\n      }\n    }, {\n      key: 'step',\n      value: function step(idx) {\n        var action = this.queue[idx];\n\n        switch (action.type) {\n          case 'type':\n            return this.add(action.content);\n\n          case 'deleteChars':\n            return this.delete(action.count);\n\n          case 'clear':\n            return this.deleteAll();\n\n          case 'pause':\n            return this.pause(action.time);\n\n          case 'callback':\n            return this.callback(action.cb);\n\n          case 'deleteCursor':\n            return this.deleteCursor();\n\n          case 'createCursor':\n            return this.createCursor();\n\n          case 'clearText':\n            return this.clearTextAction();\n\n          case 'changeOps':\n            return this.changeOpsAction(action.options);\n\n          case 'typeColor':\n            return this.typeColor(action.color);\n\n          case 'cursorColor':\n            return this.cursorColor(action.color);\n\n          case 'typeClass':\n            return this.typeClass(action.className);\n\n          case 'cursorClass':\n            return this.cursorClass(action.className);\n        }\n      }\n    }, {\n      key: 'loop',\n      value: function loop(idx) {\n        var _this13 = this;\n\n        if (idx === this.queue.length) {\n          this.running = false;\n\n          if (this.options.loop) {\n            this.start();\n          }\n          return;\n        }\n\n        this.step(idx).then(function (_) {\n          _this13.loop(idx + 1);\n        });\n      }\n    }, {\n      key: 'createCursorEl',\n      value: function createCursorEl() {\n        if (typeof this.options.animateCursor === 'String') return;\n\n        this.cursorEl = document.createElement('span');\n        this.cursorEl.innerHTML = '|';\n\n        this.cursorEl.style.color = this.options.cursorColor;\n\n        this.cursorEl.classList.add(this.options.cursorClass);\n\n        this.el.appendChild(this.cursorEl);\n\n        if (this.options.animateCursor) {\n          this.cursor = new Cursor(this.cursorEl, this.options.blinkSpeed);\n\n          this.cursor.start();\n        }\n      }\n    }, {\n      key: 'removeCursorEl',\n      value: function removeCursorEl() {\n        this.el.removeChild(this.cursorEl);\n\n        this.cursorEl = null;\n      }\n    }, {\n      key: 'createTextEl',\n      value: function createTextEl() {\n        this.textEl = document.createElement('span');\n\n        this.textEl.classList.add(this.options.typeClass);\n\n        this.textEl.style.color = this.options.typeColor;\n\n        this.el.appendChild(this.textEl);\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        this.textEl.innerHTML = this.text;\n      }\n    }]);\n    return Typewriter;\n  }();\n\n  return Typewriter;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/t-writer.js/dist/t-writer.js?");

/***/ })

/******/ });