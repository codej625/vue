import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import SecondView from '../views/SecondView.vue'
import ThirdView from '../views/ThirdView.vue'
import FourthView from '../views/FourthView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/vhc/CMWEBVHCM1001',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vhc/CMWEBVHCM1003',
    name: 'second',
    component: SecondView
  },
  {
    path: '/vhc/CMWEBVHCM1004',
    name: 'third',
    component: ThirdView
  },
  {
    path: '/vhc/CMWEBVHCM1005',
    name: 'fourth',
    component: FourthView
  },
  {
    path: '/vhc/CMWEBVHCM1002',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
