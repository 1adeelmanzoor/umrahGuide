import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tour from '../views/Tour.vue'
import Contact from '../views/Contact.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
