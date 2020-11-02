

const state = {
    location:'北京'
}

const mutations = {
    SET_LOCATION(state,location){
        state.location = location
    }
}

const actions = {}

const getters = {
    locate:function(state){
        return state.location
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters

}