import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false
moment.locale('zh-cn')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
