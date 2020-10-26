import store from '@/store/index'

function returnDefalut(){
    store.commit('user/RETURNDEFALUT')
    store.commit('notes/SET_NOTES',{
        list:[]
    })
}

export default returnDefalut