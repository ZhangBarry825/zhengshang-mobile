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
    path: '/caseArea/govCloud',
    name: 'GovCloud',
    component: () => import('../views/case/list/GovCloud')
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
  {
    path: '/appCustom',
    name: 'appCustom',
    component: () => import('../views/case/appCustom')

  },
  {
    path: '/systemInte',
    name: 'systemInte',
    component: () => import('../views/case/systemInte')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact/Contact')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
