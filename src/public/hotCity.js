import axios from 'axios';
import store from '@/store/index.js'
import { mapMutations } from 'vuex';



async function getHotCity(){

    await axios({
        url: 'https://geoapi.heweather.net/v2/city/top??range=cn&key=73c454d4a4a246a58bf705c1759a1862',
        method: 'GET'
    }).then((result) => {
    }).catch((err) => {
        alert(err)
    });

}

export default getHotCity 