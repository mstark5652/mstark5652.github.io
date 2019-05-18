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
class AboutView extends React.Component {
    render() {
        return (React.createElement("div", { className: "about-container" },
            React.createElement("div", { id: "about", className: "anchor" }),
            React.createElement("p", { className: "section-title" }, "About"),
            React.createElement("p", { className: "about-desc" }, "Experienced Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in mobile, nlp, and text classification, with a great interest in learning/creating new things. Strong engineering professional with a Bachelor of Science (BS) focused in Computer Science from University of Central Missouri."),
            React.createElement("br", null),
            React.createElement("br", null)));
    }
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
const Lens_1 = __webpack_require__(/*! ./Lens */ "./src/components/Lens.tsx");
// leave for bundle
const style = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
const pano = "public/dist/" + __webpack_require__(/*! ../img/pano_mountain.jpg */ "./src/img/pano_mountain.jpg"); //"https://s3.us-east-2.amazonaws.com/static-serving/pano_mountain.jpg"
const helper_1 = __webpack_require__(/*! ../helper */ "./src/helper.ts");
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
            return (React.createElement("p", null, "AppPage has errors."));
        }
        return (React.createElement("main", null,
            React.createElement("div", { className: "header" },
                React.createElement(Lens_1.Lens, { src: pano, infospots: helper_1.SPOTS })),
            React.createElement(Navigation_1.Navigation, null),
            React.createElement("div", { className: "content" }, this.props.children),
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
class Footer extends React.Component {
    render() {
        return (React.createElement("footer", null,
            React.createElement("div", { id: "contact", className: "anchor" }),
            React.createElement("div", { className: "row m0 social-links" },
                React.createElement("ul", { className: "nav" },
                    React.createElement("li", { className: "wow fadeInUp", "data-wow-delay": "0.0s" },
                        React.createElement("a", { title: "GitHub", href: "https://github.com/mstark5652", target: "_blank" },
                            React.createElement("i", { className: "fa fa-github" }))),
                    React.createElement("li", { className: "wow fadeInUp", "data-wow-delay": "0.1s" },
                        React.createElement("a", { title: "Instagram", href: "https://www.instagram.com/m.stark5652/", target: "_blank" },
                            React.createElement("i", { className: "fa fa-instagram" }))),
                    React.createElement("li", { className: "wow fadeInUp", "data-wow-delay": "0.2s" },
                        React.createElement("a", { title: "LinkedIn", href: "https://www.linkedin.com/in/michaelstark5652", target: "_blank" },
                            React.createElement("i", { className: "fa fa-linkedin" }))))),
            React.createElement("div", { className: "menu-rights" },
                React.createElement("ul", { className: "nav footer-menu" }),
                React.createElement("p", null, "Michael Stark"),
                React.createElement("br", null),
                React.createElement("p", null,
                    React.createElement("a", { href: "mailto:mstark5652@gmail.com", title: "Email" },
                        React.createElement("i", { className: "fa fa-envelope" }, "\u00A0\u00A0"),
                        "mstark5652@gmail.com")))));
    }
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
class IndexPage extends React.Component {
    render() {
        return (React.createElement("div", { className: "app-container" },
            React.createElement("br", null),
            React.createElement(About_1.AboutView, null),
            React.createElement(Projects_1.ProjectsView, null)));
    }
}
exports.IndexPage = IndexPage;


/***/ }),

/***/ "./src/components/Lens.tsx":
/*!*********************************!*\
  !*** ./src/components/Lens.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const helper_1 = __webpack_require__(/*! ../helper */ "./src/helper.ts");
