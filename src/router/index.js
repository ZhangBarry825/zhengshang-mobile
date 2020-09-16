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
  },
  {
    path: '/caseArea/things',
    name: 'Things',
    component: () => import('../views/case/list/Things')
  },
  {
    path: '/caseArea/website',
    name: 'WebSite',
    component: () => import('../views/case/list/WebSite')
  },
  {
    path: '/caseArea/mini-program',
    name: 'MiniProgram',
    component: () => import('../views/case/list/MiniProgram')
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if(isMobile){
    window.scrollTo(0,0)
    if(routes.find((val)=>{
      return val.path == to.path
    })){
      next()
    }else {
      next('/')
    }
  }else {
    window.location.href="http://www.zhengshangwl.com";
  }


})

export default router
