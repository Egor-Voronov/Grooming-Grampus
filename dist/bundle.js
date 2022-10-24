/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./javascript/script.js":
/*!******************************!*\
  !*** ./javascript/script.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n// импорты\r\n\r\n\r\n// логика поведения навигации\r\nconst body = document.querySelector(\"body\");\r\nconst navbar = document.querySelector(\".navbar\");\r\nconst menu = document.querySelector(\".menu-list\");\r\nconst menuBtn = document.querySelector(\".menu-btn\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\nmenuBtn.onclick = () => {\r\n    menu.classList.add(\"active\");\r\n    menuBtn.classList.add(\"hide\");\r\n    cancelBtn.classList.add(\"show\");\r\n    body.classList.add(\"disabledScroll\");\r\n}\r\ncancelBtn.onclick = () => {\r\n    menu.classList.remove(\"active\");\r\n    menuBtn.classList.remove(\"hide\");\r\n    cancelBtn.classList.remove(\"show\");\r\n    body.classList.remove(\"disabledScroll\");\r\n}\r\n\r\nwindow.onscroll = () => {\r\n    window.scrollY > 20 ? navbar.classList.add(\"sticky\") : navbar.classList.remove(\"sticky\");\r\n}\r\n\r\n//параллакс\r\nlet scene = document.getElementById('parallax-container');\r\nlet parallax = new Parallax(scene);\r\n\r\n// логика свайпера\r\nnew Swiper('.banner', {\r\n    loop: true,\r\n    autoplay: {\r\n        delay: 10000,\r\n    },\r\n    speed: 1000,\r\n    slideToClickedSlide: false,\r\n})\r\n\r\n// уменьшаю шрифт\r\n// /* Функция пересчёта размера шрифта */\r\n// function fGummaFontSize() {\r\n//     /* Увеличиваем размер шрифта, до появления прокрутки */\r\n//     while (this.scrollHeight <= this.clientHeight || this.scrollWidth <= this.clientWidth) {\r\n//       this.style.fontSize = parseFloat(getComputedStyle(this).fontSize) + 2 + \"px\";\r\n//     }\r\n//     /* Уменьшаем размер шрифта, пока прокрутка не исчезнет */\r\n//     while ( this.scrollHeight > this.clientHeight || this.scrollWidth > this.clientWidth ) {\r\n//       this.style.fontSize = parseFloat(getComputedStyle(this).fontSize) - 1 + \"px\";\r\n//     }\r\n//   }\r\n  \r\n//   /* Функция обхода всех элементов с нужным классом */\r\n//   function fGummaResizeAll() {\r\n//     document.querySelectorAll(\".gumma\").forEach(el => fGummaFontSize.call(el));\r\n//   }\r\n  \r\n//   document.querySelectorAll(\".gumma\").forEach(el => el.addEventListener(\"input\", fGummaFontSize));\r\n//   window.onload = fGummaResizeAll; // Запуск после загрузки контента\r\n//   window.onresize = fGummaResizeAll; // Запуск при изменении размеров окна и контейнеров\n\n//# sourceURL=webpack:///./javascript/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/script.js");
/******/ 	
/******/ })()
;