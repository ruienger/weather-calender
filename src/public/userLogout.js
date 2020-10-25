import axios from 'axios'
import state from '@/store/index'
import cookie from '@/public/cookie'


function logout(){
    axios.post('/user/logout',(res)=>{
        
    })
    .then((result) => {
        
        cookie.resetToken()

    }).catch((err) => {
        alert(err)
    });

}

export default logout