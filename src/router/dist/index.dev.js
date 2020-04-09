"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("../components/HelloWorld.vue"));

var _About = _interopRequireDefault(require("../components/About.vue"));

var _Detial = _interopRequireDefault(require("../components/Detial.vue"));

var _List = _interopRequireDefault(require("../components/List.vue"));

var _Ilike = _interopRequireDefault(require("../components/Ilike.vue"));

var _Infinite = _interopRequireDefault(require("../components/Infinite.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    component: _About["default"]
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
    name: 'Infinite',
    path: '/Infinite',
    component: _Infinite["default"]
  }, {
    path: '*',
    redirect: '/HelloWorld'
  }]
});

exports["default"] = _default;