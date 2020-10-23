import axios from 'axios'
import state from '@/store/index'
import cookie from '@/public/cookie'

function getUserInfo(){
    if(!cookie.getToken()){
        alert('用户尚未登录')
    }else{
        axios.get('/user/info?token='+cookie.getToken(),(res)=>{})
        .then((result) => {
            state.commit('user/SET_USERINFO',result.data)
            state.commit('notes/SET_ID',result.data.id)
            state.dispatch('notes/getNotes')
        }).catch((err) => {
            alert(err)
        });
    }
    

}

export default getUserInfo