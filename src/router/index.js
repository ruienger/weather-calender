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
    params: { iconClass:'icon-icon_compile' },
    component: () => import('../views/calender.vue')
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
