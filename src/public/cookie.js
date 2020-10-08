import Cookies from 'js-cookie'

const TokenKey = 'weather_calender_token'

function getToken(){
    return Cookies.get(TokenKey)
}

function resetToken(){
    return Cookies.remove(TokenKey)
}

function setToken(token){
    return Cookies.set(TokenKey,token)
}

export default { getToken, resetToken, setToken }