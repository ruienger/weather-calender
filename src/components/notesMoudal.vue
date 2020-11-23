<template>
  <div class="moudalWrapper">
      <div class="moudals">
          <h3 style="text-align:center;color:#333;">{{ entry }}备忘录</h3>
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
        },
        entry(){
            return this.notes.content?'修改':'新建'
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
    .moudals{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }
    .moudalWrapper{
        width: 100%;
        height: 100%;
        transition: all .5s;
        color: #444;
        font-size: 1rem;
        box-sizing: border-box;
        padding: 2em 8em;
    }
    .content{
        color: #222;
    }
    .footer{
        margin-top: 5%;
        padding-left: calc(100% - 60px);
    }
    /* .fade-enter-active, .fade-leave-active{
        transition: all .2s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translateX(10%);
    } */
    @media screen and (min-width: 180px) and (max-width: 500px){
        .moudalWrapper{
            width: 100%;
            padding: .5em 1em;
        }
    }
</style>