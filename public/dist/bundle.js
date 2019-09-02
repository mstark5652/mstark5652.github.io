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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* RGB */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt,\nb, u, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhr {\n  border: 2px solid #666; }\n\nbody {\n  background: #fff;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px; }\n\ndiv.modal-dialog-background {\n  -webkit-animation-delay: 0;\n  -webkit-animation-duration: 0.4s;\n  -webkit-animation-name: fadein;\n  -webkit-animation-fill-mode: forwards;\n  /* this prevents the animation from restarting! */\n  -moz-animation-delay: 0;\n  -moz-animation-duration: 0.4s;\n  -moz-animation-name: fadein;\n  -moz-animation-fill-mode: forwards;\n  /* this prevents the animation from restarting! */\n  animation-delay: 0;\n  animation-duration: 0.4s;\n  animation-name: fadein;\n  animation-fill-mode: forwards;\n  /* this prevents the animation from restarting! */\n  background-color: rgba(204, 204, 204, 0.8);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9998; }\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    div.modal-dialog-background {\n      background: rgba(0, 0, 0, 0.4);\n      height: 200%; } }\n\ndiv.modal-dialog-background.hidden {\n  display: none; }\n\ndiv.modal-dialog {\n  background: white;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  -moz-border-radius-bottomleft: 5px;\n  -moz-border-radius-bottomright: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -webkit-border-bottom-left-radius: 5px;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 6px 26px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 6px 26px 0px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 6px 26px 0px rgba(0, 0, 0, 0.75);\n  padding: 0;\n  left: 50%;\n  margin-left: -400px;\n  margin-top: -50px;\n  min-height: 100px;\n  min-width: 800px;\n  position: fixed;\n  top: 35%;\n  width: 800px;\n  z-index: 9999; }\n  div.modal-dialog div.modal-dialog-header {\n    width: 100%;\n    padding: 5px;\n    color: #333; }\n  div.modal-dialog div.inner-wrapper {\n    padding: 18px;\n    padding-bottom: 15px; }\n    div.modal-dialog div.inner-wrapper p {\n      font-family: \"Roboto\", sans-serif; }\n  div.modal-dialog div.buttons {\n    padding: 10px 20px 12px;\n    background-color: #333;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    -moz-border-radius-topleft: 5px;\n    -moz-border-radius-topright: 5px;\n    -moz-border-radius-bottomleft: 5px;\n    -moz-border-radius-bottomright: 5px;\n    -webkit-border-bottom-right-radius: 5px;\n    -webkit-border-bottom-left-radius: 5px;\n    -webkit-border-top-left-radius: 5px;\n    -webkit-border-top-right-radius: 5px; }\n    div.modal-dialog div.buttons button {\n      font-size: 16px;\n      display: inline-block;\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px;\n      -moz-border-radius-topleft: 5px;\n      -moz-border-radius-topright: 5px;\n      -moz-border-radius-bottomleft: 5px;\n      -moz-border-radius-bottomright: 5px;\n      -webkit-border-bottom-right-radius: 5px;\n      -webkit-border-bottom-left-radius: 5px;\n      -webkit-border-top-left-radius: 5px;\n      -webkit-border-top-right-radius: 5px;\n      background-color: #16bac5;\n      color: #fff;\n      margin-top: 20px;\n      margin: 0;\n      float: right; }\n\n@media screen and (max-device-width: 1000px) {\n  div.modal-dialog {\n    margin-top: 0;\n    top: 20px;\n    left: 50%;\n    margin-left: -250px;\n    margin-top: -50px;\n    min-height: 100px;\n    min-width: 500px;\n    position: fixed;\n    top: 35%;\n    width: 500px; }\n    div.modal-dialog button, div.modal-dialog button.submit, div.modal-dialog button.cancel {\n      width: auto;\n      font-size: 15px;\n      padding-left: 1em;\n      padding-right: 1em; }\n  div.buttons button, div.buttons .button, div.buttons input[type=\"submit\"] {\n    font-weight: bold; } }\n\n@media screen and (max-device-width: 480px) {\n  div.modal-dialog {\n    margin-top: 0;\n    top: 20px;\n    left: 50%;\n    margin-left: -150px;\n    margin-top: -50px;\n    min-height: 100px;\n    min-width: 300px;\n    position: fixed;\n    top: 35%;\n    width: 300px; }\n    div.modal-dialog button, div.modal-dialog button.submit, div.modal-dialog button.cancel {\n      width: auto;\n      font-size: 15px;\n      padding-left: 1em;\n      padding-right: 1em; }\n  div.buttons button, div.buttons .button, div.buttons input[type=\"submit\"] {\n    font-weight: bold; } }\n\n::selection {\n  background: #a9fff7;\n  /* WebKit/Blink Browsers */ }\n\n::-moz-selection {\n  background: #a9fff7;\n  /* Gecko Browsers */ }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  padding: 0px;\n  overflow-x: hidden; }\n\n.float-right {\n  float: right; }\n\n.float-left {\n  float: left; }\n\na.clean-link {\n  text-decoration: none;\n  color: #FD7A09; }\n\na.clean-link:visited {\n  text-decoration: none;\n  color: #FD7A09; }\n\na.clean-link:hover {\n  text-decoration: none;\n  color: #4B4A46; }\n\n.section-header {\n  text-align: center; }\n  @media (max-width: 767px) {\n    .section-header {\n      margin-left: 0;\n      margin-right: 0; } }\n  .section-header h2 {\n    padding-top: 5px;\n    margin: 0 0 25px 0; }\n    @media (max-width: 767px) {\n      .section-header h2 {\n        margin-bottom: 15px; } }\n  .section-header p {\n    max-width: 710px;\n    margin: 0 auto 20px; }\n    @media (max-width: 767px) {\n      .section-header p {\n        max-width: 90%; } }\n\n.split-columns {\n  overflow: hidden; }\n\n.split-column {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  max-height: 800px; }\n  @media (max-width: 767px) {\n    .split-column {\n      display: block; } }\n  .split-column .image {\n    padding: 0; }\n    .split-column .image img {\n      width: 100%; }\n  .split-column .texts {\n    flex: 1;\n    align-self: center; }\n    .split-column .texts h2 {\n      margin: 42px 0 25px; }\n      @media (max-width: 1199px) {\n        .split-column .texts h2 {\n          margin-top: 0;\n          margin-bottom: 15px;\n          font-size: 24px; } }\n    .split-column .texts p {\n      margin: 0; }\n      @media (max-width: 991px) {\n        .split-column .texts p {\n          font-size: 14px;\n          line-height: 26px; } }\n    .split-column .texts .texts-inner {\n      padding-left: 37px;\n      width: 540px;\n      max-width: 100%; }\n      @media (max-width: 991px) {\n        .split-column .texts .texts-inner {\n          padding-right: 15px;\n          margin-left: 0;\n          margin-right: 0; } }\n      @media (max-width: 767px) {\n        .split-column .texts .texts-inner {\n          padding: 30px 0;\n          padding-left: 15px; } }\n  .split-column:nth-child(even) .texts .texts-inner {\n    padding-left: 0;\n    padding-right: 37px;\n    float: right; }\n    @media (max-width: 991px) {\n      .split-column:nth-child(even) .texts .texts-inner {\n        padding-right: 5px;\n        padding-left: 5px; } }\n    @media (max-width: 767px) {\n      .split-column:nth-child(even) .texts .texts-inner {\n        float: left; } }\n\n.team {\n  padding: 93px 0 80px; }\n  .team .team_members {\n    padding-top: 5px; }\n\n.member {\n  padding: 15px;\n  text-align: center; }\n  .member .inner {\n    max-width: 263px;\n    margin: 0 auto; }\n    .member .inner .image img {\n      width: auto;\n      height: auto;\n      max-width: 416px; }\n      @media (max-width: 500px) {\n        .member .inner .image img {\n          max-width: 100%; } }\n    .member .inner .texts {\n      padding: 24px 0 20px; }\n      .member .inner .texts h4 {\n        margin: 0 0 10px; }\n      .member .inner .texts h5 {\n        margin: 0; }\n\n.header {\n  background-color: #16bac5;\n  text-align: center;\n  color: #fff;\n  padding: 10px;\n  z-index: 10; }\n  .header .header-overlay {\n    position: absolute;\n    margin: auto; }\n  .header .header-name {\n    font-size: 20px; }\n\nimg.main-profile {\n  max-height: 150px;\n  text-align: center; }\n\nnav {\n  overflow: hidden;\n  z-index: 11;\n  background-color: #555; }\n\nnav .items {\n  margin: auto;\n  max-width: 1400px; }\n\nnav .items a {\n  float: left;\n  display: block;\n  color: #eee;\n  text-align: center;\n  padding: 20px 20px;\n  text-decoration: none;\n  font-size: 17px; }\n  @media (max-width: 991px) {\n    nav .items a {\n      font-size: 14px;\n      padding: 15px 10px; } }\n\nnav .items a:hover {\n  background-color: #aaa;\n  color: #eee; }\n\nnav .items a.active {\n  background-color: #a9fff7;\n  color: #555; }\n\nnav .items .logo {\n  padding: 10px 14px; }\n  nav .items .logo.linkedin {\n    padding-top: 16px;\n    padding-left: 20px;\n    padding-bottom: 6px; }\n  @media (max-width: 991px) {\n    nav .items .logo {\n      padding: 5px 10px; }\n      nav .items .logo.linkedin {\n        padding-top: 9px;\n        padding-left: 20px;\n        padding-bottom: 1px; } }\n\nnav .items a.logo:hover {\n  background-color: #555;\n  color: #eee; }\n\nnav .items .nav-right {\n  float: right; }\n\nnav .items a.name {\n  visibility: hidden;\n  display: none;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear; }\n\nnav .items a.name:hover {\n  background-color: #555;\n  color: #eee; }\n\nnav.sticky a.name {\n  visibility: visible;\n  display: inline;\n  opacity: 1; }\n  @media (max-width: 991px) {\n    nav.sticky a.name {\n      visibility: hidden;\n      display: none;\n      opacity: 0; } }\n\n.content {\n  padding-top: 16px;\n  padding-bottom: 16px; }\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\n.sticky + .content {\n  padding-top: 60px;\n  animation: ease-in-out; }\n\n.anchor {\n  display: block;\n  position: relative;\n  top: -70px;\n  visibility: hidden; }\n\n.content {\n  z-index: 12;\n  max-width: 1400px;\n  margin: auto; }\n\n.home {\n  background-color: #F7D065;\n  width: 100%;\n  height: 100%;\n  z-index: 12; }\n\n.header-name {\n  font-size: 20px; }\n\n.section-title {\n  font-size: 26px;\n  color: #16bac5; }\n\n.section-title::selection {\n  background: #16bac5; }\n\n.section-title::-moz-selection {\n  background: #16bac5; }\n\n.empty-block {\n  height: 200px; }\n\n@media screen and (max-width: 600px) {\n  .empty-block {\n    height: 20px; } }\n\n@media (min-width: 480px) {\n  .small-divide {\n    display: none; } }\n\nfooter {\n  background-color: #eee;\n  text-align: center; }\n  footer .nav {\n    display: table;\n    margin: 0 auto; }\n  footer a {\n    text-decoration: none;\n    color: #FD7A09; }\n    footer a:visited {\n      text-decoration: none;\n      color: #FD7A09; }\n    footer a:hover {\n      text-decoration: none;\n      color: #4B4A46; }\n\n.menu-rights {\n  padding: 35px 0; }\n  .menu-rights p {\n    text-align: center;\n    font-size: 15px;\n    margin: 0; }\n\n.footer-menu {\n  display: table;\n  margin: 0 auto 19px; }\n  .footer-menu li {\n    font-size: 20px;\n    float: left; }\n    @media (max-width: 479px) {\n      .footer-menu li {\n        display: table;\n        float: none;\n        margin: 0 auto; } }\n    @media (max-width: 479px) {\n      .footer-menu li + li {\n        margin-top: 5px; } }\n    .footer-menu li + li:before {\n      content: '\\2022';\n      float: left;\n      padding: 0 13px;\n      line-height: 15px;\n      display: block; }\n      @media (max-width: 600px) {\n        .footer-menu li + li:before {\n          padding: 0 5px; } }\n      @media (max-width: 479px) {\n        .footer-menu li + li:before {\n          display: none; } }\n    .footer-menu li a {\n      padding: 0;\n      float: left; }\n\n.social-links {\n  padding: 43px 0 36px;\n  border-bottom: 1px solid #fff; }\n  .social-links ul {\n    display: table;\n    margin: 0 auto; }\n    .social-links ul li {\n      float: left; }\n      .social-links ul li + li {\n        margin-left: 25px; }\n      .social-links ul li a {\n        width: 48px;\n        height: 48px;\n        font-size: 30px;\n        color: #FD7A09;\n        line-height: 52px;\n        border-radius: 100%;\n        padding: 0; }\n        @media (max-width: 360px) {\n          .social-links ul li a {\n            width: 40px;\n            height: 40px;\n            font-size: 18px;\n            line-height: 40px; } }\n        .social-links ul li a i {\n          margin-left: 2px; }\n\n.pano-container {\n  height: 600px;\n  width: 100%;\n  display: flex;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\nsvg#panolens-view-indicator-container {\n  fill: #fff; }\n  svg#panolens-view-indicator-container .st0 {\n    stroke: #fff; }\n\n.about-container {\n  width: 60%;\n  margin-left: 20%;\n  margin-right: 20%;\n  text-align: center; }\n  .about-container .about-desc {\n    padding: 10px; }\n  @media (max-width: 991px) {\n    .about-container {\n      width: 90%;\n      margin-left: 5%;\n      margin-right: 5%; } }\n\n.projects-container {\n  width: 100%; }\n  .projects-container .section-title {\n    margin-left: 10%;\n    margin-right: 10%;\n    text-align: center; }\n\n.back-drop {\n  background-color: #eee; }\n\n.hack-container {\n  width: 100%; }\n  .hack-container .title {\n    font-size: 26px;\n    color: #333; }\n    @media (max-width: 991px) {\n      .hack-container .title {\n        font-size: 20px; } }\n  .hack-container .content {\n    font-size: 22px; }\n\n.mix-container .title {\n  font-size: 26px;\n  text-align: center;\n  color: #333; }\n  @media (max-width: 991px) {\n    .mix-container .title {\n      font-size: 20px; } }\n  @media (max-width: 767px) {\n    .mix-container .title {\n      width: 100%; } }\n\n.mix-container .mix-list {\n  display: table;\n  margin: 0 auto 19px; }\n  .mix-container .mix-list li {\n    float: left;\n    font-size: 20px; }\n    @media (max-width: 479px) {\n      .mix-container .mix-list li {\n        margin: 0 auto; } }\n    @media (max-width: 479px) {\n      .mix-container .mix-list li + li {\n        margin-top: 0px;\n        margin-left: 10px; } }\n    .mix-container .mix-list li + li:before {\n      content: '\\2022';\n      color: #FD7A09;\n      float: left;\n      padding: 0 13px;\n      line-height: 15px;\n      display: block; }\n      @media (max-width: 600px) {\n        .mix-container .mix-list li + li:before {\n          padding: 0 5px; } }\n      @media (max-width: 479px) {\n        .mix-container .mix-list li + li:before {\n          display: none; } }\n    @media (max-width: 991px) {\n      .mix-container .mix-list li {\n        font-size: 16px; } }\n\n.cbr-container {\n  overflow-y: hidden;\n  padding-top: 35px;\n  position: relative;\n  margin-left: 10%;\n  margin-right: 10%; }\n  @media (max-width: 1199px) {\n    .cbr-container {\n      padding-top: 10px; } }\n  @media (max-width: 767px) {\n    .cbr-container {\n      text-align: center;\n      margin-left: 20px;\n      margin-right: 20px; } }\n  .cbr-container .title {\n    font-size: 26px;\n    color: #333; }\n    @media (max-width: 991px) {\n      .cbr-container .title {\n        font-size: 20px; } }\n  .cbr-container .cbr-logo {\n    margin-top: 100px; }\n    @media (max-width: 767px) {\n      .cbr-container .cbr-logo {\n        margin-top: 10px;\n        max-width: 80%; } }\n  .cbr-container .mobile-img {\n    max-width: 100%; }\n    @media (max-width: 767px) {\n      .cbr-container .mobile-img {\n        max-width: 250px;\n        display: block;\n        margin: 7px auto; } }\n  .cbr-container h2 {\n    margin-top: 22px;\n    margin-bottom: 20px; }\n    @media (max-width: 991px) {\n      .cbr-container h2 {\n        margin: 10px 0; } }\n    @media (max-width: 991px) {\n      .cbr-container h2 {\n        margin-top: 22px; } }\n    @media (max-width: 767px) {\n      .cbr-container h2 {\n        line-height: 1.3; } }\n  .cbr-container p {\n    margin-bottom: 15px; }\n    @media (max-width: 991px) {\n      .cbr-container p {\n        margin-bottom: 5px; } }\n  @media (max-width: 767px) {\n    .cbr-container .downloads-btns {\n      flex-flow: column; } }\n  .cbr-container .dload-link {\n    display: inline-block;\n    margin-right: 20px;\n    margin-bottom: 15px; }\n    .cbr-container .dload-link img {\n      max-width: 200px; }\n    @media (max-width: 991px) {\n      .cbr-container .dload-link img {\n        max-width: 150px; } }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  }

  if (sourceMap && btoa) {
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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function AboutView() {
    return (React.createElement("div", { className: 'about-container' },
        React.createElement("div", { id: 'about', className: 'anchor' }),
        React.createElement("p", { className: 'section-title' }, "About"),
        React.createElement("p", { className: 'about-desc' }, "Experienced engineer skilled in full stack development, natural language processing, and text classification. With a great interest in learning and creating new things."),
        React.createElement("br", null),
        React.createElement("br", null)));
}
exports.AboutView = AboutView;


/***/ }),