const Waypoint_1 = __webpack_require__(/*! ../models/Waypoint */ "./src/models/Waypoint.ts");
const Infospot_1 = __webpack_require__(/*! ../models/Infospot */ "./src/models/Infospot.ts");
class Lens extends React.Component {
    constructor(props) {
        super(props);
        /** Private Methods */
        this.cleanUpPanolens = () => {
            if (this.panolens) {
                this.panolens.dispose();
                this.panoViewer.remove(this.panolens);
                this.panolens = undefined;
                delete this.panolens;
            }
        };
        this.enableControls = () => {
            if (helper_1.IS_MOBILE) {
                this.panoViewer.enableControl(PANOLENS.Controls.DEVICEORIENTATION);
            }
            else {
                this.panoViewer.enableControl(PANOLENS.Controls.ORBIT);
            }
        };
        this.changePosition = (event) => {
            if (event.detail) {
                let id = event.detail.id;
                let pos = event.detail.position;
                this.state.infospots.forEach((spot) => {
                    if (spot.spotId == id) {
                        spot.position.copy(pos);
                    }
                });
            }
        };
        this.setupViewer = () => {
            if (!this.panoViewer) {
                this.panoViewer = new PANOLENS.Viewer({
                    container: document.querySelector(".pano-container"),
                    // camera
                    controlBar: true,
                    controlButtons: ['video'],
                    horizontalView: true,
                    polarModifier: 1,
                    viewIndicator: true,
                    indicatorSize: 50,
                    enableReticle: false,
                    dwellTime: 1500,
                    autoReticleSelect: true,
                    cameraFov: this.props.cameraFov || 90,
                    autoHideControlBar: false,
                    autoHideInfospot: false,
                    output: 'console',
                });
                this.panoViewer.OrbitControls.noZoom = this.props.noZoom || true;
            }
        };
        this.removeInfospots = (infospots) => {
            if (this.panolens) {
                const scope = this;
                infospots.forEach((item) => {
                    scope.panolens.remove(item);
                });
            }
        };
        this.loadinfospots = () => {
            this.removeInfospots(this.state.infospots || []);
            const scope = this;
            const spots = this.props.infospots || [];
            const newInfospots = [];
            this.setState({
                infospots: []
            });
            const SCALE_FACTOR = 1.0;
            spots.forEach((item) => {
                const spot = new PANOLENS.Infospot(item.scale || 300, item.imageSrc, true, SCALE_FACTOR, item.center);
                spot.position.copy(item.position);
                spot.spotId = item.id;
                if (item.hoverText) {
                    spot.setText(item.hoverText);
                }
                if (item instanceof Infospot_1.Infospot) {
                    spot.addEventListener('infospot-modal-appear', (event) => {
                        item.infospotSelected();
                        // Track 'infospot-modal-appear:' + item.id
                    });
                    if (item.hasInitialFocus) {
                        setTimeout(() => {
                            spot.focus(0); // 0 duration so camera doesn't fling
                            // _this.panoViewer.tweenControlCenter(spot.position, 0);
                        }, 200);
                    }
                }
                if (item instanceof Waypoint_1.Waypoint) {
                    spot.addEventListener('infospot-click', (event) => {
                        item.waypointSelected();
                        // Track 'waypoint-selected:' + item.id
                    });
                }
                spot.addEventListener('infospot-modal-dismiss', (event) => {
                    // Track 'infospot-modal-dismiss:' + item.id
                });
                newInfospots.push(spot);
                scope.panolens.add(spot);
            });
            this.setState({
                infospots: newInfospots,
            });
        };
        if (!this.props || !this.props.src) {
            throw new Error("Lens requires an image source passed through via props.");
        }
        this.state = {
            infospots: []
        };
    }
    /** Lifecycle Methods */
    componentDidMount() {
        this.setupViewer();
        this.cleanUpPanolens();
        this.panolens = new PANOLENS.ImagePanorama(this.props.src);
        this.panoViewer.add(this.panolens);
        this.panoViewer.setPanorama(this.panolens);
        this.enableControls();
        this.loadinfospots();
        window.addEventListener("infospot-update", this.changePosition);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.src !== nextProps.src);
    }
    componentDidUpdate(prevProps, nextProps) {
        this.setupViewer();
        if (this.props.src !== prevProps.src) {
            this.cleanUpPanolens();
            this.panolens = new PANOLENS.ImagePanorama(this.props.src);
            this.panoViewer.add(this.panolens);
            this.panoViewer.setPanorama(this.panolens);
            this.enableControls();
        }
        this.loadinfospots();
    }
    componentWillUnmount() {
        window.removeEventListener("infospot-update", this.changePosition);
        this.cleanUpPanolens();
        if (this.panoViewer) {
            this.panoViewer.destory();
            this.panoViewer = undefined;
            delete this.panoViewer;
        }
    }
    render() {
        return (React.createElement("div", { className: "pano-container" }));
    }
}
exports.Lens = Lens;


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
            activePage: "" + window.location.hash.replace('#', '').toLowerCase()
        };
    }
    pageState(val) {
        this.setState({
            activePage: val
        });
    }
    render() {
        return (React.createElement("div", { id: "navbar" },
            React.createElement("a", { className: (this.state.activePage == "" || this.state.activePage == "home") ? "active" : "", onClick: () => this.pageState("home"), href: "#" }, "Home"),
            React.createElement("a", { className: (this.state.activePage == "about") ? "active" : "", onClick: () => this.pageState("about"), href: "#about" }, "About"),
            React.createElement("a", { className: (this.state.activePage == "projects") ? "active" : "", onClick: () => this.pageState("projects"), href: "#projects" }, "Projects"),
            React.createElement("a", { className: (this.state.activePage == "contact") ? "active" : "", onClick: () => this.pageState("contact"), href: "#contact" }, "Contact")));
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
const distPath = "public/dist/";
const iosAppStore = distPath + __webpack_require__(/*! ../img/iosAppStore.png */ "./src/img/iosAppStore.png");
const droidAppStore = distPath + __webpack_require__(/*! ../img/androidAppStore.png */ "./src/img/androidAppStore.png");
const cbrLogo = distPath + __webpack_require__(/*! ../img/cbr_long_logo.png */ "./src/img/cbr_long_logo.png");
const cbrScreens = distPath + __webpack_require__(/*! ../img/cbr_screens.png */ "./src/img/cbr_screens.png");
const hackGroup = distPath + __webpack_require__(/*! ../img/hackGroup.jpg */ "./src/img/hackGroup.jpg");
const neighborhoodAlexa = distPath + __webpack_require__(/*! ../img/neighborhood_alexa.png */ "./src/img/neighborhood_alexa.png");
const mixologist = distPath + __webpack_require__(/*! ../img/mixologist.jpg */ "./src/img/mixologist.jpg");
class ProjectsView extends React.Component {
    render() {
        return (React.createElement("div", { className: "projects-container" },
            React.createElement("div", { id: "projects", className: "anchor" }),
            React.createElement("p", { className: "section-title" }, "Projects"),
            React.createElement("br", null),
            React.createElement(HackMidwestView, null),
            React.createElement("br", null),
            React.createElement(MixologistView, null),
            React.createElement("br", null),
            React.createElement(CBRView, null),
            React.createElement("br", null),
            React.createElement("br", null)));
    }
}
exports.ProjectsView = ProjectsView;
class HackMidwestView extends React.Component {
    render() {
        return (React.createElement("section", { className: "split-columns back-drop" },
            React.createElement("div", { className: "hack-container" },
                React.createElement("div", { className: "row m0 split-column wow fadeIn" },
                    React.createElement("div", { className: "col-sm-6 image text-right" },
                        React.createElement("img", { src: hackGroup, alt: "" })),
                    React.createElement("div", { className: "col-sm-6 texts" },
                        React.createElement("div", { className: "texts-inner row m0" },
                            React.createElement("p", { className: "title" }, "2018 HackMidwest Winner!"),
                            React.createElement("p", null)))),
                React.createElement("div", { className: "row m0 split-column wow fadeIn" },
                    React.createElement("div", { className: "col-sm-6 col-sm-pull-6 texts" },
                        React.createElement("div", { className: "texts-inner row m0" },
                            React.createElement("p", null, "Welcome to the Neighborhood. A hyper-local, real-time, real-life network and exchange made up of your actual neighbors that rewards \"neighborly\" acts of kindness and brings us all closer together."),
                            React.createElement("p", null,
                                React.createElement("a", { className: "clean-link", target: "_blank", href: "https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/", title: "Hack Midwest Article" }, "Article")))),
                    React.createElement("div", { className: "col-sm-6 col-sm-push-6 image" },
                        React.createElement("img", { src: neighborhoodAlexa, alt: "" }))))));
    }
}
class MixologistView extends React.Component {
    render() {
        return (React.createElement("section", { className: "row team" },
            React.createElement("div", { className: "container mix-container" },
                React.createElement("div", { className: "row section-header wow fadeInUp" },
                    React.createElement("h2", { className: "title" }, "Mixologist the Robotic Bartender")),
                React.createElement("div", { className: "row wow fadeInUp" },
                    React.createElement("ul", { className: "mix-list" },
                        React.createElement("li", null,
                            React.createElement("a", { className: "clean-link", target: "_blank", href: "https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/", title: "Blog Article" }, "Article")),
                        React.createElement("li", null,
                            React.createElement("a", { className: "clean-link", target: "_blank", href: "https://github.com/mstark5652/mocktailsmixer", title: "Github Repo" }, "Github Repo")),
                        React.createElement("li", null,
                            React.createElement("a", { className: "clean-link", target: "_blank", href: "https://www.mixologist.ai/", title: "Product Website" }, "Website")))),
                React.createElement("div", { className: "row team_members" },
                    React.createElement("div", { className: "col-md-3 col-sm-6 member wow fadeInUp" },
                        React.createElement("div", { className: "row m0 inner" },
                            React.createElement("div", { className: "row m0 image" },
                                React.createElement("img", { className: "mix-image", src: mixologist, alt: "" })),
                            React.createElement("div", { className: "texts row m0" }))),
                    React.createElement("div", { className: "col-md-3 col-sm-6 member wow fadeInUp" },
                        React.createElement("div", { className: "row m0 inner" },
                            React.createElement("div", { className: "row m0 image" }),
                            React.createElement("div", { className: "texts row m0" }))),
                    React.createElement("div", { className: "col-md-3 col-sm-6 member wow fadeInUp", "data-wow-delay": "0.3s" },
                        React.createElement("div", { className: "row m0 inner" },
                            React.createElement("div", { className: "row m0 image" },
                                React.createElement("iframe", { className: "mix-video", src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjacobshepherd%2Fvideos%2F10160063700095370%2F&show_text=0&width=300", width: "300", height: "300", scrolling: "no", frameBorder: "0", allowFullScreen: true })),
                            React.createElement("div", { className: "texts row m0" }))),
                    React.createElement("div", { className: "col-md-3 col-sm-6 member wow fadeInUp", "data-wow-delay": "0.3s" },
                        React.createElement("div", { className: "row m0 inner" },
                            React.createElement("div", { className: "row m0 image" }),
                            React.createElement("div", { className: "texts row m0" })))))));
    }
}
class CBRView extends React.Component {
    render() {
        return (React.createElement("section", { className: "row back-drop" },
            React.createElement("div", { className: "cbr-container" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6 col-sm-pull-6 wow fadeInUp" },
                            React.createElement("img", { src: cbrScreens, alt: "", className: "mobile-img" })),
                        React.createElement("div", { className: "col-sm-6 col-sm-push-6 wow fadeIn" },
                            React.createElement("a", { href: "https://comicbookrealm.com", target: "_blank", title: "Comic Book Realm Site" },
                                React.createElement("img", { className: "cbr-logo", src: cbrLogo, alt: "Comic Book Realm" })),
                            React.createElement("h2", { className: "title" }, "Comic Book Realm Mobile Apps"),
                            React.createElement("p", null, "Price guide and tracking for all your comic books."),
                            React.createElement("div", { className: "row m0 downloads-btns" },
                                React.createElement("a", { href: "https://itunes.apple.com/us/app/comicbookrealm/id1348310066", target: "_blank", className: "dload-link" },
                                    React.createElement("img", { src: iosAppStore, alt: "CBR App on iOS", title: "CBR App on iOS" })),
                                React.createElement("a", { href: "https://play.google.com/store/apps/details?id=com.comicbookrealmgp.cbr", target: "_blank", className: "dload-link" },
                                    React.createElement("img", { src: droidAppStore, alt: "CBR App on Android", title: "CBR App on Android" })))))))));
    }
}
/**
 * <a href="https://comicbookrealm.com" target="_blank">
              <img className="cbr-logo" src={cbrLogo} alt="Comic Book Realm" />
            </a>
            <br />
            <div className="row">
              <div className="column">
                <p className="title">Comic Book Realm Mobile Apps</p>
              </div>
              <div className="column platform-container">
                <div className="app-badge">
                  <a href="https://play.google.com/store/apps/details?id=com.comicbookrealmgp.cbr" target="_blank">
                    <img src={droidAppStore} alt="CBR App on Android" title="CBR App on Android" />
                  </a>
                </div>
                <div className="app-badge">
                  <a href="https://itunes.apple.com/us/app/comicbookrealm/id1348310066" target="_blank">
                    <img src={iosAppStore} alt="CBR App on iOS" title="CBR App on iOS" />
                  </a>
                </div>
              </div>
              <div className="column cbr-screenshots">
                <img src={cbrScreens} className="float-left" alt="CBR Search Feature Screenshot" />

              </div>
            </div>
 */ 


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
class SiteRouter extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Route, { path: "*", component: IndexPage_1.IndexPage }))));
    }
}
exports.SiteRouter = SiteRouter;


