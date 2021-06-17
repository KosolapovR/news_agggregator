import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/sport',
    name: 'Sport',
    component: () => import('../views/Sport.vue')
  },
  {
    path: '/programming',
    name: 'Programming',
    component: () => import('../views/Programming.vue')
  },
  {
    path: '/science',
    name: 'Science',
    component: () => import('../views/Science.vue')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
