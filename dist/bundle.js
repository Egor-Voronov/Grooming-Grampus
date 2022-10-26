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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n// импорты\r\n\r\n\r\n// логика поведения навигации\r\nconst body = document.querySelector('body');\r\nconst navbar = document.querySelector('.navbar');\r\nconst menu = document.querySelector('.menu-list');\r\nconst menuBtn = document.querySelector('.menu-btn');\r\nconst cancelBtn = document.querySelector('.cancel-btn');\r\nmenuBtn.onclick = () => {\r\n    menu.classList.add('active');\r\n    menuBtn.classList.add('hide');\r\n    cancelBtn.classList.add('show');\r\n    body.classList.add('disabledScroll');\r\n}\r\ncancelBtn.onclick = () => {\r\n    menu.classList.remove('active');\r\n    menuBtn.classList.remove('hide');\r\n    cancelBtn.classList.remove('show');\r\n    body.classList.remove('disabledScroll');\r\n}\r\n\r\nwindow.onscroll = () => {\r\n    window.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');\r\n}\r\n\r\n//параллакс\r\nlet scene = document.getElementById('parallax-container');\r\nlet parallax = new Parallax(scene);\r\n\r\n// логика свайпера\r\nnew Swiper('.banner', {\r\n    loop: true,\r\n    autoplay: {\r\n        delay: 10000,\r\n    },\r\n    speed: 1000,\r\n    slideToClickedSlide: false,\r\n});\r\n\r\n// плавный скролл\r\nconst anchors = document.querySelectorAll('.nav-li[href*=\"#\"]');\r\n\r\nfor (let anchor of anchors) {\r\n  anchor.addEventListener('click', function (e) {\r\n    e.preventDefault();\r\n    \r\n    const blockID = anchor.getAttribute('href').substr(1);\r\n    \r\n    document.getElementById(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start',\r\n    });\r\n  });\r\n};\r\n\r\n// загрузка изображений в оффере\r\nwindow.onload = () => {\r\n  const uploadFile = document.getElementById(\"files\");\r\n  const uploadBtn = document.getElementById(\"upload-btn\");\r\n  const uploadText = document.getElementById(\"upload-txt\");\r\n\r\n  uploadBtn.addEventListener(\"click\", function () {\r\n    uploadFile.click();\r\n  }) \r\n\r\n  uploadFile.addEventListener(\"change\", function () {\r\n    if (uploadFile.value) {\r\n      uploadText.innerText = uploadFile.value.match(/[\\/\\\\]([\\w\\d\\s\\.\\-(\\)]+)$/)[1];\r\n    } else {\r\n      uploadText.innerText = 'Файл не выбрал';\r\n    };\r\n  });\r\n};\r\n\r\ndocument.getElementById('files').onchange = function () {\r\n  var src = URL.createObjectURL(this.files[0]);\r\n  document.getElementById('image').src = src;\r\n}\r\n\r\nfunction handleFileSelect (evt) {\r\n  for (const file of evt.target.files) {\r\n    const span = document.createElement('span');\r\n    const src = URL.createObjectURL(file);\r\n    span.innerHTML = \r\n      `<div class=\"hover-upload\">\r\n      <img class=\"opacity\" style=\"height: 60px; width: 60px; border-radius: 8px; border: none; position: relative; z-index: 70; opacity: .6;\"` + \r\n      `src=\"${src}\" title=\"${escape(file.name)}\"></div><img class=\"x-upload\" src=\"media/x.svg\">`;\r\n\r\n    document.getElementById('list').insertBefore(span, null);\r\n  }\r\n}\r\n\r\ndocument.getElementById('files').addEventListener('change', handleFileSelect, false);\r\n\r\n// защитная мера, от возможных, следующих нечестных соискателей)\r\nconsole.log(\"Данное тестовое задание выполнил Воронов Егор\")\r\n\r\n\n\n//# sourceURL=webpack:///./javascript/script.js?");

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