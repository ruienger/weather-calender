<template>
<transition appear name="flow-up">
  <div>
    <!-- {{ notes }} -->
    
    <div class="trigger" @click="changeTrigger"> <span>共 {{ iteratorList.length }} 条</span> <span >{{ trigger }}</span> </div>

      <div :style="'height: '+height+'px'" class="content">
        <div v-for="item in iteratorList" :key="item.id"  
        :class="'item-wrapper '+isDanger(item.orderId)">
          <!-- {{item}} -->
          <p class="notes-time"> <span> 于 {{ time(item.commentTime) }} 添加 </span><span>{{ from(item.commentTime) }}</span></p>
          <div class="notes-content">
            <div>{{ item.content }}</div> 
            <div>
              <el-button icon="el-icon-edit" circle @click="$emit('note-clicked',item)"></el-button>
              <el-popconfirm
                
                title="这是一段内容确定删除吗？"
                @onConfirm="$emit('delete-clicked',item)"
              >
                <el-button type="danger" icon="el-icon-delete" circle slot="reference" style="margin-left:10px"></el-button>
              </el-popconfirm>
              
            </div>
          </div>
        </div>
      </div>
    
  </div>
</transition>  
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'notes',
  props:{
    fxDate: '',
    dangerCode: 0
  },
  data(){
    return {
      trigger: '折叠',
      height: this.heightOffSet
    }
  },
  computed:{
    ...mapState('notes',['notes']),
    iteratorList(){
      let list = this.notes.list.filter((item)=>{
        return moment(item.commentTime).format('YYYY-MM-DD') == moment(this.fxDate).format('YYYY-MM-DD')
      })
      if(this.dangerCode == 0){
        return list
      }else{
        return list.filter((item)=>{
          return item.orderId == this.dangerCode
        })
      }
    },
    heightOffSet(){
      return this.iteratorList.length*140
    },

  },
  methods:{
    from(date){
      return moment(date).from()
    },
    time(date){
      return moment(date).format('hh:mm')
    },
    changeTrigger(){
      this.trigger=='更多'?this.trigger='折叠':this.trigger='更多'
      this.height!=0?this.height=0:this.height=this.heightOffSet
    },
    isDanger(status){
      if(status == '975'){
        return 'danger'
      }else{
        return null
      }
    }
  }
}
</script>

<style scoped>
  .item-wrapper{
    height: 130px;
    width: 90%;
    margin: 0 auto;
    background-color: #e6e6e660;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0 1em;
    color: #eee;
    
  }
  .danger{
    background-color: rgba(163, 68, 68, 0.527);
  }
  .trigger{
    display: flex;
    justify-content: space-between;
    height: 20px;
    padding-bottom: 5px;
    /* border-bottom: 1px solid #eee; */
  }
  .content{
    height: auto;
    overflow: hidden;
    transition: all .7s;
  }
  .notes-content{
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notes-time{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  .flow-up-enter-active, .flow-up-leave-active {
    transition: all .4s .3s;
  }
  .flow-up-delay-enter{
    transform: translateY(50px);
    opacity: 0;

  }
</style>