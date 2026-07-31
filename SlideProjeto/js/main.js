/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modulos/buttonsSlide.js"
/*!************************************!*\
  !*** ./js/modulos/buttonsSlide.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonSlide)\n/* harmony export */ });\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ \"./js/modulos/slide.js\");\n\nclass ButtonSlide extends _slide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  activeNextSlide() {\n    this.transition(true);\n    super.activeNextSlide();\n  }\n  activePrevSlide() {\n    this.transition(true);\n    super.activePrevSlide();\n  }\n  bindArrowsEvents() {\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n    this.activePrevSlide = this.activePrevSlide.bind(this);\n  }\n  addArrowsEvents() {\n    ['touchstart', 'click'].forEach(item => {\n      this.selector3.addEventListener(item, this.activeNextSlide);\n      this.selector4.addEventListener(item, this.activePrevSlide);\n    });\n  }\n  activeArrows(selector3, selector4) {\n    this.selector3 = document.querySelector(selector3); // next\n    this.selector4 = document.querySelector(selector4); // prev\n\n    this.bindArrowsEvents();\n    this.addArrowsEvents();\n  }\n}\n\n//# sourceURL=webpack://babel/./js/modulos/buttonsSlide.js?\n}");

/***/ },

/***/ "./js/modulos/debounce.js"
/*!********************************!*\
  !*** ./js/modulos/debounce.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Debounce)\n/* harmony export */ });\nfunction Debounce(callback1, delay1) {\n  let timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) clearInterval(timer);\n    timer = setTimeout(() => {\n      callback1(...args);\n      timer = null;\n    }, delay1);\n  };\n}\n\n//# sourceURL=webpack://babel/./js/modulos/debounce.js?\n}");

/***/ },

/***/ "./js/modulos/slide.js"
/*!*****************************!*\
  !*** ./js/modulos/slide.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modulos/debounce.js\");\n\nclass Slide {\n  constructor(selector1, selector2) {\n    this.selector1 = document.querySelector(selector1); // slide\n    this.selector2 = document.querySelector(selector2); // wrapper\n    this.$ = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.$2 = [];\n  }\n  changeClasses() {\n    this.$2.forEach(_ref => {\n      let slide = _ref.slide;\n      return slide.removeAttribute('class');\n    });\n    this.addClasses(this.index.prev, 'prev');\n    this.addClasses(this.index.active, 'active');\n    this.addClasses(this.index.next, 'next');\n  }\n  addClasses(index, position) {\n    if (index !== undefined) this.$2[index].slide.classList.add(position);\n  }\n  onResize() {\n    this.slidesConfig();\n    this.changeSlide(this.index.active);\n  }\n  transition(boolean) {\n    if (boolean) this.selector1.classList.add('has-transition');else this.selector1.classList.remove('has-transition');\n  }\n  addEvents() {\n    this.selector2.addEventListener('mousedown', this.handleDown);\n    this.selector2.addEventListener('touchstart', this.handleDown);\n    window.addEventListener('resize', this.onResize);\n    return this;\n  }\n  moveSlide(move) {\n    this.selector1.setAttribute('style', \"transform: translate3d(\".concat(move * -1, \"px, 0, 0)\"));\n    return this;\n  }\n  updatePosition(x) {\n    this.$.movement = this.$.startX - x;\n    return this;\n  }\n  handleUp(event) {\n    const type = event.type === 'mouseup' ? ['mousemove', 'mouseup'] : ['touchmove', 'touchend'];\n    this.selector1.removeEventListener(type[0], this.handleMove);\n    window.removeEventListener(type[1], this.handleUp);\n    this.$.finalPosition += this.$.movement;\n    this.transition(true);\n    this.changeSlideOnEnd();\n    return this;\n  }\n  changeSlideOnEnd() {\n    if (this.$.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.$.movement < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n  handleMove(event) {\n    const type = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;\n    this.updatePosition(type);\n    this.moveSlide(this.$.finalPosition + this.$.movement);\n    return this;\n  }\n  handleDown(event) {\n    this.transition(false);\n    if (event.type === 'mousedown') {\n      event.preventDefault();\n      this.$.startX = event.clientX;\n      this.selector1.addEventListener('mousemove', this.handleMove);\n      window.addEventListener('mouseup', this.handleUp);\n    } else {\n      this.$.startX = event.changedTouches[0].clientX;\n      this.selector1.addEventListener('touchmove', this.handleMove);\n      window.addEventListener('touchend', this.handleUp);\n    }\n    return this;\n  }\n  bindEvents() {\n    this.handleDown = this.handleDown.bind(this);\n    this.handleMove = this.handleMove.bind(this);\n    this.handleUp = this.handleUp.bind(this);\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\n    return this;\n  }\n  slidePosition(slide) {\n    const margin = (this.selector2.offsetWidth - slide.offsetWidth) / 2;\n    return slide.offsetLeft - margin;\n  }\n  slidesConfig() {\n    this.$2 = [...this.selector1.children].map(slide => {\n      const position = this.slidePosition(slide);\n      return {\n        slide,\n        position\n      };\n    });\n  }\n  activePrevSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n  }\n  activeNextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\n  }\n  changeSlide(index) {\n    this.$.finalPosition = this.$2[index].position;\n    this.moveSlide(this.$.finalPosition);\n    this.slideIndexNav(index);\n    this.changeClasses();\n  }\n  slideIndexNav(index) {\n    const size = this.$2.length - 1;\n    this.index = {\n      prev: index - 1 < 0 ? undefined : index - 1,\n      active: index,\n      next: index + 1 > size ? undefined : index + 1\n    };\n  }\n  init() {\n    if (this.selector1 && this.selector2) {\n      this.bindEvents();\n      this.addEvents();\n      this.slidesConfig();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/modulos/slide.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_buttonsSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/buttonsSlide.js */ \"./js/modulos/buttonsSlide.js\");\n\nconsole.clear();\nconst slide = new _modulos_buttonsSlide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.slide', '.wrapper');\nslide.init();\nslide.activeArrows('.Bnext', '.Bprev');\nslide.changeSlide(3);\n\n//# sourceURL=webpack://babel/./js/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;