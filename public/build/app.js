(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// assets/controllers/hello_controller.js

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./assets/styles/main.css");
/* harmony import */ var _styles_Interface_user_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Interface_user.css */ "./assets/styles/Interface_user.css");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/main.js */ "./assets/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_interface_user_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/interface_user.js */ "./assets/js/interface_user.js");
/* harmony import */ var _js_interface_user_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_interface_user_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _js_main_GSAP_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/main_GSAP.js */ "./assets/js/main_GSAP.js");
/* harmony import */ var _js_main_Three_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/main_Three.js */ "./assets/js/main_Three.js");
// assets/app.js
 // Initialisation de Bootstrap et autres

// Importation des fichiers CSS




// Importation des fichiers JS personnalisés



// Initialisation de AOS (Animation On Scroll)




aos__WEBPACK_IMPORTED_MODULE_6___default().init({
  duration: 5000,
  // Durée de l'animation en millisecondes
  once: true // Animation jouée une seule fois
});
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");


// assets/bootstrap.js


_hotwired_turbo__WEBPACK_IMPORTED_MODULE_3__.start(); // Initialisation de Turbo

 // Importation de Bootstrap CSS
 // Importation de Bootstrap Tooltip
 // Importation de AOS (Animation On Scroll)
 // Styles AOS

// Démarre l'application Stimulus et charge les contrôleurs depuis le répertoire controllers
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_2__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

// Initialisation des tooltips Bootstrap après le chargement de la page via Turbo
document.addEventListener('turbo:load', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap__WEBPACK_IMPORTED_MODULE_5__.Tooltip(tooltipTriggerEl);
  });
});

// Initialisation de AOS
aos__WEBPACK_IMPORTED_MODULE_6___default().init();

/***/ }),

/***/ "./assets/js/interface_user.js":
/*!*************************************!*\
  !*** ./assets/js/interface_user.js ***!
  \*************************************/
/***/ (() => {

/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', function (event) {
  // Toggle the side navigation
  var sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    if (typeof Storage !== "undefined") {
      console.log('localStorage est supporté');
    } else {
      console.log('localStorage n\'est pas supporté');
    }
    sidebarToggle.addEventListener('click', function (event) {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }
});
console.log('Le script est chargé');

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (() => {

function initializeSearch() {
  var searchContainer = document.querySelector('.search-container');
  var searchInput = document.querySelector('.search-input');
  var clearIcon = document.querySelector('.clear-icon');
  var separator = document.querySelector('.separator');
  var browseIcon = document.querySelector('.browse-icon');
  var navbar = document.getElementById('mainNav');
  var toggler = document.querySelector('.navbar-toggler');
  if (searchContainer) {
    searchContainer.addEventListener('click', function () {
      searchContainer.classList.toggle('active');
      searchContainer.classList.toggle('collapsed');
    });
    document.addEventListener('click', function (event) {
      if (!searchContainer.contains(event.target)) {
        searchContainer.classList.add('collapsed');
        searchContainer.classList.remove('active');
        clearIcon.style.display = 'none';
        separator.style.display = '';
        browseIcon.style.display = '';
      }
    });
    searchInput.addEventListener('input', function () {
      if (searchInput.value.length > 0) {
        clearIcon.style.display = 'block';
        separator.style.display = 'none';
        browseIcon.style.display = 'none';
      } else {
        clearIcon.style.display = 'none';
        separator.style.display = '';
        browseIcon.style.display = '';
      }
    });
    clearIcon.addEventListener('click', function () {
      searchInput.value = '';
      clearIcon.style.display = 'none';
      separator.style.display = '';
      browseIcon.style.display = '';
    });
    toggler.addEventListener('click', function () {
      navbar.classList.toggle('navbar-open');
    });
  }
  // Fonction pour ajouter la classe "scrolled" lorsque l'utilisateur descend de 50px
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Exécute la fonction d'initialisation lors du chargement de la page
//document.addEventListener("DOMContentLoaded", initializeSearch);

// Si vous utilisez Turbo (Symfony UX)
document.addEventListener("turbo:load", initializeSearch);

// Si vous utilisez Turbolinks
//document.addEventListener("turbolinks:load", initializeSearch);

/***/ }),

/***/ "./assets/js/main_GSAP.js":
/*!********************************!*\
  !*** ./assets/js/main_GSAP.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


// Animation pour le titre et sous-titre
gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(".masthead-heading", {
  y: 50,
  // Départ en bas
  opacity: 0,
  // Départ invisible
  duration: 1.5,
  // Durée de l'animation
  ease: "power3.out",
  // Transition douce
  delay: 0.5 // Délai avant le début
});
gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(".masthead-subheading", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.7
});

// Animation pour le bouton
gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(".btn-demarrer", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.3)",
  delay: 1
});
var carousel = document.querySelector("#videoCarousel");
carousel.addEventListener("slide.bs.carousel", function () {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".masthead-heading", {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out"
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(".masthead-subheading", {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2
  });
});

/***/ }),

/***/ "./assets/js/main_Three.js":
/*!*********************************!*\
  !*** ./assets/js/main_Three.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.data-view.js */ "./node_modules/core-js/modules/es.data-view.js");
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array-buffer.detached.js */ "./node_modules/core-js/modules/es.array-buffer.detached.js");
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer.js */ "./node_modules/core-js/modules/es.array-buffer.transfer.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer-to-fixed-length.js */ "./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array.js */ "./node_modules/core-js/modules/es.typed-array.float32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ "./node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ "./node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ "./node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");







































var canvas = document.querySelector("#background-canvas");
var scene = new three__WEBPACK_IMPORTED_MODULE_38__.Scene();
var camera = new three__WEBPACK_IMPORTED_MODULE_38__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new three__WEBPACK_IMPORTED_MODULE_38__.WebGLRenderer({
  canvas: canvas,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter des particules
var particleGeometry = new three__WEBPACK_IMPORTED_MODULE_38__.BufferGeometry();
var particleCount = 5000;
var particlePositions = new Float32Array(particleCount * 3);
for (var i = 0; i < particleCount * 3; i++) {
  particlePositions[i] = (Math.random() - 0.5) * 500; // Réparties aléatoirement
}
particleGeometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_38__.BufferAttribute(particlePositions, 3));
var particleMaterial = new three__WEBPACK_IMPORTED_MODULE_38__.PointsMaterial({
  color: 0xffffff,
  size: 1,
  blending: three__WEBPACK_IMPORTED_MODULE_38__.AdditiveBlending,
  transparent: true
});
var particles = new three__WEBPACK_IMPORTED_MODULE_38__.Points(particleGeometry, particleMaterial);
scene.add(particles);
camera.position.z = 50;

// Animation des particules
var _animate = function animate() {
  requestAnimationFrame(_animate);
  particles.rotation.y += 0.002; // Rotation lente
  particles.rotation.x += 0.001; // Rotation lente

  renderer.render(scene, camera);
};
_animate();

// Ajustement du canvas au redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    renderer.setAnimationLoop(null); // Arrête l'animation
  } else {
    renderer.setAnimationLoop(_animate); // Redémarre l'animation
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/Interface_user.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/Interface_user.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";

/*!
* Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
*/
/*!
 * Bootstrap  v5.2.3 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */


*,
::after,
::before {
    box-sizing: border-box
}

@media (prefers-reduced-motion:no-preference) {
    :root {
        scroll-behavior: smooth
    }
}

body.Interface_user_body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent
}

.Interface_user_body hr {
    color: inherit;
    border: 0;
    border-top: 1px solid;
    opacity: .25
}

.Interface_user_body ul {
    margin-top: 0;
}

.Interface_user_body ul ul {
    margin-bottom: 0
}

.Interface_user_body .small {
    font-size: .875em
}

.Interface_user_body a {
    text-decoration: none;
}

.layoutSidenav_content button:focus:not(:focus-visible) {
    outline: 0
}

[role=button] {
    cursor: pointer
}

[type=button],
button {
    -webkit-appearance: button
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
    cursor: pointer
}

::-moz-focus-inner {
    padding: 0;
    border-style: none
}

::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-year-field {
    padding: 0
}

::-webkit-inner-spin-button {
    height: auto
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-color-swatch-wrapper {
    padding: 0
}

::file-selector-button {
    font: inherit;
    -webkit-appearance: button
}

.container-fluid {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-right: auto;
    margin-left: auto
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .375rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .form-control {
        transition: none
    }
}

.form-control[type=file]:not(:disabled):not([readonly]) {
    cursor: pointer
}

.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
}

.form-control::-webkit-date-and-time-value {
    height: 1.5em
}

.form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1
}

.form-control:disabled {
    background-color: #e9ecef;
    opacity: 1
}

.form-control::file-selector-button {
    padding: .375rem .75rem;
    margin: -.375rem -.75rem;
    -webkit-margin-end: .75rem;
    margin-inline-end: .75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .form-control::file-selector-button {
        transition: none
    }
}

.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3
}

.form-control-sm::file-selector-button {
    padding: .25rem .5rem;
    margin: -.25rem -.5rem;
    -webkit-margin-end: .5rem;
    margin-inline-end: .5rem
}

.form-control-lg::file-selector-button {
    padding: .5rem 1rem;
    margin: -.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem
}

.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%
}

.input-group>.form-control {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0
}

.input-group>.form-control:focus {
    z-index: 5
}

.input-group .btn {
    position: relative;
    z-index: 2
}

.input-group .btn:focus {
    z-index: 5
}

.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.input-group>.form-control:not(:focus).is-valid {
    z-index: 3
}

.input-group>.form-control:not(:focus).is-invalid {
    z-index: 4
}

.layoutSidenav_content .btn:focus-visible {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
    outline: 0;
    box-shadow: var(--bs-btn-focus-box-shadow)
}

:not(.btn-check)+.btn:active {
    background-color: #fff;
}

.layoutSidenav_content .btn:first-child:active:focus-visible,
:not(.btn-check)+.btn:active:focus-visible {
    box-shadow: var(--bs-btn-focus-box-shadow)
}

.layoutSidenav_content .btn-link:focus-visible {
    color: var(--bs-btn-color)
}

.dropdown {
    position: relative
}

.dropdown-toggle {
    white-space: nowrap
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent
}

.dropdown-menu {
    --bs-dropdown-zindex: 1000;
    --bs-dropdown-min-width: 10rem;
    --bs-dropdown-padding-x: 0;
    --bs-dropdown-padding-y: 0.5rem;
    --bs-dropdown-spacer: 0.125rem;
    --bs-dropdown-font-size: 1rem;
    --bs-dropdown-color: #212529;
    --bs-dropdown-bg: #fff;
    --bs-dropdown-border-color: var(--bs-border-color-translucent);
    --bs-dropdown-border-radius: 0.375rem;
    --bs-dropdown-border-width: 1px;
    --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);
    --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
    --bs-dropdown-divider-margin-y: 0.5rem;
    --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-dropdown-link-color: #212529;
    --bs-dropdown-link-hover-color: #1e2125;
    --bs-dropdown-link-hover-bg: #e9ecef;
    --bs-dropdown-link-active-color: #fff;
    --bs-dropdown-link-active-bg: #0d6efd;
    --bs-dropdown-link-disabled-color: #adb5bd;
    --bs-dropdown-item-padding-x: 1rem;
    --bs-dropdown-item-padding-y: 0.25rem;
    --bs-dropdown-header-color: #6c757d;
    --bs-dropdown-header-padding-x: 1rem;
    --bs-dropdown-header-padding-y: 0.5rem;
    position: absolute;
    z-index: var(--bs-dropdown-zindex);
    display: none;
    min-width: var(--bs-dropdown-min-width);
    padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
    margin: 0;
    font-size: var(--bs-dropdown-font-size);
    color: var(--bs-dropdown-color);
    text-align: left;
    list-style: none;
    background-color: var(--bs-dropdown-bg);
    background-clip: padding-box;
    border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
    border-radius: var(--bs-dropdown-border-radius)
}

.dropdown-menu-end {
    --bs-position: end
}

.dropdown-divider {
    height: 0;
    margin: var(--bs-dropdown-divider-margin-y) 0;
    overflow: hidden;
    border-top: 1px solid var(--bs-dropdown-divider-bg);
    opacity: 1
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
    clear: both;
    font-weight: 400;
    color: var(--bs-dropdown-link-color);
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0
}

.dropdown-item:focus,
.dropdown-item:hover {
    color: var(--bs-dropdown-link-hover-color);
    background-color: var(--bs-dropdown-link-hover-bg)
}

.dropdown-item:active {
    color: var(--bs-dropdown-link-active-color);
    text-decoration: none;
    background-color: var(--bs-dropdown-link-active-bg)
}

.dropdown-item:disabled {
    color: var(--bs-dropdown-link-disabled-color);
    pointer-events: none;
    background-color: transparent
}

.nav {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: #6c757d;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: var(--bs-nav-link-color);
    text-decoration: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .nav-link {
        transition: none
    }
}

.nav-link:focus,
.nav-link:hover {
    color: var(--bs-nav-link-hover-color)
}

.navbar {
    --bs-navbar-padding-x: 0;
    --bs-navbar-padding-y: 0.5rem;
    --bs-navbar-color: rgba(0, 0, 0, 0.55);
    --bs-navbar-hover-color: rgba(0, 0, 0, 0.7);
    --bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);
    --bs-navbar-active-color: rgba(0, 0, 0, 0.9);
    --bs-navbar-brand-padding-y: 0.3125rem;
    --bs-navbar-brand-margin-end: 1rem;
    --bs-navbar-brand-font-size: 1.25rem;
    --bs-navbar-brand-color: rgba(0, 0, 0, 0.9);
    --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);
    --bs-navbar-nav-link-padding-x: 0.5rem;
    --bs-navbar-toggler-padding-y: 0.25rem;
    --bs-navbar-toggler-padding-x: 0.75rem;
    --bs-navbar-toggler-font-size: 1.25rem;
    --bs-navbar-toggler-icon-bg: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    --bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);
    --bs-navbar-toggler-border-radius: 0.375rem;
    --bs-navbar-toggler-focus-width: 0.25rem;
    --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)
}

.navbar-brand {
    padding-top: var(--bs-navbar-brand-padding-y);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    margin-right: var(--bs-navbar-brand-margin-end);
    font-size: var(--bs-navbar-brand-font-size);
    color: var(--bs-navbar-brand-color);
    text-decoration: none;
    white-space: nowrap
}

.navbar-brand:focus,
.navbar-brand:hover {
    color: var(--bs-navbar-brand-hover-color)
}

.navbar-nav {
    --bs-nav-link-padding-x: 0;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-color: var(--bs-navbar-color);
    --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
    --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.navbar-nav .dropdown-menu {
    position: static
}

.navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start
}

.navbar-expand .navbar-nav {
    flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
}

.navbar-expand .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x)
}

.Interface_user_body .navbar-dark {
    --bs-navbar-color: rgba(255, 255, 255, 0.55);
    --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
    --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
    --bs-navbar-active-color: #fff;
    --bs-navbar-brand-color: #fff;
    --bs-navbar-brand-hover-color: #fff;
    --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
    --bs-navbar-toggler-icon-bg: url(${___CSS_LOADER_URL_REPLACEMENT_1___})
}

.Interface_user_body .accordion {
    --bs-accordion-color: #212529;
    --bs-accordion-bg: #fff;
    --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
    --bs-accordion-border-color: var(--bs-border-color);
    --bs-accordion-border-width: 1px;
    --bs-accordion-border-radius: 0.375rem;
    --bs-accordion-inner-border-radius: calc(0.375rem - 1px);
    --bs-accordion-btn-padding-x: 1.25rem;
    --bs-accordion-btn-padding-y: 1rem;
    --bs-accordion-btn-color: #212529;
    --bs-accordion-btn-bg: var(--bs-accordion-bg);
    --bs-accordion-btn-icon: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    --bs-accordion-btn-icon-width: 1.25rem;
    --bs-accordion-btn-icon-transform: rotate(-180deg);
    --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
    --bs-accordion-btn-active-icon: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    --bs-accordion-btn-focus-border-color: #86b7fe;
    --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    --bs-accordion-body-padding-x: 1.25rem;
    --bs-accordion-body-padding-y: 1rem;
    --bs-accordion-active-color: #0c63e4;
    --bs-accordion-active-bg: #e7f1ff
}

.d-flex {
    display: flex !important
}

.d-none {
    display: none !important
}

.layoutSidenav .justify-content-between {
    justify-content: space-between !important
}

.layoutSidenav .align-items-center {
    align-items: center !important
}

.order-1 {
    order: 1 !important
}

.my-2 {
    margin-top: .5rem !important;
    margin-bottom: .5rem !important
}

.mt-auto {
    margin-top: auto !important
}

.me-0 {
    margin-right: 0 !important
}

.me-3 {
    margin-right: 1rem !important
}

.me-4 {
    margin-right: 1.5rem !important
}

.ms-auto {
    margin-left: auto !important
}

.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important
}

.py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important
}

.ps-3 {
    padding-left: 1rem !important
}

.text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important
}

.bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important
}

.bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important
}

@media (min-width:768px) {

    .d-md-inline-block {
        display: inline-block !important
    }

    .my-md-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .me-md-3 {
        margin-right: 1rem !important
    }

    .ms-md-0 {
        margin-left: 0 !important
    }
}

@media (min-width:992px) {

    .order-lg-0 {
        order: 0 !important
    }

    .me-lg-0 {
        margin-right: 0 !important
    }

    .me-lg-4 {
        margin-right: 1.5rem !important
    }
}

body,
html {
    height: 100%
}

#layoutSidenav {
    display: flex
}

#layoutSidenav #layoutSidenav_nav {
    flex-basis: 225px;
    flex-shrink: 0;
    transition: transform .15s ease-in-out;
    z-index: 1038;
    transform: translateX(-225px)
}

#layoutSidenav #layoutSidenav_content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    flex-grow: 1;
    min-height: calc(100vh - 56px);
    margin-left: -225px
}

.sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
    transform: translateX(0);
  }

.sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 1037;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }  
  

@media (min-width:992px) {
    #layoutSidenav #layoutSidenav_nav {
        transform: translateX(0)
    }

    #layoutSidenav #layoutSidenav_content {
        margin-left: 0;
        transition: margin .15s ease-in-out
    }
    
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
        transform: translateX(-225px);
    }
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content {
    margin-left: -225px;
    }
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
    display: none;
    }    
}

.nav .nav-link .sb-nav-link-icon,
.sb-sidenav-menu .nav-link .sb-nav-link-icon {
    margin-right: .5rem
}

.sb-topnav {
    padding-left: 0;
    height: 56px;
    z-index: 1039
}

.sb-topnav .navbar-brand {
    width: 225px;
    margin: 0;
    text-decoration: none;
    color: #f8f9fa;
}

.sb-topnav.navbar-dark #sidebarToggle {
    color: rgba(255, 255, 255, .5)
}

.sb-sidenav {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-wrap: nowrap
}

.sb-sidenav .sb-sidenav-menu {
    flex-grow: 1
}

.sb-sidenav .sb-sidenav-menu .nav {
    flex-direction: column;
    flex-wrap: nowrap;
    font-family: "Poppins", sans-serif;
}

