<template>
<transition appear name="flow-up">
    <div class="calender">
        <table>
            <thead>
                <tr>
                    <td  colspan="7">
                        <div class="calender-datepicker">
                            <button @click.prevent="preMonth" class="el-icon-arrow-left"></button>
                            <span>{{calenderDate.getFullYear()}} 年 {{(calenderDate.getMonth()+1)}} 月</span>
                            <button @click.prevent="nextMonth" class="el-icon-arrow-right"></button>
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
                        <td style="color:#fabea7">周六</td>
                        <td style="color:#fabea7">周日</td>
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
        <div>
            <div class="add-note-btn" @click="showMoudal(fxDate)">
                <span>添加一条备忘录</span><br>
                <span>{{ fxDate }}</span>
            </div>
        </div>
        <notes :fxDate="fxDate" @note-clicked="updateHandler($event)"  @delete-clicked='deleteHandler($event)' dangerCode="0"></notes>
        <el-drawer
            :visible.sync="isShown"
            direction="btt"
            size= '50%'
            :show-close="false"
        >       
            <notesMoudal class="moudal" 
                :fxDate="fxDate"
                :notes="notes"
                @ok-clicked='addOrUpdateHandler($event)'
                >
            </notesMoudal>
        </el-drawer>
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
        ...mapState('calender',['calenderArr','slicedCalenderArr','calenderDate'])
    },
    created(){
        this.SET_CALENDERDATE(new Date())
    },
    methods:{
        ...mapMutations('calender',['SET_CALENDERARR','SET_SLICEDCALENDERARR','SET_CALENDERDATE']),
        ...mapActions('notes',['addOrUpdateNotes','deleteNotes']),
        nextMonth(){
            this.SET_CALENDERDATE(new Date(this.calenderDate.setMonth(this.calenderDate.getMonth()+1)))
            // this.date.setMonth(this.date.getMonth()+1)
            // this.SET_CALENDERARR(this.date)
        },
        preMonth(){
            this.SET_CALENDERDATE(new Date(this.calenderDate.setMonth(this.calenderDate.getMonth()-1)))
            // this.date.setMonth(this.date.getMonth()-1)
            // this.SET_CALENDERARR(this.date)
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
            this.isShown = false
            this.notes = {
                content: "",
                commentTime: 1582613734000,
                cusId: '',
                orderId: "976"
            }
        },
        showMoudal(fxDate){
            this.notes = {
                content: "",
                commentTime: 1582613734000,
                cusId: '',
                orderId: "976"
            }
            this.isShown = true
            this.fxDate = fxDate
        },
        updateHandler(data){
            this.notes = data
            this.isShown = true
            this.fxDate = moment(data.commentTime).format('YYYY-MM-DD')
        },
        isClicked(time){
            if(moment(new Date(time)).format('YYYY-MM-DD')==this.fxDate){
                return 'background-color: #666;'
            }else{
                return 'background-image: linear-gradient(rgba(131, 167, 173, 0.698),rgba(76, 131, 163, 0.698)) ; '
            }
        },
        deleteHandler(data){
            this.deleteNotes(data)
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
    position: relative;
    top: -95%;
    right: -85%;
}
.calender{
    width: 100%;
    height: 2400;
    color: #eee;
    box-sizing: border-box;
}
.calender>table{
    width: 70%;
    height: 100%;
    margin: 0 auto;
}
.calender>table tr{
    margin-bottom: 4%;
}
.calender td{
    width: 1em;
    height: 1em;
    text-align: center;
    font-size: 25px;
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
    font-size: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.719);
    padding: 2% 0;
}
.calender-datepicker>button{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color:  #839b97;
    overflow: hidden;
    line-height: 50px;
    font-weight: bold;
    color: #ddd;
    text-align: center;
    border: 1px solid #34626c;
    outline: none;
    
}
.calender-day{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    margin: 0 auto;
    transition: all .4s;
}
.calender-day:hover{
    background-color: #aaa;
}
.calender>table>tbody>tr:first-child{
    height: 4em;
}
@keyframes roll-page {
    0%{
        opacity: 1;
        translate: -100;
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
.flow-up-enter{
  transform: translateY(50px);
  opacity: 0;

}
.add-note-btn{
    width: 60%;
    margin: 40px auto;
    height: 50px;
    border-radius: 60px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    background-color: #aaaaaa65;
    transition: all .4s;
}
.add-note-btn:hover{
    background-color: #aaaaaab4;
}
@media screen and (min-width: 180px) and (max-width: 500px){
    .calender>table{
        width: 100%;
        height: 100%;
        padding: .4em 1em;
    }
    .calender-day{
        height: 44px;
        width: 44px;
        border-radius: 22px;
        font-weight: bold;
        text-align: center;
        line-height: 44px;
        margin: 0 auto;
        transition: all .4s;
    } 
    .calender-datepicker>button{
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: .1em;
    }
    .calender td{
        font-size: 15px;
    }
    .tags{
        top: -110%;
        right: -70%;
    }
    .add-note-btn{
        width: 80%;
    }   
}

</style>