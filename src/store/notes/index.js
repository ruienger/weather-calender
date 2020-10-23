import axios from 'axios'
import store from '@/store/index'

const state = {
    notes:{
        list:[]
    },
    id: 28
}
const mutations = {
    SET_NOTES(state,notes){
        state.notes = notes
    },
    SET_ID(state,id){
        state.id = id
    }
    // ,
    // SET_WEATHERPRE(state,weatherPre){
    //     state.weatherPre = weatherPre
    // }
}
const actions = {
    getNotes(state){
        console.log(state)
        axios.get('http://106.15.194.96:5588/comment/findCommentByCus?cusId='+state.state.id,()=>{}).then((result) => {
            state.commit('SET_NOTES',result.data)
        }).catch((err) => {
            alert('在notes中的getNotes方法里'+err)
        });
        
    },
    addOrUpdateNotes(state, data){
        axios.post('http://106.15.194.96:5588/comment/saveOrUpdate',data,()=>{}).then((result) => {
            state.dispatch('getNotes')
            alert(result.message)
        }).catch((err) => {
            alert('在notes中的addOrUpdateNotes方法里'+err)
        });
        
    },
    deleteNotes(state, data){
        axios.post('http://106.15.194.96:5588/comment/deleteById',data.id,()=>{}).then((result) => {
            state.dispatch('getNotes')
            alert(result.message)
        }).catch((err) => {
            alert(err)
        });
        
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}