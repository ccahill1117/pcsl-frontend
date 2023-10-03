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
  },
  {
    path: '/smigel_yusem',
    name: 'smigel yusem award',
    component: () => import(/* webpackChunkName: "about" */ '../views/SmigelYusemView.vue')
  },
  {
    path: '/legal',
    name: 'legal and waiver',
    component: () => import(/* webpackChunkName: "about" */ '../views/LegalView.vue')
  },
  {
    path: '/user_profile',
    name: 'user profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfileView.vue')
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "about" */ '../views/RulesView.vue')
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import(/* webpackChunkName: "about" */ '../views/MapsView.vue')
  },
  {
    path: '/user_registration',
    name: 'register for current season',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserRegistrationView.vue')
  },
  {
    path: '/rosters',
    name: 'rosters',
    component: () => import(/* webpackChunkName: "about" */ '../views/RostersView.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScheduleView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
