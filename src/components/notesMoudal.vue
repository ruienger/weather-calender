<template>
<transition name="fade">
  <div class="moudalWrapper">
      <div class="moudals">
          <div class="moudal-header">
              <div class="titile">添加备忘录</div>
              <div class="close" @click="$emit('close-clicked')"></div>
          </div>
          <div class="content">
              {{fxDate}}
              <el-time-select
                v-model="time"
                :picker-options="{
                    start: '04:30',
                    step: '00:15',
                    end: '23:30'
                }"
                placeholder="选择时间">
                </el-time-select>
              <br><br>
              <el-switch
                v-model="state"
                active-text="紧急"
                inactive-text="非紧急">
                </el-switch>
                <br><br>
                <el-input type="textarea" v-model="notes.content"></el-input>
          </div>
          <div class="footer">
              <el-button type="success" icon="el-icon-check" circle @click="handleData"></el-button>
          </div>
      </div>
  </div>
</transition>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import moment from 'moment'
export default {
    name:'notesShown',
    props:{
        fxDate: String,
        notes: Object
    },
    data(){
        return {
            time: '',
            state: false
        }
    },
    computed:{
        ...mapGetters('user',['userId']),
        status(){
            return this.state?'975':'976'
        },
        fxTime(){
            return moment(this.fxDate +" "+ this.time).unix()*1000
        }
    },
    methods:{
        handleData(){
            let data = {
                content: this.notes.content,
                commentTime: this.fxTime,
                cusId: this.userId,
                orderId: this.status,
            }
            if(this.notes.id){
                data.id = this.notes.id
            }
            this.$emit('ok-clicked',data)
        }
    }
}
</script>

<style scoped>
    .moudalWrapper{
        width: calc(100% - 70px);
        height: 400px;
        position: absolute;
        background-color: #eeeeeeee;
        transition: all .5s;
        top: calc(100% - 450px);
        z-index: 7;
        color: #444;
        font-size: 1rem;
        padding: 0 1em 0 1em;
        box-sizing: border-box;
        margin: 0 auto;
    }
    .moudals{
        height: 400px;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .moudal-header{
        width: 100%;
        display: flex;
        padding-top: 1em;
        padding-bottom: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        border-bottom: 1px solid #222;
    }
    .close{
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 20px;
    }
    .close::before{
        content: '';
        width: 2px;
        height: 100%;
        background-color: #444;
        position: absolute;
        left: 9px;
        transform: rotate(45deg)
    }
    .close::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: #444;
        position: absolute;
        top: 9px;
        transform: rotate(45deg)
    }
    .content{
        padding-top: 20px;
        color: #222;
    }
    .footer{
        margin-bottom: 20px;
        padding-left: calc(100% - 60px);
    }
    .fade-enter-active, .fade-leave-active{
        transition: all .2s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translateX(10%);
    }
    @media screen and (min-width: 180px) and (max-width: 500px){
        .moudalWrapper{
            width: 100%;
        }
        .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translateY(10%);
    }
    }
</style>