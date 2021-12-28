/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"dwains-notification-card\",\"private\":true,\"version\":\"0.0.5\",\"description\":\"dwains-notification-card\",\"scripts\":{\"build\":\"webpack\",\"watch\":\"webpack --watch --mode=development\",\"update-card-tools\":\"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools\"},\"keywords\":[],\"author\":\"Dwain Scheeren\",\"license\":\"MIT\",\"devDependencies\":{\"webpack\":\"^4.42.1\",\"webpack-cli\":\"^3.3.11\"},\"dependencies\":{\"card-tools\":\"github:thomasloven/lovelace-card-tools\"}}');\n\n//# sourceURL=webpack://dwains-notification-card/./package.json?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const bases = [\r\n  customElements.whenDefined(\"hui-masonry-view\"),\r\n  customElements.whenDefined(\"hc-lovelace\"),\r\n];\r\nPromise.race(bases).then(() => {\r\n  const LitElement = customElements.get(\"hui-masonry-view\")\r\n    ? Object.getPrototypeOf(customElements.get(\"hui-masonry-view\"))\r\n    : Object.getPrototypeOf(customElements.get(\"hc-lovelace\"));\r\n\r\n  const html = LitElement.prototype.html;\r\n\r\n  const css = LitElement.prototype.css;\r\n\r\n  class DwainsNotificationCard extends LitElement {\r\n    constructor() {\r\n      super();\r\n\r\n      this.notifications = null;\r\n    }\r\n\r\n    static get properties() {\r\n      return {\r\n        hass: {},\r\n        config: {},\r\n      };\r\n    }\r\n\r\n    setConfig(config) {\r\n      this.config = config;\r\n    }\r\n\r\n    async _subcribeNotifications() {\r\n      if (!this._unsub) {\r\n        this._unsub = await this.hass.connection.subscribeEvents(\r\n          () => this._notificationsUpdated(),\r\n          \"dwains_dashboard_notifications_updated\"\r\n        );\r\n      }\r\n    }\r\n\r\n    disconnectedCallback() {\r\n      super.disconnectedCallback();\r\n      if (this._unsub) {\r\n        this._unsub();\r\n        this._unsub = undefined;\r\n      }\r\n    }\r\n\r\n    connectedCallback() {\r\n      super.connectedCallback();\r\n      if (!this._unsub) {\r\n        this._subcribeNotifications();\r\n        this._notificationsUpdated(); //Load notifications\r\n      }\r\n    }\r\n\r\n    async _notificationsUpdated() {\r\n      this.notifications = await this.hass.callWS({\r\n        type: \"dwains_dashboard_notification/get\",\r\n      });\r\n    }\r\n\r\n    _handleDismiss(event) {\r\n      var id = event.target.notificationId;\r\n      this.hass.callService(\"dwains_dashboard\", \"notification_dismiss\", {\r\n        notification_id: id,\r\n      });\r\n    }\r\n\r\n    _renderNotification(n) {\r\n      return html`\r\n        <div class=\"notification\">\r\n          ${n.message}\r\n          ${this.config.show_dismiss === false\r\n            ? html``\r\n            : html`<ha-icon\r\n                icon=\"mdi:close\"\r\n                .notificationId=\"${n.notification_id}\"\r\n                @click=${this._handleDismiss}\r\n              ></ha-icon>`}\r\n        </div>\r\n      `;\r\n    }\r\n\r\n    _evalTemplate(func) {\r\n      /* eslint no-new-func: 0 */\r\n      return new Function(\r\n        \"states\",\r\n        \"user\",\r\n        \"hass\",\r\n        \"variables\",\r\n        `'use strict'; ${func}`\r\n      ).call(\r\n        this,\r\n        this.hass.states,\r\n        this.hass.user,\r\n        this.hass,\r\n        this.config.variables\r\n      );\r\n    }\r\n\r\n    _handleTap() {\r\n      let e;\r\n\r\n      if (!this.config.navigation_path) return;\r\n      history.pushState(null, \"\", this.config.navigation_path);\r\n      e = new Event(\"location-changed\", { composed: true });\r\n      e.detail = { replace: false };\r\n      window.dispatchEvent(e);\r\n\r\n      // if(this.config.tap_action){\r\n      //   if(this.config.tap_action.action == 'navigate'){\r\n      //     window.location.href = this.config.tap_action.navigation_path;\r\n      //   }\r\n      // }\r\n    }\r\n\r\n    render() {\r\n      var title;\r\n\r\n      if (this.config.title) {\r\n        const value = this.config.title;\r\n        const trimmed = value.trim();\r\n\r\n        if (trimmed.substring(0, 3) === \"[[[\" && trimmed.slice(-3) === \"]]]\") {\r\n          title = this._evalTemplate(trimmed.slice(3, -3));\r\n        } else {\r\n          title = value;\r\n        }\r\n      }\r\n\r\n      if (this.notifications == null || this.notifications.length === 0) {\r\n        var notifications = html`\r\n          ${this.hass.localize(\"ui.notification_drawer.empty\")}\r\n        `;\r\n      } else {\r\n        var moreText;\r\n\r\n        if (\r\n          this.config.max_notifications &&\r\n          this.notifications.length > this.config.max_notifications\r\n        ) {\r\n          var items = this.notifications.slice(\r\n            0,\r\n            this.config.max_notifications\r\n          );\r\n          moreText = html`\r\n            <div class=\"more-link\" @click=\"${this._handleTap}\">\r\n              and ${this.notifications.length - this.config.max_notifications}\r\n              more<ha-icon icon=\"mdi:chevron-right\"></ha-icon>\r\n            </div>\r\n          `;\r\n        } else {\r\n          var items = this.notifications;\r\n        }\r\n\r\n        var notifications = html`\r\n          <div id=\"notifications\">\r\n            ${items.map((i) => this._renderNotification(i))} ${moreText}\r\n          </div>\r\n        `;\r\n      }\r\n      var d = new Date(),\r\n        h = (d.getHours() < 10 ? \"0\" : \"\") + d.getHours(),\r\n        m = (d.getMinutes() < 10 ? \"0\" : \"\") + d.getMinutes();\r\n\r\n      return html`\r\n        ${this.config.style\r\n          ? html`\r\n              <style>\r\n                ${this.config.style}\r\n              </style>\r\n            `\r\n          : html``}\r\n\r\n        <ha-card style=\"background: transparent;\">\r\n          <div id=\"title\">${h + \":\" + m}</div>\r\n          ${notifications}\r\n        </ha-card>\r\n      `;\r\n    }\r\n\r\n    static get styles() {\r\n      return css`\r\n        ha-card {\r\n          box-shadow: none;\r\n          color: var(--text-primary-color);\r\n        }\r\n        #title {\r\n          padding-bottom: 3px;\r\n        }\r\n        .notification {\r\n          filter: brightness(90%);\r\n        }\r\n        .notification ha-icon {\r\n          height: 15px;\r\n          width: 15px;\r\n        }\r\n        .more-link {\r\n          font-weight: bold;\r\n          font-size: 85%;\r\n        }\r\n      `;\r\n    }\r\n\r\n    getCardSize() {\r\n      return 2;\r\n    }\r\n  }\r\n\r\n  if (!customElements.get(\"dwains-notification-card\")) {\r\n    customElements.define(\"dwains-notification-card\", DwainsNotificationCard);\r\n    const pjson = __webpack_require__(/*! ../package.json */ \"./package.json\");\r\n    console.info(\r\n      `%c DWAINS-NOTIFICATION-CARD  \\n%c       Version ${pjson.version}       `,\r\n      \"color: #2fbae5; font-weight: bold; background: black\",\r\n      \"color: white; font-weight: bold; background: dimgray\"\r\n    );\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://dwains-notification-card/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;