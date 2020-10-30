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
    },
    waterPerMin:{
        summary: '加载中...',
        minutely: [
            { fxTime: "2020-10-30T00:00+08:00", precip: "0.0", type: "(...)" },
        ]
    },
    weatherWarning:{
        warning:[]
    },
    weatherQuality:{
        updateTime: "2020-06-21T00:00+08:00",
        now: {
          pubTime: "2020-06-21T11:00+08:00",
          aqi: "82",
          category: "良",
          primary: "O3",
          pm10: "82",
          pm2p5: "39",
          no2: "16",
          so2: "5",
          co: "0.7",
          o3: "185"
        },
        refer: {
          sources: [
            "cnemc"
          ],
          license: [
            "commercial license"
          ]
        }
    },
    lifeQuality:{
        daily:{
            date: "2020-06-21",
            type: "1",
            name: "运动指数",
            level: "2",
            category: "较适宜",
            txt: "天气较好，但因气温较高且风力较强，请适当降低运动强度并注意户外防风。"
        }
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
    },
    SET_WATERPERMIN(state,waterPerMin){
        state.waterPerMin = waterPerMin
    },
    SET_WEATHERWARNING(state,weatherWarning){
        state.weatherWarning = weatherWarning
    },
    SET_WEATHERQUALITY(state,weatherQuality){
        state.weatherQuality = weatherQuality
    },
    SET_LIFTQUALITY(state,lifeQuality){
        state.lifeQuality = lifeQuality
    }
}
const actions = {
    // getWeather({ commit },location){
    //     commit('SET_WEATHER',{ weather: location})
    // }
    getWeatherPerHour({ commit },location){
        getInfoByLocateId('https://devapi.qweather.com/v7/weather/24h?',location, (res)=>{
            commit('SET_WEATHERPERHOUR',res)
        })
    },
    getWaterPerMin({ commit },location){
        getInfoByLocateXY('https://devapi.qweather.com/v7/minutely/5m?',location, (res)=>{
            commit('SET_WATERPERMIN',res)
        })
    },
    getWeatherWarning({ commit },location){
        getInfoByLocateId('https://devapi.qweather.com/v7/warning/now?',location, (res)=>{
            commit('SET_WEATHERWARNING',res)
        })
    },
    getWeatherQuality({ commit },location){
        getInfoByLocateId('https://devapi.qweather.com/v7/air/now?',location, (res)=>{
            commit('SET_WEATHERQUALITY',res)
        })
    },
    getLifeQuality({ commit },location){
        getInfoByLocateId('https://devapi.qweather.com/v7/indices/1d?type=0&',location, (res)=>{
            commit('SET_LIFTQUALITY',res)
        })
    }
}

function getInfoByLocateId(url, location, call){
    axios({
        url: 'https://geoapi.heweather.net/v2/city/lookup?location='+location+'&range=cn&key=73c454d4a4a246a58bf705c1759a1862',
        method: 'GET'
    }).then(async (result) => {
        axios({
            url: url+'key=73c454d4a4a246a58bf705c1759a1862&location='+result.location[0].id,
            method: 'GET'
        }).then((result) => {
            call(result)
        })
    })
}
function getInfoByLocateXY(url, location, call){
    axios({
        url: 'https://geoapi.heweather.net/v2/city/lookup?location='+location+'&range=cn&key=73c454d4a4a246a58bf705c1759a1862',
        method: 'GET'
    }).then(async (result) => {
        axios({
            url: url+'key=73c454d4a4a246a58bf705c1759a1862&location='
            +result.location[0].lon+','+result.location[0].lat,
            method: 'GET'
        }).then((result) => {
            call(result)
        })
    })
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}