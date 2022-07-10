/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/spencer-davis-R_J6KjC68E4-unsplash.jpg */ "./src/images/spencer-davis-R_J6KjC68E4-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Michroma&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  color: red;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Michroma\", sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #013952;\n  min-height: 3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  padding: 0.5rem;\n}\nnav .titleDiv {\n  align-self: center;\n  color: red;\n  font-size: 1.5rem;\n  text-decoration: underline;\n}\nnav ul {\n  display: flex;\n  flex-direction: row;\n  gap: 2rem;\n  list-style-type: none;\n  align-self: center;\n  justify-content: center;\n}\nnav ul li {\n  list-style: none;\n  display: inline;\n  font-weight: bold;\n}\nnav ul li a {\n  text-decoration: none;\n  color: red;\n  transition: 0.4s;\n}\nnav ul a:hover {\n  text-decoration-color: yellow;\n  color: yellow;\n  text-decoration: underline;\n}\n\n.content {\n  border: solid 2px red;\n  width: 60vw;\n  margin: auto;\n  text-align: center;\n  min-height: 80vh;\n  max-height: fit-content;\n  margin-top: 2.5rem;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  transition: 0.4s;\n}\n.content .content-title {\n  color: red;\n  width: fit-content;\n  margin: auto;\n}\n.content .content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-auto-rows: 1fr;\n  row-gap: 2rem;\n  padding: 1rem;\n  column-gap: 2rem;\n}\n.content .content-grid .item {\n  min-height: 6rem;\n  max-height: fit-content;\n  min-width: 6rem;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n}\n.content .content-grid .item #item-title {\n  color: yellow;\n}\n.content .content-grid .item hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.content .content-grid .item p {\n  font-size: small;\n  color: yellow;\n  font-weight: bold;\n}\n.content .content-grid .item #cost {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: yellow;\n  font-weight: bold;\n  padding: 0.25rem;\n}\n@media only screen and (max-width: 800px) {\n  .content .content-grid {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  .content .content-grid .item #cost {\n    position: relative;\n    display: block;\n  }\n}\n\n.aboutContainer {\n  height: 100%;\n  width: 100%;\n}\n.aboutContainer #aboutTitle {\n  font-style: italic;\n  font-weight: bold;\n  color: rgb(160, 59, 255);\n  margin: 1rem auto;\n  font-size: 2rem;\n  transition: 0.4s;\n  width: fit-content;\n}\n.aboutContainer #aboutTitle:hover {\n  transform: scale(1.05);\n  transition: 0.4s;\n  color: yellow;\n}\n.aboutContainer hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.aboutContainer p {\n  margin-top: 2rem;\n  display: block;\n  color: yellow;\n}\n.aboutContainer #aboutTitleTwo {\n  margin: 1rem 0 1rem 0;\n  color: yellow;\n}\n.aboutContainer li {\n  list-style-type: none;\n  text-align: start;\n  padding: 0.25rem;\n  color: yellow;\n}\n.aboutContainer #aboutLastStatement {\n  color: rgb(160, 59, 255);\n  margin-top: 4rem;\n  font-size: 1.5rem;\n}\n\n.contactContainer {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 2rem;\n}\n.contactContainer .contactInfo {\n  border: 2px black solid;\n  flex-wrap: wrap;\n  min-height: 33vh;\n  min-width: 20%;\n  display: flex;\n  flex-direction: row;\n}\n.contactContainer .contactInfo form {\n  border: 2px solid red;\n}\n.contactContainer .contactInfo form label {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  color: yellow;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo form input {\n  display: block;\n  width: 100%;\n}\n.contactContainer .contactInfo form .buttonDiv {\n  margin-left: 0;\n  text-align: start;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy {\n  text-align: start;\n  padding: 0.5rem;\n  min-width: 20vw;\n}\n.contactContainer .contactInfo .contactCopy p {\n  color: yellow;\n}\n.contactContainer .contactInfo .contactCopy h3 {\n  color: yellow;\n  font-style: italic;\n  text-decoration: underline;\n}\n.contactContainer .contactInfo .contactCopy .icon {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  margin: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy .openingHours::before {\n  font: var(--fa-font-solid);\n  content: \"\\f017\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .phoneNumber::before {\n  font: var(--fa-font-solid);\n  content: \"\\f095\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .emailDiv::before {\n  font: var(--fa-font-solid);\n  content: \"\\f0e0\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .address::before {\n  font: var(--fa-font-solid);\n  content: \"\\f3c5\";\n  font-size: 1.25rem;\n}\n.contactContainer .location {\n  border: 2px solid red;\n  height: 33vh;\n}\n\n/* .content:hover {\n    transform: scale(1.05);\n    transition: 0.4s;\n    border: solid 4px $cost-color ;\n    height: fit-content;\n\n}; */\n@media only screen and (max-width: 600px) {\n  .content-grid {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  .contactInfo {\n    flex-direction: column;\n  }\n  .contactInfo form {\n    width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["//import\r\n@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');\r\n\r\n//Variables \r\n$Michroma: 'Michroma', sans-serif;\r\n$nav-color: #013952;\r\n$nav-font: red;\r\n$nav-hover:yellow;\r\n$content-title: red;\r\n$cost-color: yellow;\r\n$about-title: rgb(160, 59, 255);\r\n\r\n\r\n// root seetings \r\n\r\n.icon::before {\r\n    display: inline-block;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    color: $nav-font;\r\n  }\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family:$Michroma;\r\n}\r\n\r\nbody {\r\n    background-image: url(./images/spencer-davis-R_J6KjC68E4-unsplash.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    //border: solid yellow 2px;\r\n    background-color: $nav-color;\r\n    min-height: 3rem;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    padding: 0.5rem;;\r\n   \r\n    .titleDiv {\r\n        align-self: center;        \r\n        color: $nav-font;\r\n        font-size: 1.5rem;\r\n        text-decoration: underline;\r\n            \r\n    };\r\n\r\n    ul{ \r\n        display: flex;\r\n        flex-direction: row;\r\n        gap: 2rem;\r\n        list-style-type: none;\r\n        align-self: center;\r\n        justify-content: center;\r\n        \r\n    \r\n        li {\r\n            list-style: none;\r\n            display: inline;\r\n            font-weight: bold;\r\n\r\n            a {\r\n                text-decoration: none;\r\n                color: $nav-font;\r\n                transition: 0.4s;\r\n            }\r\n        };\r\n        a:hover {\r\n            text-decoration-color: $nav-hover;\r\n            color: $nav-hover;\r\n            text-decoration: underline;\r\n        }\r\n    };\r\n\r\n\r\n}\r\n\r\n.content{\r\n    border: solid 2px $content-title;\r\n    //position: absolute;\r\n    width: 60vw;\r\n    margin: auto;\r\n    text-align: center;\r\n    min-height: 80vh;\r\n    max-height: fit-content;\r\n    margin-top: 2.5rem;\r\n    background: rgba(0,0,0,0.7);\r\n    //backdrop-filter: blur(16px);\r\n    padding: 1rem;\r\n    transition: 0.4s;\r\n\r\n\r\n    .content-title{\r\n        color: $content-title;\r\n        //border: solid 2px black;\r\n        width: fit-content;\r\n        margin: auto;\r\n    };\r\n\r\n    //grid item styling, only used in the menu.js file. \r\n    .content-grid {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-auto-rows: 1fr;\r\n        //border: 2px solid black;\r\n        row-gap: 2rem;\r\n        padding: 1rem;;\r\n        column-gap: 2rem;\r\n        \r\n\r\n        .item {\r\n            //border: 2px solid black;\r\n            min-height: 6rem;\r\n            max-height: fit-content;\r\n            min-width: 6rem;;\r\n            position: relative;\r\n            background: rgba(0,0,0,0.5);\r\n\r\n            #item-title {\r\n                color: yellow;\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                margin: auto;\r\n                height: 0.2rem;\r\n                border: $nav-font;\r\n                background-color: $nav-font;\r\n            }\r\n\r\n            p {\r\n                font-size: small;\r\n                color: yellow;\r\n                font-weight: bold;\r\n            }\r\n\r\n            #cost {\r\n                position: absolute;\r\n                right: 0;\r\n                bottom: 0;;\r\n                color: $cost-color;\r\n                font-weight: bold;\r\n                padding: 0.25rem;\r\n            }\r\n        }\r\n    };\r\n\r\n    @media only screen and (max-width: 800px) {\r\n        .content-grid{\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n\r\n            .item{\r\n\r\n                #cost {\r\n                    position: relative;\r\n                    display: block;\r\n                }\r\n\r\n            }\r\n        }\r\n      };\r\n    \r\n};\r\n\r\n\r\n.aboutContainer{\r\n    //background: rgba(0,0,0,0.7);\r\n    height: 100%;\r\n    width: 100%;;\r\n\r\n    #aboutTitle {\r\n        font-style: italic;\r\n        font-weight: bold;\r\n        color: $about-title;\r\n        margin: 1rem auto;\r\n        font-size: 2rem;\r\n        transition: 0.4s;\r\n        width: fit-content;\r\n    \r\n    };\r\n\r\n    #aboutTitle:hover {\r\n        transform:scale(1.05);\r\n        transition: 0.4s;\r\n        color: $cost-color;\r\n    };\r\n\r\n    hr {\r\n        width: 80%;\r\n        margin: auto;\r\n        height: 0.2rem;\r\n        border: $nav-font;\r\n        background-color: $nav-font;\r\n    };\r\n\r\n    p {\r\n        margin-top: 2rem;\r\n        display: block;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutTitleTwo {\r\n        margin: 1rem 0 1rem 0;\r\n        color: $cost-color;\r\n    };\r\n\r\n    li {\r\n        list-style-type: none;\r\n        text-align: start;\r\n        padding: 0.25rem;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutLastStatement {\r\n        color: $about-title;\r\n        margin-top: 4rem;\r\n        font-size: 1.5rem;\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n.contactContainer { \r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    //align-items: center;\r\n    justify-content: center;\r\n    row-gap: 2rem;\r\n\r\n\r\n    .contactInfo {\r\n        border: 2px black solid;\r\n        flex-wrap: wrap;\r\n        min-height: 33vh;\r\n        min-width: 20%;\r\n        display: flex;\r\n        flex-direction: row;\r\n\r\n\r\n        form {\r\n            border: 2px solid red;\r\n\r\n            label {\r\n                display: flex;\r\n                flex-direction: column;\r\n                text-align: start;\r\n                color: $cost-color;\r\n                padding: 0.5rem;\r\n            };\r\n\r\n            input {\r\n                display: block;\r\n                width: 100%;\r\n            }\r\n\r\n            .buttonDiv{\r\n                //border: 2px solid yellow;;\r\n                margin-left: 0;\r\n                text-align: start;\r\n                padding: 0.5rem;\r\n                \r\n            }\r\n            \r\n        };\r\n\r\n        .contactCopy {\r\n            text-align: start;\r\n            padding: 0.5rem;\r\n            min-width: 20vw;\r\n\r\n            p{\r\n                color: $cost-color;\r\n            }\r\n\r\n\r\n            h3 {\r\n                color: $cost-color;\r\n                font-style: italic;\r\n                text-decoration: underline;\r\n            };\r\n\r\n            .icon{\r\n                display: flex;\r\n                align-items: center;\r\n                gap: 0.5rem;\r\n                font-size: 1rem;\r\n                margin: 0.5rem;\r\n            };\r\n\r\n            .openingHours::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f017\";\r\n                font-size: 1.25rem;\r\n            };\r\n\r\n            .phoneNumber::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f095\";\r\n                font-size: 1.25rem\r\n            };\r\n\r\n            .emailDiv::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0e0\";\r\n                font-size: 1.25rem\r\n            }\r\n\r\n            .address::before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f3c5\";\r\n                font-size: 1.25rem;\r\n            }\r\n        }\r\n        \r\n    };\r\n\r\n    .location { \r\n        border: 2px solid red;\r\n        height: 33vh;\r\n    }\r\n\r\n};\r\n\r\n\r\n//FX\r\n\r\n/* .content:hover {\r\n    transform: scale(1.05);\r\n    transition: 0.4s;\r\n    border: solid 4px $cost-color ;\r\n    height: fit-content;\r\n\r\n}; */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .content-grid{\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap: wrap;\r\n    };\r\n\r\n    .contactInfo {\r\n        flex-direction: column;\r\n\r\n        form {\r\n            width: 50%\r\n        }\r\n    }\r\n  };"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAbout": () => (/* binding */ displayAbout)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
//About us Operator

