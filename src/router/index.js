import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home,
    params: { iconClass:'icon-icon-test1' },
  },
  {
    path: '/calender',
    name: '日历',
    params: { iconClass:'icon-calendar' },
    component: () => import('../views/calender.vue')
  },
  {
    path: '/notes',
    name: '备忘录',
    params: { iconClass:'icon-icon_compile' },
    component: () => import('../views/notes.vue')
  },
  {
    path: '/weatherDetail',
    name: '天气质量',
    params: { iconClass:'icon-icon_cspace' },
    component: () => import('../views/weather.vue')
  },
  {
    path: '/user',
    name: '用户',
    params: { iconClass:'icon-icon-test2' },
    component: () => import('../views/user.vue'),
    children:[
      { path:'/login', name:'login', component: () => import('../components/login.vue') },
      { path:'/showInfo', name:'showInfo', component: () => import('../components/showInfo.vue') },

    ]
    
  }
]

const router = new VueRouter({
  routes
})

export default router
