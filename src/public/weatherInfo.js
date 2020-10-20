import axios from 'axios';
import store from '@/store/index.js'



async function getWeatherInfo(location){

    await axios({
        url: 'https://geoapi.heweather.net/v2/city/lookup?location='+location+'&range=cn&key=73c454d4a4a246a58bf705c1759a1862',
        method: 'GET'
    }).then(async (result) => {
        await axios({
            url: 'https://devapi.heweather.net/v7/weather/now?key=73c454d4a4a246a58bf705c1759a1862&location='+result.location[0].id,
            method: 'GET'
        }).then((result) => {
            store.commit('weather/SET_WEATHER',{ weather:result })
        }).catch((err) => {
            
        });
    }).catch((err) => {
        
    });

}

export default getWeatherInfo 