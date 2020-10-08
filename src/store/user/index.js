const state = {
    userInfo:{}
}
const mutations = {
    SET_USERINFO(state,info){
        state.userInfo = info
    }
    // ,
    // SET_WEATHERPRE(state,weatherPre){
    //     state.weatherPre = weatherPre
    // }
}
const actions = {
    // getWeather({ commit },location){
    //     commit('SET_WEATHER',{ weather: location})
    // }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}