/***/ "./src/components/AppPage.tsx":
/*!************************************!*\
  !*** ./src/components/AppPage.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Navigation_1 = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation.tsx");
const Footer_1 = __webpack_require__(/*! ./Footer */ "./src/components/Footer.tsx");
const IndexPage_1 = __webpack_require__(/*! ./IndexPage */ "./src/components/IndexPage.tsx");
// leave for bundle
const style = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
const profile = 'public/dist/' + __webpack_require__(/*! ../img/me.jpg */ "./src/img/me.jpg");
class AppPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log('error', error, info);
    }
    render() {
        if (this.state.hasError) {
            return (React.createElement("p", null, "AppPage has errors."));
        }
        return (React.createElement("main", null,
            React.createElement("div", { className: 'header' },
                React.createElement("p", { className: 'header-name' }, "Michael Stark"),
                React.createElement("br", null),
                React.createElement("p", null, "Software Engineer"),
                React.createElement("br", null),
                React.createElement("img", { className: 'main-profile', src: profile, alt: 'Profile Picture', title: 'Profile Picture' })),
            React.createElement(Navigation_1.Navigation, null),
            React.createElement("div", { className: 'content' },
                React.createElement(IndexPage_1.default, null)),
            React.createElement(Footer_1.Footer, null)));
    }
}
exports.AppPage = AppPage;


