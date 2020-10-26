import { axios } from '@/http/index'
import state from '@/store/index'
import cookie from '@/public/cookie'

function getUserInfo(){
    if(!cookie.getToken()){
        state.commit('user/SET_USERDETAILINFO',{})
    }else{
        axios.get('/user/info?token='+cookie.getToken(),(res)=>{})
        .then((result) => {
            state.commit('user/SET_USERINFO',result.data)
            state.commit('notes/SET_ID',result.data.id)
            axios.get('/customer/findCustomerById?id='+result.data.id)
            .then((result) => {
                state.commit('user/SET_USERDETAILINFO',result.data)
                state.dispatch('notes/getNotes')
            }).catch((err) => {
                alert('在public下的userInfo里'+err)
            });
        }).catch((err) => {
            alert(err)
        });
    }
    

}

export default getUserInfo