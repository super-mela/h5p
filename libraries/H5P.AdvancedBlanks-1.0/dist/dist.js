/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".h5p-advanced-blanks {\n    position: relative;\n}\n\n\n/* Text */\n\n.h5p-advanced-blanks #h5p-cloze-container p,\n.h5p-advanced-blanks #h5p-cloze-container div {\n    line-height: 1.8em;\n    margin: 0 0 1em;\n    text-align: justify;\n}\n\n@media only screen and (min-width: 480px) {\n    .h5p-advanced-blanks #h5p-cloze-container p,\n    .h5p-advanced-blanks #h5p-cloze-container div {\n        text-align: unset;\n    }\n}\n\n\n/* Input */\n\n.h5p-advanced-blanks .h5p-input-wrapper {\n    display: inline-block;\n    position: relative;\n}\n\n.h5p-advanced-blanks .blank .h5p-text-input {\n    font-family: H5PDroidSans, sans-serif;\n    font-size: 1em;\n    border-radius: 0.25em;\n    border: 1px solid #a0a0a0;\n    padding: 0.1875em 1.5em 0.1875em 0.5em;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.h5p-advanced-blanks .blank input.h5p-text-input {\n  max-width: calc(100vw - 64px);\n}\n\n.h5p-advanced-blanks .blank select.h5p-text-input {\n  max-width: calc(100vw - 36px);\n}\n\n/* IE + Chrome specific fixes */\n\n.h5p-text-input::-ms-clear {\n    display: none;\n}\n\n:not(.correct).blank.has-tip button {\n    cursor: pointer;\n}\n\n\n/* Select mode */\n\nselect.h5p-text-input {\n    appearance: button;\n    -moz-appearance: none;\n    -webkit-appearance: button;\n}\n\n\n/* Showing solution input */\n\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\n    border: 1px dashed #9dd8bb;\n    color: #255c41;\n    background: #FFFFFF;\n}\n\n\n/* Focussed input */\n\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\n    outline: none;\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\n    border-color: #7fb8ff;\n}\n\n\n/* Correctly answered input */\n\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\n    background: #9dd8bb;\n    border: 1px solid #9dd8bb;\n    color: #255c41;\n}\n\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;    \n    top: 50%;\n    transform: translateY(-50%);\n    text-decoration: none;\n    content: \"\\f00c\";\n    font-family: 'H5PFontAwesome4';\n    color: #255c41;\n}\n\n\n/* Incorrect answers */\n\n.h5p-advanced-blanks .blank.error .h5p-text-input {\n    background-color: #f7d0d0;\n    border: 1px solid #f7d0d0;\n    color: #b71c1c;\n    text-decoration: line-through;\n}\n\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Spelling errors */\n\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\n    background-color: #ffff99;\n    border: 1px solid #ffff99;\n    color: black;\n}\n\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Buttons */\n\n.h5p-advanced-blanks .blank button {\n    padding-left: 5px;\n    padding-right: 5px;\n    border: none;\n    background: none;\n}\n\n\n/* Highlight in spelling mistake marker */\n\n.spelling-mistake .missing-character,\n.spelling-mistake .mistaken-character {\n    color: red;\n    font-weight: bold;\n    -webkit-animation-duration: 500ms;\n            animation-duration: 500ms;\n    -webkit-animation-name: blink-color;\n            animation-name: blink-color;\n    -webkit-animation-iteration-count: 13;\n            animation-iteration-count: 13;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n\n@-webkit-keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n@keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n.spelling-mistake .mistaken-character {\n    text-decoration: line-through;\n}\n\n\n/* Highlights in text */\n\n.h5p-advanced-blanks .highlighted {\n    background-color: rgba(255, 0, 0, 0.2);\n    padding: 0.4em;\n    margin: -0.4em;\n    -webkit-animation-duration: 1000ms;\n            animation-duration: 1000ms;\n    -webkit-animation-name: blink-background-color;\n            animation-name: blink-background-color;\n    -webkit-animation-iteration-count: 3;\n            animation-iteration-count: 3;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n\n@-webkit-keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n@keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n\n/* Others */\n\n.h5p-advanced-blanks .invisible {\n    visibility: collapse;\n}\n\n\n/* Tips */\n\n.h5p-advanced-blanks .h5p-tip-container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.4em;\n  font-size: 1em;\n}\n\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\n    padding-right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\n    right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\n    padding-right: 3.5em;\n}\n\n/* improves appearance of h5p tip shadows */\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\n  color: black;\n  opacity: 0.13;\n}\n\n/* pending feedback marker */\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\n    display: none;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\n    font-size: large;    \n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\n    -webkit-animation-iteration-count: 2;\n            animation-iteration-count: 2;\n    transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    position: absolute;\n    left: -0.4em;\n    top: -0.7em;\n    content: \"\\f05a\";\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\n    color: #b71c1c;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\n    color: #ffff00;\n    text-shadow: 0px 0px 0.5em black;\n}\n\n@-webkit-keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[".h5p-advanced-blanks {\n    position: relative;\n}\n\n\n/* Text */\n\n.h5p-advanced-blanks #h5p-cloze-container p,\n.h5p-advanced-blanks #h5p-cloze-container div {\n    line-height: 1.8em;\n    margin: 0 0 1em;\n    text-align: justify;\n}\n\n@media only screen and (min-width: 480px) {\n    .h5p-advanced-blanks #h5p-cloze-container p,\n    .h5p-advanced-blanks #h5p-cloze-container div {\n        text-align: unset;\n    }\n}\n\n\n/* Input */\n\n.h5p-advanced-blanks .h5p-input-wrapper {\n    display: inline-block;\n    position: relative;\n}\n\n.h5p-advanced-blanks .blank .h5p-text-input {\n    font-family: H5PDroidSans, sans-serif;\n    font-size: 1em;\n    border-radius: 0.25em;\n    border: 1px solid #a0a0a0;\n    padding: 0.1875em 1.5em 0.1875em 0.5em;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.h5p-advanced-blanks .blank input.h5p-text-input {\n  max-width: calc(100vw - 64px);\n}\n\n.h5p-advanced-blanks .blank select.h5p-text-input {\n  max-width: calc(100vw - 36px);\n}\n\n/* IE + Chrome specific fixes */\n\n.h5p-text-input::-ms-clear {\n    display: none;\n}\n\n:not(.correct).blank.has-tip button {\n    cursor: pointer;\n}\n\n\n/* Select mode */\n\nselect.h5p-text-input {\n    appearance: button;\n    -moz-appearance: none;\n    -webkit-appearance: button;\n}\n\n\n/* Showing solution input */\n\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\n    border: 1px dashed #9dd8bb;\n    color: #255c41;\n    background: #FFFFFF;\n}\n\n\n/* Focussed input */\n\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\n    outline: none;\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\n    border-color: #7fb8ff;\n}\n\n\n/* Correctly answered input */\n\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\n    background: #9dd8bb;\n    border: 1px solid #9dd8bb;\n    color: #255c41;\n}\n\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;    \n    top: 50%;\n    transform: translateY(-50%);\n    text-decoration: none;\n    content: \"\\f00c\";\n    font-family: 'H5PFontAwesome4';\n    color: #255c41;\n}\n\n\n/* Incorrect answers */\n\n.h5p-advanced-blanks .blank.error .h5p-text-input {\n    background-color: #f7d0d0;\n    border: 1px solid #f7d0d0;\n    color: #b71c1c;\n    text-decoration: line-through;\n}\n\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Spelling errors */\n\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\n    background-color: #ffff99;\n    border: 1px solid #ffff99;\n    color: black;\n}\n\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Buttons */\n\n.h5p-advanced-blanks .blank button {\n    padding-left: 5px;\n    padding-right: 5px;\n    border: none;\n    background: none;\n}\n\n\n/* Highlight in spelling mistake marker */\n\n.spelling-mistake .missing-character,\n.spelling-mistake .mistaken-character {\n    color: red;\n    font-weight: bold;\n    animation-duration: 500ms;\n    animation-name: blink-color;\n    animation-iteration-count: 13;\n    animation-direction: alternate;\n}\n\n@keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n.spelling-mistake .mistaken-character {\n    text-decoration: line-through;\n}\n\n\n/* Highlights in text */\n\n.h5p-advanced-blanks .highlighted {\n    background-color: rgba(255, 0, 0, 0.2);\n    padding: 0.4em;\n    margin: -0.4em;\n    animation-duration: 1000ms;\n    animation-name: blink-background-color;\n    animation-iteration-count: 3;\n    animation-direction: alternate;\n}\n\n@keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n\n/* Others */\n\n.h5p-advanced-blanks .invisible {\n    visibility: collapse;\n}\n\n\n/* Tips */\n\n.h5p-advanced-blanks .h5p-tip-container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.4em;\n  font-size: 1em;\n}\n\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\n    padding-right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\n    right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\n    padding-right: 3.5em;\n}\n\n/* improves appearance of h5p tip shadows */\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\n  color: black;\n  opacity: 0.13;\n}\n\n/* pending feedback marker */\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\n    display: none;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\n    font-size: large;    \n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\n    animation-iteration-count: 2;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    position: absolute;\n    left: -0.4em;\n    top: -0.7em;\n    content: \"\\f05a\";\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\n    color: #b71c1c;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\n    color: #ffff00;\n    text-shadow: 0px 0px 0.5em black;\n}\n\n@keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/diff/lib/convert/dmp.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/convert/dmp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertChangesToDMP = convertChangesToDMP;

/*istanbul ignore end*/
// See: http://code.google.com/p/google-diff-match-patch/wiki/API
function convertChangesToDMP(changes) {
  var ret = [],
      change,
      operation;

  for (var i = 0; i < changes.length; i++) {
    change = changes[i];

    if (change.added) {
      operation = 1;
    } else if (change.removed) {
      operation = -1;
    } else {
      operation = 0;
    }

    ret.push([operation, change.value]);
  }

  return ret;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFDSUMsTUFESjtBQUFBLE1BRUlDLFNBRko7O0FBR0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixPQUFPLENBQUNLLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDRixJQUFBQSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFoQjs7QUFDQSxRQUFJRixNQUFNLENBQUNJLEtBQVgsRUFBa0I7QUFDaEJILE1BQUFBLFNBQVMsR0FBRyxDQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUlELE1BQU0sQ0FBQ0ssT0FBWCxFQUFvQjtBQUN6QkosTUFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBYjtBQUNELEtBRk0sTUFFQTtBQUNMQSxNQUFBQSxTQUFTLEdBQUcsQ0FBWjtBQUNEOztBQUVERixJQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBUyxDQUFDTCxTQUFELEVBQVlELE1BQU0sQ0FBQ08sS0FBbkIsQ0FBVDtBQUNEOztBQUNELFNBQU9SLEdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXSxcbiAgICAgIGNoYW5nZSxcbiAgICAgIG9wZXJhdGlvbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/convert/xml.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/convert/xml.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertChangesToXML = convertChangesToXML;

/*istanbul ignore end*/
function convertChangesToXML(changes) {
  var ret = [];

  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];

    if (change.added) {
      ret.push('<ins>');
    } else if (change.removed) {
      ret.push('<del>');
    }

    ret.push(escapeHTML(change.value));

    if (change.added) {
      ret.push('</ins>');
    } else if (change.removed) {
      ret.push('</del>');
    }
  }

  return ret.join('');
}

function escapeHTML(s) {
  var n = s;
  n = n.replace(/&/g, '&amp;');
  n = n.replace(/</g, '&lt;');
  n = n.replace(/>/g, '&gt;');
  n = n.replace(/"/g, '&quot;');
  return n;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2hhbmdlcyIsInJldCIsImkiLCJsZW5ndGgiLCJjaGFuZ2UiLCJhZGRlZCIsInB1c2giLCJyZW1vdmVkIiwiZXNjYXBlSFRNTCIsInZhbHVlIiwiam9pbiIsInMiLCJuIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsT0FBTyxDQUFDRyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxRQUFJRSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjs7QUFDQSxRQUFJRSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLE9BQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0FBQ3pCTixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxPQUFUO0FBQ0Q7O0FBRURMLElBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRSxVQUFVLENBQUNKLE1BQU0sQ0FBQ0ssS0FBUixDQUFuQjs7QUFFQSxRQUFJTCxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLFFBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0FBQ3pCTixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxRQUFUO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPTCxHQUFHLENBQUNTLElBQUosQ0FBUyxFQUFULENBQVA7QUFDRDs7QUFFRCxTQUFTRixVQUFULENBQW9CRyxDQUFwQixFQUF1QjtBQUNyQixNQUFJQyxDQUFDLEdBQUdELENBQVI7QUFDQUMsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE9BQWhCLENBQUo7QUFDQUQsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLFFBQWhCLENBQUo7QUFFQSxTQUFPRCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb1hNTChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUhUTUwocykge1xuICBsZXQgbiA9IHM7XG4gIG4gPSBuLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICBuID0gbi5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbiAgcmV0dXJuIG47XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/diff/array.js":
/*!*********************************************!*\
  !*** ./node_modules/diff/lib/diff/array.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffArrays = diffArrays;
exports.arrayDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var arrayDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.arrayDiff = arrayDiff;

/*istanbul ignore end*/
arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

function diffArrays(oldArr, newArr, callback) {
  return arrayDiff.diff(oldArr, newArr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RGlmZiIsIkRpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic2xpY2UiLCJqb2luIiwicmVtb3ZlRW1wdHkiLCJkaWZmQXJyYXlzIiwib2xkQXJyIiwibmV3QXJyIiwiY2FsbGJhY2siLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUFsQjs7Ozs7O0FBQ1BELFNBQVMsQ0FBQ0UsUUFBVixHQUFxQixVQUFTQyxLQUFULEVBQWdCO0FBQ25DLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixFQUFQO0FBQ0QsQ0FGRDs7QUFHQUosU0FBUyxDQUFDSyxJQUFWLEdBQWlCTCxTQUFTLENBQUNNLFdBQVYsR0FBd0IsVUFBU0gsS0FBVCxFQUFnQjtBQUN2RCxTQUFPQSxLQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSSxVQUFULENBQW9CQyxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUUsU0FBT1YsU0FBUyxDQUFDVyxJQUFWLENBQWVILE1BQWYsRUFBdUJDLE1BQXZCLEVBQStCQyxRQUEvQixDQUFQO0FBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGFycmF5RGlmZiA9IG5ldyBEaWZmKCk7XG5hcnJheURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc2xpY2UoKTtcbn07XG5hcnJheURpZmYuam9pbiA9IGFycmF5RGlmZi5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQXJyYXlzKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjaykgeyByZXR1cm4gYXJyYXlEaWZmLmRpZmYob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKTsgfVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/diff/base.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/base.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Diff;

/*istanbul ignore end*/
function Diff() {}

Diff.prototype = {
  /*istanbul ignore start*/

  /*istanbul ignore end*/
  diff: function diff(oldString, newString) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{
      newPos: -1,
      components: []
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Main worker method. checks all permutations of a given edit length for acceptance.


    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath =
        /*istanbul ignore start*/
        void 0
        /*istanbul ignore end*/
        ;

        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph


        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list

          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          // This should not happen, but we want to be safe.

          /* istanbul ignore next */
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];

    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = {
        count: last.count + 1,
        added: added,
        removed: removed
      };
    } else {
      components.push({
        count: 1,
        added: added,
        removed: removed
      });
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({
        count: commonCount
      });
    }

    basePath.newPos = newPos;
    return oldPos;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  castInput: function castInput(value) {
    return value;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  tokenize: function tokenize(value) {
    return value.split('');
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var lastComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return {
    newPos: path.newPos,
    components: path.components.slice(0)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJzcGxpdCIsImNoYXJzIiwiY29tcG9uZW50UG9zIiwiY29tcG9uZW50TGVuIiwiY29tcG9uZW50Iiwic2xpY2UiLCJtYXAiLCJvbGRWYWx1ZSIsInRtcCIsImxhc3RDb21wb25lbnQiLCJwb3AiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZSxTQUFTQSxJQUFULEdBQWdCLENBQUU7O0FBRWpDQSxJQUFJLENBQUNDLFNBQUwsR0FBaUI7QUFBQTs7QUFBQTtBQUNmQyxFQUFBQSxJQURlLGdCQUNWQyxTQURVLEVBQ0NDLFNBREQsRUFDMEI7QUFBQTtBQUFBO0FBQUE7QUFBZEMs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QUcsQ0FBZixJQUNHLE9BQU9NLGFBQWEsQ0FBQ3JELEtBQXJCLEtBQStCLFFBRGxDLEtBRUlxRCxhQUFhLENBQUN0QixLQUFkLElBQXVCc0IsYUFBYSxDQUFDckIsT0FGekMsS0FHR3ZDLElBQUksQ0FBQzJDLE1BQUwsQ0FBWSxFQUFaLEVBQWdCaUIsYUFBYSxDQUFDckQsS0FBOUIsQ0FIUCxFQUc2QztBQUMzQ2EsSUFBQUEsVUFBVSxDQUFDa0MsWUFBWSxHQUFHLENBQWhCLENBQVYsQ0FBNkIvQyxLQUE3QixJQUFzQ3FELGFBQWEsQ0FBQ3JELEtBQXBEO0FBQ0FhLElBQUFBLFVBQVUsQ0FBQ3lDLEdBQVg7QUFDRDs7QUFFRCxTQUFPekMsVUFBUDtBQUNEOztBQUVELFNBQVNZLFNBQVQsQ0FBbUI4QixJQUFuQixFQUF5QjtBQUN2QixTQUFPO0FBQUUzQyxJQUFBQSxNQUFNLEVBQUUyQyxJQUFJLENBQUMzQyxNQUFmO0FBQXVCQyxJQUFBQSxVQUFVLEVBQUUwQyxJQUFJLENBQUMxQyxVQUFMLENBQWdCb0MsS0FBaEIsQ0FBc0IsQ0FBdEI7QUFBbkMsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlmZigpIHt9XG5cbkRpZmYucHJvdG90eXBlID0ge1xuICBkaWZmKG9sZFN0cmluZywgbmV3U3RyaW5nLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpOyB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgc3ViY2xhc3NlcyB0byBtYXNzYWdlIHRoZSBpbnB1dCBwcmlvciB0byBydW5uaW5nXG4gICAgb2xkU3RyaW5nID0gdGhpcy5jYXN0SW5wdXQob2xkU3RyaW5nKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChuZXdTdHJpbmcpO1xuXG4gICAgb2xkU3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG9sZFN0cmluZykpO1xuICAgIG5ld1N0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShuZXdTdHJpbmcpKTtcblxuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLCBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoO1xuICAgIGxldCBlZGl0TGVuZ3RoID0gMTtcbiAgICBsZXQgbWF4RWRpdExlbmd0aCA9IG5ld0xlbiArIG9sZExlbjtcbiAgICBsZXQgYmVzdFBhdGggPSBbeyBuZXdQb3M6IC0xLCBjb21wb25lbnRzOiBbXSB9XTtcblxuICAgIC8vIFNlZWQgZWRpdExlbmd0aCA9IDAsIGkuZS4gdGhlIGNvbnRlbnQgc3RhcnRzIHdpdGggdGhlIHNhbWUgdmFsdWVzXG4gICAgbGV0IG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuICAgIGlmIChiZXN0UGF0aFswXS5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICByZXR1cm4gZG9uZShbe3ZhbHVlOiB0aGlzLmpvaW4obmV3U3RyaW5nKSwgY291bnQ6IG5ld1N0cmluZy5sZW5ndGh9XSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiB3b3JrZXIgbWV0aG9kLiBjaGVja3MgYWxsIHBlcm11dGF0aW9ucyBvZiBhIGdpdmVuIGVkaXQgbGVuZ3RoIGZvciBhY2NlcHRhbmNlLlxuICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgZm9yIChsZXQgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcbiAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICBsZXQgYWRkUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdLFxuICAgICAgICAgICAgcmVtb3ZlUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCArIDFdLFxuICAgICAgICAgICAgb2xkUG9zID0gKHJlbW92ZVBhdGggPyByZW1vdmVQYXRoLm5ld1BvcyA6IDApIC0gZGlhZ29uYWxQYXRoO1xuICAgICAgICBpZiAoYWRkUGF0aCkge1xuICAgICAgICAgIC8vIE5vIG9uZSBlbHNlIGlzIGdvaW5nIHRvIGF0dGVtcHQgdG8gdXNlIHRoaXMgdmFsdWUsIGNsZWFyIGl0XG4gICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuQWRkID0gYWRkUGF0aCAmJiBhZGRQYXRoLm5ld1BvcyArIDEgPCBuZXdMZW4sXG4gICAgICAgICAgICBjYW5SZW1vdmUgPSByZW1vdmVQYXRoICYmIDAgPD0gb2xkUG9zICYmIG9sZFBvcyA8IG9sZExlbjtcbiAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgIC8vIElmIHRoaXMgcGF0aCBpcyBhIHRlcm1pbmFsIHRoZW4gcHJ1bmVcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgLy8gcGF0aCB3aG9zZSBwb3NpdGlvbiBpbiB0aGUgbmV3IHN0cmluZyBpcyB0aGUgZmFydGhlc3QgZnJvbSB0aGUgb3JpZ2luXG4gICAgICAgIC8vIGFuZCBkb2VzIG5vdCBwYXNzIHRoZSBib3VuZHMgb2YgdGhlIGRpZmYgZ3JhcGhcbiAgICAgICAgaWYgKCFjYW5BZGQgfHwgKGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSkge1xuICAgICAgICAgIGJhc2VQYXRoID0gY2xvbmVQYXRoKHJlbW92ZVBhdGgpO1xuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2VQYXRoID0gYWRkUGF0aDsgLy8gTm8gbmVlZCB0byBjbG9uZSwgd2UndmUgcHVsbGVkIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICBiYXNlUGF0aC5uZXdQb3MrKztcbiAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdHJ1ZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZFBvcyA9IHNlbGYuZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCk7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiBib3RoIHN0cmluZ3MsIHRoZW4gd2UgYXJlIGRvbmVcbiAgICAgICAgaWYgKGJhc2VQYXRoLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUoYnVpbGRWYWx1ZXMoc2VsZiwgYmFzZVBhdGguY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHNlbGYudXNlTG9uZ2VzdFRva2VuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHRyYWNrIHRoaXMgcGF0aCBhcyBhIHBvdGVudGlhbCBjYW5kaWRhdGUgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlZGl0TGVuZ3RoKys7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcbiAgICAvLyBzeW5jIGFuZCBhc3luYyBtb2RlIHdoaWNoIGlzIG5ldmVyIGZ1bi4gTG9vcHMgb3ZlciBleGVjRWRpdExlbmd0aCB1bnRpbCBhIHZhbHVlXG4gICAgLy8gaXMgcHJvZHVjZWQuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAoZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgd2Ugd2FudCB0byBiZSBzYWZlLlxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgaWYgKGVkaXRMZW5ndGggPiBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV4ZWNFZGl0TGVuZ3RoKCkpIHtcbiAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGVkaXRMZW5ndGggPD0gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICBsZXQgcmV0ID0gZXhlY0VkaXRMZW5ndGgoKTtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcHVzaENvbXBvbmVudChjb21wb25lbnRzLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgIGxldCBsYXN0ID0gY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcbiAgICAgIC8vIGFzIHNoYWxsb3cgYXJyYXkgY2xvbmVcbiAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtjb3VudDogbGFzdC5jb3VudCArIDEsIGFkZGVkOiBhZGRlZCwgcmVtb3ZlZDogcmVtb3ZlZCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnRzLnB1c2goe2NvdW50OiAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfSk7XG4gICAgfVxuICB9LFxuICBleHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKSB7XG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGgsXG4gICAgICAgIG5ld1BvcyA9IGJhc2VQYXRoLm5ld1BvcyxcbiAgICAgICAgb2xkUG9zID0gbmV3UG9zIC0gZGlhZ29uYWxQYXRoLFxuXG4gICAgICAgIGNvbW1vbkNvdW50ID0gMDtcbiAgICB3aGlsZSAobmV3UG9zICsgMSA8IG5ld0xlbiAmJiBvbGRQb3MgKyAxIDwgb2xkTGVuICYmIHRoaXMuZXF1YWxzKG5ld1N0cmluZ1tuZXdQb3MgKyAxXSwgb2xkU3RyaW5nW29sZFBvcyArIDFdKSkge1xuICAgICAgbmV3UG9zKys7XG4gICAgICBvbGRQb3MrKztcbiAgICAgIGNvbW1vbkNvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKGNvbW1vbkNvdW50KSB7XG4gICAgICBiYXNlUGF0aC5jb21wb25lbnRzLnB1c2goe2NvdW50OiBjb21tb25Db3VudH0pO1xuICAgIH1cblxuICAgIGJhc2VQYXRoLm5ld1BvcyA9IG5ld1BvcztcbiAgICByZXR1cm4gb2xkUG9zO1xuICB9LFxuXG4gIGVxdWFscyhsZWZ0LCByaWdodCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0XG4gICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICBsZXQgcmV0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycmF5W2ldKSB7XG4gICAgICAgIHJldC5wdXNoKGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgY2FzdElucHV0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICB0b2tlbml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJyk7XG4gIH0sXG4gIGpvaW4oY2hhcnMpIHtcbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGJ1aWxkVmFsdWVzKGRpZmYsIGNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCB1c2VMb25nZXN0VG9rZW4pIHtcbiAgbGV0IGNvbXBvbmVudFBvcyA9IDAsXG4gICAgICBjb21wb25lbnRMZW4gPSBjb21wb25lbnRzLmxlbmd0aCxcbiAgICAgIG5ld1BvcyA9IDAsXG4gICAgICBvbGRQb3MgPSAwO1xuXG4gIGZvciAoOyBjb21wb25lbnRQb3MgPCBjb21wb25lbnRMZW47IGNvbXBvbmVudFBvcysrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24odmFsdWUsIGkpIHtcbiAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBvbGRTdHJpbmdbb2xkUG9zICsgaV07XG4gICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbih2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4obmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICB9XG4gICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuXG4gICAgICAvLyBDb21tb24gY2FzZVxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cbiAgICAgIGlmIChjb21wb25lbnRQb3MgJiYgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXS5hZGRlZCkge1xuICAgICAgICBsZXQgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXSA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3NdID0gdG1wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQgKGkuZS4gd2hpdGVzcGFjZSkuXG4gIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cbiAgbGV0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuICBpZiAoY29tcG9uZW50TGVuID4gMVxuICAgICAgJiYgdHlwZW9mIGxhc3RDb21wb25lbnQudmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAmJiAobGFzdENvbXBvbmVudC5hZGRlZCB8fCBsYXN0Q29tcG9uZW50LnJlbW92ZWQpXG4gICAgICAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgY29tcG9uZW50cy5wb3AoKTtcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICByZXR1cm4geyBuZXdQb3M6IHBhdGgubmV3UG9zLCBjb21wb25lbnRzOiBwYXRoLmNvbXBvbmVudHMuc2xpY2UoMCkgfTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/diff/character.js":
/*!*************************************************!*\
  !*** ./node_modules/diff/lib/diff/character.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffChars = diffChars;
exports.characterDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var characterDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.characterDiff = characterDiff;

/*istanbul ignore end*/
function diffChars(oldStr, newStr, options) {
  return characterDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJEaWZmIiwiRGlmZiIsImRpZmZDaGFycyIsIm9sZFN0ciIsIm5ld1N0ciIsIm9wdGlvbnMiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxJQUFNQSxhQUFhLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUF0Qjs7Ozs7O0FBQ0EsU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUFFLFNBQU9MLGFBQWEsQ0FBQ00sSUFBZCxDQUFtQkgsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxDQUFQO0FBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykgeyByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTsgfVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/diff/css.js":
/*!*******************************************!*\
  !*** ./node_modules/diff/lib/diff/css.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffCss = diffCss;
exports.cssDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var cssDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.cssDiff = cssDiff;

/*istanbul ignore end*/
cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function diffCss(oldStr, newStr, callback) {
  return cssDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJjc3NEaWZmIiwiRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsImRpZmZDc3MiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUVPLElBQU1BLE9BQU8sR0FBRztBQUFJQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxDQUFKLEVBQWhCOzs7Ozs7QUFDUEQsT0FBTyxDQUFDRSxRQUFSLEdBQW1CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakMsU0FBT0EsS0FBSyxDQUFDQyxLQUFOLENBQVksZUFBWixDQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTQyxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQUUsU0FBT1IsT0FBTyxDQUFDUyxJQUFSLENBQWFILE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQyxRQUE3QixDQUFQO0FBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNzc0RpZmYgPSBuZXcgRGlmZigpO1xuY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvKFt7fTo7LF18XFxzKykvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ3NzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gY3NzRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/diff/json.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/json.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffJson = diffJson;
exports.canonicalize = canonicalize;
exports.jsonDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_line = __webpack_require__(/*! ./line */ "./node_modules/diff/lib/diff/line.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*istanbul ignore end*/
var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
](); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

/*istanbul ignore start*/
exports.jsonDiff = jsonDiff;

/*istanbul ignore end*/
jsonDiff.useLongestToken = true;
jsonDiff.tokenize =
/*istanbul ignore start*/
_line
/*istanbul ignore end*/
.
/*istanbul ignore start*/
lineDiff
/*istanbul ignore end*/
.tokenize;

jsonDiff.castInput = function (value) {
  /*istanbul ignore start*/
  var _this$options =
  /*istanbul ignore end*/
  this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v)
  /*istanbul ignore start*/
  {
    return (
      /*istanbul ignore end*/
      typeof v === 'undefined' ? undefinedReplacement : v
    );
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return (
    /*istanbul ignore start*/
    _base
    /*istanbul ignore end*/
    [
    /*istanbul ignore start*/
    "default"
    /*istanbul ignore end*/
    ].prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
  );
};

function diffJson(oldObj, newObj, options) {
  return jsonDiff.diff(oldObj, newObj, options);
} // This function handles the presence of circular references by bailing out when encountering an
// object that is already on the "stack" of items being processed. Accepts an optional replacer


function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (
  /*istanbul ignore start*/
  _typeof(
  /*istanbul ignore end*/
  obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsib2JqZWN0UHJvdG90eXBlVG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImpzb25EaWZmIiwiRGlmZiIsInVzZUxvbmdlc3RUb2tlbiIsInRva2VuaXplIiwibGluZURpZmYiLCJjYXN0SW5wdXQiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJ1bmRlZmluZWRSZXBsYWNlbWVudCIsInN0cmluZ2lmeVJlcGxhY2VyIiwiayIsInYiLCJKU09OIiwic3RyaW5naWZ5IiwiY2Fub25pY2FsaXplIiwiZXF1YWxzIiwibGVmdCIsInJpZ2h0IiwiY2FsbCIsInJlcGxhY2UiLCJkaWZmSnNvbiIsIm9sZE9iaiIsIm5ld09iaiIsImRpZmYiLCJvYmoiLCJzdGFjayIsInJlcGxhY2VtZW50U3RhY2siLCJyZXBsYWNlciIsImtleSIsImkiLCJsZW5ndGgiLCJjYW5vbmljYWxpemVkT2JqIiwicHVzaCIsIkFycmF5IiwicG9wIiwidG9KU09OIiwic29ydGVkS2V5cyIsImhhc093blByb3BlcnR5Iiwic29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqRDtBQUdPLElBQU1DLFFBQVEsR0FBRztBQUFJQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxDQUFKLEVBQWpCLEMsQ0FDUDtBQUNBOzs7Ozs7QUFDQUQsUUFBUSxDQUFDRSxlQUFULEdBQTJCLElBQTNCO0FBRUFGLFFBQVEsQ0FBQ0csUUFBVDtBQUFvQkM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQTtBQUFBLENBQVNELFFBQTdCOztBQUNBSCxRQUFRLENBQUNLLFNBQVQsR0FBcUIsVUFBU0MsS0FB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Z0IsR0FBR1AsR0FBbkI7QUFDRDs7QUFDRCxTQUFPTyxnQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7bGluZURpZmZ9IGZyb20gJy4vbGluZSc7XG5cbmNvbnN0IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXG5leHBvcnQgY29uc3QganNvbkRpZmYgPSBuZXcgRGlmZigpO1xuLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbi8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxuanNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcblxuanNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcbmpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHt1bmRlZmluZWRSZXBsYWNlbWVudCwgc3RyaW5naWZ5UmVwbGFjZXIgPSAoaywgdikgPT4gdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkUmVwbGFjZW1lbnQgOiB2fSA9IHRoaXMub3B0aW9ucztcblxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykgeyByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7IH1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4vLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLiBBY2NlcHRzIGFuIG9wdGlvbmFsIHJlcGxhY2VyXG5leHBvcnQgZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpIHtcbiAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgaWYgKHJlcGxhY2VyKSB7XG4gICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICB9XG5cbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjYW5vbmljYWxpemVkT2JqO1xuXG4gIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG4gICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KTtcbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcbiAgICBsZXQgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICBrZXk7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNvcnRlZEtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAga2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpba2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpba2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gIH1cbiAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/diff/line.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/line.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffLines = diffLines;
exports.diffTrimmedLines = diffTrimmedLines;
exports.lineDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = __webpack_require__(/*! ../util/params */ "./node_modules/diff/lib/util/params.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var lineDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.lineDiff = lineDiff;

/*istanbul ignore end*/
lineDiff.tokenize = function (value) {
  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

function diffTrimmedLines(oldStr, newStr, callback) {
  var options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (callback, {
    ignoreWhitespace: true
  });
  return lineDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsibGluZURpZmYiLCJEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJkaWZmTGluZXMiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiLCJkaWZmVHJpbW1lZExpbmVzIiwiZ2VuZXJhdGVPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxJQUFNQSxRQUFRLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUFqQjs7Ozs7O0FBQ1BELFFBQVEsQ0FBQ0UsUUFBVCxHQUFvQixVQUFTQyxLQUFULEVBQWdCO0FBQ2xDLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQUEsTUFDSUMsZ0JBQWdCLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZLFdBQVosQ0FEdkIsQ0FEa0MsQ0FJbEM7O0FBQ0EsTUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQ0EsZ0JBQWdCLENBQUNFLE1BQWpCLEdBQTBCLENBQTNCLENBQXJCLEVBQW9EO0FBQ2xERixJQUFBQSxnQkFBZ0IsQ0FBQ0csR0FBakI7QUFDRCxHQVBpQyxDQVNsQzs7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixnQkFBZ0IsQ0FBQ0UsTUFBckMsRUFBNkNFLENBQUMsRUFBOUMsRUFBa0Q7QUFDaEQsUUFBSUMsSUFBSSxHQUFHTCxnQkFBZ0IsQ0FBQ0ksQ0FBRCxDQUEzQjs7QUFFQSxRQUFJQSxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQUMsS0FBS0UsT0FBTCxDQUFhQyxjQUEzQixFQUEyQztBQUN6Q1IsTUFBQUEsUUFBUSxDQUFDQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBbkIsQ0FBUixJQUFpQ0csSUFBakM7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLEtBQUtDLE9BQUwsQ0FBYUUsZ0JBQWpCLEVBQW1DO0FBQ2pDSCxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksSUFBTCxFQUFQO0FBQ0Q7O0FBQ0RWLE1BQUFBLFFBQVEsQ0FBQ1csSUFBVCxDQUFjTCxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixRQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJPLFNBQVNZLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkM7QUFBRSxTQUFPbkIsUUFBUSxDQUFDb0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QkMsUUFBOUIsQ0FBUDtBQUFpRDs7QUFDaEcsU0FBU0UsZ0JBQVQsQ0FBMEJKLE1BQTFCLEVBQWtDQyxNQUFsQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDekQsTUFBSVIsT0FBTztBQUFHO0FBQUE7QUFBQTs7QUFBQVc7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQTtBQUFBLEdBQWdCSCxRQUFoQixFQUEwQjtBQUFDTixJQUFBQSxnQkFBZ0IsRUFBRTtBQUFuQixHQUExQixDQUFkO0FBQ0EsU0FBT2IsUUFBUSxDQUFDb0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QlAsT0FBOUIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XG5saW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGxldCByZXRMaW5lcyA9IFtdLFxuICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTtcblxuICAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcbiAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICB9XG5cbiAgLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICB9XG4gICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICBsZXQgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/diff/sentence.js":
/*!************************************************!*\
  !*** ./node_modules/diff/lib/diff/sentence.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffSentences = diffSentences;
exports.sentenceDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var sentenceDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.sentenceDiff = sentenceDiff;

/*istanbul ignore end*/
sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

function diffSentences(oldStr, newStr, callback) {
  return sentenceDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbInNlbnRlbmNlRGlmZiIsIkRpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJkaWZmU2VudGVuY2VzIiwib2xkU3RyIiwibmV3U3RyIiwiY2FsbGJhY2siLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFHTyxJQUFNQSxZQUFZLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUFyQjs7Ozs7O0FBQ1BELFlBQVksQ0FBQ0UsUUFBYixHQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixDQUFZLHVCQUFaLENBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNDLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCQyxNQUEvQixFQUF1Q0MsUUFBdkMsRUFBaUQ7QUFBRSxTQUFPUixZQUFZLENBQUNTLElBQWIsQ0FBa0JILE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsUUFBbEMsQ0FBUDtBQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/diff/word.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/word.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffWords = diffWords;
exports.diffWordsWithSpace = diffWordsWithSpace;
exports.wordDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = __webpack_require__(/*! ../util/params */ "./node_modules/diff/lib/util/params.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.wordDiff = wordDiff;

/*istanbul ignore end*/
wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

function diffWords(oldStr, newStr, options) {
  options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (options, {
    ignoreWhitespace: true
  });
  return wordDiff.diff(oldStr, newStr, options);
}

function diffWordsWithSpace(oldStr, newStr, options) {
  return wordDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsIkRpZmYiLCJlcXVhbHMiLCJsZWZ0IiwicmlnaHQiLCJvcHRpb25zIiwiaWdub3JlQ2FzZSIsInRvTG93ZXJDYXNlIiwiaWdub3JlV2hpdGVzcGFjZSIsInRlc3QiLCJ0b2tlbml6ZSIsInZhbHVlIiwidG9rZW5zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiZGlmZldvcmRzIiwib2xkU3RyIiwibmV3U3RyIiwiZ2VuZXJhdGVPcHRpb25zIiwiZGlmZiIsImRpZmZXb3Jkc1dpdGhTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsK0RBQTFCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLElBQXJCO0FBRU8sSUFBTUMsUUFBUSxHQUFHO0FBQUlDO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLENBQUosRUFBakI7Ozs7OztBQUNQRCxRQUFRLENBQUNFLE1BQVQsR0FBa0IsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3RDLE1BQUksS0FBS0MsT0FBTCxDQUFhQyxVQUFqQixFQUE2QjtBQUMzQkgsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLFdBQUwsRUFBUDtBQUNBSCxJQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csV0FBTixFQUFSO0FBQ0Q7O0FBQ0QsU0FBT0osSUFBSSxLQUFLQyxLQUFULElBQW1CLEtBQUtDLE9BQUwsQ0FBYUcsZ0JBQWIsSUFBaUMsQ0FBQ1QsWUFBWSxDQUFDVSxJQUFiLENBQWtCTixJQUFsQixDQUFsQyxJQUE2RCxDQUFDSixZQUFZLENBQUNVLElBQWIsQ0FBa0JMLEtBQWxCLENBQXhGO0FBQ0QsQ0FORDs7QUFPQUosUUFBUSxDQUFDVSxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEM7QUFDQSxNQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLGlDQUFaLENBQWIsQ0FGa0MsQ0FJbEM7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsQ0FBcEMsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUM7QUFDQSxRQUFJLENBQUNGLE1BQU0sQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBUCxJQUFrQkYsTUFBTSxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUF4QixJQUNLaEIsaUJBQWlCLENBQUNXLElBQWxCLENBQXVCRyxNQUFNLENBQUNFLENBQUQsQ0FBN0IsQ0FETCxJQUVLaEIsaUJBQWlCLENBQUNXLElBQWxCLENBQXVCRyxNQUFNLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQTdCLENBRlQsRUFFZ0Q7QUFDOUNGLE1BQUFBLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFOLElBQWFGLE1BQU0sQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBbkI7QUFDQUYsTUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNGLENBQUMsR0FBRyxDQUFsQixFQUFxQixDQUFyQjtBQUNBQSxNQUFBQSxDQUFDO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPRixNQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJPLFNBQVNLLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ2QsT0FBbkMsRUFBNEM7QUFDakRBLEVBQUFBLE9BQU87QUFBRztBQUFBO0FBQUE7O0FBQUFlO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxHQUFnQmYsT0FBaEIsRUFBeUI7QUFBQ0csSUFBQUEsZ0JBQWdCLEVBQUU7QUFBbkIsR0FBekIsQ0FBVjtBQUNBLFNBQU9SLFFBQVEsQ0FBQ3FCLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEJkLE9BQTlCLENBQVA7QUFDRDs7QUFFTSxTQUFTaUIsa0JBQVQsQ0FBNEJKLE1BQTVCLEVBQW9DQyxNQUFwQyxFQUE0Q2QsT0FBNUMsRUFBcUQ7QUFDMUQsU0FBT0wsUUFBUSxDQUFDcUIsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmQsT0FBOUIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluX3NjcmlwdF9pbl9Vbmljb2RlXG4vL1xuLy8gUmFuZ2VzIGFuZCBleGNlcHRpb25zOlxuLy8gTGF0aW4tMSBTdXBwbGVtZW50LCAwMDgw4oCTMDBGRlxuLy8gIC0gVSswMEQ3ICDDlyBNdWx0aXBsaWNhdGlvbiBzaWduXG4vLyAgLSBVKzAwRjcgIMO3IERpdmlzaW9uIHNpZ25cbi8vIExhdGluIEV4dGVuZGVkLUEsIDAxMDDigJMwMTdGXG4vLyBMYXRpbiBFeHRlbmRlZC1CLCAwMTgw4oCTMDI0RlxuLy8gSVBBIEV4dGVuc2lvbnMsIDAyNTDigJMwMkFGXG4vLyBTcGFjaW5nIE1vZGlmaWVyIExldHRlcnMsIDAyQjDigJMwMkZGXG4vLyAgLSBVKzAyQzcgIMuHICYjNzExOyAgQ2Fyb25cbi8vICAtIFUrMDJEOCAgy5ggJiM3Mjg7ICBCcmV2ZVxuLy8gIC0gVSswMkQ5ICDLmSAmIzcyOTsgIERvdCBBYm92ZVxuLy8gIC0gVSswMkRBICDLmiAmIzczMDsgIFJpbmcgQWJvdmVcbi8vICAtIFUrMDJEQiAgy5sgJiM3MzE7ICBPZ29uZWtcbi8vICAtIFUrMDJEQyAgy5wgJiM3MzI7ICBTbWFsbCBUaWxkZVxuLy8gIC0gVSswMkREICDLnSAmIzczMzsgIERvdWJsZSBBY3V0ZSBBY2NlbnRcbi8vIExhdGluIEV4dGVuZGVkIEFkZGl0aW9uYWwsIDFFMDDigJMxRUZGXG5jb25zdCBleHRlbmRlZFdvcmRDaGFycyA9IC9eW2EtekEtWlxcdXtDMH0tXFx1e0ZGfVxcdXtEOH0tXFx1e0Y2fVxcdXtGOH0tXFx1ezJDNn1cXHV7MkM4fS1cXHV7MkQ3fVxcdXsyREV9LVxcdXsyRkZ9XFx1ezFFMDB9LVxcdXsxRUZGfV0rJC91O1xuXG5jb25zdCByZVdoaXRlc3BhY2UgPSAvXFxTLztcblxuZXhwb3J0IGNvbnN0IHdvcmREaWZmID0gbmV3IERpZmYoKTtcbndvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSkge1xuICAgIGxlZnQgPSBsZWZ0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmlnaHQgPSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCkpO1xufTtcbndvcmREaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gQWxsIHdoaXRlc3BhY2Ugc3ltYm9scyBleGNlcHQgbmV3bGluZSBncm91cCBpbnRvIG9uZSB0b2tlbiwgZWFjaCBuZXdsaW5lIC0gaW4gc2VwYXJhdGUgdG9rZW5cbiAgbGV0IHRva2VucyA9IHZhbHVlLnNwbGl0KC8oW15cXFNcXHJcXG5dK3xbKClbXFxde30nXCJcXHJcXG5dfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/diff/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Diff", ({
  enumerable: true,
  get: function get() {
    return _base["default"];
  }
}));
Object.defineProperty(exports, "diffChars", ({
  enumerable: true,
  get: function get() {
    return _character.diffChars;
  }
}));
Object.defineProperty(exports, "diffWords", ({
  enumerable: true,
  get: function get() {
    return _word.diffWords;
  }
}));
Object.defineProperty(exports, "diffWordsWithSpace", ({
  enumerable: true,
  get: function get() {
    return _word.diffWordsWithSpace;
  }
}));
Object.defineProperty(exports, "diffLines", ({
  enumerable: true,
  get: function get() {
    return _line.diffLines;
  }
}));
Object.defineProperty(exports, "diffTrimmedLines", ({
  enumerable: true,
  get: function get() {
    return _line.diffTrimmedLines;
  }
}));
Object.defineProperty(exports, "diffSentences", ({
  enumerable: true,
  get: function get() {
    return _sentence.diffSentences;
  }
}));
Object.defineProperty(exports, "diffCss", ({
  enumerable: true,
  get: function get() {
    return _css.diffCss;
  }
}));
Object.defineProperty(exports, "diffJson", ({
  enumerable: true,
  get: function get() {
    return _json.diffJson;
  }
}));
Object.defineProperty(exports, "canonicalize", ({
  enumerable: true,
  get: function get() {
    return _json.canonicalize;
  }
}));
Object.defineProperty(exports, "diffArrays", ({
  enumerable: true,
  get: function get() {
    return _array.diffArrays;
  }
}));
Object.defineProperty(exports, "applyPatch", ({
  enumerable: true,
  get: function get() {
    return _apply.applyPatch;
  }
}));
Object.defineProperty(exports, "applyPatches", ({
  enumerable: true,
  get: function get() {
    return _apply.applyPatches;
  }
}));
Object.defineProperty(exports, "parsePatch", ({
  enumerable: true,
  get: function get() {
    return _parse.parsePatch;
  }
}));
Object.defineProperty(exports, "merge", ({
  enumerable: true,
  get: function get() {
    return _merge.merge;
  }
}));
Object.defineProperty(exports, "structuredPatch", ({
  enumerable: true,
  get: function get() {
    return _create.structuredPatch;
  }
}));
Object.defineProperty(exports, "createTwoFilesPatch", ({
  enumerable: true,
  get: function get() {
    return _create.createTwoFilesPatch;
  }
}));
Object.defineProperty(exports, "createPatch", ({
  enumerable: true,
  get: function get() {
    return _create.createPatch;
  }
}));
Object.defineProperty(exports, "convertChangesToDMP", ({
  enumerable: true,
  get: function get() {
    return _dmp.convertChangesToDMP;
  }
}));
Object.defineProperty(exports, "convertChangesToXML", ({
  enumerable: true,
  get: function get() {
    return _xml.convertChangesToXML;
  }
}));

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./diff/base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_character = __webpack_require__(/*! ./diff/character */ "./node_modules/diff/lib/diff/character.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_word = __webpack_require__(/*! ./diff/word */ "./node_modules/diff/lib/diff/word.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_line = __webpack_require__(/*! ./diff/line */ "./node_modules/diff/lib/diff/line.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_sentence = __webpack_require__(/*! ./diff/sentence */ "./node_modules/diff/lib/diff/sentence.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_css = __webpack_require__(/*! ./diff/css */ "./node_modules/diff/lib/diff/css.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_json = __webpack_require__(/*! ./diff/json */ "./node_modules/diff/lib/diff/json.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_array = __webpack_require__(/*! ./diff/array */ "./node_modules/diff/lib/diff/array.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_apply = __webpack_require__(/*! ./patch/apply */ "./node_modules/diff/lib/patch/apply.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_parse = __webpack_require__(/*! ./patch/parse */ "./node_modules/diff/lib/patch/parse.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_merge = __webpack_require__(/*! ./patch/merge */ "./node_modules/diff/lib/patch/merge.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_create = __webpack_require__(/*! ./patch/create */ "./node_modules/diff/lib/patch/create.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_dmp = __webpack_require__(/*! ./convert/dmp */ "./node_modules/diff/lib/convert/dmp.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_xml = __webpack_require__(/*! ./convert/xml */ "./node_modules/diff/lib/convert/xml.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgTElDRU5TRSBmaWxlIGZvciB0ZXJtcyBvZiB1c2UgKi9cblxuLypcbiAqIFRleHQgZGlmZiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGxpYnJhcnkgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBBUElTOlxuICogSnNEaWZmLmRpZmZDaGFyczogQ2hhcmFjdGVyIGJ5IGNoYXJhY3RlciBkaWZmXG4gKiBKc0RpZmYuZGlmZldvcmRzOiBXb3JkIChhcyBkZWZpbmVkIGJ5IFxcYiByZWdleCkgZGlmZiB3aGljaCBpZ25vcmVzIHdoaXRlc3BhY2VcbiAqIEpzRGlmZi5kaWZmTGluZXM6IExpbmUgYmFzZWQgZGlmZlxuICpcbiAqIEpzRGlmZi5kaWZmQ3NzOiBEaWZmIHRhcmdldGVkIGF0IENTUyBjb250ZW50XG4gKlxuICogVGhlc2UgbWV0aG9kcyBhcmUgYmFzZWQgb24gdGhlIGltcGxlbWVudGF0aW9uIHByb3Bvc2VkIGluXG4gKiBcIkFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBpdHMgVmFyaWF0aW9uc1wiIChNeWVycywgMTk4NikuXG4gKiBodHRwOi8vY2l0ZXNlZXJ4LmlzdC5wc3UuZWR1L3ZpZXdkb2Mvc3VtbWFyeT9kb2k9MTAuMS4xLjQuNjkyN1xuICovXG5pbXBvcnQgRGlmZiBmcm9tICcuL2RpZmYvYmFzZSc7XG5pbXBvcnQge2RpZmZDaGFyc30gZnJvbSAnLi9kaWZmL2NoYXJhY3Rlcic7XG5pbXBvcnQge2RpZmZXb3JkcywgZGlmZldvcmRzV2l0aFNwYWNlfSBmcm9tICcuL2RpZmYvd29yZCc7XG5pbXBvcnQge2RpZmZMaW5lcywgZGlmZlRyaW1tZWRMaW5lc30gZnJvbSAnLi9kaWZmL2xpbmUnO1xuaW1wb3J0IHtkaWZmU2VudGVuY2VzfSBmcm9tICcuL2RpZmYvc2VudGVuY2UnO1xuXG5pbXBvcnQge2RpZmZDc3N9IGZyb20gJy4vZGlmZi9jc3MnO1xuaW1wb3J0IHtkaWZmSnNvbiwgY2Fub25pY2FsaXplfSBmcm9tICcuL2RpZmYvanNvbic7XG5cbmltcG9ydCB7ZGlmZkFycmF5c30gZnJvbSAnLi9kaWZmL2FycmF5JztcblxuaW1wb3J0IHthcHBseVBhdGNoLCBhcHBseVBhdGNoZXN9IGZyb20gJy4vcGF0Y2gvYXBwbHknO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhdGNoL3BhcnNlJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJy4vcGF0Y2gvbWVyZ2UnO1xuaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2gsIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsIGNyZWF0ZVBhdGNofSBmcm9tICcuL3BhdGNoL2NyZWF0ZSc7XG5cbmltcG9ydCB7Y29udmVydENoYW5nZXNUb0RNUH0gZnJvbSAnLi9jb252ZXJ0L2RtcCc7XG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9YTUx9IGZyb20gJy4vY29udmVydC94bWwnO1xuXG5leHBvcnQge1xuICBEaWZmLFxuXG4gIGRpZmZDaGFycyxcbiAgZGlmZldvcmRzLFxuICBkaWZmV29yZHNXaXRoU3BhY2UsXG4gIGRpZmZMaW5lcyxcbiAgZGlmZlRyaW1tZWRMaW5lcyxcbiAgZGlmZlNlbnRlbmNlcyxcblxuICBkaWZmQ3NzLFxuICBkaWZmSnNvbixcblxuICBkaWZmQXJyYXlzLFxuXG4gIHN0cnVjdHVyZWRQYXRjaCxcbiAgY3JlYXRlVHdvRmlsZXNQYXRjaCxcbiAgY3JlYXRlUGF0Y2gsXG4gIGFwcGx5UGF0Y2gsXG4gIGFwcGx5UGF0Y2hlcyxcbiAgcGFyc2VQYXRjaCxcbiAgbWVyZ2UsXG4gIGNvbnZlcnRDaGFuZ2VzVG9ETVAsXG4gIGNvbnZlcnRDaGFuZ2VzVG9YTUwsXG4gIGNhbm9uaWNhbGl6ZVxufTtcbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/patch/apply.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/patch/apply.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.applyPatch = applyPatch;
exports.applyPatches = applyPatches;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_parse = __webpack_require__(/*! ./parse */ "./node_modules/diff/lib/patch/parse.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_distanceIterator = _interopRequireDefault(__webpack_require__(/*! ../util/distance-iterator */ "./node_modules/diff/lib/util/distance-iterator.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
function applyPatch(source, uniDiff) {
  /*istanbul ignore start*/
  var
  /*istanbul ignore end*/
  options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof uniDiff === 'string') {
    uniDiff =
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _parse
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    parsePatch)
    /*istanbul ignore end*/
    (uniDiff);
  }

  if (Array.isArray(uniDiff)) {
    if (uniDiff.length > 1) {
      throw new Error('applyPatch only works with a single input.');
    }

    uniDiff = uniDiff[0];
  } // Apply the diff to the input


  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      hunks = uniDiff.hunks,
      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent)
  /*istanbul ignore start*/
  {
    return (
      /*istanbul ignore end*/
      line === patchContent
    );
  },
      errorCount = 0,
      fuzzFactor = options.fuzzFactor || 0,
      minLine = 0,
      offset = 0,
      removeEOFNL,
      addEOFNL;
  /**
   * Checks if the hunk exactly fits on the provided location
   */


  function hunkFits(hunk, toPos) {
    for (var j = 0; j < hunk.lines.length; j++) {
      var line = hunk.lines[j],
          operation = line.length > 0 ? line[0] : ' ',
          content = line.length > 0 ? line.substr(1) : line;

      if (operation === ' ' || operation === '-') {
        // Context sanity check
        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
          errorCount++;

          if (errorCount > fuzzFactor) {
            return false;
          }
        }

        toPos++;
      }
    }

    return true;
  } // Search best fit offsets for each hunk based on the previous ones


  for (var i = 0; i < hunks.length; i++) {
    var hunk = hunks[i],
        maxLine = lines.length - hunk.oldLines,
        localOffset = 0,
        toPos = offset + hunk.oldStart - 1;
    var iterator =
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _distanceIterator
    /*istanbul ignore end*/
    [
    /*istanbul ignore start*/
    "default"
    /*istanbul ignore end*/
    ])(toPos, minLine, maxLine);

    for (; localOffset !== undefined; localOffset = iterator()) {
      if (hunkFits(hunk, toPos + localOffset)) {
        hunk.offset = offset += localOffset;
        break;
      }
    }

    if (localOffset === undefined) {
      return false;
    } // Set lower text limit to end of the current hunk, so next ones don't try
    // to fit over already patched text


    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
  } // Apply patch hunks


  var diffOffset = 0;

  for (var _i = 0; _i < hunks.length; _i++) {
    var _hunk = hunks[_i],
        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

    diffOffset += _hunk.newLines - _hunk.oldLines;

    for (var j = 0; j < _hunk.lines.length; j++) {
      var line = _hunk.lines[j],
          operation = line.length > 0 ? line[0] : ' ',
          content = line.length > 0 ? line.substr(1) : line,
          delimiter = _hunk.linedelimiters[j];

      if (operation === ' ') {
        _toPos++;
      } else if (operation === '-') {
        lines.splice(_toPos, 1);
        delimiters.splice(_toPos, 1);
        /* istanbul ignore else */
      } else if (operation === '+') {
        lines.splice(_toPos, 0, content);
        delimiters.splice(_toPos, 0, delimiter);
        _toPos++;
      } else if (operation === '\\') {
        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

        if (previousOperation === '+') {
          removeEOFNL = true;
        } else if (previousOperation === '-') {
          addEOFNL = true;
        }
      }
    }
  } // Handle EOFNL insertion/removal


  if (removeEOFNL) {
    while (!lines[lines.length - 1]) {
      lines.pop();
      delimiters.pop();
    }
  } else if (addEOFNL) {
    lines.push('');
    delimiters.push('\n');
  }

  for (var _k = 0; _k < lines.length - 1; _k++) {
    lines[_k] = lines[_k] + delimiters[_k];
  }

  return lines.join('');
} // Wrapper that supports multiple file patches via callbacks.


function applyPatches(uniDiff, options) {
  if (typeof uniDiff === 'string') {
    uniDiff =
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _parse
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    parsePatch)
    /*istanbul ignore end*/
    (uniDiff);
  }

  var currentIndex = 0;

  function processIndex() {
    var index = uniDiff[currentIndex++];

    if (!index) {
      return options.complete();
    }

    options.loadFile(index, function (err, data) {
      if (err) {
        return options.complete(err);
      }

      var updatedContent = applyPatch(data, index, options);
      options.patched(index, updatedContent, function (err) {
        if (err) {
          return options.complete(err);
        }

        processIndex();
      });
    });
  }

  processIndex();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJwYXJzZVBhdGNoIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiRXJyb3IiLCJsaW5lcyIsInNwbGl0IiwiZGVsaW1pdGVycyIsIm1hdGNoIiwiaHVua3MiLCJjb21wYXJlTGluZSIsImxpbmVOdW1iZXIiLCJsaW5lIiwib3BlcmF0aW9uIiwicGF0Y2hDb250ZW50IiwiZXJyb3JDb3VudCIsImZ1enpGYWN0b3IiLCJtaW5MaW5lIiwib2Zmc2V0IiwicmVtb3ZlRU9GTkwiLCJhZGRFT0ZOTCIsImh1bmtGaXRzIiwiaHVuayIsInRvUG9zIiwiaiIsImNvbnRlbnQiLCJzdWJzdHIiLCJpIiwibWF4TGluZSIsIm9sZExpbmVzIiwibG9jYWxPZmZzZXQiLCJvbGRTdGFydCIsIml0ZXJhdG9yIiwiZGlzdGFuY2VJdGVyYXRvciIsInVuZGVmaW5lZCIsImRpZmZPZmZzZXQiLCJuZXdMaW5lcyIsImRlbGltaXRlciIsImxpbmVkZWxpbWl0ZXJzIiwic3BsaWNlIiwicHJldmlvdXNPcGVyYXRpb24iLCJwb3AiLCJwdXNoIiwiX2siLCJqb2luIiwiYXBwbHlQYXRjaGVzIiwiY3VycmVudEluZGV4IiwicHJvY2Vzc0luZGV4IiwiaW5kZXgiLCJjb21wbGV0ZSIsImxvYWRGaWxlIiwiZXJyIiwiZGF0YSIsInVwZGF0ZWRDb250ZW50IiwicGF0Y2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxTQUFTQSxVQUFULENBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBbUQ7QUFBQTtBQUFBO0FBQUE7QUFBZEMsRUFBQUEsT0FBYyx1RUFBSixFQUFJOztBQUN4RCxNQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLElBQUFBLE9BQU87QUFBRztBQUFBO0FBQUE7O0FBQUFFO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxLQUFXRixPQUFYLENBQVY7QUFDRDs7QUFFRCxNQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osT0FBZCxDQUFKLEVBQTRCO0FBQzFCLFFBQUlBLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUN0QixZQUFNLElBQUlDLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ0Q7O0FBRUROLElBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDLENBQUQsQ0FBakI7QUFDRCxHQVh1RCxDQWF4RDs7O0FBQ0EsTUFBSU8sS0FBSyxHQUFHUixNQUFNLENBQUNTLEtBQVAsQ0FBYSxxQkFBYixDQUFaO0FBQUEsTUFDSUMsVUFBVSxHQUFHVixNQUFNLENBQUNXLEtBQVAsQ0FBYSxzQkFBYixLQUF3QyxFQUR6RDtBQUFBLE1BRUlDLEtBQUssR0FBR1gsT0FBTyxDQUFDVyxLQUZwQjtBQUFBLE1BSUlDLFdBQVcsR0FBR1gsT0FBTyxDQUFDVyxXQUFSLElBQXdCLFVBQUNDLFVBQUQsRUFBYUMsSUFBYixFQUFtQkMsU0FBbkIsRUFBOEJDLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0NGLE1BQUFBLElBQUksS0FBS0U7QUFBeEQ7QUFBQSxHQUoxQztBQUFBLE1BS0lDLFVBQVUsR0FBRyxDQUxqQjtBQUFBLE1BTUlDLFVBQVUsR0FBR2pCLE9BQU8sQ0FBQ2lCLFVBQVIsSUFBc0IsQ0FOdkM7QUFBQSxNQU9JQyxPQUFPLEdBQUcsQ0FQZDtBQUFBLE1BUUlDLE1BQU0sR0FBRyxDQVJiO0FBQUEsTUFVSUMsV0FWSjtBQUFBLE1BV0lDLFFBWEo7QUFhQTs7Ozs7QUFHQSxXQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNqQixLQUFMLENBQVdGLE1BQS9CLEVBQXVDcUIsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxVQUFJWixJQUFJLEdBQUdVLElBQUksQ0FBQ2pCLEtBQUwsQ0FBV21CLENBQVgsQ0FBWDtBQUFBLFVBQ0lYLFNBQVMsR0FBSUQsSUFBSSxDQUFDVCxNQUFMLEdBQWMsQ0FBZCxHQUFrQlMsSUFBSSxDQUFDLENBQUQsQ0FBdEIsR0FBNEIsR0FEN0M7QUFBQSxVQUVJYSxPQUFPLEdBQUliLElBQUksQ0FBQ1QsTUFBTCxHQUFjLENBQWQsR0FBa0JTLElBQUksQ0FBQ2MsTUFBTCxDQUFZLENBQVosQ0FBbEIsR0FBbUNkLElBRmxEOztBQUlBLFVBQUlDLFNBQVMsS0FBSyxHQUFkLElBQXFCQSxTQUFTLEtBQUssR0FBdkMsRUFBNEM7QUFDMUM7QUFDQSxZQUFJLENBQUNILFdBQVcsQ0FBQ2EsS0FBSyxHQUFHLENBQVQsRUFBWWxCLEtBQUssQ0FBQ2tCLEtBQUQsQ0FBakIsRUFBMEJWLFNBQTFCLEVBQXFDWSxPQUFyQyxDQUFoQixFQUErRDtBQUM3RFYsVUFBQUEsVUFBVTs7QUFFVixjQUFJQSxVQUFVLEdBQUdDLFVBQWpCLEVBQTZCO0FBQzNCLG1CQUFPLEtBQVA7QUFDRDtBQUNGOztBQUNETyxRQUFBQSxLQUFLO0FBQ047QUFDRjs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQWxEdUQsQ0FvRHhEOzs7QUFDQSxPQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdsQixLQUFLLENBQUNOLE1BQTFCLEVBQWtDd0IsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxRQUFJTCxJQUFJLEdBQUdiLEtBQUssQ0FBQ2tCLENBQUQsQ0FBaEI7QUFBQSxRQUNJQyxPQUFPLEdBQUd2QixLQUFLLENBQUNGLE1BQU4sR0FBZW1CLElBQUksQ0FBQ08sUUFEbEM7QUFBQSxRQUVJQyxXQUFXLEdBQUcsQ0FGbEI7QUFBQSxRQUdJUCxLQUFLLEdBQUdMLE1BQU0sR0FBR0ksSUFBSSxDQUFDUyxRQUFkLEdBQXlCLENBSHJDO0FBS0EsUUFBSUMsUUFBUTtBQUFHO0FBQUE7QUFBQTs7QUFBQUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsT0FBaUJWLEtBQWpCLEVBQXdCTixPQUF4QixFQUFpQ1csT0FBakMsQ0FBZjs7QUFFQSxXQUFPRSxXQUFXLEtBQUtJLFNBQXZCLEVBQWtDSixXQUFXLEdBQUdFLFFBQVEsRUFBeEQsRUFBNEQ7QUFDMUQsVUFBSVgsUUFBUSxDQUFDQyxJQUFELEVBQU9DLEtBQUssR0FBR08sV0FBZixDQUFaLEVBQXlDO0FBQ3ZDUixRQUFBQSxJQUFJLENBQUNKLE1BQUwsR0FBY0EsTUFBTSxJQUFJWSxXQUF4QjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJQSxXQUFXLEtBQUtJLFNBQXBCLEVBQStCO0FBQzdCLGFBQU8sS0FBUDtBQUNELEtBakJvQyxDQW1CckM7QUFDQTs7O0FBQ0FqQixJQUFBQSxPQUFPLEdBQUdLLElBQUksQ0FBQ0osTUFBTCxHQUFjSSxJQUFJLENBQUNTLFFBQW5CLEdBQThCVCxJQUFJLENBQUNPLFFBQTdDO0FBQ0QsR0EzRXVELENBNkV4RDs7O0FBQ0EsTUFBSU0sVUFBVSxHQUFHLENBQWpCOztBQUNBLE9BQUssSUFBSVIsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR2xCLEtBQUssQ0FBQ04sTUFBMUIsRUFBa0N3QixFQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUlMLEtBQUksR0FBR2IsS0FBSyxDQUFDa0IsRUFBRCxDQUFoQjtBQUFBLFFBQ0lKLE1BQUssR0FBR0QsS0FBSSxDQUFDUyxRQUFMLEdBQWdCVCxLQUFJLENBQUNKLE1BQXJCLEdBQThCaUIsVUFBOUIsR0FBMkMsQ0FEdkQ7O0FBRUFBLElBQUFBLFVBQVUsSUFBSWIsS0FBSSxDQUFDYyxRQUFMLEdBQWdCZCxLQUFJLENBQUNPLFFBQW5DOztBQUVBLFNBQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsS0FBSSxDQUFDakIsS0FBTCxDQUFXRixNQUEvQixFQUF1Q3FCLENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsVUFBSVosSUFBSSxHQUFHVSxLQUFJLENBQUNqQixLQUFMLENBQVdtQixDQUFYLENBQVg7QUFBQSxVQUNJWCxTQUFTLEdBQUlELElBQUksQ0FBQ1QsTUFBTCxHQUFjLENBQWQsR0FBa0JTLElBQUksQ0FBQyxDQUFELENBQXRCLEdBQTRCLEdBRDdDO0FBQUEsVUFFSWEsT0FBTyxHQUFJYixJQUFJLENBQUNULE1BQUwsR0FBYyxDQUFkLEdBQWtCUyxJQUFJLENBQUNjLE1BQUwsQ0FBWSxDQUFaLENBQWxCLEdBQW1DZCxJQUZsRDtBQUFBLFVBR0l5QixTQUFTLEdBQUdmLEtBQUksQ0FBQ2dCLGNBQUwsQ0FBb0JkLENBQXBCLENBSGhCOztBQUtBLFVBQUlYLFNBQVMsS0FBSyxHQUFsQixFQUF1QjtBQUNyQlUsUUFBQUEsTUFBSztBQUNOLE9BRkQsTUFFTyxJQUFJVixTQUFTLEtBQUssR0FBbEIsRUFBdUI7QUFDNUJSLFFBQUFBLEtBQUssQ0FBQ2tDLE1BQU4sQ0FBYWhCLE1BQWIsRUFBb0IsQ0FBcEI7QUFDQWhCLFFBQUFBLFVBQVUsQ0FBQ2dDLE1BQVgsQ0FBa0JoQixNQUFsQixFQUF5QixDQUF6QjtBQUNGO0FBQ0MsT0FKTSxNQUlBLElBQUlWLFNBQVMsS0FBSyxHQUFsQixFQUF1QjtBQUM1QlIsUUFBQUEsS0FBSyxDQUFDa0MsTUFBTixDQUFhaEIsTUFBYixFQUFvQixDQUFwQixFQUF1QkUsT0FBdkI7QUFDQWxCLFFBQUFBLFVBQVUsQ0FBQ2dDLE1BQVgsQ0FBa0JoQixNQUFsQixFQUF5QixDQUF6QixFQUE0QmMsU0FBNUI7QUFDQWQsUUFBQUEsTUFBSztBQUNOLE9BSk0sTUFJQSxJQUFJVixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDN0IsWUFBSTJCLGlCQUFpQixHQUFHbEIsS0FBSSxDQUFDakIsS0FBTCxDQUFXbUIsQ0FBQyxHQUFHLENBQWYsSUFBb0JGLEtBQUksQ0FBQ2pCLEtBQUwsQ0FBV21CLENBQUMsR0FBRyxDQUFmLEVBQWtCLENBQWxCLENBQXBCLEdBQTJDLElBQW5FOztBQUNBLFlBQUlnQixpQkFBaUIsS0FBSyxHQUExQixFQUErQjtBQUM3QnJCLFVBQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0QsU0FGRCxNQUVPLElBQUlxQixpQkFBaUIsS0FBSyxHQUExQixFQUErQjtBQUNwQ3BCLFVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0E3R3VELENBK0d4RDs7O0FBQ0EsTUFBSUQsV0FBSixFQUFpQjtBQUNmLFdBQU8sQ0FBQ2QsS0FBSyxDQUFDQSxLQUFLLENBQUNGLE1BQU4sR0FBZSxDQUFoQixDQUFiLEVBQWlDO0FBQy9CRSxNQUFBQSxLQUFLLENBQUNvQyxHQUFOO0FBQ0FsQyxNQUFBQSxVQUFVLENBQUNrQyxHQUFYO0FBQ0Q7QUFDRixHQUxELE1BS08sSUFBSXJCLFFBQUosRUFBYztBQUNuQmYsSUFBQUEsS0FBSyxDQUFDcUMsSUFBTixDQUFXLEVBQVg7QUFDQW5DLElBQUFBLFVBQVUsQ0FBQ21DLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDs7QUFDRCxPQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUd0QyxLQUFLLENBQUNGLE1BQU4sR0FBZSxDQUFyQyxFQUF3Q3dDLEVBQUUsRUFBMUMsRUFBOEM7QUFDNUN0QyxJQUFBQSxLQUFLLENBQUNzQyxFQUFELENBQUwsR0FBWXRDLEtBQUssQ0FBQ3NDLEVBQUQsQ0FBTCxHQUFZcEMsVUFBVSxDQUFDb0MsRUFBRCxDQUFsQztBQUNEOztBQUNELFNBQU90QyxLQUFLLENBQUN1QyxJQUFOLENBQVcsRUFBWCxDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDTyxTQUFTQyxZQUFULENBQXNCL0MsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDO0FBQzdDLE1BQUksT0FBT0QsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQkEsSUFBQUEsT0FBTztBQUFHO0FBQUE7QUFBQTs7QUFBQUU7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQTtBQUFBLEtBQVdGLE9BQVgsQ0FBVjtBQUNEOztBQUVELE1BQUlnRCxZQUFZLEdBQUcsQ0FBbkI7O0FBQ0EsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QixRQUFJQyxLQUFLLEdBQUdsRCxPQUFPLENBQUNnRCxZQUFZLEVBQWIsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFDVixhQUFPakQsT0FBTyxDQUFDa0QsUUFBUixFQUFQO0FBQ0Q7O0FBRURsRCxJQUFBQSxPQUFPLENBQUNtRCxRQUFSLENBQWlCRixLQUFqQixFQUF3QixVQUFTRyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDMUMsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT3BELE9BQU8sQ0FBQ2tELFFBQVIsQ0FBaUJFLEdBQWpCLENBQVA7QUFDRDs7QUFFRCxVQUFJRSxjQUFjLEdBQUd6RCxVQUFVLENBQUN3RCxJQUFELEVBQU9KLEtBQVAsRUFBY2pELE9BQWQsQ0FBL0I7QUFDQUEsTUFBQUEsT0FBTyxDQUFDdUQsT0FBUixDQUFnQk4sS0FBaEIsRUFBdUJLLGNBQXZCLEVBQXVDLFVBQVNGLEdBQVQsRUFBYztBQUNuRCxZQUFJQSxHQUFKLEVBQVM7QUFDUCxpQkFBT3BELE9BQU8sQ0FBQ2tELFFBQVIsQ0FBaUJFLEdBQWpCLENBQVA7QUFDRDs7QUFFREosUUFBQUEsWUFBWTtBQUNiLE9BTkQ7QUFPRCxLQWJEO0FBY0Q7O0FBQ0RBLEVBQUFBLFlBQVk7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSAobGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyksXG4gICAgICAgICAgY29udGVudCA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUpO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgaWYgKCFjb21wYXJlTGluZSh0b1BvcyArIDEsIGxpbmVzW3RvUG9zXSwgb3BlcmF0aW9uLCBjb250ZW50KSkge1xuICAgICAgICAgIGVycm9yQ291bnQrKztcblxuICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1BvcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gU2VhcmNoIGJlc3QgZml0IG9mZnNldHMgZm9yIGVhY2ggaHVuayBiYXNlZCBvbiB0aGUgcHJldmlvdXMgb25lc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgbWF4TGluZSA9IGxpbmVzLmxlbmd0aCAtIGh1bmsub2xkTGluZXMsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcblxuICAgIGxldCBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgZm9yICg7IGxvY2FsT2Zmc2V0ICE9PSB1bmRlZmluZWQ7IGxvY2FsT2Zmc2V0ID0gaXRlcmF0b3IoKSkge1xuICAgICAgaWYgKGh1bmtGaXRzKGh1bmssIHRvUG9zICsgbG9jYWxPZmZzZXQpKSB7XG4gICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9jYWxPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldCBsb3dlciB0ZXh0IGxpbWl0IHRvIGVuZCBvZiB0aGUgY3VycmVudCBodW5rLCBzbyBuZXh0IG9uZXMgZG9uJ3QgdHJ5XG4gICAgLy8gdG8gZml0IG92ZXIgYWxyZWFkeSBwYXRjaGVkIHRleHRcbiAgICBtaW5MaW5lID0gaHVuay5vZmZzZXQgKyBodW5rLm9sZFN0YXJ0ICsgaHVuay5vbGRMaW5lcztcbiAgfVxuXG4gIC8vIEFwcGx5IHBhdGNoIGh1bmtzXG4gIGxldCBkaWZmT2Zmc2V0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIHRvUG9zID0gaHVuay5vbGRTdGFydCArIGh1bmsub2Zmc2V0ICsgZGlmZk9mZnNldCAtIDE7XG4gICAgZGlmZk9mZnNldCArPSBodW5rLm5ld0xpbmVzIC0gaHVuay5vbGRMaW5lcztcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgIG9wZXJhdGlvbiA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnKSxcbiAgICAgICAgICBjb250ZW50ID0gKGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZSksXG4gICAgICAgICAgZGVsaW1pdGVyID0gaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMSk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICB0b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICBsZXQgcHJldmlvdXNPcGVyYXRpb24gPSBodW5rLmxpbmVzW2ogLSAxXSA/IGh1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcbiAgICAgICAgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIGFkZEVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lcy5wb3AoKTtcbiAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgfVxuICBmb3IgKGxldCBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICB9XG4gIHJldHVybiBsaW5lcy5qb2luKCcnKTtcbn1cblxuLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyh1bmlEaWZmLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHByb2Nlc3NJbmRleCgpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/patch/create.js":
/*!***********************************************!*\
  !*** ./node_modules/diff/lib/patch/create.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.structuredPatch = structuredPatch;
exports.formatPatch = formatPatch;
exports.createTwoFilesPatch = createTwoFilesPatch;
exports.createPatch = createPatch;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_line = __webpack_require__(/*! ../diff/line */ "./node_modules/diff/lib/diff/line.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*istanbul ignore end*/
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (!options) {
    options = {};
  }

  if (typeof options.context === 'undefined') {
    options.context = 4;
  }

  var diff =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _line
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  diffLines)
  /*istanbul ignore end*/
  (oldStr, newStr, options);
  diff.push({
    value: '',
    lines: []
  }); // Append an empty value to make cleanup easier

  function contextLines(lines) {
    return lines.map(function (entry) {
      return ' ' + entry;
    });
  }

  var hunks = [];
  var oldRangeStart = 0,
      newRangeStart = 0,
      curRange = [],
      oldLine = 1,
      newLine = 1;

  /*istanbul ignore start*/
  var _loop = function _loop(
  /*istanbul ignore end*/
  i) {
    var current = diff[i],
        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
    current.lines = lines;

    if (current.added || current.removed) {
      /*istanbul ignore start*/
      var _curRange;

      /*istanbul ignore end*/
      // If we have previous context, start with that
      if (!oldRangeStart) {
        var prev = diff[i - 1];
        oldRangeStart = oldLine;
        newRangeStart = newLine;

        if (prev) {
          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
          oldRangeStart -= curRange.length;
          newRangeStart -= curRange.length;
        }
      } // Output our changes


      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_curRange =
      /*istanbul ignore end*/
      curRange).push.apply(
      /*istanbul ignore start*/
      _curRange
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      lines.map(function (entry) {
        return (current.added ? '+' : '-') + entry;
      }))); // Track the updated file position


      if (current.added) {
        newLine += lines.length;
      } else {
        oldLine += lines.length;
      }
    } else {
      // Identical context lines. Track line changes
      if (oldRangeStart) {
        // Close out any changes that have been output (or join overlapping)
        if (lines.length <= options.context * 2 && i < diff.length - 2) {
          /*istanbul ignore start*/
          var _curRange2;

          /*istanbul ignore end*/
          // Overlapping

          /*istanbul ignore start*/

          /*istanbul ignore end*/

          /*istanbul ignore start*/
          (_curRange2 =
          /*istanbul ignore end*/
          curRange).push.apply(
          /*istanbul ignore start*/
          _curRange2
          /*istanbul ignore end*/
          ,
          /*istanbul ignore start*/
          _toConsumableArray(
          /*istanbul ignore end*/
          contextLines(lines)));
        } else {
          /*istanbul ignore start*/
          var _curRange3;

          /*istanbul ignore end*/
          // end the range and output
          var contextSize = Math.min(lines.length, options.context);

          /*istanbul ignore start*/

          /*istanbul ignore end*/

          /*istanbul ignore start*/
          (_curRange3 =
          /*istanbul ignore end*/
          curRange).push.apply(
          /*istanbul ignore start*/
          _curRange3
          /*istanbul ignore end*/
          ,
          /*istanbul ignore start*/
          _toConsumableArray(
          /*istanbul ignore end*/
          contextLines(lines.slice(0, contextSize))));

          var hunk = {
            oldStart: oldRangeStart,
            oldLines: oldLine - oldRangeStart + contextSize,
            newStart: newRangeStart,
            newLines: newLine - newRangeStart + contextSize,
            lines: curRange
          };

          if (i >= diff.length - 2 && lines.length <= options.context) {
            // EOF is inside this hunk
            var oldEOFNewline = /\n$/.test(oldStr);
            var newEOFNewline = /\n$/.test(newStr);
            var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

            if (!oldEOFNewline && noNlBeforeAdds && oldStr.length > 0) {
              // special case: old has no eol and no trailing context; no-nl can end up before adds
              // however, if the old file is empty, do not output the no-nl line
              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
            }

            if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
              curRange.push('\\ No newline at end of file');
            }
          }

          hunks.push(hunk);
          oldRangeStart = 0;
          newRangeStart = 0;
          curRange = [];
        }
      }

      oldLine += lines.length;
      newLine += lines.length;
    }
  };

  for (var i = 0; i < diff.length; i++) {
    /*istanbul ignore start*/
    _loop(
    /*istanbul ignore end*/
    i);
  }

  return {
    oldFileName: oldFileName,
    newFileName: newFileName,
    oldHeader: oldHeader,
    newHeader: newHeader,
    hunks: hunks
  };
}

function formatPatch(diff) {
  var ret = [];

  if (diff.oldFileName == diff.newFileName) {
    ret.push('Index: ' + diff.oldFileName);
  }

  ret.push('===================================================================');
  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

  for (var i = 0; i < diff.hunks.length; i++) {
    var hunk = diff.hunks[i]; // Unified Diff Format quirk: If the chunk size is 0,
    // the first number is one lower than one would expect.
    // https://www.artima.com/weblogs/viewpost.jsp?thread=164293

    if (hunk.oldLines === 0) {
      hunk.oldStart -= 1;
    }

    if (hunk.newLines === 0) {
      hunk.newStart -= 1;
    }

    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
    ret.push.apply(ret, hunk.lines);
  }

  return ret.join('\n') + '\n';
}

function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  return formatPatch(structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options));
}

function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsImRpZmZMaW5lcyIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwibm9ObEJlZm9yZUFkZHMiLCJzcGxpY2UiLCJmb3JtYXRQYXRjaCIsInJldCIsImFwcGx5Iiwiam9pbiIsImNyZWF0ZVR3b0ZpbGVzUGF0Y2giLCJjcmVhdGVQYXRjaCIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbURDLE1BQW5ELEVBQTJEQyxNQUEzRCxFQUFtRUMsU0FBbkUsRUFBOEVDLFNBQTlFLEVBQXlGQyxPQUF6RixFQUFrRztBQUN2RyxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaQSxJQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNEOztBQUNELE1BQUksT0FBT0EsT0FBTyxDQUFDQyxPQUFmLEtBQTJCLFdBQS9CLEVBQTRDO0FB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eHBvcnQgZnVuY3Rpb24gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zLmNvbnRleHQgPSA0O1xuICB9XG5cbiAgY29uc3QgZGlmZiA9IGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIGRpZmYucHVzaCh7dmFsdWU6ICcnLCBsaW5lczogW119KTsgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7IHJldHVybiAnICcgKyBlbnRyeTsgfSk7XG4gIH1cblxuICBsZXQgaHVua3MgPSBbXTtcbiAgbGV0IG9sZFJhbmdlU3RhcnQgPSAwLCBuZXdSYW5nZVN0YXJ0ID0gMCwgY3VyUmFuZ2UgPSBbXSxcbiAgICAgIG9sZExpbmUgPSAxLCBuZXdMaW5lID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzIGNvbnRleHQsIHN0YXJ0IHdpdGggdGhhdFxuICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG4gICAgICBjdXJSYW5nZS5wdXNoKC4uLiBsaW5lcy5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgfSkpO1xuXG4gICAgICAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgY3VyUmFuZ2UucHVzaCguLi4gY29udGV4dExpbmVzKGxpbmVzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgbGV0IGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKTtcblxuICAgICAgICAgIGxldCBodW5rID0ge1xuICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXG4gICAgICAgICAgICBvbGRMaW5lczogKG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBuZXdMaW5lczogKG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgIGxldCBvbGRFT0ZOZXdsaW5lID0gKCgvXFxuJC8pLnRlc3Qob2xkU3RyKSk7XG4gICAgICAgICAgICBsZXQgbmV3RU9GTmV3bGluZSA9ICgoL1xcbiQvKS50ZXN0KG5ld1N0cikpO1xuICAgICAgICAgICAgbGV0IG5vTmxCZWZvcmVBZGRzID0gbGluZXMubGVuZ3RoID09IDAgJiYgY3VyUmFuZ2UubGVuZ3RoID4gaHVuay5vbGRMaW5lcztcbiAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiBub05sQmVmb3JlQWRkcyAmJiBvbGRTdHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2U6IG9sZCBoYXMgbm8gZW9sIGFuZCBubyB0cmFpbGluZyBjb250ZXh0OyBuby1ubCBjYW4gZW5kIHVwIGJlZm9yZSBhZGRzXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIsIGlmIHRoZSBvbGQgZmlsZSBpcyBlbXB0eSwgZG8gbm90IG91dHB1dCB0aGUgbm8tbmwgbGluZVxuICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCghb2xkRU9GTmV3bGluZSAmJiAhbm9ObEJlZm9yZUFkZHMpIHx8ICFuZXdFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgIGN1clJhbmdlLnB1c2goJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBodW5rcy5wdXNoKGh1bmspO1xuXG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2xkTGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9sZEZpbGVOYW1lOiBvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWU6IG5ld0ZpbGVOYW1lLFxuICAgIG9sZEhlYWRlcjogb2xkSGVhZGVyLCBuZXdIZWFkZXI6IG5ld0hlYWRlcixcbiAgICBodW5rczogaHVua3NcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBhdGNoKGRpZmYpIHtcbiAgY29uc3QgcmV0ID0gW107XG4gIGlmIChkaWZmLm9sZEZpbGVOYW1lID09IGRpZmYubmV3RmlsZU5hbWUpIHtcbiAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBkaWZmLm9sZEZpbGVOYW1lKTtcbiAgfVxuICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICByZXQucHVzaCgnLS0tICcgKyBkaWZmLm9sZEZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm9sZEhlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5vbGRIZWFkZXIpKTtcbiAgcmV0LnB1c2goJysrKyAnICsgZGlmZi5uZXdGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5uZXdIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYubmV3SGVhZGVyKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmLmh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaHVuayA9IGRpZmYuaHVua3NbaV07XG4gICAgLy8gVW5pZmllZCBEaWZmIEZvcm1hdCBxdWlyazogSWYgdGhlIGNodW5rIHNpemUgaXMgMCxcbiAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG4gICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsub2xkU3RhcnQgLT0gMTtcbiAgICB9XG4gICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsubmV3U3RhcnQgLT0gMTtcbiAgICB9XG4gICAgcmV0LnB1c2goXG4gICAgICAnQEAgLScgKyBodW5rLm9sZFN0YXJ0ICsgJywnICsgaHVuay5vbGRMaW5lc1xuICAgICAgKyAnICsnICsgaHVuay5uZXdTdGFydCArICcsJyArIGh1bmsubmV3TGluZXNcbiAgICAgICsgJyBAQCdcbiAgICApO1xuICAgIHJldC5wdXNoLmFwcGx5KHJldCwgaHVuay5saW5lcyk7XG4gIH1cblxuICByZXR1cm4gcmV0LmpvaW4oJ1xcbicpICsgJ1xcbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRQYXRjaChzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/patch/merge.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/patch/merge.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calcLineCount = calcLineCount;
exports.merge = merge;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_create = __webpack_require__(/*! ./create */ "./node_modules/diff/lib/patch/create.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_parse = __webpack_require__(/*! ./parse */ "./node_modules/diff/lib/patch/parse.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_array = __webpack_require__(/*! ../util/array */ "./node_modules/diff/lib/util/array.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*istanbul ignore end*/
function calcLineCount(hunk) {
  /*istanbul ignore start*/
  var _calcOldNewLineCount =
  /*istanbul ignore end*/
  calcOldNewLineCount(hunk.lines),
      oldLines = _calcOldNewLineCount.oldLines,
      newLines = _calcOldNewLineCount.newLines;

  if (oldLines !== undefined) {
    hunk.oldLines = oldLines;
  } else {
    delete hunk.oldLines;
  }

  if (newLines !== undefined) {
    hunk.newLines = newLines;
  } else {
    delete hunk.newLines;
  }
}

function merge(mine, theirs, base) {
  mine = loadPatch(mine, base);
  theirs = loadPatch(theirs, base);
  var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
  // Leaving sanity checks on this to the API consumer that may know more about the
  // meaning in their own context.

  if (mine.index || theirs.index) {
    ret.index = mine.index || theirs.index;
  }

  if (mine.newFileName || theirs.newFileName) {
    if (!fileNameChanged(mine)) {
      // No header or no change in ours, use theirs (and ours if theirs does not exist)
      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
      ret.newFileName = theirs.newFileName || mine.newFileName;
      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
      ret.newHeader = theirs.newHeader || mine.newHeader;
    } else if (!fileNameChanged(theirs)) {
      // No header or no change in theirs, use ours
      ret.oldFileName = mine.oldFileName;
      ret.newFileName = mine.newFileName;
      ret.oldHeader = mine.oldHeader;
      ret.newHeader = mine.newHeader;
    } else {
      // Both changed... figure it out
      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
    }
  }

  ret.hunks = [];
  var mineIndex = 0,
      theirsIndex = 0,
      mineOffset = 0,
      theirsOffset = 0;

  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
    var mineCurrent = mine.hunks[mineIndex] || {
      oldStart: Infinity
    },
        theirsCurrent = theirs.hunks[theirsIndex] || {
      oldStart: Infinity
    };

    if (hunkBefore(mineCurrent, theirsCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
      mineIndex++;
      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
      theirsIndex++;
      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
    } else {
      // Overlap, merge as best we can
      var mergedHunk = {
        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
        oldLines: 0,
        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
        newLines: 0,
        lines: []
      };
      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
      theirsIndex++;
      mineIndex++;
      ret.hunks.push(mergedHunk);
    }
  }

  return ret;
}

function loadPatch(param, base) {
  if (typeof param === 'string') {
    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
      return (
        /*istanbul ignore start*/
        (0,
        /*istanbul ignore end*/

        /*istanbul ignore start*/
        _parse
        /*istanbul ignore end*/
        .
        /*istanbul ignore start*/
        parsePatch)
        /*istanbul ignore end*/
        (param)[0]
      );
    }

    if (!base) {
      throw new Error('Must provide a base reference or pass in a patch');
    }

    return (
      /*istanbul ignore start*/
      (0,
      /*istanbul ignore end*/

      /*istanbul ignore start*/
      _create
      /*istanbul ignore end*/
      .
      /*istanbul ignore start*/
      structuredPatch)
      /*istanbul ignore end*/
      (undefined, undefined, base, param)
    );
  }

  return param;
}

function fileNameChanged(patch) {
  return patch.newFileName && patch.newFileName !== patch.oldFileName;
}

function selectField(index, mine, theirs) {
  if (mine === theirs) {
    return mine;
  } else {
    index.conflict = true;
    return {
      mine: mine,
      theirs: theirs
    };
  }
}

function hunkBefore(test, check) {
  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
}

function cloneHunk(hunk, offset) {
  return {
    oldStart: hunk.oldStart,
    oldLines: hunk.oldLines,
    newStart: hunk.newStart + offset,
    newLines: hunk.newLines,
    lines: hunk.lines
  };
}

function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
  // This will generally result in a conflicted hunk, but there are cases where the context
  // is the only overlap where we can successfully merge the content here.
  var mine = {
    offset: mineOffset,
    lines: mineLines,
    index: 0
  },
      their = {
    offset: theirOffset,
    lines: theirLines,
    index: 0
  }; // Handle any leading content

  insertLeading(hunk, mine, their);
  insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

  while (mine.index < mine.lines.length && their.index < their.lines.length) {
    var mineCurrent = mine.lines[mine.index],
        theirCurrent = their.lines[their.index];

    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
      // Both modified ...
      mutualChange(hunk, mine, their);
    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
      /*istanbul ignore start*/
      var _hunk$lines;

      /*istanbul ignore end*/
      // Mine inserted

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      collectChange(mine)));
    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
      /*istanbul ignore start*/
      var _hunk$lines2;

      /*istanbul ignore end*/
      // Theirs inserted

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines2 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines2
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      collectChange(their)));
    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
      // Mine removed or edited
      removal(hunk, mine, their);
    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
      // Their removed or edited
      removal(hunk, their, mine, true);
    } else if (mineCurrent === theirCurrent) {
      // Context identity
      hunk.lines.push(mineCurrent);
      mine.index++;
      their.index++;
    } else {
      // Context mismatch
      conflict(hunk, collectChange(mine), collectChange(their));
    }
  } // Now push anything that may be remaining


  insertTrailing(hunk, mine);
  insertTrailing(hunk, their);
  calcLineCount(hunk);
}

function mutualChange(hunk, mine, their) {
  var myChanges = collectChange(mine),
      theirChanges = collectChange(their);

  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
    // Special case for remove changes that are supersets of one another
    if (
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _array
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    arrayStartsWith)
    /*istanbul ignore end*/
    (myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
      /*istanbul ignore start*/
      var _hunk$lines3;

      /*istanbul ignore end*/

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines3 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines3
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      myChanges));

      return;
    } else if (
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _array
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    arrayStartsWith)
    /*istanbul ignore end*/
    (theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
      /*istanbul ignore start*/
      var _hunk$lines4;

      /*istanbul ignore end*/

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines4 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines4
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      theirChanges));

      return;
    }
  } else if (
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _array
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  arrayEqual)
  /*istanbul ignore end*/
  (myChanges, theirChanges)) {
    /*istanbul ignore start*/
    var _hunk$lines5;

    /*istanbul ignore end*/

    /*istanbul ignore start*/

    /*istanbul ignore end*/

    /*istanbul ignore start*/
    (_hunk$lines5 =
    /*istanbul ignore end*/
    hunk.lines).push.apply(
    /*istanbul ignore start*/
    _hunk$lines5
    /*istanbul ignore end*/
    ,
    /*istanbul ignore start*/
    _toConsumableArray(
    /*istanbul ignore end*/
    myChanges));

    return;
  }

  conflict(hunk, myChanges, theirChanges);
}

function removal(hunk, mine, their, swap) {
  var myChanges = collectChange(mine),
      theirChanges = collectContext(their, myChanges);

  if (theirChanges.merged) {
    /*istanbul ignore start*/
    var _hunk$lines6;

    /*istanbul ignore end*/

    /*istanbul ignore start*/

    /*istanbul ignore end*/

    /*istanbul ignore start*/
    (_hunk$lines6 =
    /*istanbul ignore end*/
    hunk.lines).push.apply(
    /*istanbul ignore start*/
    _hunk$lines6
    /*istanbul ignore end*/
    ,
    /*istanbul ignore start*/
    _toConsumableArray(
    /*istanbul ignore end*/
    theirChanges.merged));
  } else {
    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
  }
}

function conflict(hunk, mine, their) {
  hunk.conflict = true;
  hunk.lines.push({
    conflict: true,
    mine: mine,
    theirs: their
  });
}

function insertLeading(hunk, insert, their) {
  while (insert.offset < their.offset && insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
    insert.offset++;
  }
}

function insertTrailing(hunk, insert) {
  while (insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
  }
}

function collectChange(state) {
  var ret = [],
      operation = state.lines[state.index][0];

  while (state.index < state.lines.length) {
    var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

    if (operation === '-' && line[0] === '+') {
      operation = '+';
    }

    if (operation === line[0]) {
      ret.push(line);
      state.index++;
    } else {
      break;
    }
  }

  return ret;
}

function collectContext(state, matchChanges) {
  var changes = [],
      merged = [],
      matchIndex = 0,
      contextChanges = false,
      conflicted = false;

  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
    var change = state.lines[state.index],
        match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

    if (match[0] === '+') {
      break;
    }

    contextChanges = contextChanges || change[0] !== ' ';
    merged.push(match);
    matchIndex++; // Consume any additions in the other block as a conflict to attempt
    // to pull in the remaining context after this

    if (change[0] === '+') {
      conflicted = true;

      while (change[0] === '+') {
        changes.push(change);
        change = state.lines[++state.index];
      }
    }

    if (match.substr(1) === change.substr(1)) {
      changes.push(change);
      state.index++;
    } else {
      conflicted = true;
    }
  }

  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
    conflicted = true;
  }

  if (conflicted) {
    return changes;
  }

  while (matchIndex < matchChanges.length) {
    merged.push(matchChanges[matchIndex++]);
  }

  return {
    merged: merged,
    changes: changes
  };
}

function allRemoves(changes) {
  return changes.reduce(function (prev, change) {
    return prev && change[0] === '-';
  }, true);
}

function skipRemoveSuperset(state, removeChanges, delta) {
  for (var i = 0; i < delta; i++) {
    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

    if (state.lines[state.index + i] !== ' ' + changeContent) {
      return false;
    }
  }

  state.index += delta;
  return true;
}

function calcOldNewLineCount(lines) {
  var oldLines = 0;
  var newLines = 0;
  lines.forEach(function (line) {
    if (typeof line !== 'string') {
      var myCount = calcOldNewLineCount(line.mine);
      var theirCount = calcOldNewLineCount(line.theirs);

      if (oldLines !== undefined) {
        if (myCount.oldLines === theirCount.oldLines) {
          oldLines += myCount.oldLines;
        } else {
          oldLines = undefined;
        }
      }

      if (newLines !== undefined) {
        if (myCount.newLines === theirCount.newLines) {
          newLines += myCount.newLines;
        } else {
          newLines = undefined;
        }
      }
    } else {
      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
        newLines++;
      }

      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
        oldLines++;
      }
    }
  });
  return {
    oldLines: oldLines,
    newLines: newLines
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwiaHVuayIsImNhbGNPbGROZXdMaW5lQ291bnQiLCJsaW5lcyIsIm9sZExpbmVzIiwibmV3TGluZXMiLCJ1bmRlZmluZWQiLCJtZXJnZSIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwicGFyc2VQYXRjaCIsIkVycm9yIiwic3RydWN0dXJlZFBhdGNoIiwicGF0Y2giLCJjb25mbGljdCIsImNoZWNrIiwib2Zmc2V0IiwibWluZUxpbmVzIiwidGhlaXJPZmZzZXQiLCJ0aGVpckxpbmVzIiwidGhlaXIiLCJpbnNlcnRMZWFkaW5nIiwidGhlaXJDdXJyZW50IiwibXV0dWFsQ2hhbmdlIiwiY29sbGVjdENoYW5nZSIsInJlbW92YWwiLCJpbnNlcnRUcmFpbGluZyIsIm15Q2hhbmdlcyIsInRoZWlyQ2hhbmdlcyIsImFsbFJlbW92ZXMiLCJhcnJheVN0YXJ0c1dpdGgiLCJza2lwUmVtb3ZlU3VwZXJzZXQiLCJhcnJheUVxdWFsIiwic3dhcCIsImNvbGxlY3RDb250ZXh0IiwibWVyZ2VkIiwiaW5zZXJ0IiwibGluZSIsInN0YXRlIiwib3BlcmF0aW9uIiwibWF0Y2hDaGFuZ2VzIiwiY2hhbmdlcyIsIm1hdGNoSW5kZXgiLCJjb250ZXh0Q2hhbmdlcyIsImNvbmZsaWN0ZWQiLCJjaGFuZ2UiLCJtYXRjaCIsInN1YnN0ciIsInJlZHVjZSIsInByZXYiLCJyZW1vdmVDaGFuZ2VzIiwiZGVsdGEiLCJpIiwiY2hhbmdlQ29udGVudCIsImZvckVhY2giLCJteUNvdW50IiwidGhlaXJDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUNMQyxFQUFBQSxtQkFBbUIsQ0FBQ0QsSUFBSSxDQUFDRSxLQUFOLENBRGQ7QUFBQSxNQUMzQkMsUUFEMkIsd0JBQzNCQSxRQUQyQjtBQUFBLE1BQ2pCQyxRQURpQix3QkFDakJBLFFBRGlCOztBQUdsQyxNQUFJRCxRQUFRLEtBQUtFLFNBQWpCLEVBQTRCO0FBQzFCTCxJQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0gsSUFBSSxDQUFDRyxRQUFaO0FBQ0Q7O0FBRUQsTUFBSUMsUUFBUSxLQUFLQyxTQUFqQixFQUE0QjtBQUMxQkwsSUFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9KLElBQUksQ0FBQ0ksUUFBWjtBQUNEO0FBQ0Y7O0FBRU0sU0FBU0UsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxNQUFyQixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDeENGLEVBQUFBLElBQUksR0FBR0csU0FBUyxDQUFDSCxJQUFELEVBQU9FLElBQVAsQ0FBaEI7QUFDQUQsRUFBQUEsTUFBTSxHQUFHRSxTQUFTLENBQUNGLE1BQUQsRUFBU0MsSUFBVCxDQUFsQjtBQUVBLE1BQUlFLEdBQUcsR0FBRyxFQUFWLENBSndDLENBTXhDO0FBQ0E7QUFDQTs7QUFDQSxNQUFJSixJQUFJLENBQUNLLEtBQUwsSUFBY0osTUFBTSxDQUFDSSxLQUF6QixFQUFnQztBQUM5QkQsSUFBQUEsR0FBRyxDQUFDQyxLQUFKLEdBQVlMLElBQUksQ0FBQ0ssS0FBTCxJQUFjSixNQUFNLENBQUNJLEtBQWpDO0FBQ0Q7O0FBRUQsTUFBSUwsSUFBSSxDQUFDTSxXQUFMLElBQW9CTCxNQUFNLENBQUNLLFdBQS9CLEVBQTRDO0FBQzFDLFFBQUksQ0FBQ0MsZUFBZSxDQUFDUCxJQUFELENBQXBCLEVBQTRCO0FBQzFCO0FBQ0FJLE1BQUFBLEdBQUcsQ0FBQ0ksV0FBSixHQUFrQlAsTUFBTSxDQUFDTyxXQUFQLElBQXNCUixJQUFJLENBQUNRLFdBQTdDO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ0UsV0FBSixHQUFrQkwsTUFBTSxDQUFDSyxXQUFQLElBQXNCTixJQUFJLENBQUNNLFdBQTdDO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQlIsTUFBTSxDQUFDUSxTQUFQLElBQW9CVCxJQUFJLENBQUNTLFNBQXpDO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sU0FBSixHQUFnQlQsTUFBTSxDQUFDUyxTQUFQLElBQW9CVixJQUFJLENBQUNVLFNBQXpDO0FBQ0QsS0FORCxNQU1PLElBQUksQ0FBQ0gsZUFBZSxDQUFDTixNQUFELENBQXBCLEVBQThCO0FBQ25DO0FBQ0FHLE1BQUFBLEdBQUcsQ0FBQ0ksV0FBSixHQUFrQlIsSUFBSSxDQUFDUSxXQUF2QjtBQUNBSixNQUFBQSxHQUFHLENBQUNFLFdBQUosR0FBa0JOLElBQUksQ0FBQ00sV0FBdkI7QUFDQUYsTUFBQUEsR0FBRyxDQUFDSyxTQUFKLEdBQWdCVCxJQUFJLENBQUNTLFNBQXJCO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sU0FBSixHQUFnQlYsSUFBSSxDQUFDVSxTQUFyQjtBQUNELEtBTk0sTUFNQTtBQUNMO0FBQ0FOLE1BQUFBLEdBQUcsQ0FBQ0ksV0FBSixHQUFrQkcsV0FBVyxDQUFDUCxHQUFELEVBQU1KLElBQUksQ0FBQ1EsV0FBWCxFQUF3QlAsTUFBTSxDQUFDTyxXQUEvQixDQUE3QjtBQUNBSixNQUFBQSxHQUFHLENBQUNFLFdBQUosR0FBa0JLLFdBQVcsQ0FBQ1AsR0FBRCxFQUFNSixJQUFJLENBQUNNLFdBQVgsRUFBd0JMLE1BQU0sQ0FBQ0ssV0FBL0IsQ0FBN0I7QUFDQUYsTUFBQUEsR0FBRyxDQUFDSyxTQUFKLEdBQWdCRSxXQUFXLENBQUNQLEdBQUQsRUFBTUosSUFBSSxDQUFDUyxTQUFYLEVBQXNCUixNQUFNLENBQUNRLFNBQTdCLENBQTNCO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sU0FBSixHQUFnQkMsV0FBVyxDQUFDUCxHQUFELEVBQU1KLElBQUksQ0FBQ1UsU0FBWCxFQUFzQlQsTUFBTSxDQUFDUyxTQUE3QixDQUEzQjtBQUNEO0FBQ0Y7O0FBRUROLEVBQUFBLEdBQUcsQ0FBQ1EsS0FBSixHQUFZLEVBQVo7QUFFQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxNQUNJQyxXQUFXLEdBQUcsQ0FEbEI7QUFBQSxNQUVJQyxVQUFVLEdBQUcsQ0FGakI7QUFBQSxNQUdJQyxZQUFZLEdBQUcsQ0FIbkI7O0FBS0EsU0FBT0gsU0FBUyxHQUFHYixJQUFJLENBQUNZLEtBQUwsQ0FBV0ssTUFBdkIsSUFBaUNILFdBQVcsR0FBR2IsTUFBTSxDQUFDVyxLQUFQLENBQWFLLE1BQW5FLEVBQTJFO0FBQ3pFLFFBQUlDLFdBQVcsR0FBR2xCLElBQUksQ0FBQ1ksS0FBTCxDQUFXQyxTQUFYLEtBQXlCO0FBQUNNLE1BQUFBLFFBQVEsRUFBRUM7QUFBWCxLQUEzQztBQUFBLFFBQ0lDLGFBQWEsR0FBR3BCLE1BQU0sQ0FBQ1csS0FBUCxDQUFhRSxXQUFiLEtBQTZCO0FBQUNLLE1BQUFBLFFBQVEsRUFBRUM7QUFBWCxLQURqRDs7QUFHQSxRQUFJRSxVQUFVLENBQUNKLFdBQUQsRUFBY0csYUFBZCxDQUFkLEVBQTRDO0FBQzFDO0FBQ0FqQixNQUFBQSxHQUFHLENBQUNRLEtBQUosQ0FBVVcsSUFBVixDQUFlQyxTQUFTLENBQUNOLFdBQUQsRUFBY0gsVUFBZCxDQUF4QjtBQUNBRixNQUFBQSxTQUFTO0FBQ1RHLE1BQUFBLFlBQVksSUFBSUUsV0FBVyxDQUFDckIsUUFBWixHQUF1QnFCLFdBQVcsQ0FBQ3RCLFFBQW5EO0FBQ0QsS0FMRCxNQUtPLElBQUkwQixVQUFVLENBQUNELGFBQUQsRUFBZ0JILFdBQWhCLENBQWQsRUFBNEM7QUFDakQ7QUFDQWQsTUFBQUEsR0FBRyxDQUFDUSxLQUFKLENBQVVXLElBQVYsQ0FBZUMsU0FBUyxDQUFDSCxhQUFELEVBQWdCTCxZQUFoQixDQUF4QjtBQUNBRixNQUFBQSxXQUFXO0FBQ1hDLE1BQUFBLFVBQVUsSUFBSU0sYUFBYSxDQUFDeEIsUUFBZCxHQUF5QndCLGFBQWEsQ0FBQ3pCLFFBQXJEO0FBQ0QsS0FMTSxNQUtBO0FBQ0w7QUFDQSxVQUFJNkIsVUFBVSxHQUFHO0FBQ2ZOLFFBQUFBLFFBQVEsRUFBRU8sSUFBSSxDQUFDQyxHQUFMLENBQVNULFdBQVcsQ0FBQ0MsUUFBckIsRUFBK0JFLGFBQWEsQ0FBQ0YsUUFBN0MsQ0FESztBQUVmdkIsUUFBQUEsUUFBUSxFQUFFLENBRks7QUFHZmdDLFFBQUFBLFFBQVEsRUFBRUYsSUFBSSxDQUFDQyxHQUFMLENBQVNULFdBQVcsQ0FBQ1UsUUFBWixHQUF1QmIsVUFBaEMsRUFBNENNLGFBQWEsQ0FBQ0YsUUFBZCxHQUF5QkgsWUFBckUsQ0FISztBQUlmbkIsUUFBQUEsUUFBUSxFQUFFLENBSks7QUFLZkYsUUFBQUEsS0FBSyxFQUFFO0FBTFEsT0FBakI7QUFPQWtDLE1BQUFBLFVBQVUsQ0FBQ0osVUFBRCxFQUFhUCxXQUFXLENBQUNDLFFBQXpCLEVBQW1DRCxXQUFXLENBQUN2QixLQUEvQyxFQUFzRDBCLGFBQWEsQ0FBQ0YsUUFBcEUsRUFBOEVFLGFBQWEsQ0FBQzFCLEtBQTVGLENBQVY7QUFDQW1CLE1BQUFBLFdBQVc7QUFDWEQsTUFBQUEsU0FBUztBQUVUVCxNQUFBQSxHQUFHLENBQUNRLEtBQUosQ0FBVVcsSUFBVixDQUFlRSxVQUFmO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPckIsR0FBUDtBQUNEOztBQUVELFNBQVNELFNBQVQsQ0FBbUIyQixLQUFuQixFQUEwQjVCLElBQTFCLEVBQWdDO0FBQzlCLE1BQUksT0FBTzRCLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsUUFBSyxNQUFELENBQVNDLElBQVQsQ0FBY0QsS0FBZCxLQUEwQixVQUFELENBQWFDLElBQWIsQ0FBa0JELEtBQWxCLENBQTdCLEVBQXdEO0FBQ3RELGFBQU87QUFBQTtBQUFBO0FBQUE7O0FBQUFFO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxTQUFXRixLQUFYLEVBQWtCLENBQWxCO0FBQVA7QUFDRDs7QUFFRCxRQUFJLENBQUM1QixJQUFMLEVBQVc7QUFDVCxZQUFNLElBQUkrQixLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNEOztBQUNELFdBQU87QUFBQTtBQUFBO0FBQUE7O0FBQUFDO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxPQUFnQnBDLFNBQWhCLEVBQTJCQSxTQUEzQixFQUFzQ0ksSUFBdEMsRUFBNEM0QixLQUE1QztBQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNEOztBQUVELFNBQVN2QixlQUFULENBQXlCNEIsS0FBekIsRUFBZ0M7QUFDOUIsU0FBT0EsS0FBSyxDQUFDN0IsV0FBTixJQUFxQjZCLEtBQUssQ0FBQzdCLFdBQU4sS0FBc0I2QixLQUFLLENBQUMzQixXQUF4RDtBQUNEOztBQUVELFNBQVNHLFdBQVQsQ0FBcUJOLEtBQXJCLEVBQTRCTCxJQUE1QixFQUFrQ0MsTUFBbEMsRUFBMEM7QUFDeEMsTUFBSUQsSUFBSSxLQUFLQyxNQUFiLEVBQXFCO0FBQ25CLFdBQU9ELElBQVA7QUFDRCxHQUZELE1BRU87QUFDTEssSUFBQUEsS0FBSyxDQUFDK0IsUUFBTixHQUFpQixJQUFqQjtBQUNBLFdBQU87QUFBQ3BDLE1BQUFBLElBQUksRUFBSkEsSUFBRDtBQUFPQyxNQUFBQSxNQUFNLEVBQU5BO0FBQVAsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU3FCLFVBQVQsQ0FBb0JTLElBQXBCLEVBQTBCTSxLQUExQixFQUFpQztBQUMvQixTQUFPTixJQUFJLENBQUNaLFFBQUwsR0FBZ0JrQixLQUFLLENBQUNsQixRQUF0QixJQUNEWSxJQUFJLENBQUNaLFFBQUwsR0FBZ0JZLElBQUksQ0FBQ25DLFFBQXRCLEdBQWtDeUMsS0FBSyxDQUFDbEIsUUFEN0M7QUFFRDs7QUFFRCxTQUFTSyxTQUFULENBQW1CL0IsSUFBbkIsRUFBeUI2QyxNQUF6QixFQUFpQztBQUMvQixTQUFPO0FBQ0xuQixJQUFBQSxRQUFRLEVBQUUxQixJQUFJLENBQUMwQixRQURWO0FBQ29CdkIsSUFBQUEsUUFBUSxFQUFFSCxJQUFJLENBQUNHLFFBRG5DO0FBRUxnQyxJQUFBQSxRQUFRLEVBQUVuQyxJQUFJLENBQUNtQyxRQUFMLEdBQWdCVSxNQUZyQjtBQUU2QnpDLElBQUFBLFFBQVEsRUFBRUosSUFBSSxDQUFDSSxRQUY1QztBQUdMRixJQUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0U7QUFIUCxHQUFQO0FBS0Q7O0FBRUQsU0FBU2tDLFVBQVQsQ0FBb0JwQyxJQUFwQixFQUEwQnNCLFVBQTFCLEVBQXNDd0IsU0FBdEMsRUFBaURDLFdBQWpELEVBQThEQyxVQUE5RCxFQUEwRTtBQUN4RTtBQUNBO0FBQ0EsTUFBSXpDLElBQUksR0FBRztBQUFDc0MsSUFBQUEsTUFBTSxFQUFFdkIsVUFBVDtBQUFxQnBCLElBQUFBLEtBQUssRUFBRTRDLFNBQTVCO0FBQXVDbEMsSUFBQUEsS0FBSyxFQUFFO0FBQTlDLEdBQVg7QUFBQSxNQUNJcUMsS0FBSyxHQUFHO0FBQUNKLElBQUFBLE1BQU0sRUFBRUUsV0FBVDtBQUFzQjdDLElBQUFBLEtBQUssRUFBRThDLFVBQTdCO0FBQXlDcEMsSUFBQUEsS0FBSyxFQUFFO0FBQWhELEdBRFosQ0FId0UsQ0FNeEU7O0FBQ0FzQyxFQUFBQSxhQUFhLENBQUNsRCxJQUFELEVBQU9PLElBQVAsRUFBYTBDLEtBQWIsQ0FBYjtBQUNBQyxFQUFBQSxhQUFhLENBQUNsRCxJQUFELEVBQU9pRCxLQUFQLEVBQWMxQyxJQUFkLENBQWIsQ0FSd0UsQ0FVeEU7O0FBQ0EsU0FBT0EsSUFBSSxDQUFDSyxLQUFMLEdBQWFMLElBQUksQ0FBQ0wsS0FBTCxDQUFXc0IsTUFBeEIsSUFBa0N5QixLQUFLLENBQUNyQyxLQUFOLEdBQWNxQyxLQUFLLENBQUMvQyxLQUFOLENBQVlzQixNQUFuRSxFQUEyRTtBQUN6RSxRQUFJQyxXQUFXLEdBQUdsQixJQUFJLENBQUNMLEtBQUwsQ0FBV0ssSUFBSSxDQUFDSyxLQUFoQixDQUFsQjtBQUFBLFFBQ0l1QyxZQUFZLEdBQUdGLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWStDLEtBQUssQ0FBQ3JDLEtBQWxCLENBRG5COztBQUdBLFFBQUksQ0FBQ2EsV0FBVyxDQUFDLENBQUQsQ0FBWCxLQUFtQixHQUFuQixJQUEwQkEsV0FBVyxDQUFDLENBQUQsQ0FBWCxLQUFtQixHQUE5QyxNQUNJMEIsWUFBWSxDQUFDLENBQUQsQ0FBWixLQUFvQixHQUFwQixJQUEyQkEsWUFBWSxDQUFDLENBQUQsQ0FBWixLQUFvQixHQURuRCxDQUFKLEVBQzZEO0FBQzNEO0FBQ0FDLE1BQUFBLFlBQVksQ0FBQ3BELElBQUQsRUFBT08sSUFBUCxFQUFhMEMsS0FBYixDQUFaO0FBQ0QsS0FKRCxNQUlPLElBQUl4QixXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CLEdBQW5CLElBQTBCMEIsWUFBWSxDQUFDLENBQUQsQ0FBWixLQUFvQixHQUFsRCxFQUF1RDtBQUFBO0FBQUE7O0FBQUE7QUFDNUQ7O0FBQ0E7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUFuRCxNQUFBQSxJQUFJLENBQUNFLEtBQUwsRUFBVzRCLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQnVCLE1BQUFBLGFBQWEsQ0FBQzlDLElBQUQsQ0FBakM7QUFDRCxLQUhNLE1BR0EsSUFBSTRDLFlBQVksQ0FBQyxDQUFELENBQVosS0FBb0IsR0FBcEIsSUFBMkIxQixXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CLEdBQWxELEVBQXVEO0FBQUE7QUFBQTs7QUFBQTtBQUM1RDs7QUFDQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQXpCLE1BQUFBLElBQUksQ0FBQ0UsS0FBTCxFQUFXNEIsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9CdUIsTUFBQUEsYUFBYSxDQUFDSixLQUFELENBQWpDO0FBQ0QsS0FITSxNQUdBLElBQUl4QixXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CLEdBQW5CLElBQTBCMEIsWUFBWSxDQUFDLENBQUQsQ0FBWixLQUFvQixHQUFsRCxFQUF1RDtBQUM1RDtBQUNBRyxNQUFBQSxPQUFPLENBQUN0RCxJQUFELEVBQU9PLElBQVAsRUFBYTBDLEtBQWIsQ0FBUDtBQUNELEtBSE0sTUFHQSxJQUFJRSxZQUFZLENBQUMsQ0FBRCxDQUFaLEtBQW9CLEdBQXBCLElBQTJCMUIsV0FBVyxDQUFDLENBQUQsQ0FBWCxLQUFtQixHQUFsRCxFQUF1RDtBQUM1RDtBQUNBNkIsTUFBQUEsT0FBTyxDQUFDdEQsSUFBRCxFQUFPaUQsS0FBUCxFQUFjMUMsSUFBZCxFQUFvQixJQUFwQixDQUFQO0FBQ0QsS0FITSxNQUdBLElBQUlrQixXQUFXLEtBQUswQixZQUFwQixFQUFrQztBQUN2QztBQUNBbkQsTUFBQUEsSUFBSSxDQUFDRSxLQUFMLENBQVc0QixJQUFYLENBQWdCTCxXQUFoQjtBQUNBbEIsTUFBQUEsSUFBSSxDQUFDSyxLQUFMO0FBQ0FxQyxNQUFBQSxLQUFLLENBQUNyQyxLQUFOO0FBQ0QsS0FMTSxNQUtBO0FBQ0w7QUFDQStCLE1BQUFBLFFBQVEsQ0FBQzNDLElBQUQsRUFBT3FELGFBQWEsQ0FBQzlDLElBQUQsQ0FBcEIsRUFBNEI4QyxhQUFhLENBQUNKLEtBQUQsQ0FBekMsQ0FBUjtBQUNEO0FBQ0YsR0F4Q3VFLENBMEN4RTs7O0FBQ0FNLEVBQUFBLGNBQWMsQ0FBQ3ZELElBQUQsRUFBT08sSUFBUCxDQUFkO0FBQ0FnRCxFQUFBQSxjQUFjLENBQUN2RCxJQUFELEVBQU9pRCxLQUFQLENBQWQ7QUFFQWxELEVBQUFBLGFBQWEsQ0FBQ0MsSUFBRCxDQUFiO0FBQ0Q7O0FBRUQsU0FBU29ELFlBQVQsQ0FBc0JwRCxJQUF0QixFQUE0Qk8sSUFBNUIsRUFBa0MwQyxLQUFsQyxFQUF5QztBQUN2QyxNQUFJTyxTQUFTLEdBQUdILGFBQWEsQ0FBQzlDLElBQUQsQ0FBN0I7QUFBQSxNQUNJa0QsWUFBWSxHQUFHSixhQUFhLENBQUNKLEtBQUQsQ0FEaEM7O0FBR0EsTUFBSVMsVUFBVSxDQUFDRixTQUFELENBQVYsSUFBeUJFLFVBQVUsQ0FBQ0QsWUFBRCxDQUF2QyxFQUF1RDtBQUNyRDtBQUNBO0FBQUk7QUFBQTtBQUFBOztBQUFBRTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBO0FBQUEsS0FBZ0JILFNBQWhCLEVBQTJCQyxZQUEzQixLQUNHRyxrQkFBa0IsQ0FBQ1gsS0FBRCxFQUFRTyxTQUFSLEVBQW1CQSxTQUFTLENBQUNoQyxNQUFWLEdBQW1CaUMsWUFBWSxDQUFDakMsTUFBbkQsQ0FEekIsRUFDcUY7QUFBQTtBQUFBOztBQUFBOztBQUNuRjs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQXhCLE1BQUFBLElBQUksQ0FBQ0UsS0FBTCxFQUFXNEIsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9CMEIsTUFBQUEsU0FBcEI7O0FBQ0E7QUFDRCxLQUpELE1BSU87QUFBSTtBQUFBO0FBQUE7O0FBQUFHO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxLQUFnQkYsWUFBaEIsRUFBOEJELFNBQTlCLEtBQ0pJLGtCQUFrQixDQUFDckQsSUFBRCxFQUFPa0QsWUFBUCxFQUFxQkEsWUFBWSxDQUFDakMsTUFBYixHQUFzQmdDLFNBQVMsQ0FBQ2hDLE1BQXJELENBRGxCLEVBQ2dGO0FBQUE7QUFBQTs7QUFBQTs7QUFDckY7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUF4QixNQUFBQSxJQUFJLENBQUNFLEtBQUwsRUFBVzRCLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjJCLE1BQUFBLFlBQXBCOztBQUNBO0FBQ0Q7QUFDRixHQVhELE1BV087QUFBSTtBQUFBO0FBQUE7O0FBQUFJO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxHQUFXTCxTQUFYLEVBQXNCQyxZQUF0QixDQUFKLEVBQXlDO0FBQUE7QUFBQTs7QUFBQTs7QUFDOUM7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUF6RCxJQUFBQSxJQUFJLENBQUNFLEtBQUwsRUFBVzRCLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjBCLElBQUFBLFNBQXBCOztBQUNBO0FBQ0Q7O0FBRURiLEVBQUFBLFFBQVEsQ0FBQzNDLElBQUQsRUFBT3dELFNBQVAsRUFBa0JDLFlBQWxCLENBQVI7QUFDRDs7QUFFRCxTQUFTSCxPQUFULENBQWlCdEQsSUFBakIsRUFBdUJPLElBQXZCLEVBQTZCMEMsS0FBN0IsRUFBb0NhLElBQXBDLEVBQTBDO0FBQ3hDLE1BQUlOLFNBQVMsR0FBR0gsYUFBYSxDQUFDOUMsSUFBRCxDQUE3QjtBQUFBLE1BQ0lrRCxZQUFZLEdBQUdNLGNBQWMsQ0FBQ2QsS0FBRCxFQUFRTyxTQUFSLENBRGpDOztBQUVBLE1BQUlDLFlBQVksQ0FBQ08sTUFBakIsRUFBeUI7QUFBQTtBQUFBOztBQUFBOztBQUN2Qjs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQWhFLElBQUFBLElBQUksQ0FBQ0UsS0FBTCxFQUFXNEIsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9CMkIsSUFBQUEsWUFBWSxDQUFDTyxNQUFqQztBQUNELEdBRkQsTUFFTztBQUNMckIsSUFBQUEsUUFBUSxDQUFDM0MsSUFBRCxFQUFPOEQsSUFBSSxHQUFHTCxZQUFILEdBQWtCRCxTQUE3QixFQUF3Q00sSUFBSSxHQUFHTixTQUFILEdBQWVDLFlBQTNELENBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNkLFFBQVQsQ0FBa0IzQyxJQUFsQixFQUF3Qk8sSUFBeEIsRUFBOEIwQyxLQUE5QixFQUFxQztBQUNuQ2pELEVBQUFBLElBQUksQ0FBQzJDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTNDLEVBQUFBLElBQUksQ0FBQ0UsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQjtBQUNkYSxJQUFBQSxRQUFRLEVBQUUsSUFESTtBQUVkcEMsSUFBQUEsSUFBSSxFQUFFQSxJQUZRO0FBR2RDLElBQUFBLE1BQU0sRUFBRXlDO0FBSE0sR0FBaEI7QUFLRDs7QUFFRCxTQUFTQyxhQUFULENBQXVCbEQsSUFBdkIsRUFBNkJpRSxNQUE3QixFQUFxQ2hCLEtBQXJDLEVBQTRDO0FBQzFDLFNBQU9nQixNQUFNLENBQUNwQixNQUFQLEdBQWdCSSxLQUFLLENBQUNKLE1BQXRCLElBQWdDb0IsTUFBTSxDQUFDckQsS0FBUCxHQUFlcUQsTUFBTSxDQUFDL0QsS0FBUCxDQUFhc0IsTUFBbkUsRUFBMkU7QUFDekUsUUFBSTBDLElBQUksR0FBR0QsTUFBTSxDQUFDL0QsS0FBUCxDQUFhK0QsTUFBTSxDQUFDckQsS0FBUCxFQUFiLENBQVg7QUFDQVosSUFBQUEsSUFBSSxDQUFDRSxLQUFMLENBQVc0QixJQUFYLENBQWdCb0MsSUFBaEI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDcEIsTUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBU1UsY0FBVCxDQUF3QnZELElBQXhCLEVBQThCaUUsTUFBOUIsRUFBc0M7QUFDcEMsU0FBT0EsTUFBTSxDQUFDckQsS0FBUCxHQUFlcUQsTUFBTSxDQUFDL0QsS0FBUCxDQUFhc0IsTUFBbkMsRUFBMkM7QUFDekMsUUFBSTBDLElBQUksR0FBR0QsTUFBTSxDQUFDL0QsS0FBUCxDQUFhK0QsTUFBTSxDQUFDckQsS0FBUCxFQUFiLENBQVg7QUFDQVosSUFBQUEsSUFBSSxDQUFDRSxLQUFMLENBQVc0QixJQUFYLENBQWdCb0MsSUFBaEI7QUFDRDtBQUNGOztBQUVELFNBQVNiLGFBQVQsQ0FBdUJjLEtBQXZCLEVBQThCO0FBQzVCLE1BQUl4RCxHQUFHLEdBQUcsRUFBVjtBQUFBLE1BQ0l5RCxTQUFTLEdBQUdELEtBQUssQ0FBQ2pFLEtBQU4sQ0FBWWlFLEtBQUssQ0FBQ3ZELEtBQWxCLEVBQXlCLENBQXpCLENBRGhCOztBQUVBLFNBQU91RCxLQUFLLENBQUN2RCxLQUFOLEdBQWN1RCxLQUFLLENBQUNqRSxLQUFOLENBQVlzQixNQUFqQyxFQUF5QztBQUN2QyxRQUFJMEMsSUFBSSxHQUFHQyxLQUFLLENBQUNqRSxLQUFOLENBQVlpRSxLQUFLLENBQUN2RCxLQUFsQixDQUFYLENBRHVDLENBR3ZDOztBQUNBLFFBQUl3RCxTQUFTLEtBQUssR0FBZCxJQUFxQkYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLEdBQXJDLEVBQTBDO0FBQ3hDRSxNQUFBQSxTQUFTLEdBQUcsR0FBWjtBQUNEOztBQUVELFFBQUlBLFNBQVMsS0FBS0YsSUFBSSxDQUFDLENBQUQsQ0FBdEIsRUFBMkI7QUFDekJ2RCxNQUFBQSxHQUFHLENBQUNtQixJQUFKLENBQVNvQyxJQUFUO0FBQ0FDLE1BQUFBLEtBQUssQ0FBQ3ZELEtBQU47QUFDRCxLQUhELE1BR087QUFDTDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0QsR0FBUDtBQUNEOztBQUNELFNBQVNvRCxjQUFULENBQXdCSSxLQUF4QixFQUErQkUsWUFBL0IsRUFBNkM7QUFDM0MsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFBQSxNQUNJTixNQUFNLEdBQUcsRUFEYjtBQUFBLE1BRUlPLFVBQVUsR0FBRyxDQUZqQjtBQUFBLE1BR0lDLGNBQWMsR0FBRyxLQUhyQjtBQUFBLE1BSUlDLFVBQVUsR0FBRyxLQUpqQjs7QUFLQSxTQUFPRixVQUFVLEdBQUdGLFlBQVksQ0FBQzdDLE1BQTFCLElBQ0UyQyxLQUFLLENBQUN2RCxLQUFOLEdBQWN1RCxLQUFLLENBQUNqRSxLQUFOLENBQVlzQixNQURuQyxFQUMyQztBQUN6QyxRQUFJa0QsTUFBTSxHQUFHUCxLQUFLLENBQUNqRSxLQUFOLENBQVlpRSxLQUFLLENBQUN2RCxLQUFsQixDQUFiO0FBQUEsUUFDSStELEtBQUssR0FBR04sWUFBWSxDQUFDRSxVQUFELENBRHhCLENBRHlDLENBSXpDOztBQUNBLFFBQUlJLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxHQUFqQixFQUFzQjtBQUNwQjtBQUNEOztBQUVESCxJQUFBQSxjQUFjLEdBQUdBLGNBQWMsSUFBSUUsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLEdBQWpEO0FBRUFWLElBQUFBLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWTZDLEtBQVo7QUFDQUosSUFBQUEsVUFBVSxHQVorQixDQWN6QztBQUNBOztBQUNBLFFBQUlHLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBYyxHQUFsQixFQUF1QjtBQUNyQkQsTUFBQUEsVUFBVSxHQUFHLElBQWI7O0FBRUEsYUFBT0MsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLEdBQXJCLEVBQTBCO0FBQ3hCSixRQUFBQSxPQUFPLENBQUN4QyxJQUFSLENBQWE0QyxNQUFiO0FBQ0FBLFFBQUFBLE1BQU0sR0FBR1AsS0FBSyxDQUFDakUsS0FBTixDQUFZLEVBQUVpRSxLQUFLLENBQUN2RCxLQUFwQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJK0QsS0FBSyxDQUFDQyxNQUFOLENBQWEsQ0FBYixNQUFvQkYsTUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBZCxDQUF4QixFQUEwQztBQUN4Q04sTUFBQUEsT0FBTyxDQUFDeEMsSUFBUixDQUFhNEMsTUFBYjtBQUNBUCxNQUFBQSxLQUFLLENBQUN2RCxLQUFOO0FBQ0QsS0FIRCxNQUdPO0FBQ0w2RCxNQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSSxDQUFDSixZQUFZLENBQUNFLFVBQUQsQ0FBWixJQUE0QixFQUE3QixFQUFpQyxDQUFqQyxNQUF3QyxHQUF4QyxJQUNHQyxjQURQLEVBQ3VCO0FBQ3JCQyxJQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNEOztBQUVELE1BQUlBLFVBQUosRUFBZ0I7QUFDZCxXQUFPSCxPQUFQO0FBQ0Q7O0FBRUQsU0FBT0MsVUFBVSxHQUFHRixZQUFZLENBQUM3QyxNQUFqQyxFQUF5QztBQUN2Q3dDLElBQUFBLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWXVDLFlBQVksQ0FBQ0UsVUFBVSxFQUFYLENBQXhCO0FBQ0Q7O0FBRUQsU0FBTztBQUNMUCxJQUFBQSxNQUFNLEVBQU5BLE1BREs7QUFFTE0sSUFBQUEsT0FBTyxFQUFQQTtBQUZLLEdBQVA7QUFJRDs7QUFFRCxTQUFTWixVQUFULENBQW9CWSxPQUFwQixFQUE2QjtBQUMzQixTQUFPQSxPQUFPLENBQUNPLE1BQVIsQ0FBZSxVQUFTQyxJQUFULEVBQWVKLE1BQWYsRUFBdUI7QUFDM0MsV0FBT0ksSUFBSSxJQUFJSixNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWMsR0FBN0I7QUFDRCxHQUZNLEVBRUosSUFGSSxDQUFQO0FBR0Q7O0FBQ0QsU0FBU2Qsa0JBQVQsQ0FBNEJPLEtBQTVCLEVBQW1DWSxhQUFuQyxFQUFrREMsS0FBbEQsRUFBeUQ7QUFDdkQsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFwQixFQUEyQkMsQ0FBQyxFQUE1QixFQUFnQztBQUM5QixRQUFJQyxhQUFhLEdBQUdILGFBQWEsQ0FBQ0EsYUFBYSxDQUFDdkQsTUFBZCxHQUF1QndELEtBQXZCLEdBQStCQyxDQUFoQyxDQUFiLENBQWdETCxNQUFoRCxDQUF1RCxDQUF2RCxDQUFwQjs7QUFDQSxRQUFJVCxLQUFLLENBQUNqRSxLQUFOLENBQVlpRSxLQUFLLENBQUN2RCxLQUFOLEdBQWNxRSxDQUExQixNQUFpQyxNQUFNQyxhQUEzQyxFQUEwRDtBQUN4RCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVEZixFQUFBQSxLQUFLLENBQUN2RCxLQUFOLElBQWVvRSxLQUFmO0FBQ0EsU0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBUy9FLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxNQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxDQUFmO0FBRUFGLEVBQUFBLEtBQUssQ0FBQ2lGLE9BQU4sQ0FBYyxVQUFTakIsSUFBVCxFQUFlO0FBQzNCLFFBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixVQUFJa0IsT0FBTyxHQUFHbkYsbUJBQW1CLENBQUNpRSxJQUFJLENBQUMzRCxJQUFOLENBQWpDO0FBQ0EsVUFBSThFLFVBQVUsR0FBR3BGLG1CQUFtQixDQUFDaUUsSUFBSSxDQUFDMUQsTUFBTixDQUFwQzs7QUFFQSxVQUFJTCxRQUFRLEtBQUtFLFNBQWpCLEVBQTRCO0FBQzFCLFlBQUkrRSxPQUFPLENBQUNqRixRQUFSLEtBQXFCa0YsVUFBVSxDQUFDbEYsUUFBcEMsRUFBOEM7QUFDNUNBLFVBQUFBLFFBQVEsSUFBSWlGLE9BQU8sQ0FBQ2pGLFFBQXBCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLFVBQUFBLFFBQVEsR0FBR0UsU0FBWDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUQsUUFBUSxLQUFLQyxTQUFqQixFQUE0QjtBQUMxQixZQUFJK0UsT0FBTyxDQUFDaEYsUUFBUixLQUFxQmlGLFVBQVUsQ0FBQ2pGLFFBQXBDLEVBQThDO0FBQzVDQSxVQUFBQSxRQUFRLElBQUlnRixPQUFPLENBQUNoRixRQUFwQjtBQUNELFNBRkQsTUFFTztBQUNMQSxVQUFBQSxRQUFRLEdBQUdDLFNBQVg7QUFDRDtBQUNGO0FBQ0YsS0FuQkQsTUFtQk87QUFDTCxVQUFJRCxRQUFRLEtBQUtDLFNBQWIsS0FBMkI2RCxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksR0FBWixJQUFtQkEsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEU5RCxRQUFBQSxRQUFRO0FBQ1Q7O0FBQ0QsVUFBSUQsUUFBUSxLQUFLRSxTQUFiLEtBQTJCNkQsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLEdBQVosSUFBbUJBLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxHQUExRCxDQUFKLEVBQW9FO0FBQ2xFL0QsUUFBQUEsUUFBUTtBQUNUO0FBQ0Y7QUFDRixHQTVCRDtBQThCQSxTQUFPO0FBQUNBLElBQUFBLFFBQVEsRUFBUkEsUUFBRDtBQUFXQyxJQUFBQSxRQUFRLEVBQVJBO0FBQVgsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2h9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7YXJyYXlFcXVhbCwgYXJyYXlTdGFydHNXaXRofSBmcm9tICcuLi91dGlsL2FycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICBjb25zdCB7b2xkTGluZXMsIG5ld0xpbmVzfSA9IGNhbGNPbGROZXdMaW5lQ291bnQoaHVuay5saW5lcyk7XG5cbiAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBodW5rLm9sZExpbmVzID0gb2xkTGluZXM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsubmV3TGluZXMgPSBuZXdMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuXG4gIGxldCByZXQgPSB7fTtcblxuICAvLyBGb3IgaW5kZXggd2UganVzdCBsZXQgaXQgcGFzcyB0aHJvdWdoIGFzIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgbmVjZXNzYXJ5IG1lYW5pbmcuXG4gIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxuICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgfVxuXG4gIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldC5odW5rcyA9IFtdO1xuXG4gIGxldCBtaW5lSW5kZXggPSAwLFxuICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgbWluZU9mZnNldCA9IDAsXG4gICAgICB0aGVpcnNPZmZzZXQgPSAwO1xuXG4gIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX0sXG4gICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtvbGRTdGFydDogSW5maW5pdHl9O1xuXG4gICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICBtaW5lSW5kZXgrKztcbiAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgIGxldCBtZXJnZWRIdW5rID0ge1xuICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICBsaW5lczogW11cbiAgICAgIH07XG4gICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZUluZGV4Kys7XG5cbiAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgIGlmICgoL15AQC9tKS50ZXN0KHBhcmFtKSB8fCAoKC9eSW5kZXg6L20pLnRlc3QocGFyYW0pKSkge1xuICAgICAgcmV0dXJuIHBhcnNlUGF0Y2gocGFyYW0pWzBdO1xuICAgIH1cblxuICAgIGlmICghYmFzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSBiYXNlIHJlZmVyZW5jZSBvciBwYXNzIGluIGEgcGF0Y2gnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cnVjdHVyZWRQYXRjaCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgYmFzZSwgcGFyYW0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtO1xufVxuXG5mdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgcmV0dXJuIHBhdGNoLm5ld0ZpbGVOYW1lICYmIHBhdGNoLm5ld0ZpbGVOYW1lICE9PSBwYXRjaC5vbGRGaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XG4gICAgcmV0dXJuIG1pbmU7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xuICAgIHJldHVybiB7bWluZSwgdGhlaXJzfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBodW5rQmVmb3JlKHRlc3QsIGNoZWNrKSB7XG4gIHJldHVybiB0ZXN0Lm9sZFN0YXJ0IDwgY2hlY2sub2xkU3RhcnRcbiAgICAmJiAodGVzdC5vbGRTdGFydCArIHRlc3Qub2xkTGluZXMpIDwgY2hlY2sub2xkU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGNsb25lSHVuayhodW5rLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHtcbiAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCwgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXG4gICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsIG5ld0xpbmVzOiBodW5rLm5ld0xpbmVzLFxuICAgIGxpbmVzOiBodW5rLmxpbmVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xuICAvLyBUaGlzIHdpbGwgZ2VuZXJhbGx5IHJlc3VsdCBpbiBhIGNvbmZsaWN0ZWQgaHVuaywgYnV0IHRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgY29udGV4dFxuICAvLyBpcyB0aGUgb25seSBvdmVybGFwIHdoZXJlIHdlIGNhbiBzdWNjZXNzZnVsbHkgbWVyZ2UgdGhlIGNvbnRlbnQgaGVyZS5cbiAgbGV0IG1pbmUgPSB7b2Zmc2V0OiBtaW5lT2Zmc2V0LCBsaW5lczogbWluZUxpbmVzLCBpbmRleDogMH0sXG4gICAgICB0aGVpciA9IHtvZmZzZXQ6IHRoZWlyT2Zmc2V0LCBsaW5lczogdGhlaXJMaW5lcywgaW5kZXg6IDB9O1xuXG4gIC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XG4gIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICBpbnNlcnRMZWFkaW5nKGh1bmssIHRoZWlyLCBtaW5lKTtcblxuICAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG4gIHdoaWxlIChtaW5lLmluZGV4IDwgbWluZS5saW5lcy5sZW5ndGggJiYgdGhlaXIuaW5kZXggPCB0aGVpci5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICB0aGVpckN1cnJlbnQgPSB0aGVpci5saW5lc1t0aGVpci5pbmRleF07XG5cbiAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJylcbiAgICAgICAgJiYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nIHx8IHRoZWlyQ3VycmVudFswXSA9PT0gJysnKSkge1xuICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJysnICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIGluc2VydGVkXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UobWluZSkpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnKycgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIE1pbmUgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXIgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgLy8gQ29udGV4dCBpZGVudGl0eVxuICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcbiAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgIHRoZWlyLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgIGNvbmZsaWN0KGh1bmssIGNvbGxlY3RDaGFuZ2UobWluZSksIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9XG4gIH1cblxuICAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcbiAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgbWluZSk7XG4gIGluc2VydFRyYWlsaW5nKGh1bmssIHRoZWlyKTtcblxuICBjYWxjTGluZUNvdW50KGh1bmspO1xufVxuXG5mdW5jdGlvbiBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgbGV0IG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcblxuICBpZiAoYWxsUmVtb3ZlcyhteUNoYW5nZXMpICYmIGFsbFJlbW92ZXModGhlaXJDaGFuZ2VzKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgaWYgKGFycmF5U3RhcnRzV2l0aChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KHRoZWlyLCBteUNoYW5nZXMsIG15Q2hhbmdlcy5sZW5ndGggLSB0aGVpckNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlTdGFydHNXaXRoKHRoZWlyQ2hhbmdlcywgbXlDaGFuZ2VzKVxuICAgICAgICAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJyYXlFcXVhbChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykpIHtcbiAgICBodW5rLmxpbmVzLnB1c2goLi4uIG15Q2hhbmdlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG4gIGlmICh0aGVpckNoYW5nZXMubWVyZ2VkKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiB0aGVpckNoYW5nZXMubWVyZ2VkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICBodW5rLmNvbmZsaWN0ID0gdHJ1ZTtcbiAgaHVuay5saW5lcy5wdXNoKHtcbiAgICBjb25mbGljdDogdHJ1ZSxcbiAgICBtaW5lOiBtaW5lLFxuICAgIHRoZWlyczogdGhlaXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydExlYWRpbmcoaHVuaywgaW5zZXJ0LCB0aGVpcikge1xuICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICBpbnNlcnQub2Zmc2V0Kys7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc2VydFRyYWlsaW5nKGh1bmssIGluc2VydCkge1xuICB3aGlsZSAoaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGVjdENoYW5nZShzdGF0ZSkge1xuICBsZXQgcmV0ID0gW10sXG4gICAgICBvcGVyYXRpb24gPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF1bMF07XG4gIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdO1xuXG4gICAgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxuICAgIGlmIChvcGVyYXRpb24gPT09ICctJyAmJiBsaW5lWzBdID09PSAnKycpIHtcbiAgICAgIG9wZXJhdGlvbiA9ICcrJztcbiAgICB9XG5cbiAgICBpZiAob3BlcmF0aW9uID09PSBsaW5lWzBdKSB7XG4gICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XG4gIGxldCBjaGFuZ2VzID0gW10sXG4gICAgICBtZXJnZWQgPSBbXSxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgY29udGV4dENoYW5nZXMgPSBmYWxzZSxcbiAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoXG4gICAgICAgICYmIHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07XG5cbiAgICAvLyBPbmNlIHdlJ3ZlIGhpdCBvdXIgYWRkLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnRleHRDaGFuZ2VzID0gY29udGV4dENoYW5nZXMgfHwgY2hhbmdlWzBdICE9PSAnICc7XG5cbiAgICBtZXJnZWQucHVzaChtYXRjaCk7XG4gICAgbWF0Y2hJbmRleCsrO1xuXG4gICAgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAvLyB0byBwdWxsIGluIHRoZSByZW1haW5pbmcgY29udGV4dCBhZnRlciB0aGlzXG4gICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcblxuICAgICAgd2hpbGUgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2UgPSBzdGF0ZS5saW5lc1srK3N0YXRlLmluZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpID09PSBjaGFuZ2Uuc3Vic3RyKDEpKSB7XG4gICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICgobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdIHx8ICcnKVswXSA9PT0gJysnXG4gICAgICAmJiBjb250ZXh0Q2hhbmdlcykge1xuICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICByZXR1cm4gY2hhbmdlcztcbiAgfVxuXG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCkge1xuICAgIG1lcmdlZC5wdXNoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4KytdKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWVyZ2VkLFxuICAgIGNoYW5nZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjaGFuZ2UpIHtcbiAgICByZXR1cm4gcHJldiAmJiBjaGFuZ2VbMF0gPT09ICctJztcbiAgfSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBza2lwUmVtb3ZlU3VwZXJzZXQoc3RhdGUsIHJlbW92ZUNoYW5nZXMsIGRlbHRhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgIGxldCBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xuICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmVzKSB7XG4gIGxldCBvbGRMaW5lcyA9IDA7XG4gIGxldCBuZXdMaW5lcyA9IDA7XG5cbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG15Q291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUubWluZSk7XG4gICAgICBsZXQgdGhlaXJDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS50aGVpcnMpO1xuXG4gICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobXlDb3VudC5vbGRMaW5lcyA9PT0gdGhlaXJDb3VudC5vbGRMaW5lcykge1xuICAgICAgICAgIG9sZExpbmVzICs9IG15Q291bnQub2xkTGluZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQubmV3TGluZXMgPT09IHRoZWlyQ291bnQubmV3TGluZXMpIHtcbiAgICAgICAgICBuZXdMaW5lcyArPSBteUNvdW50Lm5ld0xpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0xpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBuZXdMaW5lcysrO1xuICAgICAgfVxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICctJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgIG9sZExpbmVzKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge29sZExpbmVzLCBuZXdMaW5lc307XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/patch/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/patch/parse.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parsePatch = parsePatch;

/*istanbul ignore end*/
function parsePatch(uniDiff) {
  /*istanbul ignore start*/
  var
  /*istanbul ignore end*/
  options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
      delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      list = [],
      i = 0;

  function parseIndex() {
    var index = {};
    list.push(index); // Parse diff metadata

    while (i < diffstr.length) {
      var line = diffstr[i]; // File header found, end parsing diff metadata

      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
        break;
      } // Diff index


      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

      if (header) {
        index.index = header[1];
      }

      i++;
    } // Parse file headers if they are defined. Unified diff requires them, but
    // there's no technical issues to have an isolated hunk without file header


    parseFileHeader(index);
    parseFileHeader(index); // Parse hunks

    index.hunks = [];

    while (i < diffstr.length) {
      var _line = diffstr[i];

      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
        break;
      } else if (/^@@/.test(_line)) {
        index.hunks.push(parseHunk());
      } else if (_line && options.strict) {
        // Ignore unexpected content unless in strict mode
        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
      } else {
        i++;
      }
    }
  } // Parses the --- and +++ headers, if none are found, no lines
  // are consumed.


  function parseFileHeader(index) {
    var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

    if (fileHeader) {
      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
      var data = fileHeader[2].split('\t', 2);
      var fileName = data[0].replace(/\\\\/g, '\\');

      if (/^".*"$/.test(fileName)) {
        fileName = fileName.substr(1, fileName.length - 2);
      }

      index[keyPrefix + 'FileName'] = fileName;
      index[keyPrefix + 'Header'] = (data[1] || '').trim();
      i++;
    }
  } // Parses a hunk
  // This assumes that we are at the start of a hunk.


  function parseHunk() {
    var chunkHeaderIndex = i,
        chunkHeaderLine = diffstr[i++],
        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    var hunk = {
      oldStart: +chunkHeader[1],
      oldLines: typeof chunkHeader[2] === 'undefined' ? 1 : +chunkHeader[2],
      newStart: +chunkHeader[3],
      newLines: typeof chunkHeader[4] === 'undefined' ? 1 : +chunkHeader[4],
      lines: [],
      linedelimiters: []
    }; // Unified Diff Format quirk: If the chunk size is 0,
    // the first number is one lower than one would expect.
    // https://www.artima.com/weblogs/viewpost.jsp?thread=164293

    if (hunk.oldLines === 0) {
      hunk.oldStart += 1;
    }

    if (hunk.newLines === 0) {
      hunk.newStart += 1;
    }

    var addCount = 0,
        removeCount = 0;

    for (; i < diffstr.length; i++) {
      // Lines starting with '---' could be mistaken for the "remove line" operation
      // But they could be the header for the next file. Therefore prune such cases out.
      if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
        break;
      }

      var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
        hunk.lines.push(diffstr[i]);
        hunk.linedelimiters.push(delimiters[i] || '\n');

        if (operation === '+') {
          addCount++;
        } else if (operation === '-') {
          removeCount++;
        } else if (operation === ' ') {
          addCount++;
          removeCount++;
        }
      } else {
        break;
      }
    } // Handle the empty block count case


    if (!addCount && hunk.newLines === 1) {
      hunk.newLines = 0;
    }

    if (!removeCount && hunk.oldLines === 1) {
      hunk.oldLines = 0;
    } // Perform optional sanity checking


    if (options.strict) {
      if (addCount !== hunk.newLines) {
        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }

      if (removeCount !== hunk.oldLines) {
        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }
    }

    return hunk;
  }

  while (i < diffstr.length) {
    parseIndex();
  }

  return list;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGVIZWFkZXIiLCJrZXlQcmVmaXgiLCJkYXRhIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3Vic3RyIiwidHJpbSIsImNodW5rSGVhZGVySW5kZXgiLCJjaHVua0hlYWRlckxpbmUiLCJjaHVua0hlYWRlciIsImh1bmsiLCJvbGRTdGFydCIsIm9sZExpbmVzIiwibmV3U3RhcnQiLCJuZXdMaW5lcyIsImxpbmVzIiwibGluZWRlbGltaXRlcnMiLCJhZGRDb3VudCIsInJlbW92ZUNvdW50IiwiaW5kZXhPZiIsIm9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsT0FBcEIsRUFBMkM7QUFBQTtBQUFBO0FBQUE7QUFBZEMsRUFBQUEsT0FBYyx1RUFBSixFQUFJO0FBQ2hELE1BQUlDLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxLQUFSLENBQWMscUJBQWQsQ0FBZDtBQUFBLE1BQ0lDLFVBQVUsR0FBR0osT0FBTyxDQUFDSyxLQUFSLENBQWMsc0JBQWQsS0FBeUMsRUFEMUQ7QUFBQSxNQUVJQyxJQUFJLEdBQUcsRUFGWDtBQUFBLE1BR0lDLENBQUMsR0FBRyxDQUhSOztBQUtBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVVELEtBQVYsRUFGb0IsQ0FJcEI7O0FBQ0EsV0FBT0YsQ0FBQyxHQUFHTCxPQUFPLENBQUNTLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQUlDLElBQUksR0FBR1YsT0FBTyxDQUFDSyxDQUFELENBQWxCLENBRHlCLENBR3pCOztBQUNBLFVBQUssdUJBQUQsQ0FBMEJNLElBQTFCLENBQStCRCxJQUEvQixDQUFKLEVBQTBDO0FBQ3hDO0FBQ0QsT0FOd0IsQ0FRekI7OztBQUNBLFVBQUlFLE1BQU0sR0FBSSwwQ0FBRCxDQUE2Q0MsSUFBN0MsQ0FBa0RILElBQWxELENBQWI7O0FBQ0EsVUFBSUUsTUFBSixFQUFZO0FBQ1ZMLFFBQUFBLEtBQUssQ0FBQ0EsS0FBTixHQUFjSyxNQUFNLENBQUMsQ0FBRCxDQUFwQjtBQUNEOztBQUVEUCxNQUFBQSxDQUFDO0FBQ0YsS0FwQm1CLENBc0JwQjtBQUNBOzs7QUFDQVMsSUFBQUEsZUFBZSxDQUFDUCxLQUFELENBQWY7QUFDQU8sSUFBQUEsZUFBZSxDQUFDUCxLQUFELENBQWYsQ0F6Qm9CLENBMkJwQjs7QUFDQUEsSUFBQUEsS0FBSyxDQUFDUSxLQUFOLEdBQWMsRUFBZDs7QUFFQSxXQUFPVixDQUFDLEdBQUdMLE9BQU8sQ0FBQ1MsTUFBbkIsRUFBMkI7QUFDekIsVUFBSUMsS0FBSSxHQUFHVixPQUFPLENBQUNLLENBQUQsQ0FBbEI7O0FBRUEsVUFBSyxnQ0FBRCxDQUFtQ00sSUFBbkMsQ0FBd0NELEtBQXhDLENBQUosRUFBbUQ7QUFDakQ7QUFDRCxPQUZELE1BRU8sSUFBSyxLQUFELENBQVFDLElBQVIsQ0FBYUQsS0FBYixDQUFKLEVBQXdCO0FBQzdCSCxRQUFBQSxLQUFLLENBQUNRLEtBQU4sQ0FBWVAsSUFBWixDQUFpQlEsU0FBUyxFQUExQjtBQUNELE9BRk0sTUFFQSxJQUFJTixLQUFJLElBQUlYLE9BQU8sQ0FBQ2tCLE1BQXBCLEVBQTRCO0FBQ2pDO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQVUsbUJBQW1CYixDQUFDLEdBQUcsQ0FBdkIsSUFBNEIsR0FBNUIsR0FBa0NjLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixLQUFmLENBQTVDLENBQU47QUFDRCxPQUhNLE1BR0E7QUFDTEwsUUFBQUEsQ0FBQztBQUNGO0FBQ0Y7QUFDRixHQWxEK0MsQ0FvRGhEO0FBQ0E7OztBQUNBLFdBQVNTLGVBQVQsQ0FBeUJQLEtBQXpCLEVBQWdDO0FBQzlCLFFBQU1jLFVBQVUsR0FBSSx1QkFBRCxDQUEwQlIsSUFBMUIsQ0FBK0JiLE9BQU8sQ0FBQ0ssQ0FBRCxDQUF0QyxDQUFuQjs7QUFDQSxRQUFJZ0IsVUFBSixFQUFnQjtBQUNkLFVBQUlDLFNBQVMsR0FBR0QsVUFBVSxDQUFDLENBQUQsQ0FBVixLQUFrQixLQUFsQixHQUEwQixLQUExQixHQUFrQyxLQUFsRDtBQUNBLFVBQU1FLElBQUksR0FBR0YsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjcEIsS0FBZCxDQUFvQixJQUFwQixFQUEwQixDQUExQixDQUFiO0FBQ0EsVUFBSXVCLFFBQVEsR0FBR0QsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRRSxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLElBQXpCLENBQWY7O0FBQ0EsVUFBSyxRQUFELENBQVdkLElBQVgsQ0FBZ0JhLFFBQWhCLENBQUosRUFBK0I7QUFDN0JBLFFBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDRSxNQUFULENBQWdCLENBQWhCLEVBQW1CRixRQUFRLENBQUNmLE1BQVQsR0FBa0IsQ0FBckMsQ0FBWDtBQUNEOztBQUNERixNQUFBQSxLQUFLLENBQUNlLFNBQVMsR0FBRyxVQUFiLENBQUwsR0FBZ0NFLFFBQWhDO0FBQ0FqQixNQUFBQSxLQUFLLENBQUNlLFNBQVMsR0FBRyxRQUFiLENBQUwsR0FBOEIsQ0FBQ0MsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLEVBQVosRUFBZ0JJLElBQWhCLEVBQTlCO0FBRUF0QixNQUFBQSxDQUFDO0FBQ0Y7QUFDRixHQXBFK0MsQ0FzRWhEO0FBQ0E7OztBQUNBLFdBQVNXLFNBQVQsR0FBcUI7QUFDbkIsUUFBSVksZ0JBQWdCLEdBQUd2QixDQUF2QjtBQUFBLFFBQ0l3QixlQUFlLEdBQUc3QixPQUFPLENBQUNLLENBQUMsRUFBRixDQUQ3QjtBQUFBLFFBRUl5QixXQUFXLEdBQUdELGVBQWUsQ0FBQzVCLEtBQWhCLENBQXNCLDRDQUF0QixDQUZsQjtBQUlBLFFBQUk4QixJQUFJLEdBQUc7QUFDVEMsTUFBQUEsUUFBUSxFQUFFLENBQUNGLFdBQVcsQ0FBQyxDQUFELENBRGI7QUFFVEcsTUFBQUEsUUFBUSxFQUFFLE9BQU9ILFdBQVcsQ0FBQyxDQUFELENBQWxCLEtBQTBCLFdBQTFCLEdBQXdDLENBQXhDLEdBQTRDLENBQUNBLFdBQVcsQ0FBQyxDQUFELENBRnpEO0FBR1RJLE1BQUFBLFFBQVEsRUFBRSxDQUFDSixXQUFXLENBQUMsQ0FBRCxDQUhiO0FBSVRLLE1BQUFBLFFBQVEsRUFBRSxPQUFPTCxXQUFXLENBQUMsQ0FBRCxDQUFsQixLQUEwQixXQUExQixHQUF3QyxDQUF4QyxHQUE0QyxDQUFDQSxXQUFXLENBQUMsQ0FBRCxDQUp6RDtBQUtUTSxNQUFBQSxLQUFLLEVBQUUsRUFMRTtBQU1UQyxNQUFBQSxjQUFjLEVBQUU7QUFOUCxLQUFYLENBTG1CLENBY25CO0FBQ0E7QUFDQTs7QUFDQSxRQUFJTixJQUFJLENBQUNFLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJGLE1BQUFBLElBQUksQ0FBQ0MsUUFBTCxJQUFpQixDQUFqQjtBQUNEOztBQUNELFFBQUlELElBQUksQ0FBQ0ksUUFBTCxLQUFrQixDQUF0QixFQUF5QjtBQUN2QkosTUFBQUEsSUFBSSxDQUFDRyxRQUFMLElBQWlCLENBQWpCO0FBQ0Q7O0FBRUQsUUFBSUksUUFBUSxHQUFHLENBQWY7QUFBQSxRQUNJQyxXQUFXLEdBQUcsQ0FEbEI7O0FBRUEsV0FBT2xDLENBQUMsR0FBR0wsT0FBTyxDQUFDUyxNQUFuQixFQUEyQkosQ0FBQyxFQUE1QixFQUFnQztBQUM5QjtBQUNBO0FBQ0EsVUFBSUwsT0FBTyxDQUFDSyxDQUFELENBQVAsQ0FBV21DLE9BQVgsQ0FBbUIsTUFBbkIsTUFBK0IsQ0FBL0IsSUFDTW5DLENBQUMsR0FBRyxDQUFKLEdBQVFMLE9BQU8sQ0FBQ1MsTUFEdEIsSUFFS1QsT0FBTyxDQUFDSyxDQUFDLEdBQUcsQ0FBTCxDQUFQLENBQWVtQyxPQUFmLENBQXVCLE1BQXZCLE1BQW1DLENBRnhDLElBR0t4QyxPQUFPLENBQUNLLENBQUMsR0FBRyxDQUFMLENBQVAsQ0FBZW1DLE9BQWYsQ0FBdUIsSUFBdkIsTUFBaUMsQ0FIMUMsRUFHNkM7QUFDekM7QUFDSDs7QUFDRCxVQUFJQyxTQUFTLEdBQUl6QyxPQUFPLENBQUNLLENBQUQsQ0FBUCxDQUFXSSxNQUFYLElBQXFCLENBQXJCLElBQTBCSixDQUFDLElBQUtMLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQixDQUFsRCxHQUF3RCxHQUF4RCxHQUE4RFQsT0FBTyxDQUFDSyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQTlFOztBQUVBLFVBQUlvQyxTQUFTLEtBQUssR0FBZCxJQUFxQkEsU0FBUyxLQUFLLEdBQW5DLElBQTBDQSxTQUFTLEtBQUssR0FBeEQsSUFBK0RBLFNBQVMsS0FBSyxJQUFqRixFQUF1RjtBQUNyRlYsUUFBQUEsSUFBSSxDQUFDSyxLQUFMLENBQVc1QixJQUFYLENBQWdCUixPQUFPLENBQUNLLENBQUQsQ0FBdkI7QUFDQTBCLFFBQUFBLElBQUksQ0FBQ00sY0FBTCxDQUFvQjdCLElBQXBCLENBQXlCTixVQUFVLENBQUNHLENBQUQsQ0FBVixJQUFpQixJQUExQzs7QUFFQSxZQUFJb0MsU0FBUyxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCSCxVQUFBQSxRQUFRO0FBQ1QsU0FGRCxNQUVPLElBQUlHLFNBQVMsS0FBSyxHQUFsQixFQUF1QjtBQUM1QkYsVUFBQUEsV0FBVztBQUNaLFNBRk0sTUFFQSxJQUFJRSxTQUFTLEtBQUssR0FBbEIsRUFBdUI7QUFDNUJILFVBQUFBLFFBQVE7QUFDUkMsVUFBQUEsV0FBVztBQUNaO0FBQ0YsT0FaRCxNQVlPO0FBQ0w7QUFDRDtBQUNGLEtBcERrQixDQXNEbkI7OztBQUNBLFFBQUksQ0FBQ0QsUUFBRCxJQUFhUCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBbkMsRUFBc0M7QUFDcENKLE1BQUFBLElBQUksQ0FBQ0ksUUFBTCxHQUFnQixDQUFoQjtBQUNEOztBQUNELFFBQUksQ0FBQ0ksV0FBRCxJQUFnQlIsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLENBQXRDLEVBQXlDO0FBQ3ZDRixNQUFBQSxJQUFJLENBQUNFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRCxLQTVEa0IsQ0E4RG5COzs7QUFDQSxRQUFJbEMsT0FBTyxDQUFDa0IsTUFBWixFQUFvQjtBQUNsQixVQUFJcUIsUUFBUSxLQUFLUCxJQUFJLENBQUNJLFFBQXRCLEVBQWdDO0FBQzlCLGNBQU0sSUFBSWpCLEtBQUosQ0FBVSxzREFBc0RVLGdCQUFnQixHQUFHLENBQXpFLENBQVYsQ0FBTjtBQUNEOztBQUNELFVBQUlXLFdBQVcsS0FBS1IsSUFBSSxDQUFDRSxRQUF6QixFQUFtQztBQUNqQyxjQUFNLElBQUlmLEtBQUosQ0FBVSx3REFBd0RVLGdCQUFnQixHQUFHLENBQTNFLENBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT0csSUFBUDtBQUNEOztBQUVELFNBQU8xQixDQUFDLEdBQUdMLE9BQU8sQ0FBQ1MsTUFBbkIsRUFBMkI7QUFDekJILElBQUFBLFVBQVU7QUFDWDs7QUFFRCxTQUFPRixJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcGFyc2VQYXRjaCh1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRpZmZzdHIgPSB1bmlEaWZmLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgZGVsaW1pdGVycyA9IHVuaURpZmYubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgbGlzdCA9IFtdLFxuICAgICAgaSA9IDA7XG5cbiAgZnVuY3Rpb24gcGFyc2VJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB7fTtcbiAgICBsaXN0LnB1c2goaW5kZXgpO1xuXG4gICAgLy8gUGFyc2UgZGlmZiBtZXRhZGF0YVxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcbiAgICAgIGlmICgoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvKS50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBEaWZmIGluZGV4XG4gICAgICBsZXQgaGVhZGVyID0gKC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLykuZXhlYyhsaW5lKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGh1bmtzXG4gICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgaWYgKCgvXihJbmRleDp8ZGlmZnxcXC1cXC1cXC18XFwrXFwrXFwrKVxccy8pLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKCgvXkBALykudGVzdChsaW5lKSkge1xuICAgICAgICBpbmRleC5odW5rcy5wdXNoKHBhcnNlSHVuaygpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZSAmJiBvcHRpb25zLnN0cmljdCkge1xuICAgICAgICAvLyBJZ25vcmUgdW5leHBlY3RlZCBjb250ZW50IHVubGVzcyBpbiBzdHJpY3QgbW9kZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGluZSAnICsgKGkgKyAxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KGxpbmUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAvLyBhcmUgY29uc3VtZWQuXG4gIGZ1bmN0aW9uIHBhcnNlRmlsZUhlYWRlcihpbmRleCkge1xuICAgIGNvbnN0IGZpbGVIZWFkZXIgPSAoL14oLS0tfFxcK1xcK1xcKylcXHMrKC4qKSQvKS5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgY29uc3QgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuICAgICAgaWYgKCgvXlwiLipcIiQvKS50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cigxLCBmaWxlTmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIH1cbiAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnSGVhZGVyJ10gPSAoZGF0YVsxXSB8fCAnJykudHJpbSgpO1xuXG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2VzIGEgaHVua1xuICAvLyBUaGlzIGFzc3VtZXMgdGhhdCB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIGEgaHVuay5cbiAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xuICAgIGxldCBjaHVua0hlYWRlckluZGV4ID0gaSxcbiAgICAgICAgY2h1bmtIZWFkZXJMaW5lID0gZGlmZnN0cltpKytdLFxuICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcblxuICAgIGxldCBodW5rID0ge1xuICAgICAgb2xkU3RhcnQ6ICtjaHVua0hlYWRlclsxXSxcbiAgICAgIG9sZExpbmVzOiB0eXBlb2YgY2h1bmtIZWFkZXJbMl0gPT09ICd1bmRlZmluZWQnID8gMSA6ICtjaHVua0hlYWRlclsyXSxcbiAgICAgIG5ld1N0YXJ0OiArY2h1bmtIZWFkZXJbM10sXG4gICAgICBuZXdMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzRdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbNF0sXG4gICAgICBsaW5lczogW10sXG4gICAgICBsaW5lZGVsaW1pdGVyczogW11cbiAgICB9O1xuXG4gICAgLy8gVW5pZmllZCBEaWZmIEZvcm1hdCBxdWlyazogSWYgdGhlIGNodW5rIHNpemUgaXMgMCxcbiAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG4gICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsub2xkU3RhcnQgKz0gMTtcbiAgICB9XG4gICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsubmV3U3RhcnQgKz0gMTtcbiAgICB9XG5cbiAgICBsZXQgYWRkQ291bnQgPSAwLFxuICAgICAgICByZW1vdmVDb3VudCA9IDA7XG4gICAgZm9yICg7IGkgPCBkaWZmc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoICctLS0nIGNvdWxkIGJlIG1pc3Rha2VuIGZvciB0aGUgXCJyZW1vdmUgbGluZVwiIG9wZXJhdGlvblxuICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgaWYgKGRpZmZzdHJbaV0uaW5kZXhPZignLS0tICcpID09PSAwXG4gICAgICAgICAgICAmJiAoaSArIDIgPCBkaWZmc3RyLmxlbmd0aClcbiAgICAgICAgICAgICYmIGRpZmZzdHJbaSArIDFdLmluZGV4T2YoJysrKyAnKSA9PT0gMFxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGV0IG9wZXJhdGlvbiA9IChkaWZmc3RyW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gKGRpZmZzdHIubGVuZ3RoIC0gMSkpID8gJyAnIDogZGlmZnN0cltpXVswXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/util/array.js":
/*!*********************************************!*\
  !*** ./node_modules/diff/lib/util/array.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayEqual = arrayEqual;
exports.arrayStartsWith = arrayStartsWith;

/*istanbul ignore end*/
function arrayEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return arrayStartsWith(a, b);
}

function arrayStartsWith(array, start) {
  if (start.length > array.length) {
    return false;
  }

  for (var i = 0; i < start.length; i++) {
    if (start[i] !== array[i]) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5U3RhcnRzV2l0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQy9CLE1BQUlELENBQUMsQ0FBQ0UsTUFBRixLQUFhRCxDQUFDLENBQUNDLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9DLGVBQWUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLENBQXRCO0FBQ0Q7O0FBRU0sU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQzVDLE1BQUlBLEtBQUssQ0FBQ0gsTUFBTixHQUFlRSxLQUFLLENBQUNGLE1BQXpCLEVBQWlDO0FBQy9CLFdBQU8sS0FBUDtBQUNEOztBQUVELE9BQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDSCxNQUExQixFQUFrQ0ksQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxRQUFJRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxLQUFhRixLQUFLLENBQUNFLENBQUQsQ0FBdEIsRUFBMkI7QUFDekIsYUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhcnJheUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheVN0YXJ0c1dpdGgoYSwgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVN0YXJ0c1dpdGgoYXJyYXksIHN0YXJ0KSB7XG4gIGlmIChzdGFydC5sZW5ndGggPiBhcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0YXJ0W2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/util/distance-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/diff/lib/util/distance-iterator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = _default;

/*istanbul ignore end*/
// Iterator that traverses in the range of [min, max], stepping
// by distance from a given start position. I.e. for [0, 4], with
// start of 2, this will iterate 2, 3, 1, 4, 0.
function
/*istanbul ignore start*/
_default
/*istanbul ignore end*/
(start, minLine, maxLine) {
  var wantForward = true,
      backwardExhausted = false,
      forwardExhausted = false,
      localOffset = 1;
  return function iterator() {
    if (wantForward && !forwardExhausted) {
      if (backwardExhausted) {
        localOffset++;
      } else {
        wantForward = false;
      } // Check if trying to fit beyond text length, and if not, check it fits
      // after offset location (or desired location on first iteration)


      if (start + localOffset <= maxLine) {
        return localOffset;
      }

      forwardExhausted = true;
    }

    if (!backwardExhausted) {
      if (!forwardExhausted) {
        wantForward = true;
      } // Check if trying to fit before text beginning, and if not, check it fits
      // before offset location


      if (minLine <= start - localOffset) {
        return -localOffset++;
      }

      backwardExhausted = true;
      return iterator();
    } // We tried to fit hunk before text beginning and beyond text length, then
    // hunk can't fit on the text. Return undefined

  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBU0EsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUFBLE1BQ0lDLGlCQUFpQixHQUFHLEtBRHhCO0FBQUEsTUFFSUMsZ0JBQWdCLEdBQUcsS0FGdkI7QUFBQSxNQUdJQyxXQUFXLEdBQUcsQ0FIbEI7QUFLQSxTQUFPLFNBQVNDLFFBQVQsR0FBb0I7QUFDekIsUUFBSUosV0FBVyxJQUFJLENBQUNFLGdCQUFwQixFQUFzQztBQUNwQyxVQUFJRCxpQkFBSixFQUF1QjtBQUNyQkUsUUFBQUEsV0FBVztBQUNaLE9BRkQsTUFFTztBQUNMSCxRQUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNELE9BTG1DLENBT3BDO0FBQ0E7OztBQUNBLFVBQUlILEtBQUssR0FBR00sV0FBUixJQUF1QkosT0FBM0IsRUFBb0M7QUFDbEMsZUFBT0ksV0FBUDtBQUNEOztBQUVERCxNQUFBQSxnQkFBZ0IsR0FBRyxJQUFuQjtBQUNEOztBQUVELFFBQUksQ0FBQ0QsaUJBQUwsRUFBd0I7QUFDdEIsVUFBSSxDQUFDQyxnQkFBTCxFQUF1QjtBQUNyQkYsUUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDRCxPQUhxQixDQUt0QjtBQUNBOzs7QUFDQSxVQUFJRixPQUFPLElBQUlELEtBQUssR0FBR00sV0FBdkIsRUFBb0M7QUFDbEMsZUFBTyxDQUFDQSxXQUFXLEVBQW5CO0FBQ0Q7O0FBRURGLE1BQUFBLGlCQUFpQixHQUFHLElBQXBCO0FBQ0EsYUFBT0csUUFBUSxFQUFmO0FBQ0QsS0E5QndCLENBZ0N6QjtBQUNBOztBQUNELEdBbENEO0FBbUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4vLyBieSBkaXN0YW5jZSBmcm9tIGEgZ2l2ZW4gc3RhcnQgcG9zaXRpb24uIEkuZS4gZm9yIFswLCA0XSwgd2l0aFxuLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gIGxldCB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG4gICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZWZvcmUgdGV4dCBiZWdpbm5pbmcsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cbiAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG4gIH07XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/util/params.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/util/params.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.generateOptions = generateOptions;

/*istanbul ignore end*/
function generateOptions(options, defaults) {
  if (typeof options === 'function') {
    defaults.callback = options;
  } else if (options) {
    for (var name in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(name)) {
        defaults[name] = options[name];
      }
    }
  }

  return defaults;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsSUFBQUEsUUFBUSxDQUFDQyxRQUFULEdBQW9CRixPQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJQSxPQUFKLEVBQWE7QUFDbEIsU0FBSyxJQUFJRyxJQUFULElBQWlCSCxPQUFqQixFQUEwQjtBQUN4QjtBQUNBLFVBQUlBLE9BQU8sQ0FBQ0ksY0FBUixDQUF1QkQsSUFBdkIsQ0FBSixFQUFrQztBQUNoQ0YsUUFBQUEsUUFBUSxDQUFDRSxJQUFELENBQVIsR0FBaUJILE9BQU8sQ0FBQ0csSUFBRCxDQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPRixRQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG4iXX0=


/***/ }),

/***/ "./src/scripts/views/blank.ractive.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/blank.ractive.html ***!
  \**********************************************/
/***/ ((module) => {

// Module
var code = "<span id=\"container{{id}}\" class=\"blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}\">\n  {{#unless isSelectCloze}}\n    <span class=\"h5p-input-wrapper\">\n      <input id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\" \n             size=\"{{blank.minTextLength}}\" on-escape=\"@this.fire('closeMessage', blank)\" \n             on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \n             on-blur=\"@this.fire('checkBlank', blank, 'blur')\" \n             on-focus=\"@this.fire('focus', blank)\"\n             on-anykey=\"@this.fire('textTyped', blank)\"\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}\n             class=\"h5p-text-input\"\n             autocomplete=\"off\"\n             autocapitalize=\"off\"/>\n      {{#blank.hasHint}}\n        <span class=\"h5p-tip-container\">\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\" {{/if}}>\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\n          </button>\n        </span>\n        {{/if}}\n    </span>    \n  {{/unless}}\n  {{#if isSelectCloze}}\n      <button class=\"h5p-notification\" on-click=\"@this.fire('displayFeedback', blank)\">\n        &#xf05a;\n      </button>\n      <span class=\"h5p-input-wrapper\">      \n      <select id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\"\n              on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \n              on-change=\"@this.fire('checkBlank', blank, 'change')\"\n              on-focus=\"@this.fire('focus', blank)\"              \n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}} \n              size=\"1\"\n              class=\"h5p-text-input\">\n        {{#each blank.choices}}\n          <option>{{this}}</option>\n        {{/each}}\n      </select>                     \n      {{#blank.hasHint}}\n        <span class=\"h5p-tip-container\">\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}>\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\n          </button>\n        </span>\n      {{/if}}     \n    </span>\n  {{/if}}\n</span>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/scripts/views/highlight.ractive.html":
/*!**************************************************!*\
  !*** ./src/scripts/views/highlight.ractive.html ***!
  \**************************************************/
/***/ ((module) => {

// Module
var code = "<span {{#object.isHighlighted}}class=\"highlighted\"{{/if}} id=\"{{object.id}}\">{{{object.text}}}</span>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/entries/dist.ts":
/*!*****************************!*\
  !*** ./src/entries/dist.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
var app_1 = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.ts");
// Load library
H5P = H5P || {};
H5P.AdvancedBlanks = app_1.default;


/***/ }),

/***/ "./src/lib/helpers.ts":
/*!****************************!*\
  !*** ./src/lib/helpers.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shuffleArray = exports.getLongestString = void 0;
function getLongestString(strings) {
    return strings.reduce(function (prev, current) { return current.length > prev.length ? current : prev; }, "");
}
exports.getLongestString = getLongestString;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
exports.shuffleArray = shuffleArray;


/***/ }),

/***/ "./src/lib/ractive-events-keys.ts":
/*!****************************************!*\
  !*** ./src/lib/ractive-events-keys.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.anykey = exports.uparrow = exports.downarrow = exports.rightarrow = exports.leftarrow = exports.space = exports.escape = exports.tab = exports.enter = void 0;
// TODO can we just declare the keydownHandler once? using `this`?
function makeKeyDefinition(code) {
    return function (node, fire) {
        function keydownHandler(event) {
            var which = event.which || event.keyCode;
            if (code && which === code) {
                event.preventDefault();
                fire({
                    node: node,
                    original: event
                });
            }
            else if (!code && [16, 17, 18, 35, 36, 13, 9, 27, 32, 37, 39, 40, 38].filter(function (c) { return c === which; }).length === 0) {
                fire({
                    node: node,
                    original: event
                });
            }
        }
        node.addEventListener('keydown', keydownHandler, false);
        return {
            teardown: function () {
                node.removeEventListener('keydown', keydownHandler, false);
            }
        };
    };
}
exports.enter = makeKeyDefinition(13);
exports.tab = makeKeyDefinition(9);
exports.escape = makeKeyDefinition(27);
exports.space = makeKeyDefinition(32);
exports.leftarrow = makeKeyDefinition(37);
exports.rightarrow = makeKeyDefinition(39);
exports.downarrow = makeKeyDefinition(40);
exports.uparrow = makeKeyDefinition(38);
exports.anykey = makeKeyDefinition();


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var blank_loader_1 = __webpack_require__(/*! ./content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var data_repository_1 = __webpack_require__(/*! ./services/data-repository */ "./src/scripts/services/data-repository.ts");
var cloze_controller_1 = __webpack_require__(/*! ./controllers/cloze-controller */ "./src/scripts/controllers/cloze-controller.ts");
var localization_1 = __webpack_require__(/*! ./services/localization */ "./src/scripts/services/localization.ts");
var settings_1 = __webpack_require__(/*! ./services/settings */ "./src/scripts/services/settings.ts");
var message_service_1 = __webpack_require__(/*! ./services/message-service */ "./src/scripts/services/message-service.ts");
var unwrapper_1 = __webpack_require__(/*! ./helpers/unwrapper */ "./src/scripts/helpers/unwrapper.ts");
var xapi_1 = __webpack_require__(/*! ./models/xapi */ "./src/scripts/models/xapi.ts");
var permutations_1 = __webpack_require__(/*! ./helpers/permutations */ "./src/scripts/helpers/permutations.ts");
var States;
(function (States) {
    States["ongoing"] = "ongoing";
    States["checking"] = "checking";
    States["showingSolutions"] = "showing-solution";
    States["finished"] = "finished";
    States["showingSolutionsEmbedded"] = "showing-solution-embedded";
})(States || (States = {}));
var AdvancedBlanks = /** @class */ (function (_super) {
    __extends(AdvancedBlanks, _super);
    /**
     * @constructor
     *
     * @param {object} config
     * @param {string} contentId
     * @param {object} contentData
     */
    function AdvancedBlanks(config, contentId, contentData) {
        if (contentData === void 0) { contentData = {}; }
        var _this = _super.call(this) || this;
        /**
         * Indicates if user has entered any answer so far.
         */
        _this.answered = false;
        /**
         * Called from outside when the score of the cloze has changed.
         */
        _this.onScoreChanged = function (score, maxScore) {
            if (_this.clozeController.isFullyFilledOut) {
                _this.transitionState();
                if (_this.state !== States.finished)
                    _this.state = States.checking;
                _this.showFeedback();
            }
            else {
                _this.setFeedback("", score, maxScore);
            }
            _this.transitionState();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.onTyped = function () {
            if (_this.state === States.checking) {
                _this.state = States.ongoing;
                _this.toggleButtonVisibility(_this.state);
            }
            _this.triggerXAPI('interacted');
            _this.answered = true;
        };
        _this.onAutoChecked = function () {
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
        };
        /**
         * Called by H5P.Question.attach(). Creates all content elements and registers them
         * with H5P.Question.
         */
        _this.registerDomElements = function () {
            this.registerMedia();
            this.setIntroduction(this.repository.getTaskDescription());
            this.container = this.jQuery("<div/>", { "class": "h5p-advanced-blanks" });
            this.setContent(this.container);
            this.registerButtons();
            this.moveToState(States.ongoing);
        };
        _this.onCheckAnswer = function () {
            _this.clozeController.checkAll();
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
            _this.transitionState();
            if (_this.state !== States.finished)
                _this.state = States.checking;
            _this.showFeedback();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.transitionState = function () {
            if (_this.clozeController.isSolved) {
                _this.moveToState(States.finished);
            }
        };
        _this.onShowSolution = function () {
            _this.moveToState(States.showingSolutions);
            _this.clozeController.showSolutions();
            _this.showFeedback();
        };
        _this.onRetry = function () {
            _this.removeFeedback();
            _this.clozeController.reset();
            _this.answered = false;
            _this.moveToState(States.ongoing);
        };
        _this.getCurrentState = function () {
            return _this.clozeController.serializeCloze();
        };
        /****************************************
         * Implementation of Question contract  *
         ****************************************/
        _this.getAnswerGiven = function () {
            return _this.answered || _this.clozeController.maxScore === 0;
        };
        _this.getScore = function () {
            _this.onCheckAnswer();
            return _this.clozeController.currentScore;
        };
        _this.getMaxScore = function () {
            return _this.clozeController.maxScore;
        };
        _this.showSolutions = function () {
            _this.onCheckAnswer();
            _this.onShowSolution();
            _this.moveToState(States.showingSolutionsEmbedded);
        };
        _this.resetTask = function () {
            _this.onRetry();
        };
        /***
         * XApi implementation
         */
        /**
         * Trigger xAPI answered event
         */
        _this.triggerXAPIAnswered = function () {
            _this.answered = true;
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            _this.trigger(xAPIEvent);
        };
        /**
         * Get xAPI data.
         * Contract used by report rendering engine.
         *
         * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
         */
        _this.getXAPIData = function () {
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            return {
                statement: xAPIEvent.data.statement
            };
        };
        /**
         * Generate xAPI object definition used in xAPI statements.
         * @return {Object}
         */
        _this.getxAPIDefinition = function () {
            var definition = new xapi_1.XAPIActivityDefinition();
            definition.description = {
                'en-US': '<p>' + _this.repository.getTaskDescription() + '</p>' + _this.repository.getClozeText()
            };
            definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
            definition.interactionType = 'fill-in'; // We use the 'fill-in' type even in select mode, as the xAPI format for selections doesn't really cater for sequences.
            definition.correctResponsesPattern = [];
            var correctResponsesPatternPrefix = '{case_matters=' + _this.settings.caseSensitive + '}';
            // xAPI forces us to create solution patterns for all possible solution combinations
            var correctAnswerPermutations = permutations_1.createPermutations(_this.clozeController.getCorrectAnswerList());
            for (var _i = 0, correctAnswerPermutations_1 = correctAnswerPermutations; _i < correctAnswerPermutations_1.length; _i++) {
                var permutation = correctAnswerPermutations_1[_i];
                definition.correctResponsesPattern.push(correctResponsesPatternPrefix + permutation.join('[,]'));
            }
            return definition;
        };
        /**
         * Add the question itself to the definition part of an xAPIEvent
         */
        _this.addQuestionToXAPI = function (xAPIEvent) {
            var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
            _this.jQuery.extend(definition, _this.getxAPIDefinition());
        };
        /**
         * Add the response part to an xAPI event
         *
         * @param {H5P.XAPIEvent} xAPIEvent
         *  The xAPI event we will add a response to
         */
        _this.addResponseToXAPI = function (xAPIEvent) {
            xAPIEvent.setScoredResult(_this.clozeController.currentScore, _this.clozeController.maxScore, _this);
            xAPIEvent.data.statement.result.response = _this.getxAPIResponse();
        };
        /**
         * Generate xAPI user response, used in xAPI statements.
         * @return {string} User answers separated by the "[,]" pattern
         */
        _this.getxAPIResponse = function () {
            var usersAnswers = _this.getCurrentState();
            return usersAnswers.join('[,]');
        };
        _this.jQuery = H5P.jQuery;
        _this.contentId = contentId;
        var unwrapper = new unwrapper_1.Unrwapper(_this.jQuery);
        _this.settings = new settings_1.H5PSettings(config);
        _this.localization = new localization_1.H5PLocalization(config);
        _this.repository = new data_repository_1.H5PDataRepository(config, _this.settings, _this.localization, _this.jQuery, unwrapper);
        _this.messageService = new message_service_1.MessageService(_this.jQuery);
        blank_loader_1.BlankLoader.initialize(_this.settings, _this.localization, _this.jQuery, _this.messageService);
        _this.clozeController = new cloze_controller_1.ClozeController(_this.repository, _this.settings, _this.localization, _this.messageService);
        _this.clozeController.onScoreChanged = _this.onScoreChanged;
        _this.clozeController.onSolved = _this.onSolved;
        _this.clozeController.onAutoChecked = _this.onAutoChecked;
        _this.clozeController.onTyped = _this.onTyped;
        if (contentData && contentData.previousState)
            _this.previousState = contentData.previousState;
        /**
        * Overrides the attach method of the superclass (H5P.Question) and calls it
        * at the same time. (equivalent to super.attach($container)).
        * This is necessary, as Ractive needs to be initialized with an existing DOM
        * element. DOM elements are created in H5P.Question.attach, so initializing
        * Ractive in registerDomElements doesn't work.
        */
        _this.attach = (function (original) {
            return function ($container) {
                original($container);
                _this.clozeController.initialize(_this.container.get(0), $container);
                if (_this.clozeController.deserializeCloze(_this.previousState)) {
                    _this.answered = _this.clozeController.isFilledOut;
                    if (_this.settings.autoCheck)
                        _this.onCheckAnswer();
                    _this.toggleButtonVisibility(_this.state);
                }
            };
        })(_this.attach);
        return _this;
    }
    AdvancedBlanks.prototype.onSolved = function () {
    };
    /**
     * @returns JQuery - The outer h5p container. The library can add dialogues to this
     * element.
     */
    AdvancedBlanks.prototype.getH5pContainer = function () {
        var $content = this.jQuery('[data-content-id="' + this.contentId + '"].h5p-content');
        var $containerParents = $content.parents('.h5p-container');
        // select find container to attach dialogs to
        var $container;
        if ($containerParents.length !== 0) {
            // use parent highest up if any
            $container = $containerParents.last();
        }
        else if ($content.length !== 0) {
            $container = $content;
        }
        else {
            $container = this.jQuery(document.body);
        }
        return $container;
    };
    AdvancedBlanks.prototype.registerMedia = function () {
        var media = this.repository.getMedia();
        if (!media || !media.library)
            return;
        var type = media.library.split(' ')[0];
        if (type === 'H5P.Image') {
            if (media.params.file) {
                this.setImage(media.params.file.path, {
                    disableImageZooming: this.settings.disableImageZooming,
                    alt: media.params.alt
                });
            }
        }
        else if (type === 'H5P.Video') {
            if (media.params.sources) {
                this.setVideo(media);
            }
        }
    };
    AdvancedBlanks.prototype.registerButtons = function () {
        var $container = this.getH5pContainer();
        if (!this.settings.autoCheck) {
            // Check answer button
            this.addButton('check-answer', this.localization.getTextFromLabel(localization_1.LocalizationLabels.checkAllButton), this.onCheckAnswer, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmCheckDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmCheck),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
        // Show solution button
        this.addButton('show-solution', this.localization.getTextFromLabel(localization_1.LocalizationLabels.showSolutionButton), this.onShowSolution, this.settings.enableSolutionsButton);
        // Try again button
        if (this.settings.enableRetry === true) {
            this.addButton('try-again', this.localization.getTextFromLabel(localization_1.LocalizationLabels.retryButton), this.onRetry, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmRetryDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmRetry),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
    };
    AdvancedBlanks.prototype.showFeedback = function () {
        var scoreText = H5P.Question.determineOverallFeedback(this.localization.getObjectForStructure(localization_1.LocalizationStructures.overallFeedback), this.clozeController.currentScore / this.clozeController.maxScore).replace('@score', this.clozeController.currentScore).replace('@total', this.clozeController.maxScore);
        this.setFeedback(scoreText, this.clozeController.currentScore, this.clozeController.maxScore, this.localization.getTextFromLabel(localization_1.LocalizationLabels.scoreBarLabel));
    };
    /**
     * Shows are hides buttons depending on the current state and settings made
     * by the content creator.
     * @param  {States} state
     */
    AdvancedBlanks.prototype.moveToState = function (state) {
        this.state = state;
        this.toggleButtonVisibility(state);
    };
    AdvancedBlanks.prototype.toggleButtonVisibility = function (state) {
        if (this.settings.enableSolutionsButton) {
            if (((state === States.checking)
                || (this.settings.autoCheck && state === States.ongoing))
                && (!this.settings.showSolutionsRequiresInput || this.clozeController.allBlanksEntered)) {
                this.showButton('show-solution');
            }
            else {
                this.hideButton('show-solution');
            }
        }
        if (this.settings.enableRetry && (state === States.checking || state === States.finished || state === States.showingSolutions)) {
            this.showButton('try-again');
        }
        else {
            this.hideButton('try-again');
        }
        if (state === States.ongoing && this.settings.enableCheckButton) {
            this.showButton('check-answer');
        }
        else {
            this.hideButton('check-answer');
        }
        if (state === States.showingSolutionsEmbedded) {
            this.hideButton('check-answer');
            this.hideButton('try-again');
            this.hideButton('show-solution');
        }
        this.trigger('resize');
    };
    return AdvancedBlanks;
}(H5P.Question));
exports.default = AdvancedBlanks;


/***/ }),

/***/ "./src/scripts/content-loaders/blank-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/blank-loader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlankLoader = void 0;
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var blank_1 = __webpack_require__(/*! ../models/blank */ "./src/scripts/models/blank.ts");
var message_1 = __webpack_require__(/*! ../models/message */ "./src/scripts/models/message.ts");
var BlankLoader = /** @class */ (function () {
    function BlankLoader(settings, localization, jquery, messageService) {
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.messageService = messageService;
    }
    BlankLoader.initialize = function (settings, localization, jquery, messageService) {
        this._instance = new BlankLoader(settings, localization, jquery, messageService);
        return this._instance;
    };
    Object.defineProperty(BlankLoader, "instance", {
        get: function () {
            if (this._instance)
                return this._instance;
            throw "BlankLoader must be initialized before use.";
        },
        enumerable: false,
        configurable: true
    });
    BlankLoader.prototype.decodeHtml = function (html) {
        var elem = document.createElement('textarea');
        elem.innerHTML = html;
        return elem.value;
    };
    BlankLoader.prototype.createBlank = function (id, correctText, hintText, incorrectAnswers) {
        var blank = new blank_1.Blank(this.settings, this.localization, this.jquery, this.messageService, id);
        if (correctText) {
            correctText = this.decodeHtml(correctText);
            blank.addCorrectAnswer(new answer_1.Answer(correctText, "", false, 0, this.settings));
        }
        blank.setHint(new message_1.Message(hintText ? hintText : "", false, 0));
        if (incorrectAnswers) {
            for (var _i = 0, incorrectAnswers_1 = incorrectAnswers; _i < incorrectAnswers_1.length; _i++) {
                var h5pIncorrectAnswer = incorrectAnswers_1[_i];
                blank.addIncorrectAnswer(this.decodeHtml(h5pIncorrectAnswer.incorrectAnswerText), h5pIncorrectAnswer.incorrectAnswerFeedback, h5pIncorrectAnswer.showHighlight, h5pIncorrectAnswer.highlight);
            }
        }
        return blank;
    };
    BlankLoader.prototype.replaceSnippets = function (blank, snippets) {
        var _this = this;
        blank.correctAnswers.concat(blank.incorrectAnswers)
            .forEach(function (answer) { return answer.message.text = _this.getStringWithSnippets(answer.message.text, snippets); });
        blank.hint.text = this.getStringWithSnippets(blank.hint.text, snippets);
    };
    BlankLoader.prototype.getStringWithSnippets = function (text, snippets) {
        if (!text || text === undefined)
            return "";
        if (!snippets)
            return text;
        for (var _i = 0, snippets_1 = snippets; _i < snippets_1.length; _i++) {
            var snippet = snippets_1[_i];
            if (snippet.name === undefined || snippet.name === "" || snippet.text === undefined || snippet.text === "")
                continue;
            text = text.replace("@" + snippet.name, snippet.text);
        }
        return text;
    };
    /**
     * Adds the highlight objects to the answers in the correct and incorrect answer list.
     * @param  {Highlight[]} highlightsBefore - All highlights coming before the blank.
     * @param  {Highlight[]} highlightsAfter - All highlights coming after the blank.
     */
    BlankLoader.prototype.linkHighlightIdToObject = function (blank, highlightsBefore, highlightsAfter) {
        for (var _i = 0, _a = blank.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        for (var _b = 0, _c = blank.incorrectAnswers; _b < _c.length; _b++) {
            var answer = _c[_b];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        blank.hint.linkHighlight(highlightsBefore, highlightsAfter);
    };
    return BlankLoader;
}());
exports.BlankLoader = BlankLoader;


/***/ }),

/***/ "./src/scripts/content-loaders/cloze-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/cloze-loader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClozeLoader = void 0;
var blank_loader_1 = __webpack_require__(/*! ./blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_element_1 = __webpack_require__(/*! ../models/cloze-element */ "./src/scripts/models/cloze-element.ts");
var highlight_1 = __webpack_require__(/*! ../models/highlight */ "./src/scripts/models/highlight.ts");
var cloze_1 = __webpack_require__(/*! ../models/cloze */ "./src/scripts/models/cloze.ts");
/**
 * Loads a cloze object.
 */
var ClozeLoader = /** @class */ (function () {
    function ClozeLoader() {
    }
    /**
     * @param  {string} html - The html string that contains the cloze with blanks marking and highlight markings.
     * @param  {Blank[]} blanks - All blanks as entered by the content author.
     * @returns Cloze
     */
    ClozeLoader.createCloze = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        html = ClozeLoader.normalizeBlankMarkings(html);
        var conversionResult = ClozeLoader.convertMarkupToSpans(html, blanks);
        html = conversionResult.html;
        orderedAllElementsList = conversionResult.orderedAllElementsList;
        highlightInstances = conversionResult.highlightInstances;
        blanksInstances = conversionResult.blanksInstances;
        ClozeLoader.linkHighlightsObjects(orderedAllElementsList, highlightInstances, blanksInstances);
        var cloze = new cloze_1.Cloze();
        cloze.html = html;
        cloze.blanks = blanksInstances;
        cloze.highlights = highlightInstances;
        return cloze;
    };
    /**
    * Converts !!signal!! highlight markup and ___  blank markup into <span>...</span>.
    * Returns the resulting html string and three lists of all active elements used in the cloze:
    *    orderedAllElements: highlights and blanks in the order of appearance in the html.
    *    highlightInstances: only highlights in the order of appearance
    *    blanksInstances: only blanks in the order of appearance
    * @param  {string} html
    * @param  {Blank[]} blanks
    * @returns Lists of active elements (see description).
    */
    ClozeLoader.convertMarkupToSpans = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        var exclamationMarkRegExp = /!!(.{1,40}?)!!/i;
        var highlightCounter = 0;
        var blankCounter = 0;
        // Searches the html string for highlights and blanks and inserts spans. 
        do {
            var nextHighlightMatch = html.match(exclamationMarkRegExp);
            var nextBlankIndex = html.indexOf(ClozeLoader.normalizedBlankMarker);
            if (nextHighlightMatch && ((nextHighlightMatch.index < nextBlankIndex) || (nextBlankIndex < 0))) {
                // next active element is a highlight
                var highlight = new highlight_1.Highlight(nextHighlightMatch[1], "highlight_" + highlightCounter);
                highlightInstances.push(highlight);
                orderedAllElementsList.push(highlight);
                html = html.replace(exclamationMarkRegExp, "<span id='container_highlight_" + highlightCounter + "'></span>");
                highlightCounter++;
            }
            else if (nextBlankIndex >= 0) {
                // next active element is a blank
                if (blankCounter >= blanks.length) {
                    // if the blank is not in the repository (The content author has marked too many blanks in the text, but not entered correct answers.)
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span></span>");
                }
                else {
                    var blank = blanks[blankCounter];
                    blanksInstances.push(blank);
                    orderedAllElementsList.push(blank);
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span id='container_" + blank.id + "'></span>");
                    blankCounter++;
                }
            }
        } while (nextHighlightMatch || (nextBlankIndex >= 0));
        return {
            html: html,
            orderedAllElementsList: orderedAllElementsList,
            highlightInstances: highlightInstances,
            blanksInstances: blanksInstances
        };
    };
    /**
     * Looks for all instances of marked blanks and replaces them with ___.
     * @param  {string} html
     * @returns string
     */
    ClozeLoader.normalizeBlankMarkings = function (html) {
        var underlineBlankRegEx = /_{3,}/g;
        html = html.replace(underlineBlankRegEx, ClozeLoader.normalizedBlankMarker);
        return html;
    };
    /**
    * Iterates through all blanks and calls their linkHighlightIdsToObjects(...).
    * @param orderedAllElementsList
    * @param highlightInstances
    * @param blanksInstances
    */
    ClozeLoader.linkHighlightsObjects = function (orderedAllElementsList, highlightInstances, blanksInstances) {
        for (var _i = 0, blanksInstances_1 = blanksInstances; _i < blanksInstances_1.length; _i++) {
            var blank = blanksInstances_1[_i];
            var nextBlankIndexInArray = orderedAllElementsList.indexOf(blank);
            var highlightsBeforeBlank = orderedAllElementsList
                .slice(0, nextBlankIndexInArray)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; })
                .reverse();
            var highlightsAfterBlank = orderedAllElementsList
                .slice(nextBlankIndexInArray + 1)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; });
            blank_loader_1.BlankLoader.instance.linkHighlightIdToObject(blank, highlightsBeforeBlank, highlightsAfterBlank);
        }
    };
    ClozeLoader.normalizedBlankMarker = '___';
    return ClozeLoader;
}());
exports.ClozeLoader = ClozeLoader;


/***/ }),

/***/ "./src/scripts/controllers/cloze-controller.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/controllers/cloze-controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClozeController = void 0;
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_loader_1 = __webpack_require__(/*! ../content-loaders/cloze-loader */ "./src/scripts/content-loaders/cloze-loader.ts");
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var RactiveEventsKeys = __webpack_require__(/*! ../../lib/ractive-events-keys */ "./src/lib/ractive-events-keys.ts");
var ClozeController = /** @class */ (function () {
    function ClozeController(repository, settings, localization, MessageService) {
        var _this = this;
        this.repository = repository;
        this.settings = settings;
        this.localization = localization;
        this.MessageService = MessageService;
        // Storage of the ractive objects that link models and views
        this.highlightRactives = {};
        this.blankRactives = {};
        this.checkAll = function () {
            _this.cloze.hideAllHighlights();
            for (var _i = 0, _a = _this.cloze.blanks; _i < _a.length; _i++) {
                var blank = _a[_i];
                if ((!blank.isCorrect) && blank.enteredText !== "")
                    blank.evaluateAttempt(true, true);
            }
            _this.refreshCloze();
            _this.checkAndNotifyCompleteness();
        };
        this.textTyped = function (blank) {
            blank.onTyped();
            if (_this.onTyped)
                _this.onTyped();
            _this.refreshCloze();
        };
        this.focus = function (blank) {
            blank.onFocussed();
            _this.refreshCloze();
        };
        this.displayFeedback = function (blank) {
            blank.onDisplayFeedback();
            _this.refreshCloze();
        };
        this.showHint = function (blank) {
            _this.cloze.hideAllHighlights();
            blank.showHint();
            _this.refreshCloze();
        };
        this.requestCloseTooltip = function (blank) {
            blank.removeTooltip();
            _this.refreshCloze();
            _this.jquery.find("#" + blank.id).focus();
        };
        this.checkBlank = function (blank, cause) {
            if ((cause === 'blur' || cause === 'change')) {
                blank.lostFocus();
            }
            if (cause === 'change' && _this.onTyped) {
                _this.onTyped();
            }
            if (_this.settings.autoCheck) {
                if (!blank.enteredText || blank.enteredText === "")
                    return;
                _this.cloze.hideAllHighlights();
                blank.evaluateAttempt(false);
                _this.checkAndNotifyCompleteness();
                _this.refreshCloze();
                _this.onAutoChecked();
            }
            if ((cause === 'enter')
                && ((_this.settings.autoCheck && blank.isCorrect && !_this.isSolved)
                    || !_this.settings.autoCheck)) {
                // move to next blank
                var index = _this.cloze.blanks.indexOf(blank);
                var nextId;
                while (index < _this.cloze.blanks.length - 1 && !nextId) {
                    index++;
                    if (!_this.cloze.blanks[index].isCorrect)
                        nextId = _this.cloze.blanks[index].id;
                }
                if (nextId)
                    _this.jquery.find("#" + nextId).focus();
            }
        };
        this.reset = function () {
            _this.cloze.reset();
            _this.refreshCloze();
        };
        this.showSolutions = function () {
            _this.cloze.showSolutions();
            _this.refreshCloze();
        };
        this.checkAndNotifyCompleteness = function () {
            if (_this.onScoreChanged)
                _this.onScoreChanged(_this.currentScore, _this.maxScore);
            if (_this.cloze.isSolved) {
                if (_this.onSolved)
                    _this.onSolved();
                return true;
            }
            return false;
        };
    }
    Object.defineProperty(ClozeController.prototype, "maxScore", {
        get: function () {
            return this.cloze.blanks.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "currentScore", {
        get: function () {
            var score = this.cloze.blanks.filter(function (b) { return b.isCorrect; }).length;
            return Math.max(0, score);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "allBlanksEntered", {
        get: function () {
            if (this.cloze)
                return this.cloze.blanks.every(function (blank) { return blank.isError || blank.isCorrect || blank.isRetry; });
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isSolved", {
        get: function () {
            return this.cloze.isSolved;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.some(function (b) { return b.enteredText !== ''; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFullyFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.every(function (b) { return b.enteredText !== ''; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets up all blanks, the cloze itself and the ractive bindings.
     * @param  {HTMLElement} root
     */
    ClozeController.prototype.initialize = function (root, jquery) {
        this.jquery = jquery;
        this.isSelectCloze = this.settings.clozeType === enums_1.ClozeType.Select ? true : false;
        var blanks = this.repository.getBlanks();
        if (this.isSelectCloze && this.settings.selectAlternatives === enums_1.SelectAlternatives.All) {
            for (var _i = 0, blanks_1 = blanks; _i < blanks_1.length; _i++) {
                var blank = blanks_1[_i];
                var otherBlanks = blanks.filter(function (v) { return v !== blank; });
                blank.loadChoicesFromOtherBlanks(otherBlanks);
            }
        }
        var snippets = this.repository.getSnippets();
        blanks.forEach(function (blank) { return blank_loader_1.BlankLoader.instance.replaceSnippets(blank, snippets); });
        this.cloze = cloze_loader_1.ClozeLoader.createCloze(this.repository.getClozeText(), blanks);
        var containers = this.createAndAddContainers(root);
        containers.cloze.innerHTML = this.cloze.html;
        this.createRactiveBindings();
    };
    ClozeController.prototype.createAndAddContainers = function (addTo) {
        var clozeContainerElement = document.createElement('div');
        clozeContainerElement.id = 'h5p-cloze-container';
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            clozeContainerElement.className = 'h5p-advanced-blanks-select-mode';
        }
        else {
            clozeContainerElement.className = 'h5p-advanced-blanks-type-mode';
        }
        addTo.appendChild(clozeContainerElement);
        return {
            cloze: clozeContainerElement
        };
    };
    ClozeController.prototype.createHighlightBinding = function (highlight) {
        this.highlightRactives[highlight.id] = new Ractive({
            el: '#container_' + highlight.id,
            template: __webpack_require__(/*! ../views/highlight.ractive.html */ "./src/scripts/views/highlight.ractive.html"),
            data: {
                object: highlight
            }
        });
    };
    ClozeController.prototype.createBlankBinding = function (blank) {
        var ractive = new Ractive({
            el: '#container_' + blank.id,
            template: __webpack_require__(/*! ../views/blank.ractive.html */ "./src/scripts/views/blank.ractive.html"),
            data: {
                isSelectCloze: this.isSelectCloze,
                blank: blank
            },
            events: {
                enter: RactiveEventsKeys.enter,
                escape: RactiveEventsKeys.escape,
                anykey: RactiveEventsKeys.anykey
            }
        });
        ractive.on("checkBlank", this.checkBlank);
        ractive.on("showHint", this.showHint);
        ractive.on("textTyped", this.textTyped);
        ractive.on("closeMessage", this.requestCloseTooltip);
        ractive.on("focus", this.focus);
        ractive.on("displayFeedback", this.displayFeedback);
        this.blankRactives[blank.id] = ractive;
    };
    ClozeController.prototype.createRactiveBindings = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            this.createHighlightBinding(highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            this.createBlankBinding(blank);
        }
    };
    /**
     * Updates all views of highlights and blanks. Can be called when a model
     * was changed
     */
    ClozeController.prototype.refreshCloze = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            var highlightRactive = this.highlightRactives[highlight.id];
            highlightRactive.set("object", highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            var blankRactive = this.blankRactives[blank.id];
            blankRactive.set("blank", blank);
        }
    };
    ClozeController.prototype.serializeCloze = function () {
        return this.cloze.serialize();
    };
    ClozeController.prototype.deserializeCloze = function (data) {
        if (!this.cloze || !data)
            return false;
        this.cloze.deserialize(data);
        this.refreshCloze();
        return true;
    };
    ClozeController.prototype.getCorrectAnswerList = function () {
        if (!this.cloze || this.cloze.blanks.length === 0)
            return [[]];
        var result = [];
        for (var _i = 0, _a = this.cloze.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            result.push(blank.getCorrectAnswers());
        }
        return result;
    };
    return ClozeController;
}());
exports.ClozeController = ClozeController;


/***/ }),

/***/ "./src/scripts/helpers/permutations.ts":
/*!*********************************************!*\
  !*** ./src/scripts/helpers/permutations.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPermutations = void 0;
/**
 * Creates a list of all possible permutations of a list of lists.
 * @param list The list to permute over.
 */
function createPermutations(list) {
    var output = [[]];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var currentSublist = list_1[_i];
        var newOutput = [];
        for (var _a = 0, currentSublist_1 = currentSublist; _a < currentSublist_1.length; _a++) {
            var sublistObject = currentSublist_1[_a];
            for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
                var o = output_1[_b];
                var newList = o.slice();
                newList.push(sublistObject);
                newOutput.push(newList);
            }
        }
        output = newOutput;
    }
    return output;
}
exports.createPermutations = createPermutations;


/***/ }),

/***/ "./src/scripts/helpers/unwrapper.ts":
/*!******************************************!*\
  !*** ./src/scripts/helpers/unwrapper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unrwapper = void 0;
/**
 * This class cleans html strings.
 */
var Unrwapper = /** @class */ (function () {
    function Unrwapper(jquery) {
        this.jquery = jquery;
    }
    /**
     * Cleans html strings by removing the outmost html tag of the string if there is only one tag.
     * Examples:  "<p>my text</p>"" becomes "my text"
     *            "<p>text 1</p><p>text 2</p2>" stays
     * @param html The html string
     * @returns the cleaned html string
     */
    Unrwapper.prototype.unwrap = function (html) {
        var parsed = this.jquery(html);
        if (parsed.length !== 1) {
            return html;
        }
        var unwrapped = parsed.unwrap().html();
        return unwrapped;
    };
    return Unrwapper;
}());
exports.Unrwapper = Unrwapper;


/***/ }),

/***/ "./src/scripts/models/answer.ts":
/*!**************************************!*\
  !*** ./src/scripts/models/answer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Answer = exports.Evaluation = exports.Correctness = void 0;
var message_1 = __webpack_require__(/*! ./message */ "./src/scripts/models/message.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/lib/index.js");
var Correctness;
(function (Correctness) {
    Correctness[Correctness["ExactMatch"] = 0] = "ExactMatch";
    Correctness[Correctness["CloseMatch"] = 1] = "CloseMatch";
    Correctness[Correctness["NoMatch"] = 2] = "NoMatch";
})(Correctness = exports.Correctness || (exports.Correctness = {}));
var Evaluation = /** @class */ (function () {
    function Evaluation(usedAnswer) {
        this.usedAnswer = usedAnswer;
        this.correctness = Correctness.NoMatch;
        this.characterDifferenceCount = 0;
        this.usedAlternative = "";
    }
    return Evaluation;
}());
exports.Evaluation = Evaluation;
/**
 * Represents a possible answer the content author enters for a blank, e.g. the correct or an incorrect answer.
 */
var Answer = /** @class */ (function () {
    /**
     * @param  {string} answerText - The expected answer. Alternatives are separated by | or ; . (e.g. "Alternative 1|Alternative 2|Alternative 3|..."  -or- "Alternative 1;Alternative 2;Alternative 3")
     * @param  {string} reaction - The tooltip that should be displayed. Format: Tooltip Text;!!-1!! !!+1!!
     */
    function Answer(answerText, reaction, showHighlight, highlight, settings) {
        this.settings = settings;
        this.alternatives = answerText.split(/\//).map(function (s) { return s.trim(); });
        this.message = new message_1.Message(reaction, showHighlight, highlight);
        if (answerText.trim() === "") {
            this.appliesAlways = true;
        }
        else {
            this.appliesAlways = false;
        }
    }
    /**
     * Looks through the object's message ids and stores the references to the highlight object for these ids.
     * @param  {Highlight[]} highlightsBefore
     * @param  {Highlight[]} highlightsAfter
     */
    Answer.prototype.linkHighlightIdToObject = function (highlightsBefore, highlightsAfter) {
        this.message.linkHighlight(highlightsBefore, highlightsAfter);
    };
    /**
     * Turns on the highlights set by the content author for this answer.
     */
    Answer.prototype.activateHighlight = function () {
        if (this.message.highlightedElement)
            this.message.highlightedElement.isHighlighted = true;
    };
    Answer.prototype.cleanString = function (text) {
        text = text.trim();
        return text.replace(/\s{2,}/g, " ");
    };
    /**
     * Looks through the diff and checks how many character change operations are needed to turn one string into the other. Should return the same results as the Levensthein distance.
     * @param  {[{added?:boolean, boolean: removed?, string: value}]} diff - as returned by jsdiff
     * @returns number - the count of changes (replace, add, delete) needed to change the text from one string to the other
     */
    Answer.prototype.getChangesCountFromDiff = function (diff) {
        var totalChangesCount = 0;
        var lastType = "";
        var lastCount = 0;
        for (var _i = 0, diff_1 = diff; _i < diff_1.length; _i++) {
            var element = diff_1[_i];
            if (element.removed) {
                totalChangesCount += element.value.length;
                lastType = "removed";
            }
            else if (element.added) {
                if (lastType === "removed") {
                    if (lastCount < element.value.length) {
                        totalChangesCount += element.value.length - lastCount;
                    }
                }
                else {
                    totalChangesCount += element.value.length;
                }
                lastType = "added";
            }
            else {
                lastType = "same";
            }
            lastCount = element.value.length;
        }
        return totalChangesCount;
    };
    /**
     * Returns how many characters can be wrong to still be counted as a spelling mistake.
     * If spelling mistakes are turned off through the settings, it will return 0.
     * @param  {string} text
     * @returns number
     */
    Answer.prototype.getAcceptableSpellingMistakes = function (text) {
        var acceptableTypoCount;
        if (this.settings.warnSpellingErrors || this.settings.acceptSpellingErrors) // TODO: consider removal
            acceptableTypoCount = Math.floor(text.length / 10) + 1;
        else
            acceptableTypoCount = 0;
        return acceptableTypoCount;
    };
    /**
     * Checks if the text entered by the user in an ettempt is matched by the answer,
     * @param  {string} attempt The text entered by the user.
     * @returns Evaluation indicates if the entered text is matched by the answer.
     */
    Answer.prototype.evaluateAttempt = function (attempt) {
        var cleanedAttempt = this.cleanString(attempt);
        var evaluation = new Evaluation(this);
        for (var _i = 0, _a = this.alternatives; _i < _a.length; _i++) {
            var alternative = _a[_i];
            var cleanedAlternative = this.cleanString(alternative);
            var diff = jsdiff.diffChars(cleanedAlternative, cleanedAttempt, { ignoreCase: !this.settings.caseSensitive });
            var changeCount = this.getChangesCountFromDiff(diff);
            if (changeCount === 0) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.ExactMatch;
                return evaluation;
            }
            if (changeCount <= this.getAcceptableSpellingMistakes(alternative)
                && (evaluation.characterDifferenceCount === 0 || changeCount < evaluation.characterDifferenceCount)) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.CloseMatch;
                evaluation.characterDifferenceCount = changeCount;
            }
        }
        return evaluation;
    };
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/scripts/models/blank.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/blank.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Blank = void 0;
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
var answer_1 = __webpack_require__(/*! ./answer */ "./src/scripts/models/answer.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./src/scripts/models/enums.ts");
var localization_1 = __webpack_require__(/*! ../services/localization */ "./src/scripts/services/localization.ts");
var helpers_1 = __webpack_require__(/*! ../../lib/helpers */ "./src/lib/helpers.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/lib/index.js");
var Blank = /** @class */ (function (_super) {
    __extends(Blank, _super);
    /**
     * Add incorrect answers after initializing the object. Call finishInitialization()
     * when done.
     * @param  {ISettings} settings
     * @param  {string} id
     * @param  {string} correctText?
     * @param  {string} hintText?
     */
    function Blank(settings, localization, jquery, messageService, id) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        _this.localization = localization;
        _this.jquery = jquery;
        _this.messageService = messageService;
        _this.enteredText = "";
        _this.correctAnswers = new Array();
        _this.incorrectAnswers = new Array();
        _this.choices = new Array();
        _this.type = cloze_element_1.ClozeElementType.Blank;
        _this.id = id;
        return _this;
    }
    /**
    * Call this method when all incorrect answers have been added.
    */
    Blank.prototype.finishInitialization = function () {
        if (this.settings.clozeType === enums_1.ClozeType.Select && this.settings.selectAlternatives === enums_1.SelectAlternatives.Alternatives) {
            this.loadChoicesFromOwnAlternatives();
        }
        this.calculateMinTextLength();
    };
    Blank.prototype.addCorrectAnswer = function (answer) {
        this.correctAnswers.push(answer);
    };
    Blank.prototype.getCorrectAnswers = function () {
        var result = [];
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            result = result.concat(answer.alternatives);
        }
        return result;
    };
    Blank.prototype.setHint = function (message) {
        this.hint = message;
        this.hasHint = this.hint.text !== "";
    };
    /**
     * Adds the incorrect answer to the list.
     * @param text - What the user must enter.
     * @param reaction  - What the user gets displayed when he enteres the text.
     */
    Blank.prototype.addIncorrectAnswer = function (text, reaction, showHighlight, highlight) {
        this.incorrectAnswers.push(new answer_1.Answer(text, reaction, showHighlight, highlight, this.settings));
    };
    /**
     * Returns how many characters the input box must have be to allow for all correct answers.
     */
    // TODO: refactor
    Blank.prototype.calculateMinTextLength = function () {
        var answers = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var correctAnswer = _a[_i];
            answers.push(helpers_1.getLongestString(correctAnswer.alternatives));
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            for (var _b = 0, _c = this.incorrectAnswers; _b < _c.length; _b++) {
                var incorrectAnswer = _c[_b];
                answers.push(helpers_1.getLongestString(incorrectAnswer.alternatives));
            }
        }
        var longestAnswer = helpers_1.getLongestString(answers);
        var l = longestAnswer.length;
        this.minTextLength = Math.max(10, l - (l % 10) + 10);
    };
    /**
     * Creates a list of choices from all alternatives provided by
     * the correct and incorrect answers.
     */
    Blank.prototype.loadChoicesFromOwnAlternatives = function () {
        this.choices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                this.choices.push(alternative);
            }
        }
        for (var _d = 0, _e = this.incorrectAnswers; _d < _e.length; _d++) {
            var answer = _e[_d];
            for (var _f = 0, _g = answer.alternatives; _f < _g.length; _f++) {
                var alternative = _g[_f];
                this.choices.push(alternative);
            }
        }
        this.choices = helpers_1.shuffleArray(this.choices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
     * Creates a list of choices from all correct answers of the cloze.
     * @param otherBlanks All OTHER blanks in the cloze. (excludes the current one!)
     */
    Blank.prototype.loadChoicesFromOtherBlanks = function (otherBlanks) {
        var ownChoices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                ownChoices.push(alternative);
            }
        }
        var otherChoices = new Array();
        for (var _d = 0, otherBlanks_1 = otherBlanks; _d < otherBlanks_1.length; _d++) {
            var otherBlank = otherBlanks_1[_d];
            for (var _e = 0, _f = otherBlank.correctAnswers; _e < _f.length; _e++) {
                var answer = _f[_e];
                for (var _g = 0, _h = answer.alternatives; _g < _h.length; _g++) {
                    var alternative = _h[_g];
                    otherChoices.push(alternative);
                }
            }
        }
        otherChoices = helpers_1.shuffleArray(otherChoices);
        var maxChoices = this.settings.selectAlternativeRestriction;
        if (maxChoices === undefined || maxChoices === 0)
            maxChoices = ownChoices.length + otherChoices.length;
        var leftOverChoices = maxChoices - ownChoices.length;
        for (var x = 0; x < leftOverChoices && x < otherChoices.length; x++) {
            if (ownChoices.indexOf(otherChoices[x]) >= 0) {
                leftOverChoices++;
            }
            else {
                ownChoices.push(otherChoices[x]);
            }
        }
        this.choices = helpers_1.shuffleArray(ownChoices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
    * Clears the blank from all entered text and hides popups.
    */
    Blank.prototype.reset = function () {
        this.enteredText = "";
        this.lastCheckedText = "";
        this.removeTooltip();
        this.setAnswerState(enums_1.MessageType.None);
        this.hasPendingFeedback = false;
    };
    /**
     * Sets the blank to a state in which the correct solution if shown if the user
     * hasn't entered a correct one so far.
     */
    Blank.prototype.showSolution = function () {
        this.evaluateAttempt(true);
        this.removeTooltip();
        if (this.isCorrect)
            return;
        this.enteredText = this.correctAnswers[0].alternatives[0];
        this.setAnswerState(enums_1.MessageType.ShowSolution);
    };
    Blank.prototype.onFocussed = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            this.setAnswerState(enums_1.MessageType.None);
            this.lastCheckedText = "";
        }
    };
    Blank.prototype.onDisplayFeedback = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
    };
    Blank.prototype.displayTooltip = function (message, type, surpressTooltip, id) {
        if (!surpressTooltip)
            this.messageService.show(id ? id : this.id, message, this, type);
        else {
            this.hasPendingFeedback = true;
        }
    };
    Blank.prototype.removeTooltip = function () {
        this.messageService.hide();
    };
    Blank.prototype.setTooltipErrorText = function (message, surpressTooltip) {
        if (message.highlightedElement) {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip, message.highlightedElement.id);
        }
        else {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip);
        }
    };
    Blank.prototype.getSpellingMistakeMessage = function (expectedText, enteredText) {
        var message = this.localization.getTextFromLabel(localization_1.LocalizationLabels.typoMessage);
        var diff = jsdiff.diffChars(expectedText, enteredText, { ignoreCase: !this.settings.caseSensitive });
        var mistakeSpan = this.jquery("<span/>", { "class": "spelling-mistake" });
        for (var index = 0; index < diff.length; index++) {
            var part = diff[index];
            var spanClass = '';
            if (part.removed) {
                if (index === diff.length - 1 || !diff[index + 1].added) {
                    part.value = part.value.replace(/./g, "_");
                    spanClass = 'missing-character';
                }
                else {
                    continue;
                }
            }
            if (part.added) {
                spanClass = 'mistaken-character';
            }
            var span = this.jquery("<span/>", { "class": spanClass, "html": part.value.replace(" ", "&nbsp;") });
            mistakeSpan.append(span);
        }
        message = message.replace("@mistake", this.jquery("<span/>").append(mistakeSpan).html());
        return message;
    };
    /**
     * Checks if the entered text is the correct answer or one of the
     * incorrect ones and gives the user feedback accordingly.
     */
    Blank.prototype.evaluateAttempt = function (surpressTooltips, forceCheck) {
        var _this = this;
        if (!this.hasPendingFeedback && this.lastCheckedText === this.enteredText && !forceCheck)
            return;
        this.lastCheckedText = this.enteredText.toString();
        this.hasPendingFeedback = false;
        this.removeTooltip();
        var exactCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var exactIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        if (exactCorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Correct);
            if (!this.settings.caseSensitive) {
                this.enteredText = exactCorrectMatches[0].usedAlternative;
            }
            return;
        }
        if (exactIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(exactIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        if (closeCorrectMatches.length > 0) {
            if (this.settings.warnSpellingErrors) {
                this.displayTooltip(this.getSpellingMistakeMessage(closeCorrectMatches[0].usedAlternative, this.enteredText), enums_1.MessageType.Retry, surpressTooltips);
                this.setAnswerState(enums_1.MessageType.Retry);
                return;
            }
            if (this.settings.acceptSpellingErrors) {
                this.setAnswerState(enums_1.MessageType.Correct);
                this.enteredText = closeCorrectMatches[0].usedAlternative;
                return;
            }
        }
        if (closeIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(closeIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        var alwaysApplyingAnswers = this.incorrectAnswers.filter(function (a) { return a.appliesAlways; });
        if (alwaysApplyingAnswers && alwaysApplyingAnswers.length > 0) {
            this.showErrorTooltip(alwaysApplyingAnswers[0], surpressTooltips);
        }
        this.setAnswerState(enums_1.MessageType.Error);
    };
    Blank.prototype.onTyped = function () {
        this.setAnswerState(enums_1.MessageType.None);
        this.lastCheckedText = "";
        this.removeTooltip();
    };
    Blank.prototype.lostFocus = function () {
        if (this.messageService.isActive(this)) {
            this.messageService.hide();
        }
    };
    /**
     * Sets the boolean properties isCorrect, is Error and isRetry according to thepassed  messageType.
     * @param messageType
     */
    Blank.prototype.setAnswerState = function (messageType) {
        this.isCorrect = false;
        this.isError = false;
        this.isRetry = false;
        this.isShowingSolution = false;
        switch (messageType) {
            case enums_1.MessageType.Correct:
                this.isCorrect = true;
                break;
            case enums_1.MessageType.Error:
                this.isError = true;
                break;
            case enums_1.MessageType.Retry:
                this.isRetry = true;
                break;
            case enums_1.MessageType.ShowSolution:
                this.isShowingSolution = true;
                break;
        }
    };
    Blank.prototype.showErrorTooltip = function (answer, surpressTooltip) {
        if (answer.message && answer.message.text) {
            this.setTooltipErrorText(answer.message, surpressTooltip);
        }
        if (!surpressTooltip) {
            answer.activateHighlight();
        }
    };
    /**
     * Displays the hint in the tooltip.
     */
    Blank.prototype.showHint = function () {
        if (this.isShowingSolution || this.isCorrect)
            return;
        this.removeTooltip();
        if (this.hint && this.hint.text !== "") {
            this.displayTooltip(this.hint.text, enums_1.MessageType.Retry, false);
            if (this.hint.highlightedElement) {
                this.hint.highlightedElement.isHighlighted = true;
            }
        }
    };
    Blank.prototype.serialize = function () {
        return this.enteredText;
    };
    Blank.prototype.deserialize = function (data) {
        this.enteredText = data;
    };
    return Blank;
}(cloze_element_1.ClozeElement));
exports.Blank = Blank;


/***/ }),

/***/ "./src/scripts/models/cloze-element.ts":
/*!*********************************************!*\
  !*** ./src/scripts/models/cloze-element.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClozeElement = exports.ClozeElementType = void 0;
var ClozeElementType;
(function (ClozeElementType) {
    ClozeElementType[ClozeElementType["Blank"] = 0] = "Blank";
    ClozeElementType[ClozeElementType["Highlight"] = 1] = "Highlight";
})(ClozeElementType = exports.ClozeElementType || (exports.ClozeElementType = {}));
var ClozeElement = /** @class */ (function () {
    function ClozeElement() {
    }
    return ClozeElement;
}());
exports.ClozeElement = ClozeElement;


/***/ }),

/***/ "./src/scripts/models/cloze.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/cloze.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cloze = void 0;
/**
 * Represents the cloze. Instantiate with static createCloze().
 */
var Cloze = /** @class */ (function () {
    function Cloze() {
    }
    Object.defineProperty(Cloze.prototype, "isSolved", {
        /**
         * Returns true if all blanks were entered correctly.
         * @returns boolean
         */
        get: function () {
            return this.blanks.every(function (b) { return b.isCorrect === true; });
        },
        enumerable: false,
        configurable: true
    });
    Cloze.prototype.hideAllHighlights = function () {
        for (var _i = 0, _a = this.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            highlight.isHighlighted = false;
        }
    };
    Cloze.prototype.reset = function () {
        this.hideAllHighlights();
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.reset();
        }
    };
    Cloze.prototype.showSolutions = function () {
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.showSolution();
        }
        this.hideAllHighlights();
    };
    Cloze.prototype.serialize = function () {
        var cloze = [];
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            cloze.push(blank.serialize());
        }
        return cloze;
    };
    Cloze.prototype.deserialize = function (data) {
        for (var index = 0; index < data.length; index++) {
            if (index >= this.blanks.length)
                return;
            var blank = this.blanks[index];
            blank.deserialize(data[index]);
        }
    };
    return Cloze;
}());
exports.Cloze = Cloze;


/***/ }),

/***/ "./src/scripts/models/enums.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/enums.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectAlternatives = exports.ClozeType = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Error"] = 0] = "Error";
    MessageType[MessageType["Correct"] = 1] = "Correct";
    MessageType[MessageType["Retry"] = 2] = "Retry";
    MessageType[MessageType["ShowSolution"] = 3] = "ShowSolution";
    MessageType[MessageType["None"] = 4] = "None";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ClozeType;
(function (ClozeType) {
    ClozeType[ClozeType["Type"] = 0] = "Type";
    ClozeType[ClozeType["Select"] = 1] = "Select";
})(ClozeType = exports.ClozeType || (exports.ClozeType = {}));
var SelectAlternatives;
(function (SelectAlternatives) {
    SelectAlternatives[SelectAlternatives["Alternatives"] = 0] = "Alternatives";
    SelectAlternatives[SelectAlternatives["All"] = 1] = "All";
})(SelectAlternatives = exports.SelectAlternatives || (exports.SelectAlternatives = {}));


/***/ }),

/***/ "./src/scripts/models/highlight.ts":
/*!*****************************************!*\
  !*** ./src/scripts/models/highlight.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Highlight = void 0;
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
/**
 * Represents a highlight in the cloze.
 */
var Highlight = /** @class */ (function (_super) {
    __extends(Highlight, _super);
    function Highlight(text, id) {
        var _this = _super.call(this) || this;
        _this.type = cloze_element_1.ClozeElementType.Highlight;
        _this.text = text;
        _this.id = id;
        _this.isHighlighted = false;
        return _this;
    }
    return Highlight;
}(cloze_element_1.ClozeElement));
exports.Highlight = Highlight;


/***/ }),

/***/ "./src/scripts/models/message.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/message.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
/**
 * Represents a message that the content author has specified to be a reaction
 * to an user's answer.
 */
var Message = /** @class */ (function () {
    function Message(text, showHighlight, relativeHighlightPosition) {
        var _this = this;
        this.text = text;
        this.relativeHighlightPosition = relativeHighlightPosition;
        this.linkHighlight = function (highlightsBefore, highlightsAfter) {
            if (!_this.relativeHighlightPosition)
                return;
            if (_this.relativeHighlightPosition < 0 && (0 - _this.relativeHighlightPosition - 1) < highlightsBefore.length) {
                _this.highlightedElement = highlightsBefore[0 - _this.relativeHighlightPosition - 1];
            }
            else if (_this.relativeHighlightPosition > 0 && (_this.relativeHighlightPosition - 1 < highlightsAfter.length)) {
                _this.highlightedElement = highlightsAfter[_this.relativeHighlightPosition - 1];
            }
        };
        if (!showHighlight)
            this.relativeHighlightPosition = undefined;
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/scripts/models/snippet.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/snippet.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Snippet = void 0;
/**
 * A snippet is a text block that is put into placed marked in feedback texts or hints.
 */
var Snippet = /** @class */ (function () {
    /**
     * Constructs the snippet.
     * @param name The name of the snippet that is used when it is referenced in a feedbacktext (without the snippet marker @)
     * @param text The snippet itself (html)
     */
    function Snippet(name, text) {
        this.name = name;
        this.text = text;
    }
    return Snippet;
}());
exports.Snippet = Snippet;


/***/ }),

/***/ "./src/scripts/models/xapi.ts":
/*!************************************!*\
  !*** ./src/scripts/models/xapi.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XAPIActivityDefinition = void 0;
var XAPIActivityDefinition = /** @class */ (function () {
    function XAPIActivityDefinition() {
    }
    return XAPIActivityDefinition;
}());
exports.XAPIActivityDefinition = XAPIActivityDefinition;


/***/ }),

/***/ "./src/scripts/services/data-repository.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/data-repository.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H5PDataRepository = void 0;
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var snippet_1 = __webpack_require__(/*! ../models/snippet */ "./src/scripts/models/snippet.ts");
/**
 * Wraps around the h5p config object and provides access to the content.
 */
var H5PDataRepository = /** @class */ (function () {
    function H5PDataRepository(h5pConfigData, settings, localization, jquery, unwrapper) {
        this.h5pConfigData = h5pConfigData;
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.unwrapper = unwrapper;
    }
    /**
     * Returns the blank text of the cloze (as HTML markup).
     */
    H5PDataRepository.prototype.getClozeText = function () {
        return this.h5pConfigData.content.blanksText;
    };
    // TODO: remove or implement
    H5PDataRepository.prototype.getFeedbackText = function () {
        return "";
    };
    H5PDataRepository.prototype.getMedia = function () {
        return this.h5pConfigData.media;
    };
    H5PDataRepository.prototype.getTaskDescription = function () {
        return this.h5pConfigData.content.task;
    };
    H5PDataRepository.prototype.getBlanks = function () {
        var blanks = new Array();
        if (!this.h5pConfigData.content.blanksList)
            return blanks;
        for (var i = 0; i < this.h5pConfigData.content.blanksList.length; i++) {
            var h5pBlank = this.h5pConfigData.content.blanksList[i];
            var correctText = h5pBlank.correctAnswerText;
            if (correctText === "" || correctText === undefined)
                continue;
            var blank = blank_loader_1.BlankLoader.instance.createBlank("cloze" + i, correctText, h5pBlank.hint, h5pBlank.incorrectAnswersList);
            blank.finishInitialization();
            blanks.push(blank);
        }
        return blanks;
    };
    H5PDataRepository.prototype.getSnippets = function () {
        var snippets = new Array();
        if (!this.h5pConfigData.snippets)
            return snippets;
        for (var i = 0; i < this.h5pConfigData.snippets.length; i++) {
            var raw_snippet = this.h5pConfigData.snippets[i];
            var snippet = new snippet_1.Snippet(raw_snippet.snippetName, this.unwrapper.unwrap(raw_snippet.snippetText));
            snippets.push(snippet);
        }
        return snippets;
    };
    return H5PDataRepository;
}());
exports.H5PDataRepository = H5PDataRepository;


/***/ }),

/***/ "./src/scripts/services/localization.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/localization.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H5PLocalization = exports.LocalizationStructures = exports.LocalizationLabels = void 0;
var LocalizationLabels;
(function (LocalizationLabels) {
    LocalizationLabels["showSolutionButton"] = "showSolutions";
    LocalizationLabels["retryButton"] = "tryAgain";
    LocalizationLabels["checkAllButton"] = "checkAnswer";
    LocalizationLabels["notFilledOutWarning"] = "notFilledOut";
    LocalizationLabels["tipButton"] = "tipLabel";
    LocalizationLabels["typoMessage"] = "spellingMistakeWarning";
    LocalizationLabels["scoreBarLabel"] = "scoreBarLabel";
})(LocalizationLabels = exports.LocalizationLabels || (exports.LocalizationLabels = {}));
var LocalizationStructures;
(function (LocalizationStructures) {
    LocalizationStructures["confirmCheck"] = "confirmCheck";
    LocalizationStructures["confirmRetry"] = "confirmRetry";
    LocalizationStructures["overallFeedback"] = "overallFeedback";
})(LocalizationStructures = exports.LocalizationStructures || (exports.LocalizationStructures = {}));
/**
 * Provides localization services.
 */
var H5PLocalization = /** @class */ (function () {
    function H5PLocalization(h5pConfiguration) {
        this.h5pConfiguration = h5pConfiguration;
    }
    /**
     * Returns the localized string that is represented by the identifier.
     * @param  {string} localizableStringIdentifier
     * @returns string
     */
    H5PLocalization.prototype.getText = function (localizableStringIdentifier) {
        return this.h5pConfiguration[localizableStringIdentifier];
    };
    H5PLocalization.prototype.labelToString = function (label) {
        return label.toString();
    };
    /**
     * Returns the localized string for the label.
     * @param  {LocalizationLabels} label
     * @returns string
     */
    H5PLocalization.prototype.getTextFromLabel = function (label) {
        return this.getText(this.labelToString(label));
    };
    H5PLocalization.prototype.getObjectForStructure = function (structure) {
        return this.h5pConfiguration[structure.toString()];
    };
    return H5PLocalization;
}());
exports.H5PLocalization = H5PLocalization;


/***/ }),

/***/ "./src/scripts/services/message-service.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/message-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageService = void 0;
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var MessageService = /** @class */ (function () {
    function MessageService(jQuery) {
        this.jQuery = jQuery;
    }
    MessageService.prototype.show = function (elementId, message, blank, type) {
        if (!type)
            type = enums_1.MessageType.None;
        var elements = this.jQuery("#" + elementId);
        if (elements.length > 0) {
            this.speechBubble = new H5P.JoubelSpeechBubble(elements, message);
            this.associatedBlank = blank;
        }
    };
    MessageService.prototype.hide = function () {
        if (this.speechBubble) {
            try {
                this.speechBubble.remove();
            }
            catch (exception) {
            }
        }
        this.speechBubble = undefined;
        this.associatedBlank = undefined;
    };
    MessageService.prototype.isActive = function (blank) {
        return this.associatedBlank === blank;
    };
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./src/scripts/services/settings.ts":
/*!******************************************!*\
  !*** ./src/scripts/services/settings.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H5PSettings = void 0;
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var H5PSettings = /** @class */ (function () {
    function H5PSettings(h5pConfigData) {
        this.clozeType = enums_1.ClozeType.Type;
        this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        this.selectAlternativeRestriction = 5;
        this.enableRetry = true;
        this.enableSolutionsButton = true;
        this.enableCheckButton = true;
        this.autoCheck = false;
        this.caseSensitive = false;
        this.warnSpellingErrors = true;
        this.acceptSpellingErrors = false;
        this.showSolutionsRequiresInput = true;
        this.confirmCheckDialog = false;
        this.confirmRetryDialog = false;
        this.disableImageZooming = false;
        if (h5pConfigData.behaviour.mode === 'selection') {
            this.clozeType = enums_1.ClozeType.Select;
        }
        else {
            this.clozeType = enums_1.ClozeType.Type;
        }
        if (h5pConfigData.behaviour.selectAlternatives === 'all') {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        else if (h5pConfigData.behaviour.selectAlternatives === 'alternatives') {
            this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        }
        else {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        this.selectAlternativeRestriction = h5pConfigData.behaviour.selectAlternativeRestriction;
        this.enableRetry = h5pConfigData.behaviour.enableRetry;
        this.enableSolutionsButton = h5pConfigData.behaviour.enableSolutionsButton;
        this.enableCheckButton = h5pConfigData.behaviour.enableCheckButton;
        this.autoCheck = h5pConfigData.behaviour.autoCheck;
        this.caseSensitive = h5pConfigData.behaviour.caseSensitive;
        this.warnSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "warn";
        this.acceptSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "accept";
        this.showSolutionsRequiresInput = h5pConfigData.behaviour.showSolutionsRequiresInput;
        this.confirmCheckDialog = h5pConfigData.behaviour.confirmCheckDialog;
        this.confirmRetryDialog = h5pConfigData.behaviour.confirmRetryDialog;
        this.disableImageZooming = h5pConfigData.behaviour.disableImageZooming;
        this.enforceLogic();
    }
    /**
     * This method sets sensible default values for settings hidden with showWhen
     */
    H5PSettings.prototype.enforceLogic = function () {
        if (this.clozeType === enums_1.ClozeType.Type) {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
            this.selectAlternativeRestriction = 0;
        }
        else {
            if (this.selectAlternativeRestriction === enums_1.SelectAlternatives.Alternatives) {
                this.selectAlternativeRestriction = 0;
            }
            this.warnSpellingErrors = false;
            this.acceptSpellingErrors = false;
            this.caseSensitive = false;
        }
    };
    return H5PSettings;
}());
exports.H5PSettings = H5PSettings;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/entries/dist.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvY29udmVydC9kbXAuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9jb252ZXJ0L3htbC5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9kaWZmL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9kaWZmL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYvY3NzLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi9qc29uLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi9saW5lLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi9zZW50ZW5jZS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYvd29yZC5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2luZGV4LmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvcGF0Y2gvYXBwbHkuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9wYXRjaC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9wYXRjaC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL3BhdGNoL3BhcnNlLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvdXRpbC9hcnJheS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL3V0aWwvZGlzdGFuY2UtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi91dGlsL3BhcmFtcy5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz80MDQ5Iiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9lbnRyaWVzL2Rpc3QudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9saWIvaGVscGVycy50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9hcHAudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMvcGVybXV0YXRpb25zLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Vud3JhcHBlci50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Fuc3dlci50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2JsYW5rLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUtZWxlbWVudC50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9tb2RlbHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL21vZGVscy9oaWdobGlnaHQudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL21vZGVscy9tZXNzYWdlLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9tb2RlbHMvc25pcHBldC50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3hhcGkudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvbG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3NldHRpbmdzLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnRUFBZ0UseUJBQXlCLEdBQUcsaUhBQWlILHlCQUF5QixzQkFBc0IsMEJBQTBCLEdBQUcsK0NBQStDLHVHQUF1Ryw0QkFBNEIsT0FBTyxHQUFHLDhEQUE4RCw0QkFBNEIseUJBQXlCLEdBQUcsaURBQWlELDRDQUE0QyxxQkFBcUIsNEJBQTRCLGdDQUFnQyw2Q0FBNkMsOEJBQThCLHVCQUF1QixHQUFHLHNEQUFzRCxrQ0FBa0MsR0FBRyx1REFBdUQsa0NBQWtDLEdBQUcsb0VBQW9FLG9CQUFvQixHQUFHLHlDQUF5QyxzQkFBc0IsR0FBRyxrREFBa0QseUJBQXlCLDRCQUE0QixpQ0FBaUMsR0FBRyxvR0FBb0csaUNBQWlDLHFCQUFxQiwwQkFBMEIsR0FBRyxpRkFBaUYsb0JBQW9CLHNDQUFzQyw0QkFBNEIsR0FBRyw2RkFBNkYsMEJBQTBCLGdDQUFnQyxxQkFBcUIsR0FBRyxrRUFBa0UseUJBQXlCLG1CQUFtQixtQkFBbUIsa0NBQWtDLDRCQUE0QiwwQkFBMEIscUNBQXFDLHFCQUFxQixHQUFHLG9GQUFvRixnQ0FBZ0MsZ0NBQWdDLHFCQUFxQixvQ0FBb0MsR0FBRyxnRUFBZ0UseUJBQXlCLG1CQUFtQixlQUFlLGtDQUFrQyxxQ0FBcUMsNEJBQTRCLDBCQUEwQixxQkFBcUIsR0FBRyxrRkFBa0YsZ0NBQWdDLGdDQUFnQyxtQkFBbUIsR0FBRyxnRUFBZ0UseUJBQXlCLG1CQUFtQixlQUFlLGtDQUFrQyxxQ0FBcUMsNEJBQTRCLDBCQUEwQixxQkFBcUIsR0FBRywyREFBMkQsd0JBQXdCLHlCQUF5QixtQkFBbUIsdUJBQXVCLEdBQUcsa0lBQWtJLGlCQUFpQix3QkFBd0Isd0NBQXdDLHdDQUF3QywwQ0FBMEMsMENBQTBDLDRDQUE0Qyw0Q0FBNEMsNkNBQTZDLDZDQUE2QyxHQUFHLG9DQUFvQyxZQUFZLHlCQUF5QixPQUFPLFVBQVUscUJBQXFCLE9BQU8sR0FBRyw0QkFBNEIsWUFBWSx5QkFBeUIsT0FBTyxVQUFVLHFCQUFxQixPQUFPLEdBQUcsMkNBQTJDLG9DQUFvQyxHQUFHLHFFQUFxRSw2Q0FBNkMscUJBQXFCLHFCQUFxQix5Q0FBeUMseUNBQXlDLHFEQUFxRCxxREFBcUQsMkNBQTJDLDJDQUEyQyw2Q0FBNkMsNkNBQTZDLEdBQUcsK0NBQStDLFlBQVksb0NBQW9DLE9BQU8sVUFBVSxpREFBaUQsT0FBTyxHQUFHLHVDQUF1QyxZQUFZLG9DQUFvQyxPQUFPLFVBQVUsaURBQWlELE9BQU8sR0FBRyx1REFBdUQsMkJBQTJCLEdBQUcsNkRBQTZELHVCQUF1QixhQUFhLGdDQUFnQyxpQkFBaUIsbUJBQW1CLEdBQUcsK0ZBQStGLDRCQUE0QixHQUFHLG9OQUFvTixvQkFBb0IsR0FBRyx5TEFBeUwsMkJBQTJCLEdBQUcsd0hBQXdILGlCQUFpQixrQkFBa0IsR0FBRyxzSkFBc0osb0JBQW9CLEdBQUcsK0dBQStHLHVCQUF1QixPQUFPLDJOQUEyTixxQ0FBcUMsNEJBQTRCLG1FQUFtRSwyQ0FBMkMsMkNBQTJDLHNDQUFzQywwQ0FBMEMsMENBQTBDLDBCQUEwQixHQUFHLCtHQUErRyx5QkFBeUIsbUJBQW1CLGtCQUFrQiwwQkFBMEIsR0FBRyx1T0FBdU8scUJBQXFCLEdBQUcsdU9BQXVPLHFCQUFxQix1Q0FBdUMsR0FBRyw4QkFBOEIsb0JBQW9CLCtDQUErQyxPQUFPLG9CQUFvQiw0Q0FBNEMsT0FBTyw4QkFBOEIsNkNBQTZDLE9BQU8sb0JBQW9CLDRDQUE0QyxPQUFPLEdBQUcsc0JBQXNCLG9CQUFvQiwrQ0FBK0MsT0FBTyxvQkFBb0IsNENBQTRDLE9BQU8sOEJBQThCLDZDQUE2QyxPQUFPLG9CQUFvQiw0Q0FBNEMsT0FBTyxHQUFHLE9BQU8sdUZBQXVGLFlBQVksUUFBUSxXQUFXLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLE1BQU0sWUFBWSxNQUFNLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxXQUFXLEtBQUssWUFBWSxRQUFRLFdBQVcsS0FBSyxZQUFZLFdBQVcs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Q0EsQ0FBQyxFQUFDO0FBQ0Ysd0NBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysc0RBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysb0RBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsaURBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsbURBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdURBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsK0NBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdURBQXNEO0FBQ3REO0FBQ0E7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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaDVwLWFkdmFuY2VkLWJsYW5rcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLyogVGV4dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIHAsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgZGl2IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICBtYXJnaW46IDAgMCAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gICAgLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgcCxcXG4gICAgLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgZGl2IHtcXG4gICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xcbiAgICB9XFxufVxcblxcblxcbi8qIElucHV0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1pbnB1dC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogSDVQRHJvaWRTYW5zLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbiAgICBwYWRkaW5nOiAwLjE4NzVlbSAxLjVlbSAwLjE4NzVlbSAwLjVlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBpbnB1dC5oNXAtdGV4dC1pbnB1dCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA2NHB4KTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIHNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzNnB4KTtcXG59XFxuXFxuLyogSUUgKyBDaHJvbWUgc3BlY2lmaWMgZml4ZXMgKi9cXG5cXG4uaDVwLXRleHQtaW5wdXQ6Oi1tcy1jbGVhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpub3QoLmNvcnJlY3QpLmJsYW5rLmhhcy10aXAgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBTZWxlY3QgbW9kZSAqL1xcblxcbnNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuXFxuLyogU2hvd2luZyBzb2x1dGlvbiBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5zaG93aW5nLXNvbHV0aW9uIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWRkOGJiO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuXFxuLyogRm9jdXNzZWQgaW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIDAgIzdmYjhmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2ZiOGZmO1xcbn1cXG5cXG5cXG4vKiBDb3JyZWN0bHkgYW5zd2VyZWQgaW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdCAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiAjOWRkOGJiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWRkOGJiO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC41ZW07ICAgIFxcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxufVxcblxcblxcbi8qIEluY29ycmVjdCBhbnN3ZXJzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2QwZDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2QwZDA7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yIC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcblxcbi8qIFNwZWxsaW5nIGVycm9ycyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeSAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZjk5O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeSAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjVlbTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbn1cXG5cXG5cXG4vKiBCdXR0b25zICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuXFxuLyogSGlnaGxpZ2h0IGluIHNwZWxsaW5nIG1pc3Rha2UgbWFya2VyICovXFxuXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3NpbmctY2hhcmFjdGVyLFxcbi5zcGVsbGluZy1taXN0YWtlIC5taXN0YWtlbi1jaGFyYWN0ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWNvbG9yO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBibGluay1jb2xvcjtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMztcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jb2xvciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbn1cXG5cXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcblxcbi8qIEhpZ2hsaWdodHMgaW4gdGV4dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gICAgbWFyZ2luOiAtMC40ZW07XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstYmFja2dyb3VuZC1jb2xvciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBPdGhlcnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaW52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcblxcblxcbi8qIFRpcHMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLXRpcC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICByaWdodDogMC40ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXA6bm90KC5jb3JyZWN0KTpub3QoLmVycm9yKTpub3QoLnJldHJ5KSAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjI1ZW07XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLmNvcnJlY3QgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLmVycm9yIC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlcixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5yZXRyeSAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICByaWdodDogMi4yNWVtO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdC5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMy41ZW07XFxufVxcblxcbi8qIGltcHJvdmVzIGFwcGVhcmFuY2Ugb2YgaDVwIHRpcCBzaGFkb3dzICovXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmpvdWJlbC1pY29uLXRpcC1ub3JtYWwgLmg1cC1pY29uLXNoYWRvdzpiZWZvcmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC4xMztcXG59XFxuXFxuLyogcGVuZGluZyBmZWVkYmFjayBtYXJrZXIgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbms6bm90KC5oYXMtcGVuZGluZy1mZWVkYmFjaykgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24ge1xcbiAgICBmb250LXNpemU6IGxhcmdlOyAgICBcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBhbmltYXRpb246IHNoYWtlIDNzIGN1YmljLWJlemllciguMzYsIC4wNywgLjE5LCAuOTcpIHJldmVyc2U7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTAuNGVtO1xcbiAgICB0b3A6IC0wLjdlbTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDVhXFxcIjtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuZXJyb3IuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5yZXRyeS5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgY29sb3I6ICNmZmZmMDA7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDAuNWVtIGJsYWNrO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xcbiAgICAyJSxcXG4gICAgMjAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKTtcXG4gICAgfVxcbiAgICA0JSxcXG4gICAgMTclIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gICAgfVxcbiAgICA2JSxcXG4gICAgMTAlLFxcbiAgICAxNSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gICAgfVxcbiAgICA5JSxcXG4gICAgMTMlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMiUsXFxuICAgIDIwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgNCUsXFxuICAgIDE3JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgNiUsXFxuICAgIDEwJSxcXG4gICAgMTUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgOSUsXFxuICAgIDEzJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLFNBQVM7O0FBRVQ7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTs7UUFFSSxpQkFBaUI7SUFDckI7QUFDSjs7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsK0JBQStCOztBQUUvQjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7OztBQUdBLDJCQUEyQjs7QUFFM0I7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYiwr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O1FBRUksaUNBQWlDO0lBQ3JDO0FBQ0o7O0FBbEJBO0lBQ0k7O1FBRUksb0NBQW9DO0lBQ3hDO0lBQ0E7O1FBRUksaUNBQWlDO0lBQ3JDO0lBQ0E7OztRQUdJLGtDQUFrQztJQUN0QztJQUNBOztRQUVJLGlDQUFpQztJQUNyQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oNXAtYWR2YW5jZWQtYmxhbmtzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4vKiBUZXh0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgcCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIG1hcmdpbjogMCAwIDFlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcbiAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgIH1cXG59XFxuXFxuXFxuLyogSW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWlucHV0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBINVBEcm9pZFNhbnMsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxuICAgIHBhZGRpbmc6IDAuMTg3NWVtIDEuNWVtIDAuMTg3NWVtIDAuNWVtO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIGlucHV0Lmg1cC10ZXh0LWlucHV0IHtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDY0cHgpO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgc2VsZWN0Lmg1cC10ZXh0LWlucHV0IHtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM2cHgpO1xcbn1cXG5cXG4vKiBJRSArIENocm9tZSBzcGVjaWZpYyBmaXhlcyAqL1xcblxcbi5oNXAtdGV4dC1pbnB1dDo6LW1zLWNsZWFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOm5vdCguY29ycmVjdCkuYmxhbmsuaGFzLXRpcCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIFNlbGVjdCBtb2RlICovXFxuXFxuc2VsZWN0Lmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG5cXG4vKiBTaG93aW5nIHNvbHV0aW9uIGlucHV0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnNob3dpbmctc29sdXRpb24gLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM5ZGQ4YmI7XFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbn1cXG5cXG5cXG4vKiBGb2N1c3NlZCBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayAuaDVwLXRleHQtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gMCAjN2ZiOGZmO1xcbiAgICBib3JkZXItY29sb3I6ICM3ZmI4ZmY7XFxufVxcblxcblxcbi8qIENvcnJlY3RseSBhbnN3ZXJlZCBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6ICM5ZGQ4YmI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZGQ4YmI7XFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjVlbTsgICAgXFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG59XFxuXFxuXFxuLyogSW5jb3JyZWN0IGFuc3dlcnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDBkMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDBkMDtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC41ZW07XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuXFxuLyogU3BlbGxpbmcgZXJyb3JzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmOTk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgYnV0dG9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5cXG4vKiBIaWdobGlnaHQgaW4gc3BlbGxpbmcgbWlzdGFrZSBtYXJrZXIgKi9cXG5cXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzc2luZy1jaGFyYWN0ZXIsXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICBhbmltYXRpb24tbmFtZTogYmxpbmstY29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEzO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG59XFxuXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5cXG4vKiBIaWdobGlnaHRzIGluIHRleHQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMC40ZW07XFxuICAgIG1hcmdpbjogLTAuNGVtO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcblxcbi8qIE90aGVycyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuXFxuLyogVGlwcyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtdGlwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHJpZ2h0OiAwLjRlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcDpub3QoLmNvcnJlY3QpOm5vdCguZXJyb3IpOm5vdCgucmV0cnkpIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuMjVlbTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHJpZ2h0OiAyLjI1ZW07XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvci5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVlbTtcXG59XFxuXFxuLyogaW1wcm92ZXMgYXBwZWFyYW5jZSBvZiBoNXAgdGlwIHNoYWRvd3MgKi9cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuam91YmVsLWljb24tdGlwLW5vcm1hbCAuaDVwLWljb24tc2hhZG93OmJlZm9yZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjEzO1xcbn1cXG5cXG4vKiBwZW5kaW5nIGZlZWRiYWNrIG1hcmtlciAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuazpub3QoLmhhcy1wZW5kaW5nLWZlZWRiYWNrKSBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7ICAgIFxcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgM3MgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgcmV2ZXJzZTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0wLjRlbTtcXG4gICAgdG9wOiAtMC43ZW07XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YVxcXCI7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjZmZmZjAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwLjVlbSBibGFjaztcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDIlLFxcbiAgICAyMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDQlLFxcbiAgICAxNyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDYlLFxcbiAgICAxMCUsXFxuICAgIDE1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDklLFxcbiAgICAxMyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbnZlcnRDaGFuZ2VzVG9ETVAgPSBjb252ZXJ0Q2hhbmdlc1RvRE1QO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuLy8gU2VlOiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvd2lraS9BUElcbmZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICB2YXIgcmV0ID0gW10sXG4gICAgICBjaGFuZ2UsXG4gICAgICBvcGVyYXRpb247XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IDE7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgb3BlcmF0aW9uID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZXJhdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goW29wZXJhdGlvbiwgY2hhbmdlLnZhbHVlXSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNTJaWEowTDJSdGNDNXFjeUpkTENKdVlXMWxjeUk2V3lKamIyNTJaWEowUTJoaGJtZGxjMVJ2UkUxUUlpd2lZMmhoYm1kbGN5SXNJbkpsZENJc0ltTm9ZVzVuWlNJc0ltOXdaWEpoZEdsdmJpSXNJbWtpTENKc1pXNW5kR2dpTENKaFpHUmxaQ0lzSW5KbGJXOTJaV1FpTENKd2RYTm9JaXdpZG1Gc2RXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVRkJPMEZCUTA4c1UwRkJVMEVzYlVKQlFWUXNRMEZCTmtKRExFOUJRVGRDTEVWQlFYTkRPMEZCUXpORExFMUJRVWxETEVkQlFVY3NSMEZCUnl4RlFVRldPMEZCUVVFc1RVRkRTVU1zVFVGRVNqdEJRVUZCTEUxQlJVbERMRk5CUmtvN08wRkJSMEVzVDBGQlN5eEpRVUZKUXl4RFFVRkRMRWRCUVVjc1EwRkJZaXhGUVVGblFrRXNRMEZCUXl4SFFVRkhTaXhQUVVGUExFTkJRVU5MTEUxQlFUVkNMRVZCUVc5RFJDeERRVUZETEVWQlFYSkRMRVZCUVhsRE8wRkJRM1pEUml4SlFVRkJRU3hOUVVGTkxFZEJRVWRHTEU5QlFVOHNRMEZCUTBrc1EwRkJSQ3hEUVVGb1FqczdRVUZEUVN4UlFVRkpSaXhOUVVGTkxFTkJRVU5KTEV0QlFWZ3NSVUZCYTBJN1FVRkRhRUpJTEUxQlFVRkJMRk5CUVZNc1IwRkJSeXhEUVVGYU8wRkJRMFFzUzBGR1JDeE5RVVZQTEVsQlFVbEVMRTFCUVUwc1EwRkJRMHNzVDBGQldDeEZRVUZ2UWp0QlFVTjZRa29zVFVGQlFVRXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJZanRCUVVORUxFdEJSazBzVFVGRlFUdEJRVU5NUVN4TlFVRkJRU3hUUVVGVExFZEJRVWNzUTBGQldqdEJRVU5FT3p0QlFVVkVSaXhKUVVGQlFTeEhRVUZITEVOQlFVTlBMRWxCUVVvc1EwRkJVeXhEUVVGRFRDeFRRVUZFTEVWQlFWbEVMRTFCUVUwc1EwRkJRMDhzUzBGQmJrSXNRMEZCVkR0QlFVTkVPenRCUVVORUxGTkJRVTlTTEVkQlFWQTdRVUZEUkNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRk5sWlRvZ2FIUjBjRG92TDJOdlpHVXVaMjl2WjJ4bExtTnZiUzl3TDJkdmIyZHNaUzFrYVdabUxXMWhkR05vTFhCaGRHTm9MM2RwYTJrdlFWQkpYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMjl1ZG1WeWRFTm9ZVzVuWlhOVWIwUk5VQ2hqYUdGdVoyVnpLU0I3WEc0Z0lHeGxkQ0J5WlhRZ1BTQmJYU3hjYmlBZ0lDQWdJR05vWVc1blpTeGNiaUFnSUNBZ0lHOXdaWEpoZEdsdmJqdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCamFHRnVaMlZ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1kyaGhibWRsSUQwZ1kyaGhibWRsYzF0cFhUdGNiaUFnSUNCcFppQW9ZMmhoYm1kbExtRmtaR1ZrS1NCN1hHNGdJQ0FnSUNCdmNHVnlZWFJwYjI0Z1BTQXhPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ZMmhoYm1kbExuSmxiVzkyWldRcElIdGNiaUFnSUNBZ0lHOXdaWEpoZEdsdmJpQTlJQzB4TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnZjR1Z5WVhScGIyNGdQU0F3TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEM1d2RYTm9LRnR2Y0dWeVlYUnBiMjRzSUdOb1lXNW5aUzUyWVd4MVpWMHBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnlaWFE3WEc1OVhHNGlYWDA9XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29udmVydENoYW5nZXNUb1hNTCA9IGNvbnZlcnRDaGFuZ2VzVG9YTUw7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvWE1MKGNoYW5nZXMpIHtcbiAgdmFyIHJldCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSFRNTChzKSB7XG4gIHZhciBuID0gcztcbiAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgcmV0dXJuIG47XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1MlpYSjBMM2h0YkM1cWN5SmRMQ0p1WVcxbGN5STZXeUpqYjI1MlpYSjBRMmhoYm1kbGMxUnZXRTFNSWl3aVkyaGhibWRsY3lJc0luSmxkQ0lzSW1raUxDSnNaVzVuZEdnaUxDSmphR0Z1WjJVaUxDSmhaR1JsWkNJc0luQjFjMmdpTENKeVpXMXZkbVZrSWl3aVpYTmpZWEJsU0ZSTlRDSXNJblpoYkhWbElpd2lhbTlwYmlJc0luTWlMQ0p1SWl3aWNtVndiR0ZqWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVU4c1UwRkJVMEVzYlVKQlFWUXNRMEZCTmtKRExFOUJRVGRDTEVWQlFYTkRPMEZCUXpORExFMUJRVWxETEVkQlFVY3NSMEZCUnl4RlFVRldPenRCUVVOQkxFOUJRVXNzU1VGQlNVTXNRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUjBZc1QwRkJUeXhEUVVGRFJ5eE5RVUUxUWl4RlFVRnZRMFFzUTBGQlF5eEZRVUZ5UXl4RlFVRjVRenRCUVVOMlF5eFJRVUZKUlN4TlFVRk5MRWRCUVVkS0xFOUJRVThzUTBGQlEwVXNRMEZCUkN4RFFVRndRanM3UVVGRFFTeFJRVUZKUlN4TlFVRk5MRU5CUVVORExFdEJRVmdzUlVGQmEwSTdRVUZEYUVKS0xFMUJRVUZCTEVkQlFVY3NRMEZCUTBzc1NVRkJTaXhEUVVGVExFOUJRVlE3UVVGRFJDeExRVVpFTEUxQlJVOHNTVUZCU1VZc1RVRkJUU3hEUVVGRFJ5eFBRVUZZTEVWQlFXOUNPMEZCUTNwQ1RpeE5RVUZCUVN4SFFVRkhMRU5CUVVOTExFbEJRVW9zUTBGQlV5eFBRVUZVTzBGQlEwUTdPMEZCUlVSTUxFbEJRVUZCTEVkQlFVY3NRMEZCUTBzc1NVRkJTaXhEUVVGVFJTeFZRVUZWTEVOQlFVTktMRTFCUVUwc1EwRkJRMHNzUzBGQlVpeERRVUZ1UWpzN1FVRkZRU3hSUVVGSlRDeE5RVUZOTEVOQlFVTkRMRXRCUVZnc1JVRkJhMEk3UVVGRGFFSktMRTFCUVVGQkxFZEJRVWNzUTBGQlEwc3NTVUZCU2l4RFFVRlRMRkZCUVZRN1FVRkRSQ3hMUVVaRUxFMUJSVThzU1VGQlNVWXNUVUZCVFN4RFFVRkRSeXhQUVVGWUxFVkJRVzlDTzBGQlEzcENUaXhOUVVGQlFTeEhRVUZITEVOQlFVTkxMRWxCUVVvc1EwRkJVeXhSUVVGVU8wRkJRMFE3UVVGRFJqczdRVUZEUkN4VFFVRlBUQ3hIUVVGSExFTkJRVU5UTEVsQlFVb3NRMEZCVXl4RlFVRlVMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUUml4VlFVRlVMRU5CUVc5Q1J5eERRVUZ3UWl4RlFVRjFRanRCUVVOeVFpeE5RVUZKUXl4RFFVRkRMRWRCUVVkRUxFTkJRVkk3UVVGRFFVTXNSVUZCUVVFc1EwRkJReXhIUVVGSFFTeERRVUZETEVOQlFVTkRMRTlCUVVZc1EwRkJWU3hKUVVGV0xFVkJRV2RDTEU5QlFXaENMRU5CUVVvN1FVRkRRVVFzUlVGQlFVRXNRMEZCUXl4SFFVRkhRU3hEUVVGRExFTkJRVU5ETEU5QlFVWXNRMEZCVlN4SlFVRldMRVZCUVdkQ0xFMUJRV2hDTEVOQlFVbzdRVUZEUVVRc1JVRkJRVUVzUTBGQlF5eEhRVUZIUVN4RFFVRkRMRU5CUVVORExFOUJRVVlzUTBGQlZTeEpRVUZXTEVWQlFXZENMRTFCUVdoQ0xFTkJRVW83UVVGRFFVUXNSVUZCUVVFc1EwRkJReXhIUVVGSFFTeERRVUZETEVOQlFVTkRMRTlCUVVZc1EwRkJWU3hKUVVGV0xFVkJRV2RDTEZGQlFXaENMRU5CUVVvN1FVRkZRU3hUUVVGUFJDeERRVUZRTzBGQlEwUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdablZ1WTNScGIyNGdZMjl1ZG1WeWRFTm9ZVzVuWlhOVWIxaE5UQ2hqYUdGdVoyVnpLU0I3WEc0Z0lHeGxkQ0J5WlhRZ1BTQmJYVHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmphR0Z1WjJWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUdOb1lXNW5aU0E5SUdOb1lXNW5aWE5iYVYwN1hHNGdJQ0FnYVdZZ0tHTm9ZVzVuWlM1aFpHUmxaQ2tnZTF4dUlDQWdJQ0FnY21WMExuQjFjMmdvSnp4cGJuTStKeWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hqYUdGdVoyVXVjbVZ0YjNabFpDa2dlMXh1SUNBZ0lDQWdjbVYwTG5CMWMyZ29KenhrWld3K0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBMbkIxYzJnb1pYTmpZWEJsU0ZSTlRDaGphR0Z1WjJVdWRtRnNkV1VwS1R0Y2JseHVJQ0FnSUdsbUlDaGphR0Z1WjJVdVlXUmtaV1FwSUh0Y2JpQWdJQ0FnSUhKbGRDNXdkWE5vS0NjOEwybHVjejRuS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dOb1lXNW5aUzV5WlcxdmRtVmtLU0I3WEc0Z0lDQWdJQ0J5WlhRdWNIVnphQ2duUEM5a1pXdytKeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnlaWFF1YW05cGJpZ25KeWs3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Z6WTJGd1pVaFVUVXdvY3lrZ2UxeHVJQ0JzWlhRZ2JpQTlJSE03WEc0Z0lHNGdQU0J1TG5KbGNHeGhZMlVvTHlZdlp5d2dKeVpoYlhBN0p5azdYRzRnSUc0Z1BTQnVMbkpsY0d4aFkyVW9Mend2Wnl3Z0p5WnNkRHNuS1R0Y2JpQWdiaUE5SUc0dWNtVndiR0ZqWlNndlBpOW5MQ0FuSm1kME95Y3BPMXh1SUNCdUlEMGdiaTV5WlhCc1lXTmxLQzljSWk5bkxDQW5KbkYxYjNRN0p5azdYRzVjYmlBZ2NtVjBkWEp1SUc0N1hHNTlYRzRpWFgwPVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZBcnJheXMgPSBkaWZmQXJyYXlzO1xuZXhwb3J0cy5hcnJheURpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhciBhcnJheURpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMuYXJyYXlEaWZmID0gYXJyYXlEaWZmO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuYXJyYXlEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zbGljZSgpO1xufTtcblxuYXJyYXlEaWZmLmpvaW4gPSBhcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwyRnljbUY1TG1weklsMHNJbTVoYldWeklqcGJJbUZ5Y21GNVJHbG1aaUlzSWtScFptWWlMQ0owYjJ0bGJtbDZaU0lzSW5aaGJIVmxJaXdpYzJ4cFkyVWlMQ0pxYjJsdUlpd2ljbVZ0YjNabFJXMXdkSGtpTENKa2FXWm1RWEp5WVhseklpd2liMnhrUVhKeUlpd2libVYzUVhKeUlpd2lZMkZzYkdKaFkyc2lMQ0prYVdabUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3T3pzN1FVRkZUeXhKUVVGTlFTeFRRVUZUTEVkQlFVYzdRVUZCU1VNN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzUTBGQlNpeEZRVUZzUWpzN096czdPMEZCUTFCRUxGTkJRVk1zUTBGQlEwVXNVVUZCVml4SFFVRnhRaXhWUVVGVFF5eExRVUZVTEVWQlFXZENPMEZCUTI1RExGTkJRVTlCTEV0QlFVc3NRMEZCUTBNc1MwRkJUaXhGUVVGUU8wRkJRMFFzUTBGR1JEczdRVUZIUVVvc1UwRkJVeXhEUVVGRFN5eEpRVUZXTEVkQlFXbENUQ3hUUVVGVExFTkJRVU5OTEZkQlFWWXNSMEZCZDBJc1ZVRkJVMGdzUzBGQlZDeEZRVUZuUWp0QlFVTjJSQ3hUUVVGUFFTeExRVUZRTzBGQlEwUXNRMEZHUkRzN1FVRkpUeXhUUVVGVFNTeFZRVUZVTEVOQlFXOUNReXhOUVVGd1FpeEZRVUUwUWtNc1RVRkJOVUlzUlVGQmIwTkRMRkZCUVhCRExFVkJRVGhETzBGQlFVVXNVMEZCVDFZc1UwRkJVeXhEUVVGRFZ5eEpRVUZXTEVOQlFXVklMRTFCUVdZc1JVRkJkVUpETEUxQlFYWkNMRVZCUVN0Q1F5eFJRVUV2UWl4RFFVRlFPMEZCUVd0RUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHRnljbUY1UkdsbVppQTlJRzVsZHlCRWFXWm1LQ2s3WEc1aGNuSmhlVVJwWm1ZdWRHOXJaVzVwZW1VZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkbUZzZFdVdWMyeHBZMlVvS1R0Y2JuMDdYRzVoY25KaGVVUnBabVl1YW05cGJpQTlJR0Z5Y21GNVJHbG1aaTV5WlcxdmRtVkZiWEIwZVNBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJrYVdabVFYSnlZWGx6S0c5c1pFRnljaXdnYm1WM1FYSnlMQ0JqWVd4c1ltRmpheWtnZXlCeVpYUjFjbTRnWVhKeVlYbEVhV1ptTG1ScFptWW9iMnhrUVhKeUxDQnVaWGRCY25Jc0lHTmhiR3hpWVdOcktUc2dmVnh1SWwxOVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBEaWZmKCkge31cblxuRGlmZi5wcm90b3R5cGUgPSB7XG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBkaWZmOiBmdW5jdGlvbiBkaWZmKG9sZFN0cmluZywgbmV3U3RyaW5nKSB7XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIHZhclxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcblxuXG4gICAgb2xkU3RyaW5nID0gdGhpcy5jYXN0SW5wdXQob2xkU3RyaW5nKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChuZXdTdHJpbmcpO1xuICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG4gICAgdmFyIG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGVkaXRMZW5ndGggPSAxO1xuICAgIHZhciBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgIHZhciBiZXN0UGF0aCA9IFt7XG4gICAgICBuZXdQb3M6IC0xLFxuICAgICAgY29tcG9uZW50czogW11cbiAgICB9XTsgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcblxuICAgIHZhciBvbGRQb3MgPSB0aGlzLmV4dHJhY3RDb21tb24oYmVzdFBhdGhbMF0sIG5ld1N0cmluZywgb2xkU3RyaW5nLCAwKTtcblxuICAgIGlmIChiZXN0UGF0aFswXS5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICByZXR1cm4gZG9uZShbe1xuICAgICAgICB2YWx1ZTogdGhpcy5qb2luKG5ld1N0cmluZyksXG4gICAgICAgIGNvdW50OiBuZXdTdHJpbmcubGVuZ3RoXG4gICAgICB9XSk7XG4gICAgfSAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG5cblxuICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgZm9yICh2YXIgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcbiAgICAgICAgdmFyIGJhc2VQYXRoID1cbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICB2b2lkIDBcbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgO1xuXG4gICAgICAgIHZhciBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBfb2xkUG9zID0gKHJlbW92ZVBhdGggPyByZW1vdmVQYXRoLm5ld1BvcyA6IDApIC0gZGlhZ29uYWxQYXRoO1xuXG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBfb2xkUG9zICYmIF9vbGRQb3MgPCBvbGRMZW47XG5cbiAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgIC8vIElmIHRoaXMgcGF0aCBpcyBhIHRlcm1pbmFsIHRoZW4gcHJ1bmVcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIFNlbGVjdCB0aGUgZGlhZ29uYWwgdGhhdCB3ZSB3YW50IHRvIGJyYW5jaCBmcm9tLiBXZSBzZWxlY3QgdGhlIHByaW9yXG4gICAgICAgIC8vIHBhdGggd2hvc2UgcG9zaXRpb24gaW4gdGhlIG5ldyBzdHJpbmcgaXMgdGhlIGZhcnRoZXN0IGZyb20gdGhlIG9yaWdpblxuICAgICAgICAvLyBhbmQgZG9lcyBub3QgcGFzcyB0aGUgYm91bmRzIG9mIHRoZSBkaWZmIGdyYXBoXG5cblxuICAgICAgICBpZiAoIWNhbkFkZCB8fCBjYW5SZW1vdmUgJiYgYWRkUGF0aC5uZXdQb3MgPCByZW1vdmVQYXRoLm5ld1Bvcykge1xuICAgICAgICAgIGJhc2VQYXRoID0gY2xvbmVQYXRoKHJlbW92ZVBhdGgpO1xuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2VQYXRoID0gYWRkUGF0aDsgLy8gTm8gbmVlZCB0byBjbG9uZSwgd2UndmUgcHVsbGVkIGl0IGZyb20gdGhlIGxpc3RcblxuICAgICAgICAgIGJhc2VQYXRoLm5ld1BvcysrO1xuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB0cnVlLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX29sZFBvcyA9IHNlbGYuZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCk7IC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG5cbiAgICAgICAgaWYgKGJhc2VQYXRoLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIF9vbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH0gLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcbiAgICAvLyBzeW5jIGFuZCBhc3luYyBtb2RlIHdoaWNoIGlzIG5ldmVyIGZ1bi4gTG9vcHMgb3ZlciBleGVjRWRpdExlbmd0aCB1bnRpbCBhIHZhbHVlXG4gICAgLy8gaXMgcHJvZHVjZWQuXG5cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCB3ZSB3YW50IHRvIGJlIHNhZmUuXG5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0pKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgdmFyIHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIHB1c2hDb21wb25lbnQ6IGZ1bmN0aW9uIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICB2YXIgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcbiAgICAgIC8vIGFzIHNoYWxsb3cgYXJyYXkgY2xvbmVcbiAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgY291bnQ6IGxhc3QuY291bnQgKyAxLFxuICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgZXh0cmFjdENvbW1vbjogZnVuY3Rpb24gZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcbiAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgY291bnQ6IGNvbW1vbkNvdW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICByZW1vdmVFbXB0eTogZnVuY3Rpb24gcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlbaV0pIHtcbiAgICAgICAgcmV0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIGNhc3RJbnB1dDogZnVuY3Rpb24gY2FzdElucHV0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICB0b2tlbml6ZTogZnVuY3Rpb24gdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9LFxuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBqb2luOiBmdW5jdGlvbiBqb2luKGNoYXJzKSB7XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIHZhciBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIHZhciBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG5cbiAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIH1cblxuICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gQ29tbW9uIGNhc2VcblxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cblxuICAgICAgaWYgKGNvbXBvbmVudFBvcyAmJiBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdLmFkZGVkKSB7XG4gICAgICAgIHZhciB0bXAgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdO1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvc10gPSB0bXA7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQgKGkuZS4gd2hpdGVzcGFjZSkuXG4gIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cblxuXG4gIHZhciBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcblxuICBpZiAoY29tcG9uZW50TGVuID4gMSAmJiB0eXBlb2YgbGFzdENvbXBvbmVudC52YWx1ZSA9PT0gJ3N0cmluZycgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKSAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgY29tcG9uZW50cy5wb3AoKTtcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICByZXR1cm4ge1xuICAgIG5ld1BvczogcGF0aC5uZXdQb3MsXG4gICAgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwySmhjMlV1YW5NaVhTd2libUZ0WlhNaU9sc2lSR2xtWmlJc0luQnliM1J2ZEhsd1pTSXNJbVJwWm1ZaUxDSnZiR1JUZEhKcGJtY2lMQ0p1WlhkVGRISnBibWNpTENKdmNIUnBiMjV6SWl3aVkyRnNiR0poWTJzaUxDSnpaV3htSWl3aVpHOXVaU0lzSW5aaGJIVmxJaXdpYzJWMFZHbHRaVzkxZENJc0luVnVaR1ZtYVc1bFpDSXNJbU5oYzNSSmJuQjFkQ0lzSW5KbGJXOTJaVVZ0Y0hSNUlpd2lkRzlyWlc1cGVtVWlMQ0p1WlhkTVpXNGlMQ0pzWlc1bmRHZ2lMQ0p2YkdSTVpXNGlMQ0psWkdsMFRHVnVaM1JvSWl3aWJXRjRSV1JwZEV4bGJtZDBhQ0lzSW1KbGMzUlFZWFJvSWl3aWJtVjNVRzl6SWl3aVkyOXRjRzl1Wlc1MGN5SXNJbTlzWkZCdmN5SXNJbVY0ZEhKaFkzUkRiMjF0YjI0aUxDSnFiMmx1SWl3aVkyOTFiblFpTENKbGVHVmpSV1JwZEV4bGJtZDBhQ0lzSW1ScFlXZHZibUZzVUdGMGFDSXNJbUpoYzJWUVlYUm9JaXdpWVdSa1VHRjBhQ0lzSW5KbGJXOTJaVkJoZEdnaUxDSmpZVzVCWkdRaUxDSmpZVzVTWlcxdmRtVWlMQ0pqYkc5dVpWQmhkR2dpTENKd2RYTm9RMjl0Y0c5dVpXNTBJaXdpWW5WcGJHUldZV3gxWlhNaUxDSjFjMlZNYjI1blpYTjBWRzlyWlc0aUxDSmxlR1ZqSWl3aWNtVjBJaXdpWVdSa1pXUWlMQ0p5WlcxdmRtVmtJaXdpYkdGemRDSXNJbkIxYzJnaUxDSmpiMjF0YjI1RGIzVnVkQ0lzSW1WeGRXRnNjeUlzSW14bFpuUWlMQ0p5YVdkb2RDSXNJbU52YlhCaGNtRjBiM0lpTENKcFoyNXZjbVZEWVhObElpd2lkRzlNYjNkbGNrTmhjMlVpTENKaGNuSmhlU0lzSW1raUxDSnpjR3hwZENJc0ltTm9ZWEp6SWl3aVkyOXRjRzl1Wlc1MFVHOXpJaXdpWTI5dGNHOXVaVzUwVEdWdUlpd2lZMjl0Y0c5dVpXNTBJaXdpYzJ4cFkyVWlMQ0p0WVhBaUxDSnZiR1JXWVd4MVpTSXNJblJ0Y0NJc0lteGhjM1JEYjIxd2IyNWxiblFpTENKd2IzQWlMQ0p3WVhSb0lsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3UVVGQlpTeFRRVUZUUVN4SlFVRlVMRWRCUVdkQ0xFTkJRVVU3TzBGQlJXcERRU3hKUVVGSkxFTkJRVU5ETEZOQlFVd3NSMEZCYVVJN1FVRkJRVHM3UVVGQlFUdEJRVU5tUXl4RlFVRkJRU3hKUVVSbExHZENRVU5XUXl4VFFVUlZMRVZCUTBORExGTkJSRVFzUlVGRE1FSTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJaRU1zU1VGQlFVRXNUMEZCWXl4MVJVRkJTaXhGUVVGSk8wRkJRM1pETEZGQlFVbERMRkZCUVZFc1IwRkJSMFFzVDBGQlR5eERRVUZEUXl4UlFVRjJRanM3UVVGRFFTeFJRVUZKTEU5QlFVOUVMRTlCUVZBc1MwRkJiVUlzVlVGQmRrSXNSVUZCYlVNN1FVRkRha05ETEUxQlFVRkJMRkZCUVZFc1IwRkJSMFFzVDBGQldEdEJRVU5CUVN4TlFVRkJRU3hQUVVGUExFZEJRVWNzUlVGQlZqdEJRVU5FT3p0QlFVTkVMRk5CUVV0QkxFOUJRVXdzUjBGQlpVRXNUMEZCWmp0QlFVVkJMRkZCUVVsRkxFbEJRVWtzUjBGQlJ5eEpRVUZZT3p0QlFVVkJMR0ZCUVZORExFbEJRVlFzUTBGQlkwTXNTMEZCWkN4RlFVRnhRanRCUVVOdVFpeFZRVUZKU0N4UlFVRktMRVZCUVdNN1FVRkRXa2tzVVVGQlFVRXNWVUZCVlN4RFFVRkRMRmxCUVZjN1FVRkJSVW9zVlVGQlFVRXNVVUZCVVN4RFFVRkRTeXhUUVVGRUxFVkJRVmxHTEV0QlFWb3NRMEZCVWp0QlFVRTJRaXhUUVVFelF5eEZRVUUyUXl4RFFVRTNReXhEUVVGV08wRkJRMEVzWlVGQlR5eEpRVUZRTzBGQlEwUXNUMEZJUkN4TlFVZFBPMEZCUTB3c1pVRkJUMEVzUzBGQlVEdEJRVU5FTzBGQlEwWXNTMEZxUW5ORExFTkJiVUoyUXpzN08wRkJRMEZPTEVsQlFVRkJMRk5CUVZNc1IwRkJSeXhMUVVGTFV5eFRRVUZNTEVOQlFXVlVMRk5CUVdZc1EwRkJXanRCUVVOQlF5eEpRVUZCUVN4VFFVRlRMRWRCUVVjc1MwRkJTMUVzVTBGQlRDeERRVUZsVWl4VFFVRm1MRU5CUVZvN1FVRkZRVVFzU1VGQlFVRXNVMEZCVXl4SFFVRkhMRXRCUVV0VkxGZEJRVXdzUTBGQmFVSXNTMEZCUzBNc1VVRkJUQ3hEUVVGaldDeFRRVUZrTEVOQlFXcENMRU5CUVZvN1FVRkRRVU1zU1VGQlFVRXNVMEZCVXl4SFFVRkhMRXRCUVV0VExGZEJRVXdzUTBGQmFVSXNTMEZCUzBNc1VVRkJUQ3hEUVVGalZpeFRRVUZrTEVOQlFXcENMRU5CUVZvN1FVRkZRU3hSUVVGSlZ5eE5RVUZOTEVkQlFVZFlMRk5CUVZNc1EwRkJRMWtzVFVGQmRrSTdRVUZCUVN4UlFVRXJRa01zVFVGQlRTeEhRVUZIWkN4VFFVRlRMRU5CUVVOaExFMUJRV3hFTzBGQlEwRXNVVUZCU1VVc1ZVRkJWU3hIUVVGSExFTkJRV3BDTzBGQlEwRXNVVUZCU1VNc1lVRkJZU3hIUVVGSFNpeE5RVUZOTEVkQlFVZEZMRTFCUVRkQ08wRkJRMEVzVVVGQlNVY3NVVUZCVVN4SFFVRkhMRU5CUVVNN1FVRkJSVU1zVFVGQlFVRXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJXRHRCUVVGalF5eE5RVUZCUVN4VlFVRlZMRVZCUVVVN1FVRkJNVUlzUzBGQlJDeERRVUZtTEVOQk4wSjFReXhEUVN0Q2RrTTdPMEZCUTBFc1VVRkJTVU1zVFVGQlRTeEhRVUZITEV0QlFVdERMR0ZCUVV3c1EwRkJiVUpLTEZGQlFWRXNRMEZCUXl4RFFVRkVMRU5CUVROQ0xFVkJRV2REYUVJc1UwRkJhRU1zUlVGQk1rTkVMRk5CUVRORExFVkJRWE5FTEVOQlFYUkVMRU5CUVdJN08wRkJRMEVzVVVGQlNXbENMRkZCUVZFc1EwRkJReXhEUVVGRUxFTkJRVklzUTBGQldVTXNUVUZCV2l4SFFVRnhRaXhEUVVGeVFpeEpRVUV3UWs0c1RVRkJNVUlzU1VGQmIwTlJMRTFCUVUwc1IwRkJSeXhEUVVGVUxFbEJRV05PTEUxQlFYUkVMRVZCUVRoRU8wRkJRelZFTzBGQlEwRXNZVUZCVDFRc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGQlEwTXNVVUZCUVVFc1MwRkJTeXhGUVVGRkxFdEJRVXRuUWl4SlFVRk1MRU5CUVZWeVFpeFRRVUZXTEVOQlFWSTdRVUZCT0VKelFpeFJRVUZCUVN4TFFVRkxMRVZCUVVWMFFpeFRRVUZUTEVOQlFVTlpPMEZCUVM5RExFOUJRVVFzUTBGQlJDeERRVUZZTzBGQlEwUXNTMEZ3UTNORExFTkJjME4yUXpzN08wRkJRMEVzWVVGQlUxY3NZMEZCVkN4SFFVRXdRanRCUVVONFFpeFhRVUZMTEVsQlFVbERMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVVFzUjBGQlMxWXNWVUZCTjBJc1JVRkJlVU5WTEZsQlFWa3NTVUZCU1ZZc1ZVRkJla1FzUlVGQmNVVlZMRmxCUVZrc1NVRkJTU3hEUVVGeVJpeEZRVUYzUmp0QlFVTjBSaXhaUVVGSlF5eFJRVUZSTzBGQlFVRTdRVUZCUVR0QlFVRmFPMEZCUVVFN08wRkJRMEVzV1VGQlNVTXNUMEZCVHl4SFFVRkhWaXhSUVVGUkxFTkJRVU5STEZsQlFWa3NSMEZCUnl4RFFVRm9RaXhEUVVGMFFqdEJRVUZCTEZsQlEwbEhMRlZCUVZVc1IwRkJSMWdzVVVGQlVTeERRVUZEVVN4WlFVRlpMRWRCUVVjc1EwRkJhRUlzUTBGRWVrSTdRVUZCUVN4WlFVVkpUQ3hQUVVGTkxFZEJRVWNzUTBGQlExRXNWVUZCVlN4SFFVRkhRU3hWUVVGVkxFTkJRVU5XTEUxQlFXUXNSMEZCZFVJc1EwRkJiRU1zU1VGQmRVTlBMRmxCUm5CRU96dEJRVWRCTEZsQlFVbEZMRTlCUVVvc1JVRkJZVHRCUVVOWU8wRkJRMEZXTEZWQlFVRkJMRkZCUVZFc1EwRkJRMUVzV1VGQldTeEhRVUZITEVOQlFXaENMRU5CUVZJc1IwRkJOa0pxUWl4VFFVRTNRanRCUVVORU96dEJRVVZFTEZsQlFVbHhRaXhOUVVGTkxFZEJRVWRHTEU5QlFVOHNTVUZCU1VFc1QwRkJUeXhEUVVGRFZDeE5RVUZTTEVkQlFXbENMRU5CUVdwQ0xFZEJRWEZDVGl4TlFVRTNRenRCUVVGQkxGbEJRMGxyUWl4VFFVRlRMRWRCUVVkR0xGVkJRVlVzU1VGQlNTeExRVUZMVWl4UFFVRnVRaXhKUVVFMlFrRXNUMEZCVFN4SFFVRkhUaXhOUVVSMFJEczdRVUZGUVN4WlFVRkpMRU5CUVVObExFMUJRVVFzU1VGQlZ5eERRVUZEUXl4VFFVRm9RaXhGUVVFeVFqdEJRVU42UWp0QlFVTkJZaXhWUVVGQlFTeFJRVUZSTEVOQlFVTlJMRmxCUVVRc1EwRkJVaXhIUVVGNVFtcENMRk5CUVhwQ08wRkJRMEU3UVVGRFJDeFRRV2hDY1VZc1EwRnJRblJHTzBGQlEwRTdRVUZEUVRzN08wRkJRMEVzV1VGQlNTeERRVUZEY1VJc1RVRkJSQ3hKUVVGWlF5eFRRVUZUTEVsQlFVbElMRTlCUVU4c1EwRkJRMVFzVFVGQlVpeEhRVUZwUWxVc1ZVRkJWU3hEUVVGRFZpeE5RVUY2UkN4RlFVRnJSVHRCUVVOb1JWRXNWVUZCUVVFc1VVRkJVU3hIUVVGSFN5eFRRVUZUTEVOQlFVTklMRlZCUVVRc1EwRkJjRUk3UVVGRFFYaENMRlZCUVVGQkxFbEJRVWtzUTBGQlF6UkNMR0ZCUVV3c1EwRkJiVUpPTEZGQlFWRXNRMEZCUTFBc1ZVRkJOVUlzUlVGQmQwTllMRk5CUVhoRExFVkJRVzFFTEVsQlFXNUVPMEZCUTBRc1UwRklSQ3hOUVVkUE8wRkJRMHhyUWl4VlFVRkJRU3hSUVVGUkxFZEJRVWRETEU5QlFWZ3NRMEZFU3l4RFFVTmxPenRCUVVOd1FrUXNWVUZCUVVFc1VVRkJVU3hEUVVGRFVpeE5RVUZVTzBGQlEwRmtMRlZCUVVGQkxFbEJRVWtzUTBGQlF6UkNMR0ZCUVV3c1EwRkJiVUpPTEZGQlFWRXNRMEZCUTFBc1ZVRkJOVUlzUlVGQmQwTXNTVUZCZUVNc1JVRkJPRU5ZTEZOQlFUbERPMEZCUTBRN08wRkJSVVJaTEZGQlFVRkJMRTlCUVUwc1IwRkJSMmhDTEVsQlFVa3NRMEZCUTJsQ0xHRkJRVXdzUTBGQmJVSkxMRkZCUVc1Q0xFVkJRVFpDZWtJc1UwRkJOMElzUlVGQmQwTkVMRk5CUVhoRExFVkJRVzFFZVVJc1dVRkJia1FzUTBGQlZDeERRVGxDYzBZc1EwRm5RM1JHT3p0QlFVTkJMRmxCUVVsRExGRkJRVkVzUTBGQlExSXNUVUZCVkN4SFFVRnJRaXhEUVVGc1FpeEpRVUYxUWs0c1RVRkJka0lzU1VGQmFVTlJMRTlCUVUwc1IwRkJSeXhEUVVGVUxFbEJRV05PTEUxQlFXNUVMRVZCUVRKRU8wRkJRM3BFTEdsQ1FVRlBWQ3hKUVVGSkxFTkJRVU0wUWl4WFFVRlhMRU5CUVVNM1FpeEpRVUZFTEVWQlFVOXpRaXhSUVVGUkxFTkJRVU5RTEZWQlFXaENMRVZCUVRSQ2JFSXNVMEZCTlVJc1JVRkJkVU5FTEZOQlFYWkRMRVZCUVd0RVNTeEpRVUZKTEVOQlFVTTRRaXhsUVVGMlJDeERRVUZhTEVOQlFWZzdRVUZEUkN4VFFVWkVMRTFCUlU4N1FVRkRURHRCUVVOQmFrSXNWVUZCUVVFc1VVRkJVU3hEUVVGRFVTeFpRVUZFTEVOQlFWSXNSMEZCZVVKRExGRkJRWHBDTzBGQlEwUTdRVUZEUmpzN1FVRkZSRmdzVFVGQlFVRXNWVUZCVlR0QlFVTllMRXRCYkVaelF5eERRVzlHZGtNN1FVRkRRVHRCUVVOQk96czdRVUZEUVN4UlFVRkpXaXhSUVVGS0xFVkJRV003UVVGRFdDeG5Ra0ZCVTJkRExFbEJRVlFzUjBGQlowSTdRVUZEWmpWQ0xGRkJRVUZCTEZWQlFWVXNRMEZCUXl4WlFVRlhPMEZCUTNCQ096dEJRVU5CTzBGQlEwRXNZMEZCU1ZFc1ZVRkJWU3hIUVVGSFF5eGhRVUZxUWl4RlFVRm5RenRCUVVNNVFpeHRRa0ZCVDJJc1VVRkJVU3hGUVVGbU8wRkJRMFE3TzBGQlJVUXNZMEZCU1N4RFFVRkRjVUlzWTBGQll5eEZRVUZ1UWl4RlFVRjFRanRCUVVOeVFsY3NXVUZCUVVFc1NVRkJTVHRCUVVOTU8wRkJRMFlzVTBGV1V5eEZRVlZRTEVOQlZrOHNRMEZCVmp0QlFWZEVMRTlCV2tFc1IwRkJSRHRCUVdGRUxFdEJaRVFzVFVGalR6dEJRVU5NTEdGQlFVOXdRaXhWUVVGVkxFbEJRVWxETEdGQlFYSkNMRVZCUVc5RE8wRkJRMnhETEZsQlFVbHZRaXhIUVVGSExFZEJRVWRhTEdOQlFXTXNSVUZCZUVJN08wRkJRMEVzV1VGQlNWa3NSMEZCU2l4RlFVRlRPMEZCUTFBc2FVSkJRVTlCTEVkQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZN1FVRkRSaXhIUVRsSFl6czdRVUZCUVRzN1FVRkJRVHRCUVdkSVprb3NSVUZCUVVFc1lVRm9TR1VzZVVKQlowaEVZaXhWUVdoSVF5eEZRV2RJVjJ0Q0xFdEJhRWhZTEVWQlowaHJRa01zVDBGb1NHeENMRVZCWjBneVFqdEJRVU40UXl4UlFVRkpReXhKUVVGSkxFZEJRVWR3UWl4VlFVRlZMRU5CUVVOQkxGVkJRVlVzUTBGQlEwNHNUVUZCV0N4SFFVRnZRaXhEUVVGeVFpeERRVUZ5UWpzN1FVRkRRU3hSUVVGSk1FSXNTVUZCU1N4SlFVRkpRU3hKUVVGSkxFTkJRVU5HTEV0QlFVd3NTMEZCWlVFc1MwRkJka0lzU1VGQlowTkZMRWxCUVVrc1EwRkJRMFFzVDBGQlRDeExRVUZwUWtFc1QwRkJja1FzUlVGQk9FUTdRVUZETlVRN1FVRkRRVHRCUVVOQmJrSXNUVUZCUVVFc1ZVRkJWU3hEUVVGRFFTeFZRVUZWTEVOQlFVTk9MRTFCUVZnc1IwRkJiMElzUTBGQmNrSXNRMEZCVml4SFFVRnZRenRCUVVGRFZTeFJRVUZCUVN4TFFVRkxMRVZCUVVWblFpeEpRVUZKTEVOQlFVTm9RaXhMUVVGTUxFZEJRV0VzUTBGQmNrSTdRVUZCZDBKakxGRkJRVUZCTEV0QlFVc3NSVUZCUlVFc1MwRkJMMEk3UVVGQmMwTkRMRkZCUVVGQkxFOUJRVThzUlVGQlJVRTdRVUZCTDBNc1QwRkJjRU03UVVGRFJDeExRVXBFTEUxQlNVODdRVUZEVEc1Q0xFMUJRVUZCTEZWQlFWVXNRMEZCUTNGQ0xFbEJRVmdzUTBGQlowSTdRVUZCUTJwQ0xGRkJRVUZCTEV0QlFVc3NSVUZCUlN4RFFVRlNPMEZCUVZkakxGRkJRVUZCTEV0QlFVc3NSVUZCUlVFc1MwRkJiRUk3UVVGQmVVSkRMRkZCUVVGQkxFOUJRVThzUlVGQlJVRTdRVUZCYkVNc1QwRkJhRUk3UVVGRFJEdEJRVU5HTEVkQmVraGpPenRCUVVGQk96dEJRVUZCTzBGQk1FaG1ha0lzUlVGQlFVRXNZVUV4U0dVc2VVSkJNRWhFU3l4UlFURklReXhGUVRCSVUzcENMRk5CTVVoVUxFVkJNRWh2UWtRc1UwRXhTSEJDTEVWQk1FZ3JRbmxDTEZsQk1VZ3ZRaXhGUVRCSU5rTTdRVUZETVVRc1VVRkJTV0lzVFVGQlRTeEhRVUZIV0N4VFFVRlRMRU5CUVVOWkxFMUJRWFpDTzBGQlFVRXNVVUZEU1VNc1RVRkJUU3hIUVVGSFpDeFRRVUZUTEVOQlFVTmhMRTFCUkhaQ08wRkJRVUVzVVVGRlNVc3NUVUZCVFN4SFFVRkhVU3hSUVVGUkxFTkJRVU5TTEUxQlJuUkNPMEZCUVVFc1VVRkhTVVVzVFVGQlRTeEhRVUZIUml4TlFVRk5MRWRCUVVkUExGbEJTSFJDTzBGQlFVRXNVVUZMU1dkQ0xGZEJRVmNzUjBGQlJ5eERRVXhzUWpzN1FVRk5RU3hYUVVGUGRrSXNUVUZCVFN4SFFVRkhMRU5CUVZRc1IwRkJZVTRzVFVGQllpeEpRVUYxUWxFc1RVRkJUU3hIUVVGSExFTkJRVlFzUjBGQllVNHNUVUZCY0VNc1NVRkJPRU1zUzBGQlN6UkNMRTFCUVV3c1EwRkJXWHBETEZOQlFWTXNRMEZCUTJsQ0xFMUJRVTBzUjBGQlJ5eERRVUZXTEVOQlFYSkNMRVZCUVcxRGJFSXNVMEZCVXl4RFFVRkRiMElzVFVGQlRTeEhRVUZITEVOQlFWWXNRMEZCTlVNc1EwRkJja1FzUlVGQlowZzdRVUZET1VkR0xFMUJRVUZCTEUxQlFVMDdRVUZEVGtVc1RVRkJRVUVzVFVGQlRUdEJRVU5PY1VJc1RVRkJRVUVzVjBGQlZ6dEJRVU5hT3p0QlFVVkVMRkZCUVVsQkxGZEJRVW9zUlVGQmFVSTdRVUZEWm1Zc1RVRkJRVUVzVVVGQlVTeERRVUZEVUN4VlFVRlVMRU5CUVc5Q2NVSXNTVUZCY0VJc1EwRkJlVUk3UVVGQlEycENMRkZCUVVGQkxFdEJRVXNzUlVGQlJXdENPMEZCUVZJc1QwRkJla0k3UVVGRFJEczdRVUZGUkdZc1NVRkJRVUVzVVVGQlVTeERRVUZEVWl4TlFVRlVMRWRCUVd0Q1FTeE5RVUZzUWp0QlFVTkJMRmRCUVU5RkxFMUJRVkE3UVVGRFJDeEhRVGRKWXpzN1FVRkJRVHM3UVVGQlFUdEJRU3RKWm5OQ0xFVkJRVUZCTEUxQkwwbGxMR3RDUVN0SlVrTXNTVUV2U1ZFc1JVRXJTVVpETEV0QkwwbEZMRVZCSzBsTE8wRkJRMnhDTEZGQlFVa3NTMEZCU3pGRExFOUJRVXdzUTBGQllUSkRMRlZCUVdwQ0xFVkJRVFpDTzBGQlF6TkNMR0ZCUVU4c1MwRkJTek5ETEU5QlFVd3NRMEZCWVRKRExGVkJRV0lzUTBGQmQwSkdMRWxCUVhoQ0xFVkJRVGhDUXl4TFFVRTVRaXhEUVVGUU8wRkJRMFFzUzBGR1JDeE5RVVZQTzBGQlEwd3NZVUZCVDBRc1NVRkJTU3hMUVVGTFF5eExRVUZVTEVsQlEwUXNTMEZCU3pGRExFOUJRVXdzUTBGQllUUkRMRlZCUVdJc1NVRkJNa0pJTEVsQlFVa3NRMEZCUTBrc1YwRkJUQ3hQUVVGMVFrZ3NTMEZCU3l4RFFVRkRSeXhYUVVGT0xFVkJSSGhFTzBGQlJVUTdRVUZEUml4SFFYUktZenM3UVVGQlFUczdRVUZCUVR0QlFYVktabkpETEVWQlFVRkJMRmRCZGtwbExIVkNRWFZLU0hORExFdEJka3BITEVWQmRVcEpPMEZCUTJwQ0xGRkJRVWxhTEVkQlFVY3NSMEZCUnl4RlFVRldPenRCUVVOQkxGTkJRVXNzU1VGQlNXRXNRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUjBRc1MwRkJTeXhEUVVGRGJrTXNUVUZCTVVJc1JVRkJhME52UXl4RFFVRkRMRVZCUVc1RExFVkJRWFZETzBGQlEzSkRMRlZCUVVsRUxFdEJRVXNzUTBGQlEwTXNRMEZCUkN4RFFVRlVMRVZCUVdNN1FVRkRXbUlzVVVGQlFVRXNSMEZCUnl4RFFVRkRTU3hKUVVGS0xFTkJRVk5STEV0QlFVc3NRMEZCUTBNc1EwRkJSQ3hEUVVGa08wRkJRMFE3UVVGRFJqczdRVUZEUkN4WFFVRlBZaXhIUVVGUU8wRkJRMFFzUjBFdlNtTTdPMEZCUVVFN08wRkJRVUU3UVVGblMyWXpRaXhGUVVGQlFTeFRRV2hMWlN4eFFrRm5TMHhJTEV0QmFFdExMRVZCWjB0Rk8wRkJRMllzVjBGQlQwRXNTMEZCVUR0QlFVTkVMRWRCYkV0ak96dEJRVUZCT3p0QlFVRkJPMEZCYlV0bVN5eEZRVUZCUVN4UlFXNUxaU3h2UWtGdFMwNU1MRXRCYmt0TkxFVkJiVXRETzBGQlEyUXNWMEZCVDBFc1MwRkJTeXhEUVVGRE5FTXNTMEZCVGl4RFFVRlpMRVZCUVZvc1EwRkJVRHRCUVVORUxFZEJja3RqT3p0QlFVRkJPenRCUVVGQk8wRkJjMHRtTlVJc1JVRkJRVUVzU1VGMFMyVXNaMEpCYzB0V05rSXNTMEYwUzFVc1JVRnpTMGc3UVVGRFZpeFhRVUZQUVN4TFFVRkxMRU5CUVVNM1FpeEpRVUZPTEVOQlFWY3NSVUZCV0N4RFFVRlFPMEZCUTBRN1FVRjRTMk1zUTBGQmFrSTdPMEZCTWt0QkxGTkJRVk5YTEZkQlFWUXNRMEZCY1VKc1F5eEpRVUZ5UWl4RlFVRXlRbTlDTEZWQlFUTkNMRVZCUVhWRGJFSXNVMEZCZGtNc1JVRkJhMFJFTEZOQlFXeEVMRVZCUVRaRWEwTXNaVUZCTjBRc1JVRkJPRVU3UVVGRE5VVXNUVUZCU1d0Q0xGbEJRVmtzUjBGQlJ5eERRVUZ1UWp0QlFVRkJMRTFCUTBsRExGbEJRVmtzUjBGQlIyeERMRlZCUVZVc1EwRkJRMDRzVFVGRU9VSTdRVUZCUVN4TlFVVkpTeXhOUVVGTkxFZEJRVWNzUTBGR1lqdEJRVUZCTEUxQlIwbEZMRTFCUVUwc1IwRkJSeXhEUVVoaU96dEJRVXRCTEZOQlFVOW5ReXhaUVVGWkxFZEJRVWRETEZsQlFYUkNMRVZCUVc5RFJDeFpRVUZaTEVWQlFXaEVMRVZCUVc5RU8wRkJRMnhFTEZGQlFVbEZMRk5CUVZNc1IwRkJSMjVETEZWQlFWVXNRMEZCUTJsRExGbEJRVVFzUTBGQk1VSTdPMEZCUTBFc1VVRkJTU3hEUVVGRFJTeFRRVUZUTEVOQlFVTm9RaXhQUVVGbUxFVkJRWGRDTzBGQlEzUkNMRlZCUVVrc1EwRkJRMmRDTEZOQlFWTXNRMEZCUTJwQ0xFdEJRVmdzU1VGQmIwSklMR1ZCUVhoQ0xFVkJRWGxETzBGQlEzWkRMRmxCUVVrMVFpeExRVUZMTEVkQlFVZE1MRk5CUVZNc1EwRkJRM05FTEV0QlFWWXNRMEZCWjBKeVF5eE5RVUZvUWl4RlFVRjNRa0VzVFVGQlRTeEhRVUZIYjBNc1UwRkJVeXhEUVVGREwwSXNTMEZCTTBNc1EwRkJXanRCUVVOQmFrSXNVVUZCUVVFc1MwRkJTeXhIUVVGSFFTeExRVUZMTEVOQlFVTnJSQ3hIUVVGT0xFTkJRVlVzVlVGQlUyeEVMRXRCUVZRc1JVRkJaMEl5UXl4RFFVRm9RaXhGUVVGdFFqdEJRVU51UXl4alFVRkpVU3hSUVVGUkxFZEJRVWQ2UkN4VFFVRlRMRU5CUVVOdlFpeE5RVUZOTEVkQlFVYzJRaXhEUVVGV0xFTkJRWGhDTzBGQlEwRXNhVUpCUVU5UkxGRkJRVkVzUTBGQlF6VkRMRTFCUVZRc1IwRkJhMEpRTEV0QlFVc3NRMEZCUTA4c1RVRkJlRUlzUjBGQmFVTTBReXhSUVVGcVF5eEhRVUUwUTI1RUxFdEJRVzVFTzBGQlEwUXNVMEZJVHl4RFFVRlNPMEZCUzBGblJDeFJRVUZCUVN4VFFVRlRMRU5CUVVOb1JDeExRVUZXTEVkQlFXdENVQ3hKUVVGSkxFTkJRVU4xUWl4SlFVRk1MRU5CUVZWb1FpeExRVUZXTEVOQlFXeENPMEZCUTBRc1QwRlNSQ3hOUVZGUE8wRkJRMHhuUkN4UlFVRkJRU3hUUVVGVExFTkJRVU5vUkN4TFFVRldMRWRCUVd0Q1VDeEpRVUZKTEVOQlFVTjFRaXhKUVVGTUxFTkJRVlZ5UWl4VFFVRlRMRU5CUVVOelJDeExRVUZXTEVOQlFXZENja01zVFVGQmFFSXNSVUZCZDBKQkxFMUJRVTBzUjBGQlIyOURMRk5CUVZNc1EwRkJReTlDTEV0QlFUTkRMRU5CUVZZc1EwRkJiRUk3UVVGRFJEczdRVUZEUkV3c1RVRkJRVUVzVFVGQlRTeEpRVUZKYjBNc1UwRkJVeXhEUVVGREwwSXNTMEZCY0VJc1EwRmFjMElzUTBGamRFSTdPMEZCUTBFc1ZVRkJTU3hEUVVGREswSXNVMEZCVXl4RFFVRkRha0lzUzBGQlppeEZRVUZ6UWp0QlFVTndRbXBDTEZGQlFVRkJMRTFCUVUwc1NVRkJTV3RETEZOQlFWTXNRMEZCUXk5Q0xFdEJRWEJDTzBGQlEwUTdRVUZEUml4TFFXeENSQ3hOUVd0Q1R6dEJRVU5NSzBJc1RVRkJRVUVzVTBGQlV5eERRVUZEYUVRc1MwRkJWaXhIUVVGclFsQXNTVUZCU1N4RFFVRkRkVUlzU1VGQlRDeERRVUZWZEVJc1UwRkJVeXhEUVVGRGRVUXNTMEZCVml4RFFVRm5RbTVETEUxQlFXaENMRVZCUVhkQ1FTeE5RVUZOTEVkQlFVZHJReXhUUVVGVExFTkJRVU12UWl4TFFVRXpReXhEUVVGV0xFTkJRV3hDTzBGQlEwRklMRTFCUVVGQkxFMUJRVTBzU1VGQlNXdERMRk5CUVZNc1EwRkJReTlDTEV0QlFYQkNMRU5CUmtzc1EwRkpURHRCUVVOQk8wRkJRMEU3TzBGQlEwRXNWVUZCU1RaQ0xGbEJRVmtzU1VGQlNXcERMRlZCUVZVc1EwRkJRMmxETEZsQlFWa3NSMEZCUnl4RFFVRm9RaXhEUVVGV0xFTkJRVFpDWml4TFFVRnFSQ3hGUVVGM1JEdEJRVU4wUkN4WlFVRkpjVUlzUjBGQlJ5eEhRVUZIZGtNc1ZVRkJWU3hEUVVGRGFVTXNXVUZCV1N4SFFVRkhMRU5CUVdoQ0xFTkJRWEJDTzBGQlEwRnFReXhSUVVGQlFTeFZRVUZWTEVOQlFVTnBReXhaUVVGWkxFZEJRVWNzUTBGQmFFSXNRMEZCVml4SFFVRXJRbXBETEZWQlFWVXNRMEZCUTJsRExGbEJRVVFzUTBGQmVrTTdRVUZEUVdwRExGRkJRVUZCTEZWQlFWVXNRMEZCUTJsRExGbEJRVVFzUTBGQlZpeEhRVUV5UWswc1IwRkJNMEk3UVVGRFJEdEJRVU5HTzBGQlEwWXNSMEYyUXpKRkxFTkJlVU0xUlR0QlFVTkJPMEZCUTBFN096dEJRVU5CTEUxQlFVbERMR0ZCUVdFc1IwRkJSM2hETEZWQlFWVXNRMEZCUTJ0RExGbEJRVmtzUjBGQlJ5eERRVUZvUWl4RFFVRTVRanM3UVVGRFFTeE5RVUZKUVN4WlFVRlpMRWRCUVVjc1EwRkJaaXhKUVVOSExFOUJRVTlOTEdGQlFXRXNRMEZCUTNKRUxFdEJRWEpDTEV0QlFTdENMRkZCUkd4RExFdEJSVWx4UkN4aFFVRmhMRU5CUVVOMFFpeExRVUZrTEVsQlFYVkNjMElzWVVGQllTeERRVUZEY2tJc1QwRkdla01zUzBGSFIzWkRMRWxCUVVrc1EwRkJRekpETEUxQlFVd3NRMEZCV1N4RlFVRmFMRVZCUVdkQ2FVSXNZVUZCWVN4RFFVRkRja1FzUzBGQk9VSXNRMEZJVUN4RlFVYzJRenRCUVVNelEyRXNTVUZCUVVFc1ZVRkJWU3hEUVVGRGEwTXNXVUZCV1N4SFFVRkhMRU5CUVdoQ0xFTkJRVllzUTBGQk5rSXZReXhMUVVFM1FpeEpRVUZ6UTNGRUxHRkJRV0VzUTBGQlEzSkVMRXRCUVhCRU8wRkJRMEZoTEVsQlFVRkJMRlZCUVZVc1EwRkJRM2xETEVkQlFWZzdRVUZEUkRzN1FVRkZSQ3hUUVVGUGVrTXNWVUZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5aTEZOQlFWUXNRMEZCYlVJNFFpeEpRVUZ1UWl4RlFVRjVRanRCUVVOMlFpeFRRVUZQTzBGQlFVVXpReXhKUVVGQlFTeE5RVUZOTEVWQlFVVXlReXhKUVVGSkxFTkJRVU16UXl4TlFVRm1PMEZCUVhWQ1F5eEpRVUZCUVN4VlFVRlZMRVZCUVVVd1F5eEpRVUZKTEVOQlFVTXhReXhWUVVGTUxFTkJRV2RDYjBNc1MwRkJhRUlzUTBGQmMwSXNRMEZCZEVJN1FVRkJia01zUjBGQlVEdEJRVU5FSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnUkdsbVppZ3BJSHQ5WEc1Y2JrUnBabVl1Y0hKdmRHOTBlWEJsSUQwZ2UxeHVJQ0JrYVdabUtHOXNaRk4wY21sdVp5d2dibVYzVTNSeWFXNW5MQ0J2Y0hScGIyNXpJRDBnZTMwcElIdGNiaUFnSUNCc1pYUWdZMkZzYkdKaFkyc2dQU0J2Y0hScGIyNXpMbU5oYkd4aVlXTnJPMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ1kyRnNiR0poWTJzZ1BTQnZjSFJwYjI1ek8xeHVJQ0FnSUNBZ2IzQjBhVzl1Y3lBOUlIdDlPMXh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpPMXh1WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1pHOXVaU2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdhV1lnS0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9ablZ1WTNScGIyNG9LU0I3SUdOaGJHeGlZV05yS0hWdVpHVm1hVzVsWkN3Z2RtRnNkV1VwT3lCOUxDQXdLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRV3hzYjNjZ2MzVmlZMnhoYzNObGN5QjBieUJ0WVhOellXZGxJSFJvWlNCcGJuQjFkQ0J3Y21sdmNpQjBieUJ5ZFc1dWFXNW5YRzRnSUNBZ2IyeGtVM1J5YVc1bklEMGdkR2hwY3k1allYTjBTVzV3ZFhRb2IyeGtVM1J5YVc1bktUdGNiaUFnSUNCdVpYZFRkSEpwYm1jZ1BTQjBhR2x6TG1OaGMzUkpibkIxZENodVpYZFRkSEpwYm1jcE8xeHVYRzRnSUNBZ2IyeGtVM1J5YVc1bklEMGdkR2hwY3k1eVpXMXZkbVZGYlhCMGVTaDBhR2x6TG5SdmEyVnVhWHBsS0c5c1pGTjBjbWx1WnlrcE8xeHVJQ0FnSUc1bGQxTjBjbWx1WnlBOUlIUm9hWE11Y21WdGIzWmxSVzF3ZEhrb2RHaHBjeTUwYjJ0bGJtbDZaU2h1WlhkVGRISnBibWNwS1R0Y2JseHVJQ0FnSUd4bGRDQnVaWGRNWlc0Z1BTQnVaWGRUZEhKcGJtY3ViR1Z1WjNSb0xDQnZiR1JNWlc0Z1BTQnZiR1JUZEhKcGJtY3ViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmxaR2wwVEdWdVozUm9JRDBnTVR0Y2JpQWdJQ0JzWlhRZ2JXRjRSV1JwZEV4bGJtZDBhQ0E5SUc1bGQweGxiaUFySUc5c1pFeGxianRjYmlBZ0lDQnNaWFFnWW1WemRGQmhkR2dnUFNCYmV5QnVaWGRRYjNNNklDMHhMQ0JqYjIxd2IyNWxiblJ6T2lCYlhTQjlYVHRjYmx4dUlDQWdJQzh2SUZObFpXUWdaV1JwZEV4bGJtZDBhQ0E5SURBc0lHa3VaUzRnZEdobElHTnZiblJsYm5RZ2MzUmhjblJ6SUhkcGRHZ2dkR2hsSUhOaGJXVWdkbUZzZFdWelhHNGdJQ0FnYkdWMElHOXNaRkJ2Y3lBOUlIUm9hWE11WlhoMGNtRmpkRU52YlcxdmJpaGlaWE4wVUdGMGFGc3dYU3dnYm1WM1UzUnlhVzVuTENCdmJHUlRkSEpwYm1jc0lEQXBPMXh1SUNBZ0lHbG1JQ2hpWlhOMFVHRjBhRnN3WFM1dVpYZFFiM01nS3lBeElENDlJRzVsZDB4bGJpQW1KaUJ2YkdSUWIzTWdLeUF4SUQ0OUlHOXNaRXhsYmlrZ2UxeHVJQ0FnSUNBZ0x5OGdTV1JsYm5ScGRIa2djR1Z5SUhSb1pTQmxjWFZoYkdsMGVTQmhibVFnZEc5clpXNXBlbVZ5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaRzl1WlNoYmUzWmhiSFZsT2lCMGFHbHpMbXB2YVc0b2JtVjNVM1J5YVc1bktTd2dZMjkxYm5RNklHNWxkMU4wY21sdVp5NXNaVzVuZEdoOVhTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdUV0ZwYmlCM2IzSnJaWElnYldWMGFHOWtMaUJqYUdWamEzTWdZV3hzSUhCbGNtMTFkR0YwYVc5dWN5QnZaaUJoSUdkcGRtVnVJR1ZrYVhRZ2JHVnVaM1JvSUdadmNpQmhZMk5sY0hSaGJtTmxMbHh1SUNBZ0lHWjFibU4wYVc5dUlHVjRaV05GWkdsMFRHVnVaM1JvS0NrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ1pHbGhaMjl1WVd4UVlYUm9JRDBnTFRFZ0tpQmxaR2wwVEdWdVozUm9PeUJrYVdGbmIyNWhiRkJoZEdnZ1BEMGdaV1JwZEV4bGJtZDBhRHNnWkdsaFoyOXVZV3hRWVhSb0lDczlJRElwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR0poYzJWUVlYUm9PMXh1SUNBZ0lDQWdJQ0JzWlhRZ1lXUmtVR0YwYUNBOUlHSmxjM1JRWVhSb1cyUnBZV2R2Ym1Gc1VHRjBhQ0F0SURGZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WdGIzWmxVR0YwYUNBOUlHSmxjM1JRWVhSb1cyUnBZV2R2Ym1Gc1VHRjBhQ0FySURGZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJ4a1VHOXpJRDBnS0hKbGJXOTJaVkJoZEdnZ1B5QnlaVzF2ZG1WUVlYUm9MbTVsZDFCdmN5QTZJREFwSUMwZ1pHbGhaMjl1WVd4UVlYUm9PMXh1SUNBZ0lDQWdJQ0JwWmlBb1lXUmtVR0YwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUU1dklHOXVaU0JsYkhObElHbHpJR2R2YVc1bklIUnZJR0YwZEdWdGNIUWdkRzhnZFhObElIUm9hWE1nZG1Gc2RXVXNJR05zWldGeUlHbDBYRzRnSUNBZ0lDQWdJQ0FnWW1WemRGQmhkR2hiWkdsaFoyOXVZV3hRWVhSb0lDMGdNVjBnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1kyRnVRV1JrSUQwZ1lXUmtVR0YwYUNBbUppQmhaR1JRWVhSb0xtNWxkMUJ2Y3lBcklERWdQQ0J1WlhkTVpXNHNYRzRnSUNBZ0lDQWdJQ0FnSUNCallXNVNaVzF2ZG1VZ1BTQnlaVzF2ZG1WUVlYUm9JQ1ltSURBZ1BEMGdiMnhrVUc5eklDWW1JRzlzWkZCdmN5QThJRzlzWkV4bGJqdGNiaUFnSUNBZ0lDQWdhV1lnS0NGallXNUJaR1FnSmlZZ0lXTmhibEpsYlc5MlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2NHRjBhQ0JwY3lCaElIUmxjbTFwYm1Gc0lIUm9aVzRnY0hKMWJtVmNiaUFnSUNBZ0lDQWdJQ0JpWlhOMFVHRjBhRnRrYVdGbmIyNWhiRkJoZEdoZElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVTJWc1pXTjBJSFJvWlNCa2FXRm5iMjVoYkNCMGFHRjBJSGRsSUhkaGJuUWdkRzhnWW5KaGJtTm9JR1p5YjIwdUlGZGxJSE5sYkdWamRDQjBhR1VnY0hKcGIzSmNiaUFnSUNBZ0lDQWdMeThnY0dGMGFDQjNhRzl6WlNCd2IzTnBkR2x2YmlCcGJpQjBhR1VnYm1WM0lITjBjbWx1WnlCcGN5QjBhR1VnWm1GeWRHaGxjM1FnWm5KdmJTQjBhR1VnYjNKcFoybHVYRzRnSUNBZ0lDQWdJQzh2SUdGdVpDQmtiMlZ6SUc1dmRDQndZWE56SUhSb1pTQmliM1Z1WkhNZ2IyWWdkR2hsSUdScFptWWdaM0poY0doY2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZqWVc1QlpHUWdmSHdnS0dOaGJsSmxiVzkyWlNBbUppQmhaR1JRWVhSb0xtNWxkMUJ2Y3lBOElISmxiVzkyWlZCaGRHZ3VibVYzVUc5ektTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdKaGMyVlFZWFJvSUQwZ1kyeHZibVZRWVhSb0tISmxiVzkyWlZCaGRHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUhObGJHWXVjSFZ6YUVOdmJYQnZibVZ1ZENoaVlYTmxVR0YwYUM1amIyMXdiMjVsYm5SekxDQjFibVJsWm1sdVpXUXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJR0poYzJWUVlYUm9JRDBnWVdSa1VHRjBhRHNnTHk4Z1RtOGdibVZsWkNCMGJ5QmpiRzl1WlN3Z2QyVW5kbVVnY0hWc2JHVmtJR2wwSUdaeWIyMGdkR2hsSUd4cGMzUmNiaUFnSUNBZ0lDQWdJQ0JpWVhObFVHRjBhQzV1WlhkUWIzTXJLenRjYmlBZ0lDQWdJQ0FnSUNCelpXeG1MbkIxYzJoRGIyMXdiMjVsYm5Rb1ltRnpaVkJoZEdndVkyOXRjRzl1Wlc1MGN5d2dkSEoxWlN3Z2RXNWtaV1pwYm1Wa0tUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUc5c1pGQnZjeUE5SUhObGJHWXVaWGgwY21GamRFTnZiVzF2YmloaVlYTmxVR0YwYUN3Z2JtVjNVM1J5YVc1bkxDQnZiR1JUZEhKcGJtY3NJR1JwWVdkdmJtRnNVR0YwYUNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNCb2FYUWdkR2hsSUdWdVpDQnZaaUJpYjNSb0lITjBjbWx1WjNNc0lIUm9aVzRnZDJVZ1lYSmxJR1J2Ym1WY2JpQWdJQ0FnSUNBZ2FXWWdLR0poYzJWUVlYUm9MbTVsZDFCdmN5QXJJREVnUGowZ2JtVjNUR1Z1SUNZbUlHOXNaRkJ2Y3lBcklERWdQajBnYjJ4a1RHVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSdmJtVW9ZblZwYkdSV1lXeDFaWE1vYzJWc1ppd2dZbUZ6WlZCaGRHZ3VZMjl0Y0c5dVpXNTBjeXdnYm1WM1UzUnlhVzVuTENCdmJHUlRkSEpwYm1jc0lITmxiR1l1ZFhObFRHOXVaMlZ6ZEZSdmEyVnVLU2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdUM1JvWlhKM2FYTmxJSFJ5WVdOcklIUm9hWE1nY0dGMGFDQmhjeUJoSUhCdmRHVnVkR2xoYkNCallXNWthV1JoZEdVZ1lXNWtJR052Ym5ScGJuVmxMbHh1SUNBZ0lDQWdJQ0FnSUdKbGMzUlFZWFJvVzJScFlXZHZibUZzVUdGMGFGMGdQU0JpWVhObFVHRjBhRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCbFpHbDBUR1Z1WjNSb0t5czdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdVR1Z5Wm05eWJYTWdkR2hsSUd4bGJtZDBhQ0J2WmlCbFpHbDBJR2wwWlhKaGRHbHZiaTRnU1hNZ1lTQmlhWFFnWm5WbmJIa2dZWE1nZEdocGN5Qm9ZWE1nZEc4Z2MzVndjRzl5ZENCMGFHVmNiaUFnSUNBdkx5QnplVzVqSUdGdVpDQmhjM2x1WXlCdGIyUmxJSGRvYVdOb0lHbHpJRzVsZG1WeUlHWjFiaTRnVEc5dmNITWdiM1psY2lCbGVHVmpSV1JwZEV4bGJtZDBhQ0IxYm5ScGJDQmhJSFpoYkhWbFhHNGdJQ0FnTHk4Z2FYTWdjSEp2WkhWalpXUXVYRzRnSUNBZ2FXWWdLR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdJQ0FvWm5WdVkzUnBiMjRnWlhobFl5Z3BJSHRjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCVWFHbHpJSE5vYjNWc1pDQnViM1FnYUdGd2NHVnVMQ0JpZFhRZ2QyVWdkMkZ1ZENCMGJ5QmlaU0J6WVdabExseHVJQ0FnSUNBZ0lDQWdJQzhxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tHVmthWFJNWlc1bmRHZ2dQaUJ0WVhoRlpHbDBUR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGc2JHSmhZMnNvS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCcFppQW9JV1Y0WldORlpHbDBUR1Z1WjNSb0tDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjRaV01vS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzSURBcE8xeHVJQ0FnSUNBZ2ZTZ3BLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2QyaHBiR1VnS0dWa2FYUk1aVzVuZEdnZ1BEMGdiV0Y0UldScGRFeGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WMElEMGdaWGhsWTBWa2FYUk1aVzVuZEdnb0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDBzWEc1Y2JpQWdjSFZ6YUVOdmJYQnZibVZ1ZENoamIyMXdiMjVsYm5SekxDQmhaR1JsWkN3Z2NtVnRiM1psWkNrZ2UxeHVJQ0FnSUd4bGRDQnNZWE4wSUQwZ1kyOXRjRzl1Wlc1MGMxdGpiMjF3YjI1bGJuUnpMbXhsYm1kMGFDQXRJREZkTzF4dUlDQWdJR2xtSUNoc1lYTjBJQ1ltSUd4aGMzUXVZV1JrWldRZ1BUMDlJR0ZrWkdWa0lDWW1JR3hoYzNRdWNtVnRiM1psWkNBOVBUMGdjbVZ0YjNabFpDa2dlMXh1SUNBZ0lDQWdMeThnVjJVZ2JtVmxaQ0IwYnlCamJHOXVaU0JvWlhKbElHRnpJSFJvWlNCamIyMXdiMjVsYm5RZ1kyeHZibVVnYjNCbGNtRjBhVzl1SUdseklHcDFjM1JjYmlBZ0lDQWdJQzh2SUdGeklITm9ZV3hzYjNjZ1lYSnlZWGtnWTJ4dmJtVmNiaUFnSUNBZ0lHTnZiWEJ2Ym1WdWRITmJZMjl0Y0c5dVpXNTBjeTVzWlc1bmRHZ2dMU0F4WFNBOUlIdGpiM1Z1ZERvZ2JHRnpkQzVqYjNWdWRDQXJJREVzSUdGa1pHVmtPaUJoWkdSbFpDd2djbVZ0YjNabFpEb2djbVZ0YjNabFpDQjlPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCamIyMXdiMjVsYm5SekxuQjFjMmdvZTJOdmRXNTBPaUF4TENCaFpHUmxaRG9nWVdSa1pXUXNJSEpsYlc5MlpXUTZJSEpsYlc5MlpXUWdmU2s3WEc0Z0lDQWdmVnh1SUNCOUxGeHVJQ0JsZUhSeVlXTjBRMjl0Ylc5dUtHSmhjMlZRWVhSb0xDQnVaWGRUZEhKcGJtY3NJRzlzWkZOMGNtbHVaeXdnWkdsaFoyOXVZV3hRWVhSb0tTQjdYRzRnSUNBZ2JHVjBJRzVsZDB4bGJpQTlJRzVsZDFOMGNtbHVaeTVzWlc1bmRHZ3NYRzRnSUNBZ0lDQWdJRzlzWkV4bGJpQTlJRzlzWkZOMGNtbHVaeTVzWlc1bmRHZ3NYRzRnSUNBZ0lDQWdJRzVsZDFCdmN5QTlJR0poYzJWUVlYUm9MbTVsZDFCdmN5eGNiaUFnSUNBZ0lDQWdiMnhrVUc5eklEMGdibVYzVUc5eklDMGdaR2xoWjI5dVlXeFFZWFJvTEZ4dVhHNGdJQ0FnSUNBZ0lHTnZiVzF2YmtOdmRXNTBJRDBnTUR0Y2JpQWdJQ0IzYUdsc1pTQW9ibVYzVUc5eklDc2dNU0E4SUc1bGQweGxiaUFtSmlCdmJHUlFiM01nS3lBeElEd2diMnhrVEdWdUlDWW1JSFJvYVhNdVpYRjFZV3h6S0c1bGQxTjBjbWx1WjF0dVpYZFFiM01nS3lBeFhTd2diMnhrVTNSeWFXNW5XMjlzWkZCdmN5QXJJREZkS1NrZ2UxeHVJQ0FnSUNBZ2JtVjNVRzl6S3lzN1hHNGdJQ0FnSUNCdmJHUlFiM01yS3p0Y2JpQWdJQ0FnSUdOdmJXMXZia052ZFc1MEt5czdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR052YlcxdmJrTnZkVzUwS1NCN1hHNGdJQ0FnSUNCaVlYTmxVR0YwYUM1amIyMXdiMjVsYm5SekxuQjFjMmdvZTJOdmRXNTBPaUJqYjIxdGIyNURiM1Z1ZEgwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdKaGMyVlFZWFJvTG01bGQxQnZjeUE5SUc1bGQxQnZjenRjYmlBZ0lDQnlaWFIxY200Z2IyeGtVRzl6TzF4dUlDQjlMRnh1WEc0Z0lHVnhkV0ZzY3loc1pXWjBMQ0J5YVdkb2RDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdVkyOXRjR0Z5WVhSdmNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YjNCMGFXOXVjeTVqYjIxd1lYSmhkRzl5S0d4bFpuUXNJSEpwWjJoMEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR3hsWm5RZ1BUMDlJSEpwWjJoMFhHNGdJQ0FnSUNBZ0lIeDhJQ2gwYUdsekxtOXdkR2x2Ym5NdWFXZHViM0psUTJGelpTQW1KaUJzWldaMExuUnZURzkzWlhKRFlYTmxLQ2tnUFQwOUlISnBaMmgwTG5SdlRHOTNaWEpEWVhObEtDa3BPMXh1SUNBZ0lIMWNiaUFnZlN4Y2JpQWdjbVZ0YjNabFJXMXdkSGtvWVhKeVlYa3BJSHRjYmlBZ0lDQnNaWFFnY21WMElEMGdXMTA3WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoY25KaGVTNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHRnljbUY1VzJsZEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEM1d2RYTm9LR0Z5Y21GNVcybGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnZlN4Y2JpQWdZMkZ6ZEVsdWNIVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNCOUxGeHVJQ0IwYjJ0bGJtbDZaU2gyWVd4MVpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaUzV6Y0d4cGRDZ25KeWs3WEc0Z0lIMHNYRzRnSUdwdmFXNG9ZMmhoY25NcElIdGNiaUFnSUNCeVpYUjFjbTRnWTJoaGNuTXVhbTlwYmlnbkp5azdYRzRnSUgxY2JuMDdYRzVjYm1aMWJtTjBhVzl1SUdKMWFXeGtWbUZzZFdWektHUnBabVlzSUdOdmJYQnZibVZ1ZEhNc0lHNWxkMU4wY21sdVp5d2diMnhrVTNSeWFXNW5MQ0IxYzJWTWIyNW5aWE4wVkc5clpXNHBJSHRjYmlBZ2JHVjBJR052YlhCdmJtVnVkRkJ2Y3lBOUlEQXNYRzRnSUNBZ0lDQmpiMjF3YjI1bGJuUk1aVzRnUFNCamIyMXdiMjVsYm5SekxteGxibWQwYUN4Y2JpQWdJQ0FnSUc1bGQxQnZjeUE5SURBc1hHNGdJQ0FnSUNCdmJHUlFiM01nUFNBd08xeHVYRzRnSUdadmNpQW9PeUJqYjIxd2IyNWxiblJRYjNNZ1BDQmpiMjF3YjI1bGJuUk1aVzQ3SUdOdmJYQnZibVZ1ZEZCdmN5c3JLU0I3WEc0Z0lDQWdiR1YwSUdOdmJYQnZibVZ1ZENBOUlHTnZiWEJ2Ym1WdWRITmJZMjl0Y0c5dVpXNTBVRzl6WFR0Y2JpQWdJQ0JwWmlBb0lXTnZiWEJ2Ym1WdWRDNXlaVzF2ZG1Wa0tTQjdYRzRnSUNBZ0lDQnBaaUFvSVdOdmJYQnZibVZ1ZEM1aFpHUmxaQ0FtSmlCMWMyVk1iMjVuWlhOMFZHOXJaVzRwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFpoYkhWbElEMGdibVYzVTNSeWFXNW5Mbk5zYVdObEtHNWxkMUJ2Y3l3Z2JtVjNVRzl6SUNzZ1kyOXRjRzl1Wlc1MExtTnZkVzUwS1R0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaUzV0WVhBb1puVnVZM1JwYjI0b2RtRnNkV1VzSUdrcElIdGNiaUFnSUNBZ0lDQWdJQ0JzWlhRZ2IyeGtWbUZzZFdVZ1BTQnZiR1JUZEhKcGJtZGJiMnhrVUc5eklDc2dhVjA3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5c1pGWmhiSFZsTG14bGJtZDBhQ0ErSUhaaGJIVmxMbXhsYm1kMGFDQS9JRzlzWkZaaGJIVmxJRG9nZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lHTnZiWEJ2Ym1WdWRDNTJZV3gxWlNBOUlHUnBabVl1YW05cGJpaDJZV3gxWlNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCamIyMXdiMjVsYm5RdWRtRnNkV1VnUFNCa2FXWm1MbXB2YVc0b2JtVjNVM1J5YVc1bkxuTnNhV05sS0c1bGQxQnZjeXdnYm1WM1VHOXpJQ3NnWTI5dGNHOXVaVzUwTG1OdmRXNTBLU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J1WlhkUWIzTWdLejBnWTI5dGNHOXVaVzUwTG1OdmRXNTBPMXh1WEc0Z0lDQWdJQ0F2THlCRGIyMXRiMjRnWTJGelpWeHVJQ0FnSUNBZ2FXWWdLQ0ZqYjIxd2IyNWxiblF1WVdSa1pXUXBJSHRjYmlBZ0lDQWdJQ0FnYjJ4a1VHOXpJQ3M5SUdOdmJYQnZibVZ1ZEM1amIzVnVkRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1kyOXRjRzl1Wlc1MExuWmhiSFZsSUQwZ1pHbG1aaTVxYjJsdUtHOXNaRk4wY21sdVp5NXpiR2xqWlNodmJHUlFiM01zSUc5c1pGQnZjeUFySUdOdmJYQnZibVZ1ZEM1amIzVnVkQ2twTzF4dUlDQWdJQ0FnYjJ4a1VHOXpJQ3M5SUdOdmJYQnZibVZ1ZEM1amIzVnVkRHRjYmx4dUlDQWdJQ0FnTHk4Z1VtVjJaWEp6WlNCaFpHUWdZVzVrSUhKbGJXOTJaU0J6YnlCeVpXMXZkbVZ6SUdGeVpTQnZkWFJ3ZFhRZ1ptbHljM1FnZEc4Z2JXRjBZMmdnWTI5dGJXOXVJR052Ym5abGJuUnBiMjVjYmlBZ0lDQWdJQzh2SUZSb1pTQmthV1ptYVc1bklHRnNaMjl5YVhSb2JTQnBjeUIwYVdWa0lIUnZJR0ZrWkNCMGFHVnVJSEpsYlc5MlpTQnZkWFJ3ZFhRZ1lXNWtJSFJvYVhNZ2FYTWdkR2hsSUhOcGJYQnNaWE4wWEc0Z0lDQWdJQ0F2THlCeWIzVjBaU0IwYnlCblpYUWdkR2hsSUdSbGMybHlaV1FnYjNWMGNIVjBJSGRwZEdnZ2JXbHVhVzFoYkNCdmRtVnlhR1ZoWkM1Y2JpQWdJQ0FnSUdsbUlDaGpiMjF3YjI1bGJuUlFiM01nSmlZZ1kyOXRjRzl1Wlc1MGMxdGpiMjF3YjI1bGJuUlFiM01nTFNBeFhTNWhaR1JsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnZEcxd0lEMGdZMjl0Y0c5dVpXNTBjMXRqYjIxd2IyNWxiblJRYjNNZ0xTQXhYVHRjYmlBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwYzF0amIyMXdiMjVsYm5SUWIzTWdMU0F4WFNBOUlHTnZiWEJ2Ym1WdWRITmJZMjl0Y0c5dVpXNTBVRzl6WFR0Y2JpQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MGMxdGpiMjF3YjI1bGJuUlFiM05kSUQwZ2RHMXdPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUZOd1pXTnBZV3dnWTJGelpTQm9ZVzVrYkdVZ1ptOXlJSGRvWlc0Z2IyNWxJSFJsY20xcGJtRnNJR2x6SUdsbmJtOXlaV1FnS0drdVpTNGdkMmhwZEdWemNHRmpaU2t1WEc0Z0lDOHZJRVp2Y2lCMGFHbHpJR05oYzJVZ2QyVWdiV1Z5WjJVZ2RHaGxJSFJsY20xcGJtRnNJR2x1ZEc4Z2RHaGxJSEJ5YVc5eUlITjBjbWx1WnlCaGJtUWdaSEp2Y0NCMGFHVWdZMmhoYm1kbExseHVJQ0F2THlCVWFHbHpJR2x6SUc5dWJIa2dZWFpoYVd4aFlteGxJR1p2Y2lCemRISnBibWNnYlc5a1pTNWNiaUFnYkdWMElHeGhjM1JEYjIxd2IyNWxiblFnUFNCamIyMXdiMjVsYm5SelcyTnZiWEJ2Ym1WdWRFeGxiaUF0SURGZE8xeHVJQ0JwWmlBb1kyOXRjRzl1Wlc1MFRHVnVJRDRnTVZ4dUlDQWdJQ0FnSmlZZ2RIbHdaVzltSUd4aGMzUkRiMjF3YjI1bGJuUXVkbUZzZFdVZ1BUMDlJQ2R6ZEhKcGJtY25YRzRnSUNBZ0lDQW1KaUFvYkdGemRFTnZiWEJ2Ym1WdWRDNWhaR1JsWkNCOGZDQnNZWE4wUTI5dGNHOXVaVzUwTG5KbGJXOTJaV1FwWEc0Z0lDQWdJQ0FtSmlCa2FXWm1MbVZ4ZFdGc2N5Z25KeXdnYkdGemRFTnZiWEJ2Ym1WdWRDNTJZV3gxWlNrcElIdGNiaUFnSUNCamIyMXdiMjVsYm5SelcyTnZiWEJ2Ym1WdWRFeGxiaUF0SURKZExuWmhiSFZsSUNzOUlHeGhjM1JEYjIxd2IyNWxiblF1ZG1Gc2RXVTdYRzRnSUNBZ1kyOXRjRzl1Wlc1MGN5NXdiM0FvS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCamIyMXdiMjVsYm5Sek8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCamJHOXVaVkJoZEdnb2NHRjBhQ2tnZTF4dUlDQnlaWFIxY200Z2V5QnVaWGRRYjNNNklIQmhkR2d1Ym1WM1VHOXpMQ0JqYjIxd2IyNWxiblJ6T2lCd1lYUm9MbU52YlhCdmJtVnVkSE11YzJ4cFkyVW9NQ2tnZlR0Y2JuMWNiaUpkZlE9PVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZDaGFycyA9IGRpZmZDaGFycztcbmV4cG9ydHMuY2hhcmFjdGVyRGlmZiA9IHZvaWQgMDtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyIGNoYXJhY3RlckRpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMuY2hhcmFjdGVyRGlmZiA9IGNoYXJhY3RlckRpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBkaWZmQ2hhcnMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNoYXJhY3RlckRpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwyTm9ZWEpoWTNSbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKamFHRnlZV04wWlhKRWFXWm1JaXdpUkdsbVppSXNJbVJwWm1aRGFHRnljeUlzSW05c1pGTjBjaUlzSW01bGQxTjBjaUlzSW05d2RHbHZibk1pTENKa2FXWm1JbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN096czdRVUZGVHl4SlFVRk5RU3hoUVVGaExFZEJRVWM3UVVGQlNVTTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFc1EwRkJTaXhGUVVGMFFqczdPenM3TzBGQlEwRXNVMEZCVTBNc1UwRkJWQ3hEUVVGdFFrTXNUVUZCYmtJc1JVRkJNa0pETEUxQlFUTkNMRVZCUVcxRFF5eFBRVUZ1UXl4RlFVRTBRenRCUVVGRkxGTkJRVTlNTEdGQlFXRXNRMEZCUTAwc1NVRkJaQ3hEUVVGdFFrZ3NUVUZCYmtJc1JVRkJNa0pETEUxQlFUTkNMRVZCUVcxRFF5eFBRVUZ1UXl4RFFVRlFPMEZCUVhGRUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHTm9ZWEpoWTNSbGNrUnBabVlnUFNCdVpYY2dSR2xtWmlncE8xeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHUnBabVpEYUdGeWN5aHZiR1JUZEhJc0lHNWxkMU4wY2l3Z2IzQjBhVzl1Y3lrZ2V5QnlaWFIxY200Z1kyaGhjbUZqZEdWeVJHbG1aaTVrYVdabUtHOXNaRk4wY2l3Z2JtVjNVM1J5TENCdmNIUnBiMjV6S1RzZ2ZWeHVJbDE5XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGlmZkNzcyA9IGRpZmZDc3M7XG5leHBvcnRzLmNzc0RpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhciBjc3NEaWZmID0gbmV3XG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbltcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwiZGVmYXVsdFwiXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXSgpO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5leHBvcnRzLmNzc0RpZmYgPSBjc3NEaWZmO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhbe306OyxdfFxccyspLyk7XG59O1xuXG5mdW5jdGlvbiBkaWZmQ3NzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICByZXR1cm4gY3NzRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwyTnpjeTVxY3lKZExDSnVZVzFsY3lJNld5SmpjM05FYVdabUlpd2lSR2xtWmlJc0luUnZhMlZ1YVhwbElpd2lkbUZzZFdVaUxDSnpjR3hwZENJc0ltUnBabVpEYzNNaUxDSnZiR1JUZEhJaUxDSnVaWGRUZEhJaUxDSmpZV3hzWW1GamF5SXNJbVJwWm1ZaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenM3T3p0QlFVVlBMRWxCUVUxQkxFOUJRVThzUjBGQlJ6dEJRVUZKUXp0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRU3hEUVVGS0xFVkJRV2hDT3pzN096czdRVUZEVUVRc1QwRkJUeXhEUVVGRFJTeFJRVUZTTEVkQlFXMUNMRlZCUVZORExFdEJRVlFzUlVGQlowSTdRVUZEYWtNc1UwRkJUMEVzUzBGQlN5eERRVUZEUXl4TFFVRk9MRU5CUVZrc1pVRkJXaXhEUVVGUU8wRkJRMFFzUTBGR1JEczdRVUZKVHl4VFFVRlRReXhQUVVGVUxFTkJRV2xDUXl4TlFVRnFRaXhGUVVGNVFrTXNUVUZCZWtJc1JVRkJhVU5ETEZGQlFXcERMRVZCUVRKRE8wRkJRVVVzVTBGQlQxSXNUMEZCVHl4RFFVRkRVeXhKUVVGU0xFTkJRV0ZJTEUxQlFXSXNSVUZCY1VKRExFMUJRWEpDTEVWQlFUWkNReXhSUVVFM1FpeERRVUZRTzBGQlFXZEVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRVJwWm1ZZ1puSnZiU0FuTGk5aVlYTmxKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR056YzBScFptWWdQU0J1WlhjZ1JHbG1aaWdwTzF4dVkzTnpSR2xtWmk1MGIydGxibWw2WlNBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3gxWlM1emNHeHBkQ2d2S0Z0N2ZUbzdMRjE4WEZ4ekt5a3ZLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmthV1ptUTNOektHOXNaRk4wY2l3Z2JtVjNVM1J5TENCallXeHNZbUZqYXlrZ2V5QnlaWFIxY200Z1kzTnpSR2xtWmk1a2FXWm1LRzlzWkZOMGNpd2dibVYzVTNSeUxDQmpZV3hzWW1GamF5azdJSDFjYmlKZGZRPT1cbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kaWZmSnNvbiA9IGRpZmZKc29uO1xuZXhwb3J0cy5jYW5vbmljYWxpemUgPSBjYW5vbmljYWxpemU7XG5leHBvcnRzLmpzb25EaWZmID0gdm9pZCAwO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSlcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2xpbmUgPSByZXF1aXJlKFwiLi9saW5lXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXIgb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGpzb25EaWZmID0gbmV3XG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbltcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwiZGVmYXVsdFwiXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXSgpOyAvLyBEaXNjcmltaW5hdGUgYmV0d2VlbiB0d28gbGluZXMgb2YgcHJldHR5LXByaW50ZWQsIHNlcmlhbGl6ZWQgSlNPTiB3aGVyZSBvbmUgb2YgdGhlbSBoYXMgYVxuLy8gZGFuZ2xpbmcgY29tbWEgYW5kIHRoZSBvdGhlciBkb2Vzbid0LiBUdXJucyBvdXQgaW5jbHVkaW5nIHRoZSBkYW5nbGluZyBjb21tYSB5aWVsZHMgdGhlIG5pY2VzdCBvdXRwdXQ6XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMuanNvbkRpZmYgPSBqc29uRGlmZjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbmpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG5qc29uRGlmZi50b2tlbml6ZSA9XG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fbGluZVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbi5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmxpbmVEaWZmXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuLnRva2VuaXplO1xuXG5qc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICB2YXIgX3RoaXMkb3B0aW9ucyA9XG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIHRoaXMub3B0aW9ucyxcbiAgICAgIHVuZGVmaW5lZFJlcGxhY2VtZW50ID0gX3RoaXMkb3B0aW9ucy51bmRlZmluZWRSZXBsYWNlbWVudCxcbiAgICAgIF90aGlzJG9wdGlvbnMkc3RyaW5naSA9IF90aGlzJG9wdGlvbnMuc3RyaW5naWZ5UmVwbGFjZXIsXG4gICAgICBzdHJpbmdpZnlSZXBsYWNlciA9IF90aGlzJG9wdGlvbnMkc3RyaW5naSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGssIHYpXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAge1xuICAgIHJldHVybiAoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkUmVwbGFjZW1lbnQgOiB2XG4gICAgKTtcbiAgfSA6IF90aGlzJG9wdGlvbnMkc3RyaW5naTtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KGNhbm9uaWNhbGl6ZSh2YWx1ZSwgbnVsbCwgbnVsbCwgc3RyaW5naWZ5UmVwbGFjZXIpLCBzdHJpbmdpZnlSZXBsYWNlciwgJyAgJyk7XG59O1xuXG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgcmV0dXJuIChcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2Jhc2VcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIFtcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgXCJkZWZhdWx0XCJcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIF0ucHJvdG90eXBlLmVxdWFscy5jYWxsKGpzb25EaWZmLCBsZWZ0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpLCByaWdodC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSlcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGRpZmZKc29uKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKSB7XG4gIHJldHVybiBqc29uRGlmZi5kaWZmKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbn0gLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4vLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLiBBY2NlcHRzIGFuIG9wdGlvbmFsIHJlcGxhY2VyXG5cblxuZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpIHtcbiAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgaWYgKHJlcGxhY2VyKSB7XG4gICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICB9XG5cbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjYW5vbmljYWxpemVkT2JqO1xuXG4gIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjYW5vbmljYWxpemVkT2JqW2ldID0gY2Fub25pY2FsaXplKG9ialtpXSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xuICAgIH1cblxuICAgIHN0YWNrLnBvcCgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gIH1cblxuICBpZiAob2JqICYmIG9iai50b0pTT04pIHtcbiAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gIH1cblxuICBpZiAoXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgX3R5cGVvZihcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgb2JqKSA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgc3RhY2sucHVzaChvYmopO1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSB7fTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICB2YXIgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICBfa2V5O1xuXG4gICAgZm9yIChfa2V5IGluIG9iaikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgc29ydGVkS2V5cy5wdXNoKF9rZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRlZEtleXMuc29ydCgpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvcnRlZEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIF9rZXkgPSBzb3J0ZWRLZXlzW2ldO1xuICAgICAgY2Fub25pY2FsaXplZE9ialtfa2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpbX2tleV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwgX2tleSk7XG4gICAgfVxuXG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBjYW5vbmljYWxpemVkT2JqID0gb2JqO1xuICB9XG5cbiAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwycHpiMjR1YW5NaVhTd2libUZ0WlhNaU9sc2liMkpxWldOMFVISnZkRzkwZVhCbFZHOVRkSEpwYm1jaUxDSlBZbXBsWTNRaUxDSndjbTkwYjNSNWNHVWlMQ0owYjFOMGNtbHVaeUlzSW1wemIyNUVhV1ptSWl3aVJHbG1aaUlzSW5WelpVeHZibWRsYzNSVWIydGxiaUlzSW5SdmEyVnVhWHBsSWl3aWJHbHVaVVJwWm1ZaUxDSmpZWE4wU1c1d2RYUWlMQ0oyWVd4MVpTSXNJbTl3ZEdsdmJuTWlMQ0oxYm1SbFptbHVaV1JTWlhCc1lXTmxiV1Z1ZENJc0luTjBjbWx1WjJsbWVWSmxjR3hoWTJWeUlpd2lheUlzSW5ZaUxDSktVMDlPSWl3aWMzUnlhVzVuYVdaNUlpd2lZMkZ1YjI1cFkyRnNhWHBsSWl3aVpYRjFZV3h6SWl3aWJHVm1kQ0lzSW5KcFoyaDBJaXdpWTJGc2JDSXNJbkpsY0d4aFkyVWlMQ0prYVdabVNuTnZiaUlzSW05c1pFOWlhaUlzSW01bGQwOWlhaUlzSW1ScFptWWlMQ0p2WW1vaUxDSnpkR0ZqYXlJc0luSmxjR3hoWTJWdFpXNTBVM1JoWTJzaUxDSnlaWEJzWVdObGNpSXNJbXRsZVNJc0lta2lMQ0pzWlc1bmRHZ2lMQ0pqWVc1dmJtbGpZV3hwZW1Wa1QySnFJaXdpY0hWemFDSXNJa0Z5Y21GNUlpd2ljRzl3SWl3aWRHOUtVMDlPSWl3aWMyOXlkR1ZrUzJWNWN5SXNJbWhoYzA5M2JsQnliM0JsY25SNUlpd2ljMjl5ZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPenM3T3pzN1FVRkZRU3hKUVVGTlFTeDFRa0ZCZFVJc1IwRkJSME1zVFVGQlRTeERRVUZEUXl4VFFVRlFMRU5CUVdsQ1F5eFJRVUZxUkR0QlFVZFBMRWxCUVUxRExGRkJRVkVzUjBGQlJ6dEJRVUZKUXp0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRU3hEUVVGS0xFVkJRV3BDTEVNc1EwRkRVRHRCUVVOQk96czdPenM3UVVGRFFVUXNVVUZCVVN4RFFVRkRSU3hsUVVGVUxFZEJRVEpDTEVsQlFUTkNPMEZCUlVGR0xGRkJRVkVzUTBGQlEwY3NVVUZCVkR0QlFVRnZRa003UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVHRCUVVGQkxFTkJRVk5FTEZGQlFUZENPenRCUVVOQlNDeFJRVUZSTEVOQlFVTkxMRk5CUVZRc1IwRkJjVUlzVlVGQlUwTXNTMEZCVkN4RlFVRm5RanRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVU1yUlN4UFFVRkxReXhQUVVSd1JqdEJRVUZCTEUxQlF6VkNReXh2UWtGRU5FSXNhVUpCUXpWQ1FTeHZRa0ZFTkVJN1FVRkJRU3cwUTBGRFRrTXNhVUpCUkUwN1FVRkJRU3hOUVVOT1FTeHBRa0ZFVFN4elEwRkRZeXhWUVVGRFF5eERRVUZFTEVWQlFVbERMRU5CUVVvN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZWTEdGQlFVOUJMRU5CUVZBc1MwRkJZU3hYUVVGaUxFZEJRVEpDU0N4dlFrRkJNMElzUjBGQmEwUkhPMEZCUVRWRU8wRkJRVUVzUjBGRVpEdEJRVWR1UXl4VFFVRlBMRTlCUVU5TUxFdEJRVkFzUzBGQmFVSXNVVUZCYWtJc1IwRkJORUpCTEV0QlFUVkNMRWRCUVc5RFRTeEpRVUZKTEVOQlFVTkRMRk5CUVV3c1EwRkJaVU1zV1VGQldTeERRVUZEVWl4TFFVRkVMRVZCUVZFc1NVRkJVaXhGUVVGakxFbEJRV1FzUlVGQmIwSkhMR2xDUVVGd1FpeERRVUV6UWl4RlFVRnRSVUVzYVVKQlFXNUZMRVZCUVhOR0xFbEJRWFJHTEVOQlFUTkRPMEZCUTBRc1EwRktSRHM3UVVGTFFWUXNVVUZCVVN4RFFVRkRaU3hOUVVGVUxFZEJRV3RDTEZWQlFWTkRMRWxCUVZRc1JVRkJaVU1zUzBGQlppeEZRVUZ6UWp0QlFVTjBReXhUUVVGUGFFSTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzVFVGQlMwZ3NVMEZCVEN4RFFVRmxhVUlzVFVGQlppeERRVUZ6UWtjc1NVRkJkRUlzUTBGQk1rSnNRaXhSUVVFelFpeEZRVUZ4UTJkQ0xFbEJRVWtzUTBGQlEwY3NUMEZCVEN4RFFVRmhMRmxCUVdJc1JVRkJNa0lzU1VGQk0wSXNRMEZCY2tNc1JVRkJkVVZHTEV0QlFVc3NRMEZCUTBVc1QwRkJUaXhEUVVGakxGbEJRV1FzUlVGQk5FSXNTVUZCTlVJc1EwRkJka1U3UVVGQlVEdEJRVU5FTEVOQlJrUTdPMEZCU1U4c1UwRkJVME1zVVVGQlZDeERRVUZyUWtNc1RVRkJiRUlzUlVGQk1FSkRMRTFCUVRGQ0xFVkJRV3REWml4UFFVRnNReXhGUVVFeVF6dEJRVUZGTEZOQlFVOVFMRkZCUVZFc1EwRkJRM1ZDTEVsQlFWUXNRMEZCWTBZc1RVRkJaQ3hGUVVGelFrTXNUVUZCZEVJc1JVRkJPRUptTEU5QlFUbENMRU5CUVZBN1FVRkJaMFFzUXl4RFFVVndSenRCUVVOQk96czdRVUZEVHl4VFFVRlRUeXhaUVVGVUxFTkJRWE5DVlN4SFFVRjBRaXhGUVVFeVFrTXNTMEZCTTBJc1JVRkJhME5ETEdkQ1FVRnNReXhGUVVGdlJFTXNVVUZCY0VRc1JVRkJPRVJETEVkQlFUbEVMRVZCUVcxRk8wRkJRM2hGU0N4RlFVRkJRU3hMUVVGTExFZEJRVWRCTEV0QlFVc3NTVUZCU1N4RlFVRnFRanRCUVVOQlF5eEZRVUZCUVN4blFrRkJaMElzUjBGQlIwRXNaMEpCUVdkQ0xFbEJRVWtzUlVGQmRrTTdPMEZCUlVFc1RVRkJTVU1zVVVGQlNpeEZRVUZqTzBGQlExcElMRWxCUVVGQkxFZEJRVWNzUjBGQlIwY3NVVUZCVVN4RFFVRkRReXhIUVVGRUxFVkJRVTFLTEVkQlFVNHNRMEZCWkR0QlFVTkVPenRCUVVWRUxFMUJRVWxMTEVOQlFVbzdPMEZCUlVFc1QwRkJTMEVzUTBGQlF5eEhRVUZITEVOQlFWUXNSVUZCV1VFc1EwRkJReXhIUVVGSFNpeExRVUZMTEVOQlFVTkxMRTFCUVhSQ0xFVkJRVGhDUkN4RFFVRkRMRWxCUVVrc1EwRkJia01zUlVGQmMwTTdRVUZEY0VNc1VVRkJTVW9zUzBGQlN5eERRVUZEU1N4RFFVRkVMRU5CUVV3c1MwRkJZVXdzUjBGQmFrSXNSVUZCYzBJN1FVRkRjRUlzWVVGQlQwVXNaMEpCUVdkQ0xFTkJRVU5ITEVOQlFVUXNRMEZCZGtJN1FVRkRSRHRCUVVOR096dEJRVVZFTEUxQlFVbEZMR2RDUVVGS096dEJRVVZCTEUxQlFVa3NjVUpCUVhGQ2JrTXNkVUpCUVhWQ0xFTkJRVU56UWl4SlFVRjRRaXhEUVVFMlFrMHNSMEZCTjBJc1EwRkJla0lzUlVGQk5FUTdRVUZETVVSRExFbEJRVUZCTEV0QlFVc3NRMEZCUTA4c1NVRkJUaXhEUVVGWFVpeEhRVUZZTzBGQlEwRlBMRWxCUVVGQkxHZENRVUZuUWl4SFFVRkhMRWxCUVVsRkxFdEJRVW9zUTBGQlZWUXNSMEZCUnl4RFFVRkRUU3hOUVVGa0xFTkJRVzVDTzBGQlEwRktMRWxCUVVGQkxHZENRVUZuUWl4RFFVRkRUU3hKUVVGcVFpeERRVUZ6UWtRc1owSkJRWFJDT3p0QlFVTkJMRk5CUVV0R0xFTkJRVU1zUjBGQlJ5eERRVUZVTEVWQlFWbEJMRU5CUVVNc1IwRkJSMHdzUjBGQlJ5eERRVUZEVFN4TlFVRndRaXhGUVVFMFFrUXNRMEZCUXl4SlFVRkpMRU5CUVdwRExFVkJRVzlETzBGQlEyeERSU3hOUVVGQlFTeG5Ra0ZCWjBJc1EwRkJRMFlzUTBGQlJDeERRVUZvUWl4SFFVRnpRbVlzV1VGQldTeERRVUZEVlN4SFFVRkhMRU5CUVVOTExFTkJRVVFzUTBGQlNpeEZRVUZUU2l4TFFVRlVMRVZCUVdkQ1F5eG5Ra0ZCYUVJc1JVRkJhME5ETEZGQlFXeERMRVZCUVRSRFF5eEhRVUUxUXl4RFFVRnNRenRCUVVORU96dEJRVU5FU0N4SlFVRkJRU3hMUVVGTExFTkJRVU5UTEVkQlFVNDdRVUZEUVZJc1NVRkJRVUVzWjBKQlFXZENMRU5CUVVOUkxFZEJRV3BDTzBGQlEwRXNWMEZCVDBnc1owSkJRVkE3UVVGRFJEczdRVUZGUkN4TlFVRkpVQ3hIUVVGSExFbEJRVWxCTEVkQlFVY3NRMEZCUTFjc1RVRkJaaXhGUVVGMVFqdEJRVU55UWxnc1NVRkJRVUVzUjBGQlJ5eEhRVUZIUVN4SFFVRkhMRU5CUVVOWExFMUJRVW9zUlVGQlRqdEJRVU5FT3p0QlFVVkVPMEZCUVVrN1FVRkJRVHRCUVVGQk8wRkJRVTlZTEVWQlFVRkJMRWRCUVZBc1RVRkJaU3hSUVVGbUxFbEJRVEpDUVN4SFFVRkhMRXRCUVVzc1NVRkJka01zUlVGQk5rTTdRVUZETTBORExFbEJRVUZCTEV0QlFVc3NRMEZCUTA4c1NVRkJUaXhEUVVGWFVpeEhRVUZZTzBGQlEwRlBMRWxCUVVGQkxHZENRVUZuUWl4SFFVRkhMRVZCUVc1Q08wRkJRMEZNTEVsQlFVRkJMR2RDUVVGblFpeERRVUZEVFN4SlFVRnFRaXhEUVVGelFrUXNaMEpCUVhSQ096dEJRVU5CTEZGQlFVbExMRlZCUVZVc1IwRkJSeXhGUVVGcVFqdEJRVUZCTEZGQlEwbFNMRWxCUkVvN08wRkJSVUVzVTBGQlMwRXNTVUZCVEN4SlFVRlpTaXhIUVVGYUxFVkJRV2xDTzBGQlEyWTdRVUZEUVN4VlFVRkpRU3hIUVVGSExFTkJRVU5oTEdOQlFVb3NRMEZCYlVKVUxFbEJRVzVDTEVOQlFVb3NSVUZCTmtJN1FVRkRNMEpSTEZGQlFVRkJMRlZCUVZVc1EwRkJRMG9zU1VGQldDeERRVUZuUWtvc1NVRkJhRUk3UVVGRFJEdEJRVU5HT3p0QlFVTkVVU3hKUVVGQlFTeFZRVUZWTEVOQlFVTkZMRWxCUVZnN08wRkJRMEVzVTBGQlMxUXNRMEZCUXl4SFFVRkhMRU5CUVZRc1JVRkJXVUVzUTBGQlF5eEhRVUZIVHl4VlFVRlZMRU5CUVVOT0xFMUJRVE5DTEVWQlFXMURSQ3hEUVVGRExFbEJRVWtzUTBGQmVFTXNSVUZCTWtNN1FVRkRla05FTEUxQlFVRkJMRWxCUVVjc1IwRkJSMUVzVlVGQlZTeERRVUZEVUN4RFFVRkVMRU5CUVdoQ08wRkJRMEZGTEUxQlFVRkJMR2RDUVVGblFpeERRVUZEU0N4SlFVRkVMRU5CUVdoQ0xFZEJRWGRDWkN4WlFVRlpMRU5CUVVOVkxFZEJRVWNzUTBGQlEwa3NTVUZCUkN4RFFVRktMRVZCUVZkSUxFdEJRVmdzUlVGQmEwSkRMR2RDUVVGc1FpeEZRVUZ2UTBNc1VVRkJjRU1zUlVGQk9FTkRMRWxCUVRsRExFTkJRWEJETzBGQlEwUTdPMEZCUTBSSUxFbEJRVUZCTEV0QlFVc3NRMEZCUTFNc1IwRkJUanRCUVVOQlVpeEpRVUZCUVN4blFrRkJaMElzUTBGQlExRXNSMEZCYWtJN1FVRkRSQ3hIUVc1Q1JDeE5RVzFDVHp0QlFVTk1TQ3hKUVVGQlFTeG5Ra0ZCWjBJc1IwRkJSMUFzUjBGQmJrSTdRVUZEUkRzN1FVRkRSQ3hUUVVGUFR5eG5Ra0ZCVUR0QlFVTkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRVJwWm1ZZ1puSnZiU0FuTGk5aVlYTmxKenRjYm1sdGNHOXlkQ0I3YkdsdVpVUnBabVo5SUdaeWIyMGdKeTR2YkdsdVpTYzdYRzVjYm1OdmJuTjBJRzlpYW1WamRGQnliM1J2ZEhsd1pWUnZVM1J5YVc1bklEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp6dGNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdhbk52YmtScFptWWdQU0J1WlhjZ1JHbG1aaWdwTzF4dUx5OGdSR2x6WTNKcGJXbHVZWFJsSUdKbGRIZGxaVzRnZEhkdklHeHBibVZ6SUc5bUlIQnlaWFIwZVMxd2NtbHVkR1ZrTENCelpYSnBZV3hwZW1Wa0lFcFRUMDRnZDJobGNtVWdiMjVsSUc5bUlIUm9aVzBnYUdGeklHRmNiaTh2SUdSaGJtZHNhVzVuSUdOdmJXMWhJR0Z1WkNCMGFHVWdiM1JvWlhJZ1pHOWxjMjRuZEM0Z1ZIVnlibk1nYjNWMElHbHVZMngxWkdsdVp5QjBhR1VnWkdGdVoyeHBibWNnWTI5dGJXRWdlV2xsYkdSeklIUm9aU0J1YVdObGMzUWdiM1YwY0hWME9seHVhbk52YmtScFptWXVkWE5sVEc5dVoyVnpkRlJ2YTJWdUlEMGdkSEoxWlR0Y2JseHVhbk52YmtScFptWXVkRzlyWlc1cGVtVWdQU0JzYVc1bFJHbG1aaTUwYjJ0bGJtbDZaVHRjYm1wemIyNUVhV1ptTG1OaGMzUkpibkIxZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJR052Ym5OMElIdDFibVJsWm1sdVpXUlNaWEJzWVdObGJXVnVkQ3dnYzNSeWFXNW5hV1o1VW1Wd2JHRmpaWElnUFNBb2F5d2dkaWtnUFQ0Z2RIbHdaVzltSUhZZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z2RXNWtaV1pwYm1Wa1VtVndiR0ZqWlcxbGJuUWdPaUIyZlNBOUlIUm9hWE11YjNCMGFXOXVjenRjYmx4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmMzUnlhVzVuSnlBL0lIWmhiSFZsSURvZ1NsTlBUaTV6ZEhKcGJtZHBabmtvWTJGdWIyNXBZMkZzYVhwbEtIWmhiSFZsTENCdWRXeHNMQ0J1ZFd4c0xDQnpkSEpwYm1kcFpubFNaWEJzWVdObGNpa3NJSE4wY21sdVoybG1lVkpsY0d4aFkyVnlMQ0FuSUNBbktUdGNibjA3WEc1cWMyOXVSR2xtWmk1bGNYVmhiSE1nUFNCbWRXNWpkR2x2Ymloc1pXWjBMQ0J5YVdkb2RDa2dlMXh1SUNCeVpYUjFjbTRnUkdsbVppNXdjbTkwYjNSNWNHVXVaWEYxWVd4ekxtTmhiR3dvYW5OdmJrUnBabVlzSUd4bFpuUXVjbVZ3YkdGalpTZ3ZMQ2hiWEZ4eVhGeHVYU2t2Wnl3Z0p5UXhKeWtzSUhKcFoyaDBMbkpsY0d4aFkyVW9MeXdvVzF4Y2NseGNibDBwTDJjc0lDY2tNU2NwS1R0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJrYVdabVNuTnZiaWh2YkdSUFltb3NJRzVsZDA5aWFpd2diM0IwYVc5dWN5a2dleUJ5WlhSMWNtNGdhbk52YmtScFptWXVaR2xtWmlodmJHUlBZbW9zSUc1bGQwOWlhaXdnYjNCMGFXOXVjeWs3SUgxY2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQm9ZVzVrYkdWeklIUm9aU0J3Y21WelpXNWpaU0J2WmlCamFYSmpkV3hoY2lCeVpXWmxjbVZ1WTJWeklHSjVJR0poYVd4cGJtY2diM1YwSUhkb1pXNGdaVzVqYjNWdWRHVnlhVzVuSUdGdVhHNHZMeUJ2WW1wbFkzUWdkR2hoZENCcGN5QmhiSEpsWVdSNUlHOXVJSFJvWlNCY0luTjBZV05yWENJZ2IyWWdhWFJsYlhNZ1ltVnBibWNnY0hKdlkyVnpjMlZrTGlCQlkyTmxjSFJ6SUdGdUlHOXdkR2x2Ym1Gc0lISmxjR3hoWTJWeVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kyRnViMjVwWTJGc2FYcGxLRzlpYWl3Z2MzUmhZMnNzSUhKbGNHeGhZMlZ0Wlc1MFUzUmhZMnNzSUhKbGNHeGhZMlZ5TENCclpYa3BJSHRjYmlBZ2MzUmhZMnNnUFNCemRHRmpheUI4ZkNCYlhUdGNiaUFnY21Wd2JHRmpaVzFsYm5SVGRHRmpheUE5SUhKbGNHeGhZMlZ0Wlc1MFUzUmhZMnNnZkh3Z1cxMDdYRzVjYmlBZ2FXWWdLSEpsY0d4aFkyVnlLU0I3WEc0Z0lDQWdiMkpxSUQwZ2NtVndiR0ZqWlhJb2EyVjVMQ0J2WW1vcE8xeHVJQ0I5WEc1Y2JpQWdiR1YwSUdrN1hHNWNiaUFnWm05eUlDaHBJRDBnTURzZ2FTQThJSE4wWVdOckxteGxibWQwYURzZ2FTQXJQU0F4S1NCN1hHNGdJQ0FnYVdZZ0tITjBZV05yVzJsZElEMDlQU0J2WW1vcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCeVpYQnNZV05sYldWdWRGTjBZV05yVzJsZE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHeGxkQ0JqWVc1dmJtbGpZV3hwZW1Wa1QySnFPMXh1WEc0Z0lHbG1JQ2duVzI5aWFtVmpkQ0JCY25KaGVWMG5JRDA5UFNCdlltcGxZM1JRY205MGIzUjVjR1ZVYjFOMGNtbHVaeTVqWVd4c0tHOWlhaWtwSUh0Y2JpQWdJQ0J6ZEdGamF5NXdkWE5vS0c5aWFpazdYRzRnSUNBZ1kyRnViMjVwWTJGc2FYcGxaRTlpYWlBOUlHNWxkeUJCY25KaGVTaHZZbW91YkdWdVozUm9LVHRjYmlBZ0lDQnlaWEJzWVdObGJXVnVkRk4wWVdOckxuQjFjMmdvWTJGdWIyNXBZMkZzYVhwbFpFOWlhaWs3WEc0Z0lDQWdabTl5SUNocElEMGdNRHNnYVNBOElHOWlhaTVzWlc1bmRHZzdJR2tnS3owZ01Ta2dlMXh1SUNBZ0lDQWdZMkZ1YjI1cFkyRnNhWHBsWkU5aWFsdHBYU0E5SUdOaGJtOXVhV05oYkdsNlpTaHZZbXBiYVYwc0lITjBZV05yTENCeVpYQnNZV05sYldWdWRGTjBZV05yTENCeVpYQnNZV05sY2l3Z2EyVjVLVHRjYmlBZ0lDQjlYRzRnSUNBZ2MzUmhZMnN1Y0c5d0tDazdYRzRnSUNBZ2NtVndiR0ZqWlcxbGJuUlRkR0ZqYXk1d2IzQW9LVHRjYmlBZ0lDQnlaWFIxY200Z1kyRnViMjVwWTJGc2FYcGxaRTlpYWp0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h2WW1vZ0ppWWdiMkpxTG5SdlNsTlBUaWtnZTF4dUlDQWdJRzlpYWlBOUlHOWlhaTUwYjBwVFQwNG9LVHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IySnFJRDA5UFNBbmIySnFaV04wSnlBbUppQnZZbW9nSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0J6ZEdGamF5NXdkWE5vS0c5aWFpazdYRzRnSUNBZ1kyRnViMjVwWTJGc2FYcGxaRTlpYWlBOUlIdDlPMXh1SUNBZ0lISmxjR3hoWTJWdFpXNTBVM1JoWTJzdWNIVnphQ2hqWVc1dmJtbGpZV3hwZW1Wa1QySnFLVHRjYmlBZ0lDQnNaWFFnYzI5eWRHVmtTMlY1Y3lBOUlGdGRMRnh1SUNBZ0lDQWdJQ0JyWlhrN1hHNGdJQ0FnWm05eUlDaHJaWGtnYVc0Z2IySnFLU0I3WEc0Z0lDQWdJQ0F2S2lCcGMzUmhibUoxYkNCcFoyNXZjbVVnWld4elpTQXFMMXh1SUNBZ0lDQWdhV1lnS0c5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUhOdmNuUmxaRXRsZVhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J6YjNKMFpXUkxaWGx6TG5OdmNuUW9LVHRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2MyOXlkR1ZrUzJWNWN5NXNaVzVuZEdnN0lHa2dLejBnTVNrZ2UxeHVJQ0FnSUNBZ2EyVjVJRDBnYzI5eWRHVmtTMlY1YzF0cFhUdGNiaUFnSUNBZ0lHTmhibTl1YVdOaGJHbDZaV1JQWW1wYmEyVjVYU0E5SUdOaGJtOXVhV05oYkdsNlpTaHZZbXBiYTJWNVhTd2djM1JoWTJzc0lISmxjR3hoWTJWdFpXNTBVM1JoWTJzc0lISmxjR3hoWTJWeUxDQnJaWGtwTzF4dUlDQWdJSDFjYmlBZ0lDQnpkR0ZqYXk1d2IzQW9LVHRjYmlBZ0lDQnlaWEJzWVdObGJXVnVkRk4wWVdOckxuQnZjQ2dwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdOaGJtOXVhV05oYkdsNlpXUlBZbW9nUFNCdlltbzdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHTmhibTl1YVdOaGJHbDZaV1JQWW1vN1hHNTlYRzRpWFgwPVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZMaW5lcyA9IGRpZmZMaW5lcztcbmV4cG9ydHMuZGlmZlRyaW1tZWRMaW5lcyA9IGRpZmZUcmltbWVkTGluZXM7XG5leHBvcnRzLmxpbmVEaWZmID0gdm9pZCAwO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSlcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX3BhcmFtcyA9IHJlcXVpcmUoXCIuLi91dGlsL3BhcmFtc1wiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhciBsaW5lRGlmZiA9IG5ld1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2Vcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5bXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cImRlZmF1bHRcIlxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbl0oKTtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuZXhwb3J0cy5saW5lRGlmZiA9IGxpbmVEaWZmO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xubGluZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHJldExpbmVzID0gW10sXG4gICAgICBsaW5lc0FuZE5ld2xpbmVzID0gdmFsdWUuc3BsaXQoLyhcXG58XFxyXFxuKS8pOyAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcblxuICBpZiAoIWxpbmVzQW5kTmV3bGluZXNbbGluZXNBbmROZXdsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XG4gIH0gLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXSArPSBsaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmZ1bmN0aW9uIGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZGlmZlRyaW1tZWRMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgdmFyIG9wdGlvbnMgPVxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICgwLFxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgX3BhcmFtc1xuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgZ2VuZXJhdGVPcHRpb25zKVxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAoY2FsbGJhY2ssIHtcbiAgICBpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwyeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sc2liR2x1WlVScFptWWlMQ0pFYVdabUlpd2lkRzlyWlc1cGVtVWlMQ0oyWVd4MVpTSXNJbkpsZEV4cGJtVnpJaXdpYkdsdVpYTkJibVJPWlhkc2FXNWxjeUlzSW5Od2JHbDBJaXdpYkdWdVozUm9JaXdpY0c5d0lpd2lhU0lzSW14cGJtVWlMQ0p2Y0hScGIyNXpJaXdpYm1WM2JHbHVaVWx6Vkc5clpXNGlMQ0pwWjI1dmNtVlhhR2wwWlhOd1lXTmxJaXdpZEhKcGJTSXNJbkIxYzJnaUxDSmthV1ptVEdsdVpYTWlMQ0p2YkdSVGRISWlMQ0p1WlhkVGRISWlMQ0pqWVd4c1ltRmpheUlzSW1ScFptWWlMQ0prYVdabVZISnBiVzFsWkV4cGJtVnpJaXdpWjJWdVpYSmhkR1ZQY0hScGIyNXpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRMEU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN096czdRVUZGVHl4SlFVRk5RU3hSUVVGUkxFZEJRVWM3UVVGQlNVTTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFc1EwRkJTaXhGUVVGcVFqczdPenM3TzBGQlExQkVMRkZCUVZFc1EwRkJRMFVzVVVGQlZDeEhRVUZ2UWl4VlFVRlRReXhMUVVGVUxFVkJRV2RDTzBGQlEyeERMRTFCUVVsRExGRkJRVkVzUjBGQlJ5eEZRVUZtTzBGQlFVRXNUVUZEU1VNc1owSkJRV2RDTEVkQlFVZEdMRXRCUVVzc1EwRkJRMGNzUzBGQlRpeERRVUZaTEZkQlFWb3NRMEZFZGtJc1EwRkVhME1zUTBGSmJFTTdPMEZCUTBFc1RVRkJTU3hEUVVGRFJDeG5Ra0ZCWjBJc1EwRkJRMEVzWjBKQlFXZENMRU5CUVVORkxFMUJRV3BDTEVkQlFUQkNMRU5CUVROQ0xFTkJRWEpDTEVWQlFXOUVPMEZCUTJ4RVJpeEpRVUZCUVN4blFrRkJaMElzUTBGQlEwY3NSMEZCYWtJN1FVRkRSQ3hIUVZCcFF5eERRVk5zUXpzN08wRkJRMEVzVDBGQlN5eEpRVUZKUXl4RFFVRkRMRWRCUVVjc1EwRkJZaXhGUVVGblFrRXNRMEZCUXl4SFFVRkhTaXhuUWtGQlowSXNRMEZCUTBVc1RVRkJja01zUlVGQk5rTkZMRU5CUVVNc1JVRkJPVU1zUlVGQmEwUTdRVUZEYUVRc1VVRkJTVU1zU1VGQlNTeEhRVUZIVEN4blFrRkJaMElzUTBGQlEwa3NRMEZCUkN4RFFVRXpRanM3UVVGRlFTeFJRVUZKUVN4RFFVRkRMRWRCUVVjc1EwRkJTaXhKUVVGVExFTkJRVU1zUzBGQlMwVXNUMEZCVEN4RFFVRmhReXhqUVVFelFpeEZRVUV5UXp0QlFVTjZRMUlzVFVGQlFVRXNVVUZCVVN4RFFVRkRRU3hSUVVGUkxFTkJRVU5ITEUxQlFWUXNSMEZCYTBJc1EwRkJia0lzUTBGQlVpeEpRVUZwUTBjc1NVRkJha003UVVGRFJDeExRVVpFTEUxQlJVODdRVUZEVEN4VlFVRkpMRXRCUVV0RExFOUJRVXdzUTBGQllVVXNaMEpCUVdwQ0xFVkJRVzFETzBGQlEycERTQ3hSUVVGQlFTeEpRVUZKTEVkQlFVZEJMRWxCUVVrc1EwRkJRMGtzU1VGQlRDeEZRVUZRTzBGQlEwUTdPMEZCUTBSV0xFMUJRVUZCTEZGQlFWRXNRMEZCUTFjc1NVRkJWQ3hEUVVGalRDeEpRVUZrTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hUUVVGUFRpeFJRVUZRTzBGQlEwUXNRMEY0UWtRN08wRkJNRUpQTEZOQlFWTlpMRk5CUVZRc1EwRkJiVUpETEUxQlFXNUNMRVZCUVRKQ1F5eE5RVUV6UWl4RlFVRnRRME1zVVVGQmJrTXNSVUZCTmtNN1FVRkJSU3hUUVVGUGJrSXNVVUZCVVN4RFFVRkRiMElzU1VGQlZDeERRVUZqU0N4TlFVRmtMRVZCUVhOQ1F5eE5RVUYwUWl4RlFVRTRRa01zVVVGQk9VSXNRMEZCVUR0QlFVRnBSRHM3UVVGRGFFY3NVMEZCVTBVc1owSkJRVlFzUTBGQk1FSktMRTFCUVRGQ0xFVkJRV3REUXl4TlFVRnNReXhGUVVFd1EwTXNVVUZCTVVNc1JVRkJiMFE3UVVGRGVrUXNUVUZCU1ZJc1QwRkJUenRCUVVGSE8wRkJRVUU3UVVGQlFUczdRVUZCUVZjN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVR0QlFVRkJMRWRCUVdkQ1NDeFJRVUZvUWl4RlFVRXdRanRCUVVGRFRpeEpRVUZCUVN4blFrRkJaMElzUlVGQlJUdEJRVUZ1UWl4SFFVRXhRaXhEUVVGa08wRkJRMEVzVTBGQlQySXNVVUZCVVN4RFFVRkRiMElzU1VGQlZDeERRVUZqU0N4TlFVRmtMRVZCUVhOQ1F5eE5RVUYwUWl4RlFVRTRRbEFzVDBGQk9VSXNRMEZCVUR0QlFVTkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRVJwWm1ZZ1puSnZiU0FuTGk5aVlYTmxKenRjYm1sdGNHOXlkQ0I3WjJWdVpYSmhkR1ZQY0hScGIyNXpmU0JtY205dElDY3VMaTkxZEdsc0wzQmhjbUZ0Y3ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2FXNWxSR2xtWmlBOUlHNWxkeUJFYVdabUtDazdYRzVzYVc1bFJHbG1aaTUwYjJ0bGJtbDZaU0E5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lHeGxkQ0J5WlhSTWFXNWxjeUE5SUZ0ZExGeHVJQ0FnSUNBZ2JHbHVaWE5CYm1ST1pYZHNhVzVsY3lBOUlIWmhiSFZsTG5Od2JHbDBLQzhvWEZ4dWZGeGNjbHhjYmlrdktUdGNibHh1SUNBdkx5QkpaMjV2Y21VZ2RHaGxJR1pwYm1Gc0lHVnRjSFI1SUhSdmEyVnVJSFJvWVhRZ2IyTmpkWEp6SUdsbUlIUm9aU0J6ZEhKcGJtY2daVzVrY3lCM2FYUm9JR0VnYm1WM0lHeHBibVZjYmlBZ2FXWWdLQ0ZzYVc1bGMwRnVaRTVsZDJ4cGJtVnpXMnhwYm1WelFXNWtUbVYzYkdsdVpYTXViR1Z1WjNSb0lDMGdNVjBwSUh0Y2JpQWdJQ0JzYVc1bGMwRnVaRTVsZDJ4cGJtVnpMbkJ2Y0NncE8xeHVJQ0I5WEc1Y2JpQWdMeThnVFdWeVoyVWdkR2hsSUdOdmJuUmxiblFnWVc1a0lHeHBibVVnYzJWd1lYSmhkRzl5Y3lCcGJuUnZJSE5wYm1kc1pTQjBiMnRsYm5OY2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JzYVc1bGMwRnVaRTVsZDJ4cGJtVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYkdWMElHeHBibVVnUFNCc2FXNWxjMEZ1WkU1bGQyeHBibVZ6VzJsZE8xeHVYRzRnSUNBZ2FXWWdLR2tnSlNBeUlDWW1JQ0YwYUdsekxtOXdkR2x2Ym5NdWJtVjNiR2x1WlVselZHOXJaVzRwSUh0Y2JpQWdJQ0FnSUhKbGRFeHBibVZ6VzNKbGRFeHBibVZ6TG14bGJtZDBhQ0F0SURGZElDczlJR3hwYm1VN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVhV2R1YjNKbFYyaHBkR1Z6Y0dGalpTa2dlMXh1SUNBZ0lDQWdJQ0JzYVc1bElEMGdiR2x1WlM1MGNtbHRLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSTWFXNWxjeTV3ZFhOb0tHeHBibVVwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ5WlhSTWFXNWxjenRjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmthV1ptVEdsdVpYTW9iMnhrVTNSeUxDQnVaWGRUZEhJc0lHTmhiR3hpWVdOcktTQjdJSEpsZEhWeWJpQnNhVzVsUkdsbVppNWthV1ptS0c5c1pGTjBjaXdnYm1WM1UzUnlMQ0JqWVd4c1ltRmpheWs3SUgxY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCa2FXWm1WSEpwYlcxbFpFeHBibVZ6S0c5c1pGTjBjaXdnYm1WM1UzUnlMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQnNaWFFnYjNCMGFXOXVjeUE5SUdkbGJtVnlZWFJsVDNCMGFXOXVjeWhqWVd4c1ltRmpheXdnZTJsbmJtOXlaVmRvYVhSbGMzQmhZMlU2SUhSeWRXVjlLVHRjYmlBZ2NtVjBkWEp1SUd4cGJtVkVhV1ptTG1ScFptWW9iMnhrVTNSeUxDQnVaWGRUZEhJc0lHOXdkR2x2Ym5NcE8xeHVmVnh1SWwxOVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZTZW50ZW5jZXMgPSBkaWZmU2VudGVuY2VzO1xuZXhwb3J0cy5zZW50ZW5jZURpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhciBzZW50ZW5jZURpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMuc2VudGVuY2VEaWZmID0gc2VudGVuY2VEaWZmO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuc2VudGVuY2VEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvKFxcUy4rP1suIT9dKSg/PVxccyt8JCkvKTtcbn07XG5cbmZ1bmN0aW9uIGRpZmZTZW50ZW5jZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBzZW50ZW5jZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a2FXWm1MM05sYm5SbGJtTmxMbXB6SWwwc0ltNWhiV1Z6SWpwYkluTmxiblJsYm1ObFJHbG1aaUlzSWtScFptWWlMQ0owYjJ0bGJtbDZaU0lzSW5aaGJIVmxJaXdpYzNCc2FYUWlMQ0prYVdabVUyVnVkR1Z1WTJWeklpd2liMnhrVTNSeUlpd2libVYzVTNSeUlpd2lZMkZzYkdKaFkyc2lMQ0prYVdabUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3T3pzN1FVRkhUeXhKUVVGTlFTeFpRVUZaTEVkQlFVYzdRVUZCU1VNN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzUTBGQlNpeEZRVUZ5UWpzN096czdPMEZCUTFCRUxGbEJRVmtzUTBGQlEwVXNVVUZCWWl4SFFVRjNRaXhWUVVGVFF5eExRVUZVTEVWQlFXZENPMEZCUTNSRExGTkJRVTlCTEV0QlFVc3NRMEZCUTBNc1MwRkJUaXhEUVVGWkxIVkNRVUZhTEVOQlFWQTdRVUZEUkN4RFFVWkVPenRCUVVsUExGTkJRVk5ETEdGQlFWUXNRMEZCZFVKRExFMUJRWFpDTEVWQlFTdENReXhOUVVFdlFpeEZRVUYxUTBNc1VVRkJka01zUlVGQmFVUTdRVUZCUlN4VFFVRlBVaXhaUVVGWkxFTkJRVU5UTEVsQlFXSXNRMEZCYTBKSUxFMUJRV3hDTEVWQlFUQkNReXhOUVVFeFFpeEZRVUZyUTBNc1VVRkJiRU1zUTBGQlVEdEJRVUZ4UkNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCRWFXWm1JR1p5YjIwZ0p5NHZZbUZ6WlNjN1hHNWNibHh1Wlhod2IzSjBJR052Ym5OMElITmxiblJsYm1ObFJHbG1aaUE5SUc1bGR5QkVhV1ptS0NrN1hHNXpaVzUwWlc1alpVUnBabVl1ZEc5clpXNXBlbVVnUFNCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2RtRnNkV1V1YzNCc2FYUW9MeWhjWEZNdUt6OWJMaUUvWFNrb1B6MWNYSE1yZkNRcEx5azdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pHbG1abE5sYm5SbGJtTmxjeWh2YkdSVGRISXNJRzVsZDFOMGNpd2dZMkZzYkdKaFkyc3BJSHNnY21WMGRYSnVJSE5sYm5SbGJtTmxSR2xtWmk1a2FXWm1LRzlzWkZOMGNpd2dibVYzVTNSeUxDQmpZV3hzWW1GamF5azdJSDFjYmlKZGZRPT1cbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kaWZmV29yZHMgPSBkaWZmV29yZHM7XG5leHBvcnRzLmRpZmZXb3Jkc1dpdGhTcGFjZSA9IGRpZmZXb3Jkc1dpdGhTcGFjZTtcbmV4cG9ydHMud29yZERpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fcGFyYW1zID0gcmVxdWlyZShcIi4uL3V0aWwvcGFyYW1zXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuLy8gQmFzZWQgb24gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fc2NyaXB0X2luX1VuaWNvZGVcbi8vXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4vLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4vLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0Zcbi8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbi8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbi8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4vLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4vLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4vLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcbnZhciBleHRlbmRlZFdvcmRDaGFycyA9IC9eW0EtWmEtelxceEMwLVxcdTAyQzZcXHUwMkM4LVxcdTAyRDdcXHUwMkRFLVxcdTAyRkZcXHUxRTAwLVxcdTFFRkZdKyQvO1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xudmFyIHdvcmREaWZmID0gbmV3XG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbltcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwiZGVmYXVsdFwiXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXSgpO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5leHBvcnRzLndvcmREaWZmID0gd29yZERpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG53b3JkRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgdGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCk7XG59O1xuXG53b3JkRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAvLyBBbGwgd2hpdGVzcGFjZSBzeW1ib2xzIGV4Y2VwdCBuZXdsaW5lIGdyb3VwIGludG8gb25lIHRva2VuLCBlYWNoIG5ld2xpbmUgLSBpbiBzZXBhcmF0ZSB0b2tlblxuICB2YXIgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhbXlxcU1xcclxcbl0rfFsoKVtcXF17fSdcIlxcclxcbl18XFxiKS8pOyAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgaW4gdGhlIG5leHQgZmllbGQgYW5kIHdlIGhhdmUgb25seSB3b3JkIGNoYXJzIGJlZm9yZSBhbmQgYWZ0ZXIsIG1lcmdlXG4gICAgaWYgKCF0b2tlbnNbaSArIDFdICYmIHRva2Vuc1tpICsgMl0gJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pICYmIGV4dGVuZGVkV29yZENoYXJzLnRlc3QodG9rZW5zW2kgKyAyXSkpIHtcbiAgICAgIHRva2Vuc1tpXSArPSB0b2tlbnNbaSArIDJdO1xuICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMik7XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn07XG5cbmZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID1cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAoMCxcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIF9wYXJhbXNcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgLlxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIGdlbmVyYXRlT3B0aW9ucylcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgKG9wdGlvbnMsIHtcbiAgICBpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwzZHZjbVF1YW5NaVhTd2libUZ0WlhNaU9sc2laWGgwWlc1a1pXUlhiM0prUTJoaGNuTWlMQ0p5WlZkb2FYUmxjM0JoWTJVaUxDSjNiM0prUkdsbVppSXNJa1JwWm1ZaUxDSmxjWFZoYkhNaUxDSnNaV1owSWl3aWNtbG5hSFFpTENKdmNIUnBiMjV6SWl3aWFXZHViM0psUTJGelpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aWFXZHViM0psVjJocGRHVnpjR0ZqWlNJc0luUmxjM1FpTENKMGIydGxibWw2WlNJc0luWmhiSFZsSWl3aWRHOXJaVzV6SWl3aWMzQnNhWFFpTENKcElpd2liR1Z1WjNSb0lpd2ljM0JzYVdObElpd2laR2xtWmxkdmNtUnpJaXdpYjJ4a1UzUnlJaXdpYm1WM1UzUnlJaXdpWjJWdVpYSmhkR1ZQY0hScGIyNXpJaXdpWkdsbVppSXNJbVJwWm1aWGIzSmtjMWRwZEdoVGNHRmpaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5CTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN096czdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzYVVKQlFXbENMRWRCUVVjc0swUkJRVEZDTzBGQlJVRXNTVUZCVFVNc1dVRkJXU3hIUVVGSExFbEJRWEpDTzBGQlJVOHNTVUZCVFVNc1VVRkJVU3hIUVVGSE8wRkJRVWxETzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJMRU5CUVVvc1JVRkJha0k3T3pzN096dEJRVU5RUkN4UlFVRlJMRU5CUVVORkxFMUJRVlFzUjBGQmEwSXNWVUZCVTBNc1NVRkJWQ3hGUVVGbFF5eExRVUZtTEVWQlFYTkNPMEZCUTNSRExFMUJRVWtzUzBGQlMwTXNUMEZCVEN4RFFVRmhReXhWUVVGcVFpeEZRVUUyUWp0QlFVTXpRa2dzU1VGQlFVRXNTVUZCU1N4SFFVRkhRU3hKUVVGSkxFTkJRVU5KTEZkQlFVd3NSVUZCVUR0QlFVTkJTQ3hKUVVGQlFTeExRVUZMTEVkQlFVZEJMRXRCUVVzc1EwRkJRMGNzVjBGQlRpeEZRVUZTTzBGQlEwUTdPMEZCUTBRc1UwRkJUMG9zU1VGQlNTeExRVUZMUXl4TFFVRlVMRWxCUVcxQ0xFdEJRVXRETEU5QlFVd3NRMEZCWVVjc1owSkJRV0lzU1VGQmFVTXNRMEZCUTFRc1dVRkJXU3hEUVVGRFZTeEpRVUZpTEVOQlFXdENUaXhKUVVGc1FpeERRVUZzUXl4SlFVRTJSQ3hEUVVGRFNpeFpRVUZaTEVOQlFVTlZMRWxCUVdJc1EwRkJhMEpNTEV0QlFXeENMRU5CUVhoR08wRkJRMFFzUTBGT1JEczdRVUZQUVVvc1VVRkJVU3hEUVVGRFZTeFJRVUZVTEVkQlFXOUNMRlZCUVZORExFdEJRVlFzUlVGQlowSTdRVUZEYkVNN1FVRkRRU3hOUVVGSlF5eE5RVUZOTEVkQlFVZEVMRXRCUVVzc1EwRkJRMFVzUzBGQlRpeERRVUZaTEdsRFFVRmFMRU5CUVdJc1EwRkdhME1zUTBGSmJFTTdPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eERRVUZETEVkQlFVY3NRMEZCWWl4RlFVRm5Ra0VzUTBGQlF5eEhRVUZIUml4TlFVRk5MRU5CUVVOSExFMUJRVkFzUjBGQlowSXNRMEZCY0VNc1JVRkJkVU5FTEVOQlFVTXNSVUZCZUVNc1JVRkJORU03UVVGRE1VTTdRVUZEUVN4UlFVRkpMRU5CUVVOR0xFMUJRVTBzUTBGQlEwVXNRMEZCUXl4SFFVRkhMRU5CUVV3c1EwRkJVQ3hKUVVGclFrWXNUVUZCVFN4RFFVRkRSU3hEUVVGRExFZEJRVWNzUTBGQlRDeERRVUY0UWl4SlFVTkxhRUlzYVVKQlFXbENMRU5CUVVOWExFbEJRV3hDTEVOQlFYVkNSeXhOUVVGTkxFTkJRVU5GTEVOQlFVUXNRMEZCTjBJc1EwRkVUQ3hKUVVWTGFFSXNhVUpCUVdsQ0xFTkJRVU5YTEVsQlFXeENMRU5CUVhWQ1J5eE5RVUZOTEVOQlFVTkZMRU5CUVVNc1IwRkJSeXhEUVVGTUxFTkJRVGRDTEVOQlJsUXNSVUZGWjBRN1FVRkRPVU5HTEUxQlFVRkJMRTFCUVUwc1EwRkJRMFVzUTBGQlJDeERRVUZPTEVsQlFXRkdMRTFCUVUwc1EwRkJRMFVzUTBGQlF5eEhRVUZITEVOQlFVd3NRMEZCYmtJN1FVRkRRVVlzVFVGQlFVRXNUVUZCVFN4RFFVRkRTU3hOUVVGUUxFTkJRV05HTEVOQlFVTXNSMEZCUnl4RFFVRnNRaXhGUVVGeFFpeERRVUZ5UWp0QlFVTkJRU3hOUVVGQlFTeERRVUZETzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUFJpeE5RVUZRTzBGQlEwUXNRMEZxUWtRN08wRkJiVUpQTEZOQlFWTkxMRk5CUVZRc1EwRkJiVUpETEUxQlFXNUNMRVZCUVRKQ1F5eE5RVUV6UWl4RlFVRnRRMlFzVDBGQmJrTXNSVUZCTkVNN1FVRkRha1JCTEVWQlFVRkJMRTlCUVU4N1FVRkJSenRCUVVGQk8wRkJRVUU3TzBGQlFVRmxPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRTdRVUZCUVN4SFFVRm5RbVlzVDBGQmFFSXNSVUZCZVVJN1FVRkJRMGNzU1VGQlFVRXNaMEpCUVdkQ0xFVkJRVVU3UVVGQmJrSXNSMEZCZWtJc1EwRkJWanRCUVVOQkxGTkJRVTlTTEZGQlFWRXNRMEZCUTNGQ0xFbEJRVlFzUTBGQlkwZ3NUVUZCWkN4RlFVRnpRa01zVFVGQmRFSXNSVUZCT0VKa0xFOUJRVGxDTEVOQlFWQTdRVUZEUkRzN1FVRkZUU3hUUVVGVGFVSXNhMEpCUVZRc1EwRkJORUpLTEUxQlFUVkNMRVZCUVc5RFF5eE5RVUZ3UXl4RlFVRTBRMlFzVDBGQk5VTXNSVUZCY1VRN1FVRkRNVVFzVTBGQlQwd3NVVUZCVVN4RFFVRkRjVUlzU1VGQlZDeERRVUZqU0N4TlFVRmtMRVZCUVhOQ1F5eE5RVUYwUWl4RlFVRTRRbVFzVDBGQk9VSXNRMEZCVUR0QlFVTkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRVJwWm1ZZ1puSnZiU0FuTGk5aVlYTmxKenRjYm1sdGNHOXlkQ0I3WjJWdVpYSmhkR1ZQY0hScGIyNXpmU0JtY205dElDY3VMaTkxZEdsc0wzQmhjbUZ0Y3ljN1hHNWNiaTh2SUVKaGMyVmtJRzl1SUdoMGRIQnpPaTh2Wlc0dWQybHJhWEJsWkdsaExtOXlaeTkzYVd0cEwweGhkR2x1WDNOamNtbHdkRjlwYmw5VmJtbGpiMlJsWEc0dkwxeHVMeThnVW1GdVoyVnpJR0Z1WkNCbGVHTmxjSFJwYjI1ek9seHVMeThnVEdGMGFXNHRNU0JUZFhCd2JHVnRaVzUwTENBd01EZ3c0b0NUTURCR1JseHVMeThnSUMwZ1ZTc3dNRVEzSUNERGx5Qk5kV3gwYVhCc2FXTmhkR2x2YmlCemFXZHVYRzR2THlBZ0xTQlZLekF3UmpjZ0lNTzNJRVJwZG1semFXOXVJSE5wWjI1Y2JpOHZJRXhoZEdsdUlFVjRkR1Z1WkdWa0xVRXNJREF4TUREaWdKTXdNVGRHWEc0dkx5Qk1ZWFJwYmlCRmVIUmxibVJsWkMxQ0xDQXdNVGd3NG9DVE1ESTBSbHh1THk4Z1NWQkJJRVY0ZEdWdWMybHZibk1zSURBeU5URGlnSk13TWtGR1hHNHZMeUJUY0dGamFXNW5JRTF2WkdsbWFXVnlJRXhsZEhSbGNuTXNJREF5UWpEaWdKTXdNa1pHWEc0dkx5QWdMU0JWS3pBeVF6Y2dJTXVISUNZak56RXhPeUFnUTJGeWIyNWNiaTh2SUNBdElGVXJNREpFT0NBZ3k1Z2dKaU0zTWpnN0lDQkNjbVYyWlZ4dUx5OGdJQzBnVlNzd01rUTVJQ0RMbVNBbUl6Y3lPVHNnSUVSdmRDQkJZbTkyWlZ4dUx5OGdJQzBnVlNzd01rUkJJQ0RMbWlBbUl6Y3pNRHNnSUZKcGJtY2dRV0p2ZG1WY2JpOHZJQ0F0SUZVck1ESkVRaUFneTVzZ0ppTTNNekU3SUNCUFoyOXVaV3RjYmk4dklDQXRJRlVyTURKRVF5QWd5NXdnSmlNM016STdJQ0JUYldGc2JDQlVhV3hrWlZ4dUx5OGdJQzBnVlNzd01rUkVJQ0RMblNBbUl6Y3pNenNnSUVSdmRXSnNaU0JCWTNWMFpTQkJZMk5sYm5SY2JpOHZJRXhoZEdsdUlFVjRkR1Z1WkdWa0lFRmtaR2wwYVc5dVlXd3NJREZGTUREaWdKTXhSVVpHWEc1amIyNXpkQ0JsZUhSbGJtUmxaRmR2Y21SRGFHRnljeUE5SUM5ZVcyRXRla0V0V2x4Y2RYdERNSDB0WEZ4MWUwWkdmVnhjZFh0RU9IMHRYRngxZTBZMmZWeGNkWHRHT0gwdFhGeDFlekpETm4xY1hIVjdNa000ZlMxY1hIVjdNa1EzZlZ4Y2RYc3lSRVY5TFZ4Y2RYc3lSa1o5WEZ4MWV6RkZNREI5TFZ4Y2RYc3hSVVpHZlYwckpDOTFPMXh1WEc1amIyNXpkQ0J5WlZkb2FYUmxjM0JoWTJVZ1BTQXZYRnhUTHp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkdmNtUkVhV1ptSUQwZ2JtVjNJRVJwWm1Zb0tUdGNibmR2Y21SRWFXWm1MbVZ4ZFdGc2N5QTlJR1oxYm1OMGFXOXVLR3hsWm5Rc0lISnBaMmgwS1NCN1hHNGdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVhV2R1YjNKbFEyRnpaU2tnZTF4dUlDQWdJR3hsWm5RZ1BTQnNaV1owTG5SdlRHOTNaWEpEWVhObEtDazdYRzRnSUNBZ2NtbG5hSFFnUFNCeWFXZG9kQzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCc1pXWjBJRDA5UFNCeWFXZG9kQ0I4ZkNBb2RHaHBjeTV2Y0hScGIyNXpMbWxuYm05eVpWZG9hWFJsYzNCaFkyVWdKaVlnSVhKbFYyaHBkR1Z6Y0dGalpTNTBaWE4wS0d4bFpuUXBJQ1ltSUNGeVpWZG9hWFJsYzNCaFkyVXVkR1Z6ZENoeWFXZG9kQ2twTzF4dWZUdGNibmR2Y21SRWFXWm1MblJ2YTJWdWFYcGxJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHRjYmlBZ0x5OGdRV3hzSUhkb2FYUmxjM0JoWTJVZ2MzbHRZbTlzY3lCbGVHTmxjSFFnYm1WM2JHbHVaU0JuY205MWNDQnBiblJ2SUc5dVpTQjBiMnRsYml3Z1pXRmphQ0J1Wlhkc2FXNWxJQzBnYVc0Z2MyVndZWEpoZEdVZ2RHOXJaVzVjYmlBZ2JHVjBJSFJ2YTJWdWN5QTlJSFpoYkhWbExuTndiR2wwS0M4b1cxNWNYRk5jWEhKY1hHNWRLM3hiS0NsYlhGeGRlMzBuWENKY1hISmNYRzVkZkZ4Y1lpa3ZLVHRjYmx4dUlDQXZMeUJLYjJsdUlIUm9aU0JpYjNWdVpHRnllU0J6Y0d4cGRITWdkR2hoZENCM1pTQmtieUJ1YjNRZ1kyOXVjMmxrWlhJZ2RHOGdZbVVnWW05MWJtUmhjbWxsY3k0Z1ZHaHBjeUJwY3lCd2NtbHRZWEpwYkhrZ2RHaGxJR1Y0ZEdWdVpHVmtJRXhoZEdsdUlHTm9ZWEpoWTNSbGNpQnpaWFF1WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkRzlyWlc1ekxteGxibWQwYUNBdElERTdJR2tyS3lrZ2UxeHVJQ0FnSUM4dklFbG1JSGRsSUdoaGRtVWdZVzRnWlcxd2RIa2djM1J5YVc1bklHbHVJSFJvWlNCdVpYaDBJR1pwWld4a0lHRnVaQ0IzWlNCb1lYWmxJRzl1YkhrZ2QyOXlaQ0JqYUdGeWN5QmlaV1p2Y21VZ1lXNWtJR0ZtZEdWeUxDQnRaWEpuWlZ4dUlDQWdJR2xtSUNnaGRHOXJaVzV6VzJrZ0t5QXhYU0FtSmlCMGIydGxibk5iYVNBcklESmRYRzRnSUNBZ0lDQWdJQ0FnSmlZZ1pYaDBaVzVrWldSWGIzSmtRMmhoY25NdWRHVnpkQ2gwYjJ0bGJuTmJhVjBwWEc0Z0lDQWdJQ0FnSUNBZ0ppWWdaWGgwWlc1a1pXUlhiM0prUTJoaGNuTXVkR1Z6ZENoMGIydGxibk5iYVNBcklESmRLU2tnZTF4dUlDQWdJQ0FnZEc5clpXNXpXMmxkSUNzOUlIUnZhMlZ1YzF0cElDc2dNbDA3WEc0Z0lDQWdJQ0IwYjJ0bGJuTXVjM0JzYVdObEtHa2dLeUF4TENBeUtUdGNiaUFnSUNBZ0lHa3RMVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkRzlyWlc1ek8xeHVmVHRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdScFptWlhiM0prY3lodmJHUlRkSElzSUc1bGQxTjBjaXdnYjNCMGFXOXVjeWtnZTF4dUlDQnZjSFJwYjI1eklEMGdaMlZ1WlhKaGRHVlBjSFJwYjI1ektHOXdkR2x2Ym5Nc0lIdHBaMjV2Y21WWGFHbDBaWE53WVdObE9pQjBjblZsZlNrN1hHNGdJSEpsZEhWeWJpQjNiM0prUkdsbVppNWthV1ptS0c5c1pGTjBjaXdnYm1WM1UzUnlMQ0J2Y0hScGIyNXpLVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHUnBabVpYYjNKa2MxZHBkR2hUY0dGalpTaHZiR1JUZEhJc0lHNWxkMU4wY2l3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdkMjl5WkVScFptWXVaR2xtWmlodmJHUlRkSElzSUc1bGQxTjBjaXdnYjNCMGFXOXVjeWs3WEc1OVhHNGlYWDA9XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRpZmZcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Jhc2VbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZDaGFyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY2hhcmFjdGVyLmRpZmZDaGFycztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkaWZmV29yZHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dvcmQuZGlmZldvcmRzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZXb3Jkc1dpdGhTcGFjZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd29yZC5kaWZmV29yZHNXaXRoU3BhY2U7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGlmZkxpbmVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9saW5lLmRpZmZMaW5lcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkaWZmVHJpbW1lZExpbmVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9saW5lLmRpZmZUcmltbWVkTGluZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGlmZlNlbnRlbmNlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2VudGVuY2UuZGlmZlNlbnRlbmNlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkaWZmQ3NzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jc3MuZGlmZkNzcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkaWZmSnNvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfanNvbi5kaWZmSnNvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjYW5vbmljYWxpemVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2pzb24uY2Fub25pY2FsaXplO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZBcnJheXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FycmF5LmRpZmZBcnJheXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXBwbHlQYXRjaFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYXBwbHkuYXBwbHlQYXRjaDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseVBhdGNoZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FwcGx5LmFwcGx5UGF0Y2hlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVBhdGNoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5wYXJzZVBhdGNoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1lcmdlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tZXJnZS5tZXJnZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJ1Y3R1cmVkUGF0Y2hcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NyZWF0ZS5zdHJ1Y3R1cmVkUGF0Y2g7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlVHdvRmlsZXNQYXRjaFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY3JlYXRlLmNyZWF0ZVR3b0ZpbGVzUGF0Y2g7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlUGF0Y2hcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NyZWF0ZS5jcmVhdGVQYXRjaDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjb252ZXJ0Q2hhbmdlc1RvRE1QXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kbXAuY29udmVydENoYW5nZXNUb0RNUDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjb252ZXJ0Q2hhbmdlc1RvWE1MXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF94bWwuY29udmVydENoYW5nZXNUb1hNTDtcbiAgfVxufSk7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kaWZmL2Jhc2VcIikpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9jaGFyYWN0ZXIgPSByZXF1aXJlKFwiLi9kaWZmL2NoYXJhY3RlclwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fd29yZCA9IHJlcXVpcmUoXCIuL2RpZmYvd29yZFwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fbGluZSA9IHJlcXVpcmUoXCIuL2RpZmYvbGluZVwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fc2VudGVuY2UgPSByZXF1aXJlKFwiLi9kaWZmL3NlbnRlbmNlXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9jc3MgPSByZXF1aXJlKFwiLi9kaWZmL2Nzc1wiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fanNvbiA9IHJlcXVpcmUoXCIuL2RpZmYvanNvblwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYXJyYXkgPSByZXF1aXJlKFwiLi9kaWZmL2FycmF5XCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9hcHBseSA9IHJlcXVpcmUoXCIuL3BhdGNoL2FwcGx5XCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9wYXJzZSA9IHJlcXVpcmUoXCIuL3BhdGNoL3BhcnNlXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9tZXJnZSA9IHJlcXVpcmUoXCIuL3BhdGNoL21lcmdlXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9jcmVhdGUgPSByZXF1aXJlKFwiLi9wYXRjaC9jcmVhdGVcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2RtcCA9IHJlcXVpcmUoXCIuL2NvbnZlcnQvZG1wXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl94bWwgPSByZXF1aXJlKFwiLi9jb252ZXJ0L3htbFwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFXZENRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGRFFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUlVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZEUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVVZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJSVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRkRRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGRlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lCVFpXVWdURWxEUlU1VFJTQm1hV3hsSUdadmNpQjBaWEp0Y3lCdlppQjFjMlVnS2k5Y2JseHVMeXBjYmlBcUlGUmxlSFFnWkdsbVppQnBiWEJzWlcxbGJuUmhkR2x2Ymk1Y2JpQXFYRzRnS2lCVWFHbHpJR3hwWW5KaGNua2djM1Z3Y0c5eWRITWdkR2hsSUdadmJHeHZkMmx1WnlCQlVFbFRPbHh1SUNvZ1NuTkVhV1ptTG1ScFptWkRhR0Z5Y3pvZ1EyaGhjbUZqZEdWeUlHSjVJR05vWVhKaFkzUmxjaUJrYVdabVhHNGdLaUJLYzBScFptWXVaR2xtWmxkdmNtUnpPaUJYYjNKa0lDaGhjeUJrWldacGJtVmtJR0o1SUZ4Y1lpQnlaV2RsZUNrZ1pHbG1aaUIzYUdsamFDQnBaMjV2Y21WeklIZG9hWFJsYzNCaFkyVmNiaUFxSUVwelJHbG1aaTVrYVdabVRHbHVaWE02SUV4cGJtVWdZbUZ6WldRZ1pHbG1abHh1SUNwY2JpQXFJRXB6UkdsbVppNWthV1ptUTNOek9pQkVhV1ptSUhSaGNtZGxkR1ZrSUdGMElFTlRVeUJqYjI1MFpXNTBYRzRnS2x4dUlDb2dWR2hsYzJVZ2JXVjBhRzlrY3lCaGNtVWdZbUZ6WldRZ2IyNGdkR2hsSUdsdGNHeGxiV1Z1ZEdGMGFXOXVJSEJ5YjNCdmMyVmtJR2x1WEc0Z0tpQmNJa0Z1SUU4b1RrUXBJRVJwWm1abGNtVnVZMlVnUVd4bmIzSnBkR2h0SUdGdVpDQnBkSE1nVm1GeWFXRjBhVzl1YzF3aUlDaE5lV1Z5Y3l3Z01UazROaWt1WEc0Z0tpQm9kSFJ3T2k4dlkybDBaWE5sWlhKNExtbHpkQzV3YzNVdVpXUjFMM1pwWlhka2IyTXZjM1Z0YldGeWVUOWtiMms5TVRBdU1TNHhMalF1TmpreU4xeHVJQ292WEc1cGJYQnZjblFnUkdsbVppQm1jbTl0SUNjdUwyUnBabVl2WW1GelpTYzdYRzVwYlhCdmNuUWdlMlJwWm1aRGFHRnljMzBnWm5KdmJTQW5MaTlrYVdabUwyTm9ZWEpoWTNSbGNpYzdYRzVwYlhCdmNuUWdlMlJwWm1aWGIzSmtjeXdnWkdsbVpsZHZjbVJ6VjJsMGFGTndZV05sZlNCbWNtOXRJQ2N1TDJScFptWXZkMjl5WkNjN1hHNXBiWEJ2Y25RZ2UyUnBabVpNYVc1bGN5d2daR2xtWmxSeWFXMXRaV1JNYVc1bGMzMGdabkp2YlNBbkxpOWthV1ptTDJ4cGJtVW5PMXh1YVcxd2IzSjBJSHRrYVdabVUyVnVkR1Z1WTJWemZTQm1jbTl0SUNjdUwyUnBabVl2YzJWdWRHVnVZMlVuTzF4dVhHNXBiWEJ2Y25RZ2UyUnBabVpEYzNOOUlHWnliMjBnSnk0dlpHbG1aaTlqYzNNbk8xeHVhVzF3YjNKMElIdGthV1ptU25OdmJpd2dZMkZ1YjI1cFkyRnNhWHBsZlNCbWNtOXRJQ2N1TDJScFptWXZhbk52YmljN1hHNWNibWx0Y0c5eWRDQjdaR2xtWmtGeWNtRjVjMzBnWm5KdmJTQW5MaTlrYVdabUwyRnljbUY1Snp0Y2JseHVhVzF3YjNKMElIdGhjSEJzZVZCaGRHTm9MQ0JoY0hCc2VWQmhkR05vWlhOOUlHWnliMjBnSnk0dmNHRjBZMmd2WVhCd2JIa25PMXh1YVcxd2IzSjBJSHR3WVhKelpWQmhkR05vZlNCbWNtOXRJQ2N1TDNCaGRHTm9MM0JoY25ObEp6dGNibWx0Y0c5eWRDQjdiV1Z5WjJWOUlHWnliMjBnSnk0dmNHRjBZMmd2YldWeVoyVW5PMXh1YVcxd2IzSjBJSHR6ZEhKMVkzUjFjbVZrVUdGMFkyZ3NJR055WldGMFpWUjNiMFpwYkdWelVHRjBZMmdzSUdOeVpXRjBaVkJoZEdOb2ZTQm1jbTl0SUNjdUwzQmhkR05vTDJOeVpXRjBaU2M3WEc1Y2JtbHRjRzl5ZENCN1kyOXVkbVZ5ZEVOb1lXNW5aWE5VYjBSTlVIMGdabkp2YlNBbkxpOWpiMjUyWlhKMEwyUnRjQ2M3WEc1cGJYQnZjblFnZTJOdmJuWmxjblJEYUdGdVoyVnpWRzlZVFV4OUlHWnliMjBnSnk0dlkyOXVkbVZ5ZEM5NGJXd25PMXh1WEc1bGVIQnZjblFnZTF4dUlDQkVhV1ptTEZ4dVhHNGdJR1JwWm1aRGFHRnljeXhjYmlBZ1pHbG1abGR2Y21SekxGeHVJQ0JrYVdabVYyOXlaSE5YYVhSb1UzQmhZMlVzWEc0Z0lHUnBabVpNYVc1bGN5eGNiaUFnWkdsbVpsUnlhVzF0WldSTWFXNWxjeXhjYmlBZ1pHbG1abE5sYm5SbGJtTmxjeXhjYmx4dUlDQmthV1ptUTNOekxGeHVJQ0JrYVdabVNuTnZiaXhjYmx4dUlDQmthV1ptUVhKeVlYbHpMRnh1WEc0Z0lITjBjblZqZEhWeVpXUlFZWFJqYUN4Y2JpQWdZM0psWVhSbFZIZHZSbWxzWlhOUVlYUmphQ3hjYmlBZ1kzSmxZWFJsVUdGMFkyZ3NYRzRnSUdGd2NHeDVVR0YwWTJnc1hHNGdJR0Z3Y0d4NVVHRjBZMmhsY3l4Y2JpQWdjR0Z5YzJWUVlYUmphQ3hjYmlBZ2JXVnlaMlVzWEc0Z0lHTnZiblpsY25SRGFHRnVaMlZ6Vkc5RVRWQXNYRzRnSUdOdmJuWmxjblJEYUdGdVoyVnpWRzlZVFV3c1hHNGdJR05oYm05dWFXTmhiR2w2WlZ4dWZUdGNiaUpkZlE9PVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFwcGx5UGF0Y2ggPSBhcHBseVBhdGNoO1xuZXhwb3J0cy5hcHBseVBhdGNoZXMgPSBhcHBseVBhdGNoZXM7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9wYXJzZSA9IHJlcXVpcmUoXCIuL3BhcnNlXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9kaXN0YW5jZUl0ZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9kaXN0YW5jZS1pdGVyYXRvclwiKSlcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki8gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZikge1xuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIHZhclxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgdW5pRGlmZiA9XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICgwLFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX3BhcnNlXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIHBhcnNlUGF0Y2gpXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAodW5pRGlmZik7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh1bmlEaWZmKSkge1xuICAgIGlmICh1bmlEaWZmLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYXBwbHlQYXRjaCBvbmx5IHdvcmtzIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgfVxuXG4gICAgdW5pRGlmZiA9IHVuaURpZmZbMF07XG4gIH0gLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG5cblxuICB2YXIgbGluZXMgPSBzb3VyY2Uuc3BsaXQoL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdLyksXG4gICAgICBkZWxpbWl0ZXJzID0gc291cmNlLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgIGh1bmtzID0gdW5pRGlmZi5odW5rcyxcbiAgICAgIGNvbXBhcmVMaW5lID0gb3B0aW9ucy5jb21wYXJlTGluZSB8fCBmdW5jdGlvbiAobGluZU51bWJlciwgbGluZSwgb3BlcmF0aW9uLCBwYXRjaENvbnRlbnQpXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAge1xuICAgIHJldHVybiAoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgbGluZSA9PT0gcGF0Y2hDb250ZW50XG4gICAgKTtcbiAgfSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuICAgICAgcmVtb3ZlRU9GTkwsXG4gICAgICBhZGRFT0ZOTDtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgaHVuayBleGFjdGx5IGZpdHMgb24gdGhlIHByb3ZpZGVkIGxvY2F0aW9uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmU7XG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAvLyBDb250ZXh0IHNhbml0eSBjaGVja1xuICAgICAgICBpZiAoIWNvbXBhcmVMaW5lKHRvUG9zICsgMSwgbGluZXNbdG9Qb3NdLCBvcGVyYXRpb24sIGNvbnRlbnQpKSB7XG4gICAgICAgICAgZXJyb3JDb3VudCsrO1xuXG4gICAgICAgICAgaWYgKGVycm9yQ291bnQgPiBmdXp6RmFjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBTZWFyY2ggYmVzdCBmaXQgb2Zmc2V0cyBmb3IgZWFjaCBodW5rIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBvbmVzXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgbWF4TGluZSA9IGxpbmVzLmxlbmd0aCAtIGh1bmsub2xkTGluZXMsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcbiAgICB2YXIgaXRlcmF0b3IgPVxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAoMCxcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIF9kaXN0YW5jZUl0ZXJhdG9yXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICBbXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIFwiZGVmYXVsdFwiXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICBdKSh0b1BvcywgbWluTGluZSwgbWF4TGluZSk7XG5cbiAgICBmb3IgKDsgbG9jYWxPZmZzZXQgIT09IHVuZGVmaW5lZDsgbG9jYWxPZmZzZXQgPSBpdGVyYXRvcigpKSB7XG4gICAgICBpZiAoaHVua0ZpdHMoaHVuaywgdG9Qb3MgKyBsb2NhbE9mZnNldCkpIHtcbiAgICAgICAgaHVuay5vZmZzZXQgPSBvZmZzZXQgKz0gbG9jYWxPZmZzZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsb2NhbE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG5cblxuICAgIG1pbkxpbmUgPSBodW5rLm9mZnNldCArIGh1bmsub2xkU3RhcnQgKyBodW5rLm9sZExpbmVzO1xuICB9IC8vIEFwcGx5IHBhdGNoIGh1bmtzXG5cblxuICB2YXIgZGlmZk9mZnNldCA9IDA7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGh1bmtzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBfaHVuayA9IGh1bmtzW19pXSxcbiAgICAgICAgX3RvUG9zID0gX2h1bmsub2xkU3RhcnQgKyBfaHVuay5vZmZzZXQgKyBkaWZmT2Zmc2V0IC0gMTtcblxuICAgIGRpZmZPZmZzZXQgKz0gX2h1bmsubmV3TGluZXMgLSBfaHVuay5vbGRMaW5lcztcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2h1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBsaW5lID0gX2h1bmsubGluZXNbal0sXG4gICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5sZW5ndGggPiAwID8gbGluZS5zdWJzdHIoMSkgOiBsaW5lLFxuICAgICAgICAgIGRlbGltaXRlciA9IF9odW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgX3RvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZShfdG9Qb3MsIDEpO1xuICAgICAgICBkZWxpbWl0ZXJzLnNwbGljZShfdG9Qb3MsIDEpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICBsaW5lcy5zcGxpY2UoX3RvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICBfdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzT3BlcmF0aW9uID0gX2h1bmsubGluZXNbaiAtIDFdID8gX2h1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcblxuICAgICAgICBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIHJlbW92ZUVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgYWRkRU9GTkwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuXG5cbiAgaWYgKHJlbW92ZUVPRk5MKSB7XG4gICAgd2hpbGUgKCFsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgICAgbGluZXMucG9wKCk7XG4gICAgICBkZWxpbWl0ZXJzLnBvcCgpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhZGRFT0ZOTCkge1xuICAgIGxpbmVzLnB1c2goJycpO1xuICAgIGRlbGltaXRlcnMucHVzaCgnXFxuJyk7XG4gIH1cblxuICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xufSAvLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5cblxuZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPVxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAoMCxcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIF9wYXJzZVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgLlxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBwYXJzZVBhdGNoKVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgKHVuaURpZmYpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0luZGV4KCkge1xuICAgIHZhciBpbmRleCA9IHVuaURpZmZbY3VycmVudEluZGV4KytdO1xuXG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciB1cGRhdGVkQ29udGVudCA9IGFwcGx5UGF0Y2goZGF0YSwgaW5kZXgsIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5wYXRjaGVkKGluZGV4LCB1cGRhdGVkQ29udGVudCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NJbmRleCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm9jZXNzSW5kZXgoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdZWFJqYUM5aGNIQnNlUzVxY3lKZExDSnVZVzFsY3lJNld5SmhjSEJzZVZCaGRHTm9JaXdpYzI5MWNtTmxJaXdpZFc1cFJHbG1aaUlzSW05d2RHbHZibk1pTENKd1lYSnpaVkJoZEdOb0lpd2lRWEp5WVhraUxDSnBjMEZ5Y21GNUlpd2liR1Z1WjNSb0lpd2lSWEp5YjNJaUxDSnNhVzVsY3lJc0luTndiR2wwSWl3aVpHVnNhVzFwZEdWeWN5SXNJbTFoZEdOb0lpd2lhSFZ1YTNNaUxDSmpiMjF3WVhKbFRHbHVaU0lzSW14cGJtVk9kVzFpWlhJaUxDSnNhVzVsSWl3aWIzQmxjbUYwYVc5dUlpd2ljR0YwWTJoRGIyNTBaVzUwSWl3aVpYSnliM0pEYjNWdWRDSXNJbVoxZW5wR1lXTjBiM0lpTENKdGFXNU1hVzVsSWl3aWIyWm1jMlYwSWl3aWNtVnRiM1psUlU5R1Rrd2lMQ0poWkdSRlQwWk9UQ0lzSW1oMWJtdEdhWFJ6SWl3aWFIVnVheUlzSW5SdlVHOXpJaXdpYWlJc0ltTnZiblJsYm5RaUxDSnpkV0p6ZEhJaUxDSnBJaXdpYldGNFRHbHVaU0lzSW05c1pFeHBibVZ6SWl3aWJHOWpZV3hQWm1aelpYUWlMQ0p2YkdSVGRHRnlkQ0lzSW1sMFpYSmhkRzl5SWl3aVpHbHpkR0Z1WTJWSmRHVnlZWFJ2Y2lJc0luVnVaR1ZtYVc1bFpDSXNJbVJwWm1aUFptWnpaWFFpTENKdVpYZE1hVzVsY3lJc0ltUmxiR2x0YVhSbGNpSXNJbXhwYm1Wa1pXeHBiV2wwWlhKeklpd2ljM0JzYVdObElpd2ljSEpsZG1sdmRYTlBjR1Z5WVhScGIyNGlMQ0p3YjNBaUxDSndkWE5vSWl3aVgyc2lMQ0pxYjJsdUlpd2lZWEJ3YkhsUVlYUmphR1Z6SWl3aVkzVnljbVZ1ZEVsdVpHVjRJaXdpY0hKdlkyVnpjMGx1WkdWNElpd2lhVzVrWlhnaUxDSmpiMjF3YkdWMFpTSXNJbXh2WVdSR2FXeGxJaXdpWlhKeUlpd2laR0YwWVNJc0luVndaR0YwWldSRGIyNTBaVzUwSWl3aWNHRjBZMmhsWkNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUTBFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdPenM3UVVGRlR5eFRRVUZUUVN4VlFVRlVMRU5CUVc5Q1F5eE5RVUZ3UWl4RlFVRTBRa01zVDBGQk5VSXNSVUZCYlVRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlpFTXNSVUZCUVVFc1QwRkJZeXgxUlVGQlNpeEZRVUZKT3p0QlFVTjRSQ3hOUVVGSkxFOUJRVTlFTEU5QlFWQXNTMEZCYlVJc1VVRkJka0lzUlVGQmFVTTdRVUZETDBKQkxFbEJRVUZCTEU5QlFVODdRVUZCUnp0QlFVRkJPMEZCUVVFN08wRkJRVUZGTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUU3UVVGQlFTeExRVUZYUml4UFFVRllMRU5CUVZZN1FVRkRSRHM3UVVGRlJDeE5RVUZKUnl4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkwb3NUMEZCWkN4RFFVRktMRVZCUVRSQ08wRkJRekZDTEZGQlFVbEJMRTlCUVU4c1EwRkJRMHNzVFVGQlVpeEhRVUZwUWl4RFFVRnlRaXhGUVVGM1FqdEJRVU4wUWl4WlFVRk5MRWxCUVVsRExFdEJRVW9zUTBGQlZTdzBRMEZCVml4RFFVRk9PMEZCUTBRN08wRkJSVVJPTEVsQlFVRkJMRTlCUVU4c1IwRkJSMEVzVDBGQlR5eERRVUZETEVOQlFVUXNRMEZCYWtJN1FVRkRSQ3hIUVZoMVJDeERRV0Y0UkRzN08wRkJRMEVzVFVGQlNVOHNTMEZCU3l4SFFVRkhVaXhOUVVGTkxFTkJRVU5UTEV0QlFWQXNRMEZCWVN4eFFrRkJZaXhEUVVGYU8wRkJRVUVzVFVGRFNVTXNWVUZCVlN4SFFVRkhWaXhOUVVGTkxFTkJRVU5YTEV0QlFWQXNRMEZCWVN4elFrRkJZaXhMUVVGM1F5eEZRVVI2UkR0QlFVRkJMRTFCUlVsRExFdEJRVXNzUjBGQlIxZ3NUMEZCVHl4RFFVRkRWeXhMUVVad1FqdEJRVUZCTEUxQlNVbERMRmRCUVZjc1IwRkJSMWdzVDBGQlR5eERRVUZEVnl4WFFVRlNMRWxCUVhkQ0xGVkJRVU5ETEZWQlFVUXNSVUZCWVVNc1NVRkJZaXhGUVVGdFFrTXNVMEZCYmtJc1JVRkJPRUpETEZsQlFUbENPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQkswTkdMRTFCUVVGQkxFbEJRVWtzUzBGQlMwVTdRVUZCZUVRN1FVRkJRU3hIUVVveFF6dEJRVUZCTEUxQlMwbERMRlZCUVZVc1IwRkJSeXhEUVV4cVFqdEJRVUZCTEUxQlRVbERMRlZCUVZVc1IwRkJSMnBDTEU5QlFVOHNRMEZCUTJsQ0xGVkJRVklzU1VGQmMwSXNRMEZPZGtNN1FVRkJRU3hOUVU5SlF5eFBRVUZQTEVkQlFVY3NRMEZRWkR0QlFVRkJMRTFCVVVsRExFMUJRVTBzUjBGQlJ5eERRVkppTzBGQlFVRXNUVUZWU1VNc1YwRldTanRCUVVGQkxFMUJWMGxETEZGQldFbzdRVUZoUVRzN096czdRVUZIUVN4WFFVRlRReXhSUVVGVUxFTkJRV3RDUXl4SlFVRnNRaXhGUVVGM1FrTXNTMEZCZUVJc1JVRkJLMEk3UVVGRE4wSXNVMEZCU3l4SlFVRkpReXhEUVVGRExFZEJRVWNzUTBGQllpeEZRVUZuUWtFc1EwRkJReXhIUVVGSFJpeEpRVUZKTEVOQlFVTnFRaXhMUVVGTUxFTkJRVmRHTEUxQlFTOUNMRVZCUVhWRGNVSXNRMEZCUXl4RlFVRjRReXhGUVVFMFF6dEJRVU14UXl4VlFVRkpXaXhKUVVGSkxFZEJRVWRWTEVsQlFVa3NRMEZCUTJwQ0xFdEJRVXdzUTBGQlYyMUNMRU5CUVZnc1EwRkJXRHRCUVVGQkxGVkJRMGxZTEZOQlFWTXNSMEZCU1VRc1NVRkJTU3hEUVVGRFZDeE5RVUZNTEVkQlFXTXNRMEZCWkN4SFFVRnJRbE1zU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCZEVJc1IwRkJORUlzUjBGRU4wTTdRVUZCUVN4VlFVVkpZU3hQUVVGUExFZEJRVWxpTEVsQlFVa3NRMEZCUTFRc1RVRkJUQ3hIUVVGakxFTkJRV1FzUjBGQmEwSlRMRWxCUVVrc1EwRkJRMk1zVFVGQlRDeERRVUZaTEVOQlFWb3NRMEZCYkVJc1IwRkJiVU5rTEVsQlJteEVPenRCUVVsQkxGVkJRVWxETEZOQlFWTXNTMEZCU3l4SFFVRmtMRWxCUVhGQ1FTeFRRVUZUTEV0QlFVc3NSMEZCZGtNc1JVRkJORU03UVVGRE1VTTdRVUZEUVN4WlFVRkpMRU5CUVVOSUxGZEJRVmNzUTBGQlEyRXNTMEZCU3l4SFFVRkhMRU5CUVZRc1JVRkJXV3hDTEV0QlFVc3NRMEZCUTJ0Q0xFdEJRVVFzUTBGQmFrSXNSVUZCTUVKV0xGTkJRVEZDTEVWQlFYRkRXU3hQUVVGeVF5eERRVUZvUWl4RlFVRXJSRHRCUVVNM1JGWXNWVUZCUVVFc1ZVRkJWVHM3UVVGRlZpeGpRVUZKUVN4VlFVRlZMRWRCUVVkRExGVkJRV3BDTEVWQlFUWkNPMEZCUXpOQ0xHMUNRVUZQTEV0QlFWQTdRVUZEUkR0QlFVTkdPenRCUVVORVR5eFJRVUZCUVN4TFFVRkxPMEZCUTA0N1FVRkRSanM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SFFXeEVkVVFzUTBGdlJIaEVPenM3UVVGRFFTeFBRVUZMTEVsQlFVbEpMRU5CUVVNc1IwRkJSeXhEUVVGaUxFVkJRV2RDUVN4RFFVRkRMRWRCUVVkc1FpeExRVUZMTEVOQlFVTk9MRTFCUVRGQ0xFVkJRV3REZDBJc1EwRkJReXhGUVVGdVF5eEZRVUYxUXp0QlFVTnlReXhSUVVGSlRDeEpRVUZKTEVkQlFVZGlMRXRCUVVzc1EwRkJRMnRDTEVOQlFVUXNRMEZCYUVJN1FVRkJRU3hSUVVOSlF5eFBRVUZQTEVkQlFVZDJRaXhMUVVGTExFTkJRVU5HTEUxQlFVNHNSMEZCWlcxQ0xFbEJRVWtzUTBGQlEwOHNVVUZFYkVNN1FVRkJRU3hSUVVWSlF5eFhRVUZYTEVkQlFVY3NRMEZHYkVJN1FVRkJRU3hSUVVkSlVDeExRVUZMTEVkQlFVZE1MRTFCUVUwc1IwRkJSMGtzU1VGQlNTeERRVUZEVXl4UlFVRmtMRWRCUVhsQ0xFTkJTSEpETzBGQlMwRXNVVUZCU1VNc1VVRkJVVHRCUVVGSE8wRkJRVUU3UVVGQlFUczdRVUZCUVVNN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzVDBGQmFVSldMRXRCUVdwQ0xFVkJRWGRDVGl4UFFVRjRRaXhGUVVGcFExY3NUMEZCYWtNc1EwRkJaanM3UVVGRlFTeFhRVUZQUlN4WFFVRlhMRXRCUVV0SkxGTkJRWFpDTEVWQlFXdERTaXhYUVVGWExFZEJRVWRGTEZGQlFWRXNSVUZCZUVRc1JVRkJORVE3UVVGRE1VUXNWVUZCU1Znc1VVRkJVU3hEUVVGRFF5eEpRVUZFTEVWQlFVOURMRXRCUVVzc1IwRkJSMDhzVjBGQlppeERRVUZhTEVWQlFYbERPMEZCUTNaRFVpeFJRVUZCUVN4SlFVRkpMRU5CUVVOS0xFMUJRVXdzUjBGQlkwRXNUVUZCVFN4SlFVRkpXU3hYUVVGNFFqdEJRVU5CTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hSUVVGSlFTeFhRVUZYTEV0QlFVdEpMRk5CUVhCQ0xFVkJRU3RDTzBGQlF6ZENMR0ZCUVU4c1MwRkJVRHRCUVVORUxFdEJha0p2UXl4RFFXMUNja003UVVGRFFUczdPMEZCUTBGcVFpeEpRVUZCUVN4UFFVRlBMRWRCUVVkTExFbEJRVWtzUTBGQlEwb3NUVUZCVEN4SFFVRmpTU3hKUVVGSkxFTkJRVU5UTEZGQlFXNUNMRWRCUVRoQ1ZDeEpRVUZKTEVOQlFVTlBMRkZCUVRkRE8wRkJRMFFzUjBFelJYVkVMRU5CTmtWNFJEczdPMEZCUTBFc1RVRkJTVTBzVlVGQlZTeEhRVUZITEVOQlFXcENPenRCUVVOQkxFOUJRVXNzU1VGQlNWSXNSVUZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVWQlFVTXNSMEZCUjJ4Q0xFdEJRVXNzUTBGQlEwNHNUVUZCTVVJc1JVRkJhME4zUWl4RlFVRkRMRVZCUVc1RExFVkJRWFZETzBGQlEzSkRMRkZCUVVsTUxFdEJRVWtzUjBGQlIySXNTMEZCU3l4RFFVRkRhMElzUlVGQlJDeERRVUZvUWp0QlFVRkJMRkZCUTBsS0xFMUJRVXNzUjBGQlIwUXNTMEZCU1N4RFFVRkRVeXhSUVVGTUxFZEJRV2RDVkN4TFFVRkpMRU5CUVVOS0xFMUJRWEpDTEVkQlFUaENhVUlzVlVGQk9VSXNSMEZCTWtNc1EwRkVka1E3TzBGQlJVRkJMRWxCUVVGQkxGVkJRVlVzU1VGQlNXSXNTMEZCU1N4RFFVRkRZeXhSUVVGTUxFZEJRV2RDWkN4TFFVRkpMRU5CUVVOUExGRkJRVzVET3p0QlFVVkJMRk5CUVVzc1NVRkJTVXdzUTBGQlF5eEhRVUZITEVOQlFXSXNSVUZCWjBKQkxFTkJRVU1zUjBGQlIwWXNTMEZCU1N4RFFVRkRha0lzUzBGQlRDeERRVUZYUml4TlFVRXZRaXhGUVVGMVEzRkNMRU5CUVVNc1JVRkJlRU1zUlVGQk5FTTdRVUZETVVNc1ZVRkJTVm9zU1VGQlNTeEhRVUZIVlN4TFFVRkpMRU5CUVVOcVFpeExRVUZNTEVOQlFWZHRRaXhEUVVGWUxFTkJRVmc3UVVGQlFTeFZRVU5KV0N4VFFVRlRMRWRCUVVsRUxFbEJRVWtzUTBGQlExUXNUVUZCVEN4SFFVRmpMRU5CUVdRc1IwRkJhMEpUTEVsQlFVa3NRMEZCUXl4RFFVRkVMRU5CUVhSQ0xFZEJRVFJDTEVkQlJEZERPMEZCUVVFc1ZVRkZTV0VzVDBGQlR5eEhRVUZKWWl4SlFVRkpMRU5CUVVOVUxFMUJRVXdzUjBGQll5eERRVUZrTEVkQlFXdENVeXhKUVVGSkxFTkJRVU5qTEUxQlFVd3NRMEZCV1N4RFFVRmFMRU5CUVd4Q0xFZEJRVzFEWkN4SlFVWnNSRHRCUVVGQkxGVkJSMGw1UWl4VFFVRlRMRWRCUVVkbUxFdEJRVWtzUTBGQlEyZENMR05CUVV3c1EwRkJiMEprTEVOQlFYQkNMRU5CU0doQ096dEJRVXRCTEZWQlFVbFlMRk5CUVZNc1MwRkJTeXhIUVVGc1FpeEZRVUYxUWp0QlFVTnlRbFVzVVVGQlFVRXNUVUZCU3p0QlFVTk9MRTlCUmtRc1RVRkZUeXhKUVVGSlZpeFRRVUZUTEV0QlFVc3NSMEZCYkVJc1JVRkJkVUk3UVVGRE5VSlNMRkZCUVVGQkxFdEJRVXNzUTBGQlEydERMRTFCUVU0c1EwRkJZV2hDTEUxQlFXSXNSVUZCYjBJc1EwRkJjRUk3UVVGRFFXaENMRkZCUVVGQkxGVkJRVlVzUTBGQlEyZERMRTFCUVZnc1EwRkJhMEpvUWl4TlFVRnNRaXhGUVVGNVFpeERRVUY2UWp0QlFVTkdPMEZCUTBNc1QwRktUU3hOUVVsQkxFbEJRVWxXTEZOQlFWTXNTMEZCU3l4SFFVRnNRaXhGUVVGMVFqdEJRVU0xUWxJc1VVRkJRVUVzUzBGQlN5eERRVUZEYTBNc1RVRkJUaXhEUVVGaGFFSXNUVUZCWWl4RlFVRnZRaXhEUVVGd1FpeEZRVUYxUWtVc1QwRkJka0k3UVVGRFFXeENMRkZCUVVGQkxGVkJRVlVzUTBGQlEyZERMRTFCUVZnc1EwRkJhMEpvUWl4TlFVRnNRaXhGUVVGNVFpeERRVUY2UWl4RlFVRTBRbU1zVTBGQk5VSTdRVUZEUVdRc1VVRkJRVUVzVFVGQlN6dEJRVU5PTEU5QlNrMHNUVUZKUVN4SlFVRkpWaXhUUVVGVExFdEJRVXNzU1VGQmJFSXNSVUZCZDBJN1FVRkROMElzV1VGQlNUSkNMR2xDUVVGcFFpeEhRVUZIYkVJc1MwRkJTU3hEUVVGRGFrSXNTMEZCVEN4RFFVRlhiVUlzUTBGQlF5eEhRVUZITEVOQlFXWXNTVUZCYjBKR0xFdEJRVWtzUTBGQlEycENMRXRCUVV3c1EwRkJWMjFDTEVOQlFVTXNSMEZCUnl4RFFVRm1MRVZCUVd0Q0xFTkJRV3hDTEVOQlFYQkNMRWRCUVRKRExFbEJRVzVGT3p0QlFVTkJMRmxCUVVsblFpeHBRa0ZCYVVJc1MwRkJTeXhIUVVFeFFpeEZRVUVyUWp0QlFVTTNRbkpDTEZWQlFVRkJMRmRCUVZjc1IwRkJSeXhKUVVGa08wRkJRMFFzVTBGR1JDeE5RVVZQTEVsQlFVbHhRaXhwUWtGQmFVSXNTMEZCU3l4SFFVRXhRaXhGUVVFclFqdEJRVU53UTNCQ0xGVkJRVUZCTEZGQlFWRXNSMEZCUnl4SlFVRllPMEZCUTBRN1FVRkRSanRCUVVOR08wRkJRMFlzUjBFM1IzVkVMRU5CSzBkNFJEczdPMEZCUTBFc1RVRkJTVVFzVjBGQlNpeEZRVUZwUWp0QlFVTm1MRmRCUVU4c1EwRkJRMlFzUzBGQlN5eERRVUZEUVN4TFFVRkxMRU5CUVVOR0xFMUJRVTRzUjBGQlpTeERRVUZvUWl4RFFVRmlMRVZCUVdsRE8wRkJReTlDUlN4TlFVRkJRU3hMUVVGTExFTkJRVU52UXl4SFFVRk9PMEZCUTBGc1F5eE5RVUZCUVN4VlFVRlZMRU5CUVVOclF5eEhRVUZZTzBGQlEwUTdRVUZEUml4SFFVeEVMRTFCUzA4c1NVRkJTWEpDTEZGQlFVb3NSVUZCWXp0QlFVTnVRbVlzU1VGQlFVRXNTMEZCU3l4RFFVRkRjVU1zU1VGQlRpeERRVUZYTEVWQlFWZzdRVUZEUVc1RExFbEJRVUZCTEZWQlFWVXNRMEZCUTIxRExFbEJRVmdzUTBGQlowSXNTVUZCYUVJN1FVRkRSRHM3UVVGRFJDeFBRVUZMTEVsQlFVbERMRVZCUVVVc1IwRkJSeXhEUVVGa0xFVkJRV2xDUVN4RlFVRkZMRWRCUVVkMFF5eExRVUZMTEVOQlFVTkdMRTFCUVU0c1IwRkJaU3hEUVVGeVF5eEZRVUYzUTNkRExFVkJRVVVzUlVGQk1VTXNSVUZCT0VNN1FVRkROVU4wUXl4SlFVRkJRU3hMUVVGTExFTkJRVU56UXl4RlFVRkVMRU5CUVV3c1IwRkJXWFJETEV0QlFVc3NRMEZCUTNORExFVkJRVVFzUTBGQlRDeEhRVUZaY0VNc1ZVRkJWU3hEUVVGRGIwTXNSVUZCUkN4RFFVRnNRenRCUVVORU96dEJRVU5FTEZOQlFVOTBReXhMUVVGTExFTkJRVU4xUXl4SlFVRk9MRU5CUVZjc1JVRkJXQ3hEUVVGUU8wRkJRMFFzUXl4RFFVVkVPenM3UVVGRFR5eFRRVUZUUXl4WlFVRlVMRU5CUVhOQ0wwTXNUMEZCZEVJc1JVRkJLMEpETEU5QlFTOUNMRVZCUVhkRE8wRkJRemRETEUxQlFVa3NUMEZCVDBRc1QwRkJVQ3hMUVVGdFFpeFJRVUYyUWl4RlFVRnBRenRCUVVNdlFrRXNTVUZCUVVFc1QwRkJUenRCUVVGSE8wRkJRVUU3UVVGQlFUczdRVUZCUVVVN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVR0QlFVRkJMRXRCUVZkR0xFOUJRVmdzUTBGQlZqdEJRVU5FT3p0QlFVVkVMRTFCUVVsblJDeFpRVUZaTEVkQlFVY3NRMEZCYmtJN08wRkJRMEVzVjBGQlUwTXNXVUZCVkN4SFFVRjNRanRCUVVOMFFpeFJRVUZKUXl4TFFVRkxMRWRCUVVkc1JDeFBRVUZQTEVOQlFVTm5SQ3haUVVGWkxFVkJRV0lzUTBGQmJrSTdPMEZCUTBFc1VVRkJTU3hEUVVGRFJTeExRVUZNTEVWQlFWazdRVUZEVml4aFFVRlBha1FzVDBGQlR5eERRVUZEYTBRc1VVRkJVaXhGUVVGUU8wRkJRMFE3TzBGQlJVUnNSQ3hKUVVGQlFTeFBRVUZQTEVOQlFVTnRSQ3hSUVVGU0xFTkJRV2xDUml4TFFVRnFRaXhGUVVGM1FpeFZRVUZUUnl4SFFVRlVMRVZCUVdORExFbEJRV1FzUlVGQmIwSTdRVUZETVVNc1ZVRkJTVVFzUjBGQlNpeEZRVUZUTzBGQlExQXNaVUZCVDNCRUxFOUJRVThzUTBGQlEydEVMRkZCUVZJc1EwRkJhVUpGTEVkQlFXcENMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFZRVUZKUlN4alFVRmpMRWRCUVVkNlJDeFZRVUZWTEVOQlFVTjNSQ3hKUVVGRUxFVkJRVTlLTEV0QlFWQXNSVUZCWTJwRUxFOUJRV1FzUTBGQkwwSTdRVUZEUVVFc1RVRkJRVUVzVDBGQlR5eERRVUZEZFVRc1QwRkJVaXhEUVVGblFrNHNTMEZCYUVJc1JVRkJkVUpMTEdOQlFYWkNMRVZCUVhWRExGVkJRVk5HTEVkQlFWUXNSVUZCWXp0QlFVTnVSQ3haUVVGSlFTeEhRVUZLTEVWQlFWTTdRVUZEVUN4cFFrRkJUM0JFTEU5QlFVOHNRMEZCUTJ0RUxGRkJRVklzUTBGQmFVSkZMRWRCUVdwQ0xFTkJRVkE3UVVGRFJEczdRVUZGUkVvc1VVRkJRVUVzV1VGQldUdEJRVU5pTEU5QlRrUTdRVUZQUkN4TFFXSkVPMEZCWTBRN08wRkJRMFJCTEVWQlFVRkJMRmxCUVZrN1FVRkRZaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3Y0dGeWMyVlFZWFJqYUgwZ1puSnZiU0FuTGk5d1lYSnpaU2M3WEc1cGJYQnZjblFnWkdsemRHRnVZMlZKZEdWeVlYUnZjaUJtY205dElDY3VMaTkxZEdsc0wyUnBjM1JoYm1ObExXbDBaWEpoZEc5eUp6dGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR0Z3Y0d4NVVHRjBZMmdvYzI5MWNtTmxMQ0IxYm1sRWFXWm1MQ0J2Y0hScGIyNXpJRDBnZTMwcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCMWJtbEVhV1ptSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lIVnVhVVJwWm1ZZ1BTQndZWEp6WlZCaGRHTm9LSFZ1YVVScFptWXBPMXh1SUNCOVhHNWNiaUFnYVdZZ0tFRnljbUY1TG1selFYSnlZWGtvZFc1cFJHbG1aaWtwSUh0Y2JpQWdJQ0JwWmlBb2RXNXBSR2xtWmk1c1pXNW5kR2dnUGlBeEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyRndjR3g1VUdGMFkyZ2diMjVzZVNCM2IzSnJjeUIzYVhSb0lHRWdjMmx1WjJ4bElHbHVjSFYwTGljcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWdWFVUnBabVlnUFNCMWJtbEVhV1ptV3pCZE8xeHVJQ0I5WEc1Y2JpQWdMeThnUVhCd2JIa2dkR2hsSUdScFptWWdkRzhnZEdobElHbHVjSFYwWEc0Z0lHeGxkQ0JzYVc1bGN5QTlJSE52ZFhKalpTNXpjR3hwZENndlhGeHlYRnh1ZkZ0Y1hHNWNYSFpjWEdaY1hISmNYSGc0TlYwdktTeGNiaUFnSUNBZ0lHUmxiR2x0YVhSbGNuTWdQU0J6YjNWeVkyVXViV0YwWTJnb0wxeGNjbHhjYm54YlhGeHVYRngyWEZ4bVhGeHlYRng0T0RWZEwyY3BJSHg4SUZ0ZExGeHVJQ0FnSUNBZ2FIVnVhM01nUFNCMWJtbEVhV1ptTG1oMWJtdHpMRnh1WEc0Z0lDQWdJQ0JqYjIxd1lYSmxUR2x1WlNBOUlHOXdkR2x2Ym5NdVkyOXRjR0Z5WlV4cGJtVWdmSHdnS0Noc2FXNWxUblZ0WW1WeUxDQnNhVzVsTENCdmNHVnlZWFJwYjI0c0lIQmhkR05vUTI5dWRHVnVkQ2tnUFQ0Z2JHbHVaU0E5UFQwZ2NHRjBZMmhEYjI1MFpXNTBLU3hjYmlBZ0lDQWdJR1Z5Y205eVEyOTFiblFnUFNBd0xGeHVJQ0FnSUNBZ1puVjZla1poWTNSdmNpQTlJRzl3ZEdsdmJuTXVablY2ZWtaaFkzUnZjaUI4ZkNBd0xGeHVJQ0FnSUNBZ2JXbHVUR2x1WlNBOUlEQXNYRzRnSUNBZ0lDQnZabVp6WlhRZ1BTQXdMRnh1WEc0Z0lDQWdJQ0J5WlcxdmRtVkZUMFpPVEN4Y2JpQWdJQ0FnSUdGa1pFVlBSazVNTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJEYUdWamEzTWdhV1lnZEdobElHaDFibXNnWlhoaFkzUnNlU0JtYVhSeklHOXVJSFJvWlNCd2NtOTJhV1JsWkNCc2IyTmhkR2x2Ymx4dUlDQWdLaTljYmlBZ1puVnVZM1JwYjI0Z2FIVnVhMFpwZEhNb2FIVnVheXdnZEc5UWIzTXBJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnFJRDBnTURzZ2FpQThJR2gxYm1zdWJHbHVaWE11YkdWdVozUm9PeUJxS3lzcElIdGNiaUFnSUNBZ0lHeGxkQ0JzYVc1bElEMGdhSFZ1YXk1c2FXNWxjMXRxWFN4Y2JpQWdJQ0FnSUNBZ0lDQnZjR1Z5WVhScGIyNGdQU0FvYkdsdVpTNXNaVzVuZEdnZ1BpQXdJRDhnYkdsdVpWc3dYU0E2SUNjZ0p5a3NYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHVnVkQ0E5SUNoc2FXNWxMbXhsYm1kMGFDQStJREFnUHlCc2FXNWxMbk4xWW5OMGNpZ3hLU0E2SUd4cGJtVXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb2IzQmxjbUYwYVc5dUlEMDlQU0FuSUNjZ2ZId2diM0JsY21GMGFXOXVJRDA5UFNBbkxTY3BJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1EyOXVkR1Y0ZENCellXNXBkSGtnWTJobFkydGNiaUFnSUNBZ0lDQWdhV1lnS0NGamIyMXdZWEpsVEdsdVpTaDBiMUJ2Y3lBcklERXNJR3hwYm1WelczUnZVRzl6WFN3Z2IzQmxjbUYwYVc5dUxDQmpiMjUwWlc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdWeWNtOXlRMjkxYm5Rckt6dGNibHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGxjbkp2Y2tOdmRXNTBJRDRnWm5WNmVrWmhZM1J2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGIxQnZjeXNyTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlYRzVjYmlBZ0x5OGdVMlZoY21Ob0lHSmxjM1FnWm1sMElHOW1abk5sZEhNZ1ptOXlJR1ZoWTJnZ2FIVnVheUJpWVhObFpDQnZiaUIwYUdVZ2NISmxkbWx2ZFhNZ2IyNWxjMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHaDFibXR6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2JHVjBJR2gxYm1zZ1BTQm9kVzVyYzF0cFhTeGNiaUFnSUNBZ0lDQWdiV0Y0VEdsdVpTQTlJR3hwYm1WekxteGxibWQwYUNBdElHaDFibXN1YjJ4a1RHbHVaWE1zWEc0Z0lDQWdJQ0FnSUd4dlkyRnNUMlptYzJWMElEMGdNQ3hjYmlBZ0lDQWdJQ0FnZEc5UWIzTWdQU0J2Wm1aelpYUWdLeUJvZFc1ckxtOXNaRk4wWVhKMElDMGdNVHRjYmx4dUlDQWdJR3hsZENCcGRHVnlZWFJ2Y2lBOUlHUnBjM1JoYm1ObFNYUmxjbUYwYjNJb2RHOVFiM01zSUcxcGJreHBibVVzSUcxaGVFeHBibVVwTzF4dVhHNGdJQ0FnWm05eUlDZzdJR3h2WTJGc1QyWm1jMlYwSUNFOVBTQjFibVJsWm1sdVpXUTdJR3h2WTJGc1QyWm1jMlYwSUQwZ2FYUmxjbUYwYjNJb0tTa2dlMXh1SUNBZ0lDQWdhV1lnS0doMWJtdEdhWFJ6S0doMWJtc3NJSFJ2VUc5eklDc2diRzlqWVd4UFptWnpaWFFwS1NCN1hHNGdJQ0FnSUNBZ0lHaDFibXN1YjJabWMyVjBJRDBnYjJabWMyVjBJQ3M5SUd4dlkyRnNUMlptYzJWME8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2JHOWpZV3hQWm1aelpYUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRk5sZENCc2IzZGxjaUIwWlhoMElHeHBiV2wwSUhSdklHVnVaQ0J2WmlCMGFHVWdZM1Z5Y21WdWRDQm9kVzVyTENCemJ5QnVaWGgwSUc5dVpYTWdaRzl1SjNRZ2RISjVYRzRnSUNBZ0x5OGdkRzhnWm1sMElHOTJaWElnWVd4eVpXRmtlU0J3WVhSamFHVmtJSFJsZUhSY2JpQWdJQ0J0YVc1TWFXNWxJRDBnYUhWdWF5NXZabVp6WlhRZ0t5Qm9kVzVyTG05c1pGTjBZWEowSUNzZ2FIVnVheTV2YkdSTWFXNWxjenRjYmlBZ2ZWeHVYRzRnSUM4dklFRndjR3g1SUhCaGRHTm9JR2gxYm10elhHNGdJR3hsZENCa2FXWm1UMlptYzJWMElEMGdNRHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQm9kVzVyY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lHeGxkQ0JvZFc1cklEMGdhSFZ1YTNOYmFWMHNYRzRnSUNBZ0lDQWdJSFJ2VUc5eklEMGdhSFZ1YXk1dmJHUlRkR0Z5ZENBcklHaDFibXN1YjJabWMyVjBJQ3NnWkdsbVprOW1abk5sZENBdElERTdYRzRnSUNBZ1pHbG1aazltWm5ObGRDQXJQU0JvZFc1ckxtNWxkMHhwYm1WeklDMGdhSFZ1YXk1dmJHUk1hVzVsY3p0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdvZ1BTQXdPeUJxSUR3Z2FIVnVheTVzYVc1bGN5NXNaVzVuZEdnN0lHb3JLeWtnZTF4dUlDQWdJQ0FnYkdWMElHeHBibVVnUFNCb2RXNXJMbXhwYm1WelcycGRMRnh1SUNBZ0lDQWdJQ0FnSUc5d1pYSmhkR2x2YmlBOUlDaHNhVzVsTG14bGJtZDBhQ0ErSURBZ1B5QnNhVzVsV3pCZElEb2dKeUFuS1N4Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWlc1MElEMGdLR3hwYm1VdWJHVnVaM1JvSUQ0Z01DQS9JR3hwYm1VdWMzVmljM1J5S0RFcElEb2diR2x1WlNrc1hHNGdJQ0FnSUNBZ0lDQWdaR1ZzYVcxcGRHVnlJRDBnYUhWdWF5NXNhVzVsWkdWc2FXMXBkR1Z5YzF0cVhUdGNibHh1SUNBZ0lDQWdhV1lnS0c5d1pYSmhkR2x2YmlBOVBUMGdKeUFuS1NCN1hHNGdJQ0FnSUNBZ0lIUnZVRzl6S3lzN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHOXdaWEpoZEdsdmJpQTlQVDBnSnkwbktTQjdYRzRnSUNBZ0lDQWdJR3hwYm1WekxuTndiR2xqWlNoMGIxQnZjeXdnTVNrN1hHNGdJQ0FnSUNBZ0lHUmxiR2x0YVhSbGNuTXVjM0JzYVdObEtIUnZVRzl6TENBeEtUdGNiaUFnSUNBZ0lDOHFJR2x6ZEdGdVluVnNJR2xuYm05eVpTQmxiSE5sSUNvdlhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHOXdaWEpoZEdsdmJpQTlQVDBnSnlzbktTQjdYRzRnSUNBZ0lDQWdJR3hwYm1WekxuTndiR2xqWlNoMGIxQnZjeXdnTUN3Z1kyOXVkR1Z1ZENrN1hHNGdJQ0FnSUNBZ0lHUmxiR2x0YVhSbGNuTXVjM0JzYVdObEtIUnZVRzl6TENBd0xDQmtaV3hwYldsMFpYSXBPMXh1SUNBZ0lDQWdJQ0IwYjFCdmN5c3JPMXh1SUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h2Y0dWeVlYUnBiMjRnUFQwOUlDZGNYRnhjSnlrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY0hKbGRtbHZkWE5QY0dWeVlYUnBiMjRnUFNCb2RXNXJMbXhwYm1Welcyb2dMU0F4WFNBL0lHaDFibXN1YkdsdVpYTmJhaUF0SURGZFd6QmRJRG9nYm5Wc2JEdGNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpYWnBiM1Z6VDNCbGNtRjBhVzl1SUQwOVBTQW5LeWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaVzF2ZG1WRlQwWk9UQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvY0hKbGRtbHZkWE5QY0dWeVlYUnBiMjRnUFQwOUlDY3RKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHRmtaRVZQUms1TUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJRWhoYm1Sc1pTQkZUMFpPVENCcGJuTmxjblJwYjI0dmNtVnRiM1poYkZ4dUlDQnBaaUFvY21WdGIzWmxSVTlHVGt3cElIdGNiaUFnSUNCM2FHbHNaU0FvSVd4cGJtVnpXMnhwYm1WekxteGxibWQwYUNBdElERmRLU0I3WEc0Z0lDQWdJQ0JzYVc1bGN5NXdiM0FvS1R0Y2JpQWdJQ0FnSUdSbGJHbHRhWFJsY25NdWNHOXdLQ2s3WEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnYVdZZ0tHRmtaRVZQUms1TUtTQjdYRzRnSUNBZ2JHbHVaWE11Y0hWemFDZ25KeWs3WEc0Z0lDQWdaR1ZzYVcxcGRHVnljeTV3ZFhOb0tDZGNYRzRuS1R0Y2JpQWdmVnh1SUNCbWIzSWdLR3hsZENCZmF5QTlJREE3SUY5cklEd2diR2x1WlhNdWJHVnVaM1JvSUMwZ01Uc2dYMnNyS3lrZ2UxeHVJQ0FnSUd4cGJtVnpXMTlyWFNBOUlHeHBibVZ6VzE5clhTQXJJR1JsYkdsdGFYUmxjbk5iWDJ0ZE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCc2FXNWxjeTVxYjJsdUtDY25LVHRjYm4xY2JseHVMeThnVjNKaGNIQmxjaUIwYUdGMElITjFjSEJ2Y25SeklHMTFiSFJwY0d4bElHWnBiR1VnY0dGMFkyaGxjeUIyYVdFZ1kyRnNiR0poWTJ0ekxseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRndjR3g1VUdGMFkyaGxjeWgxYm1sRWFXWm1MQ0J2Y0hScGIyNXpLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkVzVwUkdsbVppQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0IxYm1sRWFXWm1JRDBnY0dGeWMyVlFZWFJqYUNoMWJtbEVhV1ptS1R0Y2JpQWdmVnh1WEc0Z0lHeGxkQ0JqZFhKeVpXNTBTVzVrWlhnZ1BTQXdPMXh1SUNCbWRXNWpkR2x2YmlCd2NtOWpaWE56U1c1a1pYZ29LU0I3WEc0Z0lDQWdiR1YwSUdsdVpHVjRJRDBnZFc1cFJHbG1abHRqZFhKeVpXNTBTVzVrWlhncksxMDdYRzRnSUNBZ2FXWWdLQ0ZwYm1SbGVDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdVkyOXRjR3hsZEdVb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmNIUnBiMjV6TG14dllXUkdhV3hsS0dsdVpHVjRMQ0JtZFc1amRHbHZiaWhsY25Jc0lHUmhkR0VwSUh0Y2JpQWdJQ0FnSUdsbUlDaGxjbklwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11WTI5dGNHeGxkR1VvWlhKeUtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdiR1YwSUhWd1pHRjBaV1JEYjI1MFpXNTBJRDBnWVhCd2JIbFFZWFJqYUNoa1lYUmhMQ0JwYm1SbGVDd2diM0IwYVc5dWN5azdYRzRnSUNBZ0lDQnZjSFJwYjI1ekxuQmhkR05vWldRb2FXNWtaWGdzSUhWd1pHRjBaV1JEYjI1MFpXNTBMQ0JtZFc1amRHbHZiaWhsY25JcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dWeWNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ2Y0hScGIyNXpMbU52YlhCc1pYUmxLR1Z5Y2lrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J3Y205alpYTnpTVzVrWlhnb0tUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMHBPMXh1SUNCOVhHNGdJSEJ5YjJObGMzTkpibVJsZUNncE8xeHVmVnh1SWwxOVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnN0cnVjdHVyZWRQYXRjaCA9IHN0cnVjdHVyZWRQYXRjaDtcbmV4cG9ydHMuZm9ybWF0UGF0Y2ggPSBmb3JtYXRQYXRjaDtcbmV4cG9ydHMuY3JlYXRlVHdvRmlsZXNQYXRjaCA9IGNyZWF0ZVR3b0ZpbGVzUGF0Y2g7XG5leHBvcnRzLmNyZWF0ZVBhdGNoID0gY3JlYXRlUGF0Y2g7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9saW5lID0gcmVxdWlyZShcIi4uL2RpZmYvbGluZVwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucy5jb250ZXh0ID0gNDtcbiAgfVxuXG4gIHZhciBkaWZmID1cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAoMCxcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIF9saW5lXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIC5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICBkaWZmTGluZXMpXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIChvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIGRpZmYucHVzaCh7XG4gICAgdmFsdWU6ICcnLFxuICAgIGxpbmVzOiBbXVxuICB9KTsgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuICcgJyArIGVudHJ5O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGh1bmtzID0gW107XG4gIHZhciBvbGRSYW5nZVN0YXJ0ID0gMCxcbiAgICAgIG5ld1JhbmdlU3RhcnQgPSAwLFxuICAgICAgY3VyUmFuZ2UgPSBbXSxcbiAgICAgIG9sZExpbmUgPSAxLFxuICAgICAgbmV3TGluZSA9IDE7XG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgaSkge1xuICAgIHZhciBjdXJyZW50ID0gZGlmZltpXSxcbiAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICB2YXIgX2N1clJhbmdlO1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICB2YXIgcHJldiA9IGRpZmZbaSAtIDFdO1xuICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gb2xkTGluZTtcbiAgICAgICAgbmV3UmFuZ2VTdGFydCA9IG5ld0xpbmU7XG5cbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICBjdXJSYW5nZSA9IG9wdGlvbnMuY29udGV4dCA+IDAgPyBjb250ZXh0TGluZXMocHJldi5saW5lcy5zbGljZSgtb3B0aW9ucy5jb250ZXh0KSkgOiBbXTtcbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBPdXRwdXQgb3VyIGNoYW5nZXNcblxuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIChfY3VyUmFuZ2UgPVxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIGN1clJhbmdlKS5wdXNoLmFwcGx5KFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgX2N1clJhbmdlXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgLFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgX3RvQ29uc3VtYWJsZUFycmF5KFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIGxpbmVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgfSkpKTsgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuXG5cbiAgICAgIGlmIChjdXJyZW50LmFkZGVkKSB7XG4gICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xkTGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElkZW50aWNhbCBjb250ZXh0IGxpbmVzLiBUcmFjayBsaW5lIGNoYW5nZXNcbiAgICAgIGlmIChvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgIC8vIENsb3NlIG91dCBhbnkgY2hhbmdlcyB0aGF0IGhhdmUgYmVlbiBvdXRwdXQgKG9yIGpvaW4gb3ZlcmxhcHBpbmcpXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0ICogMiAmJiBpIDwgZGlmZi5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICAgIHZhciBfY3VyUmFuZ2UyO1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICAoX2N1clJhbmdlMiA9XG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICBjdXJSYW5nZSkucHVzaC5hcHBseShcbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgICAgX2N1clJhbmdlMlxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgICAgLFxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICBfdG9Db25zdW1hYmxlQXJyYXkoXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICBjb250ZXh0TGluZXMobGluZXMpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICAgIHZhciBfY3VyUmFuZ2UzO1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICAvLyBlbmQgdGhlIHJhbmdlIGFuZCBvdXRwdXRcbiAgICAgICAgICB2YXIgY29udGV4dFNpemUgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIG9wdGlvbnMuY29udGV4dCk7XG5cbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICAgIChfY3VyUmFuZ2UzID1cbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgICAgIGN1clJhbmdlKS5wdXNoLmFwcGx5KFxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICBfY3VyUmFuZ2UzXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICAsXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgICAgIGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKSk7XG5cbiAgICAgICAgICB2YXIgaHVuayA9IHtcbiAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgb2xkTGluZXM6IG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUsXG4gICAgICAgICAgICBuZXdTdGFydDogbmV3UmFuZ2VTdGFydCxcbiAgICAgICAgICAgIG5ld0xpbmVzOiBuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpID49IGRpZmYubGVuZ3RoIC0gMiAmJiBsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBFT0YgaXMgaW5zaWRlIHRoaXMgaHVua1xuICAgICAgICAgICAgdmFyIG9sZEVPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChvbGRTdHIpO1xuICAgICAgICAgICAgdmFyIG5ld0VPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChuZXdTdHIpO1xuICAgICAgICAgICAgdmFyIG5vTmxCZWZvcmVBZGRzID0gbGluZXMubGVuZ3RoID09IDAgJiYgY3VyUmFuZ2UubGVuZ3RoID4gaHVuay5vbGRMaW5lcztcblxuICAgICAgICAgICAgaWYgKCFvbGRFT0ZOZXdsaW5lICYmIG5vTmxCZWZvcmVBZGRzICYmIG9sZFN0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgLy8gaG93ZXZlciwgaWYgdGhlIG9sZCBmaWxlIGlzIGVtcHR5LCBkbyBub3Qgb3V0cHV0IHRoZSBuby1ubCBsaW5lXG4gICAgICAgICAgICAgIGN1clJhbmdlLnNwbGljZShodW5rLm9sZExpbmVzLCAwLCAnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiAhbm9ObEJlZm9yZUFkZHMgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHVua3MucHVzaChodW5rKTtcbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgfVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBfbG9vcChcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIGkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsXG4gICAgbmV3RmlsZU5hbWU6IG5ld0ZpbGVOYW1lLFxuICAgIG9sZEhlYWRlcjogb2xkSGVhZGVyLFxuICAgIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgIGh1bmtzOiBodW5rc1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRQYXRjaChkaWZmKSB7XG4gIHZhciByZXQgPSBbXTtcblxuICBpZiAoZGlmZi5vbGRGaWxlTmFtZSA9PSBkaWZmLm5ld0ZpbGVOYW1lKSB7XG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgZGlmZi5vbGRGaWxlTmFtZSk7XG4gIH1cblxuICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICByZXQucHVzaCgnLS0tICcgKyBkaWZmLm9sZEZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm9sZEhlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5vbGRIZWFkZXIpKTtcbiAgcmV0LnB1c2goJysrKyAnICsgZGlmZi5uZXdGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5uZXdIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYubmV3SGVhZGVyKSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGh1bmsgPSBkaWZmLmh1bmtzW2ldOyAvLyBVbmlmaWVkIERpZmYgRm9ybWF0IHF1aXJrOiBJZiB0aGUgY2h1bmsgc2l6ZSBpcyAwLFxuICAgIC8vIHRoZSBmaXJzdCBudW1iZXIgaXMgb25lIGxvd2VyIHRoYW4gb25lIHdvdWxkIGV4cGVjdC5cbiAgICAvLyBodHRwczovL3d3dy5hcnRpbWEuY29tL3dlYmxvZ3Mvdmlld3Bvc3QuanNwP3RocmVhZD0xNjQyOTNcblxuICAgIGlmIChodW5rLm9sZExpbmVzID09PSAwKSB7XG4gICAgICBodW5rLm9sZFN0YXJ0IC09IDE7XG4gICAgfVxuXG4gICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsubmV3U3RhcnQgLT0gMTtcbiAgICB9XG5cbiAgICByZXQucHVzaCgnQEAgLScgKyBodW5rLm9sZFN0YXJ0ICsgJywnICsgaHVuay5vbGRMaW5lcyArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lcyArICcgQEAnKTtcbiAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRQYXRjaChzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVHdvRmlsZXNQYXRjaChmaWxlTmFtZSwgZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3WVhSamFDOWpjbVZoZEdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpYzNSeWRXTjBkWEpsWkZCaGRHTm9JaXdpYjJ4a1JtbHNaVTVoYldVaUxDSnVaWGRHYVd4bFRtRnRaU0lzSW05c1pGTjBjaUlzSW01bGQxTjBjaUlzSW05c1pFaGxZV1JsY2lJc0ltNWxkMGhsWVdSbGNpSXNJbTl3ZEdsdmJuTWlMQ0pqYjI1MFpYaDBJaXdpWkdsbVppSXNJbVJwWm1aTWFXNWxjeUlzSW5CMWMyZ2lMQ0oyWVd4MVpTSXNJbXhwYm1Weklpd2lZMjl1ZEdWNGRFeHBibVZ6SWl3aWJXRndJaXdpWlc1MGNua2lMQ0pvZFc1cmN5SXNJbTlzWkZKaGJtZGxVM1JoY25RaUxDSnVaWGRTWVc1blpWTjBZWEowSWl3aVkzVnlVbUZ1WjJVaUxDSnZiR1JNYVc1bElpd2libVYzVEdsdVpTSXNJbWtpTENKamRYSnlaVzUwSWl3aWNtVndiR0ZqWlNJc0luTndiR2wwSWl3aVlXUmtaV1FpTENKeVpXMXZkbVZrSWl3aWNISmxkaUlzSW5Oc2FXTmxJaXdpYkdWdVozUm9JaXdpWTI5dWRHVjRkRk5wZW1VaUxDSk5ZWFJvSWl3aWJXbHVJaXdpYUhWdWF5SXNJbTlzWkZOMFlYSjBJaXdpYjJ4a1RHbHVaWE1pTENKdVpYZFRkR0Z5ZENJc0ltNWxkMHhwYm1Weklpd2liMnhrUlU5R1RtVjNiR2x1WlNJc0luUmxjM1FpTENKdVpYZEZUMFpPWlhkc2FXNWxJaXdpYm05T2JFSmxabTl5WlVGa1pITWlMQ0p6Y0d4cFkyVWlMQ0ptYjNKdFlYUlFZWFJqYUNJc0luSmxkQ0lzSW1Gd2NHeDVJaXdpYW05cGJpSXNJbU55WldGMFpWUjNiMFpwYkdWelVHRjBZMmdpTENKamNtVmhkR1ZRWVhSamFDSXNJbVpwYkdWT1lXMWxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96czdPenM3T3pzN096czdPenM3UVVGRlR5eFRRVUZUUVN4bFFVRlVMRU5CUVhsQ1F5eFhRVUY2UWl4RlFVRnpRME1zVjBGQmRFTXNSVUZCYlVSRExFMUJRVzVFTEVWQlFUSkVReXhOUVVFelJDeEZRVUZ0UlVNc1UwRkJia1VzUlVGQk9FVkRMRk5CUVRsRkxFVkJRWGxHUXl4UFFVRjZSaXhGUVVGclJ6dEJRVU4yUnl4TlFVRkpMRU5CUVVOQkxFOUJRVXdzUlVGQll6dEJRVU5hUVN4SlFVRkJRU3hQUVVGUExFZEJRVWNzUlVGQlZqdEJRVU5FT3p0QlFVTkVMRTFCUVVrc1QwRkJUMEVzVDBGQlR5eERRVUZEUXl4UFFVRm1MRXRCUVRKQ0xGZEJRUzlDTEVWQlFUUkRPMEZCUXpGRFJDeEpRVUZCUVN4UFFVRlBMRU5CUVVORExFOUJRVklzUjBGQmEwSXNRMEZCYkVJN1FVRkRSRHM3UVVGRlJDeE5RVUZOUXl4SlFVRkpPMEZCUVVjN1FVRkJRVHRCUVVGQk96dEJRVUZCUXp0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCTzBGQlFVRXNSMEZCVlZBc1RVRkJWaXhGUVVGclFrTXNUVUZCYkVJc1JVRkJNRUpITEU5QlFURkNMRU5CUVdJN1FVRkRRVVVzUlVGQlFVRXNTVUZCU1N4RFFVRkRSU3hKUVVGTUxFTkJRVlU3UVVGQlEwTXNTVUZCUVVFc1MwRkJTeXhGUVVGRkxFVkJRVkk3UVVGQldVTXNTVUZCUVVFc1MwRkJTeXhGUVVGRk8wRkJRVzVDTEVkQlFWWXNSVUZVZFVjc1EwRlRjRVU3TzBGQlJXNURMRmRCUVZORExGbEJRVlFzUTBGQmMwSkVMRXRCUVhSQ0xFVkJRVFpDTzBGQlF6TkNMRmRCUVU5QkxFdEJRVXNzUTBGQlEwVXNSMEZCVGl4RFFVRlZMRlZCUVZORExFdEJRVlFzUlVGQlowSTdRVUZCUlN4aFFVRlBMRTFCUVUxQkxFdEJRV0k3UVVGQmNVSXNTMEZCYWtRc1EwRkJVRHRCUVVORU96dEJRVVZFTEUxQlFVbERMRXRCUVVzc1IwRkJSeXhGUVVGYU8wRkJRMEVzVFVGQlNVTXNZVUZCWVN4SFFVRkhMRU5CUVhCQ08wRkJRVUVzVFVGQmRVSkRMR0ZCUVdFc1IwRkJSeXhEUVVGMlF6dEJRVUZCTEUxQlFUQkRReXhSUVVGUkxFZEJRVWNzUlVGQmNrUTdRVUZCUVN4TlFVTkpReXhQUVVGUExFZEJRVWNzUTBGRVpEdEJRVUZCTEUxQlEybENReXhQUVVGUExFZEJRVWNzUTBGRU0wSTdPMEZCYUVKMVJ6dEJRVUZCTzBGQlFVRTdRVUZyUWpsR1F5eEZRVUZCUVN4RFFXeENPRVk3UVVGdFFuSkhMRkZCUVUxRExFOUJRVThzUjBGQlIyWXNTVUZCU1N4RFFVRkRZeXhEUVVGRUxFTkJRWEJDTzBGQlFVRXNVVUZEVFZZc1MwRkJTeXhIUVVGSFZ5eFBRVUZQTEVOQlFVTllMRXRCUVZJc1NVRkJhVUpYTEU5QlFVOHNRMEZCUTFvc1MwRkJVaXhEUVVGallTeFBRVUZrTEVOQlFYTkNMRXRCUVhSQ0xFVkJRVFpDTEVWQlFUZENMRVZCUVdsRFF5eExRVUZxUXl4RFFVRjFReXhKUVVGMlF5eERRVVF2UWp0QlFVVkJSaXhKUVVGQlFTeFBRVUZQTEVOQlFVTllMRXRCUVZJc1IwRkJaMEpCTEV0QlFXaENPenRCUVVWQkxGRkJRVWxYTEU5QlFVOHNRMEZCUTBjc1MwRkJVaXhKUVVGcFFrZ3NUMEZCVHl4RFFVRkRTU3hQUVVFM1FpeEZRVUZ6UXp0QlFVRkJPMEZCUVVFN08wRkJRVUU3UVVGRGNFTTdRVUZEUVN4VlFVRkpMRU5CUVVOV0xHRkJRVXdzUlVGQmIwSTdRVUZEYkVJc1dVRkJUVmNzU1VGQlNTeEhRVUZIY0VJc1NVRkJTU3hEUVVGRFl5eERRVUZETEVkQlFVY3NRMEZCVEN4RFFVRnFRanRCUVVOQlRDeFJRVUZCUVN4aFFVRmhMRWRCUVVkSExFOUJRV2hDTzBGQlEwRkdMRkZCUVVGQkxHRkJRV0VzUjBGQlIwY3NUMEZCYUVJN08wRkJSVUVzV1VGQlNVOHNTVUZCU2l4RlFVRlZPMEZCUTFKVUxGVkJRVUZCTEZGQlFWRXNSMEZCUjJJc1QwRkJUeXhEUVVGRFF5eFBRVUZTTEVkQlFXdENMRU5CUVd4Q0xFZEJRWE5DVFN4WlFVRlpMRU5CUVVObExFbEJRVWtzUTBGQlEyaENMRXRCUVV3c1EwRkJWMmxDTEV0QlFWZ3NRMEZCYVVJc1EwRkJRM1pDTEU5QlFVOHNRMEZCUTBNc1QwRkJNVUlzUTBGQlJDeERRVUZzUXl4SFFVRjVSU3hGUVVGd1JqdEJRVU5CVlN4VlFVRkJRU3hoUVVGaExFbEJRVWxGTEZGQlFWRXNRMEZCUTFjc1RVRkJNVUk3UVVGRFFWb3NWVUZCUVVFc1lVRkJZU3hKUVVGSlF5eFJRVUZSTEVOQlFVTlhMRTFCUVRGQ08wRkJRMFE3UVVGRFJpeFBRVnB0UXl4RFFXTndRenM3TzBGQlEwRTdPMEZCUVVFN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRllMRTFCUVVGQkxGRkJRVkVzUlVGQlExUXNTVUZCVkR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFXdENSU3hOUVVGQlFTeExRVUZMTEVOQlFVTkZMRWRCUVU0c1EwRkJWU3hWUVVGVFF5eExRVUZVTEVWQlFXZENPMEZCUXpGRExHVkJRVThzUTBGQlExRXNUMEZCVHl4RFFVRkRSeXhMUVVGU0xFZEJRV2RDTEVkQlFXaENMRWRCUVhOQ0xFZEJRWFpDTEVsQlFUaENXQ3hMUVVGeVF6dEJRVU5FTEU5QlJtbENMRU5CUVd4Q0xFZEJabTlETEVOQmJVSndRenM3TzBGQlEwRXNWVUZCU1ZFc1QwRkJUeXhEUVVGRFJ5eExRVUZhTEVWQlFXMUNPMEZCUTJwQ1RDeFJRVUZCUVN4UFFVRlBMRWxCUVVsVUxFdEJRVXNzUTBGQlEydENMRTFCUVdwQ08wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEweFdMRkZCUVVGQkxFOUJRVThzU1VGQlNWSXNTMEZCU3l4RFFVRkRhMElzVFVGQmFrSTdRVUZEUkR0QlFVTkdMRXRCZWtKRUxFMUJlVUpQTzBGQlEwdzdRVUZEUVN4VlFVRkpZaXhoUVVGS0xFVkJRVzFDTzBGQlEycENPMEZCUTBFc1dVRkJTVXdzUzBGQlN5eERRVUZEYTBJc1RVRkJUaXhKUVVGblFuaENMRTlCUVU4c1EwRkJRME1zVDBGQlVpeEhRVUZyUWl4RFFVRnNReXhKUVVGMVEyVXNRMEZCUXl4SFFVRkhaQ3hKUVVGSkxFTkJRVU56UWl4TlFVRk1MRWRCUVdNc1EwRkJOMFFzUlVGQlowVTdRVUZCUVR0QlFVRkJPenRCUVVGQk8wRkJRemxFT3p0QlFVTkJPenRCUVVGQk96dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJXQ3hWUVVGQlFTeFJRVUZSTEVWQlFVTlVMRWxCUVZRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRnJRa2NzVlVGQlFVRXNXVUZCV1N4RFFVRkRSQ3hMUVVGRUxFTkJRVGxDTzBGQlEwUXNVMEZJUkN4TlFVZFBPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVU5NTzBGQlEwRXNZMEZCU1cxQ0xGZEJRVmNzUjBGQlIwTXNTVUZCU1N4RFFVRkRReXhIUVVGTUxFTkJRVk55UWl4TFFVRkxMRU5CUVVOclFpeE5RVUZtTEVWQlFYVkNlRUlzVDBGQlR5eERRVUZEUXl4UFFVRXZRaXhEUVVGc1FqczdRVUZEUVRzN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVZrc1ZVRkJRVUVzVVVGQlVTeEZRVUZEVkN4SlFVRlVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCYTBKSExGVkJRVUZCTEZsQlFWa3NRMEZCUTBRc1MwRkJTeXhEUVVGRGFVSXNTMEZCVGl4RFFVRlpMRU5CUVZvc1JVRkJaVVVzVjBGQlppeERRVUZFTEVOQlFUbENPenRCUVVWQkxHTkJRVWxITEVsQlFVa3NSMEZCUnp0QlFVTlVReXhaUVVGQlFTeFJRVUZSTEVWQlFVVnNRaXhoUVVSRU8wRkJSVlJ0UWl4WlFVRkJRU3hSUVVGUkxFVkJRVWRvUWl4UFFVRlBMRWRCUVVkSUxHRkJRVllzUjBGQk1FSmpMRmRCUmpWQ08wRkJSMVJOTEZsQlFVRkJMRkZCUVZFc1JVRkJSVzVDTEdGQlNFUTdRVUZKVkc5Q0xGbEJRVUZCTEZGQlFWRXNSVUZCUjJwQ0xFOUJRVThzUjBGQlIwZ3NZVUZCVml4SFFVRXdRbUVzVjBGS05VSTdRVUZMVkc1Q0xGbEJRVUZCTEV0QlFVc3NSVUZCUlU4N1FVRk1SU3hYUVVGWU96dEJRVTlCTEdOQlFVbEhMRU5CUVVNc1NVRkJTV1FzU1VGQlNTeERRVUZEYzBJc1RVRkJUQ3hIUVVGakxFTkJRVzVDTEVsQlFYZENiRUlzUzBGQlN5eERRVUZEYTBJc1RVRkJUaXhKUVVGblFuaENMRTlCUVU4c1EwRkJRME1zVDBGQmNFUXNSVUZCTmtRN1FVRkRNMFE3UVVGRFFTeG5Ra0ZCU1dkRExHRkJRV0VzUjBGQlN5eExRVUZFTEVOQlFWRkRMRWxCUVZJc1EwRkJZWFJETEUxQlFXSXNRMEZCY2tJN1FVRkRRU3huUWtGQlNYVkRMR0ZCUVdFc1IwRkJTeXhMUVVGRUxFTkJRVkZFTEVsQlFWSXNRMEZCWVhKRExFMUJRV0lzUTBGQmNrSTdRVUZEUVN4blFrRkJTWFZETEdOQlFXTXNSMEZCUnpsQ0xFdEJRVXNzUTBGQlEydENMRTFCUVU0c1NVRkJaMElzUTBGQmFFSXNTVUZCY1VKWUxGRkJRVkVzUTBGQlExY3NUVUZCVkN4SFFVRnJRa2tzU1VGQlNTeERRVUZEUlN4UlFVRnFSVHM3UVVGRFFTeG5Ra0ZCU1N4RFFVRkRSeXhoUVVGRUxFbEJRV3RDUnl4alFVRnNRaXhKUVVGdlEzaERMRTFCUVUwc1EwRkJRelJDTEUxQlFWQXNSMEZCWjBJc1EwRkJlRVFzUlVGQk1rUTdRVUZEZWtRN1FVRkRRVHRCUVVOQldDeGpRVUZCUVN4UlFVRlJMRU5CUVVOM1FpeE5RVUZVTEVOQlFXZENWQ3hKUVVGSkxFTkJRVU5GTEZGQlFYSkNMRVZCUVN0Q0xFTkJRUzlDTEVWQlFXdERMRGhDUVVGc1F6dEJRVU5FT3p0QlFVTkVMR2RDUVVGTExFTkJRVU5ITEdGQlFVUXNTVUZCYTBJc1EwRkJRMGNzWTBGQmNFSXNTVUZCZFVNc1EwRkJRMFFzWVVGQk5VTXNSVUZCTWtRN1FVRkRla1IwUWl4alFVRkJRU3hSUVVGUkxFTkJRVU5VTEVsQlFWUXNRMEZCWXl3NFFrRkJaRHRCUVVORU8wRkJRMFk3TzBGQlEwUk5MRlZCUVVGQkxFdEJRVXNzUTBGQlEwNHNTVUZCVGl4RFFVRlhkMElzU1VGQldEdEJRVVZCYWtJc1ZVRkJRVUVzWVVGQllTeEhRVUZITEVOQlFXaENPMEZCUTBGRExGVkJRVUZCTEdGQlFXRXNSMEZCUnl4RFFVRm9RanRCUVVOQlF5eFZRVUZCUVN4UlFVRlJMRWRCUVVjc1JVRkJXRHRCUVVORU8wRkJRMFk3TzBGQlEwUkRMRTFCUVVGQkxFOUJRVThzU1VGQlNWSXNTMEZCU3l4RFFVRkRhMElzVFVGQmFrSTdRVUZEUVZRc1RVRkJRVUVzVDBGQlR5eEpRVUZKVkN4TFFVRkxMRU5CUVVOclFpeE5RVUZxUWp0QlFVTkVPMEZCTVVadlJ6czdRVUZyUW5aSExFOUJRVXNzU1VGQlNWSXNRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUjJRc1NVRkJTU3hEUVVGRGMwSXNUVUZCZWtJc1JVRkJhVU5TTEVOQlFVTXNSVUZCYkVNc1JVRkJjME03UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCTjBKQkxFbEJRVUZCTEVOQlFUWkNPMEZCZVVWeVF6czdRVUZGUkN4VFFVRlBPMEZCUTB4MFFpeEpRVUZCUVN4WFFVRlhMRVZCUVVWQkxGZEJSRkk3UVVGRGNVSkRMRWxCUVVGQkxGZEJRVmNzUlVGQlJVRXNWMEZFYkVNN1FVRkZURWNzU1VGQlFVRXNVMEZCVXl4RlFVRkZRU3hUUVVaT08wRkJSV2xDUXl4SlFVRkJRU3hUUVVGVExFVkJRVVZCTEZOQlJqVkNPMEZCUjB4WExFbEJRVUZCTEV0QlFVc3NSVUZCUlVFN1FVRklSaXhIUVVGUU8wRkJTMFE3TzBGQlJVMHNVMEZCVXpSQ0xGZEJRVlFzUTBGQmNVSndReXhKUVVGeVFpeEZRVUV5UWp0QlFVTm9ReXhOUVVGTmNVTXNSMEZCUnl4SFFVRkhMRVZCUVZvN08wRkJRMEVzVFVGQlNYSkRMRWxCUVVrc1EwRkJRMUlzVjBGQlRDeEpRVUZ2UWxFc1NVRkJTU3hEUVVGRFVDeFhRVUUzUWl4RlFVRXdRenRCUVVONFF6UkRMRWxCUVVGQkxFZEJRVWNzUTBGQlEyNURMRWxCUVVvc1EwRkJVeXhaUVVGWlJpeEpRVUZKTEVOQlFVTlNMRmRCUVRGQ08wRkJRMFE3TzBGQlEwUTJReXhGUVVGQlFTeEhRVUZITEVOQlFVTnVReXhKUVVGS0xFTkJRVk1zY1VWQlFWUTdRVUZEUVcxRExFVkJRVUZCTEVkQlFVY3NRMEZCUTI1RExFbEJRVW9zUTBGQlV5eFRRVUZUUml4SlFVRkpMRU5CUVVOU0xGZEJRV1FzU1VGQk5rSXNUMEZCVDFFc1NVRkJTU3hEUVVGRFNpeFRRVUZhTEV0QlFUQkNMRmRCUVRGQ0xFZEJRWGRETEVWQlFYaERMRWRCUVRaRExFOUJRVTlKTEVsQlFVa3NRMEZCUTBvc1UwRkJkRVlzUTBGQlZEdEJRVU5CZVVNc1JVRkJRVUVzUjBGQlJ5eERRVUZEYmtNc1NVRkJTaXhEUVVGVExGTkJRVk5HTEVsQlFVa3NRMEZCUTFBc1YwRkJaQ3hKUVVFMlFpeFBRVUZQVHl4SlFVRkpMRU5CUVVOSUxGTkJRVm9zUzBGQk1FSXNWMEZCTVVJc1IwRkJkME1zUlVGQmVFTXNSMEZCTmtNc1QwRkJUMGNzU1VGQlNTeERRVUZEU0N4VFFVRjBSaXhEUVVGVU96dEJRVVZCTEU5QlFVc3NTVUZCU1dsQ0xFTkJRVU1zUjBGQlJ5eERRVUZpTEVWQlFXZENRU3hEUVVGRExFZEJRVWRrTEVsQlFVa3NRMEZCUTFFc1MwRkJUQ3hEUVVGWFl5eE5RVUV2UWl4RlFVRjFRMUlzUTBGQlF5eEZRVUY0UXl4RlFVRTBRenRCUVVNeFF5eFJRVUZOV1N4SlFVRkpMRWRCUVVjeFFpeEpRVUZKTEVOQlFVTlJMRXRCUVV3c1EwRkJWMDBzUTBGQldDeERRVUZpTEVOQlJEQkRMRU5CUlRGRE8wRkJRMEU3UVVGRFFUczdRVUZEUVN4UlFVRkpXU3hKUVVGSkxFTkJRVU5GTEZGQlFVd3NTMEZCYTBJc1EwRkJkRUlzUlVGQmVVSTdRVUZEZGtKR0xFMUJRVUZCTEVsQlFVa3NRMEZCUTBNc1VVRkJUQ3hKUVVGcFFpeERRVUZxUWp0QlFVTkVPenRCUVVORUxGRkJRVWxFTEVsQlFVa3NRMEZCUTBrc1VVRkJUQ3hMUVVGclFpeERRVUYwUWl4RlFVRjVRanRCUVVOMlFrb3NUVUZCUVVFc1NVRkJTU3hEUVVGRFJ5eFJRVUZNTEVsQlFXbENMRU5CUVdwQ08wRkJRMFE3TzBGQlEwUlJMRWxCUVVGQkxFZEJRVWNzUTBGQlEyNURMRWxCUVVvc1EwRkRSU3hUUVVGVGQwSXNTVUZCU1N4RFFVRkRReXhSUVVGa0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q1JDeEpRVUZKTEVOQlFVTkZMRkZCUVhCRExFZEJRMFVzU1VGRVJpeEhRVU5UUml4SlFVRkpMRU5CUVVOSExGRkJSR1FzUjBGRGVVSXNSMEZFZWtJc1IwRkRLMEpJTEVsQlFVa3NRMEZCUTBrc1VVRkVjRU1zUjBGRlJTeExRVWhLTzBGQlMwRlBMRWxCUVVGQkxFZEJRVWNzUTBGQlEyNURMRWxCUVVvc1EwRkJVMjlETEV0QlFWUXNRMEZCWlVRc1IwRkJaaXhGUVVGdlFsZ3NTVUZCU1N4RFFVRkRkRUlzUzBGQmVrSTdRVUZEUkRzN1FVRkZSQ3hUUVVGUGFVTXNSMEZCUnl4RFFVRkRSU3hKUVVGS0xFTkJRVk1zU1VGQlZDeEpRVUZwUWl4SlFVRjRRanRCUVVORU96dEJRVVZOTEZOQlFWTkRMRzFDUVVGVUxFTkJRVFpDYUVRc1YwRkJOMElzUlVGQk1FTkRMRmRCUVRGRExFVkJRWFZFUXl4TlFVRjJSQ3hGUVVFclJFTXNUVUZCTDBRc1JVRkJkVVZETEZOQlFYWkZMRVZCUVd0R1F5eFRRVUZzUml4RlFVRTJSa01zVDBGQk4wWXNSVUZCYzBjN1FVRkRNMGNzVTBGQlQzTkRMRmRCUVZjc1EwRkJRemRETEdWQlFXVXNRMEZCUTBNc1YwRkJSQ3hGUVVGalF5eFhRVUZrTEVWQlFUSkNReXhOUVVFelFpeEZRVUZ0UTBNc1RVRkJia01zUlVGQk1rTkRMRk5CUVRORExFVkJRWE5FUXl4VFFVRjBSQ3hGUVVGcFJVTXNUMEZCYWtVc1EwRkJhRUlzUTBGQmJFSTdRVUZEUkRzN1FVRkZUU3hUUVVGVE1rTXNWMEZCVkN4RFFVRnhRa01zVVVGQmNrSXNSVUZCSzBKb1JDeE5RVUV2UWl4RlFVRjFRME1zVFVGQmRrTXNSVUZCSzBORExGTkJRUzlETEVWQlFUQkVReXhUUVVFeFJDeEZRVUZ4UlVNc1QwRkJja1VzUlVGQk9FVTdRVUZEYmtZc1UwRkJUekJETEcxQ1FVRnRRaXhEUVVGRFJTeFJRVUZFTEVWQlFWZEJMRkZCUVZnc1JVRkJjVUpvUkN4TlFVRnlRaXhGUVVFMlFrTXNUVUZCTjBJc1JVRkJjVU5ETEZOQlFYSkRMRVZCUVdkRVF5eFRRVUZvUkN4RlFVRXlSRU1zVDBGQk0wUXNRMEZCTVVJN1FVRkRSQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WkdsbVpreHBibVZ6ZlNCbWNtOXRJQ2N1TGk5a2FXWm1MMnhwYm1Vbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM1J5ZFdOMGRYSmxaRkJoZEdOb0tHOXNaRVpwYkdWT1lXMWxMQ0J1WlhkR2FXeGxUbUZ0WlN3Z2IyeGtVM1J5TENCdVpYZFRkSElzSUc5c1pFaGxZV1JsY2l3Z2JtVjNTR1ZoWkdWeUxDQnZjSFJwYjI1ektTQjdYRzRnSUdsbUlDZ2hiM0IwYVc5dWN5a2dlMXh1SUNBZ0lHOXdkR2x2Ym5NZ1BTQjdmVHRjYmlBZ2ZWeHVJQ0JwWmlBb2RIbHdaVzltSUc5d2RHbHZibk11WTI5dWRHVjRkQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQnZjSFJwYjI1ekxtTnZiblJsZUhRZ1BTQTBPMXh1SUNCOVhHNWNiaUFnWTI5dWMzUWdaR2xtWmlBOUlHUnBabVpNYVc1bGN5aHZiR1JUZEhJc0lHNWxkMU4wY2l3Z2IzQjBhVzl1Y3lrN1hHNGdJR1JwWm1ZdWNIVnphQ2g3ZG1Gc2RXVTZJQ2NuTENCc2FXNWxjem9nVzExOUtUc2dMeThnUVhCd1pXNWtJR0Z1SUdWdGNIUjVJSFpoYkhWbElIUnZJRzFoYTJVZ1kyeGxZVzUxY0NCbFlYTnBaWEpjYmx4dUlDQm1kVzVqZEdsdmJpQmpiMjUwWlhoMFRHbHVaWE1vYkdsdVpYTXBJSHRjYmlBZ0lDQnlaWFIxY200Z2JHbHVaWE11YldGd0tHWjFibU4wYVc5dUtHVnVkSEo1S1NCN0lISmxkSFZ5YmlBbklDY2dLeUJsYm5SeWVUc2dmU2s3WEc0Z0lIMWNibHh1SUNCc1pYUWdhSFZ1YTNNZ1BTQmJYVHRjYmlBZ2JHVjBJRzlzWkZKaGJtZGxVM1JoY25RZ1BTQXdMQ0J1WlhkU1lXNW5aVk4wWVhKMElEMGdNQ3dnWTNWeVVtRnVaMlVnUFNCYlhTeGNiaUFnSUNBZ0lHOXNaRXhwYm1VZ1BTQXhMQ0J1WlhkTWFXNWxJRDBnTVR0Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JrYVdabUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZENBOUlHUnBabVpiYVYwc1hHNGdJQ0FnSUNBZ0lDQWdiR2x1WlhNZ1BTQmpkWEp5Wlc1MExteHBibVZ6SUh4OElHTjFjbkpsYm5RdWRtRnNkV1V1Y21Wd2JHRmpaU2d2WEZ4dUpDOHNJQ2NuS1M1emNHeHBkQ2duWEZ4dUp5azdYRzRnSUNBZ1kzVnljbVZ1ZEM1c2FXNWxjeUE5SUd4cGJtVnpPMXh1WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblF1WVdSa1pXUWdmSHdnWTNWeWNtVnVkQzV5WlcxdmRtVmtLU0I3WEc0Z0lDQWdJQ0F2THlCSlppQjNaU0JvWVhabElIQnlaWFpwYjNWeklHTnZiblJsZUhRc0lITjBZWEowSUhkcGRHZ2dkR2hoZEZ4dUlDQWdJQ0FnYVdZZ0tDRnZiR1JTWVc1blpWTjBZWEowS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhCeVpYWWdQU0JrYVdabVcya2dMU0F4WFR0Y2JpQWdJQ0FnSUNBZ2IyeGtVbUZ1WjJWVGRHRnlkQ0E5SUc5c1pFeHBibVU3WEc0Z0lDQWdJQ0FnSUc1bGQxSmhibWRsVTNSaGNuUWdQU0J1WlhkTWFXNWxPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHdjbVYyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdZM1Z5VW1GdVoyVWdQU0J2Y0hScGIyNXpMbU52Ym5SbGVIUWdQaUF3SUQ4Z1kyOXVkR1Y0ZEV4cGJtVnpLSEJ5WlhZdWJHbHVaWE11YzJ4cFkyVW9MVzl3ZEdsdmJuTXVZMjl1ZEdWNGRDa3BJRG9nVzEwN1hHNGdJQ0FnSUNBZ0lDQWdiMnhrVW1GdVoyVlRkR0Z5ZENBdFBTQmpkWEpTWVc1blpTNXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lDQWdibVYzVW1GdVoyVlRkR0Z5ZENBdFBTQmpkWEpTWVc1blpTNXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnVDNWMGNIVjBJRzkxY2lCamFHRnVaMlZ6WEc0Z0lDQWdJQ0JqZFhKU1lXNW5aUzV3ZFhOb0tDNHVMaUJzYVc1bGN5NXRZWEFvWm5WdVkzUnBiMjRvWlc1MGNua3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hqZFhKeVpXNTBMbUZrWkdWa0lEOGdKeXNuSURvZ0p5MG5LU0FySUdWdWRISjVPMXh1SUNBZ0lDQWdmU2twTzF4dVhHNGdJQ0FnSUNBdkx5QlVjbUZqYXlCMGFHVWdkWEJrWVhSbFpDQm1hV3hsSUhCdmMybDBhVzl1WEc0Z0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEM1aFpHUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCdVpYZE1hVzVsSUNzOUlHeHBibVZ6TG14bGJtZDBhRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJRzlzWkV4cGJtVWdLejBnYkdsdVpYTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0F2THlCSlpHVnVkR2xqWVd3Z1kyOXVkR1Y0ZENCc2FXNWxjeTRnVkhKaFkyc2diR2x1WlNCamFHRnVaMlZ6WEc0Z0lDQWdJQ0JwWmlBb2IyeGtVbUZ1WjJWVGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QkRiRzl6WlNCdmRYUWdZVzU1SUdOb1lXNW5aWE1nZEdoaGRDQm9ZWFpsSUdKbFpXNGdiM1YwY0hWMElDaHZjaUJxYjJsdUlHOTJaWEpzWVhCd2FXNW5LVnh1SUNBZ0lDQWdJQ0JwWmlBb2JHbHVaWE11YkdWdVozUm9JRHc5SUc5d2RHbHZibk11WTI5dWRHVjRkQ0FxSURJZ0ppWWdhU0E4SUdScFptWXViR1Z1WjNSb0lDMGdNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRTkyWlhKc1lYQndhVzVuWEc0Z0lDQWdJQ0FnSUNBZ1kzVnlVbUZ1WjJVdWNIVnphQ2d1TGk0Z1kyOXVkR1Y0ZEV4cGJtVnpLR3hwYm1WektTazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1pXNWtJSFJvWlNCeVlXNW5aU0JoYm1RZ2IzVjBjSFYwWEc0Z0lDQWdJQ0FnSUNBZ2JHVjBJR052Ym5SbGVIUlRhWHBsSUQwZ1RXRjBhQzV0YVc0b2JHbHVaWE11YkdWdVozUm9MQ0J2Y0hScGIyNXpMbU52Ym5SbGVIUXBPMXh1SUNBZ0lDQWdJQ0FnSUdOMWNsSmhibWRsTG5CMWMyZ29MaTR1SUdOdmJuUmxlSFJNYVc1bGN5aHNhVzVsY3k1emJHbGpaU2d3TENCamIyNTBaWGgwVTJsNlpTa3BLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHeGxkQ0JvZFc1cklEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IyeGtVM1JoY25RNklHOXNaRkpoYm1kbFUzUmhjblFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZiR1JNYVc1bGN6b2dLRzlzWkV4cGJtVWdMU0J2YkdSU1lXNW5aVk4wWVhKMElDc2dZMjl1ZEdWNGRGTnBlbVVwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdibVYzVTNSaGNuUTZJRzVsZDFKaGJtZGxVM1JoY25Rc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhkTWFXNWxjem9nS0c1bGQweHBibVVnTFNCdVpYZFNZVzVuWlZOMFlYSjBJQ3NnWTI5dWRHVjRkRk5wZW1VcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdsdVpYTTZJR04xY2xKaGJtZGxYRzRnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYVNBK1BTQmthV1ptTG14bGJtZDBhQ0F0SURJZ0ppWWdiR2x1WlhNdWJHVnVaM1JvSUR3OUlHOXdkR2x2Ym5NdVkyOXVkR1Y0ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JVOUdJR2x6SUdsdWMybGtaU0IwYUdseklHaDFibXRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J2YkdSRlQwWk9aWGRzYVc1bElEMGdLQ2d2WEZ4dUpDOHBMblJsYzNRb2IyeGtVM1J5S1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JtVjNSVTlHVG1WM2JHbHVaU0E5SUNnb0wxeGNiaVF2S1M1MFpYTjBLRzVsZDFOMGNpa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzV2VG14Q1pXWnZjbVZCWkdSeklEMGdiR2x1WlhNdWJHVnVaM1JvSUQwOUlEQWdKaVlnWTNWeVVtRnVaMlV1YkdWdVozUm9JRDRnYUhWdWF5NXZiR1JNYVc1bGN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hiMnhrUlU5R1RtVjNiR2x1WlNBbUppQnViMDVzUW1WbWIzSmxRV1JrY3lBbUppQnZiR1JUZEhJdWJHVnVaM1JvSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJ6Y0dWamFXRnNJR05oYzJVNklHOXNaQ0JvWVhNZ2JtOGdaVzlzSUdGdVpDQnVieUIwY21GcGJHbHVaeUJqYjI1MFpYaDBPeUJ1YnkxdWJDQmpZVzRnWlc1a0lIVndJR0psWm05eVpTQmhaR1J6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdodmQyVjJaWElzSUdsbUlIUm9aU0J2YkdRZ1ptbHNaU0JwY3lCbGJYQjBlU3dnWkc4Z2JtOTBJRzkxZEhCMWRDQjBhR1VnYm04dGJtd2diR2x1WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKU1lXNW5aUzV6Y0d4cFkyVW9hSFZ1YXk1dmJHUk1hVzVsY3l3Z01Dd2dKMXhjWEZ3Z1RtOGdibVYzYkdsdVpTQmhkQ0JsYm1RZ2IyWWdabWxzWlNjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NnaGIyeGtSVTlHVG1WM2JHbHVaU0FtSmlBaGJtOU9iRUpsWm05eVpVRmtaSE1wSUh4OElDRnVaWGRGVDBaT1pYZHNhVzVsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNsSmhibWRsTG5CMWMyZ29KMXhjWEZ3Z1RtOGdibVYzYkdsdVpTQmhkQ0JsYm1RZ2IyWWdabWxzWlNjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0JvZFc1cmN5NXdkWE5vS0doMWJtc3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2IyeGtVbUZ1WjJWVGRHRnlkQ0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdibVYzVW1GdVoyVlRkR0Z5ZENBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnWTNWeVVtRnVaMlVnUFNCYlhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdiMnhrVEdsdVpTQXJQU0JzYVc1bGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNCdVpYZE1hVzVsSUNzOUlHeHBibVZ6TG14bGJtZDBhRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lHOXNaRVpwYkdWT1lXMWxPaUJ2YkdSR2FXeGxUbUZ0WlN3Z2JtVjNSbWxzWlU1aGJXVTZJRzVsZDBacGJHVk9ZVzFsTEZ4dUlDQWdJRzlzWkVobFlXUmxjam9nYjJ4a1NHVmhaR1Z5TENCdVpYZElaV0ZrWlhJNklHNWxkMGhsWVdSbGNpeGNiaUFnSUNCb2RXNXJjem9nYUhWdWEzTmNiaUFnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y20xaGRGQmhkR05vS0dScFptWXBJSHRjYmlBZ1kyOXVjM1FnY21WMElEMGdXMTA3WEc0Z0lHbG1JQ2hrYVdabUxtOXNaRVpwYkdWT1lXMWxJRDA5SUdScFptWXVibVYzUm1sc1pVNWhiV1VwSUh0Y2JpQWdJQ0J5WlhRdWNIVnphQ2duU1c1a1pYZzZJQ2NnS3lCa2FXWm1MbTlzWkVacGJHVk9ZVzFsS1R0Y2JpQWdmVnh1SUNCeVpYUXVjSFZ6YUNnblBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU2NwTzF4dUlDQnlaWFF1Y0hWemFDZ25MUzB0SUNjZ0t5QmthV1ptTG05c1pFWnBiR1ZPWVcxbElDc2dLSFI1Y0dWdlppQmthV1ptTG05c1pFaGxZV1JsY2lBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlBbkp5QTZJQ2RjWEhRbklDc2daR2xtWmk1dmJHUklaV0ZrWlhJcEtUdGNiaUFnY21WMExuQjFjMmdvSnlzckt5QW5JQ3NnWkdsbVppNXVaWGRHYVd4bFRtRnRaU0FySUNoMGVYQmxiMllnWkdsbVppNXVaWGRJWldGa1pYSWdQVDA5SUNkMWJtUmxabWx1WldRbklEOGdKeWNnT2lBblhGeDBKeUFySUdScFptWXVibVYzU0dWaFpHVnlLU2s3WEc1Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JrYVdabUxtaDFibXR6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1kyOXVjM1FnYUhWdWF5QTlJR1JwWm1ZdWFIVnVhM05iYVYwN1hHNGdJQ0FnTHk4Z1ZXNXBabWxsWkNCRWFXWm1JRVp2Y20xaGRDQnhkV2x5YXpvZ1NXWWdkR2hsSUdOb2RXNXJJSE5wZW1VZ2FYTWdNQ3hjYmlBZ0lDQXZMeUIwYUdVZ1ptbHljM1FnYm5WdFltVnlJR2x6SUc5dVpTQnNiM2RsY2lCMGFHRnVJRzl1WlNCM2IzVnNaQ0JsZUhCbFkzUXVYRzRnSUNBZ0x5OGdhSFIwY0hNNkx5OTNkM2N1WVhKMGFXMWhMbU52YlM5M1pXSnNiMmR6TDNacFpYZHdiM04wTG1wemNEOTBhSEpsWVdROU1UWTBNamt6WEc0Z0lDQWdhV1lnS0doMWJtc3ViMnhrVEdsdVpYTWdQVDA5SURBcElIdGNiaUFnSUNBZ0lHaDFibXN1YjJ4a1UzUmhjblFnTFQwZ01UdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tHaDFibXN1Ym1WM1RHbHVaWE1nUFQwOUlEQXBJSHRjYmlBZ0lDQWdJR2gxYm1zdWJtVjNVM1JoY25RZ0xUMGdNVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBMbkIxYzJnb1hHNGdJQ0FnSUNBblFFQWdMU2NnS3lCb2RXNXJMbTlzWkZOMFlYSjBJQ3NnSnl3bklDc2dhSFZ1YXk1dmJHUk1hVzVsYzF4dUlDQWdJQ0FnS3lBbklDc25JQ3NnYUhWdWF5NXVaWGRUZEdGeWRDQXJJQ2NzSnlBcklHaDFibXN1Ym1WM1RHbHVaWE5jYmlBZ0lDQWdJQ3NnSnlCQVFDZGNiaUFnSUNBcE8xeHVJQ0FnSUhKbGRDNXdkWE5vTG1Gd2NHeDVLSEpsZEN3Z2FIVnVheTVzYVc1bGN5azdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjbVYwTG1wdmFXNG9KMXhjYmljcElDc2dKMXhjYmljN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqY21WaGRHVlVkMjlHYVd4bGMxQmhkR05vS0c5c1pFWnBiR1ZPWVcxbExDQnVaWGRHYVd4bFRtRnRaU3dnYjJ4a1UzUnlMQ0J1WlhkVGRISXNJRzlzWkVobFlXUmxjaXdnYm1WM1NHVmhaR1Z5TENCdmNIUnBiMjV6S1NCN1hHNGdJSEpsZEhWeWJpQm1iM0p0WVhSUVlYUmphQ2h6ZEhKMVkzUjFjbVZrVUdGMFkyZ29iMnhrUm1sc1pVNWhiV1VzSUc1bGQwWnBiR1ZPWVcxbExDQnZiR1JUZEhJc0lHNWxkMU4wY2l3Z2IyeGtTR1ZoWkdWeUxDQnVaWGRJWldGa1pYSXNJRzl3ZEdsdmJuTXBLVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHTnlaV0YwWlZCaGRHTm9LR1pwYkdWT1lXMWxMQ0J2YkdSVGRISXNJRzVsZDFOMGNpd2diMnhrU0dWaFpHVnlMQ0J1WlhkSVpXRmtaWElzSUc5d2RHbHZibk1wSUh0Y2JpQWdjbVYwZFhKdUlHTnlaV0YwWlZSM2IwWnBiR1Z6VUdGMFkyZ29abWxzWlU1aGJXVXNJR1pwYkdWT1lXMWxMQ0J2YkdSVGRISXNJRzVsZDFOMGNpd2diMnhrU0dWaFpHVnlMQ0J1WlhkSVpXRmtaWElzSUc5d2RHbHZibk1wTzF4dWZWeHVJbDE5XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY0xpbmVDb3VudCA9IGNhbGNMaW5lQ291bnQ7XG5leHBvcnRzLm1lcmdlID0gbWVyZ2U7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9jcmVhdGUgPSByZXF1aXJlKFwiLi9jcmVhdGVcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX3BhcnNlID0gcmVxdWlyZShcIi4vcGFyc2VcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2FycmF5ID0gcmVxdWlyZShcIi4uL3V0aWwvYXJyYXlcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki8gZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgdmFyIF9jYWxjT2xkTmV3TGluZUNvdW50ID1cbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgY2FsY09sZE5ld0xpbmVDb3VudChodW5rLmxpbmVzKSxcbiAgICAgIG9sZExpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQub2xkTGluZXMsXG4gICAgICBuZXdMaW5lcyA9IF9jYWxjT2xkTmV3TGluZUNvdW50Lm5ld0xpbmVzO1xuXG4gIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaHVuay5vbGRMaW5lcyA9IG9sZExpbmVzO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBodW5rLm9sZExpbmVzO1xuICB9XG5cbiAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBodW5rLm5ld0xpbmVzID0gbmV3TGluZXM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGh1bmsubmV3TGluZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuICB2YXIgcmV0ID0ge307IC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG5cbiAgaWYgKG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4KSB7XG4gICAgcmV0LmluZGV4ID0gbWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXg7XG4gIH1cblxuICBpZiAobWluZS5uZXdGaWxlTmFtZSB8fCB0aGVpcnMubmV3RmlsZU5hbWUpIHtcbiAgICBpZiAoIWZpbGVOYW1lQ2hhbmdlZChtaW5lKSkge1xuICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiBvdXJzLCB1c2UgdGhlaXJzIChhbmQgb3VycyBpZiB0aGVpcnMgZG9lcyBub3QgZXhpc3QpXG4gICAgICByZXQub2xkRmlsZU5hbWUgPSB0aGVpcnMub2xkRmlsZU5hbWUgfHwgbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IHRoZWlycy5uZXdGaWxlTmFtZSB8fCBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IHRoZWlycy5vbGRIZWFkZXIgfHwgbWluZS5vbGRIZWFkZXI7XG4gICAgICByZXQubmV3SGVhZGVyID0gdGhlaXJzLm5ld0hlYWRlciB8fCBtaW5lLm5ld0hlYWRlcjtcbiAgICB9IGVsc2UgaWYgKCFmaWxlTmFtZUNoYW5nZWQodGhlaXJzKSkge1xuICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiB0aGVpcnMsIHVzZSBvdXJzXG4gICAgICByZXQub2xkRmlsZU5hbWUgPSBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgIHJldC5vbGRIZWFkZXIgPSBtaW5lLm9sZEhlYWRlcjtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSBtaW5lLm5ld0hlYWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQm90aCBjaGFuZ2VkLi4uIGZpZ3VyZSBpdCBvdXRcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRGaWxlTmFtZSwgdGhlaXJzLm9sZEZpbGVOYW1lKTtcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdGaWxlTmFtZSwgdGhlaXJzLm5ld0ZpbGVOYW1lKTtcbiAgICAgIHJldC5vbGRIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkSGVhZGVyLCB0aGVpcnMub2xkSGVhZGVyKTtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3SGVhZGVyLCB0aGVpcnMubmV3SGVhZGVyKTtcbiAgICB9XG4gIH1cblxuICByZXQuaHVua3MgPSBbXTtcbiAgdmFyIG1pbmVJbmRleCA9IDAsXG4gICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7XG4gICAgICBvbGRTdGFydDogSW5maW5pdHlcbiAgICB9LFxuICAgICAgICB0aGVpcnNDdXJyZW50ID0gdGhlaXJzLmh1bmtzW3RoZWlyc0luZGV4XSB8fCB7XG4gICAgICBvbGRTdGFydDogSW5maW5pdHlcbiAgICB9O1xuXG4gICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICBtaW5lSW5kZXgrKztcbiAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgIHZhciBtZXJnZWRIdW5rID0ge1xuICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICBsaW5lczogW11cbiAgICAgIH07XG4gICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZUluZGV4Kys7XG4gICAgICByZXQuaHVua3MucHVzaChtZXJnZWRIdW5rKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBsb2FkUGF0Y2gocGFyYW0sIGJhc2UpIHtcbiAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoL15AQC9tLnRlc3QocGFyYW0pIHx8IC9eSW5kZXg6L20udGVzdChwYXJhbSkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgKDAsXG4gICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICBfcGFyc2VcbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgLlxuICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgIHBhcnNlUGF0Y2gpXG4gICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgIChwYXJhbSlbMF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFiYXNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhIGJhc2UgcmVmZXJlbmNlIG9yIHBhc3MgaW4gYSBwYXRjaCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAoMCxcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF9jcmVhdGVcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBzdHJ1Y3R1cmVkUGF0Y2gpXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBiYXNlLCBwYXJhbSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtO1xufVxuXG5mdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgcmV0dXJuIHBhdGNoLm5ld0ZpbGVOYW1lICYmIHBhdGNoLm5ld0ZpbGVOYW1lICE9PSBwYXRjaC5vbGRGaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XG4gICAgcmV0dXJuIG1pbmU7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xuICAgIHJldHVybiB7XG4gICAgICBtaW5lOiBtaW5lLFxuICAgICAgdGhlaXJzOiB0aGVpcnNcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh1bmtCZWZvcmUodGVzdCwgY2hlY2spIHtcbiAgcmV0dXJuIHRlc3Qub2xkU3RhcnQgPCBjaGVjay5vbGRTdGFydCAmJiB0ZXN0Lm9sZFN0YXJ0ICsgdGVzdC5vbGRMaW5lcyA8IGNoZWNrLm9sZFN0YXJ0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gIHJldHVybiB7XG4gICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsXG4gICAgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXG4gICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsXG4gICAgbmV3TGluZXM6IGh1bmsubmV3TGluZXMsXG4gICAgbGluZXM6IGh1bmsubGluZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VMaW5lcyhodW5rLCBtaW5lT2Zmc2V0LCBtaW5lTGluZXMsIHRoZWlyT2Zmc2V0LCB0aGVpckxpbmVzKSB7XG4gIC8vIFRoaXMgd2lsbCBnZW5lcmFsbHkgcmVzdWx0IGluIGEgY29uZmxpY3RlZCBodW5rLCBidXQgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSBjb250ZXh0XG4gIC8vIGlzIHRoZSBvbmx5IG92ZXJsYXAgd2hlcmUgd2UgY2FuIHN1Y2Nlc3NmdWxseSBtZXJnZSB0aGUgY29udGVudCBoZXJlLlxuICB2YXIgbWluZSA9IHtcbiAgICBvZmZzZXQ6IG1pbmVPZmZzZXQsXG4gICAgbGluZXM6IG1pbmVMaW5lcyxcbiAgICBpbmRleDogMFxuICB9LFxuICAgICAgdGhlaXIgPSB7XG4gICAgb2Zmc2V0OiB0aGVpck9mZnNldCxcbiAgICBsaW5lczogdGhlaXJMaW5lcyxcbiAgICBpbmRleDogMFxuICB9OyAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuXG4gIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICBpbnNlcnRMZWFkaW5nKGh1bmssIHRoZWlyLCBtaW5lKTsgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuXG4gIHdoaWxlIChtaW5lLmluZGV4IDwgbWluZS5saW5lcy5sZW5ndGggJiYgdGhlaXIuaW5kZXggPCB0aGVpci5saW5lcy5sZW5ndGgpIHtcbiAgICB2YXIgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICB0aGVpckN1cnJlbnQgPSB0aGVpci5saW5lc1t0aGVpci5pbmRleF07XG5cbiAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJykgJiYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nIHx8IHRoZWlyQ3VycmVudFswXSA9PT0gJysnKSkge1xuICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJysnICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICB2YXIgX2h1bmskbGluZXM7XG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAvLyBNaW5lIGluc2VydGVkXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgKF9odW5rJGxpbmVzID1cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgX2h1bmskbGluZXNcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAsXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBfdG9Db25zdW1hYmxlQXJyYXkoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgY29sbGVjdENoYW5nZShtaW5lKSkpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnKycgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgdmFyIF9odW5rJGxpbmVzMjtcblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIChfaHVuayRsaW5lczIgPVxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIGh1bmsubGluZXMpLnB1c2guYXBwbHkoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBfaHVuayRsaW5lczJcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAsXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBfdG9Db25zdW1hYmxlQXJyYXkoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgY29sbGVjdENoYW5nZSh0aGVpcikpKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIE1pbmUgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXIgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgLy8gQ29udGV4dCBpZGVudGl0eVxuICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcbiAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgIHRoZWlyLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgIGNvbmZsaWN0KGh1bmssIGNvbGxlY3RDaGFuZ2UobWluZSksIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9XG4gIH0gLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG5cblxuICBpbnNlcnRUcmFpbGluZyhodW5rLCBtaW5lKTtcbiAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgdGhlaXIpO1xuICBjYWxjTGluZUNvdW50KGh1bmspO1xufVxuXG5mdW5jdGlvbiBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcblxuICBpZiAoYWxsUmVtb3ZlcyhteUNoYW5nZXMpICYmIGFsbFJlbW92ZXModGhlaXJDaGFuZ2VzKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgaWYgKFxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAoMCxcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIF9hcnJheVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgLlxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBhcnJheVN0YXJ0c1dpdGgpXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIHZhciBfaHVuayRsaW5lczM7XG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgKF9odW5rJGxpbmVzMyA9XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgaHVuay5saW5lcykucHVzaC5hcHBseShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF9odW5rJGxpbmVzM1xuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICxcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBteUNoYW5nZXMpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICgwLFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2FycmF5XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIGFycmF5U3RhcnRzV2l0aClcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcykgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICB2YXIgX2h1bmskbGluZXM0O1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIChfaHVuayRsaW5lczQgPVxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIGh1bmsubGluZXMpLnB1c2guYXBwbHkoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBfaHVuayRsaW5lczRcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAsXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBfdG9Db25zdW1hYmxlQXJyYXkoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgdGhlaXJDaGFuZ2VzKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgKDAsXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICBfYXJyYXlcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgLlxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIGFycmF5RXF1YWwpXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykpIHtcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgdmFyIF9odW5rJGxpbmVzNTtcblxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIChfaHVuayRsaW5lczUgPVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgaHVuay5saW5lcykucHVzaC5hcHBseShcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2h1bmskbGluZXM1XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAsXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIG15Q2hhbmdlcykpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XG4gIHZhciBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG5cbiAgaWYgKHRoZWlyQ2hhbmdlcy5tZXJnZWQpIHtcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgdmFyIF9odW5rJGxpbmVzNjtcblxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIChfaHVuayRsaW5lczYgPVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgaHVuay5saW5lcykucHVzaC5hcHBseShcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2h1bmskbGluZXM2XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAsXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIHRoZWlyQ2hhbmdlcy5tZXJnZWQpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICBodW5rLmNvbmZsaWN0ID0gdHJ1ZTtcbiAgaHVuay5saW5lcy5wdXNoKHtcbiAgICBjb25mbGljdDogdHJ1ZSxcbiAgICBtaW5lOiBtaW5lLFxuICAgIHRoZWlyczogdGhlaXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydExlYWRpbmcoaHVuaywgaW5zZXJ0LCB0aGVpcikge1xuICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgdmFyIGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICBpbnNlcnQub2Zmc2V0Kys7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0VHJhaWxpbmcoaHVuaywgaW5zZXJ0KSB7XG4gIHdoaWxlIChpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgdmFyIGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0Q2hhbmdlKHN0YXRlKSB7XG4gIHZhciByZXQgPSBbXSxcbiAgICAgIG9wZXJhdGlvbiA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XVswXTtcblxuICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICB2YXIgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTsgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJy0nICYmIGxpbmVbMF0gPT09ICcrJykge1xuICAgICAgb3BlcmF0aW9uID0gJysnO1xuICAgIH1cblxuICAgIGlmIChvcGVyYXRpb24gPT09IGxpbmVbMF0pIHtcbiAgICAgIHJldC5wdXNoKGxpbmUpO1xuICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICB2YXIgY2hhbmdlcyA9IFtdLFxuICAgICAgbWVyZ2VkID0gW10sXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICBjb25mbGljdGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoICYmIHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgdmFyIGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07IC8vIE9uY2Ugd2UndmUgaGl0IG91ciBhZGQsIHRoZW4gd2UgYXJlIGRvbmVcblxuICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuICAgIG1lcmdlZC5wdXNoKG1hdGNoKTtcbiAgICBtYXRjaEluZGV4Kys7IC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuXG4gICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcblxuICAgICAgd2hpbGUgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2UgPSBzdGF0ZS5saW5lc1srK3N0YXRlLmluZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpID09PSBjaGFuZ2Uuc3Vic3RyKDEpKSB7XG4gICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICgobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdIHx8ICcnKVswXSA9PT0gJysnICYmIGNvbnRleHRDaGFuZ2VzKSB7XG4gICAgY29uZmxpY3RlZCA9IHRydWU7XG4gIH1cblxuICBpZiAoY29uZmxpY3RlZCkge1xuICAgIHJldHVybiBjaGFuZ2VzO1xuICB9XG5cbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoKSB7XG4gICAgbWVyZ2VkLnB1c2gobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXgrK10pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZXJnZWQ6IG1lcmdlZCxcbiAgICBjaGFuZ2VzOiBjaGFuZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGNoYW5nZSkge1xuICAgIHJldHVybiBwcmV2ICYmIGNoYW5nZVswXSA9PT0gJy0nO1xuICB9LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICB2YXIgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcblxuICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmVzKSB7XG4gIHZhciBvbGRMaW5lcyA9IDA7XG4gIHZhciBuZXdMaW5lcyA9IDA7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICBpZiAodHlwZW9mIGxpbmUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbXlDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS5taW5lKTtcbiAgICAgIHZhciB0aGVpckNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLnRoZWlycyk7XG5cbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChteUNvdW50Lm9sZExpbmVzID09PSB0aGVpckNvdW50Lm9sZExpbmVzKSB7XG4gICAgICAgICAgb2xkTGluZXMgKz0gbXlDb3VudC5vbGRMaW5lcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobXlDb3VudC5uZXdMaW5lcyA9PT0gdGhlaXJDb3VudC5uZXdMaW5lcykge1xuICAgICAgICAgIG5ld0xpbmVzICs9IG15Q291bnQubmV3TGluZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3TGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICcrJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgIG5ld0xpbmVzKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb2xkTGluZXM6IG9sZExpbmVzLFxuICAgIG5ld0xpbmVzOiBuZXdMaW5lc1xuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d1lYUmphQzl0WlhKblpTNXFjeUpkTENKdVlXMWxjeUk2V3lKallXeGpUR2x1WlVOdmRXNTBJaXdpYUhWdWF5SXNJbU5oYkdOUGJHUk9aWGRNYVc1bFEyOTFiblFpTENKc2FXNWxjeUlzSW05c1pFeHBibVZ6SWl3aWJtVjNUR2x1WlhNaUxDSjFibVJsWm1sdVpXUWlMQ0p0WlhKblpTSXNJbTFwYm1VaUxDSjBhR1ZwY25NaUxDSmlZWE5sSWl3aWJHOWhaRkJoZEdOb0lpd2ljbVYwSWl3aWFXNWtaWGdpTENKdVpYZEdhV3hsVG1GdFpTSXNJbVpwYkdWT1lXMWxRMmhoYm1kbFpDSXNJbTlzWkVacGJHVk9ZVzFsSWl3aWIyeGtTR1ZoWkdWeUlpd2libVYzU0dWaFpHVnlJaXdpYzJWc1pXTjBSbWxsYkdRaUxDSm9kVzVyY3lJc0ltMXBibVZKYm1SbGVDSXNJblJvWldseWMwbHVaR1Y0SWl3aWJXbHVaVTltWm5ObGRDSXNJblJvWldseWMwOW1abk5sZENJc0lteGxibWQwYUNJc0ltMXBibVZEZFhKeVpXNTBJaXdpYjJ4a1UzUmhjblFpTENKSmJtWnBibWwwZVNJc0luUm9aV2x5YzBOMWNuSmxiblFpTENKb2RXNXJRbVZtYjNKbElpd2ljSFZ6YUNJc0ltTnNiMjVsU0hWdWF5SXNJbTFsY21kbFpFaDFibXNpTENKTllYUm9JaXdpYldsdUlpd2libVYzVTNSaGNuUWlMQ0p0WlhKblpVeHBibVZ6SWl3aWNHRnlZVzBpTENKMFpYTjBJaXdpY0dGeWMyVlFZWFJqYUNJc0lrVnljbTl5SWl3aWMzUnlkV04wZFhKbFpGQmhkR05vSWl3aWNHRjBZMmdpTENKamIyNW1iR2xqZENJc0ltTm9aV05ySWl3aWIyWm1jMlYwSWl3aWJXbHVaVXhwYm1Weklpd2lkR2hsYVhKUFptWnpaWFFpTENKMGFHVnBja3hwYm1Weklpd2lkR2hsYVhJaUxDSnBibk5sY25STVpXRmthVzVuSWl3aWRHaGxhWEpEZFhKeVpXNTBJaXdpYlhWMGRXRnNRMmhoYm1kbElpd2lZMjlzYkdWamRFTm9ZVzVuWlNJc0luSmxiVzkyWVd3aUxDSnBibk5sY25SVWNtRnBiR2x1WnlJc0ltMTVRMmhoYm1kbGN5SXNJblJvWldseVEyaGhibWRsY3lJc0ltRnNiRkpsYlc5MlpYTWlMQ0poY25KaGVWTjBZWEowYzFkcGRHZ2lMQ0p6YTJsd1VtVnRiM1psVTNWd1pYSnpaWFFpTENKaGNuSmhlVVZ4ZFdGc0lpd2ljM2RoY0NJc0ltTnZiR3hsWTNSRGIyNTBaWGgwSWl3aWJXVnlaMlZrSWl3aWFXNXpaWEowSWl3aWJHbHVaU0lzSW5OMFlYUmxJaXdpYjNCbGNtRjBhVzl1SWl3aWJXRjBZMmhEYUdGdVoyVnpJaXdpWTJoaGJtZGxjeUlzSW0xaGRHTm9TVzVrWlhnaUxDSmpiMjUwWlhoMFEyaGhibWRsY3lJc0ltTnZibVpzYVdOMFpXUWlMQ0pqYUdGdVoyVWlMQ0p0WVhSamFDSXNJbk4xWW5OMGNpSXNJbkpsWkhWalpTSXNJbkJ5WlhZaUxDSnlaVzF2ZG1WRGFHRnVaMlZ6SWl3aVpHVnNkR0VpTENKcElpd2lZMmhoYm1kbFEyOXVkR1Z1ZENJc0ltWnZja1ZoWTJnaUxDSnRlVU52ZFc1MElpd2lkR2hsYVhKRGIzVnVkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRMEU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRkZRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3pzN096czdPenM3T3pzN096czdRVUZGVHl4VFFVRlRRU3hoUVVGVUxFTkJRWFZDUXl4SlFVRjJRaXhGUVVFMlFqdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTk1ReXhGUVVGQlFTeHRRa0ZCYlVJc1EwRkJRMFFzU1VGQlNTeERRVUZEUlN4TFFVRk9MRU5CUkdRN1FVRkJRU3hOUVVNelFrTXNVVUZFTWtJc2QwSkJRek5DUVN4UlFVUXlRanRCUVVGQkxFMUJRMnBDUXl4UlFVUnBRaXgzUWtGRGFrSkJMRkZCUkdsQ096dEJRVWRzUXl4TlFVRkpSQ3hSUVVGUkxFdEJRVXRGTEZOQlFXcENMRVZCUVRSQ08wRkJRekZDVEN4SlFVRkJRU3hKUVVGSkxFTkJRVU5ITEZGQlFVd3NSMEZCWjBKQkxGRkJRV2hDTzBGQlEwUXNSMEZHUkN4TlFVVlBPMEZCUTB3c1YwRkJUMGdzU1VGQlNTeERRVUZEUnl4UlFVRmFPMEZCUTBRN08wRkJSVVFzVFVGQlNVTXNVVUZCVVN4TFFVRkxReXhUUVVGcVFpeEZRVUUwUWp0QlFVTXhRa3dzU1VGQlFVRXNTVUZCU1N4RFFVRkRTU3hSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVORUxFZEJSa1FzVFVGRlR6dEJRVU5NTEZkQlFVOUtMRWxCUVVrc1EwRkJRMGtzVVVGQldqdEJRVU5FTzBGQlEwWTdPMEZCUlUwc1UwRkJVMFVzUzBGQlZDeERRVUZsUXl4SlFVRm1MRVZCUVhGQ1F5eE5RVUZ5UWl4RlFVRTJRa01zU1VGQk4wSXNSVUZCYlVNN1FVRkRlRU5HTEVWQlFVRkJMRWxCUVVrc1IwRkJSMGNzVTBGQlV5eERRVUZEU0N4SlFVRkVMRVZCUVU5RkxFbEJRVkFzUTBGQmFFSTdRVUZEUVVRc1JVRkJRVUVzVFVGQlRTeEhRVUZIUlN4VFFVRlRMRU5CUVVOR0xFMUJRVVFzUlVGQlUwTXNTVUZCVkN4RFFVRnNRanRCUVVWQkxFMUJRVWxGTEVkQlFVY3NSMEZCUnl4RlFVRldMRU5CU25kRExFTkJUWGhETzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hOUVVGSlNpeEpRVUZKTEVOQlFVTkxMRXRCUVV3c1NVRkJZMG9zVFVGQlRTeERRVUZEU1N4TFFVRjZRaXhGUVVGblF6dEJRVU01UWtRc1NVRkJRVUVzUjBGQlJ5eERRVUZEUXl4TFFVRktMRWRCUVZsTUxFbEJRVWtzUTBGQlEwc3NTMEZCVEN4SlFVRmpTaXhOUVVGTkxFTkJRVU5KTEV0QlFXcERPMEZCUTBRN08wRkJSVVFzVFVGQlNVd3NTVUZCU1N4RFFVRkRUU3hYUVVGTUxFbEJRVzlDVEN4TlFVRk5MRU5CUVVOTExGZEJRUzlDTEVWQlFUUkRPMEZCUXpGRExGRkJRVWtzUTBGQlEwTXNaVUZCWlN4RFFVRkRVQ3hKUVVGRUxFTkJRWEJDTEVWQlFUUkNPMEZCUXpGQ08wRkJRMEZKTEUxQlFVRkJMRWRCUVVjc1EwRkJRMGtzVjBGQlNpeEhRVUZyUWxBc1RVRkJUU3hEUVVGRFR5eFhRVUZRTEVsQlFYTkNVaXhKUVVGSkxFTkJRVU5STEZkQlFUZERPMEZCUTBGS0xFMUJRVUZCTEVkQlFVY3NRMEZCUTBVc1YwRkJTaXhIUVVGclFrd3NUVUZCVFN4RFFVRkRTeXhYUVVGUUxFbEJRWE5DVGl4SlFVRkpMRU5CUVVOTkxGZEJRVGRETzBGQlEwRkdMRTFCUVVGQkxFZEJRVWNzUTBGQlEwc3NVMEZCU2l4SFFVRm5RbElzVFVGQlRTeERRVUZEVVN4VFFVRlFMRWxCUVc5Q1ZDeEpRVUZKTEVOQlFVTlRMRk5CUVhwRE8wRkJRMEZNTEUxQlFVRkJMRWRCUVVjc1EwRkJRMDBzVTBGQlNpeEhRVUZuUWxRc1RVRkJUU3hEUVVGRFV5eFRRVUZRTEVsQlFXOUNWaXhKUVVGSkxFTkJRVU5WTEZOQlFYcERPMEZCUTBRc1MwRk9SQ3hOUVUxUExFbEJRVWtzUTBGQlEwZ3NaVUZCWlN4RFFVRkRUaXhOUVVGRUxFTkJRWEJDTEVWQlFUaENPMEZCUTI1RE8wRkJRMEZITEUxQlFVRkJMRWRCUVVjc1EwRkJRMGtzVjBGQlNpeEhRVUZyUWxJc1NVRkJTU3hEUVVGRFVTeFhRVUYyUWp0QlFVTkJTaXhOUVVGQlFTeEhRVUZITEVOQlFVTkZMRmRCUVVvc1IwRkJhMEpPTEVsQlFVa3NRMEZCUTAwc1YwRkJka0k3UVVGRFFVWXNUVUZCUVVFc1IwRkJSeXhEUVVGRFN5eFRRVUZLTEVkQlFXZENWQ3hKUVVGSkxFTkJRVU5UTEZOQlFYSkNPMEZCUTBGTUxFMUJRVUZCTEVkQlFVY3NRMEZCUTAwc1UwRkJTaXhIUVVGblFsWXNTVUZCU1N4RFFVRkRWU3hUUVVGeVFqdEJRVU5FTEV0QlRrMHNUVUZOUVR0QlFVTk1PMEZCUTBGT0xFMUJRVUZCTEVkQlFVY3NRMEZCUTBrc1YwRkJTaXhIUVVGclFrY3NWMEZCVnl4RFFVRkRVQ3hIUVVGRUxFVkJRVTFLTEVsQlFVa3NRMEZCUTFFc1YwRkJXQ3hGUVVGM1FsQXNUVUZCVFN4RFFVRkRUeXhYUVVFdlFpeERRVUUzUWp0QlFVTkJTaXhOUVVGQlFTeEhRVUZITEVOQlFVTkZMRmRCUVVvc1IwRkJhMEpMTEZkQlFWY3NRMEZCUTFBc1IwRkJSQ3hGUVVGTlNpeEpRVUZKTEVOQlFVTk5MRmRCUVZnc1JVRkJkMEpNTEUxQlFVMHNRMEZCUTBzc1YwRkJMMElzUTBGQk4wSTdRVUZEUVVZc1RVRkJRVUVzUjBGQlJ5eERRVUZEU3l4VFFVRktMRWRCUVdkQ1JTeFhRVUZYTEVOQlFVTlFMRWRCUVVRc1JVRkJUVW9zU1VGQlNTeERRVUZEVXl4VFFVRllMRVZCUVhOQ1VpeE5RVUZOTEVOQlFVTlJMRk5CUVRkQ0xFTkJRVE5DTzBGQlEwRk1MRTFCUVVGQkxFZEJRVWNzUTBGQlEwMHNVMEZCU2l4SFFVRm5Ra01zVjBGQlZ5eERRVUZEVUN4SFFVRkVMRVZCUVUxS0xFbEJRVWtzUTBGQlExVXNVMEZCV0N4RlFVRnpRbFFzVFVGQlRTeERRVUZEVXl4VFFVRTNRaXhEUVVFelFqdEJRVU5FTzBGQlEwWTdPMEZCUlVST0xFVkJRVUZCTEVkQlFVY3NRMEZCUTFFc1MwRkJTaXhIUVVGWkxFVkJRVm83UVVGRlFTeE5RVUZKUXl4VFFVRlRMRWRCUVVjc1EwRkJhRUk3UVVGQlFTeE5RVU5KUXl4WFFVRlhMRWRCUVVjc1EwRkViRUk3UVVGQlFTeE5RVVZKUXl4VlFVRlZMRWRCUVVjc1EwRkdha0k3UVVGQlFTeE5RVWRKUXl4WlFVRlpMRWRCUVVjc1EwRklia0k3TzBGQlMwRXNVMEZCVDBnc1UwRkJVeXhIUVVGSFlpeEpRVUZKTEVOQlFVTlpMRXRCUVV3c1EwRkJWMHNzVFVGQmRrSXNTVUZCYVVOSUxGZEJRVmNzUjBGQlIySXNUVUZCVFN4RFFVRkRWeXhMUVVGUUxFTkJRV0ZMTEUxQlFXNUZMRVZCUVRKRk8wRkJRM3BGTEZGQlFVbERMRmRCUVZjc1IwRkJSMnhDTEVsQlFVa3NRMEZCUTFrc1MwRkJUQ3hEUVVGWFF5eFRRVUZZTEV0QlFYbENPMEZCUVVOTkxFMUJRVUZCTEZGQlFWRXNSVUZCUlVNN1FVRkJXQ3hMUVVFelF6dEJRVUZCTEZGQlEwbERMR0ZCUVdFc1IwRkJSM0JDTEUxQlFVMHNRMEZCUTFjc1MwRkJVQ3hEUVVGaFJTeFhRVUZpTEV0QlFUWkNPMEZCUVVOTExFMUJRVUZCTEZGQlFWRXNSVUZCUlVNN1FVRkJXQ3hMUVVScVJEczdRVUZIUVN4UlFVRkpSU3hWUVVGVkxFTkJRVU5LTEZkQlFVUXNSVUZCWTBjc1lVRkJaQ3hEUVVGa0xFVkJRVFJETzBGQlF6RkRPMEZCUTBGcVFpeE5RVUZCUVN4SFFVRkhMRU5CUVVOUkxFdEJRVW9zUTBGQlZWY3NTVUZCVml4RFFVRmxReXhUUVVGVExFTkJRVU5PTEZkQlFVUXNSVUZCWTBnc1ZVRkJaQ3hEUVVGNFFqdEJRVU5CUml4TlFVRkJRU3hUUVVGVE8wRkJRMVJITEUxQlFVRkJMRmxCUVZrc1NVRkJTVVVzVjBGQlZ5eERRVUZEY2tJc1VVRkJXaXhIUVVGMVFuRkNMRmRCUVZjc1EwRkJRM1JDTEZGQlFXNUVPMEZCUTBRc1MwRk1SQ3hOUVV0UExFbEJRVWt3UWl4VlFVRlZMRU5CUVVORUxHRkJRVVFzUlVGQlowSklMRmRCUVdoQ0xFTkJRV1FzUlVGQk5FTTdRVUZEYWtRN1FVRkRRV1FzVFVGQlFVRXNSMEZCUnl4RFFVRkRVU3hMUVVGS0xFTkJRVlZYTEVsQlFWWXNRMEZCWlVNc1UwRkJVeXhEUVVGRFNDeGhRVUZFTEVWQlFXZENUQ3haUVVGb1FpeERRVUY0UWp0QlFVTkJSaXhOUVVGQlFTeFhRVUZYTzBGQlExaERMRTFCUVVGQkxGVkJRVlVzU1VGQlNVMHNZVUZCWVN4RFFVRkRlRUlzVVVGQlpDeEhRVUY1UW5kQ0xHRkJRV0VzUTBGQlEzcENMRkZCUVhKRU8wRkJRMFFzUzBGTVRTeE5RVXRCTzBGQlEwdzdRVUZEUVN4VlFVRkpOa0lzVlVGQlZTeEhRVUZITzBGQlEyWk9MRkZCUVVGQkxGRkJRVkVzUlVGQlJVOHNTVUZCU1N4RFFVRkRReXhIUVVGTUxFTkJRVk5VTEZkQlFWY3NRMEZCUTBNc1VVRkJja0lzUlVGQkswSkZMR0ZCUVdFc1EwRkJRMFlzVVVGQk4wTXNRMEZFU3p0QlFVVm1ka0lzVVVGQlFVRXNVVUZCVVN4RlFVRkZMRU5CUmtzN1FVRkhabWRETEZGQlFVRkJMRkZCUVZFc1JVRkJSVVlzU1VGQlNTeERRVUZEUXl4SFFVRk1MRU5CUVZOVUxGZEJRVmNzUTBGQlExVXNVVUZCV2l4SFFVRjFRbUlzVlVGQmFFTXNSVUZCTkVOTkxHRkJRV0VzUTBGQlEwWXNVVUZCWkN4SFFVRjVRa2dzV1VGQmNrVXNRMEZJU3p0QlFVbG1ia0lzVVVGQlFVRXNVVUZCVVN4RlFVRkZMRU5CU2tzN1FVRkxaa1lzVVVGQlFVRXNTMEZCU3l4RlFVRkZPMEZCVEZFc1QwRkJha0k3UVVGUFFXdERMRTFCUVVGQkxGVkJRVlVzUTBGQlEwb3NWVUZCUkN4RlFVRmhVQ3hYUVVGWExFTkJRVU5ETEZGQlFYcENMRVZCUVcxRFJDeFhRVUZYTEVOQlFVTjJRaXhMUVVFdlF5eEZRVUZ6UkRCQ0xHRkJRV0VzUTBGQlEwWXNVVUZCY0VVc1JVRkJPRVZGTEdGQlFXRXNRMEZCUXpGQ0xFdEJRVFZHTEVOQlFWWTdRVUZEUVcxQ0xFMUJRVUZCTEZkQlFWYzdRVUZEV0VRc1RVRkJRVUVzVTBGQlV6dEJRVVZVVkN4TlFVRkJRU3hIUVVGSExFTkJRVU5STEV0QlFVb3NRMEZCVlZjc1NVRkJWaXhEUVVGbFJTeFZRVUZtTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hUUVVGUGNrSXNSMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5FTEZOQlFWUXNRMEZCYlVJeVFpeExRVUZ1UWl4RlFVRXdRalZDTEVsQlFURkNMRVZCUVdkRE8wRkJRemxDTEUxQlFVa3NUMEZCVHpSQ0xFdEJRVkFzUzBGQmFVSXNVVUZCY2tJc1JVRkJLMEk3UVVGRE4wSXNVVUZCU3l4TlFVRkVMRU5CUVZORExFbEJRVlFzUTBGQlkwUXNTMEZCWkN4TFFVRXdRaXhWUVVGRUxFTkJRV0ZETEVsQlFXSXNRMEZCYTBKRUxFdEJRV3hDTEVOQlFUZENMRVZCUVhkRU8wRkJRM1JFTEdGQlFVODdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRVUZGTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUU3UVVGQlFTeFRRVUZYUml4TFFVRllMRVZCUVd0Q0xFTkJRV3hDTzBGQlFWQTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFTkJRVU0xUWl4SlFVRk1MRVZCUVZjN1FVRkRWQ3haUVVGTkxFbEJRVWtyUWl4TFFVRktMRU5CUVZVc2EwUkJRVllzUTBGQlRqdEJRVU5FT3p0QlFVTkVMRmRCUVU4N1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRkRPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRTdRVUZCUVN4UFFVRm5RbkJETEZOQlFXaENMRVZCUVRKQ1FTeFRRVUV6UWl4RlFVRnpRMGtzU1VGQmRFTXNSVUZCTkVNMFFpeExRVUUxUXp0QlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlQwRXNTMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk4yUWl4bFFVRlVMRU5CUVhsQ05FSXNTMEZCZWtJc1JVRkJaME03UVVGRE9VSXNVMEZCVDBFc1MwRkJTeXhEUVVGRE4wSXNWMEZCVGl4SlFVRnhRalpDTEV0QlFVc3NRMEZCUXpkQ0xGZEJRVTRzUzBGQmMwSTJRaXhMUVVGTExFTkJRVU16UWl4WFFVRjRSRHRCUVVORU96dEJRVVZFTEZOQlFWTkhMRmRCUVZRc1EwRkJjVUpPTEV0QlFYSkNMRVZCUVRSQ1RDeEpRVUUxUWl4RlFVRnJRME1zVFVGQmJFTXNSVUZCTUVNN1FVRkRlRU1zVFVGQlNVUXNTVUZCU1N4TFFVRkxReXhOUVVGaUxFVkJRWEZDTzBGQlEyNUNMRmRCUVU5RUxFbEJRVkE3UVVGRFJDeEhRVVpFTEUxQlJVODdRVUZEVEVzc1NVRkJRVUVzUzBGQlN5eERRVUZESzBJc1VVRkJUaXhIUVVGcFFpeEpRVUZxUWp0QlFVTkJMRmRCUVU4N1FVRkJRM0JETEUxQlFVRkJMRWxCUVVrc1JVRkJTa0VzU1VGQlJEdEJRVUZQUXl4TlFVRkJRU3hOUVVGTkxFVkJRVTVCTzBGQlFWQXNTMEZCVUR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVTBGQlUzRkNMRlZCUVZRc1EwRkJiMEpUTEVsQlFYQkNMRVZCUVRCQ1RTeExRVUV4UWl4RlFVRnBRenRCUVVNdlFpeFRRVUZQVGl4SlFVRkpMRU5CUVVOYUxGRkJRVXdzUjBGQlowSnJRaXhMUVVGTExFTkJRVU5zUWl4UlFVRjBRaXhKUVVORVdTeEpRVUZKTEVOQlFVTmFMRkZCUVV3c1IwRkJaMEpaTEVsQlFVa3NRMEZCUTI1RExGRkJRWFJDTEVkQlFXdERlVU1zUzBGQlN5eERRVUZEYkVJc1VVRkVOME03UVVGRlJEczdRVUZGUkN4VFFVRlRTeXhUUVVGVUxFTkJRVzFDTDBJc1NVRkJia0lzUlVGQmVVSTJReXhOUVVGNlFpeEZRVUZwUXp0QlFVTXZRaXhUUVVGUE8wRkJRMHh1UWl4SlFVRkJRU3hSUVVGUkxFVkJRVVV4UWl4SlFVRkpMRU5CUVVNd1FpeFJRVVJXTzBGQlEyOUNka0lzU1VGQlFVRXNVVUZCVVN4RlFVRkZTQ3hKUVVGSkxFTkJRVU5ITEZGQlJHNURPMEZCUlV4blF5eEpRVUZCUVN4UlFVRlJMRVZCUVVWdVF5eEpRVUZKTEVOQlFVTnRReXhSUVVGTUxFZEJRV2RDVlN4TlFVWnlRanRCUVVVMlFucERMRWxCUVVGQkxGRkJRVkVzUlVGQlJVb3NTVUZCU1N4RFFVRkRTU3hSUVVZMVF6dEJRVWRNUml4SlFVRkJRU3hMUVVGTExFVkJRVVZHTEVsQlFVa3NRMEZCUTBVN1FVRklVQ3hIUVVGUU8wRkJTMFE3TzBGQlJVUXNVMEZCVTJ0RExGVkJRVlFzUTBGQmIwSndReXhKUVVGd1FpeEZRVUV3UW5OQ0xGVkJRVEZDTEVWQlFYTkRkMElzVTBGQmRFTXNSVUZCYVVSRExGZEJRV3BFTEVWQlFUaEVReXhWUVVFNVJDeEZRVUV3UlR0QlFVTjRSVHRCUVVOQk8wRkJRMEVzVFVGQlNYcERMRWxCUVVrc1IwRkJSenRCUVVGRGMwTXNTVUZCUVVFc1RVRkJUU3hGUVVGRmRrSXNWVUZCVkR0QlFVRnhRbkJDTEVsQlFVRkJMRXRCUVVzc1JVRkJSVFJETEZOQlFUVkNPMEZCUVhWRGJFTXNTVUZCUVVFc1MwRkJTeXhGUVVGRk8wRkJRVGxETEVkQlFWZzdRVUZCUVN4TlFVTkpjVU1zUzBGQlN5eEhRVUZITzBGQlFVTktMRWxCUVVGQkxFMUJRVTBzUlVGQlJVVXNWMEZCVkR0QlFVRnpRamRETEVsQlFVRkJMRXRCUVVzc1JVRkJSVGhETEZWQlFUZENPMEZCUVhsRGNFTXNTVUZCUVVFc1MwRkJTeXhGUVVGRk8wRkJRV2hFTEVkQlJGb3NRMEZJZDBVc1EwRk5lRVU3TzBGQlEwRnpReXhGUVVGQlFTeGhRVUZoTEVOQlFVTnNSQ3hKUVVGRUxFVkJRVTlQTEVsQlFWQXNSVUZCWVRCRExFdEJRV0lzUTBGQllqdEJRVU5CUXl4RlFVRkJRU3hoUVVGaExFTkJRVU5zUkN4SlFVRkVMRVZCUVU5cFJDeExRVUZRTEVWQlFXTXhReXhKUVVGa0xFTkJRV0lzUTBGU2QwVXNRMEZWZUVVN08wRkJRMEVzVTBGQlQwRXNTVUZCU1N4RFFVRkRTeXhMUVVGTUxFZEJRV0ZNTEVsQlFVa3NRMEZCUTB3c1MwRkJUQ3hEUVVGWGMwSXNUVUZCZUVJc1NVRkJhME41UWl4TFFVRkxMRU5CUVVOeVF5eExRVUZPTEVkQlFXTnhReXhMUVVGTExFTkJRVU12UXl4TFFVRk9MRU5CUVZselFpeE5RVUZ1UlN4RlFVRXlSVHRCUVVONlJTeFJRVUZKUXl4WFFVRlhMRWRCUVVkc1FpeEpRVUZKTEVOQlFVTk1MRXRCUVV3c1EwRkJWMHNzU1VGQlNTeERRVUZEU3l4TFFVRm9RaXhEUVVGc1FqdEJRVUZCTEZGQlEwbDFReXhaUVVGWkxFZEJRVWRHTEV0QlFVc3NRMEZCUXk5RExFdEJRVTRzUTBGQldTdERMRXRCUVVzc1EwRkJRM0pETEV0QlFXeENMRU5CUkc1Q096dEJRVWRCTEZGQlFVa3NRMEZCUTJFc1YwRkJWeXhEUVVGRExFTkJRVVFzUTBGQldDeExRVUZ0UWl4SFFVRnVRaXhKUVVFd1FrRXNWMEZCVnl4RFFVRkRMRU5CUVVRc1EwRkJXQ3hMUVVGdFFpeEhRVUU1UXl4TlFVTkpNRUlzV1VGQldTeERRVUZETEVOQlFVUXNRMEZCV2l4TFFVRnZRaXhIUVVGd1FpeEpRVUV5UWtFc1dVRkJXU3hEUVVGRExFTkJRVVFzUTBGQldpeExRVUZ2UWl4SFFVUnVSQ3hEUVVGS0xFVkJRelpFTzBGQlF6TkVPMEZCUTBGRExFMUJRVUZCTEZsQlFWa3NRMEZCUTNCRUxFbEJRVVFzUlVGQlQwOHNTVUZCVUN4RlFVRmhNRU1zUzBGQllpeERRVUZhTzBGQlEwUXNTMEZLUkN4TlFVbFBMRWxCUVVsNFFpeFhRVUZYTEVOQlFVTXNRMEZCUkN4RFFVRllMRXRCUVcxQ0xFZEJRVzVDTEVsQlFUQkNNRUlzV1VGQldTeERRVUZETEVOQlFVUXNRMEZCV2l4TFFVRnZRaXhIUVVGc1JDeEZRVUYxUkR0QlFVRkJPMEZCUVVFN08wRkJRVUU3UVVGRE5VUTdPMEZCUTBFN08wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVGdVJDeE5RVUZCUVN4SlFVRkpMRU5CUVVORkxFdEJRVXdzUlVGQlZ6UkNMRWxCUVZnN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRnZRblZDTEUxQlFVRkJMR0ZCUVdFc1EwRkJRemxETEVsQlFVUXNRMEZCYWtNN1FVRkRSQ3hMUVVoTkxFMUJSMEVzU1VGQlNUUkRMRmxCUVZrc1EwRkJReXhEUVVGRUxFTkJRVm9zUzBGQmIwSXNSMEZCY0VJc1NVRkJNa0l4UWl4WFFVRlhMRU5CUVVNc1EwRkJSQ3hEUVVGWUxFdEJRVzFDTEVkQlFXeEVMRVZCUVhWRU8wRkJRVUU3UVVGQlFUczdRVUZCUVR0QlFVTTFSRHM3UVVGRFFUczdRVUZCUVRzN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFYcENMRTFCUVVGQkxFbEJRVWtzUTBGQlEwVXNTMEZCVEN4RlFVRlhORUlzU1VGQldEdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlDZFVJc1RVRkJRVUVzWVVGQllTeERRVUZEU2l4TFFVRkVMRU5CUVdwRE8wRkJRMFFzUzBGSVRTeE5RVWRCTEVsQlFVbDRRaXhYUVVGWExFTkJRVU1zUTBGQlJDeERRVUZZTEV0QlFXMUNMRWRCUVc1Q0xFbEJRVEJDTUVJc1dVRkJXU3hEUVVGRExFTkJRVVFzUTBGQldpeExRVUZ2UWl4SFFVRnNSQ3hGUVVGMVJEdEJRVU0xUkR0QlFVTkJSeXhOUVVGQlFTeFBRVUZQTEVOQlFVTjBSQ3hKUVVGRUxFVkJRVTlQTEVsQlFWQXNSVUZCWVRCRExFdEJRV0lzUTBGQlVEdEJRVU5FTEV0QlNFMHNUVUZIUVN4SlFVRkpSU3haUVVGWkxFTkJRVU1zUTBGQlJDeERRVUZhTEV0QlFXOUNMRWRCUVhCQ0xFbEJRVEpDTVVJc1YwRkJWeXhEUVVGRExFTkJRVVFzUTBGQldDeExRVUZ0UWl4SFFVRnNSQ3hGUVVGMVJEdEJRVU0xUkR0QlFVTkJOa0lzVFVGQlFVRXNUMEZCVHl4RFFVRkRkRVFzU1VGQlJDeEZRVUZQYVVRc1MwRkJVQ3hGUVVGak1VTXNTVUZCWkN4RlFVRnZRaXhKUVVGd1FpeERRVUZRTzBGQlEwUXNTMEZJVFN4TlFVZEJMRWxCUVVsclFpeFhRVUZYTEV0QlFVc3dRaXhaUVVGd1FpeEZRVUZyUXp0QlFVTjJRenRCUVVOQmJrUXNUVUZCUVVFc1NVRkJTU3hEUVVGRFJTeExRVUZNTEVOQlFWYzBRaXhKUVVGWUxFTkJRV2RDVEN4WFFVRm9RanRCUVVOQmJFSXNUVUZCUVVFc1NVRkJTU3hEUVVGRFN5eExRVUZNTzBGQlEwRnhReXhOUVVGQlFTeExRVUZMTEVOQlFVTnlReXhMUVVGT08wRkJRMFFzUzBGTVRTeE5RVXRCTzBGQlEwdzdRVUZEUVN0Q0xFMUJRVUZCTEZGQlFWRXNRMEZCUXpORExFbEJRVVFzUlVGQlQzRkVMR0ZCUVdFc1EwRkJRemxETEVsQlFVUXNRMEZCY0VJc1JVRkJORUk0UXl4aFFVRmhMRU5CUVVOS0xFdEJRVVFzUTBGQmVrTXNRMEZCVWp0QlFVTkVPMEZCUTBZc1IwRjRRM1ZGTEVOQk1FTjRSVHM3TzBGQlEwRk5MRVZCUVVGQkxHTkJRV01zUTBGQlEzWkVMRWxCUVVRc1JVRkJUMDhzU1VGQlVDeERRVUZrTzBGQlEwRm5SQ3hGUVVGQlFTeGpRVUZqTEVOQlFVTjJSQ3hKUVVGRUxFVkJRVTlwUkN4TFFVRlFMRU5CUVdRN1FVRkZRV3hFTEVWQlFVRkJMR0ZCUVdFc1EwRkJRME1zU1VGQlJDeERRVUZpTzBGQlEwUTdPMEZCUlVRc1UwRkJVMjlFTEZsQlFWUXNRMEZCYzBKd1JDeEpRVUYwUWl4RlFVRTBRazhzU1VGQk5VSXNSVUZCYTBNd1F5eExRVUZzUXl4RlFVRjVRenRCUVVOMlF5eE5RVUZKVHl4VFFVRlRMRWRCUVVkSUxHRkJRV0VzUTBGQlF6bERMRWxCUVVRc1EwRkJOMEk3UVVGQlFTeE5RVU5KYTBRc1dVRkJXU3hIUVVGSFNpeGhRVUZoTEVOQlFVTktMRXRCUVVRc1EwRkVhRU03TzBGQlIwRXNUVUZCU1ZNc1ZVRkJWU3hEUVVGRFJpeFRRVUZFTEVOQlFWWXNTVUZCZVVKRkxGVkJRVlVzUTBGQlEwUXNXVUZCUkN4RFFVRjJReXhGUVVGMVJEdEJRVU55UkR0QlFVTkJPMEZCUVVrN1FVRkJRVHRCUVVGQk96dEJRVUZCUlR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCTzBGQlFVRXNTMEZCWjBKSUxGTkJRV2hDTEVWQlFUSkNReXhaUVVFelFpeExRVU5IUnl4clFrRkJhMElzUTBGQlExZ3NTMEZCUkN4RlFVRlJUeXhUUVVGU0xFVkJRVzFDUVN4VFFVRlRMRU5CUVVOb1F5eE5RVUZXTEVkQlFXMUNhVU1zV1VGQldTeERRVUZEYWtNc1RVRkJia1FzUTBGRWVrSXNSVUZEY1VZN1FVRkJRVHRCUVVGQk96dEJRVUZCT3p0QlFVTnVSanM3UVVGQlFUczdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRWGhDTEUxQlFVRkJMRWxCUVVrc1EwRkJRMFVzUzBGQlRDeEZRVUZYTkVJc1NVRkJXRHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVc5Q01FSXNUVUZCUVVFc1UwRkJjRUk3TzBGQlEwRTdRVUZEUkN4TFFVcEVMRTFCU1U4N1FVRkJTVHRCUVVGQk8wRkJRVUU3TzBGQlFVRkhPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRTdRVUZCUVN4TFFVRm5Ra1lzV1VGQmFFSXNSVUZCT0VKRUxGTkJRVGxDTEV0QlEwcEpMR3RDUVVGclFpeERRVUZEY2tRc1NVRkJSQ3hGUVVGUGEwUXNXVUZCVUN4RlFVRnhRa0VzV1VGQldTeERRVUZEYWtNc1RVRkJZaXhIUVVGelFtZERMRk5CUVZNc1EwRkJRMmhETEUxQlFYSkVMRU5CUkd4Q0xFVkJRMmRHTzBGQlFVRTdRVUZCUVRzN1FVRkJRVHM3UVVGRGNrWTdPMEZCUVVFN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRjRRaXhOUVVGQlFTeEpRVUZKTEVOQlFVTkZMRXRCUVV3c1JVRkJWelJDTEVsQlFWZzdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZ2UWpKQ0xFMUJRVUZCTEZsQlFYQkNPenRCUVVOQk8wRkJRMFE3UVVGRFJpeEhRVmhFTEUxQlYwODdRVUZCU1R0QlFVRkJPMEZCUVVFN08wRkJRVUZKTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUU3UVVGQlFTeEhRVUZYVEN4VFFVRllMRVZCUVhOQ1F5eFpRVUYwUWl4RFFVRktMRVZCUVhsRE8wRkJRVUU3UVVGQlFUczdRVUZCUVRzN1FVRkRPVU03TzBGQlFVRTdPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUY2UkN4SlFVRkJRU3hKUVVGSkxFTkJRVU5GTEV0QlFVd3NSVUZCVnpSQ0xFbEJRVmc3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGdlFqQkNMRWxCUVVGQkxGTkJRWEJDT3p0QlFVTkJPMEZCUTBRN08wRkJSVVJpTEVWQlFVRkJMRkZCUVZFc1EwRkJRek5ETEVsQlFVUXNSVUZCVDNkRUxGTkJRVkFzUlVGQmEwSkRMRmxCUVd4Q0xFTkJRVkk3UVVGRFJEczdRVUZGUkN4VFFVRlRTQ3hQUVVGVUxFTkJRV2xDZEVRc1NVRkJha0lzUlVGQmRVSlBMRWxCUVhaQ0xFVkJRVFpDTUVNc1MwRkJOMElzUlVGQmIwTmhMRWxCUVhCRExFVkJRVEJETzBGQlEzaERMRTFCUVVsT0xGTkJRVk1zUjBGQlIwZ3NZVUZCWVN4RFFVRkRPVU1zU1VGQlJDeERRVUUzUWp0QlFVRkJMRTFCUTBsclJDeFpRVUZaTEVkQlFVZE5MR05CUVdNc1EwRkJRMlFzUzBGQlJDeEZRVUZSVHl4VFFVRlNMRU5CUkdwRE96dEJRVVZCTEUxQlFVbERMRmxCUVZrc1EwRkJRMDhzVFVGQmFrSXNSVUZCZVVJN1FVRkJRVHRCUVVGQk96dEJRVUZCT3p0QlFVTjJRanM3UVVGQlFUczdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRV2hGTEVsQlFVRkJMRWxCUVVrc1EwRkJRMFVzUzBGQlRDeEZRVUZYTkVJc1NVRkJXRHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVc5Q01rSXNTVUZCUVVFc1dVRkJXU3hEUVVGRFR5eE5RVUZxUXp0QlFVTkVMRWRCUmtRc1RVRkZUenRCUVVOTWNrSXNTVUZCUVVFc1VVRkJVU3hEUVVGRE0wTXNTVUZCUkN4RlFVRlBPRVFzU1VGQlNTeEhRVUZIVEN4WlFVRklMRWRCUVd0Q1JDeFRRVUUzUWl4RlFVRjNRMDBzU1VGQlNTeEhRVUZIVGl4VFFVRklMRWRCUVdWRExGbEJRVE5FTEVOQlFWSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGTkJRVk5rTEZGQlFWUXNRMEZCYTBJelF5eEpRVUZzUWl4RlFVRjNRazhzU1VGQmVFSXNSVUZCT0VJd1F5eExRVUU1UWl4RlFVRnhRenRCUVVOdVEycEVMRVZCUVVGQkxFbEJRVWtzUTBGQlF6SkRMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVRORExFVkJRVUZCTEVsQlFVa3NRMEZCUTBVc1MwRkJUQ3hEUVVGWE5FSXNTVUZCV0N4RFFVRm5RanRCUVVOa1lTeEpRVUZCUVN4UlFVRlJMRVZCUVVVc1NVRkVTVHRCUVVWa2NFTXNTVUZCUVVFc1NVRkJTU3hGUVVGRlFTeEpRVVpSTzBGQlIyUkRMRWxCUVVGQkxFMUJRVTBzUlVGQlJYbERPMEZCU0Uwc1IwRkJhRUk3UVVGTFJEczdRVUZGUkN4VFFVRlRReXhoUVVGVUxFTkJRWFZDYkVRc1NVRkJka0lzUlVGQk5rSnBSU3hOUVVFM1FpeEZRVUZ4UTJoQ0xFdEJRWEpETEVWQlFUUkRPMEZCUXpGRExGTkJRVTluUWl4TlFVRk5MRU5CUVVOd1FpeE5RVUZRTEVkQlFXZENTU3hMUVVGTExFTkJRVU5LTEUxQlFYUkNMRWxCUVdkRGIwSXNUVUZCVFN4RFFVRkRja1FzUzBGQlVDeEhRVUZsY1VRc1RVRkJUU3hEUVVGREwwUXNTMEZCVUN4RFFVRmhjMElzVFVGQmJrVXNSVUZCTWtVN1FVRkRla1VzVVVGQlNUQkRMRWxCUVVrc1IwRkJSMFFzVFVGQlRTeERRVUZETDBRc1MwRkJVQ3hEUVVGaEswUXNUVUZCVFN4RFFVRkRja1FzUzBGQlVDeEZRVUZpTEVOQlFWZzdRVUZEUVZvc1NVRkJRVUVzU1VGQlNTeERRVUZEUlN4TFFVRk1MRU5CUVZjMFFpeEpRVUZZTEVOQlFXZENiME1zU1VGQmFFSTdRVUZEUVVRc1NVRkJRVUVzVFVGQlRTeERRVUZEY0VJc1RVRkJVRHRCUVVORU8wRkJRMFk3TzBGQlEwUXNVMEZCVTFVc1kwRkJWQ3hEUVVGM1FuWkVMRWxCUVhoQ0xFVkJRVGhDYVVVc1RVRkJPVUlzUlVGQmMwTTdRVUZEY0VNc1UwRkJUMEVzVFVGQlRTeERRVUZEY2tRc1MwRkJVQ3hIUVVGbGNVUXNUVUZCVFN4RFFVRkRMMFFzUzBGQlVDeERRVUZoYzBJc1RVRkJia01zUlVGQk1rTTdRVUZEZWtNc1VVRkJTVEJETEVsQlFVa3NSMEZCUjBRc1RVRkJUU3hEUVVGREwwUXNTMEZCVUN4RFFVRmhLMFFzVFVGQlRTeERRVUZEY2tRc1MwRkJVQ3hGUVVGaUxFTkJRVmc3UVVGRFFWb3NTVUZCUVVFc1NVRkJTU3hEUVVGRFJTeExRVUZNTEVOQlFWYzBRaXhKUVVGWUxFTkJRV2RDYjBNc1NVRkJhRUk3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRk5CUVZOaUxHRkJRVlFzUTBGQmRVSmpMRXRCUVhaQ0xFVkJRVGhDTzBGQlF6VkNMRTFCUVVsNFJDeEhRVUZITEVkQlFVY3NSVUZCVmp0QlFVRkJMRTFCUTBsNVJDeFRRVUZUTEVkQlFVZEVMRXRCUVVzc1EwRkJRMnBGTEV0QlFVNHNRMEZCV1dsRkxFdEJRVXNzUTBGQlEzWkVMRXRCUVd4Q0xFVkJRWGxDTEVOQlFYcENMRU5CUkdoQ096dEJRVVZCTEZOQlFVOTFSQ3hMUVVGTExFTkJRVU4yUkN4TFFVRk9MRWRCUVdOMVJDeExRVUZMTEVOQlFVTnFSU3hMUVVGT0xFTkJRVmx6UWl4TlFVRnFReXhGUVVGNVF6dEJRVU4yUXl4UlFVRkpNRU1zU1VGQlNTeEhRVUZIUXl4TFFVRkxMRU5CUVVOcVJTeExRVUZPTEVOQlFWbHBSU3hMUVVGTExFTkJRVU4yUkN4TFFVRnNRaXhEUVVGWUxFTkJSSFZETEVOQlIzWkRPenRCUVVOQkxGRkJRVWwzUkN4VFFVRlRMRXRCUVVzc1IwRkJaQ3hKUVVGeFFrWXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJTaXhMUVVGWkxFZEJRWEpETEVWQlFUQkRPMEZCUTNoRFJTeE5RVUZCUVN4VFFVRlRMRWRCUVVjc1IwRkJXanRCUVVORU96dEJRVVZFTEZGQlFVbEJMRk5CUVZNc1MwRkJTMFlzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCZEVJc1JVRkJNa0k3UVVGRGVrSjJSQ3hOUVVGQlFTeEhRVUZITEVOQlFVTnRRaXhKUVVGS0xFTkJRVk52UXl4SlFVRlVPMEZCUTBGRExFMUJRVUZCTEV0QlFVc3NRMEZCUTNaRUxFdEJRVTQ3UVVGRFJDeExRVWhFTEUxQlIwODdRVUZEVER0QlFVTkVPMEZCUTBZN08wRkJSVVFzVTBGQlQwUXNSMEZCVUR0QlFVTkVPenRCUVVORUxGTkJRVk52UkN4alFVRlVMRU5CUVhkQ1NTeExRVUY0UWl4RlFVRXJRa1VzV1VGQkwwSXNSVUZCTmtNN1FVRkRNME1zVFVGQlNVTXNUMEZCVHl4SFFVRkhMRVZCUVdRN1FVRkJRU3hOUVVOSlRpeE5RVUZOTEVkQlFVY3NSVUZFWWp0QlFVRkJMRTFCUlVsUExGVkJRVlVzUjBGQlJ5eERRVVpxUWp0QlFVRkJMRTFCUjBsRExHTkJRV01zUjBGQlJ5eExRVWh5UWp0QlFVRkJMRTFCU1VsRExGVkJRVlVzUjBGQlJ5eExRVXBxUWpzN1FVRkxRU3hUUVVGUFJpeFZRVUZWTEVkQlFVZEdMRmxCUVZrc1EwRkJRemRETEUxQlFURkNMRWxCUTBVeVF5eExRVUZMTEVOQlFVTjJSQ3hMUVVGT0xFZEJRV04xUkN4TFFVRkxMRU5CUVVOcVJTeExRVUZPTEVOQlFWbHpRaXhOUVVSdVF5eEZRVU15UXp0QlFVTjZReXhSUVVGSmEwUXNUVUZCVFN4SFFVRkhVQ3hMUVVGTExFTkJRVU5xUlN4TFFVRk9MRU5CUVZscFJTeExRVUZMTEVOQlFVTjJSQ3hMUVVGc1FpeERRVUZpTzBGQlFVRXNVVUZEU1N0RUxFdEJRVXNzUjBGQlIwNHNXVUZCV1N4RFFVRkRSU3hWUVVGRUxFTkJSSGhDTEVOQlJIbERMRU5CU1hwRE96dEJRVU5CTEZGQlFVbEpMRXRCUVVzc1EwRkJReXhEUVVGRUxFTkJRVXdzUzBGQllTeEhRVUZxUWl4RlFVRnpRanRCUVVOd1FqdEJRVU5FT3p0QlFVVkVTQ3hKUVVGQlFTeGpRVUZqTEVkQlFVZEJMR05CUVdNc1NVRkJTVVVzVFVGQlRTeERRVUZETEVOQlFVUXNRMEZCVGl4TFFVRmpMRWRCUVdwRU8wRkJSVUZXTEVsQlFVRkJMRTFCUVUwc1EwRkJRMnhETEVsQlFWQXNRMEZCV1RaRExFdEJRVm83UVVGRFFVb3NTVUZCUVVFc1ZVRkJWU3hIUVZvclFpeERRV042UXp0QlFVTkJPenRCUVVOQkxGRkJRVWxITEUxQlFVMHNRMEZCUXl4RFFVRkVMRU5CUVU0c1MwRkJZeXhIUVVGc1FpeEZRVUYxUWp0QlFVTnlRa1FzVFVGQlFVRXNWVUZCVlN4SFFVRkhMRWxCUVdJN08wRkJSVUVzWVVGQlQwTXNUVUZCVFN4RFFVRkRMRU5CUVVRc1EwRkJUaXhMUVVGakxFZEJRWEpDTEVWQlFUQkNPMEZCUTNoQ1NpeFJRVUZCUVN4UFFVRlBMRU5CUVVONFF5eEpRVUZTTEVOQlFXRTBReXhOUVVGaU8wRkJRMEZCTEZGQlFVRkJMRTFCUVUwc1IwRkJSMUFzUzBGQlN5eERRVUZEYWtVc1MwRkJUaXhEUVVGWkxFVkJRVVZwUlN4TFFVRkxMRU5CUVVOMlJDeExRVUZ3UWl4RFFVRlVPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFJRVUZKSzBRc1MwRkJTeXhEUVVGRFF5eE5RVUZPTEVOQlFXRXNRMEZCWWl4TlFVRnZRa1lzVFVGQlRTeERRVUZEUlN4TlFVRlFMRU5CUVdNc1EwRkJaQ3hEUVVGNFFpeEZRVUV3UXp0QlFVTjRRMDRzVFVGQlFVRXNUMEZCVHl4RFFVRkRlRU1zU1VGQlVpeERRVUZoTkVNc1RVRkJZanRCUVVOQlVDeE5RVUZCUVN4TFFVRkxMRU5CUVVOMlJDeExRVUZPTzBGQlEwUXNTMEZJUkN4TlFVZFBPMEZCUTB3MlJDeE5RVUZCUVN4VlFVRlZMRWRCUVVjc1NVRkJZanRCUVVORU8wRkJRMFk3TzBGQlJVUXNUVUZCU1N4RFFVRkRTaXhaUVVGWkxFTkJRVU5GTEZWQlFVUXNRMEZCV2l4SlFVRTBRaXhGUVVFM1FpeEZRVUZwUXl4RFFVRnFReXhOUVVGM1F5eEhRVUY0UXl4SlFVTkhReXhqUVVSUUxFVkJRM1ZDTzBGQlEzSkNReXhKUVVGQlFTeFZRVUZWTEVkQlFVY3NTVUZCWWp0QlFVTkVPenRCUVVWRUxFMUJRVWxCTEZWQlFVb3NSVUZCWjBJN1FVRkRaQ3hYUVVGUFNDeFBRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJUME1zVlVGQlZTeEhRVUZIUml4WlFVRlpMRU5CUVVNM1F5eE5RVUZxUXl4RlFVRjVRenRCUVVOMlEzZERMRWxCUVVGQkxFMUJRVTBzUTBGQlEyeERMRWxCUVZBc1EwRkJXWFZETEZsQlFWa3NRMEZCUTBVc1ZVRkJWU3hGUVVGWUxFTkJRWGhDTzBGQlEwUTdPMEZCUlVRc1UwRkJUenRCUVVOTVVDeEpRVUZCUVN4TlFVRk5MRVZCUVU1QkxFMUJSRXM3UVVGRlRFMHNTVUZCUVVFc1QwRkJUeXhGUVVGUVFUdEJRVVpMTEVkQlFWQTdRVUZKUkRzN1FVRkZSQ3hUUVVGVFdpeFZRVUZVTEVOQlFXOUNXU3hQUVVGd1FpeEZRVUUyUWp0QlFVTXpRaXhUUVVGUFFTeFBRVUZQTEVOQlFVTlBMRTFCUVZJc1EwRkJaU3hWUVVGVFF5eEpRVUZVTEVWQlFXVktMRTFCUVdZc1JVRkJkVUk3UVVGRE0wTXNWMEZCVDBrc1NVRkJTU3hKUVVGSlNpeE5RVUZOTEVOQlFVTXNRMEZCUkN4RFFVRk9MRXRCUVdNc1IwRkJOMEk3UVVGRFJDeEhRVVpOTEVWQlJVb3NTVUZHU1N4RFFVRlFPMEZCUjBRN08wRkJRMFFzVTBGQlUyUXNhMEpCUVZRc1EwRkJORUpQTEV0QlFUVkNMRVZCUVcxRFdTeGhRVUZ1UXl4RlFVRnJSRU1zUzBGQmJFUXNSVUZCZVVRN1FVRkRka1FzVDBGQlN5eEpRVUZKUXl4RFFVRkRMRWRCUVVjc1EwRkJZaXhGUVVGblFrRXNRMEZCUXl4SFFVRkhSQ3hMUVVGd1FpeEZRVUV5UWtNc1EwRkJReXhGUVVFMVFpeEZRVUZuUXp0QlFVTTVRaXhSUVVGSlF5eGhRVUZoTEVkQlFVZElMR0ZCUVdFc1EwRkJRMEVzWVVGQllTeERRVUZEZGtRc1RVRkJaQ3hIUVVGMVFuZEVMRXRCUVhaQ0xFZEJRU3RDUXl4RFFVRm9ReXhEUVVGaUxFTkJRV2RFVEN4TlFVRm9SQ3hEUVVGMVJDeERRVUYyUkN4RFFVRndRanM3UVVGRFFTeFJRVUZKVkN4TFFVRkxMRU5CUVVOcVJTeExRVUZPTEVOQlFWbHBSU3hMUVVGTExFTkJRVU4yUkN4TFFVRk9MRWRCUVdOeFJTeERRVUV4UWl4TlFVRnBReXhOUVVGTlF5eGhRVUV6UXl4RlFVRXdSRHRCUVVONFJDeGhRVUZQTEV0QlFWQTdRVUZEUkR0QlFVTkdPenRCUVVWRVppeEZRVUZCUVN4TFFVRkxMRU5CUVVOMlJDeExRVUZPTEVsQlFXVnZSU3hMUVVGbU8wRkJRMEVzVTBGQlR5eEpRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVeTlGTEcxQ1FVRlVMRU5CUVRaQ1F5eExRVUUzUWl4RlFVRnZRenRCUVVOc1F5eE5RVUZKUXl4UlFVRlJMRWRCUVVjc1EwRkJaanRCUVVOQkxFMUJRVWxETEZGQlFWRXNSMEZCUnl4RFFVRm1PMEZCUlVGR0xFVkJRVUZCTEV0QlFVc3NRMEZCUTJsR0xFOUJRVTRzUTBGQll5eFZRVUZUYWtJc1NVRkJWQ3hGUVVGbE8wRkJRek5DTEZGQlFVa3NUMEZCVDBFc1NVRkJVQ3hMUVVGblFpeFJRVUZ3UWl4RlFVRTRRanRCUVVNMVFpeFZRVUZKYTBJc1QwRkJUeXhIUVVGSGJrWXNiVUpCUVcxQ0xFTkJRVU5wUlN4SlFVRkpMRU5CUVVNelJDeEpRVUZPTEVOQlFXcERPMEZCUTBFc1ZVRkJTVGhGTEZWQlFWVXNSMEZCUjNCR0xHMUNRVUZ0UWl4RFFVRkRhVVVzU1VGQlNTeERRVUZETVVRc1RVRkJUaXhEUVVGd1F6czdRVUZGUVN4VlFVRkpUQ3hSUVVGUkxFdEJRVXRGTEZOQlFXcENMRVZCUVRSQ08wRkJRekZDTEZsQlFVa3JSU3hQUVVGUExFTkJRVU5xUml4UlFVRlNMRXRCUVhGQ2EwWXNWVUZCVlN4RFFVRkRiRVlzVVVGQmNFTXNSVUZCT0VNN1FVRkROVU5CTEZWQlFVRkJMRkZCUVZFc1NVRkJTV2xHTEU5QlFVOHNRMEZCUTJwR0xGRkJRWEJDTzBGQlEwUXNVMEZHUkN4TlFVVlBPMEZCUTB4QkxGVkJRVUZCTEZGQlFWRXNSMEZCUjBVc1UwRkJXRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNWVUZCU1VRc1VVRkJVU3hMUVVGTFF5eFRRVUZxUWl4RlFVRTBRanRCUVVNeFFpeFpRVUZKSzBVc1QwRkJUeXhEUVVGRGFFWXNVVUZCVWl4TFFVRnhRbWxHTEZWQlFWVXNRMEZCUTJwR0xGRkJRWEJETEVWQlFUaERPMEZCUXpWRFFTeFZRVUZCUVN4UlFVRlJMRWxCUVVsblJpeFBRVUZQTEVOQlFVTm9SaXhSUVVGd1FqdEJRVU5FTEZOQlJrUXNUVUZGVHp0QlFVTk1RU3hWUVVGQlFTeFJRVUZSTEVkQlFVZERMRk5CUVZnN1FVRkRSRHRCUVVOR08wRkJRMFlzUzBGdVFrUXNUVUZ0UWs4N1FVRkRUQ3hWUVVGSlJDeFJRVUZSTEV0QlFVdERMRk5CUVdJc1MwRkJNa0kyUkN4SlFVRkpMRU5CUVVNc1EwRkJSQ3hEUVVGS0xFdEJRVmtzUjBGQldpeEpRVUZ0UWtFc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeExRVUZaTEVkQlFURkVMRU5CUVVvc1JVRkJiMFU3UVVGRGJFVTVSQ3hSUVVGQlFTeFJRVUZSTzBGQlExUTdPMEZCUTBRc1ZVRkJTVVFzVVVGQlVTeExRVUZMUlN4VFFVRmlMRXRCUVRKQ05rUXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJTaXhMUVVGWkxFZEJRVm9zU1VGQmJVSkJMRWxCUVVrc1EwRkJReXhEUVVGRUxFTkJRVW9zUzBGQldTeEhRVUV4UkN4RFFVRktMRVZCUVc5Rk8wRkJRMnhGTDBRc1VVRkJRVUVzVVVGQlVUdEJRVU5VTzBGQlEwWTdRVUZEUml4SFFUVkNSRHRCUVRoQ1FTeFRRVUZQTzBGQlFVTkJMRWxCUVVGQkxGRkJRVkVzUlVGQlVrRXNVVUZCUkR0QlFVRlhReXhKUVVGQlFTeFJRVUZSTEVWQlFWSkJPMEZCUVZnc1IwRkJVRHRCUVVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIdHpkSEoxWTNSMWNtVmtVR0YwWTJoOUlHWnliMjBnSnk0dlkzSmxZWFJsSnp0Y2JtbHRjRzl5ZENCN2NHRnljMlZRWVhSamFIMGdabkp2YlNBbkxpOXdZWEp6WlNjN1hHNWNibWx0Y0c5eWRDQjdZWEp5WVhsRmNYVmhiQ3dnWVhKeVlYbFRkR0Z5ZEhOWGFYUm9mU0JtY205dElDY3VMaTkxZEdsc0wyRnljbUY1Snp0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHTmhiR05NYVc1bFEyOTFiblFvYUhWdWF5a2dlMXh1SUNCamIyNXpkQ0I3YjJ4a1RHbHVaWE1zSUc1bGQweHBibVZ6ZlNBOUlHTmhiR05QYkdST1pYZE1hVzVsUTI5MWJuUW9hSFZ1YXk1c2FXNWxjeWs3WEc1Y2JpQWdhV1lnS0c5c1pFeHBibVZ6SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQm9kVzVyTG05c1pFeHBibVZ6SUQwZ2IyeGtUR2x1WlhNN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1pHVnNaWFJsSUdoMWJtc3ViMnhrVEdsdVpYTTdYRzRnSUgxY2JseHVJQ0JwWmlBb2JtVjNUR2x1WlhNZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR2gxYm1zdWJtVjNUR2x1WlhNZ1BTQnVaWGRNYVc1bGN6dGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmtaV3hsZEdVZ2FIVnVheTV1WlhkTWFXNWxjenRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYldWeVoyVW9iV2x1WlN3Z2RHaGxhWEp6TENCaVlYTmxLU0I3WEc0Z0lHMXBibVVnUFNCc2IyRmtVR0YwWTJnb2JXbHVaU3dnWW1GelpTazdYRzRnSUhSb1pXbHljeUE5SUd4dllXUlFZWFJqYUNoMGFHVnBjbk1zSUdKaGMyVXBPMXh1WEc0Z0lHeGxkQ0J5WlhRZ1BTQjdmVHRjYmx4dUlDQXZMeUJHYjNJZ2FXNWtaWGdnZDJVZ2FuVnpkQ0JzWlhRZ2FYUWdjR0Z6Y3lCMGFISnZkV2RvSUdGeklHbDBJR1J2WlhOdUozUWdhR0YyWlNCaGJua2dibVZqWlhOellYSjVJRzFsWVc1cGJtY3VYRzRnSUM4dklFeGxZWFpwYm1jZ2MyRnVhWFI1SUdOb1pXTnJjeUJ2YmlCMGFHbHpJSFJ2SUhSb1pTQkJVRWtnWTI5dWMzVnRaWElnZEdoaGRDQnRZWGtnYTI1dmR5QnRiM0psSUdGaWIzVjBJSFJvWlZ4dUlDQXZMeUJ0WldGdWFXNW5JR2x1SUhSb1pXbHlJRzkzYmlCamIyNTBaWGgwTGx4dUlDQnBaaUFvYldsdVpTNXBibVJsZUNCOGZDQjBhR1ZwY25NdWFXNWtaWGdwSUh0Y2JpQWdJQ0J5WlhRdWFXNWtaWGdnUFNCdGFXNWxMbWx1WkdWNElIeDhJSFJvWldseWN5NXBibVJsZUR0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h0YVc1bExtNWxkMFpwYkdWT1lXMWxJSHg4SUhSb1pXbHljeTV1WlhkR2FXeGxUbUZ0WlNrZ2UxeHVJQ0FnSUdsbUlDZ2habWxzWlU1aGJXVkRhR0Z1WjJWa0tHMXBibVVwS1NCN1hHNGdJQ0FnSUNBdkx5Qk9ieUJvWldGa1pYSWdiM0lnYm04Z1kyaGhibWRsSUdsdUlHOTFjbk1zSUhWelpTQjBhR1ZwY25NZ0tHRnVaQ0J2ZFhKeklHbG1JSFJvWldseWN5QmtiMlZ6SUc1dmRDQmxlR2x6ZENsY2JpQWdJQ0FnSUhKbGRDNXZiR1JHYVd4bFRtRnRaU0E5SUhSb1pXbHljeTV2YkdSR2FXeGxUbUZ0WlNCOGZDQnRhVzVsTG05c1pFWnBiR1ZPWVcxbE8xeHVJQ0FnSUNBZ2NtVjBMbTVsZDBacGJHVk9ZVzFsSUQwZ2RHaGxhWEp6TG01bGQwWnBiR1ZPWVcxbElIeDhJRzFwYm1VdWJtVjNSbWxzWlU1aGJXVTdYRzRnSUNBZ0lDQnlaWFF1YjJ4a1NHVmhaR1Z5SUQwZ2RHaGxhWEp6TG05c1pFaGxZV1JsY2lCOGZDQnRhVzVsTG05c1pFaGxZV1JsY2p0Y2JpQWdJQ0FnSUhKbGRDNXVaWGRJWldGa1pYSWdQU0IwYUdWcGNuTXVibVYzU0dWaFpHVnlJSHg4SUcxcGJtVXVibVYzU0dWaFpHVnlPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JV1pwYkdWT1lXMWxRMmhoYm1kbFpDaDBhR1ZwY25NcEtTQjdYRzRnSUNBZ0lDQXZMeUJPYnlCb1pXRmtaWElnYjNJZ2JtOGdZMmhoYm1kbElHbHVJSFJvWldseWN5d2dkWE5sSUc5MWNuTmNiaUFnSUNBZ0lISmxkQzV2YkdSR2FXeGxUbUZ0WlNBOUlHMXBibVV1YjJ4a1JtbHNaVTVoYldVN1hHNGdJQ0FnSUNCeVpYUXVibVYzUm1sc1pVNWhiV1VnUFNCdGFXNWxMbTVsZDBacGJHVk9ZVzFsTzF4dUlDQWdJQ0FnY21WMExtOXNaRWhsWVdSbGNpQTlJRzFwYm1VdWIyeGtTR1ZoWkdWeU8xeHVJQ0FnSUNBZ2NtVjBMbTVsZDBobFlXUmxjaUE5SUcxcGJtVXVibVYzU0dWaFpHVnlPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QkNiM1JvSUdOb1lXNW5aV1F1TGk0Z1ptbG5kWEpsSUdsMElHOTFkRnh1SUNBZ0lDQWdjbVYwTG05c1pFWnBiR1ZPWVcxbElEMGdjMlZzWldOMFJtbGxiR1FvY21WMExDQnRhVzVsTG05c1pFWnBiR1ZPWVcxbExDQjBhR1ZwY25NdWIyeGtSbWxzWlU1aGJXVXBPMXh1SUNBZ0lDQWdjbVYwTG01bGQwWnBiR1ZPWVcxbElEMGdjMlZzWldOMFJtbGxiR1FvY21WMExDQnRhVzVsTG01bGQwWnBiR1ZPWVcxbExDQjBhR1ZwY25NdWJtVjNSbWxzWlU1aGJXVXBPMXh1SUNBZ0lDQWdjbVYwTG05c1pFaGxZV1JsY2lBOUlITmxiR1ZqZEVacFpXeGtLSEpsZEN3Z2JXbHVaUzV2YkdSSVpXRmtaWElzSUhSb1pXbHljeTV2YkdSSVpXRmtaWElwTzF4dUlDQWdJQ0FnY21WMExtNWxkMGhsWVdSbGNpQTlJSE5sYkdWamRFWnBaV3hrS0hKbGRDd2diV2x1WlM1dVpYZElaV0ZrWlhJc0lIUm9aV2x5Y3k1dVpYZElaV0ZrWlhJcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkQzVvZFc1cmN5QTlJRnRkTzF4dVhHNGdJR3hsZENCdGFXNWxTVzVrWlhnZ1BTQXdMRnh1SUNBZ0lDQWdkR2hsYVhKelNXNWtaWGdnUFNBd0xGeHVJQ0FnSUNBZ2JXbHVaVTltWm5ObGRDQTlJREFzWEc0Z0lDQWdJQ0IwYUdWcGNuTlBabVp6WlhRZ1BTQXdPMXh1WEc0Z0lIZG9hV3hsSUNodGFXNWxTVzVrWlhnZ1BDQnRhVzVsTG1oMWJtdHpMbXhsYm1kMGFDQjhmQ0IwYUdWcGNuTkpibVJsZUNBOElIUm9aV2x5Y3k1b2RXNXJjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQnNaWFFnYldsdVpVTjFjbkpsYm5RZ1BTQnRhVzVsTG1oMWJtdHpXMjFwYm1WSmJtUmxlRjBnZkh3Z2UyOXNaRk4wWVhKME9pQkpibVpwYm1sMGVYMHNYRzRnSUNBZ0lDQWdJSFJvWldseWMwTjFjbkpsYm5RZ1BTQjBhR1ZwY25NdWFIVnVhM05iZEdobGFYSnpTVzVrWlhoZElIeDhJSHR2YkdSVGRHRnlkRG9nU1c1bWFXNXBkSGw5TzF4dVhHNGdJQ0FnYVdZZ0tHaDFibXRDWldadmNtVW9iV2x1WlVOMWNuSmxiblFzSUhSb1pXbHljME4xY25KbGJuUXBLU0I3WEc0Z0lDQWdJQ0F2THlCVWFHbHpJSEJoZEdOb0lHUnZaWE1nYm05MElHOTJaWEpzWVhBZ2QybDBhQ0JoYm5rZ2IyWWdkR2hsSUc5MGFHVnljeXdnZVdGNUxseHVJQ0FnSUNBZ2NtVjBMbWgxYm10ekxuQjFjMmdvWTJ4dmJtVklkVzVyS0cxcGJtVkRkWEp5Wlc1MExDQnRhVzVsVDJabWMyVjBLU2s3WEc0Z0lDQWdJQ0J0YVc1bFNXNWtaWGdyS3p0Y2JpQWdJQ0FnSUhSb1pXbHljMDltWm5ObGRDQXJQU0J0YVc1bFEzVnljbVZ1ZEM1dVpYZE1hVzVsY3lBdElHMXBibVZEZFhKeVpXNTBMbTlzWkV4cGJtVnpPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hSFZ1YTBKbFptOXlaU2gwYUdWcGNuTkRkWEp5Wlc1MExDQnRhVzVsUTNWeWNtVnVkQ2twSUh0Y2JpQWdJQ0FnSUM4dklGUm9hWE1nY0dGMFkyZ2daRzlsY3lCdWIzUWdiM1psY214aGNDQjNhWFJvSUdGdWVTQnZaaUIwYUdVZ2IzUm9aWEp6TENCNVlYa3VYRzRnSUNBZ0lDQnlaWFF1YUhWdWEzTXVjSFZ6YUNoamJHOXVaVWgxYm1zb2RHaGxhWEp6UTNWeWNtVnVkQ3dnZEdobGFYSnpUMlptYzJWMEtTazdYRzRnSUNBZ0lDQjBhR1ZwY25OSmJtUmxlQ3NyTzF4dUlDQWdJQ0FnYldsdVpVOW1abk5sZENBclBTQjBhR1ZwY25ORGRYSnlaVzUwTG01bGQweHBibVZ6SUMwZ2RHaGxhWEp6UTNWeWNtVnVkQzV2YkdSTWFXNWxjenRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0x5OGdUM1psY214aGNDd2diV1Z5WjJVZ1lYTWdZbVZ6ZENCM1pTQmpZVzVjYmlBZ0lDQWdJR3hsZENCdFpYSm5aV1JJZFc1cklEMGdlMXh1SUNBZ0lDQWdJQ0J2YkdSVGRHRnlkRG9nVFdGMGFDNXRhVzRvYldsdVpVTjFjbkpsYm5RdWIyeGtVM1JoY25Rc0lIUm9aV2x5YzBOMWNuSmxiblF1YjJ4a1UzUmhjblFwTEZ4dUlDQWdJQ0FnSUNCdmJHUk1hVzVsY3pvZ01DeGNiaUFnSUNBZ0lDQWdibVYzVTNSaGNuUTZJRTFoZEdndWJXbHVLRzFwYm1WRGRYSnlaVzUwTG01bGQxTjBZWEowSUNzZ2JXbHVaVTltWm5ObGRDd2dkR2hsYVhKelEzVnljbVZ1ZEM1dmJHUlRkR0Z5ZENBcklIUm9aV2x5YzA5bVpuTmxkQ2tzWEc0Z0lDQWdJQ0FnSUc1bGQweHBibVZ6T2lBd0xGeHVJQ0FnSUNBZ0lDQnNhVzVsY3pvZ1cxMWNiaUFnSUNBZ0lIMDdYRzRnSUNBZ0lDQnRaWEpuWlV4cGJtVnpLRzFsY21kbFpFaDFibXNzSUcxcGJtVkRkWEp5Wlc1MExtOXNaRk4wWVhKMExDQnRhVzVsUTNWeWNtVnVkQzVzYVc1bGN5d2dkR2hsYVhKelEzVnljbVZ1ZEM1dmJHUlRkR0Z5ZEN3Z2RHaGxhWEp6UTNWeWNtVnVkQzVzYVc1bGN5azdYRzRnSUNBZ0lDQjBhR1ZwY25OSmJtUmxlQ3NyTzF4dUlDQWdJQ0FnYldsdVpVbHVaR1Y0S3lzN1hHNWNiaUFnSUNBZ0lISmxkQzVvZFc1cmN5NXdkWE5vS0cxbGNtZGxaRWgxYm1zcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCeVpYUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHeHZZV1JRWVhSamFDaHdZWEpoYlN3Z1ltRnpaU2tnZTF4dUlDQnBaaUFvZEhsd1pXOW1JSEJoY21GdElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR2xtSUNnb0wxNUFRQzl0S1M1MFpYTjBLSEJoY21GdEtTQjhmQ0FvS0M5ZVNXNWtaWGc2TDIwcExuUmxjM1FvY0dGeVlXMHBLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEJoY25ObFVHRjBZMmdvY0dGeVlXMHBXekJkTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNnaFltRnpaU2tnZTF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2ROZFhOMElIQnliM1pwWkdVZ1lTQmlZWE5sSUhKbFptVnlaVzVqWlNCdmNpQndZWE56SUdsdUlHRWdjR0YwWTJnbktUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSE4wY25WamRIVnlaV1JRWVhSamFDaDFibVJsWm1sdVpXUXNJSFZ1WkdWbWFXNWxaQ3dnWW1GelpTd2djR0Z5WVcwcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIQmhjbUZ0TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJtYVd4bFRtRnRaVU5vWVc1blpXUW9jR0YwWTJncElIdGNiaUFnY21WMGRYSnVJSEJoZEdOb0xtNWxkMFpwYkdWT1lXMWxJQ1ltSUhCaGRHTm9MbTVsZDBacGJHVk9ZVzFsSUNFOVBTQndZWFJqYUM1dmJHUkdhV3hsVG1GdFpUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2MyVnNaV04wUm1sbGJHUW9hVzVrWlhnc0lHMXBibVVzSUhSb1pXbHljeWtnZTF4dUlDQnBaaUFvYldsdVpTQTlQVDBnZEdobGFYSnpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHMXBibVU3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYVc1a1pYZ3VZMjl1Wm14cFkzUWdQU0IwY25WbE8xeHVJQ0FnSUhKbGRIVnliaUI3YldsdVpTd2dkR2hsYVhKemZUdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJvZFc1clFtVm1iM0psS0hSbGMzUXNJR05vWldOcktTQjdYRzRnSUhKbGRIVnliaUIwWlhOMExtOXNaRk4wWVhKMElEd2dZMmhsWTJzdWIyeGtVM1JoY25SY2JpQWdJQ0FtSmlBb2RHVnpkQzV2YkdSVGRHRnlkQ0FySUhSbGMzUXViMnhrVEdsdVpYTXBJRHdnWTJobFkyc3ViMnhrVTNSaGNuUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnNiMjVsU0hWdWF5aG9kVzVyTENCdlptWnpaWFFwSUh0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCdmJHUlRkR0Z5ZERvZ2FIVnVheTV2YkdSVGRHRnlkQ3dnYjJ4a1RHbHVaWE02SUdoMWJtc3ViMnhrVEdsdVpYTXNYRzRnSUNBZ2JtVjNVM1JoY25RNklHaDFibXN1Ym1WM1UzUmhjblFnS3lCdlptWnpaWFFzSUc1bGQweHBibVZ6T2lCb2RXNXJMbTVsZDB4cGJtVnpMRnh1SUNBZ0lHeHBibVZ6T2lCb2RXNXJMbXhwYm1WelhHNGdJSDA3WEc1OVhHNWNibVoxYm1OMGFXOXVJRzFsY21kbFRHbHVaWE1vYUhWdWF5d2diV2x1WlU5bVpuTmxkQ3dnYldsdVpVeHBibVZ6TENCMGFHVnBjazltWm5ObGRDd2dkR2hsYVhKTWFXNWxjeWtnZTF4dUlDQXZMeUJVYUdseklIZHBiR3dnWjJWdVpYSmhiR3g1SUhKbGMzVnNkQ0JwYmlCaElHTnZibVpzYVdOMFpXUWdhSFZ1YXl3Z1luVjBJSFJvWlhKbElHRnlaU0JqWVhObGN5QjNhR1Z5WlNCMGFHVWdZMjl1ZEdWNGRGeHVJQ0F2THlCcGN5QjBhR1VnYjI1c2VTQnZkbVZ5YkdGd0lIZG9aWEpsSUhkbElHTmhiaUJ6ZFdOalpYTnpablZzYkhrZ2JXVnlaMlVnZEdobElHTnZiblJsYm5RZ2FHVnlaUzVjYmlBZ2JHVjBJRzFwYm1VZ1BTQjdiMlptYzJWME9pQnRhVzVsVDJabWMyVjBMQ0JzYVc1bGN6b2diV2x1WlV4cGJtVnpMQ0JwYm1SbGVEb2dNSDBzWEc0Z0lDQWdJQ0IwYUdWcGNpQTlJSHR2Wm1aelpYUTZJSFJvWldseVQyWm1jMlYwTENCc2FXNWxjem9nZEdobGFYSk1hVzVsY3l3Z2FXNWtaWGc2SURCOU8xeHVYRzRnSUM4dklFaGhibVJzWlNCaGJua2diR1ZoWkdsdVp5QmpiMjUwWlc1MFhHNGdJR2x1YzJWeWRFeGxZV1JwYm1jb2FIVnVheXdnYldsdVpTd2dkR2hsYVhJcE8xeHVJQ0JwYm5ObGNuUk1aV0ZrYVc1bktHaDFibXNzSUhSb1pXbHlMQ0J0YVc1bEtUdGNibHh1SUNBdkx5Qk9iM2NnYVc0Z2RHaGxJRzkyWlhKc1lYQWdZMjl1ZEdWdWRDNGdVMk5oYmlCMGFISnZkV2RvSUdGdVpDQnpaV3hsWTNRZ2RHaGxJR0psYzNRZ1kyaGhibWRsY3lCbWNtOXRJR1ZoWTJndVhHNGdJSGRvYVd4bElDaHRhVzVsTG1sdVpHVjRJRHdnYldsdVpTNXNhVzVsY3k1c1pXNW5kR2dnSmlZZ2RHaGxhWEl1YVc1a1pYZ2dQQ0IwYUdWcGNpNXNhVzVsY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0JzWlhRZ2JXbHVaVU4xY25KbGJuUWdQU0J0YVc1bExteHBibVZ6VzIxcGJtVXVhVzVrWlhoZExGeHVJQ0FnSUNBZ0lDQjBhR1ZwY2tOMWNuSmxiblFnUFNCMGFHVnBjaTVzYVc1bGMxdDBhR1ZwY2k1cGJtUmxlRjA3WEc1Y2JpQWdJQ0JwWmlBb0tHMXBibVZEZFhKeVpXNTBXekJkSUQwOVBTQW5MU2NnZkh3Z2JXbHVaVU4xY25KbGJuUmJNRjBnUFQwOUlDY3JKeWxjYmlBZ0lDQWdJQ0FnSmlZZ0tIUm9aV2x5UTNWeWNtVnVkRnN3WFNBOVBUMGdKeTBuSUh4OElIUm9aV2x5UTNWeWNtVnVkRnN3WFNBOVBUMGdKeXNuS1NrZ2UxeHVJQ0FnSUNBZ0x5OGdRbTkwYUNCdGIyUnBabWxsWkNBdUxpNWNiaUFnSUNBZ0lHMTFkSFZoYkVOb1lXNW5aU2hvZFc1ckxDQnRhVzVsTENCMGFHVnBjaWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2h0YVc1bFEzVnljbVZ1ZEZzd1hTQTlQVDBnSnlzbklDWW1JSFJvWldseVEzVnljbVZ1ZEZzd1hTQTlQVDBnSnlBbktTQjdYRzRnSUNBZ0lDQXZMeUJOYVc1bElHbHVjMlZ5ZEdWa1hHNGdJQ0FnSUNCb2RXNXJMbXhwYm1WekxuQjFjMmdvTGk0dUlHTnZiR3hsWTNSRGFHRnVaMlVvYldsdVpTa3BPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hsYVhKRGRYSnlaVzUwV3pCZElEMDlQU0FuS3ljZ0ppWWdiV2x1WlVOMWNuSmxiblJiTUYwZ1BUMDlJQ2NnSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdWR2hsYVhKeklHbHVjMlZ5ZEdWa1hHNGdJQ0FnSUNCb2RXNXJMbXhwYm1WekxuQjFjMmdvTGk0dUlHTnZiR3hsWTNSRGFHRnVaMlVvZEdobGFYSXBLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRzFwYm1WRGRYSnlaVzUwV3pCZElEMDlQU0FuTFNjZ0ppWWdkR2hsYVhKRGRYSnlaVzUwV3pCZElEMDlQU0FuSUNjcElIdGNiaUFnSUNBZ0lDOHZJRTFwYm1VZ2NtVnRiM1psWkNCdmNpQmxaR2wwWldSY2JpQWdJQ0FnSUhKbGJXOTJZV3dvYUhWdWF5d2diV2x1WlN3Z2RHaGxhWElwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdobGFYSkRkWEp5Wlc1MFd6QmRJRDA5UFNBbkxTY2dKaVlnYldsdVpVTjFjbkpsYm5SYk1GMGdQVDA5SUNjZ0p5a2dlMXh1SUNBZ0lDQWdMeThnVkdobGFYSWdjbVZ0YjNabFpDQnZjaUJsWkdsMFpXUmNiaUFnSUNBZ0lISmxiVzkyWVd3b2FIVnVheXdnZEdobGFYSXNJRzFwYm1Vc0lIUnlkV1VwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvYldsdVpVTjFjbkpsYm5RZ1BUMDlJSFJvWldseVEzVnljbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0x5OGdRMjl1ZEdWNGRDQnBaR1Z1ZEdsMGVWeHVJQ0FnSUNBZ2FIVnVheTVzYVc1bGN5NXdkWE5vS0cxcGJtVkRkWEp5Wlc1MEtUdGNiaUFnSUNBZ0lHMXBibVV1YVc1a1pYZ3JLenRjYmlBZ0lDQWdJSFJvWldseUxtbHVaR1Y0S3lzN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQzh2SUVOdmJuUmxlSFFnYldsemJXRjBZMmhjYmlBZ0lDQWdJR052Ym1ac2FXTjBLR2gxYm1zc0lHTnZiR3hsWTNSRGFHRnVaMlVvYldsdVpTa3NJR052Ykd4bFkzUkRhR0Z1WjJVb2RHaGxhWElwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5Qk9iM2NnY0hWemFDQmhibmwwYUdsdVp5QjBhR0YwSUcxaGVTQmlaU0J5WlcxaGFXNXBibWRjYmlBZ2FXNXpaWEowVkhKaGFXeHBibWNvYUhWdWF5d2diV2x1WlNrN1hHNGdJR2x1YzJWeWRGUnlZV2xzYVc1bktHaDFibXNzSUhSb1pXbHlLVHRjYmx4dUlDQmpZV3hqVEdsdVpVTnZkVzUwS0doMWJtc3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnRkWFIxWVd4RGFHRnVaMlVvYUhWdWF5d2diV2x1WlN3Z2RHaGxhWElwSUh0Y2JpQWdiR1YwSUcxNVEyaGhibWRsY3lBOUlHTnZiR3hsWTNSRGFHRnVaMlVvYldsdVpTa3NYRzRnSUNBZ0lDQjBhR1ZwY2tOb1lXNW5aWE1nUFNCamIyeHNaV04wUTJoaGJtZGxLSFJvWldseUtUdGNibHh1SUNCcFppQW9ZV3hzVW1WdGIzWmxjeWh0ZVVOb1lXNW5aWE1wSUNZbUlHRnNiRkpsYlc5MlpYTW9kR2hsYVhKRGFHRnVaMlZ6S1NrZ2UxeHVJQ0FnSUM4dklGTndaV05wWVd3Z1kyRnpaU0JtYjNJZ2NtVnRiM1psSUdOb1lXNW5aWE1nZEdoaGRDQmhjbVVnYzNWd1pYSnpaWFJ6SUc5bUlHOXVaU0JoYm05MGFHVnlYRzRnSUNBZ2FXWWdLR0Z5Y21GNVUzUmhjblJ6VjJsMGFDaHRlVU5vWVc1blpYTXNJSFJvWldseVEyaGhibWRsY3lsY2JpQWdJQ0FnSUNBZ0ppWWdjMnRwY0ZKbGJXOTJaVk4xY0dWeWMyVjBLSFJvWldseUxDQnRlVU5vWVc1blpYTXNJRzE1UTJoaGJtZGxjeTVzWlc1bmRHZ2dMU0IwYUdWcGNrTm9ZVzVuWlhNdWJHVnVaM1JvS1NrZ2UxeHVJQ0FnSUNBZ2FIVnVheTVzYVc1bGN5NXdkWE5vS0M0dUxpQnRlVU5vWVc1blpYTXBPMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lYSnlZWGxUZEdGeWRITlhhWFJvS0hSb1pXbHlRMmhoYm1kbGN5d2diWGxEYUdGdVoyVnpLVnh1SUNBZ0lDQWdJQ0FtSmlCemEybHdVbVZ0YjNabFUzVndaWEp6WlhRb2JXbHVaU3dnZEdobGFYSkRhR0Z1WjJWekxDQjBhR1ZwY2tOb1lXNW5aWE11YkdWdVozUm9JQzBnYlhsRGFHRnVaMlZ6TG14bGJtZDBhQ2twSUh0Y2JpQWdJQ0FnSUdoMWJtc3ViR2x1WlhNdWNIVnphQ2d1TGk0Z2RHaGxhWEpEYUdGdVoyVnpLVHRjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNGdJSDBnWld4elpTQnBaaUFvWVhKeVlYbEZjWFZoYkNodGVVTm9ZVzVuWlhNc0lIUm9aV2x5UTJoaGJtZGxjeWtwSUh0Y2JpQWdJQ0JvZFc1ckxteHBibVZ6TG5CMWMyZ29MaTR1SUcxNVEyaGhibWRsY3lrN1hHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnWTI5dVpteHBZM1FvYUhWdWF5d2diWGxEYUdGdVoyVnpMQ0IwYUdWcGNrTm9ZVzVuWlhNcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpXMXZkbUZzS0doMWJtc3NJRzFwYm1Vc0lIUm9aV2x5TENCemQyRndLU0I3WEc0Z0lHeGxkQ0J0ZVVOb1lXNW5aWE1nUFNCamIyeHNaV04wUTJoaGJtZGxLRzFwYm1VcExGeHVJQ0FnSUNBZ2RHaGxhWEpEYUdGdVoyVnpJRDBnWTI5c2JHVmpkRU52Ym5SbGVIUW9kR2hsYVhJc0lHMTVRMmhoYm1kbGN5azdYRzRnSUdsbUlDaDBhR1ZwY2tOb1lXNW5aWE11YldWeVoyVmtLU0I3WEc0Z0lDQWdhSFZ1YXk1c2FXNWxjeTV3ZFhOb0tDNHVMaUIwYUdWcGNrTm9ZVzVuWlhNdWJXVnlaMlZrS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNW1iR2xqZENob2RXNXJMQ0J6ZDJGd0lEOGdkR2hsYVhKRGFHRnVaMlZ6SURvZ2JYbERhR0Z1WjJWekxDQnpkMkZ3SUQ4Z2JYbERhR0Z1WjJWeklEb2dkR2hsYVhKRGFHRnVaMlZ6S1R0Y2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpiMjVtYkdsamRDaG9kVzVyTENCdGFXNWxMQ0IwYUdWcGNpa2dlMXh1SUNCb2RXNXJMbU52Ym1ac2FXTjBJRDBnZEhKMVpUdGNiaUFnYUhWdWF5NXNhVzVsY3k1d2RYTm9LSHRjYmlBZ0lDQmpiMjVtYkdsamREb2dkSEoxWlN4Y2JpQWdJQ0J0YVc1bE9pQnRhVzVsTEZ4dUlDQWdJSFJvWldseWN6b2dkR2hsYVhKY2JpQWdmU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJR2x1YzJWeWRFeGxZV1JwYm1jb2FIVnVheXdnYVc1elpYSjBMQ0IwYUdWcGNpa2dlMXh1SUNCM2FHbHNaU0FvYVc1elpYSjBMbTltWm5ObGRDQThJSFJvWldseUxtOW1abk5sZENBbUppQnBibk5sY25RdWFXNWtaWGdnUENCcGJuTmxjblF1YkdsdVpYTXViR1Z1WjNSb0tTQjdYRzRnSUNBZ2JHVjBJR3hwYm1VZ1BTQnBibk5sY25RdWJHbHVaWE5iYVc1elpYSjBMbWx1WkdWNEt5dGRPMXh1SUNBZ0lHaDFibXN1YkdsdVpYTXVjSFZ6YUNoc2FXNWxLVHRjYmlBZ0lDQnBibk5sY25RdWIyWm1jMlYwS3lzN1hHNGdJSDFjYm4xY2JtWjFibU4wYVc5dUlHbHVjMlZ5ZEZSeVlXbHNhVzVuS0doMWJtc3NJR2x1YzJWeWRDa2dlMXh1SUNCM2FHbHNaU0FvYVc1elpYSjBMbWx1WkdWNElEd2dhVzV6WlhKMExteHBibVZ6TG14bGJtZDBhQ2tnZTF4dUlDQWdJR3hsZENCc2FXNWxJRDBnYVc1elpYSjBMbXhwYm1WelcybHVjMlZ5ZEM1cGJtUmxlQ3NyWFR0Y2JpQWdJQ0JvZFc1ckxteHBibVZ6TG5CMWMyZ29iR2x1WlNrN1hHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdZMjlzYkdWamRFTm9ZVzVuWlNoemRHRjBaU2tnZTF4dUlDQnNaWFFnY21WMElEMGdXMTBzWEc0Z0lDQWdJQ0J2Y0dWeVlYUnBiMjRnUFNCemRHRjBaUzVzYVc1bGMxdHpkR0YwWlM1cGJtUmxlRjFiTUYwN1hHNGdJSGRvYVd4bElDaHpkR0YwWlM1cGJtUmxlQ0E4SUhOMFlYUmxMbXhwYm1WekxteGxibWQwYUNrZ2UxeHVJQ0FnSUd4bGRDQnNhVzVsSUQwZ2MzUmhkR1V1YkdsdVpYTmJjM1JoZEdVdWFXNWtaWGhkTzF4dVhHNGdJQ0FnTHk4Z1IzSnZkWEFnWVdSa2FYUnBiMjV6SUhSb1lYUWdZWEpsSUdsdGJXVmthV0YwWld4NUlHRm1kR1Z5SUhOMVluUnlZV04wYVc5dWN5QmhibVFnZEhKbFlYUWdkR2hsYlNCaGN5QnZibVVnWENKaGRHOXRhV05jSWlCdGIyUnBabmtnWTJoaGJtZGxMbHh1SUNBZ0lHbG1JQ2h2Y0dWeVlYUnBiMjRnUFQwOUlDY3RKeUFtSmlCc2FXNWxXekJkSUQwOVBTQW5LeWNwSUh0Y2JpQWdJQ0FnSUc5d1pYSmhkR2x2YmlBOUlDY3JKenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYjNCbGNtRjBhVzl1SUQwOVBTQnNhVzVsV3pCZEtTQjdYRzRnSUNBZ0lDQnlaWFF1Y0hWemFDaHNhVzVsS1R0Y2JpQWdJQ0FnSUhOMFlYUmxMbWx1WkdWNEt5czdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnlaWFE3WEc1OVhHNW1kVzVqZEdsdmJpQmpiMnhzWldOMFEyOXVkR1Y0ZENoemRHRjBaU3dnYldGMFkyaERhR0Z1WjJWektTQjdYRzRnSUd4bGRDQmphR0Z1WjJWeklEMGdXMTBzWEc0Z0lDQWdJQ0J0WlhKblpXUWdQU0JiWFN4Y2JpQWdJQ0FnSUcxaGRHTm9TVzVrWlhnZ1BTQXdMRnh1SUNBZ0lDQWdZMjl1ZEdWNGRFTm9ZVzVuWlhNZ1BTQm1ZV3h6WlN4Y2JpQWdJQ0FnSUdOdmJtWnNhV04wWldRZ1BTQm1ZV3h6WlR0Y2JpQWdkMmhwYkdVZ0tHMWhkR05vU1c1a1pYZ2dQQ0J0WVhSamFFTm9ZVzVuWlhNdWJHVnVaM1JvWEc0Z0lDQWdJQ0FnSUNZbUlITjBZWFJsTG1sdVpHVjRJRHdnYzNSaGRHVXViR2x1WlhNdWJHVnVaM1JvS1NCN1hHNGdJQ0FnYkdWMElHTm9ZVzVuWlNBOUlITjBZWFJsTG14cGJtVnpXM04wWVhSbExtbHVaR1Y0WFN4Y2JpQWdJQ0FnSUNBZ2JXRjBZMmdnUFNCdFlYUmphRU5vWVc1blpYTmJiV0YwWTJoSmJtUmxlRjA3WEc1Y2JpQWdJQ0F2THlCUGJtTmxJSGRsSjNabElHaHBkQ0J2ZFhJZ1lXUmtMQ0IwYUdWdUlIZGxJR0Z5WlNCa2IyNWxYRzRnSUNBZ2FXWWdLRzFoZEdOb1d6QmRJRDA5UFNBbkt5Y3BJSHRjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuUmxlSFJEYUdGdVoyVnpJRDBnWTI5dWRHVjRkRU5vWVc1blpYTWdmSHdnWTJoaGJtZGxXekJkSUNFOVBTQW5JQ2M3WEc1Y2JpQWdJQ0J0WlhKblpXUXVjSFZ6YUNodFlYUmphQ2s3WEc0Z0lDQWdiV0YwWTJoSmJtUmxlQ3NyTzF4dVhHNGdJQ0FnTHk4Z1EyOXVjM1Z0WlNCaGJua2dZV1JrYVhScGIyNXpJR2x1SUhSb1pTQnZkR2hsY2lCaWJHOWpheUJoY3lCaElHTnZibVpzYVdOMElIUnZJR0YwZEdWdGNIUmNiaUFnSUNBdkx5QjBieUJ3ZFd4c0lHbHVJSFJvWlNCeVpXMWhhVzVwYm1jZ1kyOXVkR1Y0ZENCaFpuUmxjaUIwYUdselhHNGdJQ0FnYVdZZ0tHTm9ZVzVuWlZzd1hTQTlQVDBnSnlzbktTQjdYRzRnSUNBZ0lDQmpiMjVtYkdsamRHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdkMmhwYkdVZ0tHTm9ZVzVuWlZzd1hTQTlQVDBnSnlzbktTQjdYRzRnSUNBZ0lDQWdJR05vWVc1blpYTXVjSFZ6YUNoamFHRnVaMlVwTzF4dUlDQWdJQ0FnSUNCamFHRnVaMlVnUFNCemRHRjBaUzVzYVc1bGMxc3JLM04wWVhSbExtbHVaR1Y0WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2JXRjBZMmd1YzNWaWMzUnlLREVwSUQwOVBTQmphR0Z1WjJVdWMzVmljM1J5S0RFcEtTQjdYRzRnSUNBZ0lDQmphR0Z1WjJWekxuQjFjMmdvWTJoaGJtZGxLVHRjYmlBZ0lDQWdJSE4wWVhSbExtbHVaR1Y0S3lzN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym1ac2FXTjBaV1FnUFNCMGNuVmxPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNnb2JXRjBZMmhEYUdGdVoyVnpXMjFoZEdOb1NXNWtaWGhkSUh4OElDY25LVnN3WFNBOVBUMGdKeXNuWEc0Z0lDQWdJQ0FtSmlCamIyNTBaWGgwUTJoaGJtZGxjeWtnZTF4dUlDQWdJR052Ym1ac2FXTjBaV1FnUFNCMGNuVmxPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHTnZibVpzYVdOMFpXUXBJSHRjYmlBZ0lDQnlaWFIxY200Z1kyaGhibWRsY3p0Y2JpQWdmVnh1WEc0Z0lIZG9hV3hsSUNodFlYUmphRWx1WkdWNElEd2diV0YwWTJoRGFHRnVaMlZ6TG14bGJtZDBhQ2tnZTF4dUlDQWdJRzFsY21kbFpDNXdkWE5vS0cxaGRHTm9RMmhoYm1kbGMxdHRZWFJqYUVsdVpHVjRLeXRkS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnYldWeVoyVmtMRnh1SUNBZ0lHTm9ZVzVuWlhOY2JpQWdmVHRjYm4xY2JseHVablZ1WTNScGIyNGdZV3hzVW1WdGIzWmxjeWhqYUdGdVoyVnpLU0I3WEc0Z0lISmxkSFZ5YmlCamFHRnVaMlZ6TG5KbFpIVmpaU2htZFc1amRHbHZiaWh3Y21WMkxDQmphR0Z1WjJVcElIdGNiaUFnSUNCeVpYUjFjbTRnY0hKbGRpQW1KaUJqYUdGdVoyVmJNRjBnUFQwOUlDY3RKenRjYmlBZ2ZTd2dkSEoxWlNrN1hHNTlYRzVtZFc1amRHbHZiaUJ6YTJsd1VtVnRiM1psVTNWd1pYSnpaWFFvYzNSaGRHVXNJSEpsYlc5MlpVTm9ZVzVuWlhNc0lHUmxiSFJoS1NCN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWkdWc2RHRTdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQmphR0Z1WjJWRGIyNTBaVzUwSUQwZ2NtVnRiM1psUTJoaGJtZGxjMXR5WlcxdmRtVkRhR0Z1WjJWekxteGxibWQwYUNBdElHUmxiSFJoSUNzZ2FWMHVjM1ZpYzNSeUtERXBPMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNXNhVzVsYzF0emRHRjBaUzVwYm1SbGVDQXJJR2xkSUNFOVBTQW5JQ2NnS3lCamFHRnVaMlZEYjI1MFpXNTBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2MzUmhkR1V1YVc1a1pYZ2dLejBnWkdWc2RHRTdYRzRnSUhKbGRIVnliaUIwY25WbE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCallXeGpUMnhrVG1WM1RHbHVaVU52ZFc1MEtHeHBibVZ6S1NCN1hHNGdJR3hsZENCdmJHUk1hVzVsY3lBOUlEQTdYRzRnSUd4bGRDQnVaWGRNYVc1bGN5QTlJREE3WEc1Y2JpQWdiR2x1WlhNdVptOXlSV0ZqYUNobWRXNWpkR2x2Ymloc2FXNWxLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJzYVc1bElDRTlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnYkdWMElHMTVRMjkxYm5RZ1BTQmpZV3hqVDJ4a1RtVjNUR2x1WlVOdmRXNTBLR3hwYm1VdWJXbHVaU2s3WEc0Z0lDQWdJQ0JzWlhRZ2RHaGxhWEpEYjNWdWRDQTlJR05oYkdOUGJHUk9aWGRNYVc1bFEyOTFiblFvYkdsdVpTNTBhR1ZwY25NcE8xeHVYRzRnSUNBZ0lDQnBaaUFvYjJ4a1RHbHVaWE1nSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2JYbERiM1Z1ZEM1dmJHUk1hVzVsY3lBOVBUMGdkR2hsYVhKRGIzVnVkQzV2YkdSTWFXNWxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHOXNaRXhwYm1WeklDczlJRzE1UTI5MWJuUXViMnhrVEdsdVpYTTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnYjJ4a1RHbHVaWE1nUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0c1bGQweHBibVZ6SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHMTVRMjkxYm5RdWJtVjNUR2x1WlhNZ1BUMDlJSFJvWldseVEyOTFiblF1Ym1WM1RHbHVaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQnVaWGRNYVc1bGN5QXJQU0J0ZVVOdmRXNTBMbTVsZDB4cGJtVnpPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUc1bGQweHBibVZ6SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaHVaWGRNYVc1bGN5QWhQVDBnZFc1a1pXWnBibVZrSUNZbUlDaHNhVzVsV3pCZElEMDlQU0FuS3ljZ2ZId2diR2x1WlZzd1hTQTlQVDBnSnlBbktTa2dlMXh1SUNBZ0lDQWdJQ0J1WlhkTWFXNWxjeXNyTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tHOXNaRXhwYm1WeklDRTlQU0IxYm1SbFptbHVaV1FnSmlZZ0tHeHBibVZiTUYwZ1BUMDlJQ2N0SnlCOGZDQnNhVzVsV3pCZElEMDlQU0FuSUNjcEtTQjdYRzRnSUNBZ0lDQWdJRzlzWkV4cGJtVnpLeXM3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnZTI5c1pFeHBibVZ6TENCdVpYZE1hVzVsYzMwN1hHNTlYRzRpWFgwPVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlUGF0Y2ggPSBwYXJzZVBhdGNoO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuZnVuY3Rpb24gcGFyc2VQYXRjaCh1bmlEaWZmKSB7XG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgdmFyXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgZGlmZnN0ciA9IHVuaURpZmYuc3BsaXQoL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdLyksXG4gICAgICBkZWxpbWl0ZXJzID0gdW5pRGlmZi5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICBsaXN0ID0gW10sXG4gICAgICBpID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xuICAgIHZhciBpbmRleCA9IHt9O1xuICAgIGxpc3QucHVzaChpbmRleCk7IC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcblxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gZGlmZnN0cltpXTsgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcblxuICAgICAgaWYgKC9eKFxcLVxcLVxcLXxcXCtcXCtcXCt8QEApXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBEaWZmIGluZGV4XG5cblxuICAgICAgdmFyIGhlYWRlciA9IC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLy5leGVjKGxpbmUpO1xuXG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGluZGV4LmluZGV4ID0gaGVhZGVyWzFdO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfSAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuXG5cbiAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7IC8vIFBhcnNlIGh1bmtzXG5cbiAgICBpbmRleC5odW5rcyA9IFtdO1xuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgdmFyIF9saW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgaWYgKC9eKEluZGV4OnxkaWZmfFxcLVxcLVxcLXxcXCtcXCtcXCspXFxzLy50ZXN0KF9saW5lKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoL15AQC8udGVzdChfbGluZSkpIHtcbiAgICAgICAgaW5kZXguaHVua3MucHVzaChwYXJzZUh1bmsoKSk7XG4gICAgICB9IGVsc2UgaWYgKF9saW5lICYmIG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIC8vIElnbm9yZSB1bmV4cGVjdGVkIGNvbnRlbnQgdW5sZXNzIGluIHN0cmljdCBtb2RlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaW5lICcgKyAoaSArIDEpICsgJyAnICsgSlNPTi5zdHJpbmdpZnkoX2xpbmUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcbiAgLy8gYXJlIGNvbnN1bWVkLlxuXG5cbiAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XG4gICAgdmFyIGZpbGVIZWFkZXIgPSAvXigtLS18XFwrXFwrXFwrKVxccysoLiopJC8uZXhlYyhkaWZmc3RyW2ldKTtcblxuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICB2YXIga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgdmFyIGRhdGEgPSBmaWxlSGVhZGVyWzJdLnNwbGl0KCdcXHQnLCAyKTtcbiAgICAgIHZhciBmaWxlTmFtZSA9IGRhdGFbMF0ucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKTtcblxuICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICB9XG5cbiAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnSGVhZGVyJ10gPSAoZGF0YVsxXSB8fCAnJykudHJpbSgpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfSAvLyBQYXJzZXMgYSBodW5rXG4gIC8vIFRoaXMgYXNzdW1lcyB0aGF0IHdlIGFyZSBhdCB0aGUgc3RhcnQgb2YgYSBodW5rLlxuXG5cbiAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xuICAgIHZhciBjaHVua0hlYWRlckluZGV4ID0gaSxcbiAgICAgICAgY2h1bmtIZWFkZXJMaW5lID0gZGlmZnN0cltpKytdLFxuICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcbiAgICB2YXIgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzJdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbMl0sXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6IHR5cGVvZiBjaHVua0hlYWRlcls0XSA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogK2NodW5rSGVhZGVyWzRdLFxuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgfTsgLy8gVW5pZmllZCBEaWZmIEZvcm1hdCBxdWlyazogSWYgdGhlIGNodW5rIHNpemUgaXMgMCxcbiAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG5cbiAgICBpZiAoaHVuay5vbGRMaW5lcyA9PT0gMCkge1xuICAgICAgaHVuay5vbGRTdGFydCArPSAxO1xuICAgIH1cblxuICAgIGlmIChodW5rLm5ld0xpbmVzID09PSAwKSB7XG4gICAgICBodW5rLm5ld1N0YXJ0ICs9IDE7XG4gICAgfVxuXG4gICAgdmFyIGFkZENvdW50ID0gMCxcbiAgICAgICAgcmVtb3ZlQ291bnQgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBkaWZmc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoICctLS0nIGNvdWxkIGJlIG1pc3Rha2VuIGZvciB0aGUgXCJyZW1vdmUgbGluZVwiIG9wZXJhdGlvblxuICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgaWYgKGRpZmZzdHJbaV0uaW5kZXhPZignLS0tICcpID09PSAwICYmIGkgKyAyIDwgZGlmZnN0ci5sZW5ndGggJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwICYmIGRpZmZzdHJbaSArIDJdLmluZGV4T2YoJ0BAJykgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcGVyYXRpb24gPSBkaWZmc3RyW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gZGlmZnN0ci5sZW5ndGggLSAxID8gJyAnIDogZGlmZnN0cltpXVswXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IC8vIEhhbmRsZSB0aGUgZW1wdHkgYmxvY2sgY291bnQgY2FzZVxuXG5cbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cblxuICAgIGlmICghcmVtb3ZlQ291bnQgJiYgaHVuay5vbGRMaW5lcyA9PT0gMSkge1xuICAgICAgaHVuay5vbGRMaW5lcyA9IDA7XG4gICAgfSAvLyBQZXJmb3JtIG9wdGlvbmFsIHNhbml0eSBjaGVja2luZ1xuXG5cbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIGlmIChhZGRDb3VudCAhPT0gaHVuay5uZXdMaW5lcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZGVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbW92ZUNvdW50ICE9PSBodW5rLm9sZExpbmVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bms7XG4gIH1cblxuICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgcGFyc2VJbmRleCgpO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3WVhSamFDOXdZWEp6WlM1cWN5SmRMQ0p1WVcxbGN5STZXeUp3WVhKelpWQmhkR05vSWl3aWRXNXBSR2xtWmlJc0ltOXdkR2x2Ym5NaUxDSmthV1ptYzNSeUlpd2ljM0JzYVhRaUxDSmtaV3hwYldsMFpYSnpJaXdpYldGMFkyZ2lMQ0pzYVhOMElpd2lhU0lzSW5CaGNuTmxTVzVrWlhnaUxDSnBibVJsZUNJc0luQjFjMmdpTENKc1pXNW5kR2dpTENKc2FXNWxJaXdpZEdWemRDSXNJbWhsWVdSbGNpSXNJbVY0WldNaUxDSndZWEp6WlVacGJHVklaV0ZrWlhJaUxDSm9kVzVyY3lJc0luQmhjbk5sU0hWdWF5SXNJbk4wY21samRDSXNJa1Z5Y205eUlpd2lTbE5QVGlJc0luTjBjbWx1WjJsbWVTSXNJbVpwYkdWSVpXRmtaWElpTENKclpYbFFjbVZtYVhnaUxDSmtZWFJoSWl3aVptbHNaVTVoYldVaUxDSnlaWEJzWVdObElpd2ljM1ZpYzNSeUlpd2lkSEpwYlNJc0ltTm9kVzVyU0dWaFpHVnlTVzVrWlhnaUxDSmphSFZ1YTBobFlXUmxja3hwYm1VaUxDSmphSFZ1YTBobFlXUmxjaUlzSW1oMWJtc2lMQ0p2YkdSVGRHRnlkQ0lzSW05c1pFeHBibVZ6SWl3aWJtVjNVM1JoY25RaUxDSnVaWGRNYVc1bGN5SXNJbXhwYm1Weklpd2liR2x1WldSbGJHbHRhWFJsY25NaUxDSmhaR1JEYjNWdWRDSXNJbkpsYlc5MlpVTnZkVzUwSWl3aWFXNWtaWGhQWmlJc0ltOXdaWEpoZEdsdmJpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzBGQlFVOHNVMEZCVTBFc1ZVRkJWQ3hEUVVGdlFrTXNUMEZCY0VJc1JVRkJNa003UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCWkVNc1JVRkJRVUVzVDBGQll5eDFSVUZCU2l4RlFVRkpPMEZCUTJoRUxFMUJRVWxETEU5QlFVOHNSMEZCUjBZc1QwRkJUeXhEUVVGRFJ5eExRVUZTTEVOQlFXTXNjVUpCUVdRc1EwRkJaRHRCUVVGQkxFMUJRMGxETEZWQlFWVXNSMEZCUjBvc1QwRkJUeXhEUVVGRFN5eExRVUZTTEVOQlFXTXNjMEpCUVdRc1MwRkJlVU1zUlVGRU1VUTdRVUZCUVN4TlFVVkpReXhKUVVGSkxFZEJRVWNzUlVGR1dEdEJRVUZCTEUxQlIwbERMRU5CUVVNc1IwRkJSeXhEUVVoU096dEJRVXRCTEZkQlFWTkRMRlZCUVZRc1IwRkJjMEk3UVVGRGNFSXNVVUZCU1VNc1MwRkJTeXhIUVVGSExFVkJRVm83UVVGRFFVZ3NTVUZCUVVFc1NVRkJTU3hEUVVGRFNTeEpRVUZNTEVOQlFWVkVMRXRCUVZZc1JVRkdiMElzUTBGSmNFSTdPMEZCUTBFc1YwRkJUMFlzUTBGQlF5eEhRVUZIVEN4UFFVRlBMRU5CUVVOVExFMUJRVzVDTEVWQlFUSkNPMEZCUTNwQ0xGVkJRVWxETEVsQlFVa3NSMEZCUjFZc1QwRkJUeXhEUVVGRFN5eERRVUZFTEVOQlFXeENMRU5CUkhsQ0xFTkJSM3BDT3p0QlFVTkJMRlZCUVVzc2RVSkJRVVFzUTBGQk1FSk5MRWxCUVRGQ0xFTkJRU3RDUkN4SlFVRXZRaXhEUVVGS0xFVkJRVEJETzBGQlEzaERPMEZCUTBRc1QwRk9kMElzUTBGUmVrSTdPenRCUVVOQkxGVkJRVWxGTEUxQlFVMHNSMEZCU1N3d1EwRkJSQ3hEUVVFMlEwTXNTVUZCTjBNc1EwRkJhMFJJTEVsQlFXeEVMRU5CUVdJN08wRkJRMEVzVlVGQlNVVXNUVUZCU2l4RlFVRlpPMEZCUTFaTUxGRkJRVUZCTEV0QlFVc3NRMEZCUTBFc1MwRkJUaXhIUVVGalN5eE5RVUZOTEVOQlFVTXNRMEZCUkN4RFFVRndRanRCUVVORU96dEJRVVZFVUN4TlFVRkJRU3hEUVVGRE8wRkJRMFlzUzBGd1FtMUNMRU5CYzBKd1FqdEJRVU5CT3pzN1FVRkRRVk1zU1VGQlFVRXNaVUZCWlN4RFFVRkRVQ3hMUVVGRUxFTkJRV1k3UVVGRFFVOHNTVUZCUVVFc1pVRkJaU3hEUVVGRFVDeExRVUZFTEVOQlFXWXNRMEY2UW05Q0xFTkJNa0p3UWpzN1FVRkRRVUVzU1VGQlFVRXNTMEZCU3l4RFFVRkRVU3hMUVVGT0xFZEJRV01zUlVGQlpEczdRVUZGUVN4WFFVRlBWaXhEUVVGRExFZEJRVWRNTEU5QlFVOHNRMEZCUTFNc1RVRkJia0lzUlVGQk1rSTdRVUZEZWtJc1ZVRkJTVU1zUzBGQlNTeEhRVUZIVml4UFFVRlBMRU5CUVVOTExFTkJRVVFzUTBGQmJFSTdPMEZCUlVFc1ZVRkJTeXhuUTBGQlJDeERRVUZ0UTAwc1NVRkJia01zUTBGQmQwTkVMRXRCUVhoRExFTkJRVW9zUlVGQmJVUTdRVUZEYWtRN1FVRkRSQ3hQUVVaRUxFMUJSVThzU1VGQlN5eExRVUZFTEVOQlFWRkRMRWxCUVZJc1EwRkJZVVFzUzBGQllpeERRVUZLTEVWQlFYZENPMEZCUXpkQ1NDeFJRVUZCUVN4TFFVRkxMRU5CUVVOUkxFdEJRVTRzUTBGQldWQXNTVUZCV2l4RFFVRnBRbEVzVTBGQlV5eEZRVUV4UWp0QlFVTkVMRTlCUmswc1RVRkZRU3hKUVVGSlRpeExRVUZKTEVsQlFVbFlMRTlCUVU4c1EwRkJRMnRDTEUxQlFYQkNMRVZCUVRSQ08wRkJRMnBETzBGQlEwRXNZMEZCVFN4SlFVRkpReXhMUVVGS0xFTkJRVlVzYlVKQlFXMUNZaXhEUVVGRExFZEJRVWNzUTBGQmRrSXNTVUZCTkVJc1IwRkJOVUlzUjBGQmEwTmpMRWxCUVVrc1EwRkJRME1zVTBGQlRDeERRVUZsVml4TFFVRm1MRU5CUVRWRExFTkJRVTQ3UVVGRFJDeFBRVWhOTEUxQlIwRTdRVUZEVEV3c1VVRkJRVUVzUTBGQlF6dEJRVU5HTzBGQlEwWTdRVUZEUml4SFFXeEVLME1zUTBGdlJHaEVPMEZCUTBFN096dEJRVU5CTEZkQlFWTlRMR1ZCUVZRc1EwRkJlVUpRTEV0QlFYcENMRVZCUVdkRE8wRkJRemxDTEZGQlFVMWpMRlZCUVZVc1IwRkJTU3gxUWtGQlJDeERRVUV3UWxJc1NVRkJNVUlzUTBGQkswSmlMRTlCUVU4c1EwRkJRMHNzUTBGQlJDeERRVUYwUXl4RFFVRnVRanM3UVVGRFFTeFJRVUZKWjBJc1ZVRkJTaXhGUVVGblFqdEJRVU5rTEZWQlFVbERMRk5CUVZNc1IwRkJSMFFzVlVGQlZTeERRVUZETEVOQlFVUXNRMEZCVml4TFFVRnJRaXhMUVVGc1FpeEhRVUV3UWl4TFFVRXhRaXhIUVVGclF5eExRVUZzUkR0QlFVTkJMRlZCUVUxRkxFbEJRVWtzUjBGQlIwWXNWVUZCVlN4RFFVRkRMRU5CUVVRc1EwRkJWaXhEUVVGamNFSXNTMEZCWkN4RFFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4RFFVRXhRaXhEUVVGaU8wRkJRMEVzVlVGQlNYVkNMRkZCUVZFc1IwRkJSMFFzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCU2l4RFFVRlJSU3hQUVVGU0xFTkJRV2RDTEU5QlFXaENMRVZCUVhsQ0xFbEJRWHBDTEVOQlFXWTdPMEZCUTBFc1ZVRkJTeXhSUVVGRUxFTkJRVmRrTEVsQlFWZ3NRMEZCWjBKaExGRkJRV2hDTEVOQlFVb3NSVUZCSzBJN1FVRkROMEpCTEZGQlFVRkJMRkZCUVZFc1IwRkJSMEVzVVVGQlVTeERRVUZEUlN4TlFVRlVMRU5CUVdkQ0xFTkJRV2hDTEVWQlFXMUNSaXhSUVVGUkxFTkJRVU5tTEUxQlFWUXNSMEZCYTBJc1EwRkJja01zUTBGQldEdEJRVU5FT3p0QlFVTkVSaXhOUVVGQlFTeExRVUZMTEVOQlFVTmxMRk5CUVZNc1IwRkJSeXhWUVVGaUxFTkJRVXdzUjBGQlowTkZMRkZCUVdoRE8wRkJRMEZxUWl4TlFVRkJRU3hMUVVGTExFTkJRVU5sTEZOQlFWTXNSMEZCUnl4UlFVRmlMRU5CUVV3c1IwRkJPRUlzUTBGQlEwTXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJTaXhKUVVGWExFVkJRVm9zUlVGQlowSkpMRWxCUVdoQ0xFVkJRVGxDTzBGQlJVRjBRaXhOUVVGQlFTeERRVUZETzBGQlEwWTdRVUZEUml4SFFYQkZLME1zUTBGelJXaEVPMEZCUTBFN096dEJRVU5CTEZkQlFWTlhMRk5CUVZRc1IwRkJjVUk3UVVGRGJrSXNVVUZCU1Zrc1owSkJRV2RDTEVkQlFVZDJRaXhEUVVGMlFqdEJRVUZCTEZGQlEwbDNRaXhsUVVGbExFZEJRVWMzUWl4UFFVRlBMRU5CUVVOTExFTkJRVU1zUlVGQlJpeERRVVEzUWp0QlFVRkJMRkZCUlVsNVFpeFhRVUZYTEVkQlFVZEVMR1ZCUVdVc1EwRkJRelZDTEV0QlFXaENMRU5CUVhOQ0xEUkRRVUYwUWl4RFFVWnNRanRCUVVsQkxGRkJRVWs0UWl4SlFVRkpMRWRCUVVjN1FVRkRWRU1zVFVGQlFVRXNVVUZCVVN4RlFVRkZMRU5CUVVOR0xGZEJRVmNzUTBGQlF5eERRVUZFTEVOQlJHSTdRVUZGVkVjc1RVRkJRVUVzVVVGQlVTeEZRVUZGTEU5QlFVOUlMRmRCUVZjc1EwRkJReXhEUVVGRUxFTkJRV3hDTEV0QlFUQkNMRmRCUVRGQ0xFZEJRWGRETEVOQlFYaERMRWRCUVRSRExFTkJRVU5CTEZkQlFWY3NRMEZCUXl4RFFVRkVMRU5CUm5wRU8wRkJSMVJKTEUxQlFVRkJMRkZCUVZFc1JVRkJSU3hEUVVGRFNpeFhRVUZYTEVOQlFVTXNRMEZCUkN4RFFVaGlPMEZCU1ZSTExFMUJRVUZCTEZGQlFWRXNSVUZCUlN4UFFVRlBUQ3hYUVVGWExFTkJRVU1zUTBGQlJDeERRVUZzUWl4TFFVRXdRaXhYUVVFeFFpeEhRVUYzUXl4RFFVRjRReXhIUVVFMFF5eERRVUZEUVN4WFFVRlhMRU5CUVVNc1EwRkJSQ3hEUVVwNlJEdEJRVXRVVFN4TlFVRkJRU3hMUVVGTExFVkJRVVVzUlVGTVJUdEJRVTFVUXl4TlFVRkJRU3hqUVVGakxFVkJRVVU3UVVGT1VDeExRVUZZTEVOQlRHMUNMRU5CWTI1Q08wRkJRMEU3UVVGRFFUczdRVUZEUVN4UlFVRkpUaXhKUVVGSkxFTkJRVU5GTEZGQlFVd3NTMEZCYTBJc1EwRkJkRUlzUlVGQmVVSTdRVUZEZGtKR0xFMUJRVUZCTEVsQlFVa3NRMEZCUTBNc1VVRkJUQ3hKUVVGcFFpeERRVUZxUWp0QlFVTkVPenRCUVVORUxGRkJRVWxFTEVsQlFVa3NRMEZCUTBrc1VVRkJUQ3hMUVVGclFpeERRVUYwUWl4RlFVRjVRanRCUVVOMlFrb3NUVUZCUVVFc1NVRkJTU3hEUVVGRFJ5eFJRVUZNTEVsQlFXbENMRU5CUVdwQ08wRkJRMFE3TzBGQlJVUXNVVUZCU1Vrc1VVRkJVU3hIUVVGSExFTkJRV1k3UVVGQlFTeFJRVU5KUXl4WFFVRlhMRWRCUVVjc1EwRkViRUk3TzBGQlJVRXNWMEZCVDJ4RExFTkJRVU1zUjBGQlIwd3NUMEZCVHl4RFFVRkRVeXhOUVVGdVFpeEZRVUV5UWtvc1EwRkJReXhGUVVFMVFpeEZRVUZuUXp0QlFVTTVRanRCUVVOQk8wRkJRMEVzVlVGQlNVd3NUMEZCVHl4RFFVRkRTeXhEUVVGRUxFTkJRVkFzUTBGQlYyMURMRTlCUVZnc1EwRkJiVUlzVFVGQmJrSXNUVUZCSzBJc1EwRkJMMElzU1VGRFRXNURMRU5CUVVNc1IwRkJSeXhEUVVGS0xFZEJRVkZNTEU5QlFVOHNRMEZCUTFNc1RVRkVkRUlzU1VGRlMxUXNUMEZCVHl4RFFVRkRTeXhEUVVGRExFZEJRVWNzUTBGQlRDeERRVUZRTEVOQlFXVnRReXhQUVVGbUxFTkJRWFZDTEUxQlFYWkNMRTFCUVcxRExFTkJSbmhETEVsQlIwdDRReXhQUVVGUExFTkJRVU5MTEVOQlFVTXNSMEZCUnl4RFFVRk1MRU5CUVZBc1EwRkJaVzFETEU5QlFXWXNRMEZCZFVJc1NVRkJka0lzVFVGQmFVTXNRMEZJTVVNc1JVRkhOa003UVVGRGVrTTdRVUZEU0RzN1FVRkRSQ3hWUVVGSlF5eFRRVUZUTEVkQlFVbDZReXhQUVVGUExFTkJRVU5MTEVOQlFVUXNRMEZCVUN4RFFVRlhTU3hOUVVGWUxFbEJRWEZDTEVOQlFYSkNMRWxCUVRCQ1NpeERRVUZETEVsQlFVdE1MRTlCUVU4c1EwRkJRMU1zVFVGQlVpeEhRVUZwUWl4RFFVRnNSQ3hIUVVGM1JDeEhRVUY0UkN4SFFVRTRSRlFzVDBGQlR5eERRVUZEU3l4RFFVRkVMRU5CUVZBc1EwRkJWeXhEUVVGWUxFTkJRVGxGT3p0QlFVVkJMRlZCUVVsdlF5eFRRVUZUTEV0QlFVc3NSMEZCWkN4SlFVRnhRa0VzVTBGQlV5eExRVUZMTEVkQlFXNURMRWxCUVRCRFFTeFRRVUZUTEV0QlFVc3NSMEZCZUVRc1NVRkJLMFJCTEZOQlFWTXNTMEZCU3l4SlFVRnFSaXhGUVVGMVJqdEJRVU55UmxZc1VVRkJRVUVzU1VGQlNTeERRVUZEU3l4TFFVRk1MRU5CUVZjMVFpeEpRVUZZTEVOQlFXZENVaXhQUVVGUExFTkJRVU5MTEVOQlFVUXNRMEZCZGtJN1FVRkRRVEJDTEZGQlFVRkJMRWxCUVVrc1EwRkJRMDBzWTBGQlRDeERRVUZ2UWpkQ0xFbEJRWEJDTEVOQlFYbENUaXhWUVVGVkxFTkJRVU5ITEVOQlFVUXNRMEZCVml4SlFVRnBRaXhKUVVFeFF6czdRVUZGUVN4WlFVRkpiME1zVTBGQlV5eExRVUZMTEVkQlFXeENMRVZCUVhWQ08wRkJRM0pDU0N4VlFVRkJRU3hSUVVGUk8wRkJRMVFzVTBGR1JDeE5RVVZQTEVsQlFVbEhMRk5CUVZNc1MwRkJTeXhIUVVGc1FpeEZRVUYxUWp0QlFVTTFRa1lzVlVGQlFVRXNWMEZCVnp0QlFVTmFMRk5CUmswc1RVRkZRU3hKUVVGSlJTeFRRVUZUTEV0QlFVc3NSMEZCYkVJc1JVRkJkVUk3UVVGRE5VSklMRlZCUVVGQkxGRkJRVkU3UVVGRFVrTXNWVUZCUVVFc1YwRkJWenRCUVVOYU8wRkJRMFlzVDBGYVJDeE5RVmxQTzBGQlEwdzdRVUZEUkR0QlFVTkdMRXRCY0VSclFpeERRWE5FYmtJN096dEJRVU5CTEZGQlFVa3NRMEZCUTBRc1VVRkJSQ3hKUVVGaFVDeEpRVUZKTEVOQlFVTkpMRkZCUVV3c1MwRkJhMElzUTBGQmJrTXNSVUZCYzBNN1FVRkRjRU5LTEUxQlFVRkJMRWxCUVVrc1EwRkJRMGtzVVVGQlRDeEhRVUZuUWl4RFFVRm9RanRCUVVORU96dEJRVU5FTEZGQlFVa3NRMEZCUTBrc1YwRkJSQ3hKUVVGblFsSXNTVUZCU1N4RFFVRkRSU3hSUVVGTUxFdEJRV3RDTEVOQlFYUkRMRVZCUVhsRE8wRkJRM1pEUml4TlFVRkJRU3hKUVVGSkxFTkJRVU5GTEZGQlFVd3NSMEZCWjBJc1EwRkJhRUk3UVVGRFJDeExRVFZFYTBJc1EwRTRSRzVDT3pzN1FVRkRRU3hSUVVGSmJFTXNUMEZCVHl4RFFVRkRhMElzVFVGQldpeEZRVUZ2UWp0QlFVTnNRaXhWUVVGSmNVSXNVVUZCVVN4TFFVRkxVQ3hKUVVGSkxFTkJRVU5KTEZGQlFYUkNMRVZCUVdkRE8wRkJRemxDTEdOQlFVMHNTVUZCU1dwQ0xFdEJRVW9zUTBGQlZTeHpSRUZCYzBSVkxHZENRVUZuUWl4SFFVRkhMRU5CUVhwRkxFTkJRVllzUTBGQlRqdEJRVU5FT3p0QlFVTkVMRlZCUVVsWExGZEJRVmNzUzBGQlMxSXNTVUZCU1N4RFFVRkRSU3hSUVVGNlFpeEZRVUZ0UXp0QlFVTnFReXhqUVVGTkxFbEJRVWxtTEV0QlFVb3NRMEZCVlN4M1JFRkJkMFJWTEdkQ1FVRm5RaXhIUVVGSExFTkJRVE5GTEVOQlFWWXNRMEZCVGp0QlFVTkVPMEZCUTBZN08wRkJSVVFzVjBGQlQwY3NTVUZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVTh4UWl4RFFVRkRMRWRCUVVkTUxFOUJRVThzUTBGQlExTXNUVUZCYmtJc1JVRkJNa0k3UVVGRGVrSklMRWxCUVVGQkxGVkJRVlU3UVVGRFdEczdRVUZGUkN4VFFVRlBSaXhKUVVGUU8wRkJRMFFpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWm5WdVkzUnBiMjRnY0dGeWMyVlFZWFJqYUNoMWJtbEVhV1ptTENCdmNIUnBiMjV6SUQwZ2UzMHBJSHRjYmlBZ2JHVjBJR1JwWm1aemRISWdQU0IxYm1sRWFXWm1Mbk53YkdsMEtDOWNYSEpjWEc1OFcxeGNibHhjZGx4Y1pseGNjbHhjZURnMVhTOHBMRnh1SUNBZ0lDQWdaR1ZzYVcxcGRHVnljeUE5SUhWdWFVUnBabVl1YldGMFkyZ29MMXhjY2x4Y2JueGJYRnh1WEZ4MlhGeG1YRnh5WEZ4NE9EVmRMMmNwSUh4OElGdGRMRnh1SUNBZ0lDQWdiR2x6ZENBOUlGdGRMRnh1SUNBZ0lDQWdhU0E5SURBN1hHNWNiaUFnWm5WdVkzUnBiMjRnY0dGeWMyVkpibVJsZUNncElIdGNiaUFnSUNCc1pYUWdhVzVrWlhnZ1BTQjdmVHRjYmlBZ0lDQnNhWE4wTG5CMWMyZ29hVzVrWlhncE8xeHVYRzRnSUNBZ0x5OGdVR0Z5YzJVZ1pHbG1aaUJ0WlhSaFpHRjBZVnh1SUNBZ0lIZG9hV3hsSUNocElEd2daR2xtWm5OMGNpNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lHeGxkQ0JzYVc1bElEMGdaR2xtWm5OMGNsdHBYVHRjYmx4dUlDQWdJQ0FnTHk4Z1JtbHNaU0JvWldGa1pYSWdabTkxYm1Rc0lHVnVaQ0J3WVhKemFXNW5JR1JwWm1ZZ2JXVjBZV1JoZEdGY2JpQWdJQ0FnSUdsbUlDZ29MMTRvWEZ3dFhGd3RYRnd0ZkZ4Y0sxeGNLMXhjSzN4QVFDbGNYSE12S1M1MFpYTjBLR3hwYm1VcEtTQjdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJFYVdabUlHbHVaR1Y0WEc0Z0lDQWdJQ0JzWlhRZ2FHVmhaR1Z5SUQwZ0tDOWVLRDg2U1c1a1pYZzZmR1JwWm1Zb1B6b2dMWElnWEZ4M0t5a3JLVnhjY3lzb0xpcy9LVnhjY3lva0x5a3VaWGhsWXloc2FXNWxLVHRjYmlBZ0lDQWdJR2xtSUNob1pXRmtaWElwSUh0Y2JpQWdJQ0FnSUNBZ2FXNWtaWGd1YVc1a1pYZ2dQU0JvWldGa1pYSmJNVjA3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdrckt6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlFZWEp6WlNCbWFXeGxJR2hsWVdSbGNuTWdhV1lnZEdobGVTQmhjbVVnWkdWbWFXNWxaQzRnVlc1cFptbGxaQ0JrYVdabUlISmxjWFZwY21WeklIUm9aVzBzSUdKMWRGeHVJQ0FnSUM4dklIUm9aWEpsSjNNZ2JtOGdkR1ZqYUc1cFkyRnNJR2x6YzNWbGN5QjBieUJvWVhabElHRnVJR2x6YjJ4aGRHVmtJR2gxYm1zZ2QybDBhRzkxZENCbWFXeGxJR2hsWVdSbGNseHVJQ0FnSUhCaGNuTmxSbWxzWlVobFlXUmxjaWhwYm1SbGVDazdYRzRnSUNBZ2NHRnljMlZHYVd4bFNHVmhaR1Z5S0dsdVpHVjRLVHRjYmx4dUlDQWdJQzh2SUZCaGNuTmxJR2gxYm10elhHNGdJQ0FnYVc1a1pYZ3VhSFZ1YTNNZ1BTQmJYVHRjYmx4dUlDQWdJSGRvYVd4bElDaHBJRHdnWkdsbVpuTjBjaTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJR3hsZENCc2FXNWxJRDBnWkdsbVpuTjBjbHRwWFR0Y2JseHVJQ0FnSUNBZ2FXWWdLQ2d2WGloSmJtUmxlRHA4WkdsbVpueGNYQzFjWEMxY1hDMThYRndyWEZ3clhGd3JLVnhjY3k4cExuUmxjM1FvYkdsdVpTa3BJSHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ2d2WGtCQUx5a3VkR1Z6ZENoc2FXNWxLU2tnZTF4dUlDQWdJQ0FnSUNCcGJtUmxlQzVvZFc1cmN5NXdkWE5vS0hCaGNuTmxTSFZ1YXlncEtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9iR2x1WlNBbUppQnZjSFJwYjI1ekxuTjBjbWxqZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJKWjI1dmNtVWdkVzVsZUhCbFkzUmxaQ0JqYjI1MFpXNTBJSFZ1YkdWemN5QnBiaUJ6ZEhKcFkzUWdiVzlrWlZ4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFWdWEyNXZkMjRnYkdsdVpTQW5JQ3NnS0drZ0t5QXhLU0FySUNjZ0p5QXJJRXBUVDA0dWMzUnlhVzVuYVdaNUtHeHBibVVwS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdrckt6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZMeUJRWVhKelpYTWdkR2hsSUMwdExTQmhibVFnS3lzcklHaGxZV1JsY25Nc0lHbG1JRzV2Ym1VZ1lYSmxJR1p2ZFc1a0xDQnVieUJzYVc1bGMxeHVJQ0F2THlCaGNtVWdZMjl1YzNWdFpXUXVYRzRnSUdaMWJtTjBhVzl1SUhCaGNuTmxSbWxzWlVobFlXUmxjaWhwYm1SbGVDa2dlMXh1SUNBZ0lHTnZibk4wSUdacGJHVklaV0ZrWlhJZ1BTQW9MMTRvTFMwdGZGeGNLMXhjSzF4Y0t5bGNYSE1yS0M0cUtTUXZLUzVsZUdWaktHUnBabVp6ZEhKYmFWMHBPMXh1SUNBZ0lHbG1JQ2htYVd4bFNHVmhaR1Z5S1NCN1hHNGdJQ0FnSUNCc1pYUWdhMlY1VUhKbFptbDRJRDBnWm1sc1pVaGxZV1JsY2xzeFhTQTlQVDBnSnkwdExTY2dQeUFuYjJ4a0p5QTZJQ2R1Wlhjbk8xeHVJQ0FnSUNBZ1kyOXVjM1FnWkdGMFlTQTlJR1pwYkdWSVpXRmtaWEpiTWwwdWMzQnNhWFFvSjF4Y2RDY3NJRElwTzF4dUlDQWdJQ0FnYkdWMElHWnBiR1ZPWVcxbElEMGdaR0YwWVZzd1hTNXlaWEJzWVdObEtDOWNYRnhjWEZ4Y1hDOW5MQ0FuWEZ4Y1hDY3BPMXh1SUNBZ0lDQWdhV1lnS0Nndlhsd2lMaXBjSWlRdktTNTBaWE4wS0dacGJHVk9ZVzFsS1NrZ2UxeHVJQ0FnSUNBZ0lDQm1hV3hsVG1GdFpTQTlJR1pwYkdWT1lXMWxMbk4xWW5OMGNpZ3hMQ0JtYVd4bFRtRnRaUzVzWlc1bmRHZ2dMU0F5S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsdVpHVjRXMnRsZVZCeVpXWnBlQ0FySUNkR2FXeGxUbUZ0WlNkZElEMGdabWxzWlU1aGJXVTdYRzRnSUNBZ0lDQnBibVJsZUZ0clpYbFFjbVZtYVhnZ0t5QW5TR1ZoWkdWeUoxMGdQU0FvWkdGMFlWc3hYU0I4ZkNBbkp5a3VkSEpwYlNncE8xeHVYRzRnSUNBZ0lDQnBLeXM3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHk4Z1VHRnljMlZ6SUdFZ2FIVnVhMXh1SUNBdkx5QlVhR2x6SUdGemMzVnRaWE1nZEdoaGRDQjNaU0JoY21VZ1lYUWdkR2hsSUhOMFlYSjBJRzltSUdFZ2FIVnVheTVjYmlBZ1puVnVZM1JwYjI0Z2NHRnljMlZJZFc1cktDa2dlMXh1SUNBZ0lHeGxkQ0JqYUhWdWEwaGxZV1JsY2tsdVpHVjRJRDBnYVN4Y2JpQWdJQ0FnSUNBZ1kyaDFibXRJWldGa1pYSk1hVzVsSUQwZ1pHbG1abk4wY2x0cEt5dGRMRnh1SUNBZ0lDQWdJQ0JqYUhWdWEwaGxZV1JsY2lBOUlHTm9kVzVyU0dWaFpHVnlUR2x1WlM1emNHeHBkQ2d2UUVBZ0xTaGNYR1FyS1NnL09pd29YRnhrS3lrcFB5QmNYQ3NvWEZ4a0t5a29Qem9zS0Z4Y1pDc3BLVDhnUUVBdktUdGNibHh1SUNBZ0lHeGxkQ0JvZFc1cklEMGdlMXh1SUNBZ0lDQWdiMnhrVTNSaGNuUTZJQ3RqYUhWdWEwaGxZV1JsY2xzeFhTeGNiaUFnSUNBZ0lHOXNaRXhwYm1Wek9pQjBlWEJsYjJZZ1kyaDFibXRJWldGa1pYSmJNbDBnUFQwOUlDZDFibVJsWm1sdVpXUW5JRDhnTVNBNklDdGphSFZ1YTBobFlXUmxjbHN5WFN4Y2JpQWdJQ0FnSUc1bGQxTjBZWEowT2lBclkyaDFibXRJWldGa1pYSmJNMTBzWEc0Z0lDQWdJQ0J1WlhkTWFXNWxjem9nZEhsd1pXOW1JR05vZFc1clNHVmhaR1Z5V3pSZElEMDlQU0FuZFc1a1pXWnBibVZrSnlBL0lERWdPaUFyWTJoMWJtdElaV0ZrWlhKYk5GMHNYRzRnSUNBZ0lDQnNhVzVsY3pvZ1cxMHNYRzRnSUNBZ0lDQnNhVzVsWkdWc2FXMXBkR1Z5Y3pvZ1cxMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdWVzVwWm1sbFpDQkVhV1ptSUVadmNtMWhkQ0J4ZFdseWF6b2dTV1lnZEdobElHTm9kVzVySUhOcGVtVWdhWE1nTUN4Y2JpQWdJQ0F2THlCMGFHVWdabWx5YzNRZ2JuVnRZbVZ5SUdseklHOXVaU0JzYjNkbGNpQjBhR0Z1SUc5dVpTQjNiM1ZzWkNCbGVIQmxZM1F1WEc0Z0lDQWdMeThnYUhSMGNITTZMeTkzZDNjdVlYSjBhVzFoTG1OdmJTOTNaV0pzYjJkekwzWnBaWGR3YjNOMExtcHpjRDkwYUhKbFlXUTlNVFkwTWprelhHNGdJQ0FnYVdZZ0tHaDFibXN1YjJ4a1RHbHVaWE1nUFQwOUlEQXBJSHRjYmlBZ0lDQWdJR2gxYm1zdWIyeGtVM1JoY25RZ0t6MGdNVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR2gxYm1zdWJtVjNUR2x1WlhNZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUdoMWJtc3VibVYzVTNSaGNuUWdLejBnTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ1lXUmtRMjkxYm5RZ1BTQXdMRnh1SUNBZ0lDQWdJQ0J5WlcxdmRtVkRiM1Z1ZENBOUlEQTdYRzRnSUNBZ1ptOXlJQ2c3SUdrZ1BDQmthV1ptYzNSeUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0F2THlCTWFXNWxjeUJ6ZEdGeWRHbHVaeUIzYVhSb0lDY3RMUzBuSUdOdmRXeGtJR0psSUcxcGMzUmhhMlZ1SUdadmNpQjBhR1VnWENKeVpXMXZkbVVnYkdsdVpWd2lJRzl3WlhKaGRHbHZibHh1SUNBZ0lDQWdMeThnUW5WMElIUm9aWGtnWTI5MWJHUWdZbVVnZEdobElHaGxZV1JsY2lCbWIzSWdkR2hsSUc1bGVIUWdabWxzWlM0Z1ZHaGxjbVZtYjNKbElIQnlkVzVsSUhOMVkyZ2dZMkZ6WlhNZ2IzVjBMbHh1SUNBZ0lDQWdhV1lnS0dScFptWnpkSEpiYVYwdWFXNWtaWGhQWmlnbkxTMHRJQ2NwSUQwOVBTQXdYRzRnSUNBZ0lDQWdJQ0FnSUNBbUppQW9hU0FySURJZ1BDQmthV1ptYzNSeUxteGxibWQwYUNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ1ltSUdScFptWnpkSEpiYVNBcklERmRMbWx1WkdWNFQyWW9KeXNyS3lBbktTQTlQVDBnTUZ4dUlDQWdJQ0FnSUNBZ0lDQWdKaVlnWkdsbVpuTjBjbHRwSUNzZ01sMHVhVzVrWlhoUFppZ25RRUFuS1NBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYkdWMElHOXdaWEpoZEdsdmJpQTlJQ2hrYVdabWMzUnlXMmxkTG14bGJtZDBhQ0E5UFNBd0lDWW1JR2tnSVQwZ0tHUnBabVp6ZEhJdWJHVnVaM1JvSUMwZ01Ta3BJRDhnSnlBbklEb2daR2xtWm5OMGNsdHBYVnN3WFR0Y2JseHVJQ0FnSUNBZ2FXWWdLRzl3WlhKaGRHbHZiaUE5UFQwZ0p5c25JSHg4SUc5d1pYSmhkR2x2YmlBOVBUMGdKeTBuSUh4OElHOXdaWEpoZEdsdmJpQTlQVDBnSnlBbklIeDhJRzl3WlhKaGRHbHZiaUE5UFQwZ0oxeGNYRnduS1NCN1hHNGdJQ0FnSUNBZ0lHaDFibXN1YkdsdVpYTXVjSFZ6YUNoa2FXWm1jM1J5VzJsZEtUdGNiaUFnSUNBZ0lDQWdhSFZ1YXk1c2FXNWxaR1ZzYVcxcGRHVnljeTV3ZFhOb0tHUmxiR2x0YVhSbGNuTmJhVjBnZkh3Z0oxeGNiaWNwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h2Y0dWeVlYUnBiMjRnUFQwOUlDY3JKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHRmtaRU52ZFc1MEt5czdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYjNCbGNtRjBhVzl1SUQwOVBTQW5MU2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaVzF2ZG1WRGIzVnVkQ3NyTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHOXdaWEpoZEdsdmJpQTlQVDBnSnlBbktTQjdYRzRnSUNBZ0lDQWdJQ0FnWVdSa1EyOTFiblFyS3p0Y2JpQWdJQ0FnSUNBZ0lDQnlaVzF2ZG1WRGIzVnVkQ3NyTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJJWVc1a2JHVWdkR2hsSUdWdGNIUjVJR0pzYjJOcklHTnZkVzUwSUdOaGMyVmNiaUFnSUNCcFppQW9JV0ZrWkVOdmRXNTBJQ1ltSUdoMWJtc3VibVYzVEdsdVpYTWdQVDA5SURFcElIdGNiaUFnSUNBZ0lHaDFibXN1Ym1WM1RHbHVaWE1nUFNBd08xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb0lYSmxiVzkyWlVOdmRXNTBJQ1ltSUdoMWJtc3ViMnhrVEdsdVpYTWdQVDA5SURFcElIdGNiaUFnSUNBZ0lHaDFibXN1YjJ4a1RHbHVaWE1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGQmxjbVp2Y20wZ2IzQjBhVzl1WVd3Z2MyRnVhWFI1SUdOb1pXTnJhVzVuWEc0Z0lDQWdhV1lnS0c5d2RHbHZibk11YzNSeWFXTjBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1lXUmtRMjkxYm5RZ0lUMDlJR2gxYm1zdWJtVjNUR2x1WlhNcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEJaR1JsWkNCc2FXNWxJR052ZFc1MElHUnBaQ0J1YjNRZ2JXRjBZMmdnWm05eUlHaDFibXNnWVhRZ2JHbHVaU0FuSUNzZ0tHTm9kVzVyU0dWaFpHVnlTVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmlBb2NtVnRiM1psUTI5MWJuUWdJVDA5SUdoMWJtc3ViMnhrVEdsdVpYTXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RTWlcxdmRtVmtJR3hwYm1VZ1kyOTFiblFnWkdsa0lHNXZkQ0J0WVhSamFDQm1iM0lnYUhWdWF5QmhkQ0JzYVc1bElDY2dLeUFvWTJoMWJtdElaV0ZrWlhKSmJtUmxlQ0FySURFcEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYUhWdWF6dGNiaUFnZlZ4dVhHNGdJSGRvYVd4bElDaHBJRHdnWkdsbVpuTjBjaTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQndZWEp6WlVsdVpHVjRLQ2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYkdsemREdGNibjFjYmlKZGZRPT1cbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hcnJheUVxdWFsID0gYXJyYXlFcXVhbDtcbmV4cG9ydHMuYXJyYXlTdGFydHNXaXRoID0gYXJyYXlTdGFydHNXaXRoO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuZnVuY3Rpb24gYXJyYXlFcXVhbChhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYXJyYXlTdGFydHNXaXRoKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBhcnJheVN0YXJ0c1dpdGgoYXJyYXksIHN0YXJ0KSB7XG4gIGlmIChzdGFydC5sZW5ndGggPiBhcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0YXJ0W2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5MWRHbHNMMkZ5Y21GNUxtcHpJbDBzSW01aGJXVnpJanBiSW1GeWNtRjVSWEYxWVd3aUxDSmhJaXdpWWlJc0lteGxibWQwYUNJc0ltRnljbUY1VTNSaGNuUnpWMmwwYUNJc0ltRnljbUY1SWl3aWMzUmhjblFpTENKcElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQlFVOHNVMEZCVTBFc1ZVRkJWQ3hEUVVGdlFrTXNRMEZCY0VJc1JVRkJkVUpETEVOQlFYWkNMRVZCUVRCQ08wRkJReTlDTEUxQlFVbEVMRU5CUVVNc1EwRkJRMFVzVFVGQlJpeExRVUZoUkN4RFFVRkRMRU5CUVVORExFMUJRVzVDTEVWQlFUSkNPMEZCUTNwQ0xGZEJRVThzUzBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVU5RExHVkJRV1VzUTBGQlEwZ3NRMEZCUkN4RlFVRkpReXhEUVVGS0xFTkJRWFJDTzBGQlEwUTdPMEZCUlUwc1UwRkJVMFVzWlVGQlZDeERRVUY1UWtNc1MwRkJla0lzUlVGQlowTkRMRXRCUVdoRExFVkJRWFZETzBGQlF6VkRMRTFCUVVsQkxFdEJRVXNzUTBGQlEwZ3NUVUZCVGl4SFFVRmxSU3hMUVVGTExFTkJRVU5HTEUxQlFYcENMRVZCUVdsRE8wRkJReTlDTEZkQlFVOHNTMEZCVUR0QlFVTkVPenRCUVVWRUxFOUJRVXNzU1VGQlNVa3NRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUjBRc1MwRkJTeXhEUVVGRFNDeE5RVUV4UWl4RlFVRnJRMGtzUTBGQlF5eEZRVUZ1UXl4RlFVRjFRenRCUVVOeVF5eFJRVUZKUkN4TFFVRkxMRU5CUVVORExFTkJRVVFzUTBGQlRDeExRVUZoUml4TFFVRkxMRU5CUVVORkxFTkJRVVFzUTBGQmRFSXNSVUZCTWtJN1FVRkRla0lzWVVGQlR5eExRVUZRTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hUUVVGUExFbEJRVkE3UVVGRFJDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmhjbkpoZVVWeGRXRnNLR0VzSUdJcElIdGNiaUFnYVdZZ0tHRXViR1Z1WjNSb0lDRTlQU0JpTG14bGJtZDBhQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCaGNuSmhlVk4wWVhKMGMxZHBkR2dvWVN3Z1lpazdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCaGNuSmhlVk4wWVhKMGMxZHBkR2dvWVhKeVlYa3NJSE4wWVhKMEtTQjdYRzRnSUdsbUlDaHpkR0Z5ZEM1c1pXNW5kR2dnUGlCaGNuSmhlUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lIMWNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElITjBZWEowTG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2FXWWdLSE4wWVhKMFcybGRJQ0U5UFNCaGNuSmhlVnRwWFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjBjblZsTzF4dWZWeHVJbDE5XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4vLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcbi8vIGJ5IGRpc3RhbmNlIGZyb20gYSBnaXZlbiBzdGFydCBwb3NpdGlvbi4gSS5lLiBmb3IgWzAsIDRdLCB3aXRoXG4vLyBzdGFydCBvZiAyLCB0aGlzIHdpbGwgaXRlcmF0ZSAyLCAzLCAxLCA0LCAwLlxuZnVuY3Rpb25cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9kZWZhdWx0XG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gIHZhciB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgaWYgKHdhbnRGb3J3YXJkICYmICFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICBpZiAoYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gZmFsc2U7XG4gICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAvLyBhZnRlciBvZmZzZXQgbG9jYXRpb24gKG9yIGRlc2lyZWQgbG9jYXRpb24gb24gZmlyc3QgaXRlcmF0aW9uKVxuXG5cbiAgICAgIGlmIChzdGFydCArIGxvY2FsT2Zmc2V0IDw9IG1heExpbmUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBmb3J3YXJkRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICBpZiAoIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSB0cnVlO1xuICAgICAgfSAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJlZm9yZSB0ZXh0IGJlZ2lubmluZywgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgLy8gYmVmb3JlIG9mZnNldCBsb2NhdGlvblxuXG5cbiAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICB9IC8vIFdlIHRyaWVkIHRvIGZpdCBodW5rIGJlZm9yZSB0ZXh0IGJlZ2lubmluZyBhbmQgYmV5b25kIHRleHQgbGVuZ3RoLCB0aGVuXG4gICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcblxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5MWRHbHNMMlJwYzNSaGJtTmxMV2wwWlhKaGRHOXlMbXB6SWwwc0ltNWhiV1Z6SWpwYkluTjBZWEowSWl3aWJXbHVUR2x1WlNJc0ltMWhlRXhwYm1VaUxDSjNZVzUwUm05eWQyRnlaQ0lzSW1KaFkydDNZWEprUlhob1lYVnpkR1ZrSWl3aVptOXlkMkZ5WkVWNGFHRjFjM1JsWkNJc0lteHZZMkZzVDJabWMyVjBJaXdpYVhSbGNtRjBiM0lpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096dEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTmxPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzUTBGQlUwRXNTMEZCVkN4RlFVRm5Ra01zVDBGQmFFSXNSVUZCZVVKRExFOUJRWHBDTEVWQlFXdERPMEZCUXk5RExFMUJRVWxETEZkQlFWY3NSMEZCUnl4SlFVRnNRanRCUVVGQkxFMUJRMGxETEdsQ1FVRnBRaXhIUVVGSExFdEJSSGhDTzBGQlFVRXNUVUZGU1VNc1owSkJRV2RDTEVkQlFVY3NTMEZHZGtJN1FVRkJRU3hOUVVkSlF5eFhRVUZYTEVkQlFVY3NRMEZJYkVJN1FVRkxRU3hUUVVGUExGTkJRVk5ETEZGQlFWUXNSMEZCYjBJN1FVRkRla0lzVVVGQlNVb3NWMEZCVnl4SlFVRkpMRU5CUVVORkxHZENRVUZ3UWl4RlFVRnpRenRCUVVOd1F5eFZRVUZKUkN4cFFrRkJTaXhGUVVGMVFqdEJRVU55UWtVc1VVRkJRVUVzVjBGQlZ6dEJRVU5hTEU5QlJrUXNUVUZGVHp0QlFVTk1TQ3hSUVVGQlFTeFhRVUZYTEVkQlFVY3NTMEZCWkR0QlFVTkVMRTlCVEcxRExFTkJUM0JETzBGQlEwRTdPenRCUVVOQkxGVkJRVWxJTEV0QlFVc3NSMEZCUjAwc1YwRkJVaXhKUVVGMVFrb3NUMEZCTTBJc1JVRkJiME03UVVGRGJFTXNaVUZCVDBrc1YwRkJVRHRCUVVORU96dEJRVVZFUkN4TlFVRkJRU3huUWtGQlowSXNSMEZCUnl4SlFVRnVRanRCUVVORU96dEJRVVZFTEZGQlFVa3NRMEZCUTBRc2FVSkJRVXdzUlVGQmQwSTdRVUZEZEVJc1ZVRkJTU3hEUVVGRFF5eG5Ra0ZCVEN4RlFVRjFRanRCUVVOeVFrWXNVVUZCUVVFc1YwRkJWeXhIUVVGSExFbEJRV1E3UVVGRFJDeFBRVWh4UWl4RFFVdDBRanRCUVVOQk96czdRVUZEUVN4VlFVRkpSaXhQUVVGUExFbEJRVWxFTEV0QlFVc3NSMEZCUjAwc1YwRkJka0lzUlVGQmIwTTdRVUZEYkVNc1pVRkJUeXhEUVVGRFFTeFhRVUZYTEVWQlFXNUNPMEZCUTBRN08wRkJSVVJHTEUxQlFVRkJMR2xDUVVGcFFpeEhRVUZITEVsQlFYQkNPMEZCUTBFc1lVRkJUMGNzVVVGQlVTeEZRVUZtTzBGQlEwUXNTMEU1UW5kQ0xFTkJaME42UWp0QlFVTkJPenRCUVVORUxFZEJiRU5FTzBGQmJVTkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1NYUmxjbUYwYjNJZ2RHaGhkQ0IwY21GMlpYSnpaWE1nYVc0Z2RHaGxJSEpoYm1kbElHOW1JRnR0YVc0c0lHMWhlRjBzSUhOMFpYQndhVzVuWEc0dkx5QmllU0JrYVhOMFlXNWpaU0JtY205dElHRWdaMmwyWlc0Z2MzUmhjblFnY0c5emFYUnBiMjR1SUVrdVpTNGdabTl5SUZzd0xDQTBYU3dnZDJsMGFGeHVMeThnYzNSaGNuUWdiMllnTWl3Z2RHaHBjeUIzYVd4c0lHbDBaWEpoZEdVZ01pd2dNeXdnTVN3Z05Dd2dNQzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLSE4wWVhKMExDQnRhVzVNYVc1bExDQnRZWGhNYVc1bEtTQjdYRzRnSUd4bGRDQjNZVzUwUm05eWQyRnlaQ0E5SUhSeWRXVXNYRzRnSUNBZ0lDQmlZV05yZDJGeVpFVjRhR0YxYzNSbFpDQTlJR1poYkhObExGeHVJQ0FnSUNBZ1ptOXlkMkZ5WkVWNGFHRjFjM1JsWkNBOUlHWmhiSE5sTEZ4dUlDQWdJQ0FnYkc5allXeFBabVp6WlhRZ1BTQXhPMXh1WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCcGRHVnlZWFJ2Y2lncElIdGNiaUFnSUNCcFppQW9kMkZ1ZEVadmNuZGhjbVFnSmlZZ0lXWnZjbmRoY21SRmVHaGhkWE4wWldRcElIdGNiaUFnSUNBZ0lHbG1JQ2hpWVdOcmQyRnlaRVY0YUdGMWMzUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCc2IyTmhiRTltWm5ObGRDc3JPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ1ZEVadmNuZGhjbVFnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2RISjVhVzVuSUhSdklHWnBkQ0JpWlhsdmJtUWdkR1Y0ZENCc1pXNW5kR2dzSUdGdVpDQnBaaUJ1YjNRc0lHTm9aV05ySUdsMElHWnBkSE5jYmlBZ0lDQWdJQzh2SUdGbWRHVnlJRzltWm5ObGRDQnNiMk5oZEdsdmJpQW9iM0lnWkdWemFYSmxaQ0JzYjJOaGRHbHZiaUJ2YmlCbWFYSnpkQ0JwZEdWeVlYUnBiMjRwWEc0Z0lDQWdJQ0JwWmlBb2MzUmhjblFnS3lCc2IyTmhiRTltWm5ObGRDQThQU0J0WVhoTWFXNWxLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJzYjJOaGJFOW1abk5sZER0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlkMkZ5WkVWNGFHRjFjM1JsWkNBOUlIUnlkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0NGaVlXTnJkMkZ5WkVWNGFHRjFjM1JsWkNrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0ZtYjNKM1lYSmtSWGhvWVhWemRHVmtLU0I3WEc0Z0lDQWdJQ0FnSUhkaGJuUkdiM0ozWVhKa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdkSEo1YVc1bklIUnZJR1pwZENCaVpXWnZjbVVnZEdWNGRDQmlaV2RwYm01cGJtY3NJR0Z1WkNCcFppQnViM1FzSUdOb1pXTnJJR2wwSUdacGRITmNiaUFnSUNBZ0lDOHZJR0psWm05eVpTQnZabVp6WlhRZ2JHOWpZWFJwYjI1Y2JpQWdJQ0FnSUdsbUlDaHRhVzVNYVc1bElEdzlJSE4wWVhKMElDMGdiRzlqWVd4UFptWnpaWFFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMxc2IyTmhiRTltWm5ObGRDc3JPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JpWVdOcmQyRnlaRVY0YUdGMWMzUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQnlaWFIxY200Z2FYUmxjbUYwYjNJb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlhaU0IwY21sbFpDQjBieUJtYVhRZ2FIVnVheUJpWldadmNtVWdkR1Y0ZENCaVpXZHBibTVwYm1jZ1lXNWtJR0psZVc5dVpDQjBaWGgwSUd4bGJtZDBhQ3dnZEdobGJseHVJQ0FnSUM4dklHaDFibXNnWTJGdUozUWdabWwwSUc5dUlIUm9aU0IwWlhoMExpQlNaWFIxY200Z2RXNWtaV1pwYm1Wa1hHNGdJSDA3WEc1OVhHNGlYWDA9XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2VuZXJhdGVPcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0cztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTFkR2xzTDNCaGNtRnRjeTVxY3lKZExDSnVZVzFsY3lJNld5Sm5aVzVsY21GMFpVOXdkR2x2Ym5NaUxDSnZjSFJwYjI1eklpd2laR1ZtWVhWc2RITWlMQ0pqWVd4c1ltRmpheUlzSW01aGJXVWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzBGQlFVOHNVMEZCVTBFc1pVRkJWQ3hEUVVGNVFrTXNUMEZCZWtJc1JVRkJhME5ETEZGQlFXeERMRVZCUVRSRE8wRkJRMnBFTEUxQlFVa3NUMEZCVDBRc1QwRkJVQ3hMUVVGdFFpeFZRVUYyUWl4RlFVRnRRenRCUVVOcVEwTXNTVUZCUVVFc1VVRkJVU3hEUVVGRFF5eFJRVUZVTEVkQlFXOUNSaXhQUVVGd1FqdEJRVU5FTEVkQlJrUXNUVUZGVHl4SlFVRkpRU3hQUVVGS0xFVkJRV0U3UVVGRGJFSXNVMEZCU3l4SlFVRkpSeXhKUVVGVUxFbEJRV2xDU0N4UFFVRnFRaXhGUVVFd1FqdEJRVU40UWp0QlFVTkJMRlZCUVVsQkxFOUJRVThzUTBGQlEwa3NZMEZCVWl4RFFVRjFRa1FzU1VGQmRrSXNRMEZCU2l4RlFVRnJRenRCUVVOb1EwWXNVVUZCUVVFc1VVRkJVU3hEUVVGRFJTeEpRVUZFTEVOQlFWSXNSMEZCYVVKSUxFOUJRVThzUTBGQlEwY3NTVUZCUkN4RFFVRjRRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZEUkN4VFFVRlBSaXhSUVVGUU8wRkJRMFFpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWm5WdVkzUnBiMjRnWjJWdVpYSmhkR1ZQY0hScGIyNXpLRzl3ZEdsdmJuTXNJR1JsWm1GMWJIUnpLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUdSbFptRjFiSFJ6TG1OaGJHeGlZV05ySUQwZ2IzQjBhVzl1Y3p0Y2JpQWdmU0JsYkhObElHbG1JQ2h2Y0hScGIyNXpLU0I3WEc0Z0lDQWdabTl5SUNoc1pYUWdibUZ0WlNCcGJpQnZjSFJwYjI1ektTQjdYRzRnSUNBZ0lDQXZLaUJwYzNSaGJtSjFiQ0JwWjI1dmNtVWdaV3h6WlNBcUwxeHVJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2JtRnRaU2twSUh0Y2JpQWdJQ0FnSUNBZ1pHVm1ZWFZzZEhOYmJtRnRaVjBnUFNCdmNIUnBiMjV6VzI1aGJXVmRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnlaWFIxY200Z1pHVm1ZWFZzZEhNN1hHNTlYRzRpWFgwPVxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHNwYW4gaWQ9XFxcImNvbnRhaW5lcnt7aWR9fVxcXCIgY2xhc3M9XFxcImJsYW5rIHt7I2JsYW5rLmhhc1BlbmRpbmdGZWVkYmFja319aGFzLXBlbmRpbmctZmVlZGJhY2t7ey9pZn19IHt7I2JsYW5rLmhhc0hpbnR9fWhhcy10aXB7ey9pZn19IHt7I2JsYW5rLmlzQ29ycmVjdH19Y29ycmVjdHt7L2lmfX0ge3sjYmxhbmsuaXNFcnJvcn19ZXJyb3J7ey9pZn19IHt7I2JsYW5rLmlzUmV0cnl9fXJldHJ5e3svaWZ9fSB7eyNibGFuay5pc1Nob3dpbmdTb2x1dGlvbn19c2hvd2luZy1zb2x1dGlvbnt7L2lmfX1cXFwiPlxcbiAge3sjdW5sZXNzIGlzU2VsZWN0Q2xvemV9fVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwie3tibGFuay5pZH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tibGFuay5lbnRlcmVkVGV4dH19XFxcIiBcXG4gICAgICAgICAgICAgc2l6ZT1cXFwie3tibGFuay5taW5UZXh0TGVuZ3RofX1cXFwiIG9uLWVzY2FwZT1cXFwiQHRoaXMuZmlyZSgnY2xvc2VNZXNzYWdlJywgYmxhbmspXFxcIiBcXG4gICAgICAgICAgICAgb24tZW50ZXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2VudGVyJylcXFwiIFxcbiAgICAgICAgICAgICBvbi1ibHVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdibHVyJylcXFwiIFxcbiAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiXFxuICAgICAgICAgICAgIG9uLWFueWtleT1cXFwiQHRoaXMuZmlyZSgndGV4dFR5cGVkJywgYmxhbmspXFxcIlxcbiAgICAgICAgICAgICB7eyMoYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzU2hvd2luZ1NvbHV0aW9uKX19ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcInt7L2lmfX1cXG4gICAgICAgICAgICAgY2xhc3M9XFxcImg1cC10ZXh0LWlucHV0XFxcIlxcbiAgICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCJcXG4gICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XFxcIm9mZlxcXCIvPlxcbiAgICAgIHt7I2JsYW5rLmhhc0hpbnR9fVxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC10aXAtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnc2hvd0hpbnQnLCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiIHt7L2lmfX0+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImpvdWJlbC10aXAtY29udGFpbmVyXFxcIiB0aXRsZT1cXFwiVGlwXFxcIiBhcmlhLWxhYmVsPVxcXCJUaXBcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtaWNvbi10aXAtbm9ybWFsIFxcXCI+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNoYWRvd1xcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zcGVlY2gtYnViYmxlXFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLWluZm9cXFwiPjwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIHt7L2lmfX1cXG4gICAgPC9zcGFuPiAgICBcXG4gIHt7L3VubGVzc319XFxuICB7eyNpZiBpc1NlbGVjdENsb3plfX1cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoNXAtbm90aWZpY2F0aW9uXFxcIiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnZGlzcGxheUZlZWRiYWNrJywgYmxhbmspXFxcIj5cXG4gICAgICAgICYjeGYwNWE7XFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC1pbnB1dC13cmFwcGVyXFxcIj4gICAgICBcXG4gICAgICA8c2VsZWN0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiXFxuICAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2NoYW5nZScpXFxcIlxcbiAgICAgICAgICAgICAgb24tZm9jdXM9XFxcIkB0aGlzLmZpcmUoJ2ZvY3VzJywgYmxhbmspXFxcIiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICB7eyMoYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzU2hvd2luZ1NvbHV0aW9uKX19ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcInt7L2lmfX0gXFxuICAgICAgICAgICAgICBzaXplPVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcImg1cC10ZXh0LWlucHV0XFxcIj5cXG4gICAgICAgIHt7I2VhY2ggYmxhbmsuY2hvaWNlc319XFxuICAgICAgICAgIDxvcHRpb24+e3t0aGlzfX08L29wdGlvbj5cXG4gICAgICAgIHt7L2VhY2h9fVxcbiAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgIHt7I2JsYW5rLmhhc0hpbnR9fVxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC10aXAtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnc2hvd0hpbnQnLCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fT5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIHt7L2lmfX0gICAgIFxcbiAgICA8L3NwYW4+XFxuICB7ey9pZn19XFxuPC9zcGFuPlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzcGFuIHt7I29iamVjdC5pc0hpZ2hsaWdodGVkfX1jbGFzcz1cXFwiaGlnaGxpZ2h0ZWRcXFwie3svaWZ9fSBpZD1cXFwie3tvYmplY3QuaWR9fVxcXCI+e3t7b2JqZWN0LnRleHR9fX08L3NwYW4+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQWR2YW5jZWRCbGFua3MgZnJvbSAnLi4vc2NyaXB0cy9hcHAnO1xuXG4vLyBMb2FkIGxpYnJhcnlcbkg1UCA9IEg1UCB8fCB7fTtcbkg1UC5BZHZhbmNlZEJsYW5rcyA9IEFkdmFuY2VkQmxhbmtzOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0U3RyaW5nKHN0cmluZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZ3MucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50Lmxlbmd0aCA+IHByZXYubGVuZ3RoID8gY3VycmVudCA6IHByZXYsIFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5OiBhbnlbXSkge1xuICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgIGFycmF5W2pdID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59IiwiLy8gVE9ETyBjYW4gd2UganVzdCBkZWNsYXJlIHRoZSBrZXlkb3duSGFuZGxlciBvbmNlPyB1c2luZyBgdGhpc2A/XG5mdW5jdGlvbiBtYWtlS2V5RGVmaW5pdGlvbihjb2RlPzogbnVtYmVyKSB7XG4gIHJldHVybiAobm9kZSwgZmlyZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICB2YXIgd2hpY2ggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgICBpZiAoY29kZSAmJiB3aGljaCA9PT0gY29kZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGZpcmUoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgb3JpZ2luYWw6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWNvZGUgJiYgWzE2LCAxNywgMTgsIDM1LCAzNiwgMTMsIDksIDI3LCAzMiwgMzcsIDM5LCA0MCwgMzhdLmZpbHRlcihjID0+IGMgPT09IHdoaWNoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlyZSh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBvcmlnaW5hbDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZWFyZG93bigpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZW50ZXIgPSBtYWtlS2V5RGVmaW5pdGlvbigxMyk7XG5leHBvcnQgY29uc3QgdGFiID0gbWFrZUtleURlZmluaXRpb24oOSk7XG5leHBvcnQgY29uc3QgZXNjYXBlID0gbWFrZUtleURlZmluaXRpb24oMjcpO1xuZXhwb3J0IGNvbnN0IHNwYWNlID0gbWFrZUtleURlZmluaXRpb24oMzIpO1xuXG5leHBvcnQgY29uc3QgbGVmdGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzcpO1xuZXhwb3J0IGNvbnN0IHJpZ2h0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOSk7XG5leHBvcnQgY29uc3QgZG93bmFycm93ID0gbWFrZUtleURlZmluaXRpb24oNDApO1xuZXhwb3J0IGNvbnN0IHVwYXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOCk7XG5cbmV4cG9ydCBjb25zdCBhbnlrZXkgPSBtYWtlS2V5RGVmaW5pdGlvbigpOyIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IEg1UERhdGFSZXBvc2l0b3J5LCBJRGF0YVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDbG96ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMsIExvY2FsaXphdGlvblN0cnVjdHVyZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IElTZXR0aW5ncywgSDVQU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuL2hlbHBlcnMvdW53cmFwcGVyJztcbmltcG9ydCB7IFhBUElBY3Rpdml0eURlZmluaXRpb24gfSBmcm9tICcuL21vZGVscy94YXBpJztcbmltcG9ydCB7IGNyZWF0ZVBlcm11dGF0aW9ucyB9IGZyb20gJy4vaGVscGVycy9wZXJtdXRhdGlvbnMnO1xuXG5cbmVudW0gU3RhdGVzIHtcbiAgb25nb2luZyA9ICdvbmdvaW5nJyxcbiAgY2hlY2tpbmcgPSAnY2hlY2tpbmcnLFxuICBzaG93aW5nU29sdXRpb25zID0gJ3Nob3dpbmctc29sdXRpb24nLFxuICBmaW5pc2hlZCA9ICdmaW5pc2hlZCcsXG4gIHNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCA9ICdzaG93aW5nLXNvbHV0aW9uLWVtYmVkZGVkJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZHZhbmNlZEJsYW5rcyBleHRlbmRzIChINVAuUXVlc3Rpb24gYXMgeyBuZXcoKTogYW55OyB9KSB7XG5cbiAgcHJpdmF0ZSBjbG96ZUNvbnRyb2xsZXI6IENsb3plQ29udHJvbGxlcjtcbiAgcHJpdmF0ZSByZXBvc2l0b3J5OiBJRGF0YVJlcG9zaXRvcnk7XG4gIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncztcbiAgcHJpdmF0ZSBsb2NhbGl6YXRpb246IEg1UExvY2FsaXphdGlvbjtcbiAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBqUXVlcnk7XG5cbiAgcHJpdmF0ZSBjb250ZW50SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBwcmV2aW91c1N0YXRlOiBhbnk7XG4gIHByaXZhdGUgc3RhdGU6IFN0YXRlcztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHVzZXIgaGFzIGVudGVyZWQgYW55IGFuc3dlciBzbyBmYXIuXG4gICAqL1xuICBwcml2YXRlIGFuc3dlcmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRlbnREYXRhXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSwgY29udGVudElkOiBzdHJpbmcsIGNvbnRlbnREYXRhOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmpRdWVyeSA9IEg1UC5qUXVlcnk7XG4gICAgdGhpcy5jb250ZW50SWQgPSBjb250ZW50SWQ7XG5cbiAgICBsZXQgdW53cmFwcGVyID0gbmV3IFVucndhcHBlcih0aGlzLmpRdWVyeSk7XG5cbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IEg1UFNldHRpbmdzKGNvbmZpZyk7XG4gICAgdGhpcy5sb2NhbGl6YXRpb24gPSBuZXcgSDVQTG9jYWxpemF0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbmV3IEg1UERhdGFSZXBvc2l0b3J5KGNvbmZpZywgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIDxKUXVlcnlTdGF0aWM+dGhpcy5qUXVlcnksIHVud3JhcHBlcik7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSh0aGlzLmpRdWVyeSk7XG4gICAgQmxhbmtMb2FkZXIuaW5pdGlhbGl6ZSh0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5qUXVlcnksIHRoaXMubWVzc2FnZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIgPSBuZXcgQ2xvemVDb250cm9sbGVyKHRoaXMucmVwb3NpdG9yeSwgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMubWVzc2FnZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25TY29yZUNoYW5nZWQgPSB0aGlzLm9uU2NvcmVDaGFuZ2VkO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uU29sdmVkID0gdGhpcy5vblNvbHZlZDtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vbkF1dG9DaGVja2VkID0gdGhpcy5vbkF1dG9DaGVja2VkO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uVHlwZWQgPSB0aGlzLm9uVHlwZWQ7XG5cbiAgICBpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEucHJldmlvdXNTdGF0ZSlcbiAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGU7XG5cbiAgICAvKipcbiAgICAqIE92ZXJyaWRlcyB0aGUgYXR0YWNoIG1ldGhvZCBvZiB0aGUgc3VwZXJjbGFzcyAoSDVQLlF1ZXN0aW9uKSBhbmQgY2FsbHMgaXRcbiAgICAqIGF0IHRoZSBzYW1lIHRpbWUuIChlcXVpdmFsZW50IHRvIHN1cGVyLmF0dGFjaCgkY29udGFpbmVyKSkuXG4gICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSwgYXMgUmFjdGl2ZSBuZWVkcyB0byBiZSBpbml0aWFsaXplZCB3aXRoIGFuIGV4aXN0aW5nIERPTVxuICAgICogZWxlbWVudC4gRE9NIGVsZW1lbnRzIGFyZSBjcmVhdGVkIGluIEg1UC5RdWVzdGlvbi5hdHRhY2gsIHNvIGluaXRpYWxpemluZyBcbiAgICAqIFJhY3RpdmUgaW4gcmVnaXN0ZXJEb21FbGVtZW50cyBkb2Vzbid0IHdvcmsuXG4gICAgKi9cbiAgICB0aGlzLmF0dGFjaCA9ICgob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiAoJGNvbnRhaW5lcikgPT4ge1xuICAgICAgICBvcmlnaW5hbCgkY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSh0aGlzLmNvbnRhaW5lci5nZXQoMCksICRjb250YWluZXIpO1xuICAgICAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuZGVzZXJpYWxpemVDbG96ZSh0aGlzLnByZXZpb3VzU3RhdGUpKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRoaXMuY2xvemVDb250cm9sbGVyLmlzRmlsbGVkT3V0O1xuICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjaylcbiAgICAgICAgICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKHRoaXMuYXR0YWNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgZnJvbSBvdXRzaWRlIHdoZW4gdGhlIHNjb3JlIG9mIHRoZSBjbG96ZSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIHByaXZhdGUgb25TY29yZUNoYW5nZWQgPSAoc2NvcmU6IG51bWJlciwgbWF4U2NvcmU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc0Z1bGx5RmlsbGVkT3V0KSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlcy5maW5pc2hlZClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5jaGVja2luZztcbiAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRGZWVkYmFjayhcIlwiLCBzY29yZSwgbWF4U2NvcmUpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Tb2x2ZWQoKSB7XG5cbiAgfVxuXG4gIHByaXZhdGUgb25UeXBlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKSB7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLm9uZ29pbmc7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcbiAgICB0aGlzLmFuc3dlcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgb25BdXRvQ2hlY2tlZCA9ICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XG4gICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IEg1UC5RdWVzdGlvbi5hdHRhY2goKS4gQ3JlYXRlcyBhbGwgY29udGVudCBlbGVtZW50cyBhbmQgcmVnaXN0ZXJzIHRoZW1cbiAgICogd2l0aCBINVAuUXVlc3Rpb24uXG4gICAqL1xuICByZWdpc3RlckRvbUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVnaXN0ZXJNZWRpYSgpO1xuICAgIHRoaXMuc2V0SW50cm9kdWN0aW9uKHRoaXMucmVwb3NpdG9yeS5nZXRUYXNrRGVzY3JpcHRpb24oKSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMualF1ZXJ5KFwiPGRpdi8+XCIsIHsgXCJjbGFzc1wiOiBcImg1cC1hZHZhbmNlZC1ibGFua3NcIiB9KTtcbiAgICB0aGlzLnNldENvbnRlbnQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG5cbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5vbmdvaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBKUXVlcnkgLSBUaGUgb3V0ZXIgaDVwIGNvbnRhaW5lci4gVGhlIGxpYnJhcnkgY2FuIGFkZCBkaWFsb2d1ZXMgdG8gdGhpc1xuICAgKiBlbGVtZW50LiBcbiAgICovXG4gIHByaXZhdGUgZ2V0SDVwQ29udGFpbmVyKCk6IEpRdWVyeSB7XG4gICAgdmFyICRjb250ZW50ID0gdGhpcy5qUXVlcnkoJ1tkYXRhLWNvbnRlbnQtaWQ9XCInICsgdGhpcy5jb250ZW50SWQgKyAnXCJdLmg1cC1jb250ZW50Jyk7XG4gICAgdmFyICRjb250YWluZXJQYXJlbnRzID0gJGNvbnRlbnQucGFyZW50cygnLmg1cC1jb250YWluZXInKTtcblxuICAgIC8vIHNlbGVjdCBmaW5kIGNvbnRhaW5lciB0byBhdHRhY2ggZGlhbG9ncyB0b1xuICAgIHZhciAkY29udGFpbmVyO1xuICAgIGlmICgkY29udGFpbmVyUGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIHVzZSBwYXJlbnQgaGlnaGVzdCB1cCBpZiBhbnlcbiAgICAgICRjb250YWluZXIgPSAkY29udGFpbmVyUGFyZW50cy5sYXN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCRjb250ZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgJGNvbnRhaW5lciA9ICRjb250ZW50O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICRjb250YWluZXIgPSB0aGlzLmpRdWVyeShkb2N1bWVudC5ib2R5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJNZWRpYSgpIHtcbiAgICB2YXIgbWVkaWEgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0TWVkaWEoKTtcbiAgICBpZiAoIW1lZGlhIHx8ICFtZWRpYS5saWJyYXJ5KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIHR5cGUgPSBtZWRpYS5saWJyYXJ5LnNwbGl0KCcgJylbMF07XG4gICAgaWYgKHR5cGUgPT09ICdINVAuSW1hZ2UnKSB7XG4gICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZShtZWRpYS5wYXJhbXMuZmlsZS5wYXRoLCB7XG4gICAgICAgICAgZGlzYWJsZUltYWdlWm9vbWluZzogdGhpcy5zZXR0aW5ncy5kaXNhYmxlSW1hZ2Vab29taW5nLFxuICAgICAgICAgIGFsdDogbWVkaWEucGFyYW1zLmFsdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ0g1UC5WaWRlbycpIHtcbiAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xuICAgICAgICB0aGlzLnNldFZpZGVvKG1lZGlhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyQnV0dG9ucygpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMuZ2V0SDVwQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XG4gICAgICAvLyBDaGVjayBhbnN3ZXIgYnV0dG9uXG4gICAgICB0aGlzLmFkZEJ1dHRvbignY2hlY2stYW5zd2VyJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuY2hlY2tBbGxCdXR0b24pLFxuICAgICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIsIHRydWUsIHt9LCB7XG4gICAgICAgIGNvbmZpcm1hdGlvbkRpYWxvZzoge1xuICAgICAgICAgIGVuYWJsZTogdGhpcy5zZXR0aW5ncy5jb25maXJtQ2hlY2tEaWFsb2csXG4gICAgICAgICAgbDEwbjogdGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMuY29uZmlybUNoZWNrKSxcbiAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgICAgICAkcGFyZW50RWxlbWVudDogJGNvbnRhaW5lclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaG93IHNvbHV0aW9uIGJ1dHRvblxuICAgIHRoaXMuYWRkQnV0dG9uKCdzaG93LXNvbHV0aW9uJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuc2hvd1NvbHV0aW9uQnV0dG9uKSxcbiAgICAgIHRoaXMub25TaG93U29sdXRpb24sIHRoaXMuc2V0dGluZ3MuZW5hYmxlU29sdXRpb25zQnV0dG9uKTtcblxuICAgIC8vIFRyeSBhZ2FpbiBidXR0b25cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnJldHJ5QnV0dG9uKSxcbiAgICAgICAgdGhpcy5vblJldHJ5LCB0cnVlLCB7fSwge1xuICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcbiAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybVJldHJ5RGlhbG9nLFxuICAgICAgICAgIGwxMG46IHRoaXMubG9jYWxpemF0aW9uLmdldE9iamVjdEZvclN0cnVjdHVyZShMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzLmNvbmZpcm1SZXRyeSksXG4gICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNoZWNrQW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLmNoZWNrQWxsKCk7XG5cbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XG4gICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZXMuZmluaXNoZWQpXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xuXG4gICAgdGhpcy5zaG93RmVlZGJhY2soKTtcblxuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNpdGlvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc1NvbHZlZCkge1xuICAgICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuZmluaXNoZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25TaG93U29sdXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuc2hvd2luZ1NvbHV0aW9ucyk7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuc2hvd1NvbHV0aW9ucygpO1xuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUmV0cnkgPSAoKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVGZWVkYmFjaygpO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLnJlc2V0KCk7XG4gICAgdGhpcy5hbnN3ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLm9uZ29pbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmVlZGJhY2soKSB7XG4gICAgdmFyIHNjb3JlVGV4dCA9IEg1UC5RdWVzdGlvbi5kZXRlcm1pbmVPdmVyYWxsRmVlZGJhY2sodGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMub3ZlcmFsbEZlZWRiYWNrKSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlIC8gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpLnJlcGxhY2UoJ0BzY29yZScsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSkucmVwbGFjZSgnQHRvdGFsJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpO1xuICAgIHRoaXMuc2V0RmVlZGJhY2soc2NvcmVUZXh0LCB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5zY29yZUJhckxhYmVsKSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYXJlIGhpZGVzIGJ1dHRvbnMgZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBzZXR0aW5ncyBtYWRlXG4gICAqIGJ5IHRoZSBjb250ZW50IGNyZWF0b3IuXG4gICAqIEBwYXJhbSAge1N0YXRlc30gc3RhdGVcbiAgICovXG4gIHByaXZhdGUgbW92ZVRvU3RhdGUoc3RhdGU6IFN0YXRlcykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVCdXR0b25WaXNpYmlsaXR5KHN0YXRlOiBTdGF0ZXMpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVTb2x1dGlvbnNCdXR0b24pIHtcbiAgICAgIGlmICgoKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcpXG4gICAgICAgIHx8ICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjayAmJiBzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcpKVxuICAgICAgICAmJiAoIXRoaXMuc2V0dGluZ3Muc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQgfHwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuYWxsQmxhbmtzRW50ZXJlZCkpIHtcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uKCdzaG93LXNvbHV0aW9uJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9uKCdzaG93LXNvbHV0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgJiYgKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgc3RhdGUgPT09IFN0YXRlcy5maW5pc2hlZCB8fCBzdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMpKSB7XG4gICAgICB0aGlzLnNob3dCdXR0b24oJ3RyeS1hZ2FpbicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgfVxuXG5cbiAgICBpZiAoc3RhdGUgPT09IFN0YXRlcy5vbmdvaW5nICYmIHRoaXMuc2V0dGluZ3MuZW5hYmxlQ2hlY2tCdXR0b24pIHtcbiAgICAgIHRoaXMuc2hvd0J1dHRvbignY2hlY2stYW5zd2VyJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zRW1iZWRkZWQpIHtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ3RyeS1hZ2FpbicpO1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdzaG93LXNvbHV0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdyZXNpemUnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50U3RhdGUgPSAoKTogc3RyaW5nW10gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5zZXJpYWxpemVDbG96ZSgpO1xuICB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIFF1ZXN0aW9uIGNvbnRyYWN0ICAqXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBwdWJsaWMgZ2V0QW5zd2VyR2l2ZW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuYW5zd2VyZWQgfHwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUgPT09IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2NvcmUgPSAoKTogbnVtYmVyID0+IHtcbiAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlO1xuICB9XG5cbiAgcHVibGljIGdldE1heFNjb3JlID0gKCk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlO1xuICB9XG5cbiAgcHVibGljIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5vbkNoZWNrQW5zd2VyKCk7XG4gICAgdGhpcy5vblNob3dTb2x1dGlvbigpO1xuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLnNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRUYXNrID0gKCkgPT4ge1xuICAgIHRoaXMub25SZXRyeSgpO1xuICB9XG5cbiAgLyoqKlxuICAgKiBYQXBpIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgeEFQSSBhbnN3ZXJlZCBldmVudFxuICAgKi9cbiAgcHVibGljIHRyaWdnZXJYQVBJQW5zd2VyZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XG4gICAgdmFyIHhBUElFdmVudCA9IHRoaXMuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUoJ2Fuc3dlcmVkJyk7XG4gICAgdGhpcy5hZGRRdWVzdGlvblRvWEFQSSh4QVBJRXZlbnQpO1xuICAgIHRoaXMuYWRkUmVzcG9uc2VUb1hBUEkoeEFQSUV2ZW50KTtcbiAgICB0aGlzLnRyaWdnZXIoeEFQSUV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHhBUEkgZGF0YS5cbiAgICogQ29udHJhY3QgdXNlZCBieSByZXBvcnQgcmVuZGVyaW5nIGVuZ2luZS5cbiAgICpcbiAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci02fVxuICAgKi9cbiAgcHVibGljIGdldFhBUElEYXRhID0gKCkgPT4ge1xuICAgIHZhciB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKCdhbnN3ZXJlZCcpO1xuICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcbiAgICB0aGlzLmFkZFJlc3BvbnNlVG9YQVBJKHhBUElFdmVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlbWVudDogeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgeEFQSSBvYmplY3QgZGVmaW5pdGlvbiB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgcHVibGljIGdldHhBUElEZWZpbml0aW9uID0gKCk6IFhBUElBY3Rpdml0eURlZmluaXRpb24gPT4ge1xuICAgIHZhciBkZWZpbml0aW9uID0gbmV3IFhBUElBY3Rpdml0eURlZmluaXRpb24oKTtcbiAgICBkZWZpbml0aW9uLmRlc2NyaXB0aW9uID0ge1xuICAgICAgJ2VuLVVTJzogJzxwPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkgKyAnPC9wPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0Q2xvemVUZXh0KClcbiAgICB9O1xuICAgIGRlZmluaXRpb24udHlwZSA9ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nO1xuICAgIGRlZmluaXRpb24uaW50ZXJhY3Rpb25UeXBlID0gJ2ZpbGwtaW4nOyAvLyBXZSB1c2UgdGhlICdmaWxsLWluJyB0eXBlIGV2ZW4gaW4gc2VsZWN0IG1vZGUsIGFzIHRoZSB4QVBJIGZvcm1hdCBmb3Igc2VsZWN0aW9ucyBkb2Vzbid0IHJlYWxseSBjYXRlciBmb3Igc2VxdWVuY2VzLlxuICAgIGRlZmluaXRpb24uY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4gPSBbXTtcbiAgICBsZXQgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggPSAne2Nhc2VfbWF0dGVycz0nICsgdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlICsgJ30nO1xuXG4gICAgLy8geEFQSSBmb3JjZXMgdXMgdG8gY3JlYXRlIHNvbHV0aW9uIHBhdHRlcm5zIGZvciBhbGwgcG9zc2libGUgc29sdXRpb24gY29tYmluYXRpb25zXG4gICAgbGV0IGNvcnJlY3RBbnN3ZXJQZXJtdXRhdGlvbnMgPSBjcmVhdGVQZXJtdXRhdGlvbnModGhpcy5jbG96ZUNvbnRyb2xsZXIuZ2V0Q29ycmVjdEFuc3dlckxpc3QoKSk7XG4gICAgZm9yIChsZXQgcGVybXV0YXRpb24gb2YgY29ycmVjdEFuc3dlclBlcm11dGF0aW9ucykge1xuICAgICAgZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybi5wdXNoKGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuUHJlZml4ICsgcGVybXV0YXRpb24uam9pbignWyxdJykpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIHRoZSBxdWVzdGlvbiBpdHNlbGYgdG8gdGhlIGRlZmluaXRpb24gcGFydCBvZiBhbiB4QVBJRXZlbnRcbiAgICovXG4gIHB1YmxpYyBhZGRRdWVzdGlvblRvWEFQSSA9ICh4QVBJRXZlbnQpID0+IHtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IHhBUElFdmVudC5nZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlKFsnb2JqZWN0JywgJ2RlZmluaXRpb24nXSk7XG4gICAgdGhpcy5qUXVlcnkuZXh0ZW5kKGRlZmluaXRpb24sIHRoaXMuZ2V0eEFQSURlZmluaXRpb24oKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgcmVzcG9uc2UgcGFydCB0byBhbiB4QVBJIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLlhBUElFdmVudH0geEFQSUV2ZW50XG4gICAqICBUaGUgeEFQSSBldmVudCB3ZSB3aWxsIGFkZCBhIHJlc3BvbnNlIHRvXG4gICAqL1xuICBwdWJsaWMgYWRkUmVzcG9uc2VUb1hBUEkgPSAoeEFQSUV2ZW50KSA9PiB7XG4gICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzKTtcbiAgICB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnJlc3BvbnNlID0gdGhpcy5nZXR4QVBJUmVzcG9uc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgeEFQSSB1c2VyIHJlc3BvbnNlLCB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cbiAgICogQHJldHVybiB7c3RyaW5nfSBVc2VyIGFuc3dlcnMgc2VwYXJhdGVkIGJ5IHRoZSBcIlssXVwiIHBhdHRlcm5cbiAgICovXG4gIHB1YmxpYyBnZXR4QVBJUmVzcG9uc2UgPSAoKTogc3RyaW5nID0+IHtcbiAgICB2YXIgdXNlcnNBbnN3ZXJzID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICByZXR1cm4gdXNlcnNBbnN3ZXJzLmpvaW4oJ1ssXScpO1xuICB9O1xufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSAnLi4vbW9kZWxzL2Fuc3dlcic7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3MnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi9tb2RlbHMvbWVzc2FnZVwiO1xuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gJy4uL21vZGVscy9zbmlwcGV0JztcblxuZXhwb3J0IGNsYXNzIEJsYW5rTG9hZGVyIHtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncywgcHJpdmF0ZSBsb2NhbGl6YXRpb246IEg1UExvY2FsaXphdGlvbiwgcHJpdmF0ZSBqcXVlcnk6IEpRdWVyeVN0YXRpYywgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQmxhbmtMb2FkZXI7XG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShzZXR0aW5nczogSVNldHRpbmdzLCBsb2NhbGl6YXRpb246IEg1UExvY2FsaXphdGlvbiwganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSk6IEJsYW5rTG9hZGVyIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBCbGFua0xvYWRlcihzZXR0aW5ncywgbG9jYWxpemF0aW9uLCBqcXVlcnksIG1lc3NhZ2VTZXJ2aWNlKTtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBCbGFua0xvYWRlciB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKVxuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuXG4gICAgdGhyb3cgXCJCbGFua0xvYWRlciBtdXN0IGJlIGluaXRpYWxpemVkIGJlZm9yZSB1c2UuXCI7XG4gIH1cblxuICBwcml2YXRlIGRlY29kZUh0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZWxlbS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlbGVtLnZhbHVlO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUJsYW5rKGlkOiBzdHJpbmcsIGNvcnJlY3RUZXh0OiBzdHJpbmcsIGhpbnRUZXh0OiBzdHJpbmcsIGluY29ycmVjdEFuc3dlcnM6IGFueVtdKTogQmxhbmsge1xuICAgIHZhciBibGFuayA9IG5ldyBCbGFuayh0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5qcXVlcnksIHRoaXMubWVzc2FnZVNlcnZpY2UsIGlkKVxuICAgIGlmIChjb3JyZWN0VGV4dCkge1xuICAgICAgY29ycmVjdFRleHQgPSB0aGlzLmRlY29kZUh0bWwoY29ycmVjdFRleHQpO1xuICAgICAgYmxhbmsuYWRkQ29ycmVjdEFuc3dlcihuZXcgQW5zd2VyKGNvcnJlY3RUZXh0LCBcIlwiLCBmYWxzZSwgMCwgdGhpcy5zZXR0aW5ncykpO1xuICAgIH1cbiAgICBibGFuay5zZXRIaW50KG5ldyBNZXNzYWdlKGhpbnRUZXh0ID8gaGludFRleHQgOiBcIlwiLCBmYWxzZSwgMCkpO1xuXG4gICAgaWYgKGluY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGZvciAodmFyIGg1cEluY29ycmVjdEFuc3dlciBvZiBpbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgIGJsYW5rLmFkZEluY29ycmVjdEFuc3dlcih0aGlzLmRlY29kZUh0bWwoaDVwSW5jb3JyZWN0QW5zd2VyLmluY29ycmVjdEFuc3dlclRleHQpLCBoNXBJbmNvcnJlY3RBbnN3ZXIuaW5jb3JyZWN0QW5zd2VyRmVlZGJhY2ssIGg1cEluY29ycmVjdEFuc3dlci5zaG93SGlnaGxpZ2h0LCBoNXBJbmNvcnJlY3RBbnN3ZXIuaGlnaGxpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmxhbms7XG4gIH1cblxuICBwdWJsaWMgcmVwbGFjZVNuaXBwZXRzKGJsYW5rOiBCbGFuaywgc25pcHBldHM6IFNuaXBwZXRbXSkge1xuICAgIGJsYW5rLmNvcnJlY3RBbnN3ZXJzLmNvbmNhdChibGFuay5pbmNvcnJlY3RBbnN3ZXJzKVxuICAgICAgLmZvckVhY2goYW5zd2VyID0+IGFuc3dlci5tZXNzYWdlLnRleHQgPSB0aGlzLmdldFN0cmluZ1dpdGhTbmlwcGV0cyhhbnN3ZXIubWVzc2FnZS50ZXh0LCBzbmlwcGV0cykpO1xuICAgIGJsYW5rLmhpbnQudGV4dCA9IHRoaXMuZ2V0U3RyaW5nV2l0aFNuaXBwZXRzKGJsYW5rLmhpbnQudGV4dCwgc25pcHBldHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdHJpbmdXaXRoU25pcHBldHModGV4dDogc3RyaW5nLCBzbmlwcGV0czogU25pcHBldFtdKTogc3RyaW5nIHtcbiAgICBpZiAoIXRleHQgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBpZighc25pcHBldHMpXG4gICAgICByZXR1cm4gdGV4dDsgICAgXG5cbiAgICBmb3IgKHZhciBzbmlwcGV0IG9mIHNuaXBwZXRzKSB7XG4gICAgICBpZiAoc25pcHBldC5uYW1lID09PSB1bmRlZmluZWQgfHwgc25pcHBldC5uYW1lID09PSBcIlwiIHx8IHNuaXBwZXQudGV4dCA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQudGV4dCA9PT0gXCJcIilcbiAgICAgICAgY29udGludWU7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKFwiQFwiICsgc25pcHBldC5uYW1lLCBzbmlwcGV0LnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGhpZ2hsaWdodCBvYmplY3RzIHRvIHRoZSBhbnN3ZXJzIGluIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2VyIGxpc3QuXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQmVmb3JlIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGJlZm9yZSB0aGUgYmxhbmsuXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQWZ0ZXIgLSBBbGwgaGlnaGxpZ2h0cyBjb21pbmcgYWZ0ZXIgdGhlIGJsYW5rLlxuICAgKi9cbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGJsYW5rOiBCbGFuaywgaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgYmxhbmsuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5pbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgICB9XG5cbiAgICBibGFuay5oaW50LmxpbmtIaWdobGlnaHQoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgfVxuXG59IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuL2JsYW5rLWxvYWRlcic7XG5pbXBvcnQgeyBDbG96ZUVsZW1lbnQsIENsb3plRWxlbWVudFR5cGUgfSBmcm9tICcuLi9tb2RlbHMvY2xvemUtZWxlbWVudCc7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvaGlnaGxpZ2h0JztcbmltcG9ydCB7IENsb3plIH0gZnJvbSBcIi4uL21vZGVscy9jbG96ZVwiO1xuXG4vKipcbiAqIExvYWRzIGEgY2xvemUgb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ2xvemVMb2FkZXIge1xuICBwcml2YXRlIHN0YXRpYyBub3JtYWxpemVkQmxhbmtNYXJrZXIgPSAnX19fJztcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgLSBUaGUgaHRtbCBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2xvemUgd2l0aCBibGFua3MgbWFya2luZyBhbmQgaGlnaGxpZ2h0IG1hcmtpbmdzLlxuICAgKiBAcGFyYW0gIHtCbGFua1tdfSBibGFua3MgLSBBbGwgYmxhbmtzIGFzIGVudGVyZWQgYnkgdGhlIGNvbnRlbnQgYXV0aG9yLlxuICAgKiBAcmV0dXJucyBDbG96ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGVDbG96ZShodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IENsb3plIHtcbiAgICB2YXIgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcblxuICAgIGh0bWwgPSBDbG96ZUxvYWRlci5ub3JtYWxpemVCbGFua01hcmtpbmdzKGh0bWwpO1xuXG4gICAgdmFyIGNvbnZlcnNpb25SZXN1bHQgPSBDbG96ZUxvYWRlci5jb252ZXJ0TWFya3VwVG9TcGFucyhodG1sLCBibGFua3MpO1xuICAgIGh0bWwgPSBjb252ZXJzaW9uUmVzdWx0Lmh0bWw7XG4gICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCA9IGNvbnZlcnNpb25SZXN1bHQub3JkZXJlZEFsbEVsZW1lbnRzTGlzdDtcbiAgICBoaWdobGlnaHRJbnN0YW5jZXMgPSBjb252ZXJzaW9uUmVzdWx0LmhpZ2hsaWdodEluc3RhbmNlcztcbiAgICBibGFua3NJbnN0YW5jZXMgPSBjb252ZXJzaW9uUmVzdWx0LmJsYW5rc0luc3RhbmNlcztcblxuICAgIENsb3plTG9hZGVyLmxpbmtIaWdobGlnaHRzT2JqZWN0cyhvcmRlcmVkQWxsRWxlbWVudHNMaXN0LCBoaWdobGlnaHRJbnN0YW5jZXMsIGJsYW5rc0luc3RhbmNlcyk7XG5cbiAgICB2YXIgY2xvemUgPSBuZXcgQ2xvemUoKTtcbiAgICBjbG96ZS5odG1sID0gaHRtbDtcbiAgICBjbG96ZS5ibGFua3MgPSBibGFua3NJbnN0YW5jZXM7XG4gICAgY2xvemUuaGlnaGxpZ2h0cyA9IGhpZ2hsaWdodEluc3RhbmNlcztcblxuICAgIHJldHVybiBjbG96ZTtcbiAgfVxuXG4gICAvKipcbiAgICogQ29udmVydHMgISFzaWduYWwhISBoaWdobGlnaHQgbWFya3VwIGFuZCBfX18gIGJsYW5rIG1hcmt1cCBpbnRvIDxzcGFuPi4uLjwvc3Bhbj4uXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdGluZyBodG1sIHN0cmluZyBhbmQgdGhyZWUgbGlzdHMgb2YgYWxsIGFjdGl2ZSBlbGVtZW50cyB1c2VkIGluIHRoZSBjbG96ZTpcbiAgICogICAgb3JkZXJlZEFsbEVsZW1lbnRzOiBoaWdobGlnaHRzIGFuZCBibGFua3MgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UgaW4gdGhlIGh0bWwuXG4gICAqICAgIGhpZ2hsaWdodEluc3RhbmNlczogb25seSBoaWdobGlnaHRzIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlXG4gICAqICAgIGJsYW5rc0luc3RhbmNlczogb25seSBibGFua3MgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2VcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sXG4gICAqIEBwYXJhbSAge0JsYW5rW119IGJsYW5rc1xuICAgKiBAcmV0dXJucyBMaXN0cyBvZiBhY3RpdmUgZWxlbWVudHMgKHNlZSBkZXNjcmlwdGlvbikuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0TWFya3VwVG9TcGFucyhodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IHsgaHRtbDogc3RyaW5nLCBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSwgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSwgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdIH0ge1xuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgdmFyIGV4Y2xhbWF0aW9uTWFya1JlZ0V4cCA9IC8hISguezEsNDB9PykhIS9pO1xuICAgIHZhciBoaWdobGlnaHRDb3VudGVyID0gMDtcbiAgICBsZXQgYmxhbmtDb3VudGVyID0gMDtcblxuICAgIC8vIFNlYXJjaGVzIHRoZSBodG1sIHN0cmluZyBmb3IgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzIGFuZCBpbnNlcnRzIHNwYW5zLiBcbiAgICBkbyB7XG4gICAgICB2YXIgbmV4dEhpZ2hsaWdodE1hdGNoID0gaHRtbC5tYXRjaChleGNsYW1hdGlvbk1hcmtSZWdFeHApO1xuICAgICAgdmFyIG5leHRCbGFua0luZGV4ID0gaHRtbC5pbmRleE9mKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XG5cbiAgICAgIGlmIChuZXh0SGlnaGxpZ2h0TWF0Y2ggJiYgKChuZXh0SGlnaGxpZ2h0TWF0Y2guaW5kZXggPCBuZXh0QmxhbmtJbmRleCkgfHwgKG5leHRCbGFua0luZGV4IDwgMCkpKSB7XG4gICAgICAgIC8vIG5leHQgYWN0aXZlIGVsZW1lbnQgaXMgYSBoaWdobGlnaHRcbiAgICAgICAgdmFyIGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQobmV4dEhpZ2hsaWdodE1hdGNoWzFdLCBgaGlnaGxpZ2h0XyR7aGlnaGxpZ2h0Q291bnRlcn1gKTtcbiAgICAgICAgaGlnaGxpZ2h0SW5zdGFuY2VzLnB1c2goaGlnaGxpZ2h0KTtcbiAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGhpZ2hsaWdodCk7XG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoZXhjbGFtYXRpb25NYXJrUmVnRXhwLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl9oaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfSc+PC9zcGFuPmApO1xuICAgICAgICBoaWdobGlnaHRDb3VudGVyKys7XG4gICAgICB9IGVsc2UgaWYgKG5leHRCbGFua0luZGV4ID49IDApIHtcbiAgICAgICAgLy8gbmV4dCBhY3RpdmUgZWxlbWVudCBpcyBhIGJsYW5rXG4gICAgICAgIGlmIChibGFua0NvdW50ZXIgPj0gYmxhbmtzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIGlmIHRoZSBibGFuayBpcyBub3QgaW4gdGhlIHJlcG9zaXRvcnkgKFRoZSBjb250ZW50IGF1dGhvciBoYXMgbWFya2VkIHRvbyBtYW55IGJsYW5rcyBpbiB0aGUgdGV4dCwgYnV0IG5vdCBlbnRlcmVkIGNvcnJlY3QgYW5zd2Vycy4pXG4gICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIsIFwiPHNwYW4+PC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYmxhbmsgPSBibGFua3NbYmxhbmtDb3VudGVyXTtcbiAgICAgICAgICBibGFua3NJbnN0YW5jZXMucHVzaChibGFuayk7XG4gICAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGJsYW5rKTtcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgYDxzcGFuIGlkPSdjb250YWluZXJfJHtibGFuay5pZH0nPjwvc3Bhbj5gKTtcbiAgICAgICAgICBibGFua0NvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAobmV4dEhpZ2hsaWdodE1hdGNoIHx8IChuZXh0QmxhbmtJbmRleCA+PSAwKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsXG4gICAgICBoaWdobGlnaHRJbnN0YW5jZXM6IGhpZ2hsaWdodEluc3RhbmNlcyxcbiAgICAgIGJsYW5rc0luc3RhbmNlczogYmxhbmtzSW5zdGFuY2VzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyBmb3IgYWxsIGluc3RhbmNlcyBvZiBtYXJrZWQgYmxhbmtzIGFuZCByZXBsYWNlcyB0aGVtIHdpdGggX19fLiBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplQmxhbmtNYXJraW5ncyhodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciB1bmRlcmxpbmVCbGFua1JlZ0V4ID0gL197Myx9L2c7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSh1bmRlcmxpbmVCbGFua1JlZ0V4LCBDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIpO1xuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBibGFua3MgYW5kIGNhbGxzIHRoZWlyIGxpbmtIaWdobGlnaHRJZHNUb09iamVjdHMoLi4uKS5cbiAgICogQHBhcmFtIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QgXG4gICAqIEBwYXJhbSBoaWdobGlnaHRJbnN0YW5jZXMgXG4gICAqIEBwYXJhbSBibGFua3NJbnN0YW5jZXMgXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBsaW5rSGlnaGxpZ2h0c09iamVjdHMob3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10sIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10sIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSk6IHZvaWQge1xuICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rc0luc3RhbmNlcykge1xuICAgICAgdmFyIG5leHRCbGFua0luZGV4SW5BcnJheSA9IG9yZGVyZWRBbGxFbGVtZW50c0xpc3QuaW5kZXhPZihibGFuayk7XG4gICAgICB2YXIgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdFxuICAgICAgICAuc2xpY2UoMCwgbmV4dEJsYW5rSW5kZXhJbkFycmF5KVxuICAgICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodClcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgICAgdmFyIGhpZ2hsaWdodHNBZnRlckJsYW5rID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdFxuICAgICAgICAuc2xpY2UobmV4dEJsYW5rSW5kZXhJbkFycmF5ICsgMSlcbiAgICAgICAgLmZpbHRlcihlID0+IGUudHlwZSA9PT0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQpXG4gICAgICAgIC5tYXAoZSA9PiBlIGFzIEhpZ2hsaWdodCk7XG4gICAgICBCbGFua0xvYWRlci5pbnN0YW5jZS5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChibGFuaywgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rLCBoaWdobGlnaHRzQWZ0ZXJCbGFuayk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IENsb3plTG9hZGVyIH0gZnJvbSAnLi4vY29udGVudC1sb2FkZXJzL2Nsb3plLWxvYWRlcic7XG5pbXBvcnQgeyBDbG96ZSB9IGZyb20gXCIuLi9tb2RlbHMvY2xvemVcIjtcbmltcG9ydCB7IElEYXRhUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYXRhLXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi4vbW9kZWxzL2hpZ2hsaWdodFwiO1xuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XG5cbmltcG9ydCAqIGFzIFJhY3RpdmVFdmVudHNLZXlzIGZyb20gJy4uLy4uL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzJztcblxuaW50ZXJmYWNlIFNjb3JlQ2hhbmdlZCB7XG4gIChzY29yZTogbnVtYmVyLCBtYXhTY29yZTogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIEF1dG9DaGVja2VkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBTb2x2ZWQge1xuICAoKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFR5cGVkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG96ZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5O1xuXG4gIHByaXZhdGUgY2xvemU6IENsb3plO1xuICBwcml2YXRlIGlzU2VsZWN0Q2xvemU6IGJvb2xlYW47XG5cbiAgcHVibGljIG9uU2NvcmVDaGFuZ2VkOiBTY29yZUNoYW5nZWQ7XG4gIHB1YmxpYyBvbkF1dG9DaGVja2VkOiBBdXRvQ2hlY2tlZDtcbiAgcHVibGljIG9uU29sdmVkOiBTb2x2ZWQ7XG4gIHB1YmxpYyBvblR5cGVkOiBUeXBlZDtcblxuICAvLyBTdG9yYWdlIG9mIHRoZSByYWN0aXZlIG9iamVjdHMgdGhhdCBsaW5rIG1vZGVscyBhbmQgdmlld3NcbiAgcHJpdmF0ZSBoaWdobGlnaHRSYWN0aXZlczogeyBbaWQ6IHN0cmluZ106IFJhY3RpdmUuUmFjdGl2ZSB9ID0ge307XG4gIHByaXZhdGUgYmxhbmtSYWN0aXZlczogeyBbaWQ6IHN0cmluZ106IFJhY3RpdmUuUmFjdGl2ZSB9ID0ge307XG5cbiAgcHVibGljIGdldCBtYXhTY29yZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTY29yZSgpOiBudW1iZXIge1xuICAgIHZhciBzY29yZSA9IHRoaXMuY2xvemUuYmxhbmtzLmZpbHRlcihiID0+IGIuaXNDb3JyZWN0KS5sZW5ndGg7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIHNjb3JlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsQmxhbmtzRW50ZXJlZCgpIHtcbiAgICBpZiAodGhpcy5jbG96ZSlcbiAgICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShibGFuayA9PiBibGFuay5pc0Vycm9yIHx8IGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1JldHJ5KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU29sdmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsb3plLmlzU29sdmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0ZpbGxlZE91dCgpIHtcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLnNvbWUoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRnVsbHlGaWxsZWRPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShiID0+IGIuZW50ZXJlZFRleHQgIT09ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5LCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUgTWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCBhbGwgYmxhbmtzLCB0aGUgY2xvemUgaXRzZWxmIGFuZCB0aGUgcmFjdGl2ZSBiaW5kaW5ncy5cbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHJvb3RcbiAgICovXG4gIGluaXRpYWxpemUocm9vdDogSFRNTEVsZW1lbnQsIGpxdWVyeTogSlF1ZXJ5KSB7XG4gICAgdGhpcy5qcXVlcnkgPSBqcXVlcnk7XG4gICAgdGhpcy5pc1NlbGVjdENsb3plID0gdGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgPyB0cnVlIDogZmFsc2U7XG5cbiAgICB2YXIgYmxhbmtzID0gdGhpcy5yZXBvc2l0b3J5LmdldEJsYW5rcygpO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RDbG96ZSAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbCkge1xuICAgICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzKSB7XG4gICAgICAgIGxldCBvdGhlckJsYW5rcyA9IGJsYW5rcy5maWx0ZXIodiA9PiB2ICE9PSBibGFuayk7XG4gICAgICAgIGJsYW5rLmxvYWRDaG9pY2VzRnJvbU90aGVyQmxhbmtzKG90aGVyQmxhbmtzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc25pcHBldHMgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0U25pcHBldHMoKTtcbiAgICBibGFua3MuZm9yRWFjaChibGFuayA9PiBCbGFua0xvYWRlci5pbnN0YW5jZS5yZXBsYWNlU25pcHBldHMoYmxhbmssIHNuaXBwZXRzKSk7XG5cbiAgICB0aGlzLmNsb3plID0gQ2xvemVMb2FkZXIuY3JlYXRlQ2xvemUodGhpcy5yZXBvc2l0b3J5LmdldENsb3plVGV4dCgpLCBibGFua3MpO1xuXG4gICAgdmFyIGNvbnRhaW5lcnMgPSB0aGlzLmNyZWF0ZUFuZEFkZENvbnRhaW5lcnMocm9vdCk7XG4gICAgY29udGFpbmVycy5jbG96ZS5pbm5lckhUTUwgPSB0aGlzLmNsb3plLmh0bWw7XG4gICAgdGhpcy5jcmVhdGVSYWN0aXZlQmluZGluZ3MoKTtcbiAgfVxuXG4gIGNoZWNrQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xuICAgICAgaWYgKCghYmxhbmsuaXNDb3JyZWN0KSAmJiBibGFuay5lbnRlcmVkVGV4dCAhPT0gXCJcIilcbiAgICAgICAgYmxhbmsuZXZhbHVhdGVBdHRlbXB0KHRydWUsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICAgIHRoaXMuY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MoKTtcbiAgfVxuXG4gIHRleHRUeXBlZCA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5vblR5cGVkKCk7XG4gICAgaWYgKHRoaXMub25UeXBlZClcbiAgICAgIHRoaXMub25UeXBlZCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBmb2N1cyA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5vbkZvY3Vzc2VkKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIGRpc3BsYXlGZWVkYmFjayA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5vbkRpc3BsYXlGZWVkYmFjaygpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBzaG93SGludCA9IChibGFuazogQmxhbmspID0+IHtcbiAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgYmxhbmsuc2hvd0hpbnQoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgcmVxdWVzdENsb3NlVG9vbHRpcCA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5yZW1vdmVUb29sdGlwKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICB0aGlzLmpxdWVyeS5maW5kKFwiI1wiICsgYmxhbmsuaWQpLmZvY3VzKCk7XG4gIH1cblxuICBjaGVja0JsYW5rID0gKGJsYW5rOiBCbGFuaywgY2F1c2U6IHN0cmluZykgPT4ge1xuICAgIGlmICgoY2F1c2UgPT09ICdibHVyJyB8fCBjYXVzZSA9PT0gJ2NoYW5nZScpKSB7XG4gICAgICBibGFuay5sb3N0Rm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAoY2F1c2UgPT09ICdjaGFuZ2UnICYmIHRoaXMub25UeXBlZCkge1xuICAgICAgdGhpcy5vblR5cGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XG4gICAgICBpZiAoIWJsYW5rLmVudGVyZWRUZXh0IHx8IGJsYW5rLmVudGVyZWRUZXh0ID09PSBcIlwiKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgICAgIGJsYW5rLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XG4gICAgICB0aGlzLmNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzKCk7XG4gICAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICAgICAgdGhpcy5vbkF1dG9DaGVja2VkKCk7XG4gICAgfVxuICAgIGlmICgoY2F1c2UgPT09ICdlbnRlcicpXG4gICAgICAmJiAoKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrICYmIGJsYW5rLmlzQ29ycmVjdCAmJiAhdGhpcy5pc1NvbHZlZClcbiAgICAgICAgfHwgIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSkge1xuICAgICAgLy8gbW92ZSB0byBuZXh0IGJsYW5rXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmNsb3plLmJsYW5rcy5pbmRleE9mKGJsYW5rKTtcbiAgICAgIHZhciBuZXh0SWQ7XG4gICAgICB3aGlsZSAoaW5kZXggPCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggLSAxICYmICFuZXh0SWQpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgaWYgKCF0aGlzLmNsb3plLmJsYW5rc1tpbmRleF0uaXNDb3JyZWN0KVxuICAgICAgICAgIG5leHRJZCA9IHRoaXMuY2xvemUuYmxhbmtzW2luZGV4XS5pZDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRJZClcbiAgICAgICAgdGhpcy5qcXVlcnkuZmluZChcIiNcIiArIG5leHRJZCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3plLnJlc2V0KCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG96ZS5zaG93U29sdXRpb25zKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQW5kQWRkQ29udGFpbmVycyhhZGRUbzogSFRNTEVsZW1lbnQpOiB7IGNsb3plOiBIVE1MRGl2RWxlbWVudCB9IHtcbiAgICB2YXIgY2xvemVDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvemVDb250YWluZXJFbGVtZW50LmlkID0gJ2g1cC1jbG96ZS1jb250YWluZXInO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xuICAgICAgY2xvemVDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdoNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvemVDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdoNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSc7XG4gICAgfVxuICAgIGFkZFRvLmFwcGVuZENoaWxkKGNsb3plQ29udGFpbmVyRWxlbWVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2xvemU6IGNsb3plQ29udGFpbmVyRWxlbWVudFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhpZ2hsaWdodEJpbmRpbmcoaGlnaGxpZ2h0OiBIaWdobGlnaHQpIHtcbiAgICB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF0gPSBuZXcgUmFjdGl2ZSh7XG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGhpZ2hsaWdodC5pZCxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuLi92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sJyksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9iamVjdDogaGlnaGxpZ2h0XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJsYW5rQmluZGluZyhibGFuazogQmxhbmspIHtcbiAgICB2YXIgcmFjdGl2ZSA9IG5ldyBSYWN0aXZlKHtcbiAgICAgIGVsOiAnI2NvbnRhaW5lcl8nICsgYmxhbmsuaWQsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sJyksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlzU2VsZWN0Q2xvemU6IHRoaXMuaXNTZWxlY3RDbG96ZSxcbiAgICAgICAgYmxhbms6IGJsYW5rXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGVudGVyOiBSYWN0aXZlRXZlbnRzS2V5cy5lbnRlcixcbiAgICAgICAgZXNjYXBlOiBSYWN0aXZlRXZlbnRzS2V5cy5lc2NhcGUsXG4gICAgICAgIGFueWtleTogUmFjdGl2ZUV2ZW50c0tleXMuYW55a2V5XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmFjdGl2ZS5vbihcImNoZWNrQmxhbmtcIiwgdGhpcy5jaGVja0JsYW5rKTtcbiAgICByYWN0aXZlLm9uKFwic2hvd0hpbnRcIiwgdGhpcy5zaG93SGludCk7XG4gICAgcmFjdGl2ZS5vbihcInRleHRUeXBlZFwiLCB0aGlzLnRleHRUeXBlZCk7XG4gICAgcmFjdGl2ZS5vbihcImNsb3NlTWVzc2FnZVwiLCB0aGlzLnJlcXVlc3RDbG9zZVRvb2x0aXApO1xuICAgIHJhY3RpdmUub24oXCJmb2N1c1wiLCB0aGlzLmZvY3VzKTtcbiAgICByYWN0aXZlLm9uKFwiZGlzcGxheUZlZWRiYWNrXCIsIHRoaXMuZGlzcGxheUZlZWRiYWNrKTtcblxuICAgIHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF0gPSByYWN0aXZlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSYWN0aXZlQmluZGluZ3MoKSB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xuICAgICAgdGhpcy5jcmVhdGVIaWdobGlnaHRCaW5kaW5nKGhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcbiAgICAgIHRoaXMuY3JlYXRlQmxhbmtCaW5kaW5nKGJsYW5rKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhbGwgdmlld3Mgb2YgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzLiBDYW4gYmUgY2FsbGVkIHdoZW4gYSBtb2RlbFxuICAgKiB3YXMgY2hhbmdlZFxuICAgKi9cbiAgcHJpdmF0ZSByZWZyZXNoQ2xvemUoKSB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xuICAgICAgdmFyIGhpZ2hsaWdodFJhY3RpdmUgPSB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF07XG4gICAgICBoaWdobGlnaHRSYWN0aXZlLnNldChcIm9iamVjdFwiLCBoaWdobGlnaHQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICB2YXIgYmxhbmtSYWN0aXZlID0gdGhpcy5ibGFua1JhY3RpdmVzW2JsYW5rLmlkXTtcbiAgICAgIGJsYW5rUmFjdGl2ZS5zZXQoXCJibGFua1wiLCBibGFuayk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcyA9ICgpOiBib29sZWFuID0+IHtcbiAgICBpZiAodGhpcy5vblNjb3JlQ2hhbmdlZClcbiAgICAgIHRoaXMub25TY29yZUNoYW5nZWQodGhpcy5jdXJyZW50U2NvcmUsIHRoaXMubWF4U2NvcmUpO1xuXG4gICAgaWYgKHRoaXMuY2xvemUuaXNTb2x2ZWQpIHtcbiAgICAgIGlmICh0aGlzLm9uU29sdmVkKVxuICAgICAgICB0aGlzLm9uU29sdmVkKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXplQ2xvemUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNsb3plLnNlcmlhbGl6ZSgpO1xuICB9XG5cbiAgcHVibGljIGRlc2VyaWFsaXplQ2xvemUoZGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8ICFkYXRhKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuY2xvemUuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb3JyZWN0QW5zd2VyTGlzdCgpOiBzdHJpbmdbXVtdIHtcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIFtbXV07XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICByZXN1bHQucHVzaChibGFuay5nZXRDb3JyZWN0QW5zd2VycygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9ICBcbn0iLCIvKipcbiAqIENyZWF0ZXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBwZXJtdXRhdGlvbnMgb2YgYSBsaXN0IG9mIGxpc3RzLlxuICogQHBhcmFtIGxpc3QgVGhlIGxpc3QgdG8gcGVybXV0ZSBvdmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGVybXV0YXRpb25zKGxpc3Q6IGFueVtdW10pOiBhbnlbXVtdIHtcbiAgbGV0IG91dHB1dDogYW55W11bXSA9IFtbXV07XG4gIGZvciAobGV0IGN1cnJlbnRTdWJsaXN0IG9mIGxpc3QpIHtcbiAgICBsZXQgbmV3T3V0cHV0ID0gW107XG4gICAgZm9yIChsZXQgc3VibGlzdE9iamVjdCBvZiBjdXJyZW50U3VibGlzdCkge1xuICAgICAgZm9yICh2YXIgbyBvZiBvdXRwdXQpIHtcbiAgICAgICAgdmFyIG5ld0xpc3QgPSBvLnNsaWNlKCk7XG4gICAgICAgIG5ld0xpc3QucHVzaChzdWJsaXN0T2JqZWN0KVxuICAgICAgICBuZXdPdXRwdXQucHVzaChuZXdMaXN0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0cHV0ID0gbmV3T3V0cHV0O1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNsZWFucyBodG1sIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBVbnJ3YXBwZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBqcXVlcnk6IEpRdWVyeVN0YXRpYykge1xuXG4gIH1cblxuICBcbiAgLyoqXG4gICAqIENsZWFucyBodG1sIHN0cmluZ3MgYnkgcmVtb3ZpbmcgdGhlIG91dG1vc3QgaHRtbCB0YWcgb2YgdGhlIHN0cmluZyBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWcuXG4gICAqIEV4YW1wbGVzOiAgXCI8cD5teSB0ZXh0PC9wPlwiXCIgYmVjb21lcyBcIm15IHRleHRcIlxuICAgKiAgICAgICAgICAgIFwiPHA+dGV4dCAxPC9wPjxwPnRleHQgMjwvcDI+XCIgc3RheXNcbiAgICogQHBhcmFtIGh0bWwgVGhlIGh0bWwgc3RyaW5nXG4gICAqIEByZXR1cm5zIHRoZSBjbGVhbmVkIGh0bWwgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdW53cmFwKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHBhcnNlZCA9IHRoaXMuanF1ZXJ5KGh0bWwpO1xuICAgIGlmIChwYXJzZWQubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgbGV0IHVud3JhcHBlZCA9IHBhcnNlZC51bndyYXAoKS5odG1sKCk7XG4gICAgcmV0dXJuIHVud3JhcHBlZDtcbiAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi9oaWdobGlnaHQnO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xuXG5leHBvcnQgZW51bSBDb3JyZWN0bmVzcyB7XG4gIEV4YWN0TWF0Y2gsXG4gIENsb3NlTWF0Y2gsXG4gIE5vTWF0Y2hcbn1cblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRpb24ge1xuICBwdWJsaWMgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzO1xuICBwdWJsaWMgY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50OiBudW1iZXI7XG4gIHB1YmxpYyB1c2VkQWx0ZXJuYXRpdmU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlZEFuc3dlcjogQW5zd2VyKSB7XG4gICAgdGhpcy5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLk5vTWF0Y2g7XG4gICAgdGhpcy5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPSAwO1xuICAgIHRoaXMudXNlZEFsdGVybmF0aXZlID0gXCJcIjtcbiAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwb3NzaWJsZSBhbnN3ZXIgdGhlIGNvbnRlbnQgYXV0aG9yIGVudGVycyBmb3IgYSBibGFuaywgZS5nLiB0aGUgY29ycmVjdCBvciBhbiBpbmNvcnJlY3QgYW5zd2VyLlxuICovXG5leHBvcnQgY2xhc3MgQW5zd2VyIHtcbiAgLyoqXG4gICAqIFRoZSBhbHRlcm5hdGl2ZXMgYXJlIGVxdWl2YWxlbnQgc3RyaW5ncyB0aGF0IHRoZSBsaWJyYXJ5IHNob3VsZCB0cmVhdCB0aGUgc2FtZSB3YXksIGUuZy4gc2hvdyB0aGUgc2FtZSBmZWVkYmFjay4gXG4gICAqL1xuICBhbHRlcm5hdGl2ZXM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGFuc3dlciB3YXMgZW50ZXJlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XG5cbiAgLyoqXG4gICAqIElzIHRydWUgaWYgdGhlIGV4cGVjdGVkIHRleHQgZm9yIHRoaXMgYW5zd2VyIGlzIGVtcHR5LlxuICAgKi9cbiAgYXBwbGllc0Fsd2F5czogYm9vbGVhbjtcblxuICAvKipcbiAgICogQHBhcmFtICB7c3RyaW5nfSBhbnN3ZXJUZXh0IC0gVGhlIGV4cGVjdGVkIGFuc3dlci4gQWx0ZXJuYXRpdmVzIGFyZSBzZXBhcmF0ZWQgYnkgfCBvciA7IC4gKGUuZy4gXCJBbHRlcm5hdGl2ZSAxfEFsdGVybmF0aXZlIDJ8QWx0ZXJuYXRpdmUgM3wuLi5cIiAgLW9yLSBcIkFsdGVybmF0aXZlIDE7QWx0ZXJuYXRpdmUgMjtBbHRlcm5hdGl2ZSAzXCIpXG4gICAqIEBwYXJhbSAge3N0cmluZ30gcmVhY3Rpb24gLSBUaGUgdG9vbHRpcCB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQuIEZvcm1hdDogVG9vbHRpcCBUZXh0OyEhLTEhISAhISsxISFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFuc3dlclRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIsIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncykge1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVzID0gYW5zd2VyVGV4dC5zcGxpdCgvXFwvLykubWFwKHMgPT4gcy50cmltKCkpO1xuICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQpO1xuICAgIGlmIChhbnN3ZXJUZXh0LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5hcHBsaWVzQWx3YXlzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBsaWVzQWx3YXlzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIG9iamVjdCdzIG1lc3NhZ2UgaWRzIGFuZCBzdG9yZXMgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGhpZ2hsaWdodCBvYmplY3QgZm9yIHRoZXNlIGlkcy5cbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNCZWZvcmVcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNBZnRlclxuICAgKi9cbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGhpZ2hsaWdodHNCZWZvcmU6IEhpZ2hsaWdodFtdLCBoaWdobGlnaHRzQWZ0ZXI6IEhpZ2hsaWdodFtdKSB7XG4gICAgdGhpcy5tZXNzYWdlLmxpbmtIaWdobGlnaHQoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgfVxuICAvKipcbiAgICogVHVybnMgb24gdGhlIGhpZ2hsaWdodHMgc2V0IGJ5IHRoZSBjb250ZW50IGF1dGhvciBmb3IgdGhpcyBhbnN3ZXIuXG4gICAqL1xuICBwdWJsaWMgYWN0aXZhdGVIaWdobGlnaHQoKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZS5oaWdobGlnaHRlZEVsZW1lbnQpXG4gICAgICB0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblN0cmluZyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHN7Mix9L2csIFwiIFwiKTtcbiAgfVxuICAvKipcbiAgICogTG9va3MgdGhyb3VnaCB0aGUgZGlmZiBhbmQgY2hlY2tzIGhvdyBtYW55IGNoYXJhY3RlciBjaGFuZ2Ugb3BlcmF0aW9ucyBhcmUgbmVlZGVkIHRvIHR1cm4gb25lIHN0cmluZyBpbnRvIHRoZSBvdGhlci4gU2hvdWxkIHJldHVybiB0aGUgc2FtZSByZXN1bHRzIGFzIHRoZSBMZXZlbnN0aGVpbiBkaXN0YW5jZS4gXG4gICAqIEBwYXJhbSAge1t7YWRkZWQ/OmJvb2xlYW4sIGJvb2xlYW46IHJlbW92ZWQ/LCBzdHJpbmc6IHZhbHVlfV19IGRpZmYgLSBhcyByZXR1cm5lZCBieSBqc2RpZmZcbiAgICogQHJldHVybnMgbnVtYmVyIC0gdGhlIGNvdW50IG9mIGNoYW5nZXMgKHJlcGxhY2UsIGFkZCwgZGVsZXRlKSBuZWVkZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZyb20gb25lIHN0cmluZyB0byB0aGUgb3RoZXIgXG4gICAqL1xuICBwcml2YXRlIGdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmY6IGpzZGlmZi5DaGFuZ2VbXSk6IG51bWJlciB7XG4gICAgdmFyIHRvdGFsQ2hhbmdlc0NvdW50ID0gMDtcbiAgICB2YXIgbGFzdFR5cGUgPSBcIlwiO1xuICAgIHZhciBsYXN0Q291bnQgPSAwO1xuXG4gICAgZm9yICh2YXIgZWxlbWVudCBvZiBkaWZmKSB7XG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVkKSB7XG4gICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgICAgICBsYXN0VHlwZSA9IFwicmVtb3ZlZFwiO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZWxlbWVudC5hZGRlZCkge1xuICAgICAgICBpZiAobGFzdFR5cGUgPT09IFwicmVtb3ZlZFwiKSB7XG4gICAgICAgICAgaWYgKGxhc3RDb3VudCA8IGVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxhc3RDb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFR5cGUgPSBcImFkZGVkXCI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdFR5cGUgPSBcInNhbWVcIjtcbiAgICAgIH1cbiAgICAgIGxhc3RDb3VudCA9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB0b3RhbENoYW5nZXNDb3VudDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBob3cgbWFueSBjaGFyYWN0ZXJzIGNhbiBiZSB3cm9uZyB0byBzdGlsbCBiZSBjb3VudGVkIGFzIGEgc3BlbGxpbmcgbWlzdGFrZS5cbiAgICogSWYgc3BlbGxpbmcgbWlzdGFrZXMgYXJlIHR1cm5lZCBvZmYgdGhyb3VnaCB0aGUgc2V0dGluZ3MsIGl0IHdpbGwgcmV0dXJuIDAuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dFxuICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICovXG5cbiAgcHJpdmF0ZSBnZXRBY2NlcHRhYmxlU3BlbGxpbmdNaXN0YWtlcyh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHZhciBhY2NlcHRhYmxlVHlwb0NvdW50OiBudW1iZXI7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mud2FyblNwZWxsaW5nRXJyb3JzIHx8IHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIC8vIFRPRE86IGNvbnNpZGVyIHJlbW92YWxcbiAgICAgIGFjY2VwdGFibGVUeXBvQ291bnQgPSBNYXRoLmZsb29yKHRleHQubGVuZ3RoIC8gMTApICsgMTtcbiAgICBlbHNlXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gMDtcblxuICAgIHJldHVybiBhY2NlcHRhYmxlVHlwb0NvdW50O1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlciBpbiBhbiBldHRlbXB0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlcixcbiAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRlbXB0IFRoZSB0ZXh0IGVudGVyZWQgYnkgdGhlIHVzZXIuXG4gICAqIEByZXR1cm5zIEV2YWx1YXRpb24gaW5kaWNhdGVzIGlmIHRoZSBlbnRlcmVkIHRleHQgaXMgbWF0Y2hlZCBieSB0aGUgYW5zd2VyLlxuICAgKi9cbiAgcHVibGljIGV2YWx1YXRlQXR0ZW1wdChhdHRlbXB0OiBzdHJpbmcpOiBFdmFsdWF0aW9uIHtcbiAgICB2YXIgY2xlYW5lZEF0dGVtcHQgPSB0aGlzLmNsZWFuU3RyaW5nKGF0dGVtcHQpO1xuICAgIHZhciBldmFsdWF0aW9uID0gbmV3IEV2YWx1YXRpb24odGhpcyk7XG5cbiAgICBmb3IgKHZhciBhbHRlcm5hdGl2ZSBvZiB0aGlzLmFsdGVybmF0aXZlcykge1xuICAgICAgdmFyIGNsZWFuZWRBbHRlcm5hdGl2ZSA9IHRoaXMuY2xlYW5TdHJpbmcoYWx0ZXJuYXRpdmUpO1xuXG4gICAgICB2YXIgZGlmZiA9IGpzZGlmZi5kaWZmQ2hhcnMoY2xlYW5lZEFsdGVybmF0aXZlLCBjbGVhbmVkQXR0ZW1wdCxcbiAgICAgICAgeyBpZ25vcmVDYXNlOiAhdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlIH0pO1xuICAgICAgdmFyIGNoYW5nZUNvdW50ID0gdGhpcy5nZXRDaGFuZ2VzQ291bnRGcm9tRGlmZihkaWZmKTtcblxuICAgICAgaWYgKGNoYW5nZUNvdW50ID09PSAwKSB7XG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xuICAgICAgICBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID0gQ29ycmVjdG5lc3MuRXhhY3RNYXRjaDtcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VDb3VudCA8PSB0aGlzLmdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKGFsdGVybmF0aXZlKVxuICAgICAgICAmJiAoZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPT09IDAgfHwgY2hhbmdlQ291bnQgPCBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCkpIHtcbiAgICAgICAgZXZhbHVhdGlvbi51c2VkQWx0ZXJuYXRpdmUgPSBjbGVhbmVkQWx0ZXJuYXRpdmU7XG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoO1xuICAgICAgICBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9IGNoYW5nZUNvdW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXZhbHVhdGlvbjtcbiAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XG5pbXBvcnQgeyBBbnN3ZXIsIENvcnJlY3RuZXNzIH0gZnJvbSAnLi9hbnN3ZXInO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiwgTG9jYWxpemF0aW9uTGFiZWxzIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgZ2V0TG9uZ2VzdFN0cmluZywgc2h1ZmZsZUFycmF5IH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XG5pbXBvcnQgKiBhcyBqc2RpZmYgZnJvbSAnZGlmZic7XG5cbmV4cG9ydCBjbGFzcyBCbGFuayBleHRlbmRzIENsb3plRWxlbWVudCB7XG4gIC8vIGNvbnRlbnRcbiAgY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xuICBpbmNvcnJlY3RBbnN3ZXJzOiBBbnN3ZXJbXTtcbiAgaGludDogTWVzc2FnZTtcbiAgaWQ6IHN0cmluZztcbiAgY2hvaWNlczogc3RyaW5nW107XG4gIGhhc0hpbnQ6IGJvb2xlYW47XG5cbiAgLy8gdmlld21vZGVsIHN0dWZmXG5cbiAgbGFzdENoZWNrZWRUZXh0OiBzdHJpbmc7XG4gIGVudGVyZWRUZXh0OiBzdHJpbmc7XG4gIGlzQ29ycmVjdDogYm9vbGVhbjtcbiAgaXNFcnJvcjogYm9vbGVhbjtcbiAgaXNSZXRyeTogYm9vbGVhbjtcbiAgaGFzUGVuZGluZ0ZlZWRiYWNrOiBib29sZWFuO1xuICBpc1Nob3dpbmdTb2x1dGlvbjogYm9vbGVhbjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBtaW5UZXh0TGVuZ3RoOiBudW1iZXI7XG4gIHNwZWVjaEJ1YmJsZTogYW55O1xuXG4gIC8qKlxuICAgKiBBZGQgaW5jb3JyZWN0IGFuc3dlcnMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSBvYmplY3QuIENhbGwgZmluaXNoSW5pdGlhbGl6YXRpb24oKVxuICAgKiB3aGVuIGRvbmUuXG4gICAqIEBwYXJhbSAge0lTZXR0aW5nc30gc2V0dGluZ3NcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvcnJlY3RUZXh0P1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGhpbnRUZXh0P1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcbiAgICB0aGlzLmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5jaG9pY2VzID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy50eXBlID0gQ2xvemVFbGVtZW50VHlwZS5CbGFuaztcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIC8qKlxuICAqIENhbGwgdGhpcyBtZXRob2Qgd2hlbiBhbGwgaW5jb3JyZWN0IGFuc3dlcnMgaGF2ZSBiZWVuIGFkZGVkLlxuICAqL1xuICBwdWJsaWMgZmluaXNoSW5pdGlhbGl6YXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0ICYmIHRoaXMuc2V0dGluZ3Muc2VsZWN0QWx0ZXJuYXRpdmVzID09PSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzKSB7XG4gICAgICB0aGlzLmxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpO1xuICAgIH1cbiAgICB0aGlzLmNhbGN1bGF0ZU1pblRleHRMZW5ndGgoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDb3JyZWN0QW5zd2VyKGFuc3dlcjogQW5zd2VyKSB7XG4gICAgdGhpcy5jb3JyZWN0QW5zd2Vycy5wdXNoKGFuc3dlcik7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlcnMoKTogc3RyaW5nW10ge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhbnN3ZXIuYWx0ZXJuYXRpdmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRIaW50KG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLmhpbnQgPSBtZXNzYWdlO1xuICAgIHRoaXMuaGFzSGludCA9IHRoaXMuaGludC50ZXh0ICE9PSBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGluY29ycmVjdCBhbnN3ZXIgdG8gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB0ZXh0IC0gV2hhdCB0aGUgdXNlciBtdXN0IGVudGVyLlxuICAgKiBAcGFyYW0gcmVhY3Rpb24gIC0gV2hhdCB0aGUgdXNlciBnZXRzIGRpc3BsYXllZCB3aGVuIGhlIGVudGVyZXMgdGhlIHRleHQuXG4gICAqL1xuICBwdWJsaWMgYWRkSW5jb3JyZWN0QW5zd2VyKHRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluY29ycmVjdEFuc3dlcnMucHVzaChcbiAgICAgIG5ldyBBbnN3ZXIodGV4dCwgcmVhY3Rpb24sIHNob3dIaWdobGlnaHQsIGhpZ2hsaWdodCwgdGhpcy5zZXR0aW5ncykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyB0aGUgaW5wdXQgYm94IG11c3QgaGF2ZSBiZSB0byBhbGxvdyBmb3IgYWxsIGNvcnJlY3QgYW5zd2Vycy5cbiAgICovXG4gIC8vIFRPRE86IHJlZmFjdG9yXG4gIHByaXZhdGUgY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpOiB2b2lkIHtcbiAgICB2YXIgYW5zd2Vyczogc3RyaW5nW10gPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBjb3JyZWN0QW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XG4gICAgICBmb3IgKGxldCBpbmNvcnJlY3RBbnN3ZXIgb2YgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGluY29ycmVjdEFuc3dlci5hbHRlcm5hdGl2ZXMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbG9uZ2VzdEFuc3dlciA9IGdldExvbmdlc3RTdHJpbmcoYW5zd2Vycyk7XG4gICAgdmFyIGwgPSBsb25nZXN0QW5zd2VyLmxlbmd0aDtcbiAgICB0aGlzLm1pblRleHRMZW5ndGggPSBNYXRoLm1heCgxMCwgbCAtIChsICUgMTApICsgMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgYWx0ZXJuYXRpdmVzIHByb3ZpZGVkIGJ5XG4gICAqIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2Vycy5cbiAgICovXG4gIHByaXZhdGUgbG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaG9pY2VzID0gc2h1ZmZsZUFycmF5KHRoaXMuY2hvaWNlcyk7XG4gICAgdGhpcy5jaG9pY2VzLnVuc2hpZnQoXCJcIik7XG5cbiAgICByZXR1cm4gdGhpcy5jaG9pY2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgY29ycmVjdCBhbnN3ZXJzIG9mIHRoZSBjbG96ZS5cbiAgICogQHBhcmFtIG90aGVyQmxhbmtzIEFsbCBPVEhFUiBibGFua3MgaW4gdGhlIGNsb3plLiAoZXhjbHVkZXMgdGhlIGN1cnJlbnQgb25lISlcbiAgICovXG4gIHB1YmxpYyBsb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rczogQmxhbmtbXSk6IHN0cmluZ1tdIHtcbiAgICBsZXQgb3duQ2hvaWNlcyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XG4gICAgICAgIG93bkNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG90aGVyQ2hvaWNlcyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IG90aGVyQmxhbmsgb2Ygb3RoZXJCbGFua3MpIHtcbiAgICAgIGZvciAobGV0IGFuc3dlciBvZiBvdGhlckJsYW5rLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgICBvdGhlckNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdGhlckNob2ljZXMgPSBzaHVmZmxlQXJyYXkob3RoZXJDaG9pY2VzKTtcblxuICAgIGxldCBtYXhDaG9pY2VzID0gdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uO1xuICAgIGlmIChtYXhDaG9pY2VzID09PSB1bmRlZmluZWQgfHwgbWF4Q2hvaWNlcyA9PT0gMClcbiAgICAgIG1heENob2ljZXMgPSBvd25DaG9pY2VzLmxlbmd0aCArIG90aGVyQ2hvaWNlcy5sZW5ndGg7XG5cbiAgICBsZXQgbGVmdE92ZXJDaG9pY2VzID0gbWF4Q2hvaWNlcyAtIG93bkNob2ljZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVmdE92ZXJDaG9pY2VzICYmIHggPCBvdGhlckNob2ljZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChvd25DaG9pY2VzLmluZGV4T2Yob3RoZXJDaG9pY2VzW3hdKSA+PSAwKSB7XG4gICAgICAgIGxlZnRPdmVyQ2hvaWNlcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKG90aGVyQ2hvaWNlc1t4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaG9pY2VzID0gc2h1ZmZsZUFycmF5KG93bkNob2ljZXMpO1xuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2hvaWNlcztcbiAgfVxuXG4gIC8qKlxuICAqIENsZWFycyB0aGUgYmxhbmsgZnJvbSBhbGwgZW50ZXJlZCB0ZXh0IGFuZCBoaWRlcyBwb3B1cHMuXG4gICovXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcbiAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJsYW5rIHRvIGEgc3RhdGUgaW4gd2hpY2ggdGhlIGNvcnJlY3Qgc29sdXRpb24gaWYgc2hvd24gaWYgdGhlIHVzZXJcbiAgICogaGFzbid0IGVudGVyZWQgYSBjb3JyZWN0IG9uZSBzbyBmYXIuXG4gICAqL1xuICBwdWJsaWMgc2hvd1NvbHV0aW9uKCkge1xuICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KHRydWUpO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICAgIGlmICh0aGlzLmlzQ29ycmVjdClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gdGhpcy5jb3JyZWN0QW5zd2Vyc1swXS5hbHRlcm5hdGl2ZXNbMF07XG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5TaG93U29sdXRpb24pO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXNzZWQoKSB7XG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XG4gICAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcbiAgICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25EaXNwbGF5RmVlZGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XG4gICAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5VG9vbHRpcChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IE1lc3NhZ2VUeXBlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4sIGlkPzogc3RyaW5nKSB7XG4gICAgaWYgKCFzdXJwcmVzc1Rvb2x0aXApXG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNob3coaWQgPyBpZCA6IHRoaXMuaWQsIG1lc3NhZ2UsIHRoaXMsIHR5cGUpO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUb29sdGlwKCkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUb29sdGlwRXJyb3JUZXh0KG1lc3NhZ2U6IE1lc3NhZ2UsIHN1cnByZXNzVG9vbHRpcDogYm9vbGVhbikge1xuICAgIGlmIChtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudCkge1xuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXAsIG1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKG1lc3NhZ2UudGV4dCwgTWVzc2FnZVR5cGUuRXJyb3IsIHN1cnByZXNzVG9vbHRpcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTcGVsbGluZ01pc3Rha2VNZXNzYWdlKGV4cGVjdGVkVGV4dDogc3RyaW5nLCBlbnRlcmVkVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnR5cG9NZXNzYWdlKVxuXG4gICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGV4cGVjdGVkVGV4dCwgZW50ZXJlZFRleHQsIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcblxuICAgIHZhciBtaXN0YWtlU3BhbiA9IHRoaXMuanF1ZXJ5KFwiPHNwYW4vPlwiLCB7IFwiY2xhc3NcIjogXCJzcGVsbGluZy1taXN0YWtlXCIgfSk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpZmYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcGFydCA9IGRpZmZbaW5kZXhdO1xuICAgICAgdmFyIHNwYW5DbGFzcyA9ICcnO1xuICAgICAgaWYgKHBhcnQucmVtb3ZlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IGRpZmYubGVuZ3RoIC0gMSB8fCAhZGlmZltpbmRleCArIDFdLmFkZGVkKSB7XG4gICAgICAgICAgcGFydC52YWx1ZSA9IHBhcnQudmFsdWUucmVwbGFjZSgvLi9nLCBcIl9cIik7XG4gICAgICAgICAgc3BhbkNsYXNzID0gJ21pc3NpbmctY2hhcmFjdGVyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcnQuYWRkZWQpIHtcbiAgICAgICAgc3BhbkNsYXNzID0gJ21pc3Rha2VuLWNoYXJhY3Rlcic7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGFuID0gdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIsIHsgXCJjbGFzc1wiOiBzcGFuQ2xhc3MsIFwiaHRtbFwiOiBwYXJ0LnZhbHVlLnJlcGxhY2UoXCIgXCIsIFwiJm5ic3A7XCIpIH0pO1xuICAgICAgbWlzdGFrZVNwYW4uYXBwZW5kKHNwYW4pO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoXCJAbWlzdGFrZVwiLCB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIikuYXBwZW5kKG1pc3Rha2VTcGFuKS5odG1sKCkpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIHRoZSBjb3JyZWN0IGFuc3dlciBvciBvbmUgb2YgdGhlIFxuICAgKiBpbmNvcnJlY3Qgb25lcyBhbmQgZ2l2ZXMgdGhlIHVzZXIgZmVlZGJhY2sgYWNjb3JkaW5nbHkuXG4gICAqL1xuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KHN1cnByZXNzVG9vbHRpcHM6IGJvb2xlYW4sIGZvcmNlQ2hlY2s/OiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayAmJiB0aGlzLmxhc3RDaGVja2VkVGV4dCA9PT0gdGhpcy5lbnRlcmVkVGV4dCAmJiAhZm9yY2VDaGVjaylcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gdGhpcy5lbnRlcmVkVGV4dC50b1N0cmluZygpO1xuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG5cbiAgICB2YXIgZXhhY3RDb3JyZWN0TWF0Y2hlcyA9IHRoaXMuY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xuICAgIHZhciBjbG9zZUNvcnJlY3RNYXRjaGVzID0gdGhpcy5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG4gICAgdmFyIGV4YWN0SW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG4gICAgdmFyIGNsb3NlSW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG5cbiAgICBpZiAoZXhhY3RDb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgdGhpcy5lbnRlcmVkVGV4dCA9IGV4YWN0Q29ycmVjdE1hdGNoZXNbMF0udXNlZEFsdGVybmF0aXZlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChleGFjdEluY29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoZXhhY3RJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjbG9zZUNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLndhcm5TcGVsbGluZ0Vycm9ycykge1xuICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKHRoaXMuZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZSwgdGhpcy5lbnRlcmVkVGV4dCksIE1lc3NhZ2VUeXBlLlJldHJ5LCBzdXJwcmVzc1Rvb2x0aXBzKTtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5SZXRyeSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjY2VwdFNwZWxsaW5nRXJyb3JzKSB7XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuQ29ycmVjdCk7XG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbG9zZUluY29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhbHdheXNBcHBseWluZ0Fuc3dlcnMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMuZmlsdGVyKGEgPT4gYS5hcHBsaWVzQWx3YXlzKTtcbiAgICBpZiAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzICYmIGFsd2F5c0FwcGx5aW5nQW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzWzBdLCBzdXJwcmVzc1Rvb2x0aXBzKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkVycm9yKTtcbiAgfVxuXG4gIHB1YmxpYyBvblR5cGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuTm9uZSk7XG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICB9XG5cbiAgcHVibGljIGxvc3RGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlU2VydmljZS5pc0FjdGl2ZSh0aGlzKSkge1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJvb2xlYW4gcHJvcGVydGllcyBpc0NvcnJlY3QsIGlzIEVycm9yIGFuZCBpc1JldHJ5IGFjY29yZGluZyB0byB0aGVwYXNzZWQgIG1lc3NhZ2VUeXBlLlxuICAgKiBAcGFyYW0gbWVzc2FnZVR5cGUgXG4gICAqL1xuICBwcml2YXRlIHNldEFuc3dlclN0YXRlKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5pc1JldHJ5ID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IGZhbHNlO1xuXG4gICAgc3dpdGNoIChtZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db3JyZWN0OlxuICAgICAgICB0aGlzLmlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlJldHJ5OlxuICAgICAgICB0aGlzLmlzUmV0cnkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uOlxuICAgICAgICB0aGlzLmlzU2hvd2luZ1NvbHV0aW9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93RXJyb3JUb29sdGlwKGFuc3dlcjogQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcbiAgICBpZiAoYW5zd2VyLm1lc3NhZ2UgJiYgYW5zd2VyLm1lc3NhZ2UudGV4dCkge1xuICAgICAgdGhpcy5zZXRUb29sdGlwRXJyb3JUZXh0KGFuc3dlci5tZXNzYWdlLCBzdXJwcmVzc1Rvb2x0aXApO1xuICAgIH1cbiAgICBpZiAoIXN1cnByZXNzVG9vbHRpcCkge1xuICAgICAgYW5zd2VyLmFjdGl2YXRlSGlnaGxpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBoaW50IGluIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIHNob3dIaW50KCkge1xuICAgIGlmICh0aGlzLmlzU2hvd2luZ1NvbHV0aW9uIHx8IHRoaXMuaXNDb3JyZWN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgaWYgKHRoaXMuaGludCAmJiB0aGlzLmhpbnQudGV4dCAhPT0gXCJcIikge1xuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmhpbnQudGV4dCwgTWVzc2FnZVR5cGUuUmV0cnksIGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGludC5oaWdobGlnaHRlZEVsZW1lbnQuaXNIaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRlcmVkVGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gZGF0YTtcbiAgfVxufSIsImV4cG9ydCBlbnVtIENsb3plRWxlbWVudFR5cGUge1xuICBCbGFuayxcbiAgSGlnaGxpZ2h0XG59XG5cbmV4cG9ydCBjbGFzcyBDbG96ZUVsZW1lbnQge1xuICBwdWJsaWMgdHlwZTogQ2xvemVFbGVtZW50VHlwZTtcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4vYmxhbmtcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjbG96ZS4gSW5zdGFudGlhdGUgd2l0aCBzdGF0aWMgY3JlYXRlQ2xvemUoKS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3plIHtcbiAgcHVibGljIGh0bWw6IHN0cmluZztcbiAgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hsaWdodFtdO1xuICBwdWJsaWMgYmxhbmtzOiBCbGFua1tdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIGJsYW5rcyB3ZXJlIGVudGVyZWQgY29ycmVjdGx5LiBcbiAgICogQHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGdldCBpc1NvbHZlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ibGFua3MuZXZlcnkoYiA9PiBiLmlzQ29ycmVjdCA9PT0gdHJ1ZSk7XG4gIH1cblxuXG4gIHB1YmxpYyBoaWRlQWxsSGlnaGxpZ2h0cygpOiB2b2lkIHtcbiAgICBmb3IgKHZhciBoaWdobGlnaHQgb2YgdGhpcy5oaWdobGlnaHRzKSB7XG4gICAgICBoaWdobGlnaHQuaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcbiAgICAgIGJsYW5rLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dTb2x1dGlvbnMoKSB7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcbiAgICAgIGJsYW5rLnNob3dTb2x1dGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXplKCkgOiBzdHJpbmdbXSB7XG4gICAgdmFyIGNsb3plID0gW107XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcbiAgICAgIGNsb3plLnB1c2goYmxhbmsuc2VyaWFsaXplKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG96ZTtcbiAgfVxuXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChpbmRleCA+PSB0aGlzLmJsYW5rcy5sZW5ndGgpXG4gICAgICAgIHJldHVybjtcbiAgICAgIHZhciBibGFuayA9IHRoaXMuYmxhbmtzW2luZGV4XTtcbiAgICAgIGJsYW5rLmRlc2VyaWFsaXplKGRhdGFbaW5kZXhdKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIEVycm9yLFxuICBDb3JyZWN0LFxuICBSZXRyeSxcbiAgU2hvd1NvbHV0aW9uLFxuICBOb25lXG59XG5cbmV4cG9ydCBlbnVtIENsb3plVHlwZSB7XG4gIFR5cGUsXG4gIFNlbGVjdFxufVxuXG5leHBvcnQgZW51bSBTZWxlY3RBbHRlcm5hdGl2ZXMge1xuICBBbHRlcm5hdGl2ZXMsXG4gIEFsbFxufSIsImltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGhpZ2hsaWdodCBpbiB0aGUgY2xvemUuXG4gKi9cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQgZXh0ZW5kcyBDbG96ZUVsZW1lbnQge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdGlzSGlnaGxpZ2h0ZWQ6IGJvb2xlYW47XG5cdGlkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodDtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcblx0fVxufSIsImltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuL2hpZ2hsaWdodFwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBtZXNzYWdlIHRoYXQgdGhlIGNvbnRlbnQgYXV0aG9yIGhhcyBzcGVjaWZpZWQgdG8gYmUgYSByZWFjdGlvblxuICogdG8gYW4gdXNlcidzIGFuc3dlci4gXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgaGlnaGxpZ2h0ZWRFbGVtZW50OiBIaWdobGlnaHQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgcHJpdmF0ZSByZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBpZighc2hvd0hpZ2hsaWdodClcbiAgICAgIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxpbmtIaWdobGlnaHQgPSAoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pID0+IHtcbiAgICBpZiAoIXRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbilcbiAgICAgIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA8IDAgJiYgKDAgLSB0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gLSAxKSA8IGhpZ2hsaWdodHNCZWZvcmUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0JlZm9yZVswIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPiAwICYmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gLSAxIDwgaGlnaGxpZ2h0c0FmdGVyLmxlbmd0aCkpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSBoaWdobGlnaHRzQWZ0ZXJbdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XG4gICAgICB9XG4gIH1cbn0iLCIvKipcbiAqIEEgc25pcHBldCBpcyBhIHRleHQgYmxvY2sgdGhhdCBpcyBwdXQgaW50byBwbGFjZWQgbWFya2VkIGluIGZlZWRiYWNrIHRleHRzIG9yIGhpbnRzLlxuICovXG5leHBvcnQgY2xhc3MgU25pcHBldCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIHRoZSBzbmlwcGV0LlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc25pcHBldCB0aGF0IGlzIHVzZWQgd2hlbiBpdCBpcyByZWZlcmVuY2VkIGluIGEgZmVlZGJhY2t0ZXh0ICh3aXRob3V0IHRoZSBzbmlwcGV0IG1hcmtlciBAKVxuICAgKiBAcGFyYW0gdGV4dCBUaGUgc25pcHBldCBpdHNlbGYgKGh0bWwpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdGV4dDogc3RyaW5nKSB7XG4gICAgXG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB7XG4gIG5hbWU6IGFueTtcbiAgZGVzY3JpcHRpb246IGFueTtcbiAgdHlwZTogc3RyaW5nO1xuICBpbnRlcmFjdGlvblR5cGU6IFwidHJ1ZS1mYWxzZVwiIHwgXCJjaG9pY2VcIiB8IFwiZmlsbC1pblwiIHwgXCJsb25nLWZpbGwtaW5cIiB8IFwibWF0Y2hpbmdcIiB8IFwicGVyZm9ybWFuY2VcIiB8IFwic2VxdWVuY2luZ1wiIHwgXCJsaWtlcnRcIiB8IFwibnVtZXJpY1wiIHwgXCJvdGhlclwiO1xuICBjb3JyZWN0UmVzcG9uc2VzUGF0dGVybj86IHN0cmluZ1tdXG59IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4uL21vZGVscy9ibGFua1wiO1xuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gXCIuLi9tb2RlbHMvc25pcHBldFwiO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IFVucndhcHBlciB9IGZyb20gJy4uL2hlbHBlcnMvdW53cmFwcGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVJlcG9zaXRvcnkge1xuICBnZXRCbGFua3MoKTogQmxhbmtbXTtcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZztcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZztcbiAgZ2V0TWVkaWEoKTogYW55O1xuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nO1xuICBnZXRTbmlwcGV0cygpOiBTbmlwcGV0W107XG59XG5cbi8qKlxuICogV3JhcHMgYXJvdW5kIHRoZSBoNXAgY29uZmlnIG9iamVjdCBhbmQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgSDVQRGF0YVJlcG9zaXRvcnkgaW1wbGVtZW50cyBJRGF0YVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGg1cENvbmZpZ0RhdGE6IGFueSwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLFxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIFxuICAgIHByaXZhdGUgdW53cmFwcGVyOiBVbnJ3YXBwZXIpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJsYW5rIHRleHQgb2YgdGhlIGNsb3plIChhcyBIVE1MIG1hcmt1cCkuXG4gICAqL1xuICBnZXRDbG96ZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzVGV4dDtcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZSBvciBpbXBsZW1lbnRcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBnZXRNZWRpYSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEubWVkaWE7XG4gIH1cblxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQudGFzaztcbiAgfVxuXG4gIGdldEJsYW5rcygpOiBCbGFua1tdIHtcbiAgICB2YXIgYmxhbmtzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XG5cbiAgICBpZiAoIXRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3QpXG4gICAgICByZXR1cm4gYmxhbmtzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaDVwQmxhbmsgPSB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0W2ldO1xuXG4gICAgICB2YXIgY29ycmVjdFRleHQgPSBoNXBCbGFuay5jb3JyZWN0QW5zd2VyVGV4dDtcbiAgICAgIGlmIChjb3JyZWN0VGV4dCA9PT0gXCJcIiB8fCBjb3JyZWN0VGV4dCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgdmFyIGJsYW5rID0gQmxhbmtMb2FkZXIuaW5zdGFuY2UuY3JlYXRlQmxhbmsoXCJjbG96ZVwiICsgaSwgY29ycmVjdFRleHQsXG4gICAgICAgIGg1cEJsYW5rLmhpbnQsIGg1cEJsYW5rLmluY29ycmVjdEFuc3dlcnNMaXN0KTtcblxuICAgICAgYmxhbmsuZmluaXNoSW5pdGlhbGl6YXRpb24oKTtcbiAgICAgIGJsYW5rcy5wdXNoKGJsYW5rKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxhbmtzO1xuICB9XG5cbiAgZ2V0U25pcHBldHMoKTogU25pcHBldFtdIHtcbiAgICB2YXIgc25pcHBldHM6IFNuaXBwZXRbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgaWYgKCF0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHMpXG4gICAgICByZXR1cm4gc25pcHBldHM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJhd19zbmlwcGV0ID0gdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzW2ldO1xuICAgICAgdmFyIHNuaXBwZXQgPSBuZXcgU25pcHBldChyYXdfc25pcHBldC5zbmlwcGV0TmFtZSwgdGhpcy51bndyYXBwZXIudW53cmFwKHJhd19zbmlwcGV0LnNuaXBwZXRUZXh0KSk7XG4gICAgICBzbmlwcGV0cy5wdXNoKHNuaXBwZXQpO1xuICAgIH1cbiAgICByZXR1cm4gc25pcHBldHM7XG4gIH1cbn0iLCJleHBvcnQgZW51bSBMb2NhbGl6YXRpb25MYWJlbHMge1xuICBzaG93U29sdXRpb25CdXR0b24gPSBcInNob3dTb2x1dGlvbnNcIixcbiAgcmV0cnlCdXR0b24gPSBcInRyeUFnYWluXCIsXG4gIGNoZWNrQWxsQnV0dG9uID0gXCJjaGVja0Fuc3dlclwiLFxuICBub3RGaWxsZWRPdXRXYXJuaW5nID0gXCJub3RGaWxsZWRPdXRcIixcbiAgdGlwQnV0dG9uID1cInRpcExhYmVsXCIsXG4gIHR5cG9NZXNzYWdlID0gXCJzcGVsbGluZ01pc3Rha2VXYXJuaW5nXCIsXG4gIHNjb3JlQmFyTGFiZWwgPSBcInNjb3JlQmFyTGFiZWxcIiAgXG59XG5cbmV4cG9ydCBlbnVtIExvY2FsaXphdGlvblN0cnVjdHVyZXMge1xuICBjb25maXJtQ2hlY2sgPSBcImNvbmZpcm1DaGVja1wiLFxuICBjb25maXJtUmV0cnkgPSBcImNvbmZpcm1SZXRyeVwiLFxuICBvdmVyYWxsRmVlZGJhY2sgPSBcIm92ZXJhbGxGZWVkYmFja1wiXG59XG5cbi8qKlxuICogUHJvdmlkZXMgbG9jYWxpemF0aW9uIHNlcnZpY2VzLlxuICovXG5cbmV4cG9ydCBjbGFzcyBINVBMb2NhbGl6YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGg1cENvbmZpZ3VyYXRpb246IGFueSkge1xuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsaXphYmxlU3RyaW5nSWRlbnRpZmllclxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgZ2V0VGV4dChsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJdO1xuICB9XG5cbiAgcHJpdmF0ZSBsYWJlbFRvU3RyaW5nKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpIHtcbiAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyBmb3IgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtMb2NhbGl6YXRpb25MYWJlbHN9IGxhYmVsXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgZ2V0VGV4dEZyb21MYWJlbChsYWJlbDogTG9jYWxpemF0aW9uTGFiZWxzKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZXh0KHRoaXMubGFiZWxUb1N0cmluZyhsYWJlbCkpO1xuICB9XG5cbiAgZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKHN0cnVjdHVyZTogTG9jYWxpemF0aW9uU3RydWN0dXJlcykgOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bc3RydWN0dXJlLnRvU3RyaW5nKCldO1xuICB9XG59IiwiaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZW51bXMnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIHNwZWVjaEJ1YmJsZTogYW55O1xuICBwcml2YXRlIGFzc29jaWF0ZWRCbGFuazogQmxhbms7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqUXVlcnk6IEpRdWVyeVN0YXRpYykge1xuXG4gIH1cblxuICBwdWJsaWMgc2hvdyhlbGVtZW50SWQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBibGFuazogQmxhbmssIHR5cGU/OiBNZXNzYWdlVHlwZSkge1xuICAgIGlmICghdHlwZSlcbiAgICAgIHR5cGUgPSBNZXNzYWdlVHlwZS5Ob25lO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gdGhpcy5qUXVlcnkoXCIjXCIgKyBlbGVtZW50SWQpO1xuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc3BlZWNoQnViYmxlID0gbmV3IEg1UC5Kb3ViZWxTcGVlY2hCdWJibGUoZWxlbWVudHMsIG1lc3NhZ2UpO1xuICAgICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSBibGFuaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5zcGVlY2hCdWJibGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFzc29jaWF0ZWRCbGFuayA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZShibGFuazogQmxhbmspIHtcbiAgICByZXR1cm4gdGhpcy5hc3NvY2lhdGVkQmxhbmsgPT09IGJsYW5rO1xuICB9XG59IiwiaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIHtcbiAgY2xvemVUeXBlOiBDbG96ZVR5cGU7XG4gIHNlbGVjdEFsdGVybmF0aXZlczogU2VsZWN0QWx0ZXJuYXRpdmVzO1xuICBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIGVuYWJsZVJldHJ5OiBib29sZWFuO1xuICBlbmFibGVTb2x1dGlvbnNCdXR0b246IGJvb2xlYW47XG4gIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuO1xuICBhdXRvQ2hlY2s6IGJvb2xlYW47XG4gIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XG4gIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcbiAgYWNjZXB0U3BlbGxpbmdFcnJvcnM6IGJvb2xlYW47XG4gIHNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0OiBib29sZWFuO1xuICBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW47XG4gIGNvbmZpcm1SZXRyeURpYWxvZzogYm9vbGVhbjtcbiAgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEg1UFNldHRpbmdzIGltcGxlbWVudHMgSVNldHRpbmdzIHtcbiAgcHVibGljIGNsb3plVHlwZTogQ2xvemVUeXBlID0gQ2xvemVUeXBlLlR5cGU7XG4gIHB1YmxpYyBzZWxlY3RBbHRlcm5hdGl2ZXM6IFNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXM7XG4gIHB1YmxpYyBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXIgPSA1O1xuICBwdWJsaWMgZW5hYmxlUmV0cnk6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgZW5hYmxlU29sdXRpb25zQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGF1dG9DaGVjazogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgd2FyblNwZWxsaW5nRXJyb3JzOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGFjY2VwdFNwZWxsaW5nRXJyb3JzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNvbmZpcm1SZXRyeURpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGg1cENvbmZpZ0RhdGE6IGFueSkge1xuICAgIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5tb2RlID09PSAnc2VsZWN0aW9uJykge1xuICAgICAgdGhpcy5jbG96ZVR5cGUgPSBDbG96ZVR5cGUuU2VsZWN0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2xvemVUeXBlID0gQ2xvemVUeXBlLlR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gJ2FsbCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICB9IGVsc2UgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gJ2FsdGVybmF0aXZlcycpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjtcbiAgICB0aGlzLmVuYWJsZVJldHJ5ID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlUmV0cnk7XG4gICAgdGhpcy5lbmFibGVTb2x1dGlvbnNCdXR0b24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVTb2x1dGlvbnNCdXR0b247XG4gICAgdGhpcy5lbmFibGVDaGVja0J1dHRvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZUNoZWNrQnV0dG9uO1xuICAgIHRoaXMuYXV0b0NoZWNrID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuYXV0b0NoZWNrO1xuICAgIHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNhc2VTZW5zaXRpdmU7XG4gICAgdGhpcy53YXJuU3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcIndhcm5cIjtcbiAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc3BlbGxpbmdFcnJvckJlaGF2aW91ciA9PT0gXCJhY2NlcHRcIjtcbiAgICB0aGlzLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0ID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ7XG4gICAgdGhpcy5jb25maXJtQ2hlY2tEaWFsb2cgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jb25maXJtQ2hlY2tEaWFsb2c7XG4gICAgdGhpcy5jb25maXJtUmV0cnlEaWFsb2cgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jb25maXJtUmV0cnlEaWFsb2c7XG4gICAgdGhpcy5kaXNhYmxlSW1hZ2Vab29taW5nID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZGlzYWJsZUltYWdlWm9vbWluZztcblxuICAgIHRoaXMuZW5mb3JjZUxvZ2ljKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBzZW5zaWJsZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2V0dGluZ3MgaGlkZGVuIHdpdGggc2hvd1doZW5cbiAgICovXG4gIHByaXZhdGUgZW5mb3JjZUxvZ2ljKCkge1xuICAgIGlmICh0aGlzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlR5cGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZW50cmllcy9kaXN0LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==