import axios from 'axios'
import state from '@/store/index'
import cookie from '@/public/cookie'


function login(userFrom, recall){
    axios.post('/user/login',userFrom,(res)=>{
        
    })
    .then((result) => {
        
        cookie.setToken(result.data.token)
        recall(true)
    }).catch((err) => {
        alert(err)
        recall(false)
    });

}

export default login