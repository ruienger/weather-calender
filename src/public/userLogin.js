import axios from 'axios'
import state from '@/store/index'
import cookie from '@/public/cookie'


function login(userFrom){
    axios.post('/user/login',userFrom,(res)={})
    .then((result) => {
        cookie.setToken(result.data.token)

    }).catch((err) => {
        alert(err)
    });

}

export default login