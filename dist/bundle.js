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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/FlashMessage.js":
/*!********************************!*\
  !*** ./src/js/FlashMessage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlashMessage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FlashMessage =\n/*#__PURE__*/\nfunction () {\n  function FlashMessage() {\n    _classCallCheck(this, FlashMessage);\n\n    console.log('loading flash message...');\n    this.build();\n  }\n\n  _createClass(FlashMessage, [{\n    key: \"build\",\n    value: function build() {\n      this.container = document.createElement('div');\n      this.container.className = 'flash-message';\n      document.body.appendChild(this.container);\n    }\n  }, {\n    key: \"alertMessage\",\n    value: function alertMessage(message) {\n      this.container.innerText = message;\n      this.container.style.display = 'block';\n    }\n  }]);\n\n  return FlashMessage;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/FlashMessage.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _FlashMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage */ \"./src/js/FlashMessage.js\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBoard */ \"./src/js/GameBoard.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    console.log('loading game...');\n    this.flashMessage = new _FlashMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.build();\n    this.board = new _GameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      container: this.container,\n      clickHandler: this.handleSquareClick.bind(this),\n      player: 'x',\n      game: this\n    });\n    this.currentPlayer = 'x';\n    this.playerXSelections = [];\n    this.playerOSelections = [];\n  }\n\n  _createClass(Game, [{\n    key: \"build\",\n    value: function build() {\n      this.container = document.createElement('div');\n      this.container.className = 'container';\n      document.body.appendChild(this.container);\n    }\n  }, {\n    key: \"handleSquareClick\",\n    value: function handleSquareClick(e) {\n      var number = parseInt(e.target.id, 10);\n\n      if (this.playerXSelections.indexOf(number) > -1 || this.playerOSelections.indexOf(number) > -1) {\n        return false;\n      }\n\n      var selectionSet = this.currentPlayer === 'x' ? this.playerXSelections : this.playerOSelections;\n      e.target.classList.add(\"selected-\".concat(this.currentPlayer));\n      selectionSet.push(number);\n      var isWinner = this.isWinner(selectionSet);\n\n      if (isWinner) {\n        isWinner.forEach(function (id) {\n          document.getElementById(id).classList.add('winner');\n        });\n        this.flashMessage.alertMessage(\"Player \".concat(this.currentPlayer, \" is the winner!\"));\n      } else if (this.playerXSelections.length + this.playerOSelections.length >= 9) {\n        this.flashMessage.alertMessage(\"Cat's game. No winner this time. :-(\");\n      } else {\n        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';\n        this.board.updateCurrentPlayer(this.currentPlayer);\n      }\n    }\n  }, {\n    key: \"isWinner\",\n    value: function isWinner(selectionArray) {\n      var _this = this;\n\n      var matchWinner = false;\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"WINNERS\"].forEach(function (winner) {\n        if (_this.arrayContains(selectionArray, winner)) {\n          matchWinner = winner;\n        }\n      });\n      return matchWinner;\n    }\n  }, {\n    key: \"arrayContains\",\n    value: function arrayContains(selected, winner) {\n      if (selected.length === 0 || winner === 0) {\n        return false;\n      }\n\n      return winner.every(function (el) {\n        return selected.indexOf(el) > -1;\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/GameBoard.js":
/*!*****************************!*\
  !*** ./src/js/GameBoard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameBoard; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameBoard =\n/*#__PURE__*/\nfunction () {\n  function GameBoard(config) {\n    _classCallCheck(this, GameBoard);\n\n    this.game = config.game;\n    this.container = config.container;\n    this.currentPlayer = config.player;\n    this.build();\n    this.boardElement.addEventListener('click', config.clickHandler);\n  }\n\n  _createClass(GameBoard, [{\n    key: \"build\",\n    value: function build() {\n      this.boardElement = document.createElement('div');\n      this.boardElement.className = 'board';\n      this.boardElement.classList.add(\"player-\".concat(this.currentPlayer));\n      this.container.appendChild(this.boardElement);\n\n      for (var i = 0; i < 9; i++) {\n        var square = document.createElement('div');\n        square.className = \"square square-\".concat(i);\n        square.id = i;\n        this.boardElement.appendChild(square);\n      }\n    }\n  }, {\n    key: \"updateCurrentPlayer\",\n    value: function updateCurrentPlayer(player) {\n      this.boardElement.classList.remove('player-x');\n      this.boardElement.classList.remove('player-o');\n      this.boardElement.classList.add(\"player-\".concat(player));\n    }\n  }]);\n\n  return GameBoard;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/GameBoard.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: WINNERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WINNERS\", function() { return WINNERS; });\nvar WINNERS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n//# sourceURL=webpack:///./src/js/constants.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\nvar game;\ngame = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });