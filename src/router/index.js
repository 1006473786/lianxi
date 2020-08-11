import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld.vue'
import Card from '../components/Card.vue'
import Detials from '../components/Detials.vue'
import List from '../components/List.vue'
import My from '../components/My.vue'
import Login from '../components/Login.vue'
import Login2 from '../components/Login2.vue'



// const ilike = require('../components/HelloWorld.vue');
// const about = require('../components/About.vue');
// const detial = require('../components/Detial.vue');
// const list = require('../components/List.vue');
// const ilike = require('../components/Ilike.vue');

const Router = new VueRouter({
    routes: [
        {
            path: '/', redirect: 'HelloWorld',
            meta: { needLogin: true }
        },
        {
            name: 'HelloWorld', path: '/HelloWorld', component: HelloWorld,
            meta: { needLogin: true }
        },
        {
            name: 'Card', path: '/Card', component: Card,
            meta: { needLogin: true }
        },
        {
            name: 'Detials', path: '/Detials', component: Detials,
            meta: { needLogin: true }
        },
        {
            name: 'List', path: '/List', component: List,
            meta: {
                keepAlive: true,
                needLogin: true
            }
        },
        {
            name: 'My', path: '/My', component: My,
            meta: { needLogin: true }
        },
        {
            name: 'Login', path: '/Login', component: Login
        },
        {
            name: 'Login2', path: '/Login2', component: Login2,
            meta: { needLogin: true }
        },
        {
            path: '*', redirect: '/HelloWorld',
            meta: { needLogin: true }
        }
    ]
})
// Router.beforeEach((to, from, next) => {
//     if (to.meta.needLogin) {
//         next({
//             path: "/Login"
//         })
//     } else {
//         next()
//     }

// })
export default Router;