/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Footer() {
    return (React.createElement("footer", null,
        React.createElement("div", { id: 'contact', className: 'anchor' }),
        React.createElement("div", { className: 'row m0 social-links' },
            React.createElement("ul", { className: 'nav' },
                React.createElement("li", { className: 'wow fadeInUp', "data-wow-delay": '0.0s' },
                    React.createElement("a", { title: 'GitHub', href: 'https://github.com/mstark5652', target: '_blank' },
                        React.createElement("i", { className: 'fa fa-github' }))),
                React.createElement("li", { className: 'wow fadeInUp', "data-wow-delay": '0.1s' },
                    React.createElement("a", { title: 'Instagram', href: 'https://www.instagram.com/m.stark5652/', target: '_blank' },
                        React.createElement("i", { className: 'fa fa-instagram' }))),
                React.createElement("li", { className: 'wow fadeInUp', "data-wow-delay": '0.2s' },
                    React.createElement("a", { title: 'LinkedIn', href: 'https://www.linkedin.com/in/michaelstark5652', target: '_blank' },
                        React.createElement("i", { className: 'fa fa-linkedin' }))))),
        React.createElement("div", { className: 'menu-rights' },
            React.createElement("ul", { className: 'nav footer-menu' }),
            React.createElement("p", null, "Michael Stark"),
            React.createElement("br", null),
            React.createElement("p", null,
                React.createElement("a", { href: 'mailto:mstark5652@gmail.com', title: 'Email' },
                    React.createElement("i", { className: 'fa fa-envelope' }, "\u00A0\u00A0"),
                    "mstark5652@gmail.com")))));
}
exports.Footer = Footer;