/***/ }),

/***/ "./src/helper.ts":
/*!***********************!*\
  !*** ./src/helper.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Infospot_1 = __webpack_require__(/*! ./models/Infospot */ "./src/models/Infospot.ts");
exports.IS_MOBILE = window ? 'ontouchstart' in window || window.navigator.msMaxTouchPoints : false;
exports.s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
exports.SPOTS = [
    new Infospot_1.Infospot({
        id: "spot-345",
        position: new THREE.Vector3(-5718.26, 1404.26, 3315.81),
        imageSrc: "public/dist/" + __webpack_require__(/*! ./img/info.png */ "./src/img/info.png"),
        hoverText: "Michael Stark",
        hasInitialFocus: true,
    })
];


/***/ }),

/***/ "./src/img/androidAppStore.png":
/*!*************************************!*\
  !*** ./src/img/androidAppStore.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5c19d2095933117efee9704b74b851d1.png";

/***/ }),

/***/ "./src/img/cbr_long_logo.png":
/*!***********************************!*\
  !*** ./src/img/cbr_long_logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/f061edc9a4cac5c02c1a9c2167f8180f.png";

/***/ }),

/***/ "./src/img/cbr_screens.png":
/*!*********************************!*\
  !*** ./src/img/cbr_screens.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/18cf6c4edf040272523ab96069abbd37.png";

/***/ }),

