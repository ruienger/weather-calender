import Vue from 'vue'
import Vuex from 'vuex'
import calender from './calender/index.js'
import weather from './weather/index.js'
import user from './user/index.js'
import location from './location/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    calender,
    weather,
    user,
    location
  }
})