//imports 
 


//functions!

function moduleTitle (string) {
    const header = document.createElement("div");
        header.classList.add("content-title");
            const contentTitle = document.createElement("h2");
                contentTitle.classList.add("header");
                    contentTitle.innerText = `${string}`;
                        header.appendChild(contentTitle);
                            content.appendChild(header);
};

function listCreator (string, parent) {
    let li = document.createElement("li"); 
    li.innerText = `${string}`
    parent.appendChild(li)

}

function createAboutContent (object) {

    const {
        aboutTitleText, 
        aboutContext, 
        aboutAtmosphere, 
        aboutFood, 
        aboutTitleTwo, 
        lastStatement,
        listOne, listTwo, listThree, listFour, listFive,

    } = object

    const aboutContainer = document.createElement("div");
        aboutContainer.classList.add("aboutContainer")

    const aboutTitle = document.createElement("h4")
        aboutTitle.setAttribute("id", "aboutTitle"); 
            aboutTitle.innerText = `${aboutTitleText}`;
                aboutContainer.appendChild(aboutTitle);

    const HR = document.createElement("hr");
        aboutContainer.appendChild(HR);

    const context = document.createElement("p");
        context.setAttribute("id", "aboutContext");
            context.innerText = `${aboutContext}`;
                aboutContainer.appendChild(context);

    const atmosphere = document.createElement("p");
        atmosphere.setAttribute("id", "aboutAtmosphere");
            atmosphere.innerText = `${aboutAtmosphere}`;
                aboutContainer.appendChild(atmosphere);

    const food = document.createElement("p");
        food.setAttribute("id", "aboutFood");
            food.innerText = `${aboutFood}`
                aboutContainer.appendChild(food);

    const titleTwo = document.createElement("h5");
        titleTwo.setAttribute("id", "aboutTitleTwo");
            titleTwo.innerText = `${aboutTitleTwo}`
                aboutContainer.appendChild(titleTwo);

    const ul = document.createElement("ul")
        ul.setAttribute("id", "list");          
        listCreator (listOne,ul)
        listCreator (listTwo,ul)
        listCreator (listThree,ul)
        listCreator (listFour,ul)
        listCreator (listFive,ul)
        aboutContainer.appendChild(ul)

    const last = document.createElement("h5");
        last.setAttribute("id", "aboutLastStatement");
            last.innerText = `${lastStatement}`
                aboutContainer.appendChild(last);

    content.appendChild(aboutContainer);
};

