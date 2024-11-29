// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'
import LoginPage from '../LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: AppView,
    children: [
      {
        path: '',
        name: 'Home',
        // Add child routes here if needed
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router