/***/ }),

/***/ "./src/components/IndexPage.tsx":
/*!**************************************!*\
  !*** ./src/components/IndexPage.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const About_1 = __webpack_require__(/*! ./About */ "./src/components/About.tsx");
const Projects_1 = __webpack_require__(/*! ./Projects */ "./src/components/Projects.tsx");
function IndexPage() {
    return (React.createElement("div", { className: 'app-container' },
        React.createElement("br", null),
        React.createElement(About_1.AboutView, null),
        React.createElement(Projects_1.ProjectsView, null)));
}
exports.default = IndexPage;


/***/ }),

/***/ "./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: '' + window.location.hash.replace('#', '').toLowerCase()
        };
    }
    pageState(val) {
        this.setState({
            activePage: val
        });
    }
    render() {
        return (React.createElement("nav", null,
            React.createElement("div", { className: 'items' },
                React.createElement("a", { className: (this.state.activePage == '' || this.state.activePage == 'home') ? 'active' : '', onClick: () => this.pageState('home'), href: '#' }, "Home"),
                React.createElement("a", { className: (this.state.activePage == 'about') ? 'active' : '', onClick: () => this.pageState('about'), href: '#about' }, "About"),
                React.createElement("a", { className: (this.state.activePage == 'projects') ? 'active' : '', onClick: () => this.pageState('projects'), href: '#projects' }, "Projects"),
                React.createElement("a", { className: (this.state.activePage == 'contact') ? 'active' : '', onClick: () => this.pageState('contact'), href: '#contact' }, "Contact"))));
    }
}
exports.Navigation = Navigation;


