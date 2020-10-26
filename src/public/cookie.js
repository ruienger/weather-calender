import Cookies from 'js-cookie'

const TokenKey = 'weather_calender_token'

function getToken(){
    return localStorage.getItem(TokenKey)
}

function resetToken(){
    return localStorage.removeItem(TokenKey)
}

function setToken(token){
    return localStorage.setItem(TokenKey,token)
}

export default { getToken, resetToken, setToken }