.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-heading {
    padding: 1.75rem 1rem .75rem;
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link {
    display: flex;
    align-items: center;
    padding-top: .75rem;
    padding-bottom: .75rem;
    position: relative;
    text-decoration: none;
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-nav-link-icon {
    font-size: .9rem
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-sidenav-collapse-arrow {
    display: inline-block;
    margin-left: auto;
    transition: transform .15s ease
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link.collapsed .sb-sidenav-collapse-arrow {
    transform: rotate(-90deg)
}

.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-nested {
    margin-left: 1.5rem;
    flex-direction: column
}

.sb-sidenav .sb-sidenav-footer {
    padding: .75rem;
    flex-shrink: 0
}

.sb-sidenav-dark {
    background-color: #212529;
    color: rgba(255, 255, 255, .5)
}

.sb-sidenav-dark .sb-sidenav-menu .sb-sidenav-menu-heading {
    color: rgba(255, 255, 255, .25)
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link {
    color: rgba(255, 255, 255, .5)
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-nav-link-icon {
    color: rgba(255, 255, 255, .25)
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
    color: rgba(255, 255, 255, .25)
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link:hover {
    color: #fff
}

.sb-sidenav-dark .sb-sidenav-footer {
    background-color: #343a40
}`, "",{"version":3,"sources":["webpack://./assets/styles/Interface_user.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\r\n\r\n/*!\r\n* Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)\r\n* Copyright 2013-2023 Start Bootstrap\r\n* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)\r\n*/\r\n/*!\r\n * Bootstrap  v5.2.3 (https://getbootstrap.com/)\r\n * Copyright 2011-2022 The Bootstrap Authors\r\n * Copyright 2011-2022 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n\r\n*,\r\n::after,\r\n::before {\r\n    box-sizing: border-box\r\n}\r\n\r\n@media (prefers-reduced-motion:no-preference) {\r\n    :root {\r\n        scroll-behavior: smooth\r\n    }\r\n}\r\n\r\nbody.Interface_user_body {\r\n    margin: 0;\r\n    font-family: var(--bs-body-font-family);\r\n    font-size: var(--bs-body-font-size);\r\n    font-weight: var(--bs-body-font-weight);\r\n    line-height: var(--bs-body-line-height);\r\n    color: var(--bs-body-color);\r\n    text-align: var(--bs-body-text-align);\r\n    background-color: var(--bs-body-bg);\r\n    -webkit-text-size-adjust: 100%;\r\n    -webkit-tap-highlight-color: transparent\r\n}\r\n\r\n.Interface_user_body hr {\r\n    color: inherit;\r\n    border: 0;\r\n    border-top: 1px solid;\r\n    opacity: .25\r\n}\r\n\r\n.Interface_user_body ul {\r\n    margin-top: 0;\r\n}\r\n\r\n.Interface_user_body ul ul {\r\n    margin-bottom: 0\r\n}\r\n\r\n.Interface_user_body .small {\r\n    font-size: .875em\r\n}\r\n\r\n.Interface_user_body a {\r\n    text-decoration: none;\r\n}\r\n\r\n.layoutSidenav_content button:focus:not(:focus-visible) {\r\n    outline: 0\r\n}\r\n\r\n[role=button] {\r\n    cursor: pointer\r\n}\r\n\r\n[type=button],\r\nbutton {\r\n    -webkit-appearance: button\r\n}\r\n\r\n[type=button]:not(:disabled),\r\n[type=reset]:not(:disabled),\r\n[type=submit]:not(:disabled),\r\nbutton:not(:disabled) {\r\n    cursor: pointer\r\n}\r\n\r\n::-moz-focus-inner {\r\n    padding: 0;\r\n    border-style: none\r\n}\r\n\r\n::-webkit-datetime-edit-day-field,\r\n::-webkit-datetime-edit-fields-wrapper,\r\n::-webkit-datetime-edit-hour-field,\r\n::-webkit-datetime-edit-minute,\r\n::-webkit-datetime-edit-month-field,\r\n::-webkit-datetime-edit-text,\r\n::-webkit-datetime-edit-year-field {\r\n    padding: 0\r\n}\r\n\r\n::-webkit-inner-spin-button {\r\n    height: auto\r\n}\r\n\r\n::-webkit-search-decoration {\r\n    -webkit-appearance: none\r\n}\r\n\r\n::-webkit-color-swatch-wrapper {\r\n    padding: 0\r\n}\r\n\r\n::file-selector-button {\r\n    font: inherit;\r\n    -webkit-appearance: button\r\n}\r\n\r\n.container-fluid {\r\n    --bs-gutter-x: 1.5rem;\r\n    --bs-gutter-y: 0;\r\n    width: 100%;\r\n    padding-right: calc(var(--bs-gutter-x) * .5);\r\n    padding-left: calc(var(--bs-gutter-x) * .5);\r\n    margin-right: auto;\r\n    margin-left: auto\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    border-radius: .375rem;\r\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out\r\n}\r\n\r\n@media (prefers-reduced-motion:reduce) {\r\n    .form-control {\r\n        transition: none\r\n    }\r\n}\r\n\r\n.form-control[type=file]:not(:disabled):not([readonly]) {\r\n    cursor: pointer\r\n}\r\n\r\n.form-control:focus {\r\n    color: #212529;\r\n    background-color: #fff;\r\n    border-color: #86b7fe;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)\r\n}\r\n\r\n.form-control::-webkit-date-and-time-value {\r\n    height: 1.5em\r\n}\r\n\r\n.form-control::-moz-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1\r\n}\r\n\r\n.form-control:disabled {\r\n    background-color: #e9ecef;\r\n    opacity: 1\r\n}\r\n\r\n.form-control::file-selector-button {\r\n    padding: .375rem .75rem;\r\n    margin: -.375rem -.75rem;\r\n    -webkit-margin-end: .75rem;\r\n    margin-inline-end: .75rem;\r\n    color: #212529;\r\n    background-color: #e9ecef;\r\n    pointer-events: none;\r\n    border-color: inherit;\r\n    border-style: solid;\r\n    border-width: 0;\r\n    border-inline-end-width: 1px;\r\n    border-radius: 0;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out\r\n}\r\n\r\n@media (prefers-reduced-motion:reduce) {\r\n    .form-control::file-selector-button {\r\n        transition: none\r\n    }\r\n}\r\n\r\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\r\n    background-color: #dde0e3\r\n}\r\n\r\n.form-control-sm::file-selector-button {\r\n    padding: .25rem .5rem;\r\n    margin: -.25rem -.5rem;\r\n    -webkit-margin-end: .5rem;\r\n    margin-inline-end: .5rem\r\n}\r\n\r\n.form-control-lg::file-selector-button {\r\n    padding: .5rem 1rem;\r\n    margin: -.5rem -1rem;\r\n    -webkit-margin-end: 1rem;\r\n    margin-inline-end: 1rem\r\n}\r\n\r\n.input-group {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    width: 100%\r\n}\r\n\r\n.input-group>.form-control {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    width: 1%;\r\n    min-width: 0\r\n}\r\n\r\n.input-group>.form-control:focus {\r\n    z-index: 5\r\n}\r\n\r\n.input-group .btn {\r\n    position: relative;\r\n    z-index: 2\r\n}\r\n\r\n.input-group .btn:focus {\r\n    z-index: 5\r\n}\r\n\r\n.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0\r\n}\r\n\r\n.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\r\n    margin-left: -1px;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0\r\n}\r\n\r\n.input-group>.form-control:not(:focus).is-valid {\r\n    z-index: 3\r\n}\r\n\r\n.input-group>.form-control:not(:focus).is-invalid {\r\n    z-index: 4\r\n}\r\n\r\n.layoutSidenav_content .btn:focus-visible {\r\n    color: var(--bs-btn-hover-color);\r\n    background-color: var(--bs-btn-hover-bg);\r\n    border-color: var(--bs-btn-hover-border-color);\r\n    outline: 0;\r\n    box-shadow: var(--bs-btn-focus-box-shadow)\r\n}\r\n\r\n:not(.btn-check)+.btn:active {\r\n    background-color: #fff;\r\n}\r\n\r\n.layoutSidenav_content .btn:first-child:active:focus-visible,\r\n:not(.btn-check)+.btn:active:focus-visible {\r\n    box-shadow: var(--bs-btn-focus-box-shadow)\r\n}\r\n\r\n.layoutSidenav_content .btn-link:focus-visible {\r\n    color: var(--bs-btn-color)\r\n}\r\n\r\n.dropdown {\r\n    position: relative\r\n}\r\n\r\n.dropdown-toggle {\r\n    white-space: nowrap\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: .255em;\r\n    vertical-align: .255em;\r\n    content: \"\";\r\n    border-top: .3em solid;\r\n    border-right: .3em solid transparent;\r\n    border-bottom: 0;\r\n    border-left: .3em solid transparent\r\n}\r\n\r\n.dropdown-menu {\r\n    --bs-dropdown-zindex: 1000;\r\n    --bs-dropdown-min-width: 10rem;\r\n    --bs-dropdown-padding-x: 0;\r\n    --bs-dropdown-padding-y: 0.5rem;\r\n    --bs-dropdown-spacer: 0.125rem;\r\n    --bs-dropdown-font-size: 1rem;\r\n    --bs-dropdown-color: #212529;\r\n    --bs-dropdown-bg: #fff;\r\n    --bs-dropdown-border-color: var(--bs-border-color-translucent);\r\n    --bs-dropdown-border-radius: 0.375rem;\r\n    --bs-dropdown-border-width: 1px;\r\n    --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\r\n    --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\r\n    --bs-dropdown-divider-margin-y: 0.5rem;\r\n    --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\r\n    --bs-dropdown-link-color: #212529;\r\n    --bs-dropdown-link-hover-color: #1e2125;\r\n    --bs-dropdown-link-hover-bg: #e9ecef;\r\n    --bs-dropdown-link-active-color: #fff;\r\n    --bs-dropdown-link-active-bg: #0d6efd;\r\n    --bs-dropdown-link-disabled-color: #adb5bd;\r\n    --bs-dropdown-item-padding-x: 1rem;\r\n    --bs-dropdown-item-padding-y: 0.25rem;\r\n    --bs-dropdown-header-color: #6c757d;\r\n    --bs-dropdown-header-padding-x: 1rem;\r\n    --bs-dropdown-header-padding-y: 0.5rem;\r\n    position: absolute;\r\n    z-index: var(--bs-dropdown-zindex);\r\n    display: none;\r\n    min-width: var(--bs-dropdown-min-width);\r\n    padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);\r\n    margin: 0;\r\n    font-size: var(--bs-dropdown-font-size);\r\n    color: var(--bs-dropdown-color);\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: var(--bs-dropdown-bg);\r\n    background-clip: padding-box;\r\n    border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\r\n    border-radius: var(--bs-dropdown-border-radius)\r\n}\r\n\r\n.dropdown-menu-end {\r\n    --bs-position: end\r\n}\r\n\r\n.dropdown-divider {\r\n    height: 0;\r\n    margin: var(--bs-dropdown-divider-margin-y) 0;\r\n    overflow: hidden;\r\n    border-top: 1px solid var(--bs-dropdown-divider-bg);\r\n    opacity: 1\r\n}\r\n\r\n.dropdown-item {\r\n    display: block;\r\n    width: 100%;\r\n    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: var(--bs-dropdown-link-color);\r\n    text-align: inherit;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0\r\n}\r\n\r\n.dropdown-item:focus,\r\n.dropdown-item:hover {\r\n    color: var(--bs-dropdown-link-hover-color);\r\n    background-color: var(--bs-dropdown-link-hover-bg)\r\n}\r\n\r\n.dropdown-item:active {\r\n    color: var(--bs-dropdown-link-active-color);\r\n    text-decoration: none;\r\n    background-color: var(--bs-dropdown-link-active-bg)\r\n}\r\n\r\n.dropdown-item:disabled {\r\n    color: var(--bs-dropdown-link-disabled-color);\r\n    pointer-events: none;\r\n    background-color: transparent\r\n}\r\n\r\n.nav {\r\n    --bs-nav-link-padding-x: 1rem;\r\n    --bs-nav-link-padding-y: 0.5rem;\r\n    --bs-nav-link-color: var(--bs-link-color);\r\n    --bs-nav-link-hover-color: var(--bs-link-hover-color);\r\n    --bs-nav-link-disabled-color: #6c757d;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none\r\n}\r\n\r\n.nav-link {\r\n    display: block;\r\n    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);\r\n    font-size: var(--bs-nav-link-font-size);\r\n    font-weight: var(--bs-nav-link-font-weight);\r\n    color: var(--bs-nav-link-color);\r\n    text-decoration: none;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out\r\n}\r\n\r\n@media (prefers-reduced-motion:reduce) {\r\n    .nav-link {\r\n        transition: none\r\n    }\r\n}\r\n\r\n.nav-link:focus,\r\n.nav-link:hover {\r\n    color: var(--bs-nav-link-hover-color)\r\n}\r\n\r\n.navbar {\r\n    --bs-navbar-padding-x: 0;\r\n    --bs-navbar-padding-y: 0.5rem;\r\n    --bs-navbar-color: rgba(0, 0, 0, 0.55);\r\n    --bs-navbar-hover-color: rgba(0, 0, 0, 0.7);\r\n    --bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);\r\n    --bs-navbar-active-color: rgba(0, 0, 0, 0.9);\r\n    --bs-navbar-brand-padding-y: 0.3125rem;\r\n    --bs-navbar-brand-margin-end: 1rem;\r\n    --bs-navbar-brand-font-size: 1.25rem;\r\n    --bs-navbar-brand-color: rgba(0, 0, 0, 0.9);\r\n    --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);\r\n    --bs-navbar-nav-link-padding-x: 0.5rem;\r\n    --bs-navbar-toggler-padding-y: 0.25rem;\r\n    --bs-navbar-toggler-padding-x: 0.75rem;\r\n    --bs-navbar-toggler-font-size: 1.25rem;\r\n    --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n    --bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);\r\n    --bs-navbar-toggler-border-radius: 0.375rem;\r\n    --bs-navbar-toggler-focus-width: 0.25rem;\r\n    --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)\r\n}\r\n\r\n.navbar-brand {\r\n    padding-top: var(--bs-navbar-brand-padding-y);\r\n    padding-bottom: var(--bs-navbar-brand-padding-y);\r\n    margin-right: var(--bs-navbar-brand-margin-end);\r\n    font-size: var(--bs-navbar-brand-font-size);\r\n    color: var(--bs-navbar-brand-color);\r\n    text-decoration: none;\r\n    white-space: nowrap\r\n}\r\n\r\n.navbar-brand:focus,\r\n.navbar-brand:hover {\r\n    color: var(--bs-navbar-brand-hover-color)\r\n}\r\n\r\n.navbar-nav {\r\n    --bs-nav-link-padding-x: 0;\r\n    --bs-nav-link-padding-y: 0.5rem;\r\n    --bs-nav-link-color: var(--bs-navbar-color);\r\n    --bs-nav-link-hover-color: var(--bs-navbar-hover-color);\r\n    --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n    position: static\r\n}\r\n\r\n.navbar-expand {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start\r\n}\r\n\r\n.navbar-expand .navbar-nav {\r\n    flex-direction: row\r\n}\r\n\r\n.navbar-expand .navbar-nav .dropdown-menu {\r\n    position: absolute\r\n}\r\n\r\n.navbar-expand .navbar-nav .nav-link {\r\n    padding-right: var(--bs-navbar-nav-link-padding-x);\r\n    padding-left: var(--bs-navbar-nav-link-padding-x)\r\n}\r\n\r\n.Interface_user_body .navbar-dark {\r\n    --bs-navbar-color: rgba(255, 255, 255, 0.55);\r\n    --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);\r\n    --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);\r\n    --bs-navbar-active-color: #fff;\r\n    --bs-navbar-brand-color: #fff;\r\n    --bs-navbar-brand-hover-color: #fff;\r\n    --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);\r\n    --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")\r\n}\r\n\r\n.Interface_user_body .accordion {\r\n    --bs-accordion-color: #212529;\r\n    --bs-accordion-bg: #fff;\r\n    --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\r\n    --bs-accordion-border-color: var(--bs-border-color);\r\n    --bs-accordion-border-width: 1px;\r\n    --bs-accordion-border-radius: 0.375rem;\r\n    --bs-accordion-inner-border-radius: calc(0.375rem - 1px);\r\n    --bs-accordion-btn-padding-x: 1.25rem;\r\n    --bs-accordion-btn-padding-y: 1rem;\r\n    --bs-accordion-btn-color: #212529;\r\n    --bs-accordion-btn-bg: var(--bs-accordion-bg);\r\n    --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\r\n    --bs-accordion-btn-icon-width: 1.25rem;\r\n    --bs-accordion-btn-icon-transform: rotate(-180deg);\r\n    --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;\r\n    --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\r\n    --bs-accordion-btn-focus-border-color: #86b7fe;\r\n    --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\r\n    --bs-accordion-body-padding-x: 1.25rem;\r\n    --bs-accordion-body-padding-y: 1rem;\r\n    --bs-accordion-active-color: #0c63e4;\r\n    --bs-accordion-active-bg: #e7f1ff\r\n}\r\n\r\n.d-flex {\r\n    display: flex !important\r\n}\r\n\r\n.d-none {\r\n    display: none !important\r\n}\r\n\r\n.layoutSidenav .justify-content-between {\r\n    justify-content: space-between !important\r\n}\r\n\r\n.layoutSidenav .align-items-center {\r\n    align-items: center !important\r\n}\r\n\r\n.order-1 {\r\n    order: 1 !important\r\n}\r\n\r\n.my-2 {\r\n    margin-top: .5rem !important;\r\n    margin-bottom: .5rem !important\r\n}\r\n\r\n.mt-auto {\r\n    margin-top: auto !important\r\n}\r\n\r\n.me-0 {\r\n    margin-right: 0 !important\r\n}\r\n\r\n.me-3 {\r\n    margin-right: 1rem !important\r\n}\r\n\r\n.me-4 {\r\n    margin-right: 1.5rem !important\r\n}\r\n\r\n.ms-auto {\r\n    margin-left: auto !important\r\n}\r\n\r\n.px-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important\r\n}\r\n\r\n.py-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important\r\n}\r\n\r\n.ps-3 {\r\n    padding-left: 1rem !important\r\n}\r\n\r\n.text-muted {\r\n    --bs-text-opacity: 1;\r\n    color: #6c757d !important\r\n}\r\n\r\n.bg-light {\r\n    --bs-bg-opacity: 1;\r\n    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important\r\n}\r\n\r\n.bg-dark {\r\n    --bs-bg-opacity: 1;\r\n    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important\r\n}\r\n\r\n@media (min-width:768px) {\r\n\r\n    .d-md-inline-block {\r\n        display: inline-block !important\r\n    }\r\n\r\n    .my-md-0 {\r\n        margin-top: 0 !important;\r\n        margin-bottom: 0 !important\r\n    }\r\n\r\n    .me-md-3 {\r\n        margin-right: 1rem !important\r\n    }\r\n\r\n    .ms-md-0 {\r\n        margin-left: 0 !important\r\n    }\r\n}\r\n\r\n@media (min-width:992px) {\r\n\r\n    .order-lg-0 {\r\n        order: 0 !important\r\n    }\r\n\r\n    .me-lg-0 {\r\n        margin-right: 0 !important\r\n    }\r\n\r\n    .me-lg-4 {\r\n        margin-right: 1.5rem !important\r\n    }\r\n}\r\n\r\nbody,\r\nhtml {\r\n    height: 100%\r\n}\r\n\r\n#layoutSidenav {\r\n    display: flex\r\n}\r\n\r\n#layoutSidenav #layoutSidenav_nav {\r\n    flex-basis: 225px;\r\n    flex-shrink: 0;\r\n    transition: transform .15s ease-in-out;\r\n    z-index: 1038;\r\n    transform: translateX(-225px)\r\n}\r\n\r\n#layoutSidenav #layoutSidenav_content {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    min-width: 0;\r\n    flex-grow: 1;\r\n    min-height: calc(100vh - 56px);\r\n    margin-left: -225px\r\n}\r\n\r\n.sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {\r\n    transform: translateX(0);\r\n  }\r\n\r\n.sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #000;\r\n    z-index: 1037;\r\n    opacity: 0.5;\r\n    transition: opacity 0.3s ease-in-out;\r\n  }  \r\n  \r\n\r\n@media (min-width:992px) {\r\n    #layoutSidenav #layoutSidenav_nav {\r\n        transform: translateX(0)\r\n    }\r\n\r\n    #layoutSidenav #layoutSidenav_content {\r\n        margin-left: 0;\r\n        transition: margin .15s ease-in-out\r\n    }\r\n    \r\n    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {\r\n        transform: translateX(-225px);\r\n    }\r\n    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content {\r\n    margin-left: -225px;\r\n    }\r\n    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {\r\n    display: none;\r\n    }    \r\n}\r\n\r\n.nav .nav-link .sb-nav-link-icon,\r\n.sb-sidenav-menu .nav-link .sb-nav-link-icon {\r\n    margin-right: .5rem\r\n}\r\n\r\n.sb-topnav {\r\n    padding-left: 0;\r\n    height: 56px;\r\n    z-index: 1039\r\n}\r\n\r\n.sb-topnav .navbar-brand {\r\n    width: 225px;\r\n    margin: 0;\r\n    text-decoration: none;\r\n    color: #f8f9fa;\r\n}\r\n\r\n.sb-topnav.navbar-dark #sidebarToggle {\r\n    color: rgba(255, 255, 255, .5)\r\n}\r\n\r\n.sb-sidenav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    flex-wrap: nowrap\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu {\r\n    flex-grow: 1\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav {\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-heading {\r\n    padding: 1.75rem 1rem .75rem;\r\n    font-size: .75rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav .nav-link {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    position: relative;\r\n    text-decoration: none;\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-nav-link-icon {\r\n    font-size: .9rem\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-sidenav-collapse-arrow {\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    transition: transform .15s ease\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav .nav-link.collapsed .sb-sidenav-collapse-arrow {\r\n    transform: rotate(-90deg)\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-nested {\r\n    margin-left: 1.5rem;\r\n    flex-direction: column\r\n}\r\n\r\n.sb-sidenav .sb-sidenav-footer {\r\n    padding: .75rem;\r\n    flex-shrink: 0\r\n}\r\n\r\n.sb-sidenav-dark {\r\n    background-color: #212529;\r\n    color: rgba(255, 255, 255, .5)\r\n}\r\n\r\n.sb-sidenav-dark .sb-sidenav-menu .sb-sidenav-menu-heading {\r\n    color: rgba(255, 255, 255, .25)\r\n}\r\n\r\n.sb-sidenav-dark .sb-sidenav-menu .nav-link {\r\n    color: rgba(255, 255, 255, .5)\r\n}\r\n\r\n.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-nav-link-icon {\r\n    color: rgba(255, 255, 255, .25)\r\n}\r\n\r\n.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {\r\n    color: rgba(255, 255, 255, .25)\r\n}\r\n\r\n.sb-sidenav-dark .sb-sidenav-menu .nav-link:hover {\r\n    color: #fff\r\n}\r\n\r\n.sb-sidenav-dark .sb-sidenav-footer {\r\n    background-color: #343a40\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/app.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/app.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*body {
    background-color: skyblue;
}*/
`, "",{"version":3,"sources":["webpack://./assets/styles/app.css"],"names":[],"mappings":"AAAA;;EAEE","sourcesContent":["/*body {\n    background-color: skyblue;\n}*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/main.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/main.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/header_about_background.jpeg */ "./assets/images/header_about_background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/login_background.jpg */ "./assets/images/login_background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Variables de couleur */
:root {
  --control-color: rgba(0, 0, 0, 0.5);
  --control-color-hover: rgba(0, 0, 0, 0.8);
}

/* Navbar Styling */
#mainNav.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent; /* Transparente pour se fondre dans la vidéo */
  box-shadow: none;
  z-index: 10;
}

#mainNav .navbar-brand,
.login-section .navbar-brand,
.sb-topnav .navbar-brand  {
  font-family: "Amatic SC", "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 36px;
}


#mainNav .navbar-brand,
#mainNav .nav-link {
  color: #fff; /* Texte blanc pour contraste sur vidéo */
}

#mainNav .navbar-toggler {
  border-color: transparent;
}

#mainNav .navbar-toggler-icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Liens de la navbar */
.nav-item .nav-link {
  color: #fff;
  margin-right: 1rem; /* Espace restauré entre les liens */
}

/* Dropdown Menu */
.dropdown-menu {
  background-color: rgba(255, 255, 255, 0.9); /* Légèrement transparent */
  border-radius: 0.25rem;
}

.dropdown-item {
  color: #333;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: rgba(240, 240, 240, 0.9);
}

/* Masthead Styling (Carousel Vidéo en pleine page) */
.masthead {
  position: relative;
  width: 100%;
  height: 100vh; /* Pleine hauteur */
  background: #000;
  overflow: hidden;
}

#videoCarousel.carousel {
  height: 100vh; /* 100% de la hauteur de l’écran */
}

.videoCarousel .carousel-inner {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

.videoCarousel .carousel-item {
  height: 100vh;
  display: none;
  transition: opacity 0.5s ease-in-out;
}

.videoCarousel .carousel-item.active {
  display: block;
}

.videoCarousel .carousel-item video {
  width: 100%;
  height: 100vh;
  object-fit: cover; /* Couvre toute la zone visible */
}

/* Carousel Control Styling */
.videoCarousel .carousel-control-prev,
.videoCarousel .carousel-control-next {
  width: 5%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.6;
  transition: opacity 0.2s;
}

.videoCarousel .carousel-control-prev:hover,
.videoCarousel .carousel-control-next:hover {
  opacity: 1;
}

.videoCarousel .carousel-control-prev-icon,
.videoCarousel .carousel-control-next-icon {
  background-color: var(--control-color);
  width: 2rem;
  height: 2rem;
}

.videoCarousel .carousel-control-prev-icon:hover,
.videoCarousel .carousel-control-next-icon:hover {
  background-color: var(--control-color-hover);
}

/* Video Styling */
video.d-block.w-100 {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

/* Media Queries */
@media (max-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
      padding: 0.5rem;
  }
  .dropdown-menu {
      min-width: 100px;
  }
}

@media (max-width: 768px) {
  .videoCarousel .carousel-control-prev,
  .videoCarousel .carousel-control-next {
      width: 10%;
  }
}

@media (max-width: 576px) {
  #mainNav {
      padding: 0.5rem 1rem;
  }
  .dropdown-menu {
      font-size: 0.8rem;
  }
}

.search-container {
  display: flex; /* Utiliser Flexbox pour aligner les éléments */
  align-items: center; /* Centrer verticalement les éléments */
  justify-content: center; /* Centrer horizontalement tous les éléments */
  position: relative; /* Position relative pour contrôler les icônes */
  background-color: white; /* Couleur de fond de la barre de recherche */
  border-radius: 50px; /* Coins arrondis */
  padding: 10px 20px; /* Espace intérieur */
  width: 200px; /* Largeur initiale de la barre de recherche */
  transition: all 0.3s ease; /* Transition pour tous les changements de propriété */
}

/* Style pour le conteneur du logo */
.logo-container {
  flex: 0 0 auto; /* Ne pas permettre à l'élément de grandir ou de se rétrécir */
  margin-right: 10px; /* Espacement autour du logo */
}

/* Pour le logo */
.logo {
  max-height: 50px; /* Ajustez la hauteur du logo selon vos besoins */
  max-width: 100%; /* Pour éviter que le logo dépasse le conteneur */
}

.search-container.active {
  width: 300px; /* Largeur de la barre de recherche quand elle est active */
}

.search-input {
  background: transparent; /* Fond transparent */
  border: none; /* Pas de bordure */
  color: #404040; /* Couleur du texte */
  outline: none; /* Pas de contour */
  width: 100%; /* Prendre toute la largeur disponible */
  font-size: 16px;
  padding-left: 30px; /* Espacement pour l'icône */
  font-family: "Merriweather Sans", sans-serif;
}

/* Ajoute du style aux placeholders */
.search-input::placeholder {
  color: #b3b3b3; /* Couleur du placeholder */
}

.search-icon {
  position: absolute; /* Position absolue pour la placer à l'intérieur du champ */
  left: 10px; /* Déplacement à gauche */
  fill: #404040; /* Couleur de l'icône */
  width: 22px; /* Largeur augmentée */
  height: 22px; /* Hauteur augmentée */
}

/* Séparateur vertical */
.separator {
  color: #404040;
  margin: 0 10px; /* Espace autour du séparateur */
}

/* Icône de navigation "parcourir" */
.browse-icon {
  fill: #404040; /* Couleur de l'icône */
  cursor: pointer; /* Curseur en forme de main pour indiquer qu'il est cliquable */
  transition: fill 0.3s;
  width: 22px; /* Largeur augmentée */
  height: 22px; /* Hauteur augmentée */
}

.search-container.collapsed .separator,
.search-container.collapsed .browse-icon {
    display: none;
}

.clear-icon {
  fill: #404040; /* Couleur de l'icône */
  cursor: pointer; /* Curseur en forme de main pour indiquer qu'il est cliquable */
  transition: fill 0.3s;
  width: 27px; /* Largeur de l'icône de croix */
  height: 27px; /* Hauteur de l'icône de croix */
  margin-left: 10px; /* Espace autour de l'icône de croix */
}


.btn-connexion, .btn-demarrer{
  background-color: #fff; /* Couleur de fond de la barre de recherche */
  border-radius: 50px; /* Coins arrondis */
  padding: 10px 20px; /* Espace intérieur */
}

.btn-connexion:hover{
  background-color: #fff;
}

.btn-demarrer:hover{
  background-color: #000;
  color: #fff;
}

.logo-container-mobile{
  display: none;
}

@media (max-width: 992px) {
  .logo-container-mobile{
    display: block;
  }
  .logo-container{
    display: none;
  }
  .nav-element{
    flex-direction: column;
    align-items: flex-start !important;
  }
  .nav-element > *{
    margin-bottom: 10px;
  }
  .other-element-nav{
    flex-direction: column;
  }
  .other-element-nav > *{
    margin-bottom: 10px;
  }
  .other-element-nav a{
    width: 200px;
  }
}

.navbar-toggler {
  position: absolute; /* Assure que le bouton est en position absolue */
  top: 15px; /* Ajustez selon votre design */
  right: 15px; /* Ajustez selon votre design */
  z-index: 999; /* Assurez-vous qu'il est au-dessus des autres éléments */
}

.navbar-open {
  background-color: white !important; /* Fond blanc */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optionnel : ajout d'une ombre pour un effet de profondeur */
}

.navbar-open a, .navbar-open li {
  color: #000 !important;
}

.navbar-open .search-container {
  background-color: #000;
  color: #fff;
}

.navbar-open .search-container input, 
.navbar-open .search-container .browse-icon,
.navbar-open .search-container .clear-icon,
.navbar-open .search-container .search-icon  {
  color: #fff;
  fill: #fff;
}

.navbar-open .other-element-nav a.btn-connexion,
.navbar-open .other-element-nav div.btn-connexion{
  background-color: #000;
  color: #fff !important;
}

div.btn-connexion .rounded-circle{
  border: 1px solid #000;
}

div.btn-connexion svg{
  width: 24px;
  height: 24px;
}

div.btn-connexion a{
  text-decoration: none;
  color: #000;
}

.navbar-open .navbar-toggler-icon {
  background-image: var(--bs-navbar-toggler-icon-bg) !important;
}

.content-overlay {
  position: absolute; /* Positionnement absolu pour superposer le contenu */
  top: 50%; /* Centrer verticalement */
  left: 50%; /* Centrer horizontalement */
  transform: translate(-50%, -50%); /* Déplacer pour centrer */
  color: white; /* Couleur du texte */
  text-align: right; /* Centrer le texte */
  padding: 20px; /* Espacement autour du contenu */
}

/* Classe appliquée au nav lors du scroll */
#mainNav.scrolled {
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.6s ease, box-shadow 0.6s ease;
}

#mainNav.scrolled  .nav-link,
#mainNav.scrolled  .navbar-brand {
  color: black;
}

#mainNav.scrolled  .btn-connexion,
#mainNav.scrolled  .search-container {
  border: 1px solid black;
}

/* Initialisation de la couleur pour éviter les conflits */

@media (min-width: 768px) {
  header.masthead .masthead-subheading {
    font-size: 2.25rem;
    font-style: italic;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
}
header.masthead .masthead-subheading {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead .masthead-heading {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
}

header.masthead .masthead-heading {
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 2rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.about-background {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* Ajustez la hauteur selon vos besoins */
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-background .content-overlay {
  text-align: center;
  color: #fff;
  /* Ajustez le style selon vos besoins */
}

.about-background .content-overlay .masthead-heading {
  font-family: "Amatic SC", "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 150px;
  line-height: 1.1; /* Ajustez cette valeur pour réduire ou augmenter l'espacement entre les lignes */
  margin-bottom: 20px; /* Ajoutez un espacement entre les lignes de texte */
}

.about-background .content-overlay .masthead-heading:nth-of-type(1) {
  align-self: flex-start;
}

.about-background .content-overlay .masthead-heading:nth-of-type(2) {
  align-self: flex-end;
}

[data-aos="fade-right"], [data-aos="fade-left"] {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 1s ease-in-out;
}

.team-photo {
  width: 160px; /* largeur personnalisée */
  height: 160px; /* hauteur personnalisée */
}

/* Style pour le bouton lorsque l'accordéon est ouvert */
.accordion-button:not(.collapsed) {
    background-color: #000; /* Couleur de fond du bouton ouvert */
    color: #ffffff; /* Couleur du texte du bouton ouvert */
}

/* Pour ajouter une transition douce */
.accordion-button {
    transition: background-color 0.3s ease, color 0.3s ease;
}

@media (max-width: 768px) {
  .about-background .content-overlay .masthead-heading {
    font-size: 60px; /* Taille de police pour petits écrans */
    margin-bottom: 15px; /* Ajustement de l'espacement */
  }
}

@media (max-width: 576px) {
  .about-background .content-overlay .masthead-heading {
    font-size: 40px; /* Taille de police pour très petits écrans */
    text-align: center; /* Centrer le texte sur les petits écrans */
  }
}

@media (max-width: 576px) {
  .content-overlay {
    text-align: center; /* Centrer le texte sur les petits écrans */
  }
}

@media (max-width: 992px) {
  .about-background .content-overlay .masthead-heading {
    font-size: 80px; /* Taille de police pour écrans moyens */
  }

  .btn-connexion *{
    color: #fff;
  }
}

@media (max-width: 768px) {
  .about-background .content-overlay .masthead-heading {
    font-size: 60px; /* Taille de police pour petits écrans */
    margin-bottom: 15px; /* Ajustement de l'espacement */
  }
}

.carousel-caption {
  position: absolute;
  bottom: 20px; /* Ajustez la position verticale */
  left: 50%; /* Centrer horizontalement */
  transform: translateX(-50%); /* Centrer le texte */
  text-align: center; /* Centrer le texte */
  padding: 10px; /* Espacement autour du texte */
  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent pour le texte */
  color: white; /* Couleur du texte */
}

@media (max-width: 576px) {
  .carousel-caption h5 {
      font-size: 1.5rem; /* Taille de police pour les petits écrans */
  }
  
  .carousel-caption p {
      font-size: 1rem; /* Taille de police pour le texte */
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .carousel-caption h5 {
      font-size: 2rem; /* Taille de police pour les écrans moyens */
  }

  .carousel-caption p {
      font-size: 1.2rem; /* Ajustez la taille du texte */
  }
}

@media (min-width: 768px) {
  .carousel-caption h5 {
      font-size: 2.5rem; /* Taille de police pour les grands écrans */
  }

  .carousel-caption p {
      font-size: 1.5rem; /* Taille de police pour le texte */
  }
}

section.login-section, section.register-section{
  padding-top: 120px !important; /* Ajustez la valeur en fonction de la hauteur de votre navbar */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.bsb-btn-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flash-message {
  position: fixed; /* Fixe le bandeau en bas de l'écran */
  bottom: 0; /* Place le bandeau tout en bas */
  left: 0; /* Aligne le bandeau à gauche */
  width: 100%; /* Fait en sorte que le bandeau occupe toute la largeur */
  background-color: #28a745; /* Couleur de fond vert (Bootstrap green) */
  color: white; /* Texte en blanc */
  text-align: center; /* Centre le texte */
  font-size: 16px; /* Taille du texte */
  z-index: 9999; /* S'assure que le bandeau reste au-dessus des autres éléments */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Ombre légère en haut du bandeau pour le mettre en valeur */
  animation: slideUp 0.5s ease-in-out; /* Animation pour faire glisser le bandeau du bas vers le haut */
}

/* Animation pour faire apparaître le bandeau */
@keyframes slideUp {
  0% {
      bottom: -50px; /* Le bandeau commence en dehors de l'écran */
  }
  100% {
      bottom: 0; /* Le bandeau finit en bas de la page */
  }
}

/* Optionnel : masquer le bandeau après quelques secondes */
.flash-message.hide {
  display: none;
}

.texte-or {
  background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#background-canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

`, "",{"version":3,"sources":["webpack://./assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');\r\n\r\n/* Variables de couleur */\r\n:root {\r\n  --control-color: rgba(0, 0, 0, 0.5);\r\n  --control-color-hover: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n/* Navbar Styling */\r\n#mainNav.navbar {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: transparent; /* Transparente pour se fondre dans la vidéo */\r\n  box-shadow: none;\r\n  z-index: 10;\r\n}\r\n\r\n#mainNav .navbar-brand,\r\n.login-section .navbar-brand,\r\n.sb-topnav .navbar-brand  {\r\n  font-family: \"Amatic SC\", \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-weight: 700;\r\n  font-size: 36px;\r\n}\r\n\r\n\r\n#mainNav .navbar-brand,\r\n#mainNav .nav-link {\r\n  color: #fff; /* Texte blanc pour contraste sur vidéo */\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  border-color: transparent;\r\n}\r\n\r\n#mainNav .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n/* Liens de la navbar */\r\n.nav-item .nav-link {\r\n  color: #fff;\r\n  margin-right: 1rem; /* Espace restauré entre les liens */\r\n}\r\n\r\n/* Dropdown Menu */\r\n.dropdown-menu {\r\n  background-color: rgba(255, 255, 255, 0.9); /* Légèrement transparent */\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown-item {\r\n  color: #333;\r\n}\r\n\r\n.dropdown-item:hover,\r\n.dropdown-item:focus {\r\n  background-color: rgba(240, 240, 240, 0.9);\r\n}\r\n\r\n/* Masthead Styling (Carousel Vidéo en pleine page) */\r\n.masthead {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh; /* Pleine hauteur */\r\n  background: #000;\r\n  overflow: hidden;\r\n}\r\n\r\n#videoCarousel.carousel {\r\n  height: 100vh; /* 100% de la hauteur de l’écran */\r\n}\r\n\r\n.videoCarousel .carousel-inner {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.videoCarousel .carousel-item {\r\n  height: 100vh;\r\n  display: none;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.videoCarousel .carousel-item.active {\r\n  display: block;\r\n}\r\n\r\n.videoCarousel .carousel-item video {\r\n  width: 100%;\r\n  height: 100vh;\r\n  object-fit: cover; /* Couvre toute la zone visible */\r\n}\r\n\r\n/* Carousel Control Styling */\r\n.videoCarousel .carousel-control-prev,\r\n.videoCarousel .carousel-control-next {\r\n  width: 5%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  opacity: 0.6;\r\n  transition: opacity 0.2s;\r\n}\r\n\r\n.videoCarousel .carousel-control-prev:hover,\r\n.videoCarousel .carousel-control-next:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.videoCarousel .carousel-control-prev-icon,\r\n.videoCarousel .carousel-control-next-icon {\r\n  background-color: var(--control-color);\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n\r\n.videoCarousel .carousel-control-prev-icon:hover,\r\n.videoCarousel .carousel-control-next-icon:hover {\r\n  background-color: var(--control-color-hover);\r\n}\r\n\r\n/* Video Styling */\r\nvideo.d-block.w-100 {\r\n  width: 100%;\r\n  height: 100vh;\r\n  object-fit: cover;\r\n}\r\n\r\n/* Media Queries */\r\n@media (max-width: 992px) {\r\n  .navbar-expand-lg .navbar-nav .nav-link {\r\n      padding: 0.5rem;\r\n  }\r\n  .dropdown-menu {\r\n      min-width: 100px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .videoCarousel .carousel-control-prev,\r\n  .videoCarousel .carousel-control-next {\r\n      width: 10%;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  #mainNav {\r\n      padding: 0.5rem 1rem;\r\n  }\r\n  .dropdown-menu {\r\n      font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n.search-container {\r\n  display: flex; /* Utiliser Flexbox pour aligner les éléments */\r\n  align-items: center; /* Centrer verticalement les éléments */\r\n  justify-content: center; /* Centrer horizontalement tous les éléments */\r\n  position: relative; /* Position relative pour contrôler les icônes */\r\n  background-color: white; /* Couleur de fond de la barre de recherche */\r\n  border-radius: 50px; /* Coins arrondis */\r\n  padding: 10px 20px; /* Espace intérieur */\r\n  width: 200px; /* Largeur initiale de la barre de recherche */\r\n  transition: all 0.3s ease; /* Transition pour tous les changements de propriété */\r\n}\r\n\r\n/* Style pour le conteneur du logo */\r\n.logo-container {\r\n  flex: 0 0 auto; /* Ne pas permettre à l'élément de grandir ou de se rétrécir */\r\n  margin-right: 10px; /* Espacement autour du logo */\r\n}\r\n\r\n/* Pour le logo */\r\n.logo {\r\n  max-height: 50px; /* Ajustez la hauteur du logo selon vos besoins */\r\n  max-width: 100%; /* Pour éviter que le logo dépasse le conteneur */\r\n}\r\n\r\n.search-container.active {\r\n  width: 300px; /* Largeur de la barre de recherche quand elle est active */\r\n}\r\n\r\n.search-input {\r\n  background: transparent; /* Fond transparent */\r\n  border: none; /* Pas de bordure */\r\n  color: #404040; /* Couleur du texte */\r\n  outline: none; /* Pas de contour */\r\n  width: 100%; /* Prendre toute la largeur disponible */\r\n  font-size: 16px;\r\n  padding-left: 30px; /* Espacement pour l'icône */\r\n  font-family: \"Merriweather Sans\", sans-serif;\r\n}\r\n\r\n/* Ajoute du style aux placeholders */\r\n.search-input::placeholder {\r\n  color: #b3b3b3; /* Couleur du placeholder */\r\n}\r\n\r\n.search-icon {\r\n  position: absolute; /* Position absolue pour la placer à l'intérieur du champ */\r\n  left: 10px; /* Déplacement à gauche */\r\n  fill: #404040; /* Couleur de l'icône */\r\n  width: 22px; /* Largeur augmentée */\r\n  height: 22px; /* Hauteur augmentée */\r\n}\r\n\r\n/* Séparateur vertical */\r\n.separator {\r\n  color: #404040;\r\n  margin: 0 10px; /* Espace autour du séparateur */\r\n}\r\n\r\n/* Icône de navigation \"parcourir\" */\r\n.browse-icon {\r\n  fill: #404040; /* Couleur de l'icône */\r\n  cursor: pointer; /* Curseur en forme de main pour indiquer qu'il est cliquable */\r\n  transition: fill 0.3s;\r\n  width: 22px; /* Largeur augmentée */\r\n  height: 22px; /* Hauteur augmentée */\r\n}\r\n\r\n.search-container.collapsed .separator,\r\n.search-container.collapsed .browse-icon {\r\n    display: none;\r\n}\r\n\r\n.clear-icon {\r\n  fill: #404040; /* Couleur de l'icône */\r\n  cursor: pointer; /* Curseur en forme de main pour indiquer qu'il est cliquable */\r\n  transition: fill 0.3s;\r\n  width: 27px; /* Largeur de l'icône de croix */\r\n  height: 27px; /* Hauteur de l'icône de croix */\r\n  margin-left: 10px; /* Espace autour de l'icône de croix */\r\n}\r\n\r\n\r\n.btn-connexion, .btn-demarrer{\r\n  background-color: #fff; /* Couleur de fond de la barre de recherche */\r\n  border-radius: 50px; /* Coins arrondis */\r\n  padding: 10px 20px; /* Espace intérieur */\r\n}\r\n\r\n.btn-connexion:hover{\r\n  background-color: #fff;\r\n}\r\n\r\n.btn-demarrer:hover{\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.logo-container-mobile{\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .logo-container-mobile{\r\n    display: block;\r\n  }\r\n  .logo-container{\r\n    display: none;\r\n  }\r\n  .nav-element{\r\n    flex-direction: column;\r\n    align-items: flex-start !important;\r\n  }\r\n  .nav-element > *{\r\n    margin-bottom: 10px;\r\n  }\r\n  .other-element-nav{\r\n    flex-direction: column;\r\n  }\r\n  .other-element-nav > *{\r\n    margin-bottom: 10px;\r\n  }\r\n  .other-element-nav a{\r\n    width: 200px;\r\n  }\r\n}\r\n\r\n.navbar-toggler {\r\n  position: absolute; /* Assure que le bouton est en position absolue */\r\n  top: 15px; /* Ajustez selon votre design */\r\n  right: 15px; /* Ajustez selon votre design */\r\n  z-index: 999; /* Assurez-vous qu'il est au-dessus des autres éléments */\r\n}\r\n\r\n.navbar-open {\r\n  background-color: white !important; /* Fond blanc */\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optionnel : ajout d'une ombre pour un effet de profondeur */\r\n}\r\n\r\n.navbar-open a, .navbar-open li {\r\n  color: #000 !important;\r\n}\r\n\r\n.navbar-open .search-container {\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.navbar-open .search-container input, \r\n.navbar-open .search-container .browse-icon,\r\n.navbar-open .search-container .clear-icon,\r\n.navbar-open .search-container .search-icon  {\r\n  color: #fff;\r\n  fill: #fff;\r\n}\r\n\r\n.navbar-open .other-element-nav a.btn-connexion,\r\n.navbar-open .other-element-nav div.btn-connexion{\r\n  background-color: #000;\r\n  color: #fff !important;\r\n}\r\n\r\ndiv.btn-connexion .rounded-circle{\r\n  border: 1px solid #000;\r\n}\r\n\r\ndiv.btn-connexion svg{\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\ndiv.btn-connexion a{\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.navbar-open .navbar-toggler-icon {\r\n  background-image: var(--bs-navbar-toggler-icon-bg) !important;\r\n}\r\n\r\n.content-overlay {\r\n  position: absolute; /* Positionnement absolu pour superposer le contenu */\r\n  top: 50%; /* Centrer verticalement */\r\n  left: 50%; /* Centrer horizontalement */\r\n  transform: translate(-50%, -50%); /* Déplacer pour centrer */\r\n  color: white; /* Couleur du texte */\r\n  text-align: right; /* Centrer le texte */\r\n  padding: 20px; /* Espacement autour du contenu */\r\n}\r\n\r\n/* Classe appliquée au nav lors du scroll */\r\n#mainNav.scrolled {\r\n  background-color: white;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  transition: background-color 0.6s ease, box-shadow 0.6s ease;\r\n}\r\n\r\n#mainNav.scrolled  .nav-link,\r\n#mainNav.scrolled  .navbar-brand {\r\n  color: black;\r\n}\r\n\r\n#mainNav.scrolled  .btn-connexion,\r\n#mainNav.scrolled  .search-container {\r\n  border: 1px solid black;\r\n}\r\n\r\n/* Initialisation de la couleur pour éviter les conflits */\r\n\r\n@media (min-width: 768px) {\r\n  header.masthead .masthead-subheading {\r\n    font-size: 2.25rem;\r\n    font-style: italic;\r\n    line-height: 2.25rem;\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\nheader.masthead .masthead-subheading {\r\n  font-size: 1.5rem;\r\n  font-style: italic;\r\n  line-height: 1.5rem;\r\n  margin-bottom: 25px;\r\n  font-family: \"Roboto Slab\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header.masthead .masthead-heading {\r\n    font-size: 4.5rem;\r\n    font-weight: 700;\r\n    line-height: 4.5rem;\r\n    margin-bottom: 4rem;\r\n  }\r\n}\r\n\r\nheader.masthead .masthead-heading {\r\n  font-size: 3.25rem;\r\n  font-weight: 700;\r\n  line-height: 3.25rem;\r\n  margin-bottom: 2rem;\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n}\r\n\r\n.about-background {\r\n  background-image: url('../images/header_about_background.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  height: 100vh; /* Ajustez la hauteur selon vos besoins */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.about-background .content-overlay {\r\n  text-align: center;\r\n  color: #fff;\r\n  /* Ajustez le style selon vos besoins */\r\n}\r\n\r\n.about-background .content-overlay .masthead-heading {\r\n  font-family: \"Amatic SC\", \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-size: 150px;\r\n  line-height: 1.1; /* Ajustez cette valeur pour réduire ou augmenter l'espacement entre les lignes */\r\n  margin-bottom: 20px; /* Ajoutez un espacement entre les lignes de texte */\r\n}\r\n\r\n.about-background .content-overlay .masthead-heading:nth-of-type(1) {\r\n  align-self: flex-start;\r\n}\r\n\r\n.about-background .content-overlay .masthead-heading:nth-of-type(2) {\r\n  align-self: flex-end;\r\n}\r\n\r\n[data-aos=\"fade-right\"], [data-aos=\"fade-left\"] {\r\n    opacity: 0;\r\n    transform: translateX(-50px);\r\n    transition: all 1s ease-in-out;\r\n}\r\n\r\n.team-photo {\r\n  width: 160px; /* largeur personnalisée */\r\n  height: 160px; /* hauteur personnalisée */\r\n}\r\n\r\n/* Style pour le bouton lorsque l'accordéon est ouvert */\r\n.accordion-button:not(.collapsed) {\r\n    background-color: #000; /* Couleur de fond du bouton ouvert */\r\n    color: #ffffff; /* Couleur du texte du bouton ouvert */\r\n}\r\n\r\n/* Pour ajouter une transition douce */\r\n.accordion-button {\r\n    transition: background-color 0.3s ease, color 0.3s ease;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .about-background .content-overlay .masthead-heading {\r\n    font-size: 60px; /* Taille de police pour petits écrans */\r\n    margin-bottom: 15px; /* Ajustement de l'espacement */\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .about-background .content-overlay .masthead-heading {\r\n    font-size: 40px; /* Taille de police pour très petits écrans */\r\n    text-align: center; /* Centrer le texte sur les petits écrans */\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .content-overlay {\r\n    text-align: center; /* Centrer le texte sur les petits écrans */\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .about-background .content-overlay .masthead-heading {\r\n    font-size: 80px; /* Taille de police pour écrans moyens */\r\n  }\r\n\r\n  .btn-connexion *{\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .about-background .content-overlay .masthead-heading {\r\n    font-size: 60px; /* Taille de police pour petits écrans */\r\n    margin-bottom: 15px; /* Ajustement de l'espacement */\r\n  }\r\n}\r\n\r\n.carousel-caption {\r\n  position: absolute;\r\n  bottom: 20px; /* Ajustez la position verticale */\r\n  left: 50%; /* Centrer horizontalement */\r\n  transform: translateX(-50%); /* Centrer le texte */\r\n  text-align: center; /* Centrer le texte */\r\n  padding: 10px; /* Espacement autour du texte */\r\n  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent pour le texte */\r\n  color: white; /* Couleur du texte */\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .carousel-caption h5 {\r\n      font-size: 1.5rem; /* Taille de police pour les petits écrans */\r\n  }\r\n  \r\n  .carousel-caption p {\r\n      font-size: 1rem; /* Taille de police pour le texte */\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 768px) {\r\n  .carousel-caption h5 {\r\n      font-size: 2rem; /* Taille de police pour les écrans moyens */\r\n  }\r\n\r\n  .carousel-caption p {\r\n      font-size: 1.2rem; /* Ajustez la taille du texte */\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carousel-caption h5 {\r\n      font-size: 2.5rem; /* Taille de police pour les grands écrans */\r\n  }\r\n\r\n  .carousel-caption p {\r\n      font-size: 1.5rem; /* Taille de police pour le texte */\r\n  }\r\n}\r\n\r\nsection.login-section, section.register-section{\r\n  padding-top: 120px !important; /* Ajustez la valeur en fonction de la hauteur de votre navbar */\r\n  background-image: url('../images/login_background.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n}\r\n\r\n.bsb-btn-circle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.flash-message {\r\n  position: fixed; /* Fixe le bandeau en bas de l'écran */\r\n  bottom: 0; /* Place le bandeau tout en bas */\r\n  left: 0; /* Aligne le bandeau à gauche */\r\n  width: 100%; /* Fait en sorte que le bandeau occupe toute la largeur */\r\n  background-color: #28a745; /* Couleur de fond vert (Bootstrap green) */\r\n  color: white; /* Texte en blanc */\r\n  text-align: center; /* Centre le texte */\r\n  font-size: 16px; /* Taille du texte */\r\n  z-index: 9999; /* S'assure que le bandeau reste au-dessus des autres éléments */\r\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Ombre légère en haut du bandeau pour le mettre en valeur */\r\n  animation: slideUp 0.5s ease-in-out; /* Animation pour faire glisser le bandeau du bas vers le haut */\r\n}\r\n\r\n/* Animation pour faire apparaître le bandeau */\r\n@keyframes slideUp {\r\n  0% {\r\n      bottom: -50px; /* Le bandeau commence en dehors de l'écran */\r\n  }\r\n  100% {\r\n      bottom: 0; /* Le bandeau finit en bas de la page */\r\n  }\r\n}\r\n\r\n/* Optionnel : masquer le bandeau après quelques secondes */\r\n.flash-message.hide {\r\n  display: none;\r\n}\r\n\r\n.texte-or {\r\n  background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);\r\n  background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n#background-canvas {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./assets/styles/Interface_user.css":
/*!******************************************!*\
  !*** ./assets/styles/Interface_user.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_Interface_user_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./Interface_user.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/Interface_user.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_Interface_user_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_Interface_user_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_Interface_user_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_Interface_user_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./app.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/styles/main.css":
/*!********************************!*\
  !*** ./assets/styles/main.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./main.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./assets/images/header_about_background.jpeg":
/*!****************************************************!*\
  !*** ./assets/images/header_about_background.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/header_about_background.9f3db93d.jpeg";

/***/ }),

/***/ "./assets/images/login_background.jpg":
/*!********************************************!*\
  !*** ./assets/images/login_background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/login_background.c7e22a3c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-54fbb0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1DQUFtQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQ0FBbUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtQ0FBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1DQUFtQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkdBQTJHLFNBQVMsS0FBSyxTQUFTLE9BQU8sT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLFFBQVEsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssNENBQTRDLGtqQkFBa2pCLDJDQUEyQyxpREFBaUQsMENBQTBDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLHdDQUF3QyxtQ0FBbUMsdURBQXVELGVBQWUsNENBQTRDLEtBQUssa0NBQWtDLGtCQUFrQixnREFBZ0QsNENBQTRDLGdEQUFnRCxnREFBZ0Qsb0NBQW9DLDhDQUE4Qyw0Q0FBNEMsdUNBQXVDLHFEQUFxRCxpQ0FBaUMsdUJBQXVCLGtCQUFrQiw4QkFBOEIseUJBQXlCLGlDQUFpQyxzQkFBc0IsS0FBSyxvQ0FBb0MsNkJBQTZCLHFDQUFxQyw4QkFBOEIsZ0NBQWdDLDhCQUE4QixLQUFLLGlFQUFpRSx1QkFBdUIsdUJBQXVCLDRCQUE0QixrQ0FBa0MsdUNBQXVDLGlJQUFpSSw0QkFBNEIsNEJBQTRCLG1CQUFtQiwrQkFBK0IsZ1JBQWdSLHVCQUF1QixxQ0FBcUMseUJBQXlCLHFDQUFxQyxxQ0FBcUMsd0NBQXdDLHVCQUF1QixnQ0FBZ0Msc0JBQXNCLHVDQUF1QywwQkFBMEIsOEJBQThCLHlCQUF5QixvQkFBb0IscURBQXFELG9EQUFvRCwyQkFBMkIsOEJBQThCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLGdDQUFnQyx3QkFBd0IseUJBQXlCLHlCQUF5Qix1QkFBdUIsK0JBQStCLHFDQUFxQyxrQ0FBa0MsaUNBQWlDLDhCQUE4Qix5QkFBeUIsK0JBQStCLG1GQUFtRixnREFBZ0QsdUJBQXVCLHFDQUFxQyxLQUFLLGlFQUFpRSw0QkFBNEIsNkJBQTZCLHVCQUF1QiwrQkFBK0IsOEJBQThCLG1CQUFtQiw2REFBNkQsb0RBQW9ELDBCQUEwQix5Q0FBeUMsdUJBQXVCLHVCQUF1QixnQ0FBZ0Msa0NBQWtDLHVCQUF1Qiw2Q0FBNkMsZ0NBQWdDLGlDQUFpQyxtQ0FBbUMsa0NBQWtDLHVCQUF1QixrQ0FBa0MsNkJBQTZCLDhCQUE4Qiw0QkFBNEIsd0JBQXdCLHFDQUFxQyx5QkFBeUIsOElBQThJLGdEQUFnRCw2Q0FBNkMscUNBQXFDLEtBQUssa0ZBQWtGLHNDQUFzQyxnREFBZ0QsOEJBQThCLCtCQUErQixrQ0FBa0MscUNBQXFDLGdEQUFnRCw0QkFBNEIsNkJBQTZCLGlDQUFpQyxvQ0FBb0Msc0JBQXNCLDJCQUEyQixzQkFBc0Isd0JBQXdCLDZCQUE2Qix3QkFBd0Isb0NBQW9DLDJCQUEyQix1QkFBdUIsa0JBQWtCLHlCQUF5QiwwQ0FBMEMsdUJBQXVCLDJCQUEyQiwyQkFBMkIsdUJBQXVCLGlDQUFpQyx1QkFBdUIsMkhBQTJILG1DQUFtQywwQ0FBMEMsbUpBQW1KLDBCQUEwQixrQ0FBa0MseUNBQXlDLHlEQUF5RCx1QkFBdUIsMkRBQTJELHVCQUF1QixtREFBbUQseUNBQXlDLGlEQUFpRCx1REFBdUQsbUJBQW1CLHVEQUF1RCxzQ0FBc0MsK0JBQStCLEtBQUsscUhBQXFILHVEQUF1RCx3REFBd0QsdUNBQXVDLG1CQUFtQiwrQkFBK0IsMEJBQTBCLGdDQUFnQyxpQ0FBaUMsOEJBQThCLDRCQUE0QiwrQkFBK0Isc0JBQXNCLCtCQUErQiw2Q0FBNkMseUJBQXlCLGdEQUFnRCx3QkFBd0IsbUNBQW1DLHVDQUF1QyxtQ0FBbUMsd0NBQXdDLHVDQUF1QyxzQ0FBc0MscUNBQXFDLCtCQUErQix1RUFBdUUsOENBQThDLHdDQUF3QyxnRUFBZ0UscUVBQXFFLCtDQUErQyxvRUFBb0UsMENBQTBDLGdEQUFnRCw2Q0FBNkMsOENBQThDLDhDQUE4QyxtREFBbUQsMkNBQTJDLDhDQUE4Qyw0Q0FBNEMsNkNBQTZDLCtDQUErQywyQkFBMkIsMkNBQTJDLHNCQUFzQixnREFBZ0QsMkVBQTJFLGtCQUFrQixnREFBZ0Qsd0NBQXdDLHlCQUF5Qix5QkFBeUIsZ0RBQWdELHFDQUFxQyxzRkFBc0YsNERBQTRELDRCQUE0QiwrQkFBK0IsMkJBQTJCLGtCQUFrQixzREFBc0QseUJBQXlCLDREQUE0RCx1QkFBdUIsd0JBQXdCLHVCQUF1QixvQkFBb0IscUZBQXFGLG9CQUFvQix5QkFBeUIsNkNBQTZDLDRCQUE0Qiw4QkFBOEIsNEJBQTRCLHNDQUFzQyxzQkFBc0IsdURBQXVELG1EQUFtRCwrREFBK0QsK0JBQStCLG9EQUFvRCw4QkFBOEIsZ0VBQWdFLGlDQUFpQyxzREFBc0QsNkJBQTZCLDBDQUEwQyxjQUFjLHNDQUFzQyx3Q0FBd0Msa0RBQWtELDhEQUE4RCw4Q0FBOEMsc0JBQXNCLHdCQUF3Qix3QkFBd0IseUJBQXlCLDZCQUE2QixtQkFBbUIsdUJBQXVCLDJFQUEyRSxnREFBZ0Qsb0RBQW9ELHdDQUF3Qyw4QkFBOEIsaUhBQWlILGdEQUFnRCxtQkFBbUIscUNBQXFDLEtBQUssNkNBQTZDLGtEQUFrRCxpQkFBaUIsaUNBQWlDLHNDQUFzQywrQ0FBK0Msb0RBQW9ELHVEQUF1RCxxREFBcUQsK0NBQStDLDJDQUEyQyw2Q0FBNkMsb0RBQW9ELDBEQUEwRCwrQ0FBK0MsK0NBQStDLCtDQUErQywrQ0FBK0MsbVJBQW1SLDZEQUE2RCxvREFBb0QsaURBQWlELHFFQUFxRSwyQkFBMkIsc0JBQXNCLHdCQUF3Qiw0QkFBNEIsdUNBQXVDLDJFQUEyRSx1QkFBdUIsc0RBQXNELHlEQUF5RCx3REFBd0Qsb0RBQW9ELDRDQUE0Qyw4QkFBOEIsZ0NBQWdDLHFEQUFxRCxzREFBc0QscUJBQXFCLG1DQUFtQyx3Q0FBd0Msb0RBQW9ELGdFQUFnRSxzRUFBc0Usc0JBQXNCLCtCQUErQix3QkFBd0IseUJBQXlCLDZCQUE2QixvQ0FBb0MsNkJBQTZCLHdCQUF3QiwwQkFBMEIsd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsbURBQW1ELCtCQUErQiw4Q0FBOEMsMkRBQTJELDhEQUE4RCwyQ0FBMkMscURBQXFELDJEQUEyRCw4REFBOEQsdUNBQXVDLHNDQUFzQyw0Q0FBNEMsbUVBQW1FLDZSQUE2Uix5Q0FBeUMsc0NBQXNDLGdDQUFnQyx1TEFBdUwsNERBQTRELHlDQUF5QywrQ0FBK0MsaUVBQWlFLDhDQUE4QywyQ0FBMkMsMENBQTBDLHNEQUFzRCxtVEFBbVQsK0NBQStDLDJEQUEyRCx1RUFBdUUsMFRBQTBULHVEQUF1RCxvRkFBb0YsK0NBQStDLDRDQUE0Qyw2Q0FBNkMsOENBQThDLGlCQUFpQixxQ0FBcUMsaUJBQWlCLHFDQUFxQyxpREFBaUQsc0RBQXNELDRDQUE0QywyQ0FBMkMsa0JBQWtCLGdDQUFnQyxlQUFlLHFDQUFxQyw0Q0FBNEMsa0JBQWtCLHdDQUF3QyxlQUFlLHVDQUF1QyxlQUFlLDBDQUEwQyxlQUFlLDRDQUE0QyxrQkFBa0IseUNBQXlDLGVBQWUseUNBQXlDLDRDQUE0QyxlQUFlLHVDQUF1Qyw4Q0FBOEMsZUFBZSwwQ0FBMEMscUJBQXFCLDZCQUE2QixzQ0FBc0MsbUJBQW1CLDJCQUEyQix5RkFBeUYsa0JBQWtCLDJCQUEyQix3RkFBd0Ysa0NBQWtDLGdDQUFnQyxxREFBcUQsc0JBQXNCLHFDQUFxQyxnREFBZ0Qsc0JBQXNCLGtEQUFrRCxzQkFBc0IsOENBQThDLEtBQUssa0NBQWtDLHlCQUF5Qix3Q0FBd0Msc0JBQXNCLCtDQUErQyxzQkFBc0Isb0RBQW9ELEtBQUssdUJBQXVCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLDJDQUEyQywwQkFBMEIsdUJBQXVCLCtDQUErQyxzQkFBc0IsMENBQTBDLCtDQUErQywyQkFBMkIsc0JBQXNCLCtCQUErQix1Q0FBdUMscUJBQXFCLHFCQUFxQix1Q0FBdUMsZ0NBQWdDLCtEQUErRCxpQ0FBaUMsT0FBTywwRUFBMEUsc0JBQXNCLHVCQUF1QiwyQkFBMkIsZUFBZSxnQkFBZ0Isb0JBQW9CLHFCQUFxQix5QkFBeUIsc0JBQXNCLHFCQUFxQiw2Q0FBNkMsU0FBUyx3Q0FBd0MsMkNBQTJDLDZDQUE2QyxtREFBbUQsMkJBQTJCLHdEQUF3RCx1RUFBdUUsMENBQTBDLFNBQVMsbUVBQW1FLDRCQUE0QixTQUFTLDBFQUEwRSxzQkFBc0IsYUFBYSxLQUFLLDJGQUEyRixnQ0FBZ0Msb0JBQW9CLHdCQUF3QixxQkFBcUIsMEJBQTBCLGtDQUFrQyxxQkFBcUIsa0JBQWtCLDhCQUE4Qix1QkFBdUIsS0FBSywrQ0FBK0MsMkNBQTJDLHFCQUFxQixzQkFBc0IsK0JBQStCLHFCQUFxQiw4QkFBOEIsc0NBQXNDLHlCQUF5QiwyQ0FBMkMsK0JBQStCLDBCQUEwQiw2Q0FBNkMsS0FBSyxvRUFBb0UscUNBQXFDLDBCQUEwQix5QkFBeUIsc0NBQXNDLHFEQUFxRCxzQkFBc0IsNEJBQTRCLDRCQUE0QiwrQkFBK0IsMkJBQTJCLDhCQUE4QixLQUFLLHVFQUF1RSw2QkFBNkIsZ0ZBQWdGLDhCQUE4QiwwQkFBMEIsNENBQTRDLDBGQUEwRixzQ0FBc0MsbUVBQW1FLDRCQUE0QixtQ0FBbUMsd0NBQXdDLHdCQUF3QiwyQkFBMkIsMEJBQTBCLGtDQUFrQywyQ0FBMkMsb0VBQW9FLDRDQUE0QyxxREFBcUQsMkNBQTJDLHVFQUF1RSw0Q0FBNEMsZ0ZBQWdGLDRDQUE0QywyREFBMkQsd0JBQXdCLDZDQUE2QyxzQ0FBc0MsbUJBQW1CO0FBQ3hpNEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0MEJ2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPQUFPLHlGQUF5RixpQ0FBaUMsZ0NBQWdDLEdBQUcsdUJBQXVCO0FBQzNMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdkM7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsbWxCQUF3UjtBQUNwVSw0Q0FBNEMsMkpBQXlEO0FBQ3JHLDRDQUE0QywySUFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixrSEFBa0gsa0JBQWtCO0FBQ3BJLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkI7QUFDQSxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixhQUFhO0FBQ2Isb0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsa0NBQWtDO0FBQ2xDLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsV0FBVztBQUNYLGVBQWU7QUFDZiw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdHQUFnRyxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsV0FBVyxRQUFRLE1BQU0sc0JBQXNCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsd0JBQXdCLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxzQkFBc0IsYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssc0JBQXNCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sc0JBQXNCLHlCQUF5QixPQUFPLFlBQVksTUFBTSx3QkFBd0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsV0FBVyx3QkFBd0IsYUFBYSxPQUFPLFlBQVksTUFBTSxzQkFBc0IsT0FBTyxLQUFLLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsT0FBTyxZQUFZLE1BQU0sVUFBVSxzQkFBc0IsT0FBTyxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixhQUFhLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsYUFBYSx1QkFBdUIsdUJBQXVCLHlCQUF5QixRQUFRLEtBQUssd0JBQXdCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssd0JBQXdCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssd0JBQXdCLHVCQUF1Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sWUFBWSxNQUFNLHdCQUF3Qix1QkFBdUIsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxzQkFBc0IseUJBQXlCLE1BQU0sTUFBTSxLQUFLLEtBQUssc0JBQXNCLHlCQUF5QixNQUFNLE1BQU0sS0FBSyxLQUFLLHdCQUF3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QUFDMUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxSEFBTzs7OztBQUlvRjtBQUM1RyxPQUFPLGlFQUFlLHFIQUFPLElBQUkscUhBQU8sVUFBVSxxSEFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW50ZXJmYWNlX3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW5fR1NBUC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbl9UaHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0ludGVyZmFjZV91c2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0ludGVyZmFjZV91c2VyLmNzcz9iYTc3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz9jNWNkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3M/NDZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsIi8vIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGFzc2V0cy9hcHAuanNcbmltcG9ydCAnLi9ib290c3RyYXAuanMnOyAgLy8gSW5pdGlhbGlzYXRpb24gZGUgQm9vdHN0cmFwIGV0IGF1dHJlc1xuXG4vLyBJbXBvcnRhdGlvbiBkZXMgZmljaGllcnMgQ1NTXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL0ludGVyZmFjZV91c2VyLmNzcyc7XG5cbi8vIEltcG9ydGF0aW9uIGRlcyBmaWNoaWVycyBKUyBwZXJzb25uYWxpc8Opc1xuaW1wb3J0ICcuL2pzL21haW4uanMnO1xuaW1wb3J0ICcuL2pzL2ludGVyZmFjZV91c2VyLmpzJztcblxuLy8gSW5pdGlhbGlzYXRpb24gZGUgQU9TIChBbmltYXRpb24gT24gU2Nyb2xsKVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcblxuaW1wb3J0ICcuL2pzL21haW5fR1NBUC5qcyc7XG5pbXBvcnQgJy4vanMvbWFpbl9UaHJlZS5qcyc7XG5cbkFPUy5pbml0KHtcbiAgICBkdXJhdGlvbjogNTAwMCwgLy8gRHVyw6llIGRlIGwnYW5pbWF0aW9uIGVuIG1pbGxpc2Vjb25kZXNcbiAgICBvbmNlOiB0cnVlICAgICAgLy8gQW5pbWF0aW9uIGpvdcOpZSB1bmUgc2V1bGUgZm9pc1xufSk7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCIvLyBhc3NldHMvYm9vdHN0cmFwLmpzXG5pbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcbmltcG9ydCAqIGFzIFR1cmJvIGZyb20gXCJAaG90d2lyZWQvdHVyYm9cIjtcblR1cmJvLnN0YXJ0KCk7ICAvLyBJbml0aWFsaXNhdGlvbiBkZSBUdXJib1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7ICAvLyBJbXBvcnRhdGlvbiBkZSBCb290c3RyYXAgQ1NTXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYm9vdHN0cmFwJzsgIC8vIEltcG9ydGF0aW9uIGRlIEJvb3RzdHJhcCBUb29sdGlwXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7ICAvLyBJbXBvcnRhdGlvbiBkZSBBT1MgKEFuaW1hdGlvbiBPbiBTY3JvbGwpXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnOyAgLy8gU3R5bGVzIEFPU1xuXG4vLyBEw6ltYXJyZSBsJ2FwcGxpY2F0aW9uIFN0aW11bHVzIGV0IGNoYXJnZSBsZXMgY29udHLDtGxldXJzIGRlcHVpcyBsZSByw6lwZXJ0b2lyZSBjb250cm9sbGVyc1xuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJywgIC8vIENoYXJnZSB0b3VzIGxlcyBjb250csO0bGV1cnMgZGVwdWlzIGFzc2V0cy9jb250cm9sbGVyc1xuICAgIHRydWUsIC8vIEluY2x1dCBsZXMgc291cy1kb3NzaWVyc1xuICAgIC9cXC4oanx0KXN4PyQvICAvLyBDaGFyZ2UgdG91cyBsZXMgZmljaGllcnMgSlMvVFNcbikpO1xuXG4vLyBJbml0aWFsaXNhdGlvbiBkZXMgdG9vbHRpcHMgQm9vdHN0cmFwIGFwcsOocyBsZSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2UgdmlhIFR1cmJvXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKTtcbiAgICB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XG4gICAgICAgIHJldHVybiBuZXcgVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBJbml0aWFsaXNhdGlvbiBkZSBBT1NcbkFPUy5pbml0KCk7XG4iLCJcclxuLyohXHJcbiAgICAqIFN0YXJ0IEJvb3RzdHJhcCAtIFNCIEFkbWluIHY3LjAuNyAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUvc2ItYWRtaW4pXHJcbiAgICAqIENvcHlyaWdodCAyMDEzLTIwMjMgU3RhcnQgQm9vdHN0cmFwXHJcbiAgICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAgICAqL1xyXG4gICAgLy8gXHJcbi8vIFNjcmlwdHNcclxuLy8gXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHNpZGUgbmF2aWdhdGlvblxyXG4gICAgY29uc3Qgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI3NpZGViYXJUb2dnbGUnKTtcclxuICAgIGlmIChzaWRlYmFyVG9nZ2xlKSB7XHJcbiAgICAgICAgLy8gVW5jb21tZW50IEJlbG93IHRvIHBlcnNpc3Qgc2lkZWJhciB0b2dnbGUgYmV0d2VlbiByZWZyZXNoZXNcclxuICAgICAgICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NifHNpZGViYXItdG9nZ2xlJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NiLXNpZGVuYXYtdG9nZ2xlZCcpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgZXN0IHN1cHBvcnTDqScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgblxcJ2VzdCBwYXMgc3VwcG9ydMOpJyk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzYi1zaWRlbmF2LXRvZ2dsZWQnKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NifHNpZGViYXItdG9nZ2xlJywgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NiLXNpZGVuYXYtdG9nZ2xlZCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coJ0xlIHNjcmlwdCBlc3QgY2hhcmfDqScpO1xyXG4iLCJmdW5jdGlvbiBpbml0aWFsaXplU2VhcmNoKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3QgY2xlYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWljb24nKTtcclxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXBhcmF0b3InKTtcclxuICAgIGNvbnN0IGJyb3dzZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJvd3NlLWljb24nKTtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTmF2Jyk7XHJcbiAgICBjb25zdCB0b2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci10b2dnbGVyJyk7XHJcblxyXG4gICAgaWYgKHNlYXJjaENvbnRhaW5lcikge1xyXG4gICAgICAgIHNlYXJjaENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlYXJjaENvbnRhaW5lci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBicm93c2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBicm93c2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBicm93c2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjbGVhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY2xlYXJJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNlcGFyYXRvci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgIGJyb3dzZUljb24uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCduYXZiYXItb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gRm9uY3Rpb24gcG91ciBham91dGVyIGxhIGNsYXNzZSBcInNjcm9sbGVkXCIgbG9yc3F1ZSBsJ3V0aWxpc2F0ZXVyIGRlc2NlbmQgZGUgNTBweFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1MCkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbi8vIEV4w6ljdXRlIGxhIGZvbmN0aW9uIGQnaW5pdGlhbGlzYXRpb24gbG9ycyBkdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2VcclxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplU2VhcmNoKTtcclxuXHJcbi8vIFNpIHZvdXMgdXRpbGlzZXogVHVyYm8gKFN5bWZvbnkgVVgpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGluaXRpYWxpemVTZWFyY2gpO1xyXG5cclxuLy8gU2kgdm91cyB1dGlsaXNleiBUdXJib2xpbmtzXHJcbi8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvbGlua3M6bG9hZFwiLCBpbml0aWFsaXplU2VhcmNoKTtcclxuIiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG4vLyBBbmltYXRpb24gcG91ciBsZSB0aXRyZSBldCBzb3VzLXRpdHJlXHJcbmdzYXAuZnJvbShcIi5tYXN0aGVhZC1oZWFkaW5nXCIsIHtcclxuICAgIHk6IDUwLCAvLyBEw6lwYXJ0IGVuIGJhc1xyXG4gICAgb3BhY2l0eTogMCwgLy8gRMOpcGFydCBpbnZpc2libGVcclxuICAgIGR1cmF0aW9uOiAxLjUsIC8vIER1csOpZSBkZSBsJ2FuaW1hdGlvblxyXG4gICAgZWFzZTogXCJwb3dlcjMub3V0XCIsIC8vIFRyYW5zaXRpb24gZG91Y2VcclxuICAgIGRlbGF5OiAwLjUsIC8vIETDqWxhaSBhdmFudCBsZSBkw6lidXRcclxufSk7XHJcblxyXG5nc2FwLmZyb20oXCIubWFzdGhlYWQtc3ViaGVhZGluZ1wiLCB7XHJcbiAgICB5OiA1MCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICBkdXJhdGlvbjogMS4yLFxyXG4gICAgZWFzZTogXCJwb3dlcjMub3V0XCIsXHJcbiAgICBkZWxheTogMC43LFxyXG59KTtcclxuXHJcbi8vIEFuaW1hdGlvbiBwb3VyIGxlIGJvdXRvblxyXG5nc2FwLmZyb20oXCIuYnRuLWRlbWFycmVyXCIsIHtcclxuICAgIHNjYWxlOiAwLjgsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgZHVyYXRpb246IDEuMixcclxuICAgIGVhc2U6IFwiZWxhc3RpYy5vdXQoMSwgMC4zKVwiLFxyXG4gICAgZGVsYXk6IDEsXHJcbn0pO1xyXG5cclxuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvQ2Fyb3VzZWxcIik7XHJcblxyXG5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwic2xpZGUuYnMuY2Fyb3VzZWxcIiwgKCkgPT4ge1xyXG4gICAgZ3NhcC5mcm9tVG8oXCIubWFzdGhlYWQtaGVhZGluZ1wiLCBcclxuICAgICAgICB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMS41LCBlYXNlOiBcInBvd2VyMy5vdXRcIiB9XHJcbiAgICApO1xyXG5cclxuICAgIGdzYXAuZnJvbVRvKFwiLm1hc3RoZWFkLXN1YmhlYWRpbmdcIixcclxuICAgICAgICB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMS4yLCBlYXNlOiBcInBvd2VyMy5vdXRcIiwgZGVsYXk6IDAuMiB9XHJcbiAgICApO1xyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmQtY2FudmFzXCIpO1xyXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICA3NSxcclxuICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgMC4xLFxyXG4gICAgMTAwMFxyXG4pO1xyXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzLCBhbHBoYTogdHJ1ZSB9KTtcclxucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbi8vIEFqb3V0ZXIgZGVzIHBhcnRpY3VsZXNcclxuY29uc3QgcGFydGljbGVHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG5jb25zdCBwYXJ0aWNsZUNvdW50ID0gNTAwMDtcclxuY29uc3QgcGFydGljbGVQb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBhcnRpY2xlQ291bnQgKiAzKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVDb3VudCAqIDM7IGkrKykge1xyXG4gICAgcGFydGljbGVQb3NpdGlvbnNbaV0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA1MDA7IC8vIFLDqXBhcnRpZXMgYWzDqWF0b2lyZW1lbnRcclxufVxyXG5cclxucGFydGljbGVHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICBcInBvc2l0aW9uXCIsXHJcbiAgICBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBhcnRpY2xlUG9zaXRpb25zLCAzKVxyXG4pO1xyXG5cclxuY29uc3QgcGFydGljbGVNYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7XHJcbiAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICBzaXplOiAxLFxyXG4gICAgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxufSk7XHJcblxyXG5jb25zdCBwYXJ0aWNsZXMgPSBuZXcgVEhSRUUuUG9pbnRzKHBhcnRpY2xlR2VvbWV0cnksIHBhcnRpY2xlTWF0ZXJpYWwpO1xyXG5zY2VuZS5hZGQocGFydGljbGVzKTtcclxuXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gNTA7XHJcblxyXG4vLyBBbmltYXRpb24gZGVzIHBhcnRpY3VsZXNcclxuY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICBwYXJ0aWNsZXMucm90YXRpb24ueSArPSAwLjAwMjsgLy8gUm90YXRpb24gbGVudGVcclxuICAgIHBhcnRpY2xlcy5yb3RhdGlvbi54ICs9IDAuMDAxOyAvLyBSb3RhdGlvbiBsZW50ZVxyXG5cclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxufTtcclxuXHJcbmFuaW1hdGUoKTtcclxuXHJcbi8vIEFqdXN0ZW1lbnQgZHUgY2FudmFzIGF1IHJlZGltZW5zaW9ubmVtZW50IGRlIGxhIGZlbsOqdHJlXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgICAgICByZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKG51bGwpOyAvLyBBcnLDqnRlIGwnYW5pbWF0aW9uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoYW5pbWF0ZSk7IC8vIFJlZMOpbWFycmUgbCdhbmltYXRpb25cclxuICAgIH1cclxufSk7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHZpZXdCb3g9JTI3MCAwIDMwIDMwJTI3JTNlJTNjcGF0aCBzdHJva2U9JTI3cmdiYSUyODAsIDAsIDAsIDAuNTUlMjklMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLW1pdGVybGltaXQ9JTI3MTAlMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgZD0lMjdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB2aWV3Qm94PSUyNzAgMCAzMCAzMCUyNyUzZSUzY3BhdGggc3Ryb2tlPSUyN3JnYmElMjgyNTUsIDI1NSwgMjU1LCAwLjU1JTI5JTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1taXRlcmxpbWl0PSUyNzEwJTI3IHN0cm9rZS13aWR0aD0lMjcyJTI3IGQ9JTI3TTQgN2gyMk00IDE1aDIyTTQgMjNoMjIlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjcgZmlsbD0lMjclMjMyMTI1MjklMjclM2UlM2NwYXRoIGZpbGwtcnVsZT0lMjdldmVub2RkJTI3IGQ9JTI3TTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyBmaWxsPSUyNyUyMzBjNjNlNCUyNyUzZSUzY3BhdGggZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDQwMDs3MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Tm90bytTYW5zOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcclxuXHJcbi8qIVxyXG4qIFN0YXJ0IEJvb3RzdHJhcCAtIFNCIEFkbWluIHY3LjAuNyAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUvc2ItYWRtaW4pXHJcbiogQ29weXJpZ2h0IDIwMTMtMjAyMyBTdGFydCBCb290c3RyYXBcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1zYi1hZG1pbi9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4qL1xyXG4vKiFcclxuICogQm9vdHN0cmFwICB2NS4yLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXHJcbiAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzXHJcbiAqIENvcHlyaWdodCAyMDExLTIwMjIgVHdpdHRlciwgSW5jLlxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcclxuICovXHJcblxyXG5cclxuKixcclxuOjphZnRlcixcclxuOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246bm8tcHJlZmVyZW5jZSkge1xyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoXHJcbiAgICB9XHJcbn1cclxuXHJcbmJvZHkuSW50ZXJmYWNlX3VzZXJfYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYnMtYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJzLWJvZHktZm9udC1zaXplKTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1icy1ib2R5LWZvbnQtd2VpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1icy1ib2R5LWxpbmUtaGVpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcclxuICAgIHRleHQtYWxpZ246IHZhcigtLWJzLWJvZHktdGV4dC1hbGlnbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ib2R5LWJnKTtcclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLkludGVyZmFjZV91c2VyX2JvZHkgaHIge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XHJcbiAgICBvcGFjaXR5OiAuMjVcclxufVxyXG5cclxuLkludGVyZmFjZV91c2VyX2JvZHkgdWwge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLkludGVyZmFjZV91c2VyX2JvZHkgdWwgdWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uSW50ZXJmYWNlX3VzZXJfYm9keSAuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAuODc1ZW1cclxufVxyXG5cclxuLkludGVyZmFjZV91c2VyX2JvZHkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5sYXlvdXRTaWRlbmF2X2NvbnRlbnQgYnV0dG9uOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xyXG4gICAgb3V0bGluZTogMFxyXG59XHJcblxyXG5bcm9sZT1idXR0b25dIHtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG5bdHlwZT1idXR0b25dLFxyXG5idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b25cclxufVxyXG5cclxuW3R5cGU9YnV0dG9uXTpub3QoOmRpc2FibGVkKSxcclxuW3R5cGU9cmVzZXRdOm5vdCg6ZGlzYWJsZWQpLFxyXG5bdHlwZT1zdWJtaXRdOm5vdCg6ZGlzYWJsZWQpLFxyXG5idXR0b246bm90KDpkaXNhYmxlZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbjo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCxcclxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIsXHJcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWhvdXItZmllbGQsXHJcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZSxcclxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQsXHJcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXRleHQsXHJcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmVcclxufVxyXG5cclxuOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b25cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XHJcbiAgICAtLWJzLWd1dHRlci15OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIC41KTtcclxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAuNSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSkge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sW3R5cGU9ZmlsZV06bm90KDpkaXNhYmxlZCk6bm90KFtyZWFkb25seV0pIHtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIC4yNSlcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcclxuICAgIGhlaWdodDogMS41ZW1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG9wYWNpdHk6IDFcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgb3BhY2l0eTogMVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIG1hcmdpbjogLS4zNzVyZW0gLS43NXJlbTtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogLjc1cmVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC43NXJlbTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2UpIHtcclxuICAgIC5mb3JtLWNvbnRyb2w6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6aG92ZXI6bm90KDpkaXNhYmxlZCk6bm90KFtyZWFkb25seV0pOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlMGUzXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtc206OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcclxuICAgIG1hcmdpbjogLS4yNXJlbSAtLjVyZW07XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IC41cmVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC41cmVtXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtbGc6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBtYXJnaW46IC0uNXJlbSAtMXJlbTtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMXJlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIG1pbi13aWR0aDogMFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiA1XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDJcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5idG46Zm9jdXMge1xyXG4gICAgei1pbmRleDogNVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+Om5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSk6bm90KC5mb3JtLWZsb2F0aW5nKSB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cD46bm90KDpmaXJzdC1jaGlsZCk6bm90KC5kcm9wZG93bi1tZW51KTpub3QoLnZhbGlkLXRvb2x0aXApOm5vdCgudmFsaWQtZmVlZGJhY2spOm5vdCguaW52YWxpZC10b29sdGlwKTpub3QoLmludmFsaWQtZmVlZGJhY2spIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBcclxufVxyXG5cclxuLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2w6bm90KDpmb2N1cykuaXMtdmFsaWQge1xyXG4gICAgei1pbmRleDogM1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpub3QoOmZvY3VzKS5pcy1pbnZhbGlkIHtcclxuICAgIHotaW5kZXg6IDRcclxufVxyXG5cclxuLmxheW91dFNpZGVuYXZfY29udGVudCAuYnRuOmZvY3VzLXZpc2libGUge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWJ0bi1ob3Zlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItYmcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yKTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1icy1idG4tZm9jdXMtYm94LXNoYWRvdylcclxufVxyXG5cclxuOm5vdCguYnRuLWNoZWNrKSsuYnRuOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubGF5b3V0U2lkZW5hdl9jb250ZW50IC5idG46Zmlyc3QtY2hpbGQ6YWN0aXZlOmZvY3VzLXZpc2libGUsXHJcbjpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmU6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1icy1idG4tZm9jdXMtYm94LXNoYWRvdylcclxufVxyXG5cclxuLmxheW91dFNpZGVuYXZfY29udGVudCAuYnRuLWxpbms6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtYnRuLWNvbG9yKVxyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogLjI1NWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC4yNTVlbTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIC0tYnMtZHJvcGRvd24temluZGV4OiAxMDAwO1xyXG4gICAgLS1icy1kcm9wZG93bi1taW4td2lkdGg6IDEwcmVtO1xyXG4gICAgLS1icy1kcm9wZG93bi1wYWRkaW5nLXg6IDA7XHJcbiAgICAtLWJzLWRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4gICAgLS1icy1kcm9wZG93bi1zcGFjZXI6IDAuMTI1cmVtO1xyXG4gICAgLS1icy1kcm9wZG93bi1mb250LXNpemU6IDFyZW07XHJcbiAgICAtLWJzLWRyb3Bkb3duLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgLS1icy1kcm9wZG93bi1iZzogI2ZmZjtcclxuICAgIC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xyXG4gICAgLS1icy1kcm9wZG93bi1ib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IGNhbGMoMC4zNzVyZW0gLSAxcHgpO1xyXG4gICAgLS1icy1kcm9wZG93bi1kaXZpZGVyLWJnOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xyXG4gICAgLS1icy1kcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAwLjVyZW07XHJcbiAgICAtLWJzLWRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC0tYnMtZHJvcGRvd24tbGluay1jb2xvcjogIzIxMjUyOTtcclxuICAgIC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogIzFlMjEyNTtcclxuICAgIC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1iZzogI2U5ZWNlZjtcclxuICAgIC0tYnMtZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAjMGQ2ZWZkO1xyXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAjYWRiNWJkO1xyXG4gICAgLS1icy1kcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMXJlbTtcclxuICAgIC0tYnMtZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiAgICAtLWJzLWRyb3Bkb3duLWhlYWRlci1jb2xvcjogIzZjNzU3ZDtcclxuICAgIC0tYnMtZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteDogMXJlbTtcclxuICAgIC0tYnMtZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteTogMC41cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogdmFyKC0tYnMtZHJvcGRvd24temluZGV4KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IHZhcigtLWJzLWRyb3Bkb3duLW1pbi13aWR0aCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1icy1kcm9wZG93bi1wYWRkaW5nLXkpIHZhcigtLWJzLWRyb3Bkb3duLXBhZGRpbmcteCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJzLWRyb3Bkb3duLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kcm9wZG93bi1iZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItcmFkaXVzKVxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1lbmQge1xyXG4gICAgLS1icy1wb3NpdGlvbjogZW5kXHJcbn1cclxuXHJcbi5kcm9wZG93bi1kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbjogdmFyKC0tYnMtZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teSkgMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYnMtZHJvcGRvd24tZGl2aWRlci1iZyk7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1icy1kcm9wZG93bi1pdGVtLXBhZGRpbmcteSkgdmFyKC0tYnMtZHJvcGRvd24taXRlbS1wYWRkaW5nLXgpO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWRyb3Bkb3duLWxpbmstY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpmb2N1cyxcclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1iZylcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZylcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06ZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3IpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIC0tYnMtbmF2LWxpbmstcGFkZGluZy14OiAxcmVtO1xyXG4gICAgLS1icy1uYXYtbGluay1wYWRkaW5nLXk6IDAuNXJlbTtcclxuICAgIC0tYnMtbmF2LWxpbmstY29sb3I6IHZhcigtLWJzLWxpbmstY29sb3IpO1xyXG4gICAgLS1icy1uYXYtbGluay1ob3Zlci1jb2xvcjogdmFyKC0tYnMtbGluay1ob3Zlci1jb2xvcik7XHJcbiAgICAtLWJzLW5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IHZhcigtLWJzLW5hdi1saW5rLXBhZGRpbmcteSkgdmFyKC0tYnMtbmF2LWxpbmstcGFkZGluZy14KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnMtbmF2LWxpbmstZm9udC1zaXplKTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1icy1uYXYtbGluay1mb250LXdlaWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtbmF2LWxpbmstY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKSB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmVcclxuICAgIH1cclxufVxyXG5cclxuLm5hdi1saW5rOmZvY3VzLFxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLW5hdi1saW5rLWhvdmVyLWNvbG9yKVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIC0tYnMtbmF2YmFyLXBhZGRpbmcteDogMDtcclxuICAgIC0tYnMtbmF2YmFyLXBhZGRpbmcteTogMC41cmVtO1xyXG4gICAgLS1icy1uYXZiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAtLWJzLW5hdmJhci1ob3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgLS1icy1uYXZiYXItZGlzYWJsZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC0tYnMtbmF2YmFyLWFjdGl2ZS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgLS1icy1uYXZiYXItYnJhbmQtcGFkZGluZy15OiAwLjMxMjVyZW07XHJcbiAgICAtLWJzLW5hdmJhci1icmFuZC1tYXJnaW4tZW5kOiAxcmVtO1xyXG4gICAgLS1icy1uYXZiYXItYnJhbmQtZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgLS1icy1uYXZiYXItYnJhbmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgIC0tYnMtbmF2YmFyLWJyYW5kLWhvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAtLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbTtcclxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAwLjI1cmVtO1xyXG4gICAgLS1icy1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiAgICAtLWJzLW5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItaWNvbi1iZzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgLS1icy1uYXZiYXItdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICAtLWJzLW5hdmJhci10b2dnbGVyLWZvY3VzLXdpZHRoOiAwLjI1cmVtO1xyXG4gICAgLS1icy1uYXZiYXItdG9nZ2xlci10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1icy1uYXZiYXItcGFkZGluZy15KSB2YXIoLS1icy1uYXZiYXItcGFkZGluZy14KVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtcGFkZGluZy15KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtcGFkZGluZy15KTtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYnMtbmF2YmFyLWJyYW5kLW1hcmdpbi1lbmQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtZm9udC1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kOmZvY3VzLFxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtaG92ZXItY29sb3IpXHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIC0tYnMtbmF2LWxpbmstcGFkZGluZy14OiAwO1xyXG4gICAgLS1icy1uYXYtbGluay1wYWRkaW5nLXk6IDAuNXJlbTtcclxuICAgIC0tYnMtbmF2LWxpbmstY29sb3I6IHZhcigtLWJzLW5hdmJhci1jb2xvcik7XHJcbiAgICAtLWJzLW5hdi1saW5rLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1uYXZiYXItaG92ZXItY29sb3IpO1xyXG4gICAgLS1icy1uYXYtbGluay1kaXNhYmxlZC1jb2xvcjogdmFyKC0tYnMtbmF2YmFyLWRpc2FibGVkLWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IHN0YXRpY1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZCB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteCk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXgpXHJcbn1cclxuXHJcbi5JbnRlcmZhY2VfdXNlcl9ib2R5IC5uYXZiYXItZGFyayB7XHJcbiAgICAtLWJzLW5hdmJhci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KTtcclxuICAgIC0tYnMtbmF2YmFyLWhvdmVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gICAgLS1icy1uYXZiYXItZGlzYWJsZWQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAtLWJzLW5hdmJhci1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLW5hdmJhci1icmFuZC1jb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtbmF2YmFyLWJyYW5kLWhvdmVyLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1icy1uYXZiYXItdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItaWNvbi1iZzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pXHJcbn1cclxuXHJcbi5JbnRlcmZhY2VfdXNlcl9ib2R5IC5hY2NvcmRpb24ge1xyXG4gICAgLS1icy1hY2NvcmRpb24tY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAtLWJzLWFjY29yZGlvbi1iZzogI2ZmZjtcclxuICAgIC0tYnMtYWNjb3JkaW9uLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMC4xNXMgZWFzZTtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1icy1hY2NvcmRpb24tYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICAtLWJzLWFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzOiBjYWxjKDAuMzc1cmVtIC0gMXB4KTtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiAgICAtLWJzLWFjY29yZGlvbi1idG4tcGFkZGluZy15OiAxcmVtO1xyXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWJnOiB2YXIoLS1icy1hY2NvcmRpb24tYmcpO1xyXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1pY29uLXdpZHRoOiAxLjI1cmVtO1xyXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWljb24tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAtLWJzLWFjY29yZGlvbi1idG4taWNvbi10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1hY3RpdmUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWZvY3VzLWJvcmRlci1jb2xvcjogIzg2YjdmZTtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcclxuICAgIC0tYnMtYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAxLjI1cmVtO1xyXG4gICAgLS1icy1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXk6IDFyZW07XHJcbiAgICAtLWJzLWFjY29yZGlvbi1hY3RpdmUtY29sb3I6ICMwYzYzZTQ7XHJcbiAgICAtLWJzLWFjY29yZGlvbi1hY3RpdmUtYmc6ICNlN2YxZmZcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmxheW91dFNpZGVuYXYgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5sYXlvdXRTaWRlbmF2IC5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5vcmRlci0xIHtcclxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm15LTIge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm10LWF1dG8ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tZS0wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tZS0zIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tZS00IHtcclxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm1zLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudFxyXG59XHJcblxyXG4ucHgtNCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnB5LTQge1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wcy0zIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICAgIC0tYnMtdGV4dC1vcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYmctbGlnaHQge1xyXG4gICAgLS1icy1iZy1vcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1icy1saWdodC1yZ2IpLCB2YXIoLS1icy1iZy1vcGFjaXR5KSkgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYmctZGFyayB7XHJcbiAgICAtLWJzLWJnLW9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWJzLWRhcmstcmdiKSwgdmFyKC0tYnMtYmctb3BhY2l0eSkpICFpbXBvcnRhbnRcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuXHJcbiAgICAuZC1tZC1pbmxpbmUtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLm15LW1kLTAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAubWUtbWQtMyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAubXMtbWQtMCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG5cclxuICAgIC5vcmRlci1sZy0wIHtcclxuICAgICAgICBvcmRlcjogMCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLm1lLWxnLTAge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLm1lLWxnLTQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuI2xheW91dFNpZGVuYXYge1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4jbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9uYXYge1xyXG4gICAgZmxleC1iYXNpczogMjI1cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogMTAzODtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1cHgpXHJcbn1cclxuXHJcbiNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIyNXB4XHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2LXRvZ2dsZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4uc2Itc2lkZW5hdi10b2dnbGVkICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICB6LWluZGV4OiAxMDM3O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH0gIFxyXG4gIFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcclxuICAgICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X25hdiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcblxyXG4gICAgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIC4xNXMgZWFzZS1pbi1vdXRcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNiLXNpZGVuYXYtdG9nZ2xlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9uYXYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1cHgpO1xyXG4gICAgfVxyXG4gICAgLnNiLXNpZGVuYXYtdG9nZ2xlZCAjbGF5b3V0U2lkZW5hdiAjbGF5b3V0U2lkZW5hdl9jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICB9XHJcbiAgICAuc2Itc2lkZW5hdi10b2dnbGVkICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQ6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4ubmF2IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbixcclxuLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsgLnNiLW5hdi1saW5rLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbVxyXG59XHJcblxyXG4uc2ItdG9wbmF2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHotaW5kZXg6IDEwMzlcclxufVxyXG5cclxuLnNiLXRvcG5hdiAubmF2YmFyLWJyYW5kIHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uc2ItdG9wbmF2Lm5hdmJhci1kYXJrICNzaWRlYmFyVG9nZ2xlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KVxyXG59XHJcblxyXG4uc2Itc2lkZW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwXHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUge1xyXG4gICAgZmxleC1ncm93OiAxXHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiAuc2Itc2lkZW5hdi1tZW51LWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMS43NXJlbSAxcmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxufVxyXG5cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLm5hdi1saW5rIC5zYi1uYXYtbGluay1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW1cclxufVxyXG5cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluayAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2VcclxufVxyXG5cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluay5jb2xsYXBzZWQgLnNiLXNpZGVuYXYtY29sbGFwc2UtYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG59XHJcblxyXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLnNiLXNpZGVuYXYtbWVudS1uZXN0ZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxufVxyXG5cclxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIGZsZXgtc2hyaW5rOiAwXHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2LWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KVxyXG59XHJcblxyXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLnNiLXNpZGVuYXYtbWVudS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSlcclxufVxyXG5cclxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSlcclxufVxyXG5cclxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbiB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpXHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2LWRhcmsgLnNiLXNpZGVuYXYtbWVudSAubmF2LWxpbmsgLnNiLXNpZGVuYXYtY29sbGFwc2UtYXJyb3cge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KVxyXG59XHJcblxyXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5zYi1zaWRlbmF2LWRhcmsgLnNiLXNpZGVuYXYtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDBcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYXNzZXRzL3N0eWxlcy9JbnRlcmZhY2VfdXNlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUVoQjs7OztDQUlDO0FBQ0Q7Ozs7O0VBS0U7OztBQUtGOzs7SUFHSTtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7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QUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7RUFDdEM7OztBQUdGO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0ksY0FBYztRQUNkO0lBQ0o7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtJQUNBLG1CQUFtQjtJQUNuQjtJQUNBO0lBQ0EsYUFBYTtJQUNiO0FBQ0o7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxyXFxuXFxyXFxuLyohXFxyXFxuKiBTdGFydCBCb290c3RyYXAgLSBTQiBBZG1pbiB2Ny4wLjcgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlL3NiLWFkbWluKVxcclxcbiogQ29weXJpZ2h0IDIwMTMtMjAyMyBTdGFydCBCb290c3RyYXBcXHJcXG4qIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXFxyXFxuKi9cXHJcXG4vKiFcXHJcXG4gKiBCb290c3RyYXAgIHY1LjIuMyAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcXHJcXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIyIFRoZSBCb290c3RyYXAgQXV0aG9yc1xcclxcbiAqIENvcHlyaWdodCAyMDExLTIwMjIgVHdpdHRlciwgSW5jLlxcclxcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxcclxcbiAqL1xcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDQwMDs3MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Tm90bytTYW5zOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOm5vLXByZWZlcmVuY2UpIHtcXHJcXG4gICAgOnJvb3Qge1xcclxcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5LkludGVyZmFjZV91c2VyX2JvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1icy1ib2R5LWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1icy1ib2R5LWZvbnQtc2l6ZSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1icy1ib2R5LWZvbnQtd2VpZ2h0KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJzLWJvZHktbGluZS1oZWlnaHQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IHZhcigtLWJzLWJvZHktdGV4dC1hbGlnbik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWJvZHktYmcpO1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnRcXHJcXG59XFxyXFxuXFxyXFxuLkludGVyZmFjZV91c2VyX2JvZHkgaHIge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XFxyXFxuICAgIG9wYWNpdHk6IC4yNVxcclxcbn1cXHJcXG5cXHJcXG4uSW50ZXJmYWNlX3VzZXJfYm9keSB1bCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5JbnRlcmZhY2VfdXNlcl9ib2R5IHVsIHVsIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMFxcclxcbn1cXHJcXG5cXHJcXG4uSW50ZXJmYWNlX3VzZXJfYm9keSAuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IC44NzVlbVxcclxcbn1cXHJcXG5cXHJcXG4uSW50ZXJmYWNlX3VzZXJfYm9keSBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0U2lkZW5hdl9jb250ZW50IGJ1dHRvbjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpIHtcXHJcXG4gICAgb3V0bGluZTogMFxcclxcbn1cXHJcXG5cXHJcXG5bcm9sZT1idXR0b25dIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxyXFxufVxcclxcblxcclxcblt0eXBlPWJ1dHRvbl0sXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b25cXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9YnV0dG9uXTpub3QoOmRpc2FibGVkKSxcXHJcXG5bdHlwZT1yZXNldF06bm90KDpkaXNhYmxlZCksXFxyXFxuW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSxcXHJcXG5idXR0b246bm90KDpkaXNhYmxlZCkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lXFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCxcXHJcXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1maWVsZHMtd3JhcHBlcixcXHJcXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1ob3VyLWZpZWxkLFxcclxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZSxcXHJcXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZCxcXHJcXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0LFxcclxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xcclxcbiAgICBwYWRkaW5nOiAwXFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0b1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmVcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMFxcclxcbn1cXHJcXG5cXHJcXG46OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b25cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxyXFxuICAgIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXHJcXG4gICAgLS1icy1ndXR0ZXIteTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogLjUpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogLjUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKSB7XFxyXFxuICAgIC5mb3JtLWNvbnRyb2wge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2xbdHlwZT1maWxlXTpub3QoOmRpc2FibGVkKTpub3QoW3JlYWRvbmx5XSkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbDpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItY29sb3I6ICM4NmI3ZmU7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIC4yNXJlbSByZ2JhKDEzLCAxMTAsIDI1MywgLjI1KVxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xcclxcbiAgICBoZWlnaHQ6IDEuNWVtXFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogIzZjNzU3ZDtcXHJcXG4gICAgb3BhY2l0eTogMVxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcXHJcXG4gICAgb3BhY2l0eTogMVxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xcclxcbiAgICBtYXJnaW46IC0uMzc1cmVtIC0uNzVyZW07XFxyXFxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogLjc1cmVtO1xcclxcbiAgICBtYXJnaW4taW5saW5lLWVuZDogLjc1cmVtO1xcclxcbiAgICBjb2xvcjogIzIxMjUyOTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSkge1xcclxcbiAgICAuZm9ybS1jb250cm9sOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBub25lXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbDpob3Zlcjpub3QoOmRpc2FibGVkKTpub3QoW3JlYWRvbmx5XSk6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTBlM1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sLXNtOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAtLjI1cmVtIC0uNXJlbTtcXHJcXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC41cmVtXFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2wtbGc6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAtLjVyZW0gLTFyZW07XFxyXFxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICB3aWR0aDogMTAwJVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxJTtcXHJcXG4gICAgbWluLXdpZHRoOiAwXFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOmZvY3VzIHtcXHJcXG4gICAgei1pbmRleDogNVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAgLmJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMlxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAgLmJ0bjpmb2N1cyB7XFxyXFxuICAgIHotaW5kZXg6IDVcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwOm5vdCguaGFzLXZhbGlkYXRpb24pPjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKTpub3QoLmRyb3Bkb3duLW1lbnUpOm5vdCguZm9ybS1mbG9hdGluZykge1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwPjpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLW1lbnUpOm5vdCgudmFsaWQtdG9vbHRpcCk6bm90KC52YWxpZC1mZWVkYmFjayk6bm90KC5pbnZhbGlkLXRvb2x0aXApOm5vdCguaW52YWxpZC1mZWVkYmFjaykge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMFxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpub3QoOmZvY3VzKS5pcy12YWxpZCB7XFxyXFxuICAgIHotaW5kZXg6IDNcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2w6bm90KDpmb2N1cykuaXMtaW52YWxpZCB7XFxyXFxuICAgIHotaW5kZXg6IDRcXHJcXG59XFxyXFxuXFxyXFxuLmxheW91dFNpZGVuYXZfY29udGVudCAuYnRuOmZvY3VzLXZpc2libGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWJnKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpXFxyXFxufVxcclxcblxcclxcbjpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0U2lkZW5hdl9jb250ZW50IC5idG46Zmlyc3QtY2hpbGQ6YWN0aXZlOmZvY3VzLXZpc2libGUsXFxyXFxuOm5vdCguYnRuLWNoZWNrKSsuYnRuOmFjdGl2ZTpmb2N1cy12aXNpYmxlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpXFxyXFxufVxcclxcblxcclxcbi5sYXlvdXRTaWRlbmF2X2NvbnRlbnQgLmJ0bi1saW5rOmZvY3VzLXZpc2libGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtYnRuLWNvbG9yKVxcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLXRvZ2dsZSB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAuMjU1ZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiAuMjU1ZW07XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IHtcXHJcXG4gICAgLS1icy1kcm9wZG93bi16aW5kZXg6IDEwMDA7XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1wYWRkaW5nLXg6IDA7XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tcGFkZGluZy15OiAwLjVyZW07XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1mb250LXNpemU6IDFyZW07XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tY29sb3I6ICMyMTI1Mjk7XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tYmc6ICNmZmY7XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6IGNhbGMoMC4zNzVyZW0gLSAxcHgpO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWRpdmlkZXItYmc6IHZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogMC41cmVtO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWNvbG9yOiAjMjEyNTI5O1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICMxZTIxMjU7XFxyXFxuICAgIC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1iZzogI2U5ZWNlZjtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogI2ZmZjtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogIzBkNmVmZDtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAjYWRiNWJkO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxcmVtO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjI1cmVtO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWhlYWRlci1jb2xvcjogIzZjNzU3ZDtcXHJcXG4gICAgLS1icy1kcm9wZG93bi1oZWFkZXItcGFkZGluZy14OiAxcmVtO1xcclxcbiAgICAtLWJzLWRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXk6IDAuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1icy1kcm9wZG93bi16aW5kZXgpO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBtaW4td2lkdGg6IHZhcigtLWJzLWRyb3Bkb3duLW1pbi13aWR0aCk7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWJzLWRyb3Bkb3duLXBhZGRpbmcteSkgdmFyKC0tYnMtZHJvcGRvd24tcGFkZGluZy14KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWJzLWRyb3Bkb3duLWZvbnQtc2l6ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1icy1kcm9wZG93bi1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWRyb3Bkb3duLWJnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci1yYWRpdXMpXFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51LWVuZCB7XFxyXFxuICAgIC0tYnMtcG9zaXRpb246IGVuZFxcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tZGl2aWRlciB7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1icy1kcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15KSAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYnMtZHJvcGRvd24tZGl2aWRlci1iZyk7XFxyXFxuICAgIG9wYWNpdHk6IDFcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWJzLWRyb3Bkb3duLWl0ZW0tcGFkZGluZy15KSB2YXIoLS1icy1kcm9wZG93bi1pdGVtLXBhZGRpbmcteCk7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tbGluay1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMFxcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24taXRlbTpmb2N1cyxcXHJcXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1icy1kcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1iZylcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZylcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWl0ZW06ZGlzYWJsZWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcik7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgLS1icy1uYXYtbGluay1wYWRkaW5nLXg6IDFyZW07XFxyXFxuICAgIC0tYnMtbmF2LWxpbmstcGFkZGluZy15OiAwLjVyZW07XFxyXFxuICAgIC0tYnMtbmF2LWxpbmstY29sb3I6IHZhcigtLWJzLWxpbmstY29sb3IpO1xcclxcbiAgICAtLWJzLW5hdi1saW5rLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTtcXHJcXG4gICAgLS1icy1uYXYtbGluay1kaXNhYmxlZC1jb2xvcjogIzZjNzU3ZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWJzLW5hdi1saW5rLXBhZGRpbmcteSkgdmFyKC0tYnMtbmF2LWxpbmstcGFkZGluZy14KTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1icy1uYXYtbGluay1mb250LXNpemUpO1xcclxcbiAgICBmb250LXdlaWdodDogdmFyKC0tYnMtbmF2LWxpbmstZm9udC13ZWlnaHQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtbmF2LWxpbmstY29sb3IpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXRcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSkge1xcclxcbiAgICAubmF2LWxpbmsge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpmb2N1cyxcXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtbmF2LWxpbmstaG92ZXItY29sb3IpXFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICAtLWJzLW5hdmJhci1wYWRkaW5nLXg6IDA7XFxyXFxuICAgIC0tYnMtbmF2YmFyLXBhZGRpbmcteTogMC41cmVtO1xcclxcbiAgICAtLWJzLW5hdmJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXHJcXG4gICAgLS1icy1uYXZiYXItaG92ZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgLS1icy1uYXZiYXItZGlzYWJsZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgLS1icy1uYXZiYXItYWN0aXZlLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAgIC0tYnMtbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogMC4zMTI1cmVtO1xcclxcbiAgICAtLWJzLW5hdmJhci1icmFuZC1tYXJnaW4tZW5kOiAxcmVtO1xcclxcbiAgICAtLWJzLW5hdmJhci1icmFuZC1mb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIC0tYnMtbmF2YmFyLWJyYW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAgIC0tYnMtbmF2YmFyLWJyYW5kLWhvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAgIC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtO1xcclxcbiAgICAtLWJzLW5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogMC4yNXJlbTtcXHJcXG4gICAgLS1icy1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6IDAuNzVyZW07XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICAtLWJzLW5hdmJhci10b2dnbGVyLWljb24tYmc6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMCAzMCclM2UlM2NwYXRoIHN0cm9rZT0ncmdiYSUyODAsIDAsIDAsIDAuNTUlMjknIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGg6IDAuMjVyZW07XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tYnMtbmF2YmFyLXBhZGRpbmcteSkgdmFyKC0tYnMtbmF2YmFyLXBhZGRpbmcteClcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1icmFuZCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtcGFkZGluZy15KTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWJzLW5hdmJhci1icmFuZC1wYWRkaW5nLXkpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWJzLW5hdmJhci1icmFuZC1tYXJnaW4tZW5kKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1icy1uYXZiYXItYnJhbmQtZm9udC1zaXplKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJzLW5hdmJhci1icmFuZC1jb2xvcik7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWJyYW5kOmZvY3VzLFxcclxcbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnMtbmF2YmFyLWJyYW5kLWhvdmVyLWNvbG9yKVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiB7XFxyXFxuICAgIC0tYnMtbmF2LWxpbmstcGFkZGluZy14OiAwO1xcclxcbiAgICAtLWJzLW5hdi1saW5rLXBhZGRpbmcteTogMC41cmVtO1xcclxcbiAgICAtLWJzLW5hdi1saW5rLWNvbG9yOiB2YXIoLS1icy1uYXZiYXItY29sb3IpO1xcclxcbiAgICAtLWJzLW5hdi1saW5rLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1uYXZiYXItaG92ZXItY29sb3IpO1xcclxcbiAgICAtLWJzLW5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiB2YXIoLS1icy1uYXZiYXItZGlzYWJsZWQtY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljXFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItZXhwYW5kIHtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteCk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteClcXHJcXG59XFxyXFxuXFxyXFxuLkludGVyZmFjZV91c2VyX2JvZHkgLm5hdmJhci1kYXJrIHtcXHJcXG4gICAgLS1icy1uYXZiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSk7XFxyXFxuICAgIC0tYnMtbmF2YmFyLWhvdmVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcclxcbiAgICAtLWJzLW5hdmJhci1kaXNhYmxlZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG4gICAgLS1icy1uYXZiYXItYWN0aXZlLWNvbG9yOiAjZmZmO1xcclxcbiAgICAtLWJzLW5hdmJhci1icmFuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgLS1icy1uYXZiYXItYnJhbmQtaG92ZXItY29sb3I6ICNmZmY7XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxuICAgIC0tYnMtbmF2YmFyLXRvZ2dsZXItaWNvbi1iZzogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MjU1LCAyNTUsIDI1NSwgMC41NSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcXFwiKVxcclxcbn1cXHJcXG5cXHJcXG4uSW50ZXJmYWNlX3VzZXJfYm9keSAuYWNjb3JkaW9uIHtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tY29sb3I6ICMyMTI1Mjk7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJnOiAjZmZmO1xcclxcbiAgICAtLWJzLWFjY29yZGlvbi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDAuMTVzIGVhc2U7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICAtLWJzLWFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzOiBjYWxjKDAuMzc1cmVtIC0gMXB4KTtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLXBhZGRpbmcteDogMS4yNXJlbTtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLXBhZGRpbmcteTogMXJlbTtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWNvbG9yOiAjMjEyNTI5O1xcclxcbiAgICAtLWJzLWFjY29yZGlvbi1idG4tYmc6IHZhcigtLWJzLWFjY29yZGlvbi1iZyk7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1pY29uOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyUyMzIxMjUyOSclM2UlM2NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvJTNlJTNjL3N2ZyUzZVxcXCIpO1xcclxcbiAgICAtLWJzLWFjY29yZGlvbi1idG4taWNvbi13aWR0aDogMS4yNXJlbTtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tYnRuLWljb24tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1pY29uLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtLWJzLWFjY29yZGlvbi1idG4tYWN0aXZlLWljb246IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nJTIzMGM2M2U0JyUzZSUzY3BhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6Jy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1mb2N1cy1ib3JkZXItY29sb3I6ICM4NmI3ZmU7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcXHJcXG4gICAgLS1icy1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXg6IDEuMjVyZW07XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWJvZHktcGFkZGluZy15OiAxcmVtO1xcclxcbiAgICAtLWJzLWFjY29yZGlvbi1hY3RpdmUtY29sb3I6ICMwYzYzZTQ7XFxyXFxuICAgIC0tYnMtYWNjb3JkaW9uLWFjdGl2ZS1iZzogI2U3ZjFmZlxcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50XFxyXFxufVxcclxcblxcclxcbi5kLW5vbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLmxheW91dFNpZGVuYXYgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLmxheW91dFNpZGVuYXYgLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudFxcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItMSB7XFxyXFxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLm15LTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAuNXJlbSAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbSAhaW1wb3J0YW50XFxyXFxufVxcclxcblxcclxcbi5tdC1hdXRvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50XFxyXFxufVxcclxcblxcclxcbi5tZS0wIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLm1lLTMge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudFxcclxcbn1cXHJcXG5cXHJcXG4ubWUtNCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLm1zLWF1dG8ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50XFxyXFxufVxcclxcblxcclxcbi5weC00IHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudFxcclxcbn1cXHJcXG5cXHJcXG4ucHMtMyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50XFxyXFxufVxcclxcblxcclxcbi50ZXh0LW11dGVkIHtcXHJcXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICAgIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWxpZ2h0IHtcXHJcXG4gICAgLS1icy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWJzLWxpZ2h0LXJnYiksIHZhcigtLWJzLWJnLW9wYWNpdHkpKSAhaW1wb3J0YW50XFxyXFxufVxcclxcblxcclxcbi5iZy1kYXJrIHtcXHJcXG4gICAgLS1icy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWJzLWRhcmstcmdiKSwgdmFyKC0tYnMtYmctb3BhY2l0eSkpICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLmQtbWQtaW5saW5lLWJsb2NrIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm15LW1kLTAge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lLW1kLTMge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnRcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubXMtbWQtMCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcXHJcXG5cXHJcXG4gICAgLm9yZGVyLWxnLTAge1xcclxcbiAgICAgICAgb3JkZXI6IDAgIWltcG9ydGFudFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZS1sZy0wIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lLWxnLTQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJVxcclxcbn1cXHJcXG5cXHJcXG4jbGF5b3V0U2lkZW5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXhcXHJcXG59XFxyXFxuXFxyXFxuI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IHtcXHJcXG4gICAgZmxleC1iYXNpczogMjI1cHg7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgei1pbmRleDogMTAzODtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjVweClcXHJcXG59XFxyXFxuXFxyXFxuI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIyNXB4XFxyXFxufVxcclxcblxcclxcbi5zYi1zaWRlbmF2LXRvZ2dsZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcblxcclxcbi5zYi1zaWRlbmF2LXRvZ2dsZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfY29udGVudDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgICB6LWluZGV4OiAxMDM3O1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIH0gIFxcclxcbiAgXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcXHJcXG4gICAgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfbmF2IHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjE1cyBlYXNlLWluLW91dFxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc2Itc2lkZW5hdi10b2dnbGVkICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X25hdiB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAuc2Itc2lkZW5hdi10b2dnbGVkICNsYXlvdXRTaWRlbmF2ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zYi1zaWRlbmF2LXRvZ2dsZWQgI2xheW91dFNpZGVuYXYgI2xheW91dFNpZGVuYXZfY29udGVudDpiZWZvcmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbixcXHJcXG4uc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayAuc2ItbmF2LWxpbmstaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnNiLXRvcG5hdiB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICB6LWluZGV4OiAxMDM5XFxyXFxufVxcclxcblxcclxcbi5zYi10b3BuYXYgLm5hdmJhci1icmFuZCB7XFxyXFxuICAgIHdpZHRoOiAyMjVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZjhmOWZhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2ItdG9wbmF2Lm5hdmJhci1kYXJrICNzaWRlYmFyVG9nZ2xlIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpXFxyXFxufVxcclxcblxcclxcbi5zYi1zaWRlbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcFxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IHtcXHJcXG4gICAgZmxleC1ncm93OiAxXFxyXFxufVxcclxcblxcclxcbi5zYi1zaWRlbmF2IC5zYi1zaWRlbmF2LW1lbnUgLm5hdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLnNiLXNpZGVuYXYtbWVudS1oZWFkaW5nIHtcXHJcXG4gICAgcGFkZGluZzogMS43NXJlbSAxcmVtIC43NXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXHJcXG59XFxyXFxuXFxyXFxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5uYXYtbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLm5hdi1saW5rIC5zYi1uYXYtbGluay1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOXJlbVxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLm5hdi1saW5rIC5zYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZVxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1tZW51IC5uYXYgLm5hdi1saW5rLmNvbGxhcHNlZCAuc2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvdyB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcXHJcXG59XFxyXFxuXFxyXFxuLnNiLXNpZGVuYXYgLnNiLXNpZGVuYXYtbWVudSAubmF2IC5zYi1zaWRlbmF2LW1lbnUtbmVzdGVkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdiAuc2Itc2lkZW5hdi1mb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW07XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwXFxyXFxufVxcclxcblxcclxcbi5zYi1zaWRlbmF2LWRhcmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSlcXHJcXG59XFxyXFxuXFxyXFxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5zYi1zaWRlbmF2LW1lbnUtaGVhZGluZyB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSlcXHJcXG59XFxyXFxuXFxyXFxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1tZW51IC5uYXYtbGluayB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KVxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rIC5zYi1uYXYtbGluay1pY29uIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KVxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rIC5zYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93IHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KVxcclxcbn1cXHJcXG5cXHJcXG4uc2Itc2lkZW5hdi1kYXJrIC5zYi1zaWRlbmF2LW1lbnUgLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmZcXHJcXG59XFxyXFxuXFxyXFxuLnNiLXNpZGVuYXYtZGFyayAuc2Itc2lkZW5hdi1mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xufSovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn0qL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB2aWV3Qm94PSUyNzAgMCAzMCAzMCUyNyUzZSUzY3BhdGggc3Ryb2tlPSUyN3JnYmElMjgyNTUsIDI1NSwgMjU1LCAwLjUlMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLW1pdGVybGltaXQ9JTI3MTAlMjcgZD0lMjdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlYWRlcl9hYm91dF9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbG9naW5fYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBWYXJpYWJsZXMgZGUgY291bGV1ciAqL1xyXG46cm9vdCB7XHJcbiAgLS1jb250cm9sLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgLS1jb250cm9sLWNvbG9yLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBTdHlsaW5nICovXHJcbiNtYWluTmF2Lm5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogVHJhbnNwYXJlbnRlIHBvdXIgc2UgZm9uZHJlIGRhbnMgbGEgdmlkw6lvICovXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1icmFuZCxcclxuLmxvZ2luLXNlY3Rpb24gLm5hdmJhci1icmFuZCxcclxuLnNiLXRvcG5hdiAubmF2YmFyLWJyYW5kICB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG5cclxuI21haW5OYXYgLm5hdmJhci1icmFuZCxcclxuI21haW5OYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjsgLyogVGV4dGUgYmxhbmMgcG91ciBjb250cmFzdGUgc3VyIHZpZMOpbyAqL1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbi8qIExpZW5zIGRlIGxhIG5hdmJhciAqL1xyXG4ubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07IC8qIEVzcGFjZSByZXN0YXVyw6kgZW50cmUgbGVzIGxpZW5zICovXHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIE1lbnUgKi9cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgLyogTMOpZ8OocmVtZW50IHRyYW5zcGFyZW50ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlcixcclxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45KTtcclxufVxyXG5cclxuLyogTWFzdGhlYWQgU3R5bGluZyAoQ2Fyb3VzZWwgVmlkw6lvIGVuIHBsZWluZSBwYWdlKSAqL1xyXG4ubWFzdGhlYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoOyAvKiBQbGVpbmUgaGF1dGV1ciAqL1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3ZpZGVvQ2Fyb3VzZWwuY2Fyb3VzZWwge1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIDEwMCUgZGUgbGEgaGF1dGV1ciBkZSBs4oCZw6ljcmFuICovXHJcbn1cclxuXHJcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSB2aWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQ291dnJlIHRvdXRlIGxhIHpvbmUgdmlzaWJsZSAqL1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBDb250cm9sIFN0eWxpbmcgKi9cclxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgd2lkdGg6IDUlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG59XHJcblxyXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2OmhvdmVyLFxyXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0OmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXHJcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udHJvbC1jb2xvcik7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb246aG92ZXIsXHJcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udHJvbC1jb2xvci1ob3Zlcik7XHJcbn1cclxuXHJcbi8qIFZpZGVvIFN0eWxpbmcgKi9cclxudmlkZW8uZC1ibG9jay53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbiAgLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAjbWFpbk5hdiB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IC8qIFV0aWxpc2VyIEZsZXhib3ggcG91ciBhbGlnbmVyIGxlcyDDqWzDqW1lbnRzICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudHJlciB2ZXJ0aWNhbGVtZW50IGxlcyDDqWzDqW1lbnRzICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRyZXIgaG9yaXpvbnRhbGVtZW50IHRvdXMgbGVzIMOpbMOpbWVudHMgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFBvc2l0aW9uIHJlbGF0aXZlIHBvdXIgY29udHLDtGxlciBsZXMgaWPDtG5lcyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBDb3VsZXVyIGRlIGZvbmQgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgLyogQ29pbnMgYXJyb25kaXMgKi9cclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIEVzcGFjZSBpbnTDqXJpZXVyICovXHJcbiAgd2lkdGg6IDIwMHB4OyAvKiBMYXJnZXVyIGluaXRpYWxlIGRlIGxhIGJhcnJlIGRlIHJlY2hlcmNoZSAqL1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IC8qIFRyYW5zaXRpb24gcG91ciB0b3VzIGxlcyBjaGFuZ2VtZW50cyBkZSBwcm9wcmnDqXTDqSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSBwb3VyIGxlIGNvbnRlbmV1ciBkdSBsb2dvICovXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMCAwIGF1dG87IC8qIE5lIHBhcyBwZXJtZXR0cmUgw6AgbCfDqWzDqW1lbnQgZGUgZ3JhbmRpciBvdSBkZSBzZSByw6l0csOpY2lyICovXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBFc3BhY2VtZW50IGF1dG91ciBkdSBsb2dvICovXHJcbn1cclxuXHJcbi8qIFBvdXIgbGUgbG9nbyAqL1xyXG4ubG9nbyB7XHJcbiAgbWF4LWhlaWdodDogNTBweDsgLyogQWp1c3RleiBsYSBoYXV0ZXVyIGR1IGxvZ28gc2Vsb24gdm9zIGJlc29pbnMgKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIFBvdXIgw6l2aXRlciBxdWUgbGUgbG9nbyBkw6lwYXNzZSBsZSBjb250ZW5ldXIgKi9cclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIuYWN0aXZlIHtcclxuICB3aWR0aDogMzAwcHg7IC8qIExhcmdldXIgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlIHF1YW5kIGVsbGUgZXN0IGFjdGl2ZSAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogRm9uZCB0cmFuc3BhcmVudCAqL1xyXG4gIGJvcmRlcjogbm9uZTsgLyogUGFzIGRlIGJvcmR1cmUgKi9cclxuICBjb2xvcjogIzQwNDA0MDsgLyogQ291bGV1ciBkdSB0ZXh0ZSAqL1xyXG4gIG91dGxpbmU6IG5vbmU7IC8qIFBhcyBkZSBjb250b3VyICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIFByZW5kcmUgdG91dGUgbGEgbGFyZ2V1ciBkaXNwb25pYmxlICovXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDsgLyogRXNwYWNlbWVudCBwb3VyIGwnaWPDtG5lICovXHJcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogQWpvdXRlIGR1IHN0eWxlIGF1eCBwbGFjZWhvbGRlcnMgKi9cclxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYjNiM2IzOyAvKiBDb3VsZXVyIGR1IHBsYWNlaG9sZGVyICovXHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbiBhYnNvbHVlIHBvdXIgbGEgcGxhY2VyIMOgIGwnaW50w6lyaWV1ciBkdSBjaGFtcCAqL1xyXG4gIGxlZnQ6IDEwcHg7IC8qIETDqXBsYWNlbWVudCDDoCBnYXVjaGUgKi9cclxuICBmaWxsOiAjNDA0MDQwOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lICovXHJcbiAgd2lkdGg6IDIycHg7IC8qIExhcmdldXIgYXVnbWVudMOpZSAqL1xyXG4gIGhlaWdodDogMjJweDsgLyogSGF1dGV1ciBhdWdtZW50w6llICovXHJcbn1cclxuXHJcbi8qIFPDqXBhcmF0ZXVyIHZlcnRpY2FsICovXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG4gIG1hcmdpbjogMCAxMHB4OyAvKiBFc3BhY2UgYXV0b3VyIGR1IHPDqXBhcmF0ZXVyICovXHJcbn1cclxuXHJcbi8qIEljw7RuZSBkZSBuYXZpZ2F0aW9uIFwicGFyY291cmlyXCIgKi9cclxuLmJyb3dzZS1pY29uIHtcclxuICBmaWxsOiAjNDA0MDQwOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lICovXHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzZXVyIGVuIGZvcm1lIGRlIG1haW4gcG91ciBpbmRpcXVlciBxdSdpbCBlc3QgY2xpcXVhYmxlICovXHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzO1xyXG4gIHdpZHRoOiAyMnB4OyAvKiBMYXJnZXVyIGF1Z21lbnTDqWUgKi9cclxuICBoZWlnaHQ6IDIycHg7IC8qIEhhdXRldXIgYXVnbWVudMOpZSAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lci5jb2xsYXBzZWQgLnNlcGFyYXRvcixcclxuLnNlYXJjaC1jb250YWluZXIuY29sbGFwc2VkIC5icm93c2UtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2xlYXItaWNvbiB7XHJcbiAgZmlsbDogIzQwNDA0MDsgLyogQ291bGV1ciBkZSBsJ2ljw7RuZSAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc2V1ciBlbiBmb3JtZSBkZSBtYWluIHBvdXIgaW5kaXF1ZXIgcXUnaWwgZXN0IGNsaXF1YWJsZSAqL1xyXG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcztcclxuICB3aWR0aDogMjdweDsgLyogTGFyZ2V1ciBkZSBsJ2ljw7RuZSBkZSBjcm9peCAqL1xyXG4gIGhlaWdodDogMjdweDsgLyogSGF1dGV1ciBkZSBsJ2ljw7RuZSBkZSBjcm9peCAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAvKiBFc3BhY2UgYXV0b3VyIGRlIGwnaWPDtG5lIGRlIGNyb2l4ICovXHJcbn1cclxuXHJcblxyXG4uYnRuLWNvbm5leGlvbiwgLmJ0bi1kZW1hcnJlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBDb3VsZXVyIGRlIGZvbmQgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgLyogQ29pbnMgYXJyb25kaXMgKi9cclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIEVzcGFjZSBpbnTDqXJpZXVyICovXHJcbn1cclxuXHJcbi5idG4tY29ubmV4aW9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tZGVtYXJyZXI6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyLW1vYmlsZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubG9nby1jb250YWluZXItbW9iaWxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5sb2dvLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXYtZWxlbWVudHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2LWVsZW1lbnQgPiAqe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLm90aGVyLWVsZW1lbnQtbmF2e1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLm90aGVyLWVsZW1lbnQtbmF2ID4gKntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vdGhlci1lbGVtZW50LW5hdiBhe1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIEFzc3VyZSBxdWUgbGUgYm91dG9uIGVzdCBlbiBwb3NpdGlvbiBhYnNvbHVlICovXHJcbiAgdG9wOiAxNXB4OyAvKiBBanVzdGV6IHNlbG9uIHZvdHJlIGRlc2lnbiAqL1xyXG4gIHJpZ2h0OiAxNXB4OyAvKiBBanVzdGV6IHNlbG9uIHZvdHJlIGRlc2lnbiAqL1xyXG4gIHotaW5kZXg6IDk5OTsgLyogQXNzdXJlei12b3VzIHF1J2lsIGVzdCBhdS1kZXNzdXMgZGVzIGF1dHJlcyDDqWzDqW1lbnRzICovXHJcbn1cclxuXHJcbi5uYXZiYXItb3BlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgLyogRm9uZCBibGFuYyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBPcHRpb25uZWwgOiBham91dCBkJ3VuZSBvbWJyZSBwb3VyIHVuIGVmZmV0IGRlIHByb2ZvbmRldXIgKi9cclxufVxyXG5cclxuLm5hdmJhci1vcGVuIGEsIC5uYXZiYXItb3BlbiBsaSB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1vcGVuIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLW9wZW4gLnNlYXJjaC1jb250YWluZXIgaW5wdXQsIFxyXG4ubmF2YmFyLW9wZW4gLnNlYXJjaC1jb250YWluZXIgLmJyb3dzZS1pY29uLFxyXG4ubmF2YmFyLW9wZW4gLnNlYXJjaC1jb250YWluZXIgLmNsZWFyLWljb24sXHJcbi5uYXZiYXItb3BlbiAuc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWljb24gIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLW9wZW4gLm90aGVyLWVsZW1lbnQtbmF2IGEuYnRuLWNvbm5leGlvbixcclxuLm5hdmJhci1vcGVuIC5vdGhlci1lbGVtZW50LW5hdiBkaXYuYnRuLWNvbm5leGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmRpdi5idG4tY29ubmV4aW9uIC5yb3VuZGVkLWNpcmNsZXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG5kaXYuYnRuLWNvbm5leGlvbiBzdmd7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5kaXYuYnRuLWNvbm5leGlvbiBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm5hdmJhci1vcGVuIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1icy1uYXZiYXItdG9nZ2xlci1pY29uLWJnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVudC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9ubmVtZW50IGFic29sdSBwb3VyIHN1cGVycG9zZXIgbGUgY29udGVudSAqL1xyXG4gIHRvcDogNTAlOyAvKiBDZW50cmVyIHZlcnRpY2FsZW1lbnQgKi9cclxuICBsZWZ0OiA1MCU7IC8qIENlbnRyZXIgaG9yaXpvbnRhbGVtZW50ICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIETDqXBsYWNlciBwb3VyIGNlbnRyZXIgKi9cclxuICBjb2xvcjogd2hpdGU7IC8qIENvdWxldXIgZHUgdGV4dGUgKi9cclxuICB0ZXh0LWFsaWduOiByaWdodDsgLyogQ2VudHJlciBsZSB0ZXh0ZSAqL1xyXG4gIHBhZGRpbmc6IDIwcHg7IC8qIEVzcGFjZW1lbnQgYXV0b3VyIGR1IGNvbnRlbnUgKi9cclxufVxyXG5cclxuLyogQ2xhc3NlIGFwcGxpcXXDqWUgYXUgbmF2IGxvcnMgZHUgc2Nyb2xsICovXHJcbiNtYWluTmF2LnNjcm9sbGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2UsIGJveC1zaGFkb3cgMC42cyBlYXNlO1xyXG59XHJcblxyXG4jbWFpbk5hdi5zY3JvbGxlZCAgLm5hdi1saW5rLFxyXG4jbWFpbk5hdi5zY3JvbGxlZCAgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbWFpbk5hdi5zY3JvbGxlZCAgLmJ0bi1jb25uZXhpb24sXHJcbiNtYWluTmF2LnNjcm9sbGVkICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8qIEluaXRpYWxpc2F0aW9uIGRlIGxhIGNvdWxldXIgcG91ciDDqXZpdGVyIGxlcyBjb25mbGl0cyAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5tYXN0aGVhZC1zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbn1cclxuaGVhZGVyLm1hc3RoZWFkIC5tYXN0aGVhZC1zdWJoZWFkaW5nIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyLm1hc3RoZWFkIC5tYXN0aGVhZC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5tYXN0aGVhZC1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDMuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG59XHJcblxyXG4uYWJvdXQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDsgLyogQWp1c3RleiBsYSBoYXV0ZXVyIHNlbG9uIHZvcyBiZXNvaW5zICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWJvdXQtYmFja2dyb3VuZCAuY29udGVudC1vdmVybGF5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLyogQWp1c3RleiBsZSBzdHlsZSBzZWxvbiB2b3MgYmVzb2lucyAqL1xyXG59XHJcblxyXG4uYWJvdXQtYmFja2dyb3VuZCAuY29udGVudC1vdmVybGF5IC5tYXN0aGVhZC1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogXCJBbWF0aWMgU0NcIiwgXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgZm9udC1zaXplOiAxNTBweDtcclxuICBsaW5lLWhlaWdodDogMS4xOyAvKiBBanVzdGV6IGNldHRlIHZhbGV1ciBwb3VyIHLDqWR1aXJlIG91IGF1Z21lbnRlciBsJ2VzcGFjZW1lbnQgZW50cmUgbGVzIGxpZ25lcyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFqb3V0ZXogdW4gZXNwYWNlbWVudCBlbnRyZSBsZXMgbGlnbmVzIGRlIHRleHRlICovXHJcbn1cclxuXHJcbi5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmc6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmc6bnRoLW9mLXR5cGUoMikge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5bZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJdLCBbZGF0YS1hb3M9XCJmYWRlLWxlZnRcIl0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50ZWFtLXBob3RvIHtcclxuICB3aWR0aDogMTYwcHg7IC8qIGxhcmdldXIgcGVyc29ubmFsaXPDqWUgKi9cclxuICBoZWlnaHQ6IDE2MHB4OyAvKiBoYXV0ZXVyIHBlcnNvbm5hbGlzw6llICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHBvdXIgbGUgYm91dG9uIGxvcnNxdWUgbCdhY2NvcmTDqW9uIGVzdCBvdXZlcnQgKi9cclxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IC8qIENvdWxldXIgZGUgZm9uZCBkdSBib3V0b24gb3V2ZXJ0ICovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjsgLyogQ291bGV1ciBkdSB0ZXh0ZSBkdSBib3V0b24gb3V2ZXJ0ICovXHJcbn1cclxuXHJcbi8qIFBvdXIgYWpvdXRlciB1bmUgdHJhbnNpdGlvbiBkb3VjZSAqL1xyXG4uYWNjb3JkaW9uLWJ1dHRvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYWJvdXQtYmFja2dyb3VuZCAuY29udGVudC1vdmVybGF5IC5tYXN0aGVhZC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDsgLyogVGFpbGxlIGRlIHBvbGljZSBwb3VyIHBldGl0cyDDqWNyYW5zICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBBanVzdGVtZW50IGRlIGwnZXNwYWNlbWVudCAqL1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFib3V0LWJhY2tncm91bmQgLmNvbnRlbnQtb3ZlcmxheSAubWFzdGhlYWQtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciB0csOocyBwZXRpdHMgw6ljcmFucyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmVyIGxlIHRleHRlIHN1ciBsZXMgcGV0aXRzIMOpY3JhbnMgKi9cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250ZW50LW92ZXJsYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmVyIGxlIHRleHRlIHN1ciBsZXMgcGV0aXRzIMOpY3JhbnMgKi9cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA4MHB4OyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgw6ljcmFucyBtb3llbnMgKi9cclxuICB9XHJcblxyXG4gIC5idG4tY29ubmV4aW9uICp7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA2MHB4OyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgcGV0aXRzIMOpY3JhbnMgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIEFqdXN0ZW1lbnQgZGUgbCdlc3BhY2VtZW50ICovXHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDsgLyogQWp1c3RleiBsYSBwb3NpdGlvbiB2ZXJ0aWNhbGUgKi9cclxuICBsZWZ0OiA1MCU7IC8qIENlbnRyZXIgaG9yaXpvbnRhbGVtZW50ICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAvKiBDZW50cmVyIGxlIHRleHRlICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmVyIGxlIHRleHRlICovXHJcbiAgcGFkZGluZzogMTBweDsgLyogRXNwYWNlbWVudCBhdXRvdXIgZHUgdGV4dGUgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEZvbmQgc2VtaS10cmFuc3BhcmVudCBwb3VyIGxlIHRleHRlICovXHJcbiAgY29sb3I6IHdoaXRlOyAvKiBDb3VsZXVyIGR1IHRleHRlICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5jYXJvdXNlbC1jYXB0aW9uIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciBsZXMgcGV0aXRzIMOpY3JhbnMgKi9cclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogVGFpbGxlIGRlIHBvbGljZSBwb3VyIGxlIHRleHRlICovXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJvdXNlbC1jYXB0aW9uIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAycmVtOyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgbGVzIMOpY3JhbnMgbW95ZW5zICovXHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07IC8qIEFqdXN0ZXogbGEgdGFpbGxlIGR1IHRleHRlICovXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtOyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgbGVzIGdyYW5kcyDDqWNyYW5zICovXHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciBsZSB0ZXh0ZSAqL1xyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5sb2dpbi1zZWN0aW9uLCBzZWN0aW9uLnJlZ2lzdGVyLXNlY3Rpb257XHJcbiAgcGFkZGluZy10b3A6IDEyMHB4ICFpbXBvcnRhbnQ7IC8qIEFqdXN0ZXogbGEgdmFsZXVyIGVuIGZvbmN0aW9uIGRlIGxhIGhhdXRldXIgZGUgdm90cmUgbmF2YmFyICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnNiLWJ0bi1jaXJjbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsYXNoLW1lc3NhZ2Uge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZSBsZSBiYW5kZWF1IGVuIGJhcyBkZSBsJ8OpY3JhbiAqL1xyXG4gIGJvdHRvbTogMDsgLyogUGxhY2UgbGUgYmFuZGVhdSB0b3V0IGVuIGJhcyAqL1xyXG4gIGxlZnQ6IDA7IC8qIEFsaWduZSBsZSBiYW5kZWF1IMOgIGdhdWNoZSAqL1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGYWl0IGVuIHNvcnRlIHF1ZSBsZSBiYW5kZWF1IG9jY3VwZSB0b3V0ZSBsYSBsYXJnZXVyICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTsgLyogQ291bGV1ciBkZSBmb25kIHZlcnQgKEJvb3RzdHJhcCBncmVlbikgKi9cclxuICBjb2xvcjogd2hpdGU7IC8qIFRleHRlIGVuIGJsYW5jICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmUgbGUgdGV4dGUgKi9cclxuICBmb250LXNpemU6IDE2cHg7IC8qIFRhaWxsZSBkdSB0ZXh0ZSAqL1xyXG4gIHotaW5kZXg6IDk5OTk7IC8qIFMnYXNzdXJlIHF1ZSBsZSBiYW5kZWF1IHJlc3RlIGF1LWRlc3N1cyBkZXMgYXV0cmVzIMOpbMOpbWVudHMgKi9cclxuICBib3gtc2hhZG93OiAwIC0ycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogT21icmUgbMOpZ8OocmUgZW4gaGF1dCBkdSBiYW5kZWF1IHBvdXIgbGUgbWV0dHJlIGVuIHZhbGV1ciAqL1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjVzIGVhc2UtaW4tb3V0OyAvKiBBbmltYXRpb24gcG91ciBmYWlyZSBnbGlzc2VyIGxlIGJhbmRlYXUgZHUgYmFzIHZlcnMgbGUgaGF1dCAqL1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDrnRyZSBsZSBiYW5kZWF1ICovXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgMCUge1xyXG4gICAgICBib3R0b206IC01MHB4OyAvKiBMZSBiYW5kZWF1IGNvbW1lbmNlIGVuIGRlaG9ycyBkZSBsJ8OpY3JhbiAqL1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgICAgYm90dG9tOiAwOyAvKiBMZSBiYW5kZWF1IGZpbml0IGVuIGJhcyBkZSBsYSBwYWdlICovXHJcbiAgfVxyXG59XHJcblxyXG4vKiBPcHRpb25uZWwgOiBtYXNxdWVyIGxlIGJhbmRlYXUgYXByw6hzIHF1ZWxxdWVzIHNlY29uZGVzICovXHJcbi5mbGFzaC1tZXNzYWdlLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0ZS1vciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZENzAwLCAjRkZBNTAwLCAjRkZENzAwKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jYmFja2dyb3VuZC1jYW52YXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYXNzZXRzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFF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QztFQUN0RDtBQUNGOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBWYXJpYWJsZXMgZGUgY291bGV1ciAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tY29udHJvbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgLS1jb250cm9sLWNvbG9yLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmJhciBTdHlsaW5nICovXFxyXFxuI21haW5OYXYubmF2YmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIFRyYW5zcGFyZW50ZSBwb3VyIHNlIGZvbmRyZSBkYW5zIGxhIHZpZMOpbyAqL1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kLFxcclxcbi5sb2dpbi1zZWN0aW9uIC5uYXZiYXItYnJhbmQsXFxyXFxuLnNiLXRvcG5hdiAubmF2YmFyLWJyYW5kICB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFtYXRpYyBTQ1xcXCIsIFxcXCJNZXJyaXdlYXRoZXIgU2Fuc1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kLFxcclxcbiNtYWluTmF2IC5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogI2ZmZjsgLyogVGV4dGUgYmxhbmMgcG91ciBjb250cmFzdGUgc3VyIHZpZMOpbyAqL1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyLWljb24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MjU1LCAyNTUsIDI1NSwgMC41JTI5JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaWVucyBkZSBsYSBuYXZiYXIgKi9cXHJcXG4ubmF2LWl0ZW0gLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAvKiBFc3BhY2UgcmVzdGF1csOpIGVudHJlIGxlcyBsaWVucyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBNZW51ICovXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyAvKiBMw6lnw6hyZW1lbnQgdHJhbnNwYXJlbnQgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1pdGVtIHtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24taXRlbTpob3ZlcixcXHJcXG4uZHJvcGRvd24taXRlbTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1hc3RoZWFkIFN0eWxpbmcgKENhcm91c2VsIFZpZMOpbyBlbiBwbGVpbmUgcGFnZSkgKi9cXHJcXG4ubWFzdGhlYWQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBQbGVpbmUgaGF1dGV1ciAqL1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiN2aWRlb0Nhcm91c2VsLmNhcm91c2VsIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7IC8qIDEwMCUgZGUgbGEgaGF1dGV1ciBkZSBs4oCZw6ljcmFuICovXFxyXFxufVxcclxcblxcclxcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gdmlkZW8ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIENvdXZyZSB0b3V0ZSBsYSB6b25lIHZpc2libGUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQ2Fyb3VzZWwgQ29udHJvbCBTdHlsaW5nICovXFxyXFxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcXHJcXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcXHJcXG4gIHdpZHRoOiA1JTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2OmhvdmVyLFxcclxcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxcclxcbi52aWRlb0Nhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250cm9sLWNvbG9yKTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb246aG92ZXIsXFxyXFxuLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRyb2wtY29sb3ItaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWaWRlbyBTdHlsaW5nICovXFxyXFxudmlkZW8uZC1ibG9jay53LTEwMCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAuZHJvcGRvd24tbWVudSB7XFxyXFxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAudmlkZW9DYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxcclxcbiAgLnZpZGVvQ2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XFxyXFxuICAgICAgd2lkdGg6IDEwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAjbWFpbk5hdiB7XFxyXFxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICB9XFxyXFxuICAuZHJvcGRvd24tbWVudSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7IC8qIFV0aWxpc2VyIEZsZXhib3ggcG91ciBhbGlnbmVyIGxlcyDDqWzDqW1lbnRzICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50cmVyIHZlcnRpY2FsZW1lbnQgbGVzIMOpbMOpbWVudHMgKi9cXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50cmVyIGhvcml6b250YWxlbWVudCB0b3VzIGxlcyDDqWzDqW1lbnRzICovXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFBvc2l0aW9uIHJlbGF0aXZlIHBvdXIgY29udHLDtGxlciBsZXMgaWPDtG5lcyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIENvdWxldXIgZGUgZm9uZCBkZSBsYSBiYXJyZSBkZSByZWNoZXJjaGUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IC8qIENvaW5zIGFycm9uZGlzICovXFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIEVzcGFjZSBpbnTDqXJpZXVyICovXFxyXFxuICB3aWR0aDogMjAwcHg7IC8qIExhcmdldXIgaW5pdGlhbGUgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlICovXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAvKiBUcmFuc2l0aW9uIHBvdXIgdG91cyBsZXMgY2hhbmdlbWVudHMgZGUgcHJvcHJpw6l0w6kgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgcG91ciBsZSBjb250ZW5ldXIgZHUgbG9nbyAqL1xcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bzsgLyogTmUgcGFzIHBlcm1ldHRyZSDDoCBsJ8OpbMOpbWVudCBkZSBncmFuZGlyIG91IGRlIHNlIHLDqXRyw6ljaXIgKi9cXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgLyogRXNwYWNlbWVudCBhdXRvdXIgZHUgbG9nbyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3VyIGxlIGxvZ28gKi9cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MHB4OyAvKiBBanVzdGV6IGxhIGhhdXRldXIgZHUgbG9nbyBzZWxvbiB2b3MgYmVzb2lucyAqL1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBQb3VyIMOpdml0ZXIgcXVlIGxlIGxvZ28gZMOpcGFzc2UgbGUgY29udGVuZXVyICovXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyLmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogMzAwcHg7IC8qIExhcmdldXIgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlIHF1YW5kIGVsbGUgZXN0IGFjdGl2ZSAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBGb25kIHRyYW5zcGFyZW50ICovXFxyXFxuICBib3JkZXI6IG5vbmU7IC8qIFBhcyBkZSBib3JkdXJlICovXFxyXFxuICBjb2xvcjogIzQwNDA0MDsgLyogQ291bGV1ciBkdSB0ZXh0ZSAqL1xcclxcbiAgb3V0bGluZTogbm9uZTsgLyogUGFzIGRlIGNvbnRvdXIgKi9cXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBQcmVuZHJlIHRvdXRlIGxhIGxhcmdldXIgZGlzcG9uaWJsZSAqL1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4OyAvKiBFc3BhY2VtZW50IHBvdXIgbCdpY8O0bmUgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBam91dGUgZHUgc3R5bGUgYXV4IHBsYWNlaG9sZGVycyAqL1xcclxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjYjNiM2IzOyAvKiBDb3VsZXVyIGR1IHBsYWNlaG9sZGVyICovXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIGFic29sdWUgcG91ciBsYSBwbGFjZXIgw6AgbCdpbnTDqXJpZXVyIGR1IGNoYW1wICovXFxyXFxuICBsZWZ0OiAxMHB4OyAvKiBEw6lwbGFjZW1lbnQgw6AgZ2F1Y2hlICovXFxyXFxuICBmaWxsOiAjNDA0MDQwOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lICovXFxyXFxuICB3aWR0aDogMjJweDsgLyogTGFyZ2V1ciBhdWdtZW50w6llICovXFxyXFxuICBoZWlnaHQ6IDIycHg7IC8qIEhhdXRldXIgYXVnbWVudMOpZSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTw6lwYXJhdGV1ciB2ZXJ0aWNhbCAqL1xcclxcbi5zZXBhcmF0b3Ige1xcclxcbiAgY29sb3I6ICM0MDQwNDA7XFxyXFxuICBtYXJnaW46IDAgMTBweDsgLyogRXNwYWNlIGF1dG91ciBkdSBzw6lwYXJhdGV1ciAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJY8O0bmUgZGUgbmF2aWdhdGlvbiBcXFwicGFyY291cmlyXFxcIiAqL1xcclxcbi5icm93c2UtaWNvbiB7XFxyXFxuICBmaWxsOiAjNDA0MDQwOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNldXIgZW4gZm9ybWUgZGUgbWFpbiBwb3VyIGluZGlxdWVyIHF1J2lsIGVzdCBjbGlxdWFibGUgKi9cXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcztcXHJcXG4gIHdpZHRoOiAyMnB4OyAvKiBMYXJnZXVyIGF1Z21lbnTDqWUgKi9cXHJcXG4gIGhlaWdodDogMjJweDsgLyogSGF1dGV1ciBhdWdtZW50w6llICovXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyLmNvbGxhcHNlZCAuc2VwYXJhdG9yLFxcclxcbi5zZWFyY2gtY29udGFpbmVyLmNvbGxhcHNlZCAuYnJvd3NlLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItaWNvbiB7XFxyXFxuICBmaWxsOiAjNDA0MDQwOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNldXIgZW4gZm9ybWUgZGUgbWFpbiBwb3VyIGluZGlxdWVyIHF1J2lsIGVzdCBjbGlxdWFibGUgKi9cXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcztcXHJcXG4gIHdpZHRoOiAyN3B4OyAvKiBMYXJnZXVyIGRlIGwnaWPDtG5lIGRlIGNyb2l4ICovXFxyXFxuICBoZWlnaHQ6IDI3cHg7IC8qIEhhdXRldXIgZGUgbCdpY8O0bmUgZGUgY3JvaXggKi9cXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAvKiBFc3BhY2UgYXV0b3VyIGRlIGwnaWPDtG5lIGRlIGNyb2l4ICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi5idG4tY29ubmV4aW9uLCAuYnRuLWRlbWFycmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogQ291bGV1ciBkZSBmb25kIGRlIGxhIGJhcnJlIGRlIHJlY2hlcmNoZSAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgLyogQ29pbnMgYXJyb25kaXMgKi9cXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDsgLyogRXNwYWNlIGludMOpcmlldXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb25uZXhpb246aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRlbWFycmVyOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXItbW9iaWxle1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAubG9nby1jb250YWluZXItbW9iaWxle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIC5sb2dvLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtZWxlbWVudHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtZWxlbWVudCA+ICp7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICAub3RoZXItZWxlbWVudC1uYXZ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAub3RoZXItZWxlbWVudC1uYXYgPiAqe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLm90aGVyLWVsZW1lbnQtbmF2IGF7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci10b2dnbGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogQXNzdXJlIHF1ZSBsZSBib3V0b24gZXN0IGVuIHBvc2l0aW9uIGFic29sdWUgKi9cXHJcXG4gIHRvcDogMTVweDsgLyogQWp1c3RleiBzZWxvbiB2b3RyZSBkZXNpZ24gKi9cXHJcXG4gIHJpZ2h0OiAxNXB4OyAvKiBBanVzdGV6IHNlbG9uIHZvdHJlIGRlc2lnbiAqL1xcclxcbiAgei1pbmRleDogOTk5OyAvKiBBc3N1cmV6LXZvdXMgcXUnaWwgZXN0IGF1LWRlc3N1cyBkZXMgYXV0cmVzIMOpbMOpbWVudHMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1vcGVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IC8qIEZvbmQgYmxhbmMgKi9cXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBPcHRpb25uZWwgOiBham91dCBkJ3VuZSBvbWJyZSBwb3VyIHVuIGVmZmV0IGRlIHByb2ZvbmRldXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1vcGVuIGEsIC5uYXZiYXItb3BlbiBsaSB7XFxyXFxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW9wZW4gLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW9wZW4gLnNlYXJjaC1jb250YWluZXIgaW5wdXQsIFxcclxcbi5uYXZiYXItb3BlbiAuc2VhcmNoLWNvbnRhaW5lciAuYnJvd3NlLWljb24sXFxyXFxuLm5hdmJhci1vcGVuIC5zZWFyY2gtY29udGFpbmVyIC5jbGVhci1pY29uLFxcclxcbi5uYXZiYXItb3BlbiAuc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWljb24gIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZmlsbDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1vcGVuIC5vdGhlci1lbGVtZW50LW5hdiBhLmJ0bi1jb25uZXhpb24sXFxyXFxuLm5hdmJhci1vcGVuIC5vdGhlci1lbGVtZW50LW5hdiBkaXYuYnRuLWNvbm5leGlvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuYnRuLWNvbm5leGlvbiAucm91bmRlZC1jaXJjbGV7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuYnRuLWNvbm5leGlvbiBzdmd7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmJ0bi1jb25uZXhpb24gYXtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW9wZW4gLm5hdmJhci10b2dnbGVyLWljb24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYnMtbmF2YmFyLXRvZ2dsZXItaWNvbi1iZykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9ubmVtZW50IGFic29sdSBwb3VyIHN1cGVycG9zZXIgbGUgY29udGVudSAqL1xcclxcbiAgdG9wOiA1MCU7IC8qIENlbnRyZXIgdmVydGljYWxlbWVudCAqL1xcclxcbiAgbGVmdDogNTAlOyAvKiBDZW50cmVyIGhvcml6b250YWxlbWVudCAqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIETDqXBsYWNlciBwb3VyIGNlbnRyZXIgKi9cXHJcXG4gIGNvbG9yOiB3aGl0ZTsgLyogQ291bGV1ciBkdSB0ZXh0ZSAqL1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IC8qIENlbnRyZXIgbGUgdGV4dGUgKi9cXHJcXG4gIHBhZGRpbmc6IDIwcHg7IC8qIEVzcGFjZW1lbnQgYXV0b3VyIGR1IGNvbnRlbnUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQ2xhc3NlIGFwcGxpcXXDqWUgYXUgbmF2IGxvcnMgZHUgc2Nyb2xsICovXFxyXFxuI21haW5OYXYuc2Nyb2xsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZSwgYm94LXNoYWRvdyAwLjZzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtYWluTmF2LnNjcm9sbGVkICAubmF2LWxpbmssXFxyXFxuI21haW5OYXYuc2Nyb2xsZWQgIC5uYXZiYXItYnJhbmQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbk5hdi5zY3JvbGxlZCAgLmJ0bi1jb25uZXhpb24sXFxyXFxuI21haW5OYXYuc2Nyb2xsZWQgIC5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbml0aWFsaXNhdGlvbiBkZSBsYSBjb3VsZXVyIHBvdXIgw6l2aXRlciBsZXMgY29uZmxpdHMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlci5tYXN0aGVhZCAubWFzdGhlYWQtc3ViaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuaGVhZGVyLm1hc3RoZWFkIC5tYXN0aGVhZC1zdWJoZWFkaW5nIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlci5tYXN0aGVhZCAubWFzdGhlYWQtaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogNC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIubWFzdGhlYWQgLm1hc3RoZWFkLWhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAzLjI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGVhZGVyX2Fib3V0X2JhY2tncm91bmQuanBlZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBBanVzdGV6IGxhIGhhdXRldXIgc2Vsb24gdm9zIGJlc29pbnMgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICAvKiBBanVzdGV6IGxlIHN0eWxlIHNlbG9uIHZvcyBiZXNvaW5zICovXFxyXFxufVxcclxcblxcclxcbi5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmcge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbWF0aWMgU0NcXFwiLCBcXFwiTWVycml3ZWF0aGVyIFNhbnNcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcclxcbiAgZm9udC1zaXplOiAxNTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7IC8qIEFqdXN0ZXogY2V0dGUgdmFsZXVyIHBvdXIgcsOpZHVpcmUgb3UgYXVnbWVudGVyIGwnZXNwYWNlbWVudCBlbnRyZSBsZXMgbGlnbmVzICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBam91dGV6IHVuIGVzcGFjZW1lbnQgZW50cmUgbGVzIGxpZ25lcyBkZSB0ZXh0ZSAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtYmFja2dyb3VuZCAuY29udGVudC1vdmVybGF5IC5tYXN0aGVhZC1oZWFkaW5nOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWFvcz1cXFwiZmFkZS1yaWdodFxcXCJdLCBbZGF0YS1hb3M9XFxcImZhZGUtbGVmdFxcXCJdIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbS1waG90byB7XFxyXFxuICB3aWR0aDogMTYwcHg7IC8qIGxhcmdldXIgcGVyc29ubmFsaXPDqWUgKi9cXHJcXG4gIGhlaWdodDogMTYwcHg7IC8qIGhhdXRldXIgcGVyc29ubmFsaXPDqWUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgcG91ciBsZSBib3V0b24gbG9yc3F1ZSBsJ2FjY29yZMOpb24gZXN0IG91dmVydCAqL1xcclxcbi5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IC8qIENvdWxldXIgZGUgZm9uZCBkdSBib3V0b24gb3V2ZXJ0ICovXFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBDb3VsZXVyIGR1IHRleHRlIGR1IGJvdXRvbiBvdXZlcnQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogUG91ciBham91dGVyIHVuZSB0cmFuc2l0aW9uIGRvdWNlICovXFxyXFxuLmFjY29yZGlvbi1idXR0b24ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciBwZXRpdHMgw6ljcmFucyAqL1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBBanVzdGVtZW50IGRlIGwnZXNwYWNlbWVudCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gIC5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciB0csOocyBwZXRpdHMgw6ljcmFucyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyZXIgbGUgdGV4dGUgc3VyIGxlcyBwZXRpdHMgw6ljcmFucyAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gIC5jb250ZW50LW92ZXJsYXkge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyZXIgbGUgdGV4dGUgc3VyIGxlcyBwZXRpdHMgw6ljcmFucyAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5hYm91dC1iYWNrZ3JvdW5kIC5jb250ZW50LW92ZXJsYXkgLm1hc3RoZWFkLWhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDgwcHg7IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciDDqWNyYW5zIG1veWVucyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bi1jb25uZXhpb24gKntcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmFib3V0LWJhY2tncm91bmQgLmNvbnRlbnQtb3ZlcmxheSAubWFzdGhlYWQtaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDsgLyogVGFpbGxlIGRlIHBvbGljZSBwb3VyIHBldGl0cyDDqWNyYW5zICovXFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIEFqdXN0ZW1lbnQgZGUgbCdlc3BhY2VtZW50ICovXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jYXB0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjBweDsgLyogQWp1c3RleiBsYSBwb3NpdGlvbiB2ZXJ0aWNhbGUgKi9cXHJcXG4gIGxlZnQ6IDUwJTsgLyogQ2VudHJlciBob3Jpem9udGFsZW1lbnQgKi9cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgLyogQ2VudHJlciBsZSB0ZXh0ZSAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmVyIGxlIHRleHRlICovXFxyXFxuICBwYWRkaW5nOiAxMHB4OyAvKiBFc3BhY2VtZW50IGF1dG91ciBkdSB0ZXh0ZSAqL1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBGb25kIHNlbWktdHJhbnNwYXJlbnQgcG91ciBsZSB0ZXh0ZSAqL1xcclxcbiAgY29sb3I6IHdoaXRlOyAvKiBDb3VsZXVyIGR1IHRleHRlICovXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgLmNhcm91c2VsLWNhcHRpb24gaDUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgbGVzIHBldGl0cyDDqWNyYW5zICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogVGFpbGxlIGRlIHBvbGljZSBwb3VyIGxlIHRleHRlICovXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoNSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtOyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgbGVzIMOpY3JhbnMgbW95ZW5zICovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgLyogQWp1c3RleiBsYSB0YWlsbGUgZHUgdGV4dGUgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoNSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07IC8qIFRhaWxsZSBkZSBwb2xpY2UgcG91ciBsZXMgZ3JhbmRzIMOpY3JhbnMgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBUYWlsbGUgZGUgcG9saWNlIHBvdXIgbGUgdGV4dGUgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5sb2dpbi1zZWN0aW9uLCBzZWN0aW9uLnJlZ2lzdGVyLXNlY3Rpb257XFxyXFxuICBwYWRkaW5nLXRvcDogMTIwcHggIWltcG9ydGFudDsgLyogQWp1c3RleiBsYSB2YWxldXIgZW4gZm9uY3Rpb24gZGUgbGEgaGF1dGV1ciBkZSB2b3RyZSBuYXZiYXIgKi9cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2xvZ2luX2JhY2tncm91bmQuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJzYi1idG4tY2lyY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mbGFzaC1tZXNzYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZSBsZSBiYW5kZWF1IGVuIGJhcyBkZSBsJ8OpY3JhbiAqL1xcclxcbiAgYm90dG9tOiAwOyAvKiBQbGFjZSBsZSBiYW5kZWF1IHRvdXQgZW4gYmFzICovXFxyXFxuICBsZWZ0OiAwOyAvKiBBbGlnbmUgbGUgYmFuZGVhdSDDoCBnYXVjaGUgKi9cXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGYWl0IGVuIHNvcnRlIHF1ZSBsZSBiYW5kZWF1IG9jY3VwZSB0b3V0ZSBsYSBsYXJnZXVyICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyAvKiBDb3VsZXVyIGRlIGZvbmQgdmVydCAoQm9vdHN0cmFwIGdyZWVuKSAqL1xcclxcbiAgY29sb3I6IHdoaXRlOyAvKiBUZXh0ZSBlbiBibGFuYyAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmUgbGUgdGV4dGUgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogVGFpbGxlIGR1IHRleHRlICovXFxyXFxuICB6LWluZGV4OiA5OTk5OyAvKiBTJ2Fzc3VyZSBxdWUgbGUgYmFuZGVhdSByZXN0ZSBhdS1kZXNzdXMgZGVzIGF1dHJlcyDDqWzDqW1lbnRzICovXFxyXFxuICBib3gtc2hhZG93OiAwIC0ycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogT21icmUgbMOpZ8OocmUgZW4gaGF1dCBkdSBiYW5kZWF1IHBvdXIgbGUgbWV0dHJlIGVuIHZhbGV1ciAqL1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuNXMgZWFzZS1pbi1vdXQ7IC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGdsaXNzZXIgbGUgYmFuZGVhdSBkdSBiYXMgdmVycyBsZSBoYXV0ICovXFxyXFxufVxcclxcblxcclxcbi8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcOudHJlIGxlIGJhbmRlYXUgKi9cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcclxcbiAgMCUge1xcclxcbiAgICAgIGJvdHRvbTogLTUwcHg7IC8qIExlIGJhbmRlYXUgY29tbWVuY2UgZW4gZGVob3JzIGRlIGwnw6ljcmFuICovXFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgICBib3R0b206IDA7IC8qIExlIGJhbmRlYXUgZmluaXQgZW4gYmFzIGRlIGxhIHBhZ2UgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogT3B0aW9ubmVsIDogbWFzcXVlciBsZSBiYW5kZWF1IGFwcsOocyBxdWVscXVlcyBzZWNvbmRlcyAqL1xcclxcbi5mbGFzaC1tZXNzYWdlLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRlLW9yIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGRDcwMCwgI0ZGQTUwMCwgI0ZGRDcwMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNiYWNrZ3JvdW5kLWNhbnZhcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMV0udXNlWzFdIS4vSW50ZXJmYWNlX3VzZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMV0udXNlWzFdIS4vSW50ZXJmYWNlX3VzZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxXS51c2VbMV0hLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMV0udXNlWzFdIS4vYXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMV0udXNlWzFdIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxXS51c2VbMV0hLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwib25jZSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFN0aW11bHVzQXBwIiwiVHVyYm8iLCJzdGFydCIsIlRvb2x0aXAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwid2luZG93IiwiZXZlbnQiLCJzaWRlYmFyVG9nZ2xlIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJTdG9yYWdlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29udGFpbnMiLCJpbml0aWFsaXplU2VhcmNoIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoSW5wdXQiLCJjbGVhckljb24iLCJzZXBhcmF0b3IiLCJicm93c2VJY29uIiwibmF2YmFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGVyIiwidGFyZ2V0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwibGVuZ3RoIiwic2Nyb2xsWSIsImdzYXAiLCJmcm9tIiwieSIsIm9wYWNpdHkiLCJlYXNlIiwiZGVsYXkiLCJzY2FsZSIsImNhcm91c2VsIiwiZnJvbVRvIiwiVEhSRUUiLCJjYW52YXMiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJwYXJ0aWNsZUdlb21ldHJ5IiwiQnVmZmVyR2VvbWV0cnkiLCJwYXJ0aWNsZUNvdW50IiwicGFydGljbGVQb3NpdGlvbnMiLCJGbG9hdDMyQXJyYXkiLCJpIiwiTWF0aCIsInJhbmRvbSIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsInBhcnRpY2xlTWF0ZXJpYWwiLCJQb2ludHNNYXRlcmlhbCIsImNvbG9yIiwic2l6ZSIsImJsZW5kaW5nIiwiQWRkaXRpdmVCbGVuZGluZyIsInRyYW5zcGFyZW50IiwicGFydGljbGVzIiwiUG9pbnRzIiwicG9zaXRpb24iLCJ6IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwieCIsInJlbmRlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJoaWRkZW4iLCJzZXRBbmltYXRpb25Mb29wIl0sInNvdXJjZVJvb3QiOiIifQ==