import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import Detial from '../components/Detial.vue'
import List from '../components/List.vue'
import Ilike from '../components/Ilike.vue'
import Infinite from '../components/Infinite.vue'

// const ilike = require('../components/HelloWorld.vue');
// const about = require('../components/About.vue');
// const detial = require('../components/Detial.vue');
// const list = require('../components/List.vue');
// const ilike = require('../components/Ilike.vue');

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'HelloWorld'
        },
        {
            name: 'HelloWorld', path: '/HelloWorld', component: HelloWorld
        }, {
            name: 'About', path: '/About', component: About
        }, {
            name: 'Detial', path: '/Detial', component: Detial
        }, {
            name: 'List', path: '/List', component: List
        }, {
            name: 'Ilike', path: '/Ilike', component: Ilike
        },
        {
            name: 'Infinite', path: '/Infinite', component: Infinite
        },
        { path: '*', redirect: '/HelloWorld' }
    ]
})
