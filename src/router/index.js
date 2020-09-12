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
    path: '/customerCase',
    name: 'customerCase',
    component: () => import('../views/customerCase/customerCase')
  },
  {
    path: '/customerCasedetails',
    name: 'customerCasedetails',
    component: () => import('../views/customerCase/customerCasedetails')

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
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: () => import('../views/news/NewsDetail')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
