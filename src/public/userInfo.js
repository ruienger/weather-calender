import axios from 'axios'
import state from '@/store/index'
import cookie from '@/public/cookie'

function getUserInfo(){
    axios.get('/user/info?token='+cookie.getToken(),(res)=>{})
    .then((result) => {
        state.commit('user/SET_USERINFO',result.data)
    }).catch((err) => {
        alert(err)
    });

}

export default getUserInfo