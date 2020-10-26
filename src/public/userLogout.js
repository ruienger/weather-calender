import axios from 'axios'
import state from '@/store/index'
import cookie from '@/public/cookie'
import getUserInfo from '@/public/userInfo'


function logout(){
    axios.post('/user/logout',(res)=>{
        
    })
    .then((result) => {
        cookie.resetToken()
        getUserInfo()

    }).catch((err) => {
        alert(err)
    });

}

export default logout