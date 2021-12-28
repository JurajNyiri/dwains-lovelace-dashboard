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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/card-tools/src/event.js":
/*!**********************************************!*\
  !*** ./node_modules/card-tools/src/event.js ***!
  \**********************************************/
/*! exports provided: fireEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireEvent\", function() { return fireEvent; });\n/* harmony import */ var _hass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass */ \"./node_modules/card-tools/src/hass.js\");\n\n\nfunction fireEvent(ev, detail, entity=null) {\n  ev = new Event(ev, {\n    bubbles: true,\n    cancelable: false,\n    composed: true,\n  });\n  ev.detail = detail || {};\n  if(entity) {\n    entity.dispatchEvent(ev);\n  } else {\n    var root = Object(_hass__WEBPACK_IMPORTED_MODULE_0__[\"lovelace_view\"])();\n    if (root) root.dispatchEvent(ev);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/event.js?");

/***/ }),

/***/ "./node_modules/card-tools/src/hass.js":
/*!*********************************************!*\
  !*** ./node_modules/card-tools/src/hass.js ***!
  \*********************************************/
/*! exports provided: hass, provideHass, lovelace, async_lovelace_view, lovelace_view, load_lovelace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hass\", function() { return hass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"provideHass\", function() { return provideHass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lovelace\", function() { return lovelace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"async_lovelace_view\", function() { return async_lovelace_view; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lovelace_view\", function() { return lovelace_view; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load_lovelace\", function() { return load_lovelace; });\nfunction hass() {\n  if(document.querySelector('hc-main'))\n    return document.querySelector('hc-main').hass;\n\n  if(document.querySelector('home-assistant'))\n    return document.querySelector('home-assistant').hass;\n\n  return undefined;\n};\n\nfunction provideHass(element) {\n  if(document.querySelector('hc-main'))\n    return document.querySelector('hc-main').provideHass(element);\n\n  if(document.querySelector('home-assistant'))\n    return document.querySelector(\"home-assistant\").provideHass(element);\n\n  return undefined;\n}\n\nfunction lovelace() {\n  var root = document.querySelector(\"hc-main\");\n  if(root) {\n    var ll = root._lovelaceConfig;\n    ll.current_view = root._lovelacePath;\n    return ll;\n  }\n\n  root = document.querySelector(\"home-assistant\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\")\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\")\n  if (root) {\n    var ll =  root.lovelace\n    ll.current_view = root.___curView;\n    return ll;\n  }\n\n  return null;\n}\n\nasync function await_el(el) {\n  if(!el) return;\n  await customElements.whenDefined(el.localName);\n  if(el.updateComplete)\n    await el.updateComplete;\n}\n\nasync function async_lovelace_view() {\n  var root = document.querySelector(\"hc-main\");\n  if(root) {\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hc-lovelace\");\n    await_el(root);\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hui-view\") || root.querySelector(\"hui-panel-view\");\n    await_el(root);\n    return root;\n  }\n\n  root = document.querySelector(\"home-assistant\");\n  await_el(root);\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  await_el(root);\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  await_el(root);\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\");\n  await_el(root);\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\");\n  await_el(root);\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"ha-app-layout\")\n  await_el(root);\n  root = root && root.querySelector(\"#view\");\n  root = root && root.firstElementChild;\n  await_el(root);\n  return root;\n}\nfunction lovelace_view() {\n  var root = document.querySelector(\"hc-main\");\n  if(root) {\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hc-lovelace\");\n    root = root && root.shadowRoot;\n    root = root && root.querySelector(\"hui-view\") || root.querySelector(\"hui-panel-view\");\n    return root;\n  }\n\n  root = document.querySelector(\"home-assistant\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"home-assistant-main\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"app-drawer-layout partial-panel-resolver\");\n  root = root && root.shadowRoot || root;\n  root = root && root.querySelector(\"ha-panel-lovelace\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"hui-root\");\n  root = root && root.shadowRoot;\n  root = root && root.querySelector(\"ha-app-layout\")\n  root = root && root.querySelector(\"#view\");\n  root = root && root.firstElementChild;\n  return root;\n}\n\nasync function load_lovelace() {\n  if(customElements.get(\"hui-view\")) return true;\n\n  await customElements.whenDefined(\"partial-panel-resolver\");\n  const ppr = document.createElement(\"partial-panel-resolver\");\n  ppr.hass = {panels: [{\n    url_path: \"tmp\",\n    \"component_name\": \"lovelace\",\n  }]};\n  ppr._updateRoutes();\n  await ppr.routerOptions.routes.tmp.load();\n  if(!customElements.get(\"ha-panel-lovelace\")) return false;\n  const p = document.createElement(\"ha-panel-lovelace\");\n  p.hass = hass();\n  if(p.hass === undefined) {\n    await new Promise(resolve => {\n      window.addEventListener('connection-status', (ev) => {\n        console.log(ev);\n        resolve();\n      }, {once: true});\n    });\n    p.hass = hass();\n  }\n  p.panel = {config: {mode: null}};\n  p._fetchConfig();\n  return true;\n}\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/hass.js?");

/***/ }),

