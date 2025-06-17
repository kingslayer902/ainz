import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services', component: ServicesView },
  { path: '/contact', component: ContactView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
