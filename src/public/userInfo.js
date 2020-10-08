import axios from 'axios'
import state from '@/store/index'

function getUserInfo(){
    axios.get('/user/info',(res)={})
    .then((result) => {
        state.commit('user/SET_USERINFO',result.data)
    }).catch((err) => {
        alert(err)
    });

}

export default getUserInfo