(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-map></app-map>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul id=\"footer\">\r\n  <h2>Time Slider Demo</h2>\r\n  <p>This demo shows weather radar forecasts from the Deutscher Wetterdienst's GeoWebService. \r\n    Move the time slider in 5 minute increments to show the forecast for that time period. \r\n    The weather data updates every 5 minutes automatically. \r\n    Click <a href=\"https://www.dwd.de/DE/leistungen/geowebservice/geowebservice.html\" target=\"_blank\">here</a> for more information on the GeoWebService, \r\n    and <a href=\"https://maps.dwd.de/geoserver/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities\"target=\"_blank\">here</a> for the GetCapabilities document.</p>\r\n  <p id=\"clock\"><strong>Current Time: {{ curTime }}</strong></p>\r\n  <mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1\" min=\"0\" max=\"11\"></mat-slider>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <aol-map #map [width]=\"'100%'\" [height]=\"'90%'\">\r\n  <aol-interaction-default></aol-interaction-default>\r\n  <aol-control-zoom [class]=\"ol-zoom\"></aol-control-zoom>\r\n  <aol-view [zoom]=\"10\">\r\n      <aol-coordinate [x]=\"-122.1916\" [y]=\"37.7857\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\r\n  </aol-view>\r\n  <aol-layer-tile>\r\n      <aol-source-osm></aol-source-osm>\r\n  </aol-layer-tile>\r\n  <aol-layer-tile>\r\n    <aol-source-tilewms\r\n      [url]=\"'http://localhost:8080/geoserver/epa/wms/'\"\r\n      [params]=\"{\r\n        'LAYERS':'epa:EPA_CO_Daily_2019_Calif_Jan01new',\r\n        'FORMAT':'image/png',\r\n        'TIME':'2019-01-01T06:00:00.0Z'}\"\r\n      [projection]=\"'EPSG:3857'\">\r\n    </aol-source-tilewms>\r\n  </aol-layer-tile>\r\n</aol-map> -->\r\n<div id={{mapId}} class=\"map\"></div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'time-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_time_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/time-utils.service */ "./src/app/services/time-utils.service.ts");







// Angular Materials


// Map Stuff


// Helpers



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_openlayers__WEBPACK_IMPORTED_MODULE_5__["AngularOpenlayersModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _services_time_utils_service__WEBPACK_IMPORTED_MODULE_12__["TimeUtilsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .mat-slider-thumb-label-text {\r\n  font-size: 10px;\r\n}\r\n\r\n:host ::ng-deep .mat-slider-track-background {\r\n  background-color: #CCD1D1;\r\n}\r\n\r\nmat-slider {\r\n  width: 500px;\r\n  background-color: #EAEDED;\r\n}\r\n\r\n#footer {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#clock {\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRDFEMTtcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUVERUQ7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY2xvY2sge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_time_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/time-utils.service */ "./src/app/services/time-utils.service.ts");




let FooterComponent = class FooterComponent {
    constructor(messageService, timeUtilsService) {
        this.messageService = messageService;
        this.timeUtilsService = timeUtilsService;
        this.time = '06:00';
        this.display = '0'; // Value (in mins) to display on the time slider
        this.formatLabel = this.formatLabel.bind(this);
        // Get array of future times
        this.timeUtilsService.setTimeWindow$.subscribe((value) => {
            this.timeArray = value;
        });
        // Get the clock
        this.timeUtilsService.time.subscribe((now) => {
            this.curTime = now.toLocaleTimeString();
        });
    }
    /**
     * Takes a tick interval number from the time slider and formats the correct time
     * Additionally triggers the message service with the time
     * @param value tick interval integer
     */
    formatLabel(value) {
        this.timeUtilsService.setTimeWindow();
        switch (value) {
            case 0: {
                this.display = '0';
                this.time = this.timeArray[0].value;
                break;
            }
            case 1: {
                this.display = '+5';
                this.time = this.timeArray[1].value;
                break;
            }
            case 2: {
                this.display = '+10';
                this.time = this.timeArray[2].value;
                break;
            }
            case 3: {
                this.display = '+15';
                this.time = this.timeArray[3].value;
                break;
            }
            case 4: {
                this.display = '+20';
                this.time = this.timeArray[4].value;
                break;
            }
            case 5: {
                this.display = '+25';
                this.time = this.timeArray[5].value;
                break;
            }
            case 6: {
                this.display = '+30';
                this.time = this.timeArray[6].value;
                break;
            }
            case 7: {
                this.display = '+35';
                this.time = this.timeArray[7].value;
                break;
            }
            case 8: {
                this.display = '+40';
                this.time = this.timeArray[8].value;
                break;
            }
            case 9: {
                this.display = '+45';
                this.time = this.timeArray[9].value;
                break;
            }
            case 10: {
                this.display = '+50';
                this.time = this.timeArray[10].value;
                break;
            }
            case 11: {
                this.display = '+55';
                this.time = this.timeArray[11].value;
                break;
            }
        }
        // If the time slider got moved
        if (this.time !== this.prevTime) {
            this.messageService.setMessage(this.time);
            this.prevTime = this.time;
        }
        return this.display;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _services_time_utils_service__WEBPACK_IMPORTED_MODULE_3__["TimeUtilsService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_time_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/time-utils.service */ "./src/app/services/time-utils.service.ts");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! openlayers */ "./node_modules/openlayers/dist/ol.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(openlayers__WEBPACK_IMPORTED_MODULE_4__);





let MapComponent = class MapComponent {
    constructor(messageService, timeUtilsService) {
        this.messageService = messageService;
        this.timeUtilsService = timeUtilsService;
        this.map = null;
        this.mapId = 'MyMap';
        this.currentTime = '';
        // Detect if time slider moved and create layer
        this.messageService.setMessage$.subscribe((value) => {
            this.selectedTime = value;
            if (this.map) {
                this.removeTimeLayer();
                this.createTimeLayer(this.selectedTime);
                console.log('this.selectedTime: ' + this.selectedTime);
            }
        });
        // Current time is used for the initial fetch of the WMS time layer
        this.timeUtilsService.setTime$.subscribe((value) => {
            this.currentTime = value;
            console.log('currentTime: ' + this.currentTime);
        });
        // Refresh time layer every 5 mins
        this.timeUtilsService.fiveMin.subscribe((value) => {
            this.selectedTime = value;
            if (this.map) {
                this.removeTimeLayer();
                this.createTimeLayer(this.selectedTime);
            }
        });
    }
    ngAfterViewInit() {
        this.timeUtilsService.setTime();
        this.map = new openlayers__WEBPACK_IMPORTED_MODULE_4__["Map"]({
            target: this.mapId,
            view: new openlayers__WEBPACK_IMPORTED_MODULE_4__["View"]({
                center: openlayers__WEBPACK_IMPORTED_MODULE_4__["proj"].fromLonLat([10.4150, 51.0344]),
                zoom: 6
            })
        });
        this.osmLayer = new openlayers__WEBPACK_IMPORTED_MODULE_4__["layer"].Tile({
            source: new openlayers__WEBPACK_IMPORTED_MODULE_4__["source"].OSM()
        });
        this.osmLayer.setProperties({ name: 'osm' });
        this.map.addLayer(this.osmLayer);
        this.timeLayer = this.createTimeLayer(this.currentTime);
    }
    /**
     * Removes the time-based layer from the map
     */
    removeTimeLayer() {
        this.map.getLayers().forEach(layer => {
            if (layer.get('name') === 'time') {
                this.map.removeLayer(layer);
            }
        });
    }
    /**
     * Adds the time-based layer to the map
     * @param time the time that was clicked e.g. '06:00'
     */
    createTimeLayer(time) {
        this.timeLayer = new openlayers__WEBPACK_IMPORTED_MODULE_4__["layer"].Tile({
            source: new openlayers__WEBPACK_IMPORTED_MODULE_4__["source"].TileWMS({
                url: 'https://maps.dwd.de/geoserver/dwd/wms/',
                projection: 'EPSG:3857',
                crossOrigin: 'anonymous',
                params: {
                    LAYERS: 'dwd:FX-Produkt',
                    FORMAT: 'image/png',
                    TIME: time
                }
            })
        });
        this.timeLayer.setProperties({ name: 'time' });
        this.map.addLayer(this.timeLayer);
        console.log(this.timeLayer);
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _services_time_utils_service__WEBPACK_IMPORTED_MODULE_3__["TimeUtilsService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessageService = class MessageService {
    constructor() {
        this.setMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.setMessage$ = this.setMessageSubject.asObservable();
    }
    setMessage(value) {
        this.setMessageSubject.next(value);
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/services/time-utils.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/time-utils.service.ts ***!
  \************************************************/
/*! exports provided: TimeUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeUtilsService", function() { return TimeUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TimeUtilsService = class TimeUtilsService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.setTimeWindowSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.setTimeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.setFiveTimeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentDate = new Date();
        this.currentDateStr = '';
        this.timeWindow = [];
        // One second timer
        this.time$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(tick => new Date()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        // Five minute timer (rounded to nearest 5 mins)
        this.rounded = this.roundDateTime(this.currentDate, 5);
        this.fiveMinTimer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(this.rounded, 300000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(tick => this.formatDateTime(this.roundDateTime(new Date(), 5))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.setTimeWindow$ = this.setTimeWindowSubject.asObservable();
        this.setTime$ = this.setTimeSubject.asObservable();
        this.setFiveTime$ = this.setFiveTimeSubject.asObservable();
    }
    /**
     * Emits the current time every 1 sec
     */
    get time() {
        return this.time$;
    }
    /**
     * Emits the time every 5 mins
     */
    get fiveMin() {
        return this.fiveMinTimer$;
    }
    /**
     * Sets the current time (rounded to 5 minutes)
     */
    setTime() {
        this.setTimeSubject.next(this.setCurDateTimeStr());
    }
    /**
     * Set the time window array with timestamps in ISO 8601 format
     */
    setTimeWindow() {
        const numIntervals = 12;
        let nextDateTime;
        let nextDateTimeStr = '';
        this.timeWindow = [];
        // Get current date/time
        this.currentDateStr = this.setCurDateTimeStr();
        // Calculate timestamps in 5 min increments -1h to +1h
        for (let i = 0; i < numIntervals; i++) {
            // Take current time and add 5 mins
            nextDateTime = this.roundDateTime(this.addMinutes(this.currentDate, i * 5), 5);
            nextDateTimeStr = this.formatDateTime(nextDateTime);
            this.timeWindow.push({
                key: nextDateTimeStr.substr(11, 5),
                value: nextDateTimeStr
            });
        }
        this.setTimeWindowSubject.next(this.timeWindow);
    }
    /**
     * Returns the current date/time rounded to nearest 5 minutes as string
     */
    setCurDateTimeStr() {
        const rounded = this.roundDateTime(this.currentDate, 5);
        return (this.formatDateTime(rounded));
    }
    /**
     * Returns the date formatted as a string suitable for WMS time queries
     * @param date the date to be formatted
     */
    formatDateTime(date) {
        const formatted = this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm').concat(':00.000Z');
        return (formatted);
    }
    /**
     * Adds the given number of minutes to the date
     * @param date the date to add minutes to
     * @param minutes the number of minutes to add
     */
    addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }
    /**
     * Rounds the date to agiven number of minutes
     * @param date the date/time to round
     * @param minutes the number of minutes to round to
     */
    roundDateTime(date, minutes) {
        const ms = 1000 * 60 * minutes; // convert minutes to ms
        const roundedDate = new Date(Math.round(date.getTime() / ms) * ms);
        return roundedDate;
    }
};
TimeUtilsService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
TimeUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimeUtilsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Angular\time-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map