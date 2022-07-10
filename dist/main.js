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
___CSS_LOADER_EXPORT___.push([module.id, ".icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  color: red;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Michroma\", sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #013952;\n  min-height: 3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  padding: 0.5rem;\n}\nnav .titleDiv {\n  align-self: center;\n  color: red;\n  font-size: 1.5rem;\n  text-decoration: underline;\n}\nnav ul {\n  display: flex;\n  flex-direction: row;\n  gap: 2rem;\n  list-style-type: none;\n  align-self: center;\n  justify-content: center;\n}\nnav ul li {\n  list-style: none;\n  display: inline;\n  font-weight: bold;\n}\nnav ul li a {\n  text-decoration: none;\n  color: red;\n  transition: 0.4s;\n}\nnav ul a:hover {\n  text-decoration-color: yellow;\n  color: yellow;\n  text-decoration: underline;\n}\n\n.content {\n  border: solid 2px red;\n  width: 60vw;\n  margin: auto;\n  text-align: center;\n  min-height: 80vh;\n  max-height: fit-content;\n  margin-top: 2.5rem;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  transition: 0.4s;\n}\n.content .content-title {\n  color: red;\n  width: fit-content;\n  margin: auto;\n}\n.content .content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-auto-rows: 1fr;\n  row-gap: 2rem;\n  padding: 1rem;\n  column-gap: 2rem;\n}\n.content .content-grid .item {\n  min-height: 6rem;\n  max-height: fit-content;\n  min-width: 6rem;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n}\n.content .content-grid .item #item-title {\n  color: yellow;\n}\n.content .content-grid .item hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.content .content-grid .item p {\n  font-size: small;\n  color: yellow;\n  font-weight: bold;\n}\n.content .content-grid .item #cost {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: yellow;\n  font-weight: bold;\n  padding: 0.25rem;\n}\n@media only screen and (max-width: 800px) {\n  .content .content-grid {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  .content .content-grid .item #cost {\n    position: relative;\n    display: block;\n  }\n}\n\n.aboutContainer {\n  height: 100%;\n  width: 100%;\n}\n.aboutContainer #aboutTitle {\n  font-style: italic;\n  font-weight: bold;\n  color: rgb(160, 59, 255);\n  margin: 1rem auto;\n  font-size: 2rem;\n  transition: 0.4s;\n  width: fit-content;\n}\n.aboutContainer #aboutTitle:hover {\n  transform: scale(1.05);\n  transition: 0.4s;\n  color: yellow;\n}\n.aboutContainer hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.aboutContainer p {\n  margin-top: 2rem;\n  display: block;\n  color: yellow;\n}\n.aboutContainer #aboutTitleTwo {\n  margin: 1rem 0 1rem 0;\n  color: yellow;\n}\n.aboutContainer li {\n  list-style-type: none;\n  text-align: start;\n  padding: 0.25rem;\n  color: yellow;\n}\n.aboutContainer #aboutLastStatement {\n  color: rgb(160, 59, 255);\n  margin-top: 4rem;\n  font-size: 1.5rem;\n}\n\n.contactContainer {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 2rem;\n}\n.contactContainer .contactInfo {\n  min-height: 33vh;\n  min-width: 50%;\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.contactContainer .contactInfo form {\n  max-width: 100%;\n}\n.contactContainer .contactInfo form label {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  color: yellow;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo form input {\n  display: block;\n  width: 100%;\n}\n.contactContainer .contactInfo form #textLabel {\n  text-align: start;\n  margin-left: 0.5rem;\n  color: yellow;\n}\n.contactContainer .contactInfo form #messageBox {\n  margin: 0.5rem;\n  resize: none;\n  overflow: scroll;\n  height: 8rem;\n  max-width: 100%;\n}\n.contactContainer .contactInfo form .buttonDiv {\n  margin-left: 0;\n  text-align: start;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy {\n  text-align: start;\n  padding: 0.5rem;\n  min-width: 50%;\n}\n.contactContainer .contactInfo .contactCopy p {\n  color: yellow;\n}\n.contactContainer .contactInfo .contactCopy h3 {\n  color: yellow;\n  font-style: italic;\n  text-decoration: underline;\n}\n.contactContainer .contactInfo .contactCopy .icon {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  margin: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy .openingHours::before {\n  font: var(--fa-font-solid);\n  content: \"\\f017\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .phoneNumber::before {\n  font: var(--fa-font-solid);\n  content: \"\\f095\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .emailDiv::before {\n  font: var(--fa-font-solid);\n  content: \"\\f0e0\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .address::before {\n  font: var(--fa-font-solid);\n  content: \"\\f3c5\";\n  font-size: 1.25rem;\n}\n.contactContainer .location {\n  border: 2px solid red;\n  height: 33vh;\n}\n.contactContainer .location #map {\n  width: 100%;\n  height: 100%;\n}\n\n/* .content:hover {\n    transform: scale(1.05);\n    transition: 0.4s;\n    border: solid 4px $cost-color ;\n    height: fit-content;\n\n}; */\n@media only screen and (max-width: 600px) {\n  .content-grid {\n    display: flex;\n    flex-direction: column-reverse;\n    flex-wrap: wrap-reverse;\n  }\n  .contactInfo {\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["//import\r\n@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');\r\n\r\n//Variables \r\n$Michroma: 'Michroma', sans-serif;\r\n$nav-color: #013952;\r\n$nav-font: red;\r\n$nav-hover:yellow;\r\n$content-title: red;\r\n$cost-color: yellow;\r\n$about-title: rgb(160, 59, 255);\r\n\r\n\r\n// root seetings \r\n\r\n.icon::before {\r\n    display: inline-block;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    color: $nav-font;\r\n  }\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family:$Michroma;\r\n}\r\n\r\nbody {\r\n    background-image: url(./images/spencer-davis-R_J6KjC68E4-unsplash.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    //border: solid yellow 2px;\r\n    background-color: $nav-color;\r\n    min-height: 3rem;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    padding: 0.5rem;;\r\n   \r\n    .titleDiv {\r\n        align-self: center;        \r\n        color: $nav-font;\r\n        font-size: 1.5rem;\r\n        text-decoration: underline;\r\n            \r\n    };\r\n\r\n    ul{ \r\n        display: flex;\r\n        flex-direction: row;\r\n        gap: 2rem;\r\n        list-style-type: none;\r\n        align-self: center;\r\n        justify-content: center;\r\n        \r\n    \r\n        li {\r\n            list-style: none;\r\n            display: inline;\r\n            font-weight: bold;\r\n\r\n            a {\r\n                text-decoration: none;\r\n                color: $nav-font;\r\n                transition: 0.4s;\r\n            }\r\n        };\r\n        a:hover {\r\n            text-decoration-color: $nav-hover;\r\n            color: $nav-hover;\r\n            text-decoration: underline;\r\n        }\r\n    };\r\n\r\n\r\n}\r\n\r\n.content{\r\n    border: solid 2px $content-title;\r\n    //position: absolute;\r\n    width: 60vw;\r\n    margin: auto;\r\n    text-align: center;\r\n    min-height: 80vh;\r\n    max-height: fit-content;\r\n    margin-top: 2.5rem;\r\n    background: rgba(0,0,0,0.7);\r\n    //backdrop-filter: blur(16px);\r\n    padding: 1rem;\r\n    transition: 0.4s;\r\n\r\n\r\n    .content-title{\r\n        color: $content-title;\r\n        //border: solid 2px black;\r\n        width: fit-content;\r\n        margin: auto;\r\n    };\r\n\r\n    //grid item styling, only used in the menu.js file. \r\n    .content-grid {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-auto-rows: 1fr;\r\n        //border: 2px solid black;\r\n        row-gap: 2rem;\r\n        padding: 1rem;;\r\n        column-gap: 2rem;\r\n        \r\n\r\n        .item {\r\n            //border: 2px solid black;\r\n            min-height: 6rem;\r\n            max-height: fit-content;\r\n            min-width: 6rem;;\r\n            position: relative;\r\n            background: rgba(0,0,0,0.5);\r\n\r\n            #item-title {\r\n                color: yellow;\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                margin: auto;\r\n                height: 0.2rem;\r\n                border: $nav-font;\r\n                background-color: $nav-font;\r\n            }\r\n\r\n            p {\r\n                font-size: small;\r\n                color: yellow;\r\n                font-weight: bold;\r\n            }\r\n\r\n            #cost {\r\n                position: absolute;\r\n                right: 0;\r\n                bottom: 0;;\r\n                color: $cost-color;\r\n                font-weight: bold;\r\n                padding: 0.25rem;\r\n            }\r\n        }\r\n    };\r\n\r\n    @media only screen and (max-width: 800px) {\r\n        .content-grid{\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n\r\n            .item{\r\n\r\n                #cost {\r\n                    position: relative;\r\n                    display: block;\r\n                }\r\n\r\n            }\r\n        }\r\n      };\r\n    \r\n};\r\n\r\n\r\n.aboutContainer{\r\n    //background: rgba(0,0,0,0.7);\r\n    height: 100%;\r\n    width: 100%;;\r\n\r\n    #aboutTitle {\r\n        font-style: italic;\r\n        font-weight: bold;\r\n        color: $about-title;\r\n        margin: 1rem auto;\r\n        font-size: 2rem;\r\n        transition: 0.4s;\r\n        width: fit-content;\r\n    \r\n    };\r\n\r\n    #aboutTitle:hover {\r\n        transform:scale(1.05);\r\n        transition: 0.4s;\r\n        color: $cost-color;\r\n    };\r\n\r\n    hr {\r\n        width: 80%;\r\n        margin: auto;\r\n        height: 0.2rem;\r\n        border: $nav-font;\r\n        background-color: $nav-font;\r\n    };\r\n\r\n    p {\r\n        margin-top: 2rem;\r\n        display: block;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutTitleTwo {\r\n        margin: 1rem 0 1rem 0;\r\n        color: $cost-color;\r\n    };\r\n\r\n    li {\r\n        list-style-type: none;\r\n        text-align: start;\r\n        padding: 0.25rem;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutLastStatement {\r\n        color: $about-title;\r\n        margin-top: 4rem;\r\n        font-size: 1.5rem;\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n.contactContainer { \r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    //align-items: center;\r\n    justify-content: center;\r\n    row-gap: 2rem;\r\n\r\n\r\n    .contactInfo {\r\n        min-height: 33vh;\r\n        min-width: 50%;\r\n        max-width: 100%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n\r\n        form {\r\n            max-width: 100%;;\r\n\r\n            label {\r\n                display: flex;\r\n                flex-direction: column;\r\n                text-align: start;\r\n                color: $cost-color;\r\n                padding: 0.5rem;\r\n            };\r\n\r\n            input {\r\n                display: block;\r\n                width: 100%;\r\n            }\r\n\r\n            #textLabel {\r\n                text-align: start;\r\n                margin-left:0.5rem;\r\n                color: $cost-color;\r\n            }\r\n\r\n            #messageBox{\r\n                margin: 0.5rem;\r\n                resize: none;\r\n                overflow: scroll;\r\n                height: 8rem;\r\n                max-width: 100%;\r\n            }\r\n\r\n            .buttonDiv{\r\n                //border: 2px solid yellow;;\r\n                margin-left: 0;\r\n                text-align: start;\r\n                padding: 0.5rem;\r\n                \r\n            }\r\n            \r\n        };\r\n\r\n        .contactCopy {\r\n            text-align: start;\r\n            padding: 0.5rem;\r\n            min-width: 50%;\r\n\r\n            p{\r\n                color: $cost-color;\r\n            }\r\n\r\n\r\n            h3 {\r\n                color: $cost-color;\r\n                font-style: italic;\r\n                text-decoration: underline;\r\n            };\r\n\r\n            .icon{\r\n                display: flex;\r\n                align-items: center;\r\n                gap: 0.5rem;\r\n                font-size: 1rem;\r\n                margin: 0.5rem;\r\n            };\r\n\r\n            .openingHours::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f017\";\r\n                font-size: 1.25rem;\r\n            };\r\n\r\n            .phoneNumber::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f095\";\r\n                font-size: 1.25rem\r\n            };\r\n\r\n            .emailDiv::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0e0\";\r\n                font-size: 1.25rem\r\n            }\r\n\r\n            .address::before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f3c5\";\r\n                font-size: 1.25rem;\r\n            }\r\n        }\r\n        \r\n    };\r\n\r\n    .location { \r\n        border: 2px solid red;\r\n        height: 33vh;\r\n\r\n        #map {\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n};\r\n\r\n\r\n//FX\r\n\r\n/* .content:hover {\r\n    transform: scale(1.05);\r\n    transition: 0.4s;\r\n    border: solid 4px $cost-color ;\r\n    height: fit-content;\r\n\r\n}; */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .content-grid{\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n        flex-wrap: wrap-reverse;\r\n    };\r\n\r\n    .contactInfo {\r\n        flex-direction: column;\r\n\r\n    }\r\n  };"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContact": () => (/* binding */ displayContact)
/* harmony export */ });
//imports


