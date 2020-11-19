<template>
<transition appear name="flow-up-delay">
    <div class="calender">
        
        <table>
                <tr>
                    <div v-for="item in weatherPre.result.daily" :key="item.index">
                    <!-- {{item}} -->
                    <div class="daily-info-wrapper">
                        <div class="item-left">
                            {{ dateInItems(item.fxDate) }}
                        </div>
                        
                        <div>
                            <div class="item-middle">
                                <div>
                                    <img :src="'image/'+item.iconDay+'.png'" alt="">
                                    <p>{{item.textDay}}</p>
                                </div>
                                <p> ~ </p>
                                <div>
                                    <img :src="'image/'+item.iconNight+'.png'" alt="">
                                    <p>{{item.textNight}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-right">
                            {{item.tempMax}}
                            <span>{{item.tempMin}}</span>
                            &#8451;
                        </div>
                    </div>
                    <div class="add-notes-wrapper">
                        <div>风向风力：{{item.windDirDay}}
                        {{item.windScaleDay}}级</div>
                        <div>
                            <div class="add-note-btn" @click="showMoudal(item.fxDate)" :style="'transform: rotate('+angle+'deg)'"></div>
                        </div>
                    </div>
                    <notes :fxDate="item.fxDate" @note-clicked="updateHandler($event,item.fxDate)" 
                    @delete-clicked='deleteHandler($event)' dangerCode="0" ></notes>
                    </div>
                </tr>
                
        </table>
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
import { mapActions, mapState } from 'vuex'
import getWeatherPreInfo from '@/public/weatherPre'
import notes from '@/components/notes.vue'
import moment from 'moment'
import notesMoudal from '@/components/notesMoudal.vue'

export default {
    name:'slicedCalender',
    data(){
        return {
            date:{},
            isShown: false,
            angle: 0,
            fxDate: '',
            notes:{
                content: "",
                commentTime: 1582613734000,
                cusId: '',
                orderId: "976"
            }
        }
    },
    computed:{
        ...mapState('weather',['weatherPre'])
        
    },
    created(){
        getWeatherPreInfo(this.location)
    },
    props:{
        location:''
    },
    components:{
        notes,notesMoudal
    },
    methods: {
        ...mapActions('notes',['addOrUpdateNotes','deleteNotes']),
       dateInItems(date){
            return moment(date).format('MMM Do')
        },
        showMoudal(fxDate){
            this.isShown = true
            this.fxDate = fxDate
            // this.addOrUpdateNotes()
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
        addOrUpdateHandler(data){
            this.addOrUpdateNotes(data)
            this.hideMoudal()
        },
        updateHandler(data,fxDate){
            this.notes = data
            this.showMoudal(fxDate)

        },
        deleteHandler(data){
            this.deleteNotes(data)
        }
    }
}
</script>
<style scoped>
.calender{
    width: 100%;
    height: 2400;
}
.calender>table{
    padding-top: 20px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
.calender tr{   
    /* border: 1px solid #5760b4ad; */
    width: 100%;
}
.calender tr>div{
    background-color: #1c2b2d66;
    margin-bottom: 1em;
    width: 100%;
    border-radius: 1em;
    transition: all .2s;
}
.calender tr>div:hover{
    box-shadow: #1c2b2d66 0 0 5px 5px;
}
.daily-info-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
    padding: .4em 1em;
}
.item-middle>div{
    width: 200px;
    height: 70px;
    /* transition: all 2s; */
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
.item-left{
    font-size: 1.4em;
}
.item-right{
    font-size: 1.4em;
    font-weight: bold;
}
.item-right>span{
    font-size: .7em;
    color: #ccc;
}
.add-notes-wrapper{
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    padding-bottom: 1em;
    padding: .4em 1em;
    color: #ccc;
}
.add-note-btn{
    width: 20px;
    height: 20px;
    position: relative;
    /* margin-right: 20px; */
}
.add-note-btn::before{
    content: '';
    width: 2px;
    height: 100%;
    background-color: #ccc;
    position: absolute;
    left: 9px;
    /* transform: rotate(90deg) */
}
.add-note-btn::after{
    content: '';
    width: 100%;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    top: 9px;
    
    /* transform: rotate(90deg) */
}
.item-middle{
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    line-height: 10px;
}
.flow-up-delay-enter-active, .flow-up-delay-leave-active {
  transition: all .4s .3s;
}
.flow-up-delay-enter{
  transform: translateY(50px);
  opacity: 0;
}
.moudal{
    padding: .4em 1em;
}
@media screen and (min-width: 180px) and (max-width: 500px){
    .daily-info-wrapper{
        width: 100%;
        padding: .4em 1em;
        display: block;
    }   
    .calender>table{
        padding-top: 20px;
        width: 98%;
        height: 100%;
        margin: 0 auto;
    
    }
    .item-middle>div{
        width: 150px;
        height: 90px;
    }
    .root{
        width: 98%;
    }
}
</style>