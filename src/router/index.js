import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Report from '@/components/Report'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Me',
            component: Me
        },
        {
            path: '/register',
            name: 'Registrera',
            component: Register
        },
        {
            path: '/reports/week/:kmom',
            name: 'Redovisning',
            component: Report
        },
        {
            path: '/reports/edit/:kmom',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
