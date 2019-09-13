import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Register from '@/components/Register'
import Report from '@/components/reports/Report'
import kmom01 from '@/components/reports/Kmom01'
import kmom02 from '@/components/reports/Kmom02'
import kmom00 from '@/components/reports/Kmom00'

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
            path: '/reports/week/1',
            name: 'Kmom01',
            component: kmom01
        },
        {
            path: '/reports/week/2',
            name: 'Kmom02',
            component: kmom02
        },
        {
            path: '/reports/week/:kmom',
            name: 'Kmom00',
            component: kmom00
        },
        {
            path: '/reports',
            name: 'Redovisning',
            component: Report
        }
    ]
})
