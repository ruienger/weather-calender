import {axios, axiosJSON} from '@/http/index.js'
import getWeatherInfo from '@/public/weatherInfo.js'

const state = {
    weather:{},
    weatherPre:{}
}
const mutations = {
    SET_WEATHER(state,weather){
        state.weather = weather
    },
    SET_WEATHERPRE(state,weatherPre){
        state.weatherPre = weatherPre
    }
}
const actions = {
    // getWeather({ commit },location){
    //     commit('SET_WEATHER',{ weather: location})
    // }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}