/***/ }),

/***/ "./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const distPath = 'public/dist/';
const iosAppStore = distPath + __webpack_require__(/*! ../img/iosAppStore.png */ "./src/img/iosAppStore.png");
const droidAppStore = distPath + __webpack_require__(/*! ../img/androidAppStore.png */ "./src/img/androidAppStore.png");
const cbrLogo = distPath + __webpack_require__(/*! ../img/cbr_long_logo.png */ "./src/img/cbr_long_logo.png");
const cbrScreens = distPath + __webpack_require__(/*! ../img/cbr_screens.png */ "./src/img/cbr_screens.png");
const hackGroup = distPath + __webpack_require__(/*! ../img/hackGroup.jpg */ "./src/img/hackGroup.jpg");
const neighborhoodAlexa = distPath + __webpack_require__(/*! ../img/neighborhood_alexa.png */ "./src/img/neighborhood_alexa.png");
const mixologist = distPath + __webpack_require__(/*! ../img/mixologist.jpg */ "./src/img/mixologist.jpg");
function ProjectsView() {
    return (React.createElement("div", { className: 'projects-container' },
        React.createElement("div", { id: 'projects', className: 'anchor' }),
        React.createElement("p", { className: 'section-title' }, "Projects"),
        React.createElement("br", null),
        React.createElement(HackMidwestView, null),
        React.createElement("br", null),
        React.createElement(MixologistView, null),
        React.createElement("br", null),
        React.createElement(CBRView, null),
        React.createElement("br", null),
        React.createElement("br", null)));
}
exports.ProjectsView = ProjectsView;
function HackMidwestView() {
    return (React.createElement("section", { className: 'split-columns back-drop' },
        React.createElement("div", { className: 'hack-container' },
            React.createElement("div", { className: 'row m0 split-column wow fadeIn' },
                React.createElement("div", { className: 'col-sm-6 image text-right' },
                    React.createElement("img", { src: hackGroup, alt: '' })),
                React.createElement("div", { className: 'col-sm-6 texts' },
                    React.createElement("div", { className: 'texts-inner row m0' },
                        React.createElement("p", { className: 'title' }, "2018 HackMidwest Winner!"),
                        React.createElement("p", null)))),
            React.createElement("div", { className: 'row m0 split-column wow fadeIn' },
                React.createElement("div", { className: 'col-sm-6 col-sm-pull-6 texts' },
                    React.createElement("div", { className: 'texts-inner row m0' },
                        React.createElement("p", null, "Welcome to the Neighborhood. A hyper-local, real-time, real-life network and exchange made up of your actual neighbors that rewards \"neighborly\" acts of kindness and brings us all closer together."),
                        React.createElement("p", null,
                            React.createElement("a", { className: 'clean-link', target: '_blank', href: 'https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/', title: 'Hack Midwest Article' }, "Article")))),
                React.createElement("div", { className: 'col-sm-6 col-sm-push-6 image' },
                    React.createElement("img", { src: neighborhoodAlexa, alt: '' }))))));
}
function MixologistView() {
    return (React.createElement("section", { className: 'row team' },
        React.createElement("div", { className: 'container mix-container' },
            React.createElement("div", { className: 'row section-header wow fadeInUp' },
                React.createElement("h2", { className: 'title' }, "Mixologist the Robotic Bartender")),
            React.createElement("div", { className: 'row wow fadeInUp' },
                React.createElement("ul", { className: 'mix-list' },
                    React.createElement("li", null,
                        React.createElement("a", { className: 'clean-link', target: '_blank', href: 'https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/', title: 'Blog Article' }, "Article")),
                    React.createElement("li", null,
                        React.createElement("a", { className: 'clean-link', target: '_blank', href: 'https://github.com/mstark5652/mocktailsmixer', title: 'Github Repo' }, "Github Repo")),
                    React.createElement("li", null,
                        React.createElement("a", { className: 'clean-link', target: '_blank', href: 'https://www.mixologist.ai/', title: 'Product Website' }, "Website")))),
            React.createElement("div", { className: 'row team_members' },
                React.createElement("div", { className: 'col-md-3 col-sm-6 member wow fadeInUp' },
                    React.createElement("div", { className: 'row m0 inner' },
                        React.createElement("div", { className: 'row m0 image' },
                            React.createElement("img", { className: 'mix-image', src: mixologist, alt: '' })),
                        React.createElement("div", { className: 'texts row m0' }))),
                React.createElement("div", { className: 'col-md-3 col-sm-6 member wow fadeInUp' },
                    React.createElement("div", { className: 'row m0 inner' },
                        React.createElement("div", { className: 'row m0 image' }),
                        React.createElement("div", { className: 'texts row m0' }))),
                React.createElement("div", { className: 'col-md-3 col-sm-6 member wow fadeInUp', "data-wow-delay": '0.3s' },
                    React.createElement("div", { className: 'row m0 inner' },
                        React.createElement("div", { className: 'row m0 image' },
                            React.createElement("iframe", { className: 'mix-video', src: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjacobshepherd%2Fvideos%2F10160063700095370%2F&show_text=0&width=300', width: '300', height: '300', scrolling: 'no', frameBorder: '0', allowFullScreen: true })),
                        React.createElement("div", { className: 'texts row m0' }))),
                React.createElement("div", { className: 'col-md-3 col-sm-6 member wow fadeInUp', "data-wow-delay": '0.3s' },
                    React.createElement("div", { className: 'row m0 inner' },
                        React.createElement("div", { className: 'row m0 image' }),
                        React.createElement("div", { className: 'texts row m0' })))))));
}
function CBRView() {
    return (React.createElement("section", { className: 'row back-drop' },
        React.createElement("div", { className: 'cbr-container' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-sm-6 col-sm-pull-6 wow fadeInUp' },
                        React.createElement("img", { src: cbrScreens, alt: '', className: 'mobile-img' })),
                    React.createElement("div", { className: 'col-sm-6 col-sm-push-6 wow fadeIn' },
                        React.createElement("a", { href: 'https://comicbookrealm.com', target: '_blank', title: 'Comic Book Realm Site' },
                            React.createElement("img", { className: 'cbr-logo', src: cbrLogo, alt: 'Comic Book Realm' })),
                        React.createElement("h2", { className: 'title' }, "Comic Book Realm Mobile Apps"),
                        React.createElement("p", null, "Price guide and tracking for all your comic books."),
                        React.createElement("div", { className: 'row m0 downloads-btns' },
                            React.createElement("a", { href: 'https://itunes.apple.com/us/app/comicbookrealm/id1348310066', target: '_blank', className: 'dload-link' },
                                React.createElement("img", { src: iosAppStore, alt: 'CBR App on iOS', title: 'CBR App on iOS' })),
                            React.createElement("a", { href: 'https://play.google.com/store/apps/details?id=com.comicbookrealmgp.cbr', target: '_blank', className: 'dload-link' },
                                React.createElement("img", { src: droidAppStore, alt: 'CBR App on Android', title: 'CBR App on Android' })))))))));
}


/***/ }),

