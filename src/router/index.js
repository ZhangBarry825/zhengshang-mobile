import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../views/aboutUs/aboutUs')
  },
  {
    path: '/caseArea',
    name: 'CaseArea',
    component: () => import('../views/case/CaseArea')
  },
  {
    path: '/newsList',
    name: 'NewsList',
    component: () => import('../views/news/NewsList')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