/***/ "./src/img/hackGroup.jpg":
/*!*******************************!*\
  !*** ./src/img/hackGroup.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2b12513861c58036ba32fb60db93cc74.jpg";

/***/ }),

/***/ "./src/img/info.png":
/*!**************************!*\
  !*** ./src/img/info.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5872a48c60d6ae0bd12b410aa58cd1c5.png";

/***/ }),

/***/ "./src/img/iosAppStore.png":
/*!*********************************!*\
  !*** ./src/img/iosAppStore.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/44320286fd8f6f7fe0cb137feda8ec2f.png";

/***/ }),

/***/ "./src/img/mixologist.jpg":
/*!********************************!*\
  !*** ./src/img/mixologist.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ec5ddd1f67e0361bf5ccb68b1afadd34.jpg";

/***/ }),

/***/ "./src/img/neighborhood_alexa.png":
/*!****************************************!*\
  !*** ./src/img/neighborhood_alexa.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/8fb651e739b2624a4145ec49a486ede3.png";

/***/ }),

/***/ "./src/img/pano_mountain.jpg":
/*!***********************************!*\
  !*** ./src/img/pano_mountain.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ff7fdf71f5e013a99ffa680b779d212a.jpg";

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

/***/ "./src/models/Infospot.ts":
/*!********************************!*\
  !*** ./src/models/Infospot.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __webpack_require__(/*! ../helper */ "./src/helper.ts");
