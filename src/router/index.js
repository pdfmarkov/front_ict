import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        meta: {layout: 'main'},
        component: () => import('../components/Main_pajes/home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'login'},
        component: () => import('../components/Users_pajes/login.vue')
    },
    {
        path: '/reg',
        name: 'Reg',
        meta: {layout: 'reg'},
        component: () => import('../components/Users_pajes/reg.vue')
    },
    {
        path: '/pass_recovery',
        name: 'RecoveryPass',
        meta: {layout: 'pass_recovery'},
        component: () => import('../components/Users_pajes/RecoveryPass.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {layout: 'profile'},
        component: () => import('../components/Users_pajes/profile.vue')
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router