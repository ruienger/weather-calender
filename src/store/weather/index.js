import {axios, axiosJSON} from '@/http/index.js'
import getWeatherInfo from '@/public/weatherInfo.js'

const state = {
    weather:{
        weather: { 
            code: "200", 
            updateTime: "", 
            fxLink: "http://hfx.link/30y1", 
            now: { 
              obsTime: "", 
              temp: "", 
              feelsLike: "", 
              icon: "", 
              text: "", 
              wind360: "", 
              windDir: "", 
              windScale: "", 
              windSpeed: "", 
              humidity: "", 
              precip: "", 
              pressure: "", 
              vis: "", 
              cloud: "", 
              dew: "" 
              }, 
            refer: { sources: [ "" ], license: [ "" ] } }
    },
    weatherPre:{
        result:{
            daily: [{
                fxDate: "", 
                sunrise: "", 
                sunset: "", 
                moonrise: "", 
                moonset: "", 
                moonPhase: "", 
                tempMax: "", 
                tempMin: "", 
                iconDay: "", 
                textDay: "", 
                iconNight: "", 
                textNight: "", 
                wind360Day: "", 
                windDirDay: "", 
                windScaleDay: "", 
                windSpeedDay: "", 
                wind360Night: "", 
                windDirNight: "", 
                windScaleNight: "", 
                windSpeedNight: "", 
                humidity: "", 
                precip: "", 
                pressure: "", 
                vis: "", 
                cloud: "", 
                uvIndex: "" 
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