class Infospot {
    constructor(props) {
        /** Private Methods */
        this.fireHandlers = () => {
            if (this.clickHandlers) {
                const scope = this;
                this.clickHandlers.forEach((handler) => {
                    if (handler) {
                        handler.call(scope, scope);
                    }
                });
            }
        };
        /** Public Methods */
        this.infospotSelected = () => {
            window.dispatchEvent(new CustomEvent("waypoint-selected", { detail: this }));
            this.fireHandlers();
        };
        this.addClickHandler = (handler) => {
            this.clickHandlers.push(handler);
        };
        this.removeClickHandler = (handler) => {
            this.clickHandlers = this.clickHandlers.filter((item) => {
                return item !== handler;
            });
        };
        this.resetClickHandler = () => {
            this.clickHandlers = [];
        };
        if (typeof props.position === "undefined" || props.position === null) {
            throw new Error("Infospot must have a position specified in props.");
        }
        if (typeof props.imageSrc === "undefined" || props.imageSrc === null) {
            throw new Error("Infospot must have a imageSrc specified in props.");
        }
        this.position = props.position;
        this.imageSrc = props.imageSrc;
        this.id = props.id || helper_1.s4();
        this.clickHandlers = props.clickHandlers || [];
        this.scale = props.scale || 300;
        this.center = props.center || null;
        this.animated = props.animated || true;
        this.hasInitialFocus = props.hasInitialFocus || false;
        this.hoverText = props.hoverText || null;
        this.hoverElement = props.hoverElement || null;
    }
}
exports.Infospot = Infospot;