/***/ "./node_modules/card-tools/src/lovelace-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/card-tools/src/lovelace-element.js ***!
  \*********************************************************/
/*! exports provided: CUSTOM_TYPE_PREFIX, DOMAINS_HIDE_MORE_INFO, createCard, createElement, createEntityRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CUSTOM_TYPE_PREFIX\", function() { return CUSTOM_TYPE_PREFIX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMAINS_HIDE_MORE_INFO\", function() { return DOMAINS_HIDE_MORE_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCard\", function() { return createCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEntityRow\", function() { return createEntityRow; });\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./node_modules/card-tools/src/event.js\");\n/* harmony import */ var _hass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hass */ \"./node_modules/card-tools/src/hass.js\");\n\n\n\nconst CUSTOM_TYPE_PREFIX = \"custom:\";\n\nconst DOMAINS_HIDE_MORE_INFO = [\n  \"input_number\",\n  \"input_select\",\n  \"input_text\",\n  \"scene\",\n  \"weblink\",\n];\n\nlet helpers = window.cardHelpers;\nconst helperPromise = new Promise(async (resolve, reject) => {\n  if(helpers) resolve();\n\n  const updateHelpers = async () => {\n    helpers = await window.loadCardHelpers();\n    window.cardHelpers = helpers;\n    resolve();\n  }\n\n  if(window.loadCardHelpers) {\n    updateHelpers();\n  } else {\n    // If loadCardHelpers didn't exist, force load lovelace and try once more.\n    window.addEventListener(\"load\", async () => {\n      Object(_hass__WEBPACK_IMPORTED_MODULE_1__[\"load_lovelace\"])();\n      if(window.loadCardHelpers) {\n        updateHelpers();\n      }\n    });\n  }\n});\n\nfunction errorElement(error, origConfig) {\n  const cfg = {\n    type: \"error\",\n    error,\n    origConfig,\n  };\n  const el = document.createElement(\"hui-error-card\");\n  customElements.whenDefined(\"hui-error-card\").then(() => {\n    const newel = document.createElement(\"hui-error-card\");\n    newel.setConfig(cfg);\n    if(el.parentElement)\n      el.parentElement.replaceChild(newel, el);\n  });\n  helperPromise.then(() => {\n    Object(_event__WEBPACK_IMPORTED_MODULE_0__[\"fireEvent\"])(\"ll-rebuild\", {}, el);\n  });\n  return el;\n}\n\nfunction _createElement(tag, config) {\n  let el = document.createElement(tag);\n  try {\n    el.setConfig(JSON.parse(JSON.stringify(config)));\n  } catch (err) {\n    el = errorElement(err, config);\n  }\n  helperPromise.then(() => {\n    Object(_event__WEBPACK_IMPORTED_MODULE_0__[\"fireEvent\"])(\"ll-rebuild\", {}, el);\n  });\n  return el;\n}\n\nfunction createLovelaceElement(thing, config) {\n  if(!config || typeof config !== \"object\" || !config.type)\n    return errorElement(`No ${thing} type configured`, config);\n\n  let tag = config.type;\n  if(tag.startsWith(CUSTOM_TYPE_PREFIX))\n    tag = tag.substr(CUSTOM_TYPE_PREFIX.length);\n  else\n    tag = `hui-${tag}-${thing}`;\n\n  if(customElements.get(tag))\n    return _createElement(tag, config);\n\n  const el = errorElement(`Custom element doesn't exist: ${tag}.`, config);\n  el.style.display = \"None\";\n\n  const timer = setTimeout(() => {\n    el.style.display = \"\";\n  }, 2000);\n\n  customElements.whenDefined(tag).then(() => {\n    clearTimeout(timer);\n    Object(_event__WEBPACK_IMPORTED_MODULE_0__[\"fireEvent\"])(\"ll-rebuild\", {}, el);\n  });\n\n  return el;\n}\n\nfunction createCard(config) {\n  if(helpers) return helpers.createCardElement(config);\n  return createLovelaceElement('card', config);\n}\nfunction createElement(config) {\n  if(helpers) return helpers.createHuiElement(config);\n  return createLovelaceElement('element', config);\n}\nfunction createEntityRow(config) {\n  if(helpers) return helpers.createRowElement(config);\n  const SPECIAL_TYPES = new Set([\n    \"call-service\",\n    \"cast\",\n    \"conditional\",\n    \"divider\",\n    \"section\",\n    \"select\",\n    \"weblink\",\n  ]);\n  const DEFAULT_ROWS = {\n    alert: \"toggle\",\n    automation: \"toggle\",\n    climate: \"climate\",\n    cover: \"cover\",\n    fan: \"toggle\",\n    group: \"group\",\n    input_boolean: \"toggle\",\n    input_number: \"input-number\",\n    input_select: \"input-select\",\n    input_text: \"input-text\",\n    light: \"toggle\",\n    lock: \"lock\",\n    media_player: \"media-player\",\n    remote: \"toggle\",\n    scene: \"scene\",\n    script: \"script\",\n    sensor: \"sensor\",\n    timer: \"timer\",\n    switch: \"toggle\",\n    vacuum: \"toggle\",\n    water_heater: \"climate\",\n    input_datetime: \"input-datetime\",\n    none: undefined,\n  };\n\n  if(!config)\n    return errorElement(\"Invalid configuration given.\", config);\n  if(typeof config === \"string\")\n    config = {entity: config};\n  if(typeof config !== \"object\" || (!config.entity && !config.type))\n    return errorElement(\"Invalid configuration given.\", config);\n\n  const type = config.type || \"default\";\n  if(SPECIAL_TYPES.has(type) || type.startsWith(CUSTOM_TYPE_PREFIX))\n    return createLovelaceElement('row', config);\n\n  const domain = config.entity ? config.entity.split(\".\", 1)[0]: \"none\";\n  return createLovelaceElement('entity-row', {\n    type: DEFAULT_ROWS[domain] || \"text\",\n    ...config\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/lovelace-element.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, private, version, description, scripts, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"dwains-header-card\\\",\\\"private\\\":true,\\\"version\\\":\\\"0.0.2\\\",\\\"description\\\":\\\"dwains-header-card\\\",\\\"scripts\\\":{\\\"build\\\":\\\"webpack\\\",\\\"watch\\\":\\\"webpack --watch --mode=development\\\",\\\"update-card-tools\\\":\\\"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools\\\"},\\\"keywords\\\":[],\\\"author\\\":\\\"Dwain Scheeren\\\",\\\"license\\\":\\\"MIT\\\",\\\"devDependencies\\\":{\\\"webpack\\\":\\\"^4.42.1\\\",\\\"webpack-cli\\\":\\\"^3.3.11\\\"},\\\"dependencies\\\":{\\\"card-tools\\\":\\\"github:thomasloven/lovelace-card-tools\\\"}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var card_tools_src_hass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-tools/src/hass */ \"./node_modules/card-tools/src/hass.js\");\n/* harmony import */ var card_tools_src_lovelace_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! card-tools/src/lovelace-element */ \"./node_modules/card-tools/src/lovelace-element.js\");\n\r\n\r\n\r\nconst bases = [\r\n  customElements.whenDefined(\"hui-masonry-view\"),\r\n  customElements.whenDefined(\"hc-lovelace\"),\r\n];\r\nPromise.race(bases).then(() => {\r\n  const LitElement = customElements.get(\"hui-masonry-view\")\r\n    ? Object.getPrototypeOf(customElements.get(\"hui-masonry-view\"))\r\n    : Object.getPrototypeOf(customElements.get(\"hc-lovelace\"));\r\n\r\n  const html = LitElement.prototype.html;\r\n\r\n  const css = LitElement.prototype.css;\r\n\r\n  class DwainsHeaderCard extends LitElement {\r\n    constructor() {\r\n      super();\r\n    }\r\n\r\n    setConfig(config) {\r\n      this._config = JSON.parse(JSON.stringify(config));\r\n\r\n      if (this._config.card) {\r\n        this.card = Object(card_tools_src_lovelace_element__WEBPACK_IMPORTED_MODULE_1__[\"createCard\"])(this._config.card);\r\n        this.card.hass = Object(card_tools_src_hass__WEBPACK_IMPORTED_MODULE_0__[\"hass\"])();\r\n      }\r\n    }\r\n\r\n    renderNav() {\r\n      if (this._config.subtitle) {\r\n        return html`\r\n          <div style=\"cursor: pointer;\" @click=\"${this._handleClick}\">\r\n            <ha-icon\r\n              style=\"height: 40px; width: 40px; margin-left: -6px;\"\r\n              .icon=\"${this._config.icon}\"\r\n              id=\"icon\"\r\n            ></ha-icon>\r\n            <h2\r\n              @click=\"${this._handleClick}\"\r\n              style=\"display:inline !important; cursor: pointer;\"\r\n            >\r\n              ${this._config.subtitle}\r\n            </h2>\r\n          </div>\r\n        `;\r\n      } else {\r\n        return html``;\r\n      }\r\n    }\r\n\r\n    render() {\r\n      return html`\r\n        <ha-card>\r\n          <div class=\"container\">\r\n            <div class=\"one\">\r\n              ${this.renderNav()}\r\n              <h1 style=\"padding-top: 16px;\">${this._config.title}</h1>\r\n            </div>\r\n            <div class=\"two\">\r\n              ${this.card}\r\n            </div>\r\n        </ha-card>\r\n      `;\r\n    }\r\n\r\n    set hass(hass) {\r\n      if (!this.card) return;\r\n      this.card.hass = hass;\r\n    }\r\n\r\n    _handleClick() {\r\n      let e;\r\n      let path = window.location.pathname;\r\n      let nav_path =\r\n        path.substring(0, path.lastIndexOf(\"/\")) +\r\n        \"/\" +\r\n        this._config.navigation_path;\r\n      window.history.pushState(null, \"\", nav_path);\r\n      e = new Event(\"location-changed\", { composed: true });\r\n      e.detail = { replace: false };\r\n      window.dispatchEvent(e);\r\n    }\r\n\r\n    static get styles() {\r\n      return [\r\n        css`\r\n          ha-card {\r\n            background-color: var(--app-header-background-color2);\r\n            color: var(--app-header-text-color, white);\r\n            margin-top: 10px;\r\n            padding-left: 16px;\r\n            box-shadow: none;\r\n            border-radius: 0px;\r\n          }\r\n          ha-icon {\r\n            padding-top: 3px;\r\n            display: inline-block;\r\n            margin: auto;\r\n            --mdc-icon-size: 100%;\r\n            --iron-icon-width: 100%;\r\n            --iron-icon-height: 100%;\r\n          }\r\n          @media only screen and (min-width: 1466px) {\r\n            ha-card {\r\n              margin-top: 22px;\r\n              border-radius: 4px;\r\n            }\r\n          }\r\n          h1 {\r\n            color: var(--app-header-text-color, white) !important;\r\n            font-size: 1.5em !important;\r\n            font-weight: bold;\r\n            padding-top: 0px;\r\n            padding-bottom: 20px !important;\r\n            margin-top: 0px;\r\n            margin-bottom: 0px;\r\n          }\r\n          h2 {\r\n            font-size: 13px;\r\n            font-weight: bold;\r\n            padding-top: 8px;\r\n            margin: 0px;\r\n          }\r\n          .container {\r\n            width: 100%;\r\n            height: auto;\r\n            margin: auto;\r\n            overflow: auto;\r\n          }\r\n          .one {\r\n            width: 50%;\r\n            float: left;\r\n          }\r\n          .two {\r\n            width: 50%;\r\n            float: left;\r\n          }\r\n        `,\r\n      ];\r\n    }\r\n\r\n    getCardSize() {\r\n      return 1;\r\n    }\r\n  }\r\n\r\n  if (!customElements.get(\"dwains-header-card\")) {\r\n    customElements.define(\"dwains-header-card\", DwainsHeaderCard);\r\n    const pjson = __webpack_require__(/*! ../package.json */ \"./package.json\");\r\n    console.info(\r\n      `%c DWAINS-HEADER-CARD \\n%c    Version ${pjson.version}    `,\r\n      \"color: #2fbae5; font-weight: bold; background: black\",\r\n      \"color: white; font-weight: bold; background: dimgray\"\r\n    );\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });