import {axios, axiosJSON} from '@/http/index.js'
import getWeatherInfo from '@/public/weatherInfo.js'

const state = {
    weather:{
        weather: { 
            code: "200", 
            updateTime: "2020-10-22T16:26+08:00", 
            fxLink: "http://hfx.link/30y1", 
            now: { 
              obsTime: "2020-10-22T16:10+08:00", 
              temp: "...", 
              feelsLike: "loading", 
              icon: "loading", 
              text: "loading", 
              wind360: "loading", 
              windDir: "loading", 
              windScale: "loading", 
              windSpeed: "loading", 
              humidity: "loading", 
              precip: "loading", 
              pressure: "loading", 
              vis: "loading", 
              cloud: "loading", 
              dew: "loading" 
              }, 
            refer: { sources: [ "" ], license: [ "" ] } }
    },
    weatherPre:{
        result:{
            daily: [{
                fxDate: "2020-10-22", 
                sunrise: "loading", 
                sunset: "loading", 
                moonrise: "loading", 
                moonset: "loading", 
                moonPhase: "loading", 
                tempMax: "loading", 
                tempMin: "loading", 
                iconDay: "loading", 
                textDay: "loading", 
                iconNight: "loading", 
                textNight: "loading", 
                wind360Day: "loading", 
                windDirDay: "loading", 
                windScaleDay: "loading", 
                windSpeedDay: "loading", 
                wind360Night: "loading", 
                windDirNight: "loading", 
                windScaleNight: "loading", 
                windSpeedNight: "loading", 
                humidity: "loading", 
                precip: "loading", 
                pressure: "loading", 
                vis: "loading", 
                cloud: "loading", 
                uvIndex: "loading" 
            }]
    }}
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