/***/ }),

/***/ "./src/models/Waypoint.ts":
/*!********************************!*\
  !*** ./src/models/Waypoint.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __webpack_require__(/*! ../helper */ "./src/helper.ts");
class Waypoint {
    constructor(props) {
        /** Private Methods */
        this.fireHandlers = () => {
            if (this.clickHandlers) {
                const scope = this;
                this.clickHandlers.forEach((handler) => {
                    if (handler) {
                        handler.call(scope, scope);
                    }
                });
            }
        };
        /** Public Methods */
        this.waypointSelected = () => {
            window.dispatchEvent(new CustomEvent("waypoint-selected", { detail: this }));
            this.fireHandlers();
        };
        this.addClickHandler = (handler) => {
            this.clickHandlers.push(handler);
        };
        this.removeClickHandler = (handler) => {
            this.clickHandlers = this.clickHandlers.filter((item) => {
                return item !== handler;
            });
        };
        this.resetClickHandler = () => {
            this.clickHandlers = [];
        };
        if (typeof props.position === "undefined" || props.position === null) {
            throw new Error("Waypoint must have a position specified in props.");
        }
        if (typeof props.imageSrc === "undefined" || props.imageSrc === null) {
            throw new Error("Waypoint must have a imageSrc specified in props.");
        }
        this.position = props.position;
        this.imageSrc = props.imageSrc;
        this.id = props.id || helper_1.s4();
        this.clickHandlers = props.clickHandlers || [];
        this.scale = props.scale || 300;
        this.center = props.center || null;
        this.animated = props.animated || true;
    }
}
exports.Waypoint = Waypoint;


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