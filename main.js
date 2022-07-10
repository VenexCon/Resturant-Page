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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxZQUFZLGtEQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFZO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3NwZW5jZXItZGF2aXMtUl9KNktqQzY4RTQtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaWNocm9tYSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmljb246OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWljaHJvbWFcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzk1MjtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5uYXYgLnRpdGxlRGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDJyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxubmF2IHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubmF2IHVsIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbm5hdiB1bCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogeWVsbG93O1xcbiAgY29sb3I6IHllbGxvdztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZWQ7XFxuICB3aWR0aDogNjB2dztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uY29udGVudCAuY29udGVudC10aXRsZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgcm93LWdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtIHtcXG4gIG1pbi1oZWlnaHQ6IDZyZW07XFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi13aWR0aDogNnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjaXRlbS10aXRsZSB7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtIGhyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDAuMnJlbTtcXG4gIGJvcmRlcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtIHAge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjY29zdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5jb250ZW50IC5jb250ZW50LWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuICAuY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtICNjb3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmFib3V0Q29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0VGl0bGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDE2MCwgNTksIDI1NSk7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5hYm91dENvbnRhaW5lciAjYWJvdXRUaXRsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciBociB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAwLjJyZW07XFxuICBib3JkZXI6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmFib3V0Q29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dFRpdGxlVHdvIHtcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0TGFzdFN0YXRlbWVudCB7XFxuICBjb2xvcjogcmdiKDE2MCwgNTksIDI1NSk7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByb3ctZ2FwOiAycmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8ge1xcbiAgbWluLWhlaWdodDogMzN2aDtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtICN0ZXh0TGFiZWwge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gI21lc3NhZ2VCb3gge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSAuYnV0dG9uRGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtaW4td2lkdGg6IDUwJTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSBwIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgaDMge1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAub3BlbmluZ0hvdXJzOjpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5waG9uZU51bWJlcjo6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAuZW1haWxEaXY6OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgLmFkZHJlc3M6OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNVxcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5sb2NhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDMzdmg7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5sb2NhdGlvbiAjbWFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAuY29udGVudDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJvcmRlcjogc29saWQgNHB4ICRjb3N0LWNvbG9yIDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG59OyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250ZW50LWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgfVxcbiAgLmNvbnRhY3RJbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQWJPO0FBQVg7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O0FBdU1iO0FBZ0VZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBOURoQjtBQWlFWTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFoRWhCO0FBc0VRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXBFWjtBQXNFWTtFQUNJLGFBL1JIO0FBMk5iO0FBd0VZO0VBQ0ksYUFwU0g7RUFxU0csa0JBQUE7RUFDQSwwQkFBQTtBQXRFaEI7QUF5RVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF2RWhCO0FBMEVZO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBeEVoQjtBQTJFWTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXpFaEI7QUE0RVk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExRWhCO0FBNkVZO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBM0VoQjtBQWlGSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQS9FUjtBQWlGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBL0VaOztBQXdGQTs7Ozs7O0lBQUE7QUFRQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsdUJBQUE7RUF0Rk47RUF5RkU7SUFDSSxzQkFBQTtFQXZGTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vaW1wb3J0XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWljaHJvbWEmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLy9WYXJpYWJsZXMgXFxyXFxuJE1pY2hyb21hOiAnTWljaHJvbWEnLCBzYW5zLXNlcmlmO1xcclxcbiRuYXYtY29sb3I6ICMwMTM5NTI7XFxyXFxuJG5hdi1mb250OiByZWQ7XFxyXFxuJG5hdi1ob3Zlcjp5ZWxsb3c7XFxyXFxuJGNvbnRlbnQtdGl0bGU6IHJlZDtcXHJcXG4kY29zdC1jb2xvcjogeWVsbG93O1xcclxcbiRhYm91dC10aXRsZTogcmdiKDE2MCwgNTksIDI1NSk7XFxyXFxuXFxyXFxuXFxyXFxuLy8gcm9vdCBzZWV0aW5ncyBcXHJcXG5cXHJcXG4uaWNvbjo6YmVmb3JlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIGNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTokTWljaHJvbWE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc3BlbmNlci1kYXZpcy1SX0o2S2pDNjhFNC11bnNwbGFzaC5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8vYm9yZGVyOiBzb2xpZCB5ZWxsb3cgMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTs7XFxyXFxuICAgXFxyXFxuICAgIC50aXRsZURpdiB7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICAgICAgICBcXHJcXG4gICAgICAgIGNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB1bHsgXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGdhcDogMnJlbTtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgICAgICAgICAgIGEge1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfTtcXHJcXG4gICAgICAgIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJG5hdi1ob3ZlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJG5hdi1ob3ZlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMnB4ICRjb250ZW50LXRpdGxlO1xcclxcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuICAgIC8vYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcblxcclxcbiAgICAuY29udGVudC10aXRsZXtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29udGVudC10aXRsZTtcXHJcXG4gICAgICAgIC8vYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIC8vZ3JpZCBpdGVtIHN0eWxpbmcsIG9ubHkgdXNlZCBpbiB0aGUgbWVudS5qcyBmaWxlLiBcXHJcXG4gICAgLmNvbnRlbnQtZ3JpZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICByb3ctZ2FwOiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTs7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAuaXRlbSB7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNnJlbTs7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAjaXRlbS10aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGhyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjY29zdCB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDs7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICAuY29udGVudC1ncmlke1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLml0ZW17XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICNjb3N0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH07XFxyXFxuICAgIFxcclxcbn07XFxyXFxuXFxyXFxuXFxyXFxuLmFib3V0Q29udGFpbmVye1xcclxcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTs7XFxyXFxuXFxyXFxuICAgICNhYm91dFRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgY29sb3I6ICRhYm91dC10aXRsZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgXFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgICNhYm91dFRpdGxlOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIGhyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogJG5hdi1mb250O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1mb250O1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgI2Fib3V0VGl0bGVUd28ge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgICNhYm91dExhc3RTdGF0ZW1lbnQge1xcclxcbiAgICAgICAgY29sb3I6ICRhYm91dC10aXRsZTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdENvbnRhaW5lciB7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJyZW07XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jb250YWN0SW5mbyB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAzM3ZoO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgIGZvcm0ge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTs7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgI3RleHRMYWJlbCB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgI21lc3NhZ2VCb3h7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYnV0dG9uRGl2e1xcclxcbiAgICAgICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIHllbGxvdzs7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgLmNvbnRhY3RDb3B5IHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICBoMyB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5pY29ue1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5vcGVuaW5nSG91cnM6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5waG9uZU51bWJlcjo6YmVmb3Jle1xcclxcbiAgICAgICAgICAgICAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtXFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZW1haWxEaXY6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYWRkcmVzczo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNVxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHsgXFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMzdmg7XFxyXFxuXFxyXFxuICAgICAgICAjbWFwIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59O1xcclxcblxcclxcblxcclxcbi8vRlhcXHJcXG5cXHJcXG4vKiAuY29udGVudDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIGJvcmRlcjogc29saWQgNHB4ICRjb3N0LWNvbG9yIDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG59OyAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmNvbnRlbnQtZ3JpZHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RJbmZvIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH07XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0Fib3V0IHVzIE9wZXJhdG9yXHJcblxyXG4vL2ltcG9ydHMgXHJcbiBpbXBvcnQgeyBhYm91dE9iamVjdCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuXHJcbi8vZnVuY3Rpb25zIVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlVGl0bGUgKHN0cmluZykge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsaXN0Q3JlYXRvciAoc3RyaW5nLCBwYXJlbnQpIHtcclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTsgXHJcbiAgICBsaS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxpKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRDb250ZW50IChvYmplY3QpIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgYWJvdXRUaXRsZVRleHQsIFxyXG4gICAgICAgIGFib3V0Q29udGV4dCwgXHJcbiAgICAgICAgYWJvdXRBdG1vc3BoZXJlLCBcclxuICAgICAgICBhYm91dEZvb2QsIFxyXG4gICAgICAgIGFib3V0VGl0bGVUd28sIFxyXG4gICAgICAgIGxhc3RTdGF0ZW1lbnQsXHJcbiAgICAgICAgbGlzdE9uZSwgbGlzdFR3bywgbGlzdFRocmVlLCBsaXN0Rm91ciwgbGlzdEZpdmUsXHJcblxyXG4gICAgfSA9IG9iamVjdFxyXG5cclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRDb250YWluZXJcIilcclxuXHJcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXHJcbiAgICAgICAgYWJvdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0VGl0bGVcIik7IFxyXG4gICAgICAgICAgICBhYm91dFRpdGxlLmlubmVyVGV4dCA9IGAke2Fib3V0VGl0bGVUZXh0fWA7XHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBIUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChIUik7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dENvbnRleHRcIik7XHJcbiAgICAgICAgICAgIGNvbnRleHQuaW5uZXJUZXh0ID0gYCR7YWJvdXRDb250ZXh0fWA7XHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBhdG1vc3BoZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgYXRtb3NwaGVyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0QXRtb3NwaGVyZVwiKTtcclxuICAgICAgICAgICAgYXRtb3NwaGVyZS5pbm5lclRleHQgPSBgJHthYm91dEF0bW9zcGhlcmV9YDtcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGF0bW9zcGhlcmUpO1xyXG5cclxuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBmb29kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRGb29kXCIpO1xyXG4gICAgICAgICAgICBmb29kLmlubmVyVGV4dCA9IGAke2Fib3V0Rm9vZH1gXHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICB0aXRsZVR3by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0VGl0bGVUd29cIik7XHJcbiAgICAgICAgICAgIHRpdGxlVHdvLmlubmVyVGV4dCA9IGAke2Fib3V0VGl0bGVUd299YFxyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUd28pO1xyXG5cclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbiAgICAgICAgdWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0XCIpOyAgICAgICAgICBcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdE9uZSx1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdFR3byx1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdFRocmVlLHVsKVxyXG4gICAgICAgIGxpc3RDcmVhdG9yIChsaXN0Rm91cix1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdEZpdmUsdWwpXHJcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpXHJcblxyXG4gICAgY29uc3QgbGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRMYXN0U3RhdGVtZW50XCIpO1xyXG4gICAgICAgICAgICBsYXN0LmlubmVyVGV4dCA9IGAke2xhc3RTdGF0ZW1lbnR9YFxyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFzdCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWJvdXQgKCkge1xyXG4gICAgbW9kdWxlVGl0bGUoXCJBYm91dFwiKVxyXG4gICAgY3JlYXRlQWJvdXRDb250ZW50KGFib3V0T2JqZWN0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7ZGlzcGxheUFib3V0fTtcclxuXHJcblxyXG5cclxuIiwiXHJcbi8vaW1wb3J0ZWQgdG8gaW5kZXguanMgYW5kIHVzZWQgd2l0aCB0aGUgbWVudS5qcyBmdW5jdGlvbnNcclxubGV0IG1lbnVJdGVtcyA9IFtcclxuICAgIFxyXG4gICAgeyAgIC8vSG90IGRvZ1xyXG4gICAgICAgIGl0ZW1UaXRsZTpcIkhvdC1Eb2dcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggYSBzaWRlIG9mIGZyaWVzXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwiQnVuLCBvbmlvbnMsIG11c3RhcmQgJiBLZXRjaHVwIVwiLFxyXG4gICAgICAgIGNvc3Q6IFwiJDIuOTlcIlxyXG4gICAgfSxcclxuICAgIHsgICAvL0J1cmdlclxyXG4gICAgICAgIGl0ZW1UaXRsZTpcIkJ1cmdlclwiLFxyXG4gICAgICAgIGl0ZW1TdW0gOlwiV2l0aCBhIHNpZGUgb2YgZnJpZXNcIixcclxuICAgICAgICBpbmdyZWRpYW50czogXCJPbmlvbnMsIE1heW8gYW5kIExldHR1Y2VcIixcclxuICAgICAgICBjb3N0OiBcIiQzLjk5XCJcclxuICAgIH0sXHJcbiAgICB7ICAgLy9zdGVha1xyXG4gICAgICAgIGl0ZW1UaXRsZTpcIlN0ZWFrXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGhvdCBwb3RhdG9lc1wiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcInRvbWF0b2VzLGFuZCBtdXNocm9vbXNcIixcclxuICAgICAgICBjb3N0OiBcIiQ1Ljk5XCJcclxuICAgIH0sXHJcbiAgICB7ICAgLy9PbWVsZXR0ZVxyXG4gICAgICAgIGl0ZW1UaXRsZTpcIk9tbGV0dGVcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggYSBzaWRlIHNhbGFkXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwiRWdncywgYmFjb24gYW5kIGNoZWVzZSFcIixcclxuICAgICAgICBjb3N0OiBcIiQyLjk5XCJcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBhYm91dE9iamVjdCA9IHtcclxuICAgIGFib3V0VGl0bGVUZXh0OiBcIkRSSVZFXCIsXHJcbiAgICBhYm91dENvbnRleHQ6YElzIGFuIG91dC1ydW4gaW5zcGlyZWQgZGluZXIsIHdoaWNoIGFpbXMgdG8gcHJvdmlkZSBhIHJldHJvIGRpbmluZyBleHBlcmllbmNlIGZvciBcclxuICAgICAgICAgICAgICAgICAgICBhbGwgdGhvc2UgbG9zdCBzb3VscywganVzdCByaWRpbmcgdGhlIG5pZ2h0cyBoaWdod2F5YCxcclxuICAgIGFib3V0QXRtb3NwaGVyZTpgV0UgcHJvdmlkZSBhIGNoaWxsIG1vb2QsIGdvb2QgZm9vZCBhbmQgYXJjYWRlIHN0eWxlIGdhbWVzIG9wZW4gZm9yIGFsbCBndWVzdHMgdG8gdXNlLmAsXHJcbiAgICBhYm91dEZvb2Q6IGBXZSBzZXJ2ZSBidXJnZXJzLCBob3Rkb2dzLCBzdGVha3MsIGJyZWFrZmFzdCBmb29kLCBjb2ZmZWUgYW5kIHNuYWNrcyB0byBhbGwgdGhvc2VcclxuICAgICAgICAgICAgICAgIGp1c3QgbG9va2luZyB0byBnZXQgYSBicmVhayBmcm9tIHRoZSB3b3JsZC5gLFxyXG4gICAgYWJvdXRUaXRsZVR3bzpgV0hPIEFSRSBZT1U/YCxcclxuICAgIGxpc3RPbmU6YEEgQ29wIGxvb2tpbmcgdG8gc29sdmUgdGhhdCBoYXJkIGNhc2U/YCxcclxuICAgIGxpc3RUd286YEEgZ3V5IGp1c3QgaW4gbmVlZCBvZiBhIG1pc3Npb24/IGAsXHJcbiAgICBsaXN0VGhyZWU6YEEgZ2lybCB3aG8gbmVlZHMgdG8gZ2V0IGF3YXkgZnJvbSB0aGUgd29ybGQ/YCxcclxuICAgIGxpc3RGb3VyOmBUZWVuYWdlcnMgbG9va2luZyB0byBtZWV0LXVwIGF3YXkgZnJvbSBwcnlpbmcgZXllcz9gLFxyXG4gICAgbGlzdEZpdmU6YEEgbG9zdCBzb3VsIGluIG5lZWQgb2Ygc29tZSBnb29kIGNvbXBhbnk/YCxcclxuICAgIGxhc3RTdGF0ZW1lbnQgOmBDaHVjayBvbiB0aGF0IHZpbnRhZ2UgY2xvdGhpbmcgYW5kIGNvbWUgZG93biB0byBEUklWRWAsXHJcbn07XHJcblxyXG5leHBvcnQge21lbnVJdGVtcywgYWJvdXRPYmplY3R9OyIsIi8vIE1lbnUgT3BlcmF0b3JcclxuXHJcbmltcG9ydCB7bWVudUl0ZW1zfSBmcm9tIFwiLi9jb25maWdcIlxyXG4gICAgbGV0IG1lbnUgPSBtZW51SXRlbXM7XHJcblxyXG4vLyBwZXJtIEhUTUwgZWxlbWVudFxyXG5cclxuZnVuY3Rpb24gbW9kdWxlVGl0bGUgKHN0cmluZykge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBncmlkQ3JlYXRlciAoKSB7XHJcbiAgICBjb25zdCBjb250ZW50R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGVudEdyaWQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtZ3JpZFwiKTtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50R3JpZCk7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3SXRlbUNhcmQgKG9iamVjdCkge1xyXG5cclxuICAgIGNvbnN0IHtpdGVtVGl0bGUsIGl0ZW1TdW0sIGluZ3JlZGlhbnRzLGNvc3R9ID0gb2JqZWN0O1xyXG4gICAgY29uc3QgY29udGVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtZ3JpZFwiKVxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKVxyXG5cclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tdGl0bGVcIik7IFxyXG4gICAgICAgICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gYCR7aXRlbVRpdGxlfWA7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgY2FyZEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgICAgIGNhcmRIUi5jbGFzc0xpc3QuYWRkKFwiaHJcIik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSFIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRTdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkU3VtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1zdW1cIik7XHJcbiAgICAgICAgICAgIGNhcmRTdW0uaW5uZXJUZXh0ID0gYCR7aXRlbVN1bX1gO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkU3VtKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSW5ncmVkaWFudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkSW5ncmVkaWFudHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmdyZWRpYW50c1wiKTtcclxuICAgICAgICAgICAgY2FyZEluZ3JlZGlhbnRzLmlubmVyVGV4dCA9IGAke2luZ3JlZGlhbnRzfWBcclxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEluZ3JlZGlhbnRzKTtcclxuICAgIFxyXG4gICAgY29uc3QgY2FyZENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkQ29zdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29zdFwiKTtcclxuICAgICAgICAgICAgY2FyZENvc3QuaW5uZXJUZXh0ID0gYCR7Y29zdH1gIFxyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29zdCk7XHJcblxyXG5cclxuICAgIGNvbnRlbnRHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG59O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSAobWVudSkgIHsgXHJcbiAgICBtZW51LmZvckVhY2gob2JqZWN0ID0+IHsgbmV3SXRlbUNhcmQob2JqZWN0KVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lbnUgKCkge1xyXG4gICAgbW9kdWxlVGl0bGUoXCJNZW51XCIpXHJcbiAgICBncmlkQ3JlYXRlcigpO1xyXG4gICAgbG9hZE1lbnUobWVudUl0ZW1zKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge2Rpc3BsYXlNZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9JbXBvcnRzXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQge21lbnVJdGVtc30gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7ZGlzcGxheU1lbnV9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgZGlzcGxheUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcclxuXHJcbi8vY29uc3RzIGFuZCBsZXRzXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnRcIik7XHJcblxyXG5cclxuLy9GdW5jc1xyXG5mdW5jdGlvbiBtZW51VGFiICgpIHtcclxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbiAgICAgICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICAgICAgZGlzcGxheU1lbnUoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWJvdXRUYWIgKCkge1xyXG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xyXG4gICAgICAgIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgICAgICBkaXNwbGF5QWJvdXQoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29udGFjdFRhYiAoKSB7XHJcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG4gICAgICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJDb250ZW50RGl2KCk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1lcmNoVGFiICgpIHtcclxuICAgIGNvbnN0IG1lcmNoVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXJjaFwiKTtcclxuICAgICAgICBtZXJjaFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1lbnVUYWIoKTtcclxuICAgIGFib3V0VGFiKCk7XHJcbiAgICBjb250YWN0VGFiKCk7XHJcbiAgICBtZXJjaFRhYigpO1xyXG4gICAgLy9kaXNwbGF5QWJvdXQoKTtcclxufVxyXG5cclxuLy9JcyBjYWxsZWQgcHJpb3IgdG8gYWxsIG5ldyBjb250ZW50IGNyZWF0ZWQuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudERpdiAoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=