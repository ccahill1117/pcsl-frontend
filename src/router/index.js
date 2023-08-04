import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registrations',
    name: 'registrations',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationsView.vue')
  },
  {
    path: '/sign_up',
    name: 'sign up',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'log in',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/scores',
    name: 'scores',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScoresView.vue')
  },
  {
    path: '/scores_entry',
    name: 'scores entry',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScoresEntryView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
