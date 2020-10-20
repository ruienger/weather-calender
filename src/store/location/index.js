

const state = {
    location:'北京'
}

const mutations = {
    SET_LOCATION(state,location){
        state.location = location
    }
}

const actions = {}

export default {
    namespaced:true,
    state,
    mutations,
    actions

}