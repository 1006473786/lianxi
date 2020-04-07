"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("../components/HelloWorld.vue"));

var _Detial = _interopRequireDefault(require("../components/Detial.vue"));

var _List = _interopRequireDefault(require("../components/List.vue"));

var _Ilike = _interopRequireDefault(require("../components/Ilike.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

// const ilike = require('../components/HelloWorld.vue');
// const about = require('../components/About.vue');
// const detial = require('../components/Detial.vue');
// const list = require('../components/List.vue');
// const ilike = require('../components/Ilike.vue');
var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    redirect: 'HelloWorld'
  }, {
    name: 'HelloWorld',
    path: '/HelloWorld',
    component: _HelloWorld["default"]
  }, {
    name: 'About',
    path: '/About',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../components/About.vue'));
      });
    }
  }, {
    name: 'Detial',
    path: '/Detial',
    component: _Detial["default"]
  }, {
    name: 'List',
    path: '/List',
    component: _List["default"]
  }, {
    name: 'Ilike',
    path: '/Ilike',
    component: _Ilike["default"]
  }, {
    path: '*',
    redirect: '/HelloWorld'
  }]
});

exports["default"] = _default;