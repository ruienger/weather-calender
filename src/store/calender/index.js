import {axios, axiosJSON} from '@/http/index.js'
import getCalenderArr from '@/public/calenderArr'
import getSlicedCalenderArr from '@/public/slicedCalenderArr'
const state = {
    calenderArr:[],
    slicedCalenderArr:[],
    calenderDate:''
}
const mutations = {
    SET_CALENDERARR(state,date){
        state.calenderArr = getCalenderArr(date)
        
    },
    SET_SLICEDCALENDERARR(state){
        state.slicedCalenderArr = getSlicedCalenderArr()
        
    },
    SET_CALENDERDATE(state,date){
        state.calenderDate = date
        state.calenderArr = getCalenderArr(state.calenderDate)
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