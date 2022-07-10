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
___CSS_LOADER_EXPORT___.push([module.id, ".icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  color: red;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Michroma\", sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #013952;\n  min-height: 3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  padding: 0.5rem;\n}\nnav .titleDiv {\n  align-self: center;\n  color: red;\n  font-size: 1.5rem;\n  text-decoration: underline;\n}\nnav ul {\n  display: flex;\n  flex-direction: row;\n  gap: 2rem;\n  list-style-type: none;\n  align-self: center;\n  justify-content: center;\n}\nnav ul li {\n  list-style: none;\n  display: inline;\n  font-weight: bold;\n}\nnav ul li a {\n  text-decoration: none;\n  color: red;\n  transition: 0.4s;\n}\nnav ul a:hover {\n  text-decoration-color: yellow;\n  color: yellow;\n  text-decoration: underline;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content {\n  border: solid 2px red;\n  width: 60vw;\n  margin: auto;\n  text-align: center;\n  min-height: 80vh;\n  max-height: fit-content;\n  margin-top: 2.5rem;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  transition: 0.4s;\n}\n.content .content-title {\n  color: red;\n  width: fit-content;\n  margin: auto;\n}\n.content .content-grid {\n  animation: fadein 2s;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-auto-rows: 1fr;\n  row-gap: 2rem;\n  padding: 1rem;\n  column-gap: 2rem;\n}\n.content .content-grid .item {\n  min-height: 6rem;\n  max-height: fit-content;\n  min-width: 6rem;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n}\n.content .content-grid .item #item-title {\n  color: yellow;\n}\n.content .content-grid .item hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.content .content-grid .item p {\n  font-size: small;\n  color: yellow;\n  font-weight: bold;\n}\n.content .content-grid .item #cost {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: yellow;\n  font-weight: bold;\n  padding: 0.25rem;\n}\n@media only screen and (max-width: 800px) {\n  .content .content-grid {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  .content .content-grid .item #cost {\n    position: relative;\n    display: block;\n  }\n}\n\n.aboutContainer {\n  height: 100%;\n  width: 100%;\n  animation: fadein 3s;\n}\n.aboutContainer #aboutTitle {\n  font-style: italic;\n  font-weight: bold;\n  color: rgb(160, 59, 255);\n  margin: 1rem auto;\n  font-size: 2rem;\n  transition: 0.4s;\n  width: fit-content;\n}\n.aboutContainer #aboutTitle:hover {\n  transform: scale(1.05);\n  transition: 0.4s;\n  color: yellow;\n}\n.aboutContainer hr {\n  width: 80%;\n  margin: auto;\n  height: 0.2rem;\n  border: red;\n  background-color: red;\n}\n.aboutContainer p {\n  margin-top: 2rem;\n  display: block;\n  color: yellow;\n}\n.aboutContainer #aboutTitleTwo {\n  margin: 1rem 0 1rem 0;\n  color: yellow;\n}\n.aboutContainer li {\n  list-style-type: none;\n  text-align: start;\n  padding: 0.25rem;\n  color: yellow;\n}\n.aboutContainer #aboutLastStatement {\n  color: rgb(160, 59, 255);\n  margin-top: 4rem;\n  font-size: 1.5rem;\n}\n\n.contactContainer {\n  animation: fadein 2s;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 2rem;\n}\n.contactContainer .contactInfo {\n  min-height: 33vh;\n  min-width: 50%;\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.contactContainer .contactInfo form {\n  max-width: 100%;\n}\n.contactContainer .contactInfo form label {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  color: yellow;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo form input {\n  display: block;\n  width: 100%;\n}\n.contactContainer .contactInfo form #textLabel {\n  text-align: start;\n  margin-left: 0.5rem;\n  color: yellow;\n}\n.contactContainer .contactInfo form #messageBox {\n  margin: 0.5rem;\n  resize: none;\n  overflow: scroll;\n  height: 8rem;\n  max-width: 100%;\n}\n.contactContainer .contactInfo form .buttonDiv {\n  margin-left: 0;\n  text-align: start;\n  padding: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy {\n  text-align: start;\n  padding: 0.5rem;\n  min-width: 50%;\n}\n.contactContainer .contactInfo .contactCopy p {\n  color: yellow;\n}\n.contactContainer .contactInfo .contactCopy h3 {\n  color: yellow;\n  font-style: italic;\n  text-decoration: underline;\n}\n.contactContainer .contactInfo .contactCopy .icon {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  margin: 0.5rem;\n}\n.contactContainer .contactInfo .contactCopy .openingHours::before {\n  font: var(--fa-font-solid);\n  content: \"\\f017\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .phoneNumber::before {\n  font: var(--fa-font-solid);\n  content: \"\\f095\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .emailDiv::before {\n  font: var(--fa-font-solid);\n  content: \"\\f0e0\";\n  font-size: 1.25rem;\n}\n.contactContainer .contactInfo .contactCopy .address::before {\n  font: var(--fa-font-solid);\n  content: \"\\f3c5\";\n  font-size: 1.25rem;\n}\n.contactContainer .location {\n  border: 2px solid red;\n  height: 33vh;\n}\n.contactContainer .location #map {\n  width: 100%;\n  height: 100%;\n}\n\n.content:hover {\n  transform: scale(1.05);\n  transition: 0.4s;\n  border: solid 4px yellow;\n  height: fit-content;\n}\n\n@media only screen and (max-width: 600px) {\n  .content-grid {\n    display: flex;\n    flex-direction: column-reverse;\n    flex-wrap: wrap-reverse;\n  }\n  .contactInfo {\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAeA;EACI,qBAAA;EACA,oBAAA;EACA,mCAAA;EACA,UAbO;AAAX;;AAgBA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,mCAtBO;AASX;;AAgBA;EACI,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,kBAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,sBAAA;EAEA,yBAnCQ;EAoCR,gBAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;AAdJ;AAgBI;EACI,kBAAA;EACA,UA1CG;EA2CH,iBAAA;EACA,0BAAA;AAdR;AAkBI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,qBAAA;EACA,kBAAA;EACA,uBAAA;AAhBR;AAmBQ;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;AAjBZ;AAmBY;EACI,qBAAA;EACA,UAhEL;EAiEK,gBAAA;AAjBhB;AAoBQ;EACI,6BApED;EAqEC,aArED;EAsEC,0BAAA;AAlBZ;;AAwBA;EACI;IAAO,UAAA;EApBT;EAqBE;IAAO,UAAA;EAlBT;AACF;AAmBA;EACI,qBAAA;EAEA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,8BAAA;EAEA,aAAA;EACA,gBAAA;AAnBJ;AAsBI;EACI,UA/FQ;EAiGR,kBAAA;EACA,YAAA;AArBR;AAyBI;EACI,oBAAA;EACA,aAAA;EACA,8BAAA;EACA,2BAAA;EACA,mBAAA;EAEA,aAAA;EACA,aAAA;EACA,gBAAA;AAxBR;AA2BQ;EAEI,gBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,8BAAA;AA1BZ;AA4BY;EACI,aAAA;AA1BhB;AA6BY;EACI,UAAA;EACA,YAAA;EACA,cAAA;EACA,WApIL;EAqIK,qBArIL;AA0GX;AA8BY;EACI,gBAAA;EACA,aAAA;EACA,iBAAA;AA5BhB;AA+BY;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,aA/IH;EAgJG,iBAAA;EACA,gBAAA;AA7BhB;AAkCI;EACI;IACI,aAAA;IACA,sBAAA;IACA,eAAA;EAhCV;EAoCc;IACI,kBAAA;IACA,cAAA;EAlClB;AACF;;AA2CA;EAEI,YAAA;EACA,WAAA;EACA,oBAAA;AAzCJ;AA2CI;EACI,kBAAA;EACA,iBAAA;EACA,wBAlLM;EAmLN,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAzCR;AA6CI;EACI,sBAAA;EACA,gBAAA;EACA,aA9LK;AAmJb;AA8CI;EACI,UAAA;EACA,YAAA;EACA,cAAA;EACA,WAxMG;EAyMH,qBAzMG;AA6JX;AA+CI;EACI,gBAAA;EACA,cAAA;EACA,aA5MK;AA+Jb;AAgDI;EACI,qBAAA;EACA,aAjNK;AAmKb;AAiDI;EACI,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAxNK;AAyKb;AAkDI;EACI,wBA3NM;EA4NN,gBAAA;EACA,iBAAA;AAhDR;;AAuDA;EACI,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;AApDJ;AAuDI;EACI,gBAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AArDR;AAuDQ;EACI,eAAA;AArDZ;AAuDY;EACI,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,aA7PH;EA8PG,eAAA;AArDhB;AAwDY;EACI,cAAA;EACA,WAAA;AAtDhB;AAyDY;EACI,iBAAA;EACA,mBAAA;EACA,aAzQH;AAkNb;AA0DY;EACI,cAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;AAxDhB;AA2DY;EAEI,cAAA;EACA,iBAAA;EACA,eAAA;AA1DhB;AAgEQ;EACI,iBAAA;EACA,eAAA;EACA,cAAA;AA9DZ;AAgEY;EACI,aApSH;AAsOb;AAkEY;EACI,aAzSH;EA0SG,kBAAA;EACA,0BAAA;AAhEhB;AAmEY;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;AAjEhB;AAoEY;EACI,0BAAA;EACA,gBAAA;EACA,kBAAA;AAlEhB;AAqEY;EACI,0BAAA;EACA,gBAAA;EACA,kBAAA;AAnEhB;AAsEY;EACI,0BAAA;EACA,gBAAA;EACA,kBAAA;AApEhB;AAuEY;EACI,0BAAA;EACA,gBAAA;EACA,kBAAA;AArEhB;AA2EI;EACI,qBAAA;EACA,YAAA;AAzER;AA2EQ;EACI,WAAA;EACA,YAAA;AAzEZ;;AAkFA;EACI,sBAAA;EACA,gBAAA;EACA,wBAAA;EACA,mBAAA;AA/EJ;;AAmFA;EACI;IACI,aAAA;IACA,8BAAA;IACA,uBAAA;EAhFN;EAmFE;IACI,sBAAA;EAjFN;AACF","sourcesContent":["//import\r\n@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');\r\n\r\n//Variables \r\n$Michroma: 'Michroma', sans-serif;\r\n$nav-color: #013952;\r\n$nav-font: red;\r\n$nav-hover:yellow;\r\n$content-title: red;\r\n$cost-color: yellow;\r\n$about-title: rgb(160, 59, 255);\r\n\r\n\r\n// root seetings \r\n\r\n.icon::before {\r\n    display: inline-block;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    color: $nav-font;\r\n  }\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family:$Michroma;\r\n}\r\n\r\nbody {\r\n    background-image: url(./images/spencer-davis-R_J6KjC68E4-unsplash.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    //border: solid yellow 2px;\r\n    background-color: $nav-color;\r\n    min-height: 3rem;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    padding: 0.5rem;;\r\n   \r\n    .titleDiv {\r\n        align-self: center;        \r\n        color: $nav-font;\r\n        font-size: 1.5rem;\r\n        text-decoration: underline;\r\n            \r\n    };\r\n\r\n    ul{ \r\n        display: flex;\r\n        flex-direction: row;\r\n        gap: 2rem;\r\n        list-style-type: none;\r\n        align-self: center;\r\n        justify-content: center;\r\n        \r\n    \r\n        li {\r\n            list-style: none;\r\n            display: inline;\r\n            font-weight: bold;\r\n\r\n            a {\r\n                text-decoration: none;\r\n                color: $nav-font;\r\n                transition: 0.4s;\r\n            }\r\n        };\r\n        a:hover {\r\n            text-decoration-color: $nav-hover;\r\n            color: $nav-hover;\r\n            text-decoration: underline;\r\n        }\r\n    };\r\n\r\n\r\n}\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n.content{\r\n    border: solid 2px $content-title;\r\n    //position: absolute;\r\n    width: 60vw;\r\n    margin: auto;\r\n    text-align: center;\r\n    min-height: 80vh;\r\n    max-height: fit-content;\r\n    margin-top: 2.5rem;\r\n    background: rgba(0,0,0,0.7);\r\n    //backdrop-filter: blur(16px);\r\n    padding: 1rem;\r\n    transition: 0.4s;\r\n\r\n\r\n    .content-title{\r\n        color: $content-title;\r\n        //border: solid 2px black;\r\n        width: fit-content;\r\n        margin: auto;\r\n    };\r\n\r\n    //grid item styling, only used in the menu.js file. \r\n    .content-grid {\r\n        animation: fadein 2s;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-auto-rows: 1fr;\r\n        //border: 2px solid black;\r\n        row-gap: 2rem;\r\n        padding: 1rem;;\r\n        column-gap: 2rem;\r\n        \r\n\r\n        .item {\r\n            //border: 2px solid black;\r\n            min-height: 6rem;\r\n            max-height: fit-content;\r\n            min-width: 6rem;;\r\n            position: relative;\r\n            background: rgba(0,0,0,0.5);\r\n\r\n            #item-title {\r\n                color: yellow;\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                margin: auto;\r\n                height: 0.2rem;\r\n                border: $nav-font;\r\n                background-color: $nav-font;\r\n            }\r\n\r\n            p {\r\n                font-size: small;\r\n                color: yellow;\r\n                font-weight: bold;\r\n            }\r\n\r\n            #cost {\r\n                position: absolute;\r\n                right: 0;\r\n                bottom: 0;;\r\n                color: $cost-color;\r\n                font-weight: bold;\r\n                padding: 0.25rem;\r\n            }\r\n        }\r\n    };\r\n\r\n    @media only screen and (max-width: 800px) {\r\n        .content-grid{\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n\r\n            .item{\r\n\r\n                #cost {\r\n                    position: relative;\r\n                    display: block;\r\n                }\r\n\r\n            }\r\n        }\r\n      };\r\n    \r\n};\r\n\r\n\r\n.aboutContainer{\r\n    //background: rgba(0,0,0,0.7);\r\n    height: 100%;\r\n    width: 100%;;\r\n    animation: fadein 3s;\r\n\r\n    #aboutTitle {\r\n        font-style: italic;\r\n        font-weight: bold;\r\n        color: $about-title;\r\n        margin: 1rem auto;\r\n        font-size: 2rem;\r\n        transition: 0.4s;\r\n        width: fit-content;\r\n    \r\n    };\r\n\r\n    #aboutTitle:hover {\r\n        transform:scale(1.05);\r\n        transition: 0.4s;\r\n        color: $cost-color;\r\n    };\r\n\r\n    hr {\r\n        width: 80%;\r\n        margin: auto;\r\n        height: 0.2rem;\r\n        border: $nav-font;\r\n        background-color: $nav-font;\r\n    };\r\n\r\n    p {\r\n        margin-top: 2rem;\r\n        display: block;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutTitleTwo {\r\n        margin: 1rem 0 1rem 0;\r\n        color: $cost-color;\r\n    };\r\n\r\n    li {\r\n        list-style-type: none;\r\n        text-align: start;\r\n        padding: 0.25rem;\r\n        color: $cost-color;\r\n    };\r\n\r\n    #aboutLastStatement {\r\n        color: $about-title;\r\n        margin-top: 4rem;\r\n        font-size: 1.5rem;\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n.contactContainer { \r\n    animation: fadein 2s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    row-gap: 2rem;\r\n\r\n\r\n    .contactInfo {\r\n        min-height: 33vh;\r\n        min-width: 50%;\r\n        max-width: 100%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n\r\n        form {\r\n            max-width: 100%;;\r\n\r\n            label {\r\n                display: flex;\r\n                flex-direction: column;\r\n                text-align: start;\r\n                color: $cost-color;\r\n                padding: 0.5rem;\r\n            };\r\n\r\n            input {\r\n                display: block;\r\n                width: 100%;\r\n            }\r\n\r\n            #textLabel {\r\n                text-align: start;\r\n                margin-left:0.5rem;\r\n                color: $cost-color;\r\n            }\r\n\r\n            #messageBox{\r\n                margin: 0.5rem;\r\n                resize: none;\r\n                overflow: scroll;\r\n                height: 8rem;\r\n                max-width: 100%;\r\n            }\r\n\r\n            .buttonDiv{\r\n                //border: 2px solid yellow;;\r\n                margin-left: 0;\r\n                text-align: start;\r\n                padding: 0.5rem;\r\n                \r\n            }\r\n            \r\n        };\r\n\r\n        .contactCopy {\r\n            text-align: start;\r\n            padding: 0.5rem;\r\n            min-width: 50%;\r\n\r\n            p{\r\n                color: $cost-color;\r\n            }\r\n\r\n\r\n            h3 {\r\n                color: $cost-color;\r\n                font-style: italic;\r\n                text-decoration: underline;\r\n            };\r\n\r\n            .icon{\r\n                display: flex;\r\n                align-items: center;\r\n                gap: 0.5rem;\r\n                font-size: 1rem;\r\n                margin: 0.5rem;\r\n            };\r\n\r\n            .openingHours::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f017\";\r\n                font-size: 1.25rem;\r\n            };\r\n\r\n            .phoneNumber::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f095\";\r\n                font-size: 1.25rem\r\n            };\r\n\r\n            .emailDiv::before{\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0e0\";\r\n                font-size: 1.25rem\r\n            }\r\n\r\n            .address::before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f3c5\";\r\n                font-size: 1.25rem;\r\n            }\r\n        }\r\n        \r\n    };\r\n\r\n    .location { \r\n        border: 2px solid red;\r\n        height: 33vh;\r\n\r\n        #map {\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n};\r\n\r\n\r\n//FX\r\n\r\n.content:hover {\r\n    transform: scale(1.05);\r\n    transition: 0.4s;\r\n    border: solid 4px $cost-color ;\r\n    height: fit-content;\r\n\r\n};\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .content-grid{\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n        flex-wrap: wrap-reverse;\r\n    };\r\n\r\n    .contactInfo {\r\n        flex-direction: column;\r\n\r\n    }\r\n  };"],"sourceRoot":""}]);
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
    (0,_about__WEBPACK_IMPORTED_MODULE_3__.displayAbout)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ2tDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOENBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3NCO0FBQ2E7QUFDQTtBQUNFO0FBQ007QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFZO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zcGVuY2VyLWRhdmlzLVJfSjZLakM2OEU0LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWljaHJvbWEmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk1pY2hyb21hXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTM5NTI7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxubmF2IC50aXRsZURpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAycmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbm5hdiB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm5hdiB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZWQ7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5uYXYgdWwgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHllbGxvdztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5jb250ZW50IHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJlZDtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jb250ZW50IC5jb250ZW50LXRpdGxlIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQge1xcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIHJvdy1nYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sdW1uLWdhcDogMnJlbTtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSB7XFxuICBtaW4taGVpZ2h0OiA2cmVtO1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IDZyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQgLml0ZW0gI2l0ZW0tdGl0bGUge1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSBociB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAwLjJyZW07XFxuICBib3JkZXI6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSBwIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jb250ZW50IC5jb250ZW50LWdyaWQgLml0ZW0gI2Nvc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGVudCAuY29udGVudC1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuaXRlbSAjY29zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFuaW1hdGlvbjogZmFkZWluIDNzO1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0VGl0bGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDE2MCwgNTksIDI1NSk7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5hYm91dENvbnRhaW5lciAjYWJvdXRUaXRsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciBociB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAwLjJyZW07XFxuICBib3JkZXI6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmFib3V0Q29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmFib3V0Q29udGFpbmVyICNhYm91dFRpdGxlVHdvIHtcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcbi5hYm91dENvbnRhaW5lciBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uYWJvdXRDb250YWluZXIgI2Fib3V0TGFzdFN0YXRlbWVudCB7XFxuICBjb2xvcjogcmdiKDE2MCwgNTksIDI1NSk7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gIGFuaW1hdGlvbjogZmFkZWluIDJzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDJyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyB7XFxuICBtaW4taGVpZ2h0OiAzM3ZoO1xcbiAgbWluLXdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgY29sb3I6IHllbGxvdztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIGZvcm0gI3RleHRMYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gZm9ybSAjbWVzc2FnZUJveCB7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyBmb3JtIC5idXR0b25EaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1pbi13aWR0aDogNTAlO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IHAge1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSBoMyB7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5vcGVuaW5nSG91cnM6OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5jb250YWN0Q29udGFpbmVyIC5jb250YWN0SW5mbyAuY29udGFjdENvcHkgLnBob25lTnVtYmVyOjpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTVcXFwiO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uY29udGFjdENvbnRhaW5lciAuY29udGFjdEluZm8gLmNvbnRhY3RDb3B5IC5lbWFpbERpdjo6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUwXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmNvbnRhY3RJbmZvIC5jb250YWN0Q29weSAuYWRkcmVzczo6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmM2M1XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmxvY2F0aW9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogMzN2aDtcXG59XFxuLmNvbnRhY3RDb250YWluZXIgLmxvY2F0aW9uICNtYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiBzb2xpZCA0cHggeWVsbG93O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRlbnQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICB9XFxuICAuY29udGFjdEluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFlQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBYk87QUFBWDs7QUFnQkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBdEJPO0FBU1g7O0FBZ0JBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFiSjs7QUFnQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx5QkFuQ1E7RUFvQ1IsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZEo7QUFnQkk7RUFDSSxrQkFBQTtFQUNBLFVBMUNHO0VBMkNILGlCQUFBO0VBQ0EsMEJBQUE7QUFkUjtBQWtCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFoQlI7QUFtQlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpCWjtBQW1CWTtFQUNJLHFCQUFBO0VBQ0EsVUFoRUw7RUFpRUssZ0JBQUE7QUFqQmhCO0FBb0JRO0VBQ0ksNkJBcEVEO0VBcUVDLGFBckVEO0VBc0VDLDBCQUFBO0FBbEJaOztBQXdCQTtFQUNJO0lBQU8sVUFBQTtFQXBCVDtFQXFCRTtJQUFPLFVBQUE7RUFsQlQ7QUFDRjtBQW1CQTtFQUNJLHFCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhC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QUNBLFlBQUE7QUF6RVo7O0FBa0ZBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUEvRUo7O0FBbUZBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSx1QkFBQTtFQWhGTjtFQW1GRTtJQUNJLHNCQUFBO0VBakZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy9pbXBvcnRcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaWNocm9tYSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vL1ZhcmlhYmxlcyBcXHJcXG4kTWljaHJvbWE6ICdNaWNocm9tYScsIHNhbnMtc2VyaWY7XFxyXFxuJG5hdi1jb2xvcjogIzAxMzk1MjtcXHJcXG4kbmF2LWZvbnQ6IHJlZDtcXHJcXG4kbmF2LWhvdmVyOnllbGxvdztcXHJcXG4kY29udGVudC10aXRsZTogcmVkO1xcclxcbiRjb3N0LWNvbG9yOiB5ZWxsb3c7XFxyXFxuJGFib3V0LXRpdGxlOiByZ2IoMTYwLCA1OSwgMjU1KTtcXHJcXG5cXHJcXG5cXHJcXG4vLyByb290IHNlZXRpbmdzIFxcclxcblxcclxcbi5pY29uOjpiZWZvcmUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiRNaWNocm9tYTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zcGVuY2VyLWRhdmlzLVJfSjZLakM2OEU0LXVuc3BsYXNoLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLy9ib3JkZXI6IHNvbGlkIHllbGxvdyAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDNyZW07XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtOztcXHJcXG4gICBcXHJcXG4gICAgLnRpdGxlRGl2IHtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgICAgICAgIFxcclxcbiAgICAgICAgY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHVseyBcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBcXHJcXG4gICAgXFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9O1xcclxcbiAgICAgICAgYTpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAkbmF2LWhvdmVyO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2LWhvdmVyO1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcblxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxyXFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XFxyXFxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcbi5jb250ZW50e1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAkY29udGVudC10aXRsZTtcXHJcXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogODB2aDtcXHJcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xcclxcbiAgICAvL2JhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQtdGl0bGV7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbnRlbnQtdGl0bGU7XFxyXFxuICAgICAgICAvL2JvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAvL2dyaWQgaXRlbSBzdHlsaW5nLCBvbmx5IHVzZWQgaW4gdGhlIG1lbnUuanMgZmlsZS4gXFxyXFxuICAgIC5jb250ZW50LWdyaWQge1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICByb3ctZ2FwOiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTs7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAuaXRlbSB7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNnJlbTs7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAjaXRlbS10aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGhyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAkbmF2LWZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjY29zdCB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDs7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICAuY29udGVudC1ncmlke1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLml0ZW17XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICNjb3N0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH07XFxyXFxuICAgIFxcclxcbn07XFxyXFxuXFxyXFxuXFxyXFxuLmFib3V0Q29udGFpbmVye1xcclxcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTs7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZWluIDNzO1xcclxcblxcclxcbiAgICAjYWJvdXRUaXRsZSB7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiAkYWJvdXQtdGl0bGU7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIFxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAjYWJvdXRUaXRsZTpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICBociB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XFxyXFxuICAgICAgICBib3JkZXI6ICRuYXYtZm9udDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtZm9udDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBjb2xvcjogJGNvc3QtY29sb3I7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgICNhYm91dFRpdGxlVHdvIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAjYWJvdXRMYXN0U3RhdGVtZW50IHtcXHJcXG4gICAgICAgIGNvbG9yOiAkYWJvdXQtdGl0bGU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RDb250YWluZXIgeyBcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHJvdy1nYXA6IDJyZW07XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jb250YWN0SW5mbyB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAzM3ZoO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgIGZvcm0ge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTs7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgI3RleHRMYWJlbCB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgI21lc3NhZ2VCb3h7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYnV0dG9uRGl2e1xcclxcbiAgICAgICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIHllbGxvdzs7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgLmNvbnRhY3RDb3B5IHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3N0LWNvbG9yO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICBoMyB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29zdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5pY29ue1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5vcGVuaW5nSG91cnM6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgICAgIC5waG9uZU51bWJlcjo6YmVmb3Jle1xcclxcbiAgICAgICAgICAgICAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtXFxyXFxuICAgICAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZW1haWxEaXY6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYWRkcmVzczo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNVxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHsgXFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMzdmg7XFxyXFxuXFxyXFxuICAgICAgICAjbWFwIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59O1xcclxcblxcclxcblxcclxcbi8vRlhcXHJcXG5cXHJcXG4uY29udGVudDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIGJvcmRlcjogc29saWQgNHB4ICRjb3N0LWNvbG9yIDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG59O1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmNvbnRlbnQtZ3JpZHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RJbmZvIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH07XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0Fib3V0IHVzIE9wZXJhdG9yXHJcblxyXG4vL2ltcG9ydHMgXHJcbiBpbXBvcnQgeyBhYm91dE9iamVjdCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuXHJcbi8vZnVuY3Rpb25zIVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlVGl0bGUgKHN0cmluZykge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsaXN0Q3JlYXRvciAoc3RyaW5nLCBwYXJlbnQpIHtcclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTsgXHJcbiAgICBsaS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxpKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRDb250ZW50IChvYmplY3QpIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgYWJvdXRUaXRsZVRleHQsIFxyXG4gICAgICAgIGFib3V0Q29udGV4dCwgXHJcbiAgICAgICAgYWJvdXRBdG1vc3BoZXJlLCBcclxuICAgICAgICBhYm91dEZvb2QsIFxyXG4gICAgICAgIGFib3V0VGl0bGVUd28sIFxyXG4gICAgICAgIGxhc3RTdGF0ZW1lbnQsXHJcbiAgICAgICAgbGlzdE9uZSwgbGlzdFR3bywgbGlzdFRocmVlLCBsaXN0Rm91ciwgbGlzdEZpdmUsXHJcblxyXG4gICAgfSA9IG9iamVjdFxyXG5cclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRDb250YWluZXJcIilcclxuXHJcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXHJcbiAgICAgICAgYWJvdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0VGl0bGVcIik7IFxyXG4gICAgICAgICAgICBhYm91dFRpdGxlLmlubmVyVGV4dCA9IGAke2Fib3V0VGl0bGVUZXh0fWA7XHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBIUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChIUik7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dENvbnRleHRcIik7XHJcbiAgICAgICAgICAgIGNvbnRleHQuaW5uZXJUZXh0ID0gYCR7YWJvdXRDb250ZXh0fWA7XHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBhdG1vc3BoZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgYXRtb3NwaGVyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0QXRtb3NwaGVyZVwiKTtcclxuICAgICAgICAgICAgYXRtb3NwaGVyZS5pbm5lclRleHQgPSBgJHthYm91dEF0bW9zcGhlcmV9YDtcclxuICAgICAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGF0bW9zcGhlcmUpO1xyXG5cclxuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBmb29kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRGb29kXCIpO1xyXG4gICAgICAgICAgICBmb29kLmlubmVyVGV4dCA9IGAke2Fib3V0Rm9vZH1gXHJcbiAgICAgICAgICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICB0aXRsZVR3by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0VGl0bGVUd29cIik7XHJcbiAgICAgICAgICAgIHRpdGxlVHdvLmlubmVyVGV4dCA9IGAke2Fib3V0VGl0bGVUd299YFxyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUd28pO1xyXG5cclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbiAgICAgICAgdWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0XCIpOyAgICAgICAgICBcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdE9uZSx1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdFR3byx1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdFRocmVlLHVsKVxyXG4gICAgICAgIGxpc3RDcmVhdG9yIChsaXN0Rm91cix1bClcclxuICAgICAgICBsaXN0Q3JlYXRvciAobGlzdEZpdmUsdWwpXHJcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpXHJcblxyXG4gICAgY29uc3QgbGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICBsYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRMYXN0U3RhdGVtZW50XCIpO1xyXG4gICAgICAgICAgICBsYXN0LmlubmVyVGV4dCA9IGAke2xhc3RTdGF0ZW1lbnR9YFxyXG4gICAgICAgICAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFzdCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWJvdXQgKCkge1xyXG4gICAgbW9kdWxlVGl0bGUoXCJBYm91dFwiKVxyXG4gICAgY3JlYXRlQWJvdXRDb250ZW50KGFib3V0T2JqZWN0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7ZGlzcGxheUFib3V0fTtcclxuXHJcblxyXG5cclxuIiwiXHJcbi8vaW1wb3J0ZWQgdG8gaW5kZXguanMgYW5kIHVzZWQgd2l0aCB0aGUgbWVudS5qcyBmdW5jdGlvbnNcclxubGV0IG1lbnVJdGVtcyA9IFtcclxuICAgIFxyXG4gICAgeyAgIC8vSG90IGRvZ1xyXG4gICAgICAgIGl0ZW1UaXRsZTpcIkhvdC1Eb2dcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggYSBzaWRlIG9mIGZyaWVzXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwiQnVuLCBvbmlvbnMsIG11c3RhcmQgJiBLZXRjaHVwIVwiLFxyXG4gICAgICAgIGNvc3Q6IFwiJDIuOTlcIlxyXG4gICAgfSxcclxuICAgIHsgICAvL0J1cmdlclxyXG4gICAgICAgIGl0ZW1UaXRsZTpcIkJ1cmdlclwiLFxyXG4gICAgICAgIGl0ZW1TdW0gOlwiV2l0aCBhIHNpZGUgb2YgZnJpZXNcIixcclxuICAgICAgICBpbmdyZWRpYW50czogXCJPbmlvbnMsIE1heW8gYW5kIExldHR1Y2VcIixcclxuICAgICAgICBjb3N0OiBcIiQzLjk5XCJcclxuICAgIH0sXHJcbiAgICB7ICAgLy9zdGVha1xyXG4gICAgICAgIGl0ZW1UaXRsZTpcIlN0ZWFrXCIsXHJcbiAgICAgICAgaXRlbVN1bSA6XCJXaXRoIGhvdCBwb3RhdG9lc1wiLFxyXG4gICAgICAgIGluZ3JlZGlhbnRzOiBcInRvbWF0b2VzLGFuZCBtdXNocm9vbXNcIixcclxuICAgICAgICBjb3N0OiBcIiQ1Ljk5XCJcclxuICAgIH0sXHJcbiAgICB7ICAgLy9PbWVsZXR0ZVxyXG4gICAgICAgIGl0ZW1UaXRsZTpcIk9tbGV0dGVcIixcclxuICAgICAgICBpdGVtU3VtIDpcIldpdGggYSBzaWRlIHNhbGFkXCIsXHJcbiAgICAgICAgaW5ncmVkaWFudHM6IFwiRWdncywgYmFjb24gYW5kIGNoZWVzZSFcIixcclxuICAgICAgICBjb3N0OiBcIiQyLjk5XCJcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBhYm91dE9iamVjdCA9IHtcclxuICAgIGFib3V0VGl0bGVUZXh0OiBcIkRSSVZFXCIsXHJcbiAgICBhYm91dENvbnRleHQ6YElzIGFuIG91dC1ydW4gaW5zcGlyZWQgZGluZXIsIHdoaWNoIGFpbXMgdG8gcHJvdmlkZSBhIHJldHJvIGRpbmluZyBleHBlcmllbmNlIGZvciBcclxuICAgICAgICAgICAgICAgICAgICBhbGwgdGhvc2UgbG9zdCBzb3VscywganVzdCByaWRpbmcgdGhlIG5pZ2h0cyBoaWdod2F5YCxcclxuICAgIGFib3V0QXRtb3NwaGVyZTpgV0UgcHJvdmlkZSBhIGNoaWxsIG1vb2QsIGdvb2QgZm9vZCBhbmQgYXJjYWRlIHN0eWxlIGdhbWVzIG9wZW4gZm9yIGFsbCBndWVzdHMgdG8gdXNlLmAsXHJcbiAgICBhYm91dEZvb2Q6IGBXZSBzZXJ2ZSBidXJnZXJzLCBob3Rkb2dzLCBzdGVha3MsIGJyZWFrZmFzdCBmb29kLCBjb2ZmZWUgYW5kIHNuYWNrcyB0byBhbGwgdGhvc2VcclxuICAgICAgICAgICAgICAgIGp1c3QgbG9va2luZyB0byBnZXQgYSBicmVhayBmcm9tIHRoZSB3b3JsZC5gLFxyXG4gICAgYWJvdXRUaXRsZVR3bzpgV0hPIEFSRSBZT1U/YCxcclxuICAgIGxpc3RPbmU6YEEgQ29wIGxvb2tpbmcgdG8gc29sdmUgdGhhdCBoYXJkIGNhc2U/YCxcclxuICAgIGxpc3RUd286YEEgZ3V5IGp1c3QgaW4gbmVlZCBvZiBhIG1pc3Npb24/IGAsXHJcbiAgICBsaXN0VGhyZWU6YEEgZ2lybCB3aG8gbmVlZHMgdG8gZ2V0IGF3YXkgZnJvbSB0aGUgd29ybGQ/YCxcclxuICAgIGxpc3RGb3VyOmBUZWVuYWdlcnMgbG9va2luZyB0byBtZWV0LXVwIGF3YXkgZnJvbSBwcnlpbmcgZXllcz9gLFxyXG4gICAgbGlzdEZpdmU6YEEgbG9zdCBzb3VsIGluIG5lZWQgb2Ygc29tZSBnb29kIGNvbXBhbnk/YCxcclxuICAgIGxhc3RTdGF0ZW1lbnQgOmBDaHVjayBvbiB0aGF0IHZpbnRhZ2UgY2xvdGhpbmcgYW5kIGNvbWUgZG93biB0byBEUklWRWAsXHJcbn07XHJcblxyXG5leHBvcnQge21lbnVJdGVtcywgYWJvdXRPYmplY3R9OyIsIi8vaW1wb3J0c1xyXG5cclxuXHJcbi8vY29uc3RzIGFuZCBsZXRzIFxyXG5cclxuXHJcbi8vZnVuY3Rpb25zIFxyXG5cclxuZnVuY3Rpb24gbW9kdWxlVGl0bGUgKHN0cmluZykge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtzdHJpbmd9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdCAoKSB7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIC8vY29udGFjdENvbnRhaW5lciBjb250YWlucyBhbGwgYXBwZW5kZWQgZWxlbWVudHNcclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy8gdG9wIGhhbGYgb2YgY29udGFjdCBwYWdlXHJcbiAgICAgICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0SW5mb1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xyXG4gICAgICAgIC8vZm9ybSBzZWN0aW9uXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgICAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgLy9sYWJlbHMgICBcclxuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxhYmVsLmlubmVyVGV4dCA9IFwiRnVsbCBOYW1lXCI7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIilcclxuICAgICAgICAgICAgLy9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbnVtYmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIG51bWJlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIG51bWJlckxhYmVsLmlubmVyVGV4dCA9IFwiTnVtYmVyXCI7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG51bWJlckxhYmVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgbnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRlbFwiKTtcclxuICAgICAgICAgICAgbnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJudW1iZXJcIilcclxuICAgICAgICAgICAgLy9udW1iZXJpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKTtcclxuICAgICAgICAgICAgbnVtYmVyTGFiZWwuYXBwZW5kQ2hpbGQobnVtYmVySW5wdXQpXHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxcIik7XHJcbiAgICAgICAgICAgIGVtYWlsTGFiZWwuaW5uZXJUZXh0ID0gXCJFbWFpbFwiO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRlbFwiKTtcclxuICAgICAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAvL2VtYWlsTGFiZWwuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgIGVtYWlsTGFiZWwuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRMYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIHRleHRMYWJlbC5pbm5lclRleHQgPSBcIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlQm94XCIpO1xyXG4gICAgICAgICAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b25EaXZcIilcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU2VuZFwiXHJcbiAgICAgICAgICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgLy8gZm9ybSBpbnB1dHMgZW5kcyFcclxuXHJcbiAgICAvL0NvbnRhY3QgSW5mbyBCZWdpbnMhIFxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGNvbnRhY3RDb3B5LmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xyXG4gICAgICAgIGNvbnRhY3RDb3B5LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29weVwiKTtcclxuICAgICAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0Q29weSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgY29weVRpdGxlLmlubmVyVGV4dCA9IFwiSU5GT1wiXHJcbiAgICAgICAgICAgIGNvbnRhY3RDb3B5LmFwcGVuZENoaWxkKGNvcHlUaXRsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgb3BlbmluZ0hvdXJzLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgICAgICAgICAgIG9wZW5pbmdIb3Vycy5jbGFzc0xpc3QuYWRkKFwib3BlbmluZ0hvdXJzXCIpXHJcbiAgICAgICAgICAgIGNvbnRhY3RDb3B5LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vycyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgb3BlblRleHQuaW5uZXJUZXh0ID0gXCI2OjAwYW0gdGlsbCAxMjowMHBtXCJcclxuICAgICAgICAgICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5UZXh0KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJwaG9uZU51bWJlclwiKVxyXG4gICAgICAgICAgICBjb250YWN0Q29weS5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgIHBob25lVGV4dC5pbm5lclRleHQgPSBcIjAxMjM0NTY3ODlcIlxyXG4gICAgICAgICAgICBwaG9uZU51bWJlci5hcHBlbmRDaGlsZChwaG9uZVRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgICAgICAgICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoXCJlbWFpbERpdlwiKVxyXG4gICAgICAgICAgICBjb250YWN0Q29weS5hcHBlbmRDaGlsZChlbWFpbERpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgIGVtYWlsVGV4dC5pbm5lclRleHQgPSBcIkRyaXZlQGZha2UuY29tXCJcclxuICAgICAgICAgICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZChcImljb25cIilcclxuICAgICAgICAgICAgYWRkcmVzc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKVxyXG4gICAgICAgICAgICBjb250YWN0Q29weS5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICBhZGRyZXNzVGV4dC5pbm5lclRleHQgPSBcIjc0OCBTVyA0dGggQXZlIE1pYW1pLCBGbG9yaWRhXCJcclxuICAgICAgICAgICAgYWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChhZGRyZXNzVGV4dCk7XHJcbiAgICAgICAgLy9jb250YWN0IGluZm9cclxuXHJcbiAgICBcclxuICAgIC8vY29udGFpbnMgR29vZ2xlIG1hcHMgaW4gSUZyYW1lcy4gXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xyXG4gICAgICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICAgICAgbWFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFwXCIpO1xyXG4gICAgICAgICAgICBtYXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzU5My4xMTk0OTIxOTU3ODEzITJkLTgwLjIwMjk1NDg4NDYzMzc0ITNkMjUuNzY2NjE2NDE0Njg0OTYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg4ZDliNjhmYTg3ODhkMDElM0EweDMyZjNkN2U5YWVjOGMyZmEhMnM3NDglMjBTVyUyMDR0aCUyMEF2ZSUyQyUyME1pYW1pJTJDJTIwRkwlMjAzMzEzMCUyQyUyMFVTQSE1ZTAhM20yITFzZW4hMnN1ayE0djE2NTc0Nzc3ODcyODAhNW0yITFzZW4hMnN1a1wiKVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChtYXApXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udGFjdH07IiwiLy8gTWVudSBPcGVyYXRvclxyXG5cclxuaW1wb3J0IHttZW51SXRlbXN9IGZyb20gXCIuL2NvbmZpZ1wiXHJcbiAgICBcclxuXHJcbi8vIHBlcm0gSFRNTCBlbGVtZW50XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVUaXRsZSAoc3RyaW5nKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10aXRsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IGAke3N0cmluZ31gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdyaWRDcmVhdGVyICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50R3JpZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1ncmlkXCIpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRHcmlkKTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBuZXdJdGVtQ2FyZCAob2JqZWN0KSB7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1UaXRsZSwgaXRlbVN1bSwgaW5ncmVkaWFudHMsY29zdH0gPSBvYmplY3Q7XHJcbiAgICBjb25zdCBjb250ZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ncmlkXCIpXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpXHJcblxyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS10aXRsZVwiKTsgXHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSBgJHtpdGVtVGl0bGV9YDtcclxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgY2FyZEhSLmNsYXNzTGlzdC5hZGQoXCJoclwiKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRIUik7XHJcblxyXG4gICAgY29uc3QgY2FyZFN1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNhcmRTdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLXN1bVwiKTtcclxuICAgICAgICAgICAgY2FyZFN1bS5pbm5lclRleHQgPSBgJHtpdGVtU3VtfWA7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTdW0pO1xyXG5cclxuICAgIGNvbnN0IGNhcmRJbmdyZWRpYW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNhcmRJbmdyZWRpYW50cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZ3JlZGlhbnRzXCIpO1xyXG4gICAgICAgICAgICBjYXJkSW5ncmVkaWFudHMuaW5uZXJUZXh0ID0gYCR7aW5ncmVkaWFudHN9YFxyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW5ncmVkaWFudHMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYXJkQ29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNhcmRDb3N0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb3N0XCIpO1xyXG4gICAgICAgICAgICBjYXJkQ29zdC5pbm5lclRleHQgPSBgJHtjb3N0fWAgXHJcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb3N0KTtcclxuXHJcblxyXG4gICAgY29udGVudEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51IChtZW51KSAgeyBcclxuICAgIG1lbnUuZm9yRWFjaChvYmplY3QgPT4geyBuZXdJdGVtQ2FyZChvYmplY3QpXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TWVudSAoKSB7XHJcbiAgICBtb2R1bGVUaXRsZShcIk1lbnVcIilcclxuICAgIGdyaWRDcmVhdGVyKCk7XHJcbiAgICBsb2FkTWVudShtZW51SXRlbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7ZGlzcGxheU1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0ltcG9ydHNcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7bWVudUl0ZW1zfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtkaXNwbGF5TWVudX0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQge2Rpc3BsYXlBYm91dH0gZnJvbSBcIi4vYWJvdXRcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG4vL2NvbnN0cyBhbmQgbGV0c1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250ZW50XCIpO1xyXG5cclxuXHJcbi8vRnVuY3NcclxuZnVuY3Rpb24gbWVudVRhYiAoKSB7XHJcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG4gICAgICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJDb250ZW50RGl2KCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlNZW51KCk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFib3V0VGFiICgpIHtcclxuICAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcclxuICAgICAgICBhYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckNvbnRlbnREaXYoKTtcclxuICAgICAgICAgICAgZGlzcGxheUFib3V0KCk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RUYWIgKCkge1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuICAgICAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQ29udGVudERpdigpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udGFjdCgpO1xyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBtZXJjaFRhYiAoKSB7XHJcbiAgICBjb25zdCBtZXJjaFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVyY2hcIik7XHJcbiAgICAgICAgbWVyY2hUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJDb250ZW50RGl2KCk7XHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtZW51VGFiKCk7XHJcbiAgICBhYm91dFRhYigpO1xyXG4gICAgY29udGFjdFRhYigpO1xyXG4gICAgbWVyY2hUYWIoKTtcclxuICAgIGRpc3BsYXlBYm91dCgpO1xyXG59XHJcblxyXG4vL0lzIGNhbGxlZCBwcmlvciB0byBhbGwgbmV3IGNvbnRlbnQgY3JlYXRlZC5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50RGl2ICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxufTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==