function displayAbout () {
    moduleTitle("About")
    createAboutContent(_config__WEBPACK_IMPORTED_MODULE_0__.aboutObject);
};







/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutObject": () => (/* binding */ aboutObject),
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });

//imported to index.js and used with the menu.js functions
let menuItems = [
    
    {   //Hot dog
        itemTitle:"Hot-Dog",
        itemSum :"With a side of fries",
        ingrediants: "Bun, onions, mustard & Ketchup!",
        cost: "$2.99"
    },
    {   //Burger
        itemTitle:"Burger",
        itemSum :"With a side of fries",
        ingrediants: "Onions, Mayo and Lettuce",
        cost: "$3.99"
    },
    {   //steak
        itemTitle:"Steak",
        itemSum :"With hot potatoes",
        ingrediants: "tomatoes,and mushrooms",
        cost: "$5.99"
    },
    {   //Omelette
        itemTitle:"Omlette",
        itemSum :"With a side salad",
        ingrediants: "Eggs, bacon and cheese!",
        cost: "$2.99"
    },
];

const aboutObject = {
    aboutTitleText: "DRIVE",
    aboutContext:`Is an out-run inspired diner, which aims to provide a retro dining experience for 
                    all those lost souls, just riding the nights highway`,
    aboutAtmosphere:`WE provide a chill mood, good food and arcade style games open for all guests to use.`,
    aboutFood: `We serve burgers, hotdogs, steaks, breakfast food, coffee and snacks to all those
                just looking to get a break from the world.`,
    aboutTitleTwo:`WHO ARE YOU?`,
    listOne:`A Cop looking to solve that hard case?`,
    listTwo:`A guy just in need of a mission? `,
    listThree:`A girl who needs to get away from the world?`,
    listFour:`Teenagers looking to meet-up away from prying eyes?`,
    listFive:`A lost soul in need of some good company?`,
    lastStatement :`Chuck on that vintage clothing and come down to DRIVE`,
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenu": () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
// Menu Operator


    let menu = _config__WEBPACK_IMPORTED_MODULE_0__.menuItems;

// perm HTML element

function moduleTitle (string) {
    const header = document.createElement("div");
        header.classList.add("content-title");
            const contentTitle = document.createElement("h2");
                contentTitle.classList.add("header");
                    contentTitle.innerText = `${string}`;
                        header.appendChild(contentTitle);
                            content.appendChild(header);
};

function gridCreater () {
    const contentGrid = document.createElement("div");
        contentGrid.classList.add("content-grid");
            content.appendChild(contentGrid);
};


function newItemCard (object) {

    const {itemTitle, itemSum, ingrediants,cost} = object;
    const contentGrid = document.querySelector(".content-grid")
    const card = document.createElement("div");
        card.classList.add("item")

    const cardTitle = document.createElement("h3")
        cardTitle.setAttribute("id", "item-title"); 
            cardTitle.innerText = `${itemTitle}`;
                card.appendChild(cardTitle);

    const cardHR = document.createElement("hr");
        cardHR.classList.add("hr");
        card.appendChild(cardHR);

    const cardSum = document.createElement("p");
        cardSum.setAttribute("id", "item-sum");
            cardSum.innerText = `${itemSum}`;
                card.appendChild(cardSum);

    const cardIngrediants = document.createElement("p");
        cardIngrediants.setAttribute("id", "ingrediants");
            cardIngrediants.innerText = `${ingrediants}`
                card.appendChild(cardIngrediants);
    
    const cardCost = document.createElement("p");
        cardCost.setAttribute("id","cost");
            cardCost.innerText = `${cost}` 
                card.appendChild(cardCost);


    contentGrid.appendChild(card);
};



function loadMenu (menu)  { 
    menu.forEach(object => { newItemCard(object)
    });
};


function displayMenu () {
    moduleTitle("Menu")
    gridCreater();
    loadMenu(_config__WEBPACK_IMPORTED_MODULE_0__.menuItems);
}





/***/ }),

