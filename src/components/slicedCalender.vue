<template>
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
                            <div class="add-note-btn" @click="addNotes(item.fxDate)"></div>
                        </div>
                    </div>
                    <notes fxDate="item.fxDate"></notes>
                    </div>
                </tr>
                
        </table>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
import getWeatherPreInfo from '@/public/weatherPre'
import notes from '@/components/notes.vue'
import moment from 'moment'

export default {
    name:'slicedCalender',
    data(){
        return {
            date:{},
            shown: false
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
        notes
    },
    methods: {
       dateInItems(date){
            return moment(date).format('MMM Do')
        },
        addNotes(fxDate){

        } 
    }
}
</script>
<style scoped>
.calender{
    /* width: 700; */
    height: 2400;
}
.calender>table{
    padding-top: 20px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    
}
.calender tr{   
    border: 1px solid #5760b4ad;
}
.daily-info-wrapper{
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 1px solid #eee; */
}
.daily-info-wrapper>div{
    width: 200px;
    height: 70px;
    line-height: 50px;
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
.item-right>span{
    font-size: 12px;
    color: #ccc;
}
.add-notes-wrapper{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1em;
}
.add-note-btn{
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 20px;
}
.add-note-btn::before{
    content: '';
    width: 2px;
    height: 100%;
    background-color: #eee;
    position: absolute;
    left: 9px;
    /* transform: rotate(90deg) */
}
.add-note-btn::after{
    content: '';
    width: 100%;
    height: 2px;
    background-color: #eee;
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
</style>