import store from '@/store/index'
import axios from 'axios'

function getLocalCity(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((res)=>{
            console.log(res)
            axios({
                url: 'https://geoapi.heweather.net/v2/city/lookup?location='+res.coords.longitude +',' + res.coords.latitude +'&range=cn&key=73c454d4a4a246a58bf705c1759a1862',
                method: 'GET'
            }).then((result) => {
                store.commit('/location/SET_LOCATION', result.location[0].name )
            }).catch((err) => {
                
            });
            
        })  
    }else{
        alert('UR bowser dont support locating ur position')
    }
}
export default getLocalCity