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

/***/ "./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class About extends React.Component {
    render() {
        return (React.createElement("div", { className: "container" }));
    }
}
exports.About = About;


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
const style = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
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
        console.log("error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return React.createElement("p", null, "AppPage has errors.");
        }
        return (React.createElement("main", null,
            React.createElement("div", { className: "header" },
                React.createElement("h2", null, "Michael Stark"),
                React.createElement("br", null),
                React.createElement("p", null, "Software Engineer")),
            React.createElement(Navigation_1.Navigation, null),
            React.createElement("div", { className: "content" }, this.props.children)));
    }
}
exports.AppPage = AppPage;


/***/ }),

/***/ "./src/components/BaseComponents.tsx":
/*!*******************************************!*\
  !*** ./src/components/BaseComponents.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
class Layout extends React.Component {
    render() {
        return (React.createElement("div", { className: "app-container" },
            React.createElement("div", { className: "app-content" }, this.props.children)));
    }
}
exports.Layout = Layout;
// Error Pages
class NotFoundPage extends React.Component {
    render() {
        return (React.createElement("div", { className: "not-found" },
            React.createElement("h2", null, "404"),
            React.createElement("h4", null, "Page not found!"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Return home")));
    }
}
exports.NotFoundPage = NotFoundPage;
class ErrorPage extends React.Component {
    render() {
        return (React.createElement("div", { className: "error-page" },
            React.createElement("h4", null, "Something went wrong! Please try again later."),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Return home")));
    }
}
exports.ErrorPage = ErrorPage;


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
class IndexPage extends React.Component {
    render() {
        return (React.createElement("div", { className: "container" }));
    }
}
exports.IndexPage = IndexPage;


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
const githubLogo = "public/dist/" + __webpack_require__(/*! ../img/github.svg */ "./src/img/github.svg");
class Navigation extends React.Component {
    componentDidMount() {
        window.onscroll = function () { stickyNav(); };
        let navbar = document.getElementById("navbar");
        let sticky = navbar.offsetTop;
        function stickyNav() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            }
            else {
                navbar.classList.remove("sticky");
            }
        }
    }
    render() {
        return (React.createElement("div", { id: "navbar" },
            React.createElement("a", { className: "active", href: "javascript:void(0)" }, "Home"),
            React.createElement("a", { href: "/about" }, "About"),
            React.createElement("a", { className: "nav-right logo", href: "https://github.com/mstark5652" },
                React.createElement("img", { src: githubLogo, alt: "Github logo" })),
            React.createElement("a", { className: "nav-right name", href: "#" }, "Michael Stark")));
    }
}
exports.Navigation = Navigation;


/***/ }),

/***/ "./src/components/SiteRouter.tsx":
/*!***************************************!*\
  !*** ./src/components/SiteRouter.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const IndexPage_1 = __webpack_require__(/*! ./IndexPage */ "./src/components/IndexPage.tsx");
const About_1 = __webpack_require__(/*! ./About */ "./src/components/About.tsx");
const BaseComponents_1 = __webpack_require__(/*! ./BaseComponents */ "./src/components/BaseComponents.tsx");
class SiteRouter extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: IndexPage_1.IndexPage }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/index.html", component: IndexPage_1.IndexPage }),
            React.createElement(react_router_dom_1.Route, { path: "/about", component: About_1.About }),
            React.createElement(react_router_dom_1.Route, { path: "*", component: BaseComponents_1.NotFoundPage })));
    }
}
exports.SiteRouter = SiteRouter;


/***/ }),

/***/ "./src/img/github.svg":
/*!****************************!*\
  !*** ./src/img/github.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/418d2800f73da34ff0d5fe636f021f4e.svg";

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
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const SiteRouter_1 = __webpack_require__(/*! ./components/SiteRouter */ "./src/components/SiteRouter.tsx");
const AppPage_1 = __webpack_require__(/*! ./components/AppPage */ "./src/components/AppPage.tsx");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(AppPage_1.AppPage, null,
        React.createElement(SiteRouter_1.SiteRouter, null))), document.getElementById("main"));


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

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

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map