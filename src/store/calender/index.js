import {axios, axiosJSON} from '@/http/index.js'
import getCalenderArr from '@/public/calenderArr'
import getSlicedCalenderArr from '@/public/slicedCalenderArr'
const state = {
    calenderArr:[],
    slicedCalenderArr:[]
}
const mutations = {
    SET_CALENDERARR(state,date){
        state.calenderArr = getCalenderArr(date)
        
    },
    SET_SLICEDCALENDERARR(state){
        state.slicedCalenderArr = getSlicedCalenderArr()
        
    }
}
const actions = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}