/***/ "./src/img/androidAppStore.png":
/*!*************************************!*\
  !*** ./src/img/androidAppStore.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "daa6c698ba2594a887c2f7ec451cd275.png";

/***/ }),

/***/ "./src/img/cbr_long_logo.png":
/*!***********************************!*\
  !*** ./src/img/cbr_long_logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3c99c1cb2d3e13a173713bccbf15d594.png";

/***/ }),

/***/ "./src/img/cbr_screens.png":
/*!*********************************!*\
  !*** ./src/img/cbr_screens.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a488c94e5f884a645dc270ca60588fc.png";

/***/ }),

/***/ "./src/img/hackGroup.jpg":
/*!*******************************!*\
  !*** ./src/img/hackGroup.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d585ea342b6372c7d03207b1e4ae32f6.jpg";

/***/ }),

/***/ "./src/img/iosAppStore.png":
/*!*********************************!*\
  !*** ./src/img/iosAppStore.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1ed186252076429d96a90128b2aa169e.png";

/***/ }),

/***/ "./src/img/me.jpg":
/*!************************!*\
  !*** ./src/img/me.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "18464a68e5910e7510bcb57af873e87b.jpg";

/***/ }),

/***/ "./src/img/mixologist.jpg":
/*!********************************!*\
  !*** ./src/img/mixologist.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "712def3712451da6e6a8d06811a1e3d3.jpg";

/***/ }),

/***/ "./src/img/neighborhood_alexa.png":
/*!****************************************!*\
  !*** ./src/img/neighborhood_alexa.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "93ad9e11126755c830729513d24418ba.png";

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const AppPage_1 = __webpack_require__(/*! ./components/AppPage */ "./src/components/AppPage.tsx");
ReactDOM.render(React.createElement(AppPage_1.AppPage, null), document.getElementById('main'));


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map