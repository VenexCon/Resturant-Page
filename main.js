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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Michroma&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Michroma\", sans-serif;\n}\n\nbody {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #013952;\n  min-height: 3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  padding: 0.5rem;\n}\nnav .titleDiv {\n  align-self: center;\n  color: red;\n  font-size: 1.5rem;\n  text-decoration: underline;\n}\nnav ul {\n  display: flex;\n  flex-direction: row;\n  gap: 2rem;\n  list-style-type: none;\n  align-self: center;\n  justify-content: center;\n}\nnav ul li {\n  list-style: none;\n  display: inline;\n  font-weight: bold;\n}\nnav ul li a {\n  text-decoration: none;\n  color: red;\n  transition: 0.4s;\n}\nnav ul a:hover {\n  text-decoration-color: yellow;\n  color: yellow;\n  text-decoration: underline;\n}\n\n.content {\n  border: solid 2px red;\n  width: 60vw;\n  margin: auto;\n  text-align: center;\n  min-height: 80vh;\n  max-height: fit-content;\n  margin-top: 2.5rem;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  transition: 0.4s;\n}\n.content .content-title {\n  color: red;\n  width: fit-content;\n  margin: auto;\n}\n.content .content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-auto-rows: 1fr;\n  row-gap: 2rem;\n  padding: 1rem;\n  column-gap: 2rem;\n}\n.content .content-grid .item {\n  min-height: 6rem;\n  max-height: fit-content;\n  min-width: 6rem;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n}\n.content .content-grid .item #item-title {\n  color: yellow;\n}\n.content .content-grid .item hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.content .content-grid .item p {\n  font-size: small;\n  color: yellow;\n  font-weight: bold;\n}\n.content .content-grid .item #cost {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: yellow;\n  font-weight: bold;\n  padding: 0.25rem;\n}\n@media only screen and (max-width: 800px) {\n  .content .content-grid {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  .content .content-grid .item #cost {\n    position: relative;\n    display: block;\n  }\n}\n\n.aboutContainer {\n  height: 100%;\n  width: 100%;\n}\n.aboutContainer #aboutTitle {\n  font-style: italic;\n  font-weight: bold;\n  color: rgb(160, 59, 255);\n  margin: 1rem auto;\n  font-size: 2rem;\n  transition: 0.4s;\n  width: fit-content;\n}\n.aboutContainer #aboutTitle:hover {\n  transform: scale(1.05);\n  transition: 0.4s;\n  color: yellow;\n}\n.aboutContainer hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.aboutContainer p {\n  margin-top: 2rem;\n  display: block;\n  color: yellow;\n}\n.aboutContainer #aboutTitleTwo {\n  margin: 1rem 0 1rem 0;\n  color: yellow;\n}\n.aboutContainer li {\n  list-style-type: none;\n  text-align: start;\n  padding: 0.25rem;\n  color: yellow;\n}\n.aboutContainer #aboutLastStatement {\n  color: rgb(160, 59, 255);\n  margin-top: 4rem;\n  font-size: 1.5rem;\n}\n\n.contactContainer {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 2rem;\n}\n.contactContainer .contactInfo {\n  border: 2px black solid;\n  height: 33vh;\n  display: flex;\n  flex-direction: row;\n}\n.contactContainer .contactInfo form {\n  border: 2px solid red;\n}\n.contactContainer .contactInfo form label {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  color: yellow;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo form input {\n  display: block;\n  width: 20vw;\n}\n.contactContainer .contactInfo form .buttonDiv {\n  margin-left: 0;\n  text-align: start;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy {\n  text-align: start;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy h3 {\n  color: yellow;\n  font-style: italic;\n  text-decoration: underline;\n}\n.contactContainer .location {\n  border: 2px solid red;\n  height: 33vh;\n}\n\n/* .content:hover {\n    transform: scale(1.05);\n    transition: 0.4s;\n    border: solid 4px $cost-color ;\n    height: fit-content;\n\n}; */\n@media only screen and (max-width: 600px) {\n  .content-grid {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAeA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,mCAfO;AAEX;;AAgBA;EAEI,sBAAA;EACA,4BAAA;EACA,kBAAA;AAdJ;;AAiBA;EACI,aAAA;EACA,sBAAA;EAEA,yBA5BQ;EA6BR,gBAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;AAfJ;AAiBI;EACI,kBAAA;EACA,UAnCG;EAoCH,iBAAA;EACA,0BAAA;AAfR;AAmBI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,qBAAA;EACA,kBAAA;EACA,uBAAA;AAjBR;AAoBQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;AAlBZ;AAoBY;EACI,qBAAA;EACA,UAzDL;EA0DK,gBAAA;AAlBhB;AAqBQ;EACI,6BA7DD;EA8DC,aA9DD;EA+DC,0BAAA;AAnBZ;;AA0BA;EACI,qBAAA;EAEA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,8BAAA;EAEA,aAAA;EACA,gBAAA;AAzBJ;AA4BI;EACI,UArFQ;EAuFR,kBAAA;EACA,YAAA;AA3BR;AA+BI;EACI,aAAA;EACA,8BAAA;EACA,2BAAA;EACA,mBAAA;EAEA,aAAA;EACA,aAAA;EACA,gBAAA;AA9BR;AAiCQ;EAEI,gBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,8BAAA;AAhCZ;AAkCY;EACI,aAAA;AAhChB;AAmCY;EACI,UAAA;EACA,YAAA;EACA,cAAA;EACA,WAzHL;EA0HK,qBA1HL;AAyFX;AAoCY;EACI,gBAAA;EACA,aAAA;EACA,iBAAA;AAlChB;AAqCY;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,aApIH;EAqIG,iBAAA;EACA,gBAAA;AAnChB;AAwCI;EACI;IACI,aAAA;IACA,sBAAA;IACA,eAAA;EAtCV;EA0Cc;IACI,kBAAA;IACA,cAAA;EAxClB;AACF;;AAiDA;EAEI,YAAA;EACA,WAAA;AA/CJ;AAiDI;EACI,kBAAA;EACA,iBAAA;EACA,wBAtKM;EAuKN,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AA/CR;AAmDI;EACI,sBAAA;EACA,gBAAA;EACA,aAlLK;AAiIb;AAoDI;EACI,UAAA;EACA,YAAA;EACA,cAAA;EACA,WA5LG;EA6LH,qBA7LG;AA2IX;AAqDI;EACI,gBAAA;EACA,cAAA;EACA,aAhMK;AA6Ib;AAsDI;EACI,qBAAA;EACA,aArMK;AAiJb;AAuDI;EACI,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aA5MK;AAuJb;AAwDI;EACI,wBA/MM;EAgNN,gBAAA;EACA,iBAAA;AAtDR;;AA6DA;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EAEA,uBAAA;EACA,aAAA;AA3DJ;AA8DI;EACI,uBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;AA5DR;AA+DQ;EACI,qBAAA;AA7DZ;AA+DY;EACI,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,aAhPH;EAiPG,eAAA;AA7DhB;AAgEY;EACI,cAAA;EACA,WAAA;AA9DhB;AAiEY;EAEI,cAAA;EACA,iBAAA;EACA,eAAA;AAhEhB;AAsEQ;EACI,iBAAA;EACA,eAAA;AApEZ;AAuEY;EACI,aAzQH;EA0QG,kBAAA;EACA,0BAAA;AArEhB;AA2EI;EACI,qBAAA;EACA,YAAA;AAzER;;AAuFA;;;;;;IAAA;AAQA;EACI;IACI,aAAA;IACA,sBAAA;IACA,eAAA;EArFN;AACF","sourcesContent":["//import\r\n@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');\r\n\r\n//Variables \r\n$Michroma: 'Michroma', sans-serif;\r\n$nav-color: #013952;\r\n$nav-font: red;\r\n$nav-hover:yellow;\r\n$content-title: red;\r\n$cost-color: yellow;\r\n$about-title: rgb(160, 59, 255);\r\n\r\n\r\n// root seetings \r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family:$Michroma;\r\n}\r\n\r\nbody {\r\n    //background-image: url(./images/spencer-davis-R_J6KjC68E4-unsplash.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    //border: solid yellow 2px;\r\n    background-color: $nav-color;\r\n    min-height: 3rem;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    padding: 0.5rem;;\r\n   \r\n    .titleDiv {\r\n        align-self: center;        \r\n        color: $nav-font;\r\n        font-size: 1.5rem;\r\n        text-decoration: underline;\r\n            \r\n    };\r\n\r\n    ul{ \r\n        display: flex;\r\n        flex-direction: row;\r\n        gap: 2rem;\r\n        list-style-type: none;\r\n        align-self: center;\r\n        justify-content: center;\r\n        \r\n    \r\n        li {\r\n            list-style: none;\r\n            display: inline;\r\n            font-weight: bold;\r\n\r\n            a {\r\n                text-decoration: none;\r\n                color: $nav-font;\r\n                transition: 0.4s;\r\n            }\r\n        };\r\n        a:hover {\r\n            text-decoration-color: $nav-hover;\r\n            color: $nav-hover;\r\n            text-decoration: underline;\r\n        }\r\n    };\r\n\r\n\r\n}\r\n\r\n.content{\r\n    border: solid 2px $content-title;\r\n    //position: absolute;\r\n    width: 60vw;\r\n    margin: auto;\r\n    text-align: center;\r\n    min-height: 80vh;\r\n    max-height: fit-content;\r\n    margin-top: 2.5rem;\r\n    background: rgba(0,0,0,0.7);\r\n    //backdrop-filter: blur(16px);\r\n    padding: 1rem;\r\n    transition: 0.4s;\r\n\r\n\r\n    .content-title{\r\n        color: $content-title;\r\n        //border: solid 2px black;\r\n        width: fit-content;\r\n        margin: auto;\r\n    };\r\n\r\n    //grid item styling, only used in the menu.js file. \r\n    .content-grid {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-auto-rows: 1fr;\r\n        //border: 2px solid black;\r\n        row-gap: 2rem;\r\n        padding: 1rem;;\r\n        column-gap: 2rem;\r\n        \r\n\r\n        .item {\r\n            //border: 2px solid black;\r\n            min-height: 6rem;\r\n            max-height: fit-content;\r\n            min-width: 6rem;;\r\n            position: relative;\r\n            background: rgba(0,0,0,0.5);\r\n\r\n            #item-title {\r\n                color: yellow;\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                margin: auto;\r\n                height: 0.2rem;\r\n                border: $nav-font;\r\n                background-color: $nav-font;\r\n            }\r\n\r\n            p {\r\n                font-size: small;\r\n                color: yellow;\r\n                font-weight: bold;\r\n            }\r\n\r\n            #cost {\r\n                position: absolute;\r\n                right: 0;\r\n                bottom: 0;;\r\n                color: $cost-color;\r\n                font-weight: bold;\r\n                padding: 0.25rem;\r\n            }\r\n        }\r\n    };\r\n\r\n    @media only screen and (max-width: 800px) {\r\n        .content-grid{\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n\r\n            .item{\r\n\r\n                #cost {\r\n                    position: relative;\r\n                    display: block;\r\n                }\r\n\r\n            }\r\n        }\r\n      };\r\n    \r\n};\r\n\r\n\r\n.aboutContainer{\r\n    //background: rgba(0,0,0,0.7);\r\n    height: 100%;\r\n    width: 100%;;\r\n\r\n    #aboutTitle {\r\n        font-style: italic;\r\n        font-weight: bold;\r\n        color: $about-title;\r\n        margin: 1rem auto;\r\n        font-size: 2rem;\r\n        transition: 0.4s;\r\n        width: fit-content;\r\n    \r\n    };\r\n\r\n    #aboutTitle:hover {\r\n        transform:scale(1.05);\r\n        transition: 0.4s;\r\n        color: $cost-color;\r\n    };\r\n\r\n    hr {\r\n        width: 80%;\r\n        margin: auto;\r\n        height: 0.2rem;\r\n        border: $nav-font;\r\n        background-color: $nav-font;\r\n    };\r\n\r\n    p {\r\n        margin-top: 2rem;\r\n        display: block;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutTitleTwo {\r\n        margin: 1rem 0 1rem 0;\r\n        color: $cost-color;\r\n    };\r\n\r\n    li {\r\n        list-style-type: none;\r\n        text-align: start;\r\n        padding: 0.25rem;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutLastStatement {\r\n        color: $about-title;\r\n        margin-top: 4rem;\r\n        font-size: 1.5rem;\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n.contactContainer { \r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    //align-items: center;\r\n    justify-content: center;\r\n    row-gap: 2rem;\r\n\r\n\r\n    .contactInfo {\r\n        border: 2px black solid;\r\n        height: 33vh;\r\n        display: flex;\r\n        flex-direction: row;\r\n\r\n\r\n        form {\r\n            border: 2px solid red;\r\n\r\n            label {\r\n                display: flex;\r\n                flex-direction: column;\r\n                text-align: start;\r\n                color: $cost-color;\r\n                padding: 0.5rem;\r\n            };\r\n\r\n            input {\r\n                display: block;\r\n                width: 20vw;\r\n            }\r\n\r\n            .buttonDiv{\r\n                //border: 2px solid yellow;;\r\n                margin-left: 0;\r\n                text-align: start;\r\n                padding: 0.5rem;\r\n                \r\n            }\r\n            \r\n        };\r\n\r\n        .contactCopy {\r\n            text-align: start;\r\n            padding: 0.5rem;;\r\n\r\n\r\n            h3 {\r\n                color: $cost-color;\r\n                font-style: italic;\r\n                text-decoration: underline;\r\n            }\r\n        }\r\n        \r\n    };\r\n\r\n    .location { \r\n        border: 2px solid red;\r\n        height: 33vh;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//FX\r\n\r\n/* .content:hover {\r\n    transform: scale(1.05);\r\n    transition: 0.4s;\r\n    border: solid 4px $cost-color ;\r\n    height: fit-content;\r\n\r\n}; */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .content-grid{\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap: wrap;\r\n    }\r\n  };"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxtSEFBbUgsMERBQTBELHdCQUF3QixtQkFBbUIsc0JBQXNCLHdCQUF3Qix3QkFBd0Isb0NBQW9DLHVDQUF1QyxtQkFB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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNzQjtBQUNhO0FBQ0E7QUFDSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVc7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pY2hyb21hJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk1pY2hyb21hXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzk1MjtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5uYXYgLnRpdGxlRGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDJyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxubmF2IHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubmF2IHVsIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbm5hdiB1bCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogeWVsbG93O1xcbiAgY29sb3I6IHllbGxvdztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZWQ7XFxuICB3aWR0aDogNjB2dztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uY29udGVudCAuY29udGVudC10aXRsZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgcm93LWdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtIHtcXG4gIG1pbi1oZWlnaHQ6IDZyZW07XFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi13aWR0aDogNnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjaXRlbS10aXRsZSB7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtIGhyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDAuMnJlbTtcXG4gIGJvcmRlcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtIHAge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjY29zdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5jb250ZW50IC5jb250ZW50LWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuICAuY29udGVudCAuY29udGVudC1ncmlkIC5pdGVtICNjb3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmFib3V0Q29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0VGl0bGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDE2MCwgNTksIDI1NSk7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5hYm91dENvbnRhaW5lciAjYWJvdXRUaXRsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciBociB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAwLjJyZW07XFxuICBib3JkZXI6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmFib3V0Q29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dFRpdGxlVHdvIHtcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0TGFzdFN0YXRlbWVudCB7XFxuICBjb2xvcjogcmdiKDE2MCwgNTksIDI1NSk7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByb3ctZ2FwOiAycmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8ge1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICBoZWlnaHQ6IDMzdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgY29sb3I6IHllbGxvdztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjB2dztcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gLmJ1dHRvbkRpdiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IGgzIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmxvY2F0aW9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogMzN2aDtcXG59XFxuXFxuLyogLmNvbnRlbnQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCAkY29zdC1jb2xvciA7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxufTsgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGVudC1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFlQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FmTztBQUVYOztBQWdCQTtF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QUNJLHFCQUFBO0VBQ0EsWUFBQTtBQXpFUjs7QUF1RkE7Ozs7OztJQUFBO0FBUUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUFyRk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvL2ltcG9ydFxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pY2hyb21hJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vVmFyaWFibGVzIFxcclxcbiRNaWNocm9tYTogJ01pY2hyb21hJywgc2Fucy1zZXJpZjtcXHJcXG4kbmF2LWNvbG9yOiAjMDEzOTUyO1xcclxcbiRuYXYtZm9udDogcmVkO1xcclxcbiRuYXYtaG92ZXI6eWVsbG93O1xcclxcbiRjb250ZW50LXRpdGxlOiByZWQ7XFxyXFxuJGNvc3QtY29sb3I6IHllbGxvdztcXHJcXG4kYWJvdXQtdGl0bGU6IHJnYigxNjAsIDU5LCAyNTUpO1xcclxcblxcclxcblxcclxcbi8vIHJvb3Qgc2VldGluZ3MgXFxyXFxuXFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTokTWljaHJvbWE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zcGVuY2VyLWRhdmlzLVJfSjZLakM2OEU0LXVuc3BsYXNoLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLy9ib3JkZXI6IHNvbGlkIHllbGxvdyAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDNyZW07XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtOztcXHJcXG4gICBcXHJcXG4gICAgLnRpdGxlRGl2IHtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgICAgICAgIFxcclxcbiAgICAgICAgY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHVseyBcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBcXHJcXG4gICAgXFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9O1xcclxcbiAgICAgICAgYTpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAkbmF2LWhvdmVyO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2LWhvdmVyO1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbnRlbnQtdGl0bGU7XFxyXFxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG4gICAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jb250ZW50LXRpdGxle1xcclxcbiAgICAgICAgY29sb3I6ICRjb250ZW50LXRpdGxlO1xcclxcbiAgICAgICAgLy9ib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLy9ncmlkIGl0ZW0gc3R5bGluZywgb25seSB1c2VkIGluIHRoZSBtZW51LmpzIGZpbGUuIFxcclxcbiAgICAuY29udGVudC1ncmlkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgICAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIHJvdy1nYXA6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtOztcXHJcXG4gICAgICAgIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgIC5pdGVtIHtcXHJcXG4gICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA2cmVtOztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xcclxcblxcclxcbiAgICAgICAgICAgICNpdGVtLXRpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgaHIge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMC4ycmVtO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1mb250O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICNjb3N0IHtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwOztcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgICAgIC5jb250ZW50LWdyaWR7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuaXRlbXtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2Nvc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfTtcXHJcXG4gICAgXFxyXFxufTtcXHJcXG5cXHJcXG5cXHJcXG4uYWJvdXRDb250YWluZXJ7XFxyXFxuICAgIC8vYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlOztcXHJcXG5cXHJcXG4gICAgI2Fib3V0VGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBjb2xvcjogJGFib3V0LXRpdGxlO1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgI2Fib3V0VGl0bGU6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgaHIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogMC4ycmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWZvbnQ7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAjYWJvdXRUaXRsZVR3byB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIGxpIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgI2Fib3V0TGFzdFN0YXRlbWVudCB7XFxyXFxuICAgICAgICBjb2xvcjogJGFib3V0LXRpdGxlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWN0Q29udGFpbmVyIHsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMnJlbTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RJbmZvIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzM3ZoO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBmb3JtIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJ1dHRvbkRpdntcXHJcXG4gICAgICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgIC5jb250YWN0Q29weSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtOztcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICBoMyB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHsgXFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMzdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLy9GWFxcclxcblxcclxcbi8qIC5jb250ZW50OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggJGNvc3QtY29sb3IgO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcblxcclxcbn07ICovXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuY29udGVudC1ncmlke1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG4gIH07XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9BYm91dCB1cyBPcGVyYXRvclxyXG5cclxuLy9pbXBvcnRzIFxyXG4gaW1wb3J0IHsgYWJvdXRPYmplY3QgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcblxyXG4vL2Z1bmN0aW9ucyFcclxuXHJcbmZ1bmN0aW9uIG1vZHVsZVRpdGxlIChzdHJpbmcpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gYCR7c3RyaW5nfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbGlzdENyZWF0b3IgKHN0cmluZywgcGFyZW50KSB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7IFxyXG4gICAgbGkuaW5uZXJUZXh0ID0gYCR7c3RyaW5nfWBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsaSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0Q29udGVudCAob2JqZWN0KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGFib3V0VGl0bGVUZXh0LCBcclxuICAgICAgICBhYm91dENvbnRleHQsIFxyXG4gICAgICAgIGFib3V0QXRtb3NwaGVyZSwgXHJcbiAgICAgICAgYWJvdXRGb29kLCBcclxuICAgICAgICBhYm91dFRpdGxlVHdvLCBcclxuICAgICAgICBsYXN0U3RhdGVtZW50LFxyXG4gICAgICAgIGxpc3RPbmUsIGxpc3RUd28sIGxpc3RUaHJlZSwgbGlzdEZvdXIsIGxpc3RGaXZlLFxyXG5cclxuICAgIH0gPSBvYmplY3RcclxuXHJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0Q29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxyXG4gICAgICAgIGFib3V0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFRpdGxlXCIpOyBcclxuICAgICAgICAgICAgYWJvdXRUaXRsZS5pbm5lclRleHQgPSBgJHthYm91dFRpdGxlVGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoSFIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb250ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRDb250ZXh0XCIpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmlubmVyVGV4dCA9IGAke2Fib3V0Q29udGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgYXRtb3NwaGVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGF0bW9zcGhlcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dEF0bW9zcGhlcmVcIik7XHJcbiAgICAgICAgICAgIGF0bW9zcGhlcmUuaW5uZXJUZXh0ID0gYCR7YWJvdXRBdG1vc3BoZXJlfWA7XHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhdG1vc3BoZXJlKTtcclxuXHJcbiAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZm9vZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0Rm9vZFwiKTtcclxuICAgICAgICAgICAgZm9vZC5pbm5lclRleHQgPSBgJHthYm91dEZvb2R9YFxyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgdGl0bGVUd28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFRpdGxlVHdvXCIpO1xyXG4gICAgICAgICAgICB0aXRsZVR3by5pbm5lclRleHQgPSBgJHthYm91dFRpdGxlVHdvfWBcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlVHdvKTtcclxuXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFwiKTsgICAgICAgICAgXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RPbmUsdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RUd28sdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RUaHJlZSx1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdEZvdXIsdWwpXHJcbiAgICAgICAgbGlzdENyZWF0b3IgKGxpc3RGaXZlLHVsKVxyXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVsKVxyXG5cclxuICAgIGNvbnN0IGxhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XHJcbiAgICAgICAgbGFzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0TGFzdFN0YXRlbWVudFwiKTtcclxuICAgICAgICAgICAgbGFzdC5pbm5lclRleHQgPSBgJHtsYXN0U3RhdGVtZW50fWBcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhc3QpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFib3V0ICgpIHtcclxuICAgIG1vZHVsZVRpdGxlKFwiQWJvdXRcIilcclxuICAgIGNyZWF0ZUFib3V0Q29udGVudChhYm91dE9iamVjdCk7XHJcbn07XHJcblxyXG5leHBvcnQge2Rpc3BsYXlBYm91dH07XHJcblxyXG5cclxuXHJcbiIsIlxyXG4vL2ltcG9ydGVkIHRvIGluZGV4LmpzIGFuZCB1c2VkIHdpdGggdGhlIG1lbnUuanMgZnVuY3Rpb25zXHJcbmxldCBtZW51SXRlbXMgPSBbXHJcbiAgICBcclxuICAgIHsgICAvL0hvdCBkb2dcclxuICAgICAgICBpdGVtVGl0bGU6XCJIb3QtRG9nXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGEgc2lkZSBvZiBmcmllc1wiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcIkJ1biwgb25pb25zLCBtdXN0YXJkICYgS2V0Y2h1cCFcIixcclxuICAgICAgICBjb3N0OiBcIiQyLjk5XCJcclxuICAgIH0sXHJcbiAgICB7ICAgLy9CdXJnZXJcclxuICAgICAgICBpdGVtVGl0bGU6XCJCdXJnZXJcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggYSBzaWRlIG9mIGZyaWVzXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwiT25pb25zLCBNYXlvIGFuZCBMZXR0dWNlXCIsXHJcbiAgICAgICAgY29zdDogXCIkMy45OVwiXHJcbiAgICB9LFxyXG4gICAgeyAgIC8vc3RlYWtcclxuICAgICAgICBpdGVtVGl0bGU6XCJTdGVha1wiLFxyXG4gICAgICAgIGl0ZW1TdW0gOlwiV2l0aCBob3QgcG90YXRvZXNcIixcclxuICAgICAgICBpbmdyZWRpYW50czogXCJ0b21hdG9lcyxhbmQgbXVzaHJvb21zXCIsXHJcbiAgICAgICAgY29zdDogXCIkNS45OVwiXHJcbiAgICB9LFxyXG4gICAgeyAgIC8vT21lbGV0dGVcclxuICAgICAgICBpdGVtVGl0bGU6XCJPbWxldHRlXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGEgc2lkZSBzYWxhZFwiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcIkVnZ3MsIGJhY29uIGFuZCBjaGVlc2UhXCIsXHJcbiAgICAgICAgY29zdDogXCIkMi45OVwiXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYWJvdXRPYmplY3QgPSB7XHJcbiAgICBhYm91dFRpdGxlVGV4dDogXCJEUklWRVwiLFxyXG4gICAgYWJvdXRDb250ZXh0OmBJcyBhbiBvdXQtcnVuIGluc3BpcmVkIGRpbmVyLCB3aGljaCBhaW1zIHRvIHByb3ZpZGUgYSByZXRybyBkaW5pbmcgZXhwZXJpZW5jZSBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsIHRob3NlIGxvc3Qgc291bHMsIGp1c3QgcmlkaW5nIHRoZSBuaWdodHMgaGlnaHdheWAsXHJcbiAgICBhYm91dEF0bW9zcGhlcmU6YFdFIHByb3ZpZGUgYSBjaGlsbCBtb29kLCBnb29kIGZvb2QgYW5kIGFyY2FkZSBzdHlsZSBnYW1lcyBvcGVuIGZvciBhbGwgZ3Vlc3RzIHRvIHVzZS5gLFxyXG4gICAgYWJvdXRGb29kOiBgV2Ugc2VydmUgYnVyZ2VycywgaG90ZG9ncywgc3RlYWtzLCBicmVha2Zhc3QgZm9vZCwgY29mZmVlIGFuZCBzbmFja3MgdG8gYWxsIHRob3NlXHJcbiAgICAgICAgICAgICAgICBqdXN0IGxvb2tpbmcgdG8gZ2V0IGEgYnJlYWsgZnJvbSB0aGUgd29ybGQuYCxcclxuICAgIGFib3V0VGl0bGVUd286YFdITyBBUkUgWU9VP2AsXHJcbiAgICBsaXN0T25lOmBBIENvcCBsb29raW5nIHRvIHNvbHZlIHRoYXQgaGFyZCBjYXNlP2AsXHJcbiAgICBsaXN0VHdvOmBBIGd1eSBqdXN0IGluIG5lZWQgb2YgYSBtaXNzaW9uPyBgLFxyXG4gICAgbGlzdFRocmVlOmBBIGdpcmwgd2hvIG5lZWRzIHRvIGdldCBhd2F5IGZyb20gdGhlIHdvcmxkP2AsXHJcbiAgICBsaXN0Rm91cjpgVGVlbmFnZXJzIGxvb2tpbmcgdG8gbWVldC11cCBhd2F5IGZyb20gcHJ5aW5nIGV5ZXM/YCxcclxuICAgIGxpc3RGaXZlOmBBIGxvc3Qgc291bCBpbiBuZWVkIG9mIHNvbWUgZ29vZCBjb21wYW55P2AsXHJcbiAgICBsYXN0U3RhdGVtZW50IDpgQ2h1Y2sgb24gdGhhdCB2aW50YWdlIGNsb3RoaW5nIGFuZCBjb21lIGRvd24gdG8gRFJJVkVgLFxyXG59O1xyXG5cclxuZXhwb3J0IHttZW51SXRlbXMsIGFib3V0T2JqZWN0fTsiLCIvLyBNZW51IE9wZXJhdG9yXHJcblxyXG5pbXBvcnQge21lbnVJdGVtc30gZnJvbSBcIi4vY29uZmlnXCJcclxuICAgIGxldCBtZW51ID0gbWVudUl0ZW1zO1xyXG5cclxuLy8gcGVybSBIVE1MIGVsZW1lbnRcclxuXHJcbmZ1bmN0aW9uIG1vZHVsZVRpdGxlIChzdHJpbmcpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gYCR7c3RyaW5nfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ3JpZENyZWF0ZXIgKCkge1xyXG4gICAgY29uc3QgY29udGVudEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnRHcmlkLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWdyaWRcIik7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEdyaWQpO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0l0ZW1DYXJkIChvYmplY3QpIHtcclxuXHJcbiAgICBjb25zdCB7aXRlbVRpdGxlLCBpdGVtU3VtLCBpbmdyZWRpYW50cyxjb3N0fSA9IG9iamVjdDtcclxuICAgIGNvbnN0IGNvbnRlbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWdyaWRcIilcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIml0ZW1cIilcclxuXHJcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLXRpdGxlXCIpOyBcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IGAke2l0ZW1UaXRsZX1gO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRIUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgICAgICBjYXJkSFIuY2xhc3NMaXN0LmFkZChcImhyXCIpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEhSKTtcclxuXHJcbiAgICBjb25zdCBjYXJkU3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY2FyZFN1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tc3VtXCIpO1xyXG4gICAgICAgICAgICBjYXJkU3VtLmlubmVyVGV4dCA9IGAke2l0ZW1TdW19YDtcclxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFN1bSk7XHJcblxyXG4gICAgY29uc3QgY2FyZEluZ3JlZGlhbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY2FyZEluZ3JlZGlhbnRzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ncmVkaWFudHNcIik7XHJcbiAgICAgICAgICAgIGNhcmRJbmdyZWRpYW50cy5pbm5lclRleHQgPSBgJHtpbmdyZWRpYW50c31gXHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbmdyZWRpYW50cyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhcmRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY2FyZENvc3Quc2V0QXR0cmlidXRlKFwiaWRcIixcImNvc3RcIik7XHJcbiAgICAgICAgICAgIGNhcmRDb3N0LmlubmVyVGV4dCA9IGAke2Nvc3R9YCBcclxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvc3QpO1xyXG5cclxuXHJcbiAgICBjb250ZW50R3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZE1lbnUgKG1lbnUpICB7IFxyXG4gICAgbWVudS5mb3JFYWNoKG9iamVjdCA9PiB7IG5ld0l0ZW1DYXJkKG9iamVjdClcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZW51ICgpIHtcclxuICAgIG1vZHVsZVRpdGxlKFwiTWVudVwiKVxyXG4gICAgZ3JpZENyZWF0ZXIoKTtcclxuICAgIGxvYWRNZW51KG1lbnVJdGVtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtkaXNwbGF5TWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9JbXBvcnRzXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQge21lbnVJdGVtc30gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7ZGlzcGxheU1lbnV9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgZGlzcGxheUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcclxuXHJcbi8vY29uc3RzIGFuZCBsZXRzXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnRcIik7XHJcblxyXG5cclxuLy9GdW5jc1xyXG5mdW5jdGlvbiBtZW51VGFiICgpIHtcclxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbiAgICAgICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICAgICAgZGlzcGxheU1lbnUoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWJvdXRUYWIgKCkge1xyXG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xyXG4gICAgICAgIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgICAgICBkaXNwbGF5QWJvdXQoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29udGFjdFRhYiAoKSB7XHJcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG4gICAgICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJDb250ZW50RGl2KCk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1lcmNoVGFiICgpIHtcclxuICAgIGNvbnN0IG1lcmNoVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXJjaFwiKTtcclxuICAgICAgICBtZXJjaFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1lbnVUYWIoKTtcclxuICAgIGFib3V0VGFiKCk7XHJcbiAgICBjb250YWN0VGFiKCk7XHJcbiAgICBtZXJjaFRhYigpO1xyXG4gICAgLy9kaXNwbGF5QWJvdXQoKTtcclxufVxyXG5cclxuLy9JcyBjYWxsZWQgcHJpb3IgdG8gYWxsIG5ldyBjb250ZW50IGNyZWF0ZWQuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudERpdiAoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=