//consts and lets 


//functions 

function moduleTitle (string) {
    const header = document.createElement("div");
        header.classList.add("content-title");
            const contentTitle = document.createElement("h2");
                contentTitle.classList.add("header");
                    contentTitle.innerText = `${string}`;
                        header.appendChild(contentTitle);
                            content.appendChild(header);
};

function displayContact () {

    const content = document.querySelector(".content");
    //contactContainer contains all appended elements
    const contactContainer = document.createElement("div");
       contactContainer.classList.add("contactContainer");
            content.appendChild(contactContainer);

        // top half of contact page
        const contactInfo = document.createElement("div")
            contactInfo.classList.add("contactInfo");
                contactContainer.appendChild(contactInfo);
        //form section
        const form = document.createElement("form");
            contactInfo.appendChild(form);

        //labels   
        const nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", "name");
                nameLabel.innerText = "Full Name";
                form.appendChild(nameLabel);

        const nameInput = document.createElement("input")
            nameInput.setAttribute("type", "text");
            nameInput.setAttribute("id", "name")
            //nameInput.setAttribute("required");
            nameLabel.appendChild(nameInput);


        const numberLabel = document.createElement("label");
            numberLabel.setAttribute("for", "number");
                numberLabel.innerText = "Number";
                form.appendChild(numberLabel);
            
        const numberInput = document.createElement("input")
            numberInput.setAttribute("type", "tel");
            numberInput.setAttribute("id", "number")
            //numberinput.setAttribute("required");
            numberLabel.appendChild(numberInput)

        const emailLabel = document.createElement("label");
            emailLabel.setAttribute("for", "email");
            emailLabel.innerText = "Email";
            form.appendChild(emailLabel);
            
        const emailInput = document.createElement("input")
            emailInput.setAttribute("type", "tel");
            emailInput.setAttribute("id", "number")
            //emailLabel.setAttribute("required");
            emailLabel.appendChild(emailInput);

        const textLabel = document.createElement("p")
            textLabel.setAttribute("id", "textLabel");
                textLabel.innerText = "Message"
                form.appendChild(textLabel);

        const textArea = document.createElement("textarea");
            textArea.setAttribute("id", "messageBox");
            textArea.setAttribute("name", "message");
            form.appendChild(textArea);
        
        const btnDiv = document.createElement("button")
                btnDiv.classList.add("buttonDiv")
                form.appendChild(btnDiv);

        const button = document.createElement("button")
            button.setAttribute("type", "submit");
            button.innerText = "Send"
            btnDiv.appendChild(button);
    // form inputs ends!

    //Contact Info Begins! 

    const contactCopy = document.createElement("div")
        contactCopy.classList.add("icon");
        contactCopy.classList.add("contactCopy");
        contactInfo.appendChild(contactCopy);

        const copyTitle = document.createElement("h3");
            copyTitle.innerText = "INFO"
            contactCopy.appendChild(copyTitle);
        
        const openingHours = document.createElement("div");
            openingHours.classList.add("icon")
            openingHours.classList.add("openingHours")
            contactCopy.appendChild(openingHours);

        const openText = document.createElement("p")
            openText.innerText = "6:00am till 12:00pm"
            openingHours.appendChild(openText);
        
        
        const phoneNumber = document.createElement("div");
            phoneNumber.classList.add("icon")
            phoneNumber.classList.add("phoneNumber")
            contactCopy.appendChild(phoneNumber);

        const phoneText = document.createElement("p")
            phoneText.innerText = "0123456789"
            phoneNumber.appendChild(phoneText);

        const emailDiv = document.createElement("div");
            emailDiv.classList.add("icon")
            emailDiv.classList.add("emailDiv")
            contactCopy.appendChild(emailDiv);

        const emailText = document.createElement("p")
            emailText.innerText = "Drive@fake.com"
            emailDiv.appendChild(emailText);

        const addressDiv = document.createElement("div");
            addressDiv.classList.add("icon")
            addressDiv.classList.add("address")
            contactCopy.appendChild(addressDiv);

        const addressText = document.createElement("p")
            addressText.innerText = "748 SW 4th Ave Miami, Florida"
            addressDiv.appendChild(addressText);
        //contact info

    
    //contains Google maps in IFrames. 
    const location = document.createElement("div");
        location.classList.add("location");
            contactContainer.appendChild(location);

        const map = document.createElement("iframe");
            map.setAttribute("id", "map");
            map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1194921957813!2d-80.20295488463374!3d25.76661641468496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b68fa8788d01%3A0x32f3d7e9aec8c2fa!2s748%20SW%204th%20Ave%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2suk!4v1657477787280!5m2!1sen!2suk")
            location.appendChild(map)

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
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
            (0,_contact__WEBPACK_IMPORTED_MODULE_4__.displayContact)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxZQUFZLHdEQUFjO0FBQzFCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zcGVuY2VyLWRhdmlzLVJfSjZLakM2OEU0LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWljaHJvbWEmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk1pY2hyb21hXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTM5NTI7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxubmF2IC50aXRsZURpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAycmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbm5hdiB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm5hdiB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZWQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5uYXYgdWwgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHllbGxvdztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmVkO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtdGl0bGUge1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIHJvdy1nYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sdW1uLWdhcDogMnJlbTtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSB7XFxuICBtaW4taGVpZ2h0OiA2cmVtO1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IDZyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQgLml0ZW0gI2l0ZW0tdGl0bGUge1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSBociB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAwLjJyZW07XFxuICBib3JkZXI6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSBwIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQgLml0ZW0gI2Nvc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGVudCAuY29udGVudC1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjY29zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dFRpdGxlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigxNjAsIDU5LCAyNTUpO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0VGl0bGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgaHIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMC4ycmVtO1xcbiAgYm9yZGVyOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5hYm91dENvbnRhaW5lciBwIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciAjYWJvdXRUaXRsZVR3byB7XFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dExhc3RTdGF0ZW1lbnQge1xcbiAgY29sb3I6IHJnYigxNjAsIDU5LCAyNTUpO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcm93LWdhcDogMnJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIHtcXG4gIG1pbi1oZWlnaHQ6IDMzdmg7XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSAjdGV4dExhYmVsIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtICNtZXNzYWdlQm94IHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGhlaWdodDogOHJlbTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gLmJ1dHRvbkRpdiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWluLXdpZHRoOiA1MCU7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgcCB7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IGgzIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAuaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgLm9wZW5pbmdIb3Vyczo6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAucGhvbmVOdW1iZXI6OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NVxcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgLmVtYWlsRGl2OjpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTBcXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5hZGRyZXNzOjpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYzVcXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAubG9jYXRpb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiAzM3ZoO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAubG9jYXRpb24gI21hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogLmNvbnRlbnQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCAkY29zdC1jb2xvciA7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxufTsgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGVudC1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIH1cXG4gIC5jb250YWN0SW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWVBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFiTztBQUFYOztBQWdCQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0F0Qk87QUFTWDs7QUFnQkE7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QTtBQTlEaEI7QUFpRVk7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBaEVoQjtBQXNFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFwRVo7QUFzRVk7RUFDSSxhQS9SSDtBQTJOYjtBQXdFWTtFQUNJLGFBcFNIO0VBcVNHLGtCQUFBO0VBQ0EsMEJBQUE7QUF0RWhCO0FBeUVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdkVoQjtBQTBFWTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXhFaEI7QUEyRVk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF6RWhCO0FBNEVZO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMUVoQjtBQTZFWTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTNFaEI7QUFpRkk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUEvRVI7QUFpRlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQS9FWjs7QUF3RkE7Ozs7OztJQUFBO0FBUUE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHVCQUFBO0VBdEZOO0VBeUZFO0lBQ0ksc0JBQUE7RUF2Rk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvL2ltcG9ydFxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pY2hyb21hJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vVmFyaWFibGVzIFxcclxcbiRNaWNocm9tYTogJ01pY2hyb21hJywgc2Fucy1zZXJpZjtcXHJcXG4kbmF2LWNvbG9yOiAjMDEzOTUyO1xcclxcbiRuYXYtZm9udDogcmVkO1xcclxcbiRuYXYtaG92ZXI6eWVsbG93O1xcclxcbiRjb250ZW50LXRpdGxlOiByZWQ7XFxyXFxuJGNvc3QtY29sb3I6IHllbGxvdztcXHJcXG4kYWJvdXQtdGl0bGU6IHJnYigxNjAsIDU5LCAyNTUpO1xcclxcblxcclxcblxcclxcbi8vIHJvb3Qgc2VldGluZ3MgXFxyXFxuXFxyXFxuLmljb246OmJlZm9yZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICBjb2xvcjogJG5hdi1mb250O1xcclxcbiAgfVxcclxcblxcclxcbip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6JE1pY2hyb21hO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3NwZW5jZXItZGF2aXMtUl9KNktqQzY4RTQtdW5zcGxhc2guanBnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvL2JvcmRlcjogc29saWQgeWVsbG93IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcXHJcXG4gICAgbWluLWhlaWdodDogM3JlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07O1xcclxcbiAgIFxcclxcbiAgICAudGl0bGVEaXYge1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyOyAgICAgICAgXFxyXFxuICAgICAgICBjb2xvcjogJG5hdi1mb250O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdWx7IFxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBnYXA6IDJyZW07XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIFxcclxcbiAgICBcXHJcXG4gICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJG5hdi1mb250O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH07XFxyXFxuICAgICAgICBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICRuYXYtaG92ZXI7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRuYXYtaG92ZXI7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAkY29udGVudC10aXRsZTtcXHJcXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogODB2aDtcXHJcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xcclxcbiAgICAvL2JhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQtdGl0bGV7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbnRlbnQtdGl0bGU7XFxyXFxuICAgICAgICAvL2JvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAvL2dyaWQgaXRlbSBzdHlsaW5nLCBvbmx5IHVzZWQgaW4gdGhlIG1lbnUuanMgZmlsZS4gXFxyXFxuICAgIC5jb250ZW50LWdyaWQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxuICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgcm93LWdhcDogMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07O1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gICAgICAgIFxcclxcblxcclxcbiAgICAgICAgLml0ZW0ge1xcclxcbiAgICAgICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogNnJlbTtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDZyZW07O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgI2l0ZW0tdGl0bGUge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBociB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJG5hdi1mb250O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgI2Nvc3Qge1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IDA7O1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAgICAgLmNvbnRlbnQtZ3JpZHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICAgICAgICAgIC5pdGVte1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAjY29zdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9O1xcclxcbiAgICBcXHJcXG59O1xcclxcblxcclxcblxcclxcbi5hYm91dENvbnRhaW5lcntcXHJcXG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7O1xcclxcblxcclxcbiAgICAjYWJvdXRUaXRsZSB7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiAkYWJvdXQtdGl0bGU7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIFxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAjYWJvdXRUaXRsZTpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBociB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XFxyXFxuICAgICAgICBib3JkZXI6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgICNhYm91dFRpdGxlVHdvIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAjYWJvdXRMYXN0U3RhdGVtZW50IHtcXHJcXG4gICAgICAgIGNvbG9yOiAkYWJvdXQtdGl0bGU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RDb250YWluZXIgeyBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICByb3ctZ2FwOiAycmVtO1xcclxcblxcclxcblxcclxcbiAgICAuY29udGFjdEluZm8ge1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMzN2aDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICBmb3JtIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7O1xcclxcblxcclxcbiAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgICAgIH07XFxyXFxuXFxyXFxuICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICN0ZXh0TGFiZWwge1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICNtZXNzYWdlQm94e1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJ1dHRvbkRpdntcXHJcXG4gICAgICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgIC5jb250YWN0Q29weSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xcclxcblxcclxcbiAgICAgICAgICAgIHB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgaDMge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuaWNvbntcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAub3BlbmluZ0hvdXJzOjpiZWZvcmV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAucGhvbmVOdW1iZXI6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NVxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbVxcclxcbiAgICAgICAgICAgIH07XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmVtYWlsRGl2OjpiZWZvcmV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwZTBcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmFkZHJlc3M6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYzYzVcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIC5sb2NhdGlvbiB7IFxcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzM3ZoO1xcclxcblxcclxcbiAgICAgICAgI21hcCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxufTtcXHJcXG5cXHJcXG5cXHJcXG4vL0ZYXFxyXFxuXFxyXFxuLyogLmNvbnRlbnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDRweCAkY29zdC1jb2xvciA7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxufTsgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5jb250ZW50LWdyaWR7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIC5jb250YWN0SW5mbyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICB9XFxyXFxuICB9O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9BYm91dCB1cyBPcGVyYXRvclxyXG5cclxuLy9pbXBvcnRzIFxyXG4gaW1wb3J0IHsgYWJvdXRPYmplY3QgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcblxyXG4vL2Z1bmN0aW9ucyFcclxuXHJcbmZ1bmN0aW9uIG1vZHVsZVRpdGxlIChzdHJpbmcpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gYCR7c3RyaW5nfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbGlzdENyZWF0b3IgKHN0cmluZywgcGFyZW50KSB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7IFxyXG4gICAgbGkuaW5uZXJUZXh0ID0gYCR7c3RyaW5nfWBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsaSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0Q29udGVudCAob2JqZWN0KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGFib3V0VGl0bGVUZXh0LCBcclxuICAgICAgICBhYm91dENvbnRleHQsIFxyXG4gICAgICAgIGFib3V0QXRtb3NwaGVyZSwgXHJcbiAgICAgICAgYWJvdXRGb29kLCBcclxuICAgICAgICBhYm91dFRpdGxlVHdvLCBcclxuICAgICAgICBsYXN0U3RhdGVtZW50LFxyXG4gICAgICAgIGxpc3RPbmUsIGxpc3RUd28sIGxpc3RUaHJlZSwgbGlzdEZvdXIsIGxpc3RGaXZlLFxyXG5cclxuICAgIH0gPSBvYmplY3RcclxuXHJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0Q29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxyXG4gICAgICAgIGFib3V0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFRpdGxlXCIpOyBcclxuICAgICAgICAgICAgYWJvdXRUaXRsZS5pbm5lclRleHQgPSBgJHthYm91dFRpdGxlVGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoSFIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb250ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRDb250ZXh0XCIpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmlubmVyVGV4dCA9IGAke2Fib3V0Q29udGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgYXRtb3NwaGVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGF0bW9zcGhlcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dEF0bW9zcGhlcmVcIik7XHJcbiAgICAgICAgICAgIGF0bW9zcGhlcmUuaW5uZXJUZXh0ID0gYCR7YWJvdXRBdG1vc3BoZXJlfWA7XHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhdG1vc3BoZXJlKTtcclxuXHJcbiAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZm9vZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0Rm9vZFwiKTtcclxuICAgICAgICAgICAgZm9vZC5pbm5lclRleHQgPSBgJHthYm91dEZvb2R9YFxyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgdGl0bGVUd28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFRpdGxlVHdvXCIpO1xyXG4gICAgICAgICAgICB0aXRsZVR3by5pbm5lclRleHQgPSBgJHthYm91dFRpdGxlVHdvfWBcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlVHdvKTtcclxuXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFwiKTsgICAgICAgICAgXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RPbmUsdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RUd28sdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RUaHJlZSx1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdEZvdXIsdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RGaXZlLHVsKVxyXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVsKVxyXG5cclxuICAgIGNvbnN0IGxhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGFzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0TGFzdFN0YXRlbWVudFwiKTtcclxuICAgICAgICAgICAgbGFzdC5pbm5lclRleHQgPSBgJHtsYXN0U3RhdGVtZW50fWBcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhc3QpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFib3V0ICgpIHtcclxuICAgIG1vZHVsZVRpdGxlKFwiQWJvdXRcIilcclxuICAgIGNyZWF0ZUFib3V0Q29udGVudChhYm91dE9iamVjdCk7XHJcbn07XHJcblxyXG5leHBvcnQge2Rpc3BsYXlBYm91dH07XHJcblxyXG5cclxuXHJcbiIsIlxyXG4vL2ltcG9ydGVkIHRvIGluZGV4LmpzIGFuZCB1c2VkIHdpdGggdGhlIG1lbnUuanMgZnVuY3Rpb25zXHJcbmxldCBtZW51SXRlbXMgPSBbXHJcbiAgICBcclxuICAgIHsgICAvL0hvdCBkb2dcclxuICAgICAgICBpdGVtVGl0bGU6XCJIb3QtRG9nXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGEgc2lkZSBvZiBmcmllc1wiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcIkJ1biwgb25pb25zLCBtdXN0YXJkICYgS2V0Y2h1cCFcIixcclxuICAgICAgICBjb3N0OiBcIiQyLjk5XCJcclxuICAgIH0sXHJcbiAgICB7ICAgLy9CdXJnZXJcclxuICAgICAgICBpdGVtVGl0bGU6XCJCdXJnZXJcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggYSBzaWRlIG9mIGZyaWVzXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwiT25pb25zLCBNYXlvIGFuZCBMZXR0dWNlXCIsXHJcbiAgICAgICAgY29zdDogXCIkMy45OVwiXHJcbiAgICB9LFxyXG4gICAgeyAgIC8vc3RlYWtcclxuICAgICAgICBpdGVtVGl0bGU6XCJTdGVha1wiLFxyXG4gICAgICAgIGl0ZW1TdW0gOlwiV2l0aCBob3QgcG90YXRvZXNcIixcclxuICAgICAgICBpbmdyZWRpYW50czogXCJ0b21hdG9lcyxhbmQgbXVzaHJvb21zXCIsXHJcbiAgICAgICAgY29zdDogXCIkNS45OVwiXHJcbiAgICB9LFxyXG4gICAgeyAgIC8vT21lbGV0dGVcclxuICAgICAgICBpdGVtVGl0bGU6XCJPbWxldHRlXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGEgc2lkZSBzYWxhZFwiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcIkVnZ3MsIGJhY29uIGFuZCBjaGVlc2UhXCIsXHJcbiAgICAgICAgY29zdDogXCIkMi45OVwiXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYWJvdXRPYmplY3QgPSB7XHJcbiAgICBhYm91dFRpdGxlVGV4dDogXCJEUklWRVwiLFxyXG4gICAgYWJvdXRDb250ZXh0OmBJcyBhbiBvdXQtcnVuIGluc3BpcmVkIGRpbmVyLCB3aGljaCBhaW1zIHRvIHByb3ZpZGUgYSByZXRybyBkaW5pbmcgZXhwZXJpZW5jZSBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsIHRob3NlIGxvc3Qgc291bHMsIGp1c3QgcmlkaW5nIHRoZSBuaWdodHMgaGlnaHdheWAsXHJcbiAgICBhYm91dEF0bW9zcGhlcmU6YFdFIHByb3ZpZGUgYSBjaGlsbCBtb29kLCBnb29kIGZvb2QgYW5kIGFyY2FkZSBzdHlsZSBnYW1lcyBvcGVuIGZvciBhbGwgZ3Vlc3RzIHRvIHVzZS5gLFxyXG4gICAgYWJvdXRGb29kOiBgV2Ugc2VydmUgYnVyZ2VycywgaG90ZG9ncywgc3RlYWtzLCBicmVha2Zhc3QgZm9vZCwgY29mZmVlIGFuZCBzbmFja3MgdG8gYWxsIHRob3NlXHJcbiAgICAgICAgICAgICAgICBqdXN0IGxvb2tpbmcgdG8gZ2V0IGEgYnJlYWsgZnJvbSB0aGUgd29ybGQuYCxcclxuICAgIGFib3V0VGl0bGVUd286YFdITyBBUkUgWU9VP2AsXHJcbiAgICBsaXN0T25lOmBBIENvcCBsb29raW5nIHRvIHNvbHZlIHRoYXQgaGFyZCBjYXNlP2AsXHJcbiAgICBsaXN0VHdvOmBBIGd1eSBqdXN0IGluIG5lZWQgb2YgYSBtaXNzaW9uPyBgLFxyXG4gICAgbGlzdFRocmVlOmBBIGdpcmwgd2hvIG5lZWRzIHRvIGdldCBhd2F5IGZyb20gdGhlIHdvcmxkP2AsXHJcbiAgICBsaXN0Rm91cjpgVGVlbmFnZXJzIGxvb2tpbmcgdG8gbWVldC11cCBhd2F5IGZyb20gcHJ5aW5nIGV5ZXM/YCxcclxuICAgIGxpc3RGaXZlOmBBIGxvc3Qgc291bCBpbiBuZWVkIG9mIHNvbWUgZ29vZCBjb21wYW55P2AsXHJcbiAgICBsYXN0U3RhdGVtZW50IDpgQ2h1Y2sgb24gdGhhdCB2aW50YWdlIGNsb3RoaW5nIGFuZCBjb21lIGRvd24gdG8gRFJJVkVgLFxyXG59O1xyXG5cclxuZXhwb3J0IHttZW51SXRlbXMsIGFib3V0T2JqZWN0fTsiLCIvL2ltcG9ydHNcclxuXHJcblxyXG4vL2NvbnN0cyBhbmQgbGV0cyBcclxuXHJcblxyXG4vL2Z1bmN0aW9ucyBcclxuXHJcbmZ1bmN0aW9uIG1vZHVsZVRpdGxlIChzdHJpbmcpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gYCR7c3RyaW5nfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUNvbnRhY3QgKCkge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICAvL2NvbnRhY3RDb250YWluZXIgY29udGFpbnMgYWxsIGFwcGVuZGVkIGVsZW1lbnRzXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIHRvcCBoYWxmIG9mIGNvbnRhY3QgcGFnZVxyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEluZm9cIik7XHJcbiAgICAgICAgICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcclxuICAgICAgICAvL2Zvcm0gc2VjdGlvblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICAgICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgICAgIC8vbGFiZWxzICAgXHJcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIG5hbWVMYWJlbC5pbm5lclRleHQgPSBcIkZ1bGwgTmFtZVwiO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpXHJcbiAgICAgICAgICAgIC8vbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIpO1xyXG4gICAgICAgICAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG51bWJlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICBudW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJMYWJlbC5pbm5lclRleHQgPSBcIk51bWJlclwiO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChudW1iZXJMYWJlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIG51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZWxcIik7XHJcbiAgICAgICAgICAgIG51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIC8vbnVtYmVyaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgIG51bWJlckxhYmVsLmFwcGVuZENoaWxkKG51bWJlcklucHV0KVxyXG5cclxuICAgICAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsXCIpO1xyXG4gICAgICAgICAgICBlbWFpbExhYmVsLmlubmVyVGV4dCA9IFwiRW1haWxcIjtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZWxcIik7XHJcbiAgICAgICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJudW1iZXJcIilcclxuICAgICAgICAgICAgLy9lbWFpbExhYmVsLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIpO1xyXG4gICAgICAgICAgICBlbWFpbExhYmVsLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0TGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwuaW5uZXJUZXh0ID0gXCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dExhYmVsKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZUJveFwiKTtcclxuICAgICAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICAgICAgICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGl2XCIpXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIlNlbmRcIlxyXG4gICAgICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIC8vIGZvcm0gaW5wdXRzIGVuZHMhXHJcblxyXG4gICAgLy9Db250YWN0IEluZm8gQmVnaW5zISBcclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb250YWN0Q29weS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcclxuICAgICAgICBjb250YWN0Q29weS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvcHlcIik7XHJcbiAgICAgICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdENvcHkpO1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgIGNvcHlUaXRsZS5pbm5lclRleHQgPSBcIklORk9cIlxyXG4gICAgICAgICAgICBjb250YWN0Q29weS5hcHBlbmRDaGlsZChjb3B5VGl0bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wZW5pbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG9wZW5pbmdIb3Vycy5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxyXG4gICAgICAgICAgICBvcGVuaW5nSG91cnMuY2xhc3NMaXN0LmFkZChcIm9wZW5pbmdIb3Vyc1wiKVxyXG4gICAgICAgICAgICBjb250YWN0Q29weS5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnMpO1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgIG9wZW5UZXh0LmlubmVyVGV4dCA9IFwiNjowMGFtIHRpbGwgMTI6MDBwbVwiXHJcbiAgICAgICAgICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuVGV4dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxyXG4gICAgICAgICAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKFwicGhvbmVOdW1iZXJcIilcclxuICAgICAgICAgICAgY29udGFjdENvcHkuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBwaG9uZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICBwaG9uZVRleHQuaW5uZXJUZXh0ID0gXCIwMTIzNDU2Nzg5XCJcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXIuYXBwZW5kQ2hpbGQocGhvbmVUZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxyXG4gICAgICAgICAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKFwiZW1haWxEaXZcIilcclxuICAgICAgICAgICAgY29udGFjdENvcHkuYXBwZW5kQ2hpbGQoZW1haWxEaXYpO1xyXG5cclxuICAgICAgICBjb25zdCBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICBlbWFpbFRleHQuaW5uZXJUZXh0ID0gXCJEcml2ZUBmYWtlLmNvbVwiXHJcbiAgICAgICAgICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsVGV4dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBhZGRyZXNzRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgICAgICAgICAgIGFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIilcclxuICAgICAgICAgICAgY29udGFjdENvcHkuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgYWRkcmVzc1RleHQuaW5uZXJUZXh0ID0gXCI3NDggU1cgNHRoIEF2ZSBNaWFtaSwgRmxvcmlkYVwiXHJcbiAgICAgICAgICAgIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xyXG4gICAgICAgIC8vY29udGFjdCBpbmZvXHJcblxyXG4gICAgXHJcbiAgICAvL2NvbnRhaW5zIEdvb2dsZSBtYXBzIGluIElGcmFtZXMuIFxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcclxuICAgICAgICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgICAgIG1hcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1hcFwiKTtcclxuICAgICAgICAgICAgbWFwLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM1OTMuMTE5NDkyMTk1NzgxMyEyZC04MC4yMDI5NTQ4ODQ2MzM3NCEzZDI1Ljc2NjYxNjQxNDY4NDk2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OGQ5YjY4ZmE4Nzg4ZDAxJTNBMHgzMmYzZDdlOWFlYzhjMmZhITJzNzQ4JTIwU1clMjA0dGglMjBBdmUlMkMlMjBNaWFtaSUyQyUyMEZMJTIwMzMxMzAlMkMlMjBVU0EhNWUwITNtMiExc2VuITJzdWshNHYxNjU3NDc3Nzg3MjgwITVtMiExc2VuITJzdWtcIilcclxuICAgICAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobWFwKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRhY3R9OyIsIi8vIE1lbnUgT3BlcmF0b3JcclxuXHJcbmltcG9ydCB7bWVudUl0ZW1zfSBmcm9tIFwiLi9jb25maWdcIlxyXG4gICAgXHJcblxyXG4vLyBwZXJtIEhUTUwgZWxlbWVudFxyXG5cclxuZnVuY3Rpb24gbW9kdWxlVGl0bGUgKHN0cmluZykge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBncmlkQ3JlYXRlciAoKSB7XHJcbiAgICBjb25zdCBjb250ZW50R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGVudEdyaWQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtZ3JpZFwiKTtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50R3JpZCk7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3SXRlbUNhcmQgKG9iamVjdCkge1xyXG5cclxuICAgIGNvbnN0IHtpdGVtVGl0bGUsIGl0ZW1TdW0sIGluZ3JlZGlhbnRzLGNvc3R9ID0gb2JqZWN0O1xyXG4gICAgY29uc3QgY29udGVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtZ3JpZFwiKVxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKVxyXG5cclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tdGl0bGVcIik7IFxyXG4gICAgICAgICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gYCR7aXRlbVRpdGxlfWA7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgY2FyZEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgICAgIGNhcmRIUi5jbGFzc0xpc3QuYWRkKFwiaHJcIik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSFIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRTdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkU3VtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1zdW1cIik7XHJcbiAgICAgICAgICAgIGNhcmRTdW0uaW5uZXJUZXh0ID0gYCR7aXRlbVN1bX1gO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkU3VtKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSW5ncmVkaWFudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkSW5ncmVkaWFudHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmdyZWRpYW50c1wiKTtcclxuICAgICAgICAgICAgY2FyZEluZ3JlZGlhbnRzLmlubmVyVGV4dCA9IGAke2luZ3JlZGlhbnRzfWBcclxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEluZ3JlZGlhbnRzKTtcclxuICAgIFxyXG4gICAgY29uc3QgY2FyZENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkQ29zdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29zdFwiKTtcclxuICAgICAgICAgICAgY2FyZENvc3QuaW5uZXJUZXh0ID0gYCR7Y29zdH1gIFxyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29zdCk7XHJcblxyXG5cclxuICAgIGNvbnRlbnRHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG59O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSAobWVudSkgIHsgXHJcbiAgICBtZW51LmZvckVhY2gob2JqZWN0ID0+IHsgbmV3SXRlbUNhcmQob2JqZWN0KVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lbnUgKCkge1xyXG4gICAgbW9kdWxlVGl0bGUoXCJNZW51XCIpXHJcbiAgICBncmlkQ3JlYXRlcigpO1xyXG4gICAgbG9hZE1lbnUobWVudUl0ZW1zKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge2Rpc3BsYXlNZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9JbXBvcnRzXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQge21lbnVJdGVtc30gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7ZGlzcGxheU1lbnV9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHtkaXNwbGF5QWJvdXR9IGZyb20gXCIuL2Fib3V0XCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuLy9jb25zdHMgYW5kIGxldHNcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudFwiKTtcclxuXHJcblxyXG4vL0Z1bmNzXHJcbmZ1bmN0aW9uIG1lbnVUYWIgKCkge1xyXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuICAgICAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgICAgICBkaXNwbGF5TWVudSgpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhYm91dFRhYiAoKSB7XHJcbiAgICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XHJcbiAgICAgICAgYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJDb250ZW50RGl2KCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBYm91dCgpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0VGFiICgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcbiAgICAgICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRhY3QoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWVyY2hUYWIgKCkge1xyXG4gICAgY29uc3QgbWVyY2hUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lcmNoXCIpO1xyXG4gICAgICAgIG1lcmNoVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbWVudVRhYigpO1xyXG4gICAgYWJvdXRUYWIoKTtcclxuICAgIGNvbnRhY3RUYWIoKTtcclxuICAgIG1lcmNoVGFiKCk7XHJcbiAgICAvL2Rpc3BsYXlBYm91dCgpO1xyXG59XHJcblxyXG4vL0lzIGNhbGxlZCBwcmlvciB0byBhbGwgbmV3IGNvbnRlbnQgY3JlYXRlZC5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50RGl2ICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxufTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==