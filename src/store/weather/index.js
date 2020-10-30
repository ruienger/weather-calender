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
    }},
    weatherPerHour: {
        hourly: []
    }
}
const mutations = {
    SET_WEATHER(state,weather){
        state.weather = weather
    },
    SET_WEATHERPRE(state,weatherPre){
        state.weatherPre = weatherPre
    },
    SET_WEATHERPERHOUR(state,weatherPerHour){
        state.weatherPerHour = weatherPerHour
    }
}
const actions = {
    // getWeather({ commit },location){
    //     commit('SET_WEATHER',{ weather: location})
    // }
    getWeatherPerHour({ commit },location){
        axios({
            url: 'https://geoapi.heweather.net/v2/city/lookup?location='+location+'&range=cn&key=73c454d4a4a246a58bf705c1759a1862',
            method: 'GET'
        }).then(async (result) => {
            axios({
                url: 'https://devapi.qweather.com/v7/weather/24h?key=73c454d4a4a246a58bf705c1759a1862&location='+result.location[0].id,
                method: 'GET'
            }).then((result) => {
                commit('SET_WEATHERPERHOUR',result)
            })
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}