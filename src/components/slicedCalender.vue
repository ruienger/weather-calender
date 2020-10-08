<template>
    <div class="calender">
        
        <table>
                <tr>
                    <td v-for="item in weatherPre.result.daily" :key="item.index">
                    <!-- {{item}} -->
                    {{item.tempMax}}
                    {{item.tempMin}}
                    {{item.textDay}}
                    {{item.textNight}}
                    {{item.windDirDay}}
                    {{item.windScaleDay}}
                    <notes></notes>
                    </td>
                </tr>
                
        </table>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import getWeatherPreInfo from '@/public/weatherPre'
import notes from '@/components/notes.vue'

export default {
    name:'slicedCalender',
    data(){
        return {
            date:{}
        }
    },
    computed:{
        ...mapState('weather',['weatherPre'])
    },
    beforeCreated(){
        getWeatherPreInfo()
    },
    methods:{
        ...mapMutations('calender',['SET_SLICEDCALENDERARR'])
    },
    props:{
        calenderInfo:{}
    },
    components:{
        notes
    }
}
</script>
<style scoped>
.calender{
    /* width: 700; */
    height: 2400;
    background-color: #ffffffad;
}
.calender>table{
    width: 70%;
    height: 100%;
    margin: 0 auto;
    
}
.calender td{
    height: 80px;
    border: 1px solid #5760b4ad;
    text-align: center;
    border-collapse: collapse;
    font-size: 30px;
}
.calender_in{
    color: #333;
}
.calender_passed{
    color: #666;
    background-color: #333;
}
.calender_future{
    background-color: #7ae;

}
</style>