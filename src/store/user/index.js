const state = {
    userInfo:{
        id: 0, 
        name: "TOM", 
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", 
        introduction: "superUser", 
        roles: [ "admin" ]
    },
    userDetailInfo:{
        area: '(...)',
        bankCard: '(...)',
        bankCardPhoto: '(...)',
        city: '(...)',
        comment: '(...)',
        enabled: '(...)',
        forbiddenReason: '(...)',
        gender: '(...)',
        id: '(...)',
        idCard: '(...)',
        idcardPhotoNegative: '(...)',
        idcardPhotoPositive: '(...)',
        imgPhoto: '(...)',
        lastLoginIp: '(...)',
        lastLoginTime: '(...)',
        money: '(...)',
        password: '(...)',
        province: '(...)',
        qq: '(...)',
        rank: '(...)',
        realname: '(...)',
        registerIp: '(...)',
        registerTime: '(...)',
        status: '(...)',
        telephone: '(...)',
        type: '(...)',
        username: '(...)',
        wxid: '(...)'
    }
}
const mutations = {
    SET_USERINFO(state,info){
        state.userInfo = info
    },
    SET_USERDETAILINFO(state,info){
        state.userDetailInfo = info
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
const getters = {
    userId:(state)=>{
        return state.userInfo.id
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}