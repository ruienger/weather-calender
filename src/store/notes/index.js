import axios from 'axios'

const state = {
    notes:{}
}
const mutations = {
    SET_NOTES(state,notes){
        state.notes = notes
    }
    // ,
    // SET_WEATHERPRE(state,weatherPre){
    //     state.weatherPre = weatherPre
    // }
}
const actions = {
    getNotes({ commit },userId){
        axios.get('http://106.15.194.96:5588/comment/findCommentByCus?cusId='+userId,()=>{}).then((result) => {
            commit('SET_NOTES',result.data.list)
        }).catch((err) => {
            
        });
        
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}