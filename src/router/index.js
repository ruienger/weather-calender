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
    path: '/weather_calender',
    name: '天气日历',
    params: { iconClass:'icon-calendar' },
    component: () => import('../views/weather_calender.vue')
  },
  {
    path: '/weather',
    name: '天气预报',
    params: { iconClass:'icon-icon_cspace' },
    component: () => import('../views/weather.vue')
  },
  {
    path: '/calender',
    name: '日历',
    params: { iconClass:'icon-icon_compile' },
    component: () => import('../views/calender.vue')
  },
  {
    path: '/favorate',
    name: '收藏',
    params: { iconClass:'icon-icon-test5' },
    component: () => import('../views/favorate.vue')
  },
  {
    path: '/user',
    name: '用户名',
    params: { iconClass:'icon-icon-test2' },
    component: () => import('../views/user.vue'),
    // children:[
    //   { path:'/login', name:'login', component: () => import('../components/login.vue') },
    //   { path:'/showInfo', component: () => import('../components/showInfo.vue') },

    // ]
    
  },
  {
    path: '/setting',
    name: '设置',
    params: { iconClass:'icon-icon_setting' },
    component: () => import('../views/setting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
