import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Me',
            component: Me
        },
        {
            path: '/reports/week/:kmom',
            name: 'Redovisning',
            component: Report
        },
        {
            path: '/register',
            name: 'Registrera',
            component: Register
        }
    ]
})