import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/multiplication',
        name: 'multiplication',
        component: () =>
            import ( /* webpackChunkName: "multiplication" */ '../views/Multiplication.vue')
    },
    {
        path: '/addition',
        name: 'addition',
        component: () =>
            import ( /* webpackChunkName: "addition" */ '../views/Addition.vue')
    },
    {
        path: '/conversion',
        name: 'conversion',
        component: () =>
            import ( /* webpackChunkName: "conversion" */ '../views/Conversion.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router