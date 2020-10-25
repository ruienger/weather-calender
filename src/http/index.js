import axios from 'axios';

axios.defaults.baseURL = 'http://106.15.194.96:5588/'

axios.interceptors.request.use((req) => {
    return req
})
axios.interceptors.response.use((rep) => {
    return rep.data
})



//响应QS请求时使用该实例，否则使用axios即可
const axiosQS = axios.create({
    timeout:2000,
    method:'POST',
    header:'Content-Type:application/x-www-form-urlencoded'
})


export { axiosQS, axios }