/***/ "./src/images/spencer-davis-R_J6KjC68E4-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/images/spencer-davis-R_J6KjC68E4-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53dfb2f12c89b202d72f.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
//Imports





//consts and lets
const content = document.querySelectorAll(".content");


//Funcs
function menuTab () {
    const menuTab = document.getElementById("menu");
        menuTab.addEventListener("click", () => {
            clearContentDiv();
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();
        })
};

function aboutTab () {
    const aboutTab = document.getElementById("about");
        aboutTab.addEventListener("click", () => {
            clearContentDiv();
            (0,_about__WEBPACK_IMPORTED_MODULE_3__.displayAbout)();
        })
};

function contactTab () {
    const contactTab = document.getElementById("contact");
        contactTab.addEventListener("click", () => {
            clearContentDiv();
        })
};

function merchTab () {
    const merchTab = document.getElementById("merch");
        merchTab.addEventListener("click", () => {
            clearContentDiv();
        })
};

window.onload = function () {
    menuTab();
    aboutTab();
    contactTab();
    merchTab();
    //displayAbout();
}

//Is called prior to all new content created.
function clearContentDiv () {
    const content = document.querySelector(".content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zcGVuY2VyLWRhdmlzLVJfSjZLakM2OEU0LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWljaHJvbWEmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk1pY2hyb21hXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTM5NTI7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxubmF2IC50aXRsZURpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAycmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbm5hdiB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm5hdiB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZWQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5uYXYgdWwgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHllbGxvdztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmVkO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtdGl0bGUge1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIHJvdy1nYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sdW1uLWdhcDogMnJlbTtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSB7XFxuICBtaW4taGVpZ2h0OiA2cmVtO1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IDZyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQgLml0ZW0gI2l0ZW0tdGl0bGUge1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSBociB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAwLjJyZW07XFxuICBib3JkZXI6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSBwIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQgLml0ZW0gI2Nvc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGVudCAuY29udGVudC1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjY29zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dFRpdGxlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigxNjAsIDU5LCAyNTUpO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0VGl0bGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgaHIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMC4ycmVtO1xcbiAgYm9yZGVyOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5hYm91dENvbnRhaW5lciBwIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciAjYWJvdXRUaXRsZVR3byB7XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dExhc3RTdGF0ZW1lbnQge1xcbiAgY29sb3I6IHJnYigxNjAsIDU5LCAyNTUpO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcm93LWdhcDogMnJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIHtcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWluLWhlaWdodDogMzN2aDtcXG4gIG1pbi13aWR0aDogMjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIC5idXR0b25EaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1pbi13aWR0aDogMjB2dztcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSBwIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgaDMge1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAub3BlbmluZ0hvdXJzOjpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5waG9uZU51bWJlcjo6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAuZW1haWxEaXY6OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgLmFkZHJlc3M6OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNVxcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5sb2NhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDMzdmg7XFxufVxcblxcbi8qIC5jb250ZW50OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggJGNvc3QtY29sb3IgO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbn07ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRlbnQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gIC5jb250YWN0SW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuY29udGFjdEluZm8gZm9ybSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWVBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFiTztBQUFYOztBQWdCQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0F0Qk87QUFTWDs7QUFnQkE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQW5DUTtFQW9DUixnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFkSjtBQWdCSTtFQUNJLGtCQUFBO0VBQ0EsVUExQ0c7RUEyQ0gsaUJBQUE7RUFDQSwwQkFBQTtBQWRSO0FBa0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWhCUjtBQW1CUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakJaO0FBbUJZO0VBQ0kscUJBQUE7RUFDQSxVQWhFTDtFQWlFSyxnQkFBQTtBQWpCaEI7QUFvQlE7RUFDSSw2QkFwRUQ7RUFxRUMsYUFyRUQ7RUFzRUMsMEJBQUE7QUFsQlo7O0FBeUJBO0VBQ0kscUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VB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QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWljaHJvbWEmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLy9WYXJpYWJsZXMgXFxyXFxuJE1pY2hyb21hOiAnTWljaHJvbWEnLCBzYW5zLXNlcmlmO1xcclxcbiRuYXYtY29sb3I6ICMwMTM5NTI7XFxyXFxuJG5hdi1mb250OiByZWQ7XFxyXFxuJG5hdi1ob3Zlcjp5ZWxsb3c7XFxyXFxuJGNvbnRlbnQtdGl0bGU6IHJlZDtcXHJcXG4kY29zdC1jb2xvcjogeWVsbG93O1xcclxcbiRhYm91dC10aXRsZTogcmdiKDE2MCwgNTksIDI1NSk7XFxyXFxuXFxyXFxuXFxyXFxuLy8gcm9vdCBzZWV0aW5ncyBcXHJcXG5cXHJcXG4uaWNvbjo6YmVmb3JlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIGNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTokTWljaHJvbWE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc3BlbmNlci1kYXZpcy1SX0o2S2pDNjhFNC11bnNwbGFzaC5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8vYm9yZGVyOiBzb2xpZCB5ZWxsb3cgMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTs7XFxyXFxuICAgXFxyXFxuICAgIC50aXRsZURpdiB7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICAgICAgICBcXHJcXG4gICAgICAgIGNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB1bHsgXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGdhcDogMnJlbTtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgICAgICAgICAgIGEge1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfTtcXHJcXG4gICAgICAgIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJG5hdi1ob3ZlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJG5hdi1ob3ZlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMnB4ICRjb250ZW50LXRpdGxlO1xcclxcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuICAgIC8vYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcblxcclxcbiAgICAuY29udGVudC10aXRsZXtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29udGVudC10aXRsZTtcXHJcXG4gICAgICAgIC8vYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIC8vZ3JpZCBpdGVtIHN0eWxpbmcsIG9ubHkgdXNlZCBpbiB0aGUgbWVudS5qcyBmaWxlLiBcXHJcXG4gICAgLmNvbnRlbnQtZ3JpZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICByb3ctZ2FwOiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTs7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAuaXRlbSB7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNnJlbTs7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAjaXRlbS10aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGhyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjY29zdCB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDs7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICAuY29udGVudC1ncmlke1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLml0ZW17XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICNjb3N0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH07XFxyXFxuICAgIFxcclxcbn07XFxyXFxuXFxyXFxuXFxyXFxuLmFib3V0Q29udGFpbmVye1xcclxcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTs7XFxyXFxuXFxyXFxuICAgICNhYm91dFRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgY29sb3I6ICRhYm91dC10aXRsZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgXFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgICNhYm91dFRpdGxlOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIGhyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogJG5hdi1mb250O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1mb250O1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgI2Fib3V0VGl0bGVUd28ge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgICNhYm91dExhc3RTdGF0ZW1lbnQge1xcclxcbiAgICAgICAgY29sb3I6ICRhYm91dC10aXRsZTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdENvbnRhaW5lciB7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJyZW07XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jb250YWN0SW5mbyB7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMzdmg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDIwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcblxcclxcbiAgICAgICAgZm9ybSB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcblxcclxcbiAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgICAgIH07XFxyXFxuXFxyXFxuICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5idXR0b25EaXZ7XFxyXFxuICAgICAgICAgICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgeWVsbG93OztcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH07XFxyXFxuXFxyXFxuICAgICAgICAuY29udGFjdENvcHkge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwdnc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICBoMyB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5pY29ue1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5vcGVuaW5nSG91cnM6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5waG9uZU51bWJlcjo6YmVmb3Jle1xcclxcbiAgICAgICAgICAgICAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtXFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZW1haWxEaXY6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYWRkcmVzczo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNVxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHsgXFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMzdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59O1xcclxcblxcclxcblxcclxcbi8vRlhcXHJcXG5cXHJcXG4vKiAuY29udGVudDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIGJvcmRlcjogc29saWQgNHB4ICRjb3N0LWNvbG9yIDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG59OyAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmNvbnRlbnQtZ3JpZHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAuY29udGFjdEluZm8ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgIGZvcm0ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA1MCVcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vQWJvdXQgdXMgT3BlcmF0b3JcclxuXHJcbi8vaW1wb3J0cyBcclxuIGltcG9ydCB7IGFib3V0T2JqZWN0IH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5cclxuLy9mdW5jdGlvbnMhXHJcblxyXG5mdW5jdGlvbiBtb2R1bGVUaXRsZSAoc3RyaW5nKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10aXRsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IGAke3N0cmluZ31gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxpc3RDcmVhdG9yIChzdHJpbmcsIHBhcmVudCkge1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpOyBcclxuICAgIGxpLmlubmVyVGV4dCA9IGAke3N0cmluZ31gXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGkpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dENvbnRlbnQgKG9iamVjdCkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBhYm91dFRpdGxlVGV4dCwgXHJcbiAgICAgICAgYWJvdXRDb250ZXh0LCBcclxuICAgICAgICBhYm91dEF0bW9zcGhlcmUsIFxyXG4gICAgICAgIGFib3V0Rm9vZCwgXHJcbiAgICAgICAgYWJvdXRUaXRsZVR3bywgXHJcbiAgICAgICAgbGFzdFN0YXRlbWVudCxcclxuICAgICAgICBsaXN0T25lLCBsaXN0VHdvLCBsaXN0VGhyZWUsIGxpc3RGb3VyLCBsaXN0Rml2ZSxcclxuXHJcbiAgICB9ID0gb2JqZWN0XHJcblxyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dENvbnRhaW5lclwiKVxyXG5cclxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcclxuICAgICAgICBhYm91dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRUaXRsZVwiKTsgXHJcbiAgICAgICAgICAgIGFib3V0VGl0bGUuaW5uZXJUZXh0ID0gYCR7YWJvdXRUaXRsZVRleHR9YDtcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKEhSKTtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29udGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0Q29udGV4dFwiKTtcclxuICAgICAgICAgICAgY29udGV4dC5pbm5lclRleHQgPSBgJHthYm91dENvbnRleHR9YDtcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGF0bW9zcGhlcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBhdG1vc3BoZXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRBdG1vc3BoZXJlXCIpO1xyXG4gICAgICAgICAgICBhdG1vc3BoZXJlLmlubmVyVGV4dCA9IGAke2Fib3V0QXRtb3NwaGVyZX1gO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXRtb3NwaGVyZSk7XHJcblxyXG4gICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGZvb2Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dEZvb2RcIik7XHJcbiAgICAgICAgICAgIGZvb2QuaW5uZXJUZXh0ID0gYCR7YWJvdXRGb29kfWBcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2QpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIHRpdGxlVHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRUaXRsZVR3b1wiKTtcclxuICAgICAgICAgICAgdGl0bGVUd28uaW5uZXJUZXh0ID0gYCR7YWJvdXRUaXRsZVR3b31gXHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVR3byk7XHJcblxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RcIik7ICAgICAgICAgIFxyXG4gICAgICAgIGxpc3RDcmVhdG9yIChsaXN0T25lLHVsKVxyXG4gICAgICAgIGxpc3RDcmVhdG9yIChsaXN0VHdvLHVsKVxyXG4gICAgICAgIGxpc3RDcmVhdG9yIChsaXN0VGhyZWUsdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RGb3VyLHVsKVxyXG4gICAgICAgIGxpc3RDcmVhdG9yIChsaXN0Rml2ZSx1bClcclxuICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bClcclxuXHJcbiAgICBjb25zdCBsYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xyXG4gICAgICAgIGxhc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dExhc3RTdGF0ZW1lbnRcIik7XHJcbiAgICAgICAgICAgIGxhc3QuaW5uZXJUZXh0ID0gYCR7bGFzdFN0YXRlbWVudH1gXHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChsYXN0KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBYm91dCAoKSB7XHJcbiAgICBtb2R1bGVUaXRsZShcIkFib3V0XCIpXHJcbiAgICBjcmVhdGVBYm91dENvbnRlbnQoYWJvdXRPYmplY3QpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtkaXNwbGF5QWJvdXR9O1xyXG5cclxuXHJcblxyXG4iLCJcclxuLy9pbXBvcnRlZCB0byBpbmRleC5qcyBhbmQgdXNlZCB3aXRoIHRoZSBtZW51LmpzIGZ1bmN0aW9uc1xyXG5sZXQgbWVudUl0ZW1zID0gW1xyXG4gICAgXHJcbiAgICB7ICAgLy9Ib3QgZG9nXHJcbiAgICAgICAgaXRlbVRpdGxlOlwiSG90LURvZ1wiLFxyXG4gICAgICAgIGl0ZW1TdW0gOlwiV2l0aCBhIHNpZGUgb2YgZnJpZXNcIixcclxuICAgICAgICBpbmdyZWRpYW50czogXCJCdW4sIG9uaW9ucywgbXVzdGFyZCAmIEtldGNodXAhXCIsXHJcbiAgICAgICAgY29zdDogXCIkMi45OVwiXHJcbiAgICB9LFxyXG4gICAgeyAgIC8vQnVyZ2VyXHJcbiAgICAgICAgaXRlbVRpdGxlOlwiQnVyZ2VyXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGEgc2lkZSBvZiBmcmllc1wiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcIk9uaW9ucywgTWF5byBhbmQgTGV0dHVjZVwiLFxyXG4gICAgICAgIGNvc3Q6IFwiJDMuOTlcIlxyXG4gICAgfSxcclxuICAgIHsgICAvL3N0ZWFrXHJcbiAgICAgICAgaXRlbVRpdGxlOlwiU3RlYWtcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggaG90IHBvdGF0b2VzXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwidG9tYXRvZXMsYW5kIG11c2hyb29tc1wiLFxyXG4gICAgICAgIGNvc3Q6IFwiJDUuOTlcIlxyXG4gICAgfSxcclxuICAgIHsgICAvL09tZWxldHRlXHJcbiAgICAgICAgaXRlbVRpdGxlOlwiT21sZXR0ZVwiLFxyXG4gICAgICAgIGl0ZW1TdW0gOlwiV2l0aCBhIHNpZGUgc2FsYWRcIixcclxuICAgICAgICBpbmdyZWRpYW50czogXCJFZ2dzLCBiYWNvbiBhbmQgY2hlZXNlIVwiLFxyXG4gICAgICAgIGNvc3Q6IFwiJDIuOTlcIlxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGFib3V0T2JqZWN0ID0ge1xyXG4gICAgYWJvdXRUaXRsZVRleHQ6IFwiRFJJVkVcIixcclxuICAgIGFib3V0Q29udGV4dDpgSXMgYW4gb3V0LXJ1biBpbnNwaXJlZCBkaW5lciwgd2hpY2ggYWltcyB0byBwcm92aWRlIGEgcmV0cm8gZGluaW5nIGV4cGVyaWVuY2UgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsbCB0aG9zZSBsb3N0IHNvdWxzLCBqdXN0IHJpZGluZyB0aGUgbmlnaHRzIGhpZ2h3YXlgLFxyXG4gICAgYWJvdXRBdG1vc3BoZXJlOmBXRSBwcm92aWRlIGEgY2hpbGwgbW9vZCwgZ29vZCBmb29kIGFuZCBhcmNhZGUgc3R5bGUgZ2FtZXMgb3BlbiBmb3IgYWxsIGd1ZXN0cyB0byB1c2UuYCxcclxuICAgIGFib3V0Rm9vZDogYFdlIHNlcnZlIGJ1cmdlcnMsIGhvdGRvZ3MsIHN0ZWFrcywgYnJlYWtmYXN0IGZvb2QsIGNvZmZlZSBhbmQgc25hY2tzIHRvIGFsbCB0aG9zZVxyXG4gICAgICAgICAgICAgICAganVzdCBsb29raW5nIHRvIGdldCBhIGJyZWFrIGZyb20gdGhlIHdvcmxkLmAsXHJcbiAgICBhYm91dFRpdGxlVHdvOmBXSE8gQVJFIFlPVT9gLFxyXG4gICAgbGlzdE9uZTpgQSBDb3AgbG9va2luZyB0byBzb2x2ZSB0aGF0IGhhcmQgY2FzZT9gLFxyXG4gICAgbGlzdFR3bzpgQSBndXkganVzdCBpbiBuZWVkIG9mIGEgbWlzc2lvbj8gYCxcclxuICAgIGxpc3RUaHJlZTpgQSBnaXJsIHdobyBuZWVkcyB0byBnZXQgYXdheSBmcm9tIHRoZSB3b3JsZD9gLFxyXG4gICAgbGlzdEZvdXI6YFRlZW5hZ2VycyBsb29raW5nIHRvIG1lZXQtdXAgYXdheSBmcm9tIHByeWluZyBleWVzP2AsXHJcbiAgICBsaXN0Rml2ZTpgQSBsb3N0IHNvdWwgaW4gbmVlZCBvZiBzb21lIGdvb2QgY29tcGFueT9gLFxyXG4gICAgbGFzdFN0YXRlbWVudCA6YENodWNrIG9uIHRoYXQgdmludGFnZSBjbG90aGluZyBhbmQgY29tZSBkb3duIHRvIERSSVZFYCxcclxufTtcclxuXHJcbmV4cG9ydCB7bWVudUl0ZW1zLCBhYm91dE9iamVjdH07IiwiLy8gTWVudSBPcGVyYXRvclxyXG5cclxuaW1wb3J0IHttZW51SXRlbXN9IGZyb20gXCIuL2NvbmZpZ1wiXHJcbiAgICBsZXQgbWVudSA9IG1lbnVJdGVtcztcclxuXHJcbi8vIHBlcm0gSFRNTCBlbGVtZW50XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVUaXRsZSAoc3RyaW5nKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10aXRsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IGAke3N0cmluZ31gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdyaWRDcmVhdGVyICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50R3JpZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1ncmlkXCIpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRHcmlkKTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBuZXdJdGVtQ2FyZCAob2JqZWN0KSB7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1UaXRsZSwgaXRlbVN1bSwgaW5ncmVkaWFudHMsY29zdH0gPSBvYmplY3Q7XHJcbiAgICBjb25zdCBjb250ZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ncmlkXCIpXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpXHJcblxyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS10aXRsZVwiKTsgXHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSBgJHtpdGVtVGl0bGV9YDtcclxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY2FyZEhSLmNsYXNzTGlzdC5hZGQoXCJoclwiKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRIUik7XHJcblxyXG4gICAgY29uc3QgY2FyZFN1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNhcmRTdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLXN1bVwiKTtcclxuICAgICAgICAgICAgY2FyZFN1bS5pbm5lclRleHQgPSBgJHtpdGVtU3VtfWA7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTdW0pO1xyXG5cclxuICAgIGNvbnN0IGNhcmRJbmdyZWRpYW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNhcmRJbmdyZWRpYW50cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZ3JlZGlhbnRzXCIpO1xyXG4gICAgICAgICAgICBjYXJkSW5ncmVkaWFudHMuaW5uZXJUZXh0ID0gYCR7aW5ncmVkaWFudHN9YFxyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW5ncmVkaWFudHMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYXJkQ29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNhcmRDb3N0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb3N0XCIpO1xyXG4gICAgICAgICAgICBjYXJkQ29zdC5pbm5lclRleHQgPSBgJHtjb3N0fWAgXHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb3N0KTtcclxuXHJcblxyXG4gICAgY29udGVudEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51IChtZW51KSAgeyBcclxuICAgIG1lbnUuZm9yRWFjaChvYmplY3QgPT4geyBuZXdJdGVtQ2FyZChvYmplY3QpXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TWVudSAoKSB7XHJcbiAgICBtb2R1bGVUaXRsZShcIk1lbnVcIilcclxuICAgIGdyaWRDcmVhdGVyKCk7XHJcbiAgICBsb2FkTWVudShtZW51SXRlbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7ZGlzcGxheU1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0ltcG9ydHNcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7bWVudUl0ZW1zfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtkaXNwbGF5TWVudX0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5QWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xyXG5cclxuLy9jb25zdHMgYW5kIGxldHNcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudFwiKTtcclxuXHJcblxyXG4vL0Z1bmNzXHJcbmZ1bmN0aW9uIG1lbnVUYWIgKCkge1xyXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuICAgICAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgICAgICBkaXNwbGF5TWVudSgpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhYm91dFRhYiAoKSB7XHJcbiAgICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XHJcbiAgICAgICAgYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJDb250ZW50RGl2KCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBYm91dCgpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0VGFiICgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcbiAgICAgICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWVyY2hUYWIgKCkge1xyXG4gICAgY29uc3QgbWVyY2hUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lcmNoXCIpO1xyXG4gICAgICAgIG1lcmNoVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbWVudVRhYigpO1xyXG4gICAgYWJvdXRUYWIoKTtcclxuICAgIGNvbnRhY3RUYWIoKTtcclxuICAgIG1lcmNoVGFiKCk7XHJcbiAgICAvL2Rpc3BsYXlBYm91dCgpO1xyXG59XHJcblxyXG4vL0lzIGNhbGxlZCBwcmlvciB0byBhbGwgbmV3IGNvbnRlbnQgY3JlYXRlZC5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50RGl2ICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxufTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==