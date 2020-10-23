<template>
<transition appear name="flow-up">
    <div class="calender">
        <table>
            <thead>
                <tr>
                    <td  colspan="7">
                        <div class="calender-datepicker">
                            <button @click.prevent="preMonth">Pre</button>
                            <span>{{date.getFullYear()}} 年 {{(date.getMonth()+1)}} 月</span>
                            <button @click.prevent="nextMonth">Next</button>
                        </div>
                    </td>
                </tr>
            </thead>
            <!-- <div style="animation: roll-page 5s"> -->
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
                        <td v-for="i in item" :key="i.date">
                            <div :class="setclass(i.time) +' calender-day'" @click="showNotes(i.time)" :style="isClicked(i.time)">
                                {{i.date}}
                                <noteTags :fxDate="i.time" class="tags"></noteTags>
                            </div>
                            
                            <!-- {{fxDate}} -->
                        </td>
                    </tr>
                </tbody>
            <!-- </div> -->

        </table>
        <notes :fxDate="fxDate" @note-clicked="updateHandler($event)"></notes>
        <notesMoudal v-show="isShown" class="moudal" 
                @close-clicked='hideMoudal' :fxDate="fxDate"
                :notes="notes"
                @ok-clicked='addOrUpdateHandler($event)'
                >
            </notesMoudal>
    </div>
</transition>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import notes from '@/components/notes.vue'
import moment from 'moment'
import notesMoudal from '@/components/notesMoudal'
import noteTags from '@/components/noteTags'

export default {
    name:'calender',
    data(){
        return {
            date:{},
            fxDate: moment(new Date()).format('YYYY-MM-DD'),
            isShown: false,
            notes:{
                content: "",
                commentTime: 1582613734000,
                cusId: '',
                status: ""
            }
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
        ...mapActions('notes',['addOrUpdateNotes']),
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
            
        },
        // fxDate(date){
        //     return moment(date).format('YYYY-MM-DD')
        // },
        showNotes(time){
            this.fxDate = moment(new Date(time)).format('YYYY-MM-DD')
        },
        addOrUpdateHandler(data){
            this.addOrUpdateNotes(data)
            this.hideMoudal()
        },
        hideMoudal(){
            this.isShown = !this.isShown
        },
        updateHandler(data){
            this.notes = data
            this.hideMoudal()
        },
        isClicked(time){
            if(moment(new Date(time)).format('YYYY-MM-DD')==this.fxDate){
                return 'background-color: #333;'
            }else{
                return 'background-image: linear-gradient(rgba(131, 167, 173, 0.698),rgba(76, 131, 163, 0.698)) ; '
            }
        }
    },
    props:{
    },
    components:{
        notes,notesMoudal,noteTags
    }
}
</script>
<style scoped>
.tags{
    position: absolute;
    top: 4px;
    right: 4px;
}
.calender{
    /* width: 700; */
    height: 2400;
    background-image:linear-gradient(#384d642a,#384d640a) ;
    color: #eee;
    padding: 0 1em;
}
.calender>table{
    width: 70%;
    height: 100%;
    margin: 0 auto;
}
.calender>table tr{
    margin-bottom: 3%;
}
.calender td{
    width: 80px;
    height: 80px;
    text-align: center;
    font-size: 30px;
    border: none;
}
.calender_in{
    color: #eee;
}
.calender_passed{
    color: #333;
}
.calender_future{
    color: #7ae;

}
.calender-datepicker{
    font-size: 34px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(255, 255, 255, 0.719);
    padding: 2% 0;
}
.calender-datepicker>button{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color:  rgba(255, 255, 255, 0.719);
    overflow: hidden;
    line-height: 50px;
    font-weight: bold;
    color: #333;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.719);
    outline: none;
    
}
.calender-day{
    height: 80px;
    width: 80px;
    border-radius: 40px;
    font-weight: bold;
    text-align: center;
    line-height: 80px;
    margin: 0 auto;
    transition: all .2s;
    position: relative;
}
.calender-day:hover{
    background-color: #aaa;
}
@keyframes roll-page {
    0%{
        opacity: 1;
        transform: scaleX(1);
    }
    50%{
        opacity: 0;
        transform: scaleX(0);
    }
    100%{
        opacity: 1;
        transform: scaleX(1);
    }
    
}
.flow-up-enter-active, .flow-up-leave-active {
  transition: all .4s;
}
.flow-up-delay-enter{
  transform: translateY(50px);
  opacity: 0;

}
</style>