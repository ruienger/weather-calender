<template>
    <div class="calender">
        <table>
            <thead>
                <tr>
                    <td  colspan="7">
                        <div>
                            <button @click.prevent="preMonth">-1-1</button>
                            {{date.getFullYear()}} 年 {{(date.getMonth()+1)}} 月
                            <button @click.prevent="nextMonth">+1+1</button>
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>周一</td>
                    <td>周二</td>
                    <td>周三</td>
                    <td>周四</td>
                    <td>周五</td>
                    <td>周六</td>
                    <td>周日</td>
                </tr>
                <tr v-for="item in calenderArr" :key="item.index" >
                    <td v-for="i in item" :key="i.date" :class="setclass(i.time)">
                        {{i.date}}
                        <notes></notes>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import notes from '@/components/notes.vue'

export default {
    name:'calender',
    data(){
        return {
            date:{}
        }
    },
    computed:{
        ...mapState('calender',['calenderArr','slicedCalenderArr'])
    },
    created(){
        this.date = new Date()
        this.SET_CALENDERARR(this.date)
    },
    methods:{
        ...mapMutations('calender',['SET_CALENDERARR','SET_SLICEDCALENDERARR']),
        nextMonth(){
            this.date.setMonth(this.date.getMonth()+1)
            this.SET_CALENDERARR(this.date)
        },
        preMonth(){
            this.date.setMonth(this.date.getMonth()-1)
            this.SET_CALENDERARR(this.date)
        },
        setclass(date){
            let year = new Date(date).getFullYear()
            let month =new Date(date).getMonth()
            let cuyear = new Date().getFullYear()
            let cumonth = new Date().getMonth()
            if(year == cuyear){
                if(month < cumonth){
                    return 'calender_passed'
                }else if(month == cumonth){
                    return 'calender_in'
                }
                return 'calender_future'
            }else if(year > cuyear){
                return 'calender_future'
            }else{
                return 'calender_passed'
            }
            
        }
    },
    props:{
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