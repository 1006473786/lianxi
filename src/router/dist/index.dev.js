"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("../components/HelloWorld.vue"));

var _Card = _interopRequireDefault(require("../components/Card.vue"));

var _Detials = _interopRequireDefault(require("../components/Detials.vue"));

var _List = _interopRequireDefault(require("../components/List.vue"));

var _Login = _interopRequireDefault(require("../components/Login.vue"));

var _Infinite = _interopRequireDefault(require("../components/Infinite.vue"));

var _qita = _interopRequireDefault(require("../components/qita.vue"));

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
    name: 'Card',
    path: '/Card',
    component: _Card["default"]
  }, {
    name: 'Detials',
    path: '/Detials',
    component: _Detials["default"]
  }, {
    name: 'List',
    path: '/List',
    component: _List["default"]
  }, {
    name: 'Login',
    path: '/Login',
    component: _Login["default"]
  }, {
    name: 'Infinite',
    path: '/Infinite',
    component: _Infinite["default"]
  }, {
    name: 'qita',
    path: '/qita',
    component: _qita["default"]
  }, {
    path: '*',
    redirect: '/HelloWorld'
  }]
});

